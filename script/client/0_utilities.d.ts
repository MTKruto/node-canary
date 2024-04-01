import { FileSource } from "../3_types.js";
export declare const resolve: () => Promise<void>;
export declare function getFileContents(source: FileSource, fileName?: string): Promise<readonly [Uint8Array, string]>;
export declare function isHttpUrl(string: string): boolean;
export declare function getUsername(string: string): string;
export declare function getChatListId(chatList: string): 0 | 1;
