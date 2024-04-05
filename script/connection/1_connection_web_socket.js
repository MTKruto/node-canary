"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var _ConnectionWebSocket_instances, _ConnectionWebSocket_webSocket, _ConnectionWebSocket_rMutex, _ConnectionWebSocket_wMutex, _ConnectionWebSocket_buffer, _ConnectionWebSocket_nextResolve, _ConnectionWebSocket_initWs, _ConnectionWebSocket_wasConnected, _ConnectionWebSocket_isConnecting, _ConnectionWebSocket_connectionError, _ConnectionWebSocket_assertConnected, _ConnectionWebSocket_rejectRead;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionWebSocket = void 0;
const dntShim = __importStar(require("../_dnt.shims.js"));
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _0_connection_js_1 = require("./0_connection.js");
const L = (0, _1_utilities_js_1.getLogger)("ConnectionWebSocket");
const errConnectionNotOpen = new Error("Connection not open");
class ConnectionWebSocket extends _0_connection_js_1.ConnectionUnframed {
    constructor(url) {
        super();
        _ConnectionWebSocket_instances.add(this);
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: url
        });
        _ConnectionWebSocket_webSocket.set(this, void 0);
        _ConnectionWebSocket_rMutex.set(this, new _1_utilities_js_1.Mutex());
        _ConnectionWebSocket_wMutex.set(this, new _1_utilities_js_1.Mutex());
        _ConnectionWebSocket_buffer.set(this, new Uint8Array());
        _ConnectionWebSocket_nextResolve.set(this, null);
        _ConnectionWebSocket_wasConnected.set(this, false);
        _ConnectionWebSocket_isConnecting.set(this, false);
        _ConnectionWebSocket_connectionError.set(this, null);
        __classPrivateFieldSet(this, _ConnectionWebSocket_webSocket, __classPrivateFieldGet(this, _ConnectionWebSocket_instances, "m", _ConnectionWebSocket_initWs).call(this), "f");
    }
    get connected() {
        return __classPrivateFieldGet(this, _ConnectionWebSocket_webSocket, "f").readyState == dntShim.WebSocket.OPEN;
    }
    async open() {
        if (__classPrivateFieldGet(this, _ConnectionWebSocket_isConnecting, "f")) {
            throw new Error("Already connecting");
        }
        __classPrivateFieldSet(this, _ConnectionWebSocket_isConnecting, true, "f");
        if (!this.connected && __classPrivateFieldGet(this, _ConnectionWebSocket_wasConnected, "f")) {
            __classPrivateFieldSet(this, _ConnectionWebSocket_webSocket, __classPrivateFieldGet(this, _ConnectionWebSocket_instances, "m", _ConnectionWebSocket_initWs).call(this), "f");
        }
        try {
            while (__classPrivateFieldGet(this, _ConnectionWebSocket_webSocket, "f").readyState != dntShim.WebSocket.OPEN) {
                if (__classPrivateFieldGet(this, _ConnectionWebSocket_webSocket, "f").readyState == dntShim.WebSocket.CLOSED) {
                    if (__classPrivateFieldGet(this, _ConnectionWebSocket_connectionError, "f") && "message" in __classPrivateFieldGet(this, _ConnectionWebSocket_connectionError, "f")) {
                        throw new Error(__classPrivateFieldGet(this, _ConnectionWebSocket_connectionError, "f").message);
                    }
                    else {
                        throw new Error("Connection was closed");
                    }
                }
                else {
                    await new Promise((r) => setTimeout(r, 5));
                }
            }
            __classPrivateFieldSet(this, _ConnectionWebSocket_wasConnected, true, "f");
        }
        finally {
            __classPrivateFieldSet(this, _ConnectionWebSocket_isConnecting, false, "f");
            __classPrivateFieldSet(this, _ConnectionWebSocket_connectionError, null, "f");
        }
    }
    async read(p) {
        __classPrivateFieldGet(this, _ConnectionWebSocket_instances, "m", _ConnectionWebSocket_assertConnected).call(this);
        const unlock = await __classPrivateFieldGet(this, _ConnectionWebSocket_rMutex, "f").lock();
        try {
            __classPrivateFieldGet(this, _ConnectionWebSocket_instances, "m", _ConnectionWebSocket_assertConnected).call(this);
            if (__classPrivateFieldGet(this, _ConnectionWebSocket_buffer, "f").length < p.length) {
                await new Promise((resolve, reject) => __classPrivateFieldSet(this, _ConnectionWebSocket_nextResolve, [p.length, { resolve, reject }], "f"));
            }
            const slice = __classPrivateFieldGet(this, _ConnectionWebSocket_buffer, "f").slice(0, p.length);
            p.set(slice);
            __classPrivateFieldSet(this, _ConnectionWebSocket_buffer, __classPrivateFieldGet(this, _ConnectionWebSocket_buffer, "f").slice(slice.length), "f");
        }
        finally {
            unlock();
        }
    }
    async write(p) {
        __classPrivateFieldGet(this, _ConnectionWebSocket_instances, "m", _ConnectionWebSocket_assertConnected).call(this);
        const unlock = await __classPrivateFieldGet(this, _ConnectionWebSocket_wMutex, "f").lock();
        try {
            __classPrivateFieldGet(this, _ConnectionWebSocket_instances, "m", _ConnectionWebSocket_assertConnected).call(this);
            __classPrivateFieldGet(this, _ConnectionWebSocket_webSocket, "f").send(p);
        }
        finally {
            unlock();
        }
    }
    close() {
        __classPrivateFieldGet(this, _ConnectionWebSocket_instances, "m", _ConnectionWebSocket_assertConnected).call(this);
        __classPrivateFieldGet(this, _ConnectionWebSocket_webSocket, "f").close(1000, "method");
        __classPrivateFieldGet(this, _ConnectionWebSocket_instances, "m", _ConnectionWebSocket_rejectRead).call(this);
    }
}
exports.ConnectionWebSocket = ConnectionWebSocket;
_ConnectionWebSocket_webSocket = new WeakMap(), _ConnectionWebSocket_rMutex = new WeakMap(), _ConnectionWebSocket_wMutex = new WeakMap(), _ConnectionWebSocket_buffer = new WeakMap(), _ConnectionWebSocket_nextResolve = new WeakMap(), _ConnectionWebSocket_wasConnected = new WeakMap(), _ConnectionWebSocket_isConnecting = new WeakMap(), _ConnectionWebSocket_connectionError = new WeakMap(), _ConnectionWebSocket_instances = new WeakSet(), _ConnectionWebSocket_initWs = function _ConnectionWebSocket_initWs() {
    const webSocket = new dntShim.WebSocket(this.url, "binary");
    const mutex = new _1_utilities_js_1.Mutex();
    webSocket.addEventListener("close", () => {
        __classPrivateFieldGet(this, _ConnectionWebSocket_instances, "m", _ConnectionWebSocket_rejectRead).call(this);
        this.stateChangeHandler?.(false);
    });
    webSocket.addEventListener("open", () => {
        this.stateChangeHandler?.(true);
    });
    webSocket.addEventListener("message", async (e) => {
        if (typeof e.data === "string") {
            return;
        }
        const unlock = await mutex.lock();
        const data = new Uint8Array(await new Blob([e.data].map((v) => v instanceof Blob || v instanceof Uint8Array ? v : v instanceof ArrayBuffer ? v : (0, _0_deps_js_1.unreachable)())).arrayBuffer());
        __classPrivateFieldSet(this, _ConnectionWebSocket_buffer, (0, _1_utilities_js_1.concat)(__classPrivateFieldGet(this, _ConnectionWebSocket_buffer, "f"), data), "f");
        if (__classPrivateFieldGet(this, _ConnectionWebSocket_nextResolve, "f") != null && __classPrivateFieldGet(this, _ConnectionWebSocket_buffer, "f").length >= __classPrivateFieldGet(this, _ConnectionWebSocket_nextResolve, "f")[0]) {
            __classPrivateFieldGet(this, _ConnectionWebSocket_nextResolve, "f")[1].resolve();
            __classPrivateFieldSet(this, _ConnectionWebSocket_nextResolve, null, "f");
        }
        unlock();
    });
    webSocket.addEventListener("error", (err) => {
        if (__classPrivateFieldGet(this, _ConnectionWebSocket_isConnecting, "f")) {
            // @ts-ignore: Node.js
            __classPrivateFieldSet(this, _ConnectionWebSocket_connectionError, err, "f");
        }
        if (this.connected) {
            L.error(err);
        }
    });
    return webSocket;
}, _ConnectionWebSocket_assertConnected = function _ConnectionWebSocket_assertConnected() {
    if (!this.connected) {
        throw errConnectionNotOpen;
    }
}, _ConnectionWebSocket_rejectRead = function _ConnectionWebSocket_rejectRead() {
    if (__classPrivateFieldGet(this, _ConnectionWebSocket_nextResolve, "f") != null) {
        __classPrivateFieldGet(this, _ConnectionWebSocket_nextResolve, "f")[1].reject(errConnectionNotOpen);
        __classPrivateFieldSet(this, _ConnectionWebSocket_nextResolve, null, "f");
    }
};
