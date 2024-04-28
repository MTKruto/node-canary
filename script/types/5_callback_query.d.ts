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
import { enums, types } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { User } from "./1_user.js";
import { Message, MessageGetter } from "./4_message.js";
/** A received callback query. */
export interface CallbackQuery {
    /** The identifier of the callback query. */
    id: string;
    /** The user who made the callback query. */
    from: User;
    /** The message from which the callback query was made. Unset if made from an inline result message. */
    message?: Message;
    /** The identifier of the inline result message from which the callback query was made. Unset if made from a message not originating from an inline query result. */
    inlineMessageId?: string;
    /** A special identifier for the chat in which the callback was made from. Useful for inline result messages. */
    chatInstance: string;
    /** The data associated with the button that was used to make the callback query. */
    data?: string;
    /** The short name of the game to be returned. */
    gameShortName?: string;
}
export declare function deserializeInlineMessageId(inlineMessageId: string): enums.InputBotInlineMessageID;
export declare function constructCallbackQuery(callbackQuery: types.UpdateBotCallbackQuery | types.UpdateInlineBotCallbackQuery, getEntity: EntityGetter, getMessage: MessageGetter): Promise<CallbackQuery>;
//# sourceMappingURL=5_callback_query.d.ts.map