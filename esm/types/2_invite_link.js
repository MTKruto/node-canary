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
import { cleanObject, fromUnixTimestamp } from "../1_utilities.js";
import { types } from "../2_tl.js";
import { constructUser } from "./1_user.js";
export async function constructInviteLink(inviteLink_, getEntity) {
    const entity = await getEntity(new types.PeerUser({ user_id: inviteLink_.admin_id }));
    if (!entity) {
        unreachable();
    }
    const inviteLink = inviteLink_.link;
    const creator = constructUser(entity);
    const requiresApproval = inviteLink_.request_needed ? true : false;
    const revoked = inviteLink_.revoked ? true : false;
    const title = inviteLink_.title;
    const expiresAt = inviteLink_.expire_date ? fromUnixTimestamp(inviteLink_.expire_date) : undefined;
    const limit = inviteLink_.usage_limit ? inviteLink_.usage_limit : undefined;
    const pendingJoinRequestCount = inviteLink_.requested;
    return cleanObject({
        inviteLink,
        creator,
        requiresApproval,
        revoked,
        title,
        expiresAt,
        limit,
        pendingJoinRequestCount,
    });
}
