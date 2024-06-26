"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.extensionsByType = exports.extensions = void 0;
const parse_media_type_js_1 = require("./parse_media_type.js");
const _db_js_1 = require("./_db.js");
Object.defineProperty(exports, "extensions", { enumerable: true, get: function () { return _db_js_1.extensions; } });
/**
 * Returns the extensions known to be associated with the media type `type`.
 * When `type` has no associated extensions, the function returns `undefined`.
 *
 * Extensions are returned without a leading `.`.
 *
 * @example
 * ```ts
 * import { extensionsByType } from "https://deno.land/std@$STD_VERSION/media_types/extensions_by_type.ts";
 *
 * extensionsByType("application/json"); // ["json", "map"]
 * extensionsByType("text/html; charset=UTF-8"); // ["html", "htm", "shtml"]
 * extensionsByType("application/foo"); // undefined
 * ```
 */
function extensionsByType(type) {
    try {
        const [mediaType] = (0, parse_media_type_js_1.parseMediaType)(type);
        return _db_js_1.extensions.get(mediaType);
    }
    catch {
        // just swallow errors, returning undefined
    }
}
exports.extensionsByType = extensionsByType;
