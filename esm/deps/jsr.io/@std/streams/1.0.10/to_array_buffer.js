// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
import { concat } from "../../bytes/1.0.6/concat.js";
/**
 * Converts a {@linkcode ReadableStream} of {@linkcode Uint8Array}s to an
 * {@linkcode ArrayBuffer}. Works the same as {@linkcode Response.arrayBuffer}.
 *
 * @param readableStream A `ReadableStream` of `Uint8Array`s to convert into an `ArrayBuffer`.
 * @returns A promise that resolves with the `ArrayBuffer` containing all the data from the stream.
 *
 * @example Basic usage
 * ```ts
 * import { toArrayBuffer } from "@std/streams/to-array-buffer";
 * import { assertEquals } from "@std/assert";
 *
 * const stream = ReadableStream.from([
 *   new Uint8Array([1, 2]),
 *   new Uint8Array([3, 4, 5]),
 * ]);
 * const buf = await toArrayBuffer(stream);
 * assertEquals(buf.byteLength, 5);
 * ```
 */
export async function toArrayBuffer(readableStream) {
    const reader = readableStream.getReader();
    const chunks = [];
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        chunks.push(value);
    }
    return concat(chunks).buffer;
}
