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
exports.constructInactiveChat = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
function constructInactiveChat(chat_, lastActivity) {
    if (chat_ instanceof _2_tl_js_1.types.ChatEmpty) {
        (0, _0_deps_js_1.unreachable)();
    }
    const chat = (0, _1_chat_p_js_1.constructChatP)(chat_);
    return {
        lastActivity: (0, _1_utilities_js_1.fromUnixTimestamp)(lastActivity),
        chat,
    };
}
exports.constructInactiveChat = constructInactiveChat;
