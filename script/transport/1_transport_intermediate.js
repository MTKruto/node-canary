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
var _TransportIntermediate_connection, _TransportIntermediate_obfuscated;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportIntermediate = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _0_obfuscation_js_1 = require("./0_obfuscation.js");
const _0_transport_js_1 = require("./0_transport.js");
class TransportIntermediate extends _0_transport_js_1.Transport {
    constructor(connection, obfuscated = false) {
        super();
        _TransportIntermediate_connection.set(this, void 0);
        _TransportIntermediate_obfuscated.set(this, void 0);
        __classPrivateFieldSet(this, _TransportIntermediate_connection, connection, "f");
        __classPrivateFieldSet(this, _TransportIntermediate_obfuscated, obfuscated, "f");
    }
    async initialize() {
        if (__classPrivateFieldGet(this, _TransportIntermediate_obfuscated, "f")) {
            this.obfuscationParameters = await (0, _0_obfuscation_js_1.getObfuscationParameters)(0xEEEEEEEE, __classPrivateFieldGet(this, _TransportIntermediate_connection, "f"));
        }
        else {
            await __classPrivateFieldGet(this, _TransportIntermediate_connection, "f").write(new Uint8Array([0xEE, 0xEE, 0xEE, 0xEE]));
        }
    }
    async receive() {
        let length;
        {
            let buffer = new Uint8Array(4);
            await __classPrivateFieldGet(this, _TransportIntermediate_connection, "f").read(buffer);
            buffer = await this.decrypt(buffer);
            const dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
            length = dataView.getUint32(0, true);
        }
        const buffer = new Uint8Array(length);
        await __classPrivateFieldGet(this, _TransportIntermediate_connection, "f").read(buffer);
        return await this.decrypt(buffer);
    }
    async send(buffer) {
        const length = (0, _1_utilities_js_1.bufferFromBigInt)(buffer.length, 4);
        const data = (0, _0_deps_js_1.concat)([length, buffer]);
        await __classPrivateFieldGet(this, _TransportIntermediate_connection, "f").write(await this.encrypt(data));
    }
}
exports.TransportIntermediate = TransportIntermediate;
_TransportIntermediate_connection = new WeakMap(), _TransportIntermediate_obfuscated = new WeakMap();
