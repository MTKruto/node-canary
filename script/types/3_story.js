"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructStory = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _0_message_entity_js_1 = require("./0_message_entity.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_story_privacy_js_1 = require("./1_story_privacy.js");
const _2_story_content_js_1 = require("./2_story_content.js");
const _2_story_interactions_js_1 = require("./2_story_interactions.js");
const _2_story_interactive_area_js_1 = require("./2_story_interactive_area.js");
async function constructStory(story, peer, getEntity) {
    const id = story.id;
    const entity = await getEntity(peer);
    if (!entity) {
        (0, _0_deps_js_1.unreachable)();
    }
    const chat = (0, _1_chat_p_js_1.constructChatP)(entity);
    const date = (0, _1_utilities_js_1.fromUnixTimestamp)(story.date);
    const interactiveAreas = (story.media_areas ?? []).map(_2_story_interactive_area_js_1.constructStoryInteractiveArea);
    const highlighted = story.pinned ? true : false;
    const content = (0, _2_story_content_js_1.constructStoryContent)(story.media);
    const caption = story.caption;
    const captionEntities = story.entities?.map(_0_message_entity_js_1.constructMessageEntity).filter((v) => !!v);
    const privacy = story.privacy ? (0, _1_story_privacy_js_1.constructStoryPrivacy)(story.privacy) : undefined;
    const interactions = story.views ? (0, _2_story_interactions_js_1.constructStoryInteractions)(story.views) : undefined;
    return (0, _1_utilities_js_1.cleanObject)({
        out: story.out ? true : false,
        id,
        chat,
        date,
        content,
        edited: story.edited ? true : false,
        interactiveAreas,
        highlighted,
        interactions,
        privacy,
        caption,
        captionEntities,
    });
}
exports.constructStory = constructStory;
