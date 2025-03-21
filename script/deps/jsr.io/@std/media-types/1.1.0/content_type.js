"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentType = contentType;
const parse_media_type_js_1 = require("./parse_media_type.js");
const get_charset_js_1 = require("./get_charset.js");
const format_media_type_js_1 = require("./format_media_type.js");
const type_by_extension_js_1 = require("./type_by_extension.js");
/**
 * Returns the full `Content-Type` or `Content-Disposition` header value for the
 * given extension or media type.
 *
 * The function will treat the `extensionOrType` as a media type when it
 * contains a `/`, otherwise it will process it as an extension, with or without
 * the leading `.`.
 *
 * Returns `undefined` if unable to resolve the media type.
 *
 * @typeParam T Type of the extension or media type to resolve.
 *
 * @param extensionOrType The extension or media type to resolve.
 *
 * @returns The full `Content-Type` or `Content-Disposition` header value, or
 * `undefined` if unable to resolve the media type.
 *
 * @example Usage
 * ```ts
 * import { contentType } from "@std/media-types/content-type";
 * import { assertEquals } from "@std/assert";
 *
 * assertEquals(contentType(".json"), "application/json; charset=UTF-8");
 * assertEquals(contentType("text/html"), "text/html; charset=UTF-8");
 * assertEquals(contentType("text/html; charset=UTF-8"), "text/html; charset=UTF-8");
 * assertEquals(contentType("txt"), "text/plain; charset=UTF-8");
 * assertEquals(contentType("foo"), undefined);
 * assertEquals(contentType("file.json"), undefined);
 * ```
 */
function contentType(extensionOrType) {
    try {
        const [mediaType, params = {}] = extensionOrType.includes("/")
            ? (0, parse_media_type_js_1.parseMediaType)(extensionOrType)
            : [(0, type_by_extension_js_1.typeByExtension)(extensionOrType), undefined];
        if (!mediaType) {
            return undefined;
        }
        if (!("charset" in params)) {
            const charset = (0, get_charset_js_1.getCharset)(mediaType);
            if (charset) {
                params.charset = charset;
            }
        }
        return (0, format_media_type_js_1.formatMediaType)(mediaType, params);
    }
    catch {
        // just swallow returning undefined
    }
    return undefined;
}
