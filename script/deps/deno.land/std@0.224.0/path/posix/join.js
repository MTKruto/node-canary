"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = void 0;
const assert_path_js_1 = require("../_common/assert_path.js");
const normalize_js_1 = require("./normalize.js");
/**
 * Join all given a sequence of `paths`,then normalizes the resulting path.
 * @param paths to be joined and normalized
 */
function join(...paths) {
    if (paths.length === 0)
        return ".";
    let joined;
    for (let i = 0; i < paths.length; ++i) {
        const path = paths[i];
        (0, assert_path_js_1.assertPath)(path);
        if (path.length > 0) {
            if (!joined)
                joined = path;
            else
                joined += `/${path}`;
        }
    }
    if (!joined)
        return ".";
    return (0, normalize_js_1.normalize)(joined);
}
exports.join = join;
