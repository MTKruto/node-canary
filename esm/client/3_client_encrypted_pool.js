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
var _ClientEncryptedPool_index, _ClientEncryptedPool_requestCounter, _ClientEncryptedPool_clients, _ClientEncryptedPool_requestPerClient;
export class ClientEncryptedPool {
    constructor(requestPerClient) {
        _ClientEncryptedPool_index.set(this, 0);
        _ClientEncryptedPool_requestCounter.set(this, 0);
        _ClientEncryptedPool_clients.set(this, new Array());
        _ClientEncryptedPool_requestPerClient.set(this, void 0);
        __classPrivateFieldSet(this, _ClientEncryptedPool_requestPerClient, requestPerClient, "f");
    }
    get size() {
        return __classPrivateFieldGet(this, _ClientEncryptedPool_clients, "f").length;
    }
    add(client) {
        __classPrivateFieldGet(this, _ClientEncryptedPool_clients, "f").push(client);
        const invoke = client.invoke.bind(client);
        client.invoke = (...args) => {
            var _a, _b;
            if (__classPrivateFieldSet(this, _ClientEncryptedPool_requestCounter, (_a = __classPrivateFieldGet(this, _ClientEncryptedPool_requestCounter, "f"), ++_a), "f") >= __classPrivateFieldGet(this, _ClientEncryptedPool_requestPerClient, "f")) {
                __classPrivateFieldSet(this, _ClientEncryptedPool_index, (_b = __classPrivateFieldGet(this, _ClientEncryptedPool_index, "f"), _b++, _b), "f");
                if (__classPrivateFieldGet(this, _ClientEncryptedPool_index, "f") >= __classPrivateFieldGet(this, _ClientEncryptedPool_clients, "f").length - 1) {
                    __classPrivateFieldSet(this, _ClientEncryptedPool_index, 0, "f");
                }
            }
            return invoke(...args);
        };
    }
    nextClient() {
        const client = __classPrivateFieldGet(this, _ClientEncryptedPool_clients, "f")[__classPrivateFieldGet(this, _ClientEncryptedPool_index, "f")];
        return client;
    }
    disconnect() {
        for (const client of __classPrivateFieldGet(this, _ClientEncryptedPool_clients, "f")) {
            client.disconnect();
        }
    }
    map(callback) {
        __classPrivateFieldGet(this, _ClientEncryptedPool_clients, "f").map(callback);
    }
}
_ClientEncryptedPool_index = new WeakMap(), _ClientEncryptedPool_requestCounter = new WeakMap(), _ClientEncryptedPool_clients = new WeakMap(), _ClientEncryptedPool_requestPerClient = new WeakMap();
