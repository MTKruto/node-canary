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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeInlineMessageId = deserializeInlineMessageId;
exports.constructCallbackQuery = constructCallbackQuery;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_user_js_1 = require("./1_user.js");
const ERR_INVALID_INLINE_MESSAGE_ID = new _0_errors_js_1.InputError("Invalid inline message ID");
async function deserializeInlineMessageId(inlineMessageId) {
    try {
        const buffer = (0, _1_utilities_js_1.base64DecodeUrlSafe)(inlineMessageId);
        const object = await _2_tl_js_1.Api.deserializeType("InputBotInlineMessageID", buffer);
        if (_2_tl_js_1.Api.is("inputBotInlineMessageID64", object) || _2_tl_js_1.Api.is("inputBotInlineMessageID", object)) {
            return object;
        }
    }
    catch {
        throw ERR_INVALID_INLINE_MESSAGE_ID;
    }
    throw ERR_INVALID_INLINE_MESSAGE_ID;
}
async function constructCallbackQuery(callbackQuery, getEntity, getMessage) {
    const user_ = await getEntity({ _: "peerUser", user_id: callbackQuery.user_id });
    if (!user_) {
        (0, _0_deps_js_1.unreachable)();
    }
    const user = (0, _1_user_js_1.constructUser)(user_);
    const id = String(callbackQuery.query_id);
    const gameShortName = callbackQuery.game_short_name;
    const data = callbackQuery.data !== undefined ? (0, _1_utilities_js_1.decodeText)(callbackQuery.data) : undefined;
    const chatInstance = callbackQuery.chat_instance == 0n ? "" : String(callbackQuery.chat_instance);
    if (_2_tl_js_1.Api.is("updateBotCallbackQuery", callbackQuery)) {
        const message = await getMessage(_2_tl_js_1.Api.peerToChatId(callbackQuery.peer), Number(callbackQuery.msg_id));
        if (message == null) {
            (0, _0_deps_js_1.unreachable)();
        }
        return (0, _1_utilities_js_1.cleanObject)({ id, from: user, message, chatInstance, data, gameShortName });
    }
    else {
        return (0, _1_utilities_js_1.cleanObject)({ id, from: user, inlineMessageId: (0, _1_utilities_js_1.base64EncodeUrlSafe)(_2_tl_js_1.Api.serializeObject(callbackQuery.msg_id)), chatInstance, data, gameShortName });
    }
}
