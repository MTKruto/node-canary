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
var _CallbackQueryManager_c;
import { types } from "../2_tl.js";
import { constructCallbackQuery } from "../3_types.js";
import { checkCallbackQueryId } from "./0_utilities.js";
export class CallbackQueryManager {
    constructor(c) {
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
    static canHandleUpdate(update) {
        return update instanceof types.UpdateBotCallbackQuery || update instanceof types.UpdateInlineBotCallbackQuery;
    }
    async handleUpdate(update) {
        return { callbackQuery: await constructCallbackQuery(update, __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").getEntity, __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").messageManager.getMessageWithReply.bind(__classPrivateFieldGet(this, _CallbackQueryManager_c, "f").messageManager)) };
    }
}
_CallbackQueryManager_c = new WeakMap();
