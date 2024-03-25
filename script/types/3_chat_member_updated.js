"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructChatMemberUpdated = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_user_js_1 = require("./1_user.js");
const _2_chat_member_js_1 = require("./2_chat_member.js");
const _2_invite_link_js_1 = require("./2_invite_link.js");
async function constructChatMemberUpdated(update, getEntity) {
    if (!update.prev_participant && !update.new_participant) {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
    const chat_ = await getEntity("channel_id" in update ? new _2_tl_js_1.types.PeerChannel(update) : new _2_tl_js_1.types.PeerChat(update));
    const from_ = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: update.actor_id }));
    if (!chat_ || !from_) {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
    const userPeer = new _2_tl_js_1.types.PeerUser(update);
    const chat = (0, _1_chat_p_js_1.constructChatP)(chat_);
    const from = (0, _1_user_js_1.constructUser)(from_);
    const date = (0, _1_utilities_js_1.fromUnixTimestamp)(update.date);
    const oldChatMember = await (0, _2_chat_member_js_1.constructChatMember)(update.prev_participant ?? new _2_tl_js_1.types.ChannelParticipantLeft({ peer: userPeer }), getEntity);
    const newChatMember = await (0, _2_chat_member_js_1.constructChatMember)(update.new_participant ?? new _2_tl_js_1.types.ChannelParticipantLeft({ peer: userPeer }), getEntity);
    const viaSharedFolder = "via_chatlist" in update ? update.via_chatlist ? true : update.invite ? false : undefined : undefined;
    const inviteLink = (update.invite && update.invite instanceof _2_tl_js_1.types.ChatInviteExported) ? await (0, _2_invite_link_js_1.constructInviteLink)(update.invite, getEntity) : undefined;
    return (0, _1_utilities_js_1.cleanObject)({
        chat,
        from,
        date,
        oldChatMember,
        newChatMember,
        viaSharedFolder,
        inviteLink,
    });
}
exports.constructChatMemberUpdated = constructChatMemberUpdated;
