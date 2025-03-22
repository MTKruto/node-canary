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
import { Queue } from "../1_utilities.js";
import { Api } from "../2_tl.js";
import { ID } from "../3_types.js";
import { C } from "./1_types.js";
type UpdateHandler = (update: Api.Update) => Promise<(() => Promise<unknown>)>;
export type PtsUpdate = Api.updateNewMessage | Api.updateDeleteMessages | Api.updateReadHistoryInbox | Api.updateReadHistoryOutbox | Api.updatePinnedChannelMessages | Api.updatePinnedMessages | Api.updateFolderPeers | Api.updateChannelWebPage | Api.updateEditMessage | Api.updateReadMessagesContents | Api.updateWebPage;
export type ChannelPtsUpdate = Api.updateNewChannelMessage | Api.updateEditChannelMessage | Api.updateDeleteChannelMessages | Api.updateChannelTooLong;
export type QtsUpdate = Api.updateNewEncryptedMessage | Api.updateMessagePollVote | Api.updateBotStopped | Api.updateChatParticipant | Api.updateChannelParticipant | Api.updateBotChatInviteRequester | Api.updateBotChatBoost | Api.updateBotMessageReaction | Api.updateBotMessageReactions | Api.updateBotBusinessConnect | Api.updateBotNewBusinessMessage | Api.updateBotEditBusinessMessage | Api.updateBotDeleteBusinessMessage;
export declare class UpdateManager {
    #private;
    static readonly QTS_COUNT = 1;
    static readonly MAIN_BOX_ID = 0n;
    constructor(c: C);
    static isPtsUpdate(v: Api.Update): v is PtsUpdate;
    static isQtsUpdate(v: Api.Update): v is QtsUpdate;
    static isChannelPtsUpdate(v: Api.Update | Api.Updates): v is ChannelPtsUpdate;
    fetchState(source: string): Promise<void>;
    processChats(chats: Api.Chat[], context: Api.DeserializedType): Promise<void>;
    processResult(result: Api.DeserializedType): Promise<void>;
    processUsers(users: Api.User[], context: Api.DeserializedType): Promise<void>;
    getHandleUpdateQueue(boxId: bigint): Queue;
    processUpdates(updates: Api.Update | Api.Updates, checkGap: boolean, call?: Api.AnyObject | null, callback?: () => void): void;
    recoverUpdateGap(source: string): Promise<void>;
    setUpdateHandler(handler: UpdateHandler): void;
    openChat(chatId: ID): Promise<void>;
    closeChat(chatId: ID): Promise<void>;
    closeAllChats(): void;
}
export {};
//# sourceMappingURL=2_update_manager.d.ts.map