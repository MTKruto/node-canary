"use strict";
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeWhitespace = encodeWhitespace;
const WHITESPACE_ENCODINGS = {
    "\u0009": "%09",
    "\u000A": "%0A",
    "\u000B": "%0B",
    "\u000C": "%0C",
    "\u000D": "%0D",
    "\u0020": "%20",
};
function encodeWhitespace(string) {
    return string.replaceAll(/[\s]/g, (c) => {
        return WHITESPACE_ENCODINGS[c] ?? c;
    });
}
