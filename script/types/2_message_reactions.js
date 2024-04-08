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
exports.constructMessageReactions = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_reaction_js_1 = require("./0_reaction.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_user_js_1 = require("./1_user.js");
async function constructMessageReactions(update, getEntity) {
    const date = (0, _1_utilities_js_1.fromUnixTimestamp)(update.date);
    const oldReactions = update.old_reactions.map((v) => (0, _0_reaction_js_1.constructReaction)(v));
    const newReactions = update.new_reactions.map((v) => (0, _0_reaction_js_1.constructReaction)(v));
    const messageId = update.msg_id;
    let entity = await getEntity(update.peer);
    if (!entity) {
        return null;
    }
    const chat = (0, _1_chat_p_js_1.constructChatP)(entity);
    let user = undefined;
    let actorChat = undefined;
    entity = await getEntity(update.actor);
    if (!entity) {
        return null;
    }
    if (entity instanceof _2_tl_js_1.types.User) {
        user = (0, _1_user_js_1.constructUser)(entity);
    }
    else {
        actorChat = (0, _1_chat_p_js_1.constructChatP)(entity);
    }
    return (0, _1_utilities_js_1.cleanObject)({
        chat,
        messageId,
        user,
        actorChat,
        date,
        oldReactions,
        newReactions,
    });
}
exports.constructMessageReactions = constructMessageReactions;
