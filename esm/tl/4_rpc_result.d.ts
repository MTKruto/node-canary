import { id, name } from "./1_tl_object.js";
import { ReadObject } from "./3_tl_reader.js";
export declare class RPCResult {
    readonly messageId: bigint;
    readonly result: ReadObject;
    static get [id](): number;
    get [name](): string;
    constructor(messageId: bigint, result: ReadObject);
    static deserialize(buffer: Uint8Array): RPCResult;
}
