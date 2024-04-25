"use strict";
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
var _StorageOperations_instances, _StorageOperations_storage, _StorageOperations_supportsFiles, _StorageOperations_mustSerialize, _StorageOperations_authKeyId, _StorageOperations_resetAuthKeyId, _StorageOperations_accountId, _StorageOperations_accountType, _StorageOperations_getUpdateId;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageOperations = exports.K = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
// key parts
exports.K = {
    connection: {
        P: (string) => `connection.${string}`,
        apiId: () => [exports.K.connection.P("apiId")],
    },
    session: {
        P: (string) => `session.${string}`,
        serverSalt: () => [exports.K.session.P("serverSalt")],
    },
    auth: {
        P: (string) => `auth.${string}`,
        dc: () => [exports.K.auth.P("dc")],
        key: () => [exports.K.auth.P("key")],
        accountId: () => [exports.K.auth.P("accountId")],
        accountType: () => [exports.K.auth.P("accountType")],
    },
    updates: {
        P: (string) => `updates.${string}`,
        state: () => [exports.K.updates.P("state")],
        all: () => [exports.K.updates.P("updates")],
        updates: (boxId) => [...exports.K.updates.all(), boxId],
        update: (boxId, id) => [...exports.K.updates.updates(boxId), id],
        channelPts: (channelId) => [exports.K.updates.P("channelPts"), channelId],
    },
    cache: {
        P: (string) => `cache.${string}`,
        usernames: () => [exports.K.cache.P("username")],
        username: (v) => [...exports.K.cache.usernames(), v],
        peers: () => [exports.K.cache.P("peer")],
        peer: (id) => [...exports.K.cache.peers(), id],
        stickerSetNames: () => [exports.K.cache.P("stickerSetNames")],
        stickerSetName: (id, accessHash) => [...exports.K.cache.stickerSetNames(), id, accessHash],
        files: () => [exports.K.cache.P("files")],
        file: (fileId) => [...exports.K.cache.files(), fileId],
        fileParts: () => [exports.K.cache.P("fileParts")],
        filePart: (fileId, n) => [...exports.K.cache.fileParts(), fileId, n],
        customEmojiDocuments: () => [exports.K.cache.P("customEmojiDocuments")],
        customEmojiDocument: (id) => [...exports.K.cache.customEmojiDocuments(), id],
        businessConnections: () => [exports.K.cache.P("businessConnections")],
        businessConnection: (id) => [...exports.K.cache.businessConnections(), id],
        inlineQueryAnswers: () => [exports.K.cache.P("inlineQueryResults")],
        inlineQueryAnswer: (userId, chatId, query, offset) => [...exports.K.cache.inlineQueryAnswers(), userId, chatId, query, offset],
        callbackQueryAnswers: () => [exports.K.cache.P("callbackQueryAnswers")],
        callbackQueryAnswer: (chatId, messageId, question) => [...exports.K.cache.callbackQueryAnswers(), chatId, messageId, question],
        fullChats: () => [exports.K.cache.P("fullChats")],
        fullChat: (chatId) => [...exports.K.cache.fullChats(), chatId],
        groupCalls: () => [exports.K.cache.P("groupCalls")],
        groupCall: (id) => [...exports.K.cache.groupCalls(), id],
        groupCallAccessHashes: () => [exports.K.cache.P("groupCallAccessHashes")],
        groupCallAccessHash: (id) => [...exports.K.cache.groupCallAccessHashes(), id],
    },
    messages: {
        P: (string) => `messages.${string}`,
        messages: (chatId) => [exports.K.messages.P("messages"), chatId],
        message: (chatId, messageId) => [...exports.K.messages.messages(chatId), messageId],
        allMessageRefs: () => [exports.K.messages.P("messageRefs")],
        messageRef: (messageId) => [...exports.K.messages.allMessageRefs(), messageId],
    },
    chatlists: {
        P: (string) => `chatlists.${string}`,
        hasAllChats: (listId) => [exports.K.chatlists.P("hasAllChats"), listId],
        chats: (listId) => [exports.K.chatlists.P("chats"), listId],
        chat: (listId, chatId) => [...exports.K.chatlists.chats(listId), chatId],
        pinnedChats: (listId) => [exports.K.chatlists.P("pinnedChats"), listId],
    },
};
class StorageOperations {
    constructor(storage) {
        _StorageOperations_instances.add(this);
        _StorageOperations_storage.set(this, void 0);
        _StorageOperations_supportsFiles.set(this, void 0);
        _StorageOperations_mustSerialize.set(this, void 0);
        _StorageOperations_authKeyId.set(this, null);
        _StorageOperations_accountId.set(this, null);
        _StorageOperations_accountType.set(this, null);
        __classPrivateFieldSet(this, _StorageOperations_storage, storage, "f");
        __classPrivateFieldSet(this, _StorageOperations_supportsFiles, storage.supportsFiles, "f");
        __classPrivateFieldSet(this, _StorageOperations_mustSerialize, storage.mustSerialize, "f");
    }
    get provider() {
        return __classPrivateFieldGet(this, _StorageOperations_storage, "f");
    }
    get supportsFiles() {
        return __classPrivateFieldGet(this, _StorageOperations_storage, "f").supportsFiles;
    }
    async initialize() {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").initialize();
    }
    set(...args) {
        return __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(...args);
    }
    incr(...args) {
        return __classPrivateFieldGet(this, _StorageOperations_storage, "f").incr(...args);
    }
    get(...args) {
        return __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(...args);
    }
    getMany(...args) {
        return __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany(...args);
    }
    async setDc(dc) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.auth.dc(), dc);
    }
    getDc() {
        return __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.auth.dc());
    }
    async getAuthKey() {
        const authKey = await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.auth.key());
        await __classPrivateFieldGet(this, _StorageOperations_instances, "m", _StorageOperations_resetAuthKeyId).call(this, authKey);
        return authKey;
    }
    async setAuthKey(authKey) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.auth.key(), authKey);
        await __classPrivateFieldGet(this, _StorageOperations_instances, "m", _StorageOperations_resetAuthKeyId).call(this, authKey);
    }
    get authKeyId() {
        return __classPrivateFieldGet(this, _StorageOperations_authKeyId, "f");
    }
    async exportAuthString(apiId_) {
        if (typeof apiId_ === "number") {
            await this.setApiId(apiId_);
        }
        const [dc, authKey, apiId, accountId, accountType] = await Promise.all([this.getDc(), this.getAuthKey(), this.getApiId(), this.getAccountId(), this.getAccountType()]);
        if (dc == null || authKey == null || apiId == null || accountId == null || accountType == null) {
            throw new Error("Not authorized");
        }
        const writer = new _2_tl_js_1.TLWriter();
        writer.writeString(dc);
        writer.writeBytes(authKey);
        writer.writeInt32(apiId);
        writer.write(new Uint8Array([accountType == "bot" ? 1 : 0]));
        writer.writeInt64(BigInt(accountId));
        const data = (0, _1_utilities_js_1.rleEncode)(writer.buffer);
        return (0, _1_utilities_js_1.base64EncodeUrlSafe)(data);
    }
    async importAuthString(string) {
        const data = (0, _1_utilities_js_1.rleDecode)((0, _1_utilities_js_1.base64DecodeUrlSafe)(string));
        const reader = new _2_tl_js_1.TLReader(data);
        const dc = reader.readString();
        const authKey = reader.readBytes();
        const apiId = reader.readInt32();
        const isBot = reader.read(1)[0];
        const accountId = Number(reader.readInt64());
        await this.setAccountId(accountId);
        await this.setAccountType(isBot ? "bot" : "user");
        await this.setApiId(apiId);
        await this.setDc(dc);
        await this.setAuthKey(authKey);
    }
    async getChannelAccessHash(id) {
        const channel = await this.getEntity(id);
        if (channel) {
            if (!(channel instanceof _2_tl_js_1.types.Channel) && !(channel instanceof _2_tl_js_1.types.ChannelForbidden)) {
                (0, _0_deps_js_1.unreachable)();
            }
            return typeof channel.access_hash === "bigint" ? channel.access_hash : null;
        }
        else {
            return null;
        }
    }
    async getUserAccessHash(id) {
        const user = await this.getEntity(id);
        if (user) {
            if (!(user instanceof _2_tl_js_1.types.User)) {
                (0, _0_deps_js_1.unreachable)();
            }
            return typeof user.access_hash === "bigint" ? user.access_hash : null;
        }
        else {
            return null;
        }
    }
    async updateUsernames(id, usernames) {
        for (let username of usernames) {
            username = username.toLowerCase();
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.cache.username(username), [id, new Date()]);
        }
    }
    async getUsername(username) {
        username = username.toLowerCase();
        return await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.cache.username(username));
    }
    async setTlObject(key, value) {
        if (value == null) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
        else {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, __classPrivateFieldGet(this, _StorageOperations_mustSerialize, "f") ? (0, _1_utilities_js_1.rleEncode)(value[_2_tl_js_1.serialize]()) : value);
        }
    }
    async getTlObject(keyOrBuffer) {
        const buffer = (keyOrBuffer instanceof Uint8Array || keyOrBuffer instanceof _2_tl_js_1.TLObject) ? keyOrBuffer : await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(keyOrBuffer);
        if (buffer != null) {
            if (buffer instanceof Uint8Array) {
                return new _2_tl_js_1.TLReader((0, _1_utilities_js_1.rleDecode)(buffer)).readObject();
            }
            else {
                return buffer;
            }
        }
        else {
            return null;
        }
    }
    async setState(state) {
        await this.setTlObject(exports.K.updates.state(), state);
    }
    async getState() {
        return await this.getTlObject(exports.K.updates.state());
    }
    async setMessage(chatId, messageId, message) {
        if (chatId > _1_utilities_js_1.ZERO_CHANNEL_ID) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.messages.messageRef(messageId), message == null ? null : chatId);
        }
        await this.setTlObject(exports.K.messages.message(chatId, messageId), message);
    }
    async deleteMessages() {
        const maybePromises = new Array();
        for await (const [k, o] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.messages.allMessageRefs() })) {
            maybePromises.push(Promise.all([__classPrivateFieldGet(this, _StorageOperations_storage, "f").set(k, null), o == null ? Promise.resolve() : __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.messages.message(o, k[1]), null)]).then(() => { }));
        }
        await Promise.all(maybePromises.filter((v) => v instanceof Promise));
    }
    getMessageChat(messageId) {
        return __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.messages.messageRef(messageId));
    }
    async getMessage(chatId, messageId) {
        return await this.getTlObject(exports.K.messages.message(chatId, messageId));
    }
    async getLastMessage(chatId) {
        for await (const [_, buffer] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.messages.messages(chatId) }, { limit: 1, reverse: true })) {
            return await this.getTlObject(buffer);
        }
        return null;
    }
    async setChannelPts(channelId, pts) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.updates.channelPts(channelId), pts);
    }
    getChannelPts(channelId) {
        return __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.updates.channelPts(channelId));
    }
    async setEntity(entity) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.cache.peer((0, _2_tl_js_1.peerToChatId)(entity)), [__classPrivateFieldGet(this, _StorageOperations_mustSerialize, "f") ? (0, _1_utilities_js_1.rleEncode)(entity[_2_tl_js_1.serialize]()) : entity, new Date()]);
    }
    async getEntity(key) {
        const peer_ = await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.cache.peer(key));
        if (peer_ != null) {
            const [obj_] = peer_;
            return await this.getTlObject(obj_);
        }
        else {
            return null;
        }
    }
    async setAccountId(accountId) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.auth.accountId(), accountId);
    }
    async getAccountId() {
        if (__classPrivateFieldGet(this, _StorageOperations_accountId, "f") != null) {
            return __classPrivateFieldGet(this, _StorageOperations_accountId, "f");
        }
        else {
            return (__classPrivateFieldSet(this, _StorageOperations_accountId, await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.auth.accountId()), "f"));
        }
    }
    async setAccountType(type) {
        try {
            await this.getAccountType();
            (0, _0_deps_js_1.unreachable)();
        }
        catch (err) {
            if (!(err instanceof _0_deps_js_1.AssertionError)) {
                throw err;
            }
            else {
                await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.auth.accountType(), type);
            }
        }
    }
    async getAccountType() {
        if (__classPrivateFieldGet(this, _StorageOperations_accountType, "f") != null) {
            return __classPrivateFieldGet(this, _StorageOperations_accountType, "f");
        }
        else {
            return __classPrivateFieldSet(this, _StorageOperations_accountType, await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.auth.accountType()), "f");
        }
    }
    async updateStickerSetName(id, accessHash, name) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.cache.stickerSetName(id, accessHash), [name, new Date()]);
    }
    getStickerSetName(id, accessHash) {
        return __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.cache.stickerSetName(id, accessHash));
    }
    async setServerSalt(serverSalt) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.session.serverSalt(), serverSalt);
    }
    getServerSalt() {
        return __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.session.serverSalt());
    }
    async setChat(listId, chatId, pinned, topMessageId, topMessageDate) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.chatlists.chat(listId, chatId), [pinned, topMessageId, topMessageDate]);
    }
    async getChats(listId) {
        const chats = new Array();
        for await (const [key, value] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.chatlists.chats(listId) })) {
            if (key.length != 3 || typeof key[2] !== "number") {
                continue;
            }
            chats.push({ chatId: key[2], pinned: value[0], topMessageId: value[1], topMessageDate: value[2] });
        }
        return chats;
    }
    async removeChats(listId) {
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.chatlists.chats(listId) })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
        await this.setHasAllChats(listId, false);
        await this.setPinnedChats(listId, null);
    }
    async setHasAllChats(listId, hasAllChats) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.chatlists.hasAllChats(listId), hasAllChats);
    }
    async hasAllChats(listId) {
        const v = await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.chatlists.hasAllChats(listId));
        return v == true;
    }
    async setPinnedChats(listId, chatIds) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.chatlists.pinnedChats(listId), chatIds);
    }
    async getPinnedChats(listId) {
        return await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.chatlists.pinnedChats(listId));
    }
    async getHistory(chatId, offsetId, limit) {
        if (offsetId == 0) {
            offsetId = Infinity;
        }
        ++limit;
        const messages = new Array();
        for await (const [_, buffer] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ start: exports.K.messages.message(chatId, 0), end: exports.K.messages.message(chatId, offsetId) }, { limit, reverse: true })) {
            const message = await this.getTlObject(buffer);
            if ("id" in message && message.id == offsetId) {
                continue;
            }
            messages.push(message);
        }
        return messages;
    }
    async getFile(id) {
        if (!__classPrivateFieldGet(this, _StorageOperations_supportsFiles, "f")) {
            return null;
        }
        return await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.cache.file(id));
    }
    async *iterFileParts(id, partCount, offset) {
        if (!__classPrivateFieldGet(this, _StorageOperations_supportsFiles, "f")) {
            return;
        }
        for (let i = offset; i < partCount; i++) {
            const part = await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.cache.filePart(id, i));
            if (part == null) {
                continue;
            }
            yield part;
        }
    }
    async saveFilePart(id, index, bytes) {
        if (!__classPrivateFieldGet(this, _StorageOperations_supportsFiles, "f")) {
            return;
        }
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.cache.filePart(id, index), bytes);
    }
    async setFilePartCount(id, partCount, chunkSize) {
        if (!__classPrivateFieldGet(this, _StorageOperations_supportsFiles, "f")) {
            return;
        }
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.cache.file(id), [partCount, chunkSize]);
    }
    async setCustomEmojiDocument(id, document) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.cache.customEmojiDocument(id), [__classPrivateFieldGet(this, _StorageOperations_mustSerialize, "f") ? (0, _1_utilities_js_1.rleEncode)(document[_2_tl_js_1.serialize]()) : document, new Date()]);
    }
    async getCustomEmojiDocument(id) {
        const v = await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.cache.customEmojiDocument(id));
        if (v != null) {
            return [await this.getTlObject(v[0]), v[1]];
        }
        else {
            return null;
        }
    }
    async setBusinessConnection(id, connection) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.cache.businessConnection(id), connection == null ? null : __classPrivateFieldGet(this, _StorageOperations_mustSerialize, "f") ? (0, _1_utilities_js_1.rleEncode)(connection[_2_tl_js_1.serialize]()) : connection);
    }
    async getBusinessConnection(id) {
        const v = await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.cache.businessConnection(id));
        if (v != null) {
            return await this.getTlObject(v);
        }
        else {
            return null;
        }
    }
    async setInlineQueryAnswer(userId, chatId, query, offset, results, date) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.cache.inlineQueryAnswer(userId, chatId, query, offset), [__classPrivateFieldGet(this, _StorageOperations_mustSerialize, "f") ? (0, _1_utilities_js_1.rleEncode)(results[_2_tl_js_1.serialize]()) : results, date]);
    }
    async getInlineQueryAnswer(userId, chatId, query, offset) {
        const peer_ = await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.cache.inlineQueryAnswer(userId, chatId, query, offset));
        if (peer_ != null) {
            const [obj_, date] = peer_;
            return [await this.getTlObject(obj_), date];
        }
        else {
            return null;
        }
    }
    async setCallbackQueryAnswer(chatId, messageId, question, answer) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.cache.callbackQueryAnswer(chatId, messageId, question), [__classPrivateFieldGet(this, _StorageOperations_mustSerialize, "f") ? (0, _1_utilities_js_1.rleEncode)(answer[_2_tl_js_1.serialize]()) : answer, new Date()]);
    }
    async getCallbackQueryAnswer(chatId, messageId, question) {
        const peer_ = await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.cache.callbackQueryAnswer(chatId, messageId, question));
        if (peer_ != null) {
            const [obj_, date] = peer_;
            return [await this.getTlObject(obj_), date];
        }
        else {
            return null;
        }
    }
    async setFullChat(chatId, fullChat) {
        await this.setTlObject(exports.K.cache.fullChat(chatId), fullChat);
    }
    async getFullChat(chatId) {
        return await this.getTlObject(exports.K.cache.fullChat(chatId));
    }
    async setGroupCall(id, groupCall) {
        await this.setTlObject(exports.K.cache.groupCall(id), groupCall);
    }
    async getGroupCall(id) {
        return await this.getTlObject(exports.K.cache.groupCall(id));
    }
    async setGroupCallAccessHash(id, accessHash) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.cache.groupCallAccessHash(id), accessHash);
    }
    async getGroupCallAccessHash(id) {
        return await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.cache.groupCallAccessHash(id));
    }
    async setUpdate(boxId, update) {
        await this.setTlObject(exports.K.updates.update(boxId, __classPrivateFieldGet(this, _StorageOperations_instances, "m", _StorageOperations_getUpdateId).call(this, update)), update);
    }
    async deleteUpdates() {
        const maybePromises = new Array();
        for await (const [k] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.updates.all() })) {
            maybePromises.push(__classPrivateFieldGet(this, _StorageOperations_storage, "f").set(k, null));
        }
        await Promise.all(maybePromises.filter((v) => v instanceof Promise));
    }
    async getFirstUpdate(boxId) {
        for await (const [key, update] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.updates.updates(boxId) }, { limit: 1 })) {
            return [key, await this.getTlObject(update).then((v) => v)];
        }
        return null;
    }
    async assertUser(source) {
        if (await this.getAccountType() != "user") {
            throw new _0_errors_js_1.InputError(`${source}: not user a client`);
        }
    }
    async assertBot(source) {
        if (await this.getAccountType() != "bot") {
            throw new _0_errors_js_1.InputError(`${source}: not a bot client`);
        }
    }
    async deleteFiles() {
        if (!__classPrivateFieldGet(this, _StorageOperations_supportsFiles, "f")) {
            return;
        }
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.cache.fileParts() })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.cache.files() })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
    }
    async deleteCustomEmojiDocuments() {
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.cache.customEmojiDocuments() })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
    }
    async deleteBusinessConnections() {
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.cache.businessConnections() })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
    }
    async deleteInlineQueryAnswers() {
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.cache.inlineQueryAnswers() })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
    }
    async deleteCallbackQueryAnswers() {
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.cache.callbackQueryAnswers() })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
    }
    async deleteFullChats() {
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.cache.fullChats() })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
    }
    async deleteGroupCalls() {
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.cache.groupCalls() })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
    }
    async deleteStickerSetNames() {
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.cache.stickerSetNames() })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
    }
    async deletePeers() {
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.cache.peers() })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
    }
    async deleteUsernames() {
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: exports.K.cache.usernames() })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
    }
    async clear() {
        await Promise.all([
            this.deleteMessages(),
            this.removeChats(0),
            this.removeChats(1),
            this.deleteUpdates(),
            this.deleteFiles(),
            this.deleteCustomEmojiDocuments(),
            this.deleteBusinessConnections(),
            this.deleteInlineQueryAnswers(),
            this.deleteCallbackQueryAnswers(),
            this.deleteFullChats(),
            this.deleteGroupCalls(),
            this.deleteStickerSetNames(),
            this.deletePeers(),
            this.deleteUsernames(),
        ]);
    }
    async setApiId(apiId) {
        await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(exports.K.connection.apiId(), apiId);
    }
    async getApiId() {
        return await __classPrivateFieldGet(this, _StorageOperations_storage, "f").get(exports.K.connection.apiId());
    }
    async reset() {
        for await (const [key] of await __classPrivateFieldGet(this, _StorageOperations_storage, "f").getMany({ prefix: [] })) {
            await __classPrivateFieldGet(this, _StorageOperations_storage, "f").set(key, null);
        }
    }
}
exports.StorageOperations = StorageOperations;
_StorageOperations_storage = new WeakMap(), _StorageOperations_supportsFiles = new WeakMap(), _StorageOperations_mustSerialize = new WeakMap(), _StorageOperations_authKeyId = new WeakMap(), _StorageOperations_accountId = new WeakMap(), _StorageOperations_accountType = new WeakMap(), _StorageOperations_instances = new WeakSet(), _StorageOperations_resetAuthKeyId = async function _StorageOperations_resetAuthKeyId(authKey) {
    if (authKey != null) {
        __classPrivateFieldSet(this, _StorageOperations_authKeyId, await (0, _1_utilities_js_1.sha1)(authKey).then((hash) => (0, _1_utilities_js_1.bigIntFromBuffer)(hash.subarray(-8), true, false)), "f");
    }
    else {
        __classPrivateFieldSet(this, _StorageOperations_authKeyId, null, "f");
    }
}, _StorageOperations_getUpdateId = function _StorageOperations_getUpdateId(update) {
    let id = BigInt(Date.now()) << 32n;
    if ("pts" in update && update.pts) {
        id |= BigInt(update.pts);
    }
    else {
        id |= BigInt(0xffffffffn);
    }
    return id;
};
