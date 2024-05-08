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
import { UsernameResolver } from "./_getters.js";
import { MessageEntity } from "./0_message_entity.js";
import { ParseMode } from "./0_parse_mode.js";
import { MessageContent } from "./1_message_content.js";
import { ReplyMarkupInlineKeyboard } from "./3_reply_markup.js";
import { Thumbnail } from "./0_thumbnail.js";
/** @unlisted */
export type InlineQueryResultType = "article" | "audio" | "document" | "gif" | "mpeg4Gif" | "photo" | "sticker" | "video" | "voice" | "game" | "location" | "venue";
/** @unlisted */
export interface _InlineQueryResultBase {
    type: InlineQueryResultType;
    id: string;
}
/** @unlisted */
export interface _InlineQueryResultCaptionCommon {
    caption?: string;
    parseMode?: ParseMode;
    captionEntities?: MessageEntity[];
}
/** @unlisted */
export interface _InlineQueryResultMessageContentReplyMarkupCommon {
    messageContent?: MessageContent;
    replyMarkup?: ReplyMarkupInlineKeyboard;
}
/** @unlisted */
export interface _InlineQueryResultThumbnailCommon {
    thumbnailUrl?: string;
    thumbnailWidth?: string;
    thumbnailHeight?: string;
}
/** @unlisted */
export interface InlineQueryResultArticle extends _InlineQueryResultBase, _InlineQueryResultThumbnailCommon {
    /** @discriminator */
    type: "article";
    title: string;
    messageContent: MessageContent;
    description?: string;
    replyMarkup?: ReplyMarkupInlineKeyboard;
    url?: string;
    hideUrl?: boolean;
}
/** @unlisted */
export interface InlineQueryResultAudio extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "audio";
    title: string;
    url: string;
    performer?: string;
    audioDuration?: number;
}
/** @unlisted */
export interface InlineQueryResultCachedAudio extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "audio";
    /** @discriminator */
    fileId: string;
}
/** @unlisted */
export interface InlineQueryResultCachedDocument extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "document";
    /** @discriminator */
    fileId: string;
    description?: string;
}
/** @unlisted */
export interface InlineQueryResultCachedGif extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "gif";
    /** @discriminator */
    fileId: string;
    title?: string;
}
/** @unlisted */
export interface InlineQueryResultCachedMpeg4Gif extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "mpeg4Gif";
    /** @discriminator */
    fileId: string;
    title?: string;
}
/** @unlisted */
export interface InlineQueryResultCachedPhoto extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "photo";
    /** @discriminator */
    fileId: string;
    thumbnails?: Thumbnail[];
    title?: string;
    description?: string;
}
/** @unlisted */
export interface InlineQueryResultCachedSticker extends _InlineQueryResultBase, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "sticker";
    /** @discriminator */
    fileId: string;
}
/** @unlisted */
export interface InlineQueryResultCachedVideo extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "video";
    title: string;
    /** @discriminator */
    fileId: string;
    description?: string;
}
/** @unlisted */
export interface InlineQueryResultCachedVoice extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "voice";
    title: string;
    /** @discriminator */
    fileId: string;
}
/** @unlisted */
export interface InlineQueryResultContact extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon, _InlineQueryResultThumbnailCommon {
    /** @discriminator */
    type: "game";
    phoneNumber: string;
    firstName: string;
    lastName?: string;
    vcard?: string;
}
/** @unlisted */
export interface InlineQueryResultDocument extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon, _InlineQueryResultThumbnailCommon {
    /** @discriminator */
    type: "document";
    title: string;
    /** @discriminator */
    url: string;
}
/** @unlisted */
export interface InlineQueryResultGame extends _InlineQueryResultBase {
    /** @discriminator */
    type: "game";
    gameShortName: string;
    replyMarkup?: ReplyMarkupInlineKeyboard;
}
/** @unlisted */
export interface InlineQueryResultGif extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "gif";
    title?: string;
    /** @discriminator */
    url: string;
    width?: number;
    height?: number;
    duration?: number;
    thumbnailUrl?: string;
    thumbnailMimeType?: string;
}
/** @unlisted */
export interface InlineQueryResultLocation extends _InlineQueryResultBase, _InlineQueryResultMessageContentReplyMarkupCommon, _InlineQueryResultThumbnailCommon {
    /** @discriminator */
    type: "location";
    title: string;
    latitude: number;
    longitude: number;
    horizontalAccuracy?: number;
    livePeriod?: number;
    heading?: number;
    proximityAlertRadius?: number;
}
/** @unlisted */
export interface InlineQueryResultMpeg4Gif extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "mpeg4Gif";
    /** @discriminator */
    url: string;
    title?: string;
    width?: number;
    height?: number;
    duration?: number;
    thumbnailUrl?: string;
    thumbnailMimeType?: string;
}
/** @unlisted */
export interface InlineQueryResultPhoto extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "photo";
    /** @discriminator */
    url: string;
    thumbnailUrl: string;
    title?: string;
    description?: string;
    width?: number;
    height?: number;
}
/** @unlisted */
export interface InlineQueryResultVenue extends _InlineQueryResultBase, _InlineQueryResultMessageContentReplyMarkupCommon, _InlineQueryResultThumbnailCommon {
    /** @discriminator */
    type: "venue";
    title: string;
    latitude: number;
    longitude: number;
    address: string;
    foursquareId?: string;
    foursquareType?: string;
}
/** @unlisted */
export interface InlineQueryResultVideo extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "video";
    title: string;
    description?: string;
    /** @discriminator */
    url: string;
    mimeType: string;
    thumbnailUrl: string;
    width?: number;
    height?: number;
    videoDuration?: number;
}
/** @unlisted */
export interface InlineQueryResultVoice extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultMessageContentReplyMarkupCommon {
    /** @discriminator */
    type: "voice";
    title: string;
    /** @discriminator */
    url: string;
    voiceDuration?: number;
}
/** A single inline query result. */
export type InlineQueryResult = InlineQueryResultCachedAudio | InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedPhoto | InlineQueryResultCachedSticker | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultArticle | InlineQueryResultAudio | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultDocument | InlineQueryResultGif | InlineQueryResultLocation | InlineQueryResultMpeg4Gif | InlineQueryResultPhoto | InlineQueryResultVenue | InlineQueryResultVideo | InlineQueryResultVoice;
export declare function constructInlineQueryResult(result: types.BotInlineResult | types.BotInlineMediaResult): InlineQueryResult;
export declare function inlineQueryResultToTlObject(result_: InlineQueryResult, parseText: (text: string, params?: {
    parseMode?: ParseMode;
    entities?: MessageEntity[];
}) => Promise<readonly [string, any[] | undefined]>, usernameResolver: UsernameResolver): Promise<enums.InputBotInlineResult>;
//# sourceMappingURL=4_inline_query_result.d.ts.map