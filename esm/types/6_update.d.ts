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
import { AuthorizationState } from "./0_authorization_state.js";
import { ConnectionState } from "./0_connection_state.js";
import { MessageReference } from "./0_message_reference.js";
import { StoryReference } from "./0_story_reference.js";
import { BusinessConnection } from "./2_business_connection.js";
import { ChosenInlineResult } from "./2_chosen_inline_result.js";
import { InlineQuery } from "./2_inline_query.js";
import { MessageInteractions } from "./2_message_interactions.js";
import { MessageReactionCount } from "./2_message_reaction_count.js";
import { MessageReactions } from "./2_message_reactions.js";
import { ChatMemberUpdated } from "./3_chat_member_updated.js";
import { Story } from "./3_story.js";
import { Message } from "./4_message.js";
import { CallbackQuery } from "./5_callback_query.js";
import { ChatListItem } from "./5_chat_list_item.js";
import { VideoChat } from "./0_video_chat.js";
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
    /** The client's new connection state. */
    connectionState: ConnectionState;
}
/**
 * A client's authorization state was changed.
 *
 * ```
 * client.on("authorizationState", (ctx) => {
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
    /** The client's new authorization state. */
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
    /** The sent or received message. */
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
export interface UpdateEditedMessage {
    /** The edited message. */
    editedMessage: Message;
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
export interface UpdateDeletedMessages {
    /** The deleted messages. */
    deletedMessages: MessageReference[];
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
    /** The received callback query. */
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
    /** The received inline query. */
    inlineQuery: InlineQuery;
}
/**
 * An inline query result was chosen. Bot-only.
 * @unlisted
 */
export interface UpdateChosenInlineResult {
    /** The chosen inline query result. */
    chosenInlineResult: ChosenInlineResult;
}
/**
 * A new chat was added to the chat list. User-only.
 * @unlisted
 */
export interface UpdateNewChat {
    /** The newly added chat. */
    newChat: ChatListItem;
}
/**
 * A chat in the chat list was edited. User-only.
 * @unlisted
 */
export interface UpdateEditedChat {
    editedChat: ChatListItem;
}
/**
 * A chat was removed from the chat list. User-only.
 * @unlisted
 */
export interface UpdateDeletedChat {
    /** The chat that was deleted. */
    deletedChat: {
        chatId: number;
    };
}
/**
 * The interactions of a message were updated. User-only.
 * @unlisted
 */
export interface UpdateMessageInteractions {
    /** The new message interactions. */
    messageInteractions: MessageInteractions;
}
/**
 * The anonymous reactions made to a message were changed. Bot-only.
 * @unlisted
 */
export interface UpdateMessageReactionCount {
    /** The new message reactions. */
    messageReactionCount: MessageReactionCount;
}
/**
 * The reactions made to a message by a user were changed. Bot-only.
 * @unlisted
 */
export interface UpdateMessageReactions {
    messageReactions: MessageReactions;
}
/**
 * The status of a chat member was changed.
 * @unlisted
 */
export interface UpdateChatMember {
    chatMember: ChatMemberUpdated;
}
/**
 * The status of the current account was changed in a chat.
 * @unlisted
 */
export interface UpdateMyChatMember {
    myChatMember: ChatMemberUpdated;
}
/**
 * A story was deleted.
 * @unlisted
 */
export interface UpdateDeletedStory {
    deletedStory: StoryReference;
}
/**
 * A story was posted.
 * @unlisted
 */
export interface UpdateNewStory {
    story: Story;
}
/**
 * A business connection was added, modified, or removed.
 * @unlisted
 */
export interface UpdateBusinessConnection {
    businessConnection: BusinessConnection;
}
/**
 * A video chat was started, scheduled, or ended.
 * @unlisted
 */
export interface UpdateVideoChat {
    videoChat: VideoChat;
}
/** @unlisted */
export interface UpdateMap {
    message: UpdateNewMessage;
    editedMessage: UpdateEditedMessage;
    connectionState: UpdateConnectionState;
    authorizationState: UpdateAuthorizationState;
    deletedMessages: UpdateDeletedMessages;
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
}
/** @unlisted */
export type UpdateIntersection<T> = T & Partial<UpdateConnectionState & UpdateAuthorizationState & UpdateNewMessage & UpdateEditedMessage & UpdateDeletedMessages & UpdateCallbackQuery & UpdateInlineQuery & UpdateChosenInlineResult & UpdateNewChat & UpdateEditedChat & UpdateDeletedChat & UpdateMessageInteractions & UpdateMessageReactionCount & UpdateMessageReactions & UpdateChatMember & UpdateMyChatMember & UpdateDeletedStory & UpdateNewStory & UpdateBusinessConnection & UpdateVideoChat>;
/** An incoming update. */
export type Update = UpdateConnectionState | UpdateAuthorizationState | UpdateNewMessage | UpdateEditedMessage | UpdateDeletedMessages | UpdateCallbackQuery | UpdateInlineQuery | UpdateChosenInlineResult | UpdateNewChat | UpdateEditedChat | UpdateDeletedChat | UpdateMessageInteractions | UpdateMessageReactionCount | UpdateMessageReactions | UpdateChatMember | UpdateMyChatMember | UpdateDeletedStory | UpdateNewStory | UpdateBusinessConnection | UpdateVideoChat;
//# sourceMappingURL=6_update.d.ts.map