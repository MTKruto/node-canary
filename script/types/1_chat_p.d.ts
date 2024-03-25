import { types } from "../2_tl.js";
import { RestrictionReason } from "./0_restriction_reason.js";
/** @unlisted */
export type ChatType = "private" | "group" | "supergroup" | "channel";
/** @unlisted */
export interface _ChatPBase {
    /** The identifier of the chat. */
    id: number;
    /** The type of the chat. */
    type: ChatType;
    /** Identifier of a color that can be displayed instead of the chat's photo. */
    color: number;
}
/** @unlisted */
export interface ChatPPrivate extends _ChatPBase {
    type: "private";
    /** Whether this is a bot's chat. */
    isBot?: boolean;
    /** The first name of the user. */
    firstName: string;
    /** The last name of the user. */
    lastName?: string;
    /** The user's main username. */
    username?: string;
    /** Whether the user has been identified as scam. */
    isScam: boolean;
    /** Whether the user has been identified as an impersonator. */
    isFake: boolean;
    /** Whether the user is official support. */
    isSupport: boolean;
    /** Whether the user has been verified. */
    isVerified: boolean;
    /** Whether the user has been restricted. */
    isRestricted?: boolean;
    /** The reason why the user has been restricted. */
    restrictionReason?: RestrictionReason[];
}
/** @unlisted */
export interface ChatPGroup extends _ChatPBase {
    type: "group";
    /** The title of the chat. */
    title: string;
    /** Whether the current user is the owner of the chat. */
    isCreator: boolean;
}
/** @unlisted */
export interface ChatPChannelBase extends _ChatPBase {
    /** The title of the chat or channel. */
    title: string;
    /** The main username of the chat or channel. */
    username?: string;
    /** Whether the chat or channel has been identified as scam. */
    isScam: boolean;
    /** Whether the chat or channel has been identified as an impersonator. */
    isFake: boolean;
    /** Whether the chat or channel has been verified. */
    isVerified: boolean;
    /** Whether the chat or channel has been restricted. */
    isRestricted: boolean;
    /** The reason why the chat or channel has been restricted. */
    restrictionReason?: RestrictionReason[];
}
/** @unlisted */
export interface ChatPChannel extends ChatPChannelBase {
    type: "channel";
}
/** @unlisted */
export interface ChatPSupergroup extends ChatPChannelBase {
    type: "supergroup";
    /** Whether the chat is a forum. */
    isForum: boolean;
}
/**
 * A chat with lesser fields.
 */
export type ChatP = ChatPPrivate | ChatPGroup | ChatPSupergroup | ChatPChannel;
export declare function constructChatP(chat: types.User): ChatPPrivate;
export declare function constructChatP(chat: types.Chat | types.ChatForbidden): ChatPGroup;
export declare function constructChatP(chat: types.Channel | types.ChannelForbidden): ChatPSupergroup | ChatPChannel;
export declare function constructChatP(chat: types.User | types.Chat | types.ChatForbidden | types.Channel | types.ChannelForbidden): ChatP;