import { id, name } from "./1_tl_object.js";
import { TLReader } from "./4_tl_reader.js";
export class RPCResult {
    static get [id]() {
        return 0xF35C6D01;
    }
    get [name]() {
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
        const reader = new TLReader(buffer);
        const messageId = reader.readInt64();
        const result = reader.readObject();
        return new RPCResult(messageId, result);
    }
}
