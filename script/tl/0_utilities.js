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
exports.BOOL_FALSE = exports.BOOL_TRUE = exports.VECTOR = exports.X = void 0;
exports.isOptionalParam = isOptionalParam;
exports.getOptionalParamInnerType = getOptionalParamInnerType;
exports.analyzeOptionalParam = analyzeOptionalParam;
exports.repr = repr;
exports.getVectorItemType = getVectorItemType;
const _0_deps_js_1 = require("../0_deps.js");
function isOptionalParam(ntype) {
    return ntype.includes("?");
}
function getOptionalParamInnerType(ntype) {
    return ntype.split("?")[1];
}
function analyzeOptionalParam(ntype) {
    if (!isOptionalParam(ntype)) {
        throw new Error("Parameter not optional");
    }
    const flagField = ntype.split(".")[0];
    (0, _0_deps_js_1.assertEquals)(typeof flagField, "string");
    const bitIndex = Number(ntype.split("?")[0].split(".")[1]);
    (0, _0_deps_js_1.assertFalse)(isNaN(bitIndex));
    return { flagField, bitIndex };
}
function repr(value) {
    return value == null ? null : (typeof value === "object" && "_" in value) ? value._ : value.constructor.name;
}
function getVectorItemType(type) {
    if (!type.startsWith(VECTOR_PREFIX) || !type.endsWith(VECTOR_SUFFIX)) {
        return null;
    }
    return type.slice(VECTOR_PREFIX.length).slice(0, -1 * VECTOR_SUFFIX.length);
}
const VECTOR_PREFIX = "Vector<";
const VECTOR_SUFFIX = ">";
exports.X = "X";
exports.VECTOR = 0x1CB5C415;
exports.BOOL_TRUE = 0x997275b5;
exports.BOOL_FALSE = 0xbc799737;
