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
// deno-lint-ignore-file no-explicit-any
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TLReader_instances, _TLReader_deserializeEnum, _TLReader_deserializeType, _TLReader_deserializeVector, _TLReader_deserializePrimitive;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TLReader = exports.TLError = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _0_utilities_js_1 = require("./0_utilities.js");
class TLError extends Error {
}
exports.TLError = TLError;
class TLReader {
    constructor(_buffer) {
        _TLReader_instances.add(this);
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
    unread(count) {
        const newOffest = this._buffer.byteOffset - count;
        if (newOffest < 0) {
            throw new TLError("No data has been read");
        }
        this._buffer = new Uint8Array(this._buffer.buffer, newOffest);
    }
    readInt24(signed = true) {
        const buffer = this.read(24 / 8);
        return Number((0, _1_utilities_js_1.bigIntFromBuffer)(buffer, true, signed));
    }
    readInt32(signed = true) {
        const buffer = this.read(32 / 8);
        return Number((0, _1_utilities_js_1.bigIntFromBuffer)(buffer, true, signed));
    }
    unreadInt32() {
        this.unread(32 / 8);
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
        return (0, _1_utilities_js_1.decodeText)(this.readBytes());
    }
    async readType(name, schema) {
        if ((0, _0_utilities_js_1.isOptionalParam)(name)) {
            name = (0, _0_utilities_js_1.getOptionalParamInnerType)(name);
        }
        const primitive = __classPrivateFieldGet(this, _TLReader_instances, "m", _TLReader_deserializePrimitive).call(this, name);
        if (primitive !== undefined) {
            return primitive;
        }
        const id = this.readInt32(false);
        if (name == _0_utilities_js_1.X) {
            const typeName = schema.identifierToName[id];
            if (!typeName) {
                throw new TLError(`Unknown constructor: ${id.toString(16)}`);
            }
            this.unreadInt32();
            return await this.readType(typeName, schema);
        }
        if (id == _0_utilities_js_1.VECTOR) {
            return await __classPrivateFieldGet(this, _TLReader_instances, "m", _TLReader_deserializeVector).call(this, name, schema);
        }
        const definition = schema.definitions[name];
        if (definition) {
            return await __classPrivateFieldGet(this, _TLReader_instances, "m", _TLReader_deserializeType).call(this, name, definition, id, schema);
        }
        const deserializedEnum = await __classPrivateFieldGet(this, _TLReader_instances, "m", _TLReader_deserializeEnum).call(this, name, id, schema);
        if (deserializedEnum !== undefined) {
            return deserializedEnum;
        }
        throw new TLError(`Unknown type: ${name} ID ${id}`);
    }
}
exports.TLReader = TLReader;
_TLReader_instances = new WeakSet(), _TLReader_deserializeEnum = async function _TLReader_deserializeEnum(type, id, schema) {
    const name = schema.identifierToName[id];
    if (!name) {
        return;
    }
    const definition = schema.definitions[name];
    if (definition[2] != type) {
        return;
    }
    return await __classPrivateFieldGet(this, _TLReader_instances, "m", _TLReader_deserializeType).call(this, name, definition, id, schema);
}, _TLReader_deserializeType = async function _TLReader_deserializeType(type, desc, id, schema) {
    if (desc[0] != id) {
        throw new TLError(`Expected constructor ${desc[0].toString(16)} but got ${id}`);
    }
    const type_ = { _: type };
    const flagFields = {};
    for (const [name, type] of desc[1]) {
        if ((0, _0_utilities_js_1.isOptionalParam)(type)) {
            const { flagField, bitIndex } = (0, _0_utilities_js_1.analyzeOptionalParam)(type);
            const bits = flagFields[flagField];
            if ((bits & (1 << bitIndex)) == 0) {
                continue;
            }
        }
        if (type == "#") {
            flagFields[name] = this.readInt32();
            continue;
        }
        const value = await this.readType(type, schema);
        if (typeof value !== "boolean" || value) {
            type_[name] = value;
        }
    }
    return type_;
}, _TLReader_deserializeVector = async function _TLReader_deserializeVector(type, schema) {
    const itemType = (0, _0_utilities_js_1.getVectorItemType)(type);
    if (!itemType) {
        throw new TLError(`Expected Vector but received ${type}`);
    }
    const size = this.readInt32();
    const array = new Array();
    for (let i = 0; i < size; ++i) {
        array.push(await this.readType(itemType, schema));
    }
    return array;
}, _TLReader_deserializePrimitive = function _TLReader_deserializePrimitive(type) {
    switch (type) {
        case "bytes":
            return this.readBytes();
        case "int128":
            return this.readInt128();
        case "int256":
            return this.readInt256();
        case "double":
            return this.readDouble();
        case "long":
            return this.readInt64();
        case "true":
            return true;
        case "int":
            return this.readInt32();
        case "Bool": {
            const id = this.readInt32(false);
            if (id == _0_utilities_js_1.BOOL_TRUE) {
                return true;
            }
            else if (id == _0_utilities_js_1.BOOL_FALSE) {
                return false;
            }
            else {
                throw new TLError(`Expected boolTrue or boolFalse but got ${id}`);
            }
        }
        case "string":
            return this.readString();
    }
};
