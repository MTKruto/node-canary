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
import { assertEquals, assertFalse } from "../0_deps.js";
import { TLRawWriter } from "./0_tl_raw_writer.js";
export const flags = Symbol("flags");
export const id = Symbol("id");
export const params = Symbol("params");
export const paramDesc = Symbol("paramDesc");
export const length = Symbol("length");
export const serialize = Symbol("serialize");
export const as = Symbol("as");
export const name = Symbol("name");
export function isOptionalParam(ntype) {
    return ntype.includes("?");
}
export function analyzeOptionalParam(ntype) {
    if (!isOptionalParam(ntype)) {
        throw new Error("Parameter not optional");
    }
    const flagField = ntype.split(".")[0];
    assertEquals(typeof flagField, "string");
    const bitIndex = Number(ntype.split("?")[0].split(".")[1]);
    assertFalse(isNaN(bitIndex));
    return { flagField, bitIndex };
}
function serializeSingleParam(writer, value, type, ntype, debugInfo) {
    const valueRepr = value == null ? null : (typeof value === "object" && name in value) ? value[name] : value.constructor.name;
    if (isTLObjectConstructor(type)) {
        if ((type[name] == "TypeX" && value instanceof TLObject) ||
            value instanceof type) {
            writer.write(value[serialize]());
            return;
        }
        else {
            throw new TypeError(`Expected ${type[name]} but received ${valueRepr} ${debugInfo}`);
        }
    }
    if (type == Uint8Array) {
        if ((value instanceof Uint8Array)) {
            writer.writeBytes(value);
        }
        else {
            throw new TypeError(`Expected Uint8Array but received ${valueRepr} ${debugInfo}`);
        }
    }
    switch (type) {
        case "bigint":
            if (typeof value === "bigint") {
                if (ntype == "int128") {
                    writer.writeInt128(value);
                }
                else if (ntype === "int256") {
                    writer.writeInt256(value);
                }
                else {
                    writer.writeInt64(value);
                }
            }
            else {
                throw new TypeError(`Expected bigint but received ${valueRepr} ${debugInfo}`);
            }
            break;
        case "boolean":
            if (typeof value === "boolean") {
                if (value) {
                    writer.writeInt32(0x997275B5);
                }
                else {
                    writer.writeInt32(0xBC799737);
                }
            }
            else {
                throw new TypeError(`Expected boolean but received ${valueRepr} ${debugInfo}`);
            }
            break;
        case "number":
            //
            if (value == null) {
                value = 0;
            }
            //
            if (typeof value === "number") {
                if (ntype == "double") {
                    writer.writeDouble(value);
                }
                else {
                    writer.writeInt32(value);
                }
            }
            else {
                throw new TypeError(`Expected number but received ${valueRepr} ${debugInfo}`);
            }
            break;
        case "string":
            if (typeof value === "string") {
                writer.writeString(value);
            }
            else if (value instanceof Uint8Array) {
                writer.writeBytes(value);
            }
            else {
                writer.writeString("");
            }
            // else {
            //   throw new TypeError(`Expected string or Uint8Array but received ${valueRepr}`);
            // }
            break;
        case "true":
            if (value !== true) {
                throw new TypeError(`Expected true but received ${valueRepr} ${debugInfo}`);
            }
    }
}
export class TLObject {
    static get [name]() {
        return `ctor_${this.constructor.name}`;
    }
    get [name]() {
        return this.constructor[name];
    }
    static get [paramDesc]() {
        // unimpl
        return [];
    }
    get [length]() {
        return this[serialize]().byteLength;
    }
    [serialize]() {
        const writer = new TLRawWriter();
        writer.writeInt32(this[id], false);
        for (const [i, [value, type, ntype]] of this[params].entries()) {
            if (isOptionalParam(ntype) && value == null) {
                continue;
            }
            const debugInfo = `[${this[id].toString(16).toUpperCase()} ${i}]`;
            if (type == flags) {
                let flags = 0;
                const flagField_ = value;
                for (const [value, _, ntype] of this[params]) {
                    if (isOptionalParam(ntype)) {
                        const { flagField, bitIndex } = analyzeOptionalParam(ntype);
                        if (flagField == flagField_) {
                            if (value != null) {
                                flags |= 1 << bitIndex;
                            }
                        }
                    }
                }
                writer.writeInt32(flags);
                continue;
            }
            if (type instanceof Array) {
                const itemsType = type[0];
                if (!Array.isArray(value)) {
                    throw new TypeError("Expected array");
                }
                writer.writeInt32(0x1CB5C415); // vector constructor
                writer.writeInt32(value.length);
                for (const item of value) {
                    serializeSingleParam(writer, item, itemsType, ntype, debugInfo);
                }
                continue;
            }
            serializeSingleParam(writer, value, type, ntype, debugInfo);
        }
        return writer.buffer;
    }
    [as](constructor) {
        if (this instanceof constructor) {
            return this;
        }
        else {
            throw new TypeError(`Expected ${constructor[name]} but received ${this[name]}`);
        }
    }
    toJSON() {
        // deno-lint-ignore no-explicit-any
        const r = { _: this[name] + `#${this[id].toString(16).toUpperCase()}` };
        const desc = this.constructor[paramDesc];
        for (const [name] of desc) {
            const n = name;
            if (n in this && this[n] !== undefined) {
                if (typeof this[n] === "bigint") {
                    r[name] = String(this[n]);
                }
                else if (this[n] instanceof Uint8Array) {
                    const buffer = this[n];
                    r[name] = "";
                    for (const b of buffer) {
                        r[name] += b.toString(16).padStart(2, "0").toUpperCase();
                    }
                }
                else {
                    r[name] = this[n];
                }
            }
        }
        return r;
    }
}
export function isTLObjectConstructor(t) {
    // deno-lint-ignore no-explicit-any
    return t[paramDesc] instanceof Array;
}
