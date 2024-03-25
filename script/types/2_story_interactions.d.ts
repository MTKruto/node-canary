import { types } from "../2_tl.js";
import { StoryReaction } from "./1_story_reaction.js";
/** The interactions made with a story. */
export interface StoryInteractions {
    reactions?: StoryReaction[];
    reactionCount?: number;
    views: number;
    forwards: number;
}
export declare function constructStoryInteractions(views_: types.StoryViews): StoryInteractions;
