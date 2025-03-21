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
var _ConnectionTCP_instances, _ConnectionTCP_hostname, _ConnectionTCP_port, _ConnectionTCP_socket, _ConnectionTCP_rMutex, _ConnectionTCP_wMutex, _ConnectionTCP_buffer, _ConnectionTCP_nextResolve, _ConnectionTCP_rejectRead, _ConnectionTCP_assertConnected;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionTCP = void 0;
const node_net_1 = require("node:net");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const L = (0, _1_utilities_js_1.getLogger)("ConnectionTCP");
const errConnectionNotOpen = new _0_errors_js_1.ConnectionError("Connection not open");
class ConnectionTCP {
    constructor(hostname, port) {
        _ConnectionTCP_instances.add(this);
        _ConnectionTCP_hostname.set(this, void 0);
        _ConnectionTCP_port.set(this, void 0);
        _ConnectionTCP_socket.set(this, void 0);
        _ConnectionTCP_rMutex.set(this, new _1_utilities_js_1.Mutex());
        _ConnectionTCP_wMutex.set(this, new _1_utilities_js_1.Mutex());
        _ConnectionTCP_buffer.set(this, new Array());
        _ConnectionTCP_nextResolve.set(this, null);
        Object.defineProperty(this, "stateChangeHandler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _ConnectionTCP_hostname, hostname, "f");
        __classPrivateFieldSet(this, _ConnectionTCP_port, port, "f");
    }
    open() {
        __classPrivateFieldSet(this, _ConnectionTCP_socket, new node_net_1.Socket(), "f");
        __classPrivateFieldGet(this, _ConnectionTCP_socket, "f").on("close", () => {
            __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_rejectRead).call(this);
            this.stateChangeHandler?.(false);
        });
        const mutex = new _1_utilities_js_1.Mutex();
        __classPrivateFieldGet(this, _ConnectionTCP_socket, "f").on("data", async (data) => {
            const unlock = await mutex.lock();
            for (const byte of data) {
                __classPrivateFieldGet(this, _ConnectionTCP_buffer, "f").push(byte);
            }
            if (__classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f") != null && __classPrivateFieldGet(this, _ConnectionTCP_buffer, "f").length >= __classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f")[0]) {
                const resolve = __classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f")[1].resolve;
                __classPrivateFieldSet(this, _ConnectionTCP_nextResolve, null, "f");
                resolve();
            }
            unlock();
        });
        return new Promise((resolve, reject) => {
            __classPrivateFieldGet(this, _ConnectionTCP_socket, "f").connect(__classPrivateFieldGet(this, _ConnectionTCP_port, "f"), __classPrivateFieldGet(this, _ConnectionTCP_hostname, "f"));
            __classPrivateFieldGet(this, _ConnectionTCP_socket, "f").once("error", reject);
            __classPrivateFieldGet(this, _ConnectionTCP_socket, "f").once("connect", () => {
                __classPrivateFieldGet(this, _ConnectionTCP_socket, "f").off("error", reject);
                resolve();
                this.stateChangeHandler?.(true);
                L.debug("connected to", __classPrivateFieldGet(this, _ConnectionTCP_hostname, "f"), "port", __classPrivateFieldGet(this, _ConnectionTCP_port, "f"));
            });
        });
    }
    get connected() {
        return __classPrivateFieldGet(this, _ConnectionTCP_socket, "f")?.readyState == "open";
    }
    async read(p) {
        __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_assertConnected).call(this);
        const unlock = await __classPrivateFieldGet(this, _ConnectionTCP_rMutex, "f").lock();
        try {
            __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_assertConnected).call(this);
            if (__classPrivateFieldGet(this, _ConnectionTCP_buffer, "f").length < p.length) {
                await new Promise((resolve, reject) => __classPrivateFieldSet(this, _ConnectionTCP_nextResolve, [p.length, { resolve, reject }], "f"));
            }
            p.set(__classPrivateFieldGet(this, _ConnectionTCP_buffer, "f").splice(0, p.length));
        }
        finally {
            unlock();
        }
    }
    async write(p) {
        __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_assertConnected).call(this);
        const unlock = await __classPrivateFieldGet(this, _ConnectionTCP_wMutex, "f").lock();
        try {
            __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_assertConnected).call(this);
            try {
                await new Promise((resolve, reject) => {
                    __classPrivateFieldGet(this, _ConnectionTCP_socket, "f").write(p, (err) => {
                        (err === undefined || err == null) ? resolve() : reject(err);
                    });
                });
            }
            catch (err) {
                if (!this.connected) {
                    throw errConnectionNotOpen;
                }
                else {
                    throw err;
                }
            }
        }
        finally {
            unlock();
        }
    }
    close() {
        __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_assertConnected).call(this);
        __classPrivateFieldGet(this, _ConnectionTCP_socket, "f").destroy();
        __classPrivateFieldSet(this, _ConnectionTCP_socket, undefined, "f");
    }
}
exports.ConnectionTCP = ConnectionTCP;
_ConnectionTCP_hostname = new WeakMap(), _ConnectionTCP_port = new WeakMap(), _ConnectionTCP_socket = new WeakMap(), _ConnectionTCP_rMutex = new WeakMap(), _ConnectionTCP_wMutex = new WeakMap(), _ConnectionTCP_buffer = new WeakMap(), _ConnectionTCP_nextResolve = new WeakMap(), _ConnectionTCP_instances = new WeakSet(), _ConnectionTCP_rejectRead = function _ConnectionTCP_rejectRead() {
    if (__classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f") != null) {
        __classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f")[1].reject(errConnectionNotOpen);
        __classPrivateFieldSet(this, _ConnectionTCP_nextResolve, null, "f");
    }
}, _ConnectionTCP_assertConnected = function _ConnectionTCP_assertConnected() {
    if (!this.connected) {
        throw errConnectionNotOpen;
    }
};
