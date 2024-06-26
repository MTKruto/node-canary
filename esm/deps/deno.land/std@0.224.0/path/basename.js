// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { isWindows } from "./_os.js";
import { basename as posixBasename } from "./posix/basename.js";
import { basename as windowsBasename } from "./windows/basename.js";
/**
 * Return the last portion of a `path`.
 * Trailing directory separators are ignored, and optional suffix is removed.
 *
 * @example
 * ```ts
 * import { basename } from "https://deno.land/std@$STD_VERSION/path/basename.ts";
 *
 * basename("/home/user/Documents/"); // "Documents"
 * basename("C:\\user\\Documents\\image.png"); // "image.png"
 * basename("/home/user/Documents/image.png", ".png"); // "image"
 * ```
 *
 * @param path - path to extract the name from.
 * @param [suffix] - suffix to remove from extracted name.
 */
export function basename(path, suffix = "") {
    return isWindows
        ? windowsBasename(path, suffix)
        : posixBasename(path, suffix);
}
