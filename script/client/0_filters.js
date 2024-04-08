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
exports.match = void 0;
function match(filter, value) {
    let [type, ...other] = filter.split(":");
    if (type != "" && !(type in value)) {
        return false;
    }
    if (type == "") {
        if (other.length != 1) {
            return false;
        }
        if ("message" in value) {
            type = "message";
        }
        else if ("editedMessage" in value) {
            type = "editedMessage";
        }
        else {
            return false;
        }
    }
    const field = other[0];
    if (field) {
        if (!(field in value[type])) {
            return false;
        }
    }
    return true;
}
exports.match = match;
