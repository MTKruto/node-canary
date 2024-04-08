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
import { unreachable } from "../0_deps.js";
import { InputError } from "../0_errors.js";
import { base64DecodeUrlSafe, base64EncodeUrlSafe, cleanObject } from "../1_utilities.js";
import { peerToChatId, serialize, TLReader, types } from "../2_tl.js";
import { constructUser } from "./1_user.js";
const ERR_INVALID_INLINE_MESSAGE_ID = new InputError("Invalid inline message ID");
export function deserializeInlineMessageId(inlineMessageId) {
    try {
        const buffer = base64DecodeUrlSafe(inlineMessageId);
        const reader = new TLReader(buffer);
        const object = reader.readObject();
        if (object instanceof types.InputBotInlineMessageID || object instanceof types.InputBotInlineMessageID64) {
            return object;
        }
    }
    catch {
        throw ERR_INVALID_INLINE_MESSAGE_ID;
    }
    throw ERR_INVALID_INLINE_MESSAGE_ID;
}
export async function constructCallbackQuery(callbackQuery, getEntity, getMessage) {
    const user_ = await getEntity(new types.PeerUser({ user_id: callbackQuery.user_id }));
    if (!user_) {
        unreachable();
    }
    const user = constructUser(user_);
    const id = String(callbackQuery.query_id);
    const gameShortName = callbackQuery.game_short_name;
    const data = callbackQuery.data !== undefined ? new TextDecoder().decode(callbackQuery.data) : undefined;
    const chatInstance = callbackQuery.chat_instance == 0n ? "" : String(callbackQuery.chat_instance);
    if (callbackQuery instanceof types.UpdateBotCallbackQuery) {
        const message = await getMessage(peerToChatId(callbackQuery.peer), Number(callbackQuery.msg_id));
        if (message == null) {
            unreachable();
        }
        return cleanObject({ id, from: user, message, chatInstance, data, gameShortName });
    }
    else {
        return cleanObject({ id, from: user, inlineMessageId: base64EncodeUrlSafe(callbackQuery.msg_id[serialize]()), chatInstance, data, gameShortName });
    }
}
