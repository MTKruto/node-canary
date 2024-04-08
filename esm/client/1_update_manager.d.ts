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
import { Queue } from "../1_utilities.js";
import { enums, ReadObject, TLObject, types } from "../2_tl.js";
import { C } from "./0_types.js";
type UpdateHandler = (update: enums.Update) => Promise<(() => Promise<unknown>)>;
export type PtsUpdate = types.UpdateNewMessage | types.UpdateDeleteMessages | types.UpdateReadHistoryInbox | types.UpdateReadHistoryOutbox | types.UpdatePinnedChannelMessages | types.UpdatePinnedMessages | types.UpdateFolderPeers | types.UpdateChannelWebPage | types.UpdateEditMessage | types.UpdateReadMessagesContents | types.UpdateWebPage;
export type ChannelPtsUpdate = types.UpdateNewChannelMessage | types.UpdateEditChannelMessage | types.UpdateDeleteChannelMessages | types.UpdateChannelTooLong;
export type QtsUpdate = types.UpdateNewEncryptedMessage | types.UpdateMessagePollVote | types.UpdateBotStopped | types.UpdateChatParticipant | types.UpdateChannelParticipant | types.UpdateBotChatInviteRequester | types.UpdateBotChatBoost | types.UpdateBotMessageReaction | types.UpdateBotMessageReactions | types.UpdateBotBusinessConnect | types.UpdateBotNewBusinessMessage | types.UpdateBotEditBusinessMessage | types.UpdateBotDeleteBusinessMessage;
export declare class UpdateManager {
    #private;
    static readonly QTS_COUNT = 1;
    static readonly MAIN_BOX_ID = 0n;
    constructor(c: C);
    static isPtsUpdate(v: enums.Update): v is PtsUpdate;
    static isQtsUpdate(v: enums.Update): v is QtsUpdate;
    static isChannelPtsUpdate(v: enums.Update | enums.Updates): v is ChannelPtsUpdate;
    fetchState(source: string): Promise<void>;
    processChats(chats: enums.Chat[]): Promise<void>;
    processResult(result: ReadObject): Promise<void>;
    processUsers(users: enums.User[]): Promise<void>;
    getHandleUpdateQueue(boxId: bigint): Queue;
    processUpdates(updates: enums.Update | enums.Updates, checkGap: boolean, call?: TLObject | null, callback?: () => void): void;
    recoverUpdateGap(source: string): Promise<void>;
    setUpdateHandler(handler: UpdateHandler): void;
}
export {};
