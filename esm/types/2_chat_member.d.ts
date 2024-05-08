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
import { enums } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { ChatAdministratorRights } from "./0_chat_administrator_rights.js";
import { ChatMemberRights } from "./0_chat_member_rights.js";
import { User } from "./1_user.js";
/** @unlisted */
export type ChatMemberStatus = "creator" | "administrator" | "member" | "restricted" | "left" | "banned";
/** @unlisted */
export interface _ChatMemberBase {
    status: ChatMemberStatus;
    user: User;
}
/** @unlisted */
export interface ChatMemberCreator extends _ChatMemberBase {
    status: "creator";
    isAnonymous: boolean;
    title?: string;
}
/** @unlisted */
export interface ChatMemberAdministrator extends _ChatMemberBase {
    status: "administrator";
    rights: ChatAdministratorRights;
    title?: string;
}
/** @unlisted */
export interface ChatMemberMember extends _ChatMemberBase {
    status: "member";
}
/** @unlisted */
export interface ChatMemberRestricted extends _ChatMemberBase {
    status: "restricted";
    isMember: boolean;
    rights: ChatMemberRights;
    untilDate?: Date;
}
/** @unlisted */
export interface ChatMemberLeft extends _ChatMemberBase {
    status: "left";
}
/** @unlisted */
export interface ChatMemberBanned extends _ChatMemberBase {
    status: "banned";
    untilDate?: Date;
}
/** A chat member. */
export type ChatMember = ChatMemberCreator | ChatMemberAdministrator | ChatMemberMember | ChatMemberRestricted | ChatMemberLeft | ChatMemberBanned;
export declare function constructChatMember(participant: enums.ChannelParticipant | enums.ChatParticipant, getEntity: EntityGetter): Promise<ChatMember>;
//# sourceMappingURL=2_chat_member.d.ts.map