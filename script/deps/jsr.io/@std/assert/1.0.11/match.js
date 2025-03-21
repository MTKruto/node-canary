"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertMatch = assertMatch;
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
const assertion_error_js_1 = require("./assertion_error.js");
/**
 * Make an assertion that `actual` match RegExp `expected`. If not
 * then throw.
 *
 * @example Usage
 * ```ts ignore
 * import { assertMatch } from "@std/assert";
 *
 * assertMatch("Raptor", /Raptor/); // Doesn't throw
 * assertMatch("Denosaurus", /Raptor/); // Throws
 * ```
 *
 * @param actual The actual value to be matched.
 * @param expected The expected pattern to match.
 * @param msg The optional message to display if the assertion fails.
 */
function assertMatch(actual, expected, msg) {
    if (expected.test(actual))
        return;
    const msgSuffix = msg ? `: ${msg}` : ".";
    msg = `Expected actual: "${actual}" to match: "${expected}"${msgSuffix}`;
    throw new assertion_error_js_1.AssertionError(msg);
}
