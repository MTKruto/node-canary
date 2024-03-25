import { types } from "../2_tl.js";
import { constructThumbnail } from "./0_thumbnail.js";
export function constructVideo(document, videoAttribute, fileName, fileId, fileUniqueId) {
    return {
        fileId,
        fileUniqueId,
        width: videoAttribute.w,
        height: videoAttribute.h,
        duration: videoAttribute.duration,
        thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) : [],
        fileName,
        mimeType: document.mime_type,
        fileSize: Number(document.size),
    };
}
