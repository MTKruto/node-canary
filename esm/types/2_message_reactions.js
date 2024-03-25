import { cleanObject, fromUnixTimestamp } from "../1_utilities.js";
import { types } from "../2_tl.js";
import { constructReaction } from "./0_reaction.js";
import { constructChatP } from "./1_chat_p.js";
import { constructUser } from "./1_user.js";
export async function constructMessageReactions(update, getEntity) {
    const date = fromUnixTimestamp(update.date);
    const oldReactions = update.old_reactions.map((v) => constructReaction(v));
    const newReactions = update.new_reactions.map((v) => constructReaction(v));
    const messageId = update.msg_id;
    let entity = await getEntity(update.peer);
    if (!entity) {
        return null;
    }
    const chat = constructChatP(entity);
    let user = undefined;
    let actorChat = undefined;
    entity = await getEntity(update.actor);
    if (!entity) {
        return null;
    }
    if (entity instanceof types.User) {
        user = constructUser(entity);
    }
    else {
        actorChat = constructChatP(entity);
    }
    return cleanObject({
        chat,
        messageId,
        user,
        actorChat,
        date,
        oldReactions,
        newReactions,
    });
}
