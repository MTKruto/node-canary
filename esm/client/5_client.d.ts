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
import { MaybePromise } from "../1_utilities.js";
import { Storage } from "../2_storage.js";
import { Api, Mtproto } from "../2_tl.js";
import { DC } from "../3_transport.js";
import { BotCommand, BusinessConnection, CallbackQueryAnswer, CallbackQueryQuestion, Chat, ChatAction, ChatListItem, ChatMember, ChatP, type ChatPChannel, type ChatPGroup, type ChatPSupergroup, ChatSettings, ClaimedGifts, FailedInvitation, FileSource, Gift, ID, InactiveChat, InlineQueryAnswer, InlineQueryResult, InputMedia, InputStoryContent, InviteLink, JoinRequest, LinkPreview, LiveStreamChannel, Message, MessageAnimation, MessageAudio, MessageContact, MessageDice, MessageDocument, MessageInvoice, MessageLocation, MessagePhoto, MessagePoll, MessageSticker, MessageText, MessageVenue, MessageVideo, MessageVideoNote, MessageVoice, MiniAppInfo, NetworkStatistics, ParseMode, Poll, PriceTag, Reaction, SlowModeDuration, Sticker, Story, Topic, Translation, Update, User, VideoChat, VideoChatActive, VideoChatScheduled, VoiceTranscription } from "../3_types.js";
import { Migrate } from "../4_errors.js";
import { AddChatMemberParams, AddContactParams, AddReactionParams, AnswerCallbackQueryParams, AnswerInlineQueryParams, AnswerPreCheckoutQueryParams, ApproveJoinRequestsParams, BanChatMemberParams, type CreateChannelParams, type CreateGroupParams, CreateInviteLinkParams, CreateStoryParams, type CreateSupergroupParams, CreateTopicParams, DeclineJoinRequestsParams, DeleteMessageParams, DeleteMessagesParams, DownloadLiveStreamChunkParams, DownloadParams, EditInlineMessageCaptionParams, EditInlineMessageMediaParams, EditInlineMessageTextParams, EditMessageCaptionParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageReplyMarkupParams, EditMessageTextParams, EditTopicParams, ForwardMessagesParams, GetChatMembersParams, GetChatsParams, GetClaimedGiftsParams, GetCommonChatsParams, GetCreatedInviteLinksParams, GetHistoryParams, GetJoinRequestsParams, GetLinkPreviewParams, GetMyCommandsParams, GetTranslationsParams, InvokeParams, JoinVideoChatParams, OpenMiniAppParams, PinMessageParams, ReplyParams, ScheduleVideoChatParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendContactParams, SendDiceParams, SendDocumentParams, SendGiftParams, SendInlineQueryParams, SendInvoiceParams, SendLocationParams, SendMediaGroupParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetBirthdayParams, SetChatMemberRightsParams, SetChatPhotoParams, SetEmojiStatusParams, SetLocationParams, SetMyCommandsParams, SetNameColorParams, SetPersonalChannelParams, SetProfileColorParams, SetReactionsParams, SetSignaturesEnabledParams, SignInParams, type StartBotParams, StartVideoChatParams, StopPollParams, UnpinMessageParams, UpdateProfileParams } from "./0_params.js";
import { StorageOperations } from "./0_storage_operations.js";
import { ClientPlainParams } from "./1_client_plain.js";
import { Composer as Composer_, Middleware, MiddlewareFn, MiddlewareObj, NextFunction } from "./1_composer.js";
export type { FilterQuery, WithFilter } from "./0_filters.js";
export interface Context {
    /** The client that received the update. */
    client: Client;
    /** The currently signed in user. */
    me?: User;
    /** Resolves to `message`, `editedMessage`, or the `message` field of `callbackQuery`. */
    msg?: Message;
    /** Resolves to `msg?.chat`. */
    chat?: ChatP;
    /** Resolves to the `from` field of `message`, `editedMessage`, `callbackQuery`, or `inlineQuery`. */
    from?: User;
    /** Resolves to `msg?.senderChat`. */
    senderChat?: ChatP;
    toJSON: () => Update;
    /** Context-aware alias for `client.sendMessage()`. */
    reply: (text: string, params?: Omit<SendMessageParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageText>;
    /** Context-aware alias for `client.sendPoll()`. */
    replyPoll: (question: string, options: string[], params?: Omit<SendPollParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessagePoll>;
    /** Context-aware alias for `client.sendPhoto()`. */
    replyPhoto: (photo: FileSource, params?: Omit<SendPhotoParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessagePhoto>;
    /** Context-aware alias for `client.sendMediaGroup()`. */
    replyMediaGroup: (media: InputMedia[], params?: Omit<SendMediaGroupParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<Message[]>;
    /** Context-aware alias for `client.sendInvoice()`. */
    replyInvoice: (title: string, description: string, payload: string, currency: string, prices: PriceTag[], params?: Omit<SendInvoiceParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageInvoice>;
    /** Context-aware alias for `client.sendDocument()`. */
    replyDocument: (document: FileSource, params?: Omit<SendDocumentParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageDocument>;
    /** Context-aware alias for `client.sendSticker()`. */
    replySticker: (sticker: FileSource, params?: Omit<SendStickerParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageSticker>;
    /** Context-aware alias for `client.sendLocation()`. */
    replyLocation: (latitude: number, longitude: number, params?: Omit<SendLocationParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageLocation>;
    /** Context-aware alias for `client.sendDice()`. */
    replyDice: (params?: Omit<SendDiceParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageDice>;
    /** Context-aware alias for `client.sendVenue()`. */
    replyVenue: (latitude: number, longitude: number, title: string, address: string, params?: Omit<SendVenueParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageVenue>;
    /** Context-aware alias for `client.sendContact()`. */
    replyContact: (firstName: string, number: string, params?: Omit<SendContactParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageContact>;
    /** Context-aware alias for `client.sendVideo()`. */
    replyVideo: (video: FileSource, params?: Omit<SendVideoParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageVideo>;
    /** Context-aware alias for `client.sendAnimation()`. */
    replyAnimation: (animation: FileSource, params?: Omit<SendAnimationParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageAnimation>;
    /** Context-aware alias for `client.sendVoice()`. */
    replyVoice: (voice: FileSource, params?: Omit<SendVoiceParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageVoice>;
    /** Context-aware alias for `client.sendAudio()`. */
    replyAudio: (audio: FileSource, params?: Omit<SendAudioParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageAudio>;
    /** Context-aware alias for `client.sendPoll()`. */
    replyVideoNote: (videoNote: FileSource, params?: Omit<SendVideoNoteParams, "replyTo" | "businessConnectionId"> & ReplyParams) => Promise<MessageVideoNote>;
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
    editInlineMessageText: (text: string, params?: EditInlineMessageTextParams) => Promise<void>;
    /** Context-aware alias for `client.editInlineMessageCaption()`. */
    editInlineMessageCaption: (params?: EditInlineMessageCaptionParams) => Promise<void>;
    /** Context-aware alias for `client.editInlineMessageMedia()`. */
    editInlineMessageMedia: (media: InputMedia, params?: EditInlineMessageMediaParams) => Promise<void>;
    /** Context-aware alias for `client.editInlineMessageLiveLocation()`. */
    editInlineMessageLiveLocation: (latitude: number, longitude: number, params?: EditMessageLiveLocationParams) => Promise<void>;
    /** Context-aware alias for `client.editInlineMessageReplyMarkup()`. */
    editInlineMessageReplyMarkup: (params?: EditMessageReplyMarkupParams) => Promise<void>;
    /** Context-aware alias for `client.editMessageText()`. */
    editMessageText: (messageId: number, text: string, params?: EditMessageTextParams) => Promise<MessageText>;
    /** Context-aware alias for `client.editMessageCaption()`. */
    editMessageCaption: (messageId: number, params?: EditMessageCaptionParams) => Promise<Message>;
    /** Context-aware alias for `client.editMessageMedia()`. */
    editMessageMedia: (messageId: number, media: InputMedia, params?: EditMessageMediaParams) => Promise<Message>;
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
    /** Context-aware alias for `client.readMessages()`. */
    read(): Promise<void>;
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
    /** Context-aware alias for `client.getChatMember()`. */
    getChatMembers: (params?: GetChatMembersParams) => Promise<ChatMember[]>;
    /** Context-aware alias for `client.setChatStickerSet()`. */
    setChatStickerSet: (setName: string) => Promise<void>;
    /** Context-aware alias for `client.deleteChatStickerSet()`. */
    deleteChatStickerSet: () => Promise<void>;
    /** Context-aware alias for `client.getBusinessConnection()`. */
    getBusinessConnection: () => Promise<BusinessConnection>;
    /** Context-aware alias for `client.answerPreCheckoutQuery()`. */
    answerPreCheckoutQuery: (ok: boolean, params?: AnswerPreCheckoutQueryParams) => Promise<void>;
    /** Context-aware alias for `client.approveJoinRequest()`. */
    approveJoinRequest: () => Promise<void>;
    /** Context-aware alias for `client.declineJoinRequest()`. */
    declineJoinRequest: () => Promise<void>;
}
export declare class Composer<C extends Context = Context> extends Composer_<C> {
}
export { type Middleware, type MiddlewareFn, type MiddlewareObj, type NextFunction };
export interface InvokeErrorHandler<C> {
    (ctx: {
        client: C;
        error: unknown;
        function: Api.AnyFunction | Mtproto.ping;
        n: number;
    }, next: NextFunction<boolean>): MaybePromise<boolean>;
}
export declare const restartAuth: unique symbol;
export declare const handleMigrationError: unique symbol;
declare const getEntity: unique symbol;
export interface ClientParams extends ClientPlainParams {
    /** The storage provider to use. Defaults to memory storage. */
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
    /** The client's language to be used for fetching translations. Defaults to the runtime's language or `"en"`. */
    language?: string;
    /** The client's platform to be used for fetching translations. Defaults to an empty string. */
    platform?: string;
    /** The system_lang_code parameter to be passed to initConnection. Defaults to the runtime's language or `"en"`. */
    systemLangCode?: string;
    /** The system_version parameter to be passed to initConnection. The default varies by the current runtime. */
    systemVersion?: string;
    /** Whether to use default handlers. Defaults to `true`. */
    defaultHandlers?: boolean;
    /** What types of outgoing messages should be received. `business` is only valid for bots. Defaults to `business` for bots, and `all` for users. */
    outgoingMessages?: "none" | "business" | "all";
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
    /** Whether to disable receiving updates. UpdateConnectionState and UpdatesAuthorizationState will always be received. Defaults to `false`. */
    disableUpdates?: boolean;
    /** An auth string to automatically import. Can be overriden by a later importAuthString call. */
    authString?: string;
    /**
     * The first DC to connect to. This is commonly used to decide whether to connect to test or production servers. It is not necessarily the DC that the client will directly connect to or is currently connected to. Defaults to the default initial DC.
     */
    initialDc?: DC;
}
/**
 * An MTKruto client.
 */
export declare class Client<C extends Context = Context> extends Composer<C> {
    #private;
    get managers(): Record<string, any>;
    readonly storage: StorageOperations;
    readonly messageStorage: StorageOperations;
    readonly appVersion: string;
    readonly deviceModel: string;
    readonly language: string;
    readonly platform: string;
    readonly systemLangCode: string;
    readonly systemVersion: string;
    /**
     * Constructs the client.
     */
    constructor(params?: ClientParams);
    get connected(): boolean;
    get disconnected(): boolean;
    /**
     * Loads the session if `setDc` was not called, initializes and connnects
     * a `ClientPlain` to generate auth key if there was none, and connects the client.
     * Before establishing the connection, the session is saved.
     */
    connect(): Promise<void>;
    [handleMigrationError](err: Migrate): Promise<void>;
    disconnect(): void;
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
        <T extends Api.AnyFunction | Mtproto.ping, R = T extends Mtproto.ping ? Mtproto.pong : T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, params?: InvokeParams): Promise<R>;
        use: (handler: InvokeErrorHandler<Client<C>>) => void;
    };
    exportAuthString(): Promise<string>;
    importAuthString(authString: string): Promise<void>;
    /**
     * Get a chat's inputPeer. Useful when calling API functions directly.
     *
     * @param id The identifier of a chat.
     */
    getInputPeer(id: ID): Promise<Api.InputPeer>;
    /**
     * Get a channel or a supergroup's inputChannel. Useful when calling API functions directly.
     *
     * @param id The identifier of the channel or the supergroup.
     */
    getInputChannel(id: ID): Promise<Api.inputChannel | Api.inputChannelFromMessage>;
    /**
     * Get a user's inputUser. Useful when calling API functions directly.
     *
     * @param id The identifier of the user.
     */
    getInputUser(id: ID): Promise<Api.inputUserSelf | Api.inputUser | Api.inputUserFromMessage>;
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
     * Hide all usernames from a supergroup or a channel's profile. User-only.
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
     * @cache
     */
    getBusinessConnection(id: string): Promise<BusinessConnection>;
    /**
     * Set the current account's online status. User-only.
     *
     * @method ac
     * @param online The new online status.
     */
    setOnline(online: boolean): Promise<void>;
    /**
     * Set the current account's emoji status. User-only.
     *
     * @method ac
     * @param id The identifier of the emoji to be used as the new status.
     */
    setEmojiStatus(id: string, params?: SetEmojiStatusParams): Promise<void>;
    /**
     * Set the emoji status of a bot's user. Bot-only.
     *
     * @method ac
     * @param userId The identifier of a user of the bot.
     * @param id The identifier of the emoji to be used as the new status.
     */
    setUserEmojiStatus(userId: ID, id: string, params?: SetEmojiStatusParams): Promise<void>;
    /**
     * Update the profile of the current user. At least one parameter must be specified. User-only.
     *
     * @method ac
     */
    updateProfile(params?: UpdateProfileParams): Promise<void>;
    /**
     * Set the birthday of the current user. User-only.
     *
     * @method ac
     */
    setBirthday(params?: SetBirthdayParams): Promise<void>;
    /**
     * Set the personal channel of the current user. User-only.
     *
     * @method ac
     */
    setPersonalChannel(params?: SetPersonalChannelParams): Promise<void>;
    /**
     * Set the name color of the current user. User-only.
     *
     * @method ac
     * @param color The identifier of the color to set.
     */
    setNameColor(color: number, params?: SetNameColorParams): Promise<void>;
    /**
     * Set the profile color of the current user. User-only.
     *
     * @method ac
     * @param color The identifier of the color to set.
     */
    setProfileColor(color: number, params?: SetProfileColorParams): Promise<void>;
    /**
     * Set the location of the current user. User-only.
     *
     * @method ac
     */
    setLocation(params?: SetLocationParams): Promise<void>;
    /**
     * Send a text message.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the message to.
     * @param text The message's text.
     * @returns The sent text message.
     */
    sendMessage(chatId: ID, text: string, params?: SendMessageParams): Promise<MessageText>;
    /**
     * Send a photo.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the photo to.
     * @param photo The photo to send.
     * @returns The sent photo.
     */
    sendPhoto(chatId: ID, photo: FileSource, params?: SendPhotoParams): Promise<MessagePhoto>;
    /**
     * Send a document.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the document to.
     * @param document The document to send.
     * @returns The sent document.
     */
    sendDocument(chatId: ID, document: FileSource, params?: SendDocumentParams): Promise<MessageDocument>;
    /**
     * Send a sticker.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the sticker to.
     * @param document The sticker to send.
     * @returns The sent sticker.
     */
    sendSticker(chatId: ID, sticker: FileSource, params?: SendStickerParams): Promise<MessageSticker>;
    /**
     * Send a video.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the video to.
     * @param video The video to send.
     * @returns The sent video.
     */
    sendVideo(chatId: ID, video: FileSource, params?: SendVideoParams): Promise<MessageVideo>;
    /**
     * Send an animation.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the animation to.
     * @param animation The animation to send.
     * @returns The sent animation.
     */
    sendAnimation(chatId: ID, animation: FileSource, params?: SendAnimationParams): Promise<MessageAnimation>;
    /**
     * Send a voice message.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the voice message to.
     * @param voice The voice to send.
     * @returns The sent voice message.
     */
    sendVoice(chatId: ID, voice: FileSource, params?: SendVoiceParams): Promise<MessageVoice>;
    /**
     * Send an audio file.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the audio file to.
     * @param audio The audio to send.
     * @returns The sent audio filr.
     */
    sendAudio(chatId: ID, audio: FileSource, params?: SendAudioParams): Promise<MessageAudio>;
    /**
     * Send a media group.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the media group to.
     * @param media The media to include in the media group. Animations are not allowed. All of them must be of the same media type, but an exception is that photos and videos can be mixed.
     * @returns The sent messages.
     */
    sendMediaGroup(chatId: ID, media: InputMedia[], params?: SendMediaGroupParams): Promise<Message[]>;
    /**
     * Send a video note.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the video note to.
     * @param videoNote The video note to send.
     * @returns The sent video note.
     */
    sendVideoNote(chatId: ID, videoNote: FileSource, params?: SendVideoNoteParams): Promise<MessageVideoNote>;
    /**
     * Send a location.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the location to.
     * @param latitude The location's latitude.
     * @param longitude The location's longitude.
     * @returns The sent location.
     */
    sendLocation(chatId: ID, latitude: number, longitude: number, params?: SendLocationParams): Promise<MessageLocation>;
    /**
     * Send a contact.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the contact to.
     * @param firstName The contact's first name.
     * @param number The contact's phone number.
     * @returns The sent contact.
     */
    sendContact(chatId: ID, firstName: string, number: string, params?: SendContactParams): Promise<MessageContact>;
    /**
     * Send a dice.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the dice to.
     * @returns The sent dice.
     */
    sendDice(chatId: ID, params?: SendDiceParams): Promise<MessageDice>;
    /**
     * Send a venue.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the venue to.
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
     * @param chatId The identifier of a chat to send the poll to.
     * @param question The poll's question.
     * @param options The poll's options.
     * @returns The sent poll.
     */
    sendPoll(chatId: ID, question: string, options: string[], params?: SendPollParams): Promise<MessagePoll>;
    /**
     * Send an invoice. Bot-only.
     *
     * @method ms
     * @param chatId The identifier of a chat to send the invoice to.
     * @param title The invoice's title.
     * @param description The invoice's description.
     * @param payload The invoice's payload.
     * @param currency The invoice's currency.
     * @param prices The invoice's price tags.
     * @returns The sent invoice.
     */
    sendInvoice(chatId: ID, title: string, description: string, payload: string, currency: string, prices: PriceTag[], params?: SendInvoiceParams): Promise<MessageInvoice>;
    /**
     * Edit a message's text.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message.
     * @param text The new text of the message.
     * @returns The edited text message.
     */
    editMessageText(chatId: ID, messageId: number, text: string, params?: EditMessageTextParams): Promise<MessageText>;
    /**
     * Edit a message's caption.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message.
     * @param text The new caption of the message.
     * @returns The edited message.
     */
    editMessageCaption(chatId: ID, messageId: number, params?: EditMessageCaptionParams): Promise<Message>;
    /**
     * Edit a message's media.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message.
     * @param media The new media of the message.
     * @returns The edited message.
     */
    editMessageMedia(chatId: ID, messageId: number, media: InputMedia, params?: EditMessageMediaParams): Promise<Message>;
    /**
     * Edit an inline message's media.
     *
     * @method ms
     * @param inlineMessageId The identifier of the inline message.
     * @param media The new media of the message.
     */
    editInlineMessageMedia(inlineMessageId: string, media: InputMedia, params?: EditInlineMessageMediaParams): Promise<void>;
    /**
     * Edit an inline message's text. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The identifier of the inline message.
     * @param text The new text of the message.
     */
    editInlineMessageText(inlineMessageId: string, text: string, params?: EditInlineMessageTextParams): Promise<void>;
    /**
     * Edit an inline message's caption. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The identifier of the inline message.
     */
    editInlineMessageCaption(inlineMessageId: string, params?: EditInlineMessageCaptionParams): Promise<void>;
    /**
     * Edit a message's reply markup.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message.
     * @returns The edited message.
     */
    editMessageReplyMarkup(chatId: ID, messageId: number, params?: EditMessageReplyMarkupParams): Promise<Message>;
    /**
     * Edit an inline message's reply markup. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The identifier of the inline message.
     */
    editInlineMessageReplyMarkup(inlineMessageId: string, params?: EditMessageReplyMarkupParams): Promise<void>;
    /**
     * Edit a message's live location.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message.
     * @param latitude The new latitude.
     * @param longitude The new longitude.
     * @returns The edited location message.
     */
    editMessageLiveLocation(chatId: ID, messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<MessageLocation>;
    /**
     * Edit an inline message's live location. Bot-only.
     *
     * @method ms
     * @param inlineMessageId The identifier of the inline message.
     * @param latitude The new latitude.
     * @param longitude The new longitude.
     * @returns The edited location message.
     */
    editInlineMessageLiveLocation(inlineMessageId: string, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<void>;
    /**
     * Retrieve multiple messages.
     *
     * @method ms
     * @param chatId The identifier of a chat to retrieve the messages from.
     * @param messageIds The identifiers of the messages to retrieve.
     * @example ```ts
     * const message = await client.getMessages("@MTKruto", [210, 212]);
     * ```
     * @returns The retrieved messages.
     * @cache
     */
    getMessages(chatId: ID, messageIds: number[]): Promise<Message[]>;
    /**
     * Retrieve a single message.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageId The identifier of the message to retrieve.
     * @example ```ts
     * const message = await client.getMessage("@MTKruto", 212);
     * ```
     * @returns The retrieved message.
     * @cache
     */
    getMessage(chatId: ID, messageId: number): Promise<Message | null>;
    /**
     * Retrieve a message using its link.
     *
     * @method ms
     * @param link A message link.
     * @example ```ts
     * const message = await client.resolveMessageLink("https://t.me/MTKruto/212");
     * ```
     * @returns The message that was linked to.
     */
    resolveMessageLink(link: string): Promise<Message | null>;
    /**
     * Delete multiple messages.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageIds The identifiers of the messages to delete.
     */
    deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams): Promise<void>;
    /**
     * Delete a single message.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message to delete.
     */
    deleteMessage(chatId: ID, messageId: number, params?: DeleteMessageParams): Promise<void>;
    /**
     * Delete all messages sent by a specific member of a chat. User-only.
     *
     * @method ms
     * @param chatId The identifier of a chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    deleteChatMemberMessages(chatId: ID, memberId: ID): Promise<void>;
    /**
     * Delete multiple scheduled messages.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageIds The identifiers of the scheduled messages to delete.
     */
    deleteScheduledMessages(chatId: ID, messageIds: number[]): Promise<void>;
    /**
     * Delete a scheduled message.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageId The identifier of the scheduled message to delete.
     */
    deleteScheduledMessage(chatId: ID, messageId: number): Promise<void>;
    /**
     * Send multiple scheduled messages before their schedule.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageIds The identifiers of the scheduled messages to send.
     */
    sendScheduledMessages(chatId: ID, messageIds: number[]): Promise<Message[]>;
    /**
     * Send a scheduled message before its schedule.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageId The identifier of the scheduled message to send.
     */
    sendScheduledMessage(chatId: ID, messageId: number): Promise<Message>;
    /**
     * Pin a message in a chat.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageId The identifier of the message.
     */
    pinMessage(chatId: ID, messageId: number, params?: PinMessageParams): Promise<void>;
    /**
     * Unpin a pinned message.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     * @param messageId The identifier of the message.
     */
    unpinMessage(chatId: ID, messageId: number, params?: UnpinMessageParams): Promise<void>;
    /**
     * Unpin all pinned messages.
     *
     * @method ms
     * @param chatId The identifier of a chat.
     */
    unpinMessages(chatId: ID): Promise<void>;
    /**
     * Forward multiple messages.
     *
     * @method ms
     * @param from The identifier of a chat to forward the messages from.
     * @param to The identifier of a chat to forward the messages to.
     * @param messageIds The identifiers of the messages to forward.
     * @returns The forwarded messages.
     */
    forwardMessages(from: ID, to: ID, messageIds: number[], params?: ForwardMessagesParams): Promise<Message[]>;
    /**
     * Forward a single message.
     *
     * @method ms
     * @param from The identifier of a chat to forward the message from.
     * @param to The identifier of a chat to forward the message to.
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
     * @param chatId The identifier of a chat to send the chat action to.
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
     * @param chatId The identifier of a chat.
     * @param query The message search query.
     */
    searchMessages(chatId: ID, query: string, params?: SearchMessagesParams): Promise<Message[]>;
    /**
     * Mark messages as read. User-only.
     *
     * @method ms
     * @param chatId The identifier of the chat which the messages belong to.
     * @param untilMessageId The identifier of the message that will be marked as read, along with any other unread messages before it.
     */
    readMessages(chatId: ID, untilMessageId: number): Promise<void>;
    /**
     * Start a bot. User-only.
     *
     * @method ms
     * @param botId The identifier of the bot to start.
     * @returns The start message.
     */
    startBot(botId: number, params?: StartBotParams): Promise<Message>;
    /**
     * Transcribe a voice message. User-only.
     *
     * @method ms
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message.
     * @cache
     */
    transcribeVoice(chatId: ID, messageId: number): Promise<VoiceTranscription>;
    /**
     * Get the link preview for a message that is about to be sent. User-only.
     *
     * @method ms
     * @param text The message's text.
     */
    getLinkPreview(text: string, params?: GetLinkPreviewParams): Promise<LinkPreview | null>;
    /**
     * Open a mini app. User-only.
     *
     * @method ms
     * @param botId The identifier of a bot with the mini app.
     * @param chatId The identifier of the chat from which the mini app is opened.
     * @cache
     */
    openMiniApp(botId: ID, chatId: ID, params?: OpenMiniAppParams): Promise<MiniAppInfo>;
    /**
     * Cast a vote. User-only.
     *
     * @method pl
     * @param chatId The identifier of the chat that includes the poll.
     * @param messageId The identifier of the message that includes the poll.
     * @param optionIndexes The indexes of the options to cast for.
     */
    vote(chatId: ID, messageId: number, optionIndexes: number[]): Promise<void>;
    /**
     * Retract a vote. User-only.
     *
     * @method pl
     * @param chatId The identifier of the chat that includes the poll.
     * @param messageId The identifier of the message that includes the poll.
     */
    retractVote(chatId: ID, messageId: number): Promise<void>;
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
     * @cache file
     */
    download(fileId: string, params?: DownloadParams): AsyncGenerator<Uint8Array, void, unknown>;
    /**
     * Get custom emoji documents for download.
     *
     * @method fs
     * @param id Identifier of one or more of custom emojis.
     * @returns The custom emoji documents.
     * @cache
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
     * @cache
     */
    getChat(chatId: ID): Promise<Chat>;
    /**
     * Get chat history. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    getHistory(chatId: ID, params?: GetHistoryParams): Promise<Message[]>;
    /**
     * Set a chat's available reactions. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param availableReactions The new available reactions.
     */
    setAvailableReactions(chatId: ID, availableReactions: "none" | "all" | Reaction[]): Promise<void>;
    /**
     * Set a chat's photo.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param photo A photo to set as the chat's photo.
     */
    setChatPhoto(chatId: ID, photo: FileSource, params?: SetChatPhotoParams): Promise<void>;
    /**
     * Delete a chat's photo.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    deleteChatPhoto(chatId: ID): Promise<void>;
    /**
     * Ban a member from a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param memberId The identifier of the member.
     */
    banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams): Promise<void>;
    /**
     * Unban a member from a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    unbanChatMember(chatId: ID, memberId: ID): Promise<void>;
    /**
     * Kick a member from a chat. Same as a banChatMember call followed by unbanChatMember.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    kickChatMember(chatId: ID, memberId: ID): Promise<void>;
    /**
     * Set the rights of a chat member.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a supergroup.
     * @param memberId The identifier of the member.
     */
    setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams): Promise<void>;
    /**
     * Get the administrators of a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @returns The chat's administrators.
     */
    getChatAdministrators(chatId: ID): Promise<ChatMember[]>;
    /**
     * Enable join requests in a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a channel or a supergroup.
     */
    enableJoinRequests(chatId: ID): Promise<void>;
    /**
     * Disable join requests in a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a channel or a supergroup.
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
     * @param chatId The identifier of a chat.
     * @returns The invite links created for the chat. This might be a subset of the results if they were less than `limit`. The parameters `afterDate` and `afterInviteLink` can be used for pagination.
     */
    getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams): Promise<InviteLink[]>;
    /**
     * Join a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    joinChat(chatId: ID): Promise<void>;
    /**
     * Leave a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    leaveChat(chatId: ID): Promise<void>;
    /**
     * Get information on a user's chat membership.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param userId The identifier of the user.
     */
    getChatMember(chatId: ID, userId: ID): Promise<ChatMember>;
    /**
     * Get the members of a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    getChatMembers(chatId: ID, params?: GetChatMembersParams): Promise<ChatMember[]>;
    /**
     * Set a chat's sticker set.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a supergroup.
     * @param setName The name of the set.
     */
    setChatStickerSet(chatId: ID, setName: string): Promise<void>;
    /**
     * Delete a chat's sticker set.
     *
     * @method ch
     * @param chatId The identifier of a chat. Must be a supergroup.
     */
    deleteChatStickerSet(chatId: ID): Promise<void>;
    /**
     * Set the number of boosts required to circument a chat's default restrictions. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param boosts The number of boosts required to circumvent its restrictions.
     */
    setBoostsRequiredToCircumventRestrictions(chatId: ID, boosts: number): Promise<void>;
    /**
     * Create an invite link.
     *
     * @method ch
     * @param chatId The identifier of a chat to create the invite link for.
     * @returns The newly created invite link.
     */
    createInviteLink(chatId: ID, params?: CreateInviteLinkParams): Promise<InviteLink>;
    /**
     * Approve a join request.
     *
     * @method ch
     * @param chatId The identifier of a chat with the join request.
     * @param userId The user who made the join request.
     */
    approveJoinRequest(chatId: ID, userId: ID): Promise<void>;
    /**
     * Decline a join request.
     *
     * @method ch
     * @param chatId The identifier of a chat with the join request.
     * @param userId The user who made the join request.
     */
    declineJoinRequest(chatId: ID, userId: ID): Promise<void>;
    /**
     * Approve all join requests. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat with the join requests.
     */
    approveJoinRequests(chatId: ID, params?: ApproveJoinRequestsParams): Promise<void>;
    /**
     * Decline all join requests. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat with the join requests.
     */
    declineJoinRequests(chatId: ID, params?: DeclineJoinRequestsParams): Promise<void>;
    /**
     * Get pending join requests in a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat with the join requests.
     */
    getJoinRequests(chatId: ID, params?: GetJoinRequestsParams): Promise<JoinRequest[]>;
    /**
     * Add a single user to a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat to add the user to.
     * @param userId The identifier of the user to add to the chat.
     * @returns An array of FailedInvitation that has at most a length of 1. If empty, it means that the user was added.
     */
    addChatMember(chatId: ID, userId: ID, params?: AddChatMemberParams): Promise<FailedInvitation[]>;
    /**
     * Add multiple users at once to a channel or a supergroup.
     *
     * @method ch
     * @param chatId The identifier of the channel or supergroup to add the users to.
     * @param userId The identifiers of the users to add to the channel or supergroup.
     */
    addChatMembers(chatId: ID, userIds: ID[]): Promise<FailedInvitation[]>;
    /**
     * Open a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat to open.
     */
    openChat(chatId: ID): Promise<void>;
    /**
     * Close a chat previously opened by openChat.
     *
     * @method ch
     * @param chatId The identifier of a chat to close.
     */
    closeChat(chatId: ID): Promise<void>;
    /**
     * Create a group. User-only.
     *
     * @method ch
     * @param title The title of the group.
     * @returns The created group.
     */
    createGroup(title: string, params?: CreateGroupParams): Promise<ChatPGroup>;
    /**
     * Create a supergroup. User-only.
     *
     * @method ch
     * @param title The title of the supergroup.
     * @returns The created supergroup.
     */
    createSupergroup(title: string, params?: CreateSupergroupParams): Promise<ChatPSupergroup>;
    /**
     * Create a channel. User-only.
     *
     * @method ch
     * @param title The title of the channel.
     * @returns The created channel.
     */
    createChannel(title: string, params?: CreateChannelParams): Promise<ChatPChannel>;
    /**
     * Set the time to live of the messages of a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param messageTtl The time to live of the messages in seconds.
     */
    setMessageTtl(chatId: ID, messageTtl: number): Promise<void>;
    /**
     * Archive multiple chats. User-only.
     *
     * @method ch
     * @param chatIds The identifiers of the chats to archive.
     */
    archiveChats(chatIds: ID[]): Promise<void>;
    /**
     * Archive a single chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    archiveChat(chatId: ID): Promise<void>;
    /**
     * Unarchive multiple chats. User-only.
     *
     * @method ch
     * @param chatIds The identifiers of the chats to unarchive.
     */
    unarchiveChats(chatIds: ID[]): Promise<void>;
    /**
     * Unarchive a single chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    unarchiveChat(chatId: ID): Promise<void>;
    /**
     * Get common chats between a user and the current one. User-only.
     *
     * @method ch
     * @param userId The identifier of the user to get the common chats with them.
     */
    getCommonChats(userId: ID, params?: GetCommonChatsParams): Promise<ChatP[]>;
    /**
     * Get the settings of a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    getChatSettings(chatId: ID): Promise<ChatSettings>;
    /**
     * Disable business bots in a private chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of the private chat to disable business bots in.
     */
    disableBusinessBots(chatId: ID): Promise<void>;
    /**
     * Enable business bots in a private chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of the private chat to enable business bots in.
     */
    enableBusinessBots(chatId: ID): Promise<void>;
    /**
     * Disable slow mode in a group. User-only.
     *
     * @method ch
     * @param chatId The identifier of the group to disable slow mode in.
     */
    disableSlowMode(chatId: ID): Promise<void>;
    /**
     * Change slow mode in a group. User-only.
     *
     * @method ch
     * @param chatId The identifier of the group to change slow mode in.
     * @param duration New slow mode duration.
     */
    setSlowMode(chatId: ID, duration: SlowModeDuration): Promise<void>;
    /**
     * Change the title of a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param title The new title.
     */
    setChatTitle(chatId: ID, title: string): Promise<void>;
    /**
     * Change the description of a chat.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param description The new description.
     */
    setChatDescription(chatId: ID, description: string): Promise<void>;
    /**
     * Hide or show the member list of a group to non-admins. User-only.
     *
     * @method ch
     * @param chatId The identifier of the group.
     * @param visible Whether the member list of the group should be visible.
     */
    setMemberListVisibility(chatId: ID, visible: boolean): Promise<void>;
    /**
     * Enable or disable topics in a group. User-only.
     *
     * @method ch
     * @param chatId The identifier of the group.
     * @param enabled Whether topics should be enabled in the group.
     */
    setTopicsEnabled(chatId: ID, enabled: boolean): Promise<void>;
    /**
     * Enable or disable automatic anti-spam in a group. User-only.
     *
     * @method ch
     * @param chatId The identifier of the group.
     * @param enabled Whether automatic anti-spam should be enabled in the group.
     */
    setAntispamEnabled(chatId: ID, enabled: boolean): Promise<void>;
    /**
     * Enable or disable post signatures in a channel. User-only.
     *
     * @method ch
     * @param chatId The identifier of the channel.
     * @param enabled Whether post signatures should be enabled in the channel.
     */
    setSignaturesEnabled(chatId: ID, enabled: boolean, params?: SetSignaturesEnabledParams): Promise<void>;
    /**
     * Delete a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    deleteChat(chatId: ID): Promise<void>;
    /**
     * Get discussion chat suggestions. User-only.
     *
     * @method ch
     */
    getDiscussionChatSuggestions(): Promise<ChatP[]>;
    /**
     * Set a channel's discussion chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a channel.
     * @param discussionChatId The identifier of a chat to use as discussion for the channel.
     */
    setDiscussionChat(chatId: ID, discussionChatId: ID): Promise<void>;
    /**
     * Transfer the ownership of a chat. User-only.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param userId The identifier of the new owner.
     * @param password The password of the current account.
     */
    transferChatOwnership(chatId: ID, userId: ID, password: string): Promise<void>;
    /**
     * Create a forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param title The title of the topic.
     * @returns The created topic.
     */
    createTopic(chatId: ID, title: string, params?: CreateTopicParams): Promise<Topic>;
    /**
     * Edit a forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param topicId The identifier of the topic.
     * @param title The new title of the topic.
     * @returns The new topic.
     */
    editTopic(chatId: ID, topicId: number, title: string, params?: EditTopicParams): Promise<Topic>;
    /**
     * Hide the general forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    hideGeneralTopic(chatId: ID): Promise<void>;
    /**
     * Show the general forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     */
    showGeneralTopic(chatId: ID): Promise<void>;
    /**
     * Close a forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param topicId The identifier of the topic.
     */
    closeTopic(chatId: ID, topicId: number): Promise<void>;
    /**
     * Reopen a forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param topicId The identifier of the topic.
     */
    reopenTopic(chatId: ID, topicId: number): Promise<void>;
    /**
     * Pin a forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param topicId The identifier of the topic.
     */
    pinTopic(chatId: ID, topicId: number): Promise<void>;
    /**
     * Unpin a forum topic.
     *
     * @method ch
     * @param chatId The identifier of a chat.
     * @param topicId The identifier of the topic.
     */
    unpinTopic(chatId: ID, topicId: number): Promise<void>;
    /**
     * Send a callback query. User-only.
     *
     * @method cq
     * @param botId The identifier of the bot to send the callback query to.
     * @param messageId The identifier of the message that includes at a button responsible for the callback query question.
     * @param question The callback query's question.
     * @returns The bot's answer to the callback query.
     * @cache
     */
    sendCallbackQuery(botId: ID, messageId: number, question: CallbackQueryQuestion): Promise<CallbackQueryAnswer>;
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
     * @param botId The identifier of a bot to send the inline query to.
     * @param chatId The identifier of the chat from which the inline query is sent.
     * @returns The bot's answer to the inline query.
     * @cache
     */
    sendInlineQuery(botId: ID, chatId: ID, params?: SendInlineQueryParams): Promise<InlineQueryAnswer>;
    /**
     * Answer an inline query. Bot-only.
     *
     * @method iq
     * @param id The identifier of the inline query to answer.
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
    setReactions(chatId: ID, messageId: number, reactions: Reaction[], params?: SetReactionsParams): Promise<void>;
    /**
     * Make a reaction to a message.
     *
     * @method re
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message to add the reaction to.
     * @param reaction The reaction to add.
     */
    addReaction(chatId: ID, messageId: number, reaction: Reaction, params?: AddReactionParams): Promise<void>;
    /**
     * Undo a reaction made to a message.
     *
     * @method re
     * @param chatId The identifier of the chat which the message belongs to.
     * @param messageId The identifier of the message which the reaction was made to.
     * @param reaction The reaction to remove.
     */
    removeReaction(chatId: ID, messageId: number, reaction: Reaction): Promise<void>;
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
     * @param chatId The identifier of a chat.
     * @param storyIds The identifiers of the stories to retrieve.
     * @returns The retrieved stories.
     */
    getStories(chatId: ID, storyIds: number[]): Promise<Story[]>;
    /**
     * Retrieve a single story. User-only.
     *
     * @method st
     * @param chatId The identifier of a chat.
     * @param storyId The identifier of the story to retrieve.
     * @returns The retrieved story.
     */
    getStory(chatId: ID, storyId: number): Promise<Story | null>;
    /**
     * Delete multiple stories. User-only.
     *
     * @method st
     * @param chatId The identifier of a chat.
     * @param storyIds The identifiers of the stories to delete.
     */
    deleteStories(chatId: ID, storyIds: number[]): Promise<void>;
    /**
     * Delete a single story. User-only.
     *
     * @method st
     * @param chatId The identifier of a chat.
     * @param storyId The identifier of the story to delete.
     */
    deleteStory(chatId: ID, storyId: number): Promise<void>;
    /**
     * Add multiple stories to highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of a chat.
     * @param storyIds The identifiers of the stories to add to highlights.
     */
    addStoriesToHighlights(chatId: ID, storyIds: number[]): Promise<void>;
    /**
     * Add a single story to highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of a chat.
     * @param storyId The identifier of the story to add to highlights.
     */
    addStoryToHighlights(chatId: ID, storyId: number): Promise<void>;
    /**
     * Remove multiple stories from highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of a chat.
     * @param storyIds The identifiers of the stories to remove from highlights.
     */
    removeStoriesFromHighlights(chatId: ID, storyIds: number[]): Promise<void>;
    /**
     * Remove a single story from highlights. User-only.
     *
     * @method st
     * @param chatId The identifier of a chat.
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
     * @param chatId The identifier of a chat to start the video chat in.
     * @returns The started video chat.
     */
    startVideoChat(chatId: ID, params?: StartVideoChatParams): Promise<VideoChatActive>;
    /**
     * Schedule a video chat. User-only.
     *
     * @method vc
     * @param chatId The identifier of a chat to schedule the video chat in.
     * @param startAt A point in time within the future in which the video chat will be started.
     * @returns The scheduled video chat.
     */
    scheduleVideoChat(chatId: ID, startAt: number, params?: ScheduleVideoChatParams): Promise<VideoChatScheduled>;
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
     * @cache
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
    /**
     * Answer a pre-checkout query. Bot-only.
     *
     * @method pa
     * @param preCheckoutQueryId The identifier of the pre-checkout query.
     * @param ok Whether the checkout is going to be processed.
     */
    answerPreCheckoutQuery(preCheckoutQueryId: string, ok: boolean, params?: AnswerPreCheckoutQueryParams): Promise<void>;
    /**
     * Refund a star payment. Bot-only.
     *
     * @method pa
     * @param userId The identifier of the user that was charged.
     * @param telegramPaymentChargeId The identifier of the charge.
     */
    refundStarPayment(userId: ID, telegramPaymentChargeId: string): Promise<void>;
    /**
     * Get contacts. User-only.
     *
     * @method co
     */
    getContacts(): Promise<User[]>;
    /**
     * Delete multiple contacts. User-only.
     *
     * @method co
     * @param userIds The identifiers of contacts to delete.
     */
    deleteContacts(userIds: ID[]): Promise<void>;
    /**
     * Delete a single contact. User-only.
     *
     * @method co
     * @param userId The identifier of the contact to delete.
     */
    deleteContact(userId: ID): Promise<void>;
    /**
     * Add a contact. User-only.
     *
     * @method co
     * @param userId The identifier of the user to add as contact.
     */
    addContact(userId: ID, params?: AddContactParams): Promise<void>;
    /**
     * Get translations. User-only.
     *
     * @method ta
     * @cache
     */
    getTranslations(params?: GetTranslationsParams): Promise<Translation[]>;
    /**
     * Get available gifts.
     *
     * @method gf
     */
    getGifts(): Promise<Gift[]>;
    /**
     * Get gifts claimed by a user or a channel. User-only.
     *
     * @method gf
     * @param chatId The identifier of a user or a channel to get gifts for.
     */
    getClaimedGifts(chatId: ID, params?: GetClaimedGiftsParams): Promise<ClaimedGifts>;
    /**
     * Send a gift.
     *
     * @method gf
     * @param chatId The identifier of a user or a channel to send the gift to.
     * @param giftId The identifier of the gift to send.
     */
    sendGift(chatId: ID, giftId: string, params?: SendGiftParams): Promise<void>;
    /**
     * Sell a gift.
     *
     * @method gf
     * @param userId The identifier of the user that sent the gift.
     * @param messageId The identifier of the service message announcing the receival of the gift.
     */
    sellGift(userId: ID, messageId: number): Promise<void>;
    /**
     * Get a gift using its slug.
     *
     * @method gf
     * @param slug The slug of a gift.
     */
    getGift(slug: string): Promise<Gift>;
}
//# sourceMappingURL=5_client.d.ts.map