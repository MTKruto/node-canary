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
import { cleanObject } from "../1_utilities.js";
import { Api } from "../2_tl.js";
import { constructThumbnail } from "./0_thumbnail.js";
export function constructAnimation(document, videoAttribute, fileAttribute, fileId, fileUniqueId) {
    return cleanObject({
        fileId,
        fileUniqueId,
        width: videoAttribute?.w ?? 0,
        height: videoAttribute?.h ?? 0,
        duration: videoAttribute?.duration ?? 0,
        thumbnails: document.thumbs ? document.thumbs.map((v) => Api.is("photoSize", v) ? constructThumbnail(v, document) : null).filter((v) => v) : [],
        fileName: fileAttribute?.file_name,
        mimeType: document.mime_type,
        fileSize: Number(document.size),
    });
}
