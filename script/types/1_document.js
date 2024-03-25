"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructDocument = void 0;
const _2_tl_js_1 = require("../2_tl.js");
const _0_thumbnail_js_1 = require("./0_thumbnail.js");
function constructDocument(document, fileNameAttribute, fileId, fileUniqueId) {
    return {
        fileId,
        fileUniqueId,
        thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof _2_tl_js_1.types.PhotoSize ? (0, _0_thumbnail_js_1.constructThumbnail)(v, document) : null).filter((v) => v) : [],
        fileName: fileNameAttribute.file_name,
        mimeType: document.mime_type,
        fileSize: Number(document.size),
    };
}
exports.constructDocument = constructDocument;
