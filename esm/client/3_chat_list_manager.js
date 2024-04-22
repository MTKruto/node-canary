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
var _ChatListManager_instances, _ChatListManager_c, _ChatListManager_LgetChats, _ChatListManager_sendChatUpdate, _ChatListManager_chats, _ChatListManager_archivedChats, _ChatListManager_chatsLoadedFromStorage, _ChatListManager_tryGetChatId, _ChatListManager_getChatAnywhere, _ChatListManager_getChatList, _ChatListManager_loadChatsFromStorage, _ChatListManager_getLoadedChats, _ChatListManager_pinnedChats, _ChatListManager_pinnedArchiveChats, _ChatListManager_storageHadPinnedChats, _ChatListManager_pinnedChatsLoaded, _ChatListManager_loadPinnedChats, _ChatListManager_fetchPinnedChats, _ChatListManager_getPinnedChats, _ChatListManager_updateOrAddChat, _ChatListManager_removeChat, _ChatListManager_handleUpdateFolderPeers, _ChatListManager_handleUpdatePinnedDialogs, _ChatListManager_handleUpdateChannel, _ChatListManager_handleUpdateChat, _ChatListManager_handleUpdateUser, _ChatListManager_fetchChats, _ChatListManager_getFullChat;
import { unreachable } from "../0_deps.js";
import { InputError } from "../0_errors.js";
import { getLogger, toUnixTimestamp } from "../1_utilities.js";
import { peerToChatId, types } from "../2_tl.js";
import { constructChat, constructChatListItem, constructChatListItem3, constructChatListItem4, getChatListItemOrder } from "../3_types.js";
import { getChatListId } from "./0_utilities.js";
export class ChatListManager {
    constructor(c) {
        _ChatListManager_instances.add(this);
        _ChatListManager_c.set(this, void 0);
        _ChatListManager_LgetChats.set(this, void 0);
        _ChatListManager_chats.set(this, new Map());
        _ChatListManager_archivedChats.set(this, new Map());
        _ChatListManager_chatsLoadedFromStorage.set(this, false);
        _ChatListManager_pinnedChats.set(this, new Array());
        _ChatListManager_pinnedArchiveChats.set(this, new Array());
        _ChatListManager_storageHadPinnedChats.set(this, false);
        _ChatListManager_pinnedChatsLoaded.set(this, false);
        __classPrivateFieldSet(this, _ChatListManager_c, c, "f");
        const L = getLogger("ChatListManager").client(c.id);
        __classPrivateFieldSet(this, _ChatListManager_LgetChats, L.branch("getChats"), "f");
    }
    async reassignChatLastMessage(chatId, add = false, sendUpdate = true) {
        try {
            await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("");
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
                chat.order = getChatListItemOrder(message, chat.pinned);
                chat.lastMessage = message;
                await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chatId, chat.pinned, message.id, message.date);
            }
            else {
                const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
                const chat = await constructChatListItem3(chatId, pinnedChats.indexOf(chatId), message, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
                if (chat == null) {
                    unreachable();
                }
                __classPrivateFieldGet(this, _ChatListManager_chats, "f").set(chatId, chat);
                await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chatId, chat.pinned, chat.lastMessage?.id ?? 0, chat.lastMessage?.date ?? new Date(0));
            }
            if (sendUpdate) {
                return () => __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, !chat);
            }
            return () => Promise.resolve();
        }
        const message = await __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getHistory(chatId, { limit: 1 }).then((v) => v[0]);
        if (message) {
            if (chat) {
                chat.order = getChatListItemOrder(message, chat.pinned);
                chat.lastMessage = message;
                await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chatId, chat.pinned, message.id, message.date);
            }
            else {
                const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
                const chat = await constructChatListItem3(chatId, pinnedChats.indexOf(chatId), message, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
                if (chat == null) {
                    unreachable();
                }
                __classPrivateFieldGet(this, _ChatListManager_chats, "f").set(chatId, chat);
            }
            if (sendUpdate) {
                return () => __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, !chat);
            }
            return () => Promise.resolve();
        }
        if (chat) {
            chat.order = getChatListItemOrder(undefined, chat.pinned);
            chat.lastMessage = undefined;
            if (sendUpdate) {
                return () => __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
            }
        }
        return () => Promise.resolve();
    }
    async getChats(from = "main", after, limit = 100) {
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("getChats");
        if (!__classPrivateFieldGet(this, _ChatListManager_chatsLoadedFromStorage, "f")) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_loadChatsFromStorage).call(this);
        }
        if (after && !__classPrivateFieldGet(this, _ChatListManager_chats, "f").get(after.chat.id)) {
            throw new InputError("Invalid after");
        }
        if (limit <= 0 || limit > 100) {
            limit = 100;
        }
        const listId = getChatListId(from);
        let chats = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getLoadedChats).call(this, listId);
        if (after) {
            chats = chats
                .filter((v) => v.order < after.order);
        }
        if (chats.length < limit) {
            __classPrivateFieldGet(this, _ChatListManager_LgetChats, "f").debug(`have only ${chats.length} chats but ${limit - chats.length} more is needed`);
            if (!await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.hasAllChats(listId)) {
                await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_fetchChats).call(this, listId, limit, after);
                return await this.getChats(from, after, limit);
            }
        }
        chats = chats.slice(0, limit);
        return chats;
    }
    static canHandleUpdate(update) {
        return update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdatePinnedDialogs || update instanceof types.UpdateFolderPeers || update instanceof types.UpdateChannel || update instanceof types.UpdateChat || update instanceof types.UpdateUser || update instanceof types.UpdateUserName;
    }
    async handleUpdate(update) {
        if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditMessage || update instanceof types.UpdateEditChannelMessage) {
            if (update.message instanceof types.Message || update.message instanceof types.MessageService) {
                const chatId = peerToChatId(update.message.peer_id);
                await this.reassignChatLastMessage(chatId);
            }
        }
        else if (update instanceof types.UpdatePinnedDialogs) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdatePinnedDialogs).call(this, update);
        }
        else if (update instanceof types.UpdateFolderPeers) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateFolderPeers).call(this, update);
        }
        else if (update instanceof types.UpdateChannel) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateChannel).call(this, update);
        }
        else if (update instanceof types.UpdateChat) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateChat).call(this, update);
        }
        else if (update instanceof types.UpdateUser || update instanceof types.UpdateUserName) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateUser).call(this, update);
        }
        else {
            unreachable();
        }
    }
    async getChat(chatId) {
        const fullChat = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getFullChat).call(this, chatId);
        if (fullChat == null) {
            throw new InputError("Chat not found.");
        }
        return await constructChat(fullChat, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
    }
}
_ChatListManager_c = new WeakMap(), _ChatListManager_LgetChats = new WeakMap(), _ChatListManager_chats = new WeakMap(), _ChatListManager_archivedChats = new WeakMap(), _ChatListManager_chatsLoadedFromStorage = new WeakMap(), _ChatListManager_pinnedChats = new WeakMap(), _ChatListManager_pinnedArchiveChats = new WeakMap(), _ChatListManager_storageHadPinnedChats = new WeakMap(), _ChatListManager_pinnedChatsLoaded = new WeakMap(), _ChatListManager_instances = new WeakSet(), _ChatListManager_sendChatUpdate = async function _ChatListManager_sendChatUpdate(chatId, added) {
    try {
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("");
    }
    catch {
        return;
    }
    const [chat] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
    const update = chat === undefined ? { deletedChat: { chatId } } : added ? { newChat: chat } : { editedChat: chat };
    __classPrivateFieldGet(this, _ChatListManager_c, "f").handleUpdate(update);
}, _ChatListManager_tryGetChatId = function _ChatListManager_tryGetChatId(username) {
    username = username.toLowerCase();
    for (const chat of __classPrivateFieldGet(this, _ChatListManager_chats, "f").values()) {
        if ("username" in chat) {
            if (chat.username === username
            //     TODO
            //     ||
            //     chat.chat.also?.some((v) => v.toLowerCase() === username)
            ) {
                return chat.chat.id;
            }
        }
    }
    for (const chat of __classPrivateFieldGet(this, _ChatListManager_archivedChats, "f").values()) {
        if ("username" in chat) {
            if (chat.username === username
            //    TODO
            //    ||
            //   chat.also?.some((v) => v.toLowerCase() === username)
            ) {
                return chat.chat.id;
            }
        }
    }
    return null;
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
}, _ChatListManager_loadChatsFromStorage = async function _ChatListManager_loadChatsFromStorage() {
    const chats = await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.getChats(0);
    const archivedChats = await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.getChats(1);
    for (const { chatId, pinned, topMessageId } of chats) {
        const chat = await constructChatListItem(chatId, pinned, topMessageId, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager));
        if (chat == null) {
            continue;
        }
        __classPrivateFieldGet(this, _ChatListManager_chats, "f").set(chat.chat.id, chat);
    }
    for (const { chatId, pinned, topMessageId } of archivedChats) {
        const chat = await constructChatListItem(chatId, pinned, topMessageId, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager));
        if (chat == null) {
            continue;
        }
        __classPrivateFieldGet(this, _ChatListManager_archivedChats, "f").set(chat.chat.id, chat);
    }
    __classPrivateFieldSet(this, _ChatListManager_chatsLoadedFromStorage, true, "f");
}, _ChatListManager_getLoadedChats = function _ChatListManager_getLoadedChats(listId) {
    const chats_ = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId);
    const chats = new Array();
    for (const chat of chats_.values()) {
        chats.push(chat);
    }
    return chats
        .sort((a, b) => b.chat.id - a.chat.id)
        .sort((a, b) => b.order.localeCompare(a.order));
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
        const dialogs = await __classPrivateFieldGet(this, _ChatListManager_c, "f").api.messages.getPinnedDialogs({ folder_id: 0 });
        const pinnedChats = new Array();
        for (const dialog of dialogs.dialogs) {
            pinnedChats.push(peerToChatId(dialog.peer));
        }
        __classPrivateFieldSet(this, _ChatListManager_pinnedChats, pinnedChats, "f");
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setPinnedChats(0, __classPrivateFieldGet(this, _ChatListManager_pinnedChats, "f"));
    }
    if (listId == null || listId == 1) {
        const dialogs = await __classPrivateFieldGet(this, _ChatListManager_c, "f").api.messages.getPinnedDialogs({ folder_id: 1 });
        const pinnedArchiveChats = new Array();
        for (const dialog of dialogs.dialogs) {
            pinnedArchiveChats.push(peerToChatId(dialog.peer));
        }
        __classPrivateFieldSet(this, _ChatListManager_pinnedArchiveChats, pinnedArchiveChats, "f");
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setPinnedChats(1, __classPrivateFieldGet(this, _ChatListManager_pinnedArchiveChats, "f"));
    }
    if (listId != null && listId != 0 && listId != 1) {
        unreachable();
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
            unreachable();
    }
}, _ChatListManager_updateOrAddChat = async function _ChatListManager_updateOrAddChat(chatId) {
    const [chat, listId] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
    if (chat !== undefined) {
        const newChat = await constructChatListItem3(chatId, chat.pinned, chat.lastMessage, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
        if (newChat != null) {
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId).set(chatId, newChat);
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
        }
    }
    else {
        const chat = await constructChatListItem(chatId, -1, -1, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager));
        if (chat != null) {
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, 0).set(chatId, chat);
            await this.reassignChatLastMessage(chatId, false, false);
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, true);
        }
    }
}, _ChatListManager_removeChat = async function _ChatListManager_removeChat(chatId) {
    const [chat, listId] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
    if (chat !== undefined) {
        __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId).delete(chatId);
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
    }
}, _ChatListManager_handleUpdateFolderPeers = async function _ChatListManager_handleUpdateFolderPeers(update) {
    for (const { peer, folder_id: listId } of update.folder_peers) {
        const chatId = peerToChatId(peer);
        const [chat, currentListId] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
        if (chat !== undefined && listId != currentListId) {
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, currentListId).delete(chatId);
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId).set(chatId, chat);
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, true);
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
            chat.order = getChatListItemOrder(chat.lastMessage, i);
            chat.pinned = i;
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
        }
    }
    for (const chat of chats.values()) {
        if (chat.pinned != -1 && pinnedChats.indexOf(chat.chat.id) == -1) {
            chat.order = getChatListItemOrder(chat.lastMessage, -1);
            chat.pinned = -1;
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chat.chat.id, false);
        }
    }
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setPinnedChats(listId, await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId));
}, _ChatListManager_handleUpdateChannel = async function _ChatListManager_handleUpdateChannel(update) {
    const peer = new types.PeerChannel(update);
    const channel = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity(peer);
    const chatId = peerToChatId(peer);
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setFullChat(chatId, null);
    if (channel != null && "left" in channel && channel.left) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, chatId);
    }
    else if (channel instanceof types.ChannelForbidden) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, chatId);
    }
    else if (channel instanceof types.Channel) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_updateOrAddChat).call(this, chatId);
    }
}, _ChatListManager_handleUpdateChat = async function _ChatListManager_handleUpdateChat(update) {
    const peer = new types.PeerChat(update);
    const chat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity(peer);
    const chatId = peerToChatId(peer);
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setFullChat(chatId, null);
    if (chat != null && "left" in chat && chat.left) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, chatId);
    }
    else if (chat instanceof types.ChatForbidden) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, chatId);
    }
    else if (chat instanceof types.Chat) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_updateOrAddChat).call(this, chatId);
    }
}, _ChatListManager_handleUpdateUser = async function _ChatListManager_handleUpdateUser(update) {
    const peer = new types.PeerUser(update);
    const chat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity(peer);
    const chatId = peerToChatId(peer);
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setFullChat(chatId, null);
    if (chat != null) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_updateOrAddChat).call(this, chatId);
    }
}, _ChatListManager_fetchChats = async function _ChatListManager_fetchChats(listId, limit, after) {
    const dialogs = await __classPrivateFieldGet(this, _ChatListManager_c, "f").api.messages.getDialogs({
        limit,
        offset_id: after?.lastMessage?.id ?? 0,
        offset_date: after?.lastMessage?.date ? toUnixTimestamp(after.lastMessage.date) : 0,
        offset_peer: after ? await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(after.chat.id) : new types.InputPeerEmpty(),
        hash: 0n,
        folder_id: listId,
    });
    const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
    if (!(dialogs instanceof types.messages.Dialogs) && !(dialogs instanceof types.messages.DialogsSlice)) {
        unreachable();
    }
    if (dialogs.dialogs.length < limit) {
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setHasAllChats(listId, true);
    }
    const chats = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId);
    for (const dialog of dialogs.dialogs) {
        const chat = await constructChatListItem4(dialog, dialogs, pinnedChats, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager), __classPrivateFieldGet(this, _ChatListManager_c, "f").fileManager.getStickerSetName.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager));
        chats.set(chat.chat.id, chat);
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chat.chat.id, chat.pinned, chat.lastMessage?.id ?? 0, chat.lastMessage?.date ?? new Date(0));
    }
}, _ChatListManager_getFullChat = async function _ChatListManager_getFullChat(chatId) {
    const inputPeer = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(chatId);
    const chatId_ = peerToChatId(inputPeer);
    let fullChat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.getFullChat(chatId_);
    if (fullChat != null) {
        return fullChat;
    }
    if (inputPeer instanceof types.InputPeerUser) {
        fullChat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").api.users.getFullUser({ id: new types.InputUser(inputPeer) }).then((v) => v.full_user);
    }
    else if (inputPeer instanceof types.InputPeerChat) {
        fullChat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").api.messages.getFullChat(inputPeer).then((v) => v.full_chat);
    }
    else if (inputPeer instanceof types.InputPeerChannel) {
        fullChat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").api.channels.getFullChannel({ channel: new types.InputChannel(inputPeer) }).then((v) => v.full_chat);
    }
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setFullChat(chatId_, fullChat);
    if (fullChat != null && "call" in fullChat && fullChat.call) {
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setGroupCallAccessHash(fullChat.call.id, fullChat.call.access_hash);
    }
    return fullChat;
};
