"use strict";
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterateReader = iterateReader;
exports.iterateReaderSync = iterateReaderSync;
const _constants_js_1 = require("./_constants.js");
/**
 * Turns a {@linkcode Reader} into an async iterator.
 *
 * @example Usage
 * ```ts no-assert
 * import { iterateReader } from "@std/io/iterate-reader";
 *
 * using file = await Deno.open("README.md");
 * for await (const chunk of iterateReader(file)) {
 *   console.log(chunk);
 * }
 * ```
 *
 * @example Usage with buffer size
 * ```ts no-assert
 * import { iterateReader } from "@std/io/iterate-reader";
 *
 * using file = await Deno.open("README.md");
 * const iter = iterateReader(file, {
 *   bufSize: 1024 * 1024
 * });
 * for await (const chunk of iter) {
 *   console.log(chunk);
 * }
 * ```
 *
 * @param reader The reader to read from
 * @param options The options
 * @param options.bufSize The size of the buffer to use
 * @returns The async iterator of Uint8Array chunks
 */
async function* iterateReader(reader, options) {
    const bufSize = options?.bufSize ?? _constants_js_1.DEFAULT_BUFFER_SIZE;
    const b = new Uint8Array(bufSize);
    while (true) {
        const result = await reader.read(b);
        if (result === null) {
            break;
        }
        yield b.slice(0, result);
    }
}
/**
 * Turns a {@linkcode ReaderSync} into an iterator.
 *
 * @example Usage
 * ```ts
 * import { iterateReaderSync } from "@std/io/iterate-reader";
 * import { assert } from "@std/assert/assert"
 *
 * using file = Deno.openSync("README.md");
 * for (const chunk of iterateReaderSync(file)) {
 *   assert(chunk instanceof Uint8Array);
 * }
 * ```
 *
 * Second argument can be used to tune size of a buffer.
 * Default size of the buffer is 32kB.
 *
 * @example Usage with buffer size
 * ```ts
 * import { iterateReaderSync } from "@std/io/iterate-reader";
 * import { assert } from "@std/assert/assert"
 *
 * using file = await Deno.open("README.md");
 * const iter = iterateReaderSync(file, {
 *   bufSize: 1024 * 1024
 * });
 * for (const chunk of iter) {
 *   assert(chunk instanceof Uint8Array);
 * }
 * ```
 *
 * Iterator uses an internal buffer of fixed size for efficiency; it returns
 * a view on that buffer on each iteration. It is therefore caller's
 * responsibility to copy contents of the buffer if needed; otherwise the
 * next iteration will overwrite contents of previously returned chunk.
 *
 * @param reader The reader to read from
 * @param options The options
 * @returns The iterator of Uint8Array chunks
 */
function* iterateReaderSync(reader, options) {
    const bufSize = options?.bufSize ?? _constants_js_1.DEFAULT_BUFFER_SIZE;
    const b = new Uint8Array(bufSize);
    while (true) {
        const result = reader.readSync(b);
        if (result === null) {
            break;
        }
        yield b.slice(0, result);
    }
}
