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
exports.constructPhoto = constructPhoto;
exports.getPhotoSizes = getPhotoSizes;
const _2_tl_js_1 = require("../2_tl.js");
const _file_id_js_1 = require("./_file_id.js");
const _0_thumbnail_js_1 = require("./0_thumbnail.js");
function constructPhoto(photo) {
    const { sizes, largest } = getPhotoSizes(photo);
    return {
        ...(0, _file_id_js_1.getPhotoFileId)(photo),
        width: largest.w,
        height: largest.h,
        fileSize: largest.size,
        thumbnails: sizes.slice(0, -1).map((v) => (0, _0_thumbnail_js_1.constructThumbnail)(v, photo)),
    };
}
function getPhotoSizes(photo) {
    const sizes = photo.sizes
        .map((v) => {
        if (_2_tl_js_1.Api.is("photoSizeProgressive", v)) {
            return { _: "photoSize", type: v.type, w: v.w, h: v.h, size: Math.max(...v.sizes) };
        }
        else {
            return v;
        }
    })
        .filter((v) => _2_tl_js_1.Api.is("photoSize", v))
        .sort((a, b) => a.size - b.size);
    const largest = sizes.slice(-1)[0];
    return { sizes, largest };
}
