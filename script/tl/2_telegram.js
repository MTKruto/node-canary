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
exports.RPC_RESULT = exports.GZIP_PACKED = void 0;
exports.deserializeTelegramType = deserializeTelegramType;
exports.serializeTelegramObject = serializeTelegramObject;
const _1_utilities_js_1 = require("../1_utilities.js");
const _1_api_js_1 = require("./1_api.js");
const _1_tl_reader_js_1 = require("./1_tl_reader.js");
const _1_tl_writer_js_1 = require("./1_tl_writer.js");
async function deserializeTelegramType(name, bufferOrReader) {
    const reader = bufferOrReader instanceof Uint8Array ? new _1_tl_reader_js_1.TLReader(bufferOrReader) : bufferOrReader;
    const id = reader.readInt32(false);
    if (id == exports.GZIP_PACKED) {
        const buffer = await (0, _1_utilities_js_1.gunzip)(reader.readBytes());
        return await deserializeTelegramType(name, buffer);
    }
    reader.unreadInt32();
    return await reader.readType(name, _1_api_js_1.schema);
}
exports.GZIP_PACKED = 0x3072CFA1;
exports.RPC_RESULT = 0xF35C6D01;
function serializeTelegramObject(object) {
    return new _1_tl_writer_js_1.TLWriter().writeObject(object, _1_api_js_1.schema).buffer;
}
