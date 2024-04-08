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
exports.constructCallbackQuery = exports.deserializeInlineMessageId = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_user_js_1 = require("./1_user.js");
const ERR_INVALID_INLINE_MESSAGE_ID = new _0_errors_js_1.InputError("Invalid inline message ID");
function deserializeInlineMessageId(inlineMessageId) {
    try {
        const buffer = (0, _1_utilities_js_1.base64DecodeUrlSafe)(inlineMessageId);
        const reader = new _2_tl_js_1.TLReader(buffer);
        const object = reader.readObject();
        if (object instanceof _2_tl_js_1.types.InputBotInlineMessageID || object instanceof _2_tl_js_1.types.InputBotInlineMessageID64) {
            return object;
        }
    }
    catch {
        throw ERR_INVALID_INLINE_MESSAGE_ID;
    }
    throw ERR_INVALID_INLINE_MESSAGE_ID;
}
exports.deserializeInlineMessageId = deserializeInlineMessageId;
async function constructCallbackQuery(callbackQuery, getEntity, getMessage) {
    const user_ = await getEntity(new _2_tl_js_1.types.PeerUser({ user_id: callbackQuery.user_id }));
    if (!user_) {
        (0, _0_deps_js_1.unreachable)();
    }
    const user = (0, _1_user_js_1.constructUser)(user_);
    const id = String(callbackQuery.query_id);
    const gameShortName = callbackQuery.game_short_name;
    const data = callbackQuery.data !== undefined ? new TextDecoder().decode(callbackQuery.data) : undefined;
    const chatInstance = callbackQuery.chat_instance == 0n ? "" : String(callbackQuery.chat_instance);
    if (callbackQuery instanceof _2_tl_js_1.types.UpdateBotCallbackQuery) {
        const message = await getMessage((0, _2_tl_js_1.peerToChatId)(callbackQuery.peer), Number(callbackQuery.msg_id));
        if (message == null) {
            (0, _0_deps_js_1.unreachable)();
        }
        return (0, _1_utilities_js_1.cleanObject)({ id, from: user, message, chatInstance, data, gameShortName });
    }
    else {
        return (0, _1_utilities_js_1.cleanObject)({ id, from: user, inlineMessageId: (0, _1_utilities_js_1.base64EncodeUrlSafe)(callbackQuery.msg_id[_2_tl_js_1.serialize]()), chatInstance, data, gameShortName });
    }
}
exports.constructCallbackQuery = constructCallbackQuery;
