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
import { TLError, TLRawReader } from "./0_tl_raw_reader.js";
import { getObjectIdentifier, schema } from "./0_api.js";
import { unreachable } from "../0_deps.js";
import { gunzip } from "../1_utilities.js";
import { analyzeOptionalParam, BOOL_FALSE, BOOL_TRUE, getOptionalParamInnerType, getVectorItemType, GZIP_PACKED, isOptionalParam, VECTOR, X } from "./1_utilities.js";
export class TLReader extends TLRawReader {
    constructor() {
        super(...arguments);
        _TLReader_instances.add(this);
    }
    async deserialize(type) {
        if (isOptionalParam(type)) {
            type = getOptionalParamInnerType(type);
        }
        const primitive = __classPrivateFieldGet(this, _TLReader_instances, "m", _TLReader_deserializePrimitive).call(this, type);
        if (primitive !== undefined) {
            return primitive;
        }
        const id = this.readInt32(false);
        if (id == GZIP_PACKED) {
            const buffer = await gunzip(this.readBytes());
            return await new TLReader(buffer).deserialize(type);
        }
        if (type == X) {
            const typeName = getObjectIdentifier(id);
            if (!typeName) {
                throw new TLError(`Unknown constructor: ${id.toString(16)}`);
            }
            this.unreadInt32();
            return await this.deserialize(typeName);
        }
        if (id == VECTOR) {
            return await __classPrivateFieldGet(this, _TLReader_instances, "m", _TLReader_deserializeVector).call(this, type);
        }
        const type_ = schema[type];
        if (type_) {
            return await __classPrivateFieldGet(this, _TLReader_instances, "m", _TLReader_deserializeType).call(this, type, type_, id);
        }
        const deserializedEnum = await __classPrivateFieldGet(this, _TLReader_instances, "m", _TLReader_deserializeEnum).call(this, type, id);
        if (deserializedEnum !== undefined) {
            return deserializedEnum;
        }
        unreachable(`unknown type: ${type} id ${id}`);
    }
}
_TLReader_instances = new WeakSet(), _TLReader_deserializeEnum = async function _TLReader_deserializeEnum(type, id) {
    const name = getObjectIdentifier(id);
    if (!name) {
        return;
    }
    const definition = schema[name];
    if (definition[2] != type) {
        return;
    }
    return await __classPrivateFieldGet(this, _TLReader_instances, "m", _TLReader_deserializeType).call(this, name, definition, id);
}, _TLReader_deserializeType = async function _TLReader_deserializeType(type, desc, id) {
    if (desc[0] != id) {
        throw new TLError(`Expected constructor ${desc[0].toString(16)} but got ${id}`);
    }
    const type_ = { _: type };
    const flagFields = {};
    for (const [name, type] of desc[1]) {
        if (isOptionalParam(type)) {
            const { flagField, bitIndex } = analyzeOptionalParam(type);
            const bits = flagFields[flagField];
            if ((bits & (1 << bitIndex)) == 0) {
                continue;
            }
        }
        if (type == "#") {
            flagFields[name] = this.readInt32();
            continue;
        }
        const value = await this.deserialize(type);
        if (typeof value !== "boolean" || value) {
            type_[name] = value;
        }
    }
    return type_;
}, _TLReader_deserializeVector = async function _TLReader_deserializeVector(type) {
    const itemType = getVectorItemType(type);
    if (!itemType) {
        throw new TLError(`Expected Vector but received ${type}`);
    }
    const size = this.readInt32();
    const array = new Array();
    for (let i = 0; i < size; ++i) {
        array.push(await this.deserialize(itemType));
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
            if (id == BOOL_TRUE) {
                return true;
            }
            else if (id == BOOL_FALSE) {
                return false;
            }
            else {
                unreachable(`expected boolTrue or boolFalse but got ${id}`);
            }
            break;
        }
        case "string":
            return this.readString();
    }
};
