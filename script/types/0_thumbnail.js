"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructThumbnail = void 0;
const _2_tl_js_1 = require("../2_tl.js");
const _file_id_js_1 = require("./_file_id.js");
function constructThumbnail(size, file) {
    const type = file instanceof _2_tl_js_1.types.Photo ? _file_id_js_1.FileType.Photo : _file_id_js_1.FileType.Thumbnail;
    const fileType = file instanceof _2_tl_js_1.types.Photo ? _file_id_js_1.FileType.Photo : _file_id_js_1.FileType.Document;
    const fileId_ = {
        type,
        dcId: file.dc_id,
        fileReference: file.file_reference,
        location: { type: "photo", id: file.id, accessHash: file.access_hash, source: { type: _file_id_js_1.PhotoSourceType.Thumbnail, fileType, thumbnailType: size.type.charCodeAt(0) } },
    };
    return {
        fileId: (0, _file_id_js_1.serializeFileId)(fileId_),
        fileUniqueId: (0, _file_id_js_1.toUniqueFileId)(fileId_),
        width: size.w,
        height: size.h,
        fileSize: size.size,
    };
}
exports.constructThumbnail = constructThumbnail;
