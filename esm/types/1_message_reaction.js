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
import { unreachable } from "../0_deps.js";
import { Api } from "../2_tl.js";
import { constructReaction } from "./0_reaction.js";
export function constructMessageReaction(reaction_, recentReactions) {
    const choosers = recentReactions
        .filter((v) => {
        if (Api.is("reactionEmoji", reaction_.reaction)) {
            return Api.is("reactionEmoji", v.reaction) && v.reaction.emoticon == reaction_.reaction.emoticon;
        }
        else if (Api.is("reactionCustomEmoji", reaction_.reaction)) {
            return Api.is("reactionCustomEmoji", v.reaction) && v.reaction.document_id == reaction_.reaction.document_id;
        }
        else {
            unreachable();
        }
    })
        .map((v) => Api.peerToChatId(v.peer_id));
    const reaction = constructReaction(reaction_.reaction);
    const count = reaction_.count;
    const chosen = reaction_.chosen_order !== undefined ? true : false;
    return { reaction, count, choosers, chosen };
}
