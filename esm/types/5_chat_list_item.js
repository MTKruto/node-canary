import { unreachable } from "../0_deps.js";
import { chatIdToPeer, peerToChatId, types } from "../2_tl.js";
import { constructChatP } from "./1_chat_p.js";
import { constructMessage } from "./4_message.js";
export function getChatListItemOrder(lastMessage, pinned) {
    const p = pinned == -1 ? "" : `P${100 - pinned}`;
    if (!lastMessage) {
        return p + "0";
    }
    return p + String((BigInt(Math.floor(lastMessage.date.getTime())) << 32n) + BigInt(lastMessage.id));
}
export async function constructChatListItem(chatId, pinned, lastMessageId, getEntity, getMessage) {
    const entity = await getEntity(chatIdToPeer(chatId));
    if (entity == null) {
        return null;
    }
    const lastMessage_ = lastMessageId > 0 ? await getMessage(chatId, lastMessageId) : null;
    const lastMessage = lastMessage_ == null ? undefined : lastMessage_;
    return {
        chat: constructChatP(entity),
        order: getChatListItemOrder(lastMessage, pinned),
        pinned,
        lastMessage,
    };
}
export function constructChatListItem2(entity, pinned, lastMessage) {
    return {
        chat: constructChatP(entity),
        order: getChatListItemOrder(lastMessage, pinned),
        pinned,
        lastMessage,
    };
}
export async function constructChatListItem3(chatId, pinned, lastMessage, getEntity) {
    const entity = await getEntity(chatIdToPeer(chatId));
    if (entity == null) {
        return null;
    }
    return {
        chat: constructChatP(entity),
        order: getChatListItemOrder(lastMessage, pinned),
        pinned,
        lastMessage,
    };
}
export async function constructChatListItem4(dialog, dialogs, pinnedChats, getEntity, getMessage, getStickerSetName) {
    const topMessage_ = dialogs.messages.find((v) => "id" in v && v.id == dialog.top_message);
    if (!topMessage_) {
        unreachable();
    }
    const pinned = pinnedChats.indexOf(peerToChatId(dialog.peer));
    const lastMessage = await constructMessage(topMessage_, getEntity, getMessage, getStickerSetName, false);
    const order = getChatListItemOrder(lastMessage, pinned);
    const userId = "user_id" in dialog.peer ? dialog.peer.user_id : null;
    const chatId = "chat_id" in dialog.peer ? dialog.peer.chat_id : null;
    const channelId = "channel_id" in dialog.peer ? dialog.peer.channel_id : null;
    const chat__ = chatId != null ? dialogs.chats.find((v) => v instanceof types.Chat && v.id == chatId) : channelId != null ? dialogs.chats.find((v) => v instanceof types.Channel && v.id == channelId) : userId != null ? dialogs.users.find((v) => v instanceof types.User && v.id == userId) : unreachable();
    if (!chat__) {
        unreachable();
    }
    return {
        chat: constructChatP(chat__),
        order,
        lastMessage,
        pinned,
    };
}
