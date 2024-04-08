/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
import { unreachable } from "../0_deps.js";
import { cleanObject, fromUnixTimestamp } from "../1_utilities.js";
import { constructMessageEntity } from "./0_message_entity.js";
import { constructChatP } from "./1_chat_p.js";
import { constructStoryPrivacy } from "./1_story_privacy.js";
import { constructStoryContent } from "./2_story_content.js";
import { constructStoryInteractions } from "./2_story_interactions.js";
import { constructStoryInteractiveArea } from "./2_story_interactive_area.js";
export async function constructStory(story, peer, getEntity) {
    const id = story.id;
    const entity = await getEntity(peer);
    if (!entity) {
        unreachable();
    }
    const chat = constructChatP(entity);
    const date = fromUnixTimestamp(story.date);
    const interactiveAreas = (story.media_areas ?? []).map(constructStoryInteractiveArea);
    const highlighted = story.pinned ? true : false;
    const content = constructStoryContent(story.media);
    const caption = story.caption;
    const captionEntities = story.entities?.map(constructMessageEntity).filter((v) => !!v);
    const privacy = story.privacy ? constructStoryPrivacy(story.privacy) : undefined;
    const interactions = story.views ? constructStoryInteractions(story.views) : undefined;
    return cleanObject({
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
