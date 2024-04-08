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
import { Update } from "../3_types.js";
import { AnswerCallbackQueryParams } from "./0_params.js";
import { C as C_ } from "./0_types.js";
import { MessageManager } from "./2_message_manager.js";
type C = C_ & {
    messageManager: MessageManager;
};
type CallbackQueryManagerUpdate = types.UpdateBotCallbackQuery | types.UpdateInlineBotCallbackQuery;
export declare class CallbackQueryManager {
    #private;
    constructor(c: C);
    answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams): Promise<void>;
    static canHandleUpdate(update: enums.Update): update is CallbackQueryManagerUpdate;
    handleUpdate(update: CallbackQueryManagerUpdate): Promise<Update>;
}
export {};
