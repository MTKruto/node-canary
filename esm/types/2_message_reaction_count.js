import { fromUnixTimestamp } from "../1_utilities.js";
import { constructChatP } from "./1_chat_p.js";
import { constructReactionCount } from "./1_reaction_count.js";
export async function constructMessageReactionCount(update, getEntity) {
    const date = fromUnixTimestamp(update.date);
    const reactions = update.reactions.map((v) => constructReactionCount(v));
    const entity = await getEntity(update.peer);
    if (entity) {
        const chat = constructChatP(entity);
        const messageId = update.msg_id;
        const messageReactionCount = { chat, messageId, date, reactions };
        return messageReactionCount;
    }
    else {
        return null;
    }
}
