import { fromUnixTimestamp, UNREACHABLE } from "../1_utilities.js";
import { types } from "../2_tl.js";
import { constructChatP } from "./1_chat_p.js";
export function constructInactiveChat(chat_, lastActivity) {
    if (chat_ instanceof types.ChatEmpty) {
        UNREACHABLE();
    }
    const chat = constructChatP(chat_);
    return {
        lastActivity: fromUnixTimestamp(lastActivity),
        chat,
    };
}
