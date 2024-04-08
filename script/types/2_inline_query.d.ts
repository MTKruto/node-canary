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
import { Location } from "./0_location.js";
import { User } from "./1_user.js";
/** An incoming inline query. */
export interface InlineQuery {
    /** The identifier of the inline query. */
    id: string;
    /** The user who made the inline query. */
    from: User;
    /** The query that was made. */
    query: string;
    /** The offset parameter that was passed to the last [answerInlineQuery](/methods/answerInlineQuery) call. */
    offset: string;
    /** The type of the chat from which the inline query was made. */
    chatType?: "sender" | "private" | "group" | "supergroup" | "channel";
    /** The location of the user who made the inline query. */
    location?: Location;
}
export declare function constructInlineQuery(query_: types.UpdateBotInlineQuery, getEntity: EntityGetter): Promise<InlineQuery>;
