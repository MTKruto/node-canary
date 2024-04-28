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
import { enums } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { Location } from "./0_location.js";
import { MessageReference } from "./0_message_reference.js";
import { Reaction } from "./0_reaction.js";
import { Venue } from "./1_venue.js";
/** @unlisted */
export interface StoryInteractiveAreaPosition {
    xPercentage: number;
    yPercentage: number;
    widthPercentage: number;
    heightPercentage: number;
    rotationAngle: number;
}
/** @unlisted */
export interface _StoryInteractiveAreaPositionCommon {
    position: StoryInteractiveAreaPosition;
}
/** @unlisted */
export interface StoryInteractiveAreaLocation extends _StoryInteractiveAreaPositionCommon {
    location: Location;
}
/** @unlisted */
export interface StoryInteractiveAreaVenue extends _StoryInteractiveAreaPositionCommon {
    venue: Venue;
}
/** @unlisted */
export interface StoryInteractiveAreaReaction extends _StoryInteractiveAreaPositionCommon {
    reaction: Reaction;
    count?: number;
    dark?: boolean;
    flipped?: boolean;
}
/** @unlisted */
export interface StoryInteractiveAreaMessage extends _StoryInteractiveAreaPositionCommon {
    messageReference: MessageReference;
}
/** A story's interactive area. */
export type StoryInteractiveArea = StoryInteractiveAreaLocation | StoryInteractiveAreaVenue | StoryInteractiveAreaReaction | StoryInteractiveAreaMessage;
export declare function constructStoryInteractiveArea(area: enums.MediaArea): StoryInteractiveArea;
export declare function storyInteractiveAreaToTlObject(area: StoryInteractiveArea, getEntity: EntityGetter): Promise<enums.MediaArea>;
//# sourceMappingURL=2_story_interactive_area.d.ts.map