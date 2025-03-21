"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharset = getCharset;
const parse_media_type_js_1 = require("./parse_media_type.js");
const _db_js_1 = require("./_db.js");
/**
 * Given a media type or header value, identify the encoding charset. If the
 * charset cannot be determined, the function returns `undefined`.
 *
 * @param type The media type or header value to get the charset for.
 *
 * @returns The charset for the given media type or header value, or `undefined`
 * if the charset cannot be determined.
 *
 * @example Usage
 * ```ts
 * import { getCharset } from "@std/media-types/get-charset";
 * import { assertEquals } from "@std/assert";
 *
 * assertEquals(getCharset("text/plain"), "UTF-8");
 * assertEquals(getCharset("application/foo"), undefined);
 * assertEquals(getCharset("application/news-checkgroups"), "US-ASCII");
 * assertEquals(getCharset("application/news-checkgroups; charset=UTF-8"), "UTF-8");
 * ```
 */
function getCharset(type) {
    try {
        const [mediaType, params] = (0, parse_media_type_js_1.parseMediaType)(type);
        if (params?.charset) {
            return params.charset;
        }
        const entry = _db_js_1.db[mediaType];
        if (entry?.charset) {
            return entry.charset;
        }
        if (mediaType.startsWith("text/")) {
            return "UTF-8";
        }
    }
    catch {
        // just swallow errors, returning undefined
    }
    return undefined;
}
