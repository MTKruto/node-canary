import { fromUnixTimestamp } from "../1_utilities.js";
import { peerToChatId, types } from "../2_tl.js";
export function constructGiveawayParameters(g) {
    const countries = g.countries_iso2 ?? [];
    const boostedChatId = peerToChatId(new types.PeerChannel({ channel_id: g.channels[0] }));
    const additionalChatIds = g.channels.slice(1).map((v) => peerToChatId(new types.PeerChannel({ channel_id: v })));
    const onlyNewMembers = g.only_new_subscribers ? true : false;
    const winnerSelectionDate = fromUnixTimestamp(g.until_date);
    return { boostedChatId, additionalChatIds, winnerSelectionDate, onlyNewMembers, countries };
}
