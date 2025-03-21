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
exports.constructChatMember = constructChatMember;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_chat_administrator_rights_js_1 = require("./0_chat_administrator_rights.js");
const _0_chat_member_rights_js_1 = require("./0_chat_member_rights.js");
const _1_user_js_1 = require("./1_user.js");
async function constructChatMember(participant, getEntity) {
    const user_ = "user_id" in participant ? await getEntity({ ...participant, _: "peerUser" }) : "peer" in participant ? (0, _2_tl_js_1.is)("peerUser", participant.peer) ? await getEntity(participant.peer) : (0, _0_deps_js_1.unreachable)() : (0, _0_deps_js_1.unreachable)(); // TODO: support other peer types
    if (user_ == null)
        (0, _0_deps_js_1.unreachable)();
    const user = (0, _1_user_js_1.constructUser)(user_);
    if ((0, _2_tl_js_1.is)("channelParticipant", participant) || (0, _2_tl_js_1.is)("chatParticipant", participant)) {
        return {
            status: "member",
            user,
        };
    }
    else if ((0, _2_tl_js_1.is)("channelParticipantCreator", participant)) {
        return (0, _1_utilities_js_1.cleanObject)({
            status: "creator",
            user,
            isAnonymous: participant.admin_rights.anonymous ? true : false,
            title: participant.rank,
        });
    }
    else if ((0, _2_tl_js_1.is)("channelParticipantAdmin", participant)) {
        return (0, _1_utilities_js_1.cleanObject)({
            status: "administrator",
            user,
            rights: (0, _0_chat_administrator_rights_js_1.constructChatAdministratorRights)(participant.admin_rights),
            title: participant.rank,
        });
    }
    else if ((0, _2_tl_js_1.is)("channelParticipantBanned", participant)) {
        const untilDate = participant.banned_rights.until_date ? (0, _1_utilities_js_1.fromUnixTimestamp)(participant.banned_rights.until_date) : undefined;
        if (!participant.banned_rights.view_messages) {
            participant.peer;
            return (0, _1_utilities_js_1.cleanObject)({
                status: "banned",
                user,
                untilDate,
            });
        }
        const isMember = participant.left ? true : false;
        const rights = (0, _0_chat_member_rights_js_1.constructChatMemberRights)(participant.banned_rights);
        return (0, _1_utilities_js_1.cleanObject)({
            status: "restricted",
            user,
            isMember,
            rights,
            untilDate,
        });
    }
    else if ((0, _2_tl_js_1.is)("channelParticipantSelf", participant)) {
        (0, _0_deps_js_1.unreachable)(); // TODO: implement
    }
    else if ((0, _2_tl_js_1.is)("channelParticipantLeft", participant)) {
        return { status: "left", user };
    }
    else if ((0, _2_tl_js_1.is)("chatParticipantAdmin", participant)) {
        return (0, _1_utilities_js_1.cleanObject)({
            status: "administrator",
            user,
            rights: {
                isAnonymous: false,
                canManageChat: true,
                canDeleteMessages: true,
                canManageVideoChats: false,
                canRestrictMembers: true,
                canPromoteMembers: false,
                canChangeInfo: true,
                canInviteUsers: true,
                canPostMessages: false,
                canEditMessages: false,
                canPinMessages: true,
                canManageTopics: false,
            },
        });
    }
    else if ((0, _2_tl_js_1.is)("chatParticipantCreator", participant)) {
        return (0, _1_utilities_js_1.cleanObject)({
            status: "creator",
            user,
            isAnonymous: false,
        });
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
