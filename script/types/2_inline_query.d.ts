import { types } from "../2_tl.js";
import { Location } from "./0_location.js";
import { EntityGetter } from "./1__getters.js";
import { User } from "./1_user.js";
/** An incoming inline query. */
export interface InlineQuery {
    /** The identifier of the inline query. */
    id: string;
    /** The user who made the inline query. */
    from: User;
    /** The query that was made. */
    query: string;
    /** The offset parameter that was passed to the last [answerInlineQuery](/methods/answerInlineQuery) call. */
    offset: string;
    /** The type of the chat from which the inline query was made. */
    chatType?: "sender" | "private" | "group" | "supergroup" | "channel";
    /** The location of the user who made the inline query. */
    location?: Location;
}
export declare function constructInlineQuery(query_: types.UpdateBotInlineQuery, getEntity: EntityGetter): Promise<InlineQuery>;
