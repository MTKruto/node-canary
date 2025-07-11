"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructPoll = constructPoll;
const _1_utilities_js_1 = require("../1_utilities.js");
const _0_message_entity_js_1 = require("./0_message_entity.js");
const _1_poll_option_js_1 = require("./1_poll_option.js");
function constructPoll(media_) {
    const poll = media_.poll;
    const correctOption = media_.results.results?.find((v) => v.correct)?.option;
    const correctOptionIndex = correctOption !== undefined ? poll.answers.findIndex((v) => v.option.every((v, i) => correctOption[i] == v)) : undefined;
    return (0, _1_utilities_js_1.cleanObject)({
        id: String(poll.id),
        question: poll.question.text,
        questionEntities: poll.question.entities.map(_0_message_entity_js_1.constructMessageEntity).filter((v) => v != null),
        options: poll.answers.map((v) => (0, _1_poll_option_js_1.constructPollOption)(v, media_.results.results ?? [])),
        totalVoterCount: media_.results.total_voters ?? 0,
        isClosed: poll.closed || false,
        isAnonymous: !poll.public_voters,
        type: poll.quiz ? "quiz" : "regular",
        allowMultipleAnswers: poll.quiz ? undefined : poll.multiple_choice || false,
        correctOptionIndex,
        explanation: media_.results.solution,
        explanationEntities: media_.results.solution_entities?.map(_0_message_entity_js_1.constructMessageEntity).filter((v) => v != null),
        openPeriod: poll.close_period,
        closeDate: poll.close_date,
    });
}
