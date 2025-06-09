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
var _MessageManager_instances, _a, _MessageManager_c, _MessageManager_LresolveFileId, _MessageManager_checkParams, _MessageManager_constructReplyMarkup, _MessageManager_resolveSendAs, _MessageManager_constructReplyTo, _MessageManager_sendDocumentInner, _MessageManager_sendMedia, _MessageManager_CAPTIONABLE_MESSAGE_TYPES, _MessageManager_editInlineMessageTextInner, _MessageManager_resolveInputMediaInner, _MessageManager_resolveInputMedia, _MessageManager_sendReaction, _MessageManager_getCachedVoiceTranscription, _MessageManager_cacheVoiceTranscription;
import { contentType, unreachable } from "../0_deps.js";
import { InputError } from "../0_errors.js";
import { encodeText, getLogger, getRandomId, toUnixTimestamp } from "../1_utilities.js";
import { Api } from "../2_tl.js";
import { getDc } from "../3_transport.js";
import { constructVoiceTranscription, deserializeFileId, isMessageType, selfDestructOptionToInt } from "../3_types.js";
import { assertMessageType, constructMessage as constructMessage_, deserializeInlineMessageId, FileType, messageEntityToTlObject, reactionEqual, reactionToTlObject, replyMarkupToTlObject } from "../3_types.js";
import { messageSearchFilterToTlObject } from "../types/0_message_search_filter.js";
import { parseHtml } from "./0_html.js";
import { parseMarkdown } from "./0_markdown.js";
import { canBeInputChannel, checkArray, checkMessageId, getUsername, isHttpUrl, toInputChannel } from "./0_utilities.js";
const FALLBACK_MIME_TYPE = "application/octet-stream";
const STICKER_MIME_TYPES = ["image/webp", "video/webm", "application/x-tgsticker"];
const messageManagerUpdates = [
    "updateNewMessage",
    "updateNewChannelMessage",
    "updateEditMessage",
    "updateNewScheduledMessage",
    "updateEditChannelMessage",
    "updateBotNewBusinessMessage",
    "updateBotEditBusinessMessage",
    "updateBotDeleteBusinessMessage",
    "updateDeleteMessages",
    "updateDeleteChannelMessages",
    "updateDeleteScheduledMessages",
    "updateTranscribedAudio",
];
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
                const inputPeer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(v).then((v) => Api.as("inputPeerUser", v));
                return { ...inputPeer, _: "inputUser" };
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
        const chatId_ = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeerChatId(peer);
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
            if (canBeInputChannel(peer)) {
                messages_ = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "channels.getMessages", channel: toInputChannel(peer), id: messageIds.map((v) => ({ _: "inputMessageID", id: v })) }).then((v) => Api.as("messages.channelMessages", v).messages);
            }
            else {
                messages_ = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
                    _: "messages.getMessages",
                    id: messageIds.map((v) => ({ _: "inputMessageID", id: v })),
                }).then((v) => Api.as("messages.messages", v).messages);
            }
        }
        const messages = new Array();
        for (const message_ of messages_) {
            if (Api.is("messageEmpty", message_)) {
                continue;
            }
            const message = await this.constructMessage(message_);
            if (message.chat.id == chatId_) {
                messages.push(message);
            }
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
        const [text, entities_] = _a.parseText(text_, params?.entities ?? [], params?.parseMode ?? __classPrivateFieldGet(this, _MessageManager_c, "f").parseMode);
        const entities = entities_?.length > 0 ? await Promise.all(entities_.map((v) => messageEntityToTlObject(v, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity))) : undefined;
        return [text, entities];
    }
    async updatesToMessages(chatId, updates, businessConnectionId) {
        const messages = new Array();
        if (Api.is("updates", updates)) {
            for (const update of updates.updates) {
                if ("message" in update && Api.is("messageEmpty", update.message)) {
                    continue;
                }
                if (Api.is("updateNewMessage", update) || Api.is("updateEditMessage", update) || Api.is("updateNewScheduledMessage", update)) {
                    const message = await this.constructMessage(update.message);
                    if (Api.is("updateNewScheduledMessage", update)) {
                        message.scheduled = true;
                    }
                    messages.push(message);
                }
                else if (Api.is("updateNewChannelMessage", update) || Api.is("updateEditChannelMessage", update)) {
                    messages.push(await this.constructMessage(update.message));
                }
                else if (Api.is("updateBotNewBusinessMessage", update)) {
                    messages.push(await this.constructMessage(update.message, false, { connectionId: businessConnectionId ?? update.connection_id, replyToMessage: update.reply_to_message }));
                }
                else if (Api.is("updateBotEditBusinessMessage", update)) {
                    messages.push(await this.constructMessage(update.message, false, { connectionId: businessConnectionId ?? update.connection_id, replyToMessage: update.reply_to_message }));
                }
            }
        }
        else if (Api.is("updateShortSentMessage", updates)) {
            const message = await this.getMessage(chatId, updates.id);
            if (message != null) {
                messages.push(message);
            }
        }
        return messages;
    }
    async constructMessage(message_, r, business) {
        const mediaPoll = "media" in message_ && Api.is("messageMediaPoll", message_.media) ? message_.media : null;
        const pollId = mediaPoll?.poll.id;
        let poll = null;
        let pollResults = null;
        if (pollId) {
            [poll, pollResults] = await Promise.all([__classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.getPoll(pollId), __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.getPollResults(pollId)]);
        }
        const message = await constructMessage_(message_, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity, this.getMessage.bind(this), __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.getStickerSetName.bind(__classPrivateFieldGet(this, _MessageManager_c, "f").fileManager), r, business, poll ?? undefined, pollResults ?? undefined);
        if (!poll && mediaPoll) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.setPoll(mediaPoll.poll.id, mediaPoll.poll);
        }
        if (!pollResults && mediaPoll) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.setPollResults(mediaPoll.poll.id, mediaPoll.results);
        }
        return message;
    }
    async forwardMessages(from, to, messageIds, params) {
        checkArray(messageIds, checkMessageId);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.forwardMessages", from_peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(from), to_peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(to), id: messageIds, random_id: messageIds.map(() => getRandomId()), silent: params?.disableNotification || undefined, top_msg_id: params?.messageThreadId, noforwards: params?.disableNotification || undefined, send_as: params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined, drop_author: params?.dropSenderName || undefined, drop_media_captions: params?.dropCaption || undefined });
        return await this.updatesToMessages(to, result);
    }
    async getHistory(chatId, params) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("getHistory");
        let limit = params?.limit ?? 100;
        if (limit <= 0) {
            limit = 1;
        }
        else if (limit > 100) {
            limit = 100;
        }
        let offsetId = params?.fromMessageId ?? 0;
        if (offsetId < 0) {
            offsetId = 0;
        }
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const messages = new Array();
        if (messages.length > 0) {
            offsetId = messages[messages.length - 1].id; // TODO: track id of oldest message and don't send requests for it
        }
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.getHistory", peer: peer, offset_id: offsetId, offset_date: 0, add_offset: 0, limit, max_id: 0, min_id: 0, hash: 0n });
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
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const [message, entities] = await this.parseText(text, params);
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = getRandomId();
        const noWebpage = params?.linkPreview?.disable ? true : undefined;
        const invertMedia = params?.linkPreview?.aboveText ? true : undefined;
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveSendAs).call(this, params);
        const effect = params?.effectId ? BigInt(params.effectId) : undefined;
        const schedule_date = params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined;
        const allow_paid_floodskip = params?.paidBroadcast ? true : undefined;
        let result;
        if (!noWebpage && params?.linkPreview?.url) {
            result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
                _: "messages.sendMedia",
                peer,
                random_id: randomId,
                media: ({
                    _: "inputMediaWebPage",
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
                effect,
                schedule_date,
                allow_paid_floodskip,
            }, { businessConnectionId: params?.businessConnectionId });
        }
        else {
            result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
                _: "messages.sendMessage",
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
                effect,
                schedule_date,
                allow_paid_floodskip,
            }, { businessConnectionId: params?.businessConnectionId });
        }
        const message_ = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
        return assertMessageType(message_, "text");
    }
    async sendVenue(chatId, latitude, longitude, title, address, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = getRandomId();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined;
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.sendMedia",
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            reply_markup: replyMarkup,
            media: ({
                _: "inputMediaVenue",
                geo_point: ({
                    _: "inputGeoPoint",
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
            effect: params?.effectId ? BigInt(params.effectId) : undefined,
            schedule_date: params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined,
            allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
        }, { businessConnectionId: params?.businessConnectionId });
        const message = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
        return assertMessageType(message, "venue");
    }
    async sendContact(chatId, firstName, number, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = getRandomId();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined;
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.sendMedia",
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            reply_markup: replyMarkup,
            media: ({
                _: "inputMediaContact",
                phone_number: number,
                first_name: firstName,
                last_name: params?.lastName ?? "",
                vcard: params?.vcard ?? "",
            }),
            message: "",
            effect: params?.effectId ? BigInt(params.effectId) : undefined,
            schedule_date: params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined,
            allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
        }, { businessConnectionId: params?.businessConnectionId });
        const message = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
        return assertMessageType(message, "contact");
    }
    async sendDice(chatId, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = getRandomId();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined;
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.sendMedia",
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            reply_markup: replyMarkup,
            media: ({
                _: "inputMediaDice",
                emoticon: params?.emoji ?? "🎲",
            }),
            message: "",
            effect: params?.effectId ? BigInt(params.effectId) : undefined,
            schedule_date: params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined,
            allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
        }, { businessConnectionId: params?.businessConnectionId });
        const message = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
        return assertMessageType(message, "dice");
    }
    async sendLocation(chatId, latitude, longitude, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = getRandomId();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined;
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.sendMedia",
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            reply_markup: replyMarkup,
            media: params?.livePeriod !== undefined
                ? ({
                    _: "inputMediaGeoLive",
                    geo_point: ({
                        _: "inputGeoPoint",
                        lat: latitude,
                        long: longitude,
                        accuracy_radius: params?.horizontalAccuracy,
                    }),
                    heading: params?.heading,
                    period: params.livePeriod,
                    proximity_notification_radius: params?.proximityAlertRadius,
                })
                : ({
                    _: "inputMediaGeoPoint",
                    geo_point: ({
                        _: "inputGeoPoint",
                        lat: latitude,
                        long: longitude,
                        accuracy_radius: params?.horizontalAccuracy,
                    }),
                }),
            message: "",
            effect: params?.effectId ? BigInt(params.effectId) : undefined,
            schedule_date: params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined,
            allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
        }, { businessConnectionId: params?.businessConnectionId });
        const message = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
        return assertMessageType(message, "location");
    }
    async sendVideoNote(chatId, audio, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, audio, params, FileType.VideoNote, [
            { _: "documentAttributeVideo", round_message: true, w: params?.length ?? 0, h: params?.length ?? 0, duration: params?.duration ?? 0 },
        ], false);
        return assertMessageType(message, "videoNote");
    }
    async sendAudio(chatId, audio, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, audio, params, FileType.Audio, [
            { _: "documentAttributeAudio", duration: params?.duration ?? 0, performer: params?.performer, title: params?.title },
        ]);
        return assertMessageType(message, "audio");
    }
    async sendVoice(chatId, voice, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, voice, params, FileType.VoiceNote, [
            { _: "documentAttributeAudio", voice: true, duration: params?.duration ?? 0 },
        ]);
        return assertMessageType(message, "voice");
    }
    async sendAnimation(chatId, animation, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, animation, params, FileType.Animation, [
            { _: "documentAttributeAnimated" },
            { _: "documentAttributeVideo", supports_streaming: true, w: params?.width ?? 0, h: params?.height ?? 0, duration: params?.duration ?? 0 },
        ]);
        return assertMessageType(message, "animation");
    }
    async sendVideo(chatId, video, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, video, params, FileType.Video, [
            { _: "documentAttributeVideo", supports_streaming: params?.supportsStreaming ? true : undefined, w: params?.width ?? 0, h: params?.height ?? 0, duration: params?.duration ?? 0 },
        ]);
        return assertMessageType(message, "video");
    }
    async sendDocument(chatId, document, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, document, params, FileType.Document, []);
        return assertMessageType(message, "document");
    }
    async sendSticker(chatId, sticker, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, sticker, params, FileType.Sticker, [{ _: "documentAttributeSticker", alt: params?.emoji || "", stickerset: { _: "inputStickerSetEmpty" } }], undefined, STICKER_MIME_TYPES);
        return assertMessageType(message, "sticker");
    }
    async sendPhoto(chatId, photo, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        let media = null;
        const spoiler = params?.hasSpoiler ? true : undefined;
        const ttl_seconds = params && "selfDestruct" in params && params.selfDestruct !== undefined ? selfDestructOptionToInt(params.selfDestruct) : undefined;
        if (typeof photo === "string") {
            const fileId = this.resolveFileId(photo, [FileType.Photo, FileType.ProfilePhoto]);
            if (fileId != null) {
                media = { _: "inputMediaPhoto", id: { ...fileId, _: "inputPhoto" }, spoiler, ttl_seconds };
            }
        }
        if (media == null) {
            if (typeof photo === "string" && isHttpUrl(photo)) {
                media = { _: "inputMediaPhotoExternal", url: photo, spoiler, ttl_seconds: (params && "selfDestruct" in params && params.selfDestruct !== undefined) ? selfDestructOptionToInt(params.selfDestruct) : undefined };
            }
            else {
                const file = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(photo, params, null, false);
                media = { _: "inputMediaUploadedPhoto", file, spoiler, ttl_seconds: (params && "selfDestruct" in params && params.selfDestruct !== undefined) ? selfDestructOptionToInt(params.selfDestruct) : undefined };
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
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
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
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined;
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const explanation = params?.explanation;
        const parseResult = explanation !== undefined ? await this.parseText(explanation, { parseMode: params?.explanationParseMode, entities: params?.explanationEntities }) : undefined;
        const solution = parseResult === undefined ? undefined : parseResult[0];
        const solutionEntities = parseResult === undefined ? undefined : parseResult[1];
        const answers = await Promise.all(options.map(async (v, i) => {
            const text = typeof v === "string" ? v : v.text;
            const entities = typeof v === "string" ? [] : v.entities;
            const parseResult = await this.parseText(text, { parseMode: params?.optionParseMode, entities: entities });
            return ({ _: "pollAnswer", option: encodeText(String(i)), text: { _: "textWithEntities", text: parseResult[0], entities: parseResult[1] ?? [] } });
        }));
        const questionParseResult = await this.parseText(question, { parseMode: params?.questionParseMode, entities: params?.questionEntities });
        const poll = { _: "poll", id: getRandomId(), answers, question: { _: "textWithEntities", text: questionParseResult[0], entities: questionParseResult[1] ?? [] }, closed: params?.isClosed ? true : undefined, close_date: params?.closeDate ? toUnixTimestamp(params.closeDate) : undefined, close_period: params?.openPeriod ? params.openPeriod : undefined, multiple_choice: params?.allowMultipleAnswers ? true : undefined, public_voters: params?.isAnonymous === false ? true : undefined, quiz: params?.type == "quiz" ? true : undefined };
        const media = { _: "inputMediaPoll", poll, correct_answers: params?.correctOptionIndex !== undefined ? [encodeText(String(params.correctOptionIndex))] : undefined, solution, solution_entities: solutionEntities };
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.sendMedia",
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_markup: replyMarkup,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            media,
            message: "",
            effect: params?.effectId ? BigInt(params.effectId) : undefined,
            schedule_date: params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined,
            allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
        }, { businessConnectionId: params?.businessConnectionId });
        const message = (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
        return assertMessageType(message, "poll");
    }
    async editMessageReplyMarkup(chatId, messageId, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.editMessage",
            id: checkMessageId(messageId),
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        }, { businessConnectionId: params?.businessConnectionId });
        const message_ = (await this.updatesToMessages(chatId, result))[0];
        return message_;
    }
    async editInlineMessageReplyMarkup(inlineMessageId, params) {
        const id = await deserializeInlineMessageId(inlineMessageId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.editInlineBotMessage",
            id,
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        }, { dc: getDc(id.dc_id) });
    }
    async editMessageText(chatId, messageId, text, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        {
            const message = await this.getMessage(chatId, messageId);
            if (!message) {
                throw new InputError("Message not found.");
            }
            if (!isMessageType(message, "link") && !isMessageType(message, "text")) {
                throw new InputError("The referenced message is not a text message.");
            }
        }
        const [message, entities] = await this.parseText(text, params);
        if (!message) {
            throw new InputError("Message text cannot be empty.");
        }
        if (params?.linkPreview && params.linkPreview.type != "input") {
            throw new InputError("Expected link preview of type input.");
        }
        const noWebpage = params?.linkPreview && params.linkPreview.type == "input" && params.linkPreview.disable ? true : undefined;
        const invertMedia = params?.linkPreview?.aboveText ? true : undefined;
        let media = undefined;
        if (!noWebpage && params?.linkPreview?.url) {
            media = { _: "inputMediaWebPage", url: params.linkPreview.url, force_large_media: params.linkPreview.largeMedia ? true : undefined, force_small_media: params.linkPreview.smallMedia ? true : undefined, optional: message.length ? undefined : true };
        }
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.editMessage",
            id: checkMessageId(messageId),
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            entities,
            message,
            media,
            no_webpage: noWebpage,
            invert_media: invertMedia,
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        }, { businessConnectionId: params?.businessConnectionId });
        const message_ = (await this.updatesToMessages(chatId, result))[0];
        return assertMessageType(message_, "text");
    }
    async editMessageCaption(chatId, messageId, params) {
        let canHaveCaption = false;
        const message_ = await this.getMessage(chatId, messageId);
        if (!message_) {
            throw new InputError("Message not found.");
        }
        for (const type of __classPrivateFieldGet(_a, _a, "f", _MessageManager_CAPTIONABLE_MESSAGE_TYPES)) {
            if (isMessageType(message_, type)) {
                canHaveCaption = true;
            }
        }
        if (!canHaveCaption) {
            throw new InputError("The referenced message cannot have a caption.");
        }
        const [message, entities] = await this.parseText(params?.caption ?? "", params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.editMessage",
            id: checkMessageId(messageId),
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            entities: message ? entities : [],
            message,
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        }, { businessConnectionId: params?.businessConnectionId });
        return (await this.updatesToMessages(chatId, result))[0];
    }
    async editInlineMessageText(inlineMessageId, text, params) {
        await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_editInlineMessageTextInner).call(this, inlineMessageId, text, params, false);
    }
    async editInlineMessageCaption(inlineMessageId, params) {
        await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_editInlineMessageTextInner).call(this, inlineMessageId, params?.caption ?? "", params);
    }
    async editMessageMedia(chatId, messageId, media, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const message = await this.getMessage(chatId, messageId);
        if (!message) {
            throw new InputError("Message not found.");
        }
        if (!("animation" in message) && !("audio" in message) && !("document" in message) && !("photo" in message) && !("video" in message)) {
            throw new InputError("Unexpected message type.");
        }
        const [text, entities] = media.caption !== undefined ? await this.parseText(media.caption, { entities: media.captionEntities, parseMode: media.parseMode }) : ["", []];
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.editMessage",
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            id: messageId,
            media: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveInputMedia).call(this, media),
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
            message: text,
            entities,
        }, { businessConnectionId: params?.businessConnectionId });
        const message_ = (await this.updatesToMessages(chatId, result))[0];
        return message_;
    }
    async editInlineMessageMedia(inlineMessageId, media, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertBot("editInlineMessageMedia");
        const id = await deserializeInlineMessageId(inlineMessageId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.editInlineBotMessage",
            id,
            media: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveInputMedia).call(this, media),
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        }, { dc: getDc(id.dc_id) });
    }
    async deleteMessages(chatId, messageIds, params) {
        checkArray(messageIds, checkMessageId);
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (canBeInputChannel(peer)) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "channels.deleteMessages", channel: toInputChannel(peer), id: messageIds });
        }
        else {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.deleteMessages", id: messageIds, revoke: params?.onlyForMe ? undefined : true });
        }
    }
    async deleteScheduledMessages(chatId, messageIds) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("sendScheduledMessage");
        checkArray(messageIds, checkMessageId);
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.deleteScheduledMessages", peer, id: messageIds });
    }
    async deleteScheduledMessage(chatId, messageId) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("deleteScheduledMessage");
        return await this.deleteScheduledMessages(chatId, [messageId]);
    }
    async sendScheduledMessages(chatId, messageIds) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("sendScheduledMessages");
        checkArray(messageIds, checkMessageId);
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.sendScheduledMessages", peer, id: messageIds });
        return await this.updatesToMessages(chatId, result);
    }
    async sendScheduledMessage(chatId, messageId) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("sendScheduledMessage");
        return (await this.sendScheduledMessages(chatId, [messageId]))[0];
    }
    async deleteChatMemberMessages(chatId, memberId) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("deleteChatMemberMessages");
        const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
        const participant = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(memberId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "channels.deleteParticipantHistory", channel, participant });
    }
    async pinMessage(chatId, messageId, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.updatePinnedMessage", peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId), id: checkMessageId(messageId), silent: params?.disableNotification ? true : undefined, pm_oneside: params?.bothSides ? undefined : true });
    }
    async unpinMessage(chatId, messageId, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.updatePinnedMessage", peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId), id: checkMessageId(messageId), unpin: true }, { businessConnectionId: params?.businessConnectionId });
    }
    async unpinMessages(chatId) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.unpinAllMessages", peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId) });
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
    canHandleUpdate(update) {
        return Api.isOneOf(messageManagerUpdates, update);
    }
    async handleUpdate(update) {
        if (Api.is("updateNewMessage", update) || Api.is("updateNewChannelMessage", update) || Api.is("updateEditMessage", update) || Api.is("updateEditChannelMessage", update)) {
            if (Api.is("message", update.message) || Api.is("messageService", update.message)) {
                const chatId = Api.peerToChatId(update.message.peer_id);
                await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.setMessage(chatId, update.message.id, update.message);
            }
        }
        if (Api.isOneOf([
            "updateNewMessage",
            "updateNewChannelMessage",
            "updateEditMessage",
            "updateEditChannelMessage",
            "updateBotNewBusinessMessage",
            "updateBotEditBusinessMessage",
            "updateNewScheduledMessage",
        ], update)) {
            if (!(Api.is("messageEmpty", update.message))) {
                const isOutgoing = update.message.out;
                let shouldIgnore = false;
                if (isOutgoing) {
                    if (__classPrivateFieldGet(this, _MessageManager_c, "f").outgoingMessages == null) {
                        __classPrivateFieldGet(this, _MessageManager_c, "f").outgoingMessages = __classPrivateFieldGet(this, _MessageManager_c, "f").storage.accountType == "user" ? "all" : "business";
                    }
                    if (__classPrivateFieldGet(this, _MessageManager_c, "f").outgoingMessages == "none") {
                        shouldIgnore = true;
                    }
                    else if (__classPrivateFieldGet(this, _MessageManager_c, "f").outgoingMessages == "business") {
                        if (!Api.is("updateBotNewBusinessMessage", update) && !Api.is("updateBotEditBusinessMessage", update)) {
                            shouldIgnore = true;
                        }
                    }
                }
                if (!shouldIgnore) {
                    const business = "connection_id" in update ? { connectionId: update.connection_id, replyToMessage: update.reply_to_message } : undefined;
                    const message = await this.constructMessage(update.message, undefined, business);
                    if (Api.is("updateNewMessage", update) || Api.is("updateNewChannelMessage", update) || Api.is("updateBotNewBusinessMessage", update)) {
                        return { message };
                    }
                    else if (Api.is("updateNewScheduledMessage", update)) {
                        message.scheduled = true;
                        return { scheduledMessage: message };
                    }
                    else {
                        return { editedMessage: message };
                    }
                }
            }
        }
        if (Api.is("updateDeleteMessages", update)) {
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
        else if (Api.is("updateDeleteChannelMessages", update)) {
            const chatId = Api.getChannelChatId(update.channel_id);
            const deletedMessages = new Array();
            for (const messageId of update.messages) {
                const message = await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.getMessage(chatId, messageId);
                if (message != null) {
                    deletedMessages.push({ chatId, messageId });
                }
            }
            return { deletedMessages };
        }
        else if (Api.is("updateDeleteScheduledMessages", update)) {
            const chatId = Api.peerToChatId(update.peer);
            const deletedMessages = update.messages.map((v) => ({ chatId, messageId: v }));
            return { deletedMessages, scheduled: true };
        }
        else if (Api.is("updateBotDeleteBusinessMessage", update)) {
            const chatId = Api.peerToChatId(update.peer);
            const deletedMessages = update.messages.map((v) => ({ chatId, messageId: v }));
            return { deletedMessages, businessConnectionId: update.connection_id };
        }
        if (Api.is("updateTranscribedAudio", update)) {
            const voiceTranscription = constructVoiceTranscription(update);
            await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.setVoiceTranscription(voiceTranscription);
            return { voiceTranscription };
        }
        return null;
    }
    async sendChatAction(chatId, action, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        let action_;
        switch (action) {
            case "type":
                action_ = { _: "sendMessageTypingAction" };
                break;
            case "uploadPhoto":
                action_ = { _: "sendMessageUploadPhotoAction", progress: 0 };
                break;
            case "recordVideo":
                action_ = { _: "sendMessageRecordVideoAction" };
                break;
            case "uploadVideo":
                action_ = { _: "sendMessageRecordVideoAction" };
                break;
            case "recordVoice":
                action_ = { _: "sendMessageRecordAudioAction" };
                break;
            case "uploadAudio":
                action_ = { _: "sendMessageUploadAudioAction", progress: 0 };
                break;
            case "uploadDocument":
                action_ = { _: "sendMessageUploadDocumentAction", progress: 0 };
                break;
            case "chooseSticker":
                action_ = { _: "sendMessageChooseStickerAction" };
                break;
            case "findLocation":
                action_ = { _: "sendMessageGeoLocationAction" };
                break;
            case "recordVideoNote":
                action_ = { _: "sendMessageRecordRoundAction" };
                break;
            case "uploadVideoNote":
                action_ = { _: "sendMessageUploadRoundAction", progress: 0 };
                break;
            default:
                throw new InputError(`Invalid chat action: ${action}`);
        }
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.setTyping", peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId), action: action_, top_msg_id: params?.messageThreadId }, { businessConnectionId: params?.businessConnectionId });
    }
    async searchMessages(chatId, query, params) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("searchMessages");
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.search", peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId), q: query, add_offset: 0, filter: messageSearchFilterToTlObject(params?.filter ?? "empty"), hash: 0n, limit: params?.limit ?? 100, max_date: 0, max_id: 0, min_date: 0, min_id: 0, offset_id: params?.after ? params.after : 0, from_id: params?.from ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.from) : undefined });
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
    async blockUser(userId) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("blockUser");
        const id = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(userId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "contacts.block", id });
    }
    async unblockUser(userId) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("unblockUser");
        const id = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(userId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "contacts.unblock", id });
    }
    async setChatStickerSet(chatId, setName) {
        const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "channels.setStickers", channel, stickerset: { _: "inputStickerSetShortName", short_name: setName } });
    }
    async deleteChatStickerSet(chatId) {
        const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "channels.setStickers", channel, stickerset: { _: "inputStickerSetEmpty" } });
    }
    async stopPoll(chatId, messageId, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
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
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.editMessage",
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            id: messageId,
            media: ({ _: "inputMediaPoll", poll: ({ _: "poll", id: BigInt(message.poll.id), closed: true, question: { _: "textWithEntities", text: "", entities: [] }, answers: [] }) }),
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        }, { businessConnectionId: params?.businessConnectionId });
        const message_ = (await this.updatesToMessages(chatId, result))[0];
        return assertMessageType(message_, "poll").poll;
    }
    async editMessageLiveLocation(chatId, messageId, latitude, longitude, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        const message = await this.getMessage(chatId, messageId);
        if (message && "location" in message && message.location.livePeriod) {
            const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
                _: "messages.editMessage",
                peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
                id: messageId,
                media: ({ _: "inputMediaGeoLive", geo_point: ({ _: "inputGeoPoint", lat: latitude, long: longitude, accuracy_radius: params?.horizontalAccuracy }), heading: params?.heading, proximity_notification_radius: params?.proximityAlertRadius }),
                reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
            }, { businessConnectionId: params?.businessConnectionId });
            const message = (await this.updatesToMessages(chatId, result))[0];
            return assertMessageType(message, "location");
        }
        unreachable();
    }
    async editInlineMessageLiveLocation(inlineMessageId, latitude, longitude, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertBot("editInlineMessageLiveLocation");
        const id = await deserializeInlineMessageId(inlineMessageId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.editInlineBotMessage",
            id,
            media: ({ _: "inputMediaGeoLive", geo_point: ({ _: "inputGeoPoint", lat: latitude, long: longitude, accuracy_radius: params?.horizontalAccuracy }), heading: params?.heading, proximity_notification_radius: params?.proximityAlertRadius }),
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        }, { dc: getDc(id.dc_id) });
    }
    async sendInvoice(chatId, title, description, payload, currency, prices, params) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertBot("sendInvoice");
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        if (title.length < 1) {
            throw new InputError("Invoice title cannot be empty.");
        }
        if (description.length < 1) {
            throw new InputError("Invoice description cannot be empty.");
        }
        if (title.length > 32) {
            throw new InputError("Invoice title is too long.");
        }
        if (description.length > 255) {
            throw new InputError("Invoice description is too long.");
        }
        const invoice = {
            _: "invoice",
            currency,
            prices: prices.map((v) => ({ _: "labeledPrice", label: v.label, amount: BigInt(v.amount) })),
            max_tip_amount: params?.maxTipAmount ? BigInt(params.maxTipAmount) : undefined,
            suggested_tip_amounts: params?.suggestedTipAmounts?.map(BigInt),
            name_requested: params?.needName || undefined,
            phone_requested: params?.needPhoneNumber || undefined,
            email_requested: params?.needEmail || undefined,
            shipping_address_requested: params?.needShippingAddress || undefined,
            email_to_provider: params?.sendEmailToProvider || undefined,
            phone_to_provider: params?.sendPhoneNumberToProvider || undefined,
            flexible: params?.flexible || undefined,
        };
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendMedia).call(this, chatId, {
            _: "inputMediaInvoice",
            title,
            description,
            invoice,
            start_param: params?.startParameter,
            payload: encodeText(payload),
            provider_data: { _: "dataJSON", data: params?.providerData ?? "null" },
            provider: params?.providerToken ?? "",
            photo: params?.photoUrl
                ? {
                    _: "inputWebDocument",
                    url: params.photoUrl,
                    size: params.photoSize ?? 0,
                    mime_type: "image/jpeg", // TODO: guess from URL
                    attributes: [{
                            _: "documentAttributeImageSize",
                            w: params?.photoWidth ?? 0,
                            h: params?.photoHeight ?? 0,
                        }],
                }
                : undefined,
        }, params);
        return assertMessageType(message, "invoice");
    }
    async sendMediaGroup(chatId, media, params) {
        __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
        {
            if (!Array.isArray(media) || !media.length) {
                throw new InputError("Media group must not be empty.");
            }
            // deno-lint-ignore no-explicit-any
            const firstMedia = media?.[0];
            const firstMediaType = firstMedia?.animation !== undefined ? "animation" : firstMedia?.audio !== undefined ? "audio" : firstMedia?.photo !== undefined ? "photo" : firstMedia?.video !== undefined ? "video" : "document";
            for (const media_ of media) {
                // deno-lint-ignore no-explicit-any
                const thisMediaType = media_?.animation !== undefined ? "animation" : media_?.audio !== undefined ? "audio" : media_?.photo !== undefined ? "photo" : media_?.video !== undefined ? "video" : "document";
                if (thisMediaType == "animation") {
                    throw new InputError("Media groups cannot consist of animations.");
                }
                if ((firstMediaType == "video" || firstMediaType == "photo") && (thisMediaType != "video" && thisMediaType != "photo")) {
                    throw new InputError(`Media of the type ${firstMediaType} cannot be mixed with those of the type ${thisMediaType}.`);
                }
                if (firstMediaType != "video" && firstMediaType != "photo" && firstMediaType != thisMediaType) {
                    throw new InputError(`Media of the type ${firstMediaType} cannot be mixed with other types.`);
                }
            }
        }
        const multiMedia = new Array();
        for (const v of media) {
            const randomId = getRandomId();
            const [message, entities] = v.caption !== undefined ? await this.parseText(v.caption, { entities: v.captionEntities, parseMode: v.parseMode }) : ["", []];
            multiMedia.push({ _: "inputSingleMedia", message, entities, random_id: randomId, media: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveInputMedia).call(this, v) });
        }
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        for (const [i, media_] of multiMedia.entries()) {
            if (Api.is("inputMediaUploadedPhoto", media_.media)) {
                const result = Api.as("messageMediaPhoto", await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.uploadMedia", media: media_.media, peer }));
                const photo = Api.as("photo", result.photo);
                multiMedia[i] = { ...media_, media: { _: "inputMediaPhoto", id: { ...photo, _: "inputPhoto" } } };
            }
            else if (Api.is("inputMediaUploadedDocument", media_.media)) {
                const result = Api.as("messageMediaDocument", await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.uploadMedia", media: media_.media, peer }));
                const document = Api.as("document", result.document);
                multiMedia[i] = { ...media_, media: { _: "inputMediaDocument", id: { ...document, _: "inputDocument" } } };
            }
        }
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined;
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
            _: "messages.sendMultiMedia",
            peer,
            multi_media: multiMedia,
            effect: params?.effectId ? BigInt(params.effectId) : undefined,
            noforwards,
            silent,
            send_as: sendAs,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
        });
        return await this.updatesToMessages(chatId, result);
    }
    async readMessages(chatId, untilMessageId) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("readMessages");
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const max_id = untilMessageId;
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.readHistory", peer, max_id });
    }
    async startBot(botId, params) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("startBot");
        const start_param = params?.deeplink?.trim() || "";
        if (params?.chatId !== undefined && !start_param) {
            throw new InputError("deeplink cannot be unspecified while chatId is specified.");
        }
        if (!params?.deeplink) {
            return await this.sendMessage(botId, "/start");
        }
        const bot = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputUser(botId);
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params?.chatId || botId);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.startBot", bot, peer, random_id: getRandomId(), start_param });
        return (await this.updatesToMessages(botId, result))[0];
    }
    async transcribeVoice(chatId, messageId) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("transcribeVoice");
        const message = await this.getMessage(chatId, messageId);
        if (message == null) {
            throw new InputError("Message not found.");
        }
        if (!isMessageType(message, "voice")) {
            throw new InputError("Message not voice.");
        }
        const cachedTranscription = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_getCachedVoiceTranscription).call(this, message);
        if (cachedTranscription) {
            return cachedTranscription;
        }
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.transcribeAudio", peer, msg_id: messageId });
        return await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_cacheVoiceTranscription).call(this, message, constructVoiceTranscription(result));
    }
    async resolveMessageLink(link) {
        const parseResult = _a.parseMessageLink(link);
        if (parseResult == null) {
            throw new InputError("Invalid messsage link.");
        }
        const [chatId, messageId] = parseResult;
        return await this.getMessage(chatId, messageId);
    }
    static parseMessageLink(link) {
        let url;
        try {
            url = new URL(link);
        }
        catch (err) {
            if (err instanceof TypeError) {
                try {
                    url = new URL("https://" + link);
                }
                catch (err) {
                    if (err instanceof TypeError) {
                        return null;
                    }
                    else {
                        throw err;
                    }
                }
            }
            else {
                throw err;
            }
        }
        if (url.protocol != "http:" && url.protocol != "https:") {
            return null;
        }
        if (url.host != "t.me") {
            return null;
        }
        const parts = url.pathname.split("/").filter((v) => v);
        if (parts.length < 2) {
            return null;
        }
        if (!isNaN(Number(parts[0]))) {
            return null;
        }
        let peer, id;
        if (parts[0] == "c") {
            if (parts.length < 3 || parts.length > 4) {
                return null;
            }
            [peer, id] = [Number(parts[1]), Number(parts[parts.length - 1])];
            if (isNaN(peer)) {
                return null;
            }
            if (isNaN(Number(parts[2]))) {
                return null;
            }
            peer = Api.getChannelChatId(BigInt(peer));
        }
        else {
            if (parts.length > 3) {
                return null;
            }
            [peer, id] = [parts[0], Number(parts[parts.length - 1])];
            if (isNaN(Number(parts[1]))) {
                return null;
            }
        }
        if (isNaN(id)) {
            return null;
        }
        if (typeof peer === "string") {
            try {
                if (getUsername(peer) != peer) {
                    return null;
                }
            }
            catch (err) {
                if (err instanceof InputError) {
                    return null;
                }
                else {
                    throw err;
                }
            }
        }
        return [peer, id];
    }
}
_a = MessageManager, _MessageManager_c = new WeakMap(), _MessageManager_LresolveFileId = new WeakMap(), _MessageManager_instances = new WeakSet(), _MessageManager_checkParams = function _MessageManager_checkParams(params) {
    if (params && "replyMarkup" in params && params.replyMarkup !== undefined) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertBot("replyMarkup");
    }
    if (params && "businessConnectionId" in params && params.businessConnectionId !== undefined) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertBot("businessConnectionId");
    }
    if (params && "sendAs" in params && params.sendAs !== undefined) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("sendAs");
    }
    if (params && "sendAt" in params && params.sendAt !== undefined) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("businessConsendAtnectionId");
    }
}, _MessageManager_constructReplyMarkup = async function _MessageManager_constructReplyMarkup(params) {
    if (params?.replyMarkup) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertBot("replyMarkup");
        return await replyMarkupToTlObject(params.replyMarkup, this.usernameResolver.bind(this));
    }
}, _MessageManager_resolveSendAs = async function _MessageManager_resolveSendAs(params) {
    const sendAs = params?.sendAs;
    if (sendAs !== undefined) {
        __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("sendAs");
        return sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(sendAs) : undefined;
    }
}, _MessageManager_constructReplyTo = async function _MessageManager_constructReplyTo(params) {
    const topMsgId = params?.messageThreadId;
    if (!params?.replyTo) {
        if (topMsgId) {
            return { _: "inputReplyToMessage", reply_to_msg_id: topMsgId };
        }
        else {
            return undefined;
        }
    }
    if ("messageId" in params.replyTo) {
        return { _: "inputReplyToMessage", reply_to_msg_id: params.replyTo.messageId, top_msg_id: topMsgId, quote_text: params.replyTo.quote?.text, quote_entities: await Promise.all(params.replyTo.quote?.entities.map((v) => messageEntityToTlObject(v, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity)) ?? []), quote_offset: params.replyTo.quote?.offset };
    }
    else {
        return { _: "inputReplyToStory", peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.replyTo.chatId), story_id: params.replyTo.storyId };
    }
}, _MessageManager_sendDocumentInner = async function _MessageManager_sendDocumentInner(chatId, document, params, fileType, otherAttribs, urlSupported = true, expectedMimeTypes) {
    let media = null;
    const spoiler = params?.hasSpoiler ? true : undefined;
    const ttl_seconds = params && "selfDestruct" in params && typeof params.selfDestruct !== undefined ? selfDestructOptionToInt(params.selfDestruct) : undefined;
    if (typeof document === "string") {
        const fileId = this.resolveFileId(document, fileType);
        if (fileId != null) {
            media = { _: "inputMediaDocument", id: { ...fileId, _: "inputDocument" }, spoiler, query: otherAttribs.find((v) => Api.is("documentAttributeSticker", v))?.alt || undefined, ttl_seconds };
        }
    }
    if (media == null) {
        if (typeof document === "string" && isHttpUrl(document)) {
            if (!urlSupported) {
                throw new InputError("URL not supported.");
            }
            media = { _: "inputMediaDocumentExternal", url: document, spoiler, ttl_seconds };
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
            if (Api.is("inputFileStoryDocument", file)) {
                unreachable();
            }
            let thumb = undefined;
            if (params?.thumbnail) {
                thumb = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(params.thumbnail, { chunkSize: params?.chunkSize, signal: params?.signal });
            }
            media = { _: "inputMediaUploadedDocument", file, thumb, spoiler, attributes: [{ _: "documentAttributeFilename", file_name: file.name }, ...otherAttribs], mime_type: mimeType, force_file: fileType == FileType.Document ? true : undefined, ttl_seconds };
        }
    }
    const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendMedia).call(this, chatId, media, params);
    return message;
}, _MessageManager_sendMedia = async function _MessageManager_sendMedia(chatId, media, params) {
    if (params?.starCount !== undefined) {
        if (params.starCount <= 0) {
            throw new InputError("starCount cannot be zero or negative");
        }
        media = { _: "inputMediaPaidMedia", stars_amount: BigInt(params.starCount), extended_media: [media] };
    }
    const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
    const randomId = getRandomId();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined;
    const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
    const caption_ = params?.caption;
    const parseResult = caption_ !== undefined ? await this.parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }) : undefined;
    const caption = parseResult === undefined ? undefined : parseResult[0];
    const captionEntities = parseResult === undefined ? undefined : parseResult[1];
    const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
        _: "messages.sendMedia",
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
        effect: params?.effectId ? BigInt(params.effectId) : undefined,
        schedule_date: params?.sendAt ? toUnixTimestamp(params.sendAt) : undefined,
        allow_paid_floodskip: params?.paidBroadcast ? true : undefined,
    }, { businessConnectionId: params?.businessConnectionId });
    return (await this.updatesToMessages(chatId, result, params?.businessConnectionId))[0];
}, _MessageManager_editInlineMessageTextInner = async function _MessageManager_editInlineMessageTextInner(inlineMessageId, text, params, allowEmpty = true) {
    __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_checkParams).call(this, params);
    const [message, entities] = await this.parseText(text, params);
    if (!allowEmpty && !message) {
        throw new InputError("Message text cannot be empty.");
    }
    const id = await deserializeInlineMessageId(inlineMessageId);
    if (params?.linkPreview && params.linkPreview.type != "input") {
        throw new InputError("Expected link preview of type input.");
    }
    const noWebpage = params?.linkPreview && params.linkPreview.type == "input" && params.linkPreview.disable ? true : undefined;
    const invertMedia = params?.linkPreview?.aboveText ? true : undefined;
    let media = undefined;
    if (!noWebpage && params?.linkPreview?.url) {
        media = { _: "inputMediaWebPage", url: params.linkPreview.url, force_large_media: params.linkPreview.largeMedia ? true : undefined, force_small_media: params.linkPreview.smallMedia ? true : undefined, optional: message.length ? undefined : true };
    }
    await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({
        _: "messages.editInlineBotMessage",
        id,
        entities,
        message,
        media,
        no_webpage: noWebpage,
        invert_media: invertMedia,
        reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
    }, { dc: getDc(id.dc_id) });
}, _MessageManager_resolveInputMediaInner = async function _MessageManager_resolveInputMediaInner(document, media, fileType, otherAttribs) {
    let media_ = null;
    const spoiler = "hasSpoiler" in media && media.hasSpoiler ? true : undefined;
    if (typeof document === "string") {
        const fileId = this.resolveFileId(document, fileType);
        if (fileId != null) {
            media_ = { _: "inputMediaDocument", id: { ...fileId, _: "inputDocument" }, spoiler, query: otherAttribs.find((v) => Api.is("documentAttributeSticker", v))?.alt || undefined };
        }
    }
    if (media_ == null) {
        if (typeof document === "string" && isHttpUrl(document)) {
            media_ = { _: "inputMediaDocumentExternal", url: document, spoiler };
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
            if (Api.is("inputFileStoryDocument", file)) {
                unreachable();
            }
            let thumb = undefined;
            if ("thumbnail" in media && media.thumbnail) {
                thumb = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(media.thumbnail, { chunkSize: media?.chunkSize, signal: media?.signal });
            }
            media_ = { _: "inputMediaUploadedDocument", file, thumb, spoiler, attributes: [{ _: "documentAttributeFilename", file_name: file.name }, ...otherAttribs], mime_type: mimeType, force_file: fileType == FileType.Document ? true : undefined };
        }
    }
    return media_;
}, _MessageManager_resolveInputMedia = async function _MessageManager_resolveInputMedia(media) {
    if ("animation" in media) {
        return await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveInputMediaInner).call(this, media.animation, media, FileType.Animation, [
            { _: "documentAttributeAnimated" },
            { _: "documentAttributeVideo", supports_streaming: true, w: media?.width ?? 0, h: media?.height ?? 0, duration: media?.duration ?? 0 },
        ]);
    }
    else if ("audio" in media) {
        return await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveInputMediaInner).call(this, media.audio, media, FileType.Audio, [
            { _: "documentAttributeAudio", duration: media?.duration ?? 0, performer: media?.performer, title: media?.title },
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
                media_ = { _: "inputMediaPhoto", id: { ...fileId, _: "inputPhoto" }, spoiler, ttl_seconds };
            }
        }
        if (media_ == null) {
            if (typeof media.photo === "string" && isHttpUrl(media.photo)) {
                media_ = { _: "inputMediaPhotoExternal", url: media.photo, spoiler };
            }
            else {
                const file = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(media.photo, media, null, false);
                media_ = { _: "inputMediaUploadedPhoto", file, spoiler, ttl_seconds };
            }
        }
        return media_;
    }
    else if ("video" in media) {
        const ttl_seconds = "selfDestruct" in media && media.selfDestruct !== undefined ? selfDestructOptionToInt(media.selfDestruct) : undefined;
        const media_ = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveInputMediaInner).call(this, media.video, media, FileType.Video, [
            { _: "documentAttributeVideo", supports_streaming: media?.supportsStreaming ? true : undefined, w: media?.width ?? 0, h: media?.height ?? 0, duration: media?.duration ?? 0 },
        ]);
        media_.ttl_seconds = ttl_seconds;
        return media_;
    }
    else {
        unreachable();
    }
}, _MessageManager_sendReaction = async function _MessageManager_sendReaction(chatId, messageId, reactions, params) {
    await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke({ _: "messages.sendReaction", peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId), msg_id: checkMessageId(messageId), reaction: reactions.map((v) => reactionToTlObject(v)), big: params?.big ? true : undefined, add_to_recent: params?.addToRecents ? true : undefined });
}, _MessageManager_getCachedVoiceTranscription = async function _MessageManager_getCachedVoiceTranscription(message) {
    const reference = await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.getVoiceTranscriptionReference(message.chat.id, message.id, message.editDate ?? message.date);
    if (!reference) {
        return null;
    }
    const voiceTranscription = await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.getVoiceTranscription(reference);
    if (!voiceTranscription || !voiceTranscription.done) {
        return null;
    }
    return voiceTranscription;
}, _MessageManager_cacheVoiceTranscription = async function _MessageManager_cacheVoiceTranscription(message, voiceTranscription) {
    await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.setVoiceTranscriptionReference(message.chat.id, message.id, message.editDate ?? message.date, BigInt(voiceTranscription.id));
    await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.setVoiceTranscription(voiceTranscription);
    return voiceTranscription;
};
_MessageManager_CAPTIONABLE_MESSAGE_TYPES = { value: ["photo", "document", "video", "animation", "voice", "audio", "video"] };
