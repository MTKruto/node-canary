"use strict";
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
exports.constructInlineQuery = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_location_js_1 = require("./0_location.js");
const _1_user_js_1 = require("./1_user.js");
async function constructInlineQuery(query_, getEntity) {
    const user_ = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: query_.user_id }));
    if (user_ == null) {
        (0, _0_deps_js_1.unreachable)();
    }
    const user = (0, _1_user_js_1.constructUser)(user_);
    let chatType;
    if (query_.peer_type !== undefined) {
        if (query_.peer_type instanceof _2_tl_js_1.types.InlineQueryPeerTypeSameBotPM) {
            chatType = "private";
        }
        else if (query_.peer_type instanceof _2_tl_js_1.types.InlineQueryPeerTypeBotPM || query_.peer_type instanceof _2_tl_js_1.types.InlineQueryPeerTypePM) {
            chatType = "sender";
        }
        else if (query_.peer_type instanceof _2_tl_js_1.types.InlineQueryPeerTypeChat) {
            chatType = "group";
        }
        else if (query_.peer_type instanceof _2_tl_js_1.types.InlineQueryPeerTypeMegagroup) {
            chatType = "supergroup";
        }
        else if (query_.peer_type instanceof _2_tl_js_1.types.InlineQueryPeerTypeBroadcast) {
            chatType = "channel";
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    const location = query_.geo !== undefined && query_.geo instanceof _2_tl_js_1.types.GeoPoint ? (0, _0_location_js_1.constructLocation)(query_.geo) : undefined;
    return {
        id: String(query_.query_id),
        from: user,
        query: query_.query,
        offset: query_.offset,
        chatType,
        location,
    };
}
exports.constructInlineQuery = constructInlineQuery;
