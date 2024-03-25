"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatMemberRightsToTlObject = exports.constructChatMemberRights = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
function constructChatMemberRights(rights) {
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
exports.constructChatMemberRights = constructChatMemberRights;
function chatMemberRightsToTlObject(rights, untilDate) {
    return new _2_tl_js_1.types.ChatBannedRights({
        until_date: untilDate ? (0, _1_utilities_js_1.toUnixTimestamp)(untilDate) : 0,
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
exports.chatMemberRightsToTlObject = chatMemberRightsToTlObject;
