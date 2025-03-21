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
exports.gunzip = gunzip;
exports.gzip = gzip;
const _0_deps_js_1 = require("../0_deps.js");
function gunzip(buffer) {
    return inner(buffer, new DecompressionStream("gzip"));
}
function gzip(buffer) {
    return inner(buffer, new CompressionStream("gzip"));
}
async function inner(buffer, transformStream) {
    let readable;
    if (ReadableStream.from) {
        readable = ReadableStream.from([buffer]);
    }
    else {
        readable = new ReadableStream({
            pull(controller) {
                controller.enqueue(buffer);
                controller.close();
            },
        });
    }
    readable = readable.pipeThrough(transformStream);
    return new Uint8Array(await (0, _0_deps_js_1.toArrayBuffer)(readable));
}
