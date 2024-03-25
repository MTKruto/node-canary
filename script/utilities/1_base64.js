"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64DecodeUrlSafe = exports.base64EncodeUrlSafe = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_bigint_js_1 = require("./0_bigint.js");
function base64EncodeUrlSafe(data) {
    return (0, _0_deps_js_1.encodeBase64)(data).replace(/=*$/, "").replaceAll("+", "-").replaceAll("/", "_");
}
exports.base64EncodeUrlSafe = base64EncodeUrlSafe;
function base64DecodeUrlSafe(data) {
    data = data.replaceAll("_", "/").replaceAll("-", "+");
    if (data.length != 4) {
        data += "=".repeat((0, _0_bigint_js_1.mod)(-data.length, 4));
    }
    return (0, _0_deps_js_1.decodeBase64)(data);
}
exports.base64DecodeUrlSafe = base64DecodeUrlSafe;
