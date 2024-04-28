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
import { enums } from "../2_tl.js";
import { MessageEntity } from "./0_message_entity.js";
/** A reference to a specific part of a message that is being replied to. */
export interface ReplyQuote {
    /** The byte offset of the quoted text. */
    offset: number;
    /** The quoted text. */
    text: string;
    /** The entities of the quoted text. */
    entities: MessageEntity[];
}
export declare function constructReplyQuote(quoteText: string | undefined, quoteOffset: number | undefined, quoteEntities: enums.MessageEntity[] | undefined): ReplyQuote;
//# sourceMappingURL=1_reply_quote.d.ts.map