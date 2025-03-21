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
export * from "./deps/jsr.io/@std/assert/1.0.11/mod.js";
export { basename } from "./deps/jsr.io/@std/path/1.0.8/basename.js";
export { extname } from "./deps/jsr.io/@std/path/1.0.8/extname.js";
export { isAbsolute } from "./deps/jsr.io/@std/path/1.0.8/is_absolute.js";
export { join } from "./deps/jsr.io/@std/path/1.0.8/join.js";
export { toFileUrl } from "./deps/jsr.io/@std/path/1.0.8/to_file_url.js";
export { concat } from "./deps/jsr.io/@std/bytes/1.0.5/concat.js";
export { MINUTE, SECOND } from "./deps/jsr.io/@std/datetime/0.225.3/constants.js";
export { toArrayBuffer } from "./deps/jsr.io/@std/streams/1.0.9/to_array_buffer.js";
export { iterateReader } from "./deps/jsr.io/@std/io/0.225.2/iterate_reader.js";
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
