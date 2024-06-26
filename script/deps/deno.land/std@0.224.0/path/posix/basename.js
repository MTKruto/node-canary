"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.basename = void 0;
const basename_js_1 = require("../_common/basename.js");
const strip_trailing_separators_js_1 = require("../_common/strip_trailing_separators.js");
const _util_js_1 = require("./_util.js");
/**
 * Return the last portion of a `path`.
 * Trailing directory separators are ignored, and optional suffix is removed.
 *
 * @example
 * ```ts
 * import { basename } from "https://deno.land/std@$STD_VERSION/path/basename.ts";
 *
 * console.log(basename("/home/user/Documents/")); // "Documents"
 * console.log(basename("/home/user/Documents/image.png")); // "image.png"
 * console.log(basename("/home/user/Documents/image.png", ".png")); // "image"
 * ```
 *
 * @param path - path to extract the name from.
 * @param [suffix] - suffix to remove from extracted name.
 */
function basename(path, suffix = "") {
    (0, basename_js_1.assertArgs)(path, suffix);
    const lastSegment = (0, basename_js_1.lastPathSegment)(path, _util_js_1.isPosixPathSeparator);
    const strippedSegment = (0, strip_trailing_separators_js_1.stripTrailingSeparators)(lastSegment, _util_js_1.isPosixPathSeparator);
    return suffix ? (0, basename_js_1.stripSuffix)(strippedSegment, suffix) : strippedSegment;
}
exports.basename = basename;
