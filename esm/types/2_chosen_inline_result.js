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
import { base64EncodeUrlSafe, cleanObject } from "../1_utilities.js";
import { is, serializeTelegramObject } from "../2_tl.js";
import { constructLocation } from "./0_location.js";
import { constructUser } from "./1_user.js";
export async function constructChosenInlineResult(ubis, getEntity) {
    const entity = await getEntity({ ...ubis, _: "peerUser" });
    if (!entity || !(is("user", entity))) {
        unreachable();
    }
    return cleanObject({
        resultId: ubis.id,
        from: constructUser(entity),
        location: is("geoPoint", ubis.geo) ? constructLocation(ubis.geo) : undefined,
        inlineMessageId: ubis.msg_id === undefined ? undefined : base64EncodeUrlSafe(serializeTelegramObject(ubis.msg_id)),
        query: ubis.query,
    });
}
