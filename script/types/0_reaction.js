"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactionEqual = exports.reactionToTlObject = exports.constructReaction = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
function constructReaction(reaction) {
    if (reaction instanceof _2_tl_js_1.types.ReactionEmoji) {
        return { type: "emoji", emoji: reaction.emoticon };
    }
    else if (reaction instanceof _2_tl_js_1.types.ReactionCustomEmoji) {
        return { type: "customEmoji", id: String(reaction.document_id) };
    }
    else {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.constructReaction = constructReaction;
function reactionToTlObject(reaction) {
    return reaction.type == "emoji" ? new _2_tl_js_1.types.ReactionEmoji({ emoticon: reaction.emoji }) : new _2_tl_js_1.types.ReactionCustomEmoji({ document_id: BigInt(reaction.id) });
}
exports.reactionToTlObject = reactionToTlObject;
function reactionEqual(left, right) {
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
exports.reactionEqual = reactionEqual;
