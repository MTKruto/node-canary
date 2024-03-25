import { constructGiveawayParameters } from "./0_giveaway_parameters.js";
export function constructGiveaway(g) {
    const winnerCount = g.quantity;
    const monthCount = g.months;
    const parameters = constructGiveawayParameters(g);
    return { parameters, winnerCount, monthCount };
}
