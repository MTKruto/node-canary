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
import { unreachable } from "../0_deps.js";
import { types } from "../2_tl.js";
import { deserializeFileId } from "./_file_id.js";
import { replyMarkupToTlObject } from "./3_reply_markup.js";
// deno-lint-ignore no-explicit-any
export async function inlineQueryResultToTlObject(result_, parseText, usernameResolver) {
    let document = null;
    let thumb = null;
    let fileId_ = null;
    switch (result_.type) {
        case "audio":
            if ("audioUrl" in result_) {
                document = new types.InputWebDocument({
                    url: result_.audioUrl,
                    size: 0,
                    mime_type: "audio/mpeg",
                    attributes: [
                        new types.DocumentAttributeAudio({
                            duration: result_.audioDuration ?? 0,
                            title: result_.title,
                            performer: result_.performer,
                        }),
                    ],
                });
            }
            else {
                fileId_ = result_.audioFileId;
            }
            break;
        case "video":
            if ("videoUrl" in result_) {
                document = new types.InputWebDocument({
                    url: result_.videoUrl,
                    size: 0,
                    mime_type: result_.mimeType ?? "video/mp4",
                    attributes: [
                        new types.DocumentAttributeVideo({
                            duration: result_.videoDuration ?? 0,
                            h: result_.videoHeight ?? 0,
                            w: result_.videoWidth ?? 0,
                        }),
                    ],
                });
            }
            else {
                fileId_ = result_.videoFileId;
            }
            break;
        case "document":
            if ("documentUrl" in result_) {
                document = new types.InputWebDocument({
                    url: result_.documentUrl,
                    mime_type: "application/octet-stream",
                    attributes: [],
                    size: 0,
                });
            }
            else {
                fileId_ = result_.documentFileId;
            }
            break;
        case "gif":
            if ("gifUrl" in result_) {
                document = new types.InputWebDocument({
                    url: result_.gifUrl,
                    size: 0,
                    mime_type: "image/gif",
                    attributes: [
                        new types.DocumentAttributeVideo({
                            duration: result_.gifDuration ?? 0,
                            h: result_.gifHeight ?? 0,
                            w: result_.gifWidth ?? 0,
                        }),
                    ],
                });
            }
            else {
                fileId_ = result_.gifFileId;
            }
            break;
        case "mpeg4Gif":
            if ("mpeg4Url" in result_) {
                document = new types.InputWebDocument({
                    url: result_.mpeg4Url,
                    size: 0,
                    mime_type: "video/mp4",
                    attributes: [
                        new types.DocumentAttributeVideo({
                            nosound: true,
                            duration: result_.mpeg4Duration ?? 0,
                            w: result_.mpeg4Width ?? 0,
                            h: result_.mpeg4Height ?? 0,
                            supports_streaming: true,
                        }),
                    ],
                });
            }
            else {
                fileId_ = result_.mpeg4FileId;
            }
            break;
        case "photo":
            if ("photoUrl" in result_) {
                document = new types.InputWebDocument({
                    url: result_.photoUrl,
                    size: 0,
                    mime_type: "image/jpeg",
                    attributes: [new types.DocumentAttributeImageSize({ w: result_.photoWidth ?? 0, h: result_.photoHeight ?? 0 })],
                });
            }
            else {
                fileId_ = result_.photoFileId;
            }
            break;
        case "sticker":
            fileId_ = result_.stickerFileId;
            break;
        case "voice":
            if ("voiceUrl" in result_) {
                document = new types.InputWebDocument({
                    url: result_.voiceUrl,
                    size: 0,
                    mime_type: "audio/mpeg",
                    attributes: [
                        new types.DocumentAttributeAudio({
                            duration: result_.voiceDuration ?? 0,
                            voice: true,
                        }),
                    ],
                });
            }
            else {
                fileId_ = result_.voiceFileId;
            }
            break;
    }
    const replyMarkup = "replyMarkup" in result_ && result_.replyMarkup ? await replyMarkupToTlObject(result_.replyMarkup, usernameResolver) : undefined;
    if ("thumbnailUrl" in result_ && result_.thumbnailUrl) {
        thumb = new types.InputWebDocument({
            url: result_.thumbnailUrl,
            size: 0,
            mime_type: "image/jpeg",
            attributes: [],
        });
    }
    else if (result_.type == "photo") {
        thumb = document;
    }
    let ret = ["", []];
    if ("caption" in result_ && result_.caption) {
        ret = await parseText(result_.caption, { parseMode: result_.parseMode, entities: result_.captionEntities });
    }
    const { type, id } = result_;
    const [message, entities] = ret;
    const sendMessage = new types.InputBotInlineMessageMediaAuto({
        message,
        entities,
        reply_markup: replyMarkup,
    });
    const title = "title" in result_ ? result_.title : undefined;
    const description = "description" in result_ ? result_.description : undefined;
    if (document != null) {
        return new types.InputBotInlineResult({
            id,
            type,
            title,
            description,
            thumb: thumb == null ? undefined : thumb,
            content: document,
            send_message: new types.InputBotInlineMessageMediaAuto({
                message,
                entities,
                reply_markup: replyMarkup,
            }),
        });
    }
    else if (fileId_ != null) {
        const fileId = deserializeFileId(fileId_);
        return new types.InputBotInlineResultDocument({
            id,
            type: type == "document" ? "file" : type,
            title,
            description,
            document: new types.InputDocument({
                id: "id" in fileId.location ? fileId.location.id : unreachable(),
                access_hash: fileId.location.accessHash,
                file_reference: fileId.fileReference ?? new Uint8Array(),
            }),
            send_message: sendMessage,
        });
    }
    else if (result_.type == "location") {
        return new types.InputBotInlineResult({
            id,
            type,
            title,
            description,
            thumb: thumb == null ? undefined : thumb,
            send_message: new types.InputBotInlineMessageMediaGeo({
                geo_point: new types.InputGeoPoint({
                    lat: result_.latitude,
                    long: result_.longitude,
                    accuracy_radius: result_.horizontalAccuracy,
                }),
                heading: result_.heading,
                period: result_.livePeriod,
                proximity_notification_radius: result_.proximityAlertRadius,
                reply_markup: replyMarkup,
            }),
        });
    }
    else if (result_.type == "game") {
        return new types.InputBotInlineResult({
            id,
            type,
            title,
            description,
            thumb: thumb == null ? undefined : thumb,
            send_message: new types.InputBotInlineMessageGame({
                reply_markup: replyMarkup,
            }),
        });
    }
    else if (result_.type == "article") {
        if (!("messageText" in result_.inputMessageContent)) {
            unreachable();
        }
        const [message, entities] = await parseText(result_.inputMessageContent.messageText, { entities: result_.inputMessageContent.entities, parseMode: result_.inputMessageContent.parseMode });
        const noWebpage = result_.inputMessageContent?.linkPreview?.disable ? true : undefined;
        const invertMedia = result_.inputMessageContent?.linkPreview?.aboveText ? true : undefined;
        let sendMessage;
        if (result_.inputMessageContent.linkPreview?.url) {
            sendMessage = new types.InputBotInlineMessageMediaWebPage({
                url: result_.inputMessageContent.linkPreview.url,
                force_large_media: result_.inputMessageContent.linkPreview.largeMedia ? true : undefined,
                force_small_media: result_.inputMessageContent.linkPreview.smallMedia ? true : undefined,
                optional: message.length ? undefined : true,
                message,
                entities,
                invert_media: invertMedia,
                reply_markup: replyMarkup,
            });
        }
        else {
            sendMessage = new types.InputBotInlineMessageText({
                message,
                entities,
                no_webpage: noWebpage,
                invert_media: invertMedia,
                reply_markup: replyMarkup,
            });
        }
        return new types.InputBotInlineResult({
            id,
            type,
            title,
            description,
            thumb: thumb == null ? undefined : thumb,
            send_message: sendMessage,
        });
    }
    else if (result_.type == "venue") {
        if (!result_.fourSquareId || !result_.foursquareType) {
            unreachable();
        }
        return new types.InputBotInlineResult({
            id,
            type,
            title,
            description,
            thumb: thumb == null ? undefined : thumb,
            send_message: new types.InputBotInlineMessageMediaVenue({
                geo_point: new types.InputGeoPoint({ long: result_.longitude, lat: result_.latitude }),
                address: result_.address,
                provider: "foursquare",
                title: result_.title,
                venue_id: result_.fourSquareId,
                venue_type: result_.foursquareType,
                reply_markup: replyMarkup,
            }),
        });
    }
    else {
        unreachable();
    }
}
