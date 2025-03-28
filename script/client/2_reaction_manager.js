"use strict";
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
var _ReactionManager_c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const reactionManagerUpdates = [
    "updateBotMessageReactions",
    "updateBotMessageReaction",
    "updateMessageReactions",
    "updateChannelMessageViews",
    "updateChannelMessageForwards",
];
class ReactionManager {
    constructor(c) {
        _ReactionManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _ReactionManager_c, c, "f");
    }
    canHandleUpdate(update) {
        return _2_tl_js_1.Api.isOneOf(reactionManagerUpdates, update);
    }
    async handleUpdate(update) {
        if (_2_tl_js_1.Api.is("updateBotMessageReactions", update)) {
            const messageReactionCount = await (0, _3_types_js_1.constructMessageReactionCount)(update, __classPrivateFieldGet(this, _ReactionManager_c, "f").getEntity);
            if (messageReactionCount) {
                return { messageReactionCount };
            }
            else {
                return null;
            }
        }
        else if (_2_tl_js_1.Api.is("updateBotMessageReaction", update)) {
            const messageReactions = await (0, _3_types_js_1.constructMessageReactions)(update, __classPrivateFieldGet(this, _ReactionManager_c, "f").getEntity);
            if (messageReactions) {
                return { messageReactions };
            }
            else {
                return null;
            }
        }
        else if (_2_tl_js_1.Api.is("updateMessageReactions", update)) {
            const chatId = _2_tl_js_1.Api.peerToChatId(update.peer);
            const message = await __classPrivateFieldGet(this, _ReactionManager_c, "f").messageStorage.getMessage(chatId, update.msg_id);
            if (_2_tl_js_1.Api.is("message", message)) {
                message.reactions = update.reactions;
                await __classPrivateFieldGet(this, _ReactionManager_c, "f").messageStorage.setMessage(chatId, update.msg_id, message);
                const views = message.views ?? 0;
                const forwards = message.forwards ?? 0;
                const recentReactions = update.reactions.recent_reactions ?? [];
                const reactions = update.reactions.results.map((v) => (0, _3_types_js_1.constructMessageReaction)(v, recentReactions));
                return { messageInteractions: { chatId, messageId: update.msg_id, reactions, views, forwards } };
            }
            else {
                return null;
            }
        }
        else if (_2_tl_js_1.Api.isOneOf(["updateChannelMessageViews", "updateChannelMessageForwards"], update)) {
            const chatId = _2_tl_js_1.Api.peerToChatId({ ...update, _: "peerChannel" });
            const message = await __classPrivateFieldGet(this, _ReactionManager_c, "f").messageStorage.getMessage(chatId, update.id);
            if (_2_tl_js_1.Api.is("message", message)) {
                if ("views" in update) {
                    message.views = update.views;
                }
                if ("forwards" in update) {
                    message.forwards = update.forwards;
                }
                const views = message.views ?? 0;
                const forwards = message.forwards ?? 0;
                const recentReactions = message.reactions?.recent_reactions ?? [];
                const reactions = message.reactions?.results.map((v) => (0, _3_types_js_1.constructMessageReaction)(v, recentReactions)) ?? [];
                return { messageInteractions: { chatId, messageId: update.id, reactions, views, forwards } };
            }
            else {
                return null;
            }
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
}
exports.ReactionManager = ReactionManager;
_ReactionManager_c = new WeakMap();
