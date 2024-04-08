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
import { MessageEntity } from "./0_message_entity.js";
import { PollOption } from "./0_poll_option.js";
/** A poll. */
export interface Poll {
    /** The identifier of the poll. */
    id: string;
    /** The poll's question. */
    question: string;
    /** The poll's options. */
    options: PollOption[];
    /** The number of users who have participated in the poll. */
    totalVoterCount: number;
    /** Whether the poll is closed. */
    isClosed: boolean;
    /** Whether the poll is anonymous. */
    isAnonymous: boolean;
    /** The type of the poll. */
    type: "regular" | "quiz";
    /** Whether the poll allows multiple answers. */
    allowMultipleAnswers?: boolean;
    /** Index of the correct option. */
    correctOptionIndex?: number;
    /** A text that is shown to the user when the poll is answered. */
    explanation?: string;
    /** The explanation's entities. */
    explanationEntities?: MessageEntity[];
    /** Duration of the poll in seconds. */
    openPeriod?: number;
    /** The time in which the poll will be closed. */
    closeDate?: Date;
}
export declare function constructPoll(media_: types.MessageMediaPoll): Poll;
