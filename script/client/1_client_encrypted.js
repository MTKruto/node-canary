"use strict";
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
var _ClientEncrypted_instances, _ClientEncrypted_authKey, _ClientEncrypted_authKeyId, _ClientEncrypted_sessionId, _ClientEncrypted_state, _ClientEncrypted_toAcknowledge, _ClientEncrypted_recentAcks, _ClientEncrypted_promises, _ClientEncrypted_L, _ClientEncrypted_LreceiveLoop, _ClientEncrypted_Linvoke, _ClientEncrypted_nextMessageId, _ClientEncrypted_nextSeqNo, _ClientEncrypted_sendMessage, _ClientEncrypted_receiveLoop;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEncrypted = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _4_errors_js_1 = require("../4_errors.js");
const _0_client_abstract_js_1 = require("./0_client_abstract.js");
const _0_message_js_1 = require("./0_message.js");
// global ClientEncrypted ID counter for logs
let id = 0;
/**
 * An MTProto client for making encrypted connections. Most users won't need to interact with this. Used internally by `Client`.
 *
 * There are a few things to note:
 *
 * - This is a bare client and it stores nothing.
 * - It expects an authorization key to be present before invoking any method.
 * - Authorization must be set using `setAuthKey`.
 * - Incoming packets that aren't a reply to a specific call are passed to the assigned handlers.
 * - It doesn't uncompress compressed packets.
 */
class ClientEncrypted extends _0_client_abstract_js_1.ClientAbstract {
    constructor(params) {
        super(params);
        _ClientEncrypted_instances.add(this);
        _ClientEncrypted_authKey.set(this, new Uint8Array());
        _ClientEncrypted_authKeyId.set(this, 0n);
        _ClientEncrypted_sessionId.set(this, (0, _1_utilities_js_1.getRandomBigInt)(8, true, false));
        _ClientEncrypted_state.set(this, { serverSalt: 0n, seqNo: 0, messageId: 0n });
        _ClientEncrypted_toAcknowledge.set(this, new Set());
        _ClientEncrypted_recentAcks.set(this, new _1_utilities_js_1.CacheMap(20));
        _ClientEncrypted_promises.set(this, new Map());
        // loggers
        _ClientEncrypted_L.set(this, void 0);
        _ClientEncrypted_LreceiveLoop.set(this, void 0);
        _ClientEncrypted_Linvoke.set(this, void 0);
        // receive loop handlers
        Object.defineProperty(this, "handlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        const L = __classPrivateFieldSet(this, _ClientEncrypted_L, (0, _1_utilities_js_1.getLogger)("ClientEncrypted").client(id++), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_LreceiveLoop, L.branch("receiveLoop"), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_Linvoke, L.branch("invoke"), "f");
    }
    async connect() {
        await super.connect();
        (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_receiveLoop).call(this)); // TODO: ability to join this promise
    }
    async setAuthKey(key) {
        const hash = await (0, _1_utilities_js_1.sha1)(key);
        __classPrivateFieldSet(this, _ClientEncrypted_authKeyId, (0, _1_utilities_js_1.bigIntFromBuffer)(hash.slice(-8), true, false), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_authKey, key, "f");
    }
    get authKey() {
        return __classPrivateFieldGet(this, _ClientEncrypted_authKey, "f");
    }
    set serverSalt(serverSalt) {
        __classPrivateFieldGet(this, _ClientEncrypted_state, "f").serverSalt = serverSalt;
    }
    get serverSalt() {
        return __classPrivateFieldGet(this, _ClientEncrypted_state, "f").serverSalt;
    }
    async invoke(function_, noWait) {
        const messageId = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextMessageId).call(this);
        const message__ = new _2_tl_js_1.Message_(messageId, __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextSeqNo).call(this, true), function_);
        let message_;
        let container = undefined;
        if (__classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").size) {
            const ack = new _2_tl_js_1.Message_(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextMessageId).call(this), __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextSeqNo).call(this, false), new _2_tl_js_1.types.Msgs_ack({ msg_ids: [...__classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f")] }));
            __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").set(ack.id, { container, message: ack });
            message_ = new _2_tl_js_1.MessageContainer(container = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextMessageId).call(this), __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextSeqNo).call(this, false), [message__, ack]);
        }
        else {
            message_ = message__;
        }
        await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, message_);
        __classPrivateFieldGet(this, _ClientEncrypted_Linvoke, "f").debug("invoked", function_[_2_tl_js_1.name]);
        if (noWait) {
            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").set(messageId, {
                container,
                message: message__,
                call: function_,
            });
            return;
        }
        return await new Promise((resolve, reject) => {
            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").set(messageId, { container, message: message__, resolve, reject, call: function_ });
        }).then((v) => v);
    }
}
exports.ClientEncrypted = ClientEncrypted;
_ClientEncrypted_authKey = new WeakMap(), _ClientEncrypted_authKeyId = new WeakMap(), _ClientEncrypted_sessionId = new WeakMap(), _ClientEncrypted_state = new WeakMap(), _ClientEncrypted_toAcknowledge = new WeakMap(), _ClientEncrypted_recentAcks = new WeakMap(), _ClientEncrypted_promises = new WeakMap(), _ClientEncrypted_L = new WeakMap(), _ClientEncrypted_LreceiveLoop = new WeakMap(), _ClientEncrypted_Linvoke = new WeakMap(), _ClientEncrypted_instances = new WeakSet(), _ClientEncrypted_nextMessageId = function _ClientEncrypted_nextMessageId() {
    return __classPrivateFieldGet(this, _ClientEncrypted_state, "f").messageId = (0, _0_message_js_1.getMessageId)(__classPrivateFieldGet(this, _ClientEncrypted_state, "f").messageId);
}, _ClientEncrypted_nextSeqNo = function _ClientEncrypted_nextSeqNo(contentRelated) {
    let seqNo = __classPrivateFieldGet(this, _ClientEncrypted_state, "f").seqNo * 2;
    if (contentRelated) {
        seqNo++;
        __classPrivateFieldGet(this, _ClientEncrypted_state, "f").seqNo++;
    }
    return seqNo;
}, _ClientEncrypted_sendMessage = async function _ClientEncrypted_sendMessage(message) {
    const payload = await (0, _0_message_js_1.encryptMessage)(message, __classPrivateFieldGet(this, _ClientEncrypted_authKey, "f"), __classPrivateFieldGet(this, _ClientEncrypted_authKeyId, "f"), __classPrivateFieldGet(this, _ClientEncrypted_state, "f").serverSalt, __classPrivateFieldGet(this, _ClientEncrypted_sessionId, "f"));
    await this.transport.transport.send(payload);
    __classPrivateFieldGet(this, _ClientEncrypted_L, "f").out(message);
    __classPrivateFieldGet(this, _ClientEncrypted_L, "f").outBin(payload);
}, _ClientEncrypted_receiveLoop = async function _ClientEncrypted_receiveLoop() {
    if (!this.transport) {
        (0, _0_deps_js_1.unreachable)();
    }
    while (this.connected) {
        try {
            const buffer = await this.transport.transport.receive();
            __classPrivateFieldGet(this, _ClientEncrypted_L, "f").inBin(buffer);
            let decrypted;
            try {
                decrypted = await ((0, _0_message_js_1.decryptMessage)(buffer, __classPrivateFieldGet(this, _ClientEncrypted_authKey, "f"), __classPrivateFieldGet(this, _ClientEncrypted_authKeyId, "f"), __classPrivateFieldGet(this, _ClientEncrypted_sessionId, "f")));
                __classPrivateFieldGet(this, _ClientEncrypted_L, "f").in(decrypted);
            }
            catch (err) {
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").error("failed to decrypt message:", err);
                (0, _1_utilities_js_1.drop)(this.handlers.error?.(err, "decryption"));
                continue;
            }
            const messages = decrypted instanceof _2_tl_js_1.MessageContainer ? decrypted.messages : [decrypted];
            for (const message of messages) {
                let body = message.body;
                if (body instanceof _2_tl_js_1.types.Gzip_packed) {
                    body = new _2_tl_js_1.TLReader((0, _0_deps_js_1.gunzip)(body.packed_data)).readObject();
                }
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("received", (typeof body === "object" && _2_tl_js_1.name in body) ? body[_2_tl_js_1.name] : body.constructor.name);
                if (body instanceof _2_tl_js_1.types._Updates || body instanceof _2_tl_js_1.types._Update) {
                    (0, _1_utilities_js_1.drop)(this.handlers.updates?.(body, null));
                }
                else if (body instanceof _2_tl_js_1.types.New_session_created) {
                    this.serverSalt = body.server_salt;
                    (0, _1_utilities_js_1.drop)(this.handlers.serverSaltReassigned?.(this.serverSalt));
                }
                else if (message.body instanceof _2_tl_js_1.RPCResult) {
                    let result = message.body.result;
                    if (result instanceof _2_tl_js_1.types.Gzip_packed) {
                        result = new _2_tl_js_1.TLReader((0, _0_deps_js_1.gunzip)(result.packed_data)).readObject();
                    }
                    if (result instanceof _2_tl_js_1.types.Rpc_error) {
                        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("RPCResult:", result.error_code, result.error_message);
                    }
                    else {
                        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("RPCResult:", (typeof result === "object" && _2_tl_js_1.name in result) ? result[_2_tl_js_1.name] : result.constructor.name);
                    }
                    const messageId = message.body.messageId;
                    const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(messageId);
                    const resolvePromise = () => {
                        if (promise) {
                            if (result instanceof _2_tl_js_1.types.Rpc_error) {
                                promise.reject?.((0, _4_errors_js_1.upgradeInstance)(result, promise.call));
                            }
                            else {
                                promise.resolve?.(result);
                            }
                            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(messageId);
                        }
                    };
                    if (result instanceof _2_tl_js_1.types._Updates || result instanceof _2_tl_js_1.types._Update) {
                        (0, _1_utilities_js_1.drop)(this.handlers.updates?.(result, promise?.call ?? null, resolvePromise));
                    }
                    else {
                        (0, _1_utilities_js_1.drop)(this.handlers.result?.(result, resolvePromise));
                    }
                }
                else if (message.body instanceof _2_tl_js_1.types.Pong) {
                    const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(message.body.msg_id);
                    if (promise) {
                        promise.resolve?.(message.body);
                        __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(message.body.msg_id);
                    }
                }
                else if (message.body instanceof _2_tl_js_1.types.Bad_server_salt) {
                    __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("server salt reassigned");
                    this.serverSalt = message.body.new_server_salt;
                    (0, _1_utilities_js_1.drop)(this.handlers.serverSaltReassigned?.(this.serverSalt));
                    const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(message.body.bad_msg_id);
                    const ack = __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").get(message.body.bad_msg_id);
                    if (promise) {
                        (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, promise.message));
                    }
                    else if (ack) {
                        (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, ack.message));
                    }
                    else {
                        for (const promise of __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").values()) {
                            if (promise.container && promise.container == message.body.bad_msg_id) {
                                (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, promise.message));
                            }
                        }
                        for (const ack of __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").values()) {
                            if (ack.container && ack.container == message.body.bad_msg_id) {
                                (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, ack.message));
                            }
                        }
                    }
                }
                __classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").add(message.id);
            }
        }
        catch (err) {
            if (!this.connected) {
                break;
            }
            else if (err instanceof _2_tl_js_1.TLError) {
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").error("failed to deserialize:", err);
                (0, _1_utilities_js_1.drop)(this.handlers.error?.(err, "deserialization"));
            }
            else {
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").error("unexpected error:", err);
            }
        }
    }
    if (!this.connected) {
        for (const [key, { reject }] of __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").entries()) {
            reject?.(new _0_errors_js_1.ConnectionError("Connection was closed"));
            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(key);
        }
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
};
