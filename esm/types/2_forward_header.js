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
import { unreachable } from "../0_deps.js";
import { cleanObject, fromUnixTimestamp } from "../1_utilities.js";
import { constructChatP } from "./1_chat_p.js";
import { constructUser } from "./1_user.js";
export async function constructForwardHeader(fwdHeader, getEntity) {
    if (fwdHeader.channel_post && fwdHeader.from_id?._ == "peerChannel") {
        const chat = await getEntity(fwdHeader.from_id);
        if (chat == null) {
            unreachable();
        }
        return cleanObject({
            type: "channel",
            date: fromUnixTimestamp(fwdHeader.date),
            chat: constructChatP(chat),
            messageId: fwdHeader.channel_post,
            authorSignature: fwdHeader.post_author,
        });
    }
    else if (fwdHeader.from_id?._ == "peerChannel") {
        const chat = await getEntity(fwdHeader.from_id);
        if (chat == null) {
            unreachable();
        }
        return cleanObject({
            type: "supergroup",
            date: fromUnixTimestamp(fwdHeader.date),
            chat: constructChatP(chat),
            title: fwdHeader.post_author,
        });
    }
    else if (fwdHeader.from_id?._ == "peerUser") {
        const user = await getEntity(fwdHeader.from_id);
        if (user == null) {
            unreachable();
        }
        return {
            type: "user",
            date: fromUnixTimestamp(fwdHeader.date),
            user: constructUser(user),
        };
    }
    else if (fwdHeader.from_name) {
        return {
            type: "hidden",
            date: fromUnixTimestamp(fwdHeader.date),
            name: fwdHeader.from_name,
        };
    }
    else {
        return {
            type: "unsupported",
            date: fromUnixTimestamp(fwdHeader.date),
        };
    }
}
