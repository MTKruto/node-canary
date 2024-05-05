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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.posix = exports.win32 = void 0;
/**
 * Utilities for working with OS-specific file paths.
 *
 * Functions from this module will automatically switch to support the path style
 * of the current OS, either `windows` for Microsoft Windows, or `posix` for
 * every other operating system, eg. Linux, MacOS, BSD etc.
 *
 * To use functions for a specific path style regardless of the current OS
 * import the modules from the platform sub directory instead.
 *
 * Example, for `posix`:
 *
 * ```ts
 * import { fromFileUrl } from "https://deno.land/std@$STD_VERSION/path/posix/from_file_url.ts";
 * const p = fromFileUrl("file:///home/foo");
 * console.log(p); // "/home/foo"
 * ```
 *
 * or, for `windows`:
 *
 * ```ts
 * import { fromFileUrl } from "https://deno.land/std@$STD_VERSION/path/windows/from_file_url.ts";
 * const p = fromFileUrl("file:///home/foo");
 * console.log(p); // "\\home\\foo"
 * ```
 *
 * This module is browser compatible.
 *
 * @module
 */
const _windows = __importStar(require("./windows/mod.js"));
const _posix = __importStar(require("./posix/mod.js"));
/** @deprecated This will be removed in 1.0.0. Import from {@link https://deno.land/std/path/windows/mod.ts} instead. */
exports.win32 = _windows;
/** @deprecated This will be removed in 1.0.0. Import from {@link https://deno.land/std/path/posix/mod.ts} instead. */
exports.posix = _posix;
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
__exportStar(require("./_interface.js"), exports);
__exportStar(require("./glob_to_regexp.js"), exports);
__exportStar(require("./is_glob.js"), exports);
__exportStar(require("./join_globs.js"), exports);
__exportStar(require("./normalize_glob.js"), exports);
