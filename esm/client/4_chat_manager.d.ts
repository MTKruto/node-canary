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
import { ChatP, SlowModeDuration } from "../3_types.js";
import { FileSource, ID, Reaction, Update } from "../3_types.js";
import { AddChatMemberParams, ApproveJoinRequestsParams, BanChatMemberParams, CreateInviteLinkParams, DeclineJoinRequestsParams, GetCreatedInviteLinksParams, GetJoinRequestsParams, SetChatMemberRightsParams, SetChatPhotoParams, SetSignaturesEnabledParams } from "./0_params.js";
import { UpdateProcessor } from "./0_update_processor.js";
import { C as C_ } from "./1_types.js";
import { FileManager } from "./2_file_manager.js";
import { MessageManager } from "./3_message_manager.js";
interface C extends C_ {
    fileManager: FileManager;
    messageManager: MessageManager;
}
declare const chatManagerUpdates: readonly ["updateChannelParticipant", "updateChatParticipant", "updateBotChatInviteRequester"];
type ChatManagerUpdate = Api.Types[(typeof chatManagerUpdates)[number]];
export declare class ChatManager implements UpdateProcessor<ChatManagerUpdate> {
    #private;
    constructor(c: C);
    canHandleUpdate(update: Api.Update): update is ChatManagerUpdate;
    handleUpdate(update: ChatManagerUpdate): Promise<Update | null>;
    approveJoinRequest(chatId: ID, userId: ID): Promise<void>;
    declineJoinRequest(chatId: ID, userId: ID): Promise<void>;
    approveJoinRequests(chatId: ID, params?: ApproveJoinRequestsParams): Promise<void>;
    declineJoinRequests(chatId: ID, params?: DeclineJoinRequestsParams): Promise<void>;
    getJoinRequests(chatId: ID, params?: GetJoinRequestsParams): Promise<import("../3_types.js").JoinRequest[]>;
    createInviteLink(chatId: ID, params?: CreateInviteLinkParams): Promise<import("../3_types.js").InviteLink>;
    getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams): Promise<import("../3_types.js").InviteLink[]>;
    joinChat(chatId: ID): Promise<void>;
    leaveChat(chatId: ID): Promise<void>;
    banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams): Promise<void>;
    unbanChatMember(chatId: ID, memberId: ID): Promise<void>;
    setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams): Promise<void>;
    setAvailableReactions(chatId: ID, availableReactions: "none" | "all" | Reaction[]): Promise<void>;
    setBoostsRequiredToCircumventRestrictions(chatId: ID, boosts: number): Promise<void>;
    enableJoinRequests(chatId: ID): Promise<void>;
    disableJoinRequests(chatId: ID): Promise<void>;
    setChatStickerSet(chatId: ID, setName: string): Promise<void>;
    deleteChatStickerSet(chatId: ID): Promise<void>;
    deleteChatPhoto(chatId: ID): Promise<void>;
    setChatPhoto(chatId: ID, photo: FileSource, params?: SetChatPhotoParams): Promise<void>;
    addChatMember(chatId: ID, userId: ID, params?: AddChatMemberParams): Promise<import("../3_types.js").FailedInvitation[]>;
    addChatMembers(chatId: ID, userIds: ID[]): Promise<import("../3_types.js").FailedInvitation[]>;
    disableSlowMode(chatId: ID): Promise<void>;
    setSlowMode(chatId: ID, duration: SlowModeDuration): Promise<void>;
    setChatTitle(chatId: ID, title: string): Promise<void>;
    setChatDescription(chatId: ID, description: string): Promise<void>;
    setMemberListVisibility(chatId: ID, visible: boolean): Promise<void>;
    setTopicsEnabled(chatId: ID, enabled: boolean): Promise<void>;
    setAntispamEnabled(chatId: ID, enabled: boolean): Promise<void>;
    setSignaturesEnabled(chatId: ID, enabled: boolean, params?: SetSignaturesEnabledParams): Promise<void>;
    deleteChat(chatId: ID): Promise<void>;
    getDiscussionChatSuggestions(): Promise<ChatP[]>;
    setDiscussionChat(chatId: ID, discussionChatId: ID): Promise<void>;
    transferChatOwnership(chatId: ID, userId: ID, password: string): Promise<void>;
}
export {};
//# sourceMappingURL=4_chat_manager.d.ts.map