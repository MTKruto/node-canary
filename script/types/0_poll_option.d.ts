import { enums } from "../2_tl.js";
/** A poll option. */
export interface PollOption {
    /** The option's text (1-100 characters). */
    text: string;
    /** Number of users that voted this option. */
    voterCount: number;
}
export declare function constructPollOption(option: enums.PollAnswer, results: Array<enums.PollAnswerVoters>): PollOption;
