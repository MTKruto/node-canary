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
exports.messageSearchFilterToTlObject = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
function messageSearchFilterToTlObject(filter) {
    switch (filter) {
        case "empty":
            return new _2_tl_js_1.types.InputMessagesFilterEmpty();
        case "animations":
            return new _2_tl_js_1.types.InputMessagesFilterGif();
        case "audios":
            return new _2_tl_js_1.types.InputMessagesFilterMusic();
        case "documents":
            return new _2_tl_js_1.types.InputMessagesFilterDocument();
        case "photos":
            return new _2_tl_js_1.types.InputMessagesFilterPhotos();
        case "videos":
            return new _2_tl_js_1.types.InputMessagesFilterVideo();
        case "voiceMessages":
            return new _2_tl_js_1.types.InputMessagesFilterVoice();
        case "photosAndVideos":
            return new _2_tl_js_1.types.InputMessagesFilterPhotoVideo();
        case "links":
            return new _2_tl_js_1.types.InputMessagesFilterUrl();
        case "chatPhotos":
            return new _2_tl_js_1.types.InputMessagesFilterChatPhotos();
        case "videoNotes":
            return new _2_tl_js_1.types.InputMessagesFilterRoundVideo();
        case "voiceMessagesAndVideoNotes":
            return new _2_tl_js_1.types.InputMessagesFilterRoundVoice();
        case "mentions":
            return new _2_tl_js_1.types.InputMessagesFilterMyMentions();
        case "pinned":
            return new _2_tl_js_1.types.InputMessagesFilterPinned();
        default:
            (0, _0_deps_js_1.unreachable)();
    }
}
exports.messageSearchFilterToTlObject = messageSearchFilterToTlObject;
