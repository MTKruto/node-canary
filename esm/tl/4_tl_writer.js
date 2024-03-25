import { VECTOR_CONSTRUCTOR } from "../1_utilities.js";
import { TLRawWriter } from "./0_tl_raw_writer.js";
import { serialize } from "./1_tl_object.js";
export class TLWriter extends TLRawWriter {
    writeObject(object) {
        if (Array.isArray(object)) {
            this.writeInt32(VECTOR_CONSTRUCTOR, false);
            this.writeInt32(object.length);
            for (const item of object) {
                this.writeObject(item);
            }
        }
        else if (typeof object === "boolean") {
            if (object) {
                this.writeInt32(0x997275b5, false);
            }
            else {
                this.writeInt32(0xbc799737, false);
            }
        }
        else {
            this.write(object[serialize]());
        }
        return this;
    }
}
