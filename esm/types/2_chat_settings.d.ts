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
import { User } from "./1_user.js";
export interface ChatSettings {
    report: boolean;
    addToContacts: boolean;
    block: boolean;
    shareContact: boolean;
    contactsException: boolean;
    reportLocation: boolean;
    unarchive: boolean;
    inviteMembers: boolean;
    channelJoinRequest: boolean;
    businessBotPaused: boolean;
    businessBotCanReply: boolean;
    distance?: number;
    joinRequestChatTitle?: string;
    joinRequestDate?: number;
    businessBot?: User;
    businessBotUrl?: string;
    messagePrice?: number;
    registrationMonth?: string;
    phoneCountry?: string;
    nameChangeDate?: number;
    photoChangeDate?: number;
}
export declare function constructChatSettings(settings_: Api.messages_peerSettings): ChatSettings;
//# sourceMappingURL=2_chat_settings.d.ts.map