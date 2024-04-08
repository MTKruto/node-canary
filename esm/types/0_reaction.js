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
import { unreachable } from "../0_deps.js";
import { types } from "../2_tl.js";
export function constructReaction(reaction) {
    if (reaction instanceof types.ReactionEmoji) {
        return { type: "emoji", emoji: reaction.emoticon };
    }
    else if (reaction instanceof types.ReactionCustomEmoji) {
        return { type: "customEmoji", id: String(reaction.document_id) };
    }
    else {
        unreachable();
    }
}
export function reactionToTlObject(reaction) {
    return reaction.type == "emoji" ? new types.ReactionEmoji({ emoticon: reaction.emoji }) : new types.ReactionCustomEmoji({ document_id: BigInt(reaction.id) });
}
export function reactionEqual(left, right) {
    if (left.type == "emoji") {
        if (right.type == "emoji" && left.emoji == right.emoji) {
            return true;
        }
    }
    else if (left.type == "customEmoji") {
        if (right.type == "customEmoji" && left.id == right.id) {
            return true;
        }
    }
    return false;
}
