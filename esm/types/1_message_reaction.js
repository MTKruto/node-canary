import { UNREACHABLE } from "../1_utilities.js";
import { peerToChatId, types } from "../2_tl.js";
import { constructReaction } from "./0_reaction.js";
export function constructMessageReaction(reaction_, recentReactions) {
    const choosers = recentReactions
        .filter((v) => {
        if (reaction_.reaction instanceof types.ReactionEmoji) {
            return v.reaction instanceof types.ReactionEmoji && v.reaction.emoticon == reaction_.reaction.emoticon;
        }
        else if (reaction_.reaction instanceof types.ReactionCustomEmoji) {
            return v.reaction instanceof types.ReactionCustomEmoji && v.reaction.document_id == reaction_.reaction.document_id;
        }
        else {
            UNREACHABLE();
        }
    })
        .map((v) => peerToChatId(v.peer_id));
    const reaction = constructReaction(reaction_.reaction);
    const count = reaction_.count;
    const chosen = reaction_.chosen_order !== undefined ? true : false;
    return { reaction, count, choosers, chosen };
}
