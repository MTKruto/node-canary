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
