"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// Copyright the Browserify authors. MIT License.
// Ported mostly from https://github.com/browserify/path-browserify/
// This module is browser compatible.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Utilities for working with OS-specific file paths.
 *
 * Codes in the examples uses POSIX path but it automatically use Windows path
 * on Windows. Use methods under `posix` or `win32` object instead to handle non
 * platform specific path like:
 * ```ts
 * import { posix, win32 } from "https://deno.land/std@$STD_VERSION/path/mod.ts";
 * const p1 = posix.fromFileUrl("file:///home/foo");
 * const p2 = win32.fromFileUrl("file:///home/foo");
 * console.log(p1); // "/home/foo"
 * console.log(p2); // "\\home\\foo"
 * ```
 *
 * This module is browser compatible.
 *
 * @module
 */
__exportStar(require("./basename.js"), exports);
__exportStar(require("./constants.js"), exports);
__exportStar(require("./dirname.js"), exports);
__exportStar(require("./extname.js"), exports);
__exportStar(require("./format.js"), exports);
__exportStar(require("./from_file_url.js"), exports);
__exportStar(require("./is_absolute.js"), exports);
__exportStar(require("./join.js"), exports);
__exportStar(require("./normalize.js"), exports);
__exportStar(require("./parse.js"), exports);
__exportStar(require("./relative.js"), exports);
__exportStar(require("./resolve.js"), exports);
__exportStar(require("./to_file_url.js"), exports);
__exportStar(require("./to_namespaced_path.js"), exports);
__exportStar(require("./common.js"), exports);
__exportStar(require("../_interface.js"), exports);
__exportStar(require("./glob_to_regexp.js"), exports);
__exportStar(require("./is_glob.js"), exports);
__exportStar(require("./join_globs.js"), exports);
__exportStar(require("./normalize_glob.js"), exports);
