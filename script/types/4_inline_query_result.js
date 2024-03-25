"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inlineQueryResultToTlObject = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0__file_id_js_1 = require("./0__file_id.js");
const _3_reply_markup_js_1 = require("./3_reply_markup.js");
// deno-lint-ignore no-explicit-any
async function inlineQueryResultToTlObject(result_, parseText, usernameResolver) {
    let document = null;
    let thumb = null;
    let fileId_ = null;
    switch (result_.type) {
        case "audio":
            if ("audioUrl" in result_) {
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.audioUrl,
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
                fileId_ = result_.audioFileId;
            }
            break;
        case "video":
            if ("videoUrl" in result_) {
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.videoUrl,
                    size: 0,
                    mime_type: result_.mimeType ?? "video/mp4",
                    attributes: [
                        new _2_tl_js_1.types.DocumentAttributeVideo({
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
                document = new _2_tl_js_1.types.InputWebDocument({
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
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.gifUrl,
                    size: 0,
                    mime_type: "image/gif",
                    attributes: [
                        new _2_tl_js_1.types.DocumentAttributeVideo({
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
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.mpeg4Url,
                    size: 0,
                    mime_type: "video/mp4",
                    attributes: [
                        new _2_tl_js_1.types.DocumentAttributeVideo({
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
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.photoUrl,
                    size: 0,
                    mime_type: "image/jpeg",
                    attributes: [new _2_tl_js_1.types.DocumentAttributeImageSize({ w: result_.photoWidth ?? 0, h: result_.photoHeight ?? 0 })],
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
                document = new _2_tl_js_1.types.InputWebDocument({
                    url: result_.voiceUrl,
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
                fileId_ = result_.voiceFileId;
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
        const fileId = (0, _0__file_id_js_1.deserializeFileId)(fileId_);
        return new _2_tl_js_1.types.InputBotInlineResultDocument({
            id,
            type: type == "document" ? "file" : type,
            title,
            description,
            document: new _2_tl_js_1.types.InputDocument({
                id: "id" in fileId.location ? fileId.location.id : (0, _1_utilities_js_1.UNREACHABLE)(),
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
        if (!("messageText" in result_.inputMessageContent)) {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
        const [message, entities] = await parseText(result_.inputMessageContent.messageText, { entities: result_.inputMessageContent.entities, parseMode: result_.inputMessageContent.parseMode });
        const noWebpage = result_.inputMessageContent?.linkPreview?.disable ? true : undefined;
        const invertMedia = result_.inputMessageContent?.linkPreview?.aboveText ? true : undefined;
        let sendMessage;
        if (result_.inputMessageContent.linkPreview?.url) {
            sendMessage = new _2_tl_js_1.types.InputBotInlineMessageMediaWebPage({
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
        if (!result_.fourSquareId || !result_.foursquareType) {
            (0, _1_utilities_js_1.UNREACHABLE)();
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
                venue_id: result_.fourSquareId,
                venue_type: result_.foursquareType,
                reply_markup: replyMarkup,
            }),
        });
    }
    else {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.inlineQueryResultToTlObject = inlineQueryResultToTlObject;