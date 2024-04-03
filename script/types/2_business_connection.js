"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructBusinessConnection = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_user_js_1 = require("./1_user.js");
async function constructBusinessConnection(connection, getEntity) {
    return {
        id: connection.connection_id,
        user: (0, _1_user_js_1.constructUser)((await getEntity(new _2_tl_js_1.types.PeerUser(connection)))),
        date: (0, _1_utilities_js_1.fromUnixTimestamp)(connection.date),
        canReply: !!connection.can_reply,
        isEnabled: !connection.disabled,
    };
}
exports.constructBusinessConnection = constructBusinessConnection;
