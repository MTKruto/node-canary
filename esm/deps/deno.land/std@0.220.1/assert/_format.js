// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
// This file been copied to `std/expect`.
/**
 * Converts the input into a string. Objects, Sets and Maps are sorted so as to
 * make tests less flaky
 * @param v Value to be formatted
 */
import * as dntShim from "../../../../_dnt.shims.js";
export function format(v) {
    // deno-lint-ignore no-explicit-any
    const { Deno } = dntShim.dntGlobalThis;
    return typeof Deno?.inspect === "function"
        ? Deno.inspect(v, {
            depth: Infinity,
            sorted: true,
            trailingComma: true,
            compact: false,
            iterableLimit: Infinity,
            // getters should be true in assertEquals.
            getters: true,
            strAbbreviateSize: Infinity,
        })
        : `"${String(v).replace(/(?=["\\])/g, "\\")}"`;
}
