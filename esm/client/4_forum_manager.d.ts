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
import { ID } from "../3_types.js";
import { CreateTopicParams, EditTopicParams } from "./0_params.js";
import { C as C_ } from "./1_types.js";
import { MessageManager } from "./3_message_manager.js";
interface C extends C_ {
    messageManager: MessageManager;
}
export declare class ForumManager {
    #private;
    constructor(c: C);
    createTopic(chatId: ID, title: string, params?: CreateTopicParams): Promise<import("../3_types.js").Topic>;
    editTopic(chatId: ID, topicId: number, title: string, params?: EditTopicParams): Promise<import("../3_types.js").Topic>;
    hideGeneralTopic(chatId: ID): Promise<void>;
    showGeneralTopic(chatId: ID): Promise<void>;
    closeTopic(chatId: ID, topicId: number): Promise<void>;
    reopenTopic(chatId: ID, topicId: number): Promise<void>;
    pinTopic(chatId: ID, topicId: number): Promise<void>;
    unpinTopic(chatId: ID, topicId: number): Promise<void>;
}
export {};
//# sourceMappingURL=4_forum_manager.d.ts.map