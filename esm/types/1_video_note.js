import { types } from "../2_tl.js";
import { constructThumbnail } from "./0_thumbnail.js";
export function constructVideoNote(document, videoAttribute, fileId, fileUniqueId) {
    return {
        fileId,
        fileUniqueId,
        length: videoAttribute.w,
        duration: videoAttribute.duration,
        thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) : [],
        fileSize: Number(document.size),
    };
}
