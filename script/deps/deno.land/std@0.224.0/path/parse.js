"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const _os_js_1 = require("./_os.js");
const parse_js_1 = require("./posix/parse.js");
const parse_js_2 = require("./windows/parse.js");
/**
 * Return a `ParsedPath` object of the `path`. Use `format` to reverse the result.
 *
 * @example
 * ```ts
 * import { parse } from "https://deno.land/std@$STD_VERSION/path/mod.ts";
 *
 * const parsedPathObj = parse("/path/to/dir/script.ts");
 * parsedPathObj.root; // "/"
 * parsedPathObj.dir; // "/path/to/dir"
 * parsedPathObj.base; // "script.ts"
 * parsedPathObj.ext; // ".ts"
 * parsedPathObj.name; // "script"
 * ```
 * @param path to process
 */
function parse(path) {
    return _os_js_1.isWindows ? (0, parse_js_2.parse)(path) : (0, parse_js_1.parse)(path);
}
exports.parse = parse;
