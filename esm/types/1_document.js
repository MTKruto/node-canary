import { types } from "../2_tl.js";
import { constructThumbnail } from "./0_thumbnail.js";
export function constructDocument(document, fileNameAttribute, fileId, fileUniqueId) {
    return {
        fileId,
        fileUniqueId,
        thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof types.PhotoSize ? constructThumbnail(v, document) : null).filter((v) => v) : [],
        fileName: fileNameAttribute.file_name,
        mimeType: document.mime_type,
        fileSize: Number(document.size),
    };
}
