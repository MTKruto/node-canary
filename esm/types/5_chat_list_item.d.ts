import { enums, types } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { ChatP } from "./1_chat_p.js";
import { StickerSetNameGetter } from "./1_sticker.js";
import { Message, MessageGetter } from "./4_message.js";
export interface ChatListItem {
    chat: ChatP;
    order: string;
    pinned: number;
    lastMessage?: Omit<Message, "replyToMessage">;
}
export declare function getChatListItemOrder(lastMessage: Omit<Message, "replyToMessage"> | undefined, pinned: number): string;
export declare function constructChatListItem(chatId: number, pinned: number, lastMessageId: number, getEntity: EntityGetter, getMessage: MessageGetter): Promise<ChatListItem | null>;
export declare function constructChatListItem2(entity: types.User | types.Chat | types.ChatForbidden | types.Channel | types.ChannelForbidden, pinned: number, lastMessage: Omit<Message, "replyToMessage"> | undefined): ChatListItem;
export declare function constructChatListItem3(chatId: number, pinned: number, lastMessage: Omit<Message, "replyToMessage"> | undefined, getEntity: EntityGetter): Promise<ChatListItem | null>;
export declare function constructChatListItem4(dialog: enums.Dialog, dialogs: types.messages.Dialogs | types.messages.DialogsSlice, pinnedChats: number[], getEntity: EntityGetter, getMessage: MessageGetter, getStickerSetName: StickerSetNameGetter): Promise<ChatListItem>;
