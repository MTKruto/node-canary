import { cleanObject } from "../1_utilities.js";
import { constructMessageEntity } from "./0_message_entity.js";
import { constructPollOption } from "./0_poll_option.js";
export function constructPoll(media_) {
    const poll = media_.poll;
    const correctOption = media_.results.results?.find((v) => v.correct)?.option;
    const correctOptionId = correctOption !== undefined ? poll.answers.findIndex((v) => v.option.every((v, i) => correctOption[i] == v)) : undefined;
    return cleanObject({
        id: String(poll.id),
        question: poll.question,
        options: poll.answers.map((v) => constructPollOption(v, media_.results.results ?? [])),
        totalVoterCount: media_.results.total_voters ?? 0,
        isClosed: poll.closed || false,
        isAnonymous: !poll.public_voters,
        type: poll.quiz ? "quiz" : "regular",
        allowMultipleAnswers: poll.quiz ? undefined : poll.multiple_choice || false,
        correctOptionId,
        explanation: media_.results.solution,
        explanationEntities: media_.results.solution_entities?.map(constructMessageEntity).filter((v) => v != null),
        openPeriod: poll.close_period,
        closeDate: poll.close_date ? new Date(poll.close_date * 1000) : undefined,
    });
}