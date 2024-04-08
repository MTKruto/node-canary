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
import { types } from "../2_tl.js";
import { RestrictionReason } from "./0_restriction_reason.js";
/** @unlisted */
export type ChatType = "private" | "group" | "supergroup" | "channel";
/** @unlisted */
export interface _ChatPBase {
    /** The identifier of the chat. */
    id: number;
    /** The type of the chat. */
    type: ChatType;
    /** Identifier of a color that can be displayed instead of the chat's photo. */
    color: number;
}
/** @unlisted */
export interface ChatPPrivate extends _ChatPBase {
    type: "private";
    /** Whether this is a bot's chat. */
    isBot?: boolean;
    /** The first name of the user. */
    firstName: string;
    /** The last name of the user. */
    lastName?: string;
    /** The user's main username. */
    username?: string;
    /** Whether the user has been identified as scam. */
    isScam: boolean;
    /** Whether the user has been identified as an impersonator. */
    isFake: boolean;
    /** Whether the user is official support. */
    isSupport: boolean;
    /** Whether the user has been verified. */
    isVerified: boolean;
    /** Whether the user has been restricted. */
    isRestricted?: boolean;
    /** The reason why the user has been restricted. */
    restrictionReason?: RestrictionReason[];
}
/** @unlisted */
export interface ChatPGroup extends _ChatPBase {
    type: "group";
    /** The title of the chat. */
    title: string;
    /** Whether the current user is the owner of the chat. */
    isCreator: boolean;
}
/** @unlisted */
export interface ChatPChannelBase extends _ChatPBase {
    /** The title of the chat or channel. */
    title: string;
    /** The main username of the chat or channel. */
    username?: string;
    /** Whether the chat or channel has been identified as scam. */
    isScam: boolean;
    /** Whether the chat or channel has been identified as an impersonator. */
    isFake: boolean;
    /** Whether the chat or channel has been verified. */
    isVerified: boolean;
    /** Whether the chat or channel has been restricted. */
    isRestricted: boolean;
    /** The reason why the chat or channel has been restricted. */
    restrictionReason?: RestrictionReason[];
}
/** @unlisted */
export interface ChatPChannel extends ChatPChannelBase {
    type: "channel";
}
/** @unlisted */
export interface ChatPSupergroup extends ChatPChannelBase {
    type: "supergroup";
    /** Whether the chat is a forum. */
    isForum: boolean;
}
/**
 * A chat with lesser fields.
 */
export type ChatP = ChatPPrivate | ChatPGroup | ChatPSupergroup | ChatPChannel;
export declare function constructChatP(chat: types.User): ChatPPrivate;
export declare function constructChatP(chat: types.Chat | types.ChatForbidden): ChatPGroup;
export declare function constructChatP(chat: types.Channel | types.ChannelForbidden): ChatPSupergroup | ChatPChannel;
export declare function constructChatP(chat: types.User | types.Chat | types.ChatForbidden | types.Channel | types.ChannelForbidden): ChatP;
