"use strict";
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructGame = constructGame;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _file_id_js_1 = require("./_file_id.js");
const _1_animation_js_1 = require("./1_animation.js");
const _1_photo_js_1 = require("./1_photo.js");
function constructGame(media_) {
    const game_ = media_.game;
    const document_ = game_.document ? (0, _2_tl_js_1.as)("document", game_.document) : undefined;
    const fileId_ = document_
        ? {
            type: _file_id_js_1.FileType.Animation,
            dcId: document_.dc_id,
            fileReference: document_.file_reference,
            location: { type: "common", id: document_.id, accessHash: document_.access_hash },
        }
        : undefined;
    return (0, _1_utilities_js_1.cleanObject)({
        title: game_.title,
        description: media_.game.description,
        photo: (0, _1_photo_js_1.constructPhoto)((0, _2_tl_js_1.as)("photo", game_.photo)),
        animation: fileId_ && document_
            ? (0, _1_animation_js_1.constructAnimation)(document_, document_.attributes.find((v) => (0, _2_tl_js_1.is)("documentAttributeVideo", v)), document_.attributes.find((v) => (0, _2_tl_js_1.is)("documentAttributeFilename", v)), (0, _file_id_js_1.serializeFileId)(fileId_), (0, _file_id_js_1.toUniqueFileId)(fileId_))
            : undefined,
    });
}
