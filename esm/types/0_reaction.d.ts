import { enums } from "../2_tl.js";
/** @unlisted */
export interface ReactionEmoji {
    type: "emoji";
    emoji: string;
}
/** @unlisted */
export interface ReactionCustomEmoji {
    type: "customEmoji";
    id: string;
}
/** A reaction type. */
export type Reaction = ReactionEmoji | ReactionCustomEmoji;
export declare function constructReaction(reaction: enums.Reaction): Reaction;
export declare function reactionToTlObject(reaction: Reaction): enums.Reaction;
export declare function reactionEqual(left: Reaction, right: Reaction): boolean;
