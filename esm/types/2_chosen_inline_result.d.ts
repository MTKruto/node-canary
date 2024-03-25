import { types } from "../2_tl.js";
import { Location } from "./0_location.js";
import { EntityGetter } from "./1__getters.js";
import { User } from "./1_user.js";
/** A chosen inline result. */
export interface ChosenInlineResult {
    /** The identifier of the inline result that was chosen. */
    resultId: string;
    /** The user who chose the result. */
    from: User;
    /** The location of the user who chose the result. */
    location?: Location;
    /** Identifier of the sent inline message. */
    inlineMessageId?: string;
    /** The query that was used to obtain the result. */
    query: string;
}
export declare function constructChosenInlineResult(ubis: types.UpdateBotInlineSend, getEntity: EntityGetter): Promise<ChosenInlineResult>;
