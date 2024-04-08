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
import { cleanObject, fromUnixTimestamp } from "../1_utilities.js";
import { types } from "../2_tl.js";
import { constructReaction } from "./0_reaction.js";
import { constructChatP } from "./1_chat_p.js";
import { constructUser } from "./1_user.js";
export async function constructMessageReactions(update, getEntity) {
    const date = fromUnixTimestamp(update.date);
    const oldReactions = update.old_reactions.map((v) => constructReaction(v));
    const newReactions = update.new_reactions.map((v) => constructReaction(v));
    const messageId = update.msg_id;
    let entity = await getEntity(update.peer);
    if (!entity) {
        return null;
    }
    const chat = constructChatP(entity);
    let user = undefined;
    let actorChat = undefined;
    entity = await getEntity(update.actor);
    if (!entity) {
        return null;
    }
    if (entity instanceof types.User) {
        user = constructUser(entity);
    }
    else {
        actorChat = constructChatP(entity);
    }
    return cleanObject({
        chat,
        messageId,
        user,
        actorChat,
        date,
        oldReactions,
        newReactions,
    });
}
