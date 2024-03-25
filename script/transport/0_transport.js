"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
class Transport {
    constructor() {
        Object.defineProperty(this, "obfuscationParameters", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
    }
    encrypt(buffer) {
        if (this.obfuscationParameters) {
            this.obfuscationParameters.encryptionCTR.call(buffer);
        }
    }
    decrypt(buffer) {
        if (this.obfuscationParameters) {
            this.obfuscationParameters.decryptionCTR.call(buffer);
        }
    }
}
exports.Transport = Transport;
