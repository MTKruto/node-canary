import { types } from "../2_tl.js";
import { EntityGetter } from "./1__getters.js";
import { ChatP } from "./1_chat_p.js";
import { ReactionCount } from "./1_reaction_count.js";
/** Information on the reactions made to a channel post. */
export interface MessageReactionCount {
    /** The chat containing the message. */
    chat: ChatP;
    /** The message's identifier. */
    messageId: number;
    /** This reaction state's point of time. */
    date: Date;
    /** The reactions made to the post. */
    reactions: ReactionCount[];
}
export declare function constructMessageReactionCount(update: types.UpdateBotMessageReactions, getEntity: EntityGetter): Promise<MessageReactionCount | null>;
