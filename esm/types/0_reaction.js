import { unreachable } from "../0_deps.js";
import { types } from "../2_tl.js";
export function constructReaction(reaction) {
    if (reaction instanceof types.ReactionEmoji) {
        return { type: "emoji", emoji: reaction.emoticon };
    }
    else if (reaction instanceof types.ReactionCustomEmoji) {
        return { type: "customEmoji", id: String(reaction.document_id) };
    }
    else {
        unreachable();
    }
}
export function reactionToTlObject(reaction) {
    return reaction.type == "emoji" ? new types.ReactionEmoji({ emoticon: reaction.emoji }) : new types.ReactionCustomEmoji({ document_id: BigInt(reaction.id) });
}
export function reactionEqual(left, right) {
    if (left.type == "emoji") {
        if (right.type == "emoji" && left.emoji == right.emoji) {
            return true;
        }
    }
    else if (left.type == "customEmoji") {
        if (right.type == "customEmoji" && left.id == right.id) {
            return true;
        }
    }
    return false;
}
