import { id, name, serialize } from "./1_tl_object.js";
import { TLReader } from "./3_tl_reader.js";
import { TLWriter } from "./4_tl_writer.js";
import { calculateLength, Message_ } from "./6_message.js";
export class MessageContainer {
    static get [id]() {
        return 0x73F1F8DC;
    }
    get [name]() {
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
    [serialize]() {
        const writer = new TLWriter();
        writer.writeInt64(this.id);
        writer.writeInt32(this.seqNo);
        writer.writeInt32(8 + this.messages.map(calculateLength).reduce((a, b) => a + b));
        writer.writeInt32(MessageContainer[id], false);
        writer.writeInt32(this.messages.length);
        for (const message of this.messages) {
            writer.write(message[serialize]());
        }
        return writer.buffer;
    }
    static deserialize(buffer) {
        const reader = new TLReader(buffer);
        const length = reader.readInt32();
        const messages = new Array();
        for (let i = 0; i < length; i++) {
            messages.push(Message_.deserialize(reader));
        }
        return messages;
    }
}
