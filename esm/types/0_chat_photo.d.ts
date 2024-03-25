import { types } from "../2_tl.js";
/** @unlisted */
export interface _ChatPhotoBase {
    /** A file identifier that can be used to download or reuse the small version of the chat photo (160x160). */
    smallFileId: string;
    /** A file identifier that can be used to identify the small version of the chat photo (160x160). */
    smallFileUniqueId: string;
    /** A file identifier that can be used to download or reuse the big version of the chat photo (640x640). */
    bigFileId: string;
    /** A file identifier that can be used to identify the big version of the chat photo (640x640). */
    bigFileUniqueId: string;
    /** Whether the chat photo is animated. */
    hasVideo: boolean;
}
/** @unlisted */
export interface ChatPhotoUser extends _ChatPhotoBase {
    /** Differentiates between user profile photos. */
    personal: true;
}
/** @unlisted */
export type ChatPhotoChat = _ChatPhotoBase;
/** A chat photo. */
export type ChatPhoto = ChatPhotoUser | ChatPhotoChat;
export declare function constructChatPhoto(photo: types.ChatPhoto, chatId: number, chatAccessHash: bigint): ChatPhotoChat;
export declare function constructChatPhoto(photo: types.UserProfilePhoto, chatId: number, chatAccessHash: bigint): ChatPhotoUser;
