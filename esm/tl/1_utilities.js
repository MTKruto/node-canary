/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.,,
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
import { assertEquals, assertFalse, unreachable } from "../0_deps.js";
import { schema as schema_ } from "./0_api.js";
export function isOptionalParam(ntype) {
    return ntype.includes("?");
}
export function getOptionalParamInnerType(ntype) {
    return ntype.split("?")[1];
}
export function analyzeOptionalParam(ntype) {
    if (!isOptionalParam(ntype)) {
        throw new Error("Parameter not optional");
    }
    const flagField = ntype.split(".")[0];
    assertEquals(typeof flagField, "string");
    const bitIndex = Number(ntype.split("?")[0].split(".")[1]);
    assertFalse(isNaN(bitIndex));
    return { flagField, bitIndex };
}
export function isValidType(object, schema = schema_) {
    return object != null && typeof object === "object" && typeof object._ === "string" && schema[object._] !== undefined;
}
export function assertIsValidType(object, schema = schema_) {
    if (!isValidType(object, schema)) {
        throw new Error("Invalid object");
    }
}
export function is(typeName, value) {
    if (!isValidType(value)) {
        return false;
    }
    else {
        return value._ === typeName;
    }
}
export function isOneOf(typeNames, value) {
    return typeNames.some((v) => is(v, value));
}
export function isOfEnum(enumName, value) {
    return !isValidType(value) || schema_[value._][2] != enumName;
}
export function as(typeName, value) {
    if (is(typeName, value)) {
        return value;
    }
    else {
        unreachable();
    }
}
const GENERIC_FUNCTIONS = [
    "invokeAfterMsg",
    "invokeAfterMsgs",
    "initConnection",
    "invokeWithLayer",
    "invokeWithoutUpdates",
    "invokeWithMessagesRange",
    "invokeWithTakeout",
];
export function isGenericFunction(value) {
    return isOneOf(GENERIC_FUNCTIONS, value);
}
export function mustGetReturnType(name) {
    const type = schema_[name];
    if (!type || !type[2]) {
        unreachable();
    }
    return type[2];
}
export function repr(value) {
    return value == null ? null : (typeof value === "object" && "_" in value) ? value._ : value.constructor.name;
}
export function getVectorItemType(type) {
    if (!type.startsWith(VECTOR_PREFIX) || !type.endsWith(VECTOR_SUFFIX)) {
        return null;
    }
    return type.slice(VECTOR_PREFIX.length).slice(0, -1 * VECTOR_SUFFIX.length);
}
const VECTOR_PREFIX = "Vector<";
const VECTOR_SUFFIX = ">";
export const X = "X";
export const VECTOR = 0x1CB5C415;
export const BOOL_TRUE = 0x997275b5;
export const BOOL_FALSE = 0xbc799737;
export const GZIP_PACKED = 0x3072CFA1;
export const RPC_RESULT = 0xF35C6D01;
