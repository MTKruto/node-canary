"use strict";
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
var _ChatListManager_instances, _ChatListManager_c, _ChatListManager_LgetChats, _ChatListManager_sendChatUpdate, _ChatListManager_chats, _ChatListManager_archivedChats, _ChatListManager_chatsLoadedFromStorage, _ChatListManager_tryGetChatId, _ChatListManager_getChatAnywhere, _ChatListManager_getChatList, _ChatListManager_loadChatsFromStorage, _ChatListManager_getLoadedChats, _ChatListManager_pinnedChats, _ChatListManager_pinnedArchiveChats, _ChatListManager_storageHadPinnedChats, _ChatListManager_pinnedChatsLoaded, _ChatListManager_loadPinnedChats, _ChatListManager_fetchPinnedChats, _ChatListManager_getPinnedChats, _ChatListManager_updateOrAddChat, _ChatListManager_removeChat, _ChatListManager_handleUpdateFolderPeers, _ChatListManager_handleUpdatePinnedDialogs, _ChatListManager_handleUpdateChannel, _ChatListManager_handleUpdateChat, _ChatListManager_handleUpdateUser, _ChatListManager_fetchChats;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatListManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const _0_utilities_js_1 = require("./0_utilities.js");
class ChatListManager {
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
        const L = (0, _1_utilities_js_1.getLogger)("ChatListManager").client(c.id);
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
                chat.order = (0, _3_types_js_1.getChatOrder)(message, chat.pinned);
                chat.lastMessage = message;
                await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chatId, chat.pinned, message.id, message.date);
            }
            else {
                const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
                const chat = await (0, _3_types_js_1.constructChat3)(chatId, pinnedChats.indexOf(chatId), message, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
                if (chat == null) {
                    (0, _0_deps_js_1.unreachable)();
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
                chat.order = (0, _3_types_js_1.getChatOrder)(message, chat.pinned);
                chat.lastMessage = message;
                await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chatId, chat.pinned, message.id, message.date);
            }
            else {
                const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
                const chat = await (0, _3_types_js_1.constructChat3)(chatId, pinnedChats.indexOf(chatId), message, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
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
            chat.order = (0, _3_types_js_1.getChatOrder)(undefined, chat.pinned);
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
        if (after && !__classPrivateFieldGet(this, _ChatListManager_chats, "f").get(after.id)) {
            throw new _0_errors_js_1.InputError("Invalid after");
        }
        if (limit <= 0 || limit > 100) {
            limit = 100;
        }
        const listId = (0, _0_utilities_js_1.getChatListId)(from);
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
        return update instanceof _2_tl_js_1.types.UpdateNewMessage || update instanceof _2_tl_js_1.types.UpdateNewChannelMessage || update instanceof _2_tl_js_1.types.UpdatePinnedDialogs || update instanceof _2_tl_js_1.types.UpdateFolderPeers || update instanceof _2_tl_js_1.types.UpdateChannel || update instanceof _2_tl_js_1.types.UpdateChat || update instanceof _2_tl_js_1.types.UpdateUser || update instanceof _2_tl_js_1.types.UpdateUserName;
    }
    async handleUpdate(update) {
        if (update instanceof _2_tl_js_1.types.UpdateNewMessage || update instanceof _2_tl_js_1.types.UpdateNewChannelMessage || update instanceof _2_tl_js_1.types.UpdateEditMessage || update instanceof _2_tl_js_1.types.UpdateEditChannelMessage) {
            if (update.message instanceof _2_tl_js_1.types.Message || update.message instanceof _2_tl_js_1.types.MessageService) {
                const chatId = (0, _2_tl_js_1.peerToChatId)(update.message.peer_id);
                await this.reassignChatLastMessage(chatId);
            }
        }
        else if (update instanceof _2_tl_js_1.types.UpdatePinnedDialogs) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdatePinnedDialogs).call(this, update);
        }
        else if (update instanceof _2_tl_js_1.types.UpdateFolderPeers) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateFolderPeers).call(this, update);
        }
        else if (update instanceof _2_tl_js_1.types.UpdateChannel) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateChannel).call(this, update);
        }
        else if (update instanceof _2_tl_js_1.types.UpdateChat) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateChat).call(this, update);
        }
        else if (update instanceof _2_tl_js_1.types.UpdateUser || update instanceof _2_tl_js_1.types.UpdateUserName) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateUser).call(this, update);
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    async getChat(chatId) {
        if (await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.getAccountType() == "user") {
            let maybeChatId = null;
            if (typeof chatId === "number") {
                maybeChatId = chatId;
            }
            else if (typeof chatId === "string") {
                maybeChatId = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_tryGetChatId).call(this, (0, _0_utilities_js_1.getUsername)(chatId));
            }
            else {
                (0, _0_deps_js_1.unreachable)();
            }
            if (maybeChatId != null) {
                const [chat] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, maybeChatId);
                if (chat !== undefined) {
                    return chat;
                }
            }
        }
        let inputPeer = null;
        if (typeof chatId === "number") {
            const chat = await (0, _3_types_js_1.constructChat3)(chatId, -1, undefined, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
            if (chat != null) {
                return chat;
            }
        }
        else {
            inputPeer = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(chatId);
            const chatId_ = (0, _2_tl_js_1.peerToChatId)(inputPeer);
            const chat = await (0, _3_types_js_1.constructChat3)(chatId_, -1, undefined, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
            if (chat != null) {
                return chat;
            }
        }
        if (inputPeer == null) {
            inputPeer = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(chatId);
        }
        if (inputPeer instanceof _2_tl_js_1.types.InputPeerChat) {
            const chats = await __classPrivateFieldGet(this, _ChatListManager_c, "f").api.messages.getChats({ id: [inputPeer.chat_id] }).then((v) => v[_2_tl_js_1.as](_2_tl_js_1.types.messages.Chats));
            const chat = chats.chats[0];
            if (chat instanceof _2_tl_js_1.types.ChatEmpty) {
                (0, _0_deps_js_1.unreachable)();
            }
            return (0, _3_types_js_1.constructChat2)(chat, -1, undefined);
        }
        else if (inputPeer instanceof _2_tl_js_1.types.InputPeerChannel) {
            const channels = await __classPrivateFieldGet(this, _ChatListManager_c, "f").api.channels.getChannels({ id: [new _2_tl_js_1.types.InputChannel(inputPeer)] });
            const channel = channels.chats[0];
            if (channel instanceof _2_tl_js_1.types.ChatEmpty) {
                (0, _0_deps_js_1.unreachable)();
            }
            return (0, _3_types_js_1.constructChat2)(channel, -1, undefined);
        }
        else if (inputPeer instanceof _2_tl_js_1.types.InputPeerUser) {
            const users = await __classPrivateFieldGet(this, _ChatListManager_c, "f").api.users.getUsers({ id: [new _2_tl_js_1.types.InputUser(inputPeer)] });
            const user = users[0];
            if (user instanceof _2_tl_js_1.types.UserEmpty) {
                (0, _0_deps_js_1.unreachable)();
            }
            return (0, _3_types_js_1.constructChat2)(user, -1, undefined);
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
}
exports.ChatListManager = ChatListManager;
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
            if (chat.username === username || chat.also?.some((v) => v.toLowerCase() === username)) {
                return chat.id;
            }
        }
    }
    for (const chat of __classPrivateFieldGet(this, _ChatListManager_archivedChats, "f").values()) {
        if ("username" in chat) {
            if (chat.username === username || chat.also?.some((v) => v.toLowerCase() === username)) {
                return chat.id;
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
        const chat = await (0, _3_types_js_1.constructChat4)(chatId, pinned, topMessageId, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager));
        if (chat == null) {
            continue;
        }
        __classPrivateFieldGet(this, _ChatListManager_chats, "f").set(chat.id, chat);
    }
    for (const { chatId, pinned, topMessageId } of archivedChats) {
        const chat = await (0, _3_types_js_1.constructChat4)(chatId, pinned, topMessageId, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager));
        if (chat == null) {
            continue;
        }
        __classPrivateFieldGet(this, _ChatListManager_archivedChats, "f").set(chat.id, chat);
    }
    __classPrivateFieldSet(this, _ChatListManager_chatsLoadedFromStorage, true, "f");
}, _ChatListManager_getLoadedChats = function _ChatListManager_getLoadedChats(listId) {
    const chats_ = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId);
    const chats = new Array();
    for (const chat of chats_.values()) {
        chats.push(chat);
    }
    return chats
        .sort((a, b) => b.id - a.id)
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
            pinnedChats.push((0, _2_tl_js_1.peerToChatId)(dialog.peer));
        }
        __classPrivateFieldSet(this, _ChatListManager_pinnedChats, pinnedChats, "f");
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setPinnedChats(0, __classPrivateFieldGet(this, _ChatListManager_pinnedChats, "f"));
    }
    if (listId == null || listId == 1) {
        const dialogs = await __classPrivateFieldGet(this, _ChatListManager_c, "f").api.messages.getPinnedDialogs({ folder_id: 1 });
        const pinnedArchiveChats = new Array();
        for (const dialog of dialogs.dialogs) {
            pinnedArchiveChats.push((0, _2_tl_js_1.peerToChatId)(dialog.peer));
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
        const newChat = await (0, _3_types_js_1.constructChat3)(chatId, chat.pinned, chat.lastMessage, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
        if (newChat != null) {
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId).set(chatId, newChat);
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
        }
    }
    else {
        const chat = await (0, _3_types_js_1.constructChat4)(chatId, -1, -1, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager));
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
        const chatId = (0, _2_tl_js_1.peerToChatId)(peer);
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
            chat.order = (0, _3_types_js_1.getChatOrder)(chat.lastMessage, i);
            chat.pinned = i;
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
        }
    }
    for (const chat of chats.values()) {
        if (chat.pinned != -1 && pinnedChats.indexOf(chat.id) == -1) {
            chat.order = (0, _3_types_js_1.getChatOrder)(chat.lastMessage, -1);
            chat.pinned = -1;
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chat.id, false);
        }
    }
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setPinnedChats(listId, await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId));
}, _ChatListManager_handleUpdateChannel = async function _ChatListManager_handleUpdateChannel(update) {
    const peer = new _2_tl_js_1.types.PeerChannel(update);
    const channel = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity(peer);
    if (channel != null && "left" in channel && channel.left) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, (0, _2_tl_js_1.peerToChatId)(peer));
    }
    else if (channel instanceof _2_tl_js_1.types.ChannelForbidden) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, (0, _2_tl_js_1.peerToChatId)(peer));
    }
    else if (channel instanceof _2_tl_js_1.types.Channel) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_updateOrAddChat).call(this, (0, _2_tl_js_1.peerToChatId)(peer));
    }
}, _ChatListManager_handleUpdateChat = async function _ChatListManager_handleUpdateChat(update) {
    const peer = new _2_tl_js_1.types.PeerChat(update);
    const chat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity(peer);
    if (chat != null && "left" in chat && chat.left) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, (0, _2_tl_js_1.peerToChatId)(peer));
    }
    else if (chat instanceof _2_tl_js_1.types.ChatForbidden) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, (0, _2_tl_js_1.peerToChatId)(peer));
    }
    else if (chat instanceof _2_tl_js_1.types.Chat) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_updateOrAddChat).call(this, (0, _2_tl_js_1.peerToChatId)(peer));
    }
}, _ChatListManager_handleUpdateUser = async function _ChatListManager_handleUpdateUser(update) {
    const peer = new _2_tl_js_1.types.PeerUser(update);
    const chat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity(peer);
    if (chat != null) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_updateOrAddChat).call(this, (0, _2_tl_js_1.peerToChatId)(peer));
    }
}, _ChatListManager_fetchChats = async function _ChatListManager_fetchChats(listId, limit, after) {
    const dialogs = await __classPrivateFieldGet(this, _ChatListManager_c, "f").api.messages.getDialogs({
        limit,
        offset_id: after?.lastMessage?.id ?? 0,
        offset_date: after?.lastMessage?.date ? (0, _1_utilities_js_1.toUnixTimestamp)(after.lastMessage.date) : 0,
        offset_peer: after ? await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(after.id) : new _2_tl_js_1.types.InputPeerEmpty(),
        hash: 0n,
        folder_id: listId,
    });
    const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
    if (!(dialogs instanceof _2_tl_js_1.types.messages.Dialogs) && !(dialogs instanceof _2_tl_js_1.types.messages.DialogsSlice)) {
        (0, _0_deps_js_1.unreachable)();
    }
    if (dialogs.dialogs.length < limit) {
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setHasAllChats(listId, true);
    }
    const chats = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId);
    for (const dialog of dialogs.dialogs) {
        const chat = await (0, _3_types_js_1.constructChat)(dialog, dialogs, pinnedChats, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager), __classPrivateFieldGet(this, _ChatListManager_c, "f").fileManager.getStickerSetName.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager));
        chats.set(chat.id, chat);
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chat.id, chat.pinned, chat.lastMessage?.id ?? 0, chat.lastMessage?.date ?? new Date(0));
    }
};
