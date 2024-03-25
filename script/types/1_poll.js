"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructPoll = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _0_message_entity_js_1 = require("./0_message_entity.js");
const _0_poll_option_js_1 = require("./0_poll_option.js");
function constructPoll(media_) {
    const poll = media_.poll;
    const correctOption = media_.results.results?.find((v) => v.correct)?.option;
    const correctOptionId = correctOption !== undefined ? poll.answers.findIndex((v) => v.option.every((v, i) => correctOption[i] == v)) : undefined;
    return (0, _1_utilities_js_1.cleanObject)({
        id: String(poll.id),
        question: poll.question,
        options: poll.answers.map((v) => (0, _0_poll_option_js_1.constructPollOption)(v, media_.results.results ?? [])),
        totalVoterCount: media_.results.total_voters ?? 0,
        isClosed: poll.closed || false,
        isAnonymous: !poll.public_voters,
        type: poll.quiz ? "quiz" : "regular",
        allowMultipleAnswers: poll.quiz ? undefined : poll.multiple_choice || false,
        correctOptionId,
        explanation: media_.results.solution,
        explanationEntities: media_.results.solution_entities?.map(_0_message_entity_js_1.constructMessageEntity).filter((v) => v != null),
        openPeriod: poll.close_period,
        closeDate: poll.close_date ? new Date(poll.close_date * 1000) : undefined,
    });
}
exports.constructPoll = constructPoll;