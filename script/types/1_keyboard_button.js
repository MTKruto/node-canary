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
exports.keyboardButtonToTlObject = exports.constructKeyboardButton = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_chat_administrator_rights_js_1 = require("./0_chat_administrator_rights.js");
function constructKeyboardButton(button_) {
    if (button_ instanceof _2_tl_js_1.types.KeyboardButton) {
        return { text: button_.text };
    }
    else if (button_ instanceof _2_tl_js_1.types.KeyboardButtonRequestPeer) {
        if (button_.peer_type instanceof _2_tl_js_1.types.RequestPeerTypeUser) {
            return {
                text: button_.text,
                requestUser: {
                    requestId: button_.button_id,
                    userIsBot: button_.peer_type.bot || false,
                    userIsPremium: button_.peer_type.premium || false,
                },
            };
        }
        else if (button_.peer_type instanceof _2_tl_js_1.types.RequestPeerTypeChat) {
            const button = {
                text: button_.text,
                requestChat: {
                    requestId: button_.button_id,
                    chatIsChannel: false,
                    chatIsForum: button_.peer_type.forum || false,
                    chatHasUsername: button_.peer_type.has_username || false,
                    chatIsCreated: button_.peer_type.creator || false,
                    botIsMember: button_.peer_type.bot_participant || false,
                },
            };
            if (button_.peer_type.bot_admin_rights) {
                button.requestChat.botAdministratorRights = (0, _0_chat_administrator_rights_js_1.constructChatAdministratorRights)(button_.peer_type.bot_admin_rights);
            }
            if (button_.peer_type.user_admin_rights) {
                button.requestChat.userAdministratorRights = (0, _0_chat_administrator_rights_js_1.constructChatAdministratorRights)(button_.peer_type.user_admin_rights);
            }
            return button;
        }
        else if (button_.peer_type instanceof _2_tl_js_1.types.RequestPeerTypeBroadcast) {
            const button = {
                text: button_.text,
                requestChat: {
                    requestId: button_.button_id,
                    chatIsChannel: true,
                    chatIsCreated: button_.peer_type.creator || false,
                    chatHasUsername: button_.peer_type.has_username || false,
                },
            };
            if (button_.peer_type.bot_admin_rights) {
                button.requestChat.botAdministratorRights = (0, _0_chat_administrator_rights_js_1.constructChatAdministratorRights)(button_.peer_type.bot_admin_rights);
            }
            if (button_.peer_type.user_admin_rights) {
                button.requestChat.userAdministratorRights = (0, _0_chat_administrator_rights_js_1.constructChatAdministratorRights)(button_.peer_type.user_admin_rights);
            }
            return button;
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    else if (button_ instanceof _2_tl_js_1.types.KeyboardButtonRequestPhone) {
        return { text: button_.text, requestContact: true };
    }
    else if (button_ instanceof _2_tl_js_1.types.KeyboardButtonRequestGeoLocation) {
        return { text: button_.text, requestLocation: true };
    }
    else if (button_ instanceof _2_tl_js_1.types.KeyboardButtonRequestPoll) {
        const button = { text: button_.text, requestPoll: {} };
        if (button_.quiz) {
            button.requestPoll.type = "quiz";
        }
        return button;
    }
    else if (button_ instanceof _2_tl_js_1.types.KeyboardButtonWebView || button_ instanceof _2_tl_js_1.types.KeyboardButtonSimpleWebView) {
        return { text: button_.text, miniApp: { url: button_.url } };
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
exports.constructKeyboardButton = constructKeyboardButton;
function keyboardButtonToTlObject(button) {
    if ("requestUser" in button) {
        return new _2_tl_js_1.types.KeyboardButtonRequestPeer({
            text: button.text,
            button_id: button.requestUser.requestId,
            peer_type: new _2_tl_js_1.types.RequestPeerTypeUser({ bot: button.requestUser.userIsBot, premium: button.requestUser.userIsPremium }),
            max_quantity: 1,
        });
    }
    else if ("requestChat" in button) {
        if (!button.requestChat.chatIsChannel) { // GUESS
            return new _2_tl_js_1.types.KeyboardButtonRequestPeer({
                text: button.text,
                button_id: button.requestChat.requestId,
                peer_type: new _2_tl_js_1.types.RequestPeerTypeChat({
                    forum: button.requestChat.chatIsForum,
                    has_username: button.requestChat.chatHasUsername,
                    creator: button.requestChat.chatIsCreated || undefined,
                    bot_participant: button.requestChat.botIsMember || undefined,
                    bot_admin_rights: button.requestChat.botAdministratorRights ? (0, _0_chat_administrator_rights_js_1.chatAdministratorRightsToTlObject)(button.requestChat.botAdministratorRights) : undefined,
                    user_admin_rights: button.requestChat.userAdministratorRights ? (0, _0_chat_administrator_rights_js_1.chatAdministratorRightsToTlObject)(button.requestChat.userAdministratorRights) : undefined,
                }),
                max_quantity: 1,
            });
        }
        else {
            return new _2_tl_js_1.types.KeyboardButtonRequestPeer({
                text: button.text,
                button_id: button.requestChat.requestId,
                peer_type: new _2_tl_js_1.types.RequestPeerTypeBroadcast({
                    has_username: button.requestChat.chatHasUsername,
                    creator: button.requestChat.chatIsCreated || undefined,
                    bot_admin_rights: button.requestChat.botAdministratorRights ? (0, _0_chat_administrator_rights_js_1.chatAdministratorRightsToTlObject)(button.requestChat.botAdministratorRights) : undefined,
                    user_admin_rights: button.requestChat.userAdministratorRights ? (0, _0_chat_administrator_rights_js_1.chatAdministratorRightsToTlObject)(button.requestChat.userAdministratorRights) : undefined,
                }),
                max_quantity: 1,
            });
        }
    }
    else if ("requestContact" in button) {
        return new _2_tl_js_1.types.KeyboardButtonRequestPhone({ text: button.text });
    }
    else if ("requestLocation" in button) {
        return new _2_tl_js_1.types.KeyboardButtonRequestGeoLocation({ text: button.text });
    }
    else if ("requestPoll" in button) {
        return new _2_tl_js_1.types.KeyboardButtonRequestPoll({ text: button.text, quiz: button.requestPoll.type == "quiz" });
    }
    else if ("miniApp" in button) {
        return new _2_tl_js_1.types.KeyboardButtonWebView({ text: button.text, url: button.miniApp.url });
    }
    else {
        return new _2_tl_js_1.types.KeyboardButton({ text: button.text });
    }
}
exports.keyboardButtonToTlObject = keyboardButtonToTlObject;
