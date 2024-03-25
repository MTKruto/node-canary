import { types } from "../2_tl.js";
import { Reaction } from "./0_reaction.js";
/** Represents a type of reaction made to a message. */
export interface MessageReaction {
    /** The type of the reaction. */
    reaction: Reaction;
    /** The number of those who made this reaction. */
    count: number;
    /** A list of identifiers of users who recently made this reaction. */
    choosers: number[];
    /** Whether the current user made this reaction. */
    chosen: boolean;
}
export declare function constructMessageReaction(reaction_: types.ReactionCount, recentReactions: types.MessagePeerReaction[]): MessageReaction;
