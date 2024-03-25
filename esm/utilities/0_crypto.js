import { ctr256 } from "../0_deps.js";
export class CTR {
    constructor(key, iv) {
        Object.defineProperty(this, "key", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: key
        });
        Object.defineProperty(this, "iv", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: iv
        });
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Uint8Array(1)
        });
    }
    call(data) {
        ctr256(data, this.key, this.iv, this.state);
    }
}
