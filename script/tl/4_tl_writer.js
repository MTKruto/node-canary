"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TLWriter = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _0_tl_raw_writer_js_1 = require("./0_tl_raw_writer.js");
const _1_tl_object_js_1 = require("./1_tl_object.js");
class TLWriter extends _0_tl_raw_writer_js_1.TLRawWriter {
    writeObject(object) {
        if (Array.isArray(object)) {
            this.writeInt32(_1_utilities_js_1.VECTOR_CONSTRUCTOR, false);
            this.writeInt32(object.length);
            for (const item of object) {
                this.writeObject(item);
            }
        }
        else if (typeof object === "boolean") {
            if (object) {
                this.writeInt32(0x997275b5, false);
            }
            else {
                this.writeInt32(0xbc799737, false);
            }
        }
        else {
            this.write(object[_1_tl_object_js_1.serialize]());
        }
        return this;
    }
}
exports.TLWriter = TLWriter;
