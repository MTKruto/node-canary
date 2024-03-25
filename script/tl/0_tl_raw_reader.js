"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TLRawReader = exports.TLError = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
class TLError extends Error {
}
exports.TLError = TLError;
class TLRawReader {
    constructor(_buffer) {
        Object.defineProperty(this, "_buffer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: _buffer
        });
    }
    get buffer() {
        return this._buffer;
    }
    read(count) {
        if (this._buffer.length < count) {
            throw new TLError("No data remaining");
        }
        const buffer = this._buffer.slice(0, count);
        this._buffer = this._buffer.subarray(count);
        return buffer;
    }
    readInt24(signed = true) {
        const buffer = this.read(24 / 8);
        return Number((0, _1_utilities_js_1.bigIntFromBuffer)(buffer, true, signed));
    }
    readInt32(signed = true) {
        const buffer = this.read(32 / 8);
        return Number((0, _1_utilities_js_1.bigIntFromBuffer)(buffer, true, signed));
    }
    readInt64(signed = true) {
        const buffer = this.read(64 / 8);
        return (0, _1_utilities_js_1.bigIntFromBuffer)(buffer, true, signed);
    }
    readDouble() {
        const buffer = this.read(8);
        return new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength).getFloat64(0, true);
    }
    readInt128(signed = true) {
        const buffer = this.read(128 / 8);
        return (0, _1_utilities_js_1.bigIntFromBuffer)(buffer, true, signed);
    }
    readInt256(signed = true) {
        const buffer = this.read(256 / 8);
        return (0, _1_utilities_js_1.bigIntFromBuffer)(buffer, true, signed);
    }
    readBytes() {
        let L = this.read(1)[0];
        let padding;
        if (L > 253) {
            L = this.readInt24();
            padding = L % 4;
        }
        else {
            padding = (L + 1) % 4;
        }
        const bytes = this.read(L);
        if (padding > 0) {
            padding = 4 - padding;
            this.read(padding);
        }
        return bytes;
    }
    readString() {
        return new TextDecoder().decode(this.readBytes());
    }
}
exports.TLRawReader = TLRawReader;
