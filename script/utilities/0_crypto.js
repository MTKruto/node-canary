"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTR = void 0;
const _0_deps_js_1 = require("../0_deps.js");
class CTR {
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
        (0, _0_deps_js_1.ctr256)(data, this.key, this.iv, this.state);
    }
}
exports.CTR = CTR;
