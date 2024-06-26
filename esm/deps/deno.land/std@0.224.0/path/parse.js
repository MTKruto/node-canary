// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { isWindows } from "./_os.js";
import { parse as posixParse } from "./posix/parse.js";
import { parse as windowsParse } from "./windows/parse.js";
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
export function parse(path) {
    return isWindows ? windowsParse(path) : posixParse(path);
}
