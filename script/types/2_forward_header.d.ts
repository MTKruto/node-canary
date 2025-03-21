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
import { Api } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { ChatPChannel, ChatPSupergroup } from "./1_chat_p.js";
import { User } from "./1_user.js";
/** @unlisted */
export interface _ForwardHeaderCommon {
    date: Date;
}
/** @unlisted */
export interface ForwardHeaderUser extends _ForwardHeaderCommon {
    /** @discriminator */
    type: "user";
    user: User;
}
/** @unlisted */
export interface ForwardHeaderChannel extends _ForwardHeaderCommon {
    /** @discriminator */
    type: "channel";
    chat: ChatPChannel;
    messageId: number;
    authorSignature?: string;
}
/** @unlisted */
export interface ForwardHeaderSupergroup extends _ForwardHeaderCommon {
    type: "supergroup";
    chat: ChatPSupergroup;
    title?: string;
}
/** @unlisted */
export interface ForwardHeaderHidden extends _ForwardHeaderCommon {
    type: "hidden";
    name: string;
}
/** @unlisted */
export interface ForwardHeaderUnsupported extends _ForwardHeaderCommon {
    type: "unsupported";
}
export type ForwardHeader = ForwardHeaderUser | ForwardHeaderChannel | ForwardHeaderSupergroup | ForwardHeaderHidden | ForwardHeaderUnsupported;
export declare function constructForwardHeader(fwdHeader: Api.MessageFwdHeader, getEntity: EntityGetter): Promise<ForwardHeader>;
//# sourceMappingURL=2_forward_header.d.ts.map