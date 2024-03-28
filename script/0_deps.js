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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = exports.gzip = exports.gunzip = exports.initTgCrypto = exports.ige256Encrypt = exports.ige256Decrypt = exports.factorize = exports.ctr256 = exports.extension = exports.contentType = exports.encodeBase64 = exports.decodeBase64 = exports.path = void 0;
__exportStar(require("./deps/deno.land/std@0.221.0/assert/mod.js"), exports);
exports.path = __importStar(require("./deps/deno.land/std@0.221.0/path/mod.js"));
var base64_js_1 = require("./deps/deno.land/std@0.221.0/encoding/base64.js");
Object.defineProperty(exports, "decodeBase64", { enumerable: true, get: function () { return base64_js_1.decodeBase64; } });
Object.defineProperty(exports, "encodeBase64", { enumerable: true, get: function () { return base64_js_1.encodeBase64; } });
const content_type_js_1 = require("./deps/deno.land/std@0.221.0/media_types/content_type.js");
const contentType = (extentionOrType) => {
    if (extentionOrType == "tgs") {
        return "application/x-tgsticker";
    }
    else {
        return (0, content_type_js_1.contentType)(extentionOrType);
    }
};
exports.contentType = contentType;
const extension_js_1 = require("./deps/deno.land/std@0.221.0/media_types/extension.js");
function extension(mimeType) {
    if (mimeType == "application/x-tgsticker") {
        return "tgs";
    }
    else {
        return (0, extension_js_1.extension)(mimeType) || "unknown";
    }
}
exports.extension = extension;
var mod_js_1 = require("./deps/deno.land/x/tgcrypto@0.3.3/mod.js");
Object.defineProperty(exports, "ctr256", { enumerable: true, get: function () { return mod_js_1.ctr256; } });
Object.defineProperty(exports, "factorize", { enumerable: true, get: function () { return mod_js_1.factorize; } });
Object.defineProperty(exports, "ige256Decrypt", { enumerable: true, get: function () { return mod_js_1.ige256Decrypt; } });
Object.defineProperty(exports, "ige256Encrypt", { enumerable: true, get: function () { return mod_js_1.ige256Encrypt; } });
Object.defineProperty(exports, "initTgCrypto", { enumerable: true, get: function () { return mod_js_1.init; } });
var mod_js_2 = require("./deps/raw.githubusercontent.com/MTKruto/compress/main/mod.js");
Object.defineProperty(exports, "gunzip", { enumerable: true, get: function () { return mod_js_2.gunzip; } });
Object.defineProperty(exports, "gzip", { enumerable: true, get: function () { return mod_js_2.gzip; } });
var mod_js_3 = require("./deps/deno.land/x/html_parser@v0.1.3/src/mod.js");
Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return mod_js_3.Parser; } });
