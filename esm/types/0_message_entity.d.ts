import { enums } from "../2_tl.js";
import { EntityGetter } from "./1__getters.js";
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
