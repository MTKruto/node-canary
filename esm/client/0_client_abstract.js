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
import * as dntShim from "../_dnt.shims.js";
import { initTgCrypto } from "../0_deps.js";
import { ConnectionError } from "../0_errors.js";
import { transportProviderTcp, transportProviderWebSocket } from "../3_transport.js";
import { INITIAL_DC } from "../4_constants.js";
// @ts-ignore: lib
const defaultTransportProvider = typeof dntShim.Deno === "undefined" ? transportProviderWebSocket : transportProviderTcp;
export class ClientAbstract {
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
        this.initialDc = params?.initialDc ?? INITIAL_DC;
        this.transportProvider = params?.transportProvider ?? defaultTransportProvider();
        this.cdn = params?.cdn ?? false;
    }
    get dc() {
        return __classPrivateFieldGet(this, _ClientAbstract_dc, "f") ?? this.initialDc;
    }
    get dcId() {
        if (!this.transport) {
            throw new ConnectionError("Not connected.");
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
        await initTgCrypto();
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
            throw new ConnectionError("Not connected.");
        }
        await this.transport.transport.deinitialize();
        await this.transport.connection.close();
        __classPrivateFieldSet(this, _ClientAbstract_disconnected, true, "f");
    }
    get disconnected() {
        return __classPrivateFieldGet(this, _ClientAbstract_disconnected, "f");
    }
}
_ClientAbstract_dc = new WeakMap(), _ClientAbstract_disconnected = new WeakMap();
