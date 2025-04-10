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
exports.constructSelfDestructOption = constructSelfDestructOption;
exports.selfDestructOptionToInt = selfDestructOptionToInt;
const _0_errors_js_1 = require("../0_errors.js");
const MAX_INT_32 = ~~(0xFFFFFFFF / 2);
function constructSelfDestructOption(ttlSeconds) {
    if (ttlSeconds == MAX_INT_32) {
        return "afterOpen";
    }
    else {
        return ttlSeconds;
    }
}
function selfDestructOptionToInt(option) {
    if (option == "afterOpen") {
        return 2147483647;
    }
    else if (typeof option === "number") {
        if (option == 0) {
            throw new _0_errors_js_1.InputError("Self destruct option cannot be zero.");
        }
        else if (option < 0) {
            throw new _0_errors_js_1.InputError("Self destruct option cannot be negative.");
        }
        else {
            return option;
        }
    }
    else {
        throw new _0_errors_js_1.InputError("Invalid self destruct option.");
    }
}
