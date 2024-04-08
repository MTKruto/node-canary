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
import { InlineQueryResult, Update } from "../3_types.js";
import { AnswerInlineQueryParams } from "./0_params.js";
import { C as C_ } from "./0_types.js";
import { MessageManager } from "./2_message_manager.js";
type C = C_ & {
    messageManager: MessageManager;
};
type InlineQueryManagerUpdate = types.UpdateBotInlineQuery | types.UpdateBotInlineSend;
export declare class InlineQueryManager {
    #private;
    constructor(c: C);
    answerInlineQuery(id: string, results: InlineQueryResult[], params?: AnswerInlineQueryParams): Promise<void>;
    static canHandleUpdate(update: enums.Update): update is InlineQueryManagerUpdate;
    handleUpdate(update: InlineQueryManagerUpdate): Promise<Update>;
}
export {};
