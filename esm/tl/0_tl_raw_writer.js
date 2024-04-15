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
import { concat } from "../0_deps.js";
import { bufferFromBigInt } from "../1_utilities.js";
export class TLRawWriter {
    constructor() {
        Object.defineProperty(this, "_buffer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Uint8Array()
        });
    }
    get buffer() {
        return this._buffer;
    }
    write(buffer) {
        this._buffer = concat([this._buffer, buffer]);
        return this;
    }
    writeInt24(int, signed = true) {
        this.write(bufferFromBigInt(int, 24 / 8, true, signed));
        return this;
    }
    writeInt32(int, signed = true) {
        this.write(bufferFromBigInt(int, 32 / 8, true, signed));
        return this;
    }
    writeInt64(int, signed = true) {
        this.write(bufferFromBigInt(int, 64 / 8, true, signed));
        return this;
    }
    writeDouble(double) {
        const buffer = new Uint8Array(8);
        new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength).setFloat64(0, double, true);
        this.write(buffer);
        return this;
    }
    writeInt128(int, signed = true) {
        this.write(bufferFromBigInt(int, 128 / 8, true, signed));
        return this;
    }
    writeInt256(int, signed = true) {
        this.write(bufferFromBigInt(int, 256 / 8, true, signed));
        return this;
    }
    writeBytes(bytes) {
        let padding;
        if (bytes.length > 253) {
            this.write(new Uint8Array([254]));
            this.writeInt24(bytes.length);
            padding = bytes.length % 4;
        }
        else {
            this.write(new Uint8Array([bytes.length]));
            padding = (bytes.length + 1) % 4;
        }
        this.write(bytes);
        if (padding > 0) {
            padding = 4 - padding;
            this.write(new Uint8Array(padding));
        }
        return this;
    }
    writeString(string) {
        this.writeBytes(new TextEncoder().encode(string));
        return this;
    }
}
