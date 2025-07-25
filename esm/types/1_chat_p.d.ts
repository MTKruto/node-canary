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
import { ChatPhoto } from "./0_chat_photo.js";
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
    /** @discriminator */
    type: "private";
    /** Whether this is a bot's chat. */
    isBot: boolean;
    /** The first name of the user. */
    firstName: string;
    /** The last name of the user. */
    lastName?: string;
    /** The user's main username. */
    username?: string;
    /** The user's additional usernames. */
    also?: string[];
    /** The user's profile photo. */
    photo?: ChatPhoto;
    /** The user's [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag). */
    languageCode?: string;
    /** Whether the user has been identified as scam. */
    isScam: boolean;
    /** Whether the user has been identified as an impersonator. */
    isFake: boolean;
    /** Whether the user is subscribed to Telegram Premium. */
    isPremium: boolean;
    /** Whether the user has been verified. */
    isVerified: boolean;
    /** Whether the user is official support. */
    isSupport: boolean;
    /** Whether the user has been restricted. */
    isRestricted: boolean;
    /** The reason why the user has been restricted. */
    restrictionReason?: RestrictionReason[];
    /** Whether the user is a bot that has been added to the attachment menu by the current user. */
    addedToAttachmentMenu?: boolean;
}
/** @unlisted */
export interface ChatPGroup extends _ChatPBase {
    /** @discriminator */
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
    /** The chat or channel's additional usernames. */
    also?: string[];
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
    /** @discriminator */
    type: "channel";
}
/** @unlisted */
export interface ChatPSupergroup extends ChatPChannelBase {
    /** @discriminator */
    type: "supergroup";
    /** Whether the chat is a forum. */
    isForum: boolean;
}
/**
 * A chat with lesser fields.
 */
export type ChatP = ChatPPrivate | ChatPGroup | ChatPSupergroup | ChatPChannel;
export declare function constructChatP(chat: Api.user): ChatPPrivate;
export declare function constructChatP(chat: Api.chat | Api.chatForbidden): ChatPGroup;
export declare function constructChatP(chat: Api.channel | Api.channelForbidden): ChatPSupergroup | ChatPChannel;
export declare function constructChatP(chat: Api.user | Api.chat | Api.chatForbidden | Api.channel | Api.channelForbidden): ChatP;
//# sourceMappingURL=1_chat_p.d.ts.map