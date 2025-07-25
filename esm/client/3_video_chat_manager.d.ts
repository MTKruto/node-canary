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
import { Api } from "../2_tl.js";
import { ID, Update, VideoChatActive, VideoChatScheduled } from "../3_types.js";
import { DownloadLiveStreamChunkParams, JoinVideoChatParams, StartVideoChatParams } from "./0_params.js";
import { UpdateProcessor } from "./0_update_processor.js";
import { C as C_ } from "./1_types.js";
import { FileManager } from "./2_file_manager.js";
interface C extends C_ {
    fileManager: FileManager;
}
declare const videoChatManagerUpdates: readonly ["updateGroupCall"];
type VideoChatManagerUpdate = Api.Types[(typeof videoChatManagerUpdates)[number]];
export declare class VideoChatManager implements UpdateProcessor<VideoChatManagerUpdate> {
    #private;
    constructor(c: C);
    startVideoChat(chatId: ID, params?: StartVideoChatParams): Promise<VideoChatActive>;
    scheduleVideoChat(chatId: ID, startAt: number, params?: StartVideoChatParams): Promise<VideoChatScheduled>;
    joinVideoChat(id: string, params: string, params_?: JoinVideoChatParams): Promise<string>;
    leaveVideoChat(id: string): Promise<void>;
    joinLiveStream(id: string): Promise<void>;
    getVideoChat(id: string): Promise<import("../3_types.js").VideoChat>;
    canHandleUpdate(update: Api.Update): update is VideoChatManagerUpdate;
    handleUpdate(update: VideoChatManagerUpdate): Promise<Update | null>;
    getLiveStreamChannels(id: string): Promise<import("../3_types.js").LiveStreamChannel[]>;
    downloadLiveStreamChunk(id: string, channel: number, scale: number, timestamp: number, params?: DownloadLiveStreamChunkParams): AsyncGenerator<Uint8Array, void, unknown>;
}
export {};
//# sourceMappingURL=3_video_chat_manager.d.ts.map