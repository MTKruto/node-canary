import { types } from "../2_tl.js";
import { PhotoSourceType } from "./_file_id.js";
import { FileType, serializeFileId, toUniqueFileId } from "./_file_id.js";
import { constructThumbnail } from "./0_thumbnail.js";
export function constructPhoto(photo) {
    const sizes = photo.sizes
        .map((v) => {
        if (v instanceof types.PhotoSizeProgressive) {
            return new types.PhotoSize({ type: v.type, w: v.w, h: v.h, size: Math.max(...v.sizes) });
        }
        else {
            return v;
        }
    })
        .filter((v) => v instanceof types.PhotoSize)
        .sort((a, b) => a.size - b.size);
    const largest = sizes.slice(-1)[0];
    const { dc_id: dcId, id, access_hash: accessHash, file_reference: fileReference } = photo;
    const fileId_ = {
        type: FileType.Photo,
        dcId,
        fileReference,
        location: {
            type: "photo",
            id,
            accessHash,
            source: {
                type: PhotoSourceType.Thumbnail,
                fileType: FileType.Photo,
                thumbnailType: largest.type.charCodeAt(0),
            },
        },
    };
    return {
        fileId: serializeFileId(fileId_),
        fileUniqueId: toUniqueFileId(fileId_),
        width: largest.w,
        height: largest.h,
        fileSize: largest.size,
        thumbnails: sizes.slice(0, -1).map((v) => constructThumbnail(v, photo)),
    };
}
