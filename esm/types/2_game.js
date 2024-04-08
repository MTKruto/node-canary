/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { cleanObject } from "../1_utilities.js";
import { as, types } from "../2_tl.js";
import { FileType, serializeFileId, toUniqueFileId } from "./_file_id.js";
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
