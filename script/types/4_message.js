"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructMessage = exports.assertMessageType = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _file_id_js_1 = require("./_file_id.js");
const _file_id_js_2 = require("./_file_id.js");
const _0_contact_js_1 = require("./0_contact.js");
const _0_dice_js_1 = require("./0_dice.js");
const _0_link_preview_js_1 = require("./0_link_preview.js");
const _0_location_js_1 = require("./0_location.js");
const _0_message_entity_js_1 = require("./0_message_entity.js");
const _0_voice_js_1 = require("./0_voice.js");
const _1_animation_js_1 = require("./1_animation.js");
const _1_audio_js_1 = require("./1_audio.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_document_js_1 = require("./1_document.js");
const _1_giveaway_js_1 = require("./1_giveaway.js");
const _1_message_reaction_js_1 = require("./1_message_reaction.js");
const _1_photo_js_1 = require("./1_photo.js");
const _1_poll_js_1 = require("./1_poll.js");
const _1_reply_quote_js_1 = require("./1_reply_quote.js");
const _1_sticker_js_1 = require("./1_sticker.js");
const _1_user_js_1 = require("./1_user.js");
const _1_venue_js_1 = require("./1_venue.js");
const _1_video_note_js_1 = require("./1_video_note.js");
const _1_video_js_1 = require("./1_video.js");
const _2_game_js_1 = require("./2_game.js");
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
};
function assertMessageType(message, type) {
    for (const key of keys[type]) {
        if (!(key in message) || message[key] === undefined) {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
    }
    return message;
}
exports.assertMessageType = assertMessageType;
async function getSender(message_, getEntity) {
    if (message_.from_id instanceof _2_tl_js_1.types.PeerUser) {
        const entity = await getEntity(message_.from_id);
        if (entity) {
            return { from: (0, _1_user_js_1.constructUser)(entity) };
        }
        else {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
    }
    else if (message_.from_id instanceof _2_tl_js_1.types.PeerChannel) {
        const entity = await getEntity(message_.from_id);
        if (entity) {
            return { senderChat: (0, _1_chat_p_js_1.constructChatP)(entity) };
        }
        else {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
    }
}
async function getReply(message_, chat, getMessage) {
    if (getMessage && message_.reply_to instanceof _2_tl_js_1.types.MessageReplyHeader && message_.reply_to.reply_to_msg_id) {
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
    return { replyToMessage: undefined, threadId: undefined, isTopicMessage: undefined };
}
async function constructServiceMessage(message_, chat, getEntity, getMessage) {
    const message = {
        out: message_.out ?? false,
        id: message_.id,
        chat: chat,
        date: (0, _1_utilities_js_1.fromUnixTimestamp)(message_.date),
        isTopicMessage: false,
    };
    Object.assign(message, await getSender(message_, getEntity));
    if (message_.action instanceof _2_tl_js_1.types.MessageActionChatAddUser || message_.action instanceof _2_tl_js_1.types.MessageActionChatJoinedByLink || message_.action instanceof _2_tl_js_1.types.MessageActionChatJoinedByRequest) {
        const newChatMembers = new Array();
        const users = "users" in message_.action ? message_.action.users : [message_.from_id && "user_id" in message_.from_id ? message_.from_id.user_id : (0, _1_utilities_js_1.UNREACHABLE)()];
        for (const user_ of users) {
            const entity = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: user_ }));
            if (entity) {
                const user = (0, _1_user_js_1.constructUser)(entity);
                newChatMembers.push(user);
            }
            else {
                (0, _1_utilities_js_1.UNREACHABLE)();
            }
        }
        return { ...message, newChatMembers };
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionChatDeleteUser) {
        const entity = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: message_.action.user_id }));
        if (entity) {
            const user = (0, _1_user_js_1.constructUser)(entity);
            const leftChatMember = user;
            return { ...message, leftChatMember };
        }
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionChatEditTitle) {
        const newChatTitle = message_.action.title;
        return { ...message, newChatTitle };
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionChatEditPhoto) {
        const newChatPhoto = (0, _1_photo_js_1.constructPhoto)(message_.action.photo[_2_tl_js_1.as](_2_tl_js_1.types.Photo));
        return { ...message, newChatPhoto };
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionChatDeletePhoto) {
        const deletedChatPhoto = true;
        return { ...message, deletedChatPhoto };
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionChatCreate) {
        const groupCreated = true;
        const newChatMembers = new Array();
        for (const user_ of message_.action.users) {
            const entity = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: user_ }));
            if (entity) {
                const user = (0, _1_user_js_1.constructUser)(entity);
                newChatMembers.push(user);
            }
        }
        return { ...message, groupCreated, newChatMembers };
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionChannelCreate) {
        if (message.chat.type == "channel") {
            const channelCreated = true;
            return { ...message, channelCreated };
        }
        else if (message.chat.type == "supergroup") {
            const supergroupCreated = true;
            return { ...message, supergroupCreated };
        }
        else {
            // UNREACHABLE();
        }
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionChatMigrateTo) {
        const chatMigratedTo = _1_utilities_js_1.ZERO_CHANNEL_ID + Number(-message_.action.channel_id);
        return { ...message, chatMigratedTo };
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionChannelMigrateFrom) {
        const chatMigratedFrom = Number(-message_.action.chat_id);
        return { ...message, chatMigratedFrom };
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionPinMessage) {
        const { replyToMessage } = await getReply(message_, chat, getMessage);
        if (replyToMessage) {
            const pinnedMessage = replyToMessage;
            return { ...message, pinnedMessage };
        }
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionRequestedPeer) {
        const user = message_.action.peers[0][_2_tl_js_1.as](_2_tl_js_1.types.PeerUser);
        const userShared = { requestId: message_.action.button_id, userId: Number(user.user_id) };
        return { ...message, userShared };
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionBotAllowed) {
        const miniAppName = message_.action.app ? message_.action.app[_2_tl_js_1.as](_2_tl_js_1.types.BotApp).title : undefined;
        const writeAccessAllowed = { miniAppName };
        return { ...message, writeAccessAllowed };
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionTopicCreate) {
        const forumTopicCreated = {
            name: message_.action.title,
            iconColor: "#" + message_.action.icon_color.toString(16).padStart(6, "0"),
            iconCutsomEmojiId: message_.action.icon_emoji_id ? String(message_.action.icon_emoji_id) : undefined,
        };
        return { ...message, forumTopicCreated };
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionTopicEdit) {
        if (message_.action.closed) {
            const forumTopicClosed = true;
            return { ...message, forumTopicClosed };
        }
        else if (message_.action.title || message_.action.icon_emoji_id) {
            const forumTopicEdited = {
                name: message_.action.title ?? "",
                iconCutsomEmojiId: message_.action.icon_emoji_id ? String(message_.action.icon_emoji_id) : undefined,
            };
            return { ...message, forumTopicEdited };
        }
        else {
            const forumTopicReopened = true;
            return { ...message, forumTopicReopened };
        }
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionGroupCallScheduled) {
        const videoChatScheduled = { startDate: new Date(message_.action.schedule_date * 1000) };
        return { ...message, videoChatScheduled };
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionGroupCall) {
        if (message_.action.duration) {
            const videoChatEnded = { duration: message_.action.duration };
            return { ...message, videoChatEnded };
        }
        else {
            const videoChatStarted = true;
            return { ...message, videoChatStarted };
        }
    }
    else if (message_.action instanceof _2_tl_js_1.types.MessageActionSetMessagesTTL) {
        const newAutoDeleteTime = message_.action.period || 0;
        return { ...message, newAutoDeleteTime };
    }
    return { ...message, unsupported: true };
}
async function constructMessage(message_, getEntity, getMessage, getStickerSetName, getReply_ = true, business) {
    if (!(message_ instanceof _2_tl_js_1.types.Message) && !(message_ instanceof _2_tl_js_1.types.MessageService)) {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
    let link;
    let chat_ = null;
    if (message_.peer_id instanceof _2_tl_js_1.types.PeerUser) {
        const entity = await getEntity(message_.peer_id);
        if (entity) {
            chat_ = (0, _1_chat_p_js_1.constructChatP)(entity);
        }
        else {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
    }
    else if (message_.peer_id instanceof _2_tl_js_1.types.PeerChat) {
        const entity = await getEntity(message_.peer_id);
        if (entity) {
            chat_ = (0, _1_chat_p_js_1.constructChatP)(entity);
        }
        else {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
    }
    else if (message_.peer_id instanceof _2_tl_js_1.types.PeerChannel) {
        link = `https://t.me/c/${message_.peer_id.channel_id}/${message_.id}`;
        const entity = await getEntity(message_.peer_id);
        if (entity) {
            chat_ = (0, _1_chat_p_js_1.constructChatP)(entity);
        }
        else {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
    }
    else {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
    if (message_ instanceof _2_tl_js_1.types.MessageService) {
        return await constructServiceMessage(message_, chat_, getEntity, getMessage);
    }
    const message = {
        out: message_.out ?? false,
        id: message_.id,
        chat: chat_,
        link,
        date: (0, _1_utilities_js_1.fromUnixTimestamp)(message_.date),
        views: message_.views,
        forwards: message_.forwards,
        isTopicMessage: false,
        hasProtectedContent: message_.noforwards || false,
        senderBoostCount: message_.from_boosts_applied,
    };
    if (message_.reactions) {
        const recentReactions = message_.reactions.recent_reactions ?? [];
        message.reactions = message_.reactions.results.map((v) => (0, _1_message_reaction_js_1.constructMessageReaction)(v, recentReactions));
    }
    if (message_.reply_to instanceof _2_tl_js_1.types.MessageReplyHeader && message_.reply_to.reply_to_msg_id) {
        if (message_.reply_to.quote) {
            message.replyQuote = (0, _1_reply_quote_js_1.constructReplyQuote)(message_.reply_to.quote_text, message_.reply_to.quote_offset, message_.reply_to.quote_entities);
        }
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
    Object.assign(message, await getSender(message_, getEntity));
    if (message_.reply_markup) {
        message.replyMarkup = (0, _3_reply_markup_js_1.constructReplyMarkup)(message_.reply_markup);
    }
    if (message_.via_bot_id != undefined) {
        const viaBot = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: message_.via_bot_id }));
        if (viaBot) {
            message.viaBot = (0, _1_user_js_1.constructUser)(viaBot);
        }
        else {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
    }
    if (message_.via_business_bot_id != undefined) {
        const viaBusinessBot = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: message_.via_business_bot_id }));
        if (viaBusinessBot) {
            message.viaBusinessBot = (0, _1_user_js_1.constructUser)(viaBusinessBot);
        }
        else {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
    }
    if (message_.post_author != undefined) {
        message.authorSignature = message_.post_author;
    }
    if (message_.fwd_from instanceof _2_tl_js_1.types.MessageFwdHeader) {
        message.isAutomaticForward = message_.fwd_from.saved_from_peer != undefined && message_.fwd_from.saved_from_msg_id != undefined;
        message.forwardSenderName = message_.fwd_from.from_name;
        message.forwardId = message_.fwd_from.channel_post;
        message.forwardSignature = message_.fwd_from.post_author;
        message.forwardDate = (0, _1_utilities_js_1.fromUnixTimestamp)(message_.fwd_from.date);
        if (message_.fwd_from.from_id instanceof _2_tl_js_1.types.PeerUser) {
            const entity = await getEntity(message_.fwd_from.from_id);
            if (entity) {
                message.forwardFrom = (0, _1_user_js_1.constructUser)(entity);
            }
        }
        else if (message_.fwd_from.from_id instanceof _2_tl_js_1.types.PeerChat) {
            const entity = await getEntity(message_.fwd_from.from_id);
            if (entity) {
                message.forwardFromChat = (0, _1_chat_p_js_1.constructChatP)(entity);
            }
        }
        else if (message_.fwd_from.from_id instanceof _2_tl_js_1.types.PeerChannel) {
            const entity = await getEntity(message_.fwd_from.from_id);
            if (entity) {
                message.forwardFromChat = (0, _1_chat_p_js_1.constructChatP)(entity);
            }
        }
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
        return messageText;
    }
    const messageMedia = {
        ...message,
        caption: message_.message,
        captionEntities: message_.entities?.map(_0_message_entity_js_1.constructMessageEntity).filter((v) => !!v) ?? [],
    };
    if (message_.media instanceof _2_tl_js_1.types.MessageMediaPhoto || message_.media instanceof _2_tl_js_1.types.MessageMediaDocument) {
        messageMedia.hasMediaSpoiler = message_.media.spoiler || false;
    }
    let m = null;
    if (message_.media instanceof _2_tl_js_1.types.MessageMediaPhoto) {
        if (!message_.media.photo) {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
        const photo = (0, _1_photo_js_1.constructPhoto)(message_.media.photo[_2_tl_js_1.as](_2_tl_js_1.types.Photo));
        m = { ...messageMedia, photo };
    }
    else if (message_.media instanceof _2_tl_js_1.types.MessageMediaDice) {
        const dice = (0, _0_dice_js_1.constructDice)(message_.media);
        m = { ...message, dice };
    }
    else if (message_.media instanceof _2_tl_js_1.types.MessageMediaDocument) {
        const { document } = message_.media;
        if (document instanceof _2_tl_js_1.types.Document) {
            const getFileId = (type) => ({
                type,
                dcId: document.dc_id,
                fileReference: document.file_reference,
                location: { type: "common", id: document.id, accessHash: document.access_hash },
            });
            const animated = document.attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeAnimated);
            const audio = document.attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeAudio);
            const fileName = document.attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeFilename);
            const sticker = document.attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeSticker);
            const video = document.attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeVideo);
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
                const document_ = (0, _1_document_js_1.constructDocument)(document, fileName ?? new _2_tl_js_1.types.DocumentAttributeFilename({ file_name: "Unknown" }), (0, _file_id_js_2.serializeFileId)(fileId), (0, _file_id_js_1.toUniqueFileId)(fileId));
                m = { ...messageMedia, document: document_ };
            }
        }
    }
    else if (message_.media instanceof _2_tl_js_1.types.MessageMediaContact) {
        const contact = (0, _0_contact_js_1.constructContact)(message_.media);
        m = { ...messageMedia, contact };
    }
    else if (message_.media instanceof _2_tl_js_1.types.MessageMediaGame) {
        const game = (0, _2_game_js_1.constructGame)(message_.media);
        m = { ...message, game };
    }
    else if (message_.media instanceof _2_tl_js_1.types.MessageMediaPoll) {
        const poll = (0, _1_poll_js_1.constructPoll)(message_.media);
        m = { ...message, poll };
    }
    else if (message_.media instanceof _2_tl_js_1.types.MessageMediaVenue) {
        const venue = (0, _1_venue_js_1.constructVenue)(message_.media);
        m = { ...message, venue };
    }
    else if (message_.media instanceof _2_tl_js_1.types.MessageMediaGeo || message_.media instanceof _2_tl_js_1.types.MessageMediaGeoLive) {
        const location = (0, _0_location_js_1.constructLocation)(message_.media);
        m = { ...message, location };
    }
    else if (message_.media instanceof _2_tl_js_1.types.MessageMediaWebPage) {
        const linkPreview = (0, _0_link_preview_js_1.constructLinkPreview)(message_.media, message_.invert_media);
        if (message_.message) {
            m = { ...messageText, linkPreview };
        }
        else {
            m = { ...message, linkPreview: { ...linkPreview, url: linkPreview.url ? linkPreview.url : (0, _1_utilities_js_1.UNREACHABLE)() } };
        }
    }
    else if (message_.media instanceof _2_tl_js_1.types.MessageMediaGiveaway) {
        const giveaway = (0, _1_giveaway_js_1.constructGiveaway)(message_.media);
        m = { ...message, giveaway };
    }
    if (m == null) {
        const unsupported = true;
        m = { ...message, unsupported };
    }
    return (0, _1_utilities_js_1.cleanObject)(m);
}
exports.constructMessage = constructMessage;
