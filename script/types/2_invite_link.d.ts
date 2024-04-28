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
import { types } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { User } from "./1_user.js";
/** A chat invite link. */
export interface InviteLink {
    /** The link itself. */
    inviteLink: string;
    /** The user who created the invite link. */
    creator: User;
    /** Whether an admin must explicitly approve join requests originating from this invite link. */
    requiresApproval: boolean;
    /** Whether the invite link is revoked. */
    revoked: boolean;
    /** An optional title. */
    title?: string;
    /** A point in time within the future in which the ban will be reverted. */
    expiresAt?: Date;
    /** The times the invite link can be used. */
    limit?: number;
    /** The number of pending join requests originating from this invite link. */
    pendingJoinRequestCount?: number;
}
export declare function constructInviteLink(inviteLink_: types.ChatInviteExported, getEntity: EntityGetter): Promise<InviteLink>;
//# sourceMappingURL=2_invite_link.d.ts.map