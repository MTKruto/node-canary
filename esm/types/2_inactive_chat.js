import { unreachable } from "../0_deps.js";
import { fromUnixTimestamp } from "../1_utilities.js";
import { types } from "../2_tl.js";
import { constructChatP } from "./1_chat_p.js";
export function constructInactiveChat(chat_, lastActivity) {
    if (chat_ instanceof types.ChatEmpty) {
        unreachable();
    }
    const chat = constructChatP(chat_);
    return {
        lastActivity: fromUnixTimestamp(lastActivity),
        chat,
    };
}
