import { types } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { Reaction } from "./0_reaction.js";
import { ChatP } from "./1_chat_p.js";
import { User } from "./1_user.js";
/** The reactions of a user to a messages in a group. */
export interface MessageReactions {
    /** The chat containing the message the user reacted to. */
    chat: ChatP;
    /** The message's identifier. */
    messageId: number;
    /** The user who changed their reactions to the message. Unset if done on behalf of a chat. */
    user?: User;
    /** The chat that changed its reactions to the message. Unset if done on behalf of a user. */
    actorChat?: ChatP;
    /** The point of time in which the change was made. */
    date: Date;
    /** The previous reactions. */
    oldReactions: Reaction[];
    /** The current reactions. */
    newReactions: Reaction[];
}
export declare function constructMessageReactions(update: types.UpdateBotMessageReaction, getEntity: EntityGetter): Promise<MessageReactions | null>;
