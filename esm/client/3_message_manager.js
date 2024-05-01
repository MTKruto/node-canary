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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MessageManager_instances, _MessageManager_c, _MessageManager_LresolveFileId, _MessageManager_updatesToMessages, _MessageManager_constructReplyMarkup, _MessageManager_resolveSendAs, _MessageManager_constructReplyTo, _MessageManager_sendDocumentInner, _MessageManager_sendMedia, _MessageManager_resolveInputMediaInner, _MessageManager_resolveInputMedia, _MessageManager_sendReaction, _MessageManager_toggleJoinRequests;
import { contentType, unreachable } from "../0_deps.js";
import { InputError } from "../0_errors.js";
import { getLogger, getRandomId, toUnixTimestamp } from "../1_utilities.js";
import { as, functions, getChannelChatId, peerToChatId, types } from "../2_tl.js";
import { constructChatMemberUpdated, constructInviteLink, deserializeFileId, selfDestructOptionToInt } from "../3_types.js";
import { assertMessageType, chatMemberRightsToTlObject, constructChatMember, constructMessage as constructMessage_, deserializeInlineMessageId, FileType, messageEntityToTlObject, reactionEqual, reactionToTlObject, replyMarkupToTlObject } from "../3_types.js";
import { messageSearchFilterToTlObject } from "../types/0_message_search_filter.js";
import { parseHtml } from "./0_html.js";
import { parseMarkdown } from "./0_markdown.js";
import { checkMessageId } from "./0_utilities.js";
import { checkArray } from "./0_utilities.js";
import { isHttpUrl } from "./0_utilities.js";
const FALLBACK_MIME_TYPE = "application/octet-stream";
const STICKER_MIME_TYPES = ["image/webp", "video/webm", "application/x-tgsticker"];
export class MessageManager {
    constructor(c) {
        _MessageManager_instances.add(this);
        _MessageManager_c.set(this, void 0);
        _MessageManager_LresolveFileId.set(this, void 0);
        Object.defineProperty(this, "usernameResolver", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (v) => {
                const inputPeer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(v).then((v) => v[as](types.InputPeerUser));
                return new types.InputUser(inputPeer);
            }
        });
        __classPrivateFieldSet(this, _MessageManager_c, c, "f");
        const L = getLogger("MessageManager").client(c.id);
        __classPrivateFieldSet(this, _MessageManager_LresolveFileId, L.branch("resolveFileId"), "f");
    }
    async getMessages(chatId, messageIds) {
        checkArray(messageIds, checkMessageId);
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        let messages_ = new Array();
        const chatId_ = peerToChatId(peer);
        let shouldFetch = false;
        for (const messageId of messageIds) {
            const message = await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.getMessage(chatId_, messageId);
            if (message == null) {
                messages_ = [];
                shouldFetch = true;
                break;
            }
            else {
                messages_.push(message);
            }
        }
        if (shouldFetch) {
            if (peer instanceof types.InputPeerChannel) {
                messages_ = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.getMessages({
                    channel: new types.InputChannel(peer),
                    id: messageIds.map((v) => new types.InputMessageID({ id: v })),
                }).then((v) => v[as](types.messages.ChannelMessages).messages);
            }
            else {
                messages_ = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.getMessages({
                    id: messageIds.map((v) => new types.InputMessageID({ id: v })),
                }).then((v) => v[as](types.messages.Messages).messages);
            }
        }
        const messages = new Array();
        for (const message_ of messages_) {
            if (message_ instanceof types.MessageEmpty) {
                continue;
            }
            const message = await this.constructMessage(message_);
            messages.push(message);
        }
        return messages;
    }
    async getMessageWithReply(chatId, messageId) {
        const message = await this.getMessage(chatId, messageId);
        if (message != null && message.replyToMessageId) {
            message.replyToMessage = await this.getMessage(chatId, message.replyToMessageId) ?? undefined;
        }
        return message;
    }
    async getMessage(chatId, messageId) {
        const messages = await this.getMessages(chatId, [messageId]);
        return messages[0] ?? null;
    }
    static parseText(text, entities, parseMode) {
        switch (parseMode) {
            case null:
                break;
            case "HTML": {
                const [newText, entitiesToPush] = parseHtml(text);
                text = newText;
                for (const entity of entitiesToPush) {
                    entities.push(entity);
                }
                break;
            }
            case "Markdown": {
                const [newText, entitiesToPush] = parseMarkdown(text);
                text = newText;
                for (const entity of entitiesToPush) {
                    entities.push(entity);
                }
                break;
            }
            default:
                unreachable();
        }
        text = text.trimEnd();
        for (const entity of entities) {
            while (text[entity.offset + (entity.length - 1)] === undefined) {
                --entity.length;
            }
        }
        if (!text.length) {
            throw new InputError("Text must not be empty.");
        }
        return [text, entities];
    }
    async parseText(text_, params) {
        const [text, entities_] = MessageManager.parseText(text_, params?.entities ?? [], params?.parseMode ?? __classPrivateFieldGet(this, _MessageManager_c, "f").parseMode);
        const entities = entities_?.length > 0 ? await Promise.all(entities_.map((v) => messageEntityToTlObject(v, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity))) : undefined;
        return [text, entities];
    }
    async constructMessage(message_, r, business) {
        return await constructMessage_(message_, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity, this.getMessage.bind(this), __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.getStickerSetName.bind(__classPrivateFieldGet(this, _MessageManager_c, "f").fileManager), r, business);
    }
    async forwardMessages(from, to, messageIds, params) {
        checkArray(messageIds, checkMessageId);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.forwardMessages({
            from_peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(from),
            to_peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(to),
            id: messageIds,
            random_id: messageIds.map(() => getRandomId()),
            silent: params?.disableNotification || undefined,
            top_msg_id: params?.messageThreadId,
            noforwards: params?.disableNotification || undefined,
            send_as: params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined,
            drop_author: params?.dropSenderName || undefined,
            drop_media_captions: params?.dropCaption || undefined,
        });
        return await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, to, result);
    }
    async getHistory(chatId, params) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("getHistory");
        let limit = params?.limit ?? 100;
        if (limit <= 0) {
            limit = 1;
        }
        else if (limit > 100) {
            limit = 100;
        }
        let offsetId = params?.after?.id ?? 0;
        if (offsetId < 0) {
            offsetId = 0;
        }
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const messages = new Array();
        if (messages.length > 0) {
            offsetId = messages[messages.length - 1].id; // TODO: track id of oldest message and don't send requests for it
        }
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.getHistory({
            peer: peer,
            offset_id: offsetId,
            offset_date: 0,
            add_offset: 0,
            limit,
            max_id: 0,
            min_id: 0,
            hash: 0n,
        });
        if (!("messages" in result)) {
            unreachable();
        }
        for (const message_ of result.messages) {
            const message = await this.constructMessage(message_, false);
            messages.push(message);
        }
        return messages;
    }
    async sendMessage(chatId, text, params) {
        const [message, entities] = await this.parseText(text, params);
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = getRandomId();
        const noWebpage = params?.linkPreview?.disable ? true : undefined;
        const invertMedia = params?.linkPreview?.aboveText ? true : undefined;
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveSendAs).call(this, params);
        let result;
        if (!noWebpage && params?.linkPreview?.url) {
            result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new functions.messages.sendMedia({
                peer,
                random_id: randomId,
                media: new types.InputMediaWebPage({
                    url: params.linkPreview.url,
                    force_large_media: params.linkPreview.largeMedia ? true : undefined,
                    force_small_media: params.linkPreview.smallMedia ? true : undefined,
                    optional: message.length ? undefined : true,
                }),
                message,
                invert_media: invertMedia,
                silent,
                noforwards,
                reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
                send_as: sendAs,
                entities,
                reply_markup: replyMarkup,
            }), params?.businessConnectionId);
        }
        else {
            result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new functions.messages.sendMessage({
                peer,
                random_id: randomId,
                message,
                no_webpage: noWebpage,
                invert_media: invertMedia,
                silent,
                noforwards,
                reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
                send_as: sendAs,
                entities,
                reply_markup: replyMarkup,
            }), params?.businessConnectionId);
        }
        const message_ = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result, params?.businessConnectionId).then((v) => v[0]);
        return assertMessageType(message_, "text");
    }
    async sendVenue(chatId, latitude, longitude, title, address, params) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = getRandomId();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new functions.messages.sendMedia({
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            reply_markup: replyMarkup,
            media: new types.InputMediaVenue({
                geo_point: new types.InputGeoPoint({
                    lat: latitude,
                    long: longitude,
                }),
                title,
                address,
                venue_id: params?.foursquareId ?? "",
                venue_type: params?.foursquareType ?? "",
                provider: "foursquare",
            }),
            message: "",
        }), params?.businessConnectionId);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result, params?.businessConnectionId).then((v) => v[0]);
        return assertMessageType(message, "venue");
    }
    async sendContact(chatId, firstName, number, params) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = getRandomId();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new functions.messages.sendMedia({
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            reply_markup: replyMarkup,
            media: new types.InputMediaContact({
                phone_number: number,
                first_name: firstName,
                last_name: params?.lastName ?? "",
                vcard: params?.vcard ?? "",
            }),
            message: "",
        }), params?.businessConnectionId);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result, params?.businessConnectionId).then((v) => v[0]);
        return assertMessageType(message, "contact");
    }
    async sendDice(chatId, params) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = getRandomId();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new functions.messages.sendMedia({
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            reply_markup: replyMarkup,
            media: new types.InputMediaDice({
                emoticon: params?.emoji ?? "🎲",
            }),
            message: "",
        }), params?.businessConnectionId);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result, params?.businessConnectionId).then((v) => v[0]);
        return assertMessageType(message, "dice");
    }
    async sendLocation(chatId, latitude, longitude, params) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = getRandomId();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new functions.messages.sendMedia({
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            reply_markup: replyMarkup,
            media: params?.livePeriod !== undefined
                ? new types.InputMediaGeoLive({
                    geo_point: new types.InputGeoPoint({
                        lat: latitude,
                        long: longitude,
                        accuracy_radius: params?.horizontalAccuracy,
                    }),
                    heading: params?.heading,
                    period: params.livePeriod,
                    proximity_notification_radius: params?.proximityAlertRadius,
                })
                : new types.InputMediaGeoPoint({
                    geo_point: new types.InputGeoPoint({
                        lat: latitude,
                        long: longitude,
                        accuracy_radius: params?.horizontalAccuracy,
                    }),
                }),
            message: "",
        }), params?.businessConnectionId);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result, params?.businessConnectionId).then((v) => v[0]);
        return assertMessageType(message, "location");
    }
    async sendVideoNote(chatId, audio, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, audio, params, FileType.VideoNote, [
            new types.DocumentAttributeVideo({
                round_message: true,
                w: params?.length ?? 0,
                h: params?.length ?? 0,
                duration: params?.duration ?? 0,
            }),
        ], false);
        return assertMessageType(message, "videoNote");
    }
    async sendAudio(chatId, audio, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, audio, params, FileType.Audio, [
            new types.DocumentAttributeAudio({
                duration: params?.duration ?? 0,
                performer: params?.performer,
                title: params?.title,
            }),
        ]);
        return assertMessageType(message, "audio");
    }
    async sendVoice(chatId, voice, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, voice, params, FileType.VoiceNote, [
            new types.DocumentAttributeAudio({
                voice: true,
                duration: params?.duration ?? 0,
            }),
        ]);
        return assertMessageType(message, "voice");
    }
    async sendAnimation(chatId, animation, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, animation, params, FileType.Animation, [
            new types.DocumentAttributeAnimated(),
            new types.DocumentAttributeVideo({
                supports_streaming: true,
                w: params?.width ?? 0,
                h: params?.height ?? 0,
                duration: params?.duration ?? 0,
            }),
        ]);
        return assertMessageType(message, "animation");
    }
    async sendVideo(chatId, video, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, video, params, FileType.Video, [
            new types.DocumentAttributeVideo({
                supports_streaming: params?.supportsStreaming ? true : undefined,
                w: params?.width ?? 0,
                h: params?.height ?? 0,
                duration: params?.duration ?? 0,
            }),
        ]);
        return assertMessageType(message, "video");
    }
    async sendDocument(chatId, document, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, document, params, FileType.Document, []);
        return assertMessageType(message, "document");
    }
    async sendSticker(chatId, sticker, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, sticker, params, FileType.Sticker, [new types.DocumentAttributeSticker({ alt: params?.emoji || "", stickerset: new types.InputStickerSetEmpty() })], undefined, STICKER_MIME_TYPES);
        return assertMessageType(message, "sticker");
    }
    async sendPhoto(chatId, photo, params) {
        let media = null;
        const spoiler = params?.hasSpoiler ? true : undefined;
        const ttl_seconds = params && "selfDestruct" in params && params.selfDestruct !== undefined ? selfDestructOptionToInt(params.selfDestruct) : undefined;
        if (typeof photo === "string") {
            const fileId = this.resolveFileId(photo, [FileType.Photo, FileType.ProfilePhoto]);
            if (fileId != null) {
                media = new types.InputMediaPhoto({
                    id: new types.InputPhoto(fileId),
                    spoiler,
                    ttl_seconds,
                });
            }
        }
        if (media == null) {
            if (typeof photo === "string" && isHttpUrl(photo)) {
                media = new types.InputMediaPhotoExternal({
                    url: photo,
                    spoiler,
                    ttl_seconds: (params && "selfDestruct" in params && params.selfDestruct !== undefined) ? selfDestructOptionToInt(params.selfDestruct) : undefined,
                });
            }
            else {
                const file = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(photo, params, null, false);
                media = new types.InputMediaUploadedPhoto({
                    file,
                    spoiler,
                    ttl_seconds: (params && "selfDestruct" in params && params.selfDestruct !== undefined) ? selfDestructOptionToInt(params.selfDestruct) : undefined,
                });
            }
        }
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendMedia).call(this, chatId, media, params);
        return assertMessageType(message, "photo");
    }
    resolveFileId(maybeFileId, expectedFileType) {
        expectedFileType = Array.isArray(expectedFileType) ? expectedFileType : [expectedFileType];
        let fileId = null;
        try {
            fileId = deserializeFileId(maybeFileId);
        }
        catch (err) {
            __classPrivateFieldGet(this, _MessageManager_LresolveFileId, "f").warning(err);
        }
        if (fileId != null) {
            if (!expectedFileType.includes(fileId.type)) {
                unreachable();
            }
            return {
                id: "id" in fileId.location ? fileId.location.id : unreachable(),
                access_hash: fileId.location.accessHash,
                file_reference: fileId.fileReference ?? new Uint8Array(),
            };
        }
        return null;
    }
    async sendPoll(chatId, question, options, params) {
        question = question?.trim();
        if (!question) {
            throw new Error("Question must not be empty.");
        }
        if (!Array.isArray(options) || options.length < 2) {
            throw new Error("There must be at least two options.");
        }
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = getRandomId();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const explanation = params?.explanation;
        const parseResult = explanation !== undefined ? await this.parseText(explanation, { parseMode: params?.explanationParseMode, entities: params?.explanationEntities }) : undefined;
        const solution = parseResult === undefined ? undefined : parseResult[0];
        const solutionEntities = parseResult === undefined ? undefined : parseResult[1];
        const answers = options.map((v, i) => new types.PollAnswer({ option: new Uint8Array([i]), text: v }));
        const poll = new types.Poll({
            id: getRandomId(),
            answers,
            question,
            closed: params?.isClosed ? true : undefined,
            close_date: params?.closeDate ? toUnixTimestamp(params.closeDate) : undefined,
            close_period: params?.openPeriod ? params.openPeriod : undefined,
            multiple_choice: params?.allowMultipleAnswers ? true : undefined,
            public_voters: params?.isAnonymous === false ? true : undefined,
            quiz: params?.type == "quiz" ? true : undefined,
        });
        const media = new types.InputMediaPoll({
            poll,
            correct_answers: params?.correctOptionIndex ? [new Uint8Array([params.correctOptionIndex])] : undefined,
            solution,
            solution_entities: solutionEntities,
        });
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new functions.messages.sendMedia({
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_markup: replyMarkup,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            media,
            message: "",
        }), params?.businessConnectionId);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result, params?.businessConnectionId).then((v) => v[0]);
        return assertMessageType(message, "poll");
    }
    async editMessageReplyMarkup(chatId, messageId, params) {
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editMessage({
            id: checkMessageId(messageId),
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        });
        const message_ = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result).then((v) => v[0]);
        return message_;
    }
    async editInlineMessageReplyMarkup(inlineMessageId, params) {
        const id = deserializeInlineMessageId(inlineMessageId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editInlineBotMessage({
            id,
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        });
    }
    async editMessageText(chatId, messageId, text, params) {
        const [message, entities] = await this.parseText(text, params);
        const noWebpage = params?.linkPreview?.disable ? true : undefined;
        const invertMedia = params?.linkPreview?.aboveText ? true : undefined;
        let media = undefined;
        if (!noWebpage && params?.linkPreview?.url) {
            media = new types.InputMediaWebPage({
                url: params.linkPreview.url,
                force_large_media: params.linkPreview.largeMedia ? true : undefined,
                force_small_media: params.linkPreview.smallMedia ? true : undefined,
                optional: message.length ? undefined : true,
            });
        }
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editMessage({
            id: checkMessageId(messageId),
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            entities,
            message,
            media,
            no_webpage: noWebpage,
            invert_media: invertMedia,
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        });
        const message_ = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result).then((v) => v[0]);
        return assertMessageType(message_, "text");
    }
    async editInlineMessageText(inlineMessageId, text, params) {
        const [message, entities] = await this.parseText(text, params);
        const id = deserializeInlineMessageId(inlineMessageId);
        const noWebpage = params?.linkPreview?.disable ? true : undefined;
        const invertMedia = params?.linkPreview?.aboveText ? true : undefined;
        let media = undefined;
        if (!noWebpage && params?.linkPreview?.url) {
            media = new types.InputMediaWebPage({
                url: params.linkPreview.url,
                force_large_media: params.linkPreview.largeMedia ? true : undefined,
                force_small_media: params.linkPreview.smallMedia ? true : undefined,
                optional: message.length ? undefined : true,
            });
        }
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editInlineBotMessage({
            id,
            entities,
            message,
            media,
            no_webpage: noWebpage,
            invert_media: invertMedia,
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        });
    }
    async editMessageMedia(chatId, messageId, media, params) {
        const message = await this.getMessage(chatId, messageId);
        if (!message) {
            throw new InputError("Message not found.");
        }
        if (!("animation" in message) && !("audio" in message) && !("document" in message) && !("photo" in message) && !("video" in message)) {
            throw new InputError("Unexpected message type.");
        }
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editMessage({
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            id: messageId,
            media: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveInputMedia).call(this, media),
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        });
        const message_ = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result).then((v) => v[0]);
        return message_;
    }
    async editInlineMessageMedia(inlineMessageId, media, params) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertBot("editInlineMessageMedia");
        const id = deserializeInlineMessageId(inlineMessageId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editInlineBotMessage({
            id,
            media: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveInputMedia).call(this, media),
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        });
    }
    async deleteMessages(chatId, messageIds, params) {
        checkArray(messageIds, checkMessageId);
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (peer instanceof types.InputPeerChannel) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.deleteMessages({ channel: new types.InputChannel(peer), id: messageIds });
        }
        else {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.deleteMessages({ id: messageIds, revoke: params?.onlyForMe ? undefined : true });
        }
    }
    async deleteChatMemberMessages(chatId, memberId) {
        const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
        const participant = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(memberId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.deleteParticipantHistory({ channel, participant });
    }
    async pinMessage(chatId, messageId, params) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.updatePinnedMessage({
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            id: checkMessageId(messageId),
            silent: params?.disableNotification ? true : undefined,
            pm_oneside: params?.bothSides ? undefined : true,
        });
    }
    async unpinMessage(chatId, messageId) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.updatePinnedMessage({
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            id: checkMessageId(messageId),
            unpin: true,
        });
    }
    async unpinMessages(chatId) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.unpinAllMessages({ peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId) });
    }
    async setAvailableReactions(chatId, availableReactions) {
        // TODO: sync with storage
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.setChatAvailableReactions({
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            available_reactions: availableReactions == "none" ? new types.ChatReactionsNone() : availableReactions == "all" ? new types.ChatReactionsAll() : Array.isArray(availableReactions) ? new types.ChatReactionsSome({ reactions: availableReactions.map((v) => v.type == "emoji" ? new types.ReactionEmoji({ emoticon: v.emoji }) : new types.ReactionCustomEmoji({ document_id: BigInt(v.id) })) }) : unreachable(),
        });
    }
    async setReactions(chatId, messageId, reactions, params) {
        await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendReaction).call(this, chatId, messageId, reactions, params);
    }
    async addReaction(chatId, messageId, reaction, params) {
        const message = await this.getMessage(chatId, messageId);
        if (!message) {
            throw new InputError("Message not found.");
        }
        const chosenReactions = (message.reactions ?? []).filter((v) => v.chosen);
        for (const r of chosenReactions) {
            if (reactionEqual(r.reaction, reaction)) {
                return;
            }
        }
        const reactions = [reaction, ...chosenReactions.map((v) => v.reaction)];
        await this.setReactions(chatId, messageId, reactions, params);
    }
    async removeReaction(chatId, messageId, reaction) {
        const message = await this.getMessage(chatId, messageId);
        if (!message) {
            throw new InputError("Message not found.");
        }
        const chosenReactions = (message.reactions ?? []).filter((v) => v.chosen);
        for (const r of chosenReactions) {
            if (reactionEqual(r.reaction, reaction)) {
                const reactions = chosenReactions.filter((v) => v != r).map((v) => v.reaction);
                await this.setReactions(chatId, messageId, reactions);
                break;
            }
        }
    }
    static canHandleUpdate(update) {
        return update instanceof types.UpdateNewMessage ||
            update instanceof types.UpdateNewChannelMessage ||
            update instanceof types.UpdateEditMessage ||
            update instanceof types.UpdateEditChannelMessage ||
            update instanceof types.UpdateBotNewBusinessMessage ||
            update instanceof types.UpdateBotEditBusinessMessage ||
            update instanceof types.UpdateBotDeleteBusinessMessage ||
            update instanceof types.UpdateDeleteMessages ||
            update instanceof types.UpdateDeleteChannelMessages ||
            update instanceof types.UpdateChannelParticipant ||
            update instanceof types.UpdateChatParticipant;
    }
    async handleUpdate(update) {
        if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditMessage || update instanceof types.UpdateEditChannelMessage) {
            if (update.message instanceof types.Message || update.message instanceof types.MessageService) {
                const chatId = peerToChatId(update.message.peer_id);
                await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.setMessage(chatId, update.message.id, update.message);
            }
        }
        if (update instanceof types.UpdateNewMessage ||
            update instanceof types.UpdateNewChannelMessage ||
            update instanceof types.UpdateEditMessage ||
            update instanceof types.UpdateEditChannelMessage ||
            update instanceof types.UpdateBotNewBusinessMessage ||
            update instanceof types.UpdateBotEditBusinessMessage) {
            if (!(update.message instanceof types.MessageEmpty)) {
                const isOutgoing = update.message.out;
                let shouldIgnore = isOutgoing ? (await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.getAccountType()) == "user" ? false : true : false;
                if (__classPrivateFieldGet(this, _MessageManager_c, "f").ignoreOutgoing != null && isOutgoing) {
                    shouldIgnore = __classPrivateFieldGet(this, _MessageManager_c, "f").ignoreOutgoing;
                }
                if (!shouldIgnore) {
                    const business = "connection_id" in update ? { connectionId: update.connection_id, replyToMessage: update.reply_to_message } : undefined;
                    const message = await this.constructMessage(update.message, undefined, business);
                    if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateBotNewBusinessMessage) {
                        return ({ message });
                    }
                    else {
                        return ({ editedMessage: message });
                    }
                }
            }
        }
        if (update instanceof types.UpdateDeleteMessages) {
            const deletedMessages = new Array();
            for (const messageId of update.messages) {
                const chatId = await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.getMessageChat(messageId);
                if (chatId) {
                    deletedMessages.push({ chatId, messageId });
                }
            }
            if (deletedMessages.length > 0) {
                return { deletedMessages };
            }
        }
        else if (update instanceof types.UpdateDeleteChannelMessages) {
            const chatId = getChannelChatId(update.channel_id);
            const deletedMessages = new Array();
            for (const messageId of update.messages) {
                const message = await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.getMessage(chatId, messageId);
                if (message != null) {
                    deletedMessages.push({ chatId, messageId });
                }
            }
            return { deletedMessages };
        }
        else if (update instanceof types.UpdateBotDeleteBusinessMessage) {
            const chatId = peerToChatId(update.peer);
            const deletedMessages = update.messages.map((v) => ({ chatId, messageId: v }));
            return { deletedMessages, businessConnectionId: update.connection_id };
        }
        if (update instanceof types.UpdateChannelParticipant || update instanceof types.UpdateChatParticipant) {
            const chatMember = await constructChatMemberUpdated(update, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity);
            const selfId = await __classPrivateFieldGet(this, _MessageManager_c, "f").getSelfId();
            if (chatMember.oldChatMember.user.id == selfId) {
                return { myChatMember: chatMember };
            }
            else {
                return { chatMember };
            }
        }
        return null;
    }
    async sendChatAction(chatId, action, params) {
        let action_;
        switch (action) {
            case "type":
                action_ = new types.SendMessageTypingAction();
                break;
            case "uploadPhoto":
                action_ = new types.SendMessageUploadPhotoAction({ progress: 0 });
                break;
            case "recordVideo":
                action_ = new types.SendMessageRecordVideoAction();
                break;
            case "uploadVideo":
                action_ = new types.SendMessageRecordVideoAction();
                break;
            case "recordVoice":
                action_ = new types.SendMessageRecordAudioAction();
                break;
            case "uploadAudio":
                action_ = new types.SendMessageUploadAudioAction({ progress: 0 });
                break;
            case "uploadDocument":
                action_ = new types.SendMessageUploadDocumentAction({ progress: 0 });
                break;
            case "chooseSticker":
                action_ = new types.SendMessageChooseStickerAction();
                break;
            case "findLocation":
                action_ = new types.SendMessageGeoLocationAction();
                break;
            case "recordVideoNote":
                action_ = new types.SendMessageRecordRoundAction();
                break;
            case "uploadVideoNote":
                action_ = new types.SendMessageUploadRoundAction({ progress: 0 });
                break;
            default:
                throw new InputError(`Invalid chat action: ${action}`);
        }
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new functions.messages.setTyping({ peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId), action: action_, top_msg_id: params?.messageThreadId }), params?.businessConnectionId);
    }
    async deleteChatPhoto(chatId) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (!(peer instanceof types.InputPeerChannel) && !(peer instanceof types.InputPeerChat)) {
            unreachable();
        }
        if (peer instanceof types.InputPeerChannel) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.editPhoto({ channel: new types.InputChannel(peer), photo: new types.InputChatPhotoEmpty() });
        }
        else if (peer instanceof types.InputPeerChat) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editChatPhoto({ chat_id: peer.chat_id, photo: new types.InputChatPhotoEmpty() });
        }
    }
    async setChatPhoto(chatId, photo, params) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (!(peer instanceof types.InputPeerChannel) && !(peer instanceof types.InputPeerChat)) {
            unreachable();
        }
        const file = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(photo, params);
        const photo_ = new types.InputChatUploadedPhoto({ file });
        if (peer instanceof types.InputPeerChannel) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.editPhoto({ channel: new types.InputChannel(peer), photo: photo_ });
        }
        else if (peer instanceof types.InputPeerChat) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editChatPhoto({ chat_id: peer.chat_id, photo: photo_ });
        }
    }
    async banChatMember(chatId, memberId, params) {
        const chat = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (!(chat instanceof types.InputPeerChannel) && !(chat instanceof types.InputPeerChat)) {
            throw new InputError("Expected a channel, supergroup, or group ID.");
        }
        const member = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(memberId);
        if (chat instanceof types.InputPeerChannel) {
            if (params?.deleteMessages) {
                try {
                    await this.deleteChatMemberMessages(chatId, memberId);
                }
                catch {
                    //
                }
            }
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.editBanned({
                channel: new types.InputChannel(chat),
                participant: member,
                banned_rights: new types.ChatBannedRights({
                    until_date: params?.untilDate ? toUnixTimestamp(params.untilDate) : 0, // todo
                    view_messages: true,
                    send_messages: true,
                    send_media: true,
                    send_stickers: true,
                    send_gifs: true,
                    send_games: true,
                    send_inline: true,
                    embed_links: true,
                }),
            });
        }
        else if (chat instanceof types.InputPeerChat) {
            if (!(member instanceof types.InputPeerUser)) {
                throw new InputError(`Invalid user ID: ${memberId}`);
            }
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.deleteChatUser({
                chat_id: chat.chat_id,
                user_id: new types.InputUser(member),
                revoke_history: params?.deleteMessages ? true : undefined,
            });
        }
    }
    async unbanChatMember(chatId, memberId) {
        const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
        const member = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(memberId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.editBanned({
            channel,
            participant: member,
            banned_rights: new types.ChatBannedRights({ until_date: 0 }),
        });
    }
    async setChatMemberRights(chatId, memberId, params) {
        const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
        const member = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(memberId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.editBanned({
            channel,
            participant: member,
            banned_rights: chatMemberRightsToTlObject(params?.rights, params?.untilDate),
        });
    }
    async getChatAdministrators(chatId) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (peer instanceof types.InputPeerChannel) {
            const channel = new types.InputChannel(peer);
            const participants = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.getParticipants({
                channel,
                filter: new types.ChannelParticipantsAdmins(),
                offset: 0,
                limit: 100,
                hash: 0n,
            });
            if (participants instanceof types.channels.ChannelParticipantsNotModified) {
                unreachable();
            }
            const chatMembers = new Array();
            for (const p of participants.participants) {
                chatMembers.push(await constructChatMember(p, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity));
            }
            return chatMembers;
        }
        else if (peer instanceof types.InputPeerChat) {
            const fullChat = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.getFullChat(peer); // TODO: full chat cache
            if (!(fullChat.full_chat instanceof types.ChatFull) || !(fullChat.full_chat.participants instanceof types.ChatParticipants)) {
                unreachable();
            }
            const chatMembers = new Array();
            for (const p of fullChat.full_chat.participants.participants) {
                chatMembers.push(await constructChatMember(p, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity));
            }
            return chatMembers;
        }
        else {
            unreachable();
        }
    }
    async enableJoinRequests(chatId) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("enableJoinRequests");
        await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_toggleJoinRequests).call(this, chatId, true);
    }
    async disableJoinRequests(chatId) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("disableJoinRequests");
        await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_toggleJoinRequests).call(this, chatId, false);
    }
    async searchMessages(chatId, query, params) {
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.search({
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            q: query,
            add_offset: 0,
            filter: messageSearchFilterToTlObject(params?.filter ?? "empty"),
            hash: 0n,
            limit: params?.limit ?? 100,
            max_date: 0,
            max_id: 0,
            min_date: 0,
            min_id: 0,
            offset_id: params?.after ? params.after : 0,
            from_id: params?.from ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.from) : undefined,
        });
        if (!("messages" in result)) {
            unreachable();
        }
        const messages = new Array();
        for (const message_ of result.messages) {
            const message = await this.constructMessage(message_, false);
            messages.push(message);
        }
        return messages;
    }
    async setBoostsRequiredToCircumventRestrictions(chatId, boosts) {
        const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.setBoostsToUnblockRestrictions({ channel, boosts });
    }
    async createInviteLink(chatId, params) {
        if (params?.requireApproval && params?.limit) {
            throw new InputError("requireApproval cannot be true while limit is specified.");
        }
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.exportChatInvite({
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            title: params?.title,
            expire_date: params?.expireAt ? toUnixTimestamp(params.expireAt) : undefined,
            request_needed: params?.requireApproval ? true : undefined,
            usage_limit: params?.limit,
        });
        return await constructInviteLink(result[as](types.ChatInviteExported), __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity);
    }
    async getCreatedInviteLinks(chatId, params) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("getCreatedInviteLinks");
        const { invites } = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.getExportedChatInvites({
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            revoked: params?.revoked ? true : undefined,
            admin_id: params?.by ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputUser(params.by) : new types.InputUserEmpty(),
            limit: params?.limit ?? 100,
            offset_date: params?.afterDate ? toUnixTimestamp(params.afterDate) : undefined,
            offset_link: params?.afterInviteLink,
        });
        return await Promise.all(invites.map((v) => v[as](types.ChatInviteExported)).map((v) => constructInviteLink(v, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity)));
    }
    async joinChat(chatId) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("joinChat");
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (peer instanceof types.InputPeerUser) {
            throw new InputError("Cannot join private chats.");
        }
        else if (peer instanceof types.InputPeerChannel) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.joinChannel({ channel: new types.InputChannel(peer) });
        }
        else if (peer instanceof types.InputPeerChat) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.addChatUser({ chat_id: peer.chat_id, user_id: new types.InputUserSelf(), fwd_limit: 0 }); // TODO: use potential high-level method for adding participants to chats
        }
        else {
            unreachable();
        }
    }
    async leaveChat(chatId) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (peer instanceof types.InputPeerUser) {
            throw new InputError("Cannot leave private chats.");
        }
        else if (peer instanceof types.InputPeerChannel) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.leaveChannel({ channel: new types.InputChannel(peer) });
        }
        else if (peer instanceof types.InputPeerChat) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.deleteChatUser({ chat_id: peer.chat_id, user_id: new types.InputUserSelf() }); // TODO: use potential high-level method for adding participants to chats
        }
        else {
            unreachable();
        }
    }
    async blockUser(userId) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("blockUser");
        const id = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(userId);
        if (!(id instanceof types.User)) {
            throw new InputError("Only users can be blocked or unblocked.");
        }
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.contacts.block({ id });
    }
    async unblockUser(userId) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("unblockUser");
        const id = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(userId);
        if (!(id instanceof types.User)) {
            throw new InputError("Only users can be blocked or unblocked.");
        }
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.contacts.unblock({ id });
    }
    async getChatMember(chatId, userId) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (peer instanceof types.InputPeerChannel) {
            const { participant } = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.getParticipant({
                channel: new types.InputChannel(peer),
                participant: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(userId),
            });
            return await constructChatMember(participant, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity);
        }
        else if (peer instanceof types.InputPeerChat) {
            const user = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputUser(userId);
            const fullChat = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.getFullChat(peer).then((v) => v.full_chat[as](types.ChatFull));
            const participant = fullChat.participants[as](types.ChatParticipants).participants.find((v) => v.user_id == user.user_id);
            return await constructChatMember(participant, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity);
        }
        else {
            throw new InputError("Expected a channel, supergroup, or group ID. Got a user ID instead.");
        }
    }
    async setChatStickerSet(chatId, setName) {
        const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.setStickers({ channel, stickerset: new types.InputStickerSetShortName({ short_name: setName }) });
    }
    async deleteChatStickerSet(chatId) {
        const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.setStickers({ channel, stickerset: new types.InputStickerSetEmpty() });
    }
    async stopPoll(chatId, messageId, params) {
        const message = await this.getMessage(chatId, messageId);
        if (!message) {
            throw new InputError("Message not found.");
        }
        if (!("poll" in message)) {
            throw new InputError("Message is not a poll.");
        }
        if (message.poll.isClosed) {
            throw new InputError("Poll is already stopped.");
        }
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editMessage({
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            id: messageId,
            media: new types.InputMediaPoll({
                poll: new types.Poll({
                    id: BigInt(message.poll.id),
                    closed: true,
                    question: "",
                    answers: [],
                }),
            }),
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        });
        const message_ = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result).then((v) => v[0]);
        return assertMessageType(message_, "poll").poll;
    }
    async editMessageLiveLocation(chatId, messageId, latitude, longitude, params) {
        const message = await this.getMessage(chatId, messageId);
        if (message && "location" in message && message.location.livePeriod) {
            const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editMessage({
                peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
                id: messageId,
                media: new types.InputMediaGeoLive({
                    geo_point: new types.InputGeoPoint({
                        lat: latitude,
                        long: longitude,
                        accuracy_radius: params?.horizontalAccuracy,
                    }),
                    heading: params?.heading,
                    proximity_notification_radius: params?.proximityAlertRadius,
                }),
                reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
            });
            const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result).then((v) => v[0]);
            return assertMessageType(message, "location");
        }
        unreachable();
    }
    async editInlineMessageLiveLocation(inlineMessageId, latitude, longitude, params) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertBot("editInlineMessageLiveLocation");
        const id = deserializeInlineMessageId(inlineMessageId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editInlineBotMessage({
            id,
            media: new types.InputMediaGeoLive({
                geo_point: new types.InputGeoPoint({
                    lat: latitude,
                    long: longitude,
                    accuracy_radius: params?.horizontalAccuracy,
                }),
                heading: params?.heading,
                proximity_notification_radius: params?.proximityAlertRadius,
            }),
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        });
    }
}
_MessageManager_c = new WeakMap(), _MessageManager_LresolveFileId = new WeakMap(), _MessageManager_instances = new WeakSet(), _MessageManager_updatesToMessages = async function _MessageManager_updatesToMessages(chatId, updates, businessConnectionId) {
    const messages = new Array();
    if (updates instanceof types.Updates) {
        for (const update of updates.updates) {
            if ("message" in update && update.message instanceof types.MessageEmpty) {
                continue;
            }
            if (update instanceof types.UpdateNewMessage || update instanceof types.UpdateEditMessage) {
                messages.push(await this.constructMessage(update.message));
            }
            else if (update instanceof types.UpdateNewChannelMessage || update instanceof types.UpdateEditChannelMessage) {
                messages.push(await this.constructMessage(update.message));
            }
            else if (update instanceof types.UpdateBotNewBusinessMessage) {
                messages.push(await this.constructMessage(update.message, false, { connectionId: businessConnectionId ?? update.connection_id, replyToMessage: update.reply_to_message }));
            }
            else if (update instanceof types.UpdateBotEditBusinessMessage) {
                messages.push(await this.constructMessage(update.message, false, { connectionId: businessConnectionId ?? update.connection_id, replyToMessage: update.reply_to_message }));
            }
        }
    }
    else if (updates instanceof types.UpdateShortSentMessage) {
        const message = await this.getMessage(chatId, updates.id);
        if (message != null) {
            messages.push(message);
        }
    }
    return messages;
}, _MessageManager_constructReplyMarkup = async function _MessageManager_constructReplyMarkup(params) {
    if (params?.replyMarkup) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertBot("replyMarkup");
        return replyMarkupToTlObject(params.replyMarkup, this.usernameResolver.bind(this));
    }
}, _MessageManager_resolveSendAs = async function _MessageManager_resolveSendAs(params) {
    const sendAs = params?.sendAs;
    if (sendAs !== undefined) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("sendAs");
        return sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(sendAs) : undefined;
    }
}, _MessageManager_constructReplyTo = async function _MessageManager_constructReplyTo(params) {
    const topMsgId = params?.messageThreadId;
    const replyToMsgId = params?.replyToMessageId;
    return replyToMsgId !== undefined ? new types.InputReplyToMessage({ reply_to_msg_id: replyToMsgId, top_msg_id: topMsgId, quote_text: params?.replyQuote?.text, quote_entities: await Promise.all(params?.replyQuote?.entities.map((v) => messageEntityToTlObject(v, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity)) ?? []), quote_offset: params?.replyQuote?.offset }) : undefined;
}, _MessageManager_sendDocumentInner = async function _MessageManager_sendDocumentInner(chatId, document, params, fileType, otherAttribs, urlSupported = true, expectedMimeTypes) {
    let media = null;
    const spoiler = params?.hasSpoiler ? true : undefined;
    const ttl_seconds = params && "selfDestruct" in params && typeof params.selfDestruct !== undefined ? selfDestructOptionToInt(params.selfDestruct) : undefined;
    if (typeof document === "string") {
        const fileId = this.resolveFileId(document, fileType);
        if (fileId != null) {
            media = new types.InputMediaDocument({
                id: new types.InputDocument(fileId),
                spoiler,
                query: otherAttribs.find((v) => v instanceof types.DocumentAttributeSticker)?.alt || undefined,
                ttl_seconds,
            });
        }
    }
    if (media == null) {
        if (typeof document === "string" && isHttpUrl(document)) {
            if (!urlSupported) {
                throw new InputError("URL not supported.");
            }
            media = new types.InputMediaDocumentExternal({ url: document, spoiler, ttl_seconds });
        }
        else {
            let mimeType;
            const file = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(document, params, (name) => {
                mimeType = params?.mimeType ?? contentType(name.split(".").slice(-1)[0]) ?? FALLBACK_MIME_TYPE;
                if (expectedMimeTypes && !expectedMimeTypes.includes(mimeType)) {
                    unreachable();
                }
                if (name.endsWith(".tgs") && fileType == FileType.Document) {
                    name += "-";
                }
                return name;
            });
            let thumb = undefined;
            if (params?.thumbnail) {
                thumb = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(params.thumbnail, { chunkSize: params?.chunkSize, signal: params?.signal });
            }
            media = new types.InputMediaUploadedDocument({
                file,
                thumb,
                spoiler,
                attributes: [new types.DocumentAttributeFilename({ file_name: file.name }), ...otherAttribs],
                mime_type: mimeType,
                force_file: fileType == FileType.Document ? true : undefined,
                ttl_seconds,
            });
        }
    }
    const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendMedia).call(this, chatId, media, params);
    return message;
}, _MessageManager_sendMedia = async function _MessageManager_sendMedia(chatId, media, params) {
    const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
    const caption_ = params?.caption;
    const parseResult = caption_ !== undefined ? await this.parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }) : undefined;
    const caption = parseResult === undefined ? undefined : parseResult[0];
    const captionEntities = parseResult === undefined ? undefined : parseResult[1];
    const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new functions.messages.sendMedia({
        peer,
        random_id: randomId,
        silent,
        noforwards,
        reply_markup: replyMarkup,
        reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
        send_as: sendAs,
        media,
        message: caption ?? "",
        entities: captionEntities,
    }), params?.businessConnectionId);
    return await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result, params?.businessConnectionId).then((v) => v[0]);
}, _MessageManager_resolveInputMediaInner = async function _MessageManager_resolveInputMediaInner(document, media, fileType, otherAttribs) {
    let media_ = null;
    const spoiler = "hasSpoiler" in media && media.hasSpoiler ? true : undefined;
    if (typeof document === "string") {
        const fileId = this.resolveFileId(document, fileType);
        if (fileId != null) {
            media_ = new types.InputMediaDocument({
                id: new types.InputDocument(fileId),
                spoiler,
                query: otherAttribs.find((v) => v instanceof types.DocumentAttributeSticker)?.alt || undefined,
            });
        }
    }
    if (media_ == null) {
        if (typeof document === "string" && isHttpUrl(document)) {
            media_ = new types.InputMediaDocumentExternal({ url: document, spoiler });
        }
        else {
            let mimeType;
            const file = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(document, media, (name) => {
                mimeType = media?.mimeType ?? contentType(name.split(".").slice(-1)[0]) ?? FALLBACK_MIME_TYPE;
                if (name.endsWith(".tgs") && fileType == FileType.Document) {
                    name += "-";
                }
                return name;
            });
            let thumb = undefined;
            if ("thumbnail" in media && media.thumbnail) {
                thumb = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(media.thumbnail, { chunkSize: media?.chunkSize, signal: media?.signal });
            }
            media_ = new types.InputMediaUploadedDocument({
                file,
                thumb,
                spoiler,
                attributes: [new types.DocumentAttributeFilename({ file_name: file.name }), ...otherAttribs],
                mime_type: mimeType,
                force_file: fileType == FileType.Document ? true : undefined,
            });
        }
    }
    return media_;
}, _MessageManager_resolveInputMedia = async function _MessageManager_resolveInputMedia(media) {
    if ("animation" in media) {
        return await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveInputMediaInner).call(this, media.animation, media, FileType.Animation, [
            new types.DocumentAttributeAnimated(),
            new types.DocumentAttributeVideo({
                supports_streaming: true,
                w: media?.width ?? 0,
                h: media?.height ?? 0,
                duration: media?.duration ?? 0,
            }),
        ]);
    }
    else if ("audio" in media) {
        return await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveInputMediaInner).call(this, media.audio, media, FileType.Audio, [
            new types.DocumentAttributeAudio({
                duration: media?.duration ?? 0,
                performer: media?.performer,
                title: media?.title,
            }),
        ]);
    }
    else if ("document" in media) {
        return await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveInputMediaInner).call(this, media.document, media, FileType.Document, []);
    }
    else if ("photo" in media) {
        let media_ = null;
        const spoiler = media.hasSpoiler ? true : undefined;
        const ttl_seconds = "selfDestruct" in media && media.selfDestruct !== undefined ? selfDestructOptionToInt(media.selfDestruct) : undefined;
        if (typeof media.photo === "string") {
            const fileId = this.resolveFileId(media.photo, [FileType.Photo, FileType.ProfilePhoto]);
            if (fileId != null) {
                media_ = new types.InputMediaPhoto({
                    id: new types.InputPhoto(fileId),
                    spoiler,
                    ttl_seconds,
                });
            }
        }
        if (media_ == null) {
            if (typeof media.photo === "string" && isHttpUrl(media.photo)) {
                media_ = new types.InputMediaPhotoExternal({ url: media.photo, spoiler });
            }
            else {
                const file = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(media.photo, media, null, false);
                media_ = new types.InputMediaUploadedPhoto({ file, spoiler, ttl_seconds });
            }
        }
        return media_;
    }
    else if ("video" in media) {
        const ttl_seconds = "selfDestruct" in media && media.selfDestruct !== undefined ? selfDestructOptionToInt(media.selfDestruct) : undefined;
        const media_ = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveInputMediaInner).call(this, media.video, media, FileType.Video, [
            new types.DocumentAttributeVideo({
                supports_streaming: media?.supportsStreaming ? true : undefined,
                w: media?.width ?? 0,
                h: media?.height ?? 0,
                duration: media?.duration ?? 0,
            }),
        ]);
        media_.ttl_seconds = ttl_seconds;
        return media_;
    }
    else {
        unreachable();
    }
}, _MessageManager_sendReaction = async function _MessageManager_sendReaction(chatId, messageId, reactions, params) {
    await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.sendReaction({
        peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
        msg_id: checkMessageId(messageId),
        reaction: reactions.map((v) => reactionToTlObject(v)),
        big: params?.big ? true : undefined,
        add_to_recent: params?.addToRecents ? true : undefined,
    });
}, _MessageManager_toggleJoinRequests = async function _MessageManager_toggleJoinRequests(chatId, enabled) {
    const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
    await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.toggleJoinRequest({ channel, enabled });
};
