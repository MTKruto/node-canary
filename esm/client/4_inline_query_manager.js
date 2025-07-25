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
var _a, _InlineQueryManager_c, _InlineQueryManager_isExpired;
import { unreachable } from "../0_deps.js";
import { Api } from "../2_tl.js";
import { constructChosenInlineResult, constructInlineQuery, constructInlineQueryAnswer, inlineQueryResultToTlObject } from "../3_types.js";
import { checkInlineQueryId } from "./0_utilities.js";
const inlineQueryManagerUpdates = [
    "updateBotInlineQuery",
    "updateBotInlineSend",
];
export class InlineQueryManager {
    constructor(c) {
        _InlineQueryManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _InlineQueryManager_c, c, "f");
    }
    async answerInlineQuery(id, results, params) {
        __classPrivateFieldGet(this, _InlineQueryManager_c, "f").storage.assertBot("answerInlineQuery");
        checkInlineQueryId(id);
        await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").invoke({ _: "messages.setInlineBotResults", query_id: BigInt(id), results: await Promise.all(results.map((v) => inlineQueryResultToTlObject(v, __classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageManager.parseText.bind(__classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageManager), __classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageManager.usernameResolver.bind(__classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageManager)))), cache_time: params?.cacheTime ?? 300, private: params?.isPersonal ? true : undefined, switch_webview: params?.button && params.button.miniApp ? ({ _: "inlineBotWebView", text: params.button.text, url: params.button.miniApp.url }) : undefined, switch_pm: params?.button && params.button.startParameter ? ({ _: "inlineBotSwitchPM", text: params.button.text, start_param: params.button.startParameter }) : undefined, gallery: params?.isGallery ? true : undefined, next_offset: params?.nextOffset });
    }
    canHandleUpdate(update) {
        return Api.isOneOf(inlineQueryManagerUpdates, update);
    }
    async handleUpdate(update) {
        if (Api.is("updateBotInlineQuery", update)) {
            return { inlineQuery: await constructInlineQuery(update, __classPrivateFieldGet(this, _InlineQueryManager_c, "f").getEntity) };
        }
        else if (Api.is("updateBotInlineSend", update)) {
            return { chosenInlineResult: await constructChosenInlineResult(update, __classPrivateFieldGet(this, _InlineQueryManager_c, "f").getEntity) };
        }
        else {
            unreachable();
        }
    }
    async sendInlineQuery(botId_, chatId, params) {
        __classPrivateFieldGet(this, _InlineQueryManager_c, "f").storage.assertUser("sendInlineQuery");
        const bot = await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").getInputUser(botId_), peer = await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").getInputPeer(chatId), query = params?.query ?? "", offset = params?.offset ?? "";
        const botId = await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").getInputPeerChatId(bot), peerId = await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").getInputPeerChatId(peer);
        const maybeResults = await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageStorage.getInlineQueryAnswer(botId, peerId, query, offset);
        if (maybeResults != null && !__classPrivateFieldGet(_a, _a, "m", _InlineQueryManager_isExpired).call(_a, maybeResults[1], maybeResults[0].cache_time)) {
            return constructInlineQueryAnswer(maybeResults[0]);
        }
        const then = new Date();
        const results = await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").invoke({ _: "messages.getInlineBotResults", bot, peer, query, offset });
        if (results.cache_time > 0) {
            await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageStorage.setInlineQueryAnswer(botId, peerId, query, offset, results, then);
        }
        return constructInlineQueryAnswer(results);
    }
}
_a = InlineQueryManager, _InlineQueryManager_c = new WeakMap(), _InlineQueryManager_isExpired = function _InlineQueryManager_isExpired(date, cacheTime) {
    return (Date.now() - date.getTime()) / 1000 > cacheTime;
};
