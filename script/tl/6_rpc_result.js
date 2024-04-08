"use strict";
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
exports.RPCResult = void 0;
const _1_tl_object_js_1 = require("./1_tl_object.js");
const _4_tl_reader_js_1 = require("./4_tl_reader.js");
class RPCResult {
    static get [_1_tl_object_js_1.id]() {
        return 0xF35C6D01;
    }
    get [_1_tl_object_js_1.name]() {
        return "rpc_result";
    }
    constructor(messageId, result) {
        Object.defineProperty(this, "messageId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: messageId
        });
        Object.defineProperty(this, "result", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: result
        });
    }
    static deserialize(buffer) {
        const reader = new _4_tl_reader_js_1.TLReader(buffer);
        const messageId = reader.readInt64();
        const result = reader.readObject();
        return new RPCResult(messageId, result);
    }
}
exports.RPCResult = RPCResult;
