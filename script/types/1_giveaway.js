"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructGiveaway = void 0;
const _0_giveaway_parameters_js_1 = require("./0_giveaway_parameters.js");
function constructGiveaway(g) {
    const winnerCount = g.quantity;
    const monthCount = g.months;
    const parameters = (0, _0_giveaway_parameters_js_1.constructGiveawayParameters)(g);
    return { parameters, winnerCount, monthCount };
}
exports.constructGiveaway = constructGiveaway;
