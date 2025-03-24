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
var _Session_instances, _Session_dc, _Session_cdn, _Session_lastConnect, _Session_disconnected, _Session_L, _Session_onConnectionStateChange, _Session_lastState, _Session_stateChangeHandler, _Session_connectMutex;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Session = void 0;
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
const dntShim = __importStar(require("../_dnt.shims.js"));
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _3_transport_js_1 = require("../3_transport.js");
const _0_session_state_js_1 = require("./0_session_state.js");
// global Session ID counter for logs
let id = 0;
// @ts-ignore: lib
const defaultTransportProvider = typeof dntShim.Deno === "undefined" ? _3_transport_js_1.transportProviderWebSocket : _3_transport_js_1.transportProviderTcp;
class Session {
    constructor(dc, params) {
        _Session_instances.add(this);
        _Session_dc.set(this, void 0);
        _Session_cdn.set(this, void 0);
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _0_session_state_js_1.SessionState()
        });
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _Session_lastConnect.set(this, void 0);
        _Session_disconnected.set(this, true);
        _Session_L.set(this, void 0);
        _Session_onConnectionStateChange.set(this, void 0);
        _Session_lastState.set(this, void 0);
        _Session_connectMutex.set(this, new _1_utilities_js_1.Mutex());
        __classPrivateFieldSet(this, _Session_dc, dc, "f");
        __classPrivateFieldSet(this, _Session_cdn, params?.cdn ?? false, "f");
        const transportProvider = params?.transportProvider ?? defaultTransportProvider();
        this.transport = transportProvider({ dc: __classPrivateFieldGet(this, _Session_dc, "f"), cdn: __classPrivateFieldGet(this, _Session_cdn, "f") });
        this.transport.connection.stateChangeHandler = (connected) => {
            setTimeout(() => {
                (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _Session_instances, "m", _Session_stateChangeHandler).call(this, connected));
            });
        };
        __classPrivateFieldSet(this, _Session_L, (0, _1_utilities_js_1.getLogger)("Session").client(id++), "f");
    }
    set onConnectionStateChange(onConnectionStateChange) {
        __classPrivateFieldSet(this, _Session_onConnectionStateChange, onConnectionStateChange, "f");
    }
    set connectionCallback(connectionCallback) {
        this.transport.connection.callback = connectionCallback;
    }
    get dc() {
        return __classPrivateFieldGet(this, _Session_dc, "f");
    }
    get cdn() {
        return __classPrivateFieldGet(this, _Session_cdn, "f");
    }
    set serverSalt(serverSalt) {
        this.state.serverSalt = serverSalt;
    }
    get connected() {
        return this.transport.connection.connected;
    }
    async connect() {
        const release = await __classPrivateFieldGet(this, _Session_connectMutex, "f").lock();
        try {
            if (this.connected) {
                return;
            }
            await this.transport.connection.open();
            await this.transport.transport.initialize();
            __classPrivateFieldSet(this, _Session_lastConnect, new Date(), "f");
            __classPrivateFieldSet(this, _Session_disconnected, false, "f");
        }
        finally {
            release();
        }
    }
    async waitUntilConnected() {
        (await __classPrivateFieldGet(this, _Session_connectMutex, "f").lock())();
    }
    get disconnected() {
        return __classPrivateFieldGet(this, _Session_disconnected, "f");
    }
    disconnect() {
        __classPrivateFieldSet(this, _Session_disconnected, true, "f");
        if (this.transport.connection.connected) {
            this.transport.connection.close();
            this.transport.transport.deinitialize();
        }
    }
}
exports.Session = Session;
_Session_dc = new WeakMap(), _Session_cdn = new WeakMap(), _Session_lastConnect = new WeakMap(), _Session_disconnected = new WeakMap(), _Session_L = new WeakMap(), _Session_onConnectionStateChange = new WeakMap(), _Session_lastState = new WeakMap(), _Session_connectMutex = new WeakMap(), _Session_instances = new WeakSet(), _Session_stateChangeHandler = async function _Session_stateChangeHandler(connected) {
    if (__classPrivateFieldGet(this, _Session_lastState, "f") !== connected) {
        setTimeout(() => {
            __classPrivateFieldGet(this, _Session_onConnectionStateChange, "f")?.call(this, connected);
        });
    }
    if (!connected) {
        this.transport.transport.deinitialize();
    }
    if (__classPrivateFieldGet(this, _Session_lastState, "f") === connected) {
        return;
    }
    __classPrivateFieldSet(this, _Session_lastState, connected, "f");
    if (connected || __classPrivateFieldGet(this, _Session_disconnected, "f")) {
        if (__classPrivateFieldGet(this, _Session_disconnected, "f")) {
            __classPrivateFieldGet(this, _Session_L, "f").debug("not reconnecting because explicitly disconnected");
        }
        return;
    }
    if (__classPrivateFieldGet(this, _Session_lastConnect, "f") && Date.now() - __classPrivateFieldGet(this, _Session_lastConnect, "f").getTime() <= 10 * _0_deps_js_1.SECOND) {
        __classPrivateFieldGet(this, _Session_L, "f").debug("reconnecting after a delay");
        await new Promise((r) => setTimeout(r, 3 * _0_deps_js_1.SECOND));
    }
    else {
        __classPrivateFieldGet(this, _Session_L, "f").debug("reconnecting");
    }
    await this.connect();
};
