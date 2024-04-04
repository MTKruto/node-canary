"use strict";
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
var _MessageManager_instances, _MessageManager_c, _MessageManager_LresolveFileId, _MessageManager_updatesToMessages, _MessageManager_constructReplyMarkup, _MessageManager_resolveSendAs, _MessageManager_constructReplyTo, _MessageManager_sendDocumentInner, _MessageManager_sendMedia, _MessageManager_sendReaction, _MessageManager_toggleJoinRequests;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const _3_types_js_2 = require("../3_types.js");
const _0_message_search_filter_js_1 = require("../types/0_message_search_filter.js");
const _0_html_js_1 = require("./0_html.js");
const _0_markdown_js_1 = require("./0_markdown.js");
const _0_utilities_js_1 = require("./0_utilities.js");
const FALLBACK_MIME_TYPE = "application/octet-stream";
const STICKER_MIME_TYPES = ["image/webp", "video/webm", "application/x-tgsticker"];
class MessageManager {
    constructor(c) {
        _MessageManager_instances.add(this);
        _MessageManager_c.set(this, void 0);
        _MessageManager_LresolveFileId.set(this, void 0);
        Object.defineProperty(this, "usernameResolver", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (v) => {
                const inputPeer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(v).then((v) => v[_2_tl_js_1.as](_2_tl_js_1.types.InputPeerUser));
                return new _2_tl_js_1.types.InputUser(inputPeer);
            }
        });
        __classPrivateFieldSet(this, _MessageManager_c, c, "f");
        const L = (0, _1_utilities_js_1.getLogger)("MessageManager").client(c.id);
        __classPrivateFieldSet(this, _MessageManager_LresolveFileId, L.branch("resolveFileId"), "f");
    }
    async getMessages(chatId, messageIds) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        let messages_ = new Array();
        const chatId_ = (0, _2_tl_js_1.peerToChatId)(peer);
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
            if (peer instanceof _2_tl_js_1.types.InputPeerChannel) {
                messages_ = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.getMessages({
                    channel: new _2_tl_js_1.types.InputChannel(peer),
                    id: messageIds.map((v) => new _2_tl_js_1.types.InputMessageID({ id: v })),
                }).then((v) => v[_2_tl_js_1.as](_2_tl_js_1.types.messages.ChannelMessages).messages);
            }
            else {
                messages_ = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.getMessages({
                    id: messageIds.map((v) => new _2_tl_js_1.types.InputMessageID({ id: v })),
                }).then((v) => v[_2_tl_js_1.as](_2_tl_js_1.types.messages.Messages).messages);
            }
        }
        const messages = new Array();
        for (const message_ of messages_) {
            if (message_ instanceof _2_tl_js_1.types.MessageEmpty) {
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
                const [newText, entitiesToPush] = (0, _0_html_js_1.parseHtml)(text);
                text = newText;
                for (const entity of entitiesToPush) {
                    entities.push(entity);
                }
                break;
            }
            case "Markdown": {
                const [newText, entitiesToPush] = (0, _0_markdown_js_1.parseMarkdown)(text);
                text = newText;
                for (const entity of entitiesToPush) {
                    entities.push(entity);
                }
                break;
            }
            default:
                (0, _1_utilities_js_1.UNREACHABLE)();
        }
        text = text.trimEnd();
        for (const entity of entities) {
            while (text[entity.offset + (entity.length - 1)] === undefined) {
                --entity.length;
            }
        }
        return [text, entities];
    }
    async parseText(text_, params) {
        const [text, entities_] = MessageManager.parseText(text_, params?.entities ?? [], params?.parseMode ?? __classPrivateFieldGet(this, _MessageManager_c, "f").parseMode);
        const entities = entities_?.length > 0 ? await Promise.all(entities_.map((v) => (0, _3_types_js_2.messageEntityToTlObject)(v, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity))) : undefined;
        return [text, entities];
    }
    async constructMessage(message_, r, business) {
        return await (0, _3_types_js_2.constructMessage)(message_, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity, this.getMessage.bind(this), __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.getStickerSetName.bind(__classPrivateFieldGet(this, _MessageManager_c, "f").fileManager), r, business);
    }
    async forwardMessages(from, to, messageIds, params) {
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.forwardMessages({
            from_peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(from),
            to_peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(to),
            id: messageIds,
            random_id: messageIds.map(() => (0, _1_utilities_js_1.getRandomId)()),
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
            (0, _1_utilities_js_1.UNREACHABLE)();
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
        const randomId = (0, _1_utilities_js_1.getRandomId)();
        const noWebpage = params?.linkPreview?.disable ? true : undefined;
        const invertMedia = params?.linkPreview?.aboveText ? true : undefined;
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_resolveSendAs).call(this, params);
        let result;
        if (!noWebpage && params?.linkPreview?.url) {
            result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new _2_tl_js_1.functions.messages.sendMedia({
                peer,
                random_id: randomId,
                media: new _2_tl_js_1.types.InputMediaWebPage({
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
            result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new _2_tl_js_1.functions.messages.sendMessage({
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
        return (0, _3_types_js_2.assertMessageType)(message_, "text");
    }
    async sendVenue(chatId, latitude, longitude, title, address, params) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = (0, _1_utilities_js_1.getRandomId)();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new _2_tl_js_1.functions.messages.sendMedia({
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            reply_markup: replyMarkup,
            media: new _2_tl_js_1.types.InputMediaVenue({
                geo_point: new _2_tl_js_1.types.InputGeoPoint({
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
        return (0, _3_types_js_2.assertMessageType)(message, "venue");
    }
    async sendContact(chatId, firstName, number, params) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = (0, _1_utilities_js_1.getRandomId)();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new _2_tl_js_1.functions.messages.sendMedia({
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            reply_markup: replyMarkup,
            media: new _2_tl_js_1.types.InputMediaContact({
                phone_number: number,
                first_name: firstName,
                last_name: params?.lastName ?? "",
                vcard: params?.vcard ?? "",
            }),
            message: "",
        }), params?.businessConnectionId);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result, params?.businessConnectionId).then((v) => v[0]);
        return (0, _3_types_js_2.assertMessageType)(message, "contact");
    }
    async sendDice(chatId, params) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = (0, _1_utilities_js_1.getRandomId)();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new _2_tl_js_1.functions.messages.sendMedia({
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            reply_markup: replyMarkup,
            media: new _2_tl_js_1.types.InputMediaDice({
                emoticon: params?.emoji ?? "🎲",
            }),
            message: "",
        }), params?.businessConnectionId);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result, params?.businessConnectionId).then((v) => v[0]);
        return (0, _3_types_js_2.assertMessageType)(message, "dice");
    }
    async sendLocation(chatId, latitude, longitude, params) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = (0, _1_utilities_js_1.getRandomId)();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new _2_tl_js_1.functions.messages.sendMedia({
            peer,
            random_id: randomId,
            silent,
            noforwards,
            reply_to: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyTo).call(this, params),
            send_as: sendAs,
            reply_markup: replyMarkup,
            media: params?.livePeriod !== undefined
                ? new _2_tl_js_1.types.InputMediaGeoLive({
                    geo_point: new _2_tl_js_1.types.InputGeoPoint({
                        lat: latitude,
                        long: longitude,
                        accuracy_radius: params?.horizontalAccuracy,
                    }),
                    heading: params?.heading,
                    period: params.livePeriod,
                    proximity_notification_radius: params?.proximityAlertRadius,
                })
                : new _2_tl_js_1.types.InputMediaGeoPoint({
                    geo_point: new _2_tl_js_1.types.InputGeoPoint({
                        lat: latitude,
                        long: longitude,
                        accuracy_radius: params?.horizontalAccuracy,
                    }),
                }),
            message: "",
        }), params?.businessConnectionId);
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result, params?.businessConnectionId).then((v) => v[0]);
        return (0, _3_types_js_2.assertMessageType)(message, "location");
    }
    async sendVideoNote(chatId, audio, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, audio, params, _3_types_js_2.FileType.VideoNote, [
            new _2_tl_js_1.types.DocumentAttributeVideo({
                round_message: true,
                w: params?.length ?? 0,
                h: params?.length ?? 0,
                duration: params?.duration ?? 0,
            }),
        ], false);
        return (0, _3_types_js_2.assertMessageType)(message, "videoNote");
    }
    async sendAudio(chatId, audio, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, audio, params, _3_types_js_2.FileType.Audio, [
            new _2_tl_js_1.types.DocumentAttributeAudio({
                duration: params?.duration ?? 0,
                performer: params?.performer,
                title: params?.title,
            }),
        ]);
        return (0, _3_types_js_2.assertMessageType)(message, "audio");
    }
    async sendVoice(chatId, voice, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, voice, params, _3_types_js_2.FileType.VoiceNote, [
            new _2_tl_js_1.types.DocumentAttributeAudio({
                voice: true,
                duration: params?.duration ?? 0,
            }),
        ]);
        return (0, _3_types_js_2.assertMessageType)(message, "voice");
    }
    async sendAnimation(chatId, animation, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, animation, params, _3_types_js_2.FileType.Animation, [
            new _2_tl_js_1.types.DocumentAttributeAnimated(),
            new _2_tl_js_1.types.DocumentAttributeVideo({
                supports_streaming: true,
                w: params?.width ?? 0,
                h: params?.height ?? 0,
                duration: params?.duration ?? 0,
            }),
        ]);
        return (0, _3_types_js_2.assertMessageType)(message, "animation");
    }
    async sendVideo(chatId, video, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, video, params, _3_types_js_2.FileType.Video, [
            new _2_tl_js_1.types.DocumentAttributeVideo({
                supports_streaming: params?.supportsStreaming ? true : undefined,
                w: params?.width ?? 0,
                h: params?.height ?? 0,
                duration: params?.duration ?? 0,
            }),
        ]);
        return (0, _3_types_js_2.assertMessageType)(message, "video");
    }
    async sendDocument(chatId, document, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, document, params, _3_types_js_2.FileType.Document, []);
        return (0, _3_types_js_2.assertMessageType)(message, "document");
    }
    async sendSticker(chatId, sticker, params) {
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendDocumentInner).call(this, chatId, sticker, params, _3_types_js_2.FileType.Sticker, [new _2_tl_js_1.types.DocumentAttributeSticker({ alt: params?.emoji || "", stickerset: new _2_tl_js_1.types.InputStickerSetEmpty() })], undefined, STICKER_MIME_TYPES);
        return (0, _3_types_js_2.assertMessageType)(message, "sticker");
    }
    async sendPhoto(chatId, photo, params) {
        let media = null;
        const spoiler = params?.hasSpoiler ? true : undefined;
        if (typeof photo === "string") {
            const fileId = this.resolveFileId(photo, [_3_types_js_2.FileType.Photo, _3_types_js_2.FileType.ProfilePhoto]);
            if (fileId != null) {
                media = new _2_tl_js_1.types.InputMediaPhoto({
                    id: new _2_tl_js_1.types.InputPhoto(fileId),
                    spoiler,
                });
            }
        }
        if (media == null) {
            if (typeof photo === "string" && (0, _0_utilities_js_1.isHttpUrl)(photo)) {
                media = new _2_tl_js_1.types.InputMediaPhotoExternal({ url: photo, spoiler });
            }
            else {
                const [contents, fileName] = await (0, _0_utilities_js_1.getFileContents)(photo);
                const file = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(contents, { fileName, chunkSize: params?.chunkSize, signal: params?.signal });
                media = new _2_tl_js_1.types.InputMediaUploadedPhoto({ file, spoiler });
            }
        }
        const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendMedia).call(this, chatId, media, params);
        return (0, _3_types_js_2.assertMessageType)(message, "photo");
    }
    resolveFileId(maybeFileId, expectedFileType) {
        expectedFileType = Array.isArray(expectedFileType) ? expectedFileType : [expectedFileType];
        let fileId = null;
        try {
            fileId = (0, _3_types_js_1.deserializeFileId)(maybeFileId);
        }
        catch (err) {
            __classPrivateFieldGet(this, _MessageManager_LresolveFileId, "f").warning(err);
        }
        if (fileId != null) {
            if (!expectedFileType.includes(fileId.type)) {
                (0, _1_utilities_js_1.UNREACHABLE)();
            }
            return {
                id: "id" in fileId.location ? fileId.location.id : (0, _1_utilities_js_1.UNREACHABLE)(),
                access_hash: fileId.location.accessHash,
                file_reference: fileId.fileReference ?? new Uint8Array(),
            };
        }
        return null;
    }
    async sendPoll(chatId, question, options, params) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        const randomId = (0, _1_utilities_js_1.getRandomId)();
        const silent = params?.disableNotification ? true : undefined;
        const noforwards = params?.protectContent ? true : undefined;
        const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
        const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
        const explanation = params?.explanation;
        const parseResult = explanation !== undefined ? await this.parseText(explanation, { parseMode: params?.explanationParseMode, entities: params?.explanationEntities }) : undefined;
        const solution = parseResult === undefined ? undefined : parseResult[0];
        const solutionEntities = parseResult === undefined ? undefined : parseResult[1];
        const answers = options.map((v, i) => new _2_tl_js_1.types.PollAnswer({ option: new Uint8Array([i]), text: v }));
        const poll = new _2_tl_js_1.types.Poll({
            id: (0, _1_utilities_js_1.getRandomId)(),
            answers,
            question,
            closed: params?.isClosed ? true : undefined,
            close_date: params?.closeDate ? (0, _1_utilities_js_1.toUnixTimestamp)(params.closeDate) : undefined,
            close_period: params?.openPeriod ? params.openPeriod : undefined,
            multiple_choice: params?.allowMultipleAnswers ? true : undefined,
            public_voters: params?.isAnonymous === false ? true : undefined,
            quiz: params?.type == "quiz" ? true : undefined,
        });
        const media = new _2_tl_js_1.types.InputMediaPoll({
            poll,
            correct_answers: params?.correctOptionIndex ? [new Uint8Array([params.correctOptionIndex])] : undefined,
            solution,
            solution_entities: solutionEntities,
        });
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new _2_tl_js_1.functions.messages.sendMedia({
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
        return (0, _3_types_js_2.assertMessageType)(message, "poll");
    }
    async editMessageReplyMarkup(chatId, messageId, params) {
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editMessage({
            id: messageId,
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        });
        const message_ = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result).then((v) => v[0]);
        return message_;
    }
    async editInlineMessageReplyMarkup(inlineMessageId, params) {
        const id = (0, _3_types_js_2.deserializeInlineMessageId)(inlineMessageId);
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
            media = new _2_tl_js_1.types.InputMediaWebPage({
                url: params.linkPreview.url,
                force_large_media: params.linkPreview.largeMedia ? true : undefined,
                force_small_media: params.linkPreview.smallMedia ? true : undefined,
                optional: message.length ? undefined : true,
            });
        }
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editMessage({
            id: messageId,
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            entities,
            message,
            media,
            no_webpage: noWebpage,
            invert_media: invertMedia,
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        });
        const message_ = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result).then((v) => v[0]);
        return (0, _3_types_js_2.assertMessageType)(message_, "text");
    }
    async editInlineMessageText(inlineMessageId, text, params) {
        const [message, entities] = await this.parseText(text, params);
        const id = (0, _3_types_js_2.deserializeInlineMessageId)(inlineMessageId);
        const noWebpage = params?.linkPreview?.disable ? true : undefined;
        const invertMedia = params?.linkPreview?.aboveText ? true : undefined;
        let media = undefined;
        if (!noWebpage && params?.linkPreview?.url) {
            media = new _2_tl_js_1.types.InputMediaWebPage({
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
    async deleteMessages(chatId, messageIds, params) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (peer instanceof _2_tl_js_1.types.InputPeerChannel) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.deleteMessages({ channel: new _2_tl_js_1.types.InputChannel(peer), id: messageIds });
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
            id: messageId,
            silent: params?.disableNotification ? true : undefined,
            pm_oneside: params?.bothSides ? undefined : true,
        });
    }
    async unpinMessage(chatId, messageId) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.updatePinnedMessage({
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            id: messageId,
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
            available_reactions: availableReactions == "none" ? new _2_tl_js_1.types.ChatReactionsNone() : availableReactions == "all" ? new _2_tl_js_1.types.ChatReactionsAll() : Array.isArray(availableReactions) ? new _2_tl_js_1.types.ChatReactionsSome({ reactions: availableReactions.map((v) => v.type == "emoji" ? new _2_tl_js_1.types.ReactionEmoji({ emoticon: v.emoji }) : new _2_tl_js_1.types.ReactionCustomEmoji({ document_id: BigInt(v.id) })) }) : (0, _1_utilities_js_1.UNREACHABLE)(),
        });
    }
    async setReactions(chatId, messageId, reactions, params) {
        await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendReaction).call(this, chatId, messageId, reactions, params);
    }
    async addReaction(chatId, messageId, reaction, params) {
        const chosenReactions = await this.getMessage(chatId, messageId).then((v) => v?.reactions ?? []).then((v) => v.filter((v) => v.chosen));
        for (const r of chosenReactions) {
            if ((0, _3_types_js_2.reactionEqual)(r.reaction, reaction)) {
                return;
            }
        }
        const reactions = [reaction, ...chosenReactions.map((v) => v.reaction)];
        await this.setReactions(chatId, messageId, reactions, params);
    }
    async removeReaction(chatId, messageId, reaction) {
        const chosenReactions = await this.getMessage(chatId, messageId).then((v) => v?.reactions ?? []).then((v) => v.filter((v) => v.chosen));
        for (const r of chosenReactions) {
            if ((0, _3_types_js_2.reactionEqual)(r.reaction, reaction)) {
                const reactions = chosenReactions.filter((v) => v != r).map((v) => v.reaction);
                await this.setReactions(chatId, messageId, reactions);
                break;
            }
        }
    }
    static canHandleUpdate(update) {
        return update instanceof _2_tl_js_1.types.UpdateNewMessage ||
            update instanceof _2_tl_js_1.types.UpdateNewChannelMessage ||
            update instanceof _2_tl_js_1.types.UpdateEditMessage ||
            update instanceof _2_tl_js_1.types.UpdateEditChannelMessage ||
            update instanceof _2_tl_js_1.types.UpdateBotNewBusinessMessage ||
            update instanceof _2_tl_js_1.types.UpdateBotEditBusinessMessage ||
            update instanceof _2_tl_js_1.types.UpdateBotDeleteBusinessMessage ||
            update instanceof _2_tl_js_1.types.UpdateDeleteMessages ||
            update instanceof _2_tl_js_1.types.UpdateDeleteChannelMessages ||
            update instanceof _2_tl_js_1.types.UpdateChannelParticipant ||
            update instanceof _2_tl_js_1.types.UpdateChatParticipant;
    }
    async handleUpdate(update) {
        if (update instanceof _2_tl_js_1.types.UpdateNewMessage || update instanceof _2_tl_js_1.types.UpdateNewChannelMessage || update instanceof _2_tl_js_1.types.UpdateEditMessage || update instanceof _2_tl_js_1.types.UpdateEditChannelMessage) {
            if (update.message instanceof _2_tl_js_1.types.Message || update.message instanceof _2_tl_js_1.types.MessageService) {
                const chatId = (0, _2_tl_js_1.peerToChatId)(update.message.peer_id);
                await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.setMessage(chatId, update.message.id, update.message);
            }
        }
        if (update instanceof _2_tl_js_1.types.UpdateNewMessage ||
            update instanceof _2_tl_js_1.types.UpdateNewChannelMessage ||
            update instanceof _2_tl_js_1.types.UpdateEditMessage ||
            update instanceof _2_tl_js_1.types.UpdateEditChannelMessage ||
            update instanceof _2_tl_js_1.types.UpdateBotNewBusinessMessage ||
            update instanceof _2_tl_js_1.types.UpdateBotEditBusinessMessage) {
            if (!(update.message instanceof _2_tl_js_1.types.MessageEmpty)) {
                const isOutgoing = update.message.out;
                let shouldIgnore = isOutgoing ? (await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.getAccountType()) == "user" ? false : true : false;
                if (__classPrivateFieldGet(this, _MessageManager_c, "f").ignoreOutgoing != null && isOutgoing) {
                    shouldIgnore = __classPrivateFieldGet(this, _MessageManager_c, "f").ignoreOutgoing;
                }
                if (!shouldIgnore) {
                    const business = "connection_id" in update ? { connectionId: update.connection_id, replyToMessage: update.reply_to_message } : undefined;
                    const message = await this.constructMessage(update.message, undefined, business);
                    if (update instanceof _2_tl_js_1.types.UpdateNewMessage || update instanceof _2_tl_js_1.types.UpdateNewChannelMessage || update instanceof _2_tl_js_1.types.UpdateBotNewBusinessMessage) {
                        return ({ message });
                    }
                    else {
                        return ({ editedMessage: message });
                    }
                }
            }
        }
        if (update instanceof _2_tl_js_1.types.UpdateDeleteMessages) {
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
        else if (update instanceof _2_tl_js_1.types.UpdateDeleteChannelMessages) {
            const chatId = (0, _2_tl_js_1.getChannelChatId)(update.channel_id);
            const deletedMessages = new Array();
            for (const messageId of update.messages) {
                const message = await __classPrivateFieldGet(this, _MessageManager_c, "f").messageStorage.getMessage(chatId, messageId);
                if (message != null) {
                    deletedMessages.push({ chatId, messageId });
                }
            }
            return { deletedMessages };
        }
        else if (update instanceof _2_tl_js_1.types.UpdateBotDeleteBusinessMessage) {
            const chatId = (0, _2_tl_js_1.peerToChatId)(update.peer);
            const deletedMessages = update.messages.map((v) => ({ chatId, messageId: v }));
            return { deletedMessages, businessConnectionId: update.connection_id };
        }
        if (update instanceof _2_tl_js_1.types.UpdateChannelParticipant || update instanceof _2_tl_js_1.types.UpdateChatParticipant) {
            const chatMember = await (0, _3_types_js_1.constructChatMemberUpdated)(update, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity);
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
                action_ = new _2_tl_js_1.types.SendMessageTypingAction();
                break;
            case "uploadPhoto":
                action_ = new _2_tl_js_1.types.SendMessageUploadPhotoAction({ progress: 0 });
                break;
            case "recordVideo":
                action_ = new _2_tl_js_1.types.SendMessageRecordVideoAction();
                break;
            case "uploadVideo":
                action_ = new _2_tl_js_1.types.SendMessageRecordVideoAction();
                break;
            case "recordVoice":
                action_ = new _2_tl_js_1.types.SendMessageRecordAudioAction();
                break;
            case "uploadAudio":
                action_ = new _2_tl_js_1.types.SendMessageUploadAudioAction({ progress: 0 });
                break;
            case "uploadDocument":
                action_ = new _2_tl_js_1.types.SendMessageUploadDocumentAction({ progress: 0 });
                break;
            case "chooseSticker":
                action_ = new _2_tl_js_1.types.SendMessageChooseStickerAction();
                break;
            case "findLocation":
                action_ = new _2_tl_js_1.types.SendMessageGeoLocationAction();
                break;
            case "recordVideoNote":
                action_ = new _2_tl_js_1.types.SendMessageRecordRoundAction();
                break;
            case "uploadVideoNote":
                action_ = new _2_tl_js_1.types.SendMessageUploadRoundAction({ progress: 0 });
                break;
            default:
                throw new _0_errors_js_1.InputError(`Invalid chat action: ${action}`);
        }
        await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new _2_tl_js_1.functions.messages.setTyping({ peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId), action: action_, top_msg_id: params?.messageThreadId }), params?.businessConnectionId);
    }
    async deleteChatPhoto(chatId) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (!(peer instanceof _2_tl_js_1.types.InputPeerChannel) && !(peer instanceof _2_tl_js_1.types.InputPeerChat)) {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
        if (peer instanceof _2_tl_js_1.types.InputPeerChannel) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.editPhoto({ channel: new _2_tl_js_1.types.InputChannel(peer), photo: new _2_tl_js_1.types.InputChatPhotoEmpty() });
        }
        else if (peer instanceof _2_tl_js_1.types.InputPeerChat) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editChatPhoto({ chat_id: peer.chat_id, photo: new _2_tl_js_1.types.InputChatPhotoEmpty() });
        }
    }
    async setChatPhoto(chatId, photo, params) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (!(peer instanceof _2_tl_js_1.types.InputPeerChannel) && !(peer instanceof _2_tl_js_1.types.InputPeerChat)) {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
        const [contents, fileName] = await (0, _0_utilities_js_1.getFileContents)(photo);
        const file = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(contents, { fileName: params?.fileName ?? fileName, chunkSize: params?.chunkSize, signal: params?.signal });
        const photo_ = new _2_tl_js_1.types.InputChatUploadedPhoto({ file });
        if (peer instanceof _2_tl_js_1.types.InputPeerChannel) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.editPhoto({ channel: new _2_tl_js_1.types.InputChannel(peer), photo: photo_ });
        }
        else if (peer instanceof _2_tl_js_1.types.InputPeerChat) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editChatPhoto({ chat_id: peer.chat_id, photo: photo_ });
        }
    }
    async banChatMember(chatId, memberId, params) {
        const chat = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (!(chat instanceof _2_tl_js_1.types.InputPeerChannel) && !(chat instanceof _2_tl_js_1.types.InputPeerChat)) {
            throw new _0_errors_js_1.InputError("Expected a channel, supergroup, or group ID.");
        }
        const member = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(memberId);
        if (chat instanceof _2_tl_js_1.types.InputPeerChannel) {
            if (params?.deleteMessages) {
                try {
                    await this.deleteChatMemberMessages(chatId, memberId);
                }
                catch {
                    //
                }
            }
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.editBanned({
                channel: new _2_tl_js_1.types.InputChannel(chat),
                participant: member,
                banned_rights: new _2_tl_js_1.types.ChatBannedRights({
                    until_date: params?.untilDate ? (0, _1_utilities_js_1.toUnixTimestamp)(params.untilDate) : 0,
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
        else if (chat instanceof _2_tl_js_1.types.InputPeerChat) {
            if (!(member instanceof _2_tl_js_1.types.InputPeerUser)) {
                throw new _0_errors_js_1.InputError(`Invalid user ID: ${memberId}`);
            }
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.deleteChatUser({
                chat_id: chat.chat_id,
                user_id: new _2_tl_js_1.types.InputUser(member),
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
            banned_rights: new _2_tl_js_1.types.ChatBannedRights({ until_date: 0 }),
        });
    }
    async setChatMemberRights(chatId, memberId, params) {
        const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
        const member = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(memberId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.editBanned({
            channel,
            participant: member,
            banned_rights: (0, _3_types_js_2.chatMemberRightsToTlObject)(params?.rights, params?.untilDate),
        });
    }
    async getChatAdministrators(chatId) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (peer instanceof _2_tl_js_1.types.InputPeerChannel) {
            const channel = new _2_tl_js_1.types.InputChannel(peer);
            const participants = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.getParticipants({
                channel,
                filter: new _2_tl_js_1.types.ChannelParticipantsAdmins(),
                offset: 0,
                limit: 100,
                hash: 0n,
            });
            if (participants instanceof _2_tl_js_1.types.channels.ChannelParticipantsNotModified) {
                (0, _1_utilities_js_1.UNREACHABLE)();
            }
            const chatMembers = new Array();
            for (const p of participants.participants) {
                chatMembers.push(await (0, _3_types_js_2.constructChatMember)(p, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity));
            }
            return chatMembers;
        }
        else if (peer instanceof _2_tl_js_1.types.InputPeerChat) {
            const fullChat = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.getFullChat(peer); // TODO: full chat cache
            if (!(fullChat.full_chat instanceof _2_tl_js_1.types.ChatFull) || !(fullChat.full_chat.participants instanceof _2_tl_js_1.types.ChatParticipants)) {
                (0, _1_utilities_js_1.UNREACHABLE)();
            }
            const chatMembers = new Array();
            for (const p of fullChat.full_chat.participants.participants) {
                chatMembers.push(await (0, _3_types_js_2.constructChatMember)(p, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity));
            }
            return chatMembers;
        }
        else {
            (0, _1_utilities_js_1.UNREACHABLE)();
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
            filter: (0, _0_message_search_filter_js_1.messageSearchFilterToTlObject)(params?.filter ?? "empty"),
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
            (0, _1_utilities_js_1.UNREACHABLE)();
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
            throw new _0_errors_js_1.InputError("requireApproval cannot be true while limit is specified.");
        }
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.exportChatInvite({
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            title: params?.title,
            expire_date: params?.expireAt ? (0, _1_utilities_js_1.toUnixTimestamp)(params.expireAt) : undefined,
            request_needed: params?.requireApproval ? true : undefined,
            usage_limit: params?.limit,
        });
        return await (0, _3_types_js_1.constructInviteLink)(result[_2_tl_js_1.as](_2_tl_js_1.types.ChatInviteExported), __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity);
    }
    async getCreatedInviteLinks(chatId, params) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("getCreatedInviteLinks");
        const { invites } = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.getExportedChatInvites({
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            revoked: params?.revoked ? true : undefined,
            admin_id: params?.by ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputUser(params.by) : new _2_tl_js_1.types.InputUserEmpty(),
            limit: params?.limit ?? 100,
            offset_date: params?.afterDate ? (0, _1_utilities_js_1.toUnixTimestamp)(params.afterDate) : undefined,
            offset_link: params?.afterInviteLink,
        });
        return await Promise.all(invites.map((v) => v[_2_tl_js_1.as](_2_tl_js_1.types.ChatInviteExported)).map((v) => (0, _3_types_js_1.constructInviteLink)(v, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity)));
    }
    async joinChat(chatId) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("joinChat");
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (peer instanceof _2_tl_js_1.types.InputPeerUser) {
            throw new _0_errors_js_1.InputError("Cannot join private chats.");
        }
        else if (peer instanceof _2_tl_js_1.types.InputPeerChannel) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.joinChannel({ channel: new _2_tl_js_1.types.InputChannel(peer) });
        }
        else if (peer instanceof _2_tl_js_1.types.InputPeerChat) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.addChatUser({ chat_id: peer.chat_id, user_id: new _2_tl_js_1.types.InputUserSelf(), fwd_limit: 0 }); // TODO: use potential high-level method for adding participants to chats
        }
        else {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
    }
    async leaveChat(chatId) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (peer instanceof _2_tl_js_1.types.InputPeerUser) {
            throw new _0_errors_js_1.InputError("Cannot leave private chats.");
        }
        else if (peer instanceof _2_tl_js_1.types.InputPeerChannel) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.leaveChannel({ channel: new _2_tl_js_1.types.InputChannel(peer) });
        }
        else if (peer instanceof _2_tl_js_1.types.InputPeerChat) {
            await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.deleteChatUser({ chat_id: peer.chat_id, user_id: new _2_tl_js_1.types.InputUserSelf() }); // TODO: use potential high-level method for adding participants to chats
        }
        else {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
    }
    async blockUser(userId) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("blockUser");
        const id = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(userId);
        if (!(id instanceof _2_tl_js_1.types.User)) {
            throw new _0_errors_js_1.InputError("Only users can be blocked or unblocked.");
        }
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.contacts.block({ id });
    }
    async unblockUser(userId) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertUser("unblockUser");
        const id = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(userId);
        if (!(id instanceof _2_tl_js_1.types.User)) {
            throw new _0_errors_js_1.InputError("Only users can be blocked or unblocked.");
        }
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.contacts.unblock({ id });
    }
    async getChatMember(chatId, userId) {
        const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
        if (peer instanceof _2_tl_js_1.types.InputPeerChannel) {
            const { participant } = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.getParticipant({
                channel: new _2_tl_js_1.types.InputChannel(peer),
                participant: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(userId),
            });
            return await (0, _3_types_js_2.constructChatMember)(participant, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity);
        }
        else if (peer instanceof _2_tl_js_1.types.InputPeerChat) {
            const user = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputUser(userId);
            const fullChat = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.getFullChat(peer).then((v) => v.full_chat[_2_tl_js_1.as](_2_tl_js_1.types.ChatFull));
            const participant = fullChat.participants[_2_tl_js_1.as](_2_tl_js_1.types.ChatParticipants).participants.find((v) => v.user_id == user.user_id);
            return await (0, _3_types_js_2.constructChatMember)(participant, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity);
        }
        else {
            throw new _0_errors_js_1.InputError("Expected a channel, supergroup, or group ID. Got a user ID instead.");
        }
    }
    async setChatStickerSet(chatId, setName) {
        const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.setStickers({ channel, stickerset: new _2_tl_js_1.types.InputStickerSetShortName({ short_name: setName }) });
    }
    async deleteChatStickerSet(chatId) {
        const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.setStickers({ channel, stickerset: new _2_tl_js_1.types.InputStickerSetEmpty() });
    }
    async stopPoll(chatId, messageId, params) {
        const message = await this.getMessage(chatId, messageId);
        if (!message) {
            throw new _0_errors_js_1.InputError("Message not found.");
        }
        if (!("poll" in message)) {
            throw new _0_errors_js_1.InputError("Message is not a poll.");
        }
        if (message.poll.isClosed) {
            throw new _0_errors_js_1.InputError("Poll is already stopped.");
        }
        const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editMessage({
            peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
            id: messageId,
            media: new _2_tl_js_1.types.InputMediaPoll({
                poll: new _2_tl_js_1.types.Poll({
                    id: BigInt(message.poll.id),
                    closed: true,
                    question: "",
                    answers: [],
                }),
            }),
            reply_markup: await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params),
        });
        const message_ = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_updatesToMessages).call(this, chatId, result).then((v) => v[0]);
        return (0, _3_types_js_2.assertMessageType)(message_, "poll").poll;
    }
    async editMessageLiveLocation(chatId, messageId, latitude, longitude, params) {
        const message = await this.getMessage(chatId, messageId);
        if (message && "location" in message && message.location.livePeriod) {
            const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editMessage({
                peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
                id: messageId,
                media: new _2_tl_js_1.types.InputMediaGeoLive({
                    geo_point: new _2_tl_js_1.types.InputGeoPoint({
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
            return (0, _3_types_js_2.assertMessageType)(message, "location");
        }
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
    async editInlineMessageLiveLocation(inlineMessageId, latitude, longitude, params) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertBot("editInlineMessageLiveLocation");
        const id = (0, _3_types_js_2.deserializeInlineMessageId)(inlineMessageId);
        await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.editInlineBotMessage({
            id,
            media: new _2_tl_js_1.types.InputMediaGeoLive({
                geo_point: new _2_tl_js_1.types.InputGeoPoint({
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
exports.MessageManager = MessageManager;
_MessageManager_c = new WeakMap(), _MessageManager_LresolveFileId = new WeakMap(), _MessageManager_instances = new WeakSet(), _MessageManager_updatesToMessages = async function _MessageManager_updatesToMessages(chatId, updates, businessConnectionId) {
    const messages = new Array();
    if (updates instanceof _2_tl_js_1.types.Updates) {
        for (const update of updates.updates) {
            if ("message" in update && update.message instanceof _2_tl_js_1.types.MessageEmpty) {
                continue;
            }
            if (update instanceof _2_tl_js_1.types.UpdateNewMessage || update instanceof _2_tl_js_1.types.UpdateEditMessage) {
                messages.push(await this.constructMessage(update.message));
            }
            else if (update instanceof _2_tl_js_1.types.UpdateNewChannelMessage || update instanceof _2_tl_js_1.types.UpdateEditChannelMessage) {
                messages.push(await this.constructMessage(update.message));
            }
            else if (update instanceof _2_tl_js_1.types.UpdateBotNewBusinessMessage) {
                messages.push(await this.constructMessage(update.message, false, { connectionId: businessConnectionId ?? update.connection_id, replyToMessage: update.reply_to_message }));
            }
            else if (update instanceof _2_tl_js_1.types.UpdateBotEditBusinessMessage) {
                messages.push(await this.constructMessage(update.message, false, { connectionId: businessConnectionId ?? update.connection_id, replyToMessage: update.reply_to_message }));
            }
        }
    }
    else if (updates instanceof _2_tl_js_1.types.UpdateShortSentMessage) {
        const message = await this.getMessage(chatId, updates.id);
        if (message != null) {
            messages.push(message);
        }
    }
    return messages;
}, _MessageManager_constructReplyMarkup = async function _MessageManager_constructReplyMarkup(params) {
    if (params?.replyMarkup) {
        await __classPrivateFieldGet(this, _MessageManager_c, "f").storage.assertBot("replyMarkup");
        return (0, _3_types_js_2.replyMarkupToTlObject)(params.replyMarkup, this.usernameResolver.bind(this));
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
    return replyToMsgId !== undefined ? new _2_tl_js_1.types.InputReplyToMessage({ reply_to_msg_id: replyToMsgId, top_msg_id: topMsgId, quote_text: params?.replyQuote?.text, quote_entities: await Promise.all(params?.replyQuote?.entities.map((v) => (0, _3_types_js_2.messageEntityToTlObject)(v, __classPrivateFieldGet(this, _MessageManager_c, "f").getEntity)) ?? []), quote_offset: params?.replyQuote?.offset }) : undefined;
}, _MessageManager_sendDocumentInner = async function _MessageManager_sendDocumentInner(chatId, document, params, fileType, otherAttribs, urlSupported = false, expectedMimeTypes) {
    let media = null;
    const spoiler = params?.hasSpoiler ? true : undefined;
    if (typeof document === "string") {
        const fileId = this.resolveFileId(document, fileType);
        if (fileId != null) {
            media = new _2_tl_js_1.types.InputMediaDocument({
                id: new _2_tl_js_1.types.InputDocument(fileId),
                spoiler,
                query: otherAttribs.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeSticker)?.alt || undefined,
            });
        }
    }
    if (media == null) {
        if (typeof document === "string" && (0, _0_utilities_js_1.isHttpUrl)(document)) {
            if (!urlSupported) {
                throw new _0_errors_js_1.InputError("URL not supported.");
            }
            media = new _2_tl_js_1.types.InputMediaDocumentExternal({ url: document, spoiler });
        }
        else {
            const [contents, fileName_] = await (0, _0_utilities_js_1.getFileContents)(document);
            let fileName = params?.fileName ?? fileName_;
            const mimeType = params?.mimeType ?? (0, _0_deps_js_1.contentType)(fileName.split(".").slice(-1)[0]) ?? FALLBACK_MIME_TYPE;
            if (expectedMimeTypes && !expectedMimeTypes.includes(mimeType)) {
                (0, _1_utilities_js_1.UNREACHABLE)();
            }
            if (fileName.endsWith(".tgs") && fileType == _3_types_js_2.FileType.Document) {
                fileName += "-";
            }
            const file = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(contents, { fileName, chunkSize: params?.chunkSize, signal: params?.signal });
            let thumb = undefined;
            if (params?.thumbnail) {
                const [thumbContents, fileName__] = await (0, _0_utilities_js_1.getFileContents)(params.thumbnail);
                thumb = await __classPrivateFieldGet(this, _MessageManager_c, "f").fileManager.upload(thumbContents, { fileName: fileName__, chunkSize: params?.chunkSize, signal: params?.signal });
            }
            media = new _2_tl_js_1.types.InputMediaUploadedDocument({
                file,
                thumb,
                spoiler,
                attributes: [new _2_tl_js_1.types.DocumentAttributeFilename({ file_name: fileName }), ...otherAttribs],
                mime_type: mimeType,
                force_file: fileType == _3_types_js_2.FileType.Document ? true : undefined,
            });
        }
    }
    const message = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_sendMedia).call(this, chatId, media, params);
    return message;
}, _MessageManager_sendMedia = async function _MessageManager_sendMedia(chatId, media, params) {
    const peer = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId);
    const randomId = (0, _1_utilities_js_1.getRandomId)();
    const silent = params?.disableNotification ? true : undefined;
    const noforwards = params?.protectContent ? true : undefined;
    const sendAs = params?.sendAs ? await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(params.sendAs) : undefined; // TODO: check default sendAs
    const replyMarkup = await __classPrivateFieldGet(this, _MessageManager_instances, "m", _MessageManager_constructReplyMarkup).call(this, params);
    const caption_ = params?.caption;
    const parseResult = caption_ !== undefined ? await this.parseText(caption_, { parseMode: params?.parseMode, entities: params?.captionEntities }) : undefined;
    const caption = parseResult === undefined ? undefined : parseResult[0];
    const captionEntities = parseResult === undefined ? undefined : parseResult[1];
    const result = await __classPrivateFieldGet(this, _MessageManager_c, "f").invoke(new _2_tl_js_1.functions.messages.sendMedia({
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
}, _MessageManager_sendReaction = async function _MessageManager_sendReaction(chatId, messageId, reactions, params) {
    await __classPrivateFieldGet(this, _MessageManager_c, "f").api.messages.sendReaction({
        peer: await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputPeer(chatId),
        msg_id: messageId,
        reaction: reactions.map((v) => (0, _3_types_js_2.reactionToTlObject)(v)),
        big: params?.big ? true : undefined,
        add_to_recent: params?.addToRecents ? true : undefined,
    });
}, _MessageManager_toggleJoinRequests = async function _MessageManager_toggleJoinRequests(chatId, enabled) {
    const channel = await __classPrivateFieldGet(this, _MessageManager_c, "f").getInputChannel(chatId);
    await __classPrivateFieldGet(this, _MessageManager_c, "f").api.channels.toggleJoinRequest({ channel, enabled });
};
