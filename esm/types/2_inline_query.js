import { UNREACHABLE } from "../1_utilities.js";
import { types } from "../2_tl.js";
import { constructLocation } from "./0_location.js";
import { constructUser } from "./1_user.js";
export async function constructInlineQuery(query_, getEntity) {
    const user_ = await getEntity(new types.PeerUser({ user_id: query_.user_id }));
    if (user_ == null) {
        UNREACHABLE();
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
            UNREACHABLE();
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
