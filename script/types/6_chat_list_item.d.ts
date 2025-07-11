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
import { EntityGetter } from "./_getters.js";
import { ChatP } from "./1_chat_p.js";
import { StickerSetNameGetter } from "./1_sticker.js";
import { Message, MessageGetter } from "./5_message.js";
export interface ChatListItem {
    chat: ChatP;
    order: string;
    pinned: number;
    lastMessage?: Omit<Message, "replyToMessage">;
}
export declare function getChatListItemOrder(lastMessage: Omit<Message, "replyToMessage"> | undefined, pinned: number): string;
export declare function constructChatListItem(chatId: number, pinned: number, lastMessageId: number, getEntity: EntityGetter, getMessage: MessageGetter): Promise<ChatListItem | null>;
export declare function constructChatListItem2(entity: Api.user | Api.chat | Api.chatForbidden | Api.channel | Api.channelForbidden, pinned: number, lastMessage: Omit<Message, "replyToMessage"> | undefined): ChatListItem;
export declare function constructChatListItem3(chatId: number, pinned: number, lastMessage: Omit<Message, "replyToMessage"> | undefined, getEntity: EntityGetter): Promise<ChatListItem | null>;
export declare function constructChatListItem4(dialog: Api.Dialog, dialogs: Api.messages_dialogs | Api.messages_dialogsSlice, pinnedChats: number[], getEntity: EntityGetter, getMessage: MessageGetter, getStickerSetName: StickerSetNameGetter): Promise<ChatListItem>;
//# sourceMappingURL=6_chat_list_item.d.ts.map