export declare enum FileType {
    Thumbnail = 0,
    ProfilePhoto = 1,
    Photo = 2,
    VoiceNote = 3,
    Video = 4,
    Document = 5,
    Encrypted = 6,
    Temp = 7,
    Sticker = 8,
    Audio = 9,
    Animation = 10,
    EncryptedThumbnail = 11,
    Wallpaper = 12,
    VideoNote = 13,
    SecureDecrypted = 14,
    SecureEncrypted = 15,
    Background = 16,
    DocumentAsFile = 17,
    Ringtone = 18,
    CallLog = 19,
    PhotoStory = 20,
    VideoStory = 21,
    Size = 22,
    None = 23
}
export declare enum PhotoSourceType {
    Legacy = 0,
    Thumbnail = 1,
    ChatPhotoSmall = 2,
    ChatPhotoBig = 3,
    StickerSetThumbnail = 4,
    FullLegacy = 5,
    ChatPhotoSmallLegacy = 6,
    ChatPhotoBigLegacy = 7,
    StickerSetThumbnailLegacy = 8,
    StickerSetThumbnailVersion = 9
}
type PhotoSource = {
    type: PhotoSourceType.Legacy;
    secret: bigint;
} | {
    type: PhotoSourceType.Thumbnail;
    fileType: FileType;
    thumbnailType: number;
} | {
    type: PhotoSourceType.ChatPhotoSmall;
    chatId: bigint;
    chatAccessHash: bigint;
} | {
    type: PhotoSourceType.ChatPhotoBig;
    chatId: bigint;
    chatAccessHash: bigint;
} | {
    type: PhotoSourceType.StickerSetThumbnail;
    stickerSetId: bigint;
    stickerSetAccessHash: bigint;
} | {
    type: PhotoSourceType.FullLegacy;
    volumeId: bigint;
    localId: number;
    secret: bigint;
} | {
    type: PhotoSourceType.ChatPhotoSmallLegacy;
    volumeId: bigint;
    localId: number;
} | {
    type: PhotoSourceType.ChatPhotoBigLegacy;
    volumeId: bigint;
    localId: number;
} | {
    type: PhotoSourceType.StickerSetThumbnailLegacy;
    volumeId: bigint;
    localId: number;
} | {
    type: PhotoSourceType.StickerSetThumbnailVersion;
    version: number;
};
type FileLocation = {
    type: "web";
    url: string;
    accessHash: bigint;
} | {
    type: "photo";
    id: bigint;
    accessHash: bigint;
    source: PhotoSource;
} | {
    type: "common";
    id: bigint;
    accessHash: bigint;
};
export interface FileId {
    type: FileType;
    dcId: number;
    fileReference?: Uint8Array;
    location: FileLocation;
}
export declare function deserializeFileId(fileId: string): FileId;
export declare function serializeFileId(fileId: FileId): string;
export declare function toUniqueFileId(fileId: FileId): string;
export {};
