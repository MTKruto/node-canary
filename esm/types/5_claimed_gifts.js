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
import { cleanObject } from "../1_utilities.js";
import { Api } from "../2_tl.js";
import { constructClaimedGift } from "./4_claimed_gift.js";
export async function constructClaimedGifts(savedStarGifts, getEntity) {
    return cleanObject({
        all: savedStarGifts.count,
        offset: savedStarGifts.next_offset,
        gifts: await Promise.all(savedStarGifts.gifts.map((v) => {
            const fromId = v.from_id;
            if (Api.is("peerUser", fromId)) {
                return [v, savedStarGifts.users.find((u) => Api.is("user", u) && u.id == fromId.user_id)];
            }
            else if (Api.is("peerChat", fromId)) {
                return [v, savedStarGifts.chats.find((u) => Api.is("chat", u) && u.id == fromId.chat_id)];
            }
            else if (fromId) {
                return [v, savedStarGifts.chats.find((u) => Api.is("channel", u) && u.id == fromId.channel_id)];
            }
            else {
                return [v, undefined];
            }
        }).map((v) => constructClaimedGift(v[0], v[1], getEntity))),
    });
}
