"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ClientAbstract_dc;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAbstract = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _3_transport_js_1 = require("../3_transport.js");
const _4_constants_js_1 = require("../4_constants.js");
class ClientAbstract {
    constructor(params) {
        Object.defineProperty(this, "initialDc", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "transportProvider", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cdn", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ClientAbstract_dc.set(this, void 0);
        Object.defineProperty(this, "stateChangeHandler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.initialDc = params?.initialDc ?? _4_constants_js_1.INITIAL_DC;
        this.transportProvider = params?.transportProvider ?? (0, _3_transport_js_1.transportProviderWebSocket)();
        this.cdn = params?.cdn ?? false;
    }
    get dc() {
        return __classPrivateFieldGet(this, _ClientAbstract_dc, "f") ?? this.initialDc;
    }
    get dcId() {
        if (!this.transport) {
            throw new _0_errors_js_1.ConnectionError("Not connected.");
        }
        return this.transport.dcId;
    }
    // MaybePromise since `Client` has to deal with `Storage.set()`
    setDc(dc) {
        __classPrivateFieldSet(this, _ClientAbstract_dc, dc, "f");
    }
    get connected() {
        return this.transport === undefined ? false : this.transport.connection.connected;
    }
    async connect() {
        this.transport = this.transportProvider({ dc: __classPrivateFieldGet(this, _ClientAbstract_dc, "f") ?? this.initialDc, cdn: this.cdn });
        this.transport.connection.stateChangeHandler = this.stateChangeHandler;
        await (0, _0_deps_js_1.initTgCrypto)();
        await this.transport.connection.open();
        await this.transport.transport.initialize();
    }
    async reconnect(dc) {
        await this.disconnect();
        if (dc) {
            await this.setDc(dc);
        }
        await this.connect();
    }
    async disconnect() {
        if (!this.transport) {
            throw new _0_errors_js_1.ConnectionError("Not connected.");
        }
        await this.transport.transport.deinitialize();
        await this.transport.connection.close();
    }
    get disconnected() {
        return !this.transport?.transport.initialized;
    }
}
exports.ClientAbstract = ClientAbstract;
_ClientAbstract_dc = new WeakMap();
