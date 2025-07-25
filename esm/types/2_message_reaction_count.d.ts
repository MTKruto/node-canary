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
import { Api } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { ChatP } from "./1_chat_p.js";
import { ReactionCount } from "./1_reaction_count.js";
/** Information on the reactions made to a channel post. */
export interface MessageReactionCount {
    /** The chat containing the message. */
    chat: ChatP;
    /** The message's identifier. */
    messageId: number;
    /** The point in time in which the change was made. */
    date: number;
    /** The reactions made to the post. */
    reactions: ReactionCount[];
}
export declare function constructMessageReactionCount(update: Api.updateBotMessageReactions, getEntity: EntityGetter): Promise<MessageReactionCount | null>;
//# sourceMappingURL=2_message_reaction_count.d.ts.map