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
import { enums, types } from "./2_types.js";
export declare function getChannelChatId(channelId: bigint): number;
export type AnyEntity = types.User | types.Channel | types.ChannelForbidden | types.Chat | types.ChatForbidden;
export declare function peerToChatId(peer: enums.Peer | enums.InputPeer | AnyEntity | types.ChannelFull | types.UserFull | types.ChatFull | {
    channel_id: bigint;
} | {
    user_id: bigint;
} | {
    chat_id: bigint;
}): number;
export declare function chatIdToPeer(chatId: number): enums.Peer;
export declare function chatIdToPeerId(chatId: number): bigint;
export declare function getChatIdPeerType(chatId: number): "user" | "chat" | "channel";
export declare function inputPeerToPeer(inputPeer: enums.InputPeer): enums.Peer;
