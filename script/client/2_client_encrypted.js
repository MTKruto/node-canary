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
var _ClientEncrypted_instances, _a, _ClientEncrypted_SEND_MAX_TRIES, _ClientEncrypted_AUTH_KEY_CREATION_MAX_TRIES, _ClientEncrypted_L, _ClientEncrypted_plain, _ClientEncrypted_pendingRequests, _ClientEncrypted_apiId, _ClientEncrypted_appVersion, _ClientEncrypted_deviceModel, _ClientEncrypted_langCode, _ClientEncrypted_langPack, _ClientEncrypted_systemLangCode, _ClientEncrypted_systemVersion, _ClientEncrypted_disableUpdates, _ClientEncrypted_createAuthKeyPromise, _ClientEncrypted_createAuthKey, _ClientEncrypted_createAuthKeyInner, _ClientEncrypted_connectionInited, _ClientEncrypted_send, _ClientEncrypted_resend, _ClientEncrypted_onUpdate, _ClientEncrypted_onNewServerSalt, _ClientEncrypted_onMessageFailed, _ClientEncrypted_onRpcError, _ClientEncrypted_onRpcResult;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientEncrypted = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_errors_js_1 = require("../3_errors.js");
const _4_constants_js_1 = require("../4_constants.js");
const _4_errors_js_1 = require("../4_errors.js");
const _4_session_js_1 = require("../4_session.js");
const _0_client_abstract_js_1 = require("./0_client_abstract.js");
const _0_utilities_js_1 = require("./0_utilities.js");
const _1_client_plain_js_1 = require("./1_client_plain.js");
// global ClientEncrypted ID counter for logs
let id = 0;
class ClientEncrypted extends _0_client_abstract_js_1.ClientAbstract {
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
        __classPrivateFieldSet(this, _ClientEncrypted_L, (0, _1_utilities_js_1.getLogger)("ClientEncrypted").client(id++), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_plain, new _1_client_plain_js_1.ClientPlain(dc, params), "f");
        this.session = new _4_session_js_1.SessionEncrypted(dc, params);
        this.session.handlers.onUpdate = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_onUpdate).bind(this);
        this.session.handlers.onNewServerSalt = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_onNewServerSalt).bind(this);
        this.session.handlers.onMessageFailed = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_onMessageFailed).bind(this);
        this.session.handlers.onRpcError = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_onRpcError).bind(this);
        this.session.handlers.onRpcResult = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_onRpcResult).bind(this);
        __classPrivateFieldSet(this, _ClientEncrypted_apiId, apiId, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_appVersion, params?.appVersion ?? _4_constants_js_1.APP_VERSION, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_deviceModel, params?.deviceModel ?? _4_constants_js_1.DEVICE_MODEL, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_langCode, params?.langCode ?? _4_constants_js_1.LANG_CODE, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_langPack, params?.langPack ?? _4_constants_js_1.LANG_PACK, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_systemLangCode, params?.systemLangCode ?? _4_constants_js_1.SYSTEM_LANG_CODE, "f");
        __classPrivateFieldSet(this, _ClientEncrypted_systemVersion, params?.systemVersion ?? _4_constants_js_1.SYSTEM_VERSION, "f");
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
exports.ClientEncrypted = ClientEncrypted;
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
    if (__classPrivateFieldGet(this, _ClientEncrypted_disableUpdates, "f") && !(0, _0_utilities_js_1.isCdnFunction)(function_)) {
        function_ = { _: "invokeWithoutUpdates", query: function_ };
    }
    if (!__classPrivateFieldGet(this, _ClientEncrypted_connectionInited, "f")) {
        function_ = {
            _: "initConnection",
            api_id: __classPrivateFieldGet(this, _ClientEncrypted_apiId, "f"),
            app_version: __classPrivateFieldGet(this, _ClientEncrypted_appVersion, "f"),
            device_model: __classPrivateFieldGet(this, _ClientEncrypted_deviceModel, "f"),
            lang_code: __classPrivateFieldGet(this, _ClientEncrypted_langCode, "f"),
            lang_pack: __classPrivateFieldGet(this, _ClientEncrypted_langPack, "f"),
            query: {
                _: "invokeWithLayer",
                layer: _2_tl_js_1.Api.LAYER,
                query: function_,
            },
            system_lang_code: __classPrivateFieldGet(this, _ClientEncrypted_systemLangCode, "f"),
            system_version: __classPrivateFieldGet(this, _ClientEncrypted_systemVersion, "f"),
        };
    }
    const body = _2_tl_js_1.Api.serializeObject(function_);
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
                __classPrivateFieldGet(this, _ClientEncrypted_L, "f").debug("invoked", (0, _0_utilities_js_1.repr)(function_));
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
        type = await _2_tl_js_1.Api.deserializeType(_2_tl_js_1.X, body);
    }
    catch (err) {
        __classPrivateFieldGet(this, _ClientEncrypted_L, "f").error("failed to deserialize update:", err);
        this.handlers.onDeserializationError?.();
        return;
    }
    if (_2_tl_js_1.Api.isOfEnum("Update", type) || _2_tl_js_1.Api.isOfEnum("Updates", type)) {
        this.handlers.onUpdate?.(type);
    }
    else {
        __classPrivateFieldGet(this, _ClientEncrypted_L, "f").warning("received unknown type:", (0, _0_utilities_js_1.repr)(type));
    }
}, _ClientEncrypted_onNewServerSalt = function _ClientEncrypted_onNewServerSalt(serverSalt) {
    this.handlers.onNewServerSalt?.(serverSalt);
}, _ClientEncrypted_onMessageFailed = async function _ClientEncrypted_onMessageFailed(msgId, error) {
    const request = __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").get(msgId);
    if (request) {
        __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").delete(msgId);
        if (error instanceof _4_session_js_1.SessionError) {
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
        const reason = (0, _4_errors_js_1.constructTelegramError)(error, request.call);
        if (reason instanceof _3_errors_js_1.ConnectionNotInited) {
            __classPrivateFieldSet(this, _ClientEncrypted_connectionInited, false, "f");
            await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_resend).call(this, request);
        }
        else {
            request.reject((0, _4_errors_js_1.constructTelegramError)(error, request.call));
        }
    }
}, _ClientEncrypted_onRpcResult = async function _ClientEncrypted_onRpcResult(msgId, body) {
    const request = __classPrivateFieldGet(this, _ClientEncrypted_pendingRequests, "f").get(msgId);
    if (request) {
        let type;
        try {
            type = await _2_tl_js_1.Api.deserializeType(_2_tl_js_1.Api.mustGetReturnType(request.call._), body);
            __classPrivateFieldGet(this, _ClientEncrypted_L, "f").debug("received rpc_result", (0, _0_utilities_js_1.repr)(type));
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
};
_ClientEncrypted_SEND_MAX_TRIES = { value: 10 };
_ClientEncrypted_AUTH_KEY_CREATION_MAX_TRIES = { value: 10 };
