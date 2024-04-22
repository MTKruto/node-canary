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
exports.constructChat = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_opening_hours_js_1 = require("./0_opening_hours.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_photo_js_1 = require("./1_photo.js");
const _0_location_js_1 = require("./0_location.js");
const _0_birthday_js_1 = require("./0_birthday.js");
const _1_utilities_js_1 = require("../1_utilities.js");
async function constructChat(fullChat, getEntity) {
    if (fullChat instanceof _2_tl_js_1.types.UserFull) {
        const user = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: fullChat.id }));
        if (user == null)
            (0, _0_deps_js_1.unreachable)();
        const chatP = (0, _1_chat_p_js_1.constructChatP)(user);
        return (0, _1_utilities_js_1.cleanObject)({
            ...chatP,
            birthday: fullChat.birthday ? (0, _0_birthday_js_1.constructBirthday)(fullChat.birthday) : undefined,
            photo: fullChat.profile_photo && fullChat.profile_photo instanceof _2_tl_js_1.types.Photo ? (0, _1_photo_js_1.constructPhoto)(fullChat.profile_photo) : undefined,
            address: fullChat.business_location?.address,
            location: fullChat.business_location?.geo_point && fullChat.business_location.geo_point instanceof _2_tl_js_1.types.GeoPoint ? (0, _0_location_js_1.constructLocation)(fullChat.business_location.geo_point) : undefined,
            openingHours: fullChat.business_work_hours ? (0, _0_opening_hours_js_1.constructOpeningHours)(fullChat.business_work_hours) : undefined,
        });
    }
    else if (fullChat instanceof _2_tl_js_1.types.ChatFull) {
        const chat = await getEntity(new _2_tl_js_1.types.PeerChat({ chat_id: fullChat.id }));
        if (chat == null)
            (0, _0_deps_js_1.unreachable)();
        const chatP = (0, _1_chat_p_js_1.constructChatP)(chat);
        return (0, _1_utilities_js_1.cleanObject)({
            ...chatP,
            photo: fullChat.chat_photo && fullChat.chat_photo instanceof _2_tl_js_1.types.Photo ? (0, _1_photo_js_1.constructPhoto)(fullChat.chat_photo) : undefined,
            videoChatId: fullChat.call ? String(fullChat.call.id) : undefined,
        });
    }
    else if (fullChat instanceof _2_tl_js_1.types.ChannelFull) {
        const chat = await getEntity(new _2_tl_js_1.types.PeerChannel({ channel_id: fullChat.id }));
        if (chat == null)
            (0, _0_deps_js_1.unreachable)();
        const chatP = (0, _1_chat_p_js_1.constructChatP)(chat);
        return (0, _1_utilities_js_1.cleanObject)({
            ...chatP,
            photo: fullChat.chat_photo && fullChat.chat_photo instanceof _2_tl_js_1.types.Photo ? (0, _1_photo_js_1.constructPhoto)(fullChat.chat_photo) : undefined,
            videoChatId: fullChat.call ? String(fullChat.call.id) : undefined,
        });
    }
    (0, _0_deps_js_1.unreachable)();
}
exports.constructChat = constructChat;
