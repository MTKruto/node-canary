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
exports.validateCallbackQueryQuestion = void 0;
const _0_errors_js_1 = require("../0_errors.js");
function validateCallbackQueryQuestion(q) {
    if (!["game", "password", "button"].includes(q.type)) {
        throw new _0_errors_js_1.InputError("Got invalid callback query question type.");
    }
    if (q.type == "password" && (typeof q.password !== "string" || !q.password)) {
        throw new _0_errors_js_1.InputError("Got empty password.");
    }
    if ((q.type == "button" || q.type == "password") && (typeof q.data !== "string" || !q.data)) {
        throw new _0_errors_js_1.InputError("Got empty button data.");
    }
}
exports.validateCallbackQueryQuestion = validateCallbackQueryQuestion;
