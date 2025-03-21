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
import { unreachable } from "../0_deps.js";
import { cleanObject, fromUnixTimestamp } from "../1_utilities.js";
import { isOneOf } from "../2_tl.js";
import { constructMessageEntity } from "./0_message_entity.js";
import { constructChatP } from "./1_chat_p.js";
import { constructGift } from "./3_gift.js";
export function constructClaimedGift(savedStarGift, fromPeer) {
    if (fromPeer && !isOneOf(["user", "chat", "channel"], fromPeer)) {
        unreachable();
    }
    const gift = constructGift(savedStarGift.gift);
    const date = fromUnixTimestamp(savedStarGift.date);
    const public_ = !!savedStarGift.unsaved;
    const sender = fromPeer ? constructChatP(fromPeer) : undefined;
    const message = savedStarGift.message?.text;
    const entities = savedStarGift.message ? savedStarGift.message.entities.map(constructMessageEntity).filter((v) => !!v) : undefined;
    const messageId = savedStarGift.msg_id;
    const conversionStars = savedStarGift.convert_stars;
    return cleanObject({
        date,
        gift,
        public: public_,
        sender,
        message,
        entities,
        messageId,
        conversionStars,
    });
}
