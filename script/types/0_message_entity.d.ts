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
import { enums } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
/** @unlisted */
export type MessageEntityType = "mention" | "hashtag" | "botCommand" | "url" | "email" | "bold" | "italic" | "code" | "pre" | "textLink" | "textMention" | "cashtag" | "phoneNumber" | "underline" | "strikethrough" | "blockquote" | "bankCard" | "spoiler" | "customEmoji";
/** @unlisted */
export interface _MessageEntityBase {
    type: MessageEntityType;
    offset: number;
    length: number;
}
/** @unlisted */
export interface MessageEntityMention extends _MessageEntityBase {
    type: "mention";
}
/** @unlisted */
export interface MessageEntityHashtag extends _MessageEntityBase {
    type: "hashtag";
}
/** @unlisted */
export interface MessageEntityBotCommand extends _MessageEntityBase {
    type: "botCommand";
}
/** @unlisted */
export interface MessageEntityURL extends _MessageEntityBase {
    type: "url";
}
/** @unlisted */
export interface MessageEntityEmailAddress extends _MessageEntityBase {
    type: "email";
}
/** @unlisted */
export interface MessageEntityBold extends _MessageEntityBase {
    type: "bold";
}
/** @unlisted */
export interface MessageEntityItalic extends _MessageEntityBase {
    type: "italic";
}
/** @unlisted */
export interface MessageEntityPre extends _MessageEntityBase {
    type: "pre";
    /** The language identifier of the code. */
    language: string;
}
/** @unlisted */
export interface MessageEntityCode extends _MessageEntityBase {
    type: "code";
}
/** @unlisted */
export interface MessageEntityTextLink extends _MessageEntityBase {
    type: "textLink";
    /** A URL that will be opened after the text is tapped. */
    url: string;
}
/** @unlisted */
export interface MessageEntityTextMention extends _MessageEntityBase {
    type: "textMention";
    /** The identifier of the user to mention. */
    userId: number;
}
/** @unlisted */
export interface MessageEntityCashtag extends _MessageEntityBase {
    type: "cashtag";
}
/** @unlisted */
export interface MessageEntityPhoneNumber extends _MessageEntityBase {
    type: "phoneNumber";
}
/** @unlisted */
export interface MessageEntityUnderline extends _MessageEntityBase {
    type: "underline";
}
/** @unlisted */
export interface MessageEntityStrikethrough extends _MessageEntityBase {
    type: "strikethrough";
}
/** @unlisted */
export interface MessageEntityBlockquote extends _MessageEntityBase {
    type: "blockquote";
}
/** @unlisted */
export interface MessageEntityBankCard extends _MessageEntityBase {
    type: "bankCard";
}
/** @unlisted */
export interface MessageEntitySpoiler extends _MessageEntityBase {
    type: "spoiler";
}
/** @unlisted */
export interface MessageEntityCustomEmoji extends _MessageEntityBase {
    type: "customEmoji";
    /** The identifier of the custom emoji. */
    customEmojiId: string;
}
/** A single entity of a message's text or caption. */
export type MessageEntity = MessageEntityMention | MessageEntityHashtag | MessageEntityBotCommand | MessageEntityURL | MessageEntityEmailAddress | MessageEntityBold | MessageEntityItalic | MessageEntityCode | MessageEntityPre | MessageEntityTextLink | MessageEntityTextMention | MessageEntityCashtag | MessageEntityPhoneNumber | MessageEntityUnderline | MessageEntityStrikethrough | MessageEntityBlockquote | MessageEntityBankCard | MessageEntitySpoiler | MessageEntityCustomEmoji;
export declare function constructMessageEntity(obj: enums.MessageEntity): MessageEntity | null;
export declare function messageEntityToTlObject(entity: MessageEntity, getEntity: EntityGetter): Promise<enums.MessageEntity>;
export declare function sortMessageEntities(entities: MessageEntity[]): MessageEntity[];
