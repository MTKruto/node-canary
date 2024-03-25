import { TLRawReader } from "./0_tl_raw_reader.js";
import { ParamDesc, TLObjectConstructor } from "./1_tl_object.js";
export declare function deserialize<T extends TLObjectConstructor<InstanceType<T>>>(reader: TLRawReader, paramDesc: ParamDesc, constructor: T): InstanceType<T>;
