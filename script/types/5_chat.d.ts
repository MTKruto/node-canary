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
import { EntityGetter } from "./_getters.js";
import { ChatPhotoChat, ChatPhotoUser } from "./0_chat_photo.js";
import { ChatPChannel, ChatPGroup, ChatPPrivate, ChatPSupergroup } from "./1_chat_p.js";
import { StickerSetNameGetter } from "./1_sticker.js";
import { Message, MessageGetter } from "./4_message.js";
/** @unlisted */
export interface _ChatBase {
    order: string;
    lastMessage?: Omit<Message, "replyToMessage">;
    pinned: number;
}
/** @unlisted */
export interface ChatChannel extends _ChatBase, ChatPChannel {
    also?: string[];
    photo?: ChatPhotoChat;
}
/** @unlisted */
export interface ChatSupergroup extends _ChatBase, ChatPSupergroup {
    also?: string[];
    photo?: ChatPhotoChat;
}
/** @unlisted */
export interface ChatGroup extends _ChatBase, ChatPGroup {
    photo?: ChatPhotoChat;
}
/** @unlisted */
export interface ChatPrivate extends _ChatBase, ChatPPrivate {
    also?: string[];
    photo?: ChatPhotoUser;
}
/**
 * A chat with more fields.
 */
export type Chat = ChatChannel | ChatSupergroup | ChatGroup | ChatPrivate;
export declare function getChatOrder(lastMessage: Omit<Message, "replyToMessage"> | undefined, pinned: number): string;
export declare function constructChat(dialog: enums.Dialog, dialogs: types.messages.Dialogs | types.messages.DialogsSlice, pinnedChats: number[], getEntity: EntityGetter, getMessage: MessageGetter, getStickerSetName: StickerSetNameGetter): Promise<Chat>;
export declare function constructChat2(entity: types.User | types.Chat | types.ChatForbidden | types.Channel | types.ChannelForbidden, pinned: number, lastMessage: Omit<Message, "replyToMessage"> | undefined): Chat;
export declare function constructChat3(chatId: number, pinned: number, lastMessage: Omit<Message, "replyToMessage"> | undefined, getEntity: EntityGetter): Promise<Chat | null>;
export declare function constructChat4(chatId: number, pinned: number, lastMessageId: number, getEntity: EntityGetter, getMessage: MessageGetter): Promise<Chat | null>;
