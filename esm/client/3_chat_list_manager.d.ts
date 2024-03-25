import { enums, types } from "../2_tl.js";
import { Chat, ID } from "../3_types.js";
import { C as C_ } from "./0_types.js";
import { FileManager } from "./1_file_manager.js";
import { MessageManager } from "./2_message_manager.js";
type C = C_ & {
    fileManager: FileManager;
    messageManager: MessageManager;
};
type ChatListManagerUpdate = types.UpdateNewMessage | types.UpdateNewChannelMessage | types.UpdatePinnedDialogs | types.UpdateFolderPeers | types.UpdateChannel | types.UpdateChat | types.UpdateUser | types.UpdateUserName;
export declare class ChatListManager {
    #private;
    constructor(c: C);
    reassignChatLastMessage(chatId: number, add?: boolean, sendUpdate?: boolean): Promise<() => Promise<void>>;
    getChats(from?: "archived" | "main", after?: Chat, limit?: number): Promise<Chat[]>;
    static canHandleUpdate(update: enums.Update): update is ChatListManagerUpdate;
    handleUpdate(update: ChatListManagerUpdate): Promise<void>;
    getChat(chatId: ID): Promise<Chat>;
}
export {};
