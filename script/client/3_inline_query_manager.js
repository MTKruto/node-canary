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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const _0_utilities_js_1 = require("./0_utilities.js");
class InlineQueryManager {
    constructor(c) {
        _InlineQueryManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _InlineQueryManager_c, c, "f");
    }
    async answerInlineQuery(id, results, params) {
        await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").storage.assertBot("answerInlineQuery");
        (0, _0_utilities_js_1.checkInlineQueryId)(id);
        await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").api.messages.setInlineBotResults({
            query_id: BigInt(id),
            results: await Promise.all(results.map((v) => (0, _3_types_js_1.inlineQueryResultToTlObject)(v, __classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageManager.parseText.bind(__classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageManager), __classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageManager.usernameResolver.bind(__classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageManager)))),
            cache_time: params?.cacheTime ?? 300,
            private: params?.isPersonal ? true : undefined,
            switch_webview: params?.button && params.button.miniApp ? new _2_tl_js_1.types.InlineBotWebView({ text: params.button.text, url: params.button.miniApp.url }) : undefined,
            switch_pm: params?.button && params.button.startParameter ? new _2_tl_js_1.types.InlineBotSwitchPM({ text: params.button.text, start_param: params.button.startParameter }) : undefined,
            gallery: params?.isGallery ? true : undefined,
            next_offset: params?.nextOffset,
        });
    }
    static canHandleUpdate(update) {
        return update instanceof _2_tl_js_1.types.UpdateBotInlineQuery || update instanceof _2_tl_js_1.types.UpdateBotInlineSend;
    }
    async handleUpdate(update) {
        if (update instanceof _2_tl_js_1.types.UpdateBotInlineQuery) {
            return { inlineQuery: await (0, _3_types_js_1.constructInlineQuery)(update, __classPrivateFieldGet(this, _InlineQueryManager_c, "f").getEntity) };
        }
        else if (update instanceof _2_tl_js_1.types.UpdateBotInlineSend) {
            return { chosenInlineResult: await (0, _3_types_js_1.constructChosenInlineResult)(update, __classPrivateFieldGet(this, _InlineQueryManager_c, "f").getEntity) };
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    async sendInlineQuery(userId, chatId, params) {
        const bot = await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").getInputUser(userId), peer = await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").getInputPeer(chatId), query = params?.query ?? "", offset = params?.offset ?? "";
        const botId = (0, _2_tl_js_1.peerToChatId)(bot), peerId = (0, _2_tl_js_1.peerToChatId)(peer);
        const maybeResults = await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageStorage.getInlineQueryResults(botId, peerId, query, offset);
        if (maybeResults != null && !__classPrivateFieldGet(_a, _a, "m", _InlineQueryManager_isExpired).call(_a, maybeResults[1], maybeResults[0].cache_time)) {
            return (0, _3_types_js_1.constructInlineQueryAnswer)(maybeResults[0]);
        }
        const then = new Date();
        const results = await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").api.messages.getInlineBotResults({ bot, peer, query, offset });
        if (results.cache_time > 0) {
            await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageStorage.setInlineQueryResults(botId, peerId, query, offset, results, then);
        }
        return (0, _3_types_js_1.constructInlineQueryAnswer)(results);
    }
}
exports.InlineQueryManager = InlineQueryManager;
_a = InlineQueryManager, _InlineQueryManager_c = new WeakMap(), _InlineQueryManager_isExpired = function _InlineQueryManager_isExpired(date, cacheTime) {
    return (Date.now() - date.getTime()) / 1000 > cacheTime;
};
