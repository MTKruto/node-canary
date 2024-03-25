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
