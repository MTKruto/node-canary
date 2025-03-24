"use strict";
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ClientPlain_publicKeys;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientPlain = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_transport_js_1 = require("../3_transport.js");
const _4_constants_js_1 = require("../4_constants.js");
const _4_session_js_1 = require("../4_session.js");
const _0_client_abstract_js_1 = require("./0_client_abstract.js");
const L = (0, _1_utilities_js_1.getLogger)("ClientPlain");
const LcreateAuthKey = L.branch("createAuthKey");
/**
 * An MTProto client for making plain connections. Most users won't need to interact with this. Used internally for creating authorization keys.
 */
class ClientPlain extends _0_client_abstract_js_1.ClientAbstract {
    constructor(dc, params) {
        super();
        _ClientPlain_publicKeys.set(this, void 0);
        Object.defineProperty(this, "session", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _ClientPlain_publicKeys, params?.publicKeys ?? _4_constants_js_1.PUBLIC_KEYS, "f");
        this.session = new _4_session_js_1.SessionPlain(dc, params);
    }
    async invoke(function_) {
        await this.session.send(_2_tl_js_1.Mtproto.serializeObject(function_));
        const body = await this.session.receive();
        return await _2_tl_js_1.Mtproto.deserializeType(_2_tl_js_1.Mtproto.mustGetReturnType(function_._), body);
    }
    async createAuthKey() {
        const nonce = (0, _1_utilities_js_1.getRandomBigInt)(16, false, true);
        LcreateAuthKey.debug("auth key creation started");
        let resPq = null;
        for (let i = 0; i < 10; i++) {
            try {
                LcreateAuthKey.debug(`req_pq_multi [${i + 1}]`);
                resPq = await this.invoke({ _: "req_pq_multi", nonce });
                (0, _0_deps_js_1.assert)(_2_tl_js_1.Mtproto.is("resPQ", resPq));
                (0, _0_deps_js_1.assertEquals)(resPq.nonce, nonce);
                LcreateAuthKey.debug("got res_pq");
                break;
            }
            catch (err) {
                LcreateAuthKey.debug("req_pq_multi error:", err);
            }
        }
        if (!resPq) {
            (0, _0_deps_js_1.unreachable)();
        }
        const pq_ = (0, _1_utilities_js_1.bigIntFromBuffer)(resPq.pq, false, false);
        LcreateAuthKey.debug(`pq=${pq_}`);
        const [p_, q_] = (0, _1_utilities_js_1.factorize)(pq_);
        LcreateAuthKey.debug("factorized pq");
        LcreateAuthKey.debug(`p=${p_}, q=${q_}`);
        const p = (0, _1_utilities_js_1.bufferFromBigInt)(p_, 4, false, false);
        const q = (0, _1_utilities_js_1.bufferFromBigInt)(q_, 4, false, false);
        let publicKeyFingerprint;
        let publicKey;
        for (const fingerprint of resPq.server_public_key_fingerprints) {
            const maybePublicKey = __classPrivateFieldGet(this, _ClientPlain_publicKeys, "f").find(([k]) => (k == fingerprint));
            if (maybePublicKey) {
                publicKeyFingerprint = fingerprint;
                publicKey = maybePublicKey[1];
                break;
            }
        }
        if (!publicKeyFingerprint || !publicKey) {
            throw new Error("No corresponding public key found");
        }
        const dc = (0, _3_transport_js_1.getDcId)(this.dc, this.cdn);
        const pq = resPq.pq;
        const serverNonce = resPq.server_nonce;
        const newNonce = (0, _1_utilities_js_1.getRandomBigInt)(32, false, true);
        let encryptedData = await (0, _1_utilities_js_1.rsaPad)(_2_tl_js_1.Mtproto.serializeObject({
            _: "p_q_inner_data_dc",
            pq,
            p,
            q,
            dc,
            new_nonce: newNonce,
            nonce,
            server_nonce: serverNonce,
        }), publicKey);
        const dhParams = await this.invoke({
            _: "req_DH_params",
            nonce,
            server_nonce: serverNonce,
            p,
            q,
            public_key_fingerprint: publicKeyFingerprint,
            encrypted_data: encryptedData,
        });
        (0, _0_deps_js_1.assert)(_2_tl_js_1.Mtproto.is("server_DH_params_ok", dhParams));
        LcreateAuthKey.debug("got server_DH_params_ok");
        const newNonce_ = (0, _1_utilities_js_1.bufferFromBigInt)(newNonce, 32, true, true);
        const serverNonce_ = (0, _1_utilities_js_1.bufferFromBigInt)(serverNonce, 16, true, true);
        const tmpAesKey = (0, _0_deps_js_1.concat)([await (0, _1_utilities_js_1.sha1)((0, _0_deps_js_1.concat)([newNonce_, serverNonce_])), (await (0, _1_utilities_js_1.sha1)((0, _0_deps_js_1.concat)([serverNonce_, newNonce_]))).subarray(0, 0 + 12)]);
        const tmpAesIv = (0, _0_deps_js_1.concat)([(await (0, _1_utilities_js_1.sha1)((0, _0_deps_js_1.concat)([serverNonce_, newNonce_]))).subarray(12, 12 + 8), await (0, _1_utilities_js_1.sha1)((0, _0_deps_js_1.concat)([newNonce_, newNonce_])), newNonce_.subarray(0, 0 + 4)]);
        const answerWithHash = (0, _0_deps_js_1.ige256Decrypt)(dhParams.encrypted_answer, tmpAesKey, tmpAesIv);
        const dhInnerData = await _2_tl_js_1.Mtproto.deserializeType("server_DH_inner_data", answerWithHash.slice(20));
        const { g, g_a: gA_, dh_prime: dhPrime_ } = dhInnerData;
        const gA = (0, _1_utilities_js_1.bigIntFromBuffer)(gA_, false, false);
        const dhPrime = (0, _1_utilities_js_1.bigIntFromBuffer)(dhPrime_, false, false);
        const b = (0, _1_utilities_js_1.getRandomBigInt)(256, false, false);
        const gB = (0, _1_utilities_js_1.modExp)(BigInt(g), b, dhPrime);
        const data = _2_tl_js_1.Mtproto.serializeObject({
            _: "client_DH_inner_data",
            nonce,
            server_nonce: serverNonce,
            retry_id: 0n,
            g_b: (0, _1_utilities_js_1.bufferFromBigInt)(gB, 256, false, false),
        });
        let dataWithHash = (0, _0_deps_js_1.concat)([await (0, _1_utilities_js_1.sha1)(data), data]);
        while (dataWithHash.length % 16 != 0) {
            dataWithHash = (0, _0_deps_js_1.concat)([dataWithHash, new Uint8Array(1)]);
        }
        encryptedData = (0, _0_deps_js_1.ige256Encrypt)(dataWithHash, tmpAesKey, tmpAesIv);
        const dhGenOk = await this.invoke({
            _: "set_client_DH_params",
            nonce,
            server_nonce: serverNonce,
            encrypted_data: encryptedData,
        });
        (0, _0_deps_js_1.assert)(_2_tl_js_1.Mtproto.is("dh_gen_ok", dhGenOk));
        LcreateAuthKey.debug("got dh_gen_ok");
        const serverNonceSlice = serverNonce_.subarray(0, 8);
        const salt = newNonce_.subarray(0, 0 + 8).map((v, i) => v ^ serverNonceSlice[i]);
        const authKey_ = (0, _1_utilities_js_1.modExp)(gA, b, dhPrime);
        const authKey = (0, _1_utilities_js_1.bufferFromBigInt)(authKey_, 256, false, false);
        LcreateAuthKey.debug("auth key created");
        return [authKey, (0, _1_utilities_js_1.bigIntFromBuffer)(salt, true, false)];
    }
}
exports.ClientPlain = ClientPlain;
_ClientPlain_publicKeys = new WeakMap();
