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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TLWriter_instances, _TLWriter_serialize, _TLWriter_serializeVector, _TLWriter_serializePrimitive, _TLWriter_isTypeValid;
// deno-lint-ignore-file no-explicit-any
import { schema as schema_ } from "./0_api.js";
import { TLError } from "./0_tl_raw_reader.js";
import { TLRawWriter } from "./0_tl_raw_writer.js";
import { analyzeOptionalParam, assertIsValidType, BOOL_FALSE, BOOL_TRUE, getOptionalParamInnerType, getVectorItemType, isOptionalParam, repr, VECTOR } from "./1_utilities.js";
export class TLWriter extends TLRawWriter {
    constructor() {
        super(...arguments);
        _TLWriter_instances.add(this);
    }
    serialize(value, schema = schema_) {
        assertIsValidType(value, schema);
        __classPrivateFieldGet(this, _TLWriter_instances, "m", _TLWriter_serialize).call(this, value._, value, "", schema);
        return this;
    }
}
_TLWriter_instances = new WeakSet(), _TLWriter_serialize = function _TLWriter_serialize(type, value, debugInfo, schema) {
    if (__classPrivateFieldGet(this, _TLWriter_instances, "m", _TLWriter_serializePrimitive).call(this, type, value, debugInfo)) {
        return;
    }
    if (__classPrivateFieldGet(this, _TLWriter_instances, "m", _TLWriter_serializeVector).call(this, type, value, debugInfo, schema)) {
        return;
    }
    assertIsValidType(value, schema);
    const maybeDefinition = schema[value._];
    if (!maybeDefinition) {
        throw new TLError(`Unknown type: ${value._}`);
    }
    if (type != "!X" && !__classPrivateFieldGet(this, _TLWriter_instances, "m", _TLWriter_isTypeValid).call(this, type, value, schema)) {
        throw new TLError(`Expected ${type} but got ${value._}`);
    }
    const type__ = value;
    const [id, parameters_] = maybeDefinition;
    this.writeInt32(id, false);
    for (let [i, [name, type]] of parameters_.entries()) {
        if (isOptionalParam(type) && type__[name] === undefined) {
            continue;
        }
        const debugInfo = ` [0x${id.toString(16).toUpperCase()}::${i}]`;
        if (type == "#") {
            let flags = 0;
            const flagField_ = name;
            for (const [name, type] of parameters_) {
                if (isOptionalParam(type)) {
                    const { flagField, bitIndex } = analyzeOptionalParam(type);
                    if (flagField == flagField_) {
                        if (type__[name] !== undefined) {
                            flags |= 1 << bitIndex;
                        }
                    }
                }
            }
            this.writeInt32(flags);
            continue;
        }
        if (type__[name] === undefined && !isOptionalParam(type)) {
            throw new Error(`Missing required parameter: ${name}`);
        }
        if (isOptionalParam(type)) {
            type = getOptionalParamInnerType(type);
        }
        __classPrivateFieldGet(this, _TLWriter_instances, "m", _TLWriter_serialize).call(this, type, type__[name], debugInfo, schema);
    }
    return;
}, _TLWriter_serializeVector = function _TLWriter_serializeVector(type, value, debugInfo, schema) {
    const itemType = getVectorItemType(type);
    if (!itemType) {
        return false;
    }
    if (!Array.isArray(value)) {
        throw new TypeError(`Expected array but received ${repr(value)}${debugInfo}`);
    }
    this.writeInt32(VECTOR, false);
    this.writeInt32(value.length);
    for (const item of value) {
        __classPrivateFieldGet(this, _TLWriter_instances, "m", _TLWriter_serialize).call(this, itemType, item, debugInfo, schema);
    }
    return true;
}, _TLWriter_serializePrimitive = function _TLWriter_serializePrimitive(type, value, debugInfo) {
    const valueRepr = repr(value);
    switch (type) {
        case "bytes":
            if ((value instanceof Uint8Array)) {
                this.writeBytes(value);
            }
            else {
                throw new TLError(`Expected Uint8Array but received ${valueRepr}${debugInfo}`);
            }
            return true;
        case "int128":
            if (typeof value === "bigint") {
                this.writeInt128(value);
            }
            else {
                throw new TLError(`Expected bigint but received ${valueRepr}${debugInfo}`);
            }
            return true;
        case "int256":
            if (typeof value === "bigint") {
                this.writeInt256(value);
            }
            else {
                throw new TLError(`Expected bigint but received ${valueRepr}${debugInfo}`);
            }
            return true;
        case "long":
            if (typeof value === "bigint") {
                this.writeInt64(value);
            }
            else {
                throw new TLError(`Expected bigint but received ${valueRepr}${debugInfo}`);
            }
            return true;
        case "Bool":
            if (typeof value === "boolean") {
                if (value) {
                    this.writeInt32(BOOL_TRUE);
                }
                else {
                    this.writeInt32(BOOL_FALSE);
                }
            }
            else {
                throw new TLError(`Expected boolean but received ${valueRepr}${debugInfo}`);
            }
            return true;
        case "int":
            //
            if (value == null) {
                value = 0;
            }
            //
            if (typeof value === "number") {
                this.writeInt32(value);
            }
            else {
                throw new TLError(`Expected number but received ${valueRepr}${debugInfo}`);
            }
            return true;
        case "double":
            //
            if (value == null) {
                value = 0;
            }
            //
            if (typeof value === "number") {
                this.writeDouble(value);
            }
            else {
                throw new TLError(`Expected number but received ${valueRepr}${debugInfo}`);
            }
            return true;
        case "string":
            if (typeof value === "string") {
                this.writeString(value);
            }
            else if (value instanceof Uint8Array) {
                this.writeBytes(value);
            }
            else {
                this.writeString("");
            }
            // else {
            //   throw new TypeError(`Expected string or Uint8Array but received ${valueRepr}`);
            // }
            return true;
        case "true":
            if (value !== true) {
                throw new TLError(`Expected true but received ${valueRepr}${debugInfo}`);
            }
            return true;
        default:
            return false;
    }
}, _TLWriter_isTypeValid = function _TLWriter_isTypeValid(type, value, schema) {
    if (type == value._) {
        return true;
    }
    return schema[value._]?.[2] === type;
};
