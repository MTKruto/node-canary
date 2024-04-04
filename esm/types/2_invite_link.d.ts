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
    /** The point of time in which the invite link is expired at. */
    expiresAt?: Date;
    /** The times the invite link can be used. */
    limit?: number;
    /** The number of pending join requests originating from this invite link. */
    pendingJoinRequestCount?: number;
}
export declare function constructInviteLink(inviteLink_: types.ChatInviteExported, getEntity: EntityGetter): Promise<InviteLink>;
