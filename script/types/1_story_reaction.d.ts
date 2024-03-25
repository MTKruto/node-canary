import { types } from "../2_tl.js";
import { Reaction } from "./0_reaction.js";
/** Represents a type of reaction made to a story. */
export interface StoryReaction {
    /** The type of the reaction. */
    reaction: Reaction;
    /** The number of those who made this reaction. */
    count: number;
    /** Whether the current user made this reaction. */
    chosen: boolean;
}
export declare function constructStoryReaction(reaction_: types.ReactionCount): StoryReaction;
