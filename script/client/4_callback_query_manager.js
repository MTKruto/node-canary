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
var _CallbackQueryManager_instances, _a, _CallbackQueryManager_c, _CallbackQueryManager_isExpired, _CallbackQueryManager_getPasswordCheck;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackQueryManager = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const _0_password_js_1 = require("./0_password.js");
const _0_utilities_js_1 = require("./0_utilities.js");
const callbackQueryManagerUpdates = [
    "updateBotCallbackQuery",
    "updateInlineBotCallbackQuery",
];
class CallbackQueryManager {
    constructor(c) {
        _CallbackQueryManager_instances.add(this);
        _CallbackQueryManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _CallbackQueryManager_c, c, "f");
    }
    async answerCallbackQuery(id, params) {
        __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").storage.assertBot("answerCallbackQuery");
        (0, _0_utilities_js_1.checkCallbackQueryId)(id);
        await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").invoke({ _: "messages.setBotCallbackAnswer", query_id: BigInt(id), cache_time: params?.cacheTime ?? 0, message: params?.text, alert: params?.alert ? true : undefined });
    }
    async sendCallbackQuery(botId, messageId, question) {
        __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").storage.assertUser("sendCallbackQuery");
        (0, _0_utilities_js_1.checkMessageId)(messageId);
        (0, _3_types_js_1.validateCallbackQueryQuestion)(question);
        const peer = await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").getInputPeer(botId), peerId = await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").getInputPeerChatId(peer), questionKey = JSON.stringify(question);
        const maybeAnswer = await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").messageStorage.getCallbackQueryAnswer(peerId, messageId, questionKey);
        if (maybeAnswer != null && !__classPrivateFieldGet(_a, _a, "m", _CallbackQueryManager_isExpired).call(_a, maybeAnswer[1], maybeAnswer[0].cache_time)) {
            return (0, _3_types_js_1.constructCallbackQueryAnswer)(maybeAnswer[0]);
        }
        const answer = await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").invoke({ _: "messages.getBotCallbackAnswer", peer, msg_id: messageId, data: "data" in question ? (0, _1_utilities_js_1.encodeText)(question.data) : undefined, game: question.type == "game" ? true : undefined, password: question.type == "password" ? await __classPrivateFieldGet(this, _CallbackQueryManager_instances, "m", _CallbackQueryManager_getPasswordCheck).call(this, question.password) : undefined });
        if (answer.cache_time >= 0) {
            await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").messageStorage.setCallbackQueryAnswer(peerId, messageId, questionKey, answer);
        }
        return (0, _3_types_js_1.constructCallbackQueryAnswer)(answer);
    }
    canHandleUpdate(update) {
        return _2_tl_js_1.Api.isOneOf(callbackQueryManagerUpdates, update);
    }
    async handleUpdate(update) {
        return { callbackQuery: await (0, _3_types_js_1.constructCallbackQuery)(update, __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").getEntity, __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").messageManager.getMessageWithReply.bind(__classPrivateFieldGet(this, _CallbackQueryManager_c, "f").messageManager)) };
    }
}
exports.CallbackQueryManager = CallbackQueryManager;
_a = CallbackQueryManager, _CallbackQueryManager_c = new WeakMap(), _CallbackQueryManager_instances = new WeakSet(), _CallbackQueryManager_isExpired = function _CallbackQueryManager_isExpired(date, cacheTime) {
    return (Date.now() - date.getTime()) / 1000 > cacheTime;
}, _CallbackQueryManager_getPasswordCheck = async function _CallbackQueryManager_getPasswordCheck(password) {
    const ap = await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").invoke({ _: "account.getPassword" });
    return await (0, _0_password_js_1.checkPassword)(password, ap);
};
