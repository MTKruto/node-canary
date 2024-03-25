"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructChosenInlineResult = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_location_js_1 = require("./0_location.js");
const _1_user_js_1 = require("./1_user.js");
async function constructChosenInlineResult(ubis, getEntity) {
    const entity = await getEntity(new _2_tl_js_1.types.PeerUser(ubis));
    if (!entity || !(entity instanceof _2_tl_js_1.types.User)) {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
    return (0, _1_utilities_js_1.cleanObject)({
        resultId: ubis.id,
        from: (0, _1_user_js_1.constructUser)(entity),
        location: ubis.geo instanceof _2_tl_js_1.types.GeoPoint ? (0, _0_location_js_1.constructLocation)(ubis.geo) : undefined,
        inlineMessageId: ubis.msg_id === undefined ? undefined : (0, _1_utilities_js_1.base64EncodeUrlSafe)(ubis.msg_id[_2_tl_js_1.serialize]()),
        query: ubis.query,
    });
}
exports.constructChosenInlineResult = constructChosenInlineResult;