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
import { AuthorizationState } from "./0_authorization_state.js";
import { ConnectionState } from "./0_connection_state.js";
import { MessageReference } from "./0_message_reference.js";
import { StoryReference } from "./0_story_reference.js";
import { Translation } from "./0_translation.js";
import { VideoChat } from "./0_video_chat.js";
import { VoiceTranscription } from "./0_voice_transcription.js";
import { BusinessConnection } from "./2_business_connection.js";
import { ChosenInlineResult } from "./2_chosen_inline_result.js";
import { InlineQuery } from "./2_inline_query.js";
import { MessageInteractions } from "./2_message_interactions.js";
import { MessageReactionCount } from "./2_message_reaction_count.js";
import { MessageReactions } from "./2_message_reactions.js";
import { PollAnswer } from "./2_poll_answer.js";
import { Poll } from "./2_poll.js";
import { PreCheckoutQuery } from "./2_pre_checkout_query.js";
import { ChatMemberUpdated } from "./3_chat_member_updated.js";
import { JoinRequest } from "./3_join_request.js";
import { Story } from "./3_story.js";
import { LinkPreview } from "./4_link_preview.js";
import { Message } from "./5_message.js";
import { CallbackQuery } from "./6_callback_query.js";
import { ChatListItem } from "./6_chat_list_item.js";
/**
 * A client's connection state was changed.
 *
 * ```
 * client.on("connectionState", (ctx) => {
 *   console.log("The client's connection state is now:", ctx.connectionState);
 * });
 * ```
 * @unlisted
 */
export interface UpdateConnectionState {
    /**
     * The client's new connection state
     * @discriminator
     */
    connectionState: ConnectionState;
}
/**
 * A client's authorization state was changed.
 *
 * ```
 * client.on("authorizationState", async (ctx) => {
 *   if (ctx.authorizationState.authorized) {
 *     const me = await ctx.client.getMe();
 *     console.log("The client is now authorized as", me.firstName);
 *   } else {
 *     console.log("The client is no longer authorized.")
 *   }
 * });
 * ```
 * @unlisted
 */
export interface UpdateAuthorizationState {
    /**
     *  The client's new authorization state
     * @discriminator
     */
    authorizationState: AuthorizationState;
}
/**
 * A message was sent or received.
 *
 * ```
 * // Handle text messages
 * client.on("message:text", (ctx) => {
 *   const receivedOrSent = ctx.message.out ? "sent" : "received";
 *   console.log("Just", receivedOrSent, "a text message:", ctx.message.text);
 * });
 *
 * // Handle other messages
 * client.on("message", (ctx) => {
 *   if (ctx.message.out) {
 *    console.log("Just sent a message.");
 *   }
 * });
 * ```
 *
 * Note that updates on outgoing messages are disabled by default for bots.
 * @unlisted
 */
export interface UpdateNewMessage {
    /**
     * The sent or received message
     * @discriminator
     */
    message: Message;
}
/**
 * A message was edited.
 *
 * ```
 * client.on("editedMessage", (ctx) => {
 *   console.log("A message was just edited.");
 *   // ctx.editedMessage
 * });
 * ```
 * @unlisted
 */
export interface UpdateMessageEdited {
    /**
     * The edited message.
     * @discriminator
     */
    editedMessage: Message;
}
/**
 * A message was scheduled. User-only.
 *
 * ```
 * client.on("scheduledMessage", (ctx) => {
 *   console.log("A message was just schedueld.");
 *   // ctx.scheduledMessage
 * });
 * ```
 * @unlisted
 */
export interface UpdateMessageScheduled {
    /**
     * The scheduled message.
     * @discriminator
     */
    scheduledMessage: Message;
}
/**
 * One or more messages were deleted.
 *
 * ```
 * client.on("deletedMessages", (ctx) => {
 *   for (const deletedMessage of ctx.deletedMessages) {
 *     console.log(deletedMessage);
 *   }
 * });
 * ```
 * @unlisted
 */
export interface UpdateMessagesDeleted {
    /**
     * The deleted messages
     * @discriminator
     */
    deletedMessages: MessageReference[];
    scheduled?: boolean;
    businessConnectionId?: string;
}
/**
 * A callback query was made (a user presses an inline button). Bot-only.
 *
 * ```
 * client.on("callbackQuery", async (ctx) => {
 *   await ctx.answerCallbackQuery(ctx.callbackQuery.data, { alert: true });
 * });
 * ```
 * @unlisted
 */
export interface UpdateCallbackQuery {
    /**
     * The received callback query
     * @discriminator
     */
    callbackQuery: CallbackQuery;
}
/**
 * An inline query was received. Bot-only.
 *
 * ```
 * client.on("inlineQuery", (ctx) => {
 *   const { from, query } = ctx.inlineQuery;
 *   console.log("User", from.id, "sent an inline query:", query);
 * });
 * ```
 * @unlisted
 */
export interface UpdateInlineQuery {
    /**
     *  The received inline query
     * @discriminator
     */
    inlineQuery: InlineQuery;
}
/**
 * An inline query result was chosen. Bot-only.
 * @unlisted
 */
export interface UpdateChosenInlineResult {
    /**
     * The chosen inline query result
     * @discriminator
     */
    chosenInlineResult: ChosenInlineResult;
}
/**
 * A new chat was added to the chat list. User-only.
 * @unlisted
 */
export interface UpdateNewChat {
    /**
     * The newly added chat
     * @discriminator
     */
    newChat: ChatListItem;
}
/**
 * A chat in the chat list was edited. User-only.
 * @unlisted
 */
export interface UpdateEditedChat {
    /** @discriminator */
    editedChat: ChatListItem;
}
/**
 * A chat was removed from the chat list. User-only.
 * @unlisted
 */
export interface UpdateDeletedChat {
    /**
     *  The chat that was deleted
     * @discriminator
     */
    deletedChat: {
        chatId: number;
    };
}
/**
 * The interactions of a message were updated. User-only.
 * @unlisted
 */
export interface UpdateMessageInteractions {
    /**
     * The new message interactions
     * @discriminator
     */
    messageInteractions: MessageInteractions;
}
/**
 * The anonymous reactions made to a message were changed. Bot-only.
 * @unlisted
 */
export interface UpdateMessageReactionCount {
    /**
     * The new message reactions
     * @discriminator
     */
    messageReactionCount: MessageReactionCount;
}
/**
 * The reactions made to a message by a user were changed. Bot-only.
 * @unlisted
 */
export interface UpdateMessageReactions {
    /** @discriminator */
    messageReactions: MessageReactions;
}
/**
 * The status of a chat member was changed.
 * @unlisted
 */
export interface UpdateChatMember {
    /** @discriminator */
    chatMember: ChatMemberUpdated;
}
/**
 * The status of the current account was changed in a chat.
 * @unlisted
 */
export interface UpdateMyChatMember {
    /** @discriminator */
    myChatMember: ChatMemberUpdated;
}
/**
 * A story was deleted.
 *
 * ```
 * client.on("deletedStory", (ctx) => {
 *   console.log("The story", ctx.deletedStory, "was deleted");
 * });
 * ```
 * @unlisted
 */
export interface UpdateDeletedStory {
    /** @discriminator */
    deletedStory: StoryReference;
}
/**
 * A story was posted.
 *
 * ```
 * client.on("story", (ctx) => {
 *   console.log("title" in ctx.chat ? ctx.chat.title : ctx.chat.firstName, "posted a story");
 *   console.log(ctx.story);
 * });
 * ```
 * @unlisted
 */
export interface UpdateNewStory {
    /** @discriminator */
    story: Story;
}
/**
 * A business connection was added, modified, or removed.
 *
 * ```
 * client.on("businessConnection", (ctx) => {
 *   console.log("Business connection with", ctx.from.id, ctx.businessConnection.isEnabled ? "created" : "lost");
 *   console.log(ctx.businessConnection);
 * });
 * ```
 * @unlisted
 */
export interface UpdateBusinessConnection {
    /** @discriminator */
    businessConnection: BusinessConnection;
}
/**
 * A video chat was started, scheduled, or ended.
 *
 * ```
 * client.on("videoChat", (ctx) => {
 *   console.log("Video chat", ctx.videoChat.type);
 *   console.log(ctx.videoChat);
 * });
 * ```
 * @unlisted
 */
export interface UpdateVideoChat {
    /** @discriminator */
    videoChat: VideoChat;
}
/** @unlisted */
export interface UpdatePreCheckoutQuery {
    /** @discriminator */
    preCheckoutQuery: PreCheckoutQuery;
}
/**
 * A user requested to join a chat. Bot-only.
 * @unlisted
 */
export interface UpdateJoinRequest {
    /** @discriminator */
    joinRequest: JoinRequest;
}
/**
 * Translations were updated.
 *
 * ```
 * client.on("translations", (ctx) => {
 *   console.log("Translations were just updated.");
 *   // ctx.translations
 * });
 * ```
 * @unlisted
 */
export interface UpdateTranslations {
    /**
     * The new translations.
     * @discriminator
     */
    translations: Translation[];
    /** The platform of the translations that were updated. */
    platform: string;
    /** The language of the translations that were updated. */
    language: string;
}
/**
 * A poll was updated.
 *
 * ```
 * client.on("poll", (ctx) => {
 *   console.log("A poll just changed.");
 *   // ctx.poll
 * });
 * ```
 * @unlisted
 */
export interface UpdatePoll {
    /**
     * The poll with its new state.
     * @discriminator
     */
    poll: Poll;
}
/**
 * A poll was answered.
 *
 * ```
 * client.on("pollAnswer", (ctx) => {
 *   console.log("A poll just got an answer.");
 *   // ctx.poll
 * });
 * ```
 * @unlisted
 */
export interface UpdatePollAnswer {
    /**
     * The poll answer.
     * @discriminator
     */
    pollAnswer: PollAnswer;
}
/**
 * A voice transcription was updated.
 *
 * ```
 * client.on("voiceTranscription", (ctx) => {
 *   // ctx.voiceTranscription
 * });
 * ```
 * @unlisted
 */
export interface UpdateVoiceTranscription {
    /**
     * The new voice transcription.
     * @discriminator
     */
    voiceTranscription: VoiceTranscription;
}
/**
 * A link preview was updated.
 *
 * ```
 * client.on("linkPreview", (ctx) => {
 *   // ctx.linkPreview
 * });
 * ```
 * @unlisted
 */
export interface UpdateLinkPreview {
    /**
     * The new link preview.
     * @discriminator
     */
    linkPreview: LinkPreview;
}
/** @unlisted */
export interface UpdateMap {
    message: UpdateNewMessage;
    editedMessage: UpdateMessageEdited;
    scheduledMessage: UpdateMessageScheduled;
    connectionState: UpdateConnectionState;
    authorizationState: UpdateAuthorizationState;
    deletedMessages: UpdateMessagesDeleted;
    callbackQuery: UpdateCallbackQuery;
    inlineQuery: UpdateInlineQuery;
    chosenInlineResult: UpdateChosenInlineResult;
    newChat: UpdateNewChat;
    editedChat: UpdateEditedChat;
    deletedChat: UpdateDeletedChat;
    messageInteractions: UpdateMessageInteractions;
    messageReactionCount: UpdateMessageReactionCount;
    messageReactions: UpdateMessageReactions;
    chatMember: UpdateChatMember;
    myChatMember: UpdateMyChatMember;
    deletedStory: UpdateDeletedStory;
    story: UpdateNewStory;
    businessConnection: UpdateBusinessConnection;
    videoChat: UpdateVideoChat;
    preCheckoutQuery: UpdatePreCheckoutQuery;
    joinRequest: UpdateJoinRequest;
    translations: UpdateTranslations;
    poll: UpdatePoll;
    pollAnswer: UpdatePollAnswer;
    voiceTranscription: UpdateVoiceTranscription;
    linkPreview: UpdateLinkPreview;
}
/** @unlisted */
export type UpdateIntersection = Partial<UpdateConnectionState & UpdateAuthorizationState & UpdateNewMessage & UpdateMessageEdited & UpdateMessageScheduled & UpdateMessagesDeleted & UpdateCallbackQuery & UpdateInlineQuery & UpdateChosenInlineResult & UpdateNewChat & UpdateEditedChat & UpdateDeletedChat & UpdateMessageInteractions & UpdateMessageReactionCount & UpdateMessageReactions & UpdateChatMember & UpdateMyChatMember & UpdateDeletedStory & UpdateNewStory & UpdateBusinessConnection & UpdateVideoChat & UpdatePreCheckoutQuery & UpdateJoinRequest & UpdateTranslations & UpdatePoll & UpdatePollAnswer & UpdateVoiceTranscription & UpdateLinkPreview>;
/** An incoming update. */
export type Update = UpdateConnectionState | UpdateAuthorizationState | UpdateNewMessage | UpdateMessageEdited | UpdateMessageScheduled | UpdateMessagesDeleted | UpdateCallbackQuery | UpdateInlineQuery | UpdateChosenInlineResult | UpdateNewChat | UpdateEditedChat | UpdateDeletedChat | UpdateMessageInteractions | UpdateMessageReactionCount | UpdateMessageReactions | UpdateChatMember | UpdateMyChatMember | UpdateDeletedStory | UpdateNewStory | UpdateBusinessConnection | UpdateVideoChat | UpdatePreCheckoutQuery | UpdateJoinRequest | UpdateTranslations | UpdatePoll | UpdatePollAnswer | UpdateVoiceTranscription | UpdateLinkPreview;
//# sourceMappingURL=7_update.d.ts.map