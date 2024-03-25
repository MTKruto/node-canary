export function constructContact(contact) {
    return {
        phoneNumber: contact.phone_number,
        firstName: contact.first_name,
        lastName: contact.last_name || undefined,
        userId: Number(contact.user_id) || undefined,
        vcard: contact.vcard || undefined,
    };
}
