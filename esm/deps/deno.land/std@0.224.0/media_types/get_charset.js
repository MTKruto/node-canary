// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { parseMediaType } from "./parse_media_type.js";
import { db } from "./_db.js";
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
export function getCharset(type) {
    try {
        const [mediaType, params] = parseMediaType(type);
        if (params && params["charset"]) {
            return params["charset"];
        }
        const entry = db[mediaType];
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
