"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructStoryInteractions = void 0;
const _1_story_reaction_js_1 = require("./1_story_reaction.js");
function constructStoryInteractions(views_) {
    const views = views_.views_count;
    const forwards = views_.forwards_count ?? 0;
    const reactionCount = views_.reactions_count;
    const reactions = views_.reactions ? views_.reactions.map(_1_story_reaction_js_1.constructStoryReaction) : undefined;
    return { reactions, reactionCount, views, forwards };
}
exports.constructStoryInteractions = constructStoryInteractions;
