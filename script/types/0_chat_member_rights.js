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
exports.constructChatMemberRights = constructChatMemberRights;
exports.chatMemberRightsToTlObject = chatMemberRightsToTlObject;
const _1_utilities_js_1 = require("../1_utilities.js");
function constructChatMemberRights(rights) {
    return (0, _1_utilities_js_1.cleanObject)({
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
    });
}
function chatMemberRightsToTlObject(rights, untilDate) {
    return {
        _: "chatBannedRights",
        until_date: untilDate ? (0, _1_utilities_js_1.toUnixTimestamp)(untilDate) : 0,
        send_messages: rights?.canSendMessages !== false ? undefined : true,
        send_audios: rights?.canSendAudio !== false ? undefined : true,
        send_docs: rights?.canSendDocuments !== false ? undefined : true,
        send_photos: rights?.canSendPhotos !== false ? undefined : true,
        send_videos: rights?.canSendVideos !== false ? undefined : true,
        send_roundvideos: rights?.canSendVideoNotes !== false ? undefined : true,
        send_voices: rights?.canSendVoice !== false ? undefined : true,
        send_polls: rights?.canSendPolls !== false ? undefined : true,
        send_stickers: rights?.canSendStickers !== false ? undefined : true,
        send_gifs: rights?.canSendAnimations !== false ? undefined : true,
        send_games: rights?.canSendGames !== false ? undefined : true,
        send_inline: rights?.canSendInlineBotResults !== false ? undefined : true,
        embed_links: rights?.canAddWebPagePreviews !== false ? undefined : true,
        change_info: rights?.canChangeInfo !== false ? undefined : true,
        invite_users: rights?.canInviteUsers !== false ? undefined : true,
        pin_messages: rights?.canPinMessages !== false ? undefined : true,
        manage_topics: rights?.canManageTopics !== false ? undefined : true,
    };
}
