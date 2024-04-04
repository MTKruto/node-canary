import { id, name, serialize } from "./1_tl_object.js";
import { Message_ } from "./7_message.js";
export declare class MessageContainer {
    readonly id: bigint;
    readonly seqNo: number;
    messages: Message_[];
    static get [id](): number;
    get [name](): string;
    constructor(id: bigint, seqNo: number, messages: Message_[]);
    [serialize](): Uint8Array;
    static deserialize(buffer: Uint8Array): Message_[];
}
