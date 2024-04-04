import { types } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { ChatP } from "./1_chat_p.js";
import { User } from "./1_user.js";
import { ChatMember } from "./2_chat_member.js";
import { InviteLink } from "./2_invite_link.js";
/** Changes made to a chat member. */
export interface ChatMemberUpdated {
    /** The chat in which the change was made. */
    chat: ChatP;
    /** The one who made the change. */
    from: User;
    /** The point of time in which the chat member's status was changed. */
    date: Date;
    /** The old status of the chat member. */
    oldChatMember: ChatMember;
    /** The new status of the chat member. */
    newChatMember: ChatMember;
    /** The invite link used to join. */
    inviteLink?: InviteLink;
    /** Whether the user joined from a shared folder. */
    viaSharedFolder?: boolean;
}
export declare function constructChatMemberUpdated(update: types.UpdateChannelParticipant | types.UpdateChatParticipant, getEntity: EntityGetter): Promise<ChatMemberUpdated>;
