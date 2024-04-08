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
import { enums } from "../2_tl.js";
import { InputPeerGetter } from "./_getters.js";
import { ID } from "./0_id.js";
/** @unlisted */
export interface BotCommandScopeDefault {
    type: "default";
}
/** @unlisted */
export interface BotCommandScopeAllPrivateChats {
    type: "allPrivateChats";
}
/** @unlisted */
export interface BotCommandScopeAllGroupChats {
    type: "allGroupChats";
}
/** @unlisted */
export interface BotCommandScopeAllChatAdministrators {
    type: "allChatAdministrators";
}
/** @unlisted */
export interface BotCommandScopeChat {
    type: "chat";
    chatId: ID;
}
/** @unlisted */
export interface BotCommandScopeChatAdministrators {
    type: "chatAdministrators";
    chatId: ID;
}
/** @unlisted */
export interface BotCommandScopeChatMember {
    type: "chatMember";
    chatId: ID;
    userId: number;
}
/** A type specifying where bot commads are available. */
export type BotCommandScope = BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember;
export declare function botCommandScopeToTlObject(scope: BotCommandScope, getInputPeer: InputPeerGetter): Promise<enums.BotCommandScope>;
