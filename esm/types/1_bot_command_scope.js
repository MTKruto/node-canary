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
import { Api } from "../2_tl.js";
export async function botCommandScopeToTlObject(scope, getInputPeer) {
    switch (scope.type) {
        case "default":
            return { _: "botCommandScopeDefault" };
        case "allPrivateChats":
            return { _: "botCommandScopeUsers" };
        case "allGroupChats":
            return { _: "botCommandScopeChats" };
        case "allChatAdministrators":
            return { _: "botCommandScopeChatAdmins" };
        case "chat":
            return { _: "botCommandScopePeer", peer: await getInputPeer(scope.chatId) };
        case "chatAdministrators":
            return { _: "botCommandScopePeerAdmins", peer: await getInputPeer(scope.chatId) };
        case "chatMember": {
            const user = await getInputPeer(scope.userId);
            if (!Api.is("inputPeerUser", user)) {
                unreachable();
            }
            return { _: "botCommandScopePeerUser", peer: await getInputPeer(scope.chatId), user_id: ({ _: "inputUser", user_id: user.user_id, access_hash: user.access_hash }) };
        }
        default:
            unreachable();
    }
}
