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
import { unreachable } from "../0_deps.js";
import { Api } from "../2_tl.js";
import { constructMessageReaction, constructMessageReactionCount, constructMessageReactions } from "../3_types.js";
const reactionManagerUpdates = [
    "updateBotMessageReactions",
    "updateBotMessageReaction",
    "updateMessageReactions",
    "updateChannelMessageViews",
    "updateChannelMessageForwards",
];
export class ReactionManager {
    constructor(c) {
        _ReactionManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _ReactionManager_c, c, "f");
    }
    canHandleUpdate(update) {
        return Api.isOneOf(reactionManagerUpdates, update);
    }
    async handleUpdate(update) {
        if (Api.is("updateBotMessageReactions", update)) {
            const messageReactionCount = await constructMessageReactionCount(update, __classPrivateFieldGet(this, _ReactionManager_c, "f").getEntity);
            if (messageReactionCount) {
                return { messageReactionCount };
            }
            else {
                return null;
            }
        }
        else if (Api.is("updateBotMessageReaction", update)) {
            const messageReactions = await constructMessageReactions(update, __classPrivateFieldGet(this, _ReactionManager_c, "f").getEntity);
            if (messageReactions) {
                return { messageReactions };
            }
            else {
                return null;
            }
        }
        else if (Api.is("updateMessageReactions", update)) {
            const chatId = Api.peerToChatId(update.peer);
            const message = await __classPrivateFieldGet(this, _ReactionManager_c, "f").messageStorage.getMessage(chatId, update.msg_id);
            if (Api.is("message", message)) {
                message.reactions = update.reactions;
                await __classPrivateFieldGet(this, _ReactionManager_c, "f").messageStorage.setMessage(chatId, update.msg_id, message);
                const views = message.views ?? 0;
                const forwards = message.forwards ?? 0;
                const recentReactions = update.reactions.recent_reactions ?? [];
                const reactions = update.reactions.results.map((v) => constructMessageReaction(v, recentReactions));
                return { messageInteractions: { chatId, messageId: update.msg_id, reactions, views, forwards } };
            }
            else {
                return null;
            }
        }
        else if (Api.isOneOf(["updateChannelMessageViews", "updateChannelMessageForwards"], update)) {
            const chatId = Api.peerToChatId({ ...update, _: "peerChannel" });
            const message = await __classPrivateFieldGet(this, _ReactionManager_c, "f").messageStorage.getMessage(chatId, update.id);
            if (Api.is("message", message)) {
                if ("views" in update) {
                    message.views = update.views;
                }
                if ("forwards" in update) {
                    message.forwards = update.forwards;
                }
                const views = message.views ?? 0;
                const forwards = message.forwards ?? 0;
                const recentReactions = message.reactions?.recent_reactions ?? [];
                const reactions = message.reactions?.results.map((v) => constructMessageReaction(v, recentReactions)) ?? [];
                return { messageInteractions: { chatId, messageId: update.id, reactions, views, forwards } };
            }
            else {
                return null;
            }
        }
        else {
            unreachable();
        }
    }
}
_ReactionManager_c = new WeakMap();
