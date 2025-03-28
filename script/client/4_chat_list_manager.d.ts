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
import { Api } from "../2_tl.js";
import { ChatListItem, ChatMember, ChatP, type ChatPChannel, type ChatPSupergroup, ID } from "../3_types.js";
import { type CreateChannelParams, type CreateGroupParams, type CreateSupergroupParams, GetChatMembersParams, GetCommonChatsParams } from "./0_params.js";
import { UpdateProcessor } from "./0_update_processor.js";
import { C as C_ } from "./1_types.js";
import { FileManager } from "./2_file_manager.js";
import { MessageManager } from "./3_message_manager.js";
type C = C_ & {
    fileManager: FileManager;
    messageManager: MessageManager;
};
declare const chatListManagerUpdates: readonly ["updateNewMessage", "updateNewChannelMessage", "updatePinnedDialogs", "updateFolderPeers", "updateChannel", "updateChat", "updateUser", "updateUserName"];
type ChatListManagerUpdate = Api.Types[(typeof chatListManagerUpdates)[number]];
export declare class ChatListManager implements UpdateProcessor<ChatListManagerUpdate> {
    #private;
    constructor(c: C);
    reassignChatLastMessage(chatId: number, add?: boolean, sendUpdate?: boolean): Promise<() => void>;
    getChats(from?: "archived" | "main", after?: ChatListItem, limit?: number): Promise<ChatListItem[]>;
    canHandleUpdate(update: Api.Update): update is ChatListManagerUpdate;
    handleUpdate(update: ChatListManagerUpdate): Promise<null>;
    getChat(chatId: ID): Promise<import("../3_types.js").Chat>;
    getChatAdministrators(chatId: ID): Promise<ChatMember[]>;
    getChatMember(chatId: ID, userId: ID): Promise<ChatMember>;
    getChatMembers(chatId: ID, params?: GetChatMembersParams): Promise<ChatMember[]>;
    createGroup(title: string, params?: CreateGroupParams): Promise<import("../3_types.js").ChatPGroup>;
    createSupergroup(title: string, params?: CreateSupergroupParams): Promise<ChatPSupergroup>;
    createChannel(title: string, params?: CreateChannelParams): Promise<ChatPChannel>;
    setMessageTtl(chatId: ID, messageTtl: number): Promise<void>;
    archiveChats(chatIds: ID[]): Promise<void>;
    archiveChat(chatId: ID): Promise<void>;
    unarchiveChats(chatIds: ID[]): Promise<void>;
    unarchiveChat(chatId: ID): Promise<void>;
    getCommonChats(userId: ID, params?: GetCommonChatsParams): Promise<ChatP[]>;
    getChatSettings(chatId: ID): Promise<import("../3_types.js").ChatSettings>;
    disableBusinessBots(chatId: ID): Promise<void>;
    enableBusinessBots(chatId: ID): Promise<void>;
}
export {};
//# sourceMappingURL=4_chat_list_manager.d.ts.map