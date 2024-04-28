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
import { types } from "../2_tl.js";
/** The rights of a chat member. */
export interface ChatMemberRights {
    /** Whether messages are allowed to be sent. */
    canSendMessages?: boolean;
    /** Whether audio files are allowed to be sent. */
    canSendAudio?: boolean;
    /** Whether files are allowed to be sent. */
    canSendDocuments?: boolean;
    /** Whether photos are allowed to be sent. */
    canSendPhotos?: boolean;
    /** Whether videos are allowed to be sent. */
    canSendVideos?: boolean;
    /** Whether video notes are allowed to be sent. */
    canSendVideoNotes?: boolean;
    /** Whether voice messages are allowed to be sent. */
    canSendVoice?: boolean;
    /** Whether polls are allowed to be sent. */
    canSendPolls?: boolean;
    /** Whether stickers are allowed to be sent. */
    canSendStickers?: boolean;
    /** Whether animations are allowed to be sent. */
    canSendAnimations?: boolean;
    /** Whether games are allowed to be sent. */
    canSendGames?: boolean;
    /** Whether inline bot results are allowed to be sent. */
    canSendInlineBotResults?: boolean;
    /** Whether it is allowed to add web page previews. */
    canAddWebPagePreviews?: boolean;
    /** Whether it is allowed to change the chat info. Ignored for supergroups. */
    canChangeInfo?: boolean;
    /** Whether it is allowed to invite users. */
    canInviteUsers?: boolean;
    /** Whether it is allowed to pin messages. */
    canPinMessages?: boolean;
    /** Whether it is allowed to manage topics. */
    canManageTopics?: boolean;
}
export declare function constructChatMemberRights(rights: types.ChatBannedRights): ChatMemberRights;
export declare function chatMemberRightsToTlObject(rights?: ChatMemberRights, untilDate?: Date): types.ChatBannedRights;
//# sourceMappingURL=0_chat_member_rights.d.ts.map