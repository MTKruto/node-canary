"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructChatMember = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_chat_administrator_rights_js_1 = require("./0_chat_administrator_rights.js");
const _0_chat_member_rights_js_1 = require("./0_chat_member_rights.js");
const _1_user_js_1 = require("./1_user.js");
async function constructChatMember(participant, getEntity) {
    const user_ = "user_id" in participant ? await getEntity(new _2_tl_js_1.types.PeerUser(participant)) : "peer" in participant ? participant.peer instanceof _2_tl_js_1.types.PeerUser ? await getEntity(participant.peer) : (0, _1_utilities_js_1.UNREACHABLE)() : (0, _0_deps_js_1.unreachable)(); // TODO: support other peer types
    if (user_ == null)
        (0, _0_deps_js_1.unreachable)();
    const user = (0, _1_user_js_1.constructUser)(user_);
    if (participant instanceof _2_tl_js_1.types.ChannelParticipant || participant instanceof _2_tl_js_1.types.ChatParticipant) {
        return {
            status: "member",
            user,
        };
    }
    else if (participant instanceof _2_tl_js_1.types.ChannelParticipantCreator) {
        return (0, _1_utilities_js_1.cleanObject)({
            status: "creator",
            user,
            isAnonymous: participant.admin_rights.anonymous ? true : false,
            title: participant.rank,
        });
    }
    else if (participant instanceof _2_tl_js_1.types.ChannelParticipantAdmin) {
        return (0, _1_utilities_js_1.cleanObject)({
            status: "administrator",
            user,
            rights: (0, _0_chat_administrator_rights_js_1.constructChatAdministratorRights)(participant.admin_rights),
            title: participant.rank,
        });
    }
    else if (participant instanceof _2_tl_js_1.types.ChannelParticipantBanned) {
        const untilDate = participant.banned_rights.until_date ? (0, _1_utilities_js_1.fromUnixTimestamp)(participant.banned_rights.until_date) : undefined;
        if (!participant.banned_rights.view_messages) {
            participant.peer;
            return (0, _1_utilities_js_1.cleanObject)({
                status: "banned",
                user,
                untilDate,
            });
        }
        const isMember = participant.left ? true : false;
        const rights = (0, _0_chat_member_rights_js_1.constructChatMemberRights)(participant.banned_rights);
        return (0, _1_utilities_js_1.cleanObject)({
            status: "restricted",
            user,
            isMember,
            rights,
            untilDate,
        });
    }
    else if (participant instanceof _2_tl_js_1.types.ChannelParticipantSelf) {
        (0, _0_deps_js_1.unreachable)(); // TODO: implement
    }
    else if (participant instanceof _2_tl_js_1.types.ChannelParticipantLeft) {
        return { status: "left", user };
    }
    else if (participant instanceof _2_tl_js_1.types.ChatParticipantAdmin) {
        return (0, _1_utilities_js_1.cleanObject)({
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
    else if (participant instanceof _2_tl_js_1.types.ChatParticipantCreator) {
        return (0, _1_utilities_js_1.cleanObject)({
            status: "creator",
            user,
            isAnonymous: false,
        });
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
exports.constructChatMember = constructChatMember;
