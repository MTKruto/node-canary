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
import { unreachable } from "../0_deps.js";
import { cleanObject } from "../1_utilities.js";
import { as, is } from "../2_tl.js";
import { deserializeFileId, FileType, getPhotoFileId, serializeFileId } from "./_file_id.js";
import { constructMessageEntity } from "./0_message_entity.js";
import { constructThumbnail } from "./0_thumbnail.js";
import { getPhotoSizes } from "./1_photo.js";
import { constructReplyMarkup, replyMarkupToTlObject } from "./3_reply_markup.js";
export function constructInlineQueryResult(result) {
    const id = result.id, title = result.title ?? "", type = result.type, description = result.description;
    if (is("botInlineMessageMediaGeo", result.send_message)) {
        const geoPoint = result.send_message.geo;
        return cleanObject({
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
    else if (is("botInlineMessageMediaVenue", result.send_message)) {
        const geoPoint = result.send_message.geo;
        return cleanObject({
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
    else if (is("botInlineMessageMediaWebPage", result.send_message) || is("botInlineMessageText", result.send_message)) {
        return cleanObject({
            type: "article",
            id,
            title,
            description,
            messageContent: cleanObject({
                type: "text",
                text: result.send_message.message,
                entities: (result.send_message.entities ?? []).map(constructMessageEntity).filter((v) => v != null),
                linkPreview: is("botInlineMessageMediaWebPage", result.send_message) ? { url: result.send_message.url, smallMedia: result.send_message.force_small_media, largeMedia: result.send_message.force_large_media, aboveText: result.send_message.invert_media } : undefined,
            }),
            replyMarkup: result.send_message.reply_markup ? constructReplyMarkup(result.send_message.reply_markup) : undefined,
        });
    }
    else if (is("botInlineMessageMediaAuto", result.send_message)) {
        let ref;
        let attributes;
        const thumbnailUrl = "thumb" in result ? result.thumb?.url : undefined;
        let photoSizes;
        let photo;
        if (is("botInlineMediaResult", result)) {
            if (result.photo) {
                photo = as("photo", result.photo);
                ref = { fileId: getPhotoFileId(photo).fileId };
                const { largest } = photoSizes = getPhotoSizes(photo);
                attributes = [{ _: "documentAttributeImageSize", w: largest.w, h: largest.h }];
            }
            else if (result.document) {
                const document = as("document", result.document);
                ref = {
                    fileId: serializeFileId({
                        type: FileType.Document, // Should this be changed? The type is already known.
                        dcId: document.dc_id,
                        fileReference: document.file_reference,
                        location: { type: "common", id: document.id, accessHash: document.access_hash },
                    }),
                };
                attributes = document.attributes;
            }
            else {
                unreachable();
            }
        }
        else if (result.content) {
            ref = { url: result.content.url };
            attributes = result.content.attributes;
        }
        else {
            unreachable();
        }
        const messageContent = result.send_message.message
            ? {
                type: "text",
                text: result.send_message.message,
                entities: (result.send_message.entities ?? []).map(constructMessageEntity).filter((v) => v != null),
            }
            : undefined;
        const replyMarkup = result.send_message.reply_markup ? constructReplyMarkup(result.send_message.reply_markup) : undefined;
        switch (type) {
            case "audio": {
                const a = attributes?.find((v) => is("documentAttributeAudio", v));
                return cleanObject({
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
                const a = attributes.find((v) => is("documentAttributeVideo", v));
                return cleanObject({
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
                const a = attributes.find((v) => is("documentAttributeImageSize", v));
                return cleanObject({
                    id,
                    type,
                    title,
                    description,
                    ...ref,
                    messageContent,
                    replyMarkup,
                    thumbnailUrl: thumbnailUrl,
                    thumbnails: photo ? photoSizes?.sizes.slice(0, -1).map((v) => constructThumbnail(v, photo)) : undefined,
                    width: a?.w,
                    height: a?.h,
                });
            }
            case "video": {
                const a = attributes.find((v) => is("documentAttributeVideo", v));
                return cleanObject({
                    id,
                    type,
                    title,
                    description,
                    ...ref,
                    messageContent,
                    replyMarkup,
                    mimeType: "content" in result && result.content ? result.content.mime_type : "video/mp4",
                    thumbnailUrl: thumbnailUrl,
                    width: a?.w,
                    height: a?.h,
                    videoDuration: a?.duration,
                });
            }
            case "voice": {
                const a = attributes.find((v) => is("documentAttributeAudio", v));
                return cleanObject({
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
                return cleanObject({
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
    unreachable();
}
// deno-lint-ignore no-explicit-any
export async function inlineQueryResultToTlObject(result_, parseText, usernameResolver) {
    let document = null;
    let thumb = null;
    let fileId_ = null;
    switch (result_.type) {
        case "audio":
            if ("url" in result_) {
                document = {
                    _: "inputWebDocument",
                    url: result_.url,
                    size: 0,
                    mime_type: "audio/mpeg",
                    attributes: [
                        { _: "documentAttributeAudio", duration: result_.audioDuration ?? 0, title: result_.title, performer: result_.performer },
                    ],
                };
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
        case "video":
            if ("url" in result_) {
                document = {
                    _: "inputWebDocument",
                    url: result_.url,
                    size: 0,
                    mime_type: result_.mimeType ?? "video/mp4",
                    attributes: [
                        { _: "documentAttributeVideo", duration: result_.videoDuration ?? 0, h: result_.height ?? 0, w: result_.width ?? 0 },
                    ],
                };
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
        case "document":
            if ("url" in result_) {
                document = { _: "inputWebDocument", url: result_.url, mime_type: "application/octet-stream", attributes: [], size: 0 };
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
        case "gif":
            if ("url" in result_) {
                document = {
                    _: "inputWebDocument",
                    url: result_.url,
                    size: 0,
                    mime_type: "image/gif",
                    attributes: [
                        { _: "documentAttributeVideo", duration: result_.duration ?? 0, w: result_.width ?? 0, h: result_.height ?? 0 },
                    ],
                };
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
        case "mpeg4Gif":
            if ("url" in result_) {
                document = {
                    _: "inputWebDocument",
                    url: result_.url,
                    size: 0,
                    mime_type: "video/mp4",
                    attributes: [
                        { _: "documentAttributeVideo", nosound: true, duration: result_.duration ?? 0, w: result_.width ?? 0, h: result_.height ?? 0, supports_streaming: true },
                    ],
                };
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
        case "photo":
            if ("url" in result_) {
                document = { _: "inputWebDocument", url: result_.url, size: 0, mime_type: "image/jpeg", attributes: [{ _: "documentAttributeImageSize", w: result_.width ?? 0, h: result_.height ?? 0 }] };
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
                document = {
                    _: "inputWebDocument",
                    url: result_.url,
                    size: 0,
                    mime_type: "audio/mpeg",
                    attributes: [
                        { _: "documentAttributeAudio", duration: result_.voiceDuration ?? 0, voice: true },
                    ],
                };
            }
            else {
                fileId_ = result_.fileId;
            }
            break;
    }
    const replyMarkup = "replyMarkup" in result_ && result_.replyMarkup ? await replyMarkupToTlObject(result_.replyMarkup, usernameResolver) : undefined;
    if ("thumbnailUrl" in result_ && result_.thumbnailUrl) {
        thumb = { _: "inputWebDocument", url: result_.thumbnailUrl, size: 0, mime_type: "image/jpeg", attributes: [] };
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
    const sendMessage = { _: "inputBotInlineMessageMediaAuto", message, entities, reply_markup: replyMarkup };
    const title = "title" in result_ ? result_.title : undefined;
    const description = "description" in result_ ? result_.description : undefined;
    if (document != null) {
        return { _: "inputBotInlineResult", id, type, title, description, thumb: thumb == null ? undefined : thumb, content: document, send_message: ({ _: "inputBotInlineMessageMediaAuto", message, entities, reply_markup: replyMarkup }) };
    }
    else if (fileId_ != null) {
        const fileId = deserializeFileId(fileId_);
        return {
            _: "inputBotInlineResultDocument",
            id,
            type: type == "document" ? "file" : type,
            title,
            description,
            document: ({
                _: "inputDocument",
                id: "id" in fileId.location ? fileId.location.id : unreachable(),
                access_hash: fileId.location.accessHash,
                file_reference: fileId.fileReference ?? new Uint8Array(),
            }),
            send_message: sendMessage,
        };
    }
    else if (result_.type == "location") {
        return { _: "inputBotInlineResult", id, type, title, description, thumb: thumb == null ? undefined : thumb, send_message: ({ _: "inputBotInlineMessageMediaGeo", geo_point: ({ _: "inputGeoPoint", lat: result_.latitude, long: result_.longitude, accuracy_radius: result_.horizontalAccuracy }), heading: result_.heading, period: result_.livePeriod, proximity_notification_radius: result_.proximityAlertRadius, reply_markup: replyMarkup }) };
    }
    else if (result_.type == "game") {
        return { _: "inputBotInlineResult", id, type, title, description, thumb: thumb == null ? undefined : thumb, send_message: ({ _: "inputBotInlineMessageGame", reply_markup: replyMarkup }) };
    }
    else if (result_.type == "article") {
        if (!("text" in result_.messageContent)) {
            unreachable();
        }
        const [message, entities] = await parseText(result_.messageContent.text, { entities: result_.messageContent.entities, parseMode: result_.messageContent.parseMode });
        const noWebpage = result_.messageContent?.linkPreview?.disable ? true : undefined;
        const invertMedia = result_.messageContent?.linkPreview?.aboveText ? true : undefined;
        let sendMessage;
        if (result_.messageContent.linkPreview?.url) {
            sendMessage = { _: "inputBotInlineMessageMediaWebPage", url: result_.messageContent.linkPreview.url, force_large_media: result_.messageContent.linkPreview.largeMedia ? true : undefined, force_small_media: result_.messageContent.linkPreview.smallMedia ? true : undefined, optional: message.length ? undefined : true, message, entities, invert_media: invertMedia, reply_markup: replyMarkup };
        }
        else {
            sendMessage = { _: "inputBotInlineMessageText", message, entities, no_webpage: noWebpage, invert_media: invertMedia, reply_markup: replyMarkup };
        }
        return { _: "inputBotInlineResult", id, type, title, description, thumb: thumb == null ? undefined : thumb, send_message: sendMessage };
    }
    else if (result_.type == "venue") {
        if (!result_.foursquareId || !result_.foursquareType) {
            unreachable();
        }
        return { _: "inputBotInlineResult", id, type, title, description, thumb: thumb == null ? undefined : thumb, send_message: ({ _: "inputBotInlineMessageMediaVenue", geo_point: ({ _: "inputGeoPoint", long: result_.longitude, lat: result_.latitude }), address: result_.address, provider: "foursquare", title: result_.title, venue_id: result_.foursquareId, venue_type: result_.foursquareType, reply_markup: replyMarkup }) };
    }
    else {
        unreachable();
    }
}
