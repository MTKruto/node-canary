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
var _Client_instances, _a, _Client_client, _Client_guaranteeUpdateDelivery, _Client_updateManager, _Client_networkStatisticsManager, _Client_botInfoManager, _Client_fileManager, _Client_reactionManager, _Client_videoChatManager, _Client_businessConnectionManager, _Client_messageManager, _Client_storyManager, _Client_callbackQueryManager, _Client_inlineQueryManager, _Client_chatListManager, _Client_accountManager, _Client_storage_, _Client_messageStorage_, _Client_parseMode, _Client_apiId, _Client_apiHash, _Client_publicKeys, _Client_ignoreOutgoing, _Client_persistCache, _Client_LsignIn, _Client_LpingLoop, _Client_LhandleMigrationError, _Client_L$initConncetion, _Client_namespaceProxies, _Client_getApiId, _Client_getCdnConnectionPool, _Client_getCdnConnection, _Client_constructContext, _Client_propagateConnectionState, _Client_lastPropagatedConnectionState, _Client_stateChangeHandler, _Client_storageInited, _Client_initStorage, _Client_connectionInited, _Client_lastPropagatedAuthorizationState, _Client_propagateAuthorizationState, _Client_getSelfId, _Client_pingLoopStarted, _Client_pingLoopAbortController, _Client_pingInterval, _Client_lastUpdates, _Client_startPingLoop, _Client_pingLoop, _Client_invoke, _Client_handleInvokeError, _Client_getUserAccessHash, _Client_getChannelAccessHash, _Client_getInputPeerInner, _Client_handleCtxUpdate, _Client_queueHandleCtxUpdate, _Client_handleUpdate, _Client_lastGetMe, _Client_getMe;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.handleMigrationError = exports.restartAuth = exports.Composer = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _2_storage_js_1 = require("../2_storage.js");
const _3_types_js_1 = require("../3_types.js");
const _4_constants_js_1 = require("../4_constants.js");
const _4_errors_js_1 = require("../4_errors.js");
const _0_password_js_1 = require("./0_password.js");
const _0_utilities_js_1 = require("./0_utilities.js");
const _2_account_manager_js_1 = require("./2_account_manager.js");
const _2_bot_info_manager_js_1 = require("./2_bot_info_manager.js");
const _2_business_connection_manager_js_1 = require("./2_business_connection_manager.js");
const _1_client_encrypted_js_1 = require("./1_client_encrypted.js");
const _1_client_plain_js_1 = require("./1_client_plain.js");
const _1_composer_js_1 = require("./1_composer.js");
const _2_file_manager_js_1 = require("./2_file_manager.js");
const _2_network_statistics_manager_js_1 = require("./2_network_statistics_manager.js");
const _2_reaction_manager_js_1 = require("./2_reaction_manager.js");
const _2_update_manager_js_1 = require("./2_update_manager.js");
const _3_message_manager_js_1 = require("./3_message_manager.js");
const _4_callback_query_manager_js_1 = require("./4_callback_query_manager.js");
const _4_chat_list_manager_js_1 = require("./4_chat_list_manager.js");
const _4_inline_query_manager_js_1 = require("./4_inline_query_manager.js");
const _4_story_manager_js_1 = require("./4_story_manager.js");
const _3_video_chat_manager_js_1 = require("./3_video_chat_manager.js");
const _0_storage_operations_js_1 = require("./0_storage_operations.js");
const _4_errors_js_2 = require("../4_errors.js");
class Composer extends _1_composer_js_1.Composer {
}
exports.Composer = Composer;
function skipInvoke() {
    return (_ctx, next) => next();
}
exports.restartAuth = Symbol("restartAuth");
exports.handleMigrationError = Symbol("handleMigrationError");
// global Client ID counter for logs
let id = 0;
const getEntity = Symbol();
const functionNamespaces = Object.entries(_2_tl_js_1.functions).filter(([, v]) => !(v instanceof Function)).map(([k]) => k);
/**
 * An MTKruto client.
 */
class Client extends Composer {
    /**
     * Constructs the client.
     */
    constructor(params) {
        super();
        _Client_instances.add(this);
        _Client_client.set(this, void 0);
        _Client_guaranteeUpdateDelivery.set(this, void 0);
        _Client_updateManager.set(this, void 0);
        _Client_networkStatisticsManager.set(this, void 0);
        _Client_botInfoManager.set(this, void 0);
        _Client_fileManager.set(this, void 0);
        _Client_reactionManager.set(this, void 0);
        _Client_videoChatManager.set(this, void 0);
        _Client_businessConnectionManager.set(this, void 0);
        _Client_messageManager.set(this, void 0);
        _Client_storyManager.set(this, void 0);
        _Client_callbackQueryManager.set(this, void 0);
        _Client_inlineQueryManager.set(this, void 0);
        _Client_chatListManager.set(this, void 0);
        _Client_accountManager.set(this, void 0);
        _Client_storage_.set(this, void 0);
        _Client_messageStorage_.set(this, void 0);
        Object.defineProperty(this, "storage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "messageStorage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _Client_parseMode.set(this, void 0);
        _Client_apiId.set(this, void 0);
        _Client_apiHash.set(this, void 0);
        Object.defineProperty(this, "appVersion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deviceModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "langCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "langPack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "systemLangCode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "systemVersion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _Client_publicKeys.set(this, void 0);
        _Client_ignoreOutgoing.set(this, void 0);
        _Client_persistCache.set(this, void 0);
        _Client_LsignIn.set(this, void 0);
        _Client_LpingLoop.set(this, void 0);
        _Client_LhandleMigrationError.set(this, void 0);
        _Client_L$initConncetion.set(this, void 0);
        _Client_namespaceProxies.set(this, (() => {
            // deno-lint-ignore no-explicit-any
            const proxies = {};
            for (const name of functionNamespaces) {
                const ns = _2_tl_js_1.functions[name];
                proxies[name] = new Proxy({}, {
                    get: (_, key) => {
                        if (key in ns) {
                            // deno-lint-ignore no-explicit-any
                            const func = ns[key];
                            if (func instanceof Function) {
                                // deno-lint-ignore no-explicit-any
                                return (params) => {
                                    // deno-lint-ignore ban-ts-comment
                                    // @ts-ignore
                                    return this.invoke(new func(params));
                                };
                            }
                            else {
                                (0, _0_deps_js_1.unreachable)();
                            }
                        }
                    },
                    set() {
                        return true;
                    },
                });
            }
            return proxies;
        })());
        Object.defineProperty(this, "api", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Proxy({}, {
                get: (_, key) => {
                    if (key in _2_tl_js_1.functions) {
                        const func = _2_tl_js_1.functions[key];
                        if (func instanceof Function) {
                            // deno-lint-ignore no-explicit-any
                            return (params) => {
                                // deno-lint-ignore ban-ts-comment
                                // @ts-ignore
                                return this.invoke(new func(params));
                            };
                        }
                        else {
                            return __classPrivateFieldGet(this, _Client_namespaceProxies, "f")[key];
                        }
                    }
                },
                set() {
                    return true;
                },
            })
        });
        _Client_constructContext.set(this, async (update) => {
            const msg = "message" in update ? update.message : "editedMessage" in update ? update.editedMessage : "callbackQuery" in update ? update.callbackQuery.message : undefined;
            const reactions = "messageInteractions" in update ? update.messageInteractions : undefined;
            const mustGetMsg = () => {
                if (msg !== undefined) {
                    return { chatId: msg.chat.id, messageId: msg.id, businessConnectionId: msg.businessConnectionId, senderId: (msg.from ?? msg.senderChat)?.id };
                }
                else if (reactions !== undefined) {
                    return { chatId: reactions.chatId, messageId: reactions.messageId };
                }
                else {
                    (0, _0_deps_js_1.unreachable)();
                }
            };
            const mustGetUserId = () => {
                if (msg?.from) {
                    return msg.from.id;
                }
                else if ("callbackQuery" in update) {
                    return update.callbackQuery.from.id;
                }
                else if ("chosenInlineResult" in update) {
                    return update.chosenInlineResult.from.id;
                }
                else {
                    (0, _0_deps_js_1.unreachable)();
                }
            };
            const mustGetInlineMsgId = () => {
                if ("chosenInlineResult" in update) {
                    if (update.chosenInlineResult.inlineMessageId) {
                        return update.chosenInlineResult.inlineMessageId;
                    }
                }
                else if ("callbackQuery" in update) {
                    if (update.callbackQuery.inlineMessageId) {
                        return update.callbackQuery.inlineMessageId;
                    }
                }
                (0, _0_deps_js_1.unreachable)();
            };
            const chat_ = "messageReactions" in update ? update.messageReactions.chat : "messageReactionCount" in update ? update.messageReactionCount.chat : "chatMember" in update ? update.chatMember.chat : undefined;
            const chat = chat_ ?? msg?.chat;
            const from = "callbackQuery" in update ? update.callbackQuery.from : "inlineQuery" in update ? update.inlineQuery.from : "message" in update ? update.message.from : "editedMessage" in update ? update.editedMessage?.from : "chatMember" in update ? update.chatMember.from : "messageReactions" in update ? update.messageReactions.user : undefined;
            const senderChat = msg?.senderChat;
            const getReplyToMessageId = (quote, chatId, messageId) => {
                const isPrivate = chatId > 0;
                const shouldQuote = quote === undefined ? !isPrivate : quote;
                const replyToMessageId = shouldQuote ? messageId : undefined;
                return replyToMessageId;
            };
            const me = "connectionState" in update ? __classPrivateFieldGet(this, _Client_lastGetMe, "f") : ("authorizationState" in update && !update.authorizationState.authorized) ? __classPrivateFieldGet(this, _Client_lastGetMe, "f") : await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getMe).call(this);
            const context = {
                ...update,
                client: this,
                me: (me == null ? undefined : me),
                msg: msg,
                chat: chat,
                from: from,
                senderChat: senderChat,
                get toJSON() {
                    return () => update;
                },
                reply: (text, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendMessage(chatId, text, { ...params, replyToMessageId, businessConnectionId });
                },
                replyPoll: (question, options, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendPoll(chatId, question, options, { ...params, replyToMessageId, businessConnectionId });
                },
                replyPhoto: (photo, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendPhoto(chatId, photo, { ...params, replyToMessageId, businessConnectionId });
                },
                replyDocument: (document, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendDocument(chatId, document, { ...params, replyToMessageId, businessConnectionId });
                },
                replySticker: (sticker, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendSticker(chatId, sticker, { ...params, replyToMessageId, businessConnectionId });
                },
                replyContact: (firstName, number, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendContact(chatId, firstName, number, { ...params, replyToMessageId, businessConnectionId });
                },
                replyLocation: (latitude, longitude, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendLocation(chatId, latitude, longitude, { ...params, replyToMessageId, businessConnectionId });
                },
                replyDice: (params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendDice(chatId, { ...params, replyToMessageId, businessConnectionId });
                },
                replyVenue: (latitude, longitude, title, address, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendVenue(chatId, latitude, longitude, title, address, { ...params, replyToMessageId, businessConnectionId });
                },
                replyVideo: (video, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendVideo(chatId, video, { ...params, replyToMessageId, businessConnectionId });
                },
                replyAnimation: (document, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendAnimation(chatId, document, { ...params, replyToMessageId, businessConnectionId });
                },
                replyVoice: (document, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendVoice(chatId, document, { ...params, replyToMessageId, businessConnectionId });
                },
                replyAudio: (document, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendAudio(chatId, document, { ...params, replyToMessageId, businessConnectionId });
                },
                replyVideoNote: (videoNote, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyToMessageId = getReplyToMessageId(params?.quote, chatId, messageId);
                    return this.sendVideoNote(chatId, videoNote, { ...params, replyToMessageId, businessConnectionId });
                },
                delete: () => {
                    const { chatId, messageId } = mustGetMsg();
                    return this.deleteMessage(chatId, messageId);
                },
                forward: (to, params) => {
                    const { chatId, messageId } = mustGetMsg();
                    return this.forwardMessage(chatId, to, messageId, params);
                },
                pin: (params) => {
                    const { chatId, messageId } = mustGetMsg();
                    return this.pinMessage(chatId, messageId, params);
                },
                unpin: () => {
                    const { chatId, messageId } = mustGetMsg();
                    return this.unpinMessage(chatId, messageId);
                },
                banSender: (params) => {
                    const { chatId, senderId } = mustGetMsg();
                    if (!senderId) {
                        (0, _0_deps_js_1.unreachable)();
                    }
                    return this.banChatMember(chatId, senderId, params);
                },
                kickSender: () => {
                    const { chatId, senderId } = mustGetMsg();
                    if (!senderId) {
                        (0, _0_deps_js_1.unreachable)();
                    }
                    return this.kickChatMember(chatId, senderId);
                },
                setSenderRights: (params) => {
                    const { chatId, senderId } = mustGetMsg();
                    if (!senderId) {
                        (0, _0_deps_js_1.unreachable)();
                    }
                    return this.setChatMemberRights(chatId, senderId, params);
                },
                getChatAdministrators: () => {
                    const { chatId } = mustGetMsg();
                    return this.getChatAdministrators(chatId);
                },
                react: (reactions, params) => {
                    const { chatId, messageId } = mustGetMsg();
                    return this.setReactions(chatId, messageId, reactions, params);
                },
                answerCallbackQuery: (params) => {
                    if (!("callbackQuery" in update)) {
                        (0, _0_deps_js_1.unreachable)();
                    }
                    return this.answerCallbackQuery(update.callbackQuery.id, params);
                },
                answerInlineQuery: (results, params) => {
                    if (!("inlineQuery" in update)) {
                        (0, _0_deps_js_1.unreachable)();
                    }
                    return this.answerInlineQuery(update.inlineQuery.id, results, params);
                },
                sendChatAction: (chatAction, params) => {
                    const { chatId } = mustGetMsg();
                    return this.sendChatAction(chatId, chatAction, params);
                },
                editInlineMessageText: (text, params) => {
                    const inlineMessageId = mustGetInlineMsgId();
                    return this.editInlineMessageText(inlineMessageId, text, params);
                },
                editInlineMessageLiveLocation: (latitude, longitude, params) => {
                    const inlineMessageId = mustGetInlineMsgId();
                    return this.editInlineMessageLiveLocation(inlineMessageId, latitude, longitude, params);
                },
                editInlineMessageReplyMarkup: (params) => {
                    const inlineMessageId = mustGetInlineMsgId();
                    return this.editInlineMessageReplyMarkup(inlineMessageId, params);
                },
                editMessageText: (messageId, text, params) => {
                    const { chatId } = mustGetMsg();
                    return this.editMessageText(chatId, messageId, text, params);
                },
                editMessageLiveLocation: (messageId, latitude, longitude, params) => {
                    const { chatId } = mustGetMsg();
                    return this.editMessageLiveLocation(chatId, messageId, latitude, longitude, params);
                },
                editMessageReplyMarkup: (messageId, params) => {
                    const { chatId } = mustGetMsg();
                    return this.editMessageReplyMarkup(chatId, messageId, params);
                },
                getMessage: (messageId) => {
                    const { chatId } = mustGetMsg();
                    return this.getMessage(chatId, messageId);
                },
                getMessages: (messageIds) => {
                    const { chatId } = mustGetMsg();
                    return this.getMessages(chatId, messageIds);
                },
                forwardMessage: (to, messageId, params) => {
                    const { chatId } = mustGetMsg();
                    return this.forwardMessage(chatId, to, messageId, params);
                },
                forwardMessages: (to, messageIds, params) => {
                    const { chatId } = mustGetMsg();
                    return this.forwardMessages(chatId, to, messageIds, params);
                },
                deleteMessage: (messageId, params) => {
                    const { chatId } = mustGetMsg();
                    return this.deleteMessage(chatId, messageId, params);
                },
                deleteMessages: (messageIds, params) => {
                    const { chatId } = mustGetMsg();
                    return this.deleteMessages(chatId, messageIds, params);
                },
                pinMessage: (messageId, params) => {
                    const { chatId } = mustGetMsg();
                    return this.pinMessage(chatId, messageId, params);
                },
                unpinMessage: (messageId) => {
                    const { chatId } = mustGetMsg();
                    return this.unpinMessage(chatId, messageId);
                },
                unpinMessages: () => {
                    const { chatId } = mustGetMsg();
                    return this.unpinMessages(chatId);
                },
                setAvailableReactions: (availableReactions) => {
                    const { chatId } = mustGetMsg();
                    return this.setAvailableReactions(chatId, availableReactions);
                },
                addReaction: (messageId, reaction, params) => {
                    const { chatId } = mustGetMsg();
                    return this.addReaction(chatId, messageId, reaction, params);
                },
                removeReaction: (messageId, reaction) => {
                    const { chatId } = mustGetMsg();
                    return this.removeReaction(chatId, messageId, reaction);
                },
                setReactions: (messageId, reactions, params) => {
                    const { chatId } = mustGetMsg();
                    return this.setReactions(chatId, messageId, reactions, params);
                },
                setChatPhoto: (photo, params) => {
                    const { chatId } = mustGetMsg();
                    return this.setChatPhoto(chatId, photo, params);
                },
                deleteChatPhoto: () => {
                    const { chatId } = mustGetMsg();
                    return this.deleteChatPhoto(chatId);
                },
                banChatMember: (memberId, params) => {
                    const { chatId } = mustGetMsg();
                    return this.banChatMember(chatId, memberId, params);
                },
                unbanChatMember: (memberId) => {
                    const { chatId } = mustGetMsg();
                    return this.unbanChatMember(chatId, memberId);
                },
                kickChatMember: (memberId) => {
                    const { chatId } = mustGetMsg();
                    return this.kickChatMember(chatId, memberId);
                },
                setChatMemberRights: (memberId, params) => {
                    const { chatId } = mustGetMsg();
                    return this.setChatMemberRights(chatId, memberId, params);
                },
                deleteChatMemberMessages: (userId) => {
                    const { chatId } = mustGetMsg();
                    return this.deleteChatMemberMessages(chatId, userId);
                },
                searchMessages: (query, params) => {
                    const { chatId } = mustGetMsg();
                    return this.searchMessages(chatId, query, params);
                },
                setBoostsRequiredToCircumventRestrictions: (boosts) => {
                    const { chatId } = mustGetMsg();
                    return this.setBoostsRequiredToCircumventRestrictions(chatId, boosts);
                },
                createInviteLink: (params) => {
                    const { chatId } = mustGetMsg();
                    return this.createInviteLink(chatId, params);
                },
                getCreatedInviteLinks: (params) => {
                    const { chatId } = mustGetMsg();
                    return this.getCreatedInviteLinks(chatId, params);
                },
                leave: () => {
                    const { chatId } = mustGetMsg();
                    return this.leaveChat(chatId);
                },
                block: () => {
                    return this.blockUser(mustGetUserId());
                },
                unblock: () => {
                    return this.unblockUser(mustGetUserId());
                },
                getChatMember: (userId) => {
                    const { chatId } = mustGetMsg();
                    return this.getChatMember(chatId, userId);
                },
                setChatStickerSet: (setName) => {
                    const { chatId } = mustGetMsg();
                    return this.setChatStickerSet(chatId, setName);
                },
                deleteChatStickerSet: () => {
                    const { chatId } = mustGetMsg();
                    return this.deleteChatStickerSet(chatId);
                },
                getBusinessConnection: () => {
                    const { businessConnectionId } = mustGetMsg();
                    if (!businessConnectionId) {
                        (0, _0_deps_js_1.unreachable)();
                    }
                    return this.getBusinessConnection(businessConnectionId);
                },
            };
            return (0, _1_utilities_js_1.cleanObject)(context);
        });
        _Client_lastPropagatedConnectionState.set(this, null);
        _Client_stateChangeHandler.set(this, ((connected) => {
            const connectionState = connected ? "ready" : "notConnected";
            if (this.connected == connected && __classPrivateFieldGet(this, _Client_lastPropagatedConnectionState, "f") != connectionState) {
                __classPrivateFieldGet(this, _Client_instances, "m", _Client_propagateConnectionState).call(this, connectionState);
            }
        }).bind(this));
        _Client_storageInited.set(this, false);
        _Client_connectionInited.set(this, false);
        _Client_lastPropagatedAuthorizationState.set(this, null);
        _Client_pingLoopStarted.set(this, false);
        _Client_pingLoopAbortController.set(this, null);
        _Client_pingInterval.set(this, 1 * _1_utilities_js_1.minute);
        _Client_lastUpdates.set(this, new Date());
        _Client_handleInvokeError.set(this, skipInvoke());
        /**
         * Invokes a function waiting and returning its reply if the second parameter is not `true`. Requires the client
         * to be connected.
         *
         * @param function_ The function to invoke.
         */
        Object.defineProperty(this, "invoke", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Object.assign(__classPrivateFieldGet(this, _Client_instances, "m", _Client_invoke), {
                use: (handler) => {
                    const handle = __classPrivateFieldGet(this, _Client_handleInvokeError, "f");
                    __classPrivateFieldSet(this, _Client_handleInvokeError, async (ctx, next) => {
                        let result = null;
                        return await handle(ctx, async () => {
                            if (result != null)
                                return result;
                            result = await handler(ctx, next);
                            return result;
                        });
                    }, "f");
                },
            })
        });
        _Client_lastGetMe.set(this, null);
        __classPrivateFieldSet(this, _Client_client, new _1_client_encrypted_js_1.ClientEncrypted(params), "f");
        __classPrivateFieldGet(this, _Client_client, "f").stateChangeHandler = __classPrivateFieldGet(this, _Client_stateChangeHandler, "f").bind(this);
        __classPrivateFieldGet(this, _Client_client, "f").handlers = {
            serverSaltReassigned: async (newServerSalt) => {
                await this.storage.setServerSalt(newServerSalt);
            },
            updates: (updates, call, callback) => {
                __classPrivateFieldGet(this, _Client_updateManager, "f").processUpdates(updates, true, call, callback);
                __classPrivateFieldSet(this, _Client_lastUpdates, new Date(), "f");
            },
            result: async (result, callback) => {
                await __classPrivateFieldGet(this, _Client_updateManager, "f").processResult(result);
                callback();
            },
            error: async (_err, source) => {
                switch (source) {
                    case "deserialization":
                        await __classPrivateFieldGet(this, _Client_updateManager, "f").recoverUpdateGap(source);
                        break;
                    case "decryption":
                        try {
                            await this.disconnect();
                        }
                        catch {
                            //
                        }
                        await this.connect();
                        await __classPrivateFieldGet(this, _Client_updateManager, "f").recoverUpdateGap(source);
                        break;
                }
            },
        };
        __classPrivateFieldSet(this, _Client_apiId, params?.apiId ?? 0, "f");
        __classPrivateFieldSet(this, _Client_apiHash, params?.apiHash ?? "", "f");
        __classPrivateFieldSet(this, _Client_storage_, params?.storage || new _2_storage_js_1.StorageMemory(), "f");
        __classPrivateFieldSet(this, _Client_persistCache, params?.persistCache ?? false, "f");
        if (!__classPrivateFieldGet(this, _Client_persistCache, "f")) {
            __classPrivateFieldSet(this, _Client_messageStorage_, new _2_storage_js_1.StorageMemory(), "f");
        }
        else {
            __classPrivateFieldSet(this, _Client_messageStorage_, __classPrivateFieldGet(this, _Client_storage_, "f"), "f");
        }
        this.storage = new _0_storage_operations_js_1.StorageOperations(__classPrivateFieldGet(this, _Client_storage_, "f"));
        this.messageStorage = new _0_storage_operations_js_1.StorageOperations(__classPrivateFieldGet(this, _Client_messageStorage_, "f"));
        __classPrivateFieldSet(this, _Client_parseMode, params?.parseMode ?? null, "f");
        this.appVersion = params?.appVersion ?? _4_constants_js_1.APP_VERSION;
        this.deviceModel = params?.deviceModel ?? _4_constants_js_1.DEVICE_MODEL;
        this.langCode = params?.langCode ?? _4_constants_js_1.LANG_CODE;
        this.langPack = params?.langPack ?? _4_constants_js_1.LANG_PACK;
        this.systemLangCode = params?.systemLangCode ?? _4_constants_js_1.SYSTEM_LANG_CODE;
        this.systemVersion = params?.systemVersion ?? _4_constants_js_1.SYSTEM_VERSION;
        __classPrivateFieldSet(this, _Client_publicKeys, params?.publicKeys, "f");
        __classPrivateFieldSet(this, _Client_ignoreOutgoing, params?.ignoreOutgoing ?? null, "f");
        if (params?.prefixes) {
            this.prefixes = params?.prefixes;
        }
        __classPrivateFieldSet(this, _Client_guaranteeUpdateDelivery, params?.guaranteeUpdateDelivery ?? false, "f");
        const L = (0, _1_utilities_js_1.getLogger)("Client").client(id++);
        __classPrivateFieldSet(this, _Client_LsignIn, L.branch("signIn"), "f");
        __classPrivateFieldSet(this, _Client_LpingLoop, L.branch("pingLoop"), "f");
        __classPrivateFieldSet(this, _Client_LhandleMigrationError, L.branch("[handleMigrationError]"), "f");
        __classPrivateFieldSet(this, _Client_L$initConncetion, L.branch("#initConnection"), "f");
        const c = {
            id,
            api: this.api,
            invoke: async (function_, businessConnectionId) => {
                if (businessConnectionId) {
                    return await this.api.invokeWithBusinessConnection({ connection_id: businessConnectionId, query: function_ });
                }
                else {
                    return await this.invoke(function_);
                }
            },
            storage: this.storage,
            messageStorage: this.messageStorage,
            guaranteeUpdateDelivery: __classPrivateFieldGet(this, _Client_guaranteeUpdateDelivery, "f"),
            setConnectionState: __classPrivateFieldGet(this, _Client_instances, "m", _Client_propagateConnectionState).bind(this),
            resetConnectionState: () => __classPrivateFieldGet(this, _Client_stateChangeHandler, "f").call(this, this.connected),
            getSelfId: __classPrivateFieldGet(this, _Client_instances, "m", _Client_getSelfId).bind(this),
            getInputPeer: this.getInputPeer.bind(this),
            getInputChannel: this.getInputChannel.bind(this),
            getInputUser: this.getInputUser.bind(this),
            getEntity: this[getEntity].bind(this),
            handleUpdate: __classPrivateFieldGet(this, _Client_instances, "m", _Client_queueHandleCtxUpdate).bind(this),
            parseMode: __classPrivateFieldGet(this, _Client_parseMode, "f"),
            getCdnConnection: __classPrivateFieldGet(this, _Client_instances, "m", _Client_getCdnConnection).bind(this),
            getCdnConnectionPool: __classPrivateFieldGet(this, _Client_instances, "m", _Client_getCdnConnectionPool).bind(this),
            cdn: params?.cdn ?? false,
            ignoreOutgoing: __classPrivateFieldGet(this, _Client_ignoreOutgoing, "f"),
            dropPendingUpdates: params?.dropPendingUpdates,
        };
        __classPrivateFieldSet(this, _Client_updateManager, new _2_update_manager_js_1.UpdateManager(c), "f");
        __classPrivateFieldSet(this, _Client_networkStatisticsManager, new _2_network_statistics_manager_js_1.NetworkStatisticsManager(c), "f");
        __classPrivateFieldSet(this, _Client_botInfoManager, new _2_bot_info_manager_js_1.BotInfoManager(c), "f");
        __classPrivateFieldSet(this, _Client_fileManager, new _2_file_manager_js_1.FileManager(c), "f");
        __classPrivateFieldSet(this, _Client_reactionManager, new _2_reaction_manager_js_1.ReactionManager(c), "f");
        __classPrivateFieldSet(this, _Client_businessConnectionManager, new _2_business_connection_manager_js_1.BusinessConnectionManager(c), "f");
        __classPrivateFieldSet(this, _Client_videoChatManager, new _3_video_chat_manager_js_1.VideoChatManager({ ...c, fileManager: __classPrivateFieldGet(this, _Client_fileManager, "f") }), "f");
        __classPrivateFieldSet(this, _Client_messageManager, new _3_message_manager_js_1.MessageManager({ ...c, fileManager: __classPrivateFieldGet(this, _Client_fileManager, "f") }), "f");
        __classPrivateFieldSet(this, _Client_callbackQueryManager, new _4_callback_query_manager_js_1.CallbackQueryManager({ ...c, messageManager: __classPrivateFieldGet(this, _Client_messageManager, "f") }), "f");
        __classPrivateFieldSet(this, _Client_storyManager, new _4_story_manager_js_1.StoryManager({ ...c, fileManager: __classPrivateFieldGet(this, _Client_fileManager, "f"), messageManager: __classPrivateFieldGet(this, _Client_messageManager, "f") }), "f");
        __classPrivateFieldSet(this, _Client_inlineQueryManager, new _4_inline_query_manager_js_1.InlineQueryManager({ ...c, messageManager: __classPrivateFieldGet(this, _Client_messageManager, "f") }), "f");
        __classPrivateFieldSet(this, _Client_chatListManager, new _4_chat_list_manager_js_1.ChatListManager({ ...c, fileManager: __classPrivateFieldGet(this, _Client_fileManager, "f"), messageManager: __classPrivateFieldGet(this, _Client_messageManager, "f") }), "f");
        __classPrivateFieldSet(this, _Client_accountManager, new _2_account_manager_js_1.AccountManager(c), "f");
        __classPrivateFieldGet(this, _Client_updateManager, "f").setUpdateHandler(__classPrivateFieldGet(this, _Client_instances, "m", _Client_handleUpdate).bind(this));
        const transportProvider = __classPrivateFieldGet(this, _Client_client, "f").transportProvider;
        __classPrivateFieldGet(this, _Client_client, "f").transportProvider = (params) => {
            const transport = transportProvider(params);
            transport.connection.callback = __classPrivateFieldGet(this, _Client_networkStatisticsManager, "f").getTransportReadWriteCallback();
            return transport;
        };
        if (params?.defaultHandlers ?? true) {
            this.on("connectionState", ({ connectionState }, next) => {
                (0, _1_utilities_js_1.drop)((async () => {
                    if (connectionState == "notConnected") {
                        if (this.disconnected) {
                            L.debug("not reconnecting");
                            return;
                        }
                        let delay = 5;
                        while (!this.connected) {
                            L.debug("reconnecting");
                            try {
                                await this.connect();
                                L.debug("reconnected");
                                (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _Client_updateManager, "f").recoverUpdateGap("reconnect"));
                                break;
                            }
                            catch (err) {
                                if (delay < 15) {
                                    delay += 5;
                                }
                                L.debug(`failed to reconnect, retrying in ${delay}:`, err);
                            }
                            await new Promise((r) => setTimeout(r, delay * _1_utilities_js_1.second));
                        }
                    }
                })());
                return next();
            });
            this.invoke.use(async ({ error }, next) => {
                if (error instanceof _4_errors_js_1.FloodWait && error.seconds <= 10) {
                    L.warning("sleeping for", error.seconds, "because of:", error);
                    await new Promise((r) => setTimeout(r, 1000 * error.seconds));
                    return true;
                }
                else {
                    return next();
                }
            });
        }
    }
    // direct ClientEncrypted property proxies
    get connected() {
        return __classPrivateFieldGet(this, _Client_client, "f").connected;
    }
    get disconnected() {
        return __classPrivateFieldGet(this, _Client_client, "f").disconnected;
    }
    /**
     * Sets the DC and resets the auth key stored in the session provider
     * if the stored DC was not the same as the `dc` parameter.
     *
     * @param dc The DC to change to.
     */
    async setDc(dc) {
        await __classPrivateFieldGet(this, _Client_instances, "m", _Client_initStorage).call(this);
        if (await this.storage.getDc() != dc) {
            await this.storage.setDc(dc);
            await this.storage.setAuthKey(null);
            await this.storage.getAuthKey();
        }
        __classPrivateFieldGet(this, _Client_client, "f").setDc(dc);
    }
    /**
     * Loads the session if `setDc` was not called, initializes and connnects
     * a `ClientPlain` to generate auth key if there was none, and connects the client.
     * Before establishing the connection, the session is saved.
     */
    async connect() {
        await __classPrivateFieldGet(this, _Client_instances, "m", _Client_initStorage).call(this);
        const [authKey, dc] = await Promise.all([this.storage.getAuthKey(), this.storage.getDc()]);
        if (authKey != null && dc != null) {
            await __classPrivateFieldGet(this, _Client_client, "f").setAuthKey(authKey);
            await __classPrivateFieldGet(this, _Client_client, "f").setDc(dc); // TODO: remove await
            if (__classPrivateFieldGet(this, _Client_client, "f").serverSalt == 0n) {
                __classPrivateFieldGet(this, _Client_client, "f").serverSalt = await this.storage.getServerSalt() ?? 0n;
            }
        }
        else {
            const plain = new _1_client_plain_js_1.ClientPlain({ initialDc: __classPrivateFieldGet(this, _Client_client, "f").initialDc, transportProvider: __classPrivateFieldGet(this, _Client_client, "f").transportProvider, cdn: __classPrivateFieldGet(this, _Client_client, "f").cdn, publicKeys: __classPrivateFieldGet(this, _Client_publicKeys, "f") });
            const dc = await this.storage.getDc();
            if (dc != null) {
                plain.setDc(dc);
                __classPrivateFieldGet(this, _Client_client, "f").setDc(dc);
            }
            await plain.connect();
            const [authKey, serverSalt] = await plain.createAuthKey();
            (0, _1_utilities_js_1.drop)(plain.disconnect());
            await __classPrivateFieldGet(this, _Client_client, "f").setAuthKey(authKey);
            __classPrivateFieldGet(this, _Client_client, "f").serverSalt = serverSalt;
        }
        await __classPrivateFieldGet(this, _Client_client, "f").connect();
        await Promise.all([this.storage.setAuthKey(__classPrivateFieldGet(this, _Client_client, "f").authKey), this.storage.setDc(__classPrivateFieldGet(this, _Client_client, "f").dc), this.storage.setServerSalt(__classPrivateFieldGet(this, _Client_client, "f").serverSalt)]);
    }
    async reconnect(dc) {
        await this.disconnect();
        if (dc) {
            await this.setDc(dc);
        }
        await this.connect();
    }
    async [(_Client_client = new WeakMap(), _Client_guaranteeUpdateDelivery = new WeakMap(), _Client_updateManager = new WeakMap(), _Client_networkStatisticsManager = new WeakMap(), _Client_botInfoManager = new WeakMap(), _Client_fileManager = new WeakMap(), _Client_reactionManager = new WeakMap(), _Client_videoChatManager = new WeakMap(), _Client_businessConnectionManager = new WeakMap(), _Client_messageManager = new WeakMap(), _Client_storyManager = new WeakMap(), _Client_callbackQueryManager = new WeakMap(), _Client_inlineQueryManager = new WeakMap(), _Client_chatListManager = new WeakMap(), _Client_accountManager = new WeakMap(), _Client_storage_ = new WeakMap(), _Client_messageStorage_ = new WeakMap(), _Client_parseMode = new WeakMap(), _Client_apiId = new WeakMap(), _Client_apiHash = new WeakMap(), _Client_publicKeys = new WeakMap(), _Client_ignoreOutgoing = new WeakMap(), _Client_persistCache = new WeakMap(), _Client_LsignIn = new WeakMap(), _Client_LpingLoop = new WeakMap(), _Client_LhandleMigrationError = new WeakMap(), _Client_L$initConncetion = new WeakMap(), _Client_namespaceProxies = new WeakMap(), _Client_constructContext = new WeakMap(), _Client_lastPropagatedConnectionState = new WeakMap(), _Client_stateChangeHandler = new WeakMap(), _Client_storageInited = new WeakMap(), _Client_connectionInited = new WeakMap(), _Client_lastPropagatedAuthorizationState = new WeakMap(), _Client_pingLoopStarted = new WeakMap(), _Client_pingLoopAbortController = new WeakMap(), _Client_pingInterval = new WeakMap(), _Client_lastUpdates = new WeakMap(), _Client_handleInvokeError = new WeakMap(), _Client_lastGetMe = new WeakMap(), _Client_instances = new WeakSet(), _Client_getApiId = async function _Client_getApiId() {
        const apiId = __classPrivateFieldGet(this, _Client_apiId, "f") || await this.storage.getApiId();
        if (!apiId) {
            throw new _0_errors_js_1.InputError("apiId not set");
        }
        return apiId;
    }, _Client_getCdnConnectionPool = function _Client_getCdnConnectionPool(connectionCount, dcId) {
        const connections = new Array();
        for (let i = 0; i < connectionCount; ++i) {
            connections.push(__classPrivateFieldGet(this, _Client_instances, "m", _Client_getCdnConnection).call(this, dcId));
        }
        let prev = 0;
        return {
            size: connectionCount,
            api: () => {
                if (prev + 1 > connections.length)
                    prev = 0;
                const connection = connections[prev++];
                return connection.api;
            },
            connect: async () => {
                for await (const connection of connections) {
                    await connection.connect();
                }
            },
            disconnect: async () => {
                for await (const connection of connections) {
                    await connection.disconnect();
                }
            },
        };
    }, _Client_getCdnConnection = function _Client_getCdnConnection(dcId) {
        const provider = this.storage.provider;
        const client = new _a({
            storage: (!dcId || dcId == __classPrivateFieldGet(this, _Client_client, "f").dcId) ? provider : provider.branch(`download_client_${dcId}`),
            apiId: __classPrivateFieldGet(this, _Client_apiId, "f"),
            apiHash: __classPrivateFieldGet(this, _Client_apiHash, "f"),
            transportProvider: __classPrivateFieldGet(this, _Client_client, "f").transportProvider,
            appVersion: this.appVersion,
            deviceModel: this.deviceModel,
            langCode: this.langCode,
            langPack: this.langPack,
            systemLangCode: this.systemLangCode,
            systemVersion: this.systemVersion,
            cdn: true,
        });
        __classPrivateFieldGet(client, _Client_client, "f").serverSalt = __classPrivateFieldGet(this, _Client_client, "f").serverSalt;
        client.invoke.use(async (ctx, next) => {
            if (ctx.error instanceof _4_errors_js_1.AuthKeyUnregistered && dcId) {
                try {
                    const exportedAuth = await this.api.auth.exportAuthorization({ dc_id: dcId });
                    await client.api.auth.importAuthorization(exportedAuth);
                    return true;
                }
                catch (err) {
                    throw err;
                }
            }
            else {
                return await next();
            }
        });
        return {
            api: client.api,
            connect: async () => {
                await client.connect();
                if (dcId && dcId != __classPrivateFieldGet(this, _Client_client, "f").dcId) {
                    let dc = String(dcId);
                    if (__classPrivateFieldGet(this, _Client_client, "f").dcId < 0) {
                        dc += "-test";
                    }
                    await client.setDc(dc);
                }
            },
            disconnect: client.disconnect.bind(client),
        };
    }, _Client_propagateConnectionState = function _Client_propagateConnectionState(connectionState) {
        __classPrivateFieldGet(this, _Client_instances, "m", _Client_queueHandleCtxUpdate).call(this, { connectionState });
        __classPrivateFieldSet(this, _Client_lastPropagatedConnectionState, connectionState, "f");
    }, _Client_initStorage = async function _Client_initStorage() {
        if (!__classPrivateFieldGet(this, _Client_storageInited, "f")) {
            await this.storage.initialize();
            if (!__classPrivateFieldGet(this, _Client_guaranteeUpdateDelivery, "f")) {
                await this.storage.deleteUpdates();
            }
            __classPrivateFieldSet(this, _Client_storageInited, true, "f");
        }
    }, exports.handleMigrationError)](err) {
        let newDc = String(err.dc);
        if (Math.abs(__classPrivateFieldGet(this, _Client_client, "f").dcId) >= 10000) {
            newDc += "-test";
        }
        await this.reconnect(newDc);
        __classPrivateFieldGet(this, _Client_LhandleMigrationError, "f").debug(`migrated to DC${newDc}`);
    }
    async disconnect() {
        __classPrivateFieldSet(this, _Client_connectionInited, false, "f");
        await __classPrivateFieldGet(this, _Client_client, "f").disconnect();
        __classPrivateFieldGet(this, _Client_pingLoopAbortController, "f")?.abort();
    }
    /**
     * Signs in using the provided parameters if not already signed in.
     * If no parameters are provided, the credentials will be prompted in runtime.
     *
     * Notes:
     * 1. Requires the `apiId` and `apiHash` paramters to be passed when constructing the client.
     * 3. Reconnects the client to the appropriate DC in case of MIGRATE_X errors.
     */
    async signIn(params) {
        try {
            await __classPrivateFieldGet(this, _Client_updateManager, "f").fetchState("signIn");
            await __classPrivateFieldGet(this, _Client_instances, "m", _Client_propagateAuthorizationState).call(this, true);
            (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _Client_updateManager, "f").recoverUpdateGap("signIn"));
            __classPrivateFieldGet(this, _Client_LsignIn, "f").debug("already signed in");
            return;
        }
        catch (err) {
            if (!(err instanceof _4_errors_js_1.AuthKeyUnregistered)) {
                throw err;
            }
        }
        const apiId = await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getApiId).call(this);
        if (!__classPrivateFieldGet(this, _Client_apiHash, "f")) {
            throw new _0_errors_js_1.InputError("apiHash not set");
        }
        if (typeof params === "undefined") {
            const loginType = (0, _1_utilities_js_1.mustPromptOneOf)("Do you want to login as bot [b] or user [u]?", ["b", "u"]);
            if (loginType == "b") {
                params = { botToken: (0, _1_utilities_js_1.mustPrompt)("Bot token:") };
            }
            else {
                params = { phone: () => (0, _1_utilities_js_1.mustPrompt)("Phone number:"), code: () => (0, _1_utilities_js_1.mustPrompt)("Verification code:"), password: () => (0, _1_utilities_js_1.mustPrompt)("Password:") };
            }
        }
        __classPrivateFieldGet(this, _Client_LsignIn, "f").debug("authorizing with", typeof params === "string" ? "bot token" : params instanceof _2_tl_js_1.types.auth.ExportedAuthorization ? "exported authorization" : "AuthorizeUserParams");
        if (params && "botToken" in params) {
            while (true) {
                try {
                    const auth = await this.api.auth.importBotAuthorization({ api_id: apiId, api_hash: __classPrivateFieldGet(this, _Client_apiHash, "f"), bot_auth_token: params.botToken, flags: 0 });
                    await this.storage.setAccountId(Number(auth[_2_tl_js_1.as](_2_tl_js_1.types.auth.Authorization).user.id));
                    await this.storage.setAccountType("bot");
                    break;
                }
                catch (err) {
                    if (err instanceof _4_errors_js_1.Migrate) {
                        await this[exports.handleMigrationError](err);
                        continue;
                    }
                    else {
                        throw err;
                    }
                }
            }
            __classPrivateFieldGet(this, _Client_LsignIn, "f").debug("authorized as bot");
            await __classPrivateFieldGet(this, _Client_instances, "m", _Client_propagateAuthorizationState).call(this, true);
            await __classPrivateFieldGet(this, _Client_updateManager, "f").fetchState("authorize");
            return;
        }
        auth: while (true) {
            try {
                let phone;
                let sentCode;
                while (true) {
                    try {
                        phone = typeof params.phone === "string" ? params.phone : await params.phone();
                        const sendCode = () => this.api.auth.sendCode({
                            phone_number: phone,
                            api_id: __classPrivateFieldGet(this, _Client_apiId, "f"),
                            api_hash: __classPrivateFieldGet(this, _Client_apiHash, "f"),
                            settings: new _2_tl_js_1.types.CodeSettings(),
                        }).then((v) => v[_2_tl_js_1.as](_2_tl_js_1.types.auth.SentCode));
                        try {
                            sentCode = await sendCode();
                        }
                        catch (err) {
                            if (err instanceof _4_errors_js_1.Migrate) {
                                await this[exports.handleMigrationError](err);
                                sentCode = await sendCode();
                            }
                            else {
                                throw err;
                            }
                        }
                        break;
                    }
                    catch (err) {
                        if (err instanceof _4_errors_js_1.PhoneNumberInvalid) {
                            continue;
                        }
                        else {
                            throw err;
                        }
                    }
                }
                __classPrivateFieldGet(this, _Client_LsignIn, "f").debug("verification code sent");
                let err;
                code: while (true) {
                    const code = typeof params.code === "string" ? params.code : await params.code();
                    try {
                        const auth = await this.api.auth.signIn({
                            phone_number: phone,
                            phone_code: code,
                            phone_code_hash: sentCode.phone_code_hash,
                        });
                        await this.storage.setAccountId(Number(auth[_2_tl_js_1.as](_2_tl_js_1.types.auth.Authorization).user.id));
                        await this.storage.setAccountType("user");
                        __classPrivateFieldGet(this, _Client_LsignIn, "f").debug("signed in as user");
                        await __classPrivateFieldGet(this, _Client_instances, "m", _Client_propagateAuthorizationState).call(this, true);
                        await __classPrivateFieldGet(this, _Client_updateManager, "f").fetchState("signIn");
                        return;
                    }
                    catch (err_) {
                        if (err_ instanceof _4_errors_js_2.PhoneCodeInvalid) {
                            continue code;
                        }
                        else {
                            err = err_;
                            break code;
                        }
                    }
                }
                if (!(err instanceof _4_errors_js_1.SessionPasswordNeeded)) {
                    throw err;
                }
                password: while (true) {
                    const ap = await this.api.account.getPassword();
                    if (!(ap.current_algo instanceof _2_tl_js_1.types.PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow)) {
                        throw new Error(`Handling ${ap.current_algo?.[_2_tl_js_1.name]} not implemented`);
                    }
                    try {
                        const password = typeof params.password === "string" ? params.password : await params.password(ap.hint ?? null);
                        const input = await (0, _0_password_js_1.checkPassword)(password, ap);
                        const auth = await this.api.auth.checkPassword({ password: input });
                        await this.storage.setAccountId(Number(auth[_2_tl_js_1.as](_2_tl_js_1.types.auth.Authorization).user.id));
                        await this.storage.setAccountType("user");
                        __classPrivateFieldGet(this, _Client_LsignIn, "f").debug("signed in as user");
                        await __classPrivateFieldGet(this, _Client_instances, "m", _Client_propagateAuthorizationState).call(this, true);
                        await __classPrivateFieldGet(this, _Client_updateManager, "f").fetchState("signIn");
                        return;
                    }
                    catch (err) {
                        if (err instanceof _4_errors_js_1.PasswordHashInvalid) {
                            continue password;
                        }
                        else {
                            throw err;
                        }
                    }
                }
            }
            catch (err) {
                if (err == exports.restartAuth) {
                    continue auth;
                }
                else {
                    throw err;
                }
            }
        }
    }
    async signOut() {
        try {
            await Promise.all([
                this.storage.reset(),
                this.api.auth.logOut().then(() => {
                    __classPrivateFieldGet(this, _Client_instances, "m", _Client_propagateAuthorizationState).call(this, false);
                }),
            ]);
        }
        finally {
            __classPrivateFieldSet(this, _Client_lastGetMe, null, "f");
            await this.reconnect();
        }
    }
    /**
     * Same as calling `.connect()` followed by `.signIn(params)`.
     */
    async start(params) {
        await this.connect();
        await this.signIn(params);
    }
    /**
     * Alias for `invoke` with its second parameter being `true`.
     */
    send(function_) {
        return this.invoke(function_, true);
    }
    exportAuthString() {
        return this.storage.exportAuthString(__classPrivateFieldGet(this, _Client_apiId, "f"));
    }
    async importAuthString(authString) {
        await __classPrivateFieldGet(this, _Client_instances, "m", _Client_initStorage).call(this);
        await this.storage.importAuthString(authString);
    }
    /**
     * Get a chat's inputPeer. Useful when calling API functions directly.
     *
     * @param id The identifier of the chat.
     */
    async getInputPeer(id) {
        if (id === "me" || id == await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getSelfId).call(this)) {
            return new _2_tl_js_1.types.InputPeerSelf();
        }
        const inputPeer = await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getInputPeerInner).call(this, id);
        if (((inputPeer instanceof _2_tl_js_1.types.InputPeerUser || inputPeer instanceof _2_tl_js_1.types.InputPeerChannel) && inputPeer.access_hash == 0n) && await this.storage.getAccountType() == "bot") {
            if ("channel_id" in inputPeer) {
                inputPeer.access_hash = await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getChannelAccessHash).call(this, inputPeer.channel_id);
            }
            else {
                inputPeer.access_hash = await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getUserAccessHash).call(this, inputPeer.user_id);
            }
        }
        if ((inputPeer instanceof _2_tl_js_1.types.InputPeerUser || inputPeer instanceof _2_tl_js_1.types.InputPeerChannel) && inputPeer.access_hash == 0n && await this.storage.getAccountType() == "user") {
            throw new _0_errors_js_1.AccessError(`Cannot access the chat ${id} because there is no access hash for it.`);
        }
        return inputPeer;
    }
    /**
     * Get a channel or a supergroup's inputChannel. Useful when calling API functions directly.
     *
     * @param id The identifier of the channel or the supergroup.
     */
    async getInputChannel(id) {
        const inputPeer = await this.getInputPeer(id);
        if (!(inputPeer instanceof _2_tl_js_1.types.InputPeerChannel)) {
            throw new TypeError(`The chat ${id} is not a channel neither a supergroup.`);
        }
        return new _2_tl_js_1.types.InputChannel(inputPeer);
    }
    /**
     * Get a user's inputUser. Useful when calling API functions directly.
     *
     * @param id The identifier of the user.
     */
    async getInputUser(id) {
        const inputPeer = await this.getInputPeer(id);
        if (!(inputPeer instanceof _2_tl_js_1.types.InputPeerUser)) {
            throw new TypeError(`The chat ${id} is not a private chat.`);
        }
        return new _2_tl_js_1.types.InputUser(inputPeer);
    }
    async [(_Client_propagateAuthorizationState = async function _Client_propagateAuthorizationState(authorized) {
        if (__classPrivateFieldGet(this, _Client_lastPropagatedAuthorizationState, "f") != authorized) {
            await this.middleware()(await __classPrivateFieldGet(this, _Client_constructContext, "f").call(this, { authorizationState: { authorized } }), _0_utilities_js_1.resolve);
            __classPrivateFieldSet(this, _Client_lastPropagatedAuthorizationState, authorized, "f");
        }
    }, _Client_getSelfId = async function _Client_getSelfId() {
        const id = await this.storage.getAccountId();
        if (id == null) {
            throw new Error("Unauthorized");
        }
        return id;
    }, _Client_startPingLoop = function _Client_startPingLoop() {
        (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _Client_instances, "m", _Client_pingLoop).call(this));
    }, _Client_pingLoop = async function _Client_pingLoop() {
        __classPrivateFieldSet(this, _Client_pingLoopAbortController, new AbortController(), "f");
        while (this.connected) {
            try {
                await new Promise((resolve, reject) => {
                    const timeout = setTimeout(resolve, __classPrivateFieldGet(this, _Client_pingInterval, "f"));
                    __classPrivateFieldGet(this, _Client_pingLoopAbortController, "f").signal.onabort = () => {
                        reject(__classPrivateFieldGet(this, _Client_pingLoopAbortController, "f")?.signal.reason);
                        clearTimeout(timeout);
                    };
                });
                if (!this.connected) {
                    continue;
                }
                __classPrivateFieldGet(this, _Client_pingLoopAbortController, "f").signal.throwIfAborted();
                await this.api.ping_delay_disconnect({ ping_id: (0, _1_utilities_js_1.getRandomId)(), disconnect_delay: __classPrivateFieldGet(this, _Client_pingInterval, "f") / _1_utilities_js_1.second + 15 });
                if (Date.now() - __classPrivateFieldGet(this, _Client_lastUpdates, "f").getTime() >= 15 * _1_utilities_js_1.minute) {
                    (0, _1_utilities_js_1.drop)(__classPrivateFieldGet(this, _Client_updateManager, "f").recoverUpdateGap("lastUpdates"));
                }
            }
            catch (err) {
                if (!this.connected) {
                    continue;
                }
                __classPrivateFieldGet(this, _Client_LpingLoop, "f").error(err);
            }
        }
    }, _Client_invoke = async function _Client_invoke(function_, noWait) {
        let n = 1;
        while (true) {
            try {
                if (function_ instanceof _2_tl_js_1.functions.Function && !__classPrivateFieldGet(this, _Client_connectionInited, "f") && !(0, _0_utilities_js_1.isMtprotoFunction)(function_)) {
                    const result = await __classPrivateFieldGet(this, _Client_client, "f").invoke(new _2_tl_js_1.functions.initConnection({
                        api_id: await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getApiId).call(this),
                        app_version: this.appVersion,
                        device_model: this.deviceModel,
                        lang_code: this.langCode,
                        lang_pack: this.langPack,
                        query: new _2_tl_js_1.functions.invokeWithLayer({
                            layer: _4_constants_js_1.LAYER,
                            query: function_,
                        }),
                        system_lang_code: this.systemLangCode,
                        system_version: this.systemVersion,
                    }), noWait);
                    __classPrivateFieldSet(this, _Client_connectionInited, true, "f");
                    __classPrivateFieldGet(this, _Client_L$initConncetion, "f").debug("connection inited");
                    return result;
                }
                else {
                    return await __classPrivateFieldGet(this, _Client_client, "f").invoke(function_, noWait);
                }
            }
            catch (err) {
                if (err instanceof _4_errors_js_1.ConnectionNotInited) {
                    __classPrivateFieldSet(this, _Client_connectionInited, false, "f");
                    continue;
                }
                else if (await __classPrivateFieldGet(this, _Client_handleInvokeError, "f").call(this, Object.freeze({ client: this, error: err, function: function_, n: n++ }), () => Promise.resolve(false))) {
                    continue;
                }
                else {
                    throw err;
                }
            }
            finally {
                if (!__classPrivateFieldGet(this, _Client_pingLoopStarted, "f")) {
                    __classPrivateFieldGet(this, _Client_instances, "m", _Client_startPingLoop).call(this);
                    __classPrivateFieldSet(this, _Client_pingLoopStarted, true, "f");
                }
            }
        }
    }, _Client_getUserAccessHash = async function _Client_getUserAccessHash(userId) {
        const users = await this.api.users.getUsers({ id: [new _2_tl_js_1.types.InputUser({ user_id: userId, access_hash: 0n })] });
        const user = users[0]?.[_2_tl_js_1.as](_2_tl_js_1.types.User);
        if (user) {
            await this.messageStorage.setEntity(user);
        }
        return user?.access_hash ?? 0n;
    }, _Client_getChannelAccessHash = async function _Client_getChannelAccessHash(channelId) {
        const channels = await this.api.channels.getChannels({ id: [new _2_tl_js_1.types.InputChannel({ channel_id: channelId, access_hash: 0n })] });
        const channel = channels.chats[0][_2_tl_js_1.as](_2_tl_js_1.types.Channel);
        if (channel) {
            await this.messageStorage.setEntity(channel);
        }
        return channel?.access_hash ?? 0n;
    }, _Client_getInputPeerInner = async function _Client_getInputPeerInner(id) {
        const idn = Number(id);
        if (!isNaN(idn)) {
            id = idn;
        }
        if (typeof id === "string") {
            id = (0, _0_utilities_js_1.getUsername)(id);
            let resolvedId = 0;
            const maybeUsername = await this.messageStorage.getUsername(id);
            if (maybeUsername != null && Date.now() - maybeUsername[1].getTime() < _4_constants_js_1.USERNAME_TTL) {
                const [id] = maybeUsername;
                resolvedId = id;
            }
            else {
                const resolved = await this.api.contacts.resolveUsername({ username: id });
                await __classPrivateFieldGet(this, _Client_updateManager, "f").processChats(resolved.chats);
                await __classPrivateFieldGet(this, _Client_updateManager, "f").processUsers(resolved.users);
                if (resolved.peer instanceof _2_tl_js_1.types.PeerUser) {
                    resolvedId = (0, _2_tl_js_1.peerToChatId)(resolved.peer);
                }
                else if (resolved.peer instanceof _2_tl_js_1.types.PeerChannel) {
                    resolvedId = (0, _2_tl_js_1.peerToChatId)(resolved.peer);
                }
                else {
                    (0, _0_deps_js_1.unreachable)();
                }
            }
            const resolvedIdType = (0, _2_tl_js_1.getChatIdPeerType)(resolvedId);
            if (resolvedIdType == "user") {
                const accessHash = await this.messageStorage.getUserAccessHash(resolvedId);
                return new _2_tl_js_1.types.InputPeerUser({ user_id: (0, _2_tl_js_1.chatIdToPeerId)(resolvedId), access_hash: accessHash ?? 0n });
            }
            else if (resolvedIdType == "channel") {
                const accessHash = await this.messageStorage.getChannelAccessHash(resolvedId);
                return new _2_tl_js_1.types.InputPeerChannel({ channel_id: (0, _2_tl_js_1.chatIdToPeerId)(resolvedId), access_hash: accessHash ?? 0n });
            }
            else {
                (0, _0_deps_js_1.unreachable)();
            }
        }
        else if (id > 0) {
            const accessHash = await this.messageStorage.getUserAccessHash(id);
            return new _2_tl_js_1.types.InputPeerUser({ user_id: (0, _2_tl_js_1.chatIdToPeerId)(id), access_hash: accessHash ?? 0n });
        }
        else if (-_4_constants_js_1.MAX_CHAT_ID <= id) {
            return new _2_tl_js_1.types.InputPeerChat({ chat_id: BigInt(Math.abs(id)) });
        }
        else if (_1_utilities_js_1.ZERO_CHANNEL_ID - _4_constants_js_1.MAX_CHANNEL_ID <= id && id != _1_utilities_js_1.ZERO_CHANNEL_ID) {
            const accessHash = await this.messageStorage.getChannelAccessHash(id);
            return new _2_tl_js_1.types.InputPeerChannel({ channel_id: (0, _2_tl_js_1.chatIdToPeerId)(id), access_hash: accessHash ?? 0n });
        }
        else {
            throw new _0_errors_js_1.InputError("The ID is of an format unknown.");
        }
    }, getEntity)](peer) {
        const id = (0, _2_tl_js_1.peerToChatId)(peer);
        const entity = await this.messageStorage.getEntity(id);
        if (entity == null && await this.storage.getAccountType() == "bot" && peer instanceof _2_tl_js_1.types.PeerUser || peer instanceof _2_tl_js_1.types.PeerChannel) {
            await this.getInputPeer(id);
        }
        else {
            return entity;
        }
        return await this.messageStorage.getEntity(id);
    }
    //
    // ========================= ACCOUNT ========================= //
    //
    /**
     * Get information on the currently authorized user.
     *
     * @method ac
     */
    async getMe() {
        let user_ = await this[getEntity](new _2_tl_js_1.types.PeerUser({ user_id: BigInt(await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getSelfId).call(this)) }));
        if (user_ == null) {
            const users = await this.api.users.getUsers({ id: [new _2_tl_js_1.types.InputUserSelf()] });
            user_ = users[0][_2_tl_js_1.as](_2_tl_js_1.types.User);
            await this.messageStorage.setEntity(user_);
        }
        const user = (0, _3_types_js_1.constructUser)(user_);
        __classPrivateFieldSet(this, _Client_lastGetMe, user, "f");
        return user;
    }
    /**
     * Show a username in the current account, a bot account, a supergroup, or a channel's profile. User-only.
     *
     * @method ac
     * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
     * @param username The username to show.
     */
    async showUsername(id, username) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").showUsername(id, username);
    }
    /**
     * Hide a username from the current account, a bot account, a supergroup, or a channel's profile. User-only.
     *
     * @method ac
     * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
     * @param username The username to hide.
     */
    async hideUsername(id, username) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").hideUsername(id, username);
    }
    /**
     * Reorder the usernames of the current account, a bot account, a supergroup, or a channel's profile. User-only.
     *
     * @method ac
     * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
     * @param order The new order to use.
     * @returns Whether the order was changed.
     */
    async reorderUsernames(id, order) {
        return await __classPrivateFieldGet(this, _Client_accountManager, "f").reorderUsernames(id, order);
    }
    /**
     * Hide all usernames from the a supergroup or a channel's profile. User-only.
     *
     * @method ac
     * @param id A supergroup ID or a channel ID.
     */
    async hideUsernames(id) {
        return await __classPrivateFieldGet(this, _Client_accountManager, "f").hideUsernames(id);
    }
    /**
     * Get a business connection. Bot-only.
     *
     * @method ac
     * @param id The identifier of the business connection.
     */
    async getBusinessConnection(id) {
        return await __classPrivateFieldGet(this, _Client_businessConnectionManager, "f").getBusinessConnection(id);
    }
    //
    // ========================= MESSAGES ========================= //
    //
    /**
     * Send a text message.
     *
     * @method ms
     * @param chatId The chat to send the message to.
     * @param text The message's text.
     * @returns The sent text message.
     */
    async sendMessage(chatId, text, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendMessage(chatId, text, params);
    }
    /**
     * Send a photo.
     *
     * @method ms
     * @param chatId The chat to send the photo to.
     * @param photo The photo to send.
     * @returns The sent photo.
     */
    async sendPhoto(chatId, photo, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendPhoto(chatId, photo, params);
    }
    /**
     * Send a document.
     *
     * @method ms
     * @param chatId The chat to send the document to.
     * @param document The document to send.
     * @returns The sent document.
     */
    async sendDocument(chatId, document, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendDocument(chatId, document, params);
    }
    /**
     * Send a sticker.
     *
     * @method ms
     * @param chatId The chat to send the sticker to.
     * @param document The sticker to send.
     * @returns The sent sticker.
     */
    async sendSticker(chatId, sticker, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendSticker(chatId, sticker, params);
    }
    /**
     * Send a video.
     *
     * @method ms
     * @param chatId The chat to send the video to.
     * @param video The video to send.
     * @returns The sent video.
     */
    async sendVideo(chatId, video, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendVideo(chatId, video, params);
    }
    /**
     * Send an animation.
     *
     * @method ms
     * @param chatId The chat to send the animation to.
     * @param animation The animation to send.
     * @returns The sent animation.
     */
    async sendAnimation(chatId, animation, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendAnimation(chatId, animation, params);
    }
    /**
     * Send a voice message.
     *
     * @method ms
     * @param chatId The chat to send the voice message to.
     * @param voice The voice to send.
     * @returns The sent voice message.
     */
    async sendVoice(chatId, voice, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendVoice(chatId, voice, params);
    }
    /**
     * Send an audio file.
     *
     * @method ms
     * @param chatId The chat to send the audio file to.
     * @param audio The audio to send.
     * @returns The sent audio filr.
     */
    async sendAudio(chatId, audio, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendAudio(chatId, audio, params);
    }
    /**
     * Send a video note.
     *
     * @method ms
     * @param chatId The chat to send the video note to.
     * @param videoNote The video note to send.
     * @returns The sent video note.
     */
    async sendVideoNote(chatId, videoNote, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendVideoNote(chatId, videoNote, params);
    }
    /**
     * Send a location.
     *
     * @method ms
     * @param chatId The chat to send the location to.
     * @param latitude The location's latitude.
     * @param longitude The location's longitude.
     * @returns The sent location.
     */
    async sendLocation(chatId, latitude, longitude, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendLocation(chatId, latitude, longitude, params);
    }
    /**
     * Send a contact.
     *
     * @method ms
     * @param chatId The chat to send the contact to.
     * @param firstName The contact's first name.
     * @param number The contact's phone number.
     * @returns The sent contact.
     */
    async sendContact(chatId, firstName, number, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendContact(chatId, firstName, number, params);
    }
    /**
     * Send a dice.
     *
     * @method ms
     * @param chatId The chat to send the dice to.
     * @returns The sent dice.
     */
    async sendDice(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendDice(chatId, params);
    }
    /**
     * Send a venue.
     *
     * @method ms
     * @param chatId The chat to send the venue to.
     * @param latitude The latitude of the venue.
     * @param longitude The longitude of the venue.
     * @param title The title of the venue.
     * @param address The written address of the venue.
     * @returns The sent venue.
     */
    async sendVenue(chatId, latitude, longitude, title, address, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendVenue(chatId, latitude, longitude, title, address, params);
    }
    /**
     * Send a poll.
     *
     * @method ms
     * @param chatId The chat to send the poll to.
     * @param question The poll's question.
     * @param options The poll's options.
     * @returns The sent poll.
     */
    async sendPoll(chatId, question, options, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendPoll(chatId, question, options, params);
    }
    /**
     * Edit a message's text.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the message.
     * @param messageId The message's identifier.
     * @param text The new text of the message.
     * @returns The edited text message.
     */
    async editMessageText(chatId, messageId, text, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").editMessageText(chatId, messageId, text, params);
    }
    /**
     * Edit a message's media.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the message.
     * @param messageId The message's identifier.
     * @param media The new media of the message.
     * @returns The edited message.
     */
    async editMessageMedia(chatId, messageId, media, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").editMessageMedia(chatId, messageId, media, params);
    }
    /**
     * Edit an inline message's media.
     *
     * @method ms
     * @param inlineMessageId The inline message's identifier.
     * @param media The new media of the message.
     */
    async editInlineMessageMedia(inlineMessageId, media, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").editInlineMessageMedia(inlineMessageId, media, params);
    }
    /**
     * Edit an inline message's text. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The inline message's identifier.
     * @param text The new text of the message.
     */
    async editInlineMessageText(inlineMessageId, text, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").editInlineMessageText(inlineMessageId, text, params);
    }
    /**
     * Edit a message's reply markup.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the message.
     * @param messageId The message's identifier.
     * @returns The edited message.
     */
    async editMessageReplyMarkup(chatId, messageId, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").editMessageReplyMarkup(chatId, messageId, params);
    }
    /**
     * Edit an inline message's reply markup. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The inline message's identifier.
     */
    async editInlineMessageReplyMarkup(inlineMessageId, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").editInlineMessageReplyMarkup(inlineMessageId, params);
    }
    /**
     * Edit a message's live location.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the messages.
     * @param messageId The message's identifier.
     * @param latitude The new latitude.
     * @param longitude The new longitude.
     * @returns The edited location message.
     */
    async editMessageLiveLocation(chatId, messageId, latitude, longitude, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").editMessageLiveLocation(chatId, messageId, latitude, longitude, params);
    }
    /**
     * Edit an inline message's live location. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The inline message's identifier.
     * @param latitude The new latitude.
     * @param longitude The new longitude.
     * @returns The edited location message.
     */
    async editInlineMessageLiveLocation(inlineMessageId, latitude, longitude, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").editInlineMessageLiveLocation(inlineMessageId, latitude, longitude, params);
    }
    /**
     * Retrieve multiple messages.
     *
     * @method ms
     * @param chatId The identifier of the chat to retrieve the messages from.
     * @param messageIds The identifiers of the messages to retrieve.
     * @example ```ts
     * const message = await client.getMessages("@MTKruto", [210, 212]);
     * ```
     * @returns The retrieved messages.
     */
    async getMessages(chatId, messageIds) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").getMessages(chatId, messageIds);
    }
    /**
     * Retrieve a single message.
     *
     * @method ms
     * @param chatId The identifier of the chat to retrieve the message from.
     * @param messageId The identifier of the message to retrieve.
     * @example ```ts
     * const message = await client.getMessage("@MTKruto", 212);
     * ```
     * @returns The retrieved message.
     */
    async getMessage(chatId, messageId) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").getMessage(chatId, messageId);
    }
    /**
     * Delete multiple messages.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the messages.
     * @param messageIds The identifiers of the messages to delete.
     */
    async deleteMessages(chatId, messageIds, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").deleteMessages(chatId, messageIds, params);
    }
    /**
     * Delete a single message.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the message.
     * @param messageId The identifier of the message to delete.
     */
    async deleteMessage(chatId, messageId, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").deleteMessages(chatId, [messageId], params);
    }
    /**
     * Delete all messages sent by a specific member of a chat. User-only.
     *
     * @method ms
     * @param chatId The identifier of the chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    async deleteChatMemberMessages(chatId, memberId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").deleteChatMemberMessages(chatId, memberId);
    }
    /**
     * Pin a message in a chat.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the message.
     * @param messageId The message's identifier.
     */
    async pinMessage(chatId, messageId, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").pinMessage(chatId, messageId, params);
    }
    /**
     * Unpin a pinned message.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the message.
     * @param messageId The message's identifier.
     */
    async unpinMessage(chatId, messageId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").unpinMessage(chatId, messageId);
    }
    /**
     * Unpin all pinned messages.
     *
     * @method ms
     * @param chatId The identifier of the chat.
     */
    async unpinMessages(chatId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").unpinMessages(chatId);
    }
    /**
     * Forward multiple messages.
     *
     * @method ms
     * @param from The identifier of the chat to forward the messages from.
     * @param to The identifier of the chat to forward the messages to.
     * @param messageIds The identifiers of the messages to forward.
     * @returns The forwarded messages.
     */
    async forwardMessages(from, to, messageIds, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").forwardMessages(from, to, messageIds, params);
    }
    /**
     * Forward a single message.
     *
     * @method ms
     * @param from The identifier of the chat to forward the message from.
     * @param to The identifier of the chat to forward the message to.
     * @param messageId The identifier of the message to forward.
     * @returns The forwarded message.
     */
    async forwardMessage(from, to, messageId, params) {
        return await this.forwardMessages(from, to, [messageId], params).then((v) => v[0]);
    }
    /**
     * Stop a poll.
     *
     * @method ms
     * @param chatId The chat that includes the poll.
     * @param messageId The idenfifier of the poll's message.
     * @returns The new state of the poll.
     */
    async stopPoll(chatId, messageId, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").stopPoll(chatId, messageId, params);
    }
    /**
     * Send a chat action.
     *
     * @method ms
     * @param chatId The chat to send the chat action to.
     * @param action The chat action.
     * @param messageThreadId The thread to send the chat action to.
     */
    async sendChatAction(chatId, action, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").sendChatAction(chatId, action, params);
    }
    /**
     * Search the messages of a chat. User-only.
     *
     * @method ms
     * @param chatId The identifier of the chat to search the messages in.
     * @param query The message search query.
     */
    async searchMessages(chatId, query, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").searchMessages(chatId, query, params);
    }
    //
    // ========================= FILES ========================= //
    //
    /**
     * Download a file.
     *
     * @method fs
     * @param fileId The identifier of the file to download.
     * @example ```ts
     * for await (const chunk of client.download(fileId, { chunkSize: 256 * 1024 })) {
     *   await outFile.write(chunk);
     * }
     * ```
     * @returns A generator yielding the contents of the file.
     */
    async *download(fileId, params) {
        for await (const chunk of __classPrivateFieldGet(this, _Client_fileManager, "f").download(fileId, params)) {
            yield chunk;
        }
    }
    /**
     * Get custom emoji documents for download.
     *
     * @method fs
     * @param id Identifier of one or more of custom emojis.
     * @returns The custom emoji documents.
     */
    async getCustomEmojiStickers(id) {
        return await __classPrivateFieldGet(this, _Client_fileManager, "f").getCustomEmojiStickers(id);
    }
    //
    // ========================= CHATS ========================= //
    //
    /**
     * Get chats from a chat list. User-only.
     *
     * @method ch
     */
    async getChats(params) {
        return await __classPrivateFieldGet(this, _Client_chatListManager, "f").getChats(params?.from, params?.after, params?.limit);
    }
    /**
     * Get a chat.
     *
     * @method ch
     */
    async getChat(chatId) {
        return await __classPrivateFieldGet(this, _Client_chatListManager, "f").getChat(chatId);
    }
    /**
     * Get chat history. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat to get its history.
     */
    async getHistory(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").getHistory(chatId, params);
    }
    /**
     * Set a chat's available reactions. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     * @param availableReactions The new available reactions.
     */
    async setAvailableReactions(chatId, availableReactions) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").setAvailableReactions(chatId, availableReactions);
    }
    /**
     * Set a chat's photo.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     * @param photo A photo to set as the chat's photo.
     */
    async setChatPhoto(chatId, photo, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").setChatPhoto(chatId, photo, params);
    }
    /**
     * Delete a chat's photo.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     */
    async deleteChatPhoto(chatId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").deleteChatPhoto(chatId);
    }
    /**
     * Ban a member from a chat.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     * @param memberId The identifier of the member.
     */
    async banChatMember(chatId, memberId, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").banChatMember(chatId, memberId, params);
    }
    /**
     * Unban a member from a chat.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    async unbanChatMember(chatId, memberId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").unbanChatMember(chatId, memberId);
    }
    /**
     * Kick a member from a chat. Same as a banChatMember call followed by unbanChatMember.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    async kickChatMember(chatId, memberId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").banChatMember(chatId, memberId);
        await __classPrivateFieldGet(this, _Client_messageManager, "f").unbanChatMember(chatId, memberId);
    }
    /**
     * Set the rights of a chat member.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a supergroup.
     * @param memberId The identifier of a member.
     */
    async setChatMemberRights(chatId, memberId, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").setChatMemberRights(chatId, memberId, params);
    }
    /**
     * Get the administrators of a chat.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     * @returns The chat's administrators.
     */
    async getChatAdministrators(chatId) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").getChatAdministrators(chatId);
    }
    /**
     * Enable join requests in a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a channel or a supergroup.
     */
    async enableJoinRequests(chatId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").enableJoinRequests(chatId);
    }
    /**
     * Disable join requests in a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a channel or a supergroup.
     */
    async disableJoinRequests(chatId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").disableJoinRequests(chatId);
    }
    /**
     * Get inactive chats. User-only.
     *
     * @method ch
     * @retuns A list of inactive chats the current user is member of.
     */
    async getInactiveChats() {
        return await __classPrivateFieldGet(this, _Client_accountManager, "f").getInactiveChats();
    }
    /**
     * Get the invite links created for a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     * @returns The invite links created for the chat. This might be a subset of the results if they were less than `limit`. The parameters `afterDate` and `afterInviteLink` can be used for pagination.
     */
    async getCreatedInviteLinks(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").getCreatedInviteLinks(chatId, params);
    }
    /**
     * Join a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat to join.
     */
    async joinChat(chatId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").joinChat(chatId);
    }
    /**
     * Leave a chat.
     *
     * @method ch
     * @param chatId The identifier of the chat to leave.
     */
    async leaveChat(chatId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").leaveChat(chatId);
    }
    /**
     * Get information on a user's chat membership.
     *
     * @method ch
     * @param chatId The identifier of a chat that includes the user.
     * @param userId The identifier of the user.
     */
    async getChatMember(chatId, userId) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").getChatMember(chatId, userId);
    }
    /**
     * Set a chat's sticker set.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a supergroup.
     * @param setName The name of the set.
     */
    async setChatStickerSet(chatId, setName) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").setChatStickerSet(chatId, setName);
    }
    /**
     * Delete a chat's sticker set.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a supergroup.
     */
    async deleteChatStickerSet(chatId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").deleteChatStickerSet(chatId);
    }
    /**
     * Set the number of boosts required to circument a chat's default restrictions. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     * @param boosts The number of boosts required to circumvent its restrictions.
     */
    async setBoostsRequiredToCircumventRestrictions(chatId, boosts) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").setBoostsRequiredToCircumventRestrictions(chatId, boosts);
    }
    /**
     * Create an invite link.
     *
     * @method ch
     * @param chatId The identifier of the chat to create the invite link for.
     * @returns The newly created invite link.
     */
    async createInviteLink(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").createInviteLink(chatId, params);
    }
    //
    // ========================= CALLBACK QUERIES ========================= //
    //
    /**
     * Send a callback query. User-only.
     *
     * @method cq
     * @param chatId The chat that includes the messsage.
     * @param messageId The message that includes at a button responsible for the callback query question.
     * @param question The callback query's question.
     * @returns The bot's answer to the callback query.
     */
    async sendCallbackQuery(chatId, messageId, question) {
        return await __classPrivateFieldGet(this, _Client_callbackQueryManager, "f").sendCallbackQuery(chatId, messageId, question);
    }
    /**
     * Answer a callback query. Bot-only.
     *
     * @method cq
     * @param id ID of the callback query to answer.
     */
    async answerCallbackQuery(id, params) {
        await __classPrivateFieldGet(this, _Client_callbackQueryManager, "f").answerCallbackQuery(id, params);
    }
    //
    // ========================= INLINE QUERIES ========================= //
    //
    /**
     * Send an inline query. User-only.
     *
     * @method iq
     * @param userId The ID of the bot to send the inline query to.
     * @param chatId The ID of the chat from which the inline query is sent.
     * @returns The bot's answer to the inline query.
     */
    async sendInlineQuery(userId, chatId, params) {
        return await __classPrivateFieldGet(this, _Client_inlineQueryManager, "f").sendInlineQuery(userId, chatId, params);
    }
    /**
     * Answer an inline query. Bot-only.
     *
     * @method iq
     * @param id The ID of the inline query to answer.
     * @param results The results to answer with.
     */
    async answerInlineQuery(id, results, params) {
        await __classPrivateFieldGet(this, _Client_inlineQueryManager, "f").answerInlineQuery(id, results, params);
    }
    //
    // ========================= BOTS ========================= //
    //
    /**
     * Set the bot's description in the given language. Bot-only.
     *
     * @method bs
     */
    async setMyDescription(params) {
        await __classPrivateFieldGet(this, _Client_botInfoManager, "f").setMyDescription(params);
    }
    /**
     * Set the bot's name in the given language. Bot-only.
     *
     * @method bs
     */
    async setMyName(params) {
        await __classPrivateFieldGet(this, _Client_botInfoManager, "f").setMyName(params);
    }
    /**
     * Set the bot's short description in the given language. Bot-only.
     *
     * @method bs
     */
    async setMyShortDescription(params) {
        await __classPrivateFieldGet(this, _Client_botInfoManager, "f").setMyShortDescription(params);
    }
    /**
     * Get the bot's description in the given language. Bot-only.
     *
     * @method bs
     * @returns The current bot's description in the specified language.
     */
    async getMyDescription(params) {
        return await __classPrivateFieldGet(this, _Client_botInfoManager, "f").getMyDescription(params);
    }
    /**
     * Get the bot's name in the given language. Bot-only.
     *
     * @method bs
     * @returns The current bot's name in the specified language.
     */
    async getMyName(params) {
        return await __classPrivateFieldGet(this, _Client_botInfoManager, "f").getMyName(params);
    }
    /**
     * Get the bot's short description in the given language. Bot-only.
     *
     * @method bs
     * @returns The current bot's short description in the specified language.
     */
    async getMyShortDescription(params) {
        return await __classPrivateFieldGet(this, _Client_botInfoManager, "f").getMyShortDescription(params);
    }
    /**
     * Set the bot's commands in the given scope and/or language. Bot-only.
     *
     * @method bs
     * @param commands The commands to set.
     */
    async setMyCommands(commands, params) {
        await __classPrivateFieldGet(this, _Client_botInfoManager, "f").setMyCommands(commands, params);
    }
    /**
     * Get the bot's commands in the given scope and/or language. Bot-only.
     *
     * @method bs
     * @returns The current bot's commands in the specified language.
     */
    async getMyCommands(params) {
        return await __classPrivateFieldGet(this, _Client_botInfoManager, "f").getMyCommands(params);
    }
    //
    // ========================= REACTIONS ========================= //
    //
    /**
     * Change reactions made to a message.
     *
     * @method re
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message to add the reaction to.
     * @param reactions The new reactions.
     */
    async setReactions(chatId, messageId, reactions, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").setReactions(chatId, messageId, reactions, params);
    }
    /**
     * Make a reaction to a message.
     *
     * @method re
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message to add the reaction to.
     * @param reaction The reaction to add.
     */
    async addReaction(chatId, messageId, reaction, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").addReaction(chatId, messageId, reaction, params);
    }
    /**
     * Undo a reaction made to a message.
     *
     * @method re
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message which the reaction was made to.
     * @param reaction The reaction to remove.
     */
    async removeReaction(chatId, messageId, reaction) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").removeReaction(chatId, messageId, reaction);
    }
    //
    // ========================= STORIES ========================= //
    //
    /**
     * Create a story. User-only.
     *
     * @method st
     * @param content The content of the story.
     * @returns The created story.
     */
    async createStory(chatId, content, params) {
        return await __classPrivateFieldGet(this, _Client_storyManager, "f").createStory(chatId, content, params);
    }
    /**
     * Retrieve multiple stories. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat to retrieve the stories from.
     * @param storyIds The identifiers of the stories to retrieve.
     */
    async getStories(chatId, storyIds) {
        if (!storyIds.length) {
            return [];
        }
        return await __classPrivateFieldGet(this, _Client_storyManager, "f").getStories(chatId, storyIds);
    }
    /**
     * Retrieve a single story. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat to retrieve the story from.
     * @param storyId The identifier of the story to retrieve.
     * @returns The retrieved story.
     */
    async getStory(chatId, storyId) {
        return await __classPrivateFieldGet(this, _Client_storyManager, "f").getStory(chatId, storyId);
    }
    /**
     * Delete multiple stories. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat to delete the stories from.
     * @param storyIds The identifiers of the stories to delete.
     */
    async deleteStories(chatId, storyIds) {
        await __classPrivateFieldGet(this, _Client_storyManager, "f").deleteStories(chatId, storyIds);
    }
    /**
     * Delete a single story. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat to delete the story from.
     * @param storyId The identifier of the story to delete.
     */
    async deleteStory(chatId, storyId) {
        await __classPrivateFieldGet(this, _Client_storyManager, "f").deleteStory(chatId, storyId);
    }
    /**
     * Add multiple stories to highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat that has the stories.
     * @param storyIds The identifiers of the stories to add to highlights.
     */
    async addStoriesToHighlights(chatId, storyIds) {
        await __classPrivateFieldGet(this, _Client_storyManager, "f").addStoriesToHighlights(chatId, storyIds);
    }
    /**
     * Add a single story to highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat that has the story.
     * @param storyId The identifier of the story to add to highlights.
     */
    async addStoryToHighlights(chatId, storyId) {
        await __classPrivateFieldGet(this, _Client_storyManager, "f").addStoryToHighlights(chatId, storyId);
    }
    /**
     * Remove multiple stories from highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat that has the stories.
     * @param storyIds The identifiers of the stories to remove from highlights.
     */
    async removeStoriesFromHighlights(chatId, storyIds) {
        await __classPrivateFieldGet(this, _Client_storyManager, "f").removeStoriesFromHighlights(chatId, storyIds);
    }
    /**
     * Remove a single story from highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat that has the story.
     * @param storyId The identifier of the story to remove from highlights.
     */
    async removeStoryFromHighlights(chatId, storyId) {
        await __classPrivateFieldGet(this, _Client_storyManager, "f").removeStoryFromHighlights(chatId, storyId);
    }
    //
    // ========================= MISC ========================= //
    //
    /**
     * Get network statistics. This might not always be available.
     *
     * @method mc
     */
    async getNetworkStatistics() {
        return await __classPrivateFieldGet(this, _Client_networkStatisticsManager, "f").getNetworkStatistics();
    }
    /**
     * Block a user. User-only.
     *
     * @method mc
     * @param userId The identifier of the user to block.
     */
    async blockUser(userId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").blockUser(userId);
    }
    /**
     * Unblock a user. User-only.
     *
     * @method mc
     * @param userId The identifier of the user to unblock.
     */
    async unblockUser(userId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").unblockUser(userId);
    }
    //
    // ========================= VIDEO CHATS ========================= //
    //
    /**
     * Start a video chat. User-only.
     *
     * @method vc
     * @param chatId The chat to start the video chat in.
     * @returns The started video chat.
     */
    async startVideoChat(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_videoChatManager, "f").startVideoChat(chatId, params);
    }
    /**
     * Schedule a video chat. User-only.
     *
     * @method vc
     * @param chatId The chat to schedule the video chat in.
     * @param startAt A point in time within the future in which the video chat will be started.
     * @returns The scheduled video chat.
     */
    async scheduleVideoChat(chatId, startAt, params) {
        return await __classPrivateFieldGet(this, _Client_videoChatManager, "f").scheduleVideoChat(chatId, startAt, params);
    }
    /**
     * Join a video chat. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     * @param params_ WebRTC connection parameters.
     * @returns Parameters to be passed to the used WebRTC library.
     */
    async joinVideoChat(id, params_, params) {
        return await __classPrivateFieldGet(this, _Client_videoChatManager, "f").joinVideoChat(id, params_, params);
    }
    /**
     * Leave a video chat. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     */
    async leaveVideoChat(id) {
        return await __classPrivateFieldGet(this, _Client_videoChatManager, "f").leaveVideoChat(id);
    }
    /**
     * Join a live stream. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     */
    async joinLiveStream(id) {
        return await __classPrivateFieldGet(this, _Client_videoChatManager, "f").joinLiveStream(id);
    }
    /**
     * Get a video chat. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     */
    async getVideoChat(id) {
        return await __classPrivateFieldGet(this, _Client_videoChatManager, "f").getVideoChat(id);
    }
    /**
     * Get live stream channels. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     */
    async getLiveStreamChannels(id) {
        return await __classPrivateFieldGet(this, _Client_videoChatManager, "f").getLiveStreamChannels(id);
    }
    /**
     * Download a live stream chunk. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     * @param channelId Stream channel ID.
     * @param scale Stream channel scale.
     * @param timestamp Millisecond timestamp of the chunk to download.
     */
    async *downloadLiveStreamChunk(id, channelId, scale, timestamp, params) {
        yield* __classPrivateFieldGet(this, _Client_videoChatManager, "f").downloadLiveStreamChunk(id, channelId, scale, timestamp, params);
    }
}
exports.Client = Client;
_a = Client, _Client_handleCtxUpdate = async function _Client_handleCtxUpdate(update) {
    await this.middleware()(await __classPrivateFieldGet(this, _Client_constructContext, "f").call(this, update), _0_utilities_js_1.resolve);
}, _Client_queueHandleCtxUpdate = function _Client_queueHandleCtxUpdate(update) {
    __classPrivateFieldGet(this, _Client_updateManager, "f").getHandleUpdateQueue(_2_update_manager_js_1.UpdateManager.MAIN_BOX_ID).add(async () => {
        await __classPrivateFieldGet(this, _Client_instances, "m", _Client_handleCtxUpdate).call(this, update);
    });
}, _Client_handleUpdate = async function _Client_handleUpdate(update) {
    const promises = new Array();
    if (update instanceof _2_tl_js_1.types.UpdateUserName) {
        await this.messageStorage.updateUsernames(Number(update.user_id), update.usernames.map((v) => v.username));
        const peer = new _2_tl_js_1.types.PeerUser(update);
        const entity = await this[getEntity](peer);
        if (entity != null) {
            entity.usernames = update.usernames;
            entity.first_name = update.first_name;
            entity.last_name = update.last_name;
            await this.messageStorage.setEntity(entity);
        }
    }
    if (_3_message_manager_js_1.MessageManager.canHandleUpdate(update)) {
        const update_ = await __classPrivateFieldGet(this, _Client_messageManager, "f").handleUpdate(update);
        if (update_) {
            promises.push((async () => {
                try {
                    await __classPrivateFieldGet(this, _Client_instances, "m", _Client_handleCtxUpdate).call(this, update_);
                }
                finally {
                    if ("deletedMessages" in update_) {
                        for (const { chatId, messageId } of update_.deletedMessages) {
                            await this.messageStorage.setMessage(chatId, messageId, null);
                            await __classPrivateFieldGet(this, _Client_chatListManager, "f").reassignChatLastMessage(chatId);
                        }
                    }
                }
            })());
        }
    }
    if (_3_video_chat_manager_js_1.VideoChatManager.canHandleUpdate(update)) {
        promises.push(__classPrivateFieldGet(this, _Client_instances, "m", _Client_handleCtxUpdate).call(this, await __classPrivateFieldGet(this, _Client_videoChatManager, "f").handleUpdate(update)));
    }
    if (_4_callback_query_manager_js_1.CallbackQueryManager.canHandleUpdate(update)) {
        promises.push(__classPrivateFieldGet(this, _Client_instances, "m", _Client_handleCtxUpdate).call(this, await __classPrivateFieldGet(this, _Client_callbackQueryManager, "f").handleUpdate(update)));
    }
    if (_4_inline_query_manager_js_1.InlineQueryManager.canHandleUpdate(update)) {
        promises.push(__classPrivateFieldGet(this, _Client_instances, "m", _Client_handleCtxUpdate).call(this, await __classPrivateFieldGet(this, _Client_inlineQueryManager, "f").handleUpdate(update)));
    }
    if (_2_reaction_manager_js_1.ReactionManager.canHandleUpdate(update)) {
        const upd = await __classPrivateFieldGet(this, _Client_reactionManager, "f").handleUpdate(update);
        if (upd) {
            promises.push(__classPrivateFieldGet(this, _Client_instances, "m", _Client_handleCtxUpdate).call(this, upd));
        }
    }
    if (_4_chat_list_manager_js_1.ChatListManager.canHandleUpdate(update)) {
        await __classPrivateFieldGet(this, _Client_chatListManager, "f").handleUpdate(update);
    }
    if (_4_story_manager_js_1.StoryManager.canHandleUpdate(update)) {
        const upd = await __classPrivateFieldGet(this, _Client_storyManager, "f").handleUpdate(update);
        if (upd) {
            promises.push(__classPrivateFieldGet(this, _Client_instances, "m", _Client_handleCtxUpdate).call(this, upd));
        }
    }
    if (_2_business_connection_manager_js_1.BusinessConnectionManager.canHandleUpdate(update)) {
        promises.push(__classPrivateFieldGet(this, _Client_instances, "m", _Client_handleCtxUpdate).call(this, await __classPrivateFieldGet(this, _Client_businessConnectionManager, "f").handleUpdate(update)));
    }
    return () => Promise.all(promises);
}, _Client_getMe = async function _Client_getMe() {
    if (__classPrivateFieldGet(this, _Client_lastGetMe, "f") != null) {
        return __classPrivateFieldGet(this, _Client_lastGetMe, "f");
    }
    else {
        const user = await this.getMe();
        __classPrivateFieldSet(this, _Client_lastGetMe, user, "f");
        return user;
    }
};
