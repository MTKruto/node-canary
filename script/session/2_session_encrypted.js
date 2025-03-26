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
var _SessionEncrypted_instances, _a, _SessionEncrypted_id, _SessionEncrypted_authKey, _SessionEncrypted_authKeyId, _SessionEncrypted_toAcknowledge, _SessionEncrypted_pendingMessages, _SessionEncrypted_pendingPings, _SessionEncrypted_L, _SessionEncrypted_TGCRYPTO_INITED, _SessionEncrypted_assertNotDisconnected, _SessionEncrypted_invalidateSession, _SessionEncrypted_rejectAllPending, _SessionEncrypted_onMessageFailed, _SessionEncrypted_setServerSalt, _SessionEncrypted_receive, _SessionEncrypted_encryptMessage, _SessionEncrypted_decryptMessage, _SessionEncrypted_startReceiveLoop, _SessionEncrypted_receiveLoopActive, _SessionEncrypted_receiveLoop, _SessionEncrypted_onMessage, _SessionEncrypted_onRpcResult, _SessionEncrypted_onMsgDetailedInfo, _SessionEncrypted_onMsgNewDetailedInfo, _SessionEncrypted_onBadMsgNotification, _SessionEncrypted_onBadServerSalt, _SessionEncrypted_onPong, _SessionEncrypted_onNewSessionCreated, _SessionEncrypted_onMessageContainer, _SessionEncrypted_pingInterval, _SessionEncrypted_startPingLoop, _SessionEncrypted_pingLoopAbortController, _SessionEncrypted_LpingLoop, _SessionEncrypted_pingLoop, _SessionEncrypted_sendPingDelayDisconnect, _SessionEncrypted_resendPendingPing;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionEncrypted = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_tl_writer_js_1 = require("../tl/1_tl_writer.js");
const _0_session_error_js_1 = require("./0_session_error.js");
const _1_session_js_1 = require("./1_session.js");
// global SessionEncrypted ID counter for logs
let id = 0;
const GZIP_PACKED = 0x3072CFA1;
const RPC_RESULT = 0xF35C6D01;
const RPC_ERROR = _2_tl_js_1.Mtproto.schema.definitions["rpc_error"][0];
class SessionEncrypted extends _1_session_js_1.Session {
    constructor(dc, params) {
        super(dc, params);
        _SessionEncrypted_instances.add(this);
        _SessionEncrypted_id.set(this, (0, _1_utilities_js_1.getRandomId)());
        _SessionEncrypted_authKey.set(this, new Uint8Array());
        _SessionEncrypted_authKeyId.set(this, 0n);
        Object.defineProperty(this, "handlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        _SessionEncrypted_toAcknowledge.set(this, new Array());
        _SessionEncrypted_pendingMessages.set(this, new Set());
        _SessionEncrypted_pendingPings.set(this, new Map());
        _SessionEncrypted_L.set(this, void 0);
        _SessionEncrypted_receiveLoopActive.set(this, false);
        //// PING LOOP ////
        _SessionEncrypted_pingInterval.set(this, 56 * _0_deps_js_1.SECOND);
        _SessionEncrypted_pingLoopAbortController.set(this, void 0);
        _SessionEncrypted_LpingLoop.set(this, void 0);
        const L = __classPrivateFieldSet(this, _SessionEncrypted_L, (0, _1_utilities_js_1.getLogger)("SessionEncrypted").client(id++), "f");
        __classPrivateFieldSet(this, _SessionEncrypted_LpingLoop, L.branch("#pingLoop"), "f");
    }
    async setAuthKey(key) {
        const hash = await (0, _1_utilities_js_1.sha1)(key);
        __classPrivateFieldSet(this, _SessionEncrypted_authKeyId, (0, _1_utilities_js_1.bigIntFromBuffer)(hash.slice(-8), true, false), "f");
        __classPrivateFieldSet(this, _SessionEncrypted_authKey, key, "f");
    }
    get authKey() {
        return __classPrivateFieldGet(this, _SessionEncrypted_authKey, "f");
    }
    async connect() {
        if (!this.connected) {
            __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_rejectAllPending).call(this, new _0_errors_js_1.ConnectionError("Not connected."));
        }
        await super.connect();
        if (!__classPrivateFieldGet(_a, _a, "f", _SessionEncrypted_TGCRYPTO_INITED)) {
            await (0, _0_deps_js_1.initTgCrypto)();
            __classPrivateFieldSet(_a, _a, true, "f", _SessionEncrypted_TGCRYPTO_INITED);
        }
        __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_startReceiveLoop).call(this);
        __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_startPingLoop).call(this);
    }
    disconnect() {
        super.disconnect();
        this.state.reset();
        __classPrivateFieldSet(this, _SessionEncrypted_id, (0, _1_utilities_js_1.getRandomId)(), "f");
        __classPrivateFieldGet(this, _SessionEncrypted_pingLoopAbortController, "f")?.abort();
        __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_rejectAllPending).call(this, new _0_errors_js_1.ConnectionError("Not connected."));
    }
    async send(body) {
        if (!this.disconnected && !this.connected) {
            await super.waitUntilConnected();
        }
        __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_assertNotDisconnected).call(this);
        const msg_id = this.state.nextMessageId();
        const seqno = this.state.nextSeqNo(true);
        let message = {
            _: "message",
            msg_id,
            seqno,
            body,
        };
        if (__classPrivateFieldGet(this, _SessionEncrypted_toAcknowledge, "f").length) {
            const ack = {
                _: "message",
                msg_id: this.state.nextMessageId(),
                seqno: this.state.nextSeqNo(false),
                body: _2_tl_js_1.Mtproto.serializeObject({ _: "msgs_ack", msg_ids: __classPrivateFieldGet(this, _SessionEncrypted_toAcknowledge, "f").splice(0, 8192) }),
            };
            message = {
                _: "message",
                msg_id: this.state.nextMessageId(),
                seqno: this.state.nextSeqNo(false),
                body: {
                    _: "msg_container",
                    messages: [message, ack],
                },
            };
        }
        __classPrivateFieldGet(this, _SessionEncrypted_L, "f").out(message);
        const payload = await __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_encryptMessage).call(this, message);
        await this.transport.transport.send(payload);
        __classPrivateFieldGet(this, _SessionEncrypted_pendingMessages, "f").add(msg_id);
        return msg_id;
    }
}
exports.SessionEncrypted = SessionEncrypted;
_a = SessionEncrypted, _SessionEncrypted_id = new WeakMap(), _SessionEncrypted_authKey = new WeakMap(), _SessionEncrypted_authKeyId = new WeakMap(), _SessionEncrypted_toAcknowledge = new WeakMap(), _SessionEncrypted_pendingMessages = new WeakMap(), _SessionEncrypted_pendingPings = new WeakMap(), _SessionEncrypted_L = new WeakMap(), _SessionEncrypted_receiveLoopActive = new WeakMap(), _SessionEncrypted_pingInterval = new WeakMap(), _SessionEncrypted_pingLoopAbortController = new WeakMap(), _SessionEncrypted_LpingLoop = new WeakMap(), _SessionEncrypted_instances = new WeakSet(), _SessionEncrypted_assertNotDisconnected = function _SessionEncrypted_assertNotDisconnected() {
    if (this.disconnected) {
        throw new _0_errors_js_1.ConnectionError("Not connected.");
    }
}, _SessionEncrypted_invalidateSession = async function _SessionEncrypted_invalidateSession(reason) {
    __classPrivateFieldGet(this, _SessionEncrypted_L, "f").debug("invalidating session because of", reason);
    __classPrivateFieldSet(this, _SessionEncrypted_id, (0, _1_utilities_js_1.getRandomId)(), "f");
    this.state.reset();
    this.disconnect();
    await this.connect();
    __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_rejectAllPending).call(this, new _0_session_error_js_1.SessionError("Session invalidated."));
}, _SessionEncrypted_rejectAllPending = function _SessionEncrypted_rejectAllPending(reason) {
    for (const id of __classPrivateFieldGet(this, _SessionEncrypted_pendingMessages, "f")) {
        __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onMessageFailed).call(this, id, reason);
    }
    __classPrivateFieldGet(this, _SessionEncrypted_pendingMessages, "f").clear();
    for (const pendingPing of __classPrivateFieldGet(this, _SessionEncrypted_pendingPings, "f").values()) {
        pendingPing.reject(reason);
    }
    __classPrivateFieldGet(this, _SessionEncrypted_pendingPings, "f").clear();
}, _SessionEncrypted_onMessageFailed = function _SessionEncrypted_onMessageFailed(id, reason) {
    __classPrivateFieldGet(this, _SessionEncrypted_pendingMessages, "f").delete(id);
    const pendingPing = __classPrivateFieldGet(this, _SessionEncrypted_pendingPings, "f").get(id);
    if (pendingPing) {
        __classPrivateFieldGet(this, _SessionEncrypted_pendingPings, "f").delete(id);
        if (reason instanceof _0_session_error_js_1.SessionError) {
            (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_resendPendingPing).call(this, pendingPing));
        }
        else {
            pendingPing.reject(reason);
        }
    }
    else {
        // message was not sent by us
        this.handlers.onMessageFailed?.(id, reason);
    }
}, _SessionEncrypted_setServerSalt = function _SessionEncrypted_setServerSalt(newServerSalt) {
    this.state.serverSalt = newServerSalt;
    this.handlers.onNewServerSalt?.(newServerSalt);
}, _SessionEncrypted_receive = async function _SessionEncrypted_receive() {
    __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_assertNotDisconnected).call(this);
    const buffer = await this.transport.transport.receive();
    if (buffer.length == 4) {
        const int = (0, _1_utilities_js_1.bigIntFromBuffer)(buffer, true, true);
        throw new _0_errors_js_1.TransportError(Number(int));
    }
    try {
        const decrypted = await __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_decryptMessage).call(this, buffer);
        __classPrivateFieldGet(this, _SessionEncrypted_L, "f").in(decrypted);
        return decrypted;
    }
    catch (err) {
        await __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_invalidateSession).call(this, "decryption error");
        throw err;
    }
}, _SessionEncrypted_encryptMessage = async function _SessionEncrypted_encryptMessage(message) {
    const payloadWriter = new _1_tl_writer_js_1.TLWriter();
    payloadWriter.writeInt64(this.state.serverSalt);
    payloadWriter.writeInt64(__classPrivateFieldGet(this, _SessionEncrypted_id, "f"));
    payloadWriter.write(await (0, _2_tl_js_1.serializeMessage)(message));
    payloadWriter.write(new Uint8Array((0, _1_utilities_js_1.mod)(-(payloadWriter.buffer.length + 12), 16) + 12));
    const payload = payloadWriter.buffer;
    const messageKey = (await (0, _1_utilities_js_1.sha256)((0, _0_deps_js_1.concat)([__classPrivateFieldGet(this, _SessionEncrypted_authKey, "f").subarray(88, 120), payload]))).subarray(8, 24);
    const a = await (0, _1_utilities_js_1.sha256)((0, _0_deps_js_1.concat)([messageKey, __classPrivateFieldGet(this, _SessionEncrypted_authKey, "f").subarray(0, 36)]));
    const b = await (0, _1_utilities_js_1.sha256)((0, _0_deps_js_1.concat)([__classPrivateFieldGet(this, _SessionEncrypted_authKey, "f").subarray(40, 76), messageKey]));
    const aesKey = (0, _0_deps_js_1.concat)([a.subarray(0, 8), b.subarray(8, 24), a.subarray(24, 32)]);
    const aesIV = (0, _0_deps_js_1.concat)([b.subarray(0, 8), a.subarray(8, 24), b.subarray(24, 32)]);
    const messageWriter = new _1_tl_writer_js_1.TLWriter();
    messageWriter.writeInt64(__classPrivateFieldGet(this, _SessionEncrypted_authKeyId, "f"));
    messageWriter.write(messageKey);
    messageWriter.write((0, _0_deps_js_1.ige256Encrypt)(payload, aesKey, aesIV));
    return messageWriter.buffer;
}, _SessionEncrypted_decryptMessage = async function _SessionEncrypted_decryptMessage(buffer) {
    const reader = new _2_tl_js_1.TLReader(buffer);
    (0, _0_deps_js_1.assertEquals)(reader.readInt64(false), __classPrivateFieldGet(this, _SessionEncrypted_authKeyId, "f"));
    const messageKey_ = reader.readInt128();
    const messageKey = (0, _1_utilities_js_1.bufferFromBigInt)(messageKey_, 16, true, true);
    const a = await (0, _1_utilities_js_1.sha256)((0, _0_deps_js_1.concat)([messageKey, __classPrivateFieldGet(this, _SessionEncrypted_authKey, "f").subarray(8, 44)]));
    const b = await (0, _1_utilities_js_1.sha256)((0, _0_deps_js_1.concat)([__classPrivateFieldGet(this, _SessionEncrypted_authKey, "f").subarray(48, 84), messageKey]));
    const aesKey = (0, _0_deps_js_1.concat)([a.subarray(0, 8), b.subarray(8, 24), a.subarray(24, 32)]);
    const aesIv = (0, _0_deps_js_1.concat)([b.subarray(0, 8), a.subarray(8, 24), b.subarray(24, 32)]);
    const plaintext = (0, _0_deps_js_1.ige256Decrypt)(reader.buffer, aesKey, aesIv);
    (0, _0_deps_js_1.assertEquals)(plaintext.buffer.byteLength % 4, 0);
    const plainReader = new _2_tl_js_1.TLReader(plaintext);
    const _salt = plainReader.readInt64();
    const _sessionId_ = plainReader.readInt64(false);
    return (0, _2_tl_js_1.deserializeMessage)(plainReader);
}, _SessionEncrypted_startReceiveLoop = function _SessionEncrypted_startReceiveLoop() {
    if (!__classPrivateFieldGet(this, _SessionEncrypted_receiveLoopActive, "f")) {
        (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_receiveLoop).call(this));
    }
}, _SessionEncrypted_receiveLoop = async function _SessionEncrypted_receiveLoop() {
    __classPrivateFieldSet(this, _SessionEncrypted_receiveLoopActive, true, "f");
    try {
        while (this.connected) {
            let message;
            try {
                message = await __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_receive).call(this);
            }
            catch (err) {
                __classPrivateFieldGet(this, _SessionEncrypted_L, "f").error("failed to receive message:", err);
                if (!this.connected) {
                    break;
                }
                else {
                    continue;
                }
            }
            try {
                if (message.body instanceof Uint8Array) {
                    __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onMessage).call(this, message.msg_id, message.body);
                }
                else {
                    __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onMessageContainer).call(this, message.msg_id, message.body);
                }
            }
            catch (err) {
                __classPrivateFieldGet(this, _SessionEncrypted_L, "f").error("failed to handle message:", err);
            }
        }
    }
    finally {
        __classPrivateFieldSet(this, _SessionEncrypted_receiveLoopActive, false, "f");
    }
}, _SessionEncrypted_onMessage = 
//// RECEIVE LOOP HANDLERS ////
async function _SessionEncrypted_onMessage(msgId, body) {
    let reader = new _2_tl_js_1.TLReader(body);
    let id = reader.readInt32(false);
    if (id == GZIP_PACKED) {
        reader = new _2_tl_js_1.TLReader(await (0, _1_utilities_js_1.gunzip)(reader.readBytes()));
        id = reader.readInt32(false);
    }
    if (id == RPC_RESULT) {
        __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onRpcResult).call(this, reader.buffer);
        return;
    }
    if (!_2_tl_js_1.Mtproto.schema.identifierToName[id]) {
        reader.unreadInt32();
        this.handlers.onUpdate?.(reader.buffer);
        return;
    }
    let type;
    try {
        reader.unreadInt32();
        type = await _2_tl_js_1.Mtproto.deserializeType(_2_tl_js_1.X, reader);
    }
    catch (err) {
        __classPrivateFieldGet(this, _SessionEncrypted_L, "f").error("failed to deserialize MTProto type:", err);
        return;
    }
    __classPrivateFieldGet(this, _SessionEncrypted_L, "f").debug("received", (0, _2_tl_js_1.repr)(type));
    if (_2_tl_js_1.Mtproto.is("new_session_created", type)) {
        __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onNewSessionCreated).call(this, msgId, type);
    }
    else if (_2_tl_js_1.Mtproto.is("pong", type)) {
        __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onPong).call(this, msgId, type);
    }
    else if (_2_tl_js_1.Mtproto.is("bad_server_salt", type)) {
        __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onBadServerSalt).call(this, type);
    }
    else if (_2_tl_js_1.Mtproto.is("bad_msg_notification", type)) {
        await __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onBadMsgNotification).call(this, msgId, type);
    }
    else if (_2_tl_js_1.Mtproto.is("msg_detailed_info", type)) {
        __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onMsgDetailedInfo).call(this, type);
    }
    else if (_2_tl_js_1.Mtproto.is("msg_new_detailed_info", type)) {
        __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onMsgNewDetailedInfo).call(this, type);
    }
    else {
        __classPrivateFieldGet(this, _SessionEncrypted_L, "f").debug(`unhandled MTProto type: ${(0, _2_tl_js_1.repr)(type)}`);
    }
}, _SessionEncrypted_onRpcResult = async function _SessionEncrypted_onRpcResult(body) {
    let reader = new _2_tl_js_1.TLReader(body);
    const reqMsgId = reader.readInt64();
    let id = reader.readInt32(false);
    if (id == GZIP_PACKED) {
        reader = new _2_tl_js_1.TLReader(await (0, _1_utilities_js_1.gunzip)(reader.readBytes()));
        id = reader.readInt32(false);
        reader.unreadInt32();
    }
    else {
        reader.unreadInt32();
    }
    if (id == RPC_ERROR) {
        const error = await _2_tl_js_1.Mtproto.deserializeType("rpc_error", reader);
        this.handlers.onRpcError?.(reqMsgId, error);
    }
    else {
        this.handlers.onRpcResult?.(reqMsgId, reader.buffer);
    }
}, _SessionEncrypted_onMsgDetailedInfo = function _SessionEncrypted_onMsgDetailedInfo(msgDetailedInfo) {
    __classPrivateFieldGet(this, _SessionEncrypted_toAcknowledge, "f").push(msgDetailedInfo.answer_msg_id);
}, _SessionEncrypted_onMsgNewDetailedInfo = function _SessionEncrypted_onMsgNewDetailedInfo(msgNewDetailedInfo) {
    __classPrivateFieldGet(this, _SessionEncrypted_toAcknowledge, "f").push(msgNewDetailedInfo.answer_msg_id);
}, _SessionEncrypted_onBadMsgNotification = async function _SessionEncrypted_onBadMsgNotification(msgId, badMsgNotification) {
    let low = false;
    switch (badMsgNotification.error_code) {
        case 16: // message ID too low
            low = true;
        /* falls through */
        case 17: // message ID too high
            this.state.timeDifference = Math.abs((0, _1_utilities_js_1.toUnixTimestamp)(new Date()) - Number(msgId >> 32n));
            if (!low) {
                this.state.timeDifference = -this.state.timeDifference;
                await __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_invalidateSession).call(this, "message ID too high");
                return;
            }
            else {
                __classPrivateFieldGet(this, _SessionEncrypted_L, "f").debug("message ID too low, resending message");
            }
            break;
        case 48: // bad server salt
            // resend
            __classPrivateFieldGet(this, _SessionEncrypted_L, "f").debug("resending message that caused bad_server_salt");
            break;
        default:
            await __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_invalidateSession).call(this, "unexpected bad_msg_notification");
            return;
    }
    __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onMessageFailed).call(this, badMsgNotification.bad_msg_id, new _0_session_error_js_1.SessionError(badMsgNotification._));
}, _SessionEncrypted_onBadServerSalt = function _SessionEncrypted_onBadServerSalt(badServerSalt) {
    __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_setServerSalt).call(this, badServerSalt.new_server_salt);
    __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onMessageFailed).call(this, badServerSalt.bad_msg_id, new _0_session_error_js_1.SessionError(badServerSalt._));
}, _SessionEncrypted_onPong = function _SessionEncrypted_onPong(msgId, pong) {
    __classPrivateFieldGet(this, _SessionEncrypted_toAcknowledge, "f").push(msgId);
    const pendingPing = __classPrivateFieldGet(this, _SessionEncrypted_pendingPings, "f").get(pong.msg_id);
    if (pendingPing) {
        pendingPing.resolve(pong);
        __classPrivateFieldGet(this, _SessionEncrypted_pendingPings, "f").delete(pong.msg_id);
    }
    else {
        // pong is not ours
        this.handlers.onPong?.(pong);
    }
}, _SessionEncrypted_onNewSessionCreated = function _SessionEncrypted_onNewSessionCreated(msgId, newSessionCreated) {
    __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_setServerSalt).call(this, newSessionCreated.server_salt);
    __classPrivateFieldGet(this, _SessionEncrypted_toAcknowledge, "f").push(msgId);
}, _SessionEncrypted_onMessageContainer = function _SessionEncrypted_onMessageContainer(msgId, msgContainer) {
    for (const message of msgContainer.messages) {
        if (message.body instanceof Uint8Array) {
            __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onMessage).call(this, message.msg_id, message.body);
        }
        else {
            __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_onMessageContainer).call(this, msgId, message.body);
        }
    }
}, _SessionEncrypted_startPingLoop = function _SessionEncrypted_startPingLoop() {
    (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_pingLoop).call(this));
}, _SessionEncrypted_pingLoop = async function _SessionEncrypted_pingLoop() {
    __classPrivateFieldGet(this, _SessionEncrypted_pingLoopAbortController, "f")?.abort();
    const controller = __classPrivateFieldSet(this, _SessionEncrypted_pingLoopAbortController, new AbortController(), "f");
    let timeElapsed = 0;
    while (this.connected) {
        const then = Date.now();
        try {
            await (0, _0_deps_js_1.delay)(__classPrivateFieldGet(this, _SessionEncrypted_pingInterval, "f") - timeElapsed, { signal: controller.signal });
            if (!this.connected) {
                continue;
            }
            controller.signal.throwIfAborted();
            await __classPrivateFieldGet(this, _SessionEncrypted_instances, "m", _SessionEncrypted_sendPingDelayDisconnect).call(this, __classPrivateFieldGet(this, _SessionEncrypted_pingInterval, "f") / _0_deps_js_1.SECOND + 15);
            controller.signal.throwIfAborted();
        }
        catch (err) {
            if (err instanceof DOMException && err.name == "AbortError") {
                break;
            }
            else if (!this.connected) {
                break;
            }
            __classPrivateFieldGet(this, _SessionEncrypted_LpingLoop, "f").error(err);
        }
        finally {
            timeElapsed = Date.now() - then;
        }
    }
}, _SessionEncrypted_sendPingDelayDisconnect = async function _SessionEncrypted_sendPingDelayDisconnect(disconnect_delay) {
    const ping_id = (0, _1_utilities_js_1.getRandomId)();
    const call = { _: "ping_delay_disconnect", ping_id, disconnect_delay };
    const messageId = await this.send(_2_tl_js_1.Mtproto.serializeObject(call));
    await new Promise((resolve, reject) => {
        __classPrivateFieldGet(this, _SessionEncrypted_pendingPings, "f").set(messageId, { call, resolve, reject });
    });
}, _SessionEncrypted_resendPendingPing = async function _SessionEncrypted_resendPendingPing(pendingPing) {
    try {
        const messageId = await this.send(_2_tl_js_1.Mtproto.serializeObject(pendingPing.call));
        __classPrivateFieldGet(this, _SessionEncrypted_pendingPings, "f").set(messageId, pendingPing);
    }
    catch (err) {
        pendingPing.reject(err);
    }
};
_SessionEncrypted_TGCRYPTO_INITED = { value: false };
