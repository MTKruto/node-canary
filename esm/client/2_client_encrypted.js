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
var _ClientEncrypted_instances, _a, _ClientEncrypted_SEND_MAX_TRIES, _ClientEncrypted_AUTH_KEY_CREATION_MAX_TRIES, _ClientEncrypted_L, _ClientEncrypted_plain, _ClientEncrypted_pendingRequests, _ClientEncrypted_apiId, _ClientEncrypted_appVersion, _ClientEncrypted_deviceModel, _ClientEncrypted_langCode, _ClientEncrypted_langPack, _ClientEncrypted_systemLangCode, _ClientEncrypted_systemVersion, _ClientEncrypted_disableUpdates, _ClientEncrypted_createAuthKeyPromise, _ClientEncrypted_createAuthKey, _ClientEncrypted_createAuthKeyInner, _ClientEncrypted_connectionInited, _ClientEncrypted_send, _ClientEncrypted_resend, _ClientEncrypted_onUpdate, _ClientEncrypted_onNewServerSalt, _ClientEncrypted_onMessageFailed, _ClientEncrypted_onRpcError, _ClientEncrypted_onRpcResult, _ClientEncrypted_onPong;
import { InputError } from "../0_errors.js";
import { getLogger } from "../1_utilities.js";
import { Api, Mtproto, X } from "../2_tl.js";
import { ConnectionNotInited } from "../3_errors.js";
import { APP_VERSION, DEVICE_MODEL, LANG_CODE, LANG_PACK, SYSTEM_LANG_CODE, SYSTEM_VERSION } from "../4_constants.js";
import { constructTelegramError } from "../4_errors.js";
import { SessionEncrypted, SessionError } from "../4_session.js";
import { ClientAbstract } from "./0_client_abstract.js";
import { isCdnFunction, repr } from "./0_utilities.js";
import { ClientPlain } from "./1_client_plain.js";
// global ClientEncrypted ID counter for logs
let id = 0;
export class ClientEncrypted extends ClientAbstract {
    constructor(dc, apiId, params) {
        super();
        _ClientEncrypted_instances.add(this);
        Object.defineProperty(this, "handlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        _ClientEncrypted_L.set(this, void 0);
        _ClientEncrypted_plain.set(this, void 0);
        Object.defineProperty(this, "session", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ClientEncrypted_pendingRequests.set(this, new Map());
        _ClientEncrypted_apiId.set(this, void 0);
        _ClientEncrypted_appVersion.set(this, void 0);
        _ClientEncrypted_deviceModel.set(this, void 0);
        _ClientEncrypted_langCode.set(this, void 0);
        _ClientEncrypted_langPack.set(this, void 0);
        _ClientEncrypted_systemLangCode.set(this, void 0);
        _ClientEncrypted_systemVersion.set(this, void 0);
        _ClientEncrypted_disableUpdates.set(this, void 0);
        _ClientEncrypted_createAuthKeyPromise.set(this, void 0);
        _ClientEncrypted_connectionInited.set(this, false);
        Object.defineProperty(this, "lastRequest", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _ClientEncrypted_L, getLogger("ClientEncrypted").client(id++), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_plain, new ClientPlain(dc, params), "f");
        this.session = new SessionEncrypted(dc, params);
        this.session.handlers.onUpdate = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_onUpdate).bind(this);
        this.session.handlers.onNewServerSalt = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_onNewServerSalt).bind(this);
        this.session.handlers.onMessageFailed = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_onMessageFailed).bind(this);
        this.session.handlers.onRpcError = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_onRpcError).bind(this);
        this.session.handlers.onRpcResult = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_onRpcResult).bind(this);
        this.session.handlers.onPong = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_onPong).bind(this);
        __classPrivateFieldSet(this, _ClientEncrypted_apiId, apiId, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_appVersion, params?.appVersion ?? APP_VERSION, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_deviceModel, params?.deviceModel ?? DEVICE_MODEL, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_langCode, params?.langCode ?? LANG_CODE, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_langPack, params?.langPack ?? LANG_PACK, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_systemLangCode, params?.systemLangCode ?? SYSTEM_LANG_CODE, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_systemVersion, params?.systemVersion ?? SYSTEM_VERSION, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_disableUpdates, params?.disableUpdates ?? false, "f");
    }
    async connect() {
        if (!this.authKey.length) {
            await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_createAuthKey).call(this);
        }
        await super.connect();
    }
    disconnect() {
        super.disconnect();
        this.lastRequest = undefined;
    }
    get authKey() {
        return this.session.authKey;
    }
    async setAuthKey(authKey) {
        await this.session.setAuthKey(authKey);
    }
    async invoke(function_) {
        const messageId = await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_send).call(this, function_);
        return (await new Promise((resolve, reject) => {
            __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").set(messageId, { resolve, reject, call: function_ });
        }));
    }
}
_a = ClientEncrypted, _ClientEncrypted_L = new WeakMap(), _ClientEncrypted_plain = new WeakMap(), _ClientEncrypted_pendingRequests = new WeakMap(), _ClientEncrypted_apiId = new WeakMap(), _ClientEncrypted_appVersion = new WeakMap(), _ClientEncrypted_deviceModel = new WeakMap(), _ClientEncrypted_langCode = new WeakMap(), _ClientEncrypted_langPack = new WeakMap(), _ClientEncrypted_systemLangCode = new WeakMap(), _ClientEncrypted_systemVersion = new WeakMap(), _ClientEncrypted_disableUpdates = new WeakMap(), _ClientEncrypted_createAuthKeyPromise = new WeakMap(), _ClientEncrypted_connectionInited = new WeakMap(), _ClientEncrypted_instances = new WeakSet(), _ClientEncrypted_createAuthKey = function _ClientEncrypted_createAuthKey() {
    return __classPrivateFieldSet(this, _ClientEncrypted_createAuthKeyPromise, __classPrivateFieldGet(this, _ClientEncrypted_createAuthKeyPromise, "f") ?? __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_createAuthKeyInner).call(this).finally(() => {
        __classPrivateFieldSet(this, _ClientEncrypted_createAuthKeyPromise, undefined, "f");
    }), "f");
}, _ClientEncrypted_createAuthKeyInner = async function _ClientEncrypted_createAuthKeyInner() {
    let lastErr;
    let errored = false;
    for (let i = 0; i < __classPrivateFieldGet(_a, _a, "f", _ClientEncrypted_AUTH_KEY_CREATION_MAX_TRIES); ++i) {
        try {
            await __classPrivateFieldGet(this, _ClientEncrypted_plain, "f").connect();
            const [authKey, serverSalt] = await __classPrivateFieldGet(this, _ClientEncrypted_plain, "f").createAuthKey();
            await this.setAuthKey(authKey);
            this.serverSalt = serverSalt;
            errored = false;
            break;
        }
        catch (err) {
            errored = true;
            lastErr = err;
            if (this.disconnected) {
                break;
            }
            __classPrivateFieldGet(this, _ClientEncrypted_L, "f").error("failed to create auth key:", err);
        }
        finally {
            __classPrivateFieldGet(this, _ClientEncrypted_plain, "f").disconnect();
        }
    }
    if (errored) {
        throw lastErr;
    }
}, _ClientEncrypted_send = async function _ClientEncrypted_send(function_) {
    this.lastRequest = new Date();
    let body;
    if (Mtproto.is("ping", function_)) {
        body = Mtproto.serializeObject(function_);
    }
    else {
        if (__classPrivateFieldGet(this, _ClientEncrypted_disableUpdates, "f") && !isCdnFunction(function_)) {
            function_ = { _: "invokeWithoutUpdates", query: function_ };
        }
        if (!__classPrivateFieldGet(this, _ClientEncrypted_connectionInited, "f")) {
            if (!__classPrivateFieldGet(this, _ClientEncrypted_apiId, "f")) {
                throw new InputError("apiId not set");
            }
            function_ = {
                _: "initConnection",
                api_id: __classPrivateFieldGet(this, _ClientEncrypted_apiId, "f"),
                app_version: __classPrivateFieldGet(this, _ClientEncrypted_appVersion, "f"),
                device_model: __classPrivateFieldGet(this, _ClientEncrypted_deviceModel, "f"),
                lang_code: __classPrivateFieldGet(this, _ClientEncrypted_langCode, "f"),
                lang_pack: __classPrivateFieldGet(this, _ClientEncrypted_langPack, "f"),
                query: {
                    _: "invokeWithLayer",
                    layer: Api.LAYER,
                    query: function_,
                },
                system_lang_code: __classPrivateFieldGet(this, _ClientEncrypted_systemLangCode, "f"),
                system_version: __classPrivateFieldGet(this, _ClientEncrypted_systemVersion, "f"),
            };
        }
        body = Api.serializeObject(function_);
    }
    let lastErr;
    for (let i = 0; i < __classPrivateFieldGet(_a, _a, "f", _ClientEncrypted_SEND_MAX_TRIES); ++i) {
        let errored = false;
        try {
            return await this.session.send(body);
        }
        catch (err) {
            errored = true;
            lastErr = err;
            if (this.disconnected) {
                break;
            }
            __classPrivateFieldGet(this, _ClientEncrypted_L, "f").error("send failed:", err);
        }
        finally {
            if (!errored) {
                __classPrivateFieldGet(this, _ClientEncrypted_L, "f").debug("invoked", repr(function_));
            }
        }
    }
    throw new Error(`Failed to invoke function after ${__classPrivateFieldGet(_a, _a, "f", _ClientEncrypted_SEND_MAX_TRIES)} tries.`, { cause: lastErr });
}, _ClientEncrypted_resend = async function _ClientEncrypted_resend(request) {
    try {
        const messageId = await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_send).call(this, request.call);
        __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").set(messageId, request);
    }
    catch (err) {
        request.reject(err);
    }
}, _ClientEncrypted_onUpdate = async function _ClientEncrypted_onUpdate(body) {
    let type;
    try {
        type = await Api.deserializeType(X, body);
    }
    catch (err) {
        __classPrivateFieldGet(this, _ClientEncrypted_L, "f").error("failed to deserialize update:", err);
        this.handlers.onDeserializationError?.();
        return;
    }
    if (Api.isOfEnum("Update", type) || Api.isOfEnum("Updates", type)) {
        this.handlers.onUpdate?.(type);
    }
    else {
        __classPrivateFieldGet(this, _ClientEncrypted_L, "f").warning("received unknown type:", repr(type));
    }
}, _ClientEncrypted_onNewServerSalt = function _ClientEncrypted_onNewServerSalt(serverSalt) {
    this.handlers.onNewServerSalt?.(serverSalt);
}, _ClientEncrypted_onMessageFailed = async function _ClientEncrypted_onMessageFailed(msgId, error) {
    const request = __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").get(msgId);
    if (request) {
        __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").delete(msgId);
        if (error instanceof SessionError) {
            await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_resend).call(this, request);
        }
        else {
            request.reject(error);
        }
    }
}, _ClientEncrypted_onRpcError = async function _ClientEncrypted_onRpcError(msgId, error) {
    const request = __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").get(msgId);
    if (request) {
        __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").delete(msgId);
        const reason = constructTelegramError(error, request.call);
        if (reason instanceof ConnectionNotInited) {
            __classPrivateFieldSet(this, _ClientEncrypted_connectionInited, false, "f");
            await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_resend).call(this, request);
        }
        else {
            request.reject(constructTelegramError(error, request.call));
        }
    }
}, _ClientEncrypted_onRpcResult = async function _ClientEncrypted_onRpcResult(msgId, body) {
    const request = __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").get(msgId);
    if (request) {
        let type;
        try {
            type = await Api.deserializeType(Api.mustGetReturnType(request.call._), body);
            __classPrivateFieldGet(this, _ClientEncrypted_L, "f").debug("received rpc_result", repr(type));
            request.resolve(type);
        }
        catch (err) {
            request.reject(err);
            __classPrivateFieldGet(this, _ClientEncrypted_L, "f").error("failed to deserialize RPC result body:", err);
            this.handlers.onDeserializationError?.();
            return;
        }
        finally {
            __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").delete(msgId);
        }
    }
    if (!__classPrivateFieldGet(this, _ClientEncrypted_connectionInited, "f")) {
        __classPrivateFieldSet(this, _ClientEncrypted_connectionInited, true, "f");
    }
}, _ClientEncrypted_onPong = function _ClientEncrypted_onPong(pong) {
    const pendingRequest = __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").get(pong.msg_id);
    if (pendingRequest) {
        pendingRequest.resolve(pong);
        __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").delete(pong.msg_id);
    }
};
_ClientEncrypted_SEND_MAX_TRIES = { value: 10 };
_ClientEncrypted_AUTH_KEY_CREATION_MAX_TRIES = { value: 10 };
