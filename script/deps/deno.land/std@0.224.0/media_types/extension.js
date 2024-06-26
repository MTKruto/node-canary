"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.extension = void 0;
const extensions_by_type_js_1 = require("./extensions_by_type.js");
/**
 * For a given media type, return the most relevant extension, or `undefined`
 * if no extension can be found.
 *
 * Extensions are returned without a leading `.`.
 *
 * @example
 * ```ts
 * import { extension } from "https://deno.land/std@$STD_VERSION/media_types/extension.ts";
 *
 * extension("text/plain"); // "txt"
 * extension("application/json"); // "json"
 * extension("text/html; charset=UTF-8"); // "html"
 * extension("application/foo"); // undefined
 * ```
 */
function extension(type) {
    const exts = (0, extensions_by_type_js_1.extensionsByType)(type);
    if (exts) {
        return exts[0];
    }
    return undefined;
}
exports.extension = extension;
