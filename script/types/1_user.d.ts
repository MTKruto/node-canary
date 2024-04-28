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
import { types } from "../2_tl.js";
import { ChatPhotoUser } from "./0_chat_photo.js";
/** A user. */
export interface User {
    /** Unique identifier for this user or bot */
    id: number;
    /** Identifier of color that can be displayed instead of the user's photo. */
    color: number;
    /** Whether the user is a bot. */
    isBot: boolean;
    /** The first name of the user. */
    firstName: string;
    /** The last name of the user. */
    lastName?: string;
    /** The user’s main username. */
    username?: string;
    /** The user's additional usernames. */
    also?: string[];
    /** The user's profile photo. */
    photo?: ChatPhotoUser;
    /** The user's [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag). */
    languageCode?: string;
    /** Whether the user has been identified as scam. */
    isScam: boolean;
    /** Whether the user has been identified as an impersonator. */
    isFake: boolean;
    /** Whether the user is subscribed to Telegram Premium. */
    isPremium: boolean;
    /** Whether the user has been verified. */
    isVerified: boolean;
    /** Whether the user is official support. */
    isSupport: boolean;
    /** Whether the user is a bot that has been added to the attachment menu by the current user. */
    addedToAttachmentMenu: boolean;
}
export declare function constructUser(user_: types.User): User;
//# sourceMappingURL=1_user.d.ts.map