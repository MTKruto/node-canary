import { enums, types } from "../2_tl.js";
import { EntityGetter } from "./1__getters.js";
import { User } from "./1_user.js";
import { Message, MessageGetter } from "./4_message.js";
/** A received callback query. */
export interface CallbackQuery {
    /** The identifier of the callback query. */
    id: string;
    /** The user who made the callback query. */
    from: User;
    /** The message from which the callback query was made. Unset if made from an inline result message. */
    message?: Message;
    /** The identifier of the inline result message from which the callback query was made. Unset if made from a message not originating from an inline query result. */
    inlineMessageId?: string;
    /** A special identifier for the chat in which the callback was made from. Useful for inline result messages. */
    chatInstance: string;
    /** The data associated with the button that was used to make the callback query. */
    data?: string;
    /** The short name of the game to be returned. */
    gameShortName?: string;
}
export declare function deserializeInlineMessageId(inlineMessageId: string): enums.InputBotInlineMessageID;
export declare function constructCallbackQuery(callbackQuery: types.UpdateBotCallbackQuery | types.UpdateInlineBotCallbackQuery, getEntity: EntityGetter, getMessage: MessageGetter): Promise<CallbackQuery>;
