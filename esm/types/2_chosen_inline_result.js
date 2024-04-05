import { unreachable } from "../0_deps.js";
import { base64EncodeUrlSafe, cleanObject } from "../1_utilities.js";
import { serialize, types } from "../2_tl.js";
import { constructLocation } from "./0_location.js";
import { constructUser } from "./1_user.js";
export async function constructChosenInlineResult(ubis, getEntity) {
    const entity = await getEntity(new types.PeerUser(ubis));
    if (!entity || !(entity instanceof types.User)) {
        unreachable();
    }
    return cleanObject({
        resultId: ubis.id,
        from: constructUser(entity),
        location: ubis.geo instanceof types.GeoPoint ? constructLocation(ubis.geo) : undefined,
        inlineMessageId: ubis.msg_id === undefined ? undefined : base64EncodeUrlSafe(ubis.msg_id[serialize]()),
        query: ubis.query,
    });
}
