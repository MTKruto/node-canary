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
import { types } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { MessageEntity } from "./0_message_entity.js";
import { ChatP } from "./1_chat_p.js";
import { StoryPrivacy } from "./1_story_privacy.js";
import { StoryContent } from "./2_story_content.js";
import { StoryInteractions } from "./2_story_interactions.js";
import { StoryInteractiveArea } from "./2_story_interactive_area.js";
/** A story. */
export interface Story {
    out: boolean;
    id: number;
    chat: ChatP;
    date: Date;
    edited: boolean;
    content: StoryContent;
    interactiveAreas: StoryInteractiveArea[];
    highlighted: boolean;
    interactions?: StoryInteractions;
    privacy?: StoryPrivacy;
    caption?: string;
    captionEntities?: MessageEntity[];
}
export declare function constructStory(story: types.StoryItem, peer: types.PeerUser | types.PeerChat | types.PeerChannel, getEntity: EntityGetter): Promise<Story>;
//# sourceMappingURL=3_story.d.ts.map