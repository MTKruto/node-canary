/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
import { initTgCrypto } from "../0_deps.js";
import { ConnectionError } from "../0_errors.js";
import { transportProviderWebSocket } from "../3_transport.js";
import { INITIAL_DC } from "../4_constants.js";
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
        this.initialDc = params?.initialDc ?? INITIAL_DC;
        this.transportProvider = params?.transportProvider ?? transportProviderWebSocket();
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
        await initTgCrypto();
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
            throw new ConnectionError("Not connected.");
        }
        await this.transport.transport.deinitialize();
        await this.transport.connection.close();
    }
    get disconnected() {
        return !this.transport?.transport.initialized;
    }
}
_ClientAbstract_dc = new WeakMap();
