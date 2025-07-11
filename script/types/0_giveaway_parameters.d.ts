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
import { Api } from "../2_tl.js";
/** Giveaway parameters. */
export interface GiveawayParameters {
    /** The identifier of the chat that will be boosted for the duration of the given away Premium subscriptions. */
    boostedChatId: number;
    /** The identifiers of additional chats that the user must subscribe to in order to be eligible for the prizes. */
    additionalChatIds: number[];
    /** A point in time within the future in which the winners will be selected. */
    winnerSelectionDate: number;
    /** Whether only new members of the chats will be eligible for the prizes. */
    onlyNewMembers: boolean;
    /** A list of countries that are eligible for the prizes. */
    countries: string[];
}
export declare function constructGiveawayParameters(g: Api.messageMediaGiveaway): GiveawayParameters;
//# sourceMappingURL=0_giveaway_parameters.d.ts.map