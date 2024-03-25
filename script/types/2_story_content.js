"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructStoryContent = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0__file_id_js_1 = require("./0__file_id.js");
const _1_photo_js_1 = require("./1_photo.js");
const _1_video_js_1 = require("./1_video.js");
function constructStoryContent(media) {
    if (media instanceof _2_tl_js_1.types.MessageMediaPhoto) {
        if (!media.photo) {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
        const photo = (0, _1_photo_js_1.constructPhoto)(media.photo[_2_tl_js_1.as](_2_tl_js_1.types.Photo));
        return { photo };
    }
    else if (media instanceof _2_tl_js_1.types.MessageMediaDocument) {
        const document = media.document;
        if (!(document instanceof _2_tl_js_1.types.Document)) {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
        const video = document.attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeVideo);
        if (!video) {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
        const fileId_ = { type: _0__file_id_js_1.FileType.Video, dcId: document.dc_id, fileReference: document.file_reference, location: { type: "common", id: document.id, accessHash: document.access_hash } };
        const fileUniqueId = (0, _0__file_id_js_1.toUniqueFileId)(fileId_);
        const fileId = (0, _0__file_id_js_1.serializeFileId)(fileId_);
        const video_ = (0, _1_video_js_1.constructVideo)(document, video, undefined, fileId, fileUniqueId);
        return { video: video_ };
    }
    else {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.constructStoryContent = constructStoryContent;
