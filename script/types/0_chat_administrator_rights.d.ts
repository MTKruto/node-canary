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
/** The rights of a chat administrator. */
export interface ChatAdministratorRights {
    /** Whether the admininistrator's presence in the chat is hidden. */
    isAnonymous: boolean;
    /** Whether the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and surpass slow mode. */
    canManageChat: boolean;
    /** Whether the administrator can delete messages of other users. */
    canDeleteMessages: boolean;
    /** Whether the administrator can manage video chats. */
    canManageVideoChats: boolean;
    /** Whether the administrator can restrict, ban or unban chat members. */
    canRestrictMembers: boolean;
    /** Whether the administrator can promote regular members to admininistrators. */
    canPromoteMembers: boolean;
    /** Whether the administrator can change the name of the chat, its photo, description and some other settings. */
    canChangeInfo: boolean;
    /** Whether the administrator can invite users to the chat. */
    canInviteUsers: boolean;
    /** Whether the administrator can make posts in the channel. Only available for channels. */
    canPostMessages?: boolean;
    /** Whether the administrator can pin posts and edit posts they didn't send. Only available for channels. */
    canEditMessages?: boolean;
    /** Whether the administrator can pin messages. Only available for groups and supergroups. */
    canPinMessages?: boolean;
    /** Whether the administrator can manage topics. Only available for supergroups. */
    canManageTopics?: boolean;
}
export declare function constructChatAdministratorRights(rights_: Api.ChatAdminRights): ChatAdministratorRights;
export declare function chatAdministratorRightsToTlObject(rights: ChatAdministratorRights): Api.chatAdminRights;
//# sourceMappingURL=0_chat_administrator_rights.d.ts.map