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
exports.getChatListItemOrder = getChatListItemOrder;
exports.constructChatListItem = constructChatListItem;
exports.constructChatListItem2 = constructChatListItem2;
exports.constructChatListItem3 = constructChatListItem3;
exports.constructChatListItem4 = constructChatListItem4;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _5_message_js_1 = require("./5_message.js");
function getChatListItemOrder(lastMessage, pinned) {
    const p = pinned == -1 ? "" : `P${100 - pinned}`;
    if (!lastMessage) {
        return p + "0";
    }
    return p + String((BigInt(Math.floor(lastMessage.date)) << 32n) + BigInt(lastMessage.id));
}
async function constructChatListItem(chatId, pinned, lastMessageId, getEntity, getMessage) {
    const entity = await getEntity(_2_tl_js_1.Api.chatIdToPeer(chatId));
    if (entity == null) {
        return null;
    }
    const lastMessage_ = lastMessageId > 0 ? await getMessage(chatId, lastMessageId) : null;
    const lastMessage = lastMessage_ == null ? undefined : lastMessage_;
    return (0, _1_utilities_js_1.cleanObject)({
        chat: (0, _1_chat_p_js_1.constructChatP)(entity),
        order: getChatListItemOrder(lastMessage, pinned),
        pinned,
        lastMessage,
    });
}
function constructChatListItem2(entity, pinned, lastMessage) {
    return (0, _1_utilities_js_1.cleanObject)({
        chat: (0, _1_chat_p_js_1.constructChatP)(entity),
        order: getChatListItemOrder(lastMessage, pinned),
        pinned,
        lastMessage,
    });
}
async function constructChatListItem3(chatId, pinned, lastMessage, getEntity) {
    const entity = await getEntity(_2_tl_js_1.Api.chatIdToPeer(chatId));
    if (entity == null) {
        return null;
    }
    return (0, _1_utilities_js_1.cleanObject)({
        chat: (0, _1_chat_p_js_1.constructChatP)(entity),
        order: getChatListItemOrder(lastMessage, pinned),
        pinned,
        lastMessage,
    });
}
async function constructChatListItem4(dialog, dialogs, pinnedChats, getEntity, getMessage, getStickerSetName) {
    const topMessage_ = dialogs.messages.find((v) => "id" in v && v.id == dialog.top_message);
    if (!topMessage_) {
        (0, _0_deps_js_1.unreachable)();
    }
    const pinned = pinnedChats.indexOf(_2_tl_js_1.Api.peerToChatId(dialog.peer));
    const lastMessage = await (0, _5_message_js_1.constructMessage)(topMessage_, getEntity, getMessage, getStickerSetName, false);
    const order = getChatListItemOrder(lastMessage, pinned);
    const userId = "user_id" in dialog.peer ? dialog.peer.user_id : null;
    const chatId = "chat_id" in dialog.peer ? dialog.peer.chat_id : null;
    const channelId = "channel_id" in dialog.peer ? dialog.peer.channel_id : null;
    const chat__ = chatId != null ? dialogs.chats.find((v) => _2_tl_js_1.Api.is("chat", v) && v.id == chatId) : channelId != null ? dialogs.chats.find((v) => _2_tl_js_1.Api.is("channel", v) && v.id == channelId) : userId != null ? dialogs.users.find((v) => _2_tl_js_1.Api.is("user", v) && v.id == userId) : (0, _0_deps_js_1.unreachable)();
    if (!chat__) {
        (0, _0_deps_js_1.unreachable)();
    }
    return (0, _1_utilities_js_1.cleanObject)({
        chat: (0, _1_chat_p_js_1.constructChatP)(chat__),
        order,
        lastMessage,
        pinned,
    });
}
