// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { AssertionError } from "./assertion_error.js";
/**
 * Make an assertion, error will be thrown if `expr` have truthy value.
 *
 * @example
 * ```ts
 * import { assertFalse } from "https://deno.land/std@$STD_VERSION/assert/assert_false.ts";
 *
 * assertFalse(false); // Doesn't throw
 * assertFalse(true); // Throws
 * ```
 */
export function assertFalse(expr, msg = "") {
    if (expr) {
        throw new AssertionError(msg);
    }
}
