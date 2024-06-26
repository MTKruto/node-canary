"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBase64 = exports.encodeBase64 = void 0;
/**
 * Utilities for
 * {@link https://datatracker.ietf.org/doc/html/rfc4648#section-4 | base64}
 * encoding and decoding.
 *
 * This module is browser compatible.
 *
 * ```ts
 * import {
 *   encodeBase64,
 *   decodeBase64,
 * } from "https://deno.land/std@$STD_VERSION/encoding/base64.ts";
 *
 * const encoded = encodeBase64("foobar"); // "Zm9vYmFy"
 *
 * decodeBase64(encoded); // Uint8Array(6) [ 102, 111, 111, 98, 97, 114 ]
 * ```
 *
 * @module
 */
const _util_js_1 = require("./_util.js");
const base64abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "/",
];
/**
 * Converts data into a base64-encoded string.
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4648#section-4}
 *
 * @param data The data to encode.
 * @returns The base64-encoded string.
 *
 * @example
 * ```ts
 * import { encodeBase64 } from "https://deno.land/std@$STD_VERSION/encoding/base64.ts";
 *
 * encodeBase64("foobar"); // "Zm9vYmFy"
 * ```
 */
function encodeBase64(data) {
    // CREDIT: https://gist.github.com/enepomnyaschih/72c423f727d395eeaa09697058238727
    const uint8 = (0, _util_js_1.validateBinaryLike)(data);
    let result = "";
    let i;
    const l = uint8.length;
    for (i = 2; i < l; i += 3) {
        result += base64abc[(uint8[i - 2]) >> 2];
        result += base64abc[(((uint8[i - 2]) & 0x03) << 4) |
            ((uint8[i - 1]) >> 4)];
        result += base64abc[(((uint8[i - 1]) & 0x0f) << 2) |
            ((uint8[i]) >> 6)];
        result += base64abc[(uint8[i]) & 0x3f];
    }
    if (i === l + 1) {
        // 1 octet yet to write
        result += base64abc[(uint8[i - 2]) >> 2];
        result += base64abc[((uint8[i - 2]) & 0x03) << 4];
        result += "==";
    }
    if (i === l) {
        // 2 octets yet to write
        result += base64abc[(uint8[i - 2]) >> 2];
        result += base64abc[(((uint8[i - 2]) & 0x03) << 4) |
            ((uint8[i - 1]) >> 4)];
        result += base64abc[((uint8[i - 1]) & 0x0f) << 2];
        result += "=";
    }
    return result;
}
exports.encodeBase64 = encodeBase64;
/**
 * Decodes a base64-encoded string.
 *
 * @see {@link https://datatracker.ietf.org/doc/html/rfc4648#section-4}
 *
 * @param b64 The base64-encoded string to decode.
 * @returns The decoded data.
 *
 * @example
 * ```ts
 * import { decodeBase64 } from "https://deno.land/std@$STD_VERSION/encoding/base64.ts";
 *
 * decodeBase64("Zm9vYmFy"); // Uint8Array(6) [ 102, 111, 111, 98, 97, 114 ]
 * ```
 */
function decodeBase64(b64) {
    const binString = atob(b64);
    const size = binString.length;
    const bytes = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
        bytes[i] = binString.charCodeAt(i);
    }
    return bytes;
}
exports.decodeBase64 = decodeBase64;
