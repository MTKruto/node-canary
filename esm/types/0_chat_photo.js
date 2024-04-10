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
import { types } from "../2_tl.js";
import { FileType, PhotoSourceType, serializeFileId, toUniqueFileId } from "./_file_id.js";
export function constructChatPhoto(photo, chatId, chatAccessHash) {
    const smallFileId_ = {
        type: FileType.ProfilePhoto,
        dcId: photo.dc_id,
        location: { type: "photo", id: photo.photo_id, accessHash: 0n, source: { type: PhotoSourceType.ChatPhotoSmall, chatId: BigInt(chatId), chatAccessHash } },
    };
    const smallFileId = serializeFileId(smallFileId_);
    const smallFileUniqueId = toUniqueFileId(smallFileId_);
    const bigFileId_ = {
        type: FileType.ProfilePhoto,
        dcId: photo.dc_id,
        location: { type: "photo", id: photo.photo_id, accessHash: 0n, source: { type: PhotoSourceType.ChatPhotoBig, chatId: BigInt(chatId), chatAccessHash } },
    };
    const bigFileId = serializeFileId(bigFileId_);
    const bigFileUniqueId = toUniqueFileId(bigFileId_);
    if (photo instanceof types.ChatPhoto) {
        return cleanObject({
            smallFileId,
            smallFileUniqueId,
            bigFileId,
            bigFileUniqueId,
            hasVideo: photo.has_video || false,
        });
    }
    else {
        return cleanObject({
            personal: photo.personal ? true : undefined,
            smallFileId,
            smallFileUniqueId,
            bigFileId,
            bigFileUniqueId,
            hasVideo: photo.has_video || false,
        });
    }
}
