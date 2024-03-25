"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructLinkPreview = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
function constructLinkPreview(media, invert) {
    return (0, _1_utilities_js_1.cleanObject)({
        url: "url" in media.webpage ? media.webpage.url : undefined,
        smallMedia: media.force_small_media ? true : undefined,
        largeMedia: media.force_large_media ? true : undefined,
        putAboveText: !!invert,
    });
}
exports.constructLinkPreview = constructLinkPreview;
