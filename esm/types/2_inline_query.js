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
import { unreachable } from "../0_deps.js";
import { types } from "../2_tl.js";
import { constructLocation } from "./0_location.js";
import { constructUser } from "./1_user.js";
export async function constructInlineQuery(query_, getEntity) {
    const user_ = await getEntity(new types.PeerUser({ user_id: query_.user_id }));
    if (user_ == null) {
        unreachable();
    }
    const user = constructUser(user_);
    let chatType;
    if (query_.peer_type !== undefined) {
        if (query_.peer_type instanceof types.InlineQueryPeerTypeSameBotPM) {
            chatType = "private";
        }
        else if (query_.peer_type instanceof types.InlineQueryPeerTypeBotPM || query_.peer_type instanceof types.InlineQueryPeerTypePM) {
            chatType = "sender";
        }
        else if (query_.peer_type instanceof types.InlineQueryPeerTypeChat) {
            chatType = "group";
        }
        else if (query_.peer_type instanceof types.InlineQueryPeerTypeMegagroup) {
            chatType = "supergroup";
        }
        else if (query_.peer_type instanceof types.InlineQueryPeerTypeBroadcast) {
            chatType = "channel";
        }
        else {
            unreachable();
        }
    }
    const location = query_.geo !== undefined && query_.geo instanceof types.GeoPoint ? constructLocation(query_.geo) : undefined;
    return {
        id: String(query_.query_id),
        from: user,
        query: query_.query,
        offset: query_.offset,
        chatType,
        location,
    };
}
