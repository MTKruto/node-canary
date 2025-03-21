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
var _ClientEncrypted_instances, _ClientEncrypted_authKey, _ClientEncrypted_authKeyId, _ClientEncrypted_sessionId, _ClientEncrypted_state, _ClientEncrypted_shouldInvalidateSession, _ClientEncrypted_toAcknowledge, _ClientEncrypted_recentAcks, _ClientEncrypted_promises, _ClientEncrypted_loopActive, _ClientEncrypted_L, _ClientEncrypted_LreceiveLoop, _ClientEncrypted_Linvoke, _ClientEncrypted_LpingLoop, _ClientEncrypted_reconnecting, _ClientEncrypted_reconnect, _ClientEncrypted_timeDifference, _ClientEncrypted_nextMessageId, _ClientEncrypted_nextSeqNo, _ClientEncrypted_invalidateSession, _ClientEncrypted_sendMessage, _ClientEncrypted_receiveLoop, _ClientEncrypted_handleIncomingMessage, _ClientEncrypted_handleRpcResult, _ClientEncrypted_handleType, _ClientEncrypted_pingLoopAbortController, _ClientEncrypted_pingInterval, _ClientEncrypted_startPingLoop, _ClientEncrypted_pingLoop, _ClientEncrypted_connectionInsuranceLoopStarted, _ClientEncrypted_connectionInsuranceLoopAbortController, _ClientEncrypted_startConnectionInsuranceLoop, _ClientEncrypted_connectionInsuranceLoop;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEncrypted = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _4_errors_js_1 = require("../4_errors.js");
const _0_client_abstract_js_1 = require("./0_client_abstract.js");
const _0_message_js_1 = require("./0_message.js");
const COMPRESSION_THRESHOLD = 1024;
// global ClientEncrypted ID counter for logs
let id = 0;
const RPC_ERROR = _2_tl_js_1.Api.schema.definitions["rpc_error"][0];
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
        _ClientEncrypted_sessionId.set(this, 0n);
        _ClientEncrypted_state.set(this, { serverSalt: 0n, seqNo: 0, messageId: 0n });
        _ClientEncrypted_shouldInvalidateSession.set(this, true);
        _ClientEncrypted_toAcknowledge.set(this, new Array());
        _ClientEncrypted_recentAcks.set(this, new _1_utilities_js_1.CacheMap(20));
        _ClientEncrypted_promises.set(this, new Map());
        _ClientEncrypted_loopActive.set(this, true);
        // loggers
        _ClientEncrypted_L.set(this, void 0);
        _ClientEncrypted_LreceiveLoop.set(this, void 0);
        _ClientEncrypted_Linvoke.set(this, void 0);
        _ClientEncrypted_LpingLoop.set(this, void 0);
        // receive loop handlers
        Object.defineProperty(this, "handlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        _ClientEncrypted_reconnecting.set(this, false);
        _ClientEncrypted_timeDifference.set(this, 0);
        //// PING LOOP ////
        _ClientEncrypted_pingLoopAbortController.set(this, null);
        _ClientEncrypted_pingInterval.set(this, 56 * _0_deps_js_1.SECOND);
        //// CONNECTION INSURANCE LOOP ////
        _ClientEncrypted_connectionInsuranceLoopStarted.set(this, false);
        _ClientEncrypted_connectionInsuranceLoopAbortController.set(this, null);
        const L = __classPrivateFieldSet(this, _ClientEncrypted_L, (0, _1_utilities_js_1.getLogger)("ClientEncrypted").client(id++), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_LreceiveLoop, L.branch("receiveLoop"), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_Linvoke, L.branch("invoke"), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_LpingLoop, L.branch("pingLoop"), "f");
        this.stateChangeHandler = () => {
            (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_reconnect).call(this));
        };
    }
    async connect() {
        await super.connect();
        if (__classPrivateFieldGet(this, _ClientEncrypted_shouldInvalidateSession, "f")) {
            __classPrivateFieldSet(this, _ClientEncrypted_sessionId, (0, _1_utilities_js_1.getRandomBigInt)(8, true, false), "f");
            __classPrivateFieldSet(this, _ClientEncrypted_state, { serverSalt: 0n, seqNo: 0, messageId: 0n }, "f");
            __classPrivateFieldSet(this, _ClientEncrypted_shouldInvalidateSession, false, "f");
        }
        (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_receiveLoop).call(this)); // TODO: ability to join this promise
        __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_startConnectionInsuranceLoop).call(this);
        __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_startPingLoop).call(this);
    }
    async disconnect() {
        await super.disconnect();
        __classPrivateFieldGet(this, _ClientEncrypted_pingLoopAbortController, "f")?.abort();
        __classPrivateFieldGet(this, _ClientEncrypted_connectionInsuranceLoopAbortController, "f")?.abort();
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
        let body = (0, _2_tl_js_1.serializeTelegramObject)(function_);
        if (body.length > COMPRESSION_THRESHOLD) {
            body = new _2_tl_js_1.TLWriter()
                .writeInt32(_2_tl_js_1.GZIP_PACKED, false)
                .writeBytes(await (0, _1_utilities_js_1.gzip)(body))
                .buffer;
        }
        let message_ = {
            _: "message",
            msg_id: messageId,
            seqno: __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextSeqNo).call(this, true),
            body,
        };
        const message__ = message_;
        let container = undefined;
        if (__classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").length) {
            const ack = {
                _: "message",
                msg_id: __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextMessageId).call(this),
                seqno: __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextSeqNo).call(this, false),
                body: (0, _2_tl_js_1.serializeTelegramObject)({ _: "msgs_ack", msg_ids: __classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").splice(0, 8192) }),
            };
            __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").set(ack.msg_id, { container, message: ack });
            message_ = {
                _: "message",
                msg_id: container = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextMessageId).call(this),
                seqno: __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextSeqNo).call(this, false),
                body: {
                    _: "msg_container",
                    messages: [message_, ack],
                },
            };
        }
        await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, message_);
        __classPrivateFieldGet(this, _ClientEncrypted_Linvoke, "f").debug("invoked", function_._);
        if (noWait) {
            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").set(messageId, {
                container,
                message: message_,
                call: function_,
            });
            return;
        }
        return (await new Promise((resolve, reject) => {
            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").set(messageId, { container, message: message__, resolve, reject, call: function_ });
        }));
    }
}
exports.ClientEncrypted = ClientEncrypted;
_ClientEncrypted_authKey = new WeakMap(), _ClientEncrypted_authKeyId = new WeakMap(), _ClientEncrypted_sessionId = new WeakMap(), _ClientEncrypted_state = new WeakMap(), _ClientEncrypted_shouldInvalidateSession = new WeakMap(), _ClientEncrypted_toAcknowledge = new WeakMap(), _ClientEncrypted_recentAcks = new WeakMap(), _ClientEncrypted_promises = new WeakMap(), _ClientEncrypted_loopActive = new WeakMap(), _ClientEncrypted_L = new WeakMap(), _ClientEncrypted_LreceiveLoop = new WeakMap(), _ClientEncrypted_Linvoke = new WeakMap(), _ClientEncrypted_LpingLoop = new WeakMap(), _ClientEncrypted_reconnecting = new WeakMap(), _ClientEncrypted_timeDifference = new WeakMap(), _ClientEncrypted_pingLoopAbortController = new WeakMap(), _ClientEncrypted_pingInterval = new WeakMap(), _ClientEncrypted_connectionInsuranceLoopStarted = new WeakMap(), _ClientEncrypted_connectionInsuranceLoopAbortController = new WeakMap(), _ClientEncrypted_instances = new WeakSet(), _ClientEncrypted_reconnect = async function _ClientEncrypted_reconnect() {
    if (this.connected) {
        return;
    }
    if (this.disconnected) {
        __classPrivateFieldGet(this, _ClientEncrypted_L, "f").debug("not reconnecting");
        return;
    }
    if (__classPrivateFieldGet(this, _ClientEncrypted_reconnecting, "f")) {
        return;
    }
    __classPrivateFieldSet(this, _ClientEncrypted_reconnecting, true, "f");
    try {
        let delay = 5;
        while (!this.connected) {
            __classPrivateFieldGet(this, _ClientEncrypted_L, "f").debug("reconnecting");
            __classPrivateFieldGet(this, _ClientEncrypted_pingLoopAbortController, "f")?.abort();
            try {
                await this.connect();
                __classPrivateFieldGet(this, _ClientEncrypted_L, "f").debug("reconnected");
                break;
            }
            catch (err) {
                if (delay < 15) {
                    delay += 5;
                }
                __classPrivateFieldGet(this, _ClientEncrypted_L, "f").debug(`failed to reconnect, retrying in ${delay}:`, err);
            }
            await new Promise((r) => setTimeout(r, delay * _0_deps_js_1.SECOND));
        }
    }
    finally {
        __classPrivateFieldSet(this, _ClientEncrypted_reconnecting, false, "f");
    }
}, _ClientEncrypted_nextMessageId = function _ClientEncrypted_nextMessageId() {
    return __classPrivateFieldGet(this, _ClientEncrypted_state, "f").messageId = (0, _0_message_js_1.getMessageId)(__classPrivateFieldGet(this, _ClientEncrypted_state, "f").messageId, __classPrivateFieldGet(this, _ClientEncrypted_timeDifference, "f"));
}, _ClientEncrypted_nextSeqNo = function _ClientEncrypted_nextSeqNo(contentRelated) {
    let seqNo = __classPrivateFieldGet(this, _ClientEncrypted_state, "f").seqNo * 2;
    if (contentRelated) {
        seqNo++;
        __classPrivateFieldGet(this, _ClientEncrypted_state, "f").seqNo++;
    }
    return seqNo;
}, _ClientEncrypted_invalidateSession = async function _ClientEncrypted_invalidateSession() {
    await this.transport?.transport.deinitialize();
    await this.transport?.connection.close();
    __classPrivateFieldSet(this, _ClientEncrypted_shouldInvalidateSession, true, "f");
}, _ClientEncrypted_sendMessage = async function _ClientEncrypted_sendMessage(message) {
    const payload = await (0, _0_message_js_1.encryptMessage)(message, __classPrivateFieldGet(this, _ClientEncrypted_authKey, "f"), __classPrivateFieldGet(this, _ClientEncrypted_authKeyId, "f"), __classPrivateFieldGet(this, _ClientEncrypted_state, "f").serverSalt, __classPrivateFieldGet(this, _ClientEncrypted_sessionId, "f"));
    if (!this.transport) {
        throw new _0_errors_js_1.ConnectionError("Not connected.");
    }
    await this.transport.transport.send(payload);
    __classPrivateFieldGet(this, _ClientEncrypted_L, "f").out(message);
    __classPrivateFieldGet(this, _ClientEncrypted_L, "f").outBin(payload);
}, _ClientEncrypted_receiveLoop = 
//// RECEIVE LOOP ////
async function _ClientEncrypted_receiveLoop() {
    if (!this.transport) {
        (0, _0_deps_js_1.unreachable)();
    }
    for (const [key, { reject }] of __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").entries()) {
        reject?.(new _0_errors_js_1.ConnectionError("Connection was closed"));
        __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(key);
    }
    __classPrivateFieldSet(this, _ClientEncrypted_loopActive, true, "f");
    while (this.connected && __classPrivateFieldGet(this, _ClientEncrypted_loopActive, "f")) {
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
            const messages = decrypted.body instanceof Uint8Array ? [decrypted] : decrypted.body.messages.map((v) => v);
            for (const message of messages) {
                if (!(message.body instanceof Uint8Array)) {
                    (0, _0_deps_js_1.unreachable)();
                }
                await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_handleIncomingMessage).call(this, message);
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
}, _ClientEncrypted_handleIncomingMessage = async function _ClientEncrypted_handleIncomingMessage(message) {
    const body = message.body;
    if (!(body instanceof Uint8Array)) {
        (0, _0_deps_js_1.unreachable)();
    }
    let reader = new _2_tl_js_1.TLReader(body);
    const id = reader.readInt32(false);
    if (id == _2_tl_js_1.GZIP_PACKED) {
        reader = new _2_tl_js_1.TLReader(await (0, _1_utilities_js_1.gunzip)(reader.readBytes()));
    }
    else if (id == _2_tl_js_1.RPC_RESULT) {
        await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_handleRpcResult).call(this, reader);
    }
    else {
        reader.unreadInt32();
        await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_handleType).call(this, message, reader);
        return;
    }
    __classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").push(message.msg_id);
}, _ClientEncrypted_handleRpcResult = async function _ClientEncrypted_handleRpcResult(reader) {
    const messageId = reader.readInt64();
    const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(messageId);
    if (!promise) {
        return;
    }
    let id = reader.readInt32(false);
    if (id == _2_tl_js_1.GZIP_PACKED) {
        reader = new _2_tl_js_1.TLReader(await (0, _1_utilities_js_1.gunzip)(reader.readBytes()));
        id = reader.readInt32(false);
        reader.unreadInt32();
    }
    else {
        reader.unreadInt32();
    }
    // deno-lint-ignore no-explicit-any
    let call = promise?.call ?? null;
    while ((0, _2_tl_js_1.isGenericFunction)(call)) {
        call = call.query;
    }
    // deno-lint-ignore no-explicit-any
    let result;
    if (id == RPC_ERROR) {
        result = await (0, _2_tl_js_1.deserializeTelegramType)("rpc_error", reader);
        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("RPCResult:", result.error_code, result.error_message);
    }
    else {
        result = await (0, _2_tl_js_1.deserializeTelegramType)((0, _2_tl_js_1.mustGetReturnType)(call._), reader);
        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("RPCResult:", Array.isArray(result) ? "Array" : typeof result === "object" ? result._ : result);
    }
    const resolvePromise = () => {
        if ((0, _2_tl_js_1.is)("rpc_error", result)) {
            promise.reject?.((0, _4_errors_js_1.constructTelegramError)(result, promise.call));
        }
        else {
            promise.resolve?.(result);
        }
        __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(messageId);
    };
    if ((0, _2_tl_js_1.isOfEnum)("Updates", result) || (0, _2_tl_js_1.isOfEnum)("Update", result)) {
        (0, _1_utilities_js_1.drop)(this.handlers.updates?.(result, call, resolvePromise));
    }
    else {
        (0, _1_utilities_js_1.drop)(this.handlers.result?.(result, resolvePromise));
    }
}, _ClientEncrypted_handleType = async function _ClientEncrypted_handleType(message, reader) {
    const body = await (0, _2_tl_js_1.deserializeTelegramType)(_2_tl_js_1.X, reader);
    __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("received", (0, _2_tl_js_1.repr)(body));
    let sendAck = true;
    if ((0, _2_tl_js_1.isOfEnum)("Updates", body) || (0, _2_tl_js_1.isOfEnum)("Update", body)) {
        (0, _1_utilities_js_1.drop)(this.handlers.updates?.(body, null));
    }
    else if ((0, _2_tl_js_1.is)("new_session_created", body)) {
        this.serverSalt = body.server_salt;
        (0, _1_utilities_js_1.drop)(this.handlers.serverSaltReassigned?.(this.serverSalt));
        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("new session created with ID", body.unique_id);
    }
    else if ((0, _2_tl_js_1.is)("pong", body)) {
        const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(body.msg_id);
        if (promise) {
            promise.resolve?.(body);
            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(body.msg_id);
        }
    }
    else if ((0, _2_tl_js_1.is)("bad_server_salt", body)) {
        sendAck = false;
        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("server salt reassigned");
        this.serverSalt = body.new_server_salt;
        (0, _1_utilities_js_1.drop)(this.handlers.serverSaltReassigned?.(this.serverSalt));
        const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(body.bad_msg_id);
        const ack = __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").get(body.bad_msg_id);
        if (promise) {
            (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, promise.message));
        }
        else if (ack) {
            (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, ack.message));
        }
        else {
            for (const promise of __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").values()) {
                if (promise.container && promise.container == body.bad_msg_id) {
                    (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, promise.message));
                }
            }
            for (const ack of __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").values()) {
                if (ack.container && ack.container == body.bad_msg_id) {
                    (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, ack.message));
                }
            }
        }
    }
    else if ((0, _2_tl_js_1.is)("bad_msg_notification", body)) {
        sendAck = false;
        let low = false;
        switch (body.error_code) {
            case 16: // message ID too low
                low = true;
            /* falls through */
            case 17: // message ID too high
                __classPrivateFieldSet(this, _ClientEncrypted_timeDifference, Math.abs((0, _1_utilities_js_1.toUnixTimestamp)(new Date()) - Number(message.msg_id >> 32n)), "f");
                if (!low) {
                    __classPrivateFieldSet(this, _ClientEncrypted_timeDifference, -__classPrivateFieldGet(this, _ClientEncrypted_timeDifference, "f"), "f");
                    __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("message ID too high, invalidating session");
                    await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_invalidateSession).call(this);
                    __classPrivateFieldSet(this, _ClientEncrypted_loopActive, false, "f");
                }
                else {
                    __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("message ID too low, resending message");
                }
                break;
            case 48: // bad server salt
                // resend
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("resending message that caused bad_server_salt");
                break;
            default:
                await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_invalidateSession).call(this);
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("invalidating session because of unexpected bad_msg_notification:", body.error_code);
                __classPrivateFieldSet(this, _ClientEncrypted_loopActive, false, "f");
        }
        const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(body.bad_msg_id);
        if (promise) {
            promise.reject?.(body);
            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(body.bad_msg_id);
        }
    }
    else if ((0, _2_tl_js_1.isOneOf)(["msg_detailed_info", "msg_new_detailed_info"], body)) {
        sendAck = false;
        __classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").push(body.answer_msg_id);
    }
    if (sendAck) {
        __classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").push(message.msg_id);
    }
}, _ClientEncrypted_startPingLoop = function _ClientEncrypted_startPingLoop() {
    (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_pingLoop).call(this));
}, _ClientEncrypted_pingLoop = async function _ClientEncrypted_pingLoop() {
    if (this.cdn) {
        return;
    }
    __classPrivateFieldSet(this, _ClientEncrypted_pingLoopAbortController, new AbortController(), "f");
    let timeElapsed = 0;
    while (this.connected) {
        const then = Date.now();
        try {
            await new Promise((resolve, reject) => {
                const timeout = setTimeout(resolve, __classPrivateFieldGet(this, _ClientEncrypted_pingInterval, "f") - timeElapsed);
                __classPrivateFieldGet(this, _ClientEncrypted_pingLoopAbortController, "f").signal.onabort = () => {
                    reject(__classPrivateFieldGet(this, _ClientEncrypted_pingLoopAbortController, "f")?.signal.reason);
                    clearTimeout(timeout);
                };
            });
            if (!this.connected) {
                continue;
            }
            __classPrivateFieldGet(this, _ClientEncrypted_pingLoopAbortController, "f").signal.throwIfAborted();
            await this.invoke({ _: "ping_delay_disconnect", ping_id: (0, _1_utilities_js_1.getRandomId)(), disconnect_delay: __classPrivateFieldGet(this, _ClientEncrypted_pingInterval, "f") / _0_deps_js_1.SECOND + 15 });
            __classPrivateFieldGet(this, _ClientEncrypted_pingLoopAbortController, "f").signal.throwIfAborted();
        }
        catch (err) {
            if (err instanceof DOMException && err.name == "AbortError") {
                __classPrivateFieldSet(this, _ClientEncrypted_pingLoopAbortController, new AbortController(), "f");
            }
            if (!this.connected) {
                continue;
            }
            __classPrivateFieldGet(this, _ClientEncrypted_LpingLoop, "f").error(err);
        }
        finally {
            timeElapsed = Date.now() - then;
        }
    }
}, _ClientEncrypted_startConnectionInsuranceLoop = function _ClientEncrypted_startConnectionInsuranceLoop() {
    (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_connectionInsuranceLoop).call(this));
}, _ClientEncrypted_connectionInsuranceLoop = async function _ClientEncrypted_connectionInsuranceLoop() {
    if (__classPrivateFieldGet(this, _ClientEncrypted_connectionInsuranceLoopStarted, "f")) {
        return;
    }
    __classPrivateFieldSet(this, _ClientEncrypted_connectionInsuranceLoopAbortController, new AbortController(), "f");
    __classPrivateFieldSet(this, _ClientEncrypted_connectionInsuranceLoopStarted, true, "f");
    while (!this.disconnected) {
        try {
            await new Promise((resolve, reject) => {
                const timeout = setTimeout(resolve, 10 * _0_deps_js_1.SECOND);
                __classPrivateFieldGet(this, _ClientEncrypted_connectionInsuranceLoopAbortController, "f").signal.onabort = () => {
                    reject(__classPrivateFieldGet(this, _ClientEncrypted_connectionInsuranceLoopAbortController, "f")?.signal.reason);
                    clearTimeout(timeout);
                };
            });
        }
        catch {
            break;
        }
        if (!this.connected) {
            (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_reconnect).call(this));
        }
    }
    __classPrivateFieldSet(this, _ClientEncrypted_connectionInsuranceLoopStarted, false, "f");
};
