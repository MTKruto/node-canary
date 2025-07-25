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
import { Api } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { ChatP } from "./1_chat_p.js";
import { User } from "./1_user.js";
import { ChatMember } from "./2_chat_member.js";
import { InviteLink } from "./2_invite_link.js";
/** Changes made to a chat member. */
export interface ChatMemberUpdated {
    /** The chat in which the change was made. */
    chat: ChatP;
    /** The one who made the change. */
    from: User;
    /** The point in time in which the chat member's status was changed. */
    date: number;
    /** The old status of the chat member. */
    oldChatMember: ChatMember;
    /** The new status of the chat member. */
    newChatMember: ChatMember;
    /** The invite link used to join. */
    inviteLink?: InviteLink;
    /** Whether the user joined from a shared folder. */
    viaSharedFolder?: boolean;
}
export declare function constructChatMemberUpdated(update: Api.updateChannelParticipant | Api.updateChatParticipant, getEntity: EntityGetter): Promise<ChatMemberUpdated>;
//# sourceMappingURL=3_chat_member_updated.d.ts.map