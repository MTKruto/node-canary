import { UNREACHABLE } from "../1_utilities.js";
import { as, types } from "../2_tl.js";
import { FileType, serializeFileId, toUniqueFileId } from "./_file_id.js";
import { constructPhoto } from "./1_photo.js";
import { constructVideo } from "./1_video.js";
export function constructStoryContent(media) {
    if (media instanceof types.MessageMediaPhoto) {
        if (!media.photo) {
            UNREACHABLE();
        }
        const photo = constructPhoto(media.photo[as](types.Photo));
        return { photo };
    }
    else if (media instanceof types.MessageMediaDocument) {
        const document = media.document;
        if (!(document instanceof types.Document)) {
            UNREACHABLE();
        }
        const video = document.attributes.find((v) => v instanceof types.DocumentAttributeVideo);
        if (!video) {
            UNREACHABLE();
        }
        const fileId_ = { type: FileType.Video, dcId: document.dc_id, fileReference: document.file_reference, location: { type: "common", id: document.id, accessHash: document.access_hash } };
        const fileUniqueId = toUniqueFileId(fileId_);
        const fileId = serializeFileId(fileId_);
        const video_ = constructVideo(document, video, undefined, fileId, fileUniqueId);
        return { video: video_ };
    }
    else {
        UNREACHABLE();
    }
}
