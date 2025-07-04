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
import { CallbackQueryQuestion, ID, Update } from "../3_types.js";
import { AnswerCallbackQueryParams } from "./0_params.js";
import { UpdateProcessor } from "./0_update_processor.js";
import { C as C_ } from "./1_types.js";
import { MessageManager } from "./3_message_manager.js";
type C = C_ & {
    messageManager: MessageManager;
};
declare const callbackQueryManagerUpdates: readonly ["updateBotCallbackQuery", "updateInlineBotCallbackQuery"];
type CallbackQueryManagerUpdate = Api.Types[(typeof callbackQueryManagerUpdates)[number]];
export declare class CallbackQueryManager implements UpdateProcessor<CallbackQueryManagerUpdate> {
    #private;
    constructor(c: C);
    answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams): Promise<void>;
    sendCallbackQuery(botId: ID, messageId: number, question: CallbackQueryQuestion): Promise<import("../3_types.js").CallbackQueryAnswer>;
    canHandleUpdate(update: Api.Update): update is CallbackQueryManagerUpdate;
    handleUpdate(update: CallbackQueryManagerUpdate): Promise<Update>;
}
export {};
//# sourceMappingURL=4_callback_query_manager.d.ts.map