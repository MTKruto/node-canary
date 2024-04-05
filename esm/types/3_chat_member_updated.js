import { unreachable } from "../0_deps.js";
import { cleanObject, fromUnixTimestamp } from "../1_utilities.js";
import { types } from "../2_tl.js";
import { constructChatP } from "./1_chat_p.js";
import { constructUser } from "./1_user.js";
import { constructChatMember } from "./2_chat_member.js";
import { constructInviteLink } from "./2_invite_link.js";
export async function constructChatMemberUpdated(update, getEntity) {
    if (!update.prev_participant && !update.new_participant) {
        unreachable();
    }
    const chat_ = await getEntity("channel_id" in update ? new types.PeerChannel(update) : new types.PeerChat(update));
    const from_ = await getEntity(new types.PeerUser({ user_id: update.actor_id }));
    if (!chat_ || !from_) {
        unreachable();
    }
    const userPeer = new types.PeerUser(update);
    const chat = constructChatP(chat_);
    const from = constructUser(from_);
    const date = fromUnixTimestamp(update.date);
    const oldChatMember = await constructChatMember(update.prev_participant ?? new types.ChannelParticipantLeft({ peer: userPeer }), getEntity);
    const newChatMember = await constructChatMember(update.new_participant ?? new types.ChannelParticipantLeft({ peer: userPeer }), getEntity);
    const viaSharedFolder = "via_chatlist" in update ? update.via_chatlist ? true : update.invite ? false : undefined : undefined;
    const inviteLink = (update.invite && update.invite instanceof types.ChatInviteExported) ? await constructInviteLink(update.invite, getEntity) : undefined;
    return cleanObject({
        chat,
        from,
        date,
        oldChatMember,
        newChatMember,
        viaSharedFolder,
        inviteLink,
    });
}
