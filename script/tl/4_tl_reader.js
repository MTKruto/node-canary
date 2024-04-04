"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TLReader = void 0;
const _0_tl_raw_reader_js_1 = require("./0_tl_raw_reader.js");
const _1_tl_object_js_1 = require("./1_tl_object.js");
const _2_types_js_1 = require("./2_types.js");
const _3_deserialize_js_1 = require("./3_deserialize.js");
class TLReader extends _0_tl_raw_reader_js_1.TLRawReader {
    readObject(id) {
        if (!id) {
            id = this.readInt32(false);
        }
        if (id == 0x1CB5C415) {
            const count = this.readInt32();
            const items = new Array();
            for (let i = 0; i < count; i++) {
                items.push(this.readObject());
            }
            return items;
        }
        else if (id == 0x997275b5) {
            return true;
        }
        else if (id == 0xbc799737) {
            return false;
        }
        const constructor = _2_types_js_1.map.get(id);
        if (constructor) {
            return (0, _3_deserialize_js_1.deserialize)(this, constructor[_1_tl_object_js_1.paramDesc], constructor);
        }
        throw new _0_tl_raw_reader_js_1.TLError(`Unknown constructor ${id.toString(16)}`);
    }
}
exports.TLReader = TLReader;
