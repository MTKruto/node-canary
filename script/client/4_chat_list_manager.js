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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ChatListManager_instances, _ChatListManager_c, _ChatListManager_sendChatUpdate, _ChatListManager_chats, _ChatListManager_archivedChats, _ChatListManager_getChatAnywhere, _ChatListManager_getChatList, _ChatListManager_pinnedChats, _ChatListManager_pinnedArchiveChats, _ChatListManager_storageHadPinnedChats, _ChatListManager_pinnedChatsLoaded, _ChatListManager_loadPinnedChats, _ChatListManager_fetchPinnedChats, _ChatListManager_getPinnedChats, _ChatListManager_updateOrAddChat, _ChatListManager_removeChat, _ChatListManager_handleUpdateFolderPeers, _ChatListManager_handleUpdatePinnedDialogs, _ChatListManager_handleUpdateChannel, _ChatListManager_handleUpdateChat, _ChatListManager_handleUpdateUser, _ChatListManager_getFullChat, _ChatListManager_checkChatTitle, _ChatListManager_createChannel, _ChatListManager_moveChatsToFolder, _ChatListManager_toggleBusinessBotsPaused;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatListManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const _0_utilities_js_1 = require("./0_utilities.js");
const chatListManagerUpdates = [
    "updateNewMessage",
    "updateNewChannelMessage",
    "updatePinnedDialogs",
    "updateFolderPeers",
    "updateChannel",
    "updateChat",
    "updateUser",
    "updateUserName",
];
class ChatListManager {
    constructor(c) {
        _ChatListManager_instances.add(this);
        _ChatListManager_c.set(this, void 0);
        _ChatListManager_chats.set(this, new Map());
        _ChatListManager_archivedChats.set(this, new Map());
        _ChatListManager_pinnedChats.set(this, new Array());
        _ChatListManager_pinnedArchiveChats.set(this, new Array());
        _ChatListManager_storageHadPinnedChats.set(this, false);
        _ChatListManager_pinnedChatsLoaded.set(this, false);
        __classPrivateFieldSet(this, _ChatListManager_c, c, "f");
    }
    async reassignChatLastMessage(chatId, add = false, sendUpdate = true) {
        try {
            __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("");
        }
        catch {
            return () => Promise.resolve();
        }
        const [chat, listId] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
        if (!chat && !add) {
            return () => Promise.resolve();
        }
        const message_ = await __classPrivateFieldGet(this, _ChatListManager_c, "f").messageStorage.getLastMessage(chatId);
        if (message_ != null) {
            const message = await __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.constructMessage(message_);
            if (chat) {
                chat.order = (0, _3_types_js_1.getChatListItemOrder)(message, chat.pinned);
                chat.lastMessage = message;
                await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chatId, chat.pinned, message.id, (0, _1_utilities_js_1.fromUnixTimestamp)(message.date));
            }
            else {
                const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
                const chat = await (0, _3_types_js_1.constructChatListItem3)(chatId, pinnedChats.indexOf(chatId), message, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
                if (chat == null) {
                    (0, _0_deps_js_1.unreachable)();
                }
                __classPrivateFieldGet(this, _ChatListManager_chats, "f").set(chatId, chat);
                await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chatId, chat.pinned, chat.lastMessage?.id ?? 0, (0, _1_utilities_js_1.fromUnixTimestamp)(chat.lastMessage?.date ?? 0));
            }
            if (sendUpdate) {
                return () => __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, !chat);
            }
            return () => Promise.resolve();
        }
        const message = (await __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getHistory(chatId, { limit: 1 }))[0];
        if (message) {
            if (chat) {
                chat.order = (0, _3_types_js_1.getChatListItemOrder)(message, chat.pinned);
                chat.lastMessage = message;
                await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chatId, chat.pinned, message.id, (0, _1_utilities_js_1.fromUnixTimestamp)(message.date));
            }
            else {
                const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
                const chat = await (0, _3_types_js_1.constructChatListItem3)(chatId, pinnedChats.indexOf(chatId), message, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
                if (chat == null) {
                    (0, _0_deps_js_1.unreachable)();
                }
                __classPrivateFieldGet(this, _ChatListManager_chats, "f").set(chatId, chat);
            }
            if (sendUpdate) {
                return () => __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, !chat);
            }
            return () => Promise.resolve();
        }
        if (chat) {
            chat.order = (0, _3_types_js_1.getChatListItemOrder)(undefined, chat.pinned);
            chat.lastMessage = undefined;
            if (sendUpdate) {
                return () => __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
            }
        }
        return () => Promise.resolve();
    }
    async getChats(from = "main", after, limit = 100) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("getChats");
        if (after && !__classPrivateFieldGet(this, _ChatListManager_chats, "f").get(after.chat.id)) {
            throw new _0_errors_js_1.InputError("Invalid after");
        }
        if (limit <= 0 || limit > 100) {
            limit = 100;
        }
        const listId = (0, _0_utilities_js_1.getChatListId)(from);
        const dialogs = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "messages.getDialogs", limit, offset_id: after?.lastMessage?.id ?? 0, offset_date: after?.lastMessage?.date ?? 0, offset_peer: after ? await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(after.chat.id) : { _: "inputPeerEmpty" }, hash: 0n, folder_id: listId });
        const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
        if (!(_2_tl_js_1.Api.is("messages.dialogs", dialogs)) && !(_2_tl_js_1.Api.is("messages.dialogsSlice", dialogs))) {
            (0, _0_deps_js_1.unreachable)();
        }
        if (dialogs.dialogs.length < limit) {
            await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setHasAllChats(listId, true);
        }
        const chats = new Array();
        for (const dialog of dialogs.dialogs) {
            const chat = await (0, _3_types_js_1.constructChatListItem4)(dialog, dialogs, pinnedChats, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager), __classPrivateFieldGet(this, _ChatListManager_c, "f").fileManager.getStickerSetName.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").fileManager));
            chats.push(chat);
            await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chat.chat.id, chat.pinned, chat.lastMessage?.id ?? 0, (0, _1_utilities_js_1.fromUnixTimestamp)(chat.lastMessage?.date ?? 0));
        }
        return chats;
    }
    canHandleUpdate(update) {
        return _2_tl_js_1.Api.isOneOf(chatListManagerUpdates, update);
    }
    async handleUpdate(update) {
        if (_2_tl_js_1.Api.is("updateNewMessage", update) || _2_tl_js_1.Api.is("updateNewChannelMessage", update) || _2_tl_js_1.Api.is("updateEditMessage", update) || _2_tl_js_1.Api.is("updateEditChannelMessage", update)) {
            if (_2_tl_js_1.Api.is("message", update.message) || _2_tl_js_1.Api.is("messageService", update.message)) {
                const chatId = _2_tl_js_1.Api.peerToChatId(update.message.peer_id);
                await this.reassignChatLastMessage(chatId);
            }
        }
        else if (_2_tl_js_1.Api.is("updatePinnedDialogs", update)) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdatePinnedDialogs).call(this, update);
        }
        else if (_2_tl_js_1.Api.is("updateFolderPeers", update)) {
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateFolderPeers).call(this, update);
        }
        else if (_2_tl_js_1.Api.is("updateChannel", update)) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateChannel).call(this, update);
        }
        else if (_2_tl_js_1.Api.is("updateChat", update)) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateChat).call(this, update);
        }
        else if (_2_tl_js_1.Api.is("updateUser", update) || _2_tl_js_1.Api.is("updateUserName", update)) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateUser).call(this, update);
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
        return null;
    }
    async getChat(chatId) {
        const fullChat = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getFullChat).call(this, chatId);
        if (fullChat == null) {
            throw new _0_errors_js_1.InputError("Chat not found.");
        }
        return await (0, _3_types_js_1.constructChat)(fullChat, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
    }
    async getChatAdministrators(chatId) {
        const peer = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(chatId);
        if ((0, _0_utilities_js_1.canBeInputChannel)(peer)) {
            const channel = (0, _0_utilities_js_1.toInputChannel)(peer);
            const participants = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "channels.getParticipants", channel, filter: { _: "channelParticipantsAdmins" }, offset: 0, limit: 100, hash: 0n });
            if (_2_tl_js_1.Api.is("channels.channelParticipantsNotModified", participants)) {
                (0, _0_deps_js_1.unreachable)();
            }
            const chatMembers = new Array();
            for (const p of participants.participants) {
                chatMembers.push(await (0, _3_types_js_1.constructChatMember)(p, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity));
            }
            return chatMembers;
        }
        else if (_2_tl_js_1.Api.is("inputPeerChat", peer)) {
            const fullChat = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getFullChat).call(this, chatId);
            if (!fullChat || !("participants" in fullChat) || !_2_tl_js_1.Api.is("chatParticipants", fullChat.participants)) {
                (0, _0_deps_js_1.unreachable)();
            }
            const chatMembers = new Array();
            for (const p of fullChat.participants.participants) {
                chatMembers.push(await (0, _3_types_js_1.constructChatMember)(p, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity));
            }
            return chatMembers;
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    async getChatMember(chatId, userId) {
        const peer = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(chatId);
        if ((0, _0_utilities_js_1.canBeInputChannel)(peer)) {
            const { participant } = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "channels.getParticipant", channel: (0, _0_utilities_js_1.toInputChannel)(peer), participant: await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(userId) });
            return await (0, _3_types_js_1.constructChatMember)(participant, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
        }
        else if (_2_tl_js_1.Api.is("inputPeerChat", peer)) {
            const user = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputUser(userId);
            const userId_ = BigInt(await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeerChatId(user));
            const fullChat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ ...peer, _: "messages.getFullChat" }).then((v) => _2_tl_js_1.Api.as("chatFull", v.full_chat));
            const participant = _2_tl_js_1.Api.as("chatParticipants", fullChat.participants).participants.find((v) => v.user_id == userId_);
            return await (0, _3_types_js_1.constructChatMember)(participant, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
        }
        else {
            throw new _0_errors_js_1.InputError("Expected a channel, supergroup, or group ID. Got a user ID instead.");
        }
    }
    async getChatMembers(chatId, params) {
        const peer = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(chatId);
        if ((0, _0_utilities_js_1.canBeInputChannel)(peer)) {
            const channel = (0, _0_utilities_js_1.toInputChannel)(peer);
            const participants = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "channels.getParticipants", channel, filter: { _: "channelParticipantsRecent" }, offset: params?.offset ?? 0, limit: (0, _0_utilities_js_1.getLimit)(params?.limit), hash: 0n });
            if (_2_tl_js_1.Api.is("channels.channelParticipantsNotModified", participants)) {
                (0, _0_deps_js_1.unreachable)();
            }
            const chatMembers = new Array();
            for (const p of participants.participants) {
                chatMembers.push(await (0, _3_types_js_1.constructChatMember)(p, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity));
            }
            return chatMembers;
        }
        else if (_2_tl_js_1.Api.is("inputPeerChat", peer)) {
            const fullChat = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getFullChat).call(this, chatId);
            if (!fullChat || !("participants" in fullChat) || !_2_tl_js_1.Api.is("chatParticipants", fullChat.participants)) {
                (0, _0_deps_js_1.unreachable)();
            }
            const chatMembers = new Array();
            for (const p of fullChat.participants.participants) {
                chatMembers.push(await (0, _3_types_js_1.constructChatMember)(p, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity));
            }
            return chatMembers;
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    async createGroup(title, params) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("createGroup");
        title = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_checkChatTitle).call(this, title);
        const { updates } = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({
            _: "messages.createChat",
            title,
            users: await Promise.all((params?.users ?? []).map((v) => __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputUser(v))),
            ttl_period: params?.messageTtl || undefined,
        });
        if (!("chats" in updates) || updates.chats.length < 1) {
            (0, _0_deps_js_1.unreachable)();
        }
        const chat = updates.chats[0];
        if (chat._ != "chat") {
            (0, _0_deps_js_1.unreachable)();
        }
        return (0, _3_types_js_1.constructChatP)(chat);
    }
    async createSupergroup(title, params) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("createSupergroup");
        return (await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_createChannel).call(this, "supergroup", title, params));
    }
    async createChannel(title, params) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("createChannel");
        return (await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_createChannel).call(this, "channel", title, params));
    }
    async setMessageTtl(chatId, messageTtl) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("setMessageTtl");
        const peer = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(chatId);
        const period = messageTtl;
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "messages.setHistoryTTL", peer, period });
    }
    async archiveChats(chatIds) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("archiveChats");
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_moveChatsToFolder).call(this, chatIds, 1);
    }
    async archiveChat(chatId) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("archiveChat");
        await this.archiveChats([chatId]);
    }
    async unarchiveChats(chatIds) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("unarchiveChats");
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_moveChatsToFolder).call(this, chatIds, 0);
    }
    async unarchiveChat(chatId) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("unarchiveChat");
        await this.unarchiveChats([chatId]);
    }
    async getCommonChats(userId, params) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("getCommonChats");
        const max_id = params?.fromChatId ? await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeerChatId(await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(params.fromChatId)) : 0;
        if (max_id < 0) {
            throw new _0_errors_js_1.InputError("fromChatId must be a chat identifier.");
        }
        const user_id = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputUser(userId);
        const limit = (0, _0_utilities_js_1.getLimit)(params?.limit);
        const result = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "messages.getCommonChats", user_id, max_id: _2_tl_js_1.Api.chatIdToPeerId(max_id), limit });
        const chats = new Array();
        for (const chat of result.chats) {
            if (!_2_tl_js_1.Api.is("chatEmpty", chat)) {
                chats.push((0, _3_types_js_1.constructChatP)(chat));
            }
        }
        return chats;
    }
    async getChatSettings(chatId) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("getChatSettings");
        const peer = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(chatId);
        const settings = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "messages.getPeerSettings", peer });
        return (0, _3_types_js_1.constructChatSettings)(settings);
    }
    async disableBusinessBots(chatId) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("disableBusinessBots");
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_toggleBusinessBotsPaused).call(this, chatId, true);
    }
    async enableBusinessBots(chatId) {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("enableBusinessBots");
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_toggleBusinessBotsPaused).call(this, chatId, false);
    }
}
exports.ChatListManager = ChatListManager;
_ChatListManager_c = new WeakMap(), _ChatListManager_chats = new WeakMap(), _ChatListManager_archivedChats = new WeakMap(), _ChatListManager_pinnedChats = new WeakMap(), _ChatListManager_pinnedArchiveChats = new WeakMap(), _ChatListManager_storageHadPinnedChats = new WeakMap(), _ChatListManager_pinnedChatsLoaded = new WeakMap(), _ChatListManager_instances = new WeakSet(), _ChatListManager_sendChatUpdate = function _ChatListManager_sendChatUpdate(chatId, added) {
    try {
        __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("");
    }
    catch {
        return;
    }
    const [chat] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
    const update = chat === undefined ? { deletedChat: { chatId } } : added ? { newChat: chat } : { editedChat: chat };
    __classPrivateFieldGet(this, _ChatListManager_c, "f").handleUpdate(update);
}, _ChatListManager_getChatAnywhere = function _ChatListManager_getChatAnywhere(chatId) {
    let chat = __classPrivateFieldGet(this, _ChatListManager_chats, "f").get(chatId);
    if (chat) {
        return [chat, 0];
    }
    chat = __classPrivateFieldGet(this, _ChatListManager_archivedChats, "f").get(chatId);
    if (chat) {
        return [chat, 1];
    }
    return [undefined, -1];
}, _ChatListManager_getChatList = function _ChatListManager_getChatList(listId) {
    switch (listId) {
        case 0:
            return __classPrivateFieldGet(this, _ChatListManager_chats, "f");
        case 1:
            return __classPrivateFieldGet(this, _ChatListManager_archivedChats, "f");
        default:
            throw new Error(`Invalid chat list: ${listId}`);
    }
}, _ChatListManager_loadPinnedChats = async function _ChatListManager_loadPinnedChats() {
    const [pinnedChats, pinnedArchiveChats] = await Promise.all([__classPrivateFieldGet(this, _ChatListManager_c, "f").storage.getPinnedChats(0), __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.getPinnedChats(1)]);
    if (pinnedChats != null && pinnedArchiveChats != null) {
        __classPrivateFieldSet(this, _ChatListManager_pinnedChats, pinnedChats, "f");
        __classPrivateFieldSet(this, _ChatListManager_pinnedArchiveChats, pinnedArchiveChats, "f");
        __classPrivateFieldSet(this, _ChatListManager_storageHadPinnedChats, true, "f");
    }
    __classPrivateFieldSet(this, _ChatListManager_pinnedChatsLoaded, true, "f");
}, _ChatListManager_fetchPinnedChats = async function _ChatListManager_fetchPinnedChats(listId = null) {
    if (listId == null || listId == 0) {
        const dialogs = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "messages.getPinnedDialogs", folder_id: 0 });
        const pinnedChats = new Array();
        for (const dialog of dialogs.dialogs) {
            pinnedChats.push(_2_tl_js_1.Api.peerToChatId(dialog.peer));
        }
        __classPrivateFieldSet(this, _ChatListManager_pinnedChats, pinnedChats, "f");
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setPinnedChats(0, __classPrivateFieldGet(this, _ChatListManager_pinnedChats, "f"));
    }
    if (listId == null || listId == 1) {
        const dialogs = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "messages.getPinnedDialogs", folder_id: 1 });
        const pinnedArchiveChats = new Array();
        for (const dialog of dialogs.dialogs) {
            pinnedArchiveChats.push(_2_tl_js_1.Api.peerToChatId(dialog.peer));
        }
        __classPrivateFieldSet(this, _ChatListManager_pinnedArchiveChats, pinnedArchiveChats, "f");
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setPinnedChats(1, __classPrivateFieldGet(this, _ChatListManager_pinnedArchiveChats, "f"));
    }
    if (listId != null && listId != 0 && listId != 1) {
        (0, _0_deps_js_1.unreachable)();
    }
}, _ChatListManager_getPinnedChats = async function _ChatListManager_getPinnedChats(listId) {
    if (!__classPrivateFieldGet(this, _ChatListManager_pinnedChatsLoaded, "f")) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_loadPinnedChats).call(this);
    }
    if (!__classPrivateFieldGet(this, _ChatListManager_storageHadPinnedChats, "f")) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_fetchPinnedChats).call(this);
    }
    switch (listId) {
        case 0:
            return __classPrivateFieldGet(this, _ChatListManager_pinnedChats, "f");
        case 1:
            return __classPrivateFieldGet(this, _ChatListManager_pinnedArchiveChats, "f");
        default:
            (0, _0_deps_js_1.unreachable)();
    }
}, _ChatListManager_updateOrAddChat = async function _ChatListManager_updateOrAddChat(chatId) {
    const [chat, listId] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
    if (chat !== undefined) {
        const newChat = await (0, _3_types_js_1.constructChatListItem3)(chatId, chat.pinned, chat.lastMessage, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
        if (newChat != null) {
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId).set(chatId, newChat);
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
        }
    }
    else {
        const chat = await (0, _3_types_js_1.constructChatListItem)(chatId, -1, -1, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager));
        if (chat != null) {
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, 0).set(chatId, chat);
            await this.reassignChatLastMessage(chatId, false, false);
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, true);
        }
    }
}, _ChatListManager_removeChat = function _ChatListManager_removeChat(chatId) {
    const [chat, listId] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
    if (chat !== undefined) {
        __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId).delete(chatId);
        __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
    }
}, _ChatListManager_handleUpdateFolderPeers = function _ChatListManager_handleUpdateFolderPeers(update) {
    for (const { peer, folder_id: listId } of update.folder_peers) {
        const chatId = _2_tl_js_1.Api.peerToChatId(peer);
        const [chat, currentListId] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
        if (chat !== undefined && listId != currentListId) {
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, currentListId).delete(chatId);
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId).set(chatId, chat);
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, true);
        }
    }
}, _ChatListManager_handleUpdatePinnedDialogs = async function _ChatListManager_handleUpdatePinnedDialogs(update) {
    const listId = update.folder_id ?? 0;
    await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_fetchPinnedChats).call(this, update.folder_id);
    const chats = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId);
    const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
    for (const [i, chatId] of pinnedChats.entries()) {
        const chat = chats.get(chatId);
        if (chat !== undefined) {
            chat.order = (0, _3_types_js_1.getChatListItemOrder)(chat.lastMessage, i);
            chat.pinned = i;
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
        }
    }
    for (const chat of chats.values()) {
        if (chat.pinned != -1 && pinnedChats.indexOf(chat.chat.id) == -1) {
            chat.order = (0, _3_types_js_1.getChatListItemOrder)(chat.lastMessage, -1);
            chat.pinned = -1;
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chat.chat.id, false);
        }
    }
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setPinnedChats(listId, await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId));
}, _ChatListManager_handleUpdateChannel = async function _ChatListManager_handleUpdateChannel(update) {
    const peer = { ...update, _: "peerChannel" };
    const channel = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity(peer);
    const chatId = _2_tl_js_1.Api.peerToChatId(peer);
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setFullChat(chatId, null);
    if (channel != null && "left" in channel && channel.left) {
        __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, chatId);
    }
    else if (_2_tl_js_1.Api.is("channelForbidden", channel)) {
        __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, chatId);
    }
    else if (_2_tl_js_1.Api.is("channel", channel)) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_updateOrAddChat).call(this, chatId);
    }
}, _ChatListManager_handleUpdateChat = async function _ChatListManager_handleUpdateChat(update) {
    const peer = { ...update, _: "peerChat" };
    const chat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity(peer);
    const chatId = _2_tl_js_1.Api.peerToChatId(peer);
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setFullChat(chatId, null);
    if (chat != null && "left" in chat && chat.left) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, chatId);
    }
    else if (_2_tl_js_1.Api.is("chatForbidden", chat)) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, chatId);
    }
    else if (_2_tl_js_1.Api.is("chat", chat)) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_updateOrAddChat).call(this, chatId);
    }
}, _ChatListManager_handleUpdateUser = async function _ChatListManager_handleUpdateUser(update) {
    const peer = { ...update, _: "peerUser" };
    const chat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity(peer);
    const chatId = _2_tl_js_1.Api.peerToChatId(peer);
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setFullChat(chatId, null);
    if (chat != null) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_updateOrAddChat).call(this, chatId);
    }
}, _ChatListManager_getFullChat = async function _ChatListManager_getFullChat(chatId) {
    const inputPeer = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(chatId);
    const chatId_ = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeerChatId(inputPeer);
    let fullChat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.getFullChat(chatId_);
    if (fullChat != null) {
        return fullChat;
    }
    if ((0, _0_utilities_js_1.canBeInputUser)(inputPeer)) {
        fullChat = (await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "users.getFullUser", id: (0, _0_utilities_js_1.toInputUser)(inputPeer) })).full_user;
    }
    else if (_2_tl_js_1.Api.is("inputPeerChat", inputPeer)) {
        fullChat = (await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ ...inputPeer, _: "messages.getFullChat" })).full_chat;
    }
    else if ((0, _0_utilities_js_1.canBeInputChannel)(inputPeer)) {
        fullChat = (await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "channels.getFullChannel", channel: (0, _0_utilities_js_1.toInputChannel)(inputPeer) })).full_chat;
    }
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setFullChat(chatId_, fullChat);
    if (fullChat != null && "call" in fullChat && _2_tl_js_1.Api.is("inputGroupCall", fullChat.call)) {
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setGroupCallAccessHash(fullChat.call.id, fullChat.call.access_hash);
    }
    return fullChat;
}, _ChatListManager_checkChatTitle = function _ChatListManager_checkChatTitle(title) {
    title = title.trim();
    if (!title) {
        throw new _0_errors_js_1.InputError("Title cannot be empty.");
    }
    return title;
}, _ChatListManager_createChannel = async function _ChatListManager_createChannel(type, title, params) {
    title = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_checkChatTitle).call(this, title);
    const updates = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({
        _: "channels.createChannel",
        broadcast: type == "channel" ? true : undefined,
        megagroup: type == "supergroup" ? true : undefined,
        forum: params && ("forum" in params) && params.forum ? true : undefined,
        title,
        about: params?.description || "",
        ttl_period: params?.messageTtl || undefined,
    });
    if (!("chats" in updates) || updates.chats.length < 1) {
        (0, _0_deps_js_1.unreachable)();
    }
    const chat = updates.chats[0];
    if (chat._ != "channel") {
        (0, _0_deps_js_1.unreachable)();
    }
    return (0, _3_types_js_1.constructChatP)(chat);
}, _ChatListManager_moveChatsToFolder = async function _ChatListManager_moveChatsToFolder(chatIds, folderId) {
    const peers = await Promise.all(chatIds.map((v) => __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(v)));
    const inputFolderPeers = peers.map((v) => ({ _: "inputFolderPeer", peer: v, folder_id: folderId }));
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "folders.editPeerFolders", folder_peers: inputFolderPeers });
}, _ChatListManager_toggleBusinessBotsPaused = async function _ChatListManager_toggleBusinessBotsPaused(chatId, paused) {
    const peer = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(chatId);
    if (!(0, _0_utilities_js_1.canBeInputUser)(peer)) {
        throw new _0_errors_js_1.InputError("A private chat was expected.");
    }
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "account.toggleConnectedBotPaused", peer, paused });
};
