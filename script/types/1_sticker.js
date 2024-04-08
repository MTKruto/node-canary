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
exports.constructSticker = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_mask_position_js_1 = require("./0_mask_position.js");
const _0_thumbnail_js_1 = require("./0_thumbnail.js");
async function constructSticker(document, fileId, fileUniqueId, getStickerSetName, customEmojiId = "") {
    const stickerAttribute = document.attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeSticker);
    const imageSizeAttribute = document.attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeImageSize);
    const customEmojiAttribute = document.attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeCustomEmoji);
    const videoAttribute = document.attributes.find((v) => v instanceof _2_tl_js_1.types.DocumentAttributeVideo);
    const setName = stickerAttribute.stickerset instanceof _2_tl_js_1.types.InputStickerSetID ? await getStickerSetName(stickerAttribute.stickerset) : undefined;
    return (0, _1_utilities_js_1.cleanObject)({
        fileId,
        fileUniqueId,
        type: customEmojiAttribute ? "customEmoji" : stickerAttribute.mask ? "mask" : "regular",
        width: imageSizeAttribute ? imageSizeAttribute.w : videoAttribute ? videoAttribute.w : 512,
        height: imageSizeAttribute ? imageSizeAttribute.h : videoAttribute ? videoAttribute.h : 512,
        isAnimated: document.mime_type == "application/x-tgsticker",
        isVideo: document.mime_type == "video/webm",
        thumbnails: document.thumbs ? document.thumbs.map((v) => v instanceof _2_tl_js_1.types.PhotoSize ? (0, _0_thumbnail_js_1.constructThumbnail)(v, document) : null).filter((v) => v) : [],
        emoji: (customEmojiAttribute ? customEmojiAttribute.alt : stickerAttribute.alt) || undefined,
        setName,
        premiumAnimation: undefined,
        maskPosition: stickerAttribute.mask_coords ? (0, _0_mask_position_js_1.constructMaskPosition)(stickerAttribute.mask_coords) : undefined,
        customEmojiId: customEmojiAttribute ? customEmojiId : undefined,
        needsRepainting: customEmojiAttribute ? Boolean(customEmojiAttribute.text_color) : undefined,
        fileSize: Number(document.size),
    });
}
exports.constructSticker = constructSticker;
