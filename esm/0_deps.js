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
export { assert } from "./deps/jsr.io/@std/assert/1.0.13/assert.js";
export { assertFalse } from "./deps/jsr.io/@std/assert/1.0.13/false.js";
export { assertEquals } from "./deps/jsr.io/@std/assert/1.0.13/equals.js";
export { unreachable } from "./deps/jsr.io/@std/assert/1.0.13/unreachable.js";
export { AssertionError } from "./deps/jsr.io/@std/assert/1.0.13/assertion_error.js";
export { join } from "./deps/jsr.io/@std/path/1.1.0/join.js";
export { extname } from "./deps/jsr.io/@std/path/1.1.0/extname.js";
export { basename } from "./deps/jsr.io/@std/path/1.1.0/basename.js";
export { toFileUrl } from "./deps/jsr.io/@std/path/1.1.0/to_file_url.js";
export { isAbsolute } from "./deps/jsr.io/@std/path/1.1.0/is_absolute.js";
export { delay } from "./deps/jsr.io/@std/async/1.0.13/mod.js";
export { concat } from "./deps/jsr.io/@std/bytes/1.0.6/concat.js";
export { iterateReader } from "./deps/jsr.io/@std/io/0.225.2/iterate_reader.js";
export { format } from "./deps/jsr.io/@std/datetime/0.225.5/format.js";
export { MINUTE, SECOND } from "./deps/jsr.io/@std/datetime/0.225.5/constants.js";
export { toArrayBuffer } from "./deps/jsr.io/@std/streams/1.0.10/to_array_buffer.js";
export { decodeBase64, encodeBase64 } from "./deps/jsr.io/@std/encoding/1.0.7/base64.js";
import { contentType as contentType_ } from "./deps/jsr.io/@std/media-types/1.1.0/content_type.js";
export const contentType = (extentionOrType) => {
    if (extentionOrType == "tgs") {
        return "application/x-tgsticker";
    }
    else {
        return contentType_(extentionOrType);
    }
};
import { extension as extension_ } from "./deps/jsr.io/@std/media-types/1.1.0/extension.js";
export function extension(mimeType) {
    if (mimeType == "application/x-tgsticker") {
        return "tgs";
    }
    else {
        return extension_(mimeType) || "unknown";
    }
}
export { ige256Decrypt, ige256Encrypt, init as initTgCrypto } from "./deps/jsr.io/@roj/tgcrypto/1.0.1/dist/mod.js";
export { Parser } from "htmlparser2";
