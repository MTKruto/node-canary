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
import { MessageEntity } from "./0_message_entity.js";
import { ChatP } from "./1_chat_p.js";
import { Gift } from "./3_gift.js";
/** A gift claimed by a user or a channel. */
export interface ClaimedGift {
    /** The time when the gift was claimed. */
    date: number;
    /** The gift. */
    gift: Gift;
    /** Whether the gift is publicly visible. */
    public: boolean;
    /** The sender of the gift. */
    sender?: ChatP;
    /** A message shared when the gift was sent. */
    message?: string;
    /** The entities of the message. */
    entities?: MessageEntity[];
    /** The identifier of the service message announcing the receival of the gift. */
    messageId?: number;
    /** The amount of stars the gift would be worth. */
    convertionStars?: number;
}
export declare function constructClaimedGift(savedStarGift: Api.SavedStarGift, fromPeer: Api.User | Api.Chat | undefined, getEntity: EntityGetter): Promise<ClaimedGift>;
//# sourceMappingURL=4_claimed_gift.d.ts.map