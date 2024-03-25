import { types } from "../2_tl.js";
import { constructThumbnail } from "./0_thumbnail.js";
export function constructAnimation(document, videoAttribute, fileAttribute, fileId, fileUniqueId) {
    return {
        fileId,
        fileUniqueId,
        width: videoAttribute?.w ?? 0,
        height: videoAttribute?.h ?? 0,
        duration: videoAttribute?.duration ?? 0,
        thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) : [],
        fileName: fileAttribute?.file_name,
        mimeType: document.mime_type,
        fileSize: Number(document.size),
    };
}
