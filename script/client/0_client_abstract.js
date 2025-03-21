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
var _ClientAbstract_dc, _ClientAbstract_disconnected;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientAbstract = void 0;
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
const _0_errors_js_1 = require("../0_errors.js");
const _3_transport_js_1 = require("../3_transport.js");
const _4_constants_js_1 = require("../4_constants.js");
// @ts-ignore: lib
const defaultTransportProvider = typeof dntShim.Deno === "undefined" ? _3_transport_js_1.transportProviderWebSocket : _3_transport_js_1.transportProviderTcp;
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
        _ClientAbstract_disconnected.set(this, false);
        this.initialDc = params?.initialDc ?? _4_constants_js_1.INITIAL_DC;
        this.transportProvider = params?.transportProvider ?? defaultTransportProvider();
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
        __classPrivateFieldSet(this, _ClientAbstract_disconnected, false, "f");
    }
    async reconnect(dc) {
        await this.transport?.transport.deinitialize();
        await this.transport?.connection.close();
        if (dc) {
            this.setDc(dc);
        }
        await this.connect();
    }
    async disconnect() {
        if (!this.transport) {
            throw new _0_errors_js_1.ConnectionError("Not connected.");
        }
        await this.transport.transport.deinitialize();
        await this.transport.connection.close();
        __classPrivateFieldSet(this, _ClientAbstract_disconnected, true, "f");
    }
    get disconnected() {
        return __classPrivateFieldGet(this, _ClientAbstract_disconnected, "f");
    }
}
exports.ClientAbstract = ClientAbstract;
_ClientAbstract_dc = new WeakMap(), _ClientAbstract_disconnected = new WeakMap();
