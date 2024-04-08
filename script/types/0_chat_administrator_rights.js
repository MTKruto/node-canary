"use strict";
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
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
