"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPCResult = void 0;
const _1_tl_object_js_1 = require("./1_tl_object.js");
const _3_tl_reader_js_1 = require("./3_tl_reader.js");
class RPCResult {
    static get [_1_tl_object_js_1.id]() {
        return 0xF35C6D01;
    }
    get [_1_tl_object_js_1.name]() {
        return "rpc_result";
    }
    constructor(messageId, result) {
        Object.defineProperty(this, "messageId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: messageId
        });
        Object.defineProperty(this, "result", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: result
        });
    }
    static deserialize(buffer) {
        const reader = new _3_tl_reader_js_1.TLReader(buffer);
        const messageId = reader.readInt64();
        const result = reader.readObject();
        return new RPCResult(messageId, result);
    }
}
exports.RPCResult = RPCResult;
