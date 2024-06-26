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
import { types } from "../2_tl.js";
import { getPhotoFileId } from "./_file_id.js";
import { constructThumbnail } from "./0_thumbnail.js";
export function constructPhoto(photo) {
    const { sizes, largest } = getPhotoSizes(photo);
    return {
        ...getPhotoFileId(photo),
        width: largest.w,
        height: largest.h,
        fileSize: largest.size,
        thumbnails: sizes.slice(0, -1).map((v) => constructThumbnail(v, photo)),
    };
}
export function getPhotoSizes(photo) {
    const sizes = photo.sizes
        .map((v) => {
        if (v instanceof types.PhotoSizeProgressive) {
            return new types.PhotoSize({ type: v.type, w: v.w, h: v.h, size: Math.max(...v.sizes) });
        }
        else {
            return v;
        }
    })
        .filter((v) => v instanceof types.PhotoSize)
        .sort((a, b) => a.size - b.size);
    const largest = sizes.slice(-1)[0];
    return { sizes, largest };
}
