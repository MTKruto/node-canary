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
import { enums, types } from "../2_tl.js";
import { InputMedia } from "../3_types.js";
import { ChatAction, ChatMember, FileSource, FileType, ID, Message, MessageEntity, ParseMode, Reaction, Update, UsernameResolver } from "../3_types.js";
import { AddReactionParams, BanChatMemberParams, CreateInviteLinkParams, DeleteMessagesParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageParams, EditMessageReplyMarkupParams, ForwardMessagesParams, GetCreatedInviteLinksParams, GetHistoryParams, PinMessageParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendChatActionParams, SendContactParams, SendDiceParams, SendDocumentParams, SendLocationParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetChatMemberRightsParams, SetChatPhotoParams, SetReactionsParams, StopPollParams } from "./0_params.js";
import { C as C_ } from "./1_types.js";
import { FileManager } from "./2_file_manager.js";
interface C extends C_ {
    fileManager: FileManager;
}
type MessageManagerUpdate = types.UpdateNewMessage | types.UpdateNewChannelMessage | types.UpdateEditMessage | types.UpdateEditChannelMessage | types.UpdateBotNewBusinessMessage | types.UpdateBotEditBusinessMessage | types.UpdateBotDeleteBusinessMessage | types.UpdateDeleteMessages | types.UpdateDeleteChannelMessages | types.UpdateChannelParticipant | types.UpdateChatParticipant;
export declare class MessageManager {
    #private;
    constructor(c: C);
    getMessages(chatId: ID, messageIds: number[]): Promise<Message[]>;
    getMessageWithReply(chatId: ID, messageId: number): Promise<Message>;
    getMessage(chatId: ID, messageId: number): Promise<Message>;
    static parseText(text: string, entities: MessageEntity[], parseMode: ParseMode): [string, MessageEntity[]];
    parseText(text_: string, params?: {
        parseMode?: ParseMode;
        entities?: MessageEntity[];
    }): Promise<readonly [string, enums.MessageEntity[] | undefined]>;
    constructMessage(message_: enums.Message, r?: boolean, business?: {
        connectionId: string;
        replyToMessage?: enums.Message;
    }): Promise<Message>;
    forwardMessages(from: ID, to: ID, messageIds: number[], params?: ForwardMessagesParams): Promise<Message[]>;
    getHistory(chatId: ID, params?: GetHistoryParams): Promise<Message[]>;
    usernameResolver: UsernameResolver;
    sendMessage(chatId: ID, text: string, params?: SendMessageParams): Promise<import("../3_types.js").MessageText>;
    sendVenue(chatId: ID, latitude: number, longitude: number, title: string, address: string, params?: SendVenueParams): Promise<import("../3_types.js").MessageVenue>;
    sendContact(chatId: ID, firstName: string, number: string, params?: SendContactParams): Promise<import("../3_types.js").MessageContact>;
    sendDice(chatId: ID, params?: SendDiceParams): Promise<import("../3_types.js").MessageDice>;
    sendLocation(chatId: ID, latitude: number, longitude: number, params?: SendLocationParams): Promise<import("../3_types.js").MessageLocation>;
    sendVideoNote(chatId: ID, audio: FileSource, params?: SendVideoNoteParams): Promise<import("../3_types.js").MessageVideoNote>;
    sendAudio(chatId: ID, audio: FileSource, params?: SendAudioParams): Promise<import("../3_types.js").MessageAudio>;
    sendVoice(chatId: ID, voice: FileSource, params?: SendVoiceParams): Promise<import("../3_types.js").MessageVoice>;
    sendAnimation(chatId: ID, animation: FileSource, params?: SendAnimationParams): Promise<import("../3_types.js").MessageAnimation>;
    sendVideo(chatId: ID, video: FileSource, params?: SendVideoParams): Promise<import("../3_types.js").MessageVideo>;
    sendDocument(chatId: ID, document: FileSource, params?: SendDocumentParams): Promise<import("../3_types.js").MessageDocument>;
    sendSticker(chatId: ID, sticker: FileSource, params?: SendStickerParams): Promise<import("../3_types.js").MessageSticker>;
    sendPhoto(chatId: ID, photo: FileSource, params?: SendPhotoParams): Promise<import("../3_types.js").MessagePhoto>;
    resolveFileId(maybeFileId: string, expectedFileType: FileType | FileType[]): {
        id: bigint;
        access_hash: bigint;
        file_reference: Uint8Array;
    } | null;
    sendPoll(chatId: ID, question: string, options: [string, string, ...string[]], params?: SendPollParams): Promise<import("../3_types.js").MessagePoll>;
    editMessageReplyMarkup(chatId: ID, messageId: number, params?: EditMessageReplyMarkupParams): Promise<import("../3_types.js").MessageText | import("../3_types.js").MessageLink | import("../3_types.js").MessagePhoto | import("../3_types.js").MessageDocument | import("../3_types.js").MessageVideo | import("../3_types.js").MessageSticker | import("../3_types.js").MessageAnimation | import("../3_types.js").MessageVoice | import("../3_types.js").MessageAudio | import("../3_types.js").MessageDice | import("../3_types.js").MessageVideoNote | import("../3_types.js").MessageContact | import("../3_types.js").MessageGame | import("../3_types.js").MessagePoll | import("../3_types.js").MessageVenue | import("../3_types.js").MessageLocation | import("../3_types.js").MessageNewChatMembers | import("../3_types.js").MessageLeftChatMember | import("../3_types.js").MessageNewChatTitle | import("../3_types.js").MessageNewChatPhoto | import("../3_types.js").MessageDeletedChatPhoto | import("../3_types.js").MessageGroupCreated | import("../3_types.js").MessageSupergroupCreated | import("../3_types.js").MessageChannelCreated | import("../3_types.js").MessageAutoDeleteTimerChanged | import("../3_types.js").MessageChatMigratedTo | import("../3_types.js").MessageChatMigratedFrom | import("../3_types.js").MessagePinnedMessage | import("../3_types.js").MessageUserShared | import("../3_types.js").MessageWriteAccessAllowed | import("../3_types.js").MessageForumTopicCreated | import("../3_types.js").MessageForumTopicEdited | import("../3_types.js").MessageForumTopicClosed | import("../3_types.js").MessageForumTopicReopened | import("../3_types.js").MessageVideoChatScheduled | import("../3_types.js").MessageVideoChatStarted | import("../3_types.js").MessageVideoChatEnded | import("../3_types.js").MessageGiveaway | import("../3_types.js").MessageUnsupported>;
    editInlineMessageReplyMarkup(inlineMessageId: string, params?: EditMessageReplyMarkupParams): Promise<void>;
    editMessageText(chatId: ID, messageId: number, text: string, params?: EditMessageParams): Promise<import("../3_types.js").MessageText>;
    editInlineMessageText(inlineMessageId: string, text: string, params?: EditMessageParams): Promise<void>;
    editMessageMedia(chatId: ID, messageId: number, media: InputMedia, params?: EditMessageMediaParams): Promise<import("../3_types.js").MessageText | import("../3_types.js").MessageLink | import("../3_types.js").MessagePhoto | import("../3_types.js").MessageDocument | import("../3_types.js").MessageVideo | import("../3_types.js").MessageSticker | import("../3_types.js").MessageAnimation | import("../3_types.js").MessageVoice | import("../3_types.js").MessageAudio | import("../3_types.js").MessageDice | import("../3_types.js").MessageVideoNote | import("../3_types.js").MessageContact | import("../3_types.js").MessageGame | import("../3_types.js").MessagePoll | import("../3_types.js").MessageVenue | import("../3_types.js").MessageLocation | import("../3_types.js").MessageNewChatMembers | import("../3_types.js").MessageLeftChatMember | import("../3_types.js").MessageNewChatTitle | import("../3_types.js").MessageNewChatPhoto | import("../3_types.js").MessageDeletedChatPhoto | import("../3_types.js").MessageGroupCreated | import("../3_types.js").MessageSupergroupCreated | import("../3_types.js").MessageChannelCreated | import("../3_types.js").MessageAutoDeleteTimerChanged | import("../3_types.js").MessageChatMigratedTo | import("../3_types.js").MessageChatMigratedFrom | import("../3_types.js").MessagePinnedMessage | import("../3_types.js").MessageUserShared | import("../3_types.js").MessageWriteAccessAllowed | import("../3_types.js").MessageForumTopicCreated | import("../3_types.js").MessageForumTopicEdited | import("../3_types.js").MessageForumTopicClosed | import("../3_types.js").MessageForumTopicReopened | import("../3_types.js").MessageVideoChatScheduled | import("../3_types.js").MessageVideoChatStarted | import("../3_types.js").MessageVideoChatEnded | import("../3_types.js").MessageGiveaway | import("../3_types.js").MessageUnsupported>;
    editInlineMessageMedia(inlineMessageId: string, media: InputMedia, params?: EditMessageMediaParams): Promise<void>;
    deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams): Promise<void>;
    deleteChatMemberMessages(chatId: ID, memberId: ID): Promise<void>;
    pinMessage(chatId: ID, messageId: number, params?: PinMessageParams): Promise<void>;
    unpinMessage(chatId: ID, messageId: number): Promise<void>;
    unpinMessages(chatId: ID): Promise<void>;
    setAvailableReactions(chatId: ID, availableReactions: "none" | "all" | Reaction[]): Promise<void>;
    setReactions(chatId: ID, messageId: number, reactions: Reaction[], params?: SetReactionsParams): Promise<void>;
    addReaction(chatId: ID, messageId: number, reaction: Reaction, params?: AddReactionParams): Promise<void>;
    removeReaction(chatId: ID, messageId: number, reaction: Reaction): Promise<void>;
    static canHandleUpdate(update: enums.Update): update is MessageManagerUpdate;
    handleUpdate(update: MessageManagerUpdate): Promise<Update | null>;
    sendChatAction(chatId: ID, action: ChatAction, params?: SendChatActionParams): Promise<void>;
    deleteChatPhoto(chatId: number): Promise<void>;
    setChatPhoto(chatId: number, photo: FileSource, params?: SetChatPhotoParams): Promise<void>;
    banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams): Promise<void>;
    unbanChatMember(chatId: ID, memberId: ID): Promise<void>;
    setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams): Promise<void>;
    getChatAdministrators(chatId: ID): Promise<ChatMember[]>;
    enableJoinRequests(chatId: ID): Promise<void>;
    disableJoinRequests(chatId: ID): Promise<void>;
    searchMessages(chatId: ID, query: string, params?: SearchMessagesParams): Promise<Message[]>;
    setBoostsRequiredToCircumventRestrictions(chatId: ID, boosts: number): Promise<void>;
    createInviteLink(chatId: ID, params?: CreateInviteLinkParams): Promise<import("../3_types.js").InviteLink>;
    getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams): Promise<import("../3_types.js").InviteLink[]>;
    joinChat(chatId: ID): Promise<void>;
    leaveChat(chatId: ID): Promise<void>;
    blockUser(userId: ID): Promise<void>;
    unblockUser(userId: ID): Promise<void>;
    getChatMember(chatId: ID, userId: ID): Promise<ChatMember>;
    setChatStickerSet(chatId: ID, setName: string): Promise<void>;
    deleteChatStickerSet(chatId: ID): Promise<void>;
    stopPoll(chatId: ID, messageId: number, params?: StopPollParams): Promise<import("../3_types.js").Poll>;
    editMessageLiveLocation(chatId: ID, messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<import("../3_types.js").MessageLocation>;
    editInlineMessageLiveLocation(inlineMessageId: string, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<void>;
}
export {};
//# sourceMappingURL=3_message_manager.d.ts.map