"use strict";
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
