import { enums, types } from "../2_tl.js";
/** The rights of a chat administrator. */
export interface ChatAdministratorRights {
    /** Whether the admininistrator's presence in the chat is hidden. */
    isAnonymous: boolean;
    /** Whether the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups and surpass slow mode. */
    canManageChat: boolean;
    /** Whether the administrator can delete messages of other users. */
    canDeleteMessages: boolean;
    /** Whether the administrator can manage video chats. */
    canManageVideoChats: boolean;
    /** Whether the administrator can restrict, ban or unban chat members. */
    canRestrictMembers: boolean;
    /** Whether the administrator can promote regular members to admininistrators. */
    canPromoteMembers: boolean;
    /** Whether the administrator can change the name of the chat, its photo, description and some other settings. */
    canChangeInfo: boolean;
    /** Whether the administrator can invite users to the chat. */
    canInviteUsers: boolean;
    /** Whether the administrator can make posts in the channel. Only available for channels. */
    canPostMessages?: boolean;
    /** Whether the administrator can pin posts and edit posts they didn't send. Only available for channels. */
    canEditMessages?: boolean;
    /** Whether the administrator can pin messages. Only available for groups and supergroups. */
    canPinMessages?: boolean;
    /** Whether the administrator can manage topics. Only available for supergroups. */
    canManageTopics?: boolean;
}
export declare function constructChatAdministratorRights(rights_: enums.ChatAdminRights): ChatAdministratorRights;
export declare function chatAdministratorRightsToTlObject(rights: ChatAdministratorRights): types.ChatAdminRights;
