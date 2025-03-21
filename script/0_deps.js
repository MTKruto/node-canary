"use strict";
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = exports.initTgCrypto = exports.ige256Encrypt = exports.ige256Decrypt = exports.contentType = exports.encodeBase64 = exports.decodeBase64 = exports.iterateReader = exports.toArrayBuffer = exports.SECOND = exports.MINUTE = exports.concat = exports.toFileUrl = exports.join = exports.isAbsolute = exports.extname = exports.basename = void 0;
exports.extension = extension;
__exportStar(require("./deps/jsr.io/@std/assert/1.0.11/mod.js"), exports);
var basename_js_1 = require("./deps/jsr.io/@std/path/1.0.8/basename.js");
Object.defineProperty(exports, "basename", { enumerable: true, get: function () { return basename_js_1.basename; } });
var extname_js_1 = require("./deps/jsr.io/@std/path/1.0.8/extname.js");
Object.defineProperty(exports, "extname", { enumerable: true, get: function () { return extname_js_1.extname; } });
var is_absolute_js_1 = require("./deps/jsr.io/@std/path/1.0.8/is_absolute.js");
Object.defineProperty(exports, "isAbsolute", { enumerable: true, get: function () { return is_absolute_js_1.isAbsolute; } });
var join_js_1 = require("./deps/jsr.io/@std/path/1.0.8/join.js");
Object.defineProperty(exports, "join", { enumerable: true, get: function () { return join_js_1.join; } });
var to_file_url_js_1 = require("./deps/jsr.io/@std/path/1.0.8/to_file_url.js");
Object.defineProperty(exports, "toFileUrl", { enumerable: true, get: function () { return to_file_url_js_1.toFileUrl; } });
var concat_js_1 = require("./deps/jsr.io/@std/bytes/1.0.5/concat.js");
Object.defineProperty(exports, "concat", { enumerable: true, get: function () { return concat_js_1.concat; } });
var constants_js_1 = require("./deps/jsr.io/@std/datetime/0.225.3/constants.js");
Object.defineProperty(exports, "MINUTE", { enumerable: true, get: function () { return constants_js_1.MINUTE; } });
Object.defineProperty(exports, "SECOND", { enumerable: true, get: function () { return constants_js_1.SECOND; } });
var to_array_buffer_js_1 = require("./deps/jsr.io/@std/streams/1.0.9/to_array_buffer.js");
Object.defineProperty(exports, "toArrayBuffer", { enumerable: true, get: function () { return to_array_buffer_js_1.toArrayBuffer; } });
var iterate_reader_js_1 = require("./deps/jsr.io/@std/io/0.225.2/iterate_reader.js");
Object.defineProperty(exports, "iterateReader", { enumerable: true, get: function () { return iterate_reader_js_1.iterateReader; } });
var base64_js_1 = require("./deps/jsr.io/@std/encoding/1.0.7/base64.js");
Object.defineProperty(exports, "decodeBase64", { enumerable: true, get: function () { return base64_js_1.decodeBase64; } });
Object.defineProperty(exports, "encodeBase64", { enumerable: true, get: function () { return base64_js_1.encodeBase64; } });
const content_type_js_1 = require("./deps/jsr.io/@std/media-types/1.1.0/content_type.js");
const contentType = (extentionOrType) => {
    if (extentionOrType == "tgs") {
        return "application/x-tgsticker";
    }
    else {
        return (0, content_type_js_1.contentType)(extentionOrType);
    }
};
exports.contentType = contentType;
const extension_js_1 = require("./deps/jsr.io/@std/media-types/1.1.0/extension.js");
function extension(mimeType) {
    if (mimeType == "application/x-tgsticker") {
        return "tgs";
    }
    else {
        return (0, extension_js_1.extension)(mimeType) || "unknown";
    }
}
var mod_js_1 = require("./deps/jsr.io/@roj/tgcrypto/1.0.1/dist/mod.js");
Object.defineProperty(exports, "ige256Decrypt", { enumerable: true, get: function () { return mod_js_1.ige256Decrypt; } });
Object.defineProperty(exports, "ige256Encrypt", { enumerable: true, get: function () { return mod_js_1.ige256Encrypt; } });
Object.defineProperty(exports, "initTgCrypto", { enumerable: true, get: function () { return mod_js_1.init; } });
var htmlparser2_1 = require("htmlparser2");
Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return htmlparser2_1.Parser; } });
