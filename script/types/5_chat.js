"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructChat4 = exports.constructChat3 = exports.constructChat2 = exports.constructChat = exports.getChatOrder = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_chat_photo_js_1 = require("./0_chat_photo.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _4_message_js_1 = require("./4_message.js");
function getChatPAlsoPhoto(entity) {
    let chatP;
    let also = undefined;
    if (entity instanceof _2_tl_js_1.types.User) {
        chatP = (0, _1_chat_p_js_1.constructChatP)(entity);
        also = "usernames" in entity ? entity.usernames?.map((v) => v.username).filter((v) => v != ("username" in chatP ? chatP.username : "")) : undefined;
    }
    else if (entity instanceof _2_tl_js_1.types.Chat) {
        chatP = (0, _1_chat_p_js_1.constructChatP)(entity);
    }
    else if (entity instanceof _2_tl_js_1.types.Channel) {
        chatP = (0, _1_chat_p_js_1.constructChatP)(entity);
        also = "usernames" in entity ? entity.usernames?.map((v) => v.username).filter((v) => v != ("username" in chatP ? chatP.username : "")) : undefined;
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
    let photo = undefined;
    if (entity.photo instanceof _2_tl_js_1.types.UserProfilePhoto) {
        photo = (0, _0_chat_photo_js_1.constructChatPhoto)(entity.photo, chatP.id, "access_hash" in entity ? entity.access_hash ?? 0n : 0n);
    }
    else if (entity.photo instanceof _2_tl_js_1.types.ChatPhoto) {
        photo = (0, _0_chat_photo_js_1.constructChatPhoto)(entity.photo, chatP.id, "access_hash" in entity ? entity.access_hash ?? 0n : 0n);
    }
    return { chatP, also, photo };
}
function getChatOrder(lastMessage, pinned) {
    const p = pinned == -1 ? "" : `P${100 - pinned}`;
    if (!lastMessage) {
        return p + "0";
    }
    return p + String((BigInt(Math.floor(lastMessage.date.getTime())) << 32n) + BigInt(lastMessage.id));
}
exports.getChatOrder = getChatOrder;
async function constructChat(dialog, dialogs, pinnedChats, getEntity, getMessage, getStickerSetName) {
    const topMessage_ = dialogs.messages.find((v) => "id" in v && v.id == dialog.top_message);
    if (!topMessage_) {
        (0, _0_deps_js_1.unreachable)();
    }
    const pinned = pinnedChats.indexOf((0, _2_tl_js_1.peerToChatId)(dialog.peer));
    const lastMessage = await (0, _4_message_js_1.constructMessage)(topMessage_, getEntity, getMessage, getStickerSetName, false);
    const order = getChatOrder(lastMessage, pinned);
    const userId = "user_id" in dialog.peer ? dialog.peer.user_id : null;
    const chatId = "chat_id" in dialog.peer ? dialog.peer.chat_id : null;
    const channelId = "channel_id" in dialog.peer ? dialog.peer.channel_id : null;
    const chat__ = chatId != null ? dialogs.chats.find((v) => v instanceof _2_tl_js_1.types.Chat && v.id == chatId) : channelId != null ? dialogs.chats.find((v) => v instanceof _2_tl_js_1.types.Channel && v.id == channelId) : userId != null ? dialogs.users.find((v) => v instanceof _2_tl_js_1.types.User && v.id == userId) : (0, _0_deps_js_1.unreachable)();
    if (!chat__) {
        (0, _0_deps_js_1.unreachable)();
    }
    const chat_ = chat__;
    const { chatP, also, photo } = getChatPAlsoPhoto(chat_);
    if (chatP.type == "group") {
        return (0, _1_utilities_js_1.cleanObject)({ ...chatP, order, lastMessage, photo, pinned });
    }
    else if (chatP.type == "supergroup") {
        return (0, _1_utilities_js_1.cleanObject)({ ...chatP, order, lastMessage, also, photo, pinned });
    }
    else if (chatP.type == "channel") {
        return (0, _1_utilities_js_1.cleanObject)({ ...chatP, order, lastMessage, also, photo, pinned });
    }
    else if (chatP.type == "private") {
        return (0, _1_utilities_js_1.cleanObject)({ ...chatP, order, lastMessage, also, photo: photo, pinned });
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
exports.constructChat = constructChat;
function constructChat2(entity, pinned, lastMessage) {
    const chatPAlsoPhoto = getChatPAlsoPhoto(entity);
    const order = getChatOrder(lastMessage, pinned);
    const { also, photo, chatP } = chatPAlsoPhoto;
    if (chatP.type == "group") {
        return (0, _1_utilities_js_1.cleanObject)({ ...chatP, order, lastMessage, photo, pinned });
    }
    else if (chatP.type == "supergroup") {
        return (0, _1_utilities_js_1.cleanObject)({ ...chatP, order, lastMessage, also, photo, pinned });
    }
    else if (chatP.type == "channel") {
        return (0, _1_utilities_js_1.cleanObject)({ ...chatP, order, lastMessage, also, photo, pinned });
    }
    else if (chatP.type == "private") {
        return (0, _1_utilities_js_1.cleanObject)({ ...chatP, order, lastMessage, also, photo: photo, pinned });
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
exports.constructChat2 = constructChat2;
async function constructChat3(chatId, pinned, lastMessage, getEntity) {
    const peer = (0, _2_tl_js_1.chatIdToPeer)(chatId);
    const entity = await getEntity(peer);
    if (entity == null) {
        return null;
    }
    else {
        return constructChat2(entity, pinned, lastMessage);
    }
}
exports.constructChat3 = constructChat3;
async function constructChat4(chatId, pinned, lastMessageId, getEntity, getMessage) {
    const lastMessage_ = lastMessageId > 0 ? await getMessage(chatId, lastMessageId) : null;
    const lastMessage = lastMessage_ == null ? undefined : lastMessage_;
    return await constructChat3(chatId, pinned, lastMessage, getEntity);
}
exports.constructChat4 = constructChat4;
