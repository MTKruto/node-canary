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
/** A shared contact. */
export interface Contact {
    /** The contact's phone number. */
    phoneNumber: string;
    /** The contact's first name. */
    firstName: string;
    /** The contact's last name. */
    lastName?: string;
    /** The contact's Telegram identifier. */
    userId?: number;
    /** Additional information in the vCard format. */
    vcard?: string;
}
export declare function constructContact(contact: types.MessageMediaContact): Contact;
//# sourceMappingURL=0_contact.d.ts.map