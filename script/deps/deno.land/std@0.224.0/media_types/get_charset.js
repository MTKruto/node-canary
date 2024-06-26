"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharset = void 0;
const parse_media_type_js_1 = require("./parse_media_type.js");
const _db_js_1 = require("./_db.js");
/**
 * Given a media type or header value, identify the encoding charset. If the
 * charset cannot be determined, the function returns `undefined`.
 *
 * @example
 * ```ts
 * import { getCharset } from "https://deno.land/std@$STD_VERSION/media_types/get_charset.ts";
 *
 * getCharset("text/plain"); // "UTF-8"
 * getCharset("application/foo"); // undefined
 * getCharset("application/news-checkgroups"); // "US-ASCII"
 * getCharset("application/news-checkgroups; charset=UTF-8"); // "UTF-8"
 * ```
 */
function getCharset(type) {
    try {
        const [mediaType, params] = (0, parse_media_type_js_1.parseMediaType)(type);
        if (params && params["charset"]) {
            return params["charset"];
        }
        const entry = _db_js_1.db[mediaType];
        if (entry && entry.charset) {
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
exports.getCharset = getCharset;
