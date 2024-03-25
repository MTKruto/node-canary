"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatAdministratorRightsToTlObject = exports.constructChatAdministratorRights = void 0;
const _2_tl_js_1 = require("../2_tl.js");
function constructChatAdministratorRights(rights_) {
    const rights = {
        isAnonymous: rights_.anonymous || false,
        canManageChat: rights_.other || false,
        canDeleteMessages: rights_.delete_messages || false,
        canManageVideoChats: rights_.manage_call || false,
        canRestrictMembers: rights_.ban_users || false,
        canPromoteMembers: rights_.add_admins || false,
        canChangeInfo: rights_.change_info || false,
        canInviteUsers: rights_.invite_users || false,
    };
    if (rights_.post_messages) {
        rights.canPostMessages = rights_.post_messages;
    }
    if (rights_.edit_messages) {
        rights.canEditMessages = rights_.edit_messages;
    }
    if (rights_.pin_messages) {
        rights.canPinMessages = rights_.pin_messages;
    }
    if (rights_.manage_topics) {
        rights.canManageTopics = rights_.manage_topics;
    }
    return rights;
}
exports.constructChatAdministratorRights = constructChatAdministratorRights;
function chatAdministratorRightsToTlObject(rights) {
    return new _2_tl_js_1.types.ChatAdminRights({
        anonymous: rights.isAnonymous || undefined,
        other: rights.canManageChat || undefined,
        delete_messages: rights.canDeleteMessages || undefined,
        manage_call: rights.canManageChat || undefined,
        ban_users: rights.canRestrictMembers || undefined,
        add_admins: rights.canPromoteMembers || undefined,
        change_info: rights.canChangeInfo || undefined,
        invite_users: rights.canInviteUsers || undefined,
    });
}
exports.chatAdministratorRightsToTlObject = chatAdministratorRightsToTlObject;
