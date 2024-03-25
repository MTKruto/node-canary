"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructUser = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_chat_photo_js_1 = require("./0_chat_photo.js");
function constructUser(user_) {
    const id = Number(user_.id);
    const usernames = user_.usernames?.map((v) => v.username);
    const username = user_.username ?? usernames?.shift();
    const user = {
        id,
        color: user_.color?.color !== undefined ? user_.color.color : (0, _1_utilities_js_1.getColorFromPeerId)(id),
        isBot: user_.bot || false,
        firstName: user_.first_name || "",
        lastName: user_.last_name,
        username: username,
        also: usernames?.filter((v) => v != username),
        languageCode: user_.lang_code,
        isScam: user_.scam || false,
        isFake: user_.fake || false,
        isPremium: user_.premium || false,
        isVerified: user_.verified || false,
        isSupport: user_.support || false,
        addedToAttachmentMenu: user_.attach_menu_enabled || false,
    };
    if (user_.photo instanceof _2_tl_js_1.types.UserProfilePhoto) {
        user.photo = (0, _0_chat_photo_js_1.constructChatPhoto)(user_.photo, user.id, user_.access_hash ?? 0n);
    }
    return (0, _1_utilities_js_1.cleanObject)(user);
}
exports.constructUser = constructUser;
