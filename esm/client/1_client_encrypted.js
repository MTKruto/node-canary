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
import { SECOND, unreachable } from "../0_deps.js";
import { ConnectionError } from "../0_errors.js";
import { bigIntFromBuffer, CacheMap, drop, getLogger, getRandomBigInt, getRandomId, gunzip, gzip, sha1, toUnixTimestamp } from "../1_utilities.js";
import { Api, GZIP_PACKED, is, isGenericFunction, isOfEnum, isOneOf, mustGetReturnType, repr, RPC_RESULT, TLError, TLReader, X } from "../2_tl.js";
import { constructTelegramError } from "../4_errors.js";
import { TLWriter } from "../tl/2_tl_writer.js";
import { ClientAbstract } from "./0_client_abstract.js";
import { decryptMessage, encryptMessage, getMessageId } from "./0_message.js";
const COMPRESSION_THRESHOLD = 1024;
// global ClientEncrypted ID counter for logs
let id = 0;
const RPC_ERROR = Api.schema["rpc_error"][0];
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
export class ClientEncrypted extends ClientAbstract {
    constructor(params) {
        super(params);
        _ClientEncrypted_instances.add(this);
        _ClientEncrypted_authKey.set(this, new Uint8Array());
        _ClientEncrypted_authKeyId.set(this, 0n);
        _ClientEncrypted_sessionId.set(this, 0n);
        _ClientEncrypted_state.set(this, { serverSalt: 0n, seqNo: 0, messageId: 0n });
        _ClientEncrypted_shouldInvalidateSession.set(this, true);
        _ClientEncrypted_toAcknowledge.set(this, new Array());
        _ClientEncrypted_recentAcks.set(this, new CacheMap(20));
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
        _ClientEncrypted_pingInterval.set(this, 56 * SECOND);
        //// CONNECTION INSURANCE LOOP ////
        _ClientEncrypted_connectionInsuranceLoopStarted.set(this, false);
        _ClientEncrypted_connectionInsuranceLoopAbortController.set(this, null);
        const L = __classPrivateFieldSet(this, _ClientEncrypted_L, getLogger("ClientEncrypted").client(id++), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_LreceiveLoop, L.branch("receiveLoop"), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_Linvoke, L.branch("invoke"), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_LpingLoop, L.branch("pingLoop"), "f");
        this.stateChangeHandler = () => {
            drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_reconnect).call(this));
        };
    }
    async connect() {
        await super.connect();
        if (__classPrivateFieldGet(this, _ClientEncrypted_shouldInvalidateSession, "f")) {
            __classPrivateFieldSet(this, _ClientEncrypted_sessionId, getRandomBigInt(8, true, false), "f");
            __classPrivateFieldSet(this, _ClientEncrypted_state, { serverSalt: 0n, seqNo: 0, messageId: 0n }, "f");
            __classPrivateFieldSet(this, _ClientEncrypted_shouldInvalidateSession, false, "f");
        }
        drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_receiveLoop).call(this)); // TODO: ability to join this promise
        __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_startConnectionInsuranceLoop).call(this);
        __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_startPingLoop).call(this);
    }
    async disconnect() {
        await super.disconnect();
        __classPrivateFieldGet(this, _ClientEncrypted_pingLoopAbortController, "f")?.abort();
        __classPrivateFieldGet(this, _ClientEncrypted_connectionInsuranceLoopAbortController, "f")?.abort();
    }
    async setAuthKey(key) {
        const hash = await sha1(key);
        __classPrivateFieldSet(this, _ClientEncrypted_authKeyId, bigIntFromBuffer(hash.slice(-8), true, false), "f");
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
        let body = new TLWriter().serialize(function_).buffer;
        if (body.length > COMPRESSION_THRESHOLD) {
            body = new TLWriter()
                .writeInt32(GZIP_PACKED, false)
                .writeBytes(await gzip(body))
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
                body: new TLWriter().serialize({ _: "msgs_ack", msg_ids: __classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").splice(0, 8192) }).buffer,
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
            await new Promise((r) => setTimeout(r, delay * SECOND));
        }
    }
    finally {
        __classPrivateFieldSet(this, _ClientEncrypted_reconnecting, false, "f");
    }
}, _ClientEncrypted_nextMessageId = function _ClientEncrypted_nextMessageId() {
    return __classPrivateFieldGet(this, _ClientEncrypted_state, "f").messageId = getMessageId(__classPrivateFieldGet(this, _ClientEncrypted_state, "f").messageId, __classPrivateFieldGet(this, _ClientEncrypted_timeDifference, "f"));
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
    const payload = await encryptMessage(message, __classPrivateFieldGet(this, _ClientEncrypted_authKey, "f"), __classPrivateFieldGet(this, _ClientEncrypted_authKeyId, "f"), __classPrivateFieldGet(this, _ClientEncrypted_state, "f").serverSalt, __classPrivateFieldGet(this, _ClientEncrypted_sessionId, "f"));
    if (!this.transport) {
        throw new ConnectionError("Not connected.");
    }
    await this.transport.transport.send(payload);
    __classPrivateFieldGet(this, _ClientEncrypted_L, "f").out(message);
    __classPrivateFieldGet(this, _ClientEncrypted_L, "f").outBin(payload);
}, _ClientEncrypted_receiveLoop = 
//// RECEIVE LOOP ////
async function _ClientEncrypted_receiveLoop() {
    if (!this.transport) {
        unreachable();
    }
    for (const [key, { reject }] of __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").entries()) {
        reject?.(new ConnectionError("Connection was closed"));
        __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(key);
    }
    __classPrivateFieldSet(this, _ClientEncrypted_loopActive, true, "f");
    while (this.connected && __classPrivateFieldGet(this, _ClientEncrypted_loopActive, "f")) {
        try {
            const buffer = await this.transport.transport.receive();
            __classPrivateFieldGet(this, _ClientEncrypted_L, "f").inBin(buffer);
            let decrypted;
            try {
                decrypted = await (decryptMessage(buffer, __classPrivateFieldGet(this, _ClientEncrypted_authKey, "f"), __classPrivateFieldGet(this, _ClientEncrypted_authKeyId, "f"), __classPrivateFieldGet(this, _ClientEncrypted_sessionId, "f")));
                __classPrivateFieldGet(this, _ClientEncrypted_L, "f").in(decrypted);
            }
            catch (err) {
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").error("failed to decrypt message:", err);
                drop(this.handlers.error?.(err, "decryption"));
                continue;
            }
            const messages = decrypted.body instanceof Uint8Array ? [decrypted] : decrypted.body.messages.map((v) => v);
            for (const message of messages) {
                if (!(message.body instanceof Uint8Array)) {
                    unreachable();
                }
                await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_handleIncomingMessage).call(this, message);
            }
        }
        catch (err) {
            if (!this.connected) {
                break;
            }
            else if (err instanceof TLError) {
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").error("failed to deserialize:", err);
                drop(this.handlers.error?.(err, "deserialization"));
            }
            else {
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").error("unexpected error:", err);
            }
        }
    }
    if (!this.connected) {
        for (const [key, { reject }] of __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").entries()) {
            reject?.(new ConnectionError("Connection was closed"));
            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(key);
        }
    }
    else {
        unreachable();
    }
}, _ClientEncrypted_handleIncomingMessage = async function _ClientEncrypted_handleIncomingMessage(message) {
    const body = message.body;
    if (!(body instanceof Uint8Array)) {
        unreachable();
    }
    let reader = new TLReader(body);
    const id = reader.readInt32(false);
    if (id == GZIP_PACKED) {
        reader = new TLReader(await gunzip(reader.readBytes()));
    }
    else if (id == RPC_RESULT) {
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
    if (id == GZIP_PACKED) {
        reader = new TLReader(await gunzip(reader.readBytes()));
        id = reader.readInt32(false);
        reader.unreadInt32();
    }
    else {
        reader.unreadInt32();
    }
    // deno-lint-ignore no-explicit-any
    let call = promise?.call ?? null;
    while (isGenericFunction(call)) {
        call = call.query;
    }
    // deno-lint-ignore no-explicit-any
    let result;
    if (id == RPC_ERROR) {
        result = await reader.deserialize("rpc_error");
        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("RPCResult:", result.error_code, result.error_message);
    }
    else {
        result = await reader.deserialize(mustGetReturnType(call._));
        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("RPCResult:", Array.isArray(result) ? "Array" : typeof result === "object" ? result._ : result);
    }
    const resolvePromise = () => {
        if (is("rpc_error", result)) {
            promise.reject?.(constructTelegramError(result, promise.call));
        }
        else {
            promise.resolve?.(result);
        }
        __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(messageId);
    };
    if (isOfEnum("Updates", result) || isOfEnum("Update", result)) {
        drop(this.handlers.updates?.(result, call, resolvePromise));
    }
    else {
        drop(this.handlers.result?.(result, resolvePromise));
    }
}, _ClientEncrypted_handleType = async function _ClientEncrypted_handleType(message, reader) {
    const body = await reader.deserialize(X);
    __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("received", repr(body));
    let sendAck = true;
    if (isOfEnum("Updates", body) || isOfEnum("Update", body)) {
        drop(this.handlers.updates?.(body, null));
    }
    else if (is("new_session_created", body)) {
        this.serverSalt = body.server_salt;
        drop(this.handlers.serverSaltReassigned?.(this.serverSalt));
        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("new session created with ID", body.unique_id);
    }
    else if (is("pong", body)) {
        const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(body.msg_id);
        if (promise) {
            promise.resolve?.(body);
            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(body.msg_id);
        }
    }
    else if (is("bad_server_salt", body)) {
        sendAck = false;
        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("server salt reassigned");
        this.serverSalt = body.new_server_salt;
        drop(this.handlers.serverSaltReassigned?.(this.serverSalt));
        const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(body.bad_msg_id);
        const ack = __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").get(body.bad_msg_id);
        if (promise) {
            drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, promise.message));
        }
        else if (ack) {
            drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, ack.message));
        }
        else {
            for (const promise of __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").values()) {
                if (promise.container && promise.container == body.bad_msg_id) {
                    drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, promise.message));
                }
            }
            for (const ack of __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").values()) {
                if (ack.container && ack.container == body.bad_msg_id) {
                    drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, ack.message));
                }
            }
        }
    }
    else if (is("bad_msg_notification", body)) {
        sendAck = false;
        let low = false;
        switch (body.error_code) {
            case 16: // message ID too low
                low = true;
            /* falls through */
            case 17: // message ID too high
                __classPrivateFieldSet(this, _ClientEncrypted_timeDifference, Math.abs(toUnixTimestamp(new Date()) - Number(message.msg_id >> 32n)), "f");
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
    else if (isOneOf(["msg_detailed_info", "msg_new_detailed_info"], body)) {
        sendAck = false;
        __classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").push(body.answer_msg_id);
    }
    if (sendAck) {
        __classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").push(message.msg_id);
    }
}, _ClientEncrypted_startPingLoop = function _ClientEncrypted_startPingLoop() {
    drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_pingLoop).call(this));
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
            await this.invoke({ _: "ping_delay_disconnect", ping_id: getRandomId(), disconnect_delay: __classPrivateFieldGet(this, _ClientEncrypted_pingInterval, "f") / SECOND + 15 });
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
    drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_connectionInsuranceLoop).call(this));
}, _ClientEncrypted_connectionInsuranceLoop = async function _ClientEncrypted_connectionInsuranceLoop() {
    if (__classPrivateFieldGet(this, _ClientEncrypted_connectionInsuranceLoopStarted, "f")) {
        return;
    }
    __classPrivateFieldSet(this, _ClientEncrypted_connectionInsuranceLoopAbortController, new AbortController(), "f");
    __classPrivateFieldSet(this, _ClientEncrypted_connectionInsuranceLoopStarted, true, "f");
    while (!this.disconnected) {
        try {
            await new Promise((resolve, reject) => {
                const timeout = setTimeout(resolve, 10 * SECOND);
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
            drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_reconnect).call(this));
        }
    }
    __classPrivateFieldSet(this, _ClientEncrypted_connectionInsuranceLoopStarted, false, "f");
};
