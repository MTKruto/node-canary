import { unreachable } from "../0_deps.js";
import { constructChatP } from "./1_chat_p.js";
export async function constructPollAnswer(update, getEntity) {
    const pollId = String(update.poll_id);
    const entity = await getEntity(update.peer);
    if (!entity) {
        unreachable();
    }
    const from = constructChatP(entity);
    const optionIndexes = update.options.map((v) => v[0]);
    return {
        pollId,
        from,
        optionIndexes,
    };
}
