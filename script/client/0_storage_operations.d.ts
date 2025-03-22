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
import { MaybePromise } from "../1_utilities.js";
import { Storage, StorageKeyPart } from "../2_storage.js";
import { Api } from "../2_tl.js";
import { DC } from "../3_transport.js";
import { Translation, VoiceTranscription } from "../3_types.js";
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
        minPeerReferences: () => StorageKeyPart[];
        minPeerReference: (senderId: number, chatId: number) => StorageKeyPart[];
        minPeerReferenceSender: (senderId: number) => StorageKeyPart[];
        allTranslations: () => string[];
        platformTranslations: (platform: string) => string[];
        translations: (platform: string, language: string) => string[];
        pollResults: () => string[];
        pollResult: (pollId: bigint) => (string | bigint)[];
        polls: () => string[];
        poll: (pollId: bigint) => (string | bigint)[];
        voiceTranscriptions: () => string[];
        voiceTranscription: (transcriptionId: bigint) => (string | bigint)[];
        voiceTranscriptionReferences: () => string[];
        voiceTranscriptionReference: (chatId: number, messageId: number, messageEditDate: number) => (string | number)[];
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
    getAuthKey(): Promise<Uint8Array<ArrayBuffer> | null>;
    setAuthKey(authKey: Uint8Array | null): Promise<void>;
    get authKeyId(): bigint | null;
    exportAuthString(apiId_?: number | null): Promise<string>;
    importAuthString(string: string): Promise<void>;
    getChannelAccessHash(id: number): Promise<bigint | null>;
    getUserAccessHash(id: number): Promise<bigint | null>;
    updateUsernames(id: number, usernames: string[]): Promise<void>;
    getUsername(username: string): Promise<[number, Date] | null>;
    setTlObject(key: readonly StorageKeyPart[], value: Api.AnyType | null): Promise<void>;
    getTlObject(keyOrBuffer: Api.AnyType | Uint8Array | readonly StorageKeyPart[]): Promise<Api.DeserializedType | null>;
    setState(state: Api.updates_State): Promise<void>;
    getState(): Promise<Api.updates_State | null>;
    setMessage(chatId: number, messageId: number, message: Api.Message | null): Promise<void>;
    deleteMessages(): Promise<void>;
    getMessageChat(messageId: number): MaybePromise<number | null>;
    getMessage(chatId: number, messageId: number): Promise<Api.Message | null>;
    getLastMessage(chatId: number): Promise<Api.Message | null>;
    setChannelPts(channelId: bigint, pts: number): Promise<void>;
    getChannelPts(channelId: bigint): MaybePromise<number | null>;
    setEntity(entity: Api.AnyEntity): Promise<void>;
    getEntity(key: number): Promise<Api.DeserializedType | null>;
    setAccountId(accountId: number): Promise<void>;
    getAccountId(): Promise<number | null>;
    setAccountType(type: "user" | "bot"): Promise<void>;
    getAccountType(): Promise<"user" | "bot" | null>;
    get accountType(): "user" | "bot";
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
    getHistory(chatId: number, offsetId: number, limit: number): Promise<Api.Message[]>;
    getFile(id: bigint): Promise<[number, number] | null>;
    iterFileParts(id: bigint, partCount: number, offset: number, signal: AbortSignal | undefined): AsyncGenerator<Uint8Array>;
    saveFilePart(id: bigint, index: number, bytes: Uint8Array): Promise<void>;
    setFilePartCount(id: bigint, partCount: number, chunkSize: number): Promise<void>;
    setCustomEmojiDocument(id: bigint, document: Api.document): Promise<void>;
    getCustomEmojiDocument(id: bigint): Promise<[Api.document, Date] | null>;
    setBusinessConnection(id: string, connection: Api.botBusinessConnection | null): Promise<void>;
    getBusinessConnection(id: string): Promise<Api.botBusinessConnection | null>;
    setInlineQueryAnswer(userId: number, chatId: number, query: string, offset: string, results: Api.messages_botResults, date: Date): Promise<void>;
    getInlineQueryAnswer(userId: number, chatId: number, query: string, offset: string): Promise<[Api.messages_botResults, Date] | null>;
    setCallbackQueryAnswer(chatId: number, messageId: number, question: string, answer: Api.messages_botCallbackAnswer): Promise<void>;
    getCallbackQueryAnswer(chatId: number, messageId: number, question: string): Promise<[Api.messages_botCallbackAnswer, Date] | null>;
    setFullChat(chatId: number, fullChat: Api.userFull | Api.channelFull | Api.chatFull | null): Promise<void>;
    getFullChat(chatId: number): Promise<Api.userFull | Api.channelFull | Api.chatFull | null>;
    setGroupCall(id: bigint, groupCall: Api.groupCall | null): Promise<void>;
    getGroupCall(id: bigint): Promise<Api.groupCall | null>;
    setGroupCallAccessHash(id: bigint, accessHash: bigint | null): Promise<void>;
    getGroupCallAccessHash(id: bigint): Promise<bigint | null>;
    setUpdate(boxId: bigint, update: Api.Update): Promise<void>;
    deleteUpdates(): Promise<void>;
    getFirstUpdate(boxId: bigint): Promise<[readonly StorageKeyPart[], Api.Update] | null>;
    assertUser(source: string): void;
    assertBot(source: string): void;
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
    reset(): Promise<void>;
    setMinPeerReference(chatId: number, senderId: number, messageId: number): Promise<void>;
    getLastMinPeerReference(senderId: number): Promise<{
        chatId: number;
        messageId: number;
    } | null>;
    deleteTranslations(): Promise<void>;
    getTranslations(platform: string, language: string): Promise<[number, Translation[], Date] | null>;
    setTranslations(platform: string, language: string, version: number, translations: Translation[]): Promise<void>;
    setPollResults(pollId: bigint, pollResults: Api.pollResults): Promise<void>;
    getPollResults(pollId: bigint): Promise<Api.pollResults | null>;
    deletePollResults(): Promise<void>;
    setPoll(pollId: bigint, poll: Api.poll): Promise<void>;
    getPoll(pollId: bigint): Promise<Api.poll | null>;
    deletePolls(): Promise<void>;
    setVoiceTranscription(voiceTranscription: VoiceTranscription): Promise<void>;
    getVoiceTranscription(transcriptionId: bigint): Promise<VoiceTranscription | null>;
    deleteVoiceTranscriptions(): Promise<void>;
    setVoiceTranscriptionReference(chatId: number, messageId: number, messageEditDate: Date, transcriptionId: bigint): Promise<void>;
    getVoiceTranscriptionReference(chatId: number, messageId: number, messageEditDate: Date): Promise<bigint | null>;
    deleteVoiceTranscriptionReferences(): Promise<void>;
}
//# sourceMappingURL=0_storage_operations.d.ts.map