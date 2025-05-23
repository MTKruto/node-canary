"use strict";
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertArg = assertArg;
const assert_path_js_1 = require("./assert_path.js");
function assertArg(path) {
    (0, assert_path_js_1.assertPath)(path);
    if (path.length === 0)
        return ".";
}
