import { cleanObject, fromUnixTimestamp, UNREACHABLE } from "../1_utilities.js";
import { types } from "../2_tl.js";
import { constructChatAdministratorRights } from "./0_chat_administrator_rights.js";
import { constructChatMemberRights } from "./0_chat_member_rights.js";
import { constructUser } from "./1_user.js";
export async function constructChatMember(participant, getEntity) {
    const user_ = "user_id" in participant ? await getEntity(new types.PeerUser(participant)) : "peer" in participant ? participant.peer instanceof types.PeerUser ? await getEntity(participant.peer) : UNREACHABLE() : UNREACHABLE(); // TODO: support other peer types
    if (user_ == null)
        UNREACHABLE();
    const user = constructUser(user_);
    if (participant instanceof types.ChannelParticipant || participant instanceof types.ChatParticipant) {
        return {
            status: "member",
            user,
        };
    }
    else if (participant instanceof types.ChannelParticipantCreator) {
        return cleanObject({
            status: "creator",
            user,
            isAnonymous: participant.admin_rights.anonymous ? true : false,
            title: participant.rank,
        });
    }
    else if (participant instanceof types.ChannelParticipantAdmin) {
        return cleanObject({
            status: "administrator",
            user,
            rights: constructChatAdministratorRights(participant.admin_rights),
            title: participant.rank,
        });
    }
    else if (participant instanceof types.ChannelParticipantBanned) {
        const untilDate = participant.banned_rights.until_date ? fromUnixTimestamp(participant.banned_rights.until_date) : undefined;
        if (!participant.banned_rights.view_messages) {
            participant.peer;
            return cleanObject({
                status: "banned",
                user,
                untilDate,
            });
        }
        const isMember = participant.left ? true : false;
        const rights = constructChatMemberRights(participant.banned_rights);
        return cleanObject({
            status: "restricted",
            user,
            isMember,
            rights,
            untilDate,
        });
    }
    else if (participant instanceof types.ChannelParticipantSelf) {
        UNREACHABLE(); // TODO: implement
    }
    else if (participant instanceof types.ChannelParticipantLeft) {
        return { status: "left", user };
    }
    else if (participant instanceof types.ChatParticipantAdmin) {
        return cleanObject({
            status: "administrator",
            user,
            rights: {
                isAnonymous: false,
                canManageChat: true,
                canDeleteMessages: true,
                canManageVideoChats: false,
                canRestrictMembers: true,
                canPromoteMembers: false,
                canChangeInfo: true,
                canInviteUsers: true,
                canPostMessages: false,
                canEditMessages: false,
                canPinMessages: true,
                canManageTopics: false,
            },
        });
    }
    else if (participant instanceof types.ChatParticipantCreator) {
        return cleanObject({
            status: "creator",
            user,
            isAnonymous: false,
        });
    }
    else {
        UNREACHABLE();
    }
}
