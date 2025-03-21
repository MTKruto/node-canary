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
exports.constructChat = constructChat;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_birthday_js_1 = require("./0_birthday.js");
const _0_location_js_1 = require("./0_location.js");
const _0_opening_hours_js_1 = require("./0_opening_hours.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_photo_js_1 = require("./1_photo.js");
async function constructChat(fullChat, getEntity) {
    if ((0, _2_tl_js_1.is)("userFull", fullChat)) {
        const user = await getEntity({ _: "peerUser", user_id: fullChat.id });
        if (user == null)
            (0, _0_deps_js_1.unreachable)();
        const chatP = (0, _1_chat_p_js_1.constructChatP)(user);
        return (0, _1_utilities_js_1.cleanObject)({
            ...chatP,
            birthday: fullChat.birthday ? (0, _0_birthday_js_1.constructBirthday)(fullChat.birthday) : undefined,
            photo: fullChat.profile_photo && (0, _2_tl_js_1.is)("photo", fullChat.profile_photo) ? (0, _1_photo_js_1.constructPhoto)(fullChat.profile_photo) : undefined,
            address: fullChat.business_location?.address,
            location: fullChat.business_location?.geo_point && (0, _2_tl_js_1.is)("geoPoint", fullChat.business_location.geo_point) ? (0, _0_location_js_1.constructLocation)(fullChat.business_location.geo_point) : undefined,
            openingHours: fullChat.business_work_hours ? (0, _0_opening_hours_js_1.constructOpeningHours)(fullChat.business_work_hours) : undefined,
            hasMainMiniApp: user.bot ? user.bot_has_main_app : undefined,
        });
    }
    else if ((0, _2_tl_js_1.is)("chatFull", fullChat)) {
        const chat = await getEntity({ _: "peerChat", chat_id: fullChat.id });
        if (chat == null)
            (0, _0_deps_js_1.unreachable)();
        const chatP = (0, _1_chat_p_js_1.constructChatP)(chat);
        return (0, _1_utilities_js_1.cleanObject)({
            ...chatP,
            photo: fullChat.chat_photo && (0, _2_tl_js_1.is)("photo", fullChat.chat_photo) ? (0, _1_photo_js_1.constructPhoto)(fullChat.chat_photo) : undefined,
            videoChatId: fullChat.call ? String(fullChat.call.id) : undefined,
        });
    }
    else if ((0, _2_tl_js_1.is)("channelFull", fullChat)) {
        const chat = await getEntity({ _: "peerChannel", channel_id: fullChat.id });
        if (chat == null)
            (0, _0_deps_js_1.unreachable)();
        const chatP = (0, _1_chat_p_js_1.constructChatP)(chat);
        return (0, _1_utilities_js_1.cleanObject)({
            ...chatP,
            photo: fullChat.chat_photo && (0, _2_tl_js_1.is)("photo", fullChat.chat_photo) ? (0, _1_photo_js_1.constructPhoto)(fullChat.chat_photo) : undefined,
            videoChatId: fullChat.call ? String(fullChat.call.id) : undefined,
        });
    }
    (0, _0_deps_js_1.unreachable)();
}
