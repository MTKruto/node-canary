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
