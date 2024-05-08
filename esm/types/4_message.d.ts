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
import { enums } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { Contact } from "./0_contact.js";
import { Dice } from "./0_dice.js";
import { LinkPreview } from "./0_link_preview.js";
import { Location } from "./0_location.js";
import { MessageEntity } from "./0_message_entity.js";
import { Voice } from "./0_voice.js";
import { Animation } from "./1_animation.js";
import { Audio } from "./1_audio.js";
import { ChatP } from "./1_chat_p.js";
import { Document } from "./1_document.js";
import { Giveaway } from "./1_giveaway.js";
import { MessageReaction } from "./1_message_reaction.js";
import { Photo } from "./1_photo.js";
import { Poll } from "./1_poll.js";
import { ReplyQuote } from "./1_reply_quote.js";
import { Sticker, StickerSetNameGetter } from "./1_sticker.js";
import { User } from "./1_user.js";
import { Venue } from "./1_venue.js";
import { VideoNote } from "./1_video_note.js";
import { Video } from "./1_video.js";
import { Game } from "./2_game.js";
import { ReplyMarkup } from "./3_reply_markup.js";
/**
 * Properties shared between all message types.
 * @unlisted
 */
export interface _MessageBase {
    /** Whether the message is outgoing (sent by the current user). */
    out: boolean;
    /** The identifier of the message. */
    id: number;
    /** The identifier of the message's thread. */
    threadId?: number;
    /** The user who sent the message. */
    from?: User;
    /** The chat which the message was sent on behalf of. */
    senderChat?: ChatP;
    /** The point in time in which the message was sent. */
    date: Date;
    /** The chat where the message was sent to. */
    chat: ChatP;
    /** A link to the message. */
    link?: string;
    /** The original sender of the message. */
    forwardFrom?: User;
    /** The original chat of the message. */
    forwardFromChat?: ChatP;
    /** The original identifier of the message. */
    forwardId?: number;
    /** The original signature of the message. */
    forwardSignature?: string;
    /** The name of the original sender of the message. */
    forwardSenderName?: string;
    /** The point in time in which the original message was sent. */
    forwardDate?: Date;
    /** Whether the message was sent in a topic thread. */
    isTopicMessage: boolean;
    /** Whether the message is an automatic forward. */
    isAutomaticForward?: boolean;
    /** The message that is being replied to. Not always available even if a message is being replied to. */
    replyToMessage?: Message;
    /** The identifier of the message that is being replied to. */
    replyToMessageId?: number;
    /** The reactions of the message. */
    reactions?: MessageReaction[];
    /** The part of the message that is being replied to. */
    replyQuote?: ReplyQuote;
    /** The inline bot that was used to send this message. */
    viaBot?: User;
    /** The point in time in which the message's last edit was made. */
    editDate?: Date;
    /** Whether the contents of the message is protected. */
    hasProtectedContent?: boolean;
    /** The identifier of the message's media group. */
    mediaGroupId?: string;
    /** The signature of the message. */
    authorSignature?: string;
    /** The number of times the message was viewed. */
    views?: number;
    /** The number of times the message was forwarded. */
    forwards?: number;
    /** The message's reply markup. */
    replyMarkup?: ReplyMarkup;
    businessConnectionId?: string;
    senderBoostCount?: number;
    viaBusinessBot?: User;
}
/**
 * Properties shared between media message types.
 * @unlisted
 */
export interface _MessageMediaBase extends _MessageBase {
    caption?: string;
    captionEntities?: MessageEntity[];
    hasMediaSpoiler?: boolean;
}
/**
 * A text message.
 * @unlisted
 */
export interface MessageText extends _MessageBase {
    /** The text included in the message. @discriminator */
    text: string;
    /** Entities of the text. @discriminator */
    entities: MessageEntity[];
    /** The message's link preview. */
    linkPreview?: LinkPreview;
}
/**
 * A message with a link preview only.
 * @unlisted
 */
export interface MessageLink extends _MessageBase {
    /** @discriminator */
    linkPreview: LinkPreview & {
        url: NonNullable<LinkPreview["url"]>;
    };
}
/** @unlisted */
export interface MessagePhoto extends _MessageMediaBase {
    /** The photo included in the message. @discriminator */
    photo: Photo;
}
/**
 * A document message.
 * @unlisted
 */
export interface MessageDocument extends _MessageMediaBase {
    /** The document included in the message. @discriminator */
    document: Document;
}
/**
 * A video message.
 * @unlisted
 */
export interface MessageVideo extends _MessageMediaBase {
    /** The video included in the message. @discriminator */
    video: Video;
}
/**
 * A sticker message.
 * @unlisted
 */
export interface MessageSticker extends _MessageBase {
    /** The sticker included in the message. @discriminator */
    sticker: Sticker;
}
/**
 * An animation message. Animations are GIFs or H.264/MPEG-4 AVC videos without sound.
 * @unlisted
 */
export interface MessageAnimation extends _MessageMediaBase {
    /** The animation included in the message. @discriminator */
    animation: Animation;
}
/**
 * A voice message.
 * @unlisted
 */
export interface MessageVoice extends _MessageMediaBase {
    /** The voice included in the message. @discriminator */
    voice: Voice;
}
/**
 * An audio message.
 * @unlisted
 */
export interface MessageAudio extends _MessageMediaBase {
    /** The audio included in the message. @discriminator */
    audio: Audio;
}
/**
 * A dice message.
 * @unlisted
 */
export interface MessageDice extends _MessageBase {
    /** The dice included in the message. @discriminator */
    dice: Dice;
}
/**
 * A video note message.
 * @unlisted
 */
export interface MessageVideoNote extends _MessageBase {
    /** The video note included in the message. @discriminator */
    videoNote: VideoNote;
}
/**
 * A contact message.
 * @unlisted
 */
export interface MessageContact extends _MessageBase {
    /** The contact included in the message. @discriminator */
    contact: Contact;
}
/**
 * A game message.
 * @unlisted
 */
export interface MessageGame extends _MessageBase {
    /** The game included in the message. @discriminator */
    game: Game;
}
/**
 * A poll message.
 * @unlisted
 */
export interface MessagePoll extends _MessageBase {
    /** The poll included in the message. @discriminator */
    poll: Poll;
}
/**
 * A venue message.
 * @unlisted
 */
export interface MessageVenue extends _MessageBase {
    /** The venue included in the message. @discriminator */
    venue: Venue;
}
/**
 * A location message.
 * @unlisted
 */
export interface MessageLocation extends _MessageBase {
    /** The location included in the message. @discriminator */
    location: Location;
}
/**
 * A message that is received when new members join a chat.
 * @unlisted
 */
export interface MessageNewChatMembers extends _MessageBase {
    /** The new members of the chat. @discriminator */
    newChatMembers: User[];
}
/**
 * A message that is received when a member leaves a chat.
 * @unlisted
 */
export interface MessageLeftChatMember extends _MessageBase {
    /** The member who left the chat. @discriminator */
    leftChatMember: User;
}
/**
 * A message that is received when a chat's title is changed.
 * @unlisted
 */
export interface MessageNewChatTitle extends _MessageBase {
    /** The new title of the chat. @discriminator */
    newChatTitle: string;
}
/**
 * A message that is received when a chat's photo is changed.
 * @unlisted
 */
export interface MessageNewChatPhoto extends _MessageBase {
    /** The new photo of the chat. @discriminator */
    newChatPhoto: Photo;
}
/**
 * A message that is received when a chat's photo is removed.
 * @unlisted
 */
export interface MessageDeletedChatPhoto extends _MessageBase {
    /** @discriminator */
    deletedChatPhoto: true;
}
/**
 * A message that is received by user accounts when a group is created.
 * While bots don't receive them, they are able to see them if someone replies to them.
 * @unlisted
 */
export interface MessageGroupCreated extends _MessageBase {
    /** @discriminator */
    groupCreated: true;
    /** The initial members of the group. @discriminator */
    newChatMembers: User[];
}
/**
 * A message that is received by user accounts when a supergroup is created.
 * While bots don't receive them, they are able to see them if someone replies to them.
 * @unlisted
 */
export interface MessageSupergroupCreated extends _MessageBase {
    /** @discriminator */
    supergroupCreated: true;
}
/**
 * A message that is received by user accounts when a channel is created.
 * While bots don't receive them, they are able to see them if someone replies to them.
 * @unlisted
 */
export interface MessageChannelCreated extends _MessageBase {
    /** @discriminator */
    channelCreated: true;
}
/**
 * A message that is received when a chat's auto-delete timer is changed.
 * @unlisted
 */
export interface MessageAutoDeleteTimerChanged extends _MessageBase {
    /** The new auto-delete time in seconds. @discriminator */
    newAutoDeleteTime: number;
}
/**
 * A message that is received when a supergroup is created as a result of a group migration.
 * @unlisted
 */
export interface MessageChatMigratedTo extends _MessageBase {
    /** The supergroup's ID. @discriminator */
    chatMigratedTo: number;
}
/**
 * A message that is received when a group is migrated to a supergroup.
 * @unlisted
 */
export interface MessageChatMigratedFrom extends _MessageBase {
    /** The group's ID. @discriminator */
    chatMigratedFrom: number;
}
/**
 * A message that is received when a message is pinned in a chat.
 * @unlisted
 */
export interface MessagePinnedMessage extends _MessageBase {
    /** The message that was pinned. @discriminator */
    pinnedMessage: Message;
}
/**
 * A message that is received when a bot account receives a shared user.
 * @unlisted
 */
export interface MessageUserShared extends _MessageBase {
    /** @discriminator */
    userShared: {
        requestId: number;
        userId: number;
    };
}
/**
 * A message that is received when a bot is allowed to message a user.
 * @unlisted
 */
export interface MessageWriteAccessAllowed extends _MessageBase {
    /** @discriminator */
    writeAccessAllowed: {
        miniAppName?: string;
    };
}
/**
 * A message that is received when a new topic is created in a forum.
 * @unlisted
 */
export interface MessageForumTopicCreated extends _MessageBase {
    /** @discriminator */
    forumTopicCreated: {
        name: string;
        iconColor: string;
        iconCutsomEmojiId?: string;
    };
}
/**
 * A message that is received when a topic is edited in a forum.
 * @unlisted
 */
export interface MessageForumTopicEdited extends _MessageBase {
    /** @discriminator */
    forumTopicEdited: {
        name: string;
        iconCutsomEmojiId?: string;
    };
}
/**
 * A message that is received when a topic is closed in a forum.
 * @unlisted
 */
export interface MessageForumTopicClosed extends _MessageBase {
    /** @discriminator */
    forumTopicClosed: true;
}
/**
 * A message that is received when a topic is reopened in a forum.
 * @unlisted
 */
export interface MessageForumTopicReopened extends _MessageBase {
    /** @discriminator */
    forumTopicReopened: true;
}
/**
 * A message that is received when a video chat is scheduled in a chat.
 * @unlisted
 */
export interface MessageVideoChatScheduled extends _MessageBase {
    /** @discriminator */
    videoChatScheduled: {
        startDate: Date;
    };
}
/**
 * A message that is received when a video chat is started in a chat.
 * @unlisted
 */
export interface MessageVideoChatStarted extends _MessageBase {
    /** @discriminator */
    videoChatStarted: true;
}
/**
 * A message that is received when a video chat is ended in a chat.
 * @unlisted
 */
export interface MessageVideoChatEnded extends _MessageBase {
    /** @discriminator */
    videoChatEnded: {
        duration: number;
    };
}
/**
 * A message that is received when a giveaway is started in a chat.
 * @unlisted
 */
export interface MessageGiveaway extends _MessageBase {
    /** @discriminator */
    giveaway: Giveaway;
}
/**
 * An unsupported message.
 * @unlisted
 */
export interface MessageUnsupported extends _MessageBase {
    /** @discriminator */
    unsupported: true;
}
/** @unlisted */
export interface MessageTypes {
    text: MessageText;
    link: MessageLink;
    photo: MessagePhoto;
    document: MessageDocument;
    video: MessageVideo;
    sticker: MessageSticker;
    animation: MessageAnimation;
    voice: MessageVoice;
    audio: MessageAudio;
    dice: MessageDice;
    videoNote: MessageVideoNote;
    contact: MessageContact;
    game: MessageGame;
    poll: MessagePoll;
    venue: MessageVenue;
    location: MessageLocation;
    newChatMembers: MessageNewChatMembers;
    leftChatMember: MessageLeftChatMember;
    newChatTitle: MessageNewChatTitle;
    newChatPhoto: MessageNewChatPhoto;
    deletedChatPhoto: MessageDeletedChatPhoto;
    groupCreated: MessageGroupCreated;
    supergroupCreated: MessageSupergroupCreated;
    channelCreated: MessageChannelCreated;
    newAutoDeleteTime: MessageAutoDeleteTimerChanged;
    chatMigratedTo: MessageChatMigratedTo;
    chatMigratedFrom: MessageChatMigratedFrom;
    pinnedMessage: MessagePinnedMessage;
    userShared: MessageUserShared;
    writeAccessAllowed: MessageWriteAccessAllowed;
    forumTopicCreated: MessageForumTopicCreated;
    forumTopicEdited: MessageForumTopicEdited;
    forumTopicClosed: MessageForumTopicClosed;
    forumTopicReopened: MessageForumTopicReopened;
    videoChatScheduled: MessageVideoChatScheduled;
    videoChatStarted: MessageVideoChatStarted;
    videoChatEnded: MessageVideoChatEnded;
    giveaway: MessageGiveaway;
    unsupported: MessageUnsupported;
}
export declare function assertMessageType<T extends keyof MessageTypes>(message: Message, type: T): MessageTypes[T];
/** Any type of message. */
export type Message = MessageText | MessageLink | MessagePhoto | MessageDocument | MessageVideo | MessageSticker | MessageAnimation | MessageVoice | MessageAudio | MessageDice | MessageVideoNote | MessageContact | MessageGame | MessagePoll | MessageVenue | MessageLocation | MessageNewChatMembers | MessageLeftChatMember | MessageNewChatTitle | MessageNewChatPhoto | MessageDeletedChatPhoto | MessageGroupCreated | MessageSupergroupCreated | MessageChannelCreated | MessageAutoDeleteTimerChanged | MessageChatMigratedTo | MessageChatMigratedFrom | MessagePinnedMessage | MessageUserShared | MessageWriteAccessAllowed | MessageForumTopicCreated | MessageForumTopicEdited | MessageForumTopicClosed | MessageForumTopicReopened | MessageVideoChatScheduled | MessageVideoChatStarted | MessageVideoChatEnded | MessageGiveaway | MessageUnsupported;
/** @unlisted */
export interface MessageGetter {
    (chatId: number, messageId: number): MaybePromise<Message | null>;
}
type Message_MessageGetter = MessageGetter | null;
export declare function constructMessage(message_: enums.Message, getEntity: EntityGetter, getMessage: Message_MessageGetter, getStickerSetName: StickerSetNameGetter, getReply_?: boolean, business?: {
    connectionId: string;
    replyToMessage?: enums.Message;
}): Promise<Message>;
export {};
//# sourceMappingURL=4_message.d.ts.map