import { enums, types } from "../2_tl.js";
import { FileSource } from "../3_types.js";
export declare const resolve: () => Promise<void>;
export declare function isPtsUpdate(v: enums.Update): v is types.UpdateNewMessage | types.UpdateDeleteMessages | types.UpdateReadHistoryInbox | types.UpdateReadHistoryOutbox | types.UpdatePinnedChannelMessages | types.UpdatePinnedMessages | types.UpdateFolderPeers | types.UpdateChannelWebPage | types.UpdateEditMessage | types.UpdateReadMessagesContents | types.UpdateWebPage;
export declare function isChannelPtsUpdate(v: enums.Update | enums.Updates): v is types.UpdateNewChannelMessage | types.UpdateEditChannelMessage | types.UpdateDeleteChannelMessages | types.UpdateChannelTooLong;
export declare function getFileContents(source: FileSource, fileName?: string): Promise<readonly [Uint8Array, string]>;
export declare function isHttpUrl(string: string): boolean;
export declare function getUsername(string: string): string;
export declare function getChatListId(chatList: string): 0 | 1;
