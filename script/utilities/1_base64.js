"use strict";
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64EncodeUrlSafe = base64EncodeUrlSafe;
exports.base64DecodeUrlSafe = base64DecodeUrlSafe;
const _0_deps_js_1 = require("../0_deps.js");
const _0_bigint_js_1 = require("./0_bigint.js");
function base64EncodeUrlSafe(data) {
    return (0, _0_deps_js_1.encodeBase64)(data).replace(/=*$/, "").replaceAll("+", "-").replaceAll("/", "_");
}
function base64DecodeUrlSafe(data) {
    data = data.replaceAll("_", "/").replaceAll("-", "+");
    if (data.length != 4) {
        data += "=".repeat((0, _0_bigint_js_1.mod)(-data.length, 4));
    }
    return (0, _0_deps_js_1.decodeBase64)(data);
}
