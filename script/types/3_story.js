"use strict";
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructStory = constructStory;
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
    const date = story.date;
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
