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
import { fromUnixTimestamp } from "../1_utilities.js";
import { constructChatP } from "./1_chat_p.js";
import { constructReactionCount } from "./1_reaction_count.js";
export async function constructMessageReactionCount(update, getEntity) {
    const date = fromUnixTimestamp(update.date);
    const reactions = update.reactions.map((v) => constructReactionCount(v));
    const entity = await getEntity(update.peer);
    if (entity) {
        const chat = constructChatP(entity);
        const messageId = update.msg_id;
        const messageReactionCount = { chat, messageId, date, reactions };
        return messageReactionCount;
    }
    else {
        return null;
    }
}
