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
exports.constructChatP = constructChatP;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_restriction_reason_js_1 = require("./0_restriction_reason.js");
function constructChatP(chat) {
    if ((0, _2_tl_js_1.is)("user", chat)) {
        const id = Number(chat.id);
        const chat_ = {
            id,
            type: "private",
            isBot: chat.bot || false,
            color: chat.color?.color !== undefined ? chat.color.color : (0, _1_utilities_js_1.getColorFromPeerId)(id),
            firstName: chat.first_name || "",
            lastName: chat.last_name,
            isScam: chat.scam || false,
            isFake: chat.fake || false,
            isSupport: chat.support || false,
            isVerified: chat.verified || false,
        };
        if (chat_.isBot) {
            chat_.isRestricted = chat.restricted || false;
            chat_.restrictionReason = chat.restriction_reason;
        }
        return (0, _1_utilities_js_1.cleanObject)(chat_);
    }
    else if ((0, _2_tl_js_1.is)("chat", chat) || (0, _2_tl_js_1.is)("chatForbidden", chat)) {
        const id = Number(-chat.id);
        const chat_ = {
            id,
            type: "group",
            color: (0, _1_utilities_js_1.getColorFromPeerId)(id),
            title: chat.title,
            isCreator: false,
        };
        if ((0, _2_tl_js_1.is)("chat", chat)) {
            chat_.isCreator = chat.creator || false;
        }
        return (0, _1_utilities_js_1.cleanObject)(chat_);
    }
    else if ((0, _2_tl_js_1.is)("channel", chat) || (0, _2_tl_js_1.is)("channelForbidden", chat)) {
        let chat_;
        const id = _1_utilities_js_1.ZERO_CHANNEL_ID + -Number(chat.id);
        if ((0, _2_tl_js_1.is)("channelForbidden", chat)) {
            const { title } = chat;
            if (chat.megagroup) {
                return { id, color: (0, _1_utilities_js_1.getColorFromPeerId)(id), title, type: "supergroup", isScam: false, isFake: false, isVerified: false, isRestricted: false, isForum: false };
            }
            else {
                return { id, color: (0, _1_utilities_js_1.getColorFromPeerId)(id), title, type: "channel", isScam: false, isFake: false, isVerified: false, isRestricted: false };
            }
        }
        const { title, scam: isScam = false, fake: isFake = false, verified: isVerified = false, restricted: isRestricted = false, } = chat;
        if (chat.megagroup) {
            chat_ = {
                id,
                color: chat.color?.color !== undefined ? chat.color.color : (0, _1_utilities_js_1.getColorFromPeerId)(id),
                type: "supergroup",
                title,
                isScam,
                isFake,
                isVerified,
                isRestricted,
                isForum: chat.forum || false,
            };
        }
        else {
            const id = _1_utilities_js_1.ZERO_CHANNEL_ID + -Number(chat.id);
            chat_ = {
                id,
                color: chat.color?.color !== undefined ? chat.color.color : (0, _1_utilities_js_1.getColorFromPeerId)(id),
                type: "channel",
                title,
                isScam,
                isFake,
                isVerified,
                isRestricted,
            };
        }
        chat_.username = chat.username ?? chat.usernames?.[0].username;
        chat_.also = chat.usernames?.map((v) => v.username).filter((v) => v != chat_.username);
        if (chat_.isRestricted) {
            chat_.restrictionReason = (chat.restriction_reason ?? []).map(_0_restriction_reason_js_1.constructRestrictionReason);
        }
        return (0, _1_utilities_js_1.cleanObject)(chat_);
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
