"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserialize = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_tl_object_js_1 = require("./1_tl_object.js");
const _2_types_js_1 = require("./2_types.js");
function deserializeSingleParam(reader, type, ntype) {
    if ((0, _1_tl_object_js_1.isTLObjectConstructor)(type)) {
        const cid = reader.readInt32(false);
        const constructor = _2_types_js_1.map.get(cid);
        if (!constructor) {
            throw new Error(`Constructor with ID ${cid.toString(16)} not found`);
        }
        return deserialize(reader, constructor[_1_tl_object_js_1.paramDesc], constructor);
    }
    if (type == Uint8Array) {
        return reader.readBytes();
    }
    else {
        switch (type) {
            case "bigint":
                if (ntype == "int128") {
                    return reader.readInt128();
                }
                else if (ntype === "int256") {
                    return reader.readInt256();
                }
                else {
                    return reader.readInt64();
                }
            case "boolean":
                return reader.readInt32(false) == 0x997275B5;
            case "number":
                if (ntype == "double") {
                    return reader.readDouble();
                }
                else {
                    return reader.readInt32();
                }
            case "string":
                return reader.readString();
            case "true":
                return true;
            default:
                throw new Error(`Unexpected type ${type}`);
        }
    }
}
function deserialize(reader, paramDesc, constructor) {
    const params = {};
    const flagFields = {};
    for (const [name, type, ntype] of paramDesc) {
        if ((0, _1_tl_object_js_1.isOptionalParam)(ntype)) {
            const { flagField, bitIndex } = (0, _1_tl_object_js_1.analyzeOptionalParam)(ntype);
            const bits = flagFields[flagField];
            if ((bits & (1 << bitIndex)) == 0) {
                continue;
            }
        }
        if (type == _1_tl_object_js_1.flags && ntype == "#") {
            flagFields[name] = reader.readInt32();
            continue;
        }
        if (type instanceof Array) {
            (0, _0_deps_js_1.assertEquals)(reader.readInt32(false), 0x1CB5C415);
            const count = reader.readInt32();
            const items = new Array();
            for (let i = 0; i < count; i++) {
                items.push(deserializeSingleParam(reader, type[0], ntype));
            }
            params[name] = items;
            continue;
        }
        const value = deserializeSingleParam(reader, type, ntype);
        if (typeof value !== "boolean" || value) {
            params[name] = value;
        }
    }
    return new constructor(params);
}
exports.deserialize = deserialize;
