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
import { InlineQueryResult } from "./4_inline_query_result.js";
/** An answer to an inline query. */
export interface InlineQueryAnswer {
    /** The ID of the inline query that yielded these results. */
    id: string;
    /** The inline query results. */
    results: InlineQueryResult[];
    /** A parameter that can be passed to next queries with the same text to yield more results. */
    nextOffset?: string;
}
export declare function constructInlineQueryAnswer(results: types.messages.BotResults): InlineQueryAnswer;
