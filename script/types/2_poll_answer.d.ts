import { Api } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { ChatP } from "./1_chat_p.js";
/** An answer to a poll. */
export interface PollAnswer {
    /** The identifier of the poll that was responded to. */
    pollId: string;
    /** The user who responded to the poll. */
    from: ChatP;
    /** The indexes of the options chosen by the user. */
    optionIndexes: number[];
}
export declare function constructPollAnswer(update: Api.updateMessagePollVote, getEntity: EntityGetter): Promise<PollAnswer>;
//# sourceMappingURL=2_poll_answer.d.ts.map