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
import { schema } from "./1_mtproto_api.js";
import { TLReader } from "./1_tl_reader.js";
import { TLWriter } from "./1_tl_writer.js";
import { as as as_, assertIsValidObject as assertIsValidObject_, is as is_, isOfEnum as isOfEnum_, isOneOf as isOneOf_, isValidObject as isValidObject_, mustGetReturnType as mustGetReturnType_ } from "./1_utilities.js";
export * from "./1_mtproto_api.js";
export async function deserializeType(name, bufferOrReader) {
    const reader = bufferOrReader instanceof Uint8Array ? new TLReader(bufferOrReader) : bufferOrReader;
    return await reader.readType(name, schema);
}
export function serializeObject(object) {
    return new TLWriter().writeObject(object, schema).buffer;
}
export function isValidObject(object) {
    return isValidObject_(object, schema);
}
export function assertIsValidObject(object) {
    return assertIsValidObject_(object, schema);
}
export function is(name, value) {
    return is_(name, value, schema);
}
export function isOneOf(names, value) {
    return isOneOf_(names, value, schema);
}
export function isOfEnum(name, value) {
    return isOfEnum_(name, value, schema);
}
export function as(name, value) {
    return as_(name, value, schema);
}
export function mustGetReturnType(name) {
    return mustGetReturnType_(name, schema);
}
