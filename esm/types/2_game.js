import { cleanObject } from "../1_utilities.js";
import { as, types } from "../2_tl.js";
import { FileType, serializeFileId, toUniqueFileId } from "./0__file_id.js";
import { constructAnimation } from "./1_animation.js";
import { constructPhoto } from "./1_photo.js";
export function constructGame(media_) {
    const game_ = media_.game;
    const document_ = game_.document ? game_.document[as](types.Document) : undefined;
    const fileId_ = document_
        ? {
            type: FileType.Animation,
            dcId: document_.dc_id,
            fileReference: document_.file_reference,
            location: { type: "common", id: document_.id, accessHash: document_.access_hash },
        }
        : undefined;
    return cleanObject({
        title: game_.title,
        description: media_.game.description,
        photo: constructPhoto(game_.photo[as](types.Photo)),
        animation: fileId_ && document_
            ? constructAnimation(document_, document_.attributes.find((v) => v instanceof types.DocumentAttributeVideo), document_.attributes.find((v) => v instanceof types.DocumentAttributeFilename), serializeFileId(fileId_), toUniqueFileId(fileId_))
            : undefined,
    });
}
