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
var _CallbackQueryManager_instances, _a, _CallbackQueryManager_c, _CallbackQueryManager_enc, _CallbackQueryManager_isExpired, _CallbackQueryManager_getPasswordCheck;
import { peerToChatId, types } from "../2_tl.js";
import { constructCallbackQuery, constructCallbackQueryAnswer, validateCallbackQueryQuestion } from "../3_types.js";
import { checkCallbackQueryId, checkMessageId } from "./0_utilities.js";
import { checkPassword } from "./0_password.js";
export class CallbackQueryManager {
    constructor(c) {
        _CallbackQueryManager_instances.add(this);
        _CallbackQueryManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _CallbackQueryManager_c, c, "f");
    }
    async answerCallbackQuery(id, params) {
        await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").storage.assertBot("answerCallbackQuery");
        checkCallbackQueryId(id);
        await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").api.messages.setBotCallbackAnswer({
            query_id: BigInt(id),
            cache_time: params?.cacheTime ?? 0,
            message: params?.text,
            alert: params?.alert ? true : undefined,
        });
    }
    async sendCallbackQuery(chatId, messageId, question) {
        await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").storage.assertUser("sendCallbackQuery");
        checkMessageId(messageId);
        validateCallbackQueryQuestion(question);
        const peer = await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").getInputPeer(chatId), peerId = peerToChatId(peer), questionKey = JSON.stringify(question);
        const maybeAnswer = await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").messageStorage.getCallbackQueryAnswer(peerId, messageId, questionKey);
        if (maybeAnswer != null && !__classPrivateFieldGet(_a, _a, "m", _CallbackQueryManager_isExpired).call(_a, maybeAnswer[1], maybeAnswer[0].cache_time)) {
            return constructCallbackQueryAnswer(maybeAnswer[0]);
        }
        const answer = await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").api.messages.getBotCallbackAnswer({
            peer,
            msg_id: messageId,
            data: "data" in question ? __classPrivateFieldGet(_a, _a, "f", _CallbackQueryManager_enc).encode(question.data) : undefined,
            game: question.type == "game" ? true : undefined,
            password: question.type == "password" ? await __classPrivateFieldGet(this, _CallbackQueryManager_instances, "m", _CallbackQueryManager_getPasswordCheck).call(this, question.password) : undefined,
        });
        if (answer.cache_time >= 0) {
            await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").messageStorage.setCallbackQueryAnswer(peerId, messageId, questionKey, answer);
        }
        return constructCallbackQueryAnswer(answer);
    }
    static canHandleUpdate(update) {
        return update instanceof types.UpdateBotCallbackQuery || update instanceof types.UpdateInlineBotCallbackQuery;
    }
    async handleUpdate(update) {
        return { callbackQuery: await constructCallbackQuery(update, __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").getEntity, __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").messageManager.getMessageWithReply.bind(__classPrivateFieldGet(this, _CallbackQueryManager_c, "f").messageManager)) };
    }
}
_a = CallbackQueryManager, _CallbackQueryManager_c = new WeakMap(), _CallbackQueryManager_instances = new WeakSet(), _CallbackQueryManager_isExpired = function _CallbackQueryManager_isExpired(date, cacheTime) {
    return (Date.now() - date.getTime()) / 1000 > cacheTime;
}, _CallbackQueryManager_getPasswordCheck = async function _CallbackQueryManager_getPasswordCheck(password) {
    const ap = await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").api.account.getPassword();
    return await checkPassword(password, ap);
};
_CallbackQueryManager_enc = { value: new TextEncoder() };
