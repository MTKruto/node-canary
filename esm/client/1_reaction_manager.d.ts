import { enums, types } from "../2_tl.js";
import { Update } from "../3_types.js";
import { C } from "./0_types.js";
type ReactionManagerUpdate = types.UpdateBotMessageReactions | types.UpdateBotMessageReaction | types.UpdateMessageReactions | types.UpdateChannelMessageViews | types.UpdateChannelMessageForwards;
export declare class ReactionManager {
    #private;
    constructor(c: C);
    static canHandleUpdate(update: enums.Update): update is ReactionManagerUpdate;
    handleUpdate(update: ReactionManagerUpdate): Promise<Update | null>;
}
export {};
