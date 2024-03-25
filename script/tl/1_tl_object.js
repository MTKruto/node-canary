"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTLObjectConstructor = exports.TLObject = exports.analyzeOptionalParam = exports.isOptionalParam = exports.name = exports.as = exports.serialize = exports.length = exports.paramDesc = exports.params = exports.id = exports.flags = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_tl_raw_writer_js_1 = require("./0_tl_raw_writer.js");
exports.flags = Symbol("flags");
exports.id = Symbol("id");
exports.params = Symbol("params");
exports.paramDesc = Symbol("paramDesc");
exports.length = Symbol("length");
exports.serialize = Symbol("serialize");
exports.as = Symbol("as");
exports.name = Symbol("name");
function isOptionalParam(ntype) {
    return ntype.includes("?");
}
exports.isOptionalParam = isOptionalParam;
function analyzeOptionalParam(ntype) {
    if (!isOptionalParam(ntype)) {
        throw new Error("Parameter not optional");
    }
    const flagField = ntype.split(".")[0];
    (0, _0_deps_js_1.assertEquals)(typeof flagField, "string");
    const bitIndex = Number(ntype.split("?")[0].split(".")[1]);
    (0, _0_deps_js_1.assertFalse)(isNaN(bitIndex));
    return { flagField, bitIndex };
}
exports.analyzeOptionalParam = analyzeOptionalParam;
function serializeSingleParam(writer, value, type, ntype, debugInfo) {
    const valueRepr = value == null ? null : (typeof value === "object" && exports.name in value) ? value[exports.name] : value.constructor.name;
    if (isTLObjectConstructor(type)) {
        if ((type[exports.name] == "TypeX" && value instanceof TLObject) ||
            value instanceof type) {
            writer.write(value[exports.serialize]());
            return;
        }
        else {
            throw new TypeError(`Expected ${type[exports.name]} but received ${valueRepr} ${debugInfo}`);
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
class TLObject {
    static get [exports.name]() {
        return `ctor_${this.constructor.name}`;
    }
    get [exports.name]() {
        return this.constructor[exports.name];
    }
    static get [exports.paramDesc]() {
        // unimpl
        return [];
    }
    get [exports.length]() {
        return this[exports.serialize]().byteLength;
    }
    [exports.serialize]() {
        const writer = new _0_tl_raw_writer_js_1.TLRawWriter();
        writer.writeInt32(this[exports.id], false);
        for (const [i, [value, type, ntype]] of this[exports.params].entries()) {
            if (isOptionalParam(ntype) && value == null) {
                continue;
            }
            const debugInfo = `[${this[exports.id].toString(16).toUpperCase()} ${i}]`;
            if (type == exports.flags) {
                let flags = 0;
                const flagField_ = value;
                for (const [value, _, ntype] of this[exports.params]) {
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
    [exports.as](constructor) {
        if (this instanceof constructor) {
            return this;
        }
        else {
            throw new TypeError(`Expected ${constructor[exports.name]} but received ${this[exports.name]}`);
        }
    }
    toJSON() {
        // deno-lint-ignore no-explicit-any
        const r = { _: this[exports.name] + `#${this[exports.id].toString(16).toUpperCase()}` };
        const desc = this.constructor[exports.paramDesc];
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
exports.TLObject = TLObject;
function isTLObjectConstructor(t) {
    // deno-lint-ignore no-explicit-any
    return t[exports.paramDesc] instanceof Array;
}
exports.isTLObjectConstructor = isTLObjectConstructor;
