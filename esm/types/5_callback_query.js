import { base64DecodeUrlSafe, base64EncodeUrlSafe, cleanObject, UNREACHABLE } from "../1_utilities.js";
import { peerToChatId, serialize, TLReader, types } from "../2_tl.js";
import { constructUser } from "./1_user.js";
const ERR_INVALID_INLINE_MESSAGE_ID = new Error("Invalid inline message ID");
export function deserializeInlineMessageId(inlineMessageId) {
    try {
        const buffer = base64DecodeUrlSafe(inlineMessageId);
        const reader = new TLReader(buffer);
        const object = reader.readObject();
        if (object instanceof types.InputBotInlineMessageID || object instanceof types.InputBotInlineMessageID64) {
            return object;
        }
    }
    catch {
        throw ERR_INVALID_INLINE_MESSAGE_ID;
    }
    throw ERR_INVALID_INLINE_MESSAGE_ID;
}
export async function constructCallbackQuery(callbackQuery, getEntity, getMessage) {
    const user_ = await getEntity(new types.PeerUser({ user_id: callbackQuery.user_id }));
    if (!user_) {
        UNREACHABLE();
    }
    const user = constructUser(user_);
    const id = String(callbackQuery.query_id);
    const gameShortName = callbackQuery.game_short_name;
    const data = callbackQuery.data !== undefined ? new TextDecoder().decode(callbackQuery.data) : undefined;
    const chatInstance = callbackQuery.chat_instance == 0n ? "" : String(callbackQuery.chat_instance);
    if (callbackQuery instanceof types.UpdateBotCallbackQuery) {
        const message = await getMessage(peerToChatId(callbackQuery.peer), Number(callbackQuery.msg_id));
        if (message == null) {
            UNREACHABLE();
        }
        return cleanObject({ id, from: user, message, chatInstance, data, gameShortName });
    }
    else {
        return cleanObject({ id, from: user, inlineMessageId: base64EncodeUrlSafe(callbackQuery.msg_id[serialize]()), chatInstance, data, gameShortName });
    }
}
