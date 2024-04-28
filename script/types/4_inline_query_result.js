"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.inlineQueryResultToTlObject = exports.constructInlineQueryResult = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _file_id_js_1 = require("./_file_id.js");
const _0_message_entity_js_1 = require("./0_message_entity.js");
const _1_photo_js_1 = require("./1_photo.js");
const _3_reply_markup_js_1 = require("./3_reply_markup.js");
const _0_thumbnail_js_1 = require("./0_thumbnail.js");
function constructInlineQueryResult(result) {
    const id = result.id, title = result.title ?? "", type = result.type, description = result.description;
    if (result.send_message instanceof _2_tl_js_1.types.BotInlineMessageMediaGeo) {
        const geoPoint = result.send_message.geo;
        return (0, _1_utilities_js_1.cleanObject)({
            type: "location",
            id,
            title,
            latitude: geoPoint.lat,
            longitude: geoPoint.long,
            horizontalAccuracy: geoPoint.accuracy_radius,
            livePeriod: result.send_message.period,
            heading: result.send_message.heading,
            proximityAlertRadius: result.send_message.proximity_notification_radius,
        });
    }
    else if (result.send_message instanceof _2_tl_js_1.types.BotInlineMessageMediaVenue) {
        const geoPoint = result.send_message.geo;
        return (0, _1_utilities_js_1.cleanObject)({
            type: "venue",
            id,
            title,
            latitude: geoPoint.lat,
            longitude: geoPoint.long,
            address: result.send_message.address,
            foursquareId: result.send_message.venue_id,
            foursquareType: result.send_message.venue_type,
        });
    }
    else if (result.send_message instanceof _2_tl_js_1.types.BotInlineMessageMediaWebPage || result.send_message instanceof _2_tl_js_1.types.BotInlineMessageText) {
        return (0, _1_utilities_js_1.cleanObject)({
            type: "article",
            id,
            title,
            description,
            messageContent: (0, _1_utilities_js_1.cleanObject)({
                messageText: result.send_message.message,
                entities: (result.send_message.entities ?? []).map(_0_message_entity_js_1.constructMessageEntity).filter((v) => v != null),
                linkPreview: result.send_message instanceof _2_tl_js_1.types.InputBotInlineMessageMediaWebPage ? { url: result.send_message.url, smallMedia: result.send_message.force_small_media, largeMedia: result.send_message.force_large_media, aboveText: result.send_message.invert_media } : undefined,
            }),
            replyMarkup: result.send_message.reply_markup ? (0, _3_reply_markup_js_1.constructReplyMarkup)(result.send_message.reply_markup) : undefined,
        });
    }
    else if (result.send_message instanceof _2_tl_js_1.types.BotInlineMessageMediaAuto) {
        let ref;
        let attributes;
        const thumbnailUrl = "thumb" in result ? result.thumb?.url : undefined;
        let photoSizes;
        let photo;
        if (result instanceof _2_tl_js_1.types.BotInlineMediaResult) {
            if (result.photo) {
                photo = result.photo[_2_tl_js_1.as](_2_tl_js_1.types.Photo);
                ref = { fileId: (0, _file_id_js_1.getPhotoFileId)(photo).fileId };
                const { largest } = photoSizes = (0, _1_photo_js_1.getPhotoSizes)(photo);
                attributes = [new _2_tl_js_1.types.DocumentAttributeImageSize({ w: largest.w, h: largest.h })];
            }
            else if (result.document) {
                const document = result.document[_2_tl_js_1.as](_2_tl_js_1.types.Document);
                ref = {
                    fileId: (0, _file_id_js_1.serializeFileId)({
                        type: _file_id_js_1.FileType.Document, // Should this be changed? The type is already known.
                        dcId: document.dc_id,
                        fileReference: document.file_reference,
                        location: { type: "common", id: document.id, accessHash: document.access_hash },
                    }),
                };
                attributes = document.attributes;
            }
            else {
                (0, _0_deps_js_1.unreachable)();
            }
        }
        else if (result.content) {
            ref = { url: result.content.url };
            attributes = result.content.attributes;
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
        const messageContent = result.send_message.message
            ? {
                messageText: result.send_message.message,
                entities: (result.send_message.entities ?? []).map(_0_message_entity_js_1.constructMessageEntity).filter((v) => v != null),
            }
            : undefined;
        const replyMarkup = result.send_message.reply_markup ? (0, _3_reply_markup_js_1.constructReplyMarkup)(result.send_message.reply_markup) : undefined;
        switch (type) {
            case "audio": {
                const a = attributes?.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeAudio);
                return (0, _1_utilities_js_1.cleanObject)({
                    id,
                    type,
                    title,
                    ...ref,
                    messageContent,
                    replyMarkup,
                    performer: a?.performer,
                    audioDuration: a?.duration,
                });
            }
            case "gif":
            case "mpeg4Gif": {
                const a = attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeVideo);
                return (0, _1_utilities_js_1.cleanObject)({
                    id,
                    type,
                    title,
                    ...ref,
                    messageContent,
                    replyMarkup,
                    thumbnailUrl,
                    width: a?.w,
                    height: a?.h,
                    duration: a?.duration,
                });
            }
            case "photo": {
                const a = attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeImageSize);
                return (0, _1_utilities_js_1.cleanObject)({
                    id,
                    type,
                    title,
                    description,
                    ...ref,
                    messageContent,
                    replyMarkup,
                    thumbnailUrl: thumbnailUrl,
                    thumbnails: photo ? photoSizes?.sizes.slice(0, -1).map((v) => (0, _0_thumbnail_js_1.constructThumbnail)(v, photo)) : undefined,
                    width: a?.w,
                    height: a?.h,
                });
            }
            case "video": {
                const a = attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeVideo);
                return (0, _1_utilities_js_1.cleanObject)({
                    id,
                    type,
                    title,
                    description,
                    ...ref,
                    messageContent,
                    replyMarkup,
                    mimeType: "content" in result && result.content ? result.content.mime_type : "video/mp4", // TODO
                    thumbnailUrl: thumbnailUrl,
                    width: a?.w,
                    height: a?.h,
                    videoDuration: a?.duration,
                });
            }
            case "voice": {
                const a = attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeAudio);
                return (0, _1_utilities_js_1.cleanObject)({
                    id,
                    type,
                    title,
                    ...ref,
                    messageContent,
                    replyMarkup,
                    thumbnailUrl,
                    voiceDuration: a?.duration,
                });
            }
            case "document":
            case "file": // Does it really return this?
                return (0, _1_utilities_js_1.cleanObject)({
                    type: "document",
                    id,
                    title: result.title ?? "",
                    ...ref,
                    messageContent,
                    replyMarkup,
                    thumbnailUrl,
                });
        }
    }
    (0, _0_deps_js_1.unreachable)();
}
exports.constructInlineQueryResult = constructInlineQueryResult;
// deno-lint-ignore no-explicit-any
async function inlineQueryResultToTlObject(result_, parseText, usernameResolver) {
    let document = null;
    let thumb = null;
    let fileId_ = null;
    switch (result_.type) {
        case "audio":
            if ("url" in result_) {
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.url,
                    size: 0,
                    mime_type: "audio/mpeg",
                    attributes: [
                        new _2_tl_js_1.types.DocumentAttributeAudio({
                            duration: result_.audioDuration ?? 0,
                            title: result_.title,
                            performer: result_.performer,
                        }),
                    ],
                });
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
        case "video":
            if ("url" in result_) {
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.url,
                    size: 0,
                    mime_type: result_.mimeType ?? "video/mp4",
                    attributes: [
                        new _2_tl_js_1.types.DocumentAttributeVideo({
                            duration: result_.videoDuration ?? 0,
                            h: result_.height ?? 0,
                            w: result_.width ?? 0,
                        }),
                    ],
                });
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
        case "document":
            if ("url" in result_) {
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.url,
                    mime_type: "application/octet-stream",
                    attributes: [],
                    size: 0,
                });
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
        case "gif":
            if ("url" in result_) {
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.url,
                    size: 0,
                    mime_type: "image/gif",
                    attributes: [
                        new _2_tl_js_1.types.DocumentAttributeVideo({
                            duration: result_.duration ?? 0,
                            w: result_.width ?? 0,
                            h: result_.height ?? 0,
                        }),
                    ],
                });
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
        case "mpeg4Gif":
            if ("url" in result_) {
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.url,
                    size: 0,
                    mime_type: "video/mp4",
                    attributes: [
                        new _2_tl_js_1.types.DocumentAttributeVideo({
                            nosound: true,
                            duration: result_.duration ?? 0,
                            w: result_.width ?? 0,
                            h: result_.height ?? 0,
                            supports_streaming: true,
                        }),
                    ],
                });
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
        case "photo":
            if ("url" in result_) {
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.url,
                    size: 0,
                    mime_type: "image/jpeg",
                    attributes: [new _2_tl_js_1.types.DocumentAttributeImageSize({ w: result_.width ?? 0, h: result_.height ?? 0 })],
                });
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
        case "sticker":
            fileId_ = result_.fileId;
            break;
        case "voice":
            if ("url" in result_) {
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.url,
                    size: 0,
                    mime_type: "audio/mpeg",
                    attributes: [
                        new _2_tl_js_1.types.DocumentAttributeAudio({
                            duration: result_.voiceDuration ?? 0,
                            voice: true,
                        }),
                    ],
                });
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
    }
    const replyMarkup = "replyMarkup" in result_ && result_.replyMarkup ? await (0, _3_reply_markup_js_1.replyMarkupToTlObject)(result_.replyMarkup, usernameResolver) : undefined;
    if ("thumbnailUrl" in result_ && result_.thumbnailUrl) {
        thumb = new _2_tl_js_1.types.InputWebDocument({
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
    const sendMessage = new _2_tl_js_1.types.InputBotInlineMessageMediaAuto({
        message,
        entities,
        reply_markup: replyMarkup,
    });
    const title = "title" in result_ ? result_.title : undefined;
    const description = "description" in result_ ? result_.description : undefined;
    if (document != null) {
        return new _2_tl_js_1.types.InputBotInlineResult({
            id,
            type,
            title,
            description,
            thumb: thumb == null ? undefined : thumb,
            content: document,
            send_message: new _2_tl_js_1.types.InputBotInlineMessageMediaAuto({
                message,
                entities,
                reply_markup: replyMarkup,
            }),
        });
    }
    else if (fileId_ != null) {
        const fileId = (0, _file_id_js_1.deserializeFileId)(fileId_);
        return new _2_tl_js_1.types.InputBotInlineResultDocument({
            id,
            type: type == "document" ? "file" : type,
            title,
            description,
            document: new _2_tl_js_1.types.InputDocument({
                id: "id" in fileId.location ? fileId.location.id : (0, _0_deps_js_1.unreachable)(), // TODO: Remove UNREACHABLE()?
                access_hash: fileId.location.accessHash,
                file_reference: fileId.fileReference ?? new Uint8Array(),
            }),
            send_message: sendMessage,
        });
    }
    else if (result_.type == "location") {
        return new _2_tl_js_1.types.InputBotInlineResult({
            id,
            type,
            title,
            description,
            thumb: thumb == null ? undefined : thumb,
            send_message: new _2_tl_js_1.types.InputBotInlineMessageMediaGeo({
                geo_point: new _2_tl_js_1.types.InputGeoPoint({
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
        return new _2_tl_js_1.types.InputBotInlineResult({
            id,
            type,
            title,
            description,
            thumb: thumb == null ? undefined : thumb,
            send_message: new _2_tl_js_1.types.InputBotInlineMessageGame({
                reply_markup: replyMarkup,
            }),
        });
    }
    else if (result_.type == "article") {
        if (!("messageText" in result_.messageContent)) {
            (0, _0_deps_js_1.unreachable)();
        }
        const [message, entities] = await parseText(result_.messageContent.messageText, { entities: result_.messageContent.entities, parseMode: result_.messageContent.parseMode });
        const noWebpage = result_.messageContent?.linkPreview?.disable ? true : undefined;
        const invertMedia = result_.messageContent?.linkPreview?.aboveText ? true : undefined;
        let sendMessage;
        if (result_.messageContent.linkPreview?.url) {
            sendMessage = new _2_tl_js_1.types.InputBotInlineMessageMediaWebPage({
                url: result_.messageContent.linkPreview.url,
                force_large_media: result_.messageContent.linkPreview.largeMedia ? true : undefined,
                force_small_media: result_.messageContent.linkPreview.smallMedia ? true : undefined,
                optional: message.length ? undefined : true,
                message,
                entities,
                invert_media: invertMedia,
                reply_markup: replyMarkup,
            });
        }
        else {
            sendMessage = new _2_tl_js_1.types.InputBotInlineMessageText({
                message,
                entities,
                no_webpage: noWebpage,
                invert_media: invertMedia,
                reply_markup: replyMarkup,
            });
        }
        return new _2_tl_js_1.types.InputBotInlineResult({
            id,
            type,
            title,
            description,
            thumb: thumb == null ? undefined : thumb,
            send_message: sendMessage,
        });
    }
    else if (result_.type == "venue") {
        if (!result_.foursquareId || !result_.foursquareType) {
            (0, _0_deps_js_1.unreachable)();
        }
        return new _2_tl_js_1.types.InputBotInlineResult({
            id,
            type,
            title,
            description,
            thumb: thumb == null ? undefined : thumb,
            send_message: new _2_tl_js_1.types.InputBotInlineMessageMediaVenue({
                geo_point: new _2_tl_js_1.types.InputGeoPoint({ long: result_.longitude, lat: result_.latitude }),
                address: result_.address,
                provider: "foursquare",
                title: result_.title,
                venue_id: result_.foursquareId,
                venue_type: result_.foursquareType,
                reply_markup: replyMarkup,
            }),
        });
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
exports.inlineQueryResultToTlObject = inlineQueryResultToTlObject;
