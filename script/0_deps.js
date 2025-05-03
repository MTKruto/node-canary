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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = exports.initTgCrypto = exports.ige256Encrypt = exports.ige256Decrypt = exports.contentType = exports.encodeBase64 = exports.decodeBase64 = exports.toArrayBuffer = exports.SECOND = exports.MINUTE = exports.iterateReader = exports.concat = exports.delay = exports.isAbsolute = exports.toFileUrl = exports.basename = exports.extname = exports.join = exports.AssertionError = exports.unreachable = exports.assertEquals = exports.assertFalse = exports.assert = void 0;
exports.extension = extension;
var assert_js_1 = require("./deps/jsr.io/@std/assert/1.0.13/assert.js");
Object.defineProperty(exports, "assert", { enumerable: true, get: function () { return assert_js_1.assert; } });
var false_js_1 = require("./deps/jsr.io/@std/assert/1.0.13/false.js");
Object.defineProperty(exports, "assertFalse", { enumerable: true, get: function () { return false_js_1.assertFalse; } });
var equals_js_1 = require("./deps/jsr.io/@std/assert/1.0.13/equals.js");
Object.defineProperty(exports, "assertEquals", { enumerable: true, get: function () { return equals_js_1.assertEquals; } });
var unreachable_js_1 = require("./deps/jsr.io/@std/assert/1.0.13/unreachable.js");
Object.defineProperty(exports, "unreachable", { enumerable: true, get: function () { return unreachable_js_1.unreachable; } });
var assertion_error_js_1 = require("./deps/jsr.io/@std/assert/1.0.13/assertion_error.js");
Object.defineProperty(exports, "AssertionError", { enumerable: true, get: function () { return assertion_error_js_1.AssertionError; } });
var join_js_1 = require("./deps/jsr.io/@std/path/1.0.9/join.js");
Object.defineProperty(exports, "join", { enumerable: true, get: function () { return join_js_1.join; } });
var extname_js_1 = require("./deps/jsr.io/@std/path/1.0.9/extname.js");
Object.defineProperty(exports, "extname", { enumerable: true, get: function () { return extname_js_1.extname; } });
var basename_js_1 = require("./deps/jsr.io/@std/path/1.0.9/basename.js");
Object.defineProperty(exports, "basename", { enumerable: true, get: function () { return basename_js_1.basename; } });
var to_file_url_js_1 = require("./deps/jsr.io/@std/path/1.0.9/to_file_url.js");
Object.defineProperty(exports, "toFileUrl", { enumerable: true, get: function () { return to_file_url_js_1.toFileUrl; } });
var is_absolute_js_1 = require("./deps/jsr.io/@std/path/1.0.9/is_absolute.js");
Object.defineProperty(exports, "isAbsolute", { enumerable: true, get: function () { return is_absolute_js_1.isAbsolute; } });
var mod_js_1 = require("./deps/jsr.io/@std/async/1.0.12/mod.js");
Object.defineProperty(exports, "delay", { enumerable: true, get: function () { return mod_js_1.delay; } });
var concat_js_1 = require("./deps/jsr.io/@std/bytes/1.0.5/concat.js");
Object.defineProperty(exports, "concat", { enumerable: true, get: function () { return concat_js_1.concat; } });
var iterate_reader_js_1 = require("./deps/jsr.io/@std/io/0.225.2/iterate_reader.js");
Object.defineProperty(exports, "iterateReader", { enumerable: true, get: function () { return iterate_reader_js_1.iterateReader; } });
var constants_js_1 = require("./deps/jsr.io/@std/datetime/0.225.4/constants.js");
Object.defineProperty(exports, "MINUTE", { enumerable: true, get: function () { return constants_js_1.MINUTE; } });
Object.defineProperty(exports, "SECOND", { enumerable: true, get: function () { return constants_js_1.SECOND; } });
var to_array_buffer_js_1 = require("./deps/jsr.io/@std/streams/1.0.9/to_array_buffer.js");
Object.defineProperty(exports, "toArrayBuffer", { enumerable: true, get: function () { return to_array_buffer_js_1.toArrayBuffer; } });
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
var mod_js_2 = require("./deps/jsr.io/@roj/tgcrypto/1.0.1/dist/mod.js");
Object.defineProperty(exports, "ige256Decrypt", { enumerable: true, get: function () { return mod_js_2.ige256Decrypt; } });
Object.defineProperty(exports, "ige256Encrypt", { enumerable: true, get: function () { return mod_js_2.ige256Encrypt; } });
Object.defineProperty(exports, "initTgCrypto", { enumerable: true, get: function () { return mod_js_2.init; } });
var htmlparser2_1 = require("htmlparser2");
Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return htmlparser2_1.Parser; } });
