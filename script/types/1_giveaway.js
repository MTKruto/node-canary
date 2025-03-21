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
exports.constructGiveaway = constructGiveaway;
const _1_utilities_js_1 = require("../1_utilities.js");
const _0_giveaway_parameters_js_1 = require("./0_giveaway_parameters.js");
function constructGiveaway(g) {
    const winnerCount = g.quantity;
    const premiumMonthCount = g.months;
    const starCount = g.stars;
    const parameters = (0, _0_giveaway_parameters_js_1.constructGiveawayParameters)(g);
    return (0, _1_utilities_js_1.cleanObject)({ parameters, winnerCount, premiumMonthCount, starCount: starCount ? Number(starCount) : undefined });
}
