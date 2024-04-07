"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cbc256Decrypt = exports.cbc256Encrypt = exports.ctr256 = exports.ige256Decrypt = exports.ige256Encrypt = exports.init = void 0;
const tgcrypto_js_1 = __importDefault(require("./tgcrypto.js"));
// deno-lint-ignore no-explicit-any
let module_;
const promise = (0, tgcrypto_js_1.default)().then((v) => module_ = v);
async function init() {
    await promise;
}
exports.init = init;
function checkIgeParams(data, key, iv) {
    if (data.length == 0) {
        throw new TypeError("data must not be empty");
    }
    else if (data.length % 16 != 0) {
        throw new TypeError("data must consist of a number of bytes that is divisible by 16");
    }
    else if (key.length != 32) {
        throw new TypeError("key must be 32 bytes");
    }
    else if (iv.length != 32) {
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
    const out = module_._malloc(data.length);
    const datap = module_._malloc(data.length);
    module_.HEAPU8.set(data, datap);
    module_.ccall("ige256_encrypt", "void", ["pointer", "pointer", "number", "array", "array"], [datap, out, data.length, key, iv]);
    try {
        return module_.HEAPU8.slice(out, out + data.length);
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
    const out = module_._malloc(data.length);
    const datap = module_._malloc(data.length);
    module_.HEAPU8.set(data, datap);
    module_.ccall("ige256_decrypt", "void", ["pointer", "pointer", "number", "array", "array"], [datap, out, data.length, key, iv]);
    try {
        return module_.HEAPU8.slice(out, out + data.length);
    }
    finally {
        module_._free(out);
        module_._free(datap);
    }
}
exports.ige256Decrypt = ige256Decrypt;
function checkCtrParams(data, key, iv, state) {
    if (data.length == 0) {
        throw new TypeError("data must not be empty");
    }
    else if (key.length != 32) {
        throw new TypeError("key must be 32 bytes");
    }
    else if (iv.length != 16) {
        throw new TypeError("iv must be 16 bytes");
    }
    else if (state.length != 1) {
        throw new TypeError("state must be 1 byte");
    }
}
/**
 * Performs CTR-256 encryption/decryption.
 *
 * @param data The data, larger than a byte
 * @param key 32-byte encryption key
 * @param iv 16-byte initialization vector
 * @param state 1-byte state
 */
function ctr256(data, key, iv, state) {
    checkCtrParams(data, key, iv, state);
    const datap = module_._malloc(data.length);
    module_.HEAPU8.set(data, datap);
    const ivp = module_._malloc(iv.length);
    module_.HEAPU8.set(iv, ivp);
    const statep = module_._malloc(state.length);
    module_.HEAPU8.set(state, statep);
    module_.ccall("ctr256", "void", ["pointer", "number", "array", "pointer", "pointer"], [datap, data.length, key, ivp, statep]);
    data.set(module_.HEAPU8.slice(datap, datap + data.length));
    iv.set(module_.HEAPU8.slice(ivp, ivp + iv.length));
    state.set(module_.HEAPU8.slice(statep, statep + state.length));
    module_._free(datap);
    module_._free(ivp);
    module_._free(statep);
}
exports.ctr256 = ctr256;
function checkCbcParams(data, key, iv) {
    if (data.length == 0) {
        throw new TypeError("data must not be empty");
    }
    else if (data.length % 16 != 0) {
        throw new TypeError("data must consist of a number of bytes that is divisible by 16");
    }
    else if (key.length != 32) {
        throw new TypeError("key must be 32 bytes");
    }
    else if (iv.length != 16) {
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
    const datap = module_._malloc(data.length);
    module_.HEAPU8.set(data, datap);
    module_.ccall("cbc256_encrypt", "void", ["pointer", "number", "array", "array"], [datap, data.length, key, iv]);
    try {
        return module_.HEAPU8.slice(datap, datap + data.length);
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
    const datap = module_._malloc(data.length);
    module_.HEAPU8.set(data, datap);
    module_.ccall("cbc256_decrypt", "void", ["pointer", "number", "array", "array"], [datap, data.length, key, iv]);
    try {
        return module_.HEAPU8.slice(datap, datap + data.length);
    }
    finally {
        module_._free(datap);
    }
}
exports.cbc256Decrypt = cbc256Decrypt;
