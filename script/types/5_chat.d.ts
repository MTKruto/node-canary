import { enums, types } from "../2_tl.js";
import { ChatPhotoChat, ChatPhotoUser } from "./0_chat_photo.js";
import { EntityGetter } from "./1__getters.js";
import { ChatPChannel, ChatPGroup, ChatPPrivate, ChatPSupergroup } from "./1_chat_p.js";
import { StickerSetNameGetter } from "./1_sticker.js";
import { Message, MessageGetter } from "./4_message.js";
/** @unlisted */
export interface _ChatBase {
    order: string;
    lastMessage?: Omit<Message, "replyToMessage">;
    pinned: number;
}
/** @unlisted */
export interface ChatChannel extends _ChatBase, ChatPChannel {
    also?: string[];
    photo?: ChatPhotoChat;
}
/** @unlisted */
export interface ChatSupergroup extends _ChatBase, ChatPSupergroup {
    also?: string[];
    photo?: ChatPhotoChat;
}
/** @unlisted */
export interface ChatGroup extends _ChatBase, ChatPGroup {
    photo?: ChatPhotoChat;
}
/** @unlisted */
export interface ChatPrivate extends _ChatBase, ChatPPrivate {
    also?: string[];
    photo?: ChatPhotoUser;
}
/**
 * A chat with more fields.
 */
export type Chat = ChatChannel | ChatSupergroup | ChatGroup | ChatPrivate;
export declare function getChatOrder(lastMessage: Omit<Message, "replyToMessage"> | undefined, pinned: number): string;
export declare function constructChat(dialog: enums.Dialog, dialogs: types.messages.Dialogs | types.messages.DialogsSlice, pinnedChats: number[], getEntity: EntityGetter, getMessage: MessageGetter, getStickerSetName: StickerSetNameGetter): Promise<Chat>;
export declare function constructChat2(entity: types.User | types.Chat | types.ChatForbidden | types.Channel | types.ChannelForbidden, pinned: number, lastMessage: Omit<Message, "replyToMessage"> | undefined): Chat;
export declare function constructChat3(chatId: number, pinned: number, lastMessage: Omit<Message, "replyToMessage"> | undefined, getEntity: EntityGetter): Promise<Chat | null>;
export declare function constructChat4(chatId: number, pinned: number, lastMessageId: number, getEntity: EntityGetter, getMessage: MessageGetter): Promise<Chat | null>;
