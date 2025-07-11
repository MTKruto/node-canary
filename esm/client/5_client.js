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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Client_instances, _Client_clients, _Client_downloadPools, _Client_uploadPools, _Client_guaranteeUpdateDelivery, _Client_accountManager, _Client_botInfoManager, _Client_businessConnectionManager, _Client_fileManager, _Client_networkStatisticsManager, _Client_paymentManager, _Client_reactionManager, _Client_translationsManager, _Client_updateManager, _Client_messageManager, _Client_videoChatManager, _Client_callbackQueryManager, _Client_chatListManager, _Client_chatManager, _Client_forumManager, _Client_giftManager, _Client_inlineQueryManager, _Client_linkPreviewManager, _Client_pollManager, _Client_storyManager, _Client_managers, _Client_storage_, _Client_messageStorage_, _Client_parseMode, _Client_apiId, _Client_apiHash, _Client_transportProvider, _Client_publicKeys, _Client_outgoingMessages, _Client_persistCache, _Client_disableUpdates, _Client_authString, _Client_initialDc, _Client_L, _Client_LsignIn, _Client_LupdateGapRecoveryLoop, _Client_LhandleMigrationError, _Client_Lmin, _Client_setMainClient, _Client_newClient, _Client_disconnectAllClients, _Client_client_get, _Client_constructContext, _Client_propagateConnectionState, _Client_lastPropagatedConnectionState, _Client_stateChangeHandler, _Client_storageInited, _Client_initStorage, _Client_connectMutex, _Client_lastPropagatedAuthorizationState, _Client_propagateAuthorizationState, _Client_getSelfId, _Client_getIsPremium, _Client_lastUpdates, _Client_updateGapRecoveryLoopAbortController, _Client_startUpdateGapRecoveryLoop, _Client_updateGapRecoveryLoop, _Client_clientDisconnectionLoopAbortController, _Client_startClientDisconnectionLoop, _Client_clientDisconnectionLoop, _Client_getClient, _Client_getMainClientMutex, _Client_getMainClient, _Client_getDownloadClient, _Client_getUploadPoolSize, _Client_getUploadClient, _Client_setupClient, _Client_importAuthorization, _Client_invoke, _Client_handleInvokeError, _Client_authStringImported, _Client_getUserAccessHash, _Client_getChannelAccessHash, _Client_getInputPeerChatId, _Client_getInputPeerInner, _Client_getMinInputPeer, _Client_handleCtxUpdate, _Client_queueHandleCtxUpdate, _Client_handleUpdate, _Client_lastGetMe, _Client_getMe, _Client_previouslyConnected, _Client_lastConnectionState, _Client_onConnectionStateChange;
import { delay, MINUTE, SECOND, unreachable } from "../0_deps.js";
import { AccessError, ConnectionError, InputError } from "../0_errors.js";
import { cleanObject, drop, getLogger, mustPrompt, mustPromptOneOf, Mutex, ZERO_CHANNEL_ID } from "../1_utilities.js";
import { StorageMemory } from "../2_storage.js";
import { Api, Mtproto } from "../2_tl.js";
import { getDcId } from "../3_transport.js";
import { constructUser } from "../3_types.js";
import { APP_VERSION, DEVICE_MODEL, INITIAL_DC, LANG_CODE, LANG_PACK, MAX_CHANNEL_ID, MAX_CHAT_ID, SYSTEM_LANG_CODE, SYSTEM_VERSION, USERNAME_TTL } from "../4_constants.js";
import { AuthKeyUnregistered, FloodWait, Migrate, PasswordHashInvalid, PhoneNumberInvalid, SessionPasswordNeeded, SessionRevoked } from "../4_errors.js";
import { PhoneCodeInvalid } from "../4_errors.js";
import { checkPassword } from "./0_password.js";
import { StorageOperations } from "./0_storage_operations.js";
import { canBeInputChannel, canBeInputUser, DOWNLOAD_POOL_SIZE, getUsername, resolve, toInputChannel, toInputUser } from "./0_utilities.js";
import { Composer as Composer_ } from "./1_composer.js";
import { AccountManager } from "./2_account_manager.js";
import { BotInfoManager } from "./2_bot_info_manager.js";
import { BusinessConnectionManager } from "./2_business_connection_manager.js";
import { ClientEncrypted } from "./2_client_encrypted.js";
import { FileManager } from "./2_file_manager.js";
import { NetworkStatisticsManager } from "./2_network_statistics_manager.js";
import { PaymentManager } from "./2_payment_manager.js";
import { ReactionManager } from "./2_reaction_manager.js";
import { TranslationsManager } from "./2_translations_manager.js";
import { UpdateManager } from "./2_update_manager.js";
import { ClientEncryptedPool } from "./3_client_encrypted_pool.js";
import { MessageManager } from "./3_message_manager.js";
import { VideoChatManager } from "./3_video_chat_manager.js";
import { CallbackQueryManager } from "./4_callback_query_manager.js";
import { ChatListManager } from "./4_chat_list_manager.js";
import { ChatManager } from "./4_chat_manager.js";
import { ForumManager } from "./4_forum_manager.js";
import { GiftManager } from "./4_gift_manager.js";
import { InlineQueryManager } from "./4_inline_query_manager.js";
import { LinkPreviewManager } from "./4_link_preview_manager.js";
import { PollManager } from "./4_poll_manager.js";
import { StoryManager } from "./4_story_manager.js";
export class Composer extends Composer_ {
}
function skipInvoke() {
    return (_ctx, next) => next();
}
export const restartAuth = Symbol("restartAuth");
export const handleMigrationError = Symbol("handleMigrationError");
// global Client ID counter for logs
let id = 0;
const getEntity = Symbol();
/**
 * An MTKruto client.
 */
export class Client extends Composer {
    // deno-lint-ignore no-explicit-any
    get managers() {
        return __classPrivateFieldGet(this, _Client_managers, "f") ?? (__classPrivateFieldSet(this, _Client_managers, __classPrivateFieldGet(this, _Client_managers, "f") ?? {
            // 2_
            accountManager: __classPrivateFieldGet(this, _Client_accountManager, "f"),
            botInfoManager: __classPrivateFieldGet(this, _Client_botInfoManager, "f"),
            businessConnectionManager: __classPrivateFieldGet(this, _Client_businessConnectionManager, "f"),
            fileManager: __classPrivateFieldGet(this, _Client_fileManager, "f"),
            networkStatisticsManager: __classPrivateFieldGet(this, _Client_networkStatisticsManager, "f"),
            paymentManager: __classPrivateFieldGet(this, _Client_paymentManager, "f"),
            reactionManager: __classPrivateFieldGet(this, _Client_reactionManager, "f"),
            translationsManager: __classPrivateFieldGet(this, _Client_translationsManager, "f"),
            updateManager: __classPrivateFieldGet(this, _Client_updateManager, "f"),
            // 3_
            messageManager: __classPrivateFieldGet(this, _Client_messageManager, "f"),
            videoChatManager: __classPrivateFieldGet(this, _Client_videoChatManager, "f"),
            // 4_
            callbackQueryManager: __classPrivateFieldGet(this, _Client_callbackQueryManager, "f"),
            chatListManager: __classPrivateFieldGet(this, _Client_chatListManager, "f"),
            chatManager: __classPrivateFieldGet(this, _Client_chatManager, "f"),
            forumManager: __classPrivateFieldGet(this, _Client_forumManager, "f"),
            giftManager: __classPrivateFieldGet(this, _Client_giftManager, "f"),
            inlineQueryManager: __classPrivateFieldGet(this, _Client_inlineQueryManager, "f"),
            linkPreviewManager: __classPrivateFieldGet(this, _Client_linkPreviewManager, "f"),
            pollManager: __classPrivateFieldGet(this, _Client_pollManager, "f"),
            storyManager: __classPrivateFieldGet(this, _Client_storyManager, "f"),
        }, "f"));
    }
    /**
     * Constructs the client.
     */
    constructor(params) {
        super();
        _Client_instances.add(this);
        _Client_clients.set(this, new Array());
        _Client_downloadPools.set(this, {});
        _Client_uploadPools.set(this, {});
        _Client_guaranteeUpdateDelivery.set(this, void 0);
        // 2_
        _Client_accountManager.set(this, void 0);
        _Client_botInfoManager.set(this, void 0);
        _Client_businessConnectionManager.set(this, void 0);
        _Client_fileManager.set(this, void 0);
        _Client_networkStatisticsManager.set(this, void 0);
        _Client_paymentManager.set(this, void 0);
        _Client_reactionManager.set(this, void 0);
        _Client_translationsManager.set(this, void 0);
        _Client_updateManager.set(this, void 0);
        // 3_
        _Client_messageManager.set(this, void 0);
        _Client_videoChatManager.set(this, void 0);
        // 4_
        _Client_callbackQueryManager.set(this, void 0);
        _Client_chatListManager.set(this, void 0);
        _Client_chatManager.set(this, void 0);
        _Client_forumManager.set(this, void 0);
        _Client_giftManager.set(this, void 0);
        _Client_inlineQueryManager.set(this, void 0);
        _Client_linkPreviewManager.set(this, void 0);
        _Client_pollManager.set(this, void 0);
        _Client_storyManager.set(this, void 0);
        // deno-lint-ignore no-explicit-any
        _Client_managers.set(this, void 0);
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
        _Client_transportProvider.set(this, void 0);
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
        Object.defineProperty(this, "language", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "platform", {
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
        _Client_outgoingMessages.set(this, void 0);
        _Client_persistCache.set(this, void 0);
        _Client_disableUpdates.set(this, void 0);
        _Client_authString.set(this, void 0);
        _Client_initialDc.set(this, void 0);
        _Client_L.set(this, void 0);
        _Client_LsignIn.set(this, void 0);
        _Client_LupdateGapRecoveryLoop.set(this, void 0);
        _Client_LhandleMigrationError.set(this, void 0);
        _Client_Lmin.set(this, void 0);
        _Client_constructContext.set(this, async (update) => {
            const msg = "message" in update ? update.message : "editedMessage" in update ? update.editedMessage : "scheduledMessage" in update ? update.scheduledMessage : "callbackQuery" in update ? update.callbackQuery.message : undefined;
            const reactions = "messageInteractions" in update ? update.messageInteractions : undefined;
            const mustGetMsg = () => {
                if (msg !== undefined) {
                    return { chatId: msg.chat.id, messageId: msg.id, businessConnectionId: msg.businessConnectionId, senderId: msg.from?.id, userId: msg.from?.id };
                }
                else if (reactions !== undefined) {
                    return { chatId: reactions.chatId, messageId: reactions.messageId };
                }
                else {
                    unreachable();
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
                    unreachable();
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
                unreachable();
            };
            const chat_ = "messageReactions" in update ? update.messageReactions.chat : "messageReactionCount" in update ? update.messageReactionCount.chat : "chatMember" in update ? update.chatMember.chat : "myChatMember" in update ? update.myChatMember.chat : "joinRequest" in update ? update.joinRequest.chat : "story" in update ? update.story.chat : undefined;
            const chat = chat_ ?? msg?.chat;
            const from = "callbackQuery" in update ? update.callbackQuery.from : "inlineQuery" in update ? update.inlineQuery.from : "chatMember" in update ? update.chatMember.from : "myChatMember" in update ? update.myChatMember.from : "messageReactions" in update ? update.messageReactions.user : "preCheckoutQuery" in update ? update.preCheckoutQuery.from : "joinRequest" in update ? update.joinRequest.from : "businessConnection" in update ? update.businessConnection.user : "pollAnswer" in update ? update.pollAnswer.from : msg?.from ? msg.from : undefined;
            const getReplyTo = (quote, chatId, messageId) => {
                if ("story" in update) {
                    return { chatId: update.story.chat.id, storyId: update.story.id };
                }
                const isPrivate = chatId > 0;
                const shouldQuote = quote === undefined ? !isPrivate : quote;
                return shouldQuote ? { messageId } : undefined;
            };
            const me = "connectionState" in update ? __classPrivateFieldGet(this, _Client_lastGetMe, "f") : ("authorizationState" in update && !update.authorizationState.authorized) ? __classPrivateFieldGet(this, _Client_lastGetMe, "f") : await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getMe).call(this);
            const context = {
                ...update,
                client: this,
                me: (me == null ? undefined : me),
                msg: msg,
                chat: chat,
                from: from,
                get toJSON() {
                    return () => update;
                },
                reply: (text, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendMessage(chatId, text, { ...params, replyTo, businessConnectionId });
                },
                replyPoll: (question, options, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendPoll(chatId, question, options, { ...params, replyTo, businessConnectionId });
                },
                replyPhoto: (photo, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendPhoto(chatId, photo, { ...params, replyTo, businessConnectionId });
                },
                replyMediaGroup: (media, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendMediaGroup(chatId, media, { ...params, replyTo, businessConnectionId });
                },
                replyInvoice: (title, description, payload, currency, prices, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendInvoice(chatId, title, description, payload, currency, prices, { ...params, replyTo, businessConnectionId });
                },
                replyDocument: (document, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendDocument(chatId, document, { ...params, replyTo, businessConnectionId });
                },
                replySticker: (sticker, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendSticker(chatId, sticker, { ...params, replyTo, businessConnectionId });
                },
                replyContact: (firstName, number, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendContact(chatId, firstName, number, { ...params, replyTo, businessConnectionId });
                },
                replyLocation: (latitude, longitude, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendLocation(chatId, latitude, longitude, { ...params, replyTo, businessConnectionId });
                },
                replyDice: (params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendDice(chatId, { ...params, replyTo, businessConnectionId });
                },
                replyVenue: (latitude, longitude, title, address, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendVenue(chatId, latitude, longitude, title, address, { ...params, replyTo, businessConnectionId });
                },
                replyVideo: (video, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendVideo(chatId, video, { ...params, replyTo, businessConnectionId });
                },
                replyAnimation: (document, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendAnimation(chatId, document, { ...params, replyTo, businessConnectionId });
                },
                replyVoice: (document, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendVoice(chatId, document, { ...params, replyTo, businessConnectionId });
                },
                replyAudio: (document, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendAudio(chatId, document, { ...params, replyTo, businessConnectionId });
                },
                replyVideoNote: (videoNote, params) => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    const replyTo = getReplyTo(params?.quote, chatId, messageId);
                    return this.sendVideoNote(chatId, videoNote, { ...params, replyTo, businessConnectionId });
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
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    return this.pinMessage(chatId, messageId, { ...params, businessConnectionId });
                },
                unpin: () => {
                    const { chatId, messageId, businessConnectionId } = mustGetMsg();
                    return this.unpinMessage(chatId, messageId, { businessConnectionId });
                },
                banSender: (params) => {
                    const { chatId, senderId } = mustGetMsg();
                    if (!senderId) {
                        unreachable();
                    }
                    return this.banChatMember(chatId, senderId, params);
                },
                kickSender: () => {
                    const { chatId, senderId } = mustGetMsg();
                    if (!senderId) {
                        unreachable();
                    }
                    return this.kickChatMember(chatId, senderId);
                },
                setSenderRights: (params) => {
                    const { chatId, senderId } = mustGetMsg();
                    if (!senderId) {
                        unreachable();
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
                        unreachable();
                    }
                    return this.answerCallbackQuery(update.callbackQuery.id, params);
                },
                answerInlineQuery: (results, params) => {
                    if (!("inlineQuery" in update)) {
                        unreachable();
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
                editInlineMessageMedia: (media, params) => {
                    const inlineMessageId = mustGetInlineMsgId();
                    return this.editInlineMessageMedia(inlineMessageId, media, params);
                },
                editInlineMessageCaption: (params) => {
                    const inlineMessageId = mustGetInlineMsgId();
                    return this.editInlineMessageCaption(inlineMessageId, params);
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
                editMessageCaption: (messageId, params) => {
                    const { chatId } = mustGetMsg();
                    return this.editMessageCaption(chatId, messageId, params);
                },
                editMessageMedia: (messageId, media, params) => {
                    const { chatId } = mustGetMsg();
                    return this.editMessageMedia(chatId, messageId, media, params);
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
                read: () => {
                    const { chatId, messageId } = mustGetMsg();
                    return this.readMessages(chatId, messageId);
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
                getChatMembers: (params) => {
                    const { chatId } = mustGetMsg();
                    return this.getChatMembers(chatId, params);
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
                        unreachable();
                    }
                    return this.getBusinessConnection(businessConnectionId);
                },
                answerPreCheckoutQuery: (ok, params) => {
                    if (!("preCheckoutQuery" in update)) {
                        unreachable();
                    }
                    return this.answerPreCheckoutQuery(update.preCheckoutQuery.id, ok, params);
                },
                approveJoinRequest: () => {
                    const { chatId, userId } = mustGetMsg();
                    if (!userId) {
                        unreachable();
                    }
                    return this.approveJoinRequest(chatId, userId);
                },
                declineJoinRequest: () => {
                    const { chatId, userId } = mustGetMsg();
                    if (!userId) {
                        unreachable();
                    }
                    return this.declineJoinRequest(chatId, userId);
                },
            };
            return cleanObject(context);
        });
        _Client_lastPropagatedConnectionState.set(this, null);
        _Client_stateChangeHandler.set(this, ((connected) => {
            const connectionState = connected ? "ready" : "notConnected";
            if (__classPrivateFieldGet(this, _Client_lastPropagatedConnectionState, "f") != connectionState) {
                __classPrivateFieldGet(this, _Client_instances, "m", _Client_propagateConnectionState).call(this, connectionState);
            }
        }).bind(this));
        _Client_storageInited.set(this, false);
        _Client_connectMutex.set(this, new Mutex());
        _Client_lastPropagatedAuthorizationState.set(this, null);
        _Client_lastUpdates.set(this, new Date());
        _Client_updateGapRecoveryLoopAbortController.set(this, void 0);
        _Client_clientDisconnectionLoopAbortController.set(this, void 0);
        _Client_getMainClientMutex.set(this, new Mutex());
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
        _Client_authStringImported.set(this, false);
        _Client_lastGetMe.set(this, null);
        _Client_previouslyConnected.set(this, false);
        _Client_lastConnectionState.set(this, false);
        __classPrivateFieldSet(this, _Client_apiId, params?.apiId ?? 0, "f");
        __classPrivateFieldSet(this, _Client_apiHash, params?.apiHash ?? "", "f");
        __classPrivateFieldSet(this, _Client_transportProvider, params?.transportProvider, "f");
        __classPrivateFieldSet(this, _Client_initialDc, params?.initialDc ?? INITIAL_DC, "f");
        __classPrivateFieldSet(this, _Client_storage_, params?.storage || new StorageMemory(), "f");
        __classPrivateFieldSet(this, _Client_persistCache, params?.persistCache ?? false, "f");
        if (!__classPrivateFieldGet(this, _Client_persistCache, "f")) {
            __classPrivateFieldSet(this, _Client_messageStorage_, new StorageMemory(), "f");
        }
        else {
            __classPrivateFieldSet(this, _Client_messageStorage_, __classPrivateFieldGet(this, _Client_storage_, "f"), "f");
        }
        this.storage = new StorageOperations(__classPrivateFieldGet(this, _Client_storage_, "f"));
        this.messageStorage = new StorageOperations(__classPrivateFieldGet(this, _Client_messageStorage_, "f"));
        __classPrivateFieldSet(this, _Client_parseMode, params?.parseMode ?? null, "f");
        __classPrivateFieldSet(this, _Client_disableUpdates, params?.disableUpdates ?? false, "f");
        __classPrivateFieldSet(this, _Client_authString, params?.authString, "f");
        this.appVersion = params?.appVersion ?? APP_VERSION;
        this.deviceModel = params?.deviceModel ?? DEVICE_MODEL;
        this.language = params?.language ?? LANG_CODE;
        this.platform = params?.platform ?? LANG_PACK;
        this.systemLangCode = params?.systemLangCode ?? SYSTEM_LANG_CODE;
        this.systemVersion = params?.systemVersion ?? SYSTEM_VERSION;
        __classPrivateFieldSet(this, _Client_publicKeys, params?.publicKeys, "f");
        __classPrivateFieldSet(this, _Client_outgoingMessages, params?.outgoingMessages ?? null, "f");
        if (params?.prefixes) {
            this.prefixes = params?.prefixes;
        }
        __classPrivateFieldSet(this, _Client_guaranteeUpdateDelivery, params?.guaranteeUpdateDelivery ?? false, "f");
        const L = __classPrivateFieldSet(this, _Client_L, getLogger("Client").client(id++), "f");
        __classPrivateFieldSet(this, _Client_LsignIn, L.branch("signIn"), "f");
        __classPrivateFieldSet(this, _Client_LupdateGapRecoveryLoop, L.branch("updateGapRecoveryLoop"), "f");
        __classPrivateFieldSet(this, _Client_LhandleMigrationError, L.branch("[handleMigrationError]"), "f");
        __classPrivateFieldSet(this, _Client_Lmin, L.branch("min"), "f");
        const c = {
            id,
            getUploadPoolSize: __classPrivateFieldGet(this, _Client_instances, "m", _Client_getUploadPoolSize).bind(this),
            invoke: async (function_, params) => {
                if (params?.businessConnectionId) {
                    if (Mtproto.is("ping", function_)) {
                        unreachable();
                    }
                    return await this.invoke({ _: "invokeWithBusinessConnection", connection_id: params.businessConnectionId, query: function_ }, params);
                }
                else {
                    return await this.invoke(function_, params);
                }
            },
            storage: this.storage,
            messageStorage: this.messageStorage,
            guaranteeUpdateDelivery: __classPrivateFieldGet(this, _Client_guaranteeUpdateDelivery, "f"),
            setConnectionState: __classPrivateFieldGet(this, _Client_instances, "m", _Client_propagateConnectionState).bind(this),
            resetConnectionState: () => __classPrivateFieldGet(this, _Client_stateChangeHandler, "f").call(this, this.connected),
            getSelfId: __classPrivateFieldGet(this, _Client_instances, "m", _Client_getSelfId).bind(this),
            getIsPremium: __classPrivateFieldGet(this, _Client_instances, "m", _Client_getIsPremium).bind(this),
            getInputPeer: this.getInputPeer.bind(this),
            getInputChannel: this.getInputChannel.bind(this),
            getInputUser: this.getInputUser.bind(this),
            getInputPeerChatId: __classPrivateFieldGet(this, _Client_instances, "m", _Client_getInputPeerChatId).bind(this),
            getEntity: this[getEntity].bind(this),
            handleUpdate: __classPrivateFieldGet(this, _Client_instances, "m", _Client_queueHandleCtxUpdate).bind(this),
            parseMode: __classPrivateFieldGet(this, _Client_parseMode, "f"),
            outgoingMessages: __classPrivateFieldGet(this, _Client_outgoingMessages, "f"),
            dropPendingUpdates: params?.dropPendingUpdates,
            disconnected: () => this.disconnected,
            langPack: this.platform,
            langCode: this.language,
        };
        // 2_
        __classPrivateFieldSet(this, _Client_accountManager, new AccountManager(c), "f");
        __classPrivateFieldSet(this, _Client_botInfoManager, new BotInfoManager(c), "f");
        __classPrivateFieldSet(this, _Client_businessConnectionManager, new BusinessConnectionManager(c), "f");
        const fileManager = __classPrivateFieldSet(this, _Client_fileManager, new FileManager(c), "f");
        __classPrivateFieldSet(this, _Client_networkStatisticsManager, new NetworkStatisticsManager(c), "f");
        __classPrivateFieldSet(this, _Client_paymentManager, new PaymentManager(c), "f");
        __classPrivateFieldSet(this, _Client_reactionManager, new ReactionManager(c), "f");
        __classPrivateFieldSet(this, _Client_translationsManager, new TranslationsManager(c), "f");
        __classPrivateFieldSet(this, _Client_updateManager, new UpdateManager(c), "f");
        // 3_
        const messageManager = __classPrivateFieldSet(this, _Client_messageManager, new MessageManager({ ...c, fileManager }), "f");
        __classPrivateFieldSet(this, _Client_videoChatManager, new VideoChatManager({ ...c, fileManager }), "f");
        // 4_
        __classPrivateFieldSet(this, _Client_callbackQueryManager, new CallbackQueryManager({ ...c, messageManager }), "f");
        __classPrivateFieldSet(this, _Client_chatListManager, new ChatListManager({ ...c, fileManager, messageManager }), "f");
        __classPrivateFieldSet(this, _Client_chatManager, new ChatManager({ ...c, fileManager, messageManager }), "f");
        __classPrivateFieldSet(this, _Client_forumManager, new ForumManager({ ...c, messageManager }), "f");
        __classPrivateFieldSet(this, _Client_giftManager, new GiftManager({ ...c, messageManager }), "f");
        __classPrivateFieldSet(this, _Client_inlineQueryManager, new InlineQueryManager({ ...c, messageManager }), "f");
        __classPrivateFieldSet(this, _Client_linkPreviewManager, new LinkPreviewManager({ ...c, messageManager }), "f");
        __classPrivateFieldSet(this, _Client_pollManager, new PollManager({ ...c, messageManager }), "f");
        __classPrivateFieldSet(this, _Client_storyManager, new StoryManager({ ...c, fileManager, messageManager }), "f");
        __classPrivateFieldGet(this, _Client_updateManager, "f").setUpdateHandler(__classPrivateFieldGet(this, _Client_instances, "m", _Client_handleUpdate).bind(this));
        if (params?.defaultHandlers ?? true) {
            this.invoke.use(async ({ error }, next) => {
                if (error instanceof FloodWait && error.seconds <= 10) {
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
        return __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get)?.connected ?? false;
    }
    get disconnected() {
        return __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get)?.disconnected ?? true;
    }
    /**
     * Loads the session if `setDc` was not called, initializes and connnects
     * a `ClientPlain` to generate auth key if there was none, and connects the client.
     * Before establishing the connection, the session is saved.
     */
    async connect() {
        const unlock = await __classPrivateFieldGet(this, _Client_connectMutex, "f").lock();
        try {
            if (this.connected) {
                return;
            }
            await __classPrivateFieldGet(this, _Client_instances, "m", _Client_initStorage).call(this);
            if (__classPrivateFieldGet(this, _Client_authString, "f") && !__classPrivateFieldGet(this, _Client_authStringImported, "f")) {
                await this.importAuthString(__classPrivateFieldGet(this, _Client_authString, "f"));
            }
            const [authKey, dc] = await Promise.all([this.storage.getAuthKey(), this.storage.getDc()]);
            if (authKey != null && dc != null) {
                if (!__classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get) || __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).dc != dc) {
                    __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get)?.disconnect();
                    __classPrivateFieldGet(this, _Client_instances, "m", _Client_setMainClient).call(this, __classPrivateFieldGet(this, _Client_instances, "m", _Client_newClient).call(this, dc, true, false));
                }
                await __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).setAuthKey(authKey);
                if (__classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).serverSalt == 0n) {
                    __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).serverSalt = await this.storage.getServerSalt() ?? 0n;
                }
            }
            else {
                const dc = await this.storage.getDc() ?? __classPrivateFieldGet(this, _Client_initialDc, "f");
                if (!__classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get) || __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).dc != dc) {
                    __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get)?.disconnect();
                    __classPrivateFieldGet(this, _Client_instances, "m", _Client_setMainClient).call(this, __classPrivateFieldGet(this, _Client_instances, "m", _Client_newClient).call(this, dc, true, false));
                }
            }
            await __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).connect();
            await Promise.all([this.storage.setAuthKey(__classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).authKey), this.storage.setDc(__classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).dc), this.storage.setServerSalt(__classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).serverSalt)]);
            __classPrivateFieldGet(this, _Client_instances, "m", _Client_startUpdateGapRecoveryLoop).call(this);
            __classPrivateFieldGet(this, _Client_instances, "m", _Client_startClientDisconnectionLoop).call(this);
        }
        finally {
            unlock();
        }
    }
    async [(_Client_clients = new WeakMap(), _Client_downloadPools = new WeakMap(), _Client_uploadPools = new WeakMap(), _Client_guaranteeUpdateDelivery = new WeakMap(), _Client_accountManager = new WeakMap(), _Client_botInfoManager = new WeakMap(), _Client_businessConnectionManager = new WeakMap(), _Client_fileManager = new WeakMap(), _Client_networkStatisticsManager = new WeakMap(), _Client_paymentManager = new WeakMap(), _Client_reactionManager = new WeakMap(), _Client_translationsManager = new WeakMap(), _Client_updateManager = new WeakMap(), _Client_messageManager = new WeakMap(), _Client_videoChatManager = new WeakMap(), _Client_callbackQueryManager = new WeakMap(), _Client_chatListManager = new WeakMap(), _Client_chatManager = new WeakMap(), _Client_forumManager = new WeakMap(), _Client_giftManager = new WeakMap(), _Client_inlineQueryManager = new WeakMap(), _Client_linkPreviewManager = new WeakMap(), _Client_pollManager = new WeakMap(), _Client_storyManager = new WeakMap(), _Client_managers = new WeakMap(), _Client_storage_ = new WeakMap(), _Client_messageStorage_ = new WeakMap(), _Client_parseMode = new WeakMap(), _Client_apiId = new WeakMap(), _Client_apiHash = new WeakMap(), _Client_transportProvider = new WeakMap(), _Client_publicKeys = new WeakMap(), _Client_outgoingMessages = new WeakMap(), _Client_persistCache = new WeakMap(), _Client_disableUpdates = new WeakMap(), _Client_authString = new WeakMap(), _Client_initialDc = new WeakMap(), _Client_L = new WeakMap(), _Client_LsignIn = new WeakMap(), _Client_LupdateGapRecoveryLoop = new WeakMap(), _Client_LhandleMigrationError = new WeakMap(), _Client_Lmin = new WeakMap(), _Client_constructContext = new WeakMap(), _Client_lastPropagatedConnectionState = new WeakMap(), _Client_stateChangeHandler = new WeakMap(), _Client_storageInited = new WeakMap(), _Client_connectMutex = new WeakMap(), _Client_lastPropagatedAuthorizationState = new WeakMap(), _Client_lastUpdates = new WeakMap(), _Client_updateGapRecoveryLoopAbortController = new WeakMap(), _Client_clientDisconnectionLoopAbortController = new WeakMap(), _Client_getMainClientMutex = new WeakMap(), _Client_handleInvokeError = new WeakMap(), _Client_authStringImported = new WeakMap(), _Client_lastGetMe = new WeakMap(), _Client_previouslyConnected = new WeakMap(), _Client_lastConnectionState = new WeakMap(), _Client_instances = new WeakSet(), _Client_setMainClient = function _Client_setMainClient(client) {
        __classPrivateFieldGet(this, _Client_instances, "m", _Client_disconnectAllClients).call(this);
        __classPrivateFieldSet(this, _Client_clients, [client], "f");
        client.handlers.onUpdate = (updates) => {
            __classPrivateFieldGet(this, _Client_updateManager, "f").processUpdates(updates, true, null);
            __classPrivateFieldSet(this, _Client_lastUpdates, new Date(), "f");
        };
        client.handlers.onDeserializationError = async () => {
            await __classPrivateFieldGet(this, _Client_updateManager, "f").recoverUpdateGap("deserialization error");
        };
        client.handlers.onNewServerSalt = async (serverSalt) => {
            await this.storage.setServerSalt(serverSalt);
        };
        client.onConnectionStateChange = __classPrivateFieldGet(this, _Client_instances, "m", _Client_onConnectionStateChange).bind(this);
    }, _Client_newClient = function _Client_newClient(dc, main, cdn) {
        const client = new ClientEncrypted(dc, __classPrivateFieldGet(this, _Client_apiId, "f"), {
            appVersion: this.appVersion,
            deviceModel: this.deviceModel,
            langCode: this.language,
            langPack: this.platform,
            systemLangCode: this.systemLangCode,
            systemVersion: this.systemVersion,
            transportProvider: __classPrivateFieldGet(this, _Client_transportProvider, "f"),
            cdn,
            disableUpdates: !main || cdn,
            publicKeys: __classPrivateFieldGet(this, _Client_publicKeys, "f"),
        });
        client.connectionCallback = __classPrivateFieldGet(this, _Client_networkStatisticsManager, "f").getTransportReadWriteCallback(cdn);
        return client;
    }, _Client_disconnectAllClients = function _Client_disconnectAllClients() {
        for (const client of __classPrivateFieldGet(this, _Client_clients, "f")) {
            client.disconnect();
        }
        for (const pool of Object.values(__classPrivateFieldGet(this, _Client_downloadPools, "f"))) {
            pool.disconnect();
        }
        for (const pool of Object.values(__classPrivateFieldGet(this, _Client_uploadPools, "f"))) {
            pool.disconnect();
        }
    }, _Client_client_get = function _Client_client_get() {
        return __classPrivateFieldGet(this, _Client_clients, "f")[0];
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
    }, handleMigrationError)](err) {
        let newDc = String(err.dc);
        if (Math.abs(getDcId(__classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).dc, __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).cdn)) >= 10_000) {
            newDc += "-test";
        }
        this.disconnect();
        await this.storage.setDc(newDc);
        await this.storage.setAuthKey(null);
        await this.connect();
        __classPrivateFieldGet(this, _Client_LhandleMigrationError, "f").debug(`migrated to DC${newDc}`);
    }
    disconnect() {
        __classPrivateFieldGet(this, _Client_instances, "m", _Client_disconnectAllClients).call(this);
        __classPrivateFieldGet(this, _Client_clientDisconnectionLoopAbortController, "f")?.abort();
        __classPrivateFieldGet(this, _Client_updateGapRecoveryLoopAbortController, "f")?.abort();
        __classPrivateFieldGet(this, _Client_updateManager, "f").closeAllChats();
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
            drop(__classPrivateFieldGet(this, _Client_updateManager, "f").recoverUpdateGap("signIn"));
            __classPrivateFieldGet(this, _Client_LsignIn, "f").debug("already signed in");
            return;
        }
        catch (err) {
            if (!(err instanceof AuthKeyUnregistered) && !(err instanceof SessionRevoked)) {
                throw err;
            }
        }
        if (!__classPrivateFieldGet(this, _Client_apiId, "f")) {
            throw new InputError("apiId not set");
        }
        if (!__classPrivateFieldGet(this, _Client_apiHash, "f")) {
            throw new InputError("apiHash not set");
        }
        if (typeof params === "undefined") {
            const loginType = mustPromptOneOf("Do you want to login as bot [b] or user [u]?", ["b", "u"]);
            if (loginType == "b") {
                params = { botToken: mustPrompt("Bot token:") };
            }
            else {
                params = { phone: () => mustPrompt("Phone number:"), code: () => mustPrompt("Verification code:"), password: () => mustPrompt("Password:") };
            }
        }
        __classPrivateFieldGet(this, _Client_LsignIn, "f").debug("authorizing with", typeof params === "string" ? "bot token" : Api.is("auth.exportedAuthorization", params) ? "exported authorization" : "AuthorizeUserParams");
        if (params && "botToken" in params) {
            while (true) {
                try {
                    const auth = await this.invoke({ _: "auth.importBotAuthorization", api_id: __classPrivateFieldGet(this, _Client_apiId, "f"), api_hash: __classPrivateFieldGet(this, _Client_apiHash, "f"), bot_auth_token: params.botToken, flags: 0 });
                    await this.storage.setAccountId(Number(Api.as("auth.authorization", auth).user.id));
                    await this.storage.setAccountType("bot");
                    break;
                }
                catch (err) {
                    if (err instanceof Migrate) {
                        await this[handleMigrationError](err);
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
                        const sendCode = () => this.invoke({
                            _: "auth.sendCode",
                            phone_number: phone,
                            api_id: __classPrivateFieldGet(this, _Client_apiId, "f"),
                            api_hash: __classPrivateFieldGet(this, _Client_apiHash, "f"),
                            settings: { _: "codeSettings" },
                        }).then((v) => Api.as("auth.sentCode", v));
                        try {
                            sentCode = await sendCode();
                        }
                        catch (err) {
                            if (err instanceof Migrate) {
                                await this[handleMigrationError](err);
                                sentCode = await sendCode();
                            }
                            else {
                                throw err;
                            }
                        }
                        break;
                    }
                    catch (err) {
                        if (err instanceof PhoneNumberInvalid) {
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
                        const auth = await this.invoke({
                            _: "auth.signIn",
                            phone_number: phone,
                            phone_code: code,
                            phone_code_hash: sentCode.phone_code_hash,
                        });
                        await this.storage.setAccountId(Number(Api.as("auth.authorization", auth).user.id));
                        await this.storage.setAccountType("user");
                        __classPrivateFieldGet(this, _Client_LsignIn, "f").debug("signed in as user");
                        await __classPrivateFieldGet(this, _Client_instances, "m", _Client_propagateAuthorizationState).call(this, true);
                        await __classPrivateFieldGet(this, _Client_updateManager, "f").fetchState("signIn");
                        return;
                    }
                    catch (err_) {
                        if (err_ instanceof PhoneCodeInvalid) {
                            continue code;
                        }
                        else {
                            err = err_;
                            break code;
                        }
                    }
                }
                if (!(err instanceof SessionPasswordNeeded)) {
                    throw err;
                }
                password: while (true) {
                    const ap = await this.invoke({ _: "account.getPassword" });
                    if (!(Api.is("passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow", ap.current_algo))) {
                        throw new Error(`Handling ${ap.current_algo?._} not implemented`);
                    }
                    try {
                        const password = typeof params.password === "string" ? params.password : await params.password(ap.hint ?? null);
                        const input = await checkPassword(password, ap);
                        const auth = await this.invoke({ _: "auth.checkPassword", password: input });
                        await this.storage.setAccountId(Number(Api.as("auth.authorization", auth).user.id));
                        await this.storage.setAccountType("user");
                        __classPrivateFieldGet(this, _Client_LsignIn, "f").debug("signed in as user");
                        await __classPrivateFieldGet(this, _Client_instances, "m", _Client_propagateAuthorizationState).call(this, true);
                        await __classPrivateFieldGet(this, _Client_updateManager, "f").fetchState("signIn");
                        return;
                    }
                    catch (err) {
                        if (err instanceof PasswordHashInvalid) {
                            continue password;
                        }
                        else {
                            throw err;
                        }
                    }
                }
            }
            catch (err) {
                if (err == restartAuth) {
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
                this.invoke({ _: "auth.logOut" }).then(() => {
                    __classPrivateFieldGet(this, _Client_instances, "m", _Client_propagateAuthorizationState).call(this, false);
                }),
            ]);
        }
        finally {
            __classPrivateFieldSet(this, _Client_lastGetMe, null, "f");
            this.disconnect();
            await this.connect();
        }
    }
    /**
     * Same as calling `.connect()` followed by `.signIn(params)`.
     */
    async start(params) {
        await this.connect();
        await this.signIn(params);
    }
    exportAuthString() {
        return this.storage.exportAuthString(__classPrivateFieldGet(this, _Client_apiId, "f"));
    }
    async importAuthString(authString) {
        if (this.connected) {
            throw new Error("Cannot import auth string while the client is connected");
        }
        await __classPrivateFieldGet(this, _Client_instances, "m", _Client_initStorage).call(this);
        await this.storage.importAuthString(authString);
        __classPrivateFieldSet(this, _Client_authStringImported, true, "f");
        if (!__classPrivateFieldGet(this, _Client_apiId, "f")) {
            __classPrivateFieldSet(this, _Client_apiId, await this.storage.getApiId() ?? 0, "f");
        }
    }
    /**
     * Get a chat's inputPeer. Useful when calling API functions directly.
     *
     * @param id The identifier of a chat.
     */
    async getInputPeer(id) {
        if (id === "me" || id == await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getSelfId).call(this)) {
            return { _: "inputPeerSelf" };
        }
        const inputPeer = await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getInputPeerInner).call(this, id);
        if (((Api.is("inputPeerUser", inputPeer) || Api.is("inputPeerChannel", inputPeer)) && inputPeer.access_hash == 0n) && await this.storage.getAccountType() == "user") {
            if ("channel_id" in inputPeer) {
                inputPeer.access_hash = await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getChannelAccessHash).call(this, inputPeer.channel_id);
            }
            else {
                inputPeer.access_hash = await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getUserAccessHash).call(this, inputPeer.user_id);
            }
        }
        if ((Api.is("inputPeerUser", inputPeer) || Api.is("inputPeerChannel", inputPeer)) && inputPeer.access_hash == 0n && await this.storage.getAccountType() == "user") {
            throw new AccessError(`Cannot access the chat ${id} because there is no access hash for it.`);
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
        if (!canBeInputChannel(inputPeer)) {
            throw new TypeError(`The chat ${id} is not a channel neither a supergroup.`);
        }
        return toInputChannel(inputPeer);
    }
    /**
     * Get a user's inputUser. Useful when calling API functions directly.
     *
     * @param id The identifier of the user.
     */
    async getInputUser(id) {
        const inputPeer = await this.getInputPeer(id);
        if (!canBeInputUser(inputPeer)) {
            throw new TypeError(`The chat ${id} is not a private chat.`);
        }
        return toInputUser(inputPeer);
    }
    async [(_Client_propagateAuthorizationState = async function _Client_propagateAuthorizationState(authorized) {
        if (__classPrivateFieldGet(this, _Client_lastPropagatedAuthorizationState, "f") != authorized) {
            await __classPrivateFieldGet(this, _Client_instances, "m", _Client_handleCtxUpdate).call(this, { authorizationState: { authorized } });
            __classPrivateFieldSet(this, _Client_lastPropagatedAuthorizationState, authorized, "f");
        }
    }, _Client_getSelfId = async function _Client_getSelfId() {
        const id = await this.storage.getAccountId();
        if (id == null) {
            throw new Error("Unauthorized");
        }
        return id;
    }, _Client_getIsPremium = async function _Client_getIsPremium() {
        const maybeIsPremium = await this.storage.getIsPremium();
        if (maybeIsPremium != null) {
            return maybeIsPremium;
        }
        return __classPrivateFieldGet(this, _Client_lastGetMe, "f")?.isPremium ?? false;
    }, _Client_startUpdateGapRecoveryLoop = function _Client_startUpdateGapRecoveryLoop() {
        drop(__classPrivateFieldGet(this, _Client_instances, "m", _Client_updateGapRecoveryLoop).call(this));
    }, _Client_updateGapRecoveryLoop = async function _Client_updateGapRecoveryLoop() {
        __classPrivateFieldGet(this, _Client_updateGapRecoveryLoopAbortController, "f")?.abort();
        const controller = __classPrivateFieldSet(this, _Client_updateGapRecoveryLoopAbortController, new AbortController(), "f");
        while (this.connected) {
            try {
                await delay(60 * SECOND, { signal: controller.signal });
                if (!this.connected) {
                    break;
                }
                controller.signal.throwIfAborted();
                if (Date.now() - __classPrivateFieldGet(this, _Client_lastUpdates, "f").getTime() >= 15 * MINUTE) {
                    drop(__classPrivateFieldGet(this, _Client_updateManager, "f").recoverUpdateGap("lastUpdates").then(() => {
                        __classPrivateFieldSet(this, _Client_lastUpdates, new Date(), "f");
                    }));
                }
            }
            catch (err) {
                if (err instanceof DOMException && err.name == "AbortError") {
                    break;
                }
                else if (!this.connected) {
                    break;
                }
                __classPrivateFieldGet(this, _Client_LupdateGapRecoveryLoop, "f").error(err);
            }
        }
    }, _Client_startClientDisconnectionLoop = function _Client_startClientDisconnectionLoop() {
        drop(__classPrivateFieldGet(this, _Client_instances, "m", _Client_clientDisconnectionLoop).call(this));
    }, _Client_clientDisconnectionLoop = async function _Client_clientDisconnectionLoop() {
        const controller = __classPrivateFieldSet(this, _Client_clientDisconnectionLoopAbortController, new AbortController(), "f");
        while (this.connected) {
            try {
                await delay(60 * SECOND, { signal: controller.signal });
                if (!this.connected) {
                    break;
                }
                controller.signal.throwIfAborted();
                const now = Date.now();
                const disconnectAfter = 5 * MINUTE;
                __classPrivateFieldGet(this, _Client_clients, "f").map((client, i) => {
                    if (i > 0 && !client.disconnected && client.lastRequest && now - client.lastRequest.getTime() >= disconnectAfter) {
                        client?.disconnect();
                    }
                });
            }
            catch (err) {
                if (err instanceof DOMException && err.name == "AbortError") {
                    break;
                }
                else if (!this.connected) {
                    break;
                }
            }
        }
    }, _Client_getClient = async function _Client_getClient(params) {
        let client;
        switch (params.type) {
            case undefined:
                client = await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getMainClient).call(this, params.dc);
                break;
            case "download":
                client = await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getDownloadClient).call(this, params.dc);
                break;
            case "upload":
                client = await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getUploadClient).call(this);
                break;
        }
        if (client !== __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get) && !this.disconnected && client.disconnected) {
            await client.connect();
        }
        return client;
    }, _Client_getMainClient = async function _Client_getMainClient(dc) {
        if (dc === undefined || dc == __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get)?.dc) {
            return __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get);
        }
        let client = __classPrivateFieldGet(this, _Client_clients, "f").find((v) => v.dc == dc);
        if (client) {
            return client;
        }
        const unlock = await __classPrivateFieldGet(this, _Client_getMainClientMutex, "f").lock();
        client = __classPrivateFieldGet(this, _Client_clients, "f").find((v) => v.dc == dc);
        if (client) {
            return client;
        }
        try {
            client = __classPrivateFieldGet(this, _Client_instances, "m", _Client_newClient).call(this, dc, false, false);
            await __classPrivateFieldGet(this, _Client_instances, "m", _Client_setupClient).call(this, client);
            __classPrivateFieldGet(this, _Client_clients, "f").push(client);
            return client;
        }
        finally {
            unlock();
        }
    }, _Client_getDownloadClient = async function _Client_getDownloadClient(dc) {
        dc ??= __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).dc;
        const pool = __classPrivateFieldGet(this, _Client_downloadPools, "f")[dc] ??= new ClientEncryptedPool();
        if (!pool.size) {
            if (!pool.size) {
                for (let i = 0; i < DOWNLOAD_POOL_SIZE; ++i) {
                    pool.add(__classPrivateFieldGet(this, _Client_instances, "m", _Client_newClient).call(this, dc, false, true));
                }
            }
        }
        const client = pool.nextClient();
        if (client.authKey.length) {
            return client;
        }
        await __classPrivateFieldGet(this, _Client_instances, "m", _Client_setupClient).call(this, client);
        return client;
    }, _Client_getUploadPoolSize = async function _Client_getUploadPoolSize() {
        const dc = __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).dc;
        return (dc != "2" && dc != "4") || await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getIsPremium).call(this) ? 8 : 4;
    }, _Client_getUploadClient = async function _Client_getUploadClient() {
        const dc = __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).dc;
        const poolSize = await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getUploadPoolSize).call(this);
        const pool = __classPrivateFieldGet(this, _Client_uploadPools, "f")[dc] ??= new ClientEncryptedPool();
        if (!pool.size) {
            for (let i = 0; i < poolSize; ++i) {
                pool.add(await __classPrivateFieldGet(this, _Client_instances, "m", _Client_newClient).call(this, dc, false, true));
            }
        }
        const client = pool.nextClient();
        if (client.authKey.length) {
            return client;
        }
        await __classPrivateFieldGet(this, _Client_instances, "m", _Client_setupClient).call(this, client);
        return client;
    }, _Client_setupClient = async function _Client_setupClient(client) {
        const storage = client.dc == __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).dc ? this.storage : new StorageOperations(this.storage.provider.branch(client.dc + (client.cdn ? "_cdn" : "")));
        const [authKey, serverSalt] = await Promise.all([storage.getAuthKey(), storage.getServerSalt()]);
        if (authKey) {
            await client.setAuthKey(authKey);
            if (serverSalt) {
                client.serverSalt = serverSalt;
            }
        }
        await client.connect();
        if (!authKey) {
            await __classPrivateFieldGet(this, _Client_instances, "m", _Client_importAuthorization).call(this, client);
        }
        await storage.setAuthKey(client.authKey);
        if (client.dc !== __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).dc) {
            await storage.setServerSalt(client.serverSalt);
            client.handlers.onNewServerSalt = async (serverSalt) => {
                await storage.setServerSalt(serverSalt);
            };
        }
    }, _Client_importAuthorization = async function _Client_importAuthorization(client) {
        if (__classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).dc == client.dc && __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).cdn == client.cdn) {
            const [authKey, serverSalt] = await Promise.all([this.storage.getAuthKey(), this.storage.getServerSalt()]);
            if (authKey) {
                await client.setAuthKey(authKey);
                if (serverSalt) {
                    client.serverSalt = serverSalt;
                }
            }
            return;
        }
        const exportedAuthorization = await __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get).invoke({ _: "auth.exportAuthorization", dc_id: getDcId(client.dc, client.cdn) });
        await client.invoke({ ...exportedAuthorization, _: "auth.importAuthorization" });
    }, _Client_invoke = async function _Client_invoke(function_, params) {
        if (!__classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get)) {
            throw new ConnectionError("Not connected.");
        }
        let n = 1;
        let client;
        while (true) {
            client = params ? await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getClient).call(this, params) : __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get);
            const main = client === __classPrivateFieldGet(this, _Client_instances, "a", _Client_client_get);
            try {
                const result = await client.invoke(function_);
                if (main) {
                    try {
                        await __classPrivateFieldGet(this, _Client_updateManager, "f").processResult(result);
                    }
                    catch (err) {
                        __classPrivateFieldGet(this, _Client_L, "f").error("failed to process result:", err);
                    }
                    if (Api.isOfEnum("Update", result) || Api.isOfEnum("Updates", result)) {
                        return new Promise((resolve) => {
                            __classPrivateFieldGet(this, _Client_updateManager, "f").processUpdates(result, true, Mtproto.is("ping", function_) ? null : function_, () => resolve(result));
                        });
                    }
                }
                return result;
            }
            catch (err) {
                if (err instanceof AuthKeyUnregistered && !main) {
                    await __classPrivateFieldGet(this, _Client_instances, "m", _Client_importAuthorization).call(this, client);
                    continue;
                }
                else if (err instanceof ConnectionError && !main && !this.disconnected) {
                    continue;
                }
                else if (await __classPrivateFieldGet(this, _Client_handleInvokeError, "f").call(this, Object.freeze({ client: this, error: err, function: function_, n: n++ }), () => Promise.resolve(false))) {
                    continue;
                }
                else {
                    throw err;
                }
            }
        }
    }, _Client_getUserAccessHash = async function _Client_getUserAccessHash(userId) {
        const users = await this.invoke({ _: "users.getUsers", id: [{ _: "inputUser", user_id: userId, access_hash: 0n }] });
        const user = Api.is("user", users[0]) ? users[0] : undefined;
        if (user) {
            await this.messageStorage.setEntity(user);
        }
        return user?.access_hash ?? 0n;
    }, _Client_getChannelAccessHash = async function _Client_getChannelAccessHash(channelId) {
        const channels = await this.invoke({ _: "channels.getChannels", id: [{ _: "inputChannel", channel_id: channelId, access_hash: 0n }] });
        const channel = Api.is("channel", channels.chats[0]) ? channels.chats[0] : undefined;
        if (channel) {
            await this.messageStorage.setEntity(channel);
        }
        return channel?.access_hash ?? 0n;
    }, _Client_getInputPeerChatId = async function _Client_getInputPeerChatId(inputPeer) {
        if (Api.isOneOf(["inputPeerSelf", "inputUserSelf"], inputPeer)) {
            return await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getSelfId).call(this);
        }
        else if (Api.isOneOf(["inputPeerEmpty", "inputUserEmpty", "inputChannelEmpty"], inputPeer)) {
            unreachable();
        }
        else {
            return Api.peerToChatId(inputPeer);
        }
    }, _Client_getInputPeerInner = async function _Client_getInputPeerInner(id) {
        const idn = Number(id);
        if (!isNaN(idn)) {
            id = idn;
        }
        let peer;
        if (typeof id === "string") {
            id = getUsername(id);
            let resolvedId = 0;
            const maybeUsername = await this.messageStorage.getUsername(id);
            if (maybeUsername != null && Date.now() - maybeUsername[1].getTime() < USERNAME_TTL) {
                const [id] = maybeUsername;
                resolvedId = id;
            }
            else {
                const resolved = await this.invoke({ _: "contacts.resolveUsername", username: id });
                await __classPrivateFieldGet(this, _Client_updateManager, "f").processChats(resolved.chats, resolved);
                await __classPrivateFieldGet(this, _Client_updateManager, "f").processUsers(resolved.users, resolved);
                if (Api.is("peerUser", resolved.peer)) {
                    resolvedId = Api.peerToChatId(resolved.peer);
                }
                else if (Api.is("peerChannel", resolved.peer)) {
                    resolvedId = Api.peerToChatId(resolved.peer);
                }
                else {
                    unreachable();
                }
            }
            const resolvedIdType = Api.getChatIdPeerType(resolvedId);
            if (resolvedIdType == "user") {
                const accessHash = await this.messageStorage.getUserAccessHash(resolvedId);
                peer = { _: "inputPeerUser", user_id: Api.chatIdToPeerId(resolvedId), access_hash: accessHash ?? 0n };
            }
            else if (resolvedIdType == "channel") {
                const accessHash = await this.messageStorage.getChannelAccessHash(resolvedId);
                peer = { _: "inputPeerChannel", channel_id: Api.chatIdToPeerId(resolvedId), access_hash: accessHash ?? 0n };
            }
            else {
                unreachable();
            }
        }
        else if (id > 0) {
            const accessHash = await this.messageStorage.getUserAccessHash(id);
            peer = { _: "inputPeerUser", user_id: Api.chatIdToPeerId(id), access_hash: accessHash ?? 0n };
        }
        else if (-MAX_CHAT_ID <= id) {
            peer = { _: "inputPeerChat", chat_id: BigInt(Math.abs(id)) };
        }
        else if (ZERO_CHANNEL_ID - MAX_CHANNEL_ID <= id && id != ZERO_CHANNEL_ID) {
            const accessHash = await this.messageStorage.getChannelAccessHash(id);
            peer = { _: "inputPeerChannel", channel_id: Api.chatIdToPeerId(id), access_hash: accessHash ?? 0n };
        }
        else {
            throw new InputError("The ID is of an format unknown.");
        }
        if (!Api.is("inputPeerChat", peer) && !peer.access_hash) {
            const chatId = Api.peerToChatId(peer);
            const minPeerReference = await this.messageStorage.getLastMinPeerReference(chatId);
            if (minPeerReference) {
                const minInputPeer = await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getMinInputPeer).call(this, canBeInputChannel(peer) ? "channel" : "user", { ...minPeerReference, senderId: chatId });
                if (minInputPeer) {
                    __classPrivateFieldGet(this, _Client_Lmin, "f").debug("resolved input min peer", minInputPeer);
                    peer = minInputPeer;
                }
            }
        }
        return peer;
    }, _Client_getMinInputPeer = async function _Client_getMinInputPeer(type, reference) {
        const entity = await this.messageStorage.getEntity(reference.chatId);
        if (Api.isOneOf(["channel", "channelForbidden"], entity) && entity.access_hash) {
            const peer = { _: "inputPeerChannel", channel_id: entity.id, access_hash: entity.access_hash };
            if (type == "user") {
                return { _: "inputPeerUserFromMessage", peer, msg_id: reference.messageId, user_id: Api.chatIdToPeerId(reference.senderId) };
            }
            else {
                return { _: "inputPeerChannelFromMessage", peer, msg_id: reference.messageId, channel_id: Api.chatIdToPeerId(reference.senderId) };
            }
        }
        else {
            return null;
        }
    }, getEntity)](peer) {
        const id = Api.peerToChatId(peer);
        const entity = await this.messageStorage.getEntity(id);
        if (entity == null && await this.storage.getAccountType() == "bot" && Api.is("peerUser", peer) || Api.is("peerChannel", peer)) {
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
        let user_ = await this[getEntity]({ _: "peerUser", user_id: BigInt(await __classPrivateFieldGet(this, _Client_instances, "m", _Client_getSelfId).call(this)) });
        if (user_ == null) {
            const users = await this.invoke({ _: "users.getUsers", id: [{ _: "inputUserSelf" }] });
            user_ = Api.as("user", users[0]);
            await this.messageStorage.setEntity(user_);
            await this.storage.setIsPremium(user_.premium ?? false);
        }
        const user = constructUser(user_);
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
     * Hide all usernames from a supergroup or a channel's profile. User-only.
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
     * @cache
     */
    async getBusinessConnection(id) {
        return await __classPrivateFieldGet(this, _Client_businessConnectionManager, "f").getBusinessConnection(id);
    }
    /**
     * Set the current account's online status. User-only.
     *
     * @method ac
     * @param online The new online status.
     */
    async setOnline(online) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").setOnline(online);
    }
    /**
     * Set the current account's emoji status. User-only.
     *
     * @method ac
     * @param id The identifier of the emoji to be used as the new status.
     */
    async setEmojiStatus(id, params) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").setEmojiStatus(id, params);
    }
    /**
     * Set the emoji status of a bot's user. Bot-only.
     *
     * @method ac
     * @param userId The identifier of a user of the bot.
     * @param id The identifier of the emoji to be used as the new status.
     */
    async setUserEmojiStatus(userId, id, params) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").setUserEmojiStatus(userId, id, params);
    }
    /**
     * Update the profile of the current user. At least one parameter must be specified. User-only.
     *
     * @method ac
     */
    async updateProfile(params) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").updateProfile(params);
    }
    /**
     * Set the birthday of the current user. User-only.
     *
     * @method ac
     */
    async setBirthday(params) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").setBirthday(params);
    }
    /**
     * Set the personal channel of the current user. User-only.
     *
     * @method ac
     */
    async setPersonalChannel(params) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").setPersonalChannel(params);
    }
    /**
     * Set the name color of the current user. User-only.
     *
     * @method ac
     * @param color The identifier of the color to set.
     */
    async setNameColor(color, params) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").setNameColor(color, params);
    }
    /**
     * Set the profile color of the current user. User-only.
     *
     * @method ac
     * @param color The identifier of the color to set.
     */
    async setProfileColor(color, params) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").setProfileColor(color, params);
    }
    /**
     * Set the location of the current user. User-only.
     *
     * @method ac
     */
    async setLocation(params) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").setLocation(params);
    }
    //
    // ========================= MESSAGES ========================= //
    //
    /**
     * Send a text message.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the message to.
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
     * @param chatId The identifier of a chat to send the photo to.
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
     * @param chatId The identifier of a chat to send the document to.
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
     * @param chatId The identifier of a chat to send the sticker to.
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
     * @param chatId The identifier of a chat to send the video to.
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
     * @param chatId The identifier of a chat to send the animation to.
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
     * @param chatId The identifier of a chat to send the voice message to.
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
     * @param chatId The identifier of a chat to send the audio file to.
     * @param audio The audio to send.
     * @returns The sent audio filr.
     */
    async sendAudio(chatId, audio, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendAudio(chatId, audio, params);
    }
    /**
     * Send a media group.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the media group to.
     * @param media The media to include in the media group. Animations are not allowed. All of them must be of the same media type, but an exception is that photos and videos can be mixed.
     * @returns The sent messages.
     */
    async sendMediaGroup(chatId, media, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendMediaGroup(chatId, media, params);
    }
    /**
     * Send a video note.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the video note to.
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
     * @param chatId The identifier of a chat to send the location to.
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
     * @param chatId The identifier of a chat to send the contact to.
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
     * @param chatId The identifier of a chat to send the dice to.
     * @returns The sent dice.
     */
    async sendDice(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendDice(chatId, params);
    }
    /**
     * Send a venue.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the venue to.
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
     * @param chatId The identifier of a chat to send the poll to.
     * @param question The poll's question.
     * @param options The poll's options.
     * @returns The sent poll.
     */
    async sendPoll(chatId, question, options, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendPoll(chatId, question, options, params);
    }
    /**
     * Send an invoice. Bot-only.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the invoice to.
     * @param title The invoice's title.
     * @param description The invoice's description.
     * @param payload The invoice's payload.
     * @param currency The invoice's currency.
     * @param prices The invoice's price tags.
     * @returns The sent invoice.
     */
    async sendInvoice(chatId, title, description, payload, currency, prices, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendInvoice(chatId, title, description, payload, currency, prices, params);
    }
    /**
     * Edit a message's text.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message.
     * @param text The new text of the message.
     * @returns The edited text message.
     */
    async editMessageText(chatId, messageId, text, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").editMessageText(chatId, messageId, text, params);
    }
    /**
     * Edit a message's caption.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message.
     * @param text The new caption of the message.
     * @returns The edited message.
     */
    async editMessageCaption(chatId, messageId, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").editMessageCaption(chatId, messageId, params);
    }
    /**
     * Edit a message's media.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message.
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
     * @param inlineMessageId The identifier of the inline message.
     * @param media The new media of the message.
     */
    async editInlineMessageMedia(inlineMessageId, media, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").editInlineMessageMedia(inlineMessageId, media, params);
    }
    /**
     * Edit an inline message's text. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The identifier of the inline message.
     * @param text The new text of the message.
     */
    async editInlineMessageText(inlineMessageId, text, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").editInlineMessageText(inlineMessageId, text, params);
    }
    /**
     * Edit an inline message's caption. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The identifier of the inline message.
     */
    async editInlineMessageCaption(inlineMessageId, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").editInlineMessageCaption(inlineMessageId, params);
    }
    /**
     * Edit a message's reply markup.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message.
     * @returns The edited message.
     */
    async editMessageReplyMarkup(chatId, messageId, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").editMessageReplyMarkup(chatId, messageId, params);
    }
    /**
     * Edit an inline message's reply markup. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The identifier of the inline message.
     */
    async editInlineMessageReplyMarkup(inlineMessageId, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").editInlineMessageReplyMarkup(inlineMessageId, params);
    }
    /**
     * Edit a message's live location.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message.
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
     * @param inlineMessageId The identifier of the inline message.
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
     * @param chatId The identifier of a chat to retrieve the messages from.
     * @param messageIds The identifiers of the messages to retrieve.
     * @example ```ts
     * const message = await client.getMessages("@MTKruto", [210, 212]);
     * ```
     * @returns The retrieved messages.
     * @cache
     */
    async getMessages(chatId, messageIds) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").getMessages(chatId, messageIds);
    }
    /**
     * Retrieve a single message.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageId The identifier of the message to retrieve.
     * @example ```ts
     * const message = await client.getMessage("@MTKruto", 212);
     * ```
     * @returns The retrieved message.
     * @cache
     */
    async getMessage(chatId, messageId) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").getMessage(chatId, messageId);
    }
    /**
     * Retrieve a message using its link.
     *
     * @method ms
     * @param link A message link.
     * @example ```ts
     * const message = await client.resolveMessageLink("https://t.me/MTKruto/212");
     * ```
     * @returns The message that was linked to.
     */
    async resolveMessageLink(link) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").resolveMessageLink(link);
    }
    /**
     * Delete multiple messages.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageIds The identifiers of the messages to delete.
     */
    async deleteMessages(chatId, messageIds, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").deleteMessages(chatId, messageIds, params);
    }
    /**
     * Delete a single message.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message to delete.
     */
    async deleteMessage(chatId, messageId, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").deleteMessages(chatId, [messageId], params);
    }
    /**
     * Delete all messages sent by a specific member of a chat. User-only.
     *
     * @method ms
     * @param chatId The identifier of a chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    async deleteChatMemberMessages(chatId, memberId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").deleteChatMemberMessages(chatId, memberId);
    }
    /**
     * Delete multiple scheduled messages.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageIds The identifiers of the scheduled messages to delete.
     */
    async deleteScheduledMessages(chatId, messageIds) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").deleteScheduledMessages(chatId, messageIds);
    }
    /**
     * Delete a scheduled message.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageId The identifier of the scheduled message to delete.
     */
    async deleteScheduledMessage(chatId, messageId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").deleteScheduledMessage(chatId, messageId);
    }
    /**
     * Send multiple scheduled messages before their schedule.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageIds The identifiers of the scheduled messages to send.
     */
    async sendScheduledMessages(chatId, messageIds) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendScheduledMessages(chatId, messageIds);
    }
    /**
     * Send a scheduled message before its schedule.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageId The identifier of the scheduled message to send.
     */
    async sendScheduledMessage(chatId, messageId) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").sendScheduledMessage(chatId, messageId);
    }
    /**
     * Pin a message in a chat.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageId The identifier of the message.
     */
    async pinMessage(chatId, messageId, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").pinMessage(chatId, messageId, params);
    }
    /**
     * Unpin a pinned message.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageId The identifier of the message.
     */
    async unpinMessage(chatId, messageId, params) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").unpinMessage(chatId, messageId, params);
    }
    /**
     * Unpin all pinned messages.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     */
    async unpinMessages(chatId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").unpinMessages(chatId);
    }
    /**
     * Forward multiple messages.
     *
     * @method ms
     * @param from The identifier of a chat to forward the messages from.
     * @param to The identifier of a chat to forward the messages to.
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
     * @param from The identifier of a chat to forward the message from.
     * @param to The identifier of a chat to forward the message to.
     * @param messageId The identifier of the message to forward.
     * @returns The forwarded message.
     */
    async forwardMessage(from, to, messageId, params) {
        return (await this.forwardMessages(from, to, [messageId], params))[0];
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
     * @param chatId The identifier of a chat to send the chat action to.
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
     * @param chatId The identifier of a chat.
     * @param query The message search query.
     */
    async searchMessages(chatId, query, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").searchMessages(chatId, query, params);
    }
    /**
     * Mark messages as read. User-only.
     *
     * @method ms
     * @param chatId The identifier of the chat which the messages belong to.
     * @param untilMessageId The identifier of the message that will be marked as read, along with any other unread messages before it.
     */
    async readMessages(chatId, untilMessageId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").readMessages(chatId, untilMessageId);
    }
    /**
     * Start a bot. User-only.
     *
     * @method ms
     * @param botId The identifier of the bot to start.
     * @returns The start message.
     */
    async startBot(botId, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").startBot(botId, params);
    }
    /**
     * Transcribe a voice message. User-only.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message.
     * @cache
     */
    async transcribeVoice(chatId, messageId) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").transcribeVoice(chatId, messageId);
    }
    /**
     * Get the link preview for a message that is about to be sent. User-only.
     *
     * @method ms
     * @param text The message's text.
     */
    async getLinkPreview(text, params) {
        return await __classPrivateFieldGet(this, _Client_linkPreviewManager, "f").getLinkPreview(text, params);
    }
    /**
     * Open a mini app. User-only.
     *
     * @method ms
     * @param botId The identifier of a bot with the mini app.
     * @param chatId The identifier of the chat from which the mini app is opened.
     * @cache
     */
    async openMiniApp(botId, chatId, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").openMiniApp(botId, chatId, params);
    }
    //
    // ========================= POLLS ========================= //
    //
    /**
     * Cast a vote. User-only.
     *
     * @method pl
     * @param chatId The identifier of the chat that includes the poll.
     * @param messageId The identifier of the message that includes the poll.
     * @param optionIndexes The indexes of the options to cast for.
     */
    async vote(chatId, messageId, optionIndexes) {
        await __classPrivateFieldGet(this, _Client_pollManager, "f").vote(chatId, messageId, optionIndexes);
    }
    /**
     * Retract a vote. User-only.
     *
     * @method pl
     * @param chatId The identifier of the chat that includes the poll.
     * @param messageId The identifier of the message that includes the poll.
     */
    async retractVote(chatId, messageId) {
        await __classPrivateFieldGet(this, _Client_pollManager, "f").retractVote(chatId, messageId);
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
     * @cache file
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
     * @cache
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
     * @cache
     */
    async getChat(chatId) {
        return await __classPrivateFieldGet(this, _Client_chatListManager, "f").getChat(chatId);
    }
    /**
     * Get chat history. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    async getHistory(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_messageManager, "f").getHistory(chatId, params);
    }
    /**
     * Set a chat's available reactions. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param availableReactions The new available reactions.
     */
    async setAvailableReactions(chatId, availableReactions) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").setAvailableReactions(chatId, availableReactions);
    }
    /**
     * Set a chat's photo.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param photo A photo to set as the chat's photo.
     */
    async setChatPhoto(chatId, photo, params) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").setChatPhoto(chatId, photo, params);
    }
    /**
     * Delete a chat's photo.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    async deleteChatPhoto(chatId) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").deleteChatPhoto(chatId);
    }
    /**
     * Ban a member from a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param memberId The identifier of the member.
     */
    async banChatMember(chatId, memberId, params) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").banChatMember(chatId, memberId, params);
    }
    /**
     * Unban a member from a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    async unbanChatMember(chatId, memberId) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").unbanChatMember(chatId, memberId);
    }
    /**
     * Kick a member from a chat. Same as a banChatMember call followed by unbanChatMember.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    async kickChatMember(chatId, memberId) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").banChatMember(chatId, memberId);
        await __classPrivateFieldGet(this, _Client_chatManager, "f").unbanChatMember(chatId, memberId);
    }
    /**
     * Set the rights of a chat member.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    async setChatMemberRights(chatId, memberId, params) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").setChatMemberRights(chatId, memberId, params);
    }
    /**
     * Get the administrators of a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @returns The chat's administrators.
     */
    async getChatAdministrators(chatId) {
        return await __classPrivateFieldGet(this, _Client_chatListManager, "f").getChatAdministrators(chatId);
    }
    /**
     * Enable join requests in a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a channel or a supergroup.
     */
    async enableJoinRequests(chatId) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").enableJoinRequests(chatId);
    }
    /**
     * Disable join requests in a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a channel or a supergroup.
     */
    async disableJoinRequests(chatId) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").disableJoinRequests(chatId);
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
     * @param chatId The identifier of a chat.
     * @returns The invite links created for the chat. This might be a subset of the results if they were less than `limit`. The parameters `afterDate` and `afterInviteLink` can be used for pagination.
     */
    async getCreatedInviteLinks(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_chatManager, "f").getCreatedInviteLinks(chatId, params);
    }
    /**
     * Join a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    async joinChat(chatId) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").joinChat(chatId);
    }
    /**
     * Leave a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    async leaveChat(chatId) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").leaveChat(chatId);
    }
    /**
     * Get information on a user's chat membership.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param userId The identifier of the user.
     */
    async getChatMember(chatId, userId) {
        return await __classPrivateFieldGet(this, _Client_chatListManager, "f").getChatMember(chatId, userId);
    }
    /**
     * Get the members of a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    async getChatMembers(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_chatListManager, "f").getChatMembers(chatId, params);
    }
    /**
     * Set a chat's sticker set.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a supergroup.
     * @param setName The name of the set.
     */
    async setChatStickerSet(chatId, setName) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").setChatStickerSet(chatId, setName);
    }
    /**
     * Delete a chat's sticker set.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a supergroup.
     */
    async deleteChatStickerSet(chatId) {
        await __classPrivateFieldGet(this, _Client_messageManager, "f").deleteChatStickerSet(chatId);
    }
    /**
     * Set the number of boosts required to circument a chat's default restrictions. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param boosts The number of boosts required to circumvent its restrictions.
     */
    async setBoostsRequiredToCircumventRestrictions(chatId, boosts) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").setBoostsRequiredToCircumventRestrictions(chatId, boosts);
    }
    /**
     * Create an invite link.
     *
     * @method ch
     * @param chatId The identifier of a chat to create the invite link for.
     * @returns The newly created invite link.
     */
    async createInviteLink(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_chatManager, "f").createInviteLink(chatId, params);
    }
    /**
     * Approve a join request.
     *
     * @method ch
     * @param chatId The identifier of a chat with the join request.
     * @param userId The user who made the join request.
     */
    async approveJoinRequest(chatId, userId) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").approveJoinRequest(chatId, userId);
    }
    /**
     * Decline a join request.
     *
     * @method ch
     * @param chatId The identifier of a chat with the join request.
     * @param userId The user who made the join request.
     */
    async declineJoinRequest(chatId, userId) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").declineJoinRequest(chatId, userId);
    }
    /**
     * Approve all join requests. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat with the join requests.
     */
    async approveJoinRequests(chatId, params) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").approveJoinRequests(chatId, params);
    }
    /**
     * Decline all join requests. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat with the join requests.
     */
    async declineJoinRequests(chatId, params) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").declineJoinRequests(chatId, params);
    }
    /**
     * Get pending join requests in a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat with the join requests.
     */
    async getJoinRequests(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_chatManager, "f").getJoinRequests(chatId, params);
    }
    /**
     * Add a single user to a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat to add the user to.
     * @param userId The identifier of the user to add to the chat.
     * @returns An array of FailedInvitation that has at most a length of 1. If empty, it means that the user was added.
     */
    async addChatMember(chatId, userId, params) {
        return await __classPrivateFieldGet(this, _Client_chatManager, "f").addChatMember(chatId, userId, params);
    }
    /**
     * Add multiple users at once to a channel or a supergroup.
     *
     * @method ch
     * @param chatId The identifier of the channel or supergroup to add the users to.
     * @param userId The identifiers of the users to add to the channel or supergroup.
     */
    async addChatMembers(chatId, userIds) {
        return await __classPrivateFieldGet(this, _Client_chatManager, "f").addChatMembers(chatId, userIds);
    }
    /**
     * Open a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat to open.
     */
    async openChat(chatId) {
        await __classPrivateFieldGet(this, _Client_updateManager, "f").openChat(chatId);
    }
    /**
     * Close a chat previously opened by openChat.
     *
     * @method ch
     * @param chatId The identifier of a chat to close.
     */
    async closeChat(chatId) {
        await __classPrivateFieldGet(this, _Client_updateManager, "f").closeChat(chatId);
    }
    /**
     * Create a group. User-only.
     *
     * @method ch
     * @param title The title of the group.
     * @returns The created group.
     */
    async createGroup(title, params) {
        return await __classPrivateFieldGet(this, _Client_chatListManager, "f").createGroup(title, params);
    }
    /**
     * Create a supergroup. User-only.
     *
     * @method ch
     * @param title The title of the supergroup.
     * @returns The created supergroup.
     */
    async createSupergroup(title, params) {
        return await __classPrivateFieldGet(this, _Client_chatListManager, "f").createSupergroup(title, params);
    }
    /**
     * Create a channel. User-only.
     *
     * @method ch
     * @param title The title of the channel.
     * @returns The created channel.
     */
    async createChannel(title, params) {
        return await __classPrivateFieldGet(this, _Client_chatListManager, "f").createChannel(title, params);
    }
    /**
     * Set the time to live of the messages of a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param messageTtl The time to live of the messages in seconds.
     */
    async setMessageTtl(chatId, messageTtl) {
        await __classPrivateFieldGet(this, _Client_chatListManager, "f").setMessageTtl(chatId, messageTtl);
    }
    /**
     * Archive multiple chats. User-only.
     *
     * @method ch
     * @param chatIds The identifiers of the chats to archive.
     */
    async archiveChats(chatIds) {
        await __classPrivateFieldGet(this, _Client_chatListManager, "f").archiveChats(chatIds);
    }
    /**
     * Archive a single chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    async archiveChat(chatId) {
        await __classPrivateFieldGet(this, _Client_chatListManager, "f").archiveChat(chatId);
    }
    /**
     * Unarchive multiple chats. User-only.
     *
     * @method ch
     * @param chatIds The identifiers of the chats to unarchive.
     */
    async unarchiveChats(chatIds) {
        await __classPrivateFieldGet(this, _Client_chatListManager, "f").unarchiveChats(chatIds);
    }
    /**
     * Unarchive a single chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    async unarchiveChat(chatId) {
        await __classPrivateFieldGet(this, _Client_chatListManager, "f").unarchiveChat(chatId);
    }
    /**
     * Get common chats between a user and the current one. User-only.
     *
     * @method ch
     * @param userId The identifier of the user to get the common chats with them.
     */
    async getCommonChats(userId, params) {
        return await __classPrivateFieldGet(this, _Client_chatListManager, "f").getCommonChats(userId, params);
    }
    /**
     * Get the settings of a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    async getChatSettings(chatId) {
        return await __classPrivateFieldGet(this, _Client_chatListManager, "f").getChatSettings(chatId);
    }
    /**
     * Disable business bots in a private chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of the private chat to disable business bots in.
     */
    async disableBusinessBots(chatId) {
        await __classPrivateFieldGet(this, _Client_chatListManager, "f").disableBusinessBots(chatId);
    }
    /**
     * Enable business bots in a private chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of the private chat to enable business bots in.
     */
    async enableBusinessBots(chatId) {
        await __classPrivateFieldGet(this, _Client_chatListManager, "f").enableBusinessBots(chatId);
    }
    /**
     * Disable slow mode in a group. User-only.
     *
     * @method ch
     * @param chatId The identifier of the group to disable slow mode in.
     */
    async disableSlowMode(chatId) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").disableSlowMode(chatId);
    }
    /**
     * Change slow mode in a group. User-only.
     *
     * @method ch
     * @param chatId The identifier of the group to change slow mode in.
     * @param duration New slow mode duration.
     */
    async setSlowMode(chatId, duration) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").setSlowMode(chatId, duration);
    }
    /**
     * Change the title of a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param title The new title.
     */
    async setChatTitle(chatId, title) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").setChatTitle(chatId, title);
    }
    /**
     * Change the description of a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param description The new description.
     */
    async setChatDescription(chatId, description) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").setChatDescription(chatId, description);
    }
    /**
     * Hide or show the member list of a group to non-admins. User-only.
     *
     * @method ch
     * @param chatId The identifier of the group.
     * @param visible Whether the member list of the group should be visible.
     */
    async setMemberListVisibility(chatId, visible) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").setMemberListVisibility(chatId, visible);
    }
    /**
     * Enable or disable topics in a group. User-only.
     *
     * @method ch
     * @param chatId The identifier of the group.
     * @param enabled Whether topics should be enabled in the group.
     */
    async setTopicsEnabled(chatId, enabled) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").setTopicsEnabled(chatId, enabled);
    }
    /**
     * Enable or disable automatic anti-spam in a group. User-only.
     *
     * @method ch
     * @param chatId The identifier of the group.
     * @param enabled Whether automatic anti-spam should be enabled in the group.
     */
    async setAntispamEnabled(chatId, enabled) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").setAntispamEnabled(chatId, enabled);
    }
    /**
     * Enable or disable post signatures in a channel. User-only.
     *
     * @method ch
     * @param chatId The identifier of the channel.
     * @param enabled Whether post signatures should be enabled in the channel.
     */
    async setSignaturesEnabled(chatId, enabled, params) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").setSignaturesEnabled(chatId, enabled, params);
    }
    /**
     * Delete a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    async deleteChat(chatId) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").deleteChat(chatId);
    }
    /**
     * Get discussion chat suggestions. User-only.
     *
     * @method ch
     */
    async getDiscussionChatSuggestions() {
        return await __classPrivateFieldGet(this, _Client_chatManager, "f").getDiscussionChatSuggestions();
    }
    /**
     * Set a channel's discussion chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a channel.
     * @param discussionChatId The identifier of a chat to use as discussion for the channel.
     */
    async setDiscussionChat(chatId, discussionChatId) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").setDiscussionChat(chatId, discussionChatId);
    }
    /**
     * Transfer the ownership of a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param userId The identifier of the new owner.
     * @param password The password of the current account.
     */
    async transferChatOwnership(chatId, userId, password) {
        await __classPrivateFieldGet(this, _Client_chatManager, "f").transferChatOwnership(chatId, userId, password);
    }
    /**
     * Create a forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param title The title of the topic.
     * @returns The created topic.
     */
    async createTopic(chatId, title, params) {
        return await __classPrivateFieldGet(this, _Client_forumManager, "f").createTopic(chatId, title, params);
    }
    /**
     * Edit a forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param topicId The identifier of the topic.
     * @param title The new title of the topic.
     * @returns The new topic.
     */
    async editTopic(chatId, topicId, title, params) {
        return await __classPrivateFieldGet(this, _Client_forumManager, "f").editTopic(chatId, topicId, title, params);
    }
    /**
     * Hide the general forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    async hideGeneralTopic(chatId) {
        await __classPrivateFieldGet(this, _Client_forumManager, "f").hideGeneralTopic(chatId);
    }
    /**
     * Show the general forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    async showGeneralTopic(chatId) {
        await __classPrivateFieldGet(this, _Client_forumManager, "f").showGeneralTopic(chatId);
    }
    /**
     * Close a forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param topicId The identifier of the topic.
     */
    async closeTopic(chatId, topicId) {
        await __classPrivateFieldGet(this, _Client_forumManager, "f").closeTopic(chatId, topicId);
    }
    /**
     * Reopen a forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param topicId The identifier of the topic.
     */
    async reopenTopic(chatId, topicId) {
        await __classPrivateFieldGet(this, _Client_forumManager, "f").reopenTopic(chatId, topicId);
    }
    /**
     * Pin a forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param topicId The identifier of the topic.
     */
    async pinTopic(chatId, topicId) {
        await __classPrivateFieldGet(this, _Client_forumManager, "f").pinTopic(chatId, topicId);
    }
    /**
     * Unpin a forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param topicId The identifier of the topic.
     */
    async unpinTopic(chatId, topicId) {
        await __classPrivateFieldGet(this, _Client_forumManager, "f").unpinTopic(chatId, topicId);
    }
    //
    // ========================= CALLBACK QUERIES ========================= //
    //
    /**
     * Send a callback query. User-only.
     *
     * @method cq
     * @param botId The identifier of the bot to send the callback query to.
     * @param messageId The identifier of the message that includes at a button responsible for the callback query question.
     * @param question The callback query's question.
     * @returns The bot's answer to the callback query.
     * @cache
     */
    async sendCallbackQuery(botId, messageId, question) {
        return await __classPrivateFieldGet(this, _Client_callbackQueryManager, "f").sendCallbackQuery(botId, messageId, question);
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
     * @param botId The identifier of a bot to send the inline query to.
     * @param chatId The identifier of the chat from which the inline query is sent.
     * @returns The bot's answer to the inline query.
     * @cache
     */
    async sendInlineQuery(botId, chatId, params) {
        return await __classPrivateFieldGet(this, _Client_inlineQueryManager, "f").sendInlineQuery(botId, chatId, params);
    }
    /**
     * Answer an inline query. Bot-only.
     *
     * @method iq
     * @param id The identifier of the inline query to answer.
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
     * @param chatId The identifier of a chat.
     * @param storyIds The identifiers of the stories to retrieve.
     * @returns The retrieved stories.
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
     * @param chatId The identifier of a chat.
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
     * @param chatId The identifier of a chat.
     * @param storyIds The identifiers of the stories to delete.
     */
    async deleteStories(chatId, storyIds) {
        await __classPrivateFieldGet(this, _Client_storyManager, "f").deleteStories(chatId, storyIds);
    }
    /**
     * Delete a single story. User-only.
     *
     * @method st
     * @param chatId The identifier of a chat.
     * @param storyId The identifier of the story to delete.
     */
    async deleteStory(chatId, storyId) {
        await __classPrivateFieldGet(this, _Client_storyManager, "f").deleteStory(chatId, storyId);
    }
    /**
     * Add multiple stories to highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of a chat.
     * @param storyIds The identifiers of the stories to add to highlights.
     */
    async addStoriesToHighlights(chatId, storyIds) {
        await __classPrivateFieldGet(this, _Client_storyManager, "f").addStoriesToHighlights(chatId, storyIds);
    }
    /**
     * Add a single story to highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of a chat.
     * @param storyId The identifier of the story to add to highlights.
     */
    async addStoryToHighlights(chatId, storyId) {
        await __classPrivateFieldGet(this, _Client_storyManager, "f").addStoryToHighlights(chatId, storyId);
    }
    /**
     * Remove multiple stories from highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of a chat.
     * @param storyIds The identifiers of the stories to remove from highlights.
     */
    async removeStoriesFromHighlights(chatId, storyIds) {
        await __classPrivateFieldGet(this, _Client_storyManager, "f").removeStoriesFromHighlights(chatId, storyIds);
    }
    /**
     * Remove a single story from highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of a chat.
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
     * @param chatId The identifier of a chat to start the video chat in.
     * @returns The started video chat.
     */
    async startVideoChat(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_videoChatManager, "f").startVideoChat(chatId, params);
    }
    /**
     * Schedule a video chat. User-only.
     *
     * @method vc
     * @param chatId The identifier of a chat to schedule the video chat in.
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
        await __classPrivateFieldGet(this, _Client_videoChatManager, "f").leaveVideoChat(id);
    }
    /**
     * Join a live stream. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     */
    async joinLiveStream(id) {
        await __classPrivateFieldGet(this, _Client_videoChatManager, "f").joinLiveStream(id);
    }
    /**
     * Get a video chat. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     * @cache
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
    //
    // ========================= PAYMENTS ========================= //
    //
    /**
     * Answer a pre-checkout query. Bot-only.
     *
     * @method pa
     * @param preCheckoutQueryId The identifier of the pre-checkout query.
     * @param ok Whether the checkout is going to be processed.
     */
    async answerPreCheckoutQuery(preCheckoutQueryId, ok, params) {
        await __classPrivateFieldGet(this, _Client_paymentManager, "f").answerPreCheckoutQuery(preCheckoutQueryId, ok, params);
    }
    /**
     * Refund a star payment. Bot-only.
     *
     * @method pa
     * @param userId The identifier of the user that was charged.
     * @param telegramPaymentChargeId The identifier of the charge.
     */
    async refundStarPayment(userId, telegramPaymentChargeId) {
        await __classPrivateFieldGet(this, _Client_paymentManager, "f").refundStarPayment(userId, telegramPaymentChargeId);
    }
    //
    // ========================= CONTACTS ========================= //
    //
    /**
     * Get contacts. User-only.
     *
     * @method co
     */
    async getContacts() {
        return await __classPrivateFieldGet(this, _Client_accountManager, "f").getContacts();
    }
    /**
     * Delete multiple contacts. User-only.
     *
     * @method co
     * @param userIds The identifiers of contacts to delete.
     */
    async deleteContacts(userIds) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").deleteContacts(userIds);
    }
    /**
     * Delete a single contact. User-only.
     *
     * @method co
     * @param userId The identifier of the contact to delete.
     */
    async deleteContact(userId) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").deleteContact(userId);
    }
    /**
     * Add a contact. User-only.
     *
     * @method co
     * @param userId The identifier of the user to add as contact.
     */
    async addContact(userId, params) {
        await __classPrivateFieldGet(this, _Client_accountManager, "f").addContact(userId, params);
    }
    //
    // ========================= TRANSLATIONS ========================= //
    //
    /**
     * Get translations. User-only.
     *
     * @method ta
     * @cache
     */
    async getTranslations(params) {
        return await __classPrivateFieldGet(this, _Client_translationsManager, "f").getTranslations(params);
    }
    //
    // ========================= GIFTS ========================= //
    //
    /**
     * Get available gifts.
     *
     * @method gf
     */
    async getGifts() {
        return await __classPrivateFieldGet(this, _Client_giftManager, "f").getGifts();
    }
    /**
     * Get gifts claimed by a user or a channel. User-only.
     *
     * @method gf
     * @param chatId The identifier of a user or a channel to get gifts for.
     */
    async getClaimedGifts(chatId, params) {
        return await __classPrivateFieldGet(this, _Client_giftManager, "f").getClaimedGifts(chatId, params);
    }
    /**
     * Send a gift.
     *
     * @method gf
     * @param chatId The identifier of a user or a channel to send the gift to.
     * @param giftId The identifier of the gift to send.
     */
    async sendGift(chatId, giftId, params) {
        await __classPrivateFieldGet(this, _Client_giftManager, "f").sendGift(chatId, giftId, params);
    }
    /**
     * Sell a gift.
     *
     * @method gf
     * @param userId The identifier of the user that sent the gift.
     * @param messageId The identifier of the service message announcing the receival of the gift.
     */
    async sellGift(userId, messageId) {
        await __classPrivateFieldGet(this, _Client_giftManager, "f").sellGift(userId, messageId);
    }
    /**
     * Get a gift using its slug.
     *
     * @method gf
     * @param slug The slug of a gift.
     */
    async getGift(slug) {
        return await __classPrivateFieldGet(this, _Client_giftManager, "f").getGift(slug);
    }
}
_Client_handleCtxUpdate = async function _Client_handleCtxUpdate(update) {
    if (__classPrivateFieldGet(this, _Client_disableUpdates, "f") && !("authorizationState" in update) && !("connectionState" in update)) {
        return;
    }
    try {
        await this.middleware()(await __classPrivateFieldGet(this, _Client_constructContext, "f").call(this, update), resolve);
    }
    catch (err) {
        __classPrivateFieldGet(this, _Client_L, "f").error("Failed to handle update:", err);
        throw err;
    }
}, _Client_queueHandleCtxUpdate = function _Client_queueHandleCtxUpdate(update) {
    __classPrivateFieldGet(this, _Client_updateManager, "f").getHandleUpdateQueue(UpdateManager.MAIN_BOX_ID).add(async () => {
        await __classPrivateFieldGet(this, _Client_instances, "m", _Client_handleCtxUpdate).call(this, update);
    });
}, _Client_handleUpdate = async function _Client_handleUpdate(update) {
    const promises = new Array();
    if (Api.is("updateUserName", update)) {
        await this.messageStorage.updateUsernames(Number(update.user_id), update.usernames.map((v) => v.username));
        const peer = { ...update, _: "peerUser" };
        const entity = await this[getEntity](peer);
        if (entity != null) {
            entity.usernames = update.usernames;
            entity.first_name = update.first_name;
            entity.last_name = update.last_name;
            await this.messageStorage.setEntity(entity);
        }
    }
    if (__classPrivateFieldGet(this, _Client_messageManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_messageManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_chatManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_chatManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_pollManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_pollManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_videoChatManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_videoChatManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_callbackQueryManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_callbackQueryManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_inlineQueryManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_inlineQueryManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_linkPreviewManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_linkPreviewManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_reactionManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_reactionManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_chatListManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_chatListManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_storyManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_storyManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_businessConnectionManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_businessConnectionManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_storyManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_storyManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_paymentManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_paymentManager, "f").handleUpdate(update));
    }
    if (__classPrivateFieldGet(this, _Client_translationsManager, "f").canHandleUpdate(update)) {
        promises.push(() => __classPrivateFieldGet(this, _Client_translationsManager, "f").handleUpdate(update));
    }
    return () => Promise.resolve().then(async () => {
        const updates = new Array();
        for (const promise of promises) {
            try {
                const update = await promise();
                if (update) {
                    updates.push(update);
                }
            }
            catch (err) {
                __classPrivateFieldGet(this, _Client_L, "f").error("failed to construct update:", err);
            }
        }
        for (const update of updates) {
            try {
                await __classPrivateFieldGet(this, _Client_instances, "m", _Client_handleCtxUpdate).call(this, update);
            }
            finally {
                if ("deletedMessages" in update) {
                    for (const { chatId, messageId } of update.deletedMessages) {
                        await this.messageStorage.setMessage(chatId, messageId, null);
                        await __classPrivateFieldGet(this, _Client_chatListManager, "f").reassignChatLastMessage(chatId);
                    }
                }
            }
        }
    });
}, _Client_getMe = async function _Client_getMe() {
    if (__classPrivateFieldGet(this, _Client_lastGetMe, "f") != null) {
        return __classPrivateFieldGet(this, _Client_lastGetMe, "f");
    }
    else {
        const user = await this.getMe();
        __classPrivateFieldSet(this, _Client_lastGetMe, user, "f");
        return user;
    }
}, _Client_onConnectionStateChange = function _Client_onConnectionStateChange(connected) {
    if (__classPrivateFieldGet(this, _Client_lastConnectionState, "f") != connected) {
        if (connected) {
            if (__classPrivateFieldGet(this, _Client_previouslyConnected, "f")) {
                drop(__classPrivateFieldGet(this, _Client_updateManager, "f").recoverUpdateGap("reconnect"));
            }
            __classPrivateFieldSet(this, _Client_previouslyConnected, true, "f");
        }
        const connectionState = connected ? "ready" : "notConnected";
        __classPrivateFieldGet(this, _Client_instances, "m", _Client_queueHandleCtxUpdate).call(this, { connectionState });
    }
};
