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
import { MaybePromise } from "../1_utilities.js";
import { AnyEntity, enums, ReadObject, TLObject, types } from "../2_tl.js";
import { DC } from "../3_transport.js";
import { Storage, StorageKeyPart } from "../2_storage.js";
export declare const K: {
    connection: {
        P: (string: string) => string;
        apiId: () => StorageKeyPart[];
    };
    session: {
        P: (string: string) => string;
        serverSalt: () => StorageKeyPart[];
    };
    auth: {
        P: (string: string) => string;
        dc: () => StorageKeyPart[];
        key: () => StorageKeyPart[];
        accountId: () => StorageKeyPart[];
        accountType: () => StorageKeyPart[];
    };
    updates: {
        P: (string: string) => string;
        state: () => StorageKeyPart[];
        all: () => StorageKeyPart[];
        updates: (boxId: bigint) => StorageKeyPart[];
        update: (boxId: bigint, id: bigint) => StorageKeyPart[];
        channelPts: (channelId: bigint) => StorageKeyPart[];
    };
    cache: {
        P: (string: string) => string;
        usernames: () => StorageKeyPart[];
        username: (v: string) => StorageKeyPart[];
        peers: () => StorageKeyPart[];
        peer: (id: number) => StorageKeyPart[];
        stickerSetNames: () => StorageKeyPart[];
        stickerSetName: (id: bigint, accessHash: bigint) => StorageKeyPart[];
        files: () => StorageKeyPart[];
        file: (fileId: bigint) => StorageKeyPart[];
        fileParts: () => StorageKeyPart[];
        filePart: (fileId: bigint, n: number) => StorageKeyPart[];
        customEmojiDocuments: () => StorageKeyPart[];
        customEmojiDocument: (id: bigint) => StorageKeyPart[];
        businessConnections: () => StorageKeyPart[];
        businessConnection: (id: string) => StorageKeyPart[];
        inlineQueryAnswers: () => StorageKeyPart[];
        inlineQueryAnswer: (userId: number, chatId: number, query: string, offset: string) => StorageKeyPart[];
        callbackQueryAnswers: () => StorageKeyPart[];
        callbackQueryAnswer: (chatId: number, messageId: number, question: string) => StorageKeyPart[];
        fullChats: () => StorageKeyPart[];
        fullChat: (chatId: number) => StorageKeyPart[];
        groupCalls: () => StorageKeyPart[];
        groupCall: (id: bigint) => StorageKeyPart[];
        groupCallAccessHashes: () => StorageKeyPart[];
        groupCallAccessHash: (id: bigint) => StorageKeyPart[];
    };
    messages: {
        P: (string: string) => string;
        messages: (chatId: number) => StorageKeyPart[];
        message: (chatId: number, messageId: number) => StorageKeyPart[];
        allMessageRefs: () => StorageKeyPart[];
        messageRef: (messageId: number) => StorageKeyPart[];
    };
    chatlists: {
        P: (string: string) => string;
        hasAllChats: (listId: number) => StorageKeyPart[];
        chats: (listId: number) => StorageKeyPart[];
        chat: (listId: number, chatId: number) => StorageKeyPart[];
        pinnedChats: (listId: number) => StorageKeyPart[];
    };
};
export declare class StorageOperations {
    #private;
    constructor(storage: Storage);
    get provider(): Storage;
    get supportsFiles(): boolean;
    initialize(): Promise<void>;
    set(...args: Parameters<Storage["set"]>): ReturnType<Storage["set"]>;
    incr(...args: Parameters<Storage["incr"]>): ReturnType<Storage["incr"]>;
    get<T>(...args: Parameters<Storage["get"]>): ReturnType<Storage["get"]>;
    getMany<T>(...args: Parameters<Storage["getMany"]>): ReturnType<Storage["getMany"]>;
    setDc(dc: DC | null): Promise<void>;
    getDc(): MaybePromise<DC | null>;
    getAuthKey(): Promise<Uint8Array | null>;
    setAuthKey(authKey: Uint8Array | null): Promise<void>;
    get authKeyId(): bigint | null;
    exportAuthString(apiId_?: number | null): Promise<string>;
    importAuthString(string: string): Promise<void>;
    getChannelAccessHash(id: number): Promise<bigint | null>;
    getUserAccessHash(id: number): Promise<bigint | null>;
    updateUsernames(id: number, usernames: string[]): Promise<void>;
    getUsername(username: string): Promise<[number, Date] | null>;
    setTlObject(key: readonly StorageKeyPart[], value: TLObject | null): Promise<void>;
    getTlObject(keyOrBuffer: TLObject | Uint8Array | readonly StorageKeyPart[]): Promise<ReadObject | null>;
    setState(state: enums.updates.State): Promise<void>;
    getState(): Promise<enums.updates.State | null>;
    setMessage(chatId: number, messageId: number, message: enums.Message | null): Promise<void>;
    deleteMessages(): Promise<void>;
    getMessageChat(messageId: number): MaybePromise<number | null>;
    getMessage(chatId: number, messageId: number): Promise<enums.Message | null>;
    getLastMessage(chatId: number): Promise<enums.Message | null>;
    setChannelPts(channelId: bigint, pts: number): Promise<void>;
    getChannelPts(channelId: bigint): MaybePromise<number | null>;
    setEntity(entity: AnyEntity): Promise<void>;
    getEntity(key: number): Promise<ReadObject | null>;
    setAccountId(accountId: number): Promise<void>;
    getAccountId(): Promise<number | null>;
    setAccountType(type: "user" | "bot"): Promise<void>;
    getAccountType(): Promise<"user" | "bot" | null>;
    updateStickerSetName(id: bigint, accessHash: bigint, name: string): Promise<void>;
    getStickerSetName(id: bigint, accessHash: bigint): MaybePromise<[string, Date] | null>;
    setServerSalt(serverSalt: bigint): Promise<void>;
    getServerSalt(): MaybePromise<bigint | null>;
    setChat(listId: number, chatId: number, pinned: number, topMessageId: number, topMessageDate: Date): Promise<void>;
    getChats(listId: number): Promise<{
        chatId: number;
        pinned: number;
        topMessageId: number;
        topMessageDate: Date;
    }[]>;
    removeChats(listId: number): Promise<void>;
    setHasAllChats(listId: number, hasAllChats: boolean): Promise<void>;
    hasAllChats(listId: number): Promise<boolean>;
    setPinnedChats(listId: number, chatIds: number[] | null): Promise<void>;
    getPinnedChats(listId: number): Promise<number[] | null>;
    getHistory(chatId: number, offsetId: number, limit: number): Promise<enums.Message[]>;
    getFile(id: bigint): Promise<[number, number] | null>;
    iterFileParts(id: bigint, partCount: number, offset: number): AsyncGenerator<Uint8Array>;
    saveFilePart(id: bigint, index: number, bytes: Uint8Array): Promise<void>;
    setFilePartCount(id: bigint, partCount: number, chunkSize: number): Promise<void>;
    setCustomEmojiDocument(id: bigint, document: types.Document): Promise<void>;
    getCustomEmojiDocument(id: bigint): Promise<[types.Document, Date] | null>;
    setBusinessConnection(id: string, connection: types.BotBusinessConnection | null): Promise<void>;
    getBusinessConnection(id: string): Promise<types.BotBusinessConnection | null>;
    setInlineQueryAnswer(userId: number, chatId: number, query: string, offset: string, results: types.messages.BotResults, date: Date): Promise<void>;
    getInlineQueryAnswer(userId: number, chatId: number, query: string, offset: string): Promise<[types.messages.BotResults, Date] | null>;
    setCallbackQueryAnswer(chatId: number, messageId: number, question: string, answer: types.messages.BotCallbackAnswer): Promise<void>;
    getCallbackQueryAnswer(chatId: number, messageId: number, question: string): Promise<[types.messages.BotCallbackAnswer, Date] | null>;
    setFullChat(chatId: number, fullChat: types.UserFull | types.ChannelFull | types.ChatFull | null): Promise<void>;
    getFullChat(chatId: number): Promise<types.UserFull | types.ChannelFull | types.ChatFull | null>;
    setGroupCall(id: bigint, groupCall: types.GroupCall | null): Promise<void>;
    getGroupCall(id: bigint): Promise<types.GroupCall | null>;
    setGroupCallAccessHash(id: bigint, accessHash: bigint | null): Promise<void>;
    getGroupCallAccessHash(id: bigint): Promise<bigint | null>;
    setUpdate(boxId: bigint, update: enums.Update): Promise<void>;
    deleteUpdates(): Promise<void>;
    getFirstUpdate(boxId: bigint): Promise<[readonly StorageKeyPart[], enums.Update] | null>;
    assertUser(source: string): Promise<void>;
    assertBot(source: string): Promise<void>;
    deleteFiles(): Promise<void>;
    deleteCustomEmojiDocuments(): Promise<void>;
    deleteBusinessConnections(): Promise<void>;
    deleteInlineQueryAnswers(): Promise<void>;
    deleteCallbackQueryAnswers(): Promise<void>;
    deleteFullChats(): Promise<void>;
    deleteGroupCalls(): Promise<void>;
    deleteStickerSetNames(): Promise<void>;
    deletePeers(): Promise<void>;
    deleteUsernames(): Promise<void>;
    clear(): Promise<void>;
    setApiId(apiId: number): Promise<void>;
    getApiId(): Promise<number | null>;
}
