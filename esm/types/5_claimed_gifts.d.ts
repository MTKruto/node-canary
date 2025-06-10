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
import { EntityGetter } from "./_getters.js";
import { ClaimedGift } from "./4_claimed_gift.js";
/** Gifts claimed by a user or a channel. */
export interface ClaimedGifts {
    /** The number of all gifts claimed by the user. */
    all: number;
    /** Offset of the results. */
    offset?: string;
    /** Gifts claimed by the user. */
    gifts: ClaimedGift[];
}
export declare function constructClaimedGifts(savedStarGifts: Api.payments_SavedStarGifts, getEntity: EntityGetter): Promise<ClaimedGifts>;
//# sourceMappingURL=5_claimed_gifts.d.ts.map