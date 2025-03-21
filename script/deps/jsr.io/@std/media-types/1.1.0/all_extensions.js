"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.allExtensions = allExtensions;
const parse_media_type_js_1 = require("./parse_media_type.js");
const _db_js_1 = require("./_db.js");
/**
 * Returns all the extensions known to be associated with the media type `type`, or
 * `undefined` if no extensions are found.
 *
 * Extensions are returned without a leading `.`.
 *
 * @param type The media type to get the extensions for.
 *
 * @returns The extensions for the given media type, or `undefined` if no
 * extensions are found.
 *
 * @example Usage
 * ```ts
 * import { allExtensions } from "@std/media-types/all-extensions";
 * import { assertEquals } from "@std/assert";
 *
 * assertEquals(allExtensions("application/json"), ["json", "map"]);
 * assertEquals(allExtensions("text/html; charset=UTF-8"), ["html", "htm", "shtml"]);
 * assertEquals(allExtensions("application/foo"), undefined);
 * ```
 */
function allExtensions(type) {
    try {
        const [mediaType] = (0, parse_media_type_js_1.parseMediaType)(type);
        return _db_js_1.extensions.get(mediaType);
    }
    catch {
        // just swallow errors, returning undefined
    }
}
