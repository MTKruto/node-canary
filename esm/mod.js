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
import "./_dnt.polyfills.js";
import * as dntShim from "./_dnt.shims.js";
export { getColorFromPeerId, getColorName, getRandomId, setLogFilter, setLoggingProvider, setLogVerbosity } from "./1_utilities.js";
export { checkPassword } from "./client/0_password.js";
export * from "./2_connection.js";
export * from "./2_storage.js";
export * from "./3_transport.js";
export * from "./2_tl.js";
export * from "./3_types.js";
export { APP_VERSION, DEVICE_MODEL, INITIAL_DC, LANG_CODE, LANG_PACK, SYSTEM_LANG_CODE, SYSTEM_VERSION } from "./4_constants.js";
export * as errors from "./4_errors.js";
export * from "./5_client.js";
import { createDeflate, createDeflateRaw, createGunzip, createGzip, createInflate, createInflateRaw, } from "node:zlib";
// From https://github.com/ungap/compression-stream/blob/main/index.js with slight modifications.
if (!("CompressionStream" in dntShim.dntGlobalThis)) {
    // original idea: MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource>
    // @see https://github.com/oven-sh/bun/issues/1723#issuecomment-1774174194
    class Stream {
        constructor(compress, format) {
            Object.defineProperty(this, "readable", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "writable", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            let handler;
            if (format === "gzip") {
                handler = compress ? createGzip() : createGunzip();
            }
            else if (format === "deflate") {
                handler = compress ? createDeflate() : createInflate();
            }
            else if (format === "deflate-raw") {
                handler = compress ? createDeflateRaw() : createInflateRaw();
            }
            else {
                throw new TypeError([
                    `Failed to construct '${this.constructor.name}'`,
                    `Unsupported compression format: '${format}'`,
                ].join(": "));
            }
            this.readable = new ReadableStream({
                // @ts-ignore: why?
                type: "bytes",
                start: (controller) => {
                    handler.on("data", (chunk) => controller.enqueue(chunk));
                    handler.once("end", () => controller.close());
                },
            });
            this.writable = new WritableStream({
                write: (chunk) => void handler.write(chunk),
                close: () => void handler.end(),
            });
        }
    }
    globalThis.CompressionStream = class CompressionStream extends Stream {
        constructor(format) {
            super(true, format);
        }
    };
    globalThis.DecompressionStream = class DecompressionStream extends Stream {
        constructor(format) {
            super(false, format);
        }
    };
}
