import { types } from "../2_tl.js";
import { GiveawayParameters } from "./0_giveaway_parameters.js";
/** A giveaway. */
export interface Giveaway {
    parameters: GiveawayParameters;
    /** The quantity of the Telegram Premium subscriptions that will be given away.. */
    winnerCount: number;
    /** The duration of each Telegram Premium subscription that is to be given away in months. */
    monthCount: number;
}
export declare function constructGiveaway(g: types.MessageMediaGiveaway): Giveaway;
