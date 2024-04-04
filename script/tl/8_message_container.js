"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageContainer = void 0;
const _1_tl_object_js_1 = require("./1_tl_object.js");
const _4_tl_reader_js_1 = require("./4_tl_reader.js");
const _5_tl_writer_js_1 = require("./5_tl_writer.js");
const _7_message_js_1 = require("./7_message.js");
class MessageContainer {
    static get [_1_tl_object_js_1.id]() {
        return 0x73F1F8DC;
    }
    get [_1_tl_object_js_1.name]() {
        return "msg_container";
    }
    constructor(id, seqNo, messages) {
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
        Object.defineProperty(this, "messages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: messages
        });
    }
    [_1_tl_object_js_1.serialize]() {
        const writer = new _5_tl_writer_js_1.TLWriter();
        writer.writeInt64(this.id);
        writer.writeInt32(this.seqNo);
        writer.writeInt32(8 + this.messages.map(_7_message_js_1.calculateLength).reduce((a, b) => a + b));
        writer.writeInt32(MessageContainer[_1_tl_object_js_1.id], false);
        writer.writeInt32(this.messages.length);
        for (const message of this.messages) {
            writer.write(message[_1_tl_object_js_1.serialize]());
        }
        return writer.buffer;
    }
    static deserialize(buffer) {
        const reader = new _4_tl_reader_js_1.TLReader(buffer);
        const length = reader.readInt32();
        const messages = new Array();
        for (let i = 0; i < length; i++) {
            messages.push(_7_message_js_1.Message_.deserialize(reader));
        }
        return messages;
    }
}
exports.MessageContainer = MessageContainer;
