import { bufferFromBigInt, concat } from "../1_utilities.js";
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
        this._buffer = concat(this._buffer, buffer);
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
