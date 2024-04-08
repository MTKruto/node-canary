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
exports.constructChatMemberUpdated = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_user_js_1 = require("./1_user.js");
const _2_chat_member_js_1 = require("./2_chat_member.js");
const _2_invite_link_js_1 = require("./2_invite_link.js");
async function constructChatMemberUpdated(update, getEntity) {
    if (!update.prev_participant && !update.new_participant) {
        (0, _0_deps_js_1.unreachable)();
    }
    const chat_ = await getEntity("channel_id" in update ? new _2_tl_js_1.types.PeerChannel(update) : new _2_tl_js_1.types.PeerChat(update));
    const from_ = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: update.actor_id }));
    if (!chat_ || !from_) {
        (0, _0_deps_js_1.unreachable)();
    }
    const userPeer = new _2_tl_js_1.types.PeerUser(update);
    const chat = (0, _1_chat_p_js_1.constructChatP)(chat_);
    const from = (0, _1_user_js_1.constructUser)(from_);
    const date = (0, _1_utilities_js_1.fromUnixTimestamp)(update.date);
    const oldChatMember = await (0, _2_chat_member_js_1.constructChatMember)(update.prev_participant ?? new _2_tl_js_1.types.ChannelParticipantLeft({ peer: userPeer }), getEntity);
    const newChatMember = await (0, _2_chat_member_js_1.constructChatMember)(update.new_participant ?? new _2_tl_js_1.types.ChannelParticipantLeft({ peer: userPeer }), getEntity);
    const viaSharedFolder = "via_chatlist" in update ? update.via_chatlist ? true : update.invite ? false : undefined : undefined;
    const inviteLink = (update.invite && update.invite instanceof _2_tl_js_1.types.ChatInviteExported) ? await (0, _2_invite_link_js_1.constructInviteLink)(update.invite, getEntity) : undefined;
    return (0, _1_utilities_js_1.cleanObject)({
        chat,
        from,
        date,
        oldChatMember,
        newChatMember,
        viaSharedFolder,
        inviteLink,
    });
}
exports.constructChatMemberUpdated = constructChatMemberUpdated;
