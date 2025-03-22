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
// deno-lint-ignore-file no-explicit-any
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidObject = isValidObject;
exports.assertIsValidObject = assertIsValidObject;
exports.is = is;
exports.isOneOf = isOneOf;
exports.isOfEnum = isOfEnum;
exports.as = as;
exports.mustGetReturnType = mustGetReturnType;
const _0_deps_js_1 = require("../0_deps.js");
function isValidObject(object, schema) {
    return object != null && typeof object === "object" && typeof object._ === "string" && schema.definitions[object._] !== undefined;
}
function assertIsValidObject(object, schema) {
    if (!isValidObject(object, schema)) {
        (0, _0_deps_js_1.unreachable)();
    }
}
function is(typeName, value, schema) {
    if (!isValidObject(value, schema)) {
        return false;
    }
    else {
        return value._ === typeName;
    }
}
function isOneOf(names, value, schema) {
    return names.some((v) => is(v, value, schema));
}
function isOfEnum(name, value, schema) {
    return isValidObject(value, schema) && schema.definitions[value._][2] == name;
}
function as(name, value, schema) {
    if (is(name, value, schema)) {
        return value;
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
function mustGetReturnType(name, schema) {
    const type = schema.definitions[name];
    if (!type || !type[2]) {
        (0, _0_deps_js_1.unreachable)();
    }
    return type[2];
}
