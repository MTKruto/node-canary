"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructInlineQuery = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_location_js_1 = require("./0_location.js");
const _1_user_js_1 = require("./1_user.js");
async function constructInlineQuery(query_, getEntity) {
    const user_ = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: query_.user_id }));
    if (user_ == null) {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
    const user = (0, _1_user_js_1.constructUser)(user_);
    let chatType;
    if (query_.peer_type !== undefined) {
        if (query_.peer_type instanceof _2_tl_js_1.types.InlineQueryPeerTypeSameBotPM) {
            chatType = "private";
        }
        else if (query_.peer_type instanceof _2_tl_js_1.types.InlineQueryPeerTypeBotPM || query_.peer_type instanceof _2_tl_js_1.types.InlineQueryPeerTypePM) {
            chatType = "sender";
        }
        else if (query_.peer_type instanceof _2_tl_js_1.types.InlineQueryPeerTypeChat) {
            chatType = "group";
        }
        else if (query_.peer_type instanceof _2_tl_js_1.types.InlineQueryPeerTypeMegagroup) {
            chatType = "supergroup";
        }
        else if (query_.peer_type instanceof _2_tl_js_1.types.InlineQueryPeerTypeBroadcast) {
            chatType = "channel";
        }
        else {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
    }
    const location = query_.geo !== undefined && query_.geo instanceof _2_tl_js_1.types.GeoPoint ? (0, _0_location_js_1.constructLocation)(query_.geo) : undefined;
    return {
        id: String(query_.query_id),
        from: user,
        query: query_.query,
        offset: query_.offset,
        chatType,
        location,
    };
}
exports.constructInlineQuery = constructInlineQuery;
