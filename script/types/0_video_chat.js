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
exports.constructVideoChat = constructVideoChat;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
function constructVideoChat(call) {
    const id = String(call.id);
    if ((0, _2_tl_js_1.is)("groupCallDiscarded", call)) {
        return {
            type: "ended",
            id,
            duration: call.duration,
        };
    }
    else {
        const title = call.title ?? "";
        const liveStream = call.rtmp_stream ? true : false;
        const participantCount = call.participants_count;
        if (call.schedule_date) {
            return {
                type: "scheduled",
                id,
                title,
                scheduledFor: (0, _1_utilities_js_1.fromUnixTimestamp)(call.schedule_date),
                liveStream,
                participantCount,
            };
        }
        else {
            return {
                type: "active",
                id,
                title,
                liveStream,
                recording: call.record_video_active ? true : false,
                participantCount,
            };
        }
    }
}
