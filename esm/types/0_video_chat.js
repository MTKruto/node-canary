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
import { fromUnixTimestamp } from "../1_utilities.js";
import { types } from "../2_tl.js";
export function constructVideoChat(call) {
    const id = String(call.id);
    if (call instanceof types.GroupCallDiscarded) {
        return {
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
                id,
                title,
                scheduledFor: fromUnixTimestamp(call.schedule_date),
                liveStream,
                participantCount,
            };
        }
        else {
            return {
                id,
                title,
                liveStream,
                recording: call.record_video_active ? true : false,
                participantCount,
            };
        }
    }
}