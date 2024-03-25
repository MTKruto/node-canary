"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructVideoNote = void 0;
const _2_tl_js_1 = require("../2_tl.js");
const _0_thumbnail_js_1 = require("./0_thumbnail.js");
function constructVideoNote(document, videoAttribute, fileId, fileUniqueId) {
    return {
        fileId,
        fileUniqueId,
        length: videoAttribute.w,
        duration: videoAttribute.duration,
        thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof _2_tl_js_1.types.PhotoSize ? (0, _0_thumbnail_js_1.constructThumbnail)(v, document) : null).filter((v) => v) : [],
        fileSize: Number(document.size),
    };
}
exports.constructVideoNote = constructVideoNote;
