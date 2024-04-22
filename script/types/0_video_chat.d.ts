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
import { enums } from "../2_tl.js";
/** @unlisted */
export interface _VideoChatCommon {
    id: string;
}
/** @unlisted */
export interface _VideoChatNotEndedCommon {
    title: string;
    liveStream: boolean;
    participantCount: number;
}
/** @unlisted */
export interface VideoChatActive extends _VideoChatCommon, _VideoChatNotEndedCommon {
    recording: boolean;
}
/** @unlisted */
export interface VideoChatScheduled extends _VideoChatCommon, _VideoChatNotEndedCommon {
    scheduledFor: Date;
}
/** @unlisted */
export interface VideoChatEnded extends _VideoChatCommon {
    duration: number;
}
export type VideoChat = VideoChatActive | VideoChatScheduled | VideoChatEnded;
export declare function constructVideoChat(call: enums.GroupCall): VideoChat;
