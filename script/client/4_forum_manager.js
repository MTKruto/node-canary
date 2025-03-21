"use strict";
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
var _ForumManager_instances, _a, _ForumManager_c, _ForumManager_validateTopicTitle, _ForumManager_assertNongenralTopicIdValid, _ForumManager_assertAnyTopicIdValid, _ForumManager_toggleGeneralTopicHidden, _ForumManager_toggleNongeneralTopicClosed, _ForumManager_setTopicPinned;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForumManager = void 0;
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _3_types_js_1 = require("../3_types.js");
class ForumManager {
    constructor(c) {
        _ForumManager_instances.add(this);
        _ForumManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _ForumManager_c, c, "f");
    }
    async createTopic(chatId, title, params) {
        title = __classPrivateFieldGet(_a, _a, "m", _ForumManager_validateTopicTitle).call(_a, title);
        let send_as;
        if (params?.sendAs) {
            __classPrivateFieldGet(this, _ForumManager_c, "f").storage.assertUser("sendAs");
            send_as = await __classPrivateFieldGet(this, _ForumManager_c, "f").getInputPeer(params.sendAs);
        }
        const channel = await __classPrivateFieldGet(this, _ForumManager_c, "f").getInputChannel(chatId);
        const updates = await __classPrivateFieldGet(this, _ForumManager_c, "f").invoke({
            _: "channels.createForumTopic",
            channel,
            title,
            icon_color: params?.color,
            icon_emoji_id: params?.customEmojiId ? BigInt(params.customEmojiId) : undefined,
            send_as,
            random_id: (0, _1_utilities_js_1.getRandomId)(),
        });
        const message = (await __classPrivateFieldGet(this, _ForumManager_c, "f").messageManager.updatesToMessages(chatId, updates))[0];
        return (0, _3_types_js_1.constructTopic)((0, _3_types_js_1.assertMessageType)(message, "forumTopicCreated"));
    }
    async editTopic(chatId, topicId, title, params) {
        __classPrivateFieldGet(_a, _a, "m", _ForumManager_assertNongenralTopicIdValid).call(_a, topicId);
        title = __classPrivateFieldGet(_a, _a, "m", _ForumManager_validateTopicTitle).call(_a, title);
        const channel = await __classPrivateFieldGet(this, _ForumManager_c, "f").getInputChannel(chatId);
        const updates = await __classPrivateFieldGet(this, _ForumManager_c, "f").invoke({
            _: "channels.editForumTopic",
            channel,
            topic_id: topicId,
            title,
            icon_emoji_id: params?.customEmojiId ? BigInt(params.customEmojiId) : undefined,
        });
        const message = (await __classPrivateFieldGet(this, _ForumManager_c, "f").messageManager.updatesToMessages(chatId, updates))[0];
        return (0, _3_types_js_1.constructTopic)((0, _3_types_js_1.assertMessageType)(message, "forumTopicEdited"));
    }
    async hideGeneralTopic(chatId) {
        await __classPrivateFieldGet(this, _ForumManager_instances, "m", _ForumManager_toggleGeneralTopicHidden).call(this, chatId, true);
    }
    async showGeneralTopic(chatId) {
        await __classPrivateFieldGet(this, _ForumManager_instances, "m", _ForumManager_toggleGeneralTopicHidden).call(this, chatId, false);
    }
    async closeTopic(chatId, topicId) {
        await __classPrivateFieldGet(this, _ForumManager_instances, "m", _ForumManager_toggleNongeneralTopicClosed).call(this, chatId, topicId, true);
    }
    async reopenTopic(chatId, topicId) {
        await __classPrivateFieldGet(this, _ForumManager_instances, "m", _ForumManager_toggleNongeneralTopicClosed).call(this, chatId, topicId, false);
    }
    async pinTopic(chatId, topicId) {
        await __classPrivateFieldGet(this, _ForumManager_instances, "m", _ForumManager_setTopicPinned).call(this, chatId, topicId, true);
    }
    async unpinTopic(chatId, topicId) {
        await __classPrivateFieldGet(this, _ForumManager_instances, "m", _ForumManager_setTopicPinned).call(this, chatId, topicId, false);
    }
}
exports.ForumManager = ForumManager;
_a = ForumManager, _ForumManager_c = new WeakMap(), _ForumManager_instances = new WeakSet(), _ForumManager_validateTopicTitle = function _ForumManager_validateTopicTitle(title) {
    title = title.trim();
    if (!title) {
        throw new InputEvent("Invalid topic title.");
    }
    return title;
}, _ForumManager_assertNongenralTopicIdValid = function _ForumManager_assertNongenralTopicIdValid(topicId) {
    if (!topicId || topicId < 2) {
        throw new _0_errors_js_1.InputError("Invalid topic ID.");
    }
}, _ForumManager_assertAnyTopicIdValid = function _ForumManager_assertAnyTopicIdValid(topicId) {
    if (!topicId || topicId < 1) {
        throw new _0_errors_js_1.InputError("Invalid topic ID.");
    }
}, _ForumManager_toggleGeneralTopicHidden = async function _ForumManager_toggleGeneralTopicHidden(chatId, hidden) {
    const channel = await __classPrivateFieldGet(this, _ForumManager_c, "f").getInputChannel(chatId);
    await __classPrivateFieldGet(this, _ForumManager_c, "f").invoke({
        _: "channels.editForumTopic",
        channel,
        topic_id: 1,
        hidden,
    });
}, _ForumManager_toggleNongeneralTopicClosed = async function _ForumManager_toggleNongeneralTopicClosed(chatId, topicId, closed) {
    __classPrivateFieldGet(_a, _a, "m", _ForumManager_assertNongenralTopicIdValid).call(_a, topicId);
    const channel = await __classPrivateFieldGet(this, _ForumManager_c, "f").getInputChannel(chatId);
    await __classPrivateFieldGet(this, _ForumManager_c, "f").invoke({
        _: "channels.editForumTopic",
        channel,
        topic_id: 1,
        closed,
    });
}, _ForumManager_setTopicPinned = async function _ForumManager_setTopicPinned(chatId, topicId, pinned) {
    __classPrivateFieldGet(_a, _a, "m", _ForumManager_assertAnyTopicIdValid).call(_a, topicId);
    const channel = await __classPrivateFieldGet(this, _ForumManager_c, "f").getInputChannel(chatId);
    await __classPrivateFieldGet(this, _ForumManager_c, "f").invoke({
        _: "channels.updatePinnedForumTopic",
        channel,
        topic_id: 1,
        pinned,
    });
};
