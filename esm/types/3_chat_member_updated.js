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
import { constructChatP } from "./1_chat_p.js";
import { constructUser } from "./1_user.js";
import { constructChatMember } from "./2_chat_member.js";
import { constructInviteLink } from "./2_invite_link.js";
export async function constructChatMemberUpdated(update, getEntity) {
    if (!update.prev_participant && !update.new_participant) {
        unreachable();
    }
    const chat_ = await getEntity("channel_id" in update ? { channel_id: update.channel_id, _: "peerChannel" } : { chat_id: update.chat_id, _: "peerChat" });
    const from_ = await getEntity({ _: "peerUser", user_id: update.actor_id });
    if (!chat_ || !from_) {
        unreachable();
    }
    const userPeer = { ...update, _: "peerUser" };
    const chat = constructChatP(chat_);
    const from = constructUser(from_);
    const date = update.date;
    const oldChatMember = await constructChatMember(update.prev_participant ?? ({ _: "channelParticipantLeft", peer: userPeer }), getEntity);
    const newChatMember = await constructChatMember(update.new_participant ?? ({ _: "channelParticipantLeft", peer: userPeer }), getEntity);
    const viaSharedFolder = "via_chatlist" in update ? update.via_chatlist ? true : update.invite ? false : undefined : undefined;
    const inviteLink = (update.invite && Api.is("chatInviteExported", update.invite)) ? await constructInviteLink(update.invite, getEntity) : undefined;
    return cleanObject({
        chat,
        from,
        date,
        oldChatMember,
        newChatMember,
        viaSharedFolder,
        inviteLink,
    });
}
