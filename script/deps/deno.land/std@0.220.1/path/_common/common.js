"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports._common = void 0;
function _common(paths, sep) {
    const [first = "", ...remaining] = paths;
    const parts = first.split(sep);
    let endOfPrefix = parts.length;
    let append = "";
    for (const path of remaining) {
        const compare = path.split(sep);
        if (compare.length <= endOfPrefix) {
            endOfPrefix = compare.length;
            append = "";
        }
        for (let i = 0; i < endOfPrefix; i++) {
            if (compare[i] !== parts[i]) {
                endOfPrefix = i;
                append = i === 0 ? "" : sep;
                break;
            }
        }
    }
    return parts.slice(0, endOfPrefix).join(sep) + append;
}
exports._common = _common;
