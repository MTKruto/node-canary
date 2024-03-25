import { types } from "../2_tl.js";
import { Reaction } from "./0_reaction.js";
/** The count of a specific reaction. */
export interface ReactionCount {
    /** The type of the reaction. */
    reaction: Reaction;
    /** Number of times the reaction was added. */
    count: number;
}
export declare function constructReactionCount(reaction_: types.ReactionCount): ReactionCount;
