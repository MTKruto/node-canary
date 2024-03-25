import { cleanObject, fromUnixTimestamp, getLogger, UNREACHABLE, ZERO_CHANNEL_ID } from "../1_utilities.js";
import { as, types } from "../2_tl.js";
import { FileType, toUniqueFileId } from "./0__file_id.js";
import { serializeFileId } from "./0__file_id.js";
import { constructContact } from "./0_contact.js";
import { constructDice } from "./0_dice.js";
import { constructLinkPreview } from "./0_link_preview.js";
import { constructLocation } from "./0_location.js";
import { constructMessageEntity } from "./0_message_entity.js";
import { constructVenue } from "./0_venue.js";
import { constructVoice } from "./0_voice.js";
import { constructAnimation } from "./1_animation.js";
import { constructAudio } from "./1_audio.js";
import { constructChatP } from "./1_chat_p.js";
import { constructDocument } from "./1_document.js";
import { constructGiveaway } from "./1_giveaway.js";
import { constructMessageReaction } from "./1_message_reaction.js";
import { constructPhoto } from "./1_photo.js";
import { constructPoll } from "./1_poll.js";
import { constructReplyQuote } from "./1_reply_quote.js";
import { constructSticker } from "./1_sticker.js";
import { constructUser } from "./1_user.js";
import { constructVideoNote } from "./1_video_note.js";
import { constructVideo } from "./1_video.js";
import { constructGame } from "./2_game.js";
import { constructReplyMarkup } from "./3_reply_markup.js";
const L = getLogger("Message");
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
export function assertMessageType(message, type) {
    for (const key of keys[type]) {
        if (!(key in message) || message[key] === undefined) {
            UNREACHABLE();
        }
    }
    return message;
}
async function getSender(message_, getEntity) {
    if (message_.from_id instanceof types.PeerUser) {
        const entity = await getEntity(message_.from_id);
        if (entity) {
            return { from: constructUser(entity) };
        }
        else {
            UNREACHABLE();
        }
    }
    else if (message_.from_id instanceof types.PeerChannel) {
        const entity = await getEntity(message_.from_id);
        if (entity) {
            return { senderChat: constructChatP(entity) };
        }
        else {
            UNREACHABLE();
        }
    }
}
async function getReply(message_, chat, getMessage) {
    if (getMessage && message_.reply_to instanceof types.MessageReplyHeader && message_.reply_to.reply_to_msg_id) {
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
        date: fromUnixTimestamp(message_.date),
        isTopicMessage: false,
    };
    Object.assign(message, await getSender(message_, getEntity));
    if (message_.action instanceof types.MessageActionChatAddUser || message_.action instanceof types.MessageActionChatJoinedByLink || message_.action instanceof types.MessageActionChatJoinedByRequest) {
        const newChatMembers = new Array();
        const users = "users" in message_.action ? message_.action.users : [message_.from_id && "user_id" in message_.from_id ? message_.from_id.user_id : UNREACHABLE()];
        for (const user_ of users) {
            const entity = await getEntity(new types.PeerUser({ user_id: user_ }));
            if (entity) {
                const user = constructUser(entity);
                newChatMembers.push(user);
            }
            else {
                UNREACHABLE();
            }
        }
        return { ...message, newChatMembers };
    }
    else if (message_.action instanceof types.MessageActionChatDeleteUser) {
        const entity = await getEntity(new types.PeerUser({ user_id: message_.action.user_id }));
        if (entity) {
            const user = constructUser(entity);
            const leftChatMember = user;
            return { ...message, leftChatMember };
        }
    }
    else if (message_.action instanceof types.MessageActionChatEditTitle) {
        const newChatTitle = message_.action.title;
        return { ...message, newChatTitle };
    }
    else if (message_.action instanceof types.MessageActionChatEditPhoto) {
        const newChatPhoto = constructPhoto(message_.action.photo[as](types.Photo));
        return { ...message, newChatPhoto };
    }
    else if (message_.action instanceof types.MessageActionChatDeletePhoto) {
        const deletedChatPhoto = true;
        return { ...message, deletedChatPhoto };
    }
    else if (message_.action instanceof types.MessageActionChatCreate) {
        const groupCreated = true;
        const newChatMembers = new Array();
        for (const user_ of message_.action.users) {
            const entity = await getEntity(new types.PeerUser({ user_id: user_ }));
            if (entity) {
                const user = constructUser(entity);
                newChatMembers.push(user);
            }
        }
        return { ...message, groupCreated, newChatMembers };
    }
    else if (message_.action instanceof types.MessageActionChannelCreate) {
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
    else if (message_.action instanceof types.MessageActionChatMigrateTo) {
        const chatMigratedTo = ZERO_CHANNEL_ID + Number(-message_.action.channel_id);
        return { ...message, chatMigratedTo };
    }
    else if (message_.action instanceof types.MessageActionChannelMigrateFrom) {
        const chatMigratedFrom = Number(-message_.action.chat_id);
        return { ...message, chatMigratedFrom };
    }
    else if (message_.action instanceof types.MessageActionPinMessage) {
        const { replyToMessage } = await getReply(message_, chat, getMessage);
        if (replyToMessage) {
            const pinnedMessage = replyToMessage;
            return { ...message, pinnedMessage };
        }
    }
    else if (message_.action instanceof types.MessageActionRequestedPeer) {
        const user = message_.action.peers[0][as](types.PeerUser);
        const userShared = { requestId: message_.action.button_id, userId: Number(user.user_id) };
        return { ...message, userShared };
    }
    else if (message_.action instanceof types.MessageActionBotAllowed) {
        const miniAppName = message_.action.app ? message_.action.app[as](types.BotApp).title : undefined;
        const writeAccessAllowed = { miniAppName };
        return { ...message, writeAccessAllowed };
    }
    else if (message_.action instanceof types.MessageActionTopicCreate) {
        const forumTopicCreated = {
            name: message_.action.title,
            iconColor: "#" + message_.action.icon_color.toString(16).padStart(6, "0"),
            iconCutsomEmojiId: message_.action.icon_emoji_id ? String(message_.action.icon_emoji_id) : undefined,
        };
        return { ...message, forumTopicCreated };
    }
    else if (message_.action instanceof types.MessageActionTopicEdit) {
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
    else if (message_.action instanceof types.MessageActionGroupCallScheduled) {
        const videoChatScheduled = { startDate: new Date(message_.action.schedule_date * 1000) };
        return { ...message, videoChatScheduled };
    }
    else if (message_.action instanceof types.MessageActionGroupCall) {
        if (message_.action.duration) {
            const videoChatEnded = { duration: message_.action.duration };
            return { ...message, videoChatEnded };
        }
        else {
            const videoChatStarted = true;
            return { ...message, videoChatStarted };
        }
    }
    else if (message_.action instanceof types.MessageActionSetMessagesTTL) {
        const newAutoDeleteTime = message_.action.period || 0;
        return { ...message, newAutoDeleteTime };
    }
    return { ...message, unsupported: true };
}
export async function constructMessage(message_, getEntity, getMessage, getStickerSetName, getReply_ = true) {
    if (!(message_ instanceof types.Message) && !(message_ instanceof types.MessageService)) {
        UNREACHABLE();
    }
    let link;
    let chat_ = null;
    if (message_.peer_id instanceof types.PeerUser) {
        const entity = await getEntity(message_.peer_id);
        if (entity) {
            chat_ = constructChatP(entity);
        }
        else {
            UNREACHABLE();
        }
    }
    else if (message_.peer_id instanceof types.PeerChat) {
        const entity = await getEntity(message_.peer_id);
        if (entity) {
            chat_ = constructChatP(entity);
        }
        else {
            UNREACHABLE();
        }
    }
    else if (message_.peer_id instanceof types.PeerChannel) {
        link = `https://t.me/c/${message_.peer_id.channel_id}/${message_.id}`;
        const entity = await getEntity(message_.peer_id);
        if (entity) {
            chat_ = constructChatP(entity);
        }
        else {
            UNREACHABLE();
        }
    }
    else {
        UNREACHABLE();
    }
    if (message_ instanceof types.MessageService) {
        return await constructServiceMessage(message_, chat_, getEntity, getMessage);
    }
    const message = {
        out: message_.out ?? false,
        id: message_.id,
        chat: chat_,
        link,
        date: fromUnixTimestamp(message_.date),
        views: message_.views,
        forwards: message_.forwards,
        isTopicMessage: false,
        hasProtectedContent: message_.noforwards || false,
    };
    if (message_.reactions) {
        const recentReactions = message_.reactions.recent_reactions ?? [];
        message.reactions = message_.reactions.results.map((v) => constructMessageReaction(v, recentReactions));
    }
    if (message_.reply_to instanceof types.MessageReplyHeader && message_.reply_to.reply_to_msg_id) {
        if (message_.reply_to.quote) {
            message.replyQuote = constructReplyQuote(message_.reply_to.quote_text, message_.reply_to.quote_offset, message_.reply_to.quote_entities);
        }
        message.replyToMessageId = message_.reply_to.reply_to_msg_id;
    }
    if (getReply_) {
        Object.assign(message, await getReply(message_, chat_, getMessage));
    }
    Object.assign(message, await getSender(message_, getEntity));
    if (message_.reply_markup) {
        message.replyMarkup = constructReplyMarkup(message_.reply_markup);
    }
    if (message_.via_bot_id != undefined) {
        const viaBot = await getEntity(new types.PeerUser({ user_id: message_.via_bot_id }));
        if (viaBot) {
            message.viaBot = constructUser(viaBot);
        }
        else {
            UNREACHABLE();
        }
    }
    if (message_.post_author != undefined) {
        message.authorSignature = message_.post_author;
    }
    if (message_.fwd_from instanceof types.MessageFwdHeader) {
        message.isAutomaticForward = message_.fwd_from.saved_from_peer != undefined && message_.fwd_from.saved_from_msg_id != undefined;
        message.forwardSenderName = message_.fwd_from.from_name;
        message.forwardId = message_.fwd_from.channel_post;
        message.forwardSignature = message_.fwd_from.post_author;
        message.forwardDate = fromUnixTimestamp(message_.fwd_from.date);
        if (message_.fwd_from.from_id instanceof types.PeerUser) {
            const entity = await getEntity(message_.fwd_from.from_id);
            if (entity) {
                message.forwardFrom = constructUser(entity);
            }
        }
        else if (message_.fwd_from.from_id instanceof types.PeerChat) {
            const entity = await getEntity(message_.fwd_from.from_id);
            if (entity) {
                message.forwardFromChat = constructChatP(entity);
            }
        }
        else if (message_.fwd_from.from_id instanceof types.PeerChannel) {
            const entity = await getEntity(message_.fwd_from.from_id);
            if (entity) {
                message.forwardFromChat = constructChatP(entity);
            }
        }
    }
    if (message_.grouped_id != undefined) {
        message.mediaGroupId = String(message_.grouped_id);
    }
    if (message_.edit_date != undefined) {
        message.editDate = fromUnixTimestamp(message_.edit_date);
    }
    const messageText = {
        ...message,
        text: message_.message,
        entities: message_.entities?.map(constructMessageEntity).filter((v) => !!v) ?? [],
    };
    if (message_.message && message_.media === undefined) {
        return messageText;
    }
    const messageMedia = {
        ...message,
        caption: message_.message,
        captionEntities: message_.entities?.map(constructMessageEntity).filter((v) => !!v) ?? [],
    };
    if (message_.media instanceof types.MessageMediaPhoto || message_.media instanceof types.MessageMediaDocument) {
        messageMedia.hasMediaSpoiler = message_.media.spoiler || false;
    }
    let m = null;
    if (message_.media instanceof types.MessageMediaPhoto) {
        if (!message_.media.photo) {
            UNREACHABLE();
        }
        const photo = constructPhoto(message_.media.photo[as](types.Photo));
        m = { ...messageMedia, photo };
    }
    else if (message_.media instanceof types.MessageMediaDice) {
        const dice = constructDice(message_.media);
        m = { ...message, dice };
    }
    else if (message_.media instanceof types.MessageMediaDocument) {
        const { document } = message_.media;
        if (document instanceof types.Document) {
            const getFileId = (type) => ({
                type,
                dcId: document.dc_id,
                fileReference: document.file_reference,
                location: { type: "common", id: document.id, accessHash: document.access_hash },
            });
            const animated = document.attributes.find((v) => v instanceof types.DocumentAttributeAnimated);
            const audio = document.attributes.find((v) => v instanceof types.DocumentAttributeAudio);
            const fileName = document.attributes.find((v) => v instanceof types.DocumentAttributeFilename);
            const sticker = document.attributes.find((v) => v instanceof types.DocumentAttributeSticker);
            const video = document.attributes.find((v) => v instanceof types.DocumentAttributeVideo);
            if (animated) {
                const fileId = getFileId(FileType.Animation);
                const animation = constructAnimation(document, video, fileName, serializeFileId(fileId), toUniqueFileId(fileId));
                m = { ...messageMedia, animation };
            }
            else if (video) {
                if (video.round_message) {
                    const fileId = getFileId(FileType.VideoNote);
                    const videoNote = constructVideoNote(document, video, serializeFileId(fileId), toUniqueFileId(fileId));
                    m = { ...message, videoNote };
                }
                else {
                    const fileId = getFileId(FileType.Video);
                    const video_ = constructVideo(document, video, fileName?.file_name, serializeFileId(fileId), toUniqueFileId(fileId));
                    m = { ...messageMedia, video: video_ };
                }
            }
            else if (audio) {
                if (audio.voice) {
                    const fileId = getFileId(FileType.VoiceNote);
                    const voice = constructVoice(document, audio, serializeFileId(fileId), toUniqueFileId(fileId));
                    m = { ...messageMedia, voice };
                }
                else {
                    const fileId = getFileId(FileType.Audio);
                    const audio_ = constructAudio(document, audio, serializeFileId(fileId), toUniqueFileId(fileId));
                    m = { ...messageMedia, audio: audio_ };
                }
            }
            else if (sticker) {
                const fileId = getFileId(FileType.Sticker);
                const sticker = await constructSticker(document, serializeFileId(fileId), toUniqueFileId(fileId), getStickerSetName);
                m = { ...message, sticker };
            }
            else {
                const fileId = getFileId(FileType.Document);
                const document_ = constructDocument(document, fileName ?? new types.DocumentAttributeFilename({ file_name: "Unknown" }), serializeFileId(fileId), toUniqueFileId(fileId));
                m = { ...messageMedia, document: document_ };
            }
        }
    }
    else if (message_.media instanceof types.MessageMediaContact) {
        const contact = constructContact(message_.media);
        m = { ...messageMedia, contact };
    }
    else if (message_.media instanceof types.MessageMediaGame) {
        const game = constructGame(message_.media);
        m = { ...message, game };
    }
    else if (message_.media instanceof types.MessageMediaPoll) {
        const poll = constructPoll(message_.media);
        m = { ...message, poll };
    }
    else if (message_.media instanceof types.MessageMediaVenue) {
        const venue = constructVenue(message_.media);
        m = { ...message, venue };
    }
    else if (message_.media instanceof types.MessageMediaGeo || message_.media instanceof types.MessageMediaGeoLive) {
        const location = constructLocation(message_.media);
        m = { ...message, location };
    }
    else if (message_.media instanceof types.MessageMediaWebPage) {
        const linkPreview = constructLinkPreview(message_.media, message_.invert_media);
        if (message_.message) {
            m = { ...messageText, linkPreview };
        }
        else {
            m = { ...message, linkPreview: { ...linkPreview, url: linkPreview.url ? linkPreview.url : UNREACHABLE() } };
        }
    }
    else if (message_.media instanceof types.MessageMediaGiveaway) {
        const giveaway = constructGiveaway(message_.media);
        m = { ...message, giveaway };
    }
    if (m == null) {
        const unsupported = true;
        m = { ...message, unsupported };
    }
    return cleanObject(m);
}
