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
import { ID, Update } from "../3_types.js";
import { UpdateProcessor } from "./0_update_processor.js";
import { C as C_ } from "./1_types.js";
import { MessageManager } from "./3_message_manager.js";
type C = C_ & {
    messageManager: MessageManager;
};
declare const pollManagerUpdates: readonly ["updateMessagePoll", "updateMessagePollVote"];
type PollManagerUpdate = Api.Types[(typeof pollManagerUpdates)[number]];
export declare class PollManager implements UpdateProcessor<PollManagerUpdate> {
    #private;
    constructor(c: C);
    vote(chatId: ID, messageId: number, optionIndexes: number[]): Promise<void>;
    retractVote(chatId: ID, messageId: number): Promise<void>;
    canHandleUpdate(update: Api.Update): update is PollManagerUpdate;
    handleUpdate(update: PollManagerUpdate): Promise<Update | null>;
}
export {};
//# sourceMappingURL=4_poll_manager.d.ts.map