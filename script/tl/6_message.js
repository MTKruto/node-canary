"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message_ = exports.calculateLength = void 0;
const _1_tl_object_js_1 = require("./1_tl_object.js");
const _3_tl_reader_js_1 = require("./3_tl_reader.js");
const _4_rpc_result_js_1 = require("./4_rpc_result.js");
const _4_tl_writer_js_1 = require("./4_tl_writer.js");
function calculateLength(object) {
    let length = 0;
    if (Array.isArray(object)) {
        length += 32 / 8; // vector constructor
        length += 32 / 8; // number of items
        for (const item of object) {
            length += calculateLength(item);
        }
    }
    else if (typeof object === "boolean") {
        length += 32 / 8; // constructor
    }
    else {
        length += object[_1_tl_object_js_1.serialize]().length;
    }
    return length;
}
exports.calculateLength = calculateLength;
class Message_ {
    constructor(id, seqNo, body) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: id
        });
        Object.defineProperty(this, "seqNo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: seqNo
        });
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: body
        });
    }
    [_1_tl_object_js_1.serialize]() {
        if (this.body instanceof _4_rpc_result_js_1.RPCResult) {
            throw new Error("Not applicable");
        }
        return new _4_tl_writer_js_1.TLWriter()
            .writeInt64(this.id)
            .writeInt32(this.seqNo)
            .writeInt32(calculateLength(this.body))
            .writeObject(this.body)
            .buffer;
    }
    static deserialize(reader) {
        const id_ = reader.readInt64();
        const seqNo = reader.readInt32();
        const length = reader.readInt32();
        reader = new _3_tl_reader_js_1.TLReader(reader.read(length));
        const cid = reader.readInt32(false);
        let body;
        {
            if (cid == _4_rpc_result_js_1.RPCResult[_1_tl_object_js_1.id]) {
                body = _4_rpc_result_js_1.RPCResult.deserialize(reader.buffer);
            }
            else {
                body = reader.readObject(cid);
            }
        }
        return new Message_(id_, seqNo, body);
    }
}
exports.Message_ = Message_;
