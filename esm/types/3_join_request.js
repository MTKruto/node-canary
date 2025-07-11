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
import { constructInviteLink } from "./2_invite_link.js";
export async function constructJoinRequest(update, getEntity) {
    const chat_ = await getEntity(update.peer);
    if (!chat_) {
        unreachable();
    }
    const chat = constructChatP(chat_);
    const user_ = await getEntity({ _: "peerUser", user_id: update.user_id });
    if (!user_) {
        unreachable();
    }
    const from = constructUser(user_);
    const inviteLink = update.invite && Api.is("chatInviteExported", update.invite) ? await constructInviteLink(update.invite, getEntity) : undefined;
    return cleanObject({
        chat,
        from,
        date: update.date,
        bio: update.about,
        inviteLink,
    });
}
export async function constructJoinRequest2(peer, inviteImporter, getEntity) {
    const chat_ = await getEntity(peer);
    if (!chat_) {
        unreachable();
    }
    const chat = constructChatP(chat_);
    const user_ = await getEntity({ _: "peerUser", user_id: inviteImporter.user_id });
    if (!user_) {
        unreachable();
    }
    const from = constructUser(user_);
    return cleanObject({
        chat,
        from,
        date: inviteImporter.date,
        bio: inviteImporter.about,
    });
}
