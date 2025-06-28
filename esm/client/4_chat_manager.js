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
var _ChatManager_instances, _ChatManager_c, _ChatManager_toggleJoinRequests, _ChatManager_toggleSlowMode;
import { unreachable } from "../0_deps.js";
import { InputError } from "../0_errors.js";
import { toUnixTimestamp } from "../1_utilities.js";
import { Api } from "../2_tl.js";
import { constructChatMemberUpdated, constructChatP, constructFailedInvitation, constructInviteLink, constructJoinRequest, constructJoinRequest2, slowModeDurationToSeconds } from "../3_types.js";
import { chatMemberRightsToTlObject, reactionToTlObject } from "../3_types.js";
import { inputPeerToPeer } from "../tl/2_telegram.js";
import { checkPassword } from "./0_password.js";
import { canBeInputChannel, canBeInputUser, getLimit, toInputChannel, toInputUser } from "./0_utilities.js";
const chatManagerUpdates = [
    "updateChannelParticipant",
    "updateChatParticipant",
    "updateBotChatInviteRequester",
];
export class ChatManager {
    constructor(c) {
        _ChatManager_instances.add(this);
        _ChatManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _ChatManager_c, c, "f");
    }
    canHandleUpdate(update) {
        return Api.isOneOf(chatManagerUpdates, update);
    }
    async handleUpdate(update) {
        if (Api.is("updateChannelParticipant", update) || Api.is("updateChatParticipant", update)) {
            const chatMember = await constructChatMemberUpdated(update, __classPrivateFieldGet(this, _ChatManager_c, "f").getEntity);
            const selfId = await __classPrivateFieldGet(this, _ChatManager_c, "f").getSelfId();
            if (chatMember.oldChatMember.user.id == selfId) {
                return { myChatMember: chatMember };
            }
            else {
                return { chatMember };
            }
        }
        if (Api.is("updateBotChatInviteRequester", update)) {
            const joinRequest = await constructJoinRequest(update, __classPrivateFieldGet(this, _ChatManager_c, "f").getEntity);
            return { joinRequest };
        }
        return null;
    }
    async approveJoinRequest(chatId, userId) {
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({
            _: "messages.hideChatJoinRequest",
            peer: await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId),
            user_id: await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputUser(userId),
            approved: true,
        });
    }
    async declineJoinRequest(chatId, userId) {
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({
            _: "messages.hideChatJoinRequest",
            peer: await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId),
            user_id: await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputUser(userId),
        });
    }
    async approveJoinRequests(chatId, params) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("approveJoinRequests");
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({
            _: "messages.hideAllChatJoinRequests",
            peer: await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId),
            approved: true,
            link: params?.inviteLink,
        });
    }
    async declineJoinRequests(chatId, params) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("declineJoinRequests");
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({
            _: "messages.hideAllChatJoinRequests",
            peer: await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId),
            link: params?.inviteLink,
        });
    }
    async getJoinRequests(chatId, params) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("getJoinRequests");
        if (typeof params?.inviteLink === "string" && typeof params?.search === "string") {
            throw new InputError("inviteLink and search cannot be specified together.");
        }
        const peer = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId);
        const offset_user = params?.fromUserId ? await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputUser(params.fromUserId) : { _: "inputUserEmpty" };
        const { importers } = await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({
            _: "messages.getChatInviteImporters",
            requested: true,
            peer,
            link: params?.inviteLink,
            q: params?.search,
            offset_date: params?.fromDate ? toUnixTimestamp(params.fromDate) : 0,
            offset_user,
            limit: getLimit(params?.limit),
        });
        const peer_ = inputPeerToPeer(peer);
        return await Promise.all(importers.map((v) => constructJoinRequest2(peer_, v, __classPrivateFieldGet(this, _ChatManager_c, "f").getEntity)));
    }
    // INVITE LINKS //
    async createInviteLink(chatId, params) {
        if (params?.requireApproval && params?.limit) {
            throw new InputError("requireApproval cannot be true while limit is specified.");
        }
        const result = await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "messages.exportChatInvite", peer: await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId), title: params?.title, expire_date: params?.expireAt ? toUnixTimestamp(params.expireAt) : undefined, request_needed: params?.requireApproval ? true : undefined, usage_limit: params?.limit });
        return await constructInviteLink(Api.as("chatInviteExported", result), __classPrivateFieldGet(this, _ChatManager_c, "f").getEntity);
    }
    async getCreatedInviteLinks(chatId, params) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("getCreatedInviteLinks");
        const { invites } = await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "messages.getExportedChatInvites", peer: await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId), revoked: params?.revoked ? true : undefined, admin_id: params?.by ? await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputUser(params.by) : { _: "inputUserEmpty" }, limit: getLimit(params?.limit), offset_date: params?.afterDate ? toUnixTimestamp(params.afterDate) : undefined, offset_link: params?.afterInviteLink });
        return await Promise.all(invites.map((v) => Api.as("chatInviteExported", v)).map((v) => constructInviteLink(v, __classPrivateFieldGet(this, _ChatManager_c, "f").getEntity)));
    }
    // JOINING AND LEAVING CHATS //
    async joinChat(chatId) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("joinChat");
        const peer = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId);
        if (canBeInputUser(peer)) {
            throw new InputError("Cannot join private chats.");
        }
        else if (canBeInputChannel(peer)) {
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.joinChannel", channel: toInputChannel(peer) });
        }
        else if (Api.is("inputPeerChat", peer)) {
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "messages.addChatUser", chat_id: peer.chat_id, user_id: { _: "inputUserSelf" }, fwd_limit: 0 }); // TODO: use potential high-level method for adding participants to chats
        }
        else {
            unreachable();
        }
    }
    async leaveChat(chatId) {
        const peer = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId);
        if (canBeInputUser(peer)) {
            throw new InputError("Cannot leave private chats.");
        }
        else if (canBeInputChannel(peer)) {
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.leaveChannel", channel: toInputChannel(peer) });
        }
        else if (Api.is("inputPeerChat", peer)) {
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "messages.deleteChatUser", chat_id: peer.chat_id, user_id: { _: "inputUserSelf" } }); // TODO: use potential high-level method for adding participants to chats
        }
        else {
            unreachable();
        }
    }
    // RESTRICTING, BANNING, AND UNBANNING CHAT MEMBERS //
    async banChatMember(chatId, memberId, params) {
        const chat = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId);
        if (!(Api.is("inputPeerChannel", chat)) && !(Api.is("inputPeerChat", chat))) {
            throw new InputError("Expected a channel, supergroup, or group ID.");
        }
        const member = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(memberId);
        if (Api.is("inputPeerChannel", chat)) {
            if (params?.deleteMessages) {
                try {
                    await __classPrivateFieldGet(this, _ChatManager_c, "f").messageManager.deleteChatMemberMessages(chatId, memberId);
                }
                catch {
                    //
                }
            }
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({
                _: "channels.editBanned",
                channel: { ...chat, _: "inputChannel" },
                participant: member,
                banned_rights: ({
                    _: "chatBannedRights",
                    until_date: params?.untilDate ? toUnixTimestamp(params.untilDate) : 0,
                    view_messages: true,
                    send_messages: true,
                    send_media: true,
                    send_stickers: true,
                    send_gifs: true,
                    send_games: true,
                    send_inline: true,
                    embed_links: true,
                }),
            });
        }
        else if (Api.is("inputPeerChat", chat)) {
            if (!canBeInputUser(member)) {
                throw new InputError(`Invalid user ID: ${memberId}`);
            }
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "messages.deleteChatUser", chat_id: chat.chat_id, user_id: toInputUser(member), revoke_history: params?.deleteMessages ? true : undefined });
        }
    }
    async unbanChatMember(chatId, memberId) {
        const channel = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId);
        const member = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(memberId);
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.editBanned", channel, participant: member, banned_rights: ({ _: "chatBannedRights", until_date: 0 }) });
    }
    async setChatMemberRights(chatId, memberId, params) {
        const channel = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId);
        const member = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(memberId);
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.editBanned", channel, participant: member, banned_rights: chatMemberRightsToTlObject(params?.rights, params?.untilDate) });
    }
    // CHAT SETTINGS //
    async setAvailableReactions(chatId, availableReactions) {
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "messages.setChatAvailableReactions", peer: await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId), available_reactions: availableReactions == "none" ? { _: "chatReactionsNone" } : availableReactions == "all" ? { _: "chatReactionsAll" } : Array.isArray(availableReactions) ? ({ _: "chatReactionsSome", reactions: availableReactions.map((v) => reactionToTlObject(v)) }) : unreachable() });
    }
    async setBoostsRequiredToCircumventRestrictions(chatId, boosts) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("setBoostsRequiredToCircumventRestrictions");
        const channel = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.setBoostsToUnblockRestrictions", channel, boosts });
    }
    async enableJoinRequests(chatId) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("enableJoinRequests");
        await __classPrivateFieldGet(this, _ChatManager_instances, "m", _ChatManager_toggleJoinRequests).call(this, chatId, true);
    }
    async disableJoinRequests(chatId) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("disableJoinRequests");
        await __classPrivateFieldGet(this, _ChatManager_instances, "m", _ChatManager_toggleJoinRequests).call(this, chatId, false);
    }
    async setChatStickerSet(chatId, setName) {
        const channel = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.setStickers", channel, stickerset: { _: "inputStickerSetShortName", short_name: setName } });
    }
    async deleteChatStickerSet(chatId) {
        const channel = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.setStickers", channel, stickerset: { _: "inputStickerSetEmpty" } });
    }
    // CHAT PHOTOS //
    async deleteChatPhoto(chatId) {
        const peer = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId);
        if (!(canBeInputChannel(peer)) && !(Api.is("inputPeerChat", peer))) {
            unreachable();
        }
        if (canBeInputChannel(peer)) {
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.editPhoto", channel: toInputChannel(peer), photo: { _: "inputChatPhotoEmpty" } });
        }
        else if (Api.is("inputPeerChat", peer)) {
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "messages.editChatPhoto", chat_id: peer.chat_id, photo: { _: "inputChatPhotoEmpty" } });
        }
    }
    async setChatPhoto(chatId, photo, params) {
        const peer = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId);
        if (!(canBeInputChannel(peer)) && !(Api.is("inputPeerChat", peer))) {
            unreachable();
        }
        const file = await __classPrivateFieldGet(this, _ChatManager_c, "f").fileManager.upload(photo, params);
        const photo_ = { _: "inputChatUploadedPhoto", file };
        if (canBeInputChannel(peer)) {
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.editPhoto", channel: toInputChannel(peer), photo: photo_ });
        }
        else if (Api.is("inputPeerChat", peer)) {
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "messages.editChatPhoto", chat_id: peer.chat_id, photo: photo_ });
        }
    }
    // INVITING MEMBERS //
    async addChatMember(chatId, userId, params) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("addChatMember");
        const chat = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId);
        if (Api.isOneOf(["inputPeerEmpty", "inputPeerSelf", "inputPeerUser", "inputPeerUserFromMessage"], chat)) {
            throw new InputError("Cannot add members to private chats");
        }
        const user = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputUser(userId);
        if (Api.is("inputPeerChat", chat)) {
            const result = await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "messages.addChatUser", chat_id: chat.chat_id, user_id: user, fwd_limit: params?.historyLimit ?? 0 });
            return result.missing_invitees.map(constructFailedInvitation);
        }
        else if (Api.is("inputPeerChannel", chat)) {
            const result = await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.inviteToChannel", channel: { ...chat, _: "inputChannel" }, users: [user] });
            return result.missing_invitees.map(constructFailedInvitation);
        }
        unreachable();
    }
    async addChatMembers(chatId, userIds) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("addChatMembers");
        const chat = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId);
        if (Api.isOneOf(["inputPeerEmpty", "inputPeerSelf", "inputPeerUser", "inputPeerUserFromMessage"], chat)) {
            throw new InputError("Cannot add members to private chats");
        }
        const users = new Array();
        for (const userId of userIds) {
            users.push(await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputUser(userId));
        }
        if (Api.is("inputPeerChat", chat)) {
            throw new InputError("addChatMembers cannot be used with basic groups");
        }
        else if (canBeInputChannel(chat)) {
            const result = await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.inviteToChannel", channel: toInputChannel(chat), users });
            return result.missing_invitees.map(constructFailedInvitation);
        }
        unreachable();
    }
    async disableSlowMode(chatId) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("disableSlowMode");
        await __classPrivateFieldGet(this, _ChatManager_instances, "m", _ChatManager_toggleSlowMode).call(this, chatId, 0);
    }
    async setSlowMode(chatId, duration) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("setSlowMode");
        const seconds = slowModeDurationToSeconds(duration);
        if (seconds > 1) {
            throw new InputError("Invalid slow mode duration.");
        }
        await __classPrivateFieldGet(this, _ChatManager_instances, "m", _ChatManager_toggleSlowMode).call(this, chatId, seconds);
    }
    async setChatTitle(chatId, title) {
        const peer = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId);
        if (Api.is("inputPeerChat", peer)) {
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "messages.editChatTitle", chat_id: peer.chat_id, title });
        }
        else if (canBeInputChannel(peer)) {
            const channel = toInputChannel(peer);
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.editTitle", channel, title });
        }
        else {
            throw new InputError("A chat or channel identifier was expected.");
        }
    }
    async setChatDescription(chatId, description) {
        const peer = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId);
        if (canBeInputUser(peer)) {
            throw new InputError("A chat or channel identifier was expected.");
        }
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "messages.editChatAbout", peer, about: description });
    }
    async setMemberListVisibility(chatId, visible) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("setMemberListVisible");
        const channel = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId);
        const enabled = !visible;
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.toggleParticipantsHidden", channel, enabled });
    }
    async setTopicsEnabled(chatId, enabled) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("setTopicsEnabled");
        const channel = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.toggleForum", channel, enabled });
    }
    async setAntispamEnabled(chatId, enabled) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("setTopicsEnabled");
        const channel = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.toggleAntiSpam", channel, enabled });
    }
    async setSignaturesEnabled(chatId, enabled, params) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("setSignaturesEnabled");
        const channel = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId);
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.toggleSignatures", channel, signatures_enabled: enabled ? true : undefined, profiles_enabled: params?.showAuthorProfile ? true : undefined });
    }
    async deleteChat(chatId) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("deleteChat");
        const peer = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputPeer(chatId);
        if (Api.is("inputPeerChat", peer)) {
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "messages.deleteChat", chat_id: peer.chat_id });
        }
        else if (canBeInputChannel(peer)) {
            const channel = toInputChannel(peer);
            await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.deleteChannel", channel });
        }
        else {
            throw new InputError("A chat or channel identifier was expected.");
        }
    }
    async getDiscussionChatSuggestions() {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("getDiscussionChatSuggestions");
        const { chats } = await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.getGroupsForDiscussion" });
        return chats
            .map((v) => {
            if (!Api.isOneOf(["chat", "channel"], v)) {
                return v;
            }
            else {
                return constructChatP(v);
            }
        })
            .filter((v) => v != null);
    }
    async setDiscussionChat(chatId, discussionChatId) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("setDiscussionChat");
        const [broadcast, group] = await Promise.all([__classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId), __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(discussionChatId)]);
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.setDiscussionGroup", broadcast, group });
    }
    async transferChatOwnership(chatId, userId, password) {
        __classPrivateFieldGet(this, _ChatManager_c, "f").storage.assertUser("transferChat");
        const user_id = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputUser(userId);
        const isSelf = Api.is("inputUserSelf", user_id);
        if (isSelf || Api.peerToChatId(user_id) == await __classPrivateFieldGet(this, _ChatManager_c, "f").getSelfId()) {
            throw new InputError("A user ID except that of the current one was expected.");
        }
        const channel = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId);
        const ap = await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "account.getPassword" });
        const password_ = await checkPassword(password, ap);
        await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.editCreator", channel, user_id, password: password_ });
    }
}
_ChatManager_c = new WeakMap(), _ChatManager_instances = new WeakSet(), _ChatManager_toggleJoinRequests = 
// JOIN REQUESTS //
async function _ChatManager_toggleJoinRequests(chatId, enabled) {
    const channel = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId);
    await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.toggleJoinRequest", channel, enabled });
}, _ChatManager_toggleSlowMode = async function _ChatManager_toggleSlowMode(chatId, seconds) {
    const channel = await __classPrivateFieldGet(this, _ChatManager_c, "f").getInputChannel(chatId);
    await __classPrivateFieldGet(this, _ChatManager_c, "f").invoke({ _: "channels.toggleSlowMode", channel, seconds });
};
