import { unreachable } from "../0_deps.js";
import { cleanObject, getColorFromPeerId, ZERO_CHANNEL_ID } from "../1_utilities.js";
import { types } from "../2_tl.js";
import { constructRestrictionReason } from "./0_restriction_reason.js";
export function constructChatP(chat) {
    if (chat instanceof types.User) {
        const id = Number(chat.id);
        const chat_ = {
            id,
            type: "private",
            isBot: chat.bot || false,
            color: chat.color?.color !== undefined ? chat.color.color : getColorFromPeerId(id),
            firstName: chat.first_name || "",
            lastName: chat.last_name,
            isScam: chat.scam || false,
            isFake: chat.fake || false,
            isSupport: chat.support || false,
            isVerified: chat.verified || false,
        };
        if (chat_.isBot) {
            chat_.isRestricted = chat.restricted || false;
            chat_.restrictionReason = chat.restriction_reason;
        }
        return cleanObject(chat_);
    }
    else if (chat instanceof types.Chat || chat instanceof types.ChatForbidden) {
        const id = Number(-chat.id);
        const chat_ = {
            id,
            type: "group",
            color: getColorFromPeerId(id),
            title: chat.title,
            isCreator: false,
        };
        if (chat instanceof types.Chat) {
            chat_.isCreator = chat.creator || false;
        }
        return cleanObject(chat_);
    }
    else if (chat instanceof types.Channel || chat instanceof types.ChannelForbidden) {
        let chat_;
        const id = ZERO_CHANNEL_ID + -Number(chat.id);
        if (chat instanceof types.ChannelForbidden) {
            const { title } = chat;
            if (chat.megagroup) {
                return { id, color: getColorFromPeerId(id), title, type: "supergroup", isScam: false, isFake: false, isVerified: false, isRestricted: false, isForum: false };
            }
            else {
                return { id, color: getColorFromPeerId(id), title, type: "channel", isScam: false, isFake: false, isVerified: false, isRestricted: false };
            }
        }
        const { title, scam: isScam = false, fake: isFake = false, verified: isVerified = false, restricted: isRestricted = false, } = chat;
        if (chat.megagroup) {
            chat_ = {
                id,
                color: chat.color?.color !== undefined ? chat.color.color : getColorFromPeerId(id),
                type: "supergroup",
                title,
                isScam,
                isFake,
                isVerified,
                isRestricted,
                isForum: chat.forum || false,
            };
        }
        else {
            const id = ZERO_CHANNEL_ID + -Number(chat.id);
            chat_ = {
                id,
                color: chat.color?.color !== undefined ? chat.color.color : getColorFromPeerId(id),
                type: "channel",
                title,
                isScam,
                isFake,
                isVerified,
                isRestricted,
            };
        }
        chat_.username = chat.username ?? chat.usernames?.[0].username;
        if (chat_.isRestricted) {
            chat_.restrictionReason = (chat.restriction_reason ?? []).map(constructRestrictionReason);
        }
        return cleanObject(chat_);
    }
    else {
        unreachable();
    }
}
