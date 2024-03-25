"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructGiveawayParameters = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
function constructGiveawayParameters(g) {
    const countries = g.countries_iso2 ?? [];
    const boostedChatId = (0, _2_tl_js_1.peerToChatId)(new _2_tl_js_1.types.PeerChannel({ channel_id: g.channels[0] }));
    const additionalChatIds = g.channels.slice(1).map((v) => (0, _2_tl_js_1.peerToChatId)(new _2_tl_js_1.types.PeerChannel({ channel_id: v })));
    const onlyNewMembers = g.only_new_subscribers ? true : false;
    const winnerSelectionDate = (0, _1_utilities_js_1.fromUnixTimestamp)(g.until_date);
    return { boostedChatId, additionalChatIds, winnerSelectionDate, onlyNewMembers, countries };
}
exports.constructGiveawayParameters = constructGiveawayParameters;
