import { types } from "../2_tl.js";
import { constructThumbnail } from "./0_thumbnail.js";
export function constructAudio(document, audioAttribute, fileId, fileUniqueId) {
    return {
        fileId,
        fileUniqueId,
        duration: audioAttribute?.duration ?? 0,
        performer: audioAttribute?.performer,
        title: audioAttribute?.title,
        mimeType: document.mime_type,
        fileSize: Number(document.size),
        thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) : [],
    };
}
