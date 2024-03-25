import { serialize } from "./1_tl_object.js";
import { ReadObject, TLReader } from "./3_tl_reader.js";
import { RPCResult } from "./4_rpc_result.js";
export declare function calculateLength(object: Message_ | ReadObject): number;
export declare class Message_ {
    readonly id: bigint;
    readonly seqNo: number;
    readonly body: ReadObject | RPCResult;
    constructor(id: bigint, seqNo: number, body: ReadObject | RPCResult);
    [serialize](): Uint8Array;
    static deserialize(reader: TLReader): Message_;
}
