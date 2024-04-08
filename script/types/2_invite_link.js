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
exports.constructInviteLink = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_user_js_1 = require("./1_user.js");
async function constructInviteLink(inviteLink_, getEntity) {
    const entity = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: inviteLink_.admin_id }));
    if (!entity) {
        (0, _0_deps_js_1.unreachable)();
    }
    const inviteLink = inviteLink_.link;
    const creator = (0, _1_user_js_1.constructUser)(entity);
    const requiresApproval = inviteLink_.request_needed ? true : false;
    const revoked = inviteLink_.revoked ? true : false;
    const title = inviteLink_.title;
    const expiresAt = inviteLink_.expire_date ? (0, _1_utilities_js_1.fromUnixTimestamp)(inviteLink_.expire_date) : undefined;
    const limit = inviteLink_.usage_limit ? inviteLink_.usage_limit : undefined;
    const pendingJoinRequestCount = inviteLink_.requested;
    return (0, _1_utilities_js_1.cleanObject)({
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
exports.constructInviteLink = constructInviteLink;
