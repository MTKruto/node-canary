"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructChatListItem4 = exports.constructChatListItem3 = exports.constructChatListItem2 = exports.constructChatListItem = exports.getChatListItemOrder = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _4_message_js_1 = require("./4_message.js");
function getChatListItemOrder(lastMessage, pinned) {
    const p = pinned == -1 ? "" : `P${100 - pinned}`;
    if (!lastMessage) {
        return p + "0";
    }
    return p + String((BigInt(Math.floor(lastMessage.date.getTime())) << 32n) + BigInt(lastMessage.id));
}
exports.getChatListItemOrder = getChatListItemOrder;
async function constructChatListItem(chatId, pinned, lastMessageId, getEntity, getMessage) {
    const entity = await getEntity((0, _2_tl_js_1.chatIdToPeer)(chatId));
    if (entity == null) {
        return null;
    }
    const lastMessage_ = lastMessageId > 0 ? await getMessage(chatId, lastMessageId) : null;
    const lastMessage = lastMessage_ == null ? undefined : lastMessage_;
    return {
        chat: (0, _1_chat_p_js_1.constructChatP)(entity),
        order: getChatListItemOrder(lastMessage, pinned),
        pinned,
        lastMessage,
    };
}
exports.constructChatListItem = constructChatListItem;
function constructChatListItem2(entity, pinned, lastMessage) {
    return {
        chat: (0, _1_chat_p_js_1.constructChatP)(entity),
        order: getChatListItemOrder(lastMessage, pinned),
        pinned,
        lastMessage,
    };
}
exports.constructChatListItem2 = constructChatListItem2;
async function constructChatListItem3(chatId, pinned, lastMessage, getEntity) {
    const entity = await getEntity((0, _2_tl_js_1.chatIdToPeer)(chatId));
    if (entity == null) {
        return null;
    }
    return {
        chat: (0, _1_chat_p_js_1.constructChatP)(entity),
        order: getChatListItemOrder(lastMessage, pinned),
        pinned,
        lastMessage,
    };
}
exports.constructChatListItem3 = constructChatListItem3;
async function constructChatListItem4(dialog, dialogs, pinnedChats, getEntity, getMessage, getStickerSetName) {
    const topMessage_ = dialogs.messages.find((v) => "id" in v && v.id == dialog.top_message);
    if (!topMessage_) {
        (0, _0_deps_js_1.unreachable)();
    }
    const pinned = pinnedChats.indexOf((0, _2_tl_js_1.peerToChatId)(dialog.peer));
    const lastMessage = await (0, _4_message_js_1.constructMessage)(topMessage_, getEntity, getMessage, getStickerSetName, false);
    const order = getChatListItemOrder(lastMessage, pinned);
    const userId = "user_id" in dialog.peer ? dialog.peer.user_id : null;
    const chatId = "chat_id" in dialog.peer ? dialog.peer.chat_id : null;
    const channelId = "channel_id" in dialog.peer ? dialog.peer.channel_id : null;
    const chat__ = chatId != null ? dialogs.chats.find((v) => v instanceof _2_tl_js_1.types.Chat && v.id == chatId) : channelId != null ? dialogs.chats.find((v) => v instanceof _2_tl_js_1.types.Channel && v.id == channelId) : userId != null ? dialogs.users.find((v) => v instanceof _2_tl_js_1.types.User && v.id == userId) : (0, _0_deps_js_1.unreachable)();
    if (!chat__) {
        (0, _0_deps_js_1.unreachable)();
    }
    return {
        chat: (0, _1_chat_p_js_1.constructChatP)(chat__),
        order,
        lastMessage,
        pinned,
    };
}
exports.constructChatListItem4 = constructChatListItem4;
