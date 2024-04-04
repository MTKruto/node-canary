import { TLRawWriter } from "./0_tl_raw_writer.js";
import { ReadObject } from "./4_tl_reader.js";
export declare class TLWriter extends TLRawWriter {
    writeObject(object: ReadObject): typeof this;
}
