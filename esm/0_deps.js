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
// connection/1_connection_tcp.ts must be updated too when updating std.
export * from "./deps/deno.land/std@0.222.1/assert/mod.js";
export * as path from "./deps/deno.land/std@0.222.1/path/mod.js";
export { concat } from "./deps/deno.land/std@0.222.1/bytes/concat.js";
export { decodeBase64, encodeBase64 } from "./deps/deno.land/std@0.222.1/encoding/base64.js";
import { contentType as contentType_ } from "./deps/deno.land/std@0.222.1/media_types/content_type.js";
export const contentType = (extentionOrType) => {
    if (extentionOrType == "tgs") {
        return "application/x-tgsticker";
    }
    else {
        return contentType_(extentionOrType);
    }
};
import { extension as extension_ } from "./deps/deno.land/std@0.222.1/media_types/extension.js";
export function extension(mimeType) {
    if (mimeType == "application/x-tgsticker") {
        return "tgs";
    }
    else {
        return extension_(mimeType) || "unknown";
    }
}
export { createCtr256State, ctr256, destroyCtr256State, ige256Decrypt, ige256Encrypt, init as initTgCrypto } from "./deps/deno.land/x/tgcrypto@0.4.1/mod.js";
export { gunzip, gzip } from "./deps/raw.githubusercontent.com/MTKruto/compress/main/mod.js";
export { Parser } from "./deps/deno.land/x/html_parser@v0.1.3/src/mod.js";
