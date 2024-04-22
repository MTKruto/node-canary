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
import { enums, types } from "../2_tl.js";
import { ChatListItem, ID } from "../3_types.js";
import { C as C_ } from "./0_types.js";
import { FileManager } from "./1_file_manager.js";
import { MessageManager } from "./2_message_manager.js";
type C = C_ & {
    fileManager: FileManager;
    messageManager: MessageManager;
};
type ChatListManagerUpdate = types.UpdateNewMessage | types.UpdateNewChannelMessage | types.UpdatePinnedDialogs | types.UpdateFolderPeers | types.UpdateChannel | types.UpdateChat | types.UpdateUser | types.UpdateUserName;
export declare class ChatListManager {
    #private;
    constructor(c: C);
    reassignChatLastMessage(chatId: number, add?: boolean, sendUpdate?: boolean): Promise<() => Promise<void>>;
    getChats(from?: "archived" | "main", after?: ChatListItem, limit?: number): Promise<ChatListItem[]>;
    static canHandleUpdate(update: enums.Update): update is ChatListManagerUpdate;
    handleUpdate(update: ChatListManagerUpdate): Promise<void>;
    getChat(chatId: ID): Promise<import("../3_types.js").Chat>;
}
export {};
