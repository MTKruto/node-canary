import { enums } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { ChatAdministratorRights } from "./0_chat_administrator_rights.js";
import { ChatMemberRights } from "./0_chat_member_rights.js";
import { User } from "./1_user.js";
/** @unlisted */
export type ChatMemberStatus = "creator" | "administrator" | "member" | "restricted" | "left" | "banned";
/** @unlisted */
export interface ChatMemberBase {
    status: ChatMemberStatus;
    user: User;
}
/** @unlisted */
export interface ChatMemberCreator extends ChatMemberBase {
    status: "creator";
    isAnonymous: boolean;
    title?: string;
}
/** @unlisted */
export interface ChatMemberAdministrator extends ChatMemberBase {
    status: "administrator";
    rights: ChatAdministratorRights;
    title?: string;
}
/** @unlisted */
export interface ChatMemberMember extends ChatMemberBase {
    status: "member";
}
/** @unlisted */
export interface ChatMemberRestricted extends ChatMemberBase {
    status: "restricted";
    isMember: boolean;
    rights: ChatMemberRights;
    untilDate?: Date;
}
/** @unlisted */
export interface ChatMemberLeft extends ChatMemberBase {
    status: "left";
}
/** @unlisted */
export interface ChatMemberBanned extends ChatMemberBase {
    status: "banned";
    untilDate?: Date;
}
/** A chat member. */
export type ChatMember = ChatMemberCreator | ChatMemberAdministrator | ChatMemberMember | ChatMemberRestricted | ChatMemberLeft | ChatMemberBanned;
export declare function constructChatMember(participant: enums.ChannelParticipant | enums.ChatParticipant, getEntity: EntityGetter): Promise<ChatMember>;
