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
exports.constructGiveawayParameters = constructGiveawayParameters;
const _2_tl_js_1 = require("../2_tl.js");
function constructGiveawayParameters(g) {
    const countries = g.countries_iso2 ?? [];
    const boostedChatId = _2_tl_js_1.Api.peerToChatId({ _: "peerChannel", channel_id: g.channels[0] });
    const additionalChatIds = g.channels.slice(1).map((v) => _2_tl_js_1.Api.peerToChatId({ _: "peerChannel", channel_id: v }));
    const onlyNewMembers = g.only_new_subscribers ? true : false;
    const winnerSelectionDate = g.until_date;
    return { boostedChatId, additionalChatIds, winnerSelectionDate, onlyNewMembers, countries };
}
