"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rsaPad = void 0;
const dntShim = __importStar(require("../_dnt.shims.js"));
const _0_deps_js_1 = require("../0_deps.js");
const _0_bigint_js_1 = require("./0_bigint.js");
const _0_buffer_js_1 = require("./0_buffer.js");
const _0_hash_js_1 = require("./0_hash.js");
async function rsaPad(data, [serverKey, exponent]) {
    (0, _0_deps_js_1.assert)(data.length <= 144);
    let keyAesEncryptedInt;
    let tries = 0;
    do {
        if (++tries == 10) {
            throw new Error("Out of tries");
        }
        const dataWithPadding = (0, _0_buffer_js_1.concat)(data, new Uint8Array(192 - data.length));
        const dataPadReversed = new Uint8Array(dataWithPadding).reverse();
        const tempKey = dntShim.crypto.getRandomValues(new Uint8Array(32));
        const dataWithHash = (0, _0_buffer_js_1.concat)(dataPadReversed, await (0, _0_hash_js_1.sha256)((0, _0_buffer_js_1.concat)(tempKey, dataWithPadding)));
        const aesEncrypted = (0, _0_deps_js_1.ige256Encrypt)(dataWithHash, tempKey, new Uint8Array(32));
        const aesEncryptedSha256 = await (0, _0_hash_js_1.sha256)(aesEncrypted);
        const tempKeyXor = tempKey.map((v, i) => v ^ aesEncryptedSha256[i]);
        const keyAesEncrypted = (0, _0_buffer_js_1.concat)(tempKeyXor, aesEncrypted);
        (0, _0_deps_js_1.assertEquals)(keyAesEncrypted.length, 256);
        keyAesEncryptedInt = (0, _0_bigint_js_1.bigIntFromBuffer)(keyAesEncrypted, false, false);
    } while (keyAesEncryptedInt >= serverKey);
    const encryptedDataInt = (0, _0_bigint_js_1.modExp)(keyAesEncryptedInt, exponent, serverKey);
    const encryptedData = (0, _0_buffer_js_1.bufferFromBigInt)(encryptedDataInt, 256, false, false);
    (0, _0_deps_js_1.assertEquals)(encryptedData.length, 256);
    return encryptedData;
}
exports.rsaPad = rsaPad;
