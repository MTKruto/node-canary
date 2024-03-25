import { types } from "../2_tl.js";
/** Giveaway parameters. */
export interface GiveawayParameters {
    /** The identifier of the chat that will be boosted for the duration of the given away Premium subscriptions. */
    boostedChatId: number;
    /** The identifiers of additional chats that the user must subscribe to in order to be eligible for the prizes. */
    additionalChatIds: number[];
    /** The point of time in which the winners will be chosen. */
    winnerSelectionDate: Date;
    /** Whether only new members of the chats will be eligible for the prizes. */
    onlyNewMembers: boolean;
    /** A list of countries that are eligible for the prizes. */
    countries: string[];
}
export declare function constructGiveawayParameters(g: types.MessageMediaGiveaway): GiveawayParameters;
