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
import { types } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { Reaction } from "./0_reaction.js";
import { ChatP } from "./1_chat_p.js";
import { User } from "./1_user.js";
/** The reactions of a user to a messages in a group. */
export interface MessageReactions {
    /** The chat containing the message the user reacted to. */
    chat: ChatP;
    /** The message's identifier. */
    messageId: number;
    /** The user who changed their reactions to the message. Unset if done on behalf of a chat. */
    user?: User;
    /** The chat that changed its reactions to the message. Unset if done on behalf of a user. */
    actorChat?: ChatP;
    /** The point in time in which the change was made. */
    date: Date;
    /** The previous reactions. */
    oldReactions: Reaction[];
    /** The current reactions. */
    newReactions: Reaction[];
}
export declare function constructMessageReactions(update: types.UpdateBotMessageReaction, getEntity: EntityGetter): Promise<MessageReactions | null>;
//# sourceMappingURL=2_message_reactions.d.ts.map