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
exports.constructInlineQuery = constructInlineQuery;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_location_js_1 = require("./0_location.js");
const _1_user_js_1 = require("./1_user.js");
async function constructInlineQuery(query_, getEntity) {
    const user_ = await getEntity({ _: "peerUser", user_id: query_.user_id });
    if (user_ == null) {
        (0, _0_deps_js_1.unreachable)();
    }
    const user = (0, _1_user_js_1.constructUser)(user_);
    let chatType;
    if (query_.peer_type !== undefined) {
        if (_2_tl_js_1.Api.is("inlineQueryPeerTypeSameBotPM", query_.peer_type)) {
            chatType = "private";
        }
        else if (_2_tl_js_1.Api.is("inlineQueryPeerTypeBotPM", query_.peer_type) || _2_tl_js_1.Api.is("inlineQueryPeerTypePM", query_.peer_type)) {
            chatType = "sender";
        }
        else if (_2_tl_js_1.Api.is("inlineQueryPeerTypeChat", query_.peer_type)) {
            chatType = "group";
        }
        else if (_2_tl_js_1.Api.is("inlineQueryPeerTypeMegagroup", query_.peer_type)) {
            chatType = "supergroup";
        }
        else if (_2_tl_js_1.Api.is("inlineQueryPeerTypeBroadcast", query_.peer_type)) {
            chatType = "channel";
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    const location = query_.geo !== undefined && _2_tl_js_1.Api.is("geoPoint", query_.geo) ? (0, _0_location_js_1.constructLocation)(query_.geo) : undefined;
    return {
        id: String(query_.query_id),
        from: user,
        query: query_.query,
        offset: query_.offset,
        chatType,
        location,
    };
}
