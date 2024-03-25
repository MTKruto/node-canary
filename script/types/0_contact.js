"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructContact = void 0;
function constructContact(contact) {
    return {
        phoneNumber: contact.phone_number,
        firstName: contact.first_name,
        lastName: contact.last_name || undefined,
        userId: Number(contact.user_id) || undefined,
        vcard: contact.vcard || undefined,
    };
}
exports.constructContact = constructContact;
