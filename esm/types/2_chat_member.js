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
import { unreachable } from "../0_deps.js";
import { cleanObject } from "../1_utilities.js";
import { Api } from "../2_tl.js";
import { constructChatAdministratorRights } from "./0_chat_administrator_rights.js";
import { constructChatMemberRights } from "./0_chat_member_rights.js";
import { constructUser } from "./1_user.js";
export async function constructChatMember(participant, getEntity) {
    const user_ = "user_id" in participant ? await getEntity({ ...participant, _: "peerUser" }) : "peer" in participant ? Api.is("peerUser", participant.peer) ? await getEntity(participant.peer) : unreachable() : unreachable(); // TODO: support other peer types
    if (user_ == null)
        unreachable();
    const user = constructUser(user_);
    if (Api.is("channelParticipant", participant) || Api.is("chatParticipant", participant)) {
        return {
            status: "member",
            user,
        };
    }
    else if (Api.is("channelParticipantCreator", participant)) {
        return cleanObject({
            status: "creator",
            user,
            isAnonymous: participant.admin_rights.anonymous ? true : false,
            title: participant.rank,
        });
    }
    else if (Api.is("channelParticipantAdmin", participant)) {
        return cleanObject({
            status: "administrator",
            user,
            rights: constructChatAdministratorRights(participant.admin_rights),
            title: participant.rank,
        });
    }
    else if (Api.is("channelParticipantBanned", participant)) {
        const until = participant.banned_rights.until_date ? participant.banned_rights.until_date : undefined;
        if (!participant.banned_rights.view_messages) {
            participant.peer;
            return cleanObject({
                status: "banned",
                user,
                until,
            });
        }
        const isMember = participant.left ? true : false;
        const rights = constructChatMemberRights(participant.banned_rights);
        return cleanObject({
            status: "restricted",
            user,
            isMember,
            rights,
            until,
        });
    }
    else if (Api.is("channelParticipantSelf", participant)) {
        const until = participant.subscription_until_date ? participant.subscription_until_date : undefined;
        return cleanObject({
            status: "member",
            user,
            until,
        });
    }
    else if (Api.is("channelParticipantLeft", participant)) {
        return { status: "left", user };
    }
    else if (Api.is("chatParticipantAdmin", participant)) {
        return cleanObject({
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
    else if (Api.is("chatParticipantCreator", participant)) {
        return cleanObject({
            status: "creator",
            user,
            isAnonymous: false,
        });
    }
    else {
        unreachable();
    }
}
