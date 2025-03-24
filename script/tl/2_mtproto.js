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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeType = deserializeType;
exports.serializeObject = serializeObject;
exports.isValidObject = isValidObject;
exports.assertIsValidObject = assertIsValidObject;
exports.is = is;
exports.isOneOf = isOneOf;
exports.isOfEnum = isOfEnum;
exports.as = as;
exports.mustGetReturnType = mustGetReturnType;
const _1_mtproto_api_js_1 = require("./1_mtproto_api.js");
const _1_tl_reader_js_1 = require("./1_tl_reader.js");
const _1_tl_writer_js_1 = require("./1_tl_writer.js");
const _1_utilities_js_1 = require("./1_utilities.js");
__exportStar(require("./1_mtproto_api.js"), exports);
async function deserializeType(name, bufferOrReader) {
    const reader = bufferOrReader instanceof Uint8Array ? new _1_tl_reader_js_1.TLReader(bufferOrReader) : bufferOrReader;
    return await reader.readType(name, _1_mtproto_api_js_1.schema);
}
function serializeObject(object) {
    return new _1_tl_writer_js_1.TLWriter().writeObject(object, _1_mtproto_api_js_1.schema).buffer;
}
function isValidObject(object) {
    return (0, _1_utilities_js_1.isValidObject)(object, _1_mtproto_api_js_1.schema);
}
function assertIsValidObject(object) {
    return (0, _1_utilities_js_1.assertIsValidObject)(object, _1_mtproto_api_js_1.schema);
}
function is(name, value) {
    return (0, _1_utilities_js_1.is)(name, value, _1_mtproto_api_js_1.schema);
}
function isOneOf(names, value) {
    return (0, _1_utilities_js_1.isOneOf)(names, value, _1_mtproto_api_js_1.schema);
}
function isOfEnum(name, value) {
    return (0, _1_utilities_js_1.isOfEnum)(name, value, _1_mtproto_api_js_1.schema);
}
function as(name, value) {
    return (0, _1_utilities_js_1.as)(name, value, _1_mtproto_api_js_1.schema);
}
function mustGetReturnType(name) {
    return (0, _1_utilities_js_1.mustGetReturnType)(name, _1_mtproto_api_js_1.schema);
}
