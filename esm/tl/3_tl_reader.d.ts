import { TLRawReader } from "./0_tl_raw_reader.js";
import { TLObject } from "./1_tl_object.js";
export type ReadObject = boolean | TLObject | Array<ReadObject | TLObject>;
export declare class TLReader extends TLRawReader {
    readObject(id?: number): ReadObject;
}
