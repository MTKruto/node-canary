"use strict";
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
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
exports.Parser = exports.gzip = exports.gunzip = exports.initTgCrypto = exports.ige256Encrypt = exports.ige256Decrypt = exports.destroyCtr256State = exports.ctr256 = exports.createCtr256State = exports.extension = exports.contentType = exports.encodeBase64 = exports.decodeBase64 = exports.path = void 0;
// connection/1_connection_tcp.ts must be updated too when updating std.
__exportStar(require("./deps/deno.land/std@0.222.1/assert/mod.js"), exports);
exports.path = __importStar(require("./deps/deno.land/std@0.222.1/path/mod.js"));
var base64_js_1 = require("./deps/deno.land/std@0.222.1/encoding/base64.js");
Object.defineProperty(exports, "decodeBase64", { enumerable: true, get: function () { return base64_js_1.decodeBase64; } });
Object.defineProperty(exports, "encodeBase64", { enumerable: true, get: function () { return base64_js_1.encodeBase64; } });
const content_type_js_1 = require("./deps/deno.land/std@0.222.1/media_types/content_type.js");
const contentType = (extentionOrType) => {
    if (extentionOrType == "tgs") {
        return "application/x-tgsticker";
    }
    else {
        return (0, content_type_js_1.contentType)(extentionOrType);
    }
};
exports.contentType = contentType;
const extension_js_1 = require("./deps/deno.land/std@0.222.1/media_types/extension.js");
function extension(mimeType) {
    if (mimeType == "application/x-tgsticker") {
        return "tgs";
    }
    else {
        return (0, extension_js_1.extension)(mimeType) || "unknown";
    }
}
exports.extension = extension;
var mod_js_1 = require("./deps/deno.land/x/tgcrypto@0.4.1/mod.js");
Object.defineProperty(exports, "createCtr256State", { enumerable: true, get: function () { return mod_js_1.createCtr256State; } });
Object.defineProperty(exports, "ctr256", { enumerable: true, get: function () { return mod_js_1.ctr256; } });
Object.defineProperty(exports, "destroyCtr256State", { enumerable: true, get: function () { return mod_js_1.destroyCtr256State; } });
Object.defineProperty(exports, "ige256Decrypt", { enumerable: true, get: function () { return mod_js_1.ige256Decrypt; } });
Object.defineProperty(exports, "ige256Encrypt", { enumerable: true, get: function () { return mod_js_1.ige256Encrypt; } });
Object.defineProperty(exports, "initTgCrypto", { enumerable: true, get: function () { return mod_js_1.init; } });
var mod_js_2 = require("./deps/raw.githubusercontent.com/MTKruto/compress/main/mod.js");
Object.defineProperty(exports, "gunzip", { enumerable: true, get: function () { return mod_js_2.gunzip; } });
Object.defineProperty(exports, "gzip", { enumerable: true, get: function () { return mod_js_2.gzip; } });
var mod_js_3 = require("./deps/deno.land/x/html_parser@v0.1.3/src/mod.js");
Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return mod_js_3.Parser; } });
