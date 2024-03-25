"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructVoice = void 0;
function constructVoice(document, audioAttributes, fileId, fileUniqueId) {
    return {
        fileId,
        fileUniqueId,
        duration: audioAttributes.duration,
        mimeType: document.mime_type,
        fileSize: Number(document.size),
    };
}
exports.constructVoice = constructVoice;
