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
var _TransportAbridged_initialized, _TransportAbridged_connection, _TransportAbridged_obfuscated;
import { concat } from "../0_deps.js";
import { bufferFromBigInt } from "../1_utilities.js";
import { getObfuscationParameters } from "./0_obfuscation.js";
import { Transport } from "./0_transport.js";
export class TransportAbridged extends Transport {
    constructor(connection, obfuscated = false) {
        super();
        _TransportAbridged_initialized.set(this, false);
        _TransportAbridged_connection.set(this, void 0);
        _TransportAbridged_obfuscated.set(this, void 0);
        __classPrivateFieldSet(this, _TransportAbridged_connection, connection, "f");
        __classPrivateFieldSet(this, _TransportAbridged_obfuscated, obfuscated, "f");
    }
    async initialize() {
        if (!__classPrivateFieldGet(this, _TransportAbridged_initialized, "f")) {
            if (__classPrivateFieldGet(this, _TransportAbridged_obfuscated, "f")) {
                this.obfuscationParameters = await getObfuscationParameters(0xEFEFEFEF, __classPrivateFieldGet(this, _TransportAbridged_connection, "f"));
            }
            else {
                await __classPrivateFieldGet(this, _TransportAbridged_connection, "f").write(new Uint8Array([0xEF]));
            }
            __classPrivateFieldSet(this, _TransportAbridged_initialized, true, "f");
        }
        else {
            throw new Error("Transport already initialized");
        }
    }
    async receive() {
        let length;
        {
            const buffer = new Uint8Array(1);
            await __classPrivateFieldGet(this, _TransportAbridged_connection, "f").read(buffer);
            this.decrypt(buffer);
            if (buffer[0] < 0x7F) {
                length = buffer[0];
            }
            else {
                const buffer = new Uint8Array(3);
                await __classPrivateFieldGet(this, _TransportAbridged_connection, "f").read(buffer);
                this.decrypt(buffer);
                const dataView = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
                length = dataView.getUint16(0, true);
            }
        }
        length *= 4;
        const buffer = new Uint8Array(length);
        await __classPrivateFieldGet(this, _TransportAbridged_connection, "f").read(buffer);
        this.decrypt(buffer);
        return buffer;
    }
    async send(buffer) {
        if (!this.initialized) {
            throw new Error("Transport not initialized");
        }
        const bufferLength = buffer.length / 4;
        const header = new Uint8Array([bufferLength >= 0x7F ? 0x7F : bufferLength]);
        const length = bufferLength >= 0x7F ? bufferFromBigInt(bufferLength, 3) : new Uint8Array();
        const data = concat([header, length, buffer]);
        this.encrypt(data);
        await __classPrivateFieldGet(this, _TransportAbridged_connection, "f").write(data);
    }
    deinitialize() {
        super.deinitialize();
        __classPrivateFieldSet(this, _TransportAbridged_initialized, false, "f");
    }
    get initialized() {
        return __classPrivateFieldGet(this, _TransportAbridged_initialized, "f");
    }
}
_TransportAbridged_initialized = new WeakMap(), _TransportAbridged_connection = new WeakMap(), _TransportAbridged_obfuscated = new WeakMap();
