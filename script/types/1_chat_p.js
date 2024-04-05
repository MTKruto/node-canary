"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructChatP = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_restriction_reason_js_1 = require("./0_restriction_reason.js");
function constructChatP(chat) {
    if (chat instanceof _2_tl_js_1.types.User) {
        const id = Number(chat.id);
        const chat_ = {
            id,
            type: "private",
            isBot: chat.bot || false,
            color: chat.color?.color !== undefined ? chat.color.color : (0, _1_utilities_js_1.getColorFromPeerId)(id),
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
        return (0, _1_utilities_js_1.cleanObject)(chat_);
    }
    else if (chat instanceof _2_tl_js_1.types.Chat || chat instanceof _2_tl_js_1.types.ChatForbidden) {
        const id = Number(-chat.id);
        const chat_ = {
            id,
            type: "group",
            color: (0, _1_utilities_js_1.getColorFromPeerId)(id),
            title: chat.title,
            isCreator: false,
        };
        if (chat instanceof _2_tl_js_1.types.Chat) {
            chat_.isCreator = chat.creator || false;
        }
        return (0, _1_utilities_js_1.cleanObject)(chat_);
    }
    else if (chat instanceof _2_tl_js_1.types.Channel || chat instanceof _2_tl_js_1.types.ChannelForbidden) {
        let chat_;
        const id = _1_utilities_js_1.ZERO_CHANNEL_ID + -Number(chat.id);
        if (chat instanceof _2_tl_js_1.types.ChannelForbidden) {
            const { title } = chat;
            if (chat.megagroup) {
                return { id, color: (0, _1_utilities_js_1.getColorFromPeerId)(id), title, type: "supergroup", isScam: false, isFake: false, isVerified: false, isRestricted: false, isForum: false };
            }
            else {
                return { id, color: (0, _1_utilities_js_1.getColorFromPeerId)(id), title, type: "channel", isScam: false, isFake: false, isVerified: false, isRestricted: false };
            }
        }
        const { title, scam: isScam = false, fake: isFake = false, verified: isVerified = false, restricted: isRestricted = false, } = chat;
        if (chat.megagroup) {
            chat_ = {
                id,
                color: chat.color?.color !== undefined ? chat.color.color : (0, _1_utilities_js_1.getColorFromPeerId)(id),
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
            const id = _1_utilities_js_1.ZERO_CHANNEL_ID + -Number(chat.id);
            chat_ = {
                id,
                color: chat.color?.color !== undefined ? chat.color.color : (0, _1_utilities_js_1.getColorFromPeerId)(id),
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
            chat_.restrictionReason = (chat.restriction_reason ?? []).map(_0_restriction_reason_js_1.constructRestrictionReason);
        }
        return (0, _1_utilities_js_1.cleanObject)(chat_);
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
exports.constructChatP = constructChatP;
