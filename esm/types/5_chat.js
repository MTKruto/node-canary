import { cleanObject, UNREACHABLE } from "../1_utilities.js";
import { chatIdToPeer, peerToChatId, types } from "../2_tl.js";
import { constructChatPhoto } from "./0_chat_photo.js";
import { constructChatP } from "./1_chat_p.js";
import { constructMessage } from "./4_message.js";
function getChatPAlsoPhoto(entity) {
    let chatP;
    let also = undefined;
    if (entity instanceof types.User) {
        chatP = constructChatP(entity);
        also = "usernames" in entity ? entity.usernames?.map((v) => v.username).filter((v) => v != ("username" in chatP ? chatP.username : "")) : undefined;
    }
    else if (entity instanceof types.Chat) {
        chatP = constructChatP(entity);
    }
    else if (entity instanceof types.Channel) {
        chatP = constructChatP(entity);
        also = "usernames" in entity ? entity.usernames?.map((v) => v.username).filter((v) => v != ("username" in chatP ? chatP.username : "")) : undefined;
    }
    else {
        UNREACHABLE();
    }
    let photo = undefined;
    if (entity.photo instanceof types.UserProfilePhoto) {
        photo = constructChatPhoto(entity.photo, chatP.id, "access_hash" in entity ? entity.access_hash ?? 0n : 0n);
    }
    else if (entity.photo instanceof types.ChatPhoto) {
        photo = constructChatPhoto(entity.photo, chatP.id, "access_hash" in entity ? entity.access_hash ?? 0n : 0n);
    }
    return { chatP, also, photo };
}
export function getChatOrder(lastMessage, pinned) {
    const p = pinned == -1 ? "" : `P${100 - pinned}`;
    if (!lastMessage) {
        return p + "0";
    }
    return p + String((BigInt(Math.floor(lastMessage.date.getTime())) << 32n) + BigInt(lastMessage.id));
}
export async function constructChat(dialog, dialogs, pinnedChats, getEntity, getMessage, getStickerSetName) {
    const topMessage_ = dialogs.messages.find((v) => "id" in v && v.id == dialog.top_message);
    if (!topMessage_) {
        UNREACHABLE();
    }
    const pinned = pinnedChats.indexOf(peerToChatId(dialog.peer));
    const lastMessage = await constructMessage(topMessage_, getEntity, getMessage, getStickerSetName, false);
    const order = getChatOrder(lastMessage, pinned);
    const userId = "user_id" in dialog.peer ? dialog.peer.user_id : null;
    const chatId = "chat_id" in dialog.peer ? dialog.peer.chat_id : null;
    const channelId = "channel_id" in dialog.peer ? dialog.peer.channel_id : null;
    const chat__ = chatId != null ? dialogs.chats.find((v) => v instanceof types.Chat && v.id == chatId) : channelId != null ? dialogs.chats.find((v) => v instanceof types.Channel && v.id == channelId) : userId != null ? dialogs.users.find((v) => v instanceof types.User && v.id == userId) : UNREACHABLE();
    if (!chat__) {
        UNREACHABLE();
    }
    const chat_ = chat__;
    const { chatP, also, photo } = getChatPAlsoPhoto(chat_);
    if (chatP.type == "group") {
        return cleanObject({ ...chatP, order, lastMessage, photo, pinned });
    }
    else if (chatP.type == "supergroup") {
        return cleanObject({ ...chatP, order, lastMessage, also, photo, pinned });
    }
    else if (chatP.type == "channel") {
        return cleanObject({ ...chatP, order, lastMessage, also, photo, pinned });
    }
    else if (chatP.type == "private") {
        return cleanObject({ ...chatP, order, lastMessage, also, photo: photo, pinned });
    }
    else {
        UNREACHABLE();
    }
}
export function constructChat2(entity, pinned, lastMessage) {
    const chatPAlsoPhoto = getChatPAlsoPhoto(entity);
    const order = getChatOrder(lastMessage, pinned);
    const { also, photo, chatP } = chatPAlsoPhoto;
    if (chatP.type == "group") {
        return cleanObject({ ...chatP, order, lastMessage, photo, pinned });
    }
    else if (chatP.type == "supergroup") {
        return cleanObject({ ...chatP, order, lastMessage, also, photo, pinned });
    }
    else if (chatP.type == "channel") {
        return cleanObject({ ...chatP, order, lastMessage, also, photo, pinned });
    }
    else if (chatP.type == "private") {
        return cleanObject({ ...chatP, order, lastMessage, also, photo: photo, pinned });
    }
    else {
        UNREACHABLE();
    }
}
export async function constructChat3(chatId, pinned, lastMessage, getEntity) {
    const peer = chatIdToPeer(chatId);
    const entity = await getEntity(peer);
    if (entity == null) {
        return null;
    }
    else {
        return constructChat2(entity, pinned, lastMessage);
    }
}
export async function constructChat4(chatId, pinned, lastMessageId, getEntity, getMessage) {
    const lastMessage_ = lastMessageId > 0 ? await getMessage(chatId, lastMessageId) : null;
    const lastMessage = lastMessage_ == null ? undefined : lastMessage_;
    return await constructChat3(chatId, pinned, lastMessage, getEntity);
}
