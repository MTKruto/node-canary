"use strict";
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = join;
const _os_js_1 = require("./_os.js");
const join_js_1 = require("./posix/join.js");
const join_js_2 = require("./windows/join.js");
/**
 * Joins a sequence of paths, then normalizes the resulting path.
 *
 * @example Usage
 * ```ts
 * import { join } from "@std/path/join";
 * import { assertEquals } from "@std/assert";
 *
 * if (Deno.build.os === "windows") {
 *   assertEquals(join("C:\\foo", "bar", "baz\\quux", "garply", ".."), "C:\\foo\\bar\\baz\\quux");
 *   assertEquals(join(new URL("file:///C:/foo"), "bar", "baz/asdf", "quux", ".."), "C:\\foo\\bar\\baz\\asdf");
 * } else {
 *   assertEquals(join("/foo", "bar", "baz/quux", "garply", ".."), "/foo/bar/baz/quux");
 *   assertEquals(join(new URL("file:///foo"), "bar", "baz/asdf", "quux", ".."), "/foo/bar/baz/asdf");
 * }
 * ```
 *
 * @param path The path to join. This can be string or file URL.
 * @param paths Paths to be joined and normalized.
 * @returns The joined and normalized path.
 */
function join(path, ...paths) {
    return _os_js_1.isWindows ? (0, join_js_2.join)(path, ...paths) : (0, join_js_1.join)(path, ...paths);
}
