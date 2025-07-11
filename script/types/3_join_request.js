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
exports.constructJoinRequest = constructJoinRequest;
exports.constructJoinRequest2 = constructJoinRequest2;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_user_js_1 = require("./1_user.js");
const _2_invite_link_js_1 = require("./2_invite_link.js");
async function constructJoinRequest(update, getEntity) {
    const chat_ = await getEntity(update.peer);
    if (!chat_) {
        (0, _0_deps_js_1.unreachable)();
    }
    const chat = (0, _1_chat_p_js_1.constructChatP)(chat_);
    const user_ = await getEntity({ _: "peerUser", user_id: update.user_id });
    if (!user_) {
        (0, _0_deps_js_1.unreachable)();
    }
    const from = (0, _1_user_js_1.constructUser)(user_);
    const inviteLink = update.invite && _2_tl_js_1.Api.is("chatInviteExported", update.invite) ? await (0, _2_invite_link_js_1.constructInviteLink)(update.invite, getEntity) : undefined;
    return (0, _1_utilities_js_1.cleanObject)({
        chat,
        from,
        date: update.date,
        bio: update.about,
        inviteLink,
    });
}
async function constructJoinRequest2(peer, inviteImporter, getEntity) {
    const chat_ = await getEntity(peer);
    if (!chat_) {
        (0, _0_deps_js_1.unreachable)();
    }
    const chat = (0, _1_chat_p_js_1.constructChatP)(chat_);
    const user_ = await getEntity({ _: "peerUser", user_id: inviteImporter.user_id });
    if (!user_) {
        (0, _0_deps_js_1.unreachable)();
    }
    const from = (0, _1_user_js_1.constructUser)(user_);
    return (0, _1_utilities_js_1.cleanObject)({
        chat,
        from,
        date: inviteImporter.date,
        bio: inviteImporter.about,
    });
}
