import { enums } from "../2_tl.js";
import { ChatP } from "./1_chat_p.js";
/** An inactive chat. */
export interface InactiveChat {
    /** The point of time in which the chat was last active. */
    lastActivity: Date;
    /** The chat that has been marked as inactive. */
    chat: ChatP;
}
export declare function constructInactiveChat(chat_: enums.Chat, lastActivity: number): InactiveChat;
