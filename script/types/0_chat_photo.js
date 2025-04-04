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
exports.constructChatPhoto = constructChatPhoto;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _file_id_js_1 = require("./_file_id.js");
function constructChatPhoto(photo, chatId, chatAccessHash) {
    const smallFileId_ = {
        type: _file_id_js_1.FileType.ProfilePhoto,
        dcId: photo.dc_id,
        location: { type: "photo", id: photo.photo_id, accessHash: 0n, source: { type: _file_id_js_1.PhotoSourceType.ChatPhotoSmall, chatId: BigInt(chatId), chatAccessHash } },
    };
    const smallFileId = (0, _file_id_js_1.serializeFileId)(smallFileId_);
    const smallFileUniqueId = (0, _file_id_js_1.toUniqueFileId)(smallFileId_);
    const bigFileId_ = {
        type: _file_id_js_1.FileType.ProfilePhoto,
        dcId: photo.dc_id,
        location: { type: "photo", id: photo.photo_id, accessHash: 0n, source: { type: _file_id_js_1.PhotoSourceType.ChatPhotoBig, chatId: BigInt(chatId), chatAccessHash } },
    };
    const bigFileId = (0, _file_id_js_1.serializeFileId)(bigFileId_);
    const bigFileUniqueId = (0, _file_id_js_1.toUniqueFileId)(bigFileId_);
    if (_2_tl_js_1.Api.is("chatPhoto", photo)) {
        return (0, _1_utilities_js_1.cleanObject)({
            smallFileId,
            smallFileUniqueId,
            bigFileId,
            bigFileUniqueId,
            hasVideo: photo.has_video || false,
            personal: false,
        });
    }
    else {
        return (0, _1_utilities_js_1.cleanObject)({
            smallFileId,
            smallFileUniqueId,
            bigFileId,
            bigFileUniqueId,
            hasVideo: photo.has_video || false,
            personal: photo.personal ? true : false,
        });
    }
}
