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
import { MaybePromise } from "../1_utilities.js";
import { enums, functions, types } from "../2_tl.js";
import { Storage } from "../2_storage.js";
import { DC } from "../3_transport.js";
import { BotCommand, BusinessConnection, CallbackQueryAnswer, CallbackQueryQuestion, Chat, ChatAction, ChatListItem, ChatMember, ChatP, FileSource, ID, InactiveChat, InlineQueryAnswer, InlineQueryResult, InputMedia, InputStoryContent, InviteLink, LiveStreamChannel, Message, MessageAnimation, MessageAudio, MessageContact, MessageDice, MessageDocument, MessageLocation, MessagePhoto, MessagePoll, MessageSticker, MessageText, MessageVenue, MessageVideo, MessageVideoNote, MessageVoice, NetworkStatistics, ParseMode, Poll, Reaction, Sticker, Story, Update, User, VideoChat, VideoChatActive, VideoChatScheduled } from "../3_types.js";
import { Migrate } from "../4_errors.js";
import { AddReactionParams, AnswerCallbackQueryParams, AnswerInlineQueryParams, BanChatMemberParams, CreateInviteLinkParams, CreateStoryParams, DeleteMessageParams, DeleteMessagesParams, DownloadLiveStreamChunkParams, DownloadParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageParams, EditMessageReplyMarkupParams, ForwardMessagesParams, GetChatsParams, GetCreatedInviteLinksParams, GetHistoryParams, GetMyCommandsParams, JoinVideoChatParams, PinMessageParams, ReplyParams, ScheduleVideoChatParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendContactParams, SendDiceParams, SendDocumentParams, SendInlineQueryParams, SendLocationParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetChatMemberRightsParams, SetChatPhotoParams, SetMyCommandsParams, SetReactionsParams, SignInParams, StartVideoChatParams, StopPollParams } from "./0_params.js";
import { Api } from "./1_types.js";
import { ClientPlainParams } from "./1_client_plain.js";
import { Composer as Composer_, NextFunction } from "./1_composer.js";
import { StorageOperations } from "./0_storage_operations.js";
export interface Context {
    /** The client that received the update. */
    client: Client;
    /** The currently signed in user. */
    me?: User;
    /** Resolves to `message`, `editedMessage`, or the `message` field of `callbackQuery`. */
    msg?: Message;
    /** Resolves to `msg?.chat`. TODO */
    chat?: ChatP;
    /** Resolves to the `from` field of `message`, `editedMessage`, `callbackQuery`, or `inlineQuery`. */
    from?: User;
    /** Resolves to `msg?.senderChat`. */
    senderChat?: ChatP;
    toJSON: () => Update;
    /** Context-aware alias for `client.sendMessage()`. */
    reply: (text: string, params?: Omit<SendMessageParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageText>;
    /** Context-aware alias for `client.sendPoll()`. */
    replyPoll: (question: string, options: [string, string, ...string[]], params?: Omit<SendPollParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessagePoll>;
    /** Context-aware alias for `client.sendPhoto()`. */
    replyPhoto: (photo: FileSource, params?: Omit<SendPhotoParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessagePhoto>;
    /** Context-aware alias for `client.sendDocument()`. */
    replyDocument: (document: FileSource, params?: Omit<SendDocumentParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageDocument>;
    /** Context-aware alias for `client.sendSticker()`. */
    replySticker: (sticker: FileSource, params?: Omit<SendStickerParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageSticker>;
    /** Context-aware alias for `client.sendLocation()`. */
    replyLocation: (latitude: number, longitude: number, params?: Omit<SendLocationParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageLocation>;
    /** Context-aware alias for `client.sendDice()`. */
    replyDice: (params?: Omit<SendDiceParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageDice>;
    /** Context-aware alias for `client.sendVenue()`. */
    replyVenue: (latitude: number, longitude: number, title: string, address: string, params?: Omit<SendVenueParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageVenue>;
    /** Context-aware alias for `client.sendContact()`. */
    replyContact: (firstName: string, number: string, params?: Omit<SendContactParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageContact>;
    /** Context-aware alias for `client.sendVideo()`. */
    replyVideo: (video: FileSource, params?: Omit<SendVideoParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageVideo>;
    /** Context-aware alias for `client.sendAnimation()`. */
    replyAnimation: (animation: FileSource, params?: Omit<SendAnimationParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageAnimation>;
    /** Context-aware alias for `client.sendVoice()`. */
    replyVoice: (voice: FileSource, params?: Omit<SendVoiceParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageVoice>;
    /** Context-aware alias for `client.sendAudio()`. */
    replyAudio: (audio: FileSource, params?: Omit<SendAudioParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageAudio>;
    /** Context-aware alias for `client.sendPoll()`. */
    replyVideoNote: (videoNote: FileSource, params?: Omit<SendVideoNoteParams, "replyToMessageId" | "businessConnectionId"> & ReplyParams) => Promise<MessageVideoNote>;
    /** Context-aware alias for `client.deleteMessage()`. */
    delete: () => Promise<void>;
    /** Context-aware alias for `client.forwardMessage()`. */
    forward: (to: ID, params?: ForwardMessagesParams) => Promise<this["msg"]>;
    /** Context-aware alias for `client.pinMessage()`. */
    pin: (params?: PinMessageParams) => Promise<void>;
    /** Context-aware alias for `client.unpinMessage()`. */
    unpin: (params?: PinMessageParams) => Promise<void>;
    /** Context-aware alias for `client.banChatMember()`. */
    banSender: (params?: BanChatMemberParams) => Promise<void>;
    /** Context-aware alias for `client.kickChatMember()`. */
    kickSender: () => Promise<void>;
    /** Context-aware alias for `client.setChatMemberRights()`. */
    setSenderRights: (params?: SetChatMemberRightsParams) => Promise<void>;
    /** Context-aware alias for `client.getChatAdministrators()`. */
    getChatAdministrators: () => Promise<ChatMember[]>;
    /** Context-aware alias for `client.setReactions()`. */
    react: (reactions: Reaction[], params?: SetReactionsParams) => Promise<void>;
    /** Context-aware alias for `client.sendChatAction()`. */
    sendChatAction: (action: ChatAction, params?: {
        messageThreadId?: number;
    }) => Promise<void>;
    /** Context-aware alias for `client.editInlineMessageText()`. */
    editInlineMessageText: (text: string, params?: EditMessageParams) => Promise<void>;
    /** Context-aware alias for `client.editInlineMessageLiveLocation()`. */
    editInlineMessageLiveLocation: (latitude: number, longitude: number, params?: EditMessageLiveLocationParams) => Promise<void>;
    /** Context-aware alias for `client.editInlineMessageReplyMarkup()`. */
    editInlineMessageReplyMarkup: (params?: EditMessageReplyMarkupParams) => Promise<void>;
    /** Context-aware alias for `client.editMessageText()`. */
    editMessageText: (messageId: number, text: string, params?: EditMessageParams) => Promise<MessageText>;
    /** Context-aware alias for `client.editMessageLiveLocation()`. */
    editMessageLiveLocation: (messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams) => Promise<MessageLocation>;
    /** Context-aware alias for `client.editMessageReplyMarkup()`. */
    editMessageReplyMarkup: (messageId: number, params?: EditMessageReplyMarkupParams) => Promise<Message>;
    /** Context-aware alias for `client.answerCallbackQuery()`. */
    answerCallbackQuery: (params?: AnswerCallbackQueryParams) => Promise<void>;
    /** Context-aware alias for `client.answerInlineQuery()`. */
    answerInlineQuery: (results: InlineQueryResult[], params?: AnswerInlineQueryParams) => Promise<void>;
    /** Context-aware alias for `client.getMessage()`. */
    getMessage: (messageId: number) => Promise<Message | null>;
    /** Context-aware alias for `client.getMessages()`. */
    getMessages: (messageIds: number[]) => Promise<Message[]>;
    /** Context-aware alias for `client.forwardMessage()`. */
    forwardMessage: (to: ID, messageId: number, params?: ForwardMessagesParams) => Promise<Message>;
    /** Context-aware alias for `client.forwardMessages()`. */
    forwardMessages: (to: ID, messageIds: number[], params?: ForwardMessagesParams) => Promise<Message[]>;
    /** Context-aware alias for `client.deleteMessage()`. */
    deleteMessage: (messageId: number, params?: DeleteMessagesParams) => Promise<void>;
    /** Context-aware alias for `client.deleteMessages()`. */
    deleteMessages: (messageIds: number[], params?: DeleteMessagesParams) => Promise<void>;
    /** Context-aware alias for `client.pinMessage()`. */
    pinMessage: (messageId: number, params?: PinMessageParams) => Promise<void>;
    /** Context-aware alias for `client.unpinMessage()`. */
    unpinMessage: (messageId: number) => Promise<void>;
    /** Context-aware alias for `client.unpinMessages()`. */
    unpinMessages: () => Promise<void>;
    /** Context-aware alias for `client.setAvailableReactions()`. */
    setAvailableReactions: (availableReactions: "none" | "all" | Reaction[]) => Promise<void>;
    /** Context-aware alias for `client.addReaction()`. */
    addReaction: (messageId: number, reaction: Reaction, params?: AddReactionParams) => Promise<void>;
    /** Context-aware alias for `client.removeReaction()`. */
    removeReaction: (messageId: number, reaction: Reaction) => Promise<void>;
    /** Context-aware alias for `client.setReactions()`. */
    setReactions: (messageId: number, reactions: Reaction[], params?: SetReactionsParams) => Promise<void>;
    /** Context-aware alias for `client.setChatPhoto()`. */
    setChatPhoto: (photo: FileSource, params?: SetChatPhotoParams) => Promise<void>;
    /** Context-aware alias for `client.deleteChatPhoto()`. */
    deleteChatPhoto: () => Promise<void>;
    /** Context-aware alias for `client.banChatMember()`. */
    banChatMember: (memberId: ID, params?: BanChatMemberParams) => Promise<void>;
    /** Context-aware alias for `client.unbanChatMember()`. */
    unbanChatMember: (memberId: ID) => Promise<void>;
    /** Context-aware alias for `client.kickChatMember()`. */
    kickChatMember: (memberId: ID) => Promise<void>;
    /** Context-aware alias for `client.setChatMemberRights()`. */
    setChatMemberRights: (memberId: ID, params?: SetChatMemberRightsParams) => Promise<void>;
    /** Context-aware alias for `client.deleteChatMemberMessages()`. */
    deleteChatMemberMessages: (userId: ID) => Promise<void>;
    /** Context-aware alias for `client.searchMessages()`. */
    searchMessages: (query: string, params?: SearchMessagesParams) => Promise<Message[]>;
    /** Context-aware alias for `client.setBoostsRequiredToCircumventRestrictions()`. */
    setBoostsRequiredToCircumventRestrictions: (boosts: number) => Promise<void>;
    /** Context-aware alias for `client.createInviteLink()`. */
    createInviteLink: (params?: CreateInviteLinkParams) => Promise<InviteLink>;
    /** Context-aware alias for `client.getCreatedInviteLinks()`. */
    getCreatedInviteLinks: (params?: GetCreatedInviteLinksParams) => Promise<InviteLink[]>;
    /** Context-aware alias for `client.leaveChat()`. */
    leave: () => Promise<void>;
    /** Context-aware alias for `client.blockUser()`. */
    block: () => Promise<void>;
    /** Context-aware alias for `client.unblockUser()`. */
    unblock: () => Promise<void>;
    /** Context-aware alias for `client.getChatMember()`. */
    getChatMember: (userId: ID) => Promise<ChatMember>;
    /** Context-aware alias for `client.setChatStickerSet()`. */
    setChatStickerSet: (setName: string) => Promise<void>;
    /** Context-aware alias for `client.deleteChatStickerSet()`. */
    deleteChatStickerSet: () => Promise<void>;
    /** Context-aware alias for `client.getBusinessConnection()`. */
    getBusinessConnection: () => Promise<BusinessConnection>;
}
export declare class Composer<C extends Context = Context> extends Composer_<C> {
}
export interface InvokeErrorHandler<C> {
    (ctx: {
        client: C;
        error: unknown;
        function: types.Type | functions.Function<unknown>;
        n: number;
    }, next: NextFunction<boolean>): MaybePromise<boolean>;
}
export declare const restartAuth: unique symbol;
export declare const handleMigrationError: unique symbol;
declare const getEntity: unique symbol;
export interface ClientParams extends ClientPlainParams {
    /** The storage provider to use. Defaults to memory storage. Passing a string constructs a memory storage with the string being the auth string. */
    storage?: Storage;
    /** App's API ID from [my.telegram.org/apps](https://my.telegram.org/apps). Required if no account was previously authorized. */
    apiId?: number;
    /** App's API hash from [my.telegram.org/apps](https://my.telegram.org/apps). Required if no account was previously authorized. */
    apiHash?: string;
    /** A parse mode to use when the `parseMode` parameter is not specified when sending or editing messages. Defaults to `ParseMode.None`. */
    parseMode?: ParseMode;
    /** The app_version parameter to be passed to initConnection. It is recommended that this parameter is changed if users are authorized. Defaults to _MTKruto_. */
    appVersion?: string;
    /** The device_version parameter to be passed to initConnection. The default varies by the current runtime. */
    deviceModel?: string;
    /** The lang_code parameter to be passed to initConnection. Defaults to the runtime's language or `"en"`. */
    langCode?: string;
    /** The lang_pack parameter to be passed to initConnection. Defaults to an empty string. */
    langPack?: string;
    /** The system_lang_cde parameter to be passed to initConnection. Defaults to the runtime's language or `"en"`. */
    systemLangCode?: string;
    /** The system_version parameter to be passed to initConnection. The default varies by the current runtime. */
    systemVersion?: string;
    /** Whether to use default handlers. Defaults to `true`. */
    defaultHandlers?: boolean;
    /** Whether to ignore outgoing messages. Defaults to `true` for bots, and `false` for users. */
    ignoreOutgoing?: boolean;
    /** Default command prefixes. Defaults to `"/"` for bots and `"\"` for users. This option must be set separately for nested composers. */
    prefixes?: string | string[];
    /** Whether to guarantee that order-sensitive updates are delivered at least once before delivering next ones. Useful mainly for clients providing a user interface à la Telegram Desktop. Defaults to `false`. */
    guaranteeUpdateDelivery?: boolean;
    /** Whether to not handle updates received when the client was not running. Defaults to `true` for bots, and `false` for users. */
    dropPendingUpdates?: boolean;
    /**
     * Whether to persist cache to the provided storage, and not memory. Defaults to `false`.
     *
     * Explicitly setting this option to `true` is highly recommended if:
     *
     * - User accounts are authorized.
     * - Less memory usage is demanded.
     * - The client does not usually have a large uptime.
     *
     * When the provided storage takes advantage of memory, nothing changes, even if set to `true`.
     */
    persistCache?: boolean;
}
/**
 * An MTKruto client.
 */
export declare class Client<C extends Context = Context> extends Composer<C> {
    #private;
    readonly storage: StorageOperations;
    readonly messageStorage: StorageOperations;
    readonly appVersion: string;
    readonly deviceModel: string;
    readonly langCode: string;
    readonly langPack: string;
    readonly systemLangCode: string;
    readonly systemVersion: string;
    /**
     * Constructs the client.
     *
     * @param storage The storage provider to use. Defaults to memory storage. Passing a string constructs a memory storage with the string being the auth string.
     * @param apiId App's API ID from [my.telegram.org](https://my.telegram.org/apps). Defaults to 0 (unset).
     * @param apiHash App's API hash from [my.telegram.org/apps](https://my.telegram.org/apps). Defaults to empty string (unset).
     */
    constructor(params?: ClientParams);
    get connected(): boolean;
    get disconnected(): boolean;
    api: Api;
    /**
     * Sets the DC and resets the auth key stored in the session provider
     * if the stored DC was not the same as the `dc` parameter.
     *
     * @param dc The DC to change to.
     */
    setDc(dc: DC): Promise<void>;
    /**
     * Loads the session if `setDc` was not called, initializes and connnects
     * a `ClientPlain` to generate auth key if there was none, and connects the client.
     * Before establishing the connection, the session is saved.
     */
    connect(): Promise<void>;
    reconnect(dc?: DC): Promise<void>;
    [handleMigrationError](err: Migrate): Promise<void>;
    disconnect(): Promise<void>;
    /**
     * Signs in using the provided parameters if not already signed in.
     * If no parameters are provided, the credentials will be prompted in runtime.
     *
     * Notes:
     * 1. Requires the `apiId` and `apiHash` paramters to be passed when constructing the client.
     * 3. Reconnects the client to the appropriate DC in case of MIGRATE_X errors.
     */
    signIn(params?: SignInParams): Promise<void>;
    signOut(): Promise<void>;
    /**
     * Same as calling `.connect()` followed by `.signIn(params)`.
     */
    start(params?: SignInParams): Promise<void>;
    /**
     * Invokes a function waiting and returning its reply if the second parameter is not `true`. Requires the client
     * to be connected.
     *
     * @param function_ The function to invoke.
     */
    invoke: {
        <T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T): Promise<T extends functions.Function<unknown> ? T["__R"] : void>;
        <T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait: true): Promise<void>;
        <T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait?: boolean): Promise<T | void>;
        use(handler: InvokeErrorHandler<Client<C>>): void;
    };
    /**
     * Alias for `invoke` with its second parameter being `true`.
     */
    send<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T): Promise<void>;
    exportAuthString(): Promise<string>;
    importAuthString(authString: string): Promise<void>;
    /**
     * Get a chat's inputPeer. Useful when calling API functions directly.
     *
     * @param id The identifier of the chat.
     */
    getInputPeer(id: ID): Promise<enums.InputPeer>;
    /**
     * Get a channel or a supergroup's inputChannel. Useful when calling API functions directly.
     *
     * @param id The identifier of the channel or the supergroup.
     */
    getInputChannel(id: ID): Promise<types.InputChannel>;
    /**
     * Get a user's inputUser. Useful when calling API functions directly.
     *
     * @param id The identifier of the user.
     */
    getInputUser(id: ID): Promise<types.InputUser>;
    private [getEntity];
    private [getEntity];
    private [getEntity];
    private [getEntity];
    /**
     * Get information on the currently authorized user.
     *
     * @method ac
     */
    getMe(): Promise<User>;
    /**
     * Show a username in the current account, a bot account, a supergroup, or a channel's profile. User-only.
     *
     * @method ac
     * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
     * @param username The username to show.
     */
    showUsername(id: ID, username: string): Promise<void>;
    /**
     * Hide a username from the current account, a bot account, a supergroup, or a channel's profile. User-only.
     *
     * @method ac
     * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
     * @param username The username to hide.
     */
    hideUsername(id: ID, username: string): Promise<void>;
    /**
     * Reorder the usernames of the current account, a bot account, a supergroup, or a channel's profile. User-only.
     *
     * @method ac
     * @param id `"me"`, a bot ID, a supergroup ID, or a channel ID.
     * @param order The new order to use.
     * @returns Whether the order was changed.
     */
    reorderUsernames(id: ID, order: string[]): Promise<boolean>;
    /**
     * Hide all usernames from the a supergroup or a channel's profile. User-only.
     *
     * @method ac
     * @param id A supergroup ID or a channel ID.
     */
    hideUsernames(id: ID): Promise<boolean>;
    /**
     * Get a business connection. Bot-only.
     *
     * @method ac
     * @param id The identifier of the business connection.
     */
    getBusinessConnection(id: string): Promise<BusinessConnection>;
    /**
     * Send a text message.
     *
     * @method ms
     * @param chatId The chat to send the message to.
     * @param text The message's text.
     * @returns The sent text message.
     */
    sendMessage(chatId: ID, text: string, params?: SendMessageParams): Promise<MessageText>;
    /**
     * Send a photo.
     *
     * @method ms
     * @param chatId The chat to send the photo to.
     * @param photo The photo to send.
     * @returns The sent photo.
     */
    sendPhoto(chatId: ID, photo: FileSource, params?: SendPhotoParams): Promise<MessagePhoto>;
    /**
     * Send a document.
     *
     * @method ms
     * @param chatId The chat to send the document to.
     * @param document The document to send.
     * @returns The sent document.
     */
    sendDocument(chatId: ID, document: FileSource, params?: SendDocumentParams): Promise<MessageDocument>;
    /**
     * Send a sticker.
     *
     * @method ms
     * @param chatId The chat to send the sticker to.
     * @param document The sticker to send.
     * @returns The sent sticker.
     */
    sendSticker(chatId: ID, sticker: FileSource, params?: SendStickerParams): Promise<MessageSticker>;
    /**
     * Send a video.
     *
     * @method ms
     * @param chatId The chat to send the video to.
     * @param video The video to send.
     * @returns The sent video.
     */
    sendVideo(chatId: ID, video: FileSource, params?: SendVideoParams): Promise<MessageVideo>;
    /**
     * Send an animation.
     *
     * @method ms
     * @param chatId The chat to send the animation to.
     * @param animation The animation to send.
     * @returns The sent animation.
     */
    sendAnimation(chatId: ID, animation: FileSource, params?: SendAnimationParams): Promise<MessageAnimation>;
    /**
     * Send a voice message.
     *
     * @method ms
     * @param chatId The chat to send the voice message to.
     * @param voice The voice to send.
     * @returns The sent voice message.
     */
    sendVoice(chatId: ID, voice: FileSource, params?: SendVoiceParams): Promise<MessageVoice>;
    /**
     * Send an audio file.
     *
     * @method ms
     * @param chatId The chat to send the audio file to.
     * @param audio The audio to send.
     * @returns The sent audio filr.
     */
    sendAudio(chatId: ID, audio: FileSource, params?: SendAudioParams): Promise<MessageAudio>;
    /**
     * Send a video note.
     *
     * @method ms
     * @param chatId The chat to send the video note to.
     * @param videoNote The video note to send.
     * @returns The sent video note.
     */
    sendVideoNote(chatId: ID, videoNote: FileSource, params?: SendVideoNoteParams): Promise<MessageVideoNote>;
    /**
     * Send a location.
     *
     * @method ms
     * @param chatId The chat to send the location to.
     * @param latitude The location's latitude.
     * @param longitude The location's longitude.
     * @returns The sent location.
     */
    sendLocation(chatId: ID, latitude: number, longitude: number, params?: SendLocationParams): Promise<MessageLocation>;
    /**
     * Send a contact.
     *
     * @method ms
     * @param chatId The chat to send the contact to.
     * @param firstName The contact's first name.
     * @param number The contact's phone number.
     * @returns The sent contact.
     */
    sendContact(chatId: ID, firstName: string, number: string, params?: SendContactParams): Promise<MessageContact>;
    /**
     * Send a dice.
     *
     * @method ms
     * @param chatId The chat to send the dice to.
     * @returns The sent dice.
     */
    sendDice(chatId: ID, params?: SendDiceParams): Promise<MessageDice>;
    /**
     * Send a venue.
     *
     * @method ms
     * @param chatId The chat to send the venue to.
     * @param latitude The latitude of the venue.
     * @param longitude The longitude of the venue.
     * @param title The title of the venue.
     * @param address The written address of the venue.
     * @returns The sent venue.
     */
    sendVenue(chatId: ID, latitude: number, longitude: number, title: string, address: string, params?: SendVenueParams): Promise<MessageVenue>;
    /**
     * Send a poll.
     *
     * @method ms
     * @param chatId The chat to send the poll to.
     * @param question The poll's question.
     * @param options The poll's options.
     * @returns The sent poll.
     */
    sendPoll(chatId: ID, question: string, options: [string, string, ...string[]], params?: SendPollParams): Promise<MessagePoll>;
    /**
     * Edit a message's text.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the message.
     * @param messageId The message's identifier.
     * @param text The new text of the message.
     * @returns The edited text message.
     */
    editMessageText(chatId: ID, messageId: number, text: string, params?: EditMessageParams): Promise<MessageText>;
    /**
     * Edit a message's media.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the message.
     * @param messageId The message's identifier.
     * @param media The new media of the message.
     * @returns The edited message.
     */
    editMessageMedia(chatId: ID, messageId: number, media: InputMedia, params?: EditMessageMediaParams): Promise<Message>;
    /**
     * Edit an inline message's media.
     *
     * @method ms
     * @param inlineMessageId The inline message's identifier.
     * @param media The new media of the message.
     */
    editInlineMessageMedia(inlineMessageId: string, media: InputMedia, params?: EditMessageMediaParams): Promise<void>;
    /**
     * Edit an inline message's text. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The inline message's identifier.
     * @param text The new text of the message.
     */
    editInlineMessageText(inlineMessageId: string, text: string, params?: EditMessageParams): Promise<void>;
    /**
     * Edit a message's reply markup.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the message.
     * @param messageId The message's identifier.
     * @returns The edited message.
     */
    editMessageReplyMarkup(chatId: ID, messageId: number, params?: EditMessageReplyMarkupParams): Promise<Message>;
    /**
     * Edit an inline message's reply markup. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The inline message's identifier.
     */
    editInlineMessageReplyMarkup(inlineMessageId: string, params?: EditMessageReplyMarkupParams): Promise<void>;
    /**
     * Edit a message's live location.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the messages.
     * @param messageId The message's identifier.
     * @param latitude The new latitude.
     * @param longitude The new longitude.
     * @returns The edited location message.
     */
    editMessageLiveLocation(chatId: ID, messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<MessageLocation>;
    /**
     * Edit an inline message's live location. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The inline message's identifier.
     * @param latitude The new latitude.
     * @param longitude The new longitude.
     * @returns The edited location message.
     */
    editInlineMessageLiveLocation(inlineMessageId: string, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<void>;
    /**
     * Retrieve multiple messages.
     *
     * @method ms
     * @param chatId The identifier of the chat to retrieve the messages from.
     * @param messageIds The identifiers of the messages to retrieve.
     * @example ```ts
     * const message = await client.getMessages("@MTKruto", [210, 212]);
     * ```
     * @returns The retrieved messages.
     */
    getMessages(chatId: ID, messageIds: number[]): Promise<Message[]>;
    /**
     * Retrieve a single message.
     *
     * @method ms
     * @param chatId The identifier of the chat to retrieve the message from.
     * @param messageId The identifier of the message to retrieve.
     * @example ```ts
     * const message = await client.getMessage("@MTKruto", 212);
     * ```
     * @returns The retrieved message.
     */
    getMessage(chatId: ID, messageId: number): Promise<Message | null>;
    /**
     * Delete multiple messages.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the messages.
     * @param messageIds The identifiers of the messages to delete.
     */
    deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams): Promise<void>;
    /**
     * Delete a single message.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the message.
     * @param messageId The identifier of the message to delete.
     */
    deleteMessage(chatId: ID, messageId: number, params?: DeleteMessageParams): Promise<void>;
    /**
     * Delete all messages sent by a specific member of a chat. User-only.
     *
     * @method ms
     * @param chatId The identifier of the chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    deleteChatMemberMessages(chatId: ID, memberId: ID): Promise<void>;
    /**
     * Pin a message in a chat.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the message.
     * @param messageId The message's identifier.
     */
    pinMessage(chatId: ID, messageId: number, params?: PinMessageParams): Promise<void>;
    /**
     * Unpin a pinned message.
     *
     * @method ms
     * @param chatId The identifier of the chat that contains the message.
     * @param messageId The message's identifier.
     */
    unpinMessage(chatId: ID, messageId: number): Promise<void>;
    /**
     * Unpin all pinned messages.
     *
     * @method ms
     * @param chatId The identifier of the chat.
     */
    unpinMessages(chatId: ID): Promise<void>;
    /**
     * Forward multiple messages.
     *
     * @method ms
     * @param from The identifier of the chat to forward the messages from.
     * @param to The identifier of the chat to forward the messages to.
     * @param messageIds The identifiers of the messages to forward.
     * @returns The forwarded messages.
     */
    forwardMessages(from: ID, to: ID, messageIds: number[], params?: ForwardMessagesParams): Promise<Message[]>;
    /**
     * Forward a single message.
     *
     * @method ms
     * @param from The identifier of the chat to forward the message from.
     * @param to The identifier of the chat to forward the message to.
     * @param messageId The identifier of the message to forward.
     * @returns The forwarded message.
     */
    forwardMessage(from: ID, to: ID, messageId: number, params?: ForwardMessagesParams): Promise<Message>;
    /**
     * Stop a poll.
     *
     * @method ms
     * @param chatId The chat that includes the poll.
     * @param messageId The idenfifier of the poll's message.
     * @returns The new state of the poll.
     */
    stopPoll(chatId: ID, messageId: number, params?: StopPollParams): Promise<Poll>;
    /**
     * Send a chat action.
     *
     * @method ms
     * @param chatId The chat to send the chat action to.
     * @param action The chat action.
     * @param messageThreadId The thread to send the chat action to.
     */
    sendChatAction(chatId: ID, action: ChatAction, params?: {
        messageThreadId?: number;
    }): Promise<void>;
    /**
     * Search the messages of a chat. User-only.
     *
     * @method ms
     * @param chatId The identifier of the chat to search the messages in.
     * @param query The message search query.
     */
    searchMessages(chatId: ID, query: string, params?: SearchMessagesParams): Promise<Message[]>;
    /**
     * Download a file.
     *
     * @method fs
     * @param fileId The identifier of the file to download.
     * @example ```ts
     * for await (const chunk of client.download(fileId, { chunkSize: 256 * 1024 })) {
     *   await outFile.write(chunk);
     * }
     * ```
     * @returns A generator yielding the contents of the file.
     */
    download(fileId: string, params?: DownloadParams): AsyncGenerator<Uint8Array, void, unknown>;
    /**
     * Get custom emoji documents for download.
     *
     * @method fs
     * @param id Identifier of one or more of custom emojis.
     * @returns The custom emoji documents.
     */
    getCustomEmojiStickers(id: string | string[]): Promise<Sticker[]>;
    /**
     * Get chats from a chat list. User-only.
     *
     * @method ch
     */
    getChats(params?: GetChatsParams): Promise<ChatListItem[]>;
    /**
     * Get a chat.
     *
     * @method ch
     */
    getChat(chatId: ID): Promise<Chat>;
    /**
     * Get chat history. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat to get its history.
     */
    getHistory(chatId: ID, params?: GetHistoryParams): Promise<Message[]>;
    /**
     * Set a chat's available reactions. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     * @param availableReactions The new available reactions.
     */
    setAvailableReactions(chatId: ID, availableReactions: "none" | "all" | Reaction[]): Promise<void>;
    /**
     * Set a chat's photo.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     * @param photo A photo to set as the chat's photo.
     */
    setChatPhoto(chatId: number, photo: FileSource, params?: SetChatPhotoParams): Promise<void>;
    /**
     * Delete a chat's photo.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     */
    deleteChatPhoto(chatId: number): Promise<void>;
    /**
     * Ban a member from a chat.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     * @param memberId The identifier of the member.
     */
    banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams): Promise<void>;
    /**
     * Unban a member from a chat.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    unbanChatMember(chatId: ID, memberId: ID): Promise<void>;
    /**
     * Kick a member from a chat. Same as a banChatMember call followed by unbanChatMember.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    kickChatMember(chatId: ID, memberId: ID): Promise<void>;
    /**
     * Set the rights of a chat member.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a supergroup.
     * @param memberId The identifier of a member.
     */
    setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams): Promise<void>;
    /**
     * Get the administrators of a chat.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     * @returns The chat's administrators.
     */
    getChatAdministrators(chatId: ID): Promise<ChatMember[]>;
    /**
     * Enable join requests in a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a channel or a supergroup.
     */
    enableJoinRequests(chatId: ID): Promise<void>;
    /**
     * Disable join requests in a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a channel or a supergroup.
     */
    disableJoinRequests(chatId: ID): Promise<void>;
    /**
     * Get inactive chats. User-only.
     *
     * @method ch
     * @retuns A list of inactive chats the current user is member of.
     */
    getInactiveChats(): Promise<InactiveChat[]>;
    /**
     * Get the invite links created for a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     * @returns The invite links created for the chat. This might be a subset of the results if they were less than `limit`. The parameters `afterDate` and `afterInviteLink` can be used for pagination.
     */
    getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams): Promise<InviteLink[]>;
    /**
     * Join a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat to join.
     */
    joinChat(chatId: ID): Promise<void>;
    /**
     * Leave a chat.
     *
     * @method ch
     * @param chatId The identifier of the chat to leave.
     */
    leaveChat(chatId: ID): Promise<void>;
    /**
     * Get information on a user's chat membership.
     *
     * @method ch
     * @param chatId The identifier of a chat that includes the user.
     * @param userId The identifier of the user.
     */
    getChatMember(chatId: ID, userId: ID): Promise<ChatMember>;
    /**
     * Set a chat's sticker set.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a supergroup.
     * @param setName The name of the set.
     */
    setChatStickerSet(chatId: ID, setName: string): Promise<void>;
    /**
     * Delete a chat's sticker set.
     *
     * @method ch
     * @param chatId The identifier of the chat. Must be a supergroup.
     */
    deleteChatStickerSet(chatId: ID): Promise<void>;
    /**
     * Set the number of boosts required to circument a chat's default restrictions. User-only.
     *
     * @method ch
     * @param chatId The identifier of the chat.
     * @param boosts The number of boosts required to circumvent its restrictions.
     */
    setBoostsRequiredToCircumventRestrictions(chatId: ID, boosts: number): Promise<void>;
    /**
     * Create an invite link.
     *
     * @method ch
     * @param chatId The identifier of the chat to create the invite link for.
     * @returns The newly created invite link.
     */
    createInviteLink(chatId: ID, params?: CreateInviteLinkParams): Promise<InviteLink>;
    /**
     * Send a callback query. User-only.
     *
     * @method cq
     * @param chatId The chat that includes the messsage.
     * @param messageId The message that includes at a button responsible for the callback query question.
     * @param question The callback query's question.
     * @returns The bot's answer to the callback query.
     */
    sendCallbackQuery(chatId: ID, messageId: number, question: CallbackQueryQuestion): Promise<CallbackQueryAnswer>;
    /**
     * Answer a callback query. Bot-only.
     *
     * @method cq
     * @param id ID of the callback query to answer.
     */
    answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams): Promise<void>;
    /**
     * Send an inline query. User-only.
     *
     * @method iq
     * @param userId The ID of the bot to send the inline query to.
     * @param chatId The ID of the chat from which the inline query is sent.
     * @returns The bot's answer to the inline query.
     */
    sendInlineQuery(userId: ID, chatId: ID, params?: SendInlineQueryParams): Promise<InlineQueryAnswer>;
    /**
     * Answer an inline query. Bot-only.
     *
     * @method iq
     * @param id The ID of the inline query to answer.
     * @param results The results to answer with.
     */
    answerInlineQuery(id: string, results: InlineQueryResult[], params?: AnswerInlineQueryParams): Promise<void>;
    /**
     * Set the bot's description in the given language. Bot-only.
     *
     * @method bs
     */
    setMyDescription(params?: {
        description?: string;
        languageCode?: string;
    }): Promise<void>;
    /**
     * Set the bot's name in the given language. Bot-only.
     *
     * @method bs
     */
    setMyName(params?: {
        name?: string;
        languageCode?: string;
    }): Promise<void>;
    /**
     * Set the bot's short description in the given language. Bot-only.
     *
     * @method bs
     */
    setMyShortDescription(params?: {
        shortDescription?: string;
        languageCode?: string;
    }): Promise<void>;
    /**
     * Get the bot's description in the given language. Bot-only.
     *
     * @method bs
     * @returns The current bot's description in the specified language.
     */
    getMyDescription(params?: {
        languageCode?: string;
    }): Promise<string>;
    /**
     * Get the bot's name in the given language. Bot-only.
     *
     * @method bs
     * @returns The current bot's name in the specified language.
     */
    getMyName(params?: {
        languageCode?: string;
    }): Promise<string>;
    /**
     * Get the bot's short description in the given language. Bot-only.
     *
     * @method bs
     * @returns The current bot's short description in the specified language.
     */
    getMyShortDescription(params?: {
        languageCode?: string;
    }): Promise<string>;
    /**
     * Set the bot's commands in the given scope and/or language. Bot-only.
     *
     * @method bs
     * @param commands The commands to set.
     */
    setMyCommands(commands: BotCommand[], params?: SetMyCommandsParams): Promise<void>;
    /**
     * Get the bot's commands in the given scope and/or language. Bot-only.
     *
     * @method bs
     * @returns The current bot's commands in the specified language.
     */
    getMyCommands(params?: GetMyCommandsParams): Promise<BotCommand[]>;
    /**
     * Change reactions made to a message.
     *
     * @method re
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message to add the reaction to.
     * @param reactions The new reactions.
     */
    setReactions(chatId: number, messageId: number, reactions: Reaction[], params?: SetReactionsParams): Promise<void>;
    /**
     * Make a reaction to a message.
     *
     * @method re
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message to add the reaction to.
     * @param reaction The reaction to add.
     */
    addReaction(chatId: number, messageId: number, reaction: Reaction, params?: AddReactionParams): Promise<void>;
    /**
     * Undo a reaction made to a message.
     *
     * @method re
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message which the reaction was made to.
     * @param reaction The reaction to remove.
     */
    removeReaction(chatId: number, messageId: number, reaction: Reaction): Promise<void>;
    /**
     * Create a story. User-only.
     *
     * @method st
     * @param content The content of the story.
     * @returns The created story.
     */
    createStory(chatId: ID, content: InputStoryContent, params?: CreateStoryParams): Promise<Story>;
    /**
     * Retrieve multiple stories. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat to retrieve the stories from.
     * @param storyIds The identifiers of the stories to retrieve.
     */
    getStories(chatId: ID, storyIds: number[]): Promise<Story[]>;
    /**
     * Retrieve a single story. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat to retrieve the story from.
     * @param storyId The identifier of the story to retrieve.
     * @returns The retrieved story.
     */
    getStory(chatId: ID, storyId: number): Promise<Story | null>;
    /**
     * Delete multiple stories. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat to delete the stories from.
     * @param storyIds The identifiers of the stories to delete.
     */
    deleteStories(chatId: ID, storyIds: number[]): Promise<void>;
    /**
     * Delete a single story. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat to delete the story from.
     * @param storyId The identifier of the story to delete.
     */
    deleteStory(chatId: ID, storyId: number): Promise<void>;
    /**
     * Add multiple stories to highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat that has the stories.
     * @param storyIds The identifiers of the stories to add to highlights.
     */
    addStoriesToHighlights(chatId: ID, storyIds: number[]): Promise<void>;
    /**
     * Add a single story to highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat that has the story.
     * @param storyId The identifier of the story to add to highlights.
     */
    addStoryToHighlights(chatId: ID, storyId: number): Promise<void>;
    /**
     * Remove multiple stories from highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat that has the stories.
     * @param storyIds The identifiers of the stories to remove from highlights.
     */
    removeStoriesFromHighlights(chatId: ID, storyIds: number[]): Promise<void>;
    /**
     * Remove a single story from highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of the chat that has the story.
     * @param storyId The identifier of the story to remove from highlights.
     */
    removeStoryFromHighlights(chatId: ID, storyId: number): Promise<void>;
    /**
     * Get network statistics. This might not always be available.
     *
     * @method mc
     */
    getNetworkStatistics(): Promise<NetworkStatistics>;
    /**
     * Block a user. User-only.
     *
     * @method mc
     * @param userId The identifier of the user to block.
     */
    blockUser(userId: ID): Promise<void>;
    /**
     * Unblock a user. User-only.
     *
     * @method mc
     * @param userId The identifier of the user to unblock.
     */
    unblockUser(userId: ID): Promise<void>;
    /**
     * Start a video chat. User-only.
     *
     * @method vc
     * @param chatId The chat to start the video chat in.
     * @returns The started video chat.
     */
    startVideoChat(chatId: ID, params?: StartVideoChatParams): Promise<VideoChatActive>;
    /**
     * Schedule a video chat. User-only.
     *
     * @method vc
     * @param chatId The chat to schedule the video chat in.
     * @param startAt A point in time within the future in which the video chat will be started.
     * @returns The scheduled video chat.
     */
    scheduleVideoChat(chatId: ID, startAt: Date, params?: ScheduleVideoChatParams): Promise<VideoChatScheduled>;
    /**
     * Join a video chat. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     * @param params_ WebRTC connection parameters.
     * @returns Parameters to be passed to the used WebRTC library.
     */
    joinVideoChat(id: string, params_: string, params?: JoinVideoChatParams): Promise<string>;
    /**
     * Leave a video chat. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     */
    leaveVideoChat(id: string): Promise<void>;
    /**
     * Join a live stream. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     */
    joinLiveStream(id: string): Promise<void>;
    /**
     * Get a video chat. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     */
    getVideoChat(id: string): Promise<VideoChat>;
    /**
     * Get live stream channels. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     */
    getLiveStreamChannels(id: string): Promise<LiveStreamChannel[]>;
    /**
     * Download a live stream chunk. User-only.
     *
     * @method vc
     * @param id The identifier of a video chat retrieved from getChat, startVideoChat, or scheduleVideoChat.
     * @param channelId Stream channel ID.
     * @param scale Stream channel scale.
     * @param timestamp Millisecond timestamp of the chunk to download.
     */
    downloadLiveStreamChunk(id: string, channelId: number, scale: number, timestamp: number, params?: DownloadLiveStreamChunkParams): AsyncGenerator<Uint8Array, void, unknown>;
}
export {};
