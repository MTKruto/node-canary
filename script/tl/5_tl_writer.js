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
exports.TLWriter = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _0_tl_raw_writer_js_1 = require("./0_tl_raw_writer.js");
const _1_tl_object_js_1 = require("./1_tl_object.js");
class TLWriter extends _0_tl_raw_writer_js_1.TLRawWriter {
    writeObject(object) {
        if (Array.isArray(object)) {
            this.writeInt32(_1_utilities_js_1.VECTOR_CONSTRUCTOR, false);
            this.writeInt32(object.length);
            for (const item of object) {
                this.writeObject(item);
            }
        }
        else if (typeof object === "boolean") {
            if (object) {
                this.writeInt32(0x997275b5, false);
            }
            else {
                this.writeInt32(0xbc799737, false);
            }
        }
        else {
            this.write(object[_1_tl_object_js_1.serialize]());
        }
        return this;
    }
}
exports.TLWriter = TLWriter;
