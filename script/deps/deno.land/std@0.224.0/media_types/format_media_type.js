"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMediaType = void 0;
const _util_js_1 = require("./_util.js");
/** Serializes the media type and the optional parameters as a media type
 * conforming to RFC 2045 and RFC 2616.
 *
 * The type and parameter names are written in lower-case.
 *
 * When any of the arguments results in a standard violation then the return
 * value will be an empty string (`""`).
 *
 * @example
 * ```ts
 * import { formatMediaType } from "https://deno.land/std@$STD_VERSION/media_types/format_media_type.ts";
 *
 * formatMediaType("text/plain", { charset: "UTF-8" }); // "text/plain; charset=UTF-8"
 * ```
 */
function formatMediaType(type, param) {
    let b = "";
    const [major = "", sub] = type.split("/");
    if (!sub) {
        if (!(0, _util_js_1.isToken)(type)) {
            return "";
        }
        b += type.toLowerCase();
    }
    else {
        if (!(0, _util_js_1.isToken)(major) || !(0, _util_js_1.isToken)(sub)) {
            return "";
        }
        b += `${major.toLowerCase()}/${sub.toLowerCase()}`;
    }
    if (param) {
        param = (0, _util_js_1.isIterator)(param) ? Object.fromEntries(param) : param;
        const attrs = Object.keys(param);
        attrs.sort();
        for (const attribute of attrs) {
            if (!(0, _util_js_1.isToken)(attribute)) {
                return "";
            }
            const value = param[attribute];
            b += `; ${attribute.toLowerCase()}`;
            const needEnc = (0, _util_js_1.needsEncoding)(value);
            if (needEnc) {
                b += "*";
            }
            b += "=";
            if (needEnc) {
                b += `utf-8''${encodeURIComponent(value)}`;
                continue;
            }
            if ((0, _util_js_1.isToken)(value)) {
                b += value;
                continue;
            }
            b += `"${value.replace(/["\\]/gi, (m) => `\\${m}`)}"`;
        }
    }
    return b;
}
exports.formatMediaType = formatMediaType;
