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
exports.constructForwardHeader = constructForwardHeader;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_user_js_1 = require("./1_user.js");
async function constructForwardHeader(fwdHeader, getEntity) {
    if (fwdHeader.channel_post && fwdHeader.from_id?._ == "peerChannel") {
        const chat = await getEntity(fwdHeader.from_id);
        if (chat == null) {
            (0, _0_deps_js_1.unreachable)();
        }
        return (0, _1_utilities_js_1.cleanObject)({
            type: "channel",
            date: fwdHeader.date,
            chat: (0, _1_chat_p_js_1.constructChatP)(chat),
            messageId: fwdHeader.channel_post,
            authorSignature: fwdHeader.post_author,
        });
    }
    else if (fwdHeader.from_id?._ == "peerChannel") {
        const chat = await getEntity(fwdHeader.from_id);
        if (chat == null) {
            (0, _0_deps_js_1.unreachable)();
        }
        return (0, _1_utilities_js_1.cleanObject)({
            type: "supergroup",
            date: fwdHeader.date,
            chat: (0, _1_chat_p_js_1.constructChatP)(chat),
            title: fwdHeader.post_author,
        });
    }
    else if (fwdHeader.from_id?._ == "peerUser") {
        const user = await getEntity(fwdHeader.from_id);
        if (user == null) {
            (0, _0_deps_js_1.unreachable)();
        }
        return {
            type: "user",
            date: fwdHeader.date,
            user: (0, _1_user_js_1.constructUser)(user),
        };
    }
    else if (fwdHeader.from_name) {
        return {
            type: "hidden",
            date: fwdHeader.date,
            name: fwdHeader.from_name,
        };
    }
    else {
        return {
            type: "unsupported",
            date: fwdHeader.date,
        };
    }
}
