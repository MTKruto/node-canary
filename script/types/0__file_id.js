"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUniqueFileId = exports.serializeFileId = exports.deserializeFileId = exports.PhotoSourceType = exports.FileType = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const NEXT_VERSION = 53;
const PERSISTENT_ID_VERSION = 4;
const WEB_LOCATION_FLAG = 1 << 24;
const FILE_REFERENCE_FLAG = 1 << 25;
var FileType;
(function (FileType) {
    FileType[FileType["Thumbnail"] = 0] = "Thumbnail";
    FileType[FileType["ProfilePhoto"] = 1] = "ProfilePhoto";
    FileType[FileType["Photo"] = 2] = "Photo";
    FileType[FileType["VoiceNote"] = 3] = "VoiceNote";
    FileType[FileType["Video"] = 4] = "Video";
    FileType[FileType["Document"] = 5] = "Document";
    FileType[FileType["Encrypted"] = 6] = "Encrypted";
    FileType[FileType["Temp"] = 7] = "Temp";
    FileType[FileType["Sticker"] = 8] = "Sticker";
    FileType[FileType["Audio"] = 9] = "Audio";
    FileType[FileType["Animation"] = 10] = "Animation";
    FileType[FileType["EncryptedThumbnail"] = 11] = "EncryptedThumbnail";
    FileType[FileType["Wallpaper"] = 12] = "Wallpaper";
    FileType[FileType["VideoNote"] = 13] = "VideoNote";
    FileType[FileType["SecureDecrypted"] = 14] = "SecureDecrypted";
    FileType[FileType["SecureEncrypted"] = 15] = "SecureEncrypted";
    FileType[FileType["Background"] = 16] = "Background";
    FileType[FileType["DocumentAsFile"] = 17] = "DocumentAsFile";
    FileType[FileType["Ringtone"] = 18] = "Ringtone";
    FileType[FileType["CallLog"] = 19] = "CallLog";
    FileType[FileType["PhotoStory"] = 20] = "PhotoStory";
    FileType[FileType["VideoStory"] = 21] = "VideoStory";
    FileType[FileType["Size"] = 22] = "Size";
    FileType[FileType["None"] = 23] = "None";
})(FileType || (exports.FileType = FileType = {}));
var FileTypeClass;
(function (FileTypeClass) {
    FileTypeClass[FileTypeClass["Photo"] = 0] = "Photo";
    FileTypeClass[FileTypeClass["Document"] = 1] = "Document";
    FileTypeClass[FileTypeClass["Secure"] = 2] = "Secure";
    FileTypeClass[FileTypeClass["Encrypted"] = 3] = "Encrypted";
    FileTypeClass[FileTypeClass["Temp"] = 4] = "Temp";
})(FileTypeClass || (FileTypeClass = {}));
var PhotoSourceType;
(function (PhotoSourceType) {
    PhotoSourceType[PhotoSourceType["Legacy"] = 0] = "Legacy";
    PhotoSourceType[PhotoSourceType["Thumbnail"] = 1] = "Thumbnail";
    PhotoSourceType[PhotoSourceType["ChatPhotoSmall"] = 2] = "ChatPhotoSmall";
    PhotoSourceType[PhotoSourceType["ChatPhotoBig"] = 3] = "ChatPhotoBig";
    PhotoSourceType[PhotoSourceType["StickerSetThumbnail"] = 4] = "StickerSetThumbnail";
    PhotoSourceType[PhotoSourceType["FullLegacy"] = 5] = "FullLegacy";
    PhotoSourceType[PhotoSourceType["ChatPhotoSmallLegacy"] = 6] = "ChatPhotoSmallLegacy";
    PhotoSourceType[PhotoSourceType["ChatPhotoBigLegacy"] = 7] = "ChatPhotoBigLegacy";
    PhotoSourceType[PhotoSourceType["StickerSetThumbnailLegacy"] = 8] = "StickerSetThumbnailLegacy";
    PhotoSourceType[PhotoSourceType["StickerSetThumbnailVersion"] = 9] = "StickerSetThumbnailVersion";
})(PhotoSourceType || (exports.PhotoSourceType = PhotoSourceType = {}));
function deserializePhotoSource(reader) {
    const type = reader.readInt32();
    switch (type) {
        case PhotoSourceType.Legacy:
            return { type, secret: reader.readInt64() };
        case PhotoSourceType.Thumbnail:
            return { type, fileType: reader.readInt32(), thumbnailType: reader.readInt32() };
        case PhotoSourceType.ChatPhotoSmall:
        case PhotoSourceType.ChatPhotoBig: {
            const chatId = reader.readInt64();
            const chatAccessHash = reader.readInt64();
            return { type, chatId, chatAccessHash };
        }
        case PhotoSourceType.StickerSetThumbnail: {
            const stickerSetId = reader.readInt64();
            const stickerSetAccessHash = reader.readInt64();
            return { type, stickerSetId, stickerSetAccessHash };
        }
        case PhotoSourceType.FullLegacy: {
            const volumeId = reader.readInt64();
            const localId = reader.readInt32();
            const secret = reader.readInt64();
            return { type, volumeId, localId, secret };
        }
        case PhotoSourceType.ChatPhotoSmallLegacy:
        case PhotoSourceType.ChatPhotoBigLegacy:
        case PhotoSourceType.StickerSetThumbnailLegacy: {
            const volumeId = reader.readInt64();
            const localId = reader.readInt32();
            return { type, volumeId, localId };
        }
        case PhotoSourceType.StickerSetThumbnailVersion:
            return { type, version: reader.readInt32() };
    }
}
function serializePhotoSource(photoSource, writer) {
    writer.writeInt32(photoSource.type);
    switch (photoSource.type) {
        case PhotoSourceType.Legacy:
            writer.writeInt64(photoSource.secret);
            break;
        case PhotoSourceType.Thumbnail:
            writer.writeInt32(photoSource.fileType);
            writer.writeInt32(photoSource.thumbnailType);
            break;
        case PhotoSourceType.ChatPhotoSmall:
        case PhotoSourceType.ChatPhotoBig:
            writer.writeInt64(photoSource.chatId);
            writer.writeInt64(photoSource.chatAccessHash);
            break;
        case PhotoSourceType.StickerSetThumbnail:
            writer.writeInt64(photoSource.stickerSetId);
            writer.writeInt64(photoSource.stickerSetAccessHash);
            break;
        case PhotoSourceType.FullLegacy:
            writer.writeInt64(photoSource.volumeId);
            writer.writeInt32(photoSource.localId);
            writer.writeInt64(photoSource.secret);
            break;
        case PhotoSourceType.ChatPhotoSmallLegacy:
        case PhotoSourceType.ChatPhotoBigLegacy:
        case PhotoSourceType.StickerSetThumbnailLegacy:
            writer.writeInt64(photoSource.volumeId);
            writer.writeInt32(photoSource.localId);
            break;
        case PhotoSourceType.StickerSetThumbnailVersion:
            writer.writeInt32(photoSource.version);
            break;
        default:
            (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
function getPhotoSourceCompareType(source) {
    switch (source.type) {
        case PhotoSourceType.Legacy:
            break;
        case PhotoSourceType.Thumbnail: {
            const type = source.thumbnailType;
            if (!(0 <= type && type <= 127)) {
                (0, _1_utilities_js_1.UNREACHABLE)();
            }
            if (type == "a".charCodeAt(0)) {
                return 0;
            }
            if (type == "c".charCodeAt(0)) {
                return 1;
            }
            return type + 5;
        }
        case PhotoSourceType.ChatPhotoSmall:
            return 0;
        case PhotoSourceType.ChatPhotoBig:
            return 1;
        case PhotoSourceType.StickerSetThumbnail:
            break;
        case PhotoSourceType.FullLegacy:
        case PhotoSourceType.ChatPhotoSmallLegacy:
        case PhotoSourceType.ChatPhotoBigLegacy:
        case PhotoSourceType.StickerSetThumbnailLegacy:
            return 3;
        case PhotoSourceType.StickerSetThumbnailVersion:
            return 2;
        default:
            break;
    }
    (0, _1_utilities_js_1.UNREACHABLE)();
}
function writePhotoSourceUniqueId(photoSource, writer) {
    const compareType = getPhotoSourceCompareType(photoSource);
    if (compareType != 2 && compareType != 3) {
        writer.write(new Uint8Array([compareType]));
        return;
    }
    if (compareType == 2) {
        writer.write(new Uint8Array([0x02]));
    }
    writer.writeInt64("volumeId" in photoSource ? photoSource.volumeId : "stickerSetId" in photoSource ? photoSource.stickerSetId : (0, _1_utilities_js_1.UNREACHABLE)());
    writer.writeInt32("localId" in photoSource ? photoSource.localId : "version" in photoSource ? photoSource.version : (0, _1_utilities_js_1.UNREACHABLE)());
}
function getFileTypeClass(fileType) {
    switch (fileType) {
        case FileType.Photo:
        case FileType.ProfilePhoto:
        case FileType.Thumbnail:
        case FileType.EncryptedThumbnail:
        case FileType.Wallpaper:
        case FileType.PhotoStory:
            return FileTypeClass.Photo;
        case FileType.Video:
        case FileType.VoiceNote:
        case FileType.Document:
        case FileType.Sticker:
        case FileType.Audio:
        case FileType.Animation:
        case FileType.VideoNote:
        case FileType.Background:
        case FileType.DocumentAsFile:
        case FileType.Ringtone:
        case FileType.CallLog:
        case FileType.VideoStory:
            return FileTypeClass.Document;
        case FileType.SecureDecrypted:
        case FileType.SecureEncrypted:
            return FileTypeClass.Secure;
        case FileType.Encrypted:
            return FileTypeClass.Encrypted;
        case FileType.Temp:
            return FileTypeClass.Temp;
        case FileType.None:
        case FileType.Size:
        default:
            (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
function isWeb(fileType) {
    return !!(fileType & WEB_LOCATION_FLAG);
}
function hasFileReference(fileType) {
    return !!(fileType & FILE_REFERENCE_FLAG);
}
function deserializeFileId(fileId) {
    const reader = new _2_tl_js_1.TLReader((0, _1_utilities_js_1.rleDecode)((0, _1_utilities_js_1.base64DecodeUrlSafe)(fileId)));
    if (reader.buffer[reader.buffer.length - 1] != PERSISTENT_ID_VERSION) {
        throw new Error("Unsupported version");
    }
    const originalType = reader.readInt32();
    const type = ((originalType & ~WEB_LOCATION_FLAG) & ~FILE_REFERENCE_FLAG);
    const dcId = reader.readInt32();
    if (isWeb(originalType)) {
        const url = reader.readString();
        const accessHash = reader.readInt64();
        return { type, dcId, location: { type: "web", url, accessHash } };
    }
    const fileReference = hasFileReference(originalType) ? reader.readBytes() : undefined;
    const id = reader.readInt64();
    const accessHash = reader.readInt64();
    if (getFileTypeClass(type) == FileTypeClass.Photo) {
        const source = deserializePhotoSource(reader);
        return { type, dcId, fileReference, location: { type: "photo", id, accessHash, source } };
    }
    else {
        return { type, dcId, fileReference, location: { type: "common", id, accessHash } };
    }
}
exports.deserializeFileId = deserializeFileId;
function serializeFileId(fileId) {
    const writer = new _2_tl_js_1.TLWriter();
    let type = fileId.type;
    if (fileId.fileReference) {
        type |= FILE_REFERENCE_FLAG;
    }
    if (fileId.location.type == "web") {
        type |= WEB_LOCATION_FLAG;
    }
    writer.writeInt32(type);
    writer.writeInt32(fileId.dcId);
    if (fileId.location.type == "web") {
        writer.writeString(fileId.location.url);
        writer.writeInt64(fileId.location.accessHash);
    }
    else {
        if (fileId.fileReference) {
            writer.writeBytes(fileId.fileReference);
        }
        writer.writeInt64(fileId.location.id);
        writer.writeInt64(fileId.location.accessHash);
        if (fileId.location.type == "photo") {
            serializePhotoSource(fileId.location.source, writer);
        }
    }
    writer.write(new Uint8Array([NEXT_VERSION - 1, PERSISTENT_ID_VERSION]));
    return (0, _1_utilities_js_1.base64EncodeUrlSafe)((0, _1_utilities_js_1.rleEncode)(writer.buffer));
}
exports.serializeFileId = serializeFileId;
function toUniqueFileId(fileId) {
    const writer = new _2_tl_js_1.TLWriter();
    const type = fileId.location.type == "web" ? 0 : (getFileTypeClass(fileId.type) + 1);
    writer.writeInt32(type);
    if (fileId.location.type == "web") {
        writer.writeString(fileId.location.url);
    }
    else if (fileId.location.type == "common") {
        writer.writeInt64(fileId.location.id);
    }
    else {
        switch (fileId.location.source.type) {
            case PhotoSourceType.Legacy:
            case PhotoSourceType.StickerSetThumbnail:
                (0, _1_utilities_js_1.UNREACHABLE)();
            /* falls through */
            case PhotoSourceType.FullLegacy:
            case PhotoSourceType.ChatPhotoSmallLegacy:
            case PhotoSourceType.ChatPhotoBigLegacy:
            case PhotoSourceType.StickerSetThumbnailLegacy:
                writer.writeInt64(fileId.location.id);
                writePhotoSourceUniqueId(fileId.location.source, writer);
                break;
            case PhotoSourceType.ChatPhotoSmall:
            case PhotoSourceType.ChatPhotoBig:
            case PhotoSourceType.Thumbnail:
                writer.writeInt64(fileId.location.id);
                writePhotoSourceUniqueId(fileId.location.source, writer);
                break;
            case PhotoSourceType.StickerSetThumbnailVersion:
                writePhotoSourceUniqueId(fileId.location.source, writer);
                break;
        }
    }
    return (0, _1_utilities_js_1.base64EncodeUrlSafe)((0, _1_utilities_js_1.rleEncode)(writer.buffer));
}
exports.toUniqueFileId = toUniqueFileId;
