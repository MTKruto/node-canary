/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AccountManager_instances, _AccountManager_c, _AccountManager_toggleUsername, _AccountManager_getUserFull;
import { unreachable } from "../0_deps.js";
import { InputError } from "../0_errors.js";
import { toUnixTimestamp } from "../1_utilities.js";
import { chatIdToPeer, inputPeerToPeer, is } from "../2_tl.js";
import { birthdayToTlObject, constructInactiveChat, constructUser } from "../3_types.js";
import { canBeInputChannel, canBeInputUser, toInputChannel, toInputUser } from "./0_utilities.js";
export class AccountManager {
    constructor(c) {
        _AccountManager_instances.add(this);
        _AccountManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _AccountManager_c, c, "f");
    }
    async showUsername(id, username) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("showUsername");
        await __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_toggleUsername).call(this, id, username, true);
    }
    async hideUsername(id, username) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("hideUsername");
        await __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_toggleUsername).call(this, id, username, false);
    }
    async reorderUsernames(id, order) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("reorderUsernames");
        const peer = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputPeer(id);
        if (is("inputPeerSelf", peer)) {
            return await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "account.reorderUsernames", order });
        }
        else if (canBeInputUser(peer)) {
            return await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "bots.reorderUsernames", bot: toInputUser(peer), order });
        }
        else if (canBeInputChannel(peer)) {
            return await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "channels.reorderUsernames", channel: toInputChannel(peer), order });
        }
        else {
            unreachable();
        }
    }
    async hideUsernames(id) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("hideUsernames");
        const peer = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputPeer(id);
        if (canBeInputChannel(peer)) {
            return await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "channels.deactivateAllUsernames", channel: toInputChannel(peer) });
        }
        else {
            unreachable();
        }
    }
    async getInactiveChats() {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("getInactiveChats");
        const { chats, dates } = await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "channels.getInactiveChannels" });
        return chats.map((v, i) => constructInactiveChat(v, dates[i]));
    }
    async setOnline(online) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("setOnline");
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "account.updateStatus", offline: !online });
    }
    async setEmojiStatus(id, params) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("setEmojiStatus");
        const document_id = BigInt(id);
        const until = params?.until ? toUnixTimestamp(params.until) : undefined;
        const emoji_status = { _: "emojiStatus", document_id, until };
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "account.updateEmojiStatus", emoji_status });
    }
    async setUserEmojiStatus(userId, id, params) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertBot("setUserEmojiStatus");
        const user_id = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputUser(userId);
        const document_id = BigInt(id);
        const until = params?.until ? toUnixTimestamp(params.until) : undefined;
        const emoji_status = { _: "emojiStatus", document_id, until };
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "bots.updateUserEmojiStatus", user_id, emoji_status });
    }
    async setBotCanSetEmojiStatus(botId, canSetEmojiStatus) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("setBotCanSetEmojiStatus");
        const bot = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputUser(botId);
        const enabled = canSetEmojiStatus;
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "bots.toggleUserEmojiStatusPermission", bot, enabled });
    }
    async getContacts() {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("getContacts");
        const result = await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "contacts.getContacts", hash: 0n });
        if (!is("contacts.contacts", result)) {
            unreachable();
        }
        return result.users.map((v) => is("user", v) ? constructUser(v) : null).filter((v) => v != null);
    }
    async deleteContacts(userIds) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("deleteContacts");
        const id = await Promise.all(userIds.map((v) => __classPrivateFieldGet(this, _AccountManager_c, "f").getInputUser(v)));
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "contacts.deleteContacts", id });
    }
    async deleteContact(userId) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("deleteContact");
        await this.deleteContacts([userId]);
    }
    async addContact(userId, params) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("addContact");
        const id = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputUser(userId);
        if (!is("inputPeerUser", id)) {
            unreachable();
        }
        const user = await __classPrivateFieldGet(this, _AccountManager_c, "f").getEntity(inputPeerToPeer(id));
        if (!user || !("first_name" in user)) {
            unreachable();
        }
        const first_name = params?.firstName ?? user.first_name ?? "";
        const last_name = params?.lastName ?? user.last_name ?? "";
        const phone = "";
        const add_phone_privacy_exception = params?.sharePhoneNumber ? true : undefined;
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "contacts.addContact", add_phone_privacy_exception, id, first_name, last_name, phone });
    }
    async updateProfile(params) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("updateProfile");
        const selfId = await __classPrivateFieldGet(this, _AccountManager_c, "f").getSelfId();
        const userFull = await __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_getUserFull).call(this, selfId);
        const entity = await __classPrivateFieldGet(this, _AccountManager_c, "f").getEntity(chatIdToPeer(selfId));
        if (!is("user", entity)) {
            unreachable();
        }
        params ??= {};
        if (params?.firstName) {
            params.firstName = params.firstName.trim();
        }
        else {
            params.firstName = entity.first_name;
        }
        if (params?.lastName) {
            params.lastName = params.lastName.trim();
        }
        else {
            params.lastName = entity.last_name;
        }
        if (params?.bio) {
            params.bio = params.bio.trim();
        }
        else {
            params.bio = userFull.about;
        }
        if (!params?.firstName && !params?.lastName && !params?.bio) {
            throw new InputError("At least one parameter must be specified.");
        }
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "account.updateProfile", first_name: params.firstName, last_name: params.lastName, about: params.bio });
    }
    async setBirthday(params) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("setBirthday");
        const birthday = params?.birthday ? birthdayToTlObject(params.birthday) : undefined;
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "account.updateBirthday", birthday });
    }
    async setPersonalChannel(params) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("setPersonalChannel");
        let channel = { _: "inputChannelEmpty" };
        if (params?.chatId) {
            channel = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputChannel(params.chatId);
        }
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "account.updatePersonalChannel", channel });
    }
    async setNameColor(color, params) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("setNameColor");
        const background_emoji_id = params?.customEmojiId ? BigInt(params.customEmojiId) : undefined;
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "account.updateColor", color, background_emoji_id });
    }
    async setProfileColor(color, params) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("setProfileColor");
        const background_emoji_id = params?.customEmojiId ? BigInt(params.customEmojiId) : undefined;
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "account.updateColor", for_profile: true, color, background_emoji_id });
    }
    async setLocation(params) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("setLocation");
        let address = params?.address;
        if (typeof address === "string") {
            address = address.trim();
            if (!address.length) {
                throw new InputError("Address cannot be empty.");
            }
            if (address.length > 96) {
                throw new InputError("Address is too long.");
            }
        }
        let geo_point;
        if (params?.latitude && params.longitude) {
            geo_point = { _: "inputGeoPoint", lat: params.latitude, long: params.longitude };
        }
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "account.updateBusinessLocation", address, geo_point });
    }
}
_AccountManager_c = new WeakMap(), _AccountManager_instances = new WeakSet(), _AccountManager_toggleUsername = async function _AccountManager_toggleUsername(id, username, active) {
    const peer = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputPeer(id);
    if (is("inputPeerSelf", peer)) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "account.toggleUsername", username, active });
    }
    else if (canBeInputUser(peer)) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "bots.toggleUsername", bot: toInputUser(peer), username, active });
    }
    else if (canBeInputChannel(peer)) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "channels.toggleUsername", channel: toInputChannel(peer), username, active });
    }
    else {
        unreachable();
    }
}, _AccountManager_getUserFull = async function _AccountManager_getUserFull(chatId) {
    const inputPeer = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputPeer(chatId);
    const chatId_ = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputPeerChatId(inputPeer);
    let fullChat = await __classPrivateFieldGet(this, _AccountManager_c, "f").storage.getFullChat(chatId_);
    if (fullChat != null) {
        if (!is("userFull", fullChat)) {
            unreachable();
        }
        return fullChat;
    }
    if (canBeInputUser(inputPeer)) {
        fullChat = (await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "users.getFullUser", id: toInputUser(inputPeer) })).full_user;
    }
    else {
        unreachable();
    }
    return fullChat;
};
