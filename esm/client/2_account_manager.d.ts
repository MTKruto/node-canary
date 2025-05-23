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
import { ID } from "../3_types.js";
import { AddContactParams, SetBirthdayParams, SetEmojiStatusParams, SetLocationParams, SetNameColorParams, SetPersonalChannelParams, SetProfileColorParams, UpdateProfileParams } from "./0_params.js";
import { C } from "./1_types.js";
export declare class AccountManager {
    #private;
    constructor(c: C);
    showUsername(id: ID, username: string): Promise<void>;
    hideUsername(id: ID, username: string): Promise<void>;
    reorderUsernames(id: ID, order: string[]): Promise<NonNullable<boolean | undefined>>;
    hideUsernames(id: ID): Promise<NonNullable<boolean | undefined>>;
    getInactiveChats(): Promise<import("../3_types.js").InactiveChat[]>;
    setOnline(online: boolean): Promise<void>;
    setEmojiStatus(id: string, params?: SetEmojiStatusParams): Promise<void>;
    setUserEmojiStatus(userId: ID, id: string, params?: SetEmojiStatusParams): Promise<void>;
    setBotCanSetEmojiStatus(botId: ID, canSetEmojiStatus: boolean): Promise<void>;
    getContacts(): Promise<import("../3_types.js").User[]>;
    deleteContacts(userIds: ID[]): Promise<void>;
    deleteContact(userId: ID): Promise<void>;
    addContact(userId: ID, params?: AddContactParams): Promise<void>;
    updateProfile(params?: UpdateProfileParams): Promise<void>;
    setBirthday(params?: SetBirthdayParams): Promise<void>;
    setPersonalChannel(params?: SetPersonalChannelParams): Promise<void>;
    setNameColor(color: number, params?: SetNameColorParams): Promise<void>;
    setProfileColor(color: number, params?: SetProfileColorParams): Promise<void>;
    setLocation(params?: SetLocationParams): Promise<void>;
}
//# sourceMappingURL=2_account_manager.d.ts.map