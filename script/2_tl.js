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
exports.functions = exports.types = exports.TLError = void 0;
var _0_tl_raw_reader_js_1 = require("./tl/0_tl_raw_reader.js");
Object.defineProperty(exports, "TLError", { enumerable: true, get: function () { return _0_tl_raw_reader_js_1.TLError; } });
__exportStar(require("./tl/1_tl_object.js"), exports);
var _2_types_js_1 = require("./tl/2_types.js");
Object.defineProperty(exports, "types", { enumerable: true, get: function () { return _2_types_js_1.types; } });
__exportStar(require("./tl/3_utilities.js"), exports);
var _3_functions_js_1 = require("./tl/3_functions.js");
Object.defineProperty(exports, "functions", { enumerable: true, get: function () { return _3_functions_js_1.functions; } });
__exportStar(require("./tl/4_tl_reader.js"), exports);
__exportStar(require("./tl/5_tl_writer.js"), exports);
__exportStar(require("./tl/6_rpc_result.js"), exports);
__exportStar(require("./tl/7_message.js"), exports);
__exportStar(require("./tl/8_message_container.js"), exports);
