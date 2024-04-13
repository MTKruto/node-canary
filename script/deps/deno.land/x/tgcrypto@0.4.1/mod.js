"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cbc256Decrypt = exports.cbc256Encrypt = exports.ctr256 = exports.__settCtr256StateState = exports.__getCtr256StateValues = exports.destroyCtr256State = exports.createCtr256State = exports.ige256Decrypt = exports.ige256Encrypt = exports.init = void 0;
const tgcrypto_js_1 = __importDefault(require("./tgcrypto.js"));
// deno-lint-ignore no-explicit-any
let module_;
const promise = (0, tgcrypto_js_1.default)().then((v) => module_ = v);
async function init() {
    await promise;
}
exports.init = init;
function checkIgeParams(data, key, iv) {
    if (data.byteLength == 0) {
        throw new TypeError("data must not be empty");
    }
    else if (data.byteLength % 16 != 0) {
        throw new TypeError("data must consist of a number of bytes that is divisible by 16");
    }
    else if (key.byteLength != 32) {
        throw new TypeError("key must be 32 bytes");
    }
    else if (iv.byteLength != 32) {
        throw new TypeError("iv must be 32 bytes");
    }
}
/**
 * Performs IGE-256 encryption.
 *
 * @param data The unencrypted data, larger than a byte, divisible by 16
 * @param key 32-byte encryption key
 * @param iv 32-byte initialization vector
 */
function ige256Encrypt(data, key, iv) {
    checkIgeParams(data, key, iv);
    const out = module_._malloc(data.byteLength);
    const datap = module_._malloc(data.byteLength);
    module_.HEAPU8.set(data, datap);
    module_.ccall("ige256_encrypt", "void", ["pointer", "pointer", "number", "array", "array"], [datap, out, data.byteLength, key, iv]);
    try {
        return module_.HEAPU8.slice(out, out + data.byteLength);
    }
    finally {
        module_._free(out);
        module_._free(datap);
    }
}
exports.ige256Encrypt = ige256Encrypt;
/**
 * Performs IGE-256 decryption.
 *
 * @param data The encrypted data, larger than a byte, divisible by 16
 * @param key 32-byte encryption key
 * @param iv 32-byte initialization vector
 */
function ige256Decrypt(data, key, iv) {
    checkIgeParams(data, key, iv);
    const out = module_._malloc(data.byteLength);
    const datap = module_._malloc(data.byteLength);
    module_.HEAPU8.set(data, datap);
    module_.ccall("ige256_decrypt", "void", ["pointer", "pointer", "number", "array", "array"], [datap, out, data.byteLength, key, iv]);
    try {
        return module_.HEAPU8.slice(out, out + data.byteLength);
    }
    finally {
        module_._free(out);
        module_._free(datap);
    }
}
exports.ige256Decrypt = ige256Decrypt;
function checkCtrParams(data, key) {
    if (data.byteLength == 0) {
        throw new TypeError("data must not be empty");
    }
    else if (key.byteLength != 32) {
        throw new TypeError("key must be 32 bytes");
    }
}
function createCtr256State(iv) {
    if (iv.byteLength != 16) {
        throw new TypeError("iv must be 16 bytes");
    }
    const state = {
        ivp: module_._malloc(16),
        statep: module_._malloc(1),
    };
    module_.HEAPU8.set(iv, state.ivp);
    module_.HEAPU8[state.statep] = 0;
    return state;
}
exports.createCtr256State = createCtr256State;
function destroyCtr256State(state) {
    module_._free(state.ivp);
    module_._free(state.statep);
}
exports.destroyCtr256State = destroyCtr256State;
function __getCtr256StateValues(state) {
    return {
        iv: module_.HEAPU8.slice(state.ivp, state.ivp + 16),
        state: module_.HEAPU8.slice(state.statep, state.statep + 1),
    };
}
exports.__getCtr256StateValues = __getCtr256StateValues;
function __settCtr256StateState(state, state_) {
    if (state_.byteLength != 1) {
        throw new Error("state_ must be 1 byte");
    }
    module_.HEAPU8.set(state_, state.statep);
}
exports.__settCtr256StateState = __settCtr256StateState;
/**
 * Performs CTR-256 encryption/decryption.
 *
 * @param data The data, larger than a byte
 * @param key 32-byte encryption key
 * @param iv 16-byte initialization vector
 * @param state Result of `createCtr256State()`
 */
function ctr256(data, key, state) {
    checkCtrParams(data, key);
    const datap = module_._malloc(data.byteLength);
    module_.HEAPU8.set(data, datap);
    module_.ccall("ctr256", "void", ["pointer", "number", "array", "pointer", "pointer"], [datap, data.byteLength, key, state.ivp, state.statep]);
    data.set(module_.HEAPU8.slice(datap, datap + data.byteLength));
    module_._free(datap);
}
exports.ctr256 = ctr256;
function checkCbcParams(data, key, iv) {
    if (data.byteLength == 0) {
        throw new TypeError("data must not be empty");
    }
    else if (data.byteLength % 16 != 0) {
        throw new TypeError("data must consist of a number of bytes that is divisible by 16");
    }
    else if (key.byteLength != 32) {
        throw new TypeError("key must be 32 bytes");
    }
    else if (iv.byteLength != 16) {
        throw new TypeError("iv must be 16 bytes");
    }
}
/**
 * Performs CBC-256 encryption.
 *
 * @param data The unencrypted data, larger than a byte, divisible by 16
 * @param key 32-byte encryption key
 * @param iv 16-byte initialization vector
 */
function cbc256Encrypt(data, key, iv) {
    checkCbcParams(data, key, iv);
    const datap = module_._malloc(data.byteLength);
    module_.HEAPU8.set(data, datap);
    module_.ccall("cbc256_encrypt", "void", ["pointer", "number", "array", "array"], [datap, data.byteLength, key, iv]);
    try {
        return module_.HEAPU8.slice(datap, datap + data.byteLength);
    }
    finally {
        module_._free(datap);
    }
}
exports.cbc256Encrypt = cbc256Encrypt;
/**
 * Performs CBC-256 decryption.
 *
 * @param data The encrypted data, larger than a byte, divisible by 16
 * @param key 32-byte encryption key
 * @param iv 16-byte initialization vector
 */
function cbc256Decrypt(data, key, iv) {
    checkCbcParams(data, key, iv);
    const datap = module_._malloc(data.byteLength);
    module_.HEAPU8.set(data, datap);
    module_.ccall("cbc256_decrypt", "void", ["pointer", "number", "array", "array"], [datap, data.byteLength, key, iv]);
    try {
        return module_.HEAPU8.slice(datap, datap + data.byteLength);
    }
    finally {
        module_._free(datap);
    }
}
exports.cbc256Decrypt = cbc256Decrypt;
