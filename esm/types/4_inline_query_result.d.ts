import { enums } from "../2_tl.js";
import { UsernameResolver } from "./_getters.js";
import { MessageEntity } from "./0_message_entity.js";
import { ParseMode } from "./0_parse_mode.js";
import { InputMessageContent } from "./1_input_message_content.js";
import { ReplyMarkupInlineKeyboard } from "./3_reply_markup.js";
/** @unlisted */
type InlineQueryResultType = "article" | "audio" | "document" | "gif" | "mpeg4Gif" | "photo" | "sticker" | "video" | "voice" | "game" | "location" | "venue";
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
export interface _InlineQueryResultInputMessageContentReplyMarkupCommon {
    inputMessageContent?: InputMessageContent;
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
    type: "article";
    title: string;
    inputMessageContent: InputMessageContent;
    description?: string;
    replyMarkup?: ReplyMarkupInlineKeyboard;
    url?: string;
    hideUrl?: boolean;
}
/** @unlisted */
export interface InlineQueryResultAudio extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "audio";
    title: string;
    audioUrl: string;
    performer?: string;
    audioDuration?: number;
}
/** @unlisted */
export interface InlineQueryResultCachedAudio extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "audio";
    audioFileId: string;
}
/** @unlisted */
export interface InlineQueryResultCachedDocument extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "document";
    documentFileId: string;
    description?: string;
}
/** @unlisted */
export interface InlineQueryResultCachedGif extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "gif";
    gifFileId: string;
    title?: string;
}
/** @unlisted */
export interface InlineQueryResultCachedMpeg4Gif extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "mpeg4Gif";
    mpeg4FileId: string;
    title?: string;
}
/** @unlisted */
export interface InlineQueryResultCachedPhoto extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "photo";
    photoFileId: string;
    title?: string;
    description?: string;
}
/** @unlisted */
export interface InlineQueryResultCachedSticker extends _InlineQueryResultBase, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "sticker";
    stickerFileId: string;
}
/** @unlisted */
export interface InlineQueryResultCachedVideo extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "video";
    title: string;
    videoFileId: string;
    description?: string;
}
/** @unlisted */
export interface InlineQueryResultCachedVoice extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "voice";
    title: string;
    voiceFileId: string;
}
/** @unlisted */
export interface InlineQueryResultContact extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon, _InlineQueryResultThumbnailCommon {
    type: "game";
    phoneNumber: string;
    firstName: string;
    lastName?: string;
    vcard?: string;
}
/** @unlisted */
export interface InlineQueryResultDocument extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon, _InlineQueryResultThumbnailCommon {
    type: "document";
    title: string;
    documentUrl: string;
}
/** @unlisted */
export interface InlineQueryResultGame extends _InlineQueryResultBase {
    type: "game";
    gameShortName: string;
    replyMarkup?: ReplyMarkupInlineKeyboard;
}
/** @unlisted */
export interface InlineQueryResultGif extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "gif";
    title?: string;
    gifUrl: string;
    gifWidth?: number;
    gifHeight?: number;
    gifDuration?: number;
    thumbnailUrl?: string;
    thumbnailMimeType?: string;
}
/** @unlisted */
export interface InlineQueryResultLocation extends _InlineQueryResultBase, _InlineQueryResultInputMessageContentReplyMarkupCommon, _InlineQueryResultThumbnailCommon {
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
export interface InlineQueryResultMpeg4Gif extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "mpeg4Gif";
    mpeg4Url: string;
    title?: string;
    mpeg4Width?: number;
    mpeg4Height?: number;
    mpeg4Duration?: number;
    thumbnailUrl?: string;
    thumbnailMimeType?: string;
}
/** @unlisted */
export interface InlineQueryResultPhoto extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "photo";
    photoUrl: string;
    thumbnailUrl: string;
    title?: string;
    description?: string;
    photoWidth?: number;
    photoHeight?: number;
}
/** @unlisted */
export interface InlineQueryResultVenue extends _InlineQueryResultBase, _InlineQueryResultInputMessageContentReplyMarkupCommon, _InlineQueryResultThumbnailCommon {
    type: "venue";
    title: string;
    latitude: number;
    longitude: number;
    address: string;
    fourSquareId?: string;
    foursquareType?: string;
}
/** @unlisted */
export interface InlineQueryResultVideo extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "video";
    title: string;
    description?: string;
    videoUrl: string;
    mimeType: string;
    thumbnailUrl: string;
    videoWidth?: number;
    videoHeight?: number;
    videoDuration?: number;
}
/** @unlisted */
export interface InlineQueryResultVoice extends _InlineQueryResultBase, _InlineQueryResultCaptionCommon, _InlineQueryResultInputMessageContentReplyMarkupCommon {
    type: "voice";
    title: string;
    voiceUrl: string;
    voiceDuration?: number;
}
/** A single inline query result. */
export type InlineQueryResult = InlineQueryResultCachedAudio | InlineQueryResultCachedDocument | InlineQueryResultCachedGif | InlineQueryResultCachedMpeg4Gif | InlineQueryResultCachedPhoto | InlineQueryResultCachedSticker | InlineQueryResultCachedVideo | InlineQueryResultCachedVoice | InlineQueryResultArticle | InlineQueryResultAudio | InlineQueryResultContact | InlineQueryResultGame | InlineQueryResultDocument | InlineQueryResultGif | InlineQueryResultLocation | InlineQueryResultMpeg4Gif | InlineQueryResultPhoto | InlineQueryResultVenue | InlineQueryResultVideo | InlineQueryResultVoice;
export declare function inlineQueryResultToTlObject(result_: InlineQueryResult, parseText: (text: string, params?: {
    parseMode?: ParseMode;
    entities?: MessageEntity[];
}) => Promise<readonly [string, any[] | undefined]>, usernameResolver: UsernameResolver): Promise<enums.InputBotInlineResult>;
export {};
