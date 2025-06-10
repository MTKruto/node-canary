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
exports.constructClaimedGift = constructClaimedGift;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_message_entity_js_1 = require("./0_message_entity.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _3_gift_js_1 = require("./3_gift.js");
async function constructClaimedGift(savedStarGift, fromPeer, getEntity) {
    if (fromPeer && !_2_tl_js_1.Api.isOneOf(["user", "chat", "channel"], fromPeer)) {
        (0, _0_deps_js_1.unreachable)();
    }
    const gift = await (0, _3_gift_js_1.constructGift)(savedStarGift.gift, getEntity);
    const date = (0, _1_utilities_js_1.fromUnixTimestamp)(savedStarGift.date);
    const public_ = !!savedStarGift.unsaved;
    const sender = fromPeer ? (0, _1_chat_p_js_1.constructChatP)(fromPeer) : undefined;
    const message = savedStarGift.message?.text;
    const entities = savedStarGift.message ? savedStarGift.message.entities.map(_0_message_entity_js_1.constructMessageEntity).filter((v) => !!v) : undefined;
    const messageId = savedStarGift.msg_id;
    const conversionStars = savedStarGift.convert_stars;
    return (0, _1_utilities_js_1.cleanObject)({
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
