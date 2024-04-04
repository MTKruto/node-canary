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
