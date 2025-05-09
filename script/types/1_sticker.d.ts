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
import { MaybePromise } from "../1_utilities.js";
import { Api } from "../2_tl.js";
import { MaskPosition } from "./0_mask_position.js";
import { Thumbnail } from "./0_thumbnail.js";
/** A sticker. */
export interface Sticker {
    /** A file identifier that can be used to download or reuse this file. */
    fileId: string;
    /** A file identifier that can be used to identify this file. */
    fileUniqueId: string;
    /** Type of the sticker, currently one of "regular", "mask", "customEmoji". The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video. */
    type: "regular" | "mask" | "customEmoji";
    /** Sticker width */
    width: number;
    /** Sticker height */
    height: number;
    /** True, if the sticker is [animated](https://telegram.org/blog/animated-stickers) */
    isAnimated: boolean;
    /** True, if the sticker is a [video sticker](https://telegram.org/blog/video-stickers-better-reactions) */
    isVideo: boolean;
    /** Sticker thumbnail in the .WEBP or .JPG format */
    thumbnails: Thumbnail[];
    /** Emoji associated with the sticker */
    emoji?: string;
    /** Name of the sticker set to which the sticker belongs */
    setName?: string;
    /** For premium regular stickers, premium animation for the sticker */
    premiumAnimation?: File;
    /** For mask stickers, the position where the mask should be placed */
    maskPosition?: MaskPosition;
    /** For custom emoji stickers, unique identifier of the custom emoji */
    customEmojiId?: string;
    /** True, if the sticker must be repainted to a text color in messages, the color of the Telegram Premium badge in emoji status, white color on chat photos, or another appropriate color in other places */
    needsRepainting?: boolean;
    /** File size in bytes */
    fileSize?: number;
}
/** @unlisted */
export type StickerSetNameGetter = (inputStickerSet: Api.inputStickerSetID) => MaybePromise<string>;
export declare function constructSticker(document: Api.document, fileId: string, fileUniqueId: string, getStickerSetName: StickerSetNameGetter, customEmojiId?: string): Promise<Sticker>;
export declare function constructSticker2(document: Api.document, fileId: string, fileUniqueId: string, setName: string | undefined, customEmojiId?: string): Sticker;
//# sourceMappingURL=1_sticker.d.ts.map