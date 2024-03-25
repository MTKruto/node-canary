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
import { gunzip } from "../0_deps.js";
import { bigIntFromBuffer, CacheMap, drop, getLogger, getRandomBigInt, sha1, UNREACHABLE } from "../1_utilities.js";
import { Message_, MessageContainer, name, RPCResult, TLError, TLReader, types } from "../2_tl.js";
import { upgradeInstance } from "../4_errors.js";
import { ClientAbstract } from "./0_client_abstract.js";
import { decryptMessage, encryptMessage, getMessageId } from "./0_message.js";
import { ConnectionError } from "./0_types.js";
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
export class ClientEncrypted extends ClientAbstract {
    constructor(params) {
        super(params);
        _ClientEncrypted_instances.add(this);
        _ClientEncrypted_authKey.set(this, new Uint8Array());
        _ClientEncrypted_authKeyId.set(this, 0n);
        _ClientEncrypted_sessionId.set(this, getRandomBigInt(8, true, false));
        _ClientEncrypted_state.set(this, { serverSalt: 0n, seqNo: 0, messageId: 0n });
        _ClientEncrypted_toAcknowledge.set(this, new Set());
        _ClientEncrypted_recentAcks.set(this, new CacheMap(20));
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
        const L = __classPrivateFieldSet(this, _ClientEncrypted_L, getLogger("ClientEncrypted").client(id++), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_LreceiveLoop, L.branch("receiveLoop"), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_Linvoke, L.branch("invoke"), "f");
    }
    async connect() {
        await super.connect();
        drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_receiveLoop).call(this)); // TODO: ability to join this promise
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
        const message__ = new Message_(messageId, __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextSeqNo).call(this, true), function_);
        let message_;
        let container = undefined;
        if (__classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").size) {
            const ack = new Message_(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextMessageId).call(this), __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextSeqNo).call(this, false), new types.Msgs_ack({ msg_ids: [...__classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f")] }));
            __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").set(ack.id, { container, message: ack });
            message_ = new MessageContainer(container = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextMessageId).call(this), __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextSeqNo).call(this, false), [message__, ack]);
        }
        else {
            message_ = message__;
        }
        await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, message_);
        __classPrivateFieldGet(this, _ClientEncrypted_Linvoke, "f").debug("invoked", function_[name]);
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
_ClientEncrypted_authKey = new WeakMap(), _ClientEncrypted_authKeyId = new WeakMap(), _ClientEncrypted_sessionId = new WeakMap(), _ClientEncrypted_state = new WeakMap(), _ClientEncrypted_toAcknowledge = new WeakMap(), _ClientEncrypted_recentAcks = new WeakMap(), _ClientEncrypted_promises = new WeakMap(), _ClientEncrypted_L = new WeakMap(), _ClientEncrypted_LreceiveLoop = new WeakMap(), _ClientEncrypted_Linvoke = new WeakMap(), _ClientEncrypted_instances = new WeakSet(), _ClientEncrypted_nextMessageId = function _ClientEncrypted_nextMessageId() {
    return __classPrivateFieldGet(this, _ClientEncrypted_state, "f").messageId = getMessageId(__classPrivateFieldGet(this, _ClientEncrypted_state, "f").messageId);
}, _ClientEncrypted_nextSeqNo = function _ClientEncrypted_nextSeqNo(contentRelated) {
    let seqNo = __classPrivateFieldGet(this, _ClientEncrypted_state, "f").seqNo * 2;
    if (contentRelated) {
        seqNo++;
        __classPrivateFieldGet(this, _ClientEncrypted_state, "f").seqNo++;
    }
    return seqNo;
}, _ClientEncrypted_sendMessage = async function _ClientEncrypted_sendMessage(message) {
    const payload = await encryptMessage(message, __classPrivateFieldGet(this, _ClientEncrypted_authKey, "f"), __classPrivateFieldGet(this, _ClientEncrypted_authKeyId, "f"), __classPrivateFieldGet(this, _ClientEncrypted_state, "f").serverSalt, __classPrivateFieldGet(this, _ClientEncrypted_sessionId, "f"));
    await this.transport.transport.send(payload);
    __classPrivateFieldGet(this, _ClientEncrypted_L, "f").out(message);
    __classPrivateFieldGet(this, _ClientEncrypted_L, "f").outBin(payload);
}, _ClientEncrypted_receiveLoop = async function _ClientEncrypted_receiveLoop() {
    if (!this.transport) {
        UNREACHABLE();
    }
    while (this.connected) {
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
                this.handlers.error?.(err, "decryption");
                continue;
            }
            const messages = decrypted instanceof MessageContainer ? decrypted.messages : [decrypted];
            for (const message of messages) {
                let body = message.body;
                if (body instanceof types.Gzip_packed) {
                    body = new TLReader(gunzip(body.packed_data)).readObject();
                }
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("received", (typeof body === "object" && name in body) ? body[name] : body.constructor.name);
                if (body instanceof types._Updates || body instanceof types._Update) {
                    this.handlers.updates?.(body, null);
                }
                else if (body instanceof types.New_session_created) {
                    this.serverSalt = body.server_salt;
                    this.handlers.serverSaltReassigned?.(this.serverSalt);
                }
                else if (message.body instanceof RPCResult) {
                    let result = message.body.result;
                    if (result instanceof types.Gzip_packed) {
                        result = new TLReader(gunzip(result.packed_data)).readObject();
                    }
                    if (result instanceof types.Rpc_error) {
                        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("RPCResult:", result.error_code, result.error_message);
                    }
                    else {
                        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("RPCResult:", (typeof result === "object" && name in result) ? result[name] : result.constructor.name);
                    }
                    const messageId = message.body.messageId;
                    const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(messageId);
                    const resolvePromise = () => {
                        if (promise) {
                            if (result instanceof types.Rpc_error) {
                                promise.reject?.(upgradeInstance(result, promise.call));
                            }
                            else {
                                promise.resolve?.(result);
                            }
                            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(messageId);
                        }
                    };
                    if (result instanceof types._Updates || result instanceof types._Update) {
                        this.handlers.updates?.(result, promise?.call ?? null, resolvePromise);
                    }
                    else {
                        this.handlers.result?.(result, resolvePromise);
                    }
                }
                else if (message.body instanceof types.Pong) {
                    const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(message.body.msg_id);
                    if (promise) {
                        promise.resolve?.(message.body);
                        __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(message.body.msg_id);
                    }
                }
                else if (message.body instanceof types.Bad_server_salt) {
                    __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("server salt reassigned");
                    this.serverSalt = message.body.new_server_salt;
                    this.handlers.serverSaltReassigned?.(this.serverSalt);
                    const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(message.body.bad_msg_id);
                    const ack = __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").get(message.body.bad_msg_id);
                    if (promise) {
                        drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, promise.message));
                    }
                    else if (ack) {
                        drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, ack.message));
                    }
                    else {
                        for (const promise of __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").values()) {
                            if (promise.container && promise.container == message.body.bad_msg_id) {
                                drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, promise.message));
                            }
                        }
                        for (const ack of __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").values()) {
                            if (ack.container && ack.container == message.body.bad_msg_id) {
                                drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, ack.message));
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
            else if (err instanceof TLError) {
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").error("failed to deserialize:", err);
                this.handlers.error?.(err, "deserialization");
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
        UNREACHABLE();
    }
};
