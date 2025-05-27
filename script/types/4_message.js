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
exports.isMessageType = isMessageType;
exports.assertMessageType = assertMessageType;
exports.constructMessage = constructMessage;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _file_id_js_1 = require("./_file_id.js");
const _file_id_js_2 = require("./_file_id.js");
const _0_contact_js_1 = require("./0_contact.js");
const _0_dice_js_1 = require("./0_dice.js");
const _0_invoice_js_1 = require("./0_invoice.js");
const _0_link_preview_js_1 = require("./0_link_preview.js");
const _0_location_js_1 = require("./0_location.js");
const _0_message_entity_js_1 = require("./0_message_entity.js");
const _0_refunded_payment_js_1 = require("./0_refunded_payment.js");
const _0_self_destruct_option_js_1 = require("./0_self_destruct_option.js");
const _0_voice_js_1 = require("./0_voice.js");
const _1_animation_js_1 = require("./1_animation.js");
const _1_audio_js_1 = require("./1_audio.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_document_js_1 = require("./1_document.js");
const _1_giveaway_js_1 = require("./1_giveaway.js");
const _1_message_reaction_js_1 = require("./1_message_reaction.js");
const _1_photo_js_1 = require("./1_photo.js");
const _1_reply_quote_js_1 = require("./1_reply_quote.js");
const _1_sticker_js_1 = require("./1_sticker.js");
const _1_user_js_1 = require("./1_user.js");
const _1_venue_js_1 = require("./1_venue.js");
const _1_video_note_js_1 = require("./1_video_note.js");
const _1_video_js_1 = require("./1_video.js");
const _2_forward_header_js_1 = require("./2_forward_header.js");
const _2_game_js_1 = require("./2_game.js");
const _2_poll_js_1 = require("./2_poll.js");
const _2_successful_payment_js_1 = require("./2_successful_payment.js");
const _3_reply_markup_js_1 = require("./3_reply_markup.js");
const L = (0, _1_utilities_js_1.getLogger)("Message");
const keys = {
    text: ["text"],
    link: ["linkPreview"],
    photo: ["photo"],
    document: ["document"],
    video: ["video"],
    sticker: ["sticker"],
    animation: ["animation"],
    voice: ["voice"],
    audio: ["audio"],
    dice: ["dice"],
    videoNote: ["videoNote"],
    contact: ["contact"],
    game: ["game"],
    poll: ["poll"],
    invoice: ["invoice"],
    venue: ["venue"],
    location: ["location"],
    newChatMembers: ["newChatMembers"],
    leftChatMember: ["leftChatMember"],
    newChatTitle: ["newChatTitle"],
    newChatPhoto: ["newChatPhoto"],
    deletedChatPhoto: ["deletedChatPhoto"],
    groupCreated: ["groupCreated", "newChatMembers"],
    supergroupCreated: ["supergroupCreated"],
    channelCreated: ["channelCreated"],
    newAutoDeleteTime: ["newAutoDeleteTime"],
    chatMigratedTo: ["chatMigratedTo"],
    chatMigratedFrom: ["chatMigratedFrom"],
    pinnedMessage: ["pinnedMessage"],
    userShared: ["userShared"],
    writeAccessAllowed: ["writeAccessAllowed"],
    forumTopicCreated: ["forumTopicCreated"],
    forumTopicEdited: ["forumTopicEdited"],
    forumTopicClosed: ["forumTopicClosed"],
    forumTopicReopened: ["forumTopicReopened"],
    videoChatScheduled: ["videoChatScheduled"],
    videoChatStarted: ["videoChatStarted"],
    videoChatEnded: ["videoChatEnded"],
    giveaway: ["giveaway"],
    unsupported: ["unsupported"],
    successfulPayment: ["successfulPayment"],
    refundedPayment: ["refundedPayment"],
};
function isMessageType(message, type) {
    for (const key of keys[type]) {
        if (!(key in message) || message[key] === undefined) {
            return false;
        }
    }
    return true;
}
function assertMessageType(message, type) {
    if (!isMessageType(message, type)) {
        (0, _0_deps_js_1.unreachable)();
    }
    return message;
}
async function getSender(message_, getEntity) {
    const peer = message_.from_id ?? message_.peer_id;
    if (_2_tl_js_1.Api.isOneOf(["peerChannel", "peerUser"], peer)) {
        const entity = await getEntity(peer);
        if (entity) {
            return { from: (0, _1_chat_p_js_1.constructChatP)(entity) };
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
async function getReply(message_, chat, getMessage) {
    if (getMessage && _2_tl_js_1.Api.is("messageReplyHeader", message_.reply_to) && message_.reply_to.reply_to_msg_id) {
        let isTopicMessage = false;
        if (message_.reply_to.forum_topic) {
            isTopicMessage = true;
        }
        const replyToMessage = await getMessage(chat.id, message_.reply_to.reply_to_msg_id);
        if (replyToMessage) {
            return { replyToMessage, threadId: message_.reply_to.reply_to_top_id, isTopicMessage };
        }
        else {
            L.warning("couldn't get replied message");
        }
    }
    return { replyToMessage: undefined, threadId: undefined, isTopicMessage: false };
}
async function constructServiceMessage(message_, chat, getEntity, getMessage, getReply_) {
    const message = {
        out: message_.out ?? false,
        id: message_.id,
        chat,
        date: (0, _1_utilities_js_1.fromUnixTimestamp)(message_.date),
        isTopicMessage: message_.reply_to && _2_tl_js_1.Api.is("messageReplyHeader", message_.reply_to) && message_.reply_to.forum_topic ? true : false,
        ...await getSender(message_, getEntity),
    };
    if (_2_tl_js_1.Api.is("messageReplyHeader", message_.reply_to) && message_.reply_to.reply_to_msg_id) {
        message.replyToMessageId = message_.reply_to.reply_to_top_id;
        message.replyToMessageId = message_.reply_to.reply_to_msg_id;
    }
    if (getReply_) {
        Object.assign(message, await getReply(message_, chat, getMessage));
    }
    if (_2_tl_js_1.Api.is("messageActionChatAddUser", message_.action) || _2_tl_js_1.Api.is("messageActionChatJoinedByLink", message_.action) || _2_tl_js_1.Api.is("messageActionChatJoinedByRequest", message_.action)) {
        const newChatMembers = new Array();
        const users = "users" in message_.action ? message_.action.users : [message_.from_id && "user_id" in message_.from_id ? message_.from_id.user_id : (0, _0_deps_js_1.unreachable)()];
        for (const user_ of users) {
            const entity = await getEntity({ _: "peerUser", user_id: user_ });
            if (entity) {
                const user = (0, _1_user_js_1.constructUser)(entity);
                newChatMembers.push(user);
            }
            else {
                (0, _0_deps_js_1.unreachable)();
            }
        }
        return { ...message, newChatMembers };
    }
    else if (_2_tl_js_1.Api.is("messageActionChatDeleteUser", message_.action)) {
        const entity = await getEntity({ _: "peerUser", user_id: message_.action.user_id });
        if (entity) {
            const user = (0, _1_user_js_1.constructUser)(entity);
            const leftChatMember = user;
            return { ...message, leftChatMember };
        }
    }
    else if (_2_tl_js_1.Api.is("messageActionChatEditTitle", message_.action)) {
        const newChatTitle = message_.action.title;
        return { ...message, newChatTitle };
    }
    else if (_2_tl_js_1.Api.is("messageActionChatEditPhoto", message_.action)) {
        const newChatPhoto = (0, _1_photo_js_1.constructPhoto)(_2_tl_js_1.Api.as("photo", message_.action.photo));
        return { ...message, newChatPhoto };
    }
    else if (_2_tl_js_1.Api.is("messageActionChatDeletePhoto", message_.action)) {
        const deletedChatPhoto = true;
        return { ...message, deletedChatPhoto };
    }
    else if (_2_tl_js_1.Api.is("messageActionChatCreate", message_.action)) {
        const groupCreated = true;
        const newChatMembers = new Array();
        for (const user_ of message_.action.users) {
            const entity = await getEntity({ _: "peerUser", user_id: user_ });
            if (entity) {
                const user = (0, _1_user_js_1.constructUser)(entity);
                newChatMembers.push(user);
            }
        }
        return { ...message, groupCreated, newChatMembers };
    }
    else if (_2_tl_js_1.Api.is("messageActionChannelCreate", message_.action)) {
        if (message.chat.type == "channel") {
            const channelCreated = true;
            return { ...message, channelCreated };
        }
        else if (message.chat.type == "supergroup") {
            const supergroupCreated = true;
            return { ...message, supergroupCreated };
        }
        else {
            // unreachable();
        }
    }
    else if (_2_tl_js_1.Api.is("messageActionChatMigrateTo", message_.action)) {
        const chatMigratedTo = _1_utilities_js_1.ZERO_CHANNEL_ID + Number(-message_.action.channel_id);
        return { ...message, chatMigratedTo };
    }
    else if (_2_tl_js_1.Api.is("messageActionChannelMigrateFrom", message_.action)) {
        const chatMigratedFrom = Number(-message_.action.chat_id);
        return { ...message, chatMigratedFrom };
    }
    else if (_2_tl_js_1.Api.is("messageActionPinMessage", message_.action)) {
        const { replyToMessage } = await getReply(message_, chat, getMessage);
        if (replyToMessage) {
            const pinnedMessage = replyToMessage;
            return { ...message, pinnedMessage };
        }
    }
    else if (_2_tl_js_1.Api.is("messageActionRequestedPeer", message_.action)) {
        const user = _2_tl_js_1.Api.as("peerUser", message_.action.peers[0]);
        const userShared = { requestId: message_.action.button_id, userId: Number(user.user_id) };
        return { ...message, userShared };
    }
    else if (_2_tl_js_1.Api.is("messageActionBotAllowed", message_.action)) {
        const miniAppName = message_.action.app ? _2_tl_js_1.Api.as("botApp", message_.action.app).title : undefined;
        const writeAccessAllowed = { miniAppName };
        return { ...message, writeAccessAllowed };
    }
    else if (_2_tl_js_1.Api.is("messageActionTopicCreate", message_.action)) {
        const forumTopicCreated = {
            name: message_.action.title,
            color: message_.action.icon_color,
            cutsomEmojiId: message_.action.icon_emoji_id ? String(message_.action.icon_emoji_id) : undefined,
        };
        return { ...message, forumTopicCreated };
    }
    else if (_2_tl_js_1.Api.is("messageActionTopicEdit", message_.action)) {
        if (message_.action.closed) {
            const forumTopicClosed = true;
            return { ...message, forumTopicClosed };
        }
        else if (message_.action.title || message_.action.icon_emoji_id) {
            const forumTopicEdited = {
                name: message_.action.title ?? "",
                customEmojiId: message_.action.icon_emoji_id ? String(message_.action.icon_emoji_id) : undefined,
            };
            return { ...message, forumTopicEdited };
        }
        else {
            const forumTopicReopened = true;
            return { ...message, forumTopicReopened };
        }
    }
    else if (_2_tl_js_1.Api.is("messageActionGroupCallScheduled", message_.action)) {
        const videoChatScheduled = { startDate: new Date(message_.action.schedule_date * 1000) };
        return { ...message, videoChatScheduled };
    }
    else if (_2_tl_js_1.Api.is("messageActionGroupCall", message_.action)) {
        if (message_.action.duration) {
            const videoChatEnded = { duration: message_.action.duration };
            return { ...message, videoChatEnded };
        }
        else {
            const videoChatStarted = true;
            return { ...message, videoChatStarted };
        }
    }
    else if (_2_tl_js_1.Api.is("messageActionSetMessagesTTL", message_.action)) {
        const newAutoDeleteTime = message_.action.period || 0;
        return { ...message, newAutoDeleteTime };
    }
    else if (_2_tl_js_1.Api.is("messageActionPaymentSentMe", message_.action)) {
        const successfulPayment = (0, _2_successful_payment_js_1.constructSuccessfulPayment)(message_.action);
        return { ...message, successfulPayment };
    }
    else if (_2_tl_js_1.Api.is("messageActionPaymentRefunded", message_.action)) {
        const refundedPayment = (0, _0_refunded_payment_js_1.constructRefundedPayment)(message_.action);
        return { ...message, refundedPayment };
    }
    return { ...message, unsupported: true };
}
async function constructMessage(message_, getEntity, getMessage, getStickerSetName, getReply_ = true, business, poll, pollResults) {
    if (!(_2_tl_js_1.Api.is("message", message_)) && !(_2_tl_js_1.Api.is("messageService", message_))) {
        (0, _0_deps_js_1.unreachable)();
    }
    let link;
    let chat_ = null;
    if (_2_tl_js_1.Api.is("peerUser", message_.peer_id)) {
        const entity = await getEntity(message_.peer_id);
        if (entity) {
            chat_ = (0, _1_chat_p_js_1.constructChatP)(entity);
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    else if (_2_tl_js_1.Api.is("peerChat", message_.peer_id)) {
        const entity = await getEntity(message_.peer_id);
        if (entity) {
            chat_ = (0, _1_chat_p_js_1.constructChatP)(entity);
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    else if (_2_tl_js_1.Api.is("peerChannel", message_.peer_id)) {
        const reply_to_top_id = message_.reply_to && _2_tl_js_1.Api.is("messageReplyHeader", message_.reply_to) && message_.reply_to.reply_to_top_id;
        const threadId = reply_to_top_id && typeof reply_to_top_id === "number" ? reply_to_top_id + "/" : "";
        link = `https://t.me/c/${message_.peer_id.channel_id}/${threadId}${message_.id}`;
        const entity = await getEntity(message_.peer_id);
        if (entity) {
            chat_ = (0, _1_chat_p_js_1.constructChatP)(entity);
            if (chat_.username) {
                link = link.replace(`/c/${message_.peer_id.channel_id}/`, `/${chat_.username}/`);
            }
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
    if (_2_tl_js_1.Api.is("messageService", message_)) {
        return await constructServiceMessage(message_, chat_, getEntity, getMessage, getReply_);
    }
    const message = {
        out: message_.out ?? false,
        id: message_.id,
        chat: chat_,
        link,
        date: (0, _1_utilities_js_1.fromUnixTimestamp)(message_.date),
        views: message_.views,
        forwards: message_.forwards,
        isTopicMessage: message_.reply_to && _2_tl_js_1.Api.is("messageReplyHeader", message_.reply_to) && message_.reply_to.forum_topic ? true : false,
        hasProtectedContent: message_.noforwards || false,
        senderBoostCount: message_.from_boosts_applied,
        effectId: message_.effect ? String(message_.effect) : undefined,
        scheduled: message_.from_scheduled ? true : undefined,
        ...await getSender(message_, getEntity),
    };
    if (message_.reactions) {
        const recentReactions = message_.reactions.recent_reactions ?? [];
        message.reactions = message_.reactions.results.map((v) => (0, _1_message_reaction_js_1.constructMessageReaction)(v, recentReactions));
    }
    if (_2_tl_js_1.Api.is("messageReplyHeader", message_.reply_to) && message_.reply_to.reply_to_msg_id) {
        if (message_.reply_to.quote) {
            message.replyQuote = (0, _1_reply_quote_js_1.constructReplyQuote)(message_.reply_to.quote_text, message_.reply_to.quote_offset, message_.reply_to.quote_entities);
        }
        message.threadId = message_.reply_to.reply_to_top_id;
        message.replyToMessageId = message_.reply_to.reply_to_msg_id;
    }
    if (business) {
        message.businessConnectionId = business.connectionId;
        if (business.replyToMessage) {
            message.replyToMessageId = business.replyToMessage.id;
            message.replyToMessage = await constructMessage(business.replyToMessage, getEntity, getMessage, getStickerSetName, false, { connectionId: business.connectionId });
        }
    }
    else if (getReply_) {
        Object.assign(message, await getReply(message_, chat_, getMessage));
    }
    if (message_.reply_markup) {
        message.replyMarkup = (0, _3_reply_markup_js_1.constructReplyMarkup)(message_.reply_markup);
    }
    if (message_.via_bot_id != undefined) {
        const viaBot = await getEntity({ _: "peerUser", user_id: message_.via_bot_id });
        if (viaBot) {
            message.viaBot = (0, _1_user_js_1.constructUser)(viaBot);
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    if (message_.via_business_bot_id != undefined) {
        const viaBusinessBot = await getEntity({ _: "peerUser", user_id: message_.via_business_bot_id });
        if (viaBusinessBot) {
            message.viaBusinessBot = (0, _1_user_js_1.constructUser)(viaBusinessBot);
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    if (message_.post_author != undefined) {
        message.authorSignature = message_.post_author;
    }
    if (_2_tl_js_1.Api.is("messageFwdHeader", message_.fwd_from)) {
        message.isAutomaticForward = message_.fwd_from.saved_from_peer != undefined && message_.fwd_from.saved_from_msg_id != undefined;
        message.forwardFrom = await (0, _2_forward_header_js_1.constructForwardHeader)(message_.fwd_from, getEntity);
    }
    if (message_.grouped_id != undefined) {
        message.mediaGroupId = String(message_.grouped_id);
    }
    if (message_.edit_date != undefined) {
        message.editDate = (0, _1_utilities_js_1.fromUnixTimestamp)(message_.edit_date);
    }
    const messageText = {
        ...message,
        text: message_.message,
        entities: message_.entities?.map(_0_message_entity_js_1.constructMessageEntity).filter((v) => !!v) ?? [],
    };
    if (message_.message && message_.media === undefined) {
        return (0, _1_utilities_js_1.cleanObject)(messageText);
    }
    const messageMedia = {
        ...message,
        caption: message_.message,
        captionEntities: message_.entities?.map(_0_message_entity_js_1.constructMessageEntity).filter((v) => !!v) ?? [],
    };
    if (message_.media && "ttl_seconds" in message_.media && typeof message_.media.ttl_seconds === "number") {
        messageMedia.selfDestruct = (0, _0_self_destruct_option_js_1.constructSelfDestructOption)(message_.media.ttl_seconds);
    }
    if (_2_tl_js_1.Api.is("messageMediaPhoto", message_.media) || _2_tl_js_1.Api.is("messageMediaDocument", message_.media)) {
        messageMedia.hasMediaSpoiler = message_.media.spoiler || false;
    }
    let m = null;
    if (_2_tl_js_1.Api.is("messageMediaPhoto", message_.media)) {
        if (!message_.media.photo) {
            (0, _0_deps_js_1.unreachable)();
        }
        const photo = (0, _1_photo_js_1.constructPhoto)(_2_tl_js_1.Api.as("photo", message_.media.photo));
        m = { ...messageMedia, photo };
    }
    else if (_2_tl_js_1.Api.is("messageMediaDice", message_.media)) {
        const dice = (0, _0_dice_js_1.constructDice)(message_.media);
        m = { ...message, dice };
    }
    else if (_2_tl_js_1.Api.is("messageMediaDocument", message_.media)) {
        const { document } = message_.media;
        if (_2_tl_js_1.Api.is("document", document)) {
            const getFileId = (type) => ({
                type,
                dcId: document.dc_id,
                fileReference: document.file_reference,
                location: { type: "common", id: document.id, accessHash: document.access_hash },
            });
            const animated = document.attributes.find((v) => _2_tl_js_1.Api.is("documentAttributeAnimated", v));
            const audio = document.attributes.find((v) => _2_tl_js_1.Api.is("documentAttributeAudio", v));
            const fileName = document.attributes.find((v) => _2_tl_js_1.Api.is("documentAttributeFilename", v));
            const sticker = document.attributes.find((v) => _2_tl_js_1.Api.is("documentAttributeSticker", v));
            const video = document.attributes.find((v) => _2_tl_js_1.Api.is("documentAttributeVideo", v));
            if (animated) {
                const fileId = getFileId(_file_id_js_1.FileType.Animation);
                const animation = (0, _1_animation_js_1.constructAnimation)(document, video, fileName, (0, _file_id_js_2.serializeFileId)(fileId), (0, _file_id_js_1.toUniqueFileId)(fileId));
                m = { ...messageMedia, animation };
            }
            else if (video) {
                if (video.round_message) {
                    const fileId = getFileId(_file_id_js_1.FileType.VideoNote);
                    const videoNote = (0, _1_video_note_js_1.constructVideoNote)(document, video, (0, _file_id_js_2.serializeFileId)(fileId), (0, _file_id_js_1.toUniqueFileId)(fileId));
                    m = { ...message, videoNote };
                }
                else {
                    const fileId = getFileId(_file_id_js_1.FileType.Video);
                    const video_ = (0, _1_video_js_1.constructVideo)(document, video, fileName?.file_name, (0, _file_id_js_2.serializeFileId)(fileId), (0, _file_id_js_1.toUniqueFileId)(fileId));
                    m = { ...messageMedia, video: video_ };
                }
            }
            else if (audio) {
                if (audio.voice) {
                    const fileId = getFileId(_file_id_js_1.FileType.VoiceNote);
                    const voice = (0, _0_voice_js_1.constructVoice)(document, audio, (0, _file_id_js_2.serializeFileId)(fileId), (0, _file_id_js_1.toUniqueFileId)(fileId));
                    m = { ...messageMedia, voice };
                }
                else {
                    const fileId = getFileId(_file_id_js_1.FileType.Audio);
                    const audio_ = (0, _1_audio_js_1.constructAudio)(document, audio, (0, _file_id_js_2.serializeFileId)(fileId), (0, _file_id_js_1.toUniqueFileId)(fileId));
                    m = { ...messageMedia, audio: audio_ };
                }
            }
            else if (sticker) {
                const fileId = getFileId(_file_id_js_1.FileType.Sticker);
                const sticker = await (0, _1_sticker_js_1.constructSticker)(document, (0, _file_id_js_2.serializeFileId)(fileId), (0, _file_id_js_1.toUniqueFileId)(fileId), getStickerSetName);
                m = { ...message, sticker };
            }
            else {
                const fileId = getFileId(_file_id_js_1.FileType.Document);
                const document_ = (0, _1_document_js_1.constructDocument)(document, fileName ?? ({ _: "documentAttributeFilename", file_name: "Unknown" }), (0, _file_id_js_2.serializeFileId)(fileId), (0, _file_id_js_1.toUniqueFileId)(fileId));
                m = { ...messageMedia, document: document_ };
            }
        }
    }
    else if (_2_tl_js_1.Api.is("messageMediaContact", message_.media)) {
        const contact = (0, _0_contact_js_1.constructContact)(message_.media);
        m = { ...messageMedia, contact };
    }
    else if (_2_tl_js_1.Api.is("messageMediaGame", message_.media)) {
        const game = (0, _2_game_js_1.constructGame)(message_.media);
        m = { ...message, game };
    }
    else if (_2_tl_js_1.Api.is("messageMediaPoll", message_.media)) {
        if (poll) {
            message_.media.poll = poll;
        }
        if (pollResults) {
            message_.media.results = pollResults;
        }
        const poll_ = (0, _2_poll_js_1.constructPoll)(message_.media);
        m = { ...message, poll: poll_ };
    }
    else if (_2_tl_js_1.Api.is("messageMediaVenue", message_.media)) {
        const venue = (0, _1_venue_js_1.constructVenue)(message_.media);
        m = { ...message, venue };
    }
    else if (_2_tl_js_1.Api.is("messageMediaGeo", message_.media) || _2_tl_js_1.Api.is("messageMediaGeoLive", message_.media)) {
        const location = (0, _0_location_js_1.constructLocation)(message_.media);
        m = { ...message, location };
    }
    else if (_2_tl_js_1.Api.is("messageMediaWebPage", message_.media)) {
        const linkPreview = (0, _0_link_preview_js_1.constructLinkPreview)(message_.media, message_.invert_media);
        if (message_.message) {
            m = { ...messageText, linkPreview };
        }
        else {
            m = { ...message, linkPreview: { ...linkPreview, url: linkPreview.url ? linkPreview.url : (0, _0_deps_js_1.unreachable)() } };
        }
    }
    else if (_2_tl_js_1.Api.is("messageMediaGiveaway", message_.media)) {
        const giveaway = (0, _1_giveaway_js_1.constructGiveaway)(message_.media);
        m = { ...message, giveaway };
    }
    else if (_2_tl_js_1.Api.is("messageMediaInvoice", message_.media)) {
        const invoice = (0, _0_invoice_js_1.constructInvoice)(message_.media);
        m = { ...message, invoice };
    }
    if (m == null) {
        const unsupported = true;
        m = { ...message, unsupported };
    }
    return (0, _1_utilities_js_1.cleanObject)(m);
}
