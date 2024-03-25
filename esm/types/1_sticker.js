import { cleanObject } from "../1_utilities.js";
import { types } from "../2_tl.js";
import { constructMaskPosition } from "./0_mask_position.js";
import { constructThumbnail } from "./0_thumbnail.js";
export async function constructSticker(document, fileId, fileUniqueId, getStickerSetName, customEmojiId = "") {
    const stickerAttribute = document.attributes.find((v) => v instanceof types.DocumentAttributeSticker);
    const imageSizeAttribute = document.attributes.find((v) => v instanceof types.DocumentAttributeImageSize);
    const customEmojiAttribute = document.attributes.find((v) => v instanceof types.DocumentAttributeCustomEmoji);
    const videoAttribute = document.attributes.find((v) => v instanceof types.DocumentAttributeVideo);
    const setName = stickerAttribute.stickerset instanceof types.InputStickerSetID ? await getStickerSetName(stickerAttribute.stickerset) : undefined;
    return cleanObject({
        fileId,
        fileUniqueId,
        type: customEmojiAttribute ? "customEmoji" : stickerAttribute.mask ? "mask" : "regular",
        width: imageSizeAttribute ? imageSizeAttribute.w : videoAttribute ? videoAttribute.w : 512,
        height: imageSizeAttribute ? imageSizeAttribute.h : videoAttribute ? videoAttribute.h : 512,
        isAnimated: document.mime_type == "application/x-tgsticker",
        isVideo: document.mime_type == "video/webm",
        thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) : [],
        emoji: (customEmojiAttribute ? customEmojiAttribute.alt : stickerAttribute.alt) || undefined,
        setName,
        premiumAnimation: undefined,
        maskPosition: stickerAttribute.mask_coords ? constructMaskPosition(stickerAttribute.mask_coords) : undefined,
        customEmojiId: customEmojiAttribute ? customEmojiId : undefined,
        needsRepainting: customEmojiAttribute ? Boolean(customEmojiAttribute.text_color) : undefined,
        fileSize: Number(document.size),
    });
}