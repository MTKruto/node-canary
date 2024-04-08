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
import { toUnixTimestamp } from "../1_utilities.js";
import { types } from "../2_tl.js";
export function constructChatMemberRights(rights) {
    return {
        canSendMessages: rights.send_messages ? true : false,
        canSendAudio: rights.send_audios ? true : false,
        canSendDocuments: rights.send_docs ? true : false,
        canSendPhotos: rights.send_photos ? true : false,
        canSendVideos: rights.send_messages ? true : false,
        canSendVideoNotes: rights.send_roundvideos ? true : false,
        canSendVoice: rights.send_voices ? true : false,
        canSendPolls: rights.send_polls ? true : false,
        canSendStickers: rights.send_stickers ? true : false,
        canSendAnimations: rights.send_gifs ? true : undefined,
        canSendGames: rights.send_games ? true : undefined,
        canSendInlineBotResults: rights.send_inline ? true : undefined,
        canAddWebPagePreviews: rights.embed_links ? true : undefined,
        canChangeInfo: rights.change_info ? true : undefined,
        canInviteUsers: rights.invite_users ? true : undefined,
        canPinMessages: rights.pin_messages ? true : undefined,
        canManageTopics: rights.manage_topics ? true : undefined,
    };
}
export function chatMemberRightsToTlObject(rights, untilDate) {
    return new types.ChatBannedRights({
        until_date: untilDate ? toUnixTimestamp(untilDate) : 0,
        send_messages: rights?.canSendMessages ? true : undefined,
        send_audios: rights?.canSendAudio ? true : undefined,
        send_docs: rights?.canSendDocuments ? true : undefined,
        send_photos: rights?.canSendPhotos ? true : undefined,
        send_videos: rights?.canSendVideos ? true : undefined,
        send_roundvideos: rights?.canSendVideoNotes ? true : undefined,
        send_voices: rights?.canSendVoice ? true : undefined,
        send_polls: rights?.canSendPolls ? true : undefined,
        send_stickers: rights?.canSendStickers ? true : undefined,
        send_gifs: rights?.canSendAnimations ? true : undefined,
        send_games: rights?.canSendGames ? true : undefined,
        send_inline: rights?.canSendInlineBotResults ? true : undefined,
        embed_links: rights?.canAddWebPagePreviews ? true : undefined,
        change_info: rights?.canChangeInfo ? true : undefined,
        invite_users: rights?.canInviteUsers ? true : undefined,
        pin_messages: rights?.canPinMessages ? true : undefined,
        manage_topics: rights?.canManageTopics ? true : undefined,
    });
}
