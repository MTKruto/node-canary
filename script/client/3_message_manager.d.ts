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
import { InputMedia, PollOption, PriceTag, VoiceTranscription } from "../3_types.js";
import { ChatAction, FileSource, FileType, ID, Message, MessageEntity, ParseMode, Reaction, Update, UsernameResolver } from "../3_types.js";
import { AddReactionParams, DeleteMessagesParams, EditInlineMessageCaptionParams, EditInlineMessageMediaParams, EditInlineMessageTextParams, EditMessageCaptionParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageReplyMarkupParams, EditMessageTextParams, ForwardMessagesParams, GetHistoryParams, PinMessageParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendChatActionParams, SendContactParams, SendDiceParams, SendDocumentParams, SendInvoiceParams, SendLocationParams, SendMediaGroupParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetReactionsParams, type StartBotParams, StopPollParams, UnpinMessageParams } from "./0_params.js";
import { UpdateProcessor } from "./0_update_processor.js";
import { C as C_ } from "./1_types.js";
import { FileManager } from "./2_file_manager.js";
interface C extends C_ {
    fileManager: FileManager;
}
declare const messageManagerUpdates: readonly ["updateNewMessage", "updateNewChannelMessage", "updateEditMessage", "updateNewScheduledMessage", "updateEditChannelMessage", "updateBotNewBusinessMessage", "updateBotEditBusinessMessage", "updateBotDeleteBusinessMessage", "updateDeleteMessages", "updateDeleteChannelMessages", "updateDeleteScheduledMessages", "updateTranscribedAudio"];
type MessageManagerUpdate = Api.Types[(typeof messageManagerUpdates)[number]];
export declare class MessageManager implements UpdateProcessor<MessageManagerUpdate> {
    #private;
    constructor(c: C);
    getMessages(chatId: ID, messageIds: number[]): Promise<Message[]>;
    getMessageWithReply(chatId: ID, messageId: number): Promise<Message>;
    getMessage(chatId: ID, messageId: number): Promise<Message>;
    static parseText(text: string, entities: MessageEntity[], parseMode: ParseMode): [string, MessageEntity[]];
    parseText(text_: string, params?: {
        parseMode?: ParseMode;
        entities?: MessageEntity[];
    }): Promise<readonly [string, Api.MessageEntity[] | undefined]>;
    updatesToMessages(chatId: ID, updates: Api.Updates, businessConnectionId?: string): Promise<Message[]>;
    constructMessage(message_: Api.Message, r?: boolean, business?: {
        connectionId: string;
        replyToMessage?: Api.Message;
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
    sendPoll(chatId: ID, question: string, options: (string | PollOption)[], params?: SendPollParams): Promise<import("../3_types.js").MessagePoll>;
    editMessageReplyMarkup(chatId: ID, messageId: number, params?: EditMessageReplyMarkupParams): Promise<Message>;
    editInlineMessageReplyMarkup(inlineMessageId: string, params?: EditMessageReplyMarkupParams): Promise<void>;
    editMessageText(chatId: ID, messageId: number, text: string, params?: EditMessageTextParams): Promise<import("../3_types.js").MessageText>;
    editMessageCaption(chatId: ID, messageId: number, params?: EditMessageCaptionParams): Promise<Message>;
    editInlineMessageText(inlineMessageId: string, text: string, params?: EditInlineMessageTextParams): Promise<void>;
    editInlineMessageCaption(inlineMessageId: string, params?: EditInlineMessageCaptionParams): Promise<void>;
    editMessageMedia(chatId: ID, messageId: number, media: InputMedia, params?: EditMessageMediaParams): Promise<Message>;
    editInlineMessageMedia(inlineMessageId: string, media: InputMedia, params?: EditInlineMessageMediaParams): Promise<void>;
    deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams): Promise<void>;
    deleteScheduledMessages(chatId: ID, messageIds: number[]): Promise<void>;
    deleteScheduledMessage(chatId: ID, messageId: number): Promise<void>;
    sendScheduledMessages(chatId: ID, messageIds: number[]): Promise<Message[]>;
    sendScheduledMessage(chatId: ID, messageId: number): Promise<Message>;
    deleteChatMemberMessages(chatId: ID, memberId: ID): Promise<void>;
    pinMessage(chatId: ID, messageId: number, params?: PinMessageParams): Promise<void>;
    unpinMessage(chatId: ID, messageId: number, params?: UnpinMessageParams): Promise<void>;
    unpinMessages(chatId: ID): Promise<void>;
    setReactions(chatId: ID, messageId: number, reactions: Reaction[], params?: SetReactionsParams): Promise<void>;
    addReaction(chatId: ID, messageId: number, reaction: Reaction, params?: AddReactionParams): Promise<void>;
    removeReaction(chatId: ID, messageId: number, reaction: Reaction): Promise<void>;
    canHandleUpdate(update: Api.Update): update is MessageManagerUpdate;
    handleUpdate(update: MessageManagerUpdate): Promise<Update | null>;
    sendChatAction(chatId: ID, action: ChatAction, params?: SendChatActionParams): Promise<void>;
    searchMessages(chatId: ID, query: string, params?: SearchMessagesParams): Promise<Message[]>;
    blockUser(userId: ID): Promise<void>;
    unblockUser(userId: ID): Promise<void>;
    setChatStickerSet(chatId: ID, setName: string): Promise<void>;
    deleteChatStickerSet(chatId: ID): Promise<void>;
    stopPoll(chatId: ID, messageId: number, params?: StopPollParams): Promise<import("../3_types.js").Poll>;
    editMessageLiveLocation(chatId: ID, messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<import("../3_types.js").MessageLocation>;
    editInlineMessageLiveLocation(inlineMessageId: string, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<void>;
    sendInvoice(chatId: ID, title: string, description: string, payload: string, currency: string, prices: PriceTag[], params?: SendInvoiceParams): Promise<import("../3_types.js").MessageInvoice>;
    sendMediaGroup(chatId: ID, media: InputMedia[], params?: SendMediaGroupParams): Promise<Message[]>;
    readMessages(chatId: ID, untilMessageId: number): Promise<void>;
    startBot(botId: ID, params?: StartBotParams): Promise<Message>;
    transcribeVoice(chatId: ID, messageId: number): Promise<VoiceTranscription>;
    resolveMessageLink(link: string): Promise<Message>;
    static parseMessageLink(link: string): [ID, number] | null;
    openMiniApp(): Promise<void>;
}
export {};
//# sourceMappingURL=3_message_manager.d.ts.map