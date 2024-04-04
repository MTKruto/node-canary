"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructPhoto = void 0;
const _2_tl_js_1 = require("../2_tl.js");
const _file_id_js_1 = require("./_file_id.js");
const _file_id_js_2 = require("./_file_id.js");
const _0_thumbnail_js_1 = require("./0_thumbnail.js");
function constructPhoto(photo) {
    const sizes = photo.sizes
        .map((v) => {
        if (v instanceof _2_tl_js_1.types.PhotoSizeProgressive) {
            return new _2_tl_js_1.types.PhotoSize({ type: v.type, w: v.w, h: v.h, size: Math.max(...v.sizes) });
        }
        else {
            return v;
        }
    })
        .filter((v) => v instanceof _2_tl_js_1.types.PhotoSize)
        .sort((a, b) => a.size - b.size);
    const largest = sizes.slice(-1)[0];
    const { dc_id: dcId, id, access_hash: accessHash, file_reference: fileReference } = photo;
    const fileId_ = {
        type: _file_id_js_2.FileType.Photo,
        dcId,
        fileReference,
        location: {
            type: "photo",
            id,
            accessHash,
            source: {
                type: _file_id_js_1.PhotoSourceType.Thumbnail,
                fileType: _file_id_js_2.FileType.Photo,
                thumbnailType: largest.type.charCodeAt(0),
            },
        },
    };
    return {
        fileId: (0, _file_id_js_2.serializeFileId)(fileId_),
        fileUniqueId: (0, _file_id_js_2.toUniqueFileId)(fileId_),
        width: largest.w,
        height: largest.h,
        fileSize: largest.size,
        thumbnails: sizes.slice(0, -1).map((v) => (0, _0_thumbnail_js_1.constructThumbnail)(v, photo)),
    };
}
exports.constructPhoto = constructPhoto;
