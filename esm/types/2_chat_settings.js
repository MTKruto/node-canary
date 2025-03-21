import { cleanObject, fromUnixTimestamp } from "../1_utilities.js";
import { is } from "../2_tl.js";
import { constructUser } from "./1_user.js";
export function constructChatSettings(settings_) {
    const settings = {
        report: settings_.settings.report_spam || false,
        addToContacts: settings_.settings.add_contact || false,
        block: settings_.settings.block_contact || false,
        shareContact: settings_.settings.share_contact || false,
        contactsException: settings_.settings.need_contacts_exception || false,
        reportLocation: settings_.settings.report_geo || false,
        unarchive: settings_.settings.autoarchived || false,
        inviteMembers: settings_.settings.invite_members || false,
        channelJoinRequest: settings_.settings.request_chat_broadcast || false,
        businessBotPaused: settings_.settings.business_bot_paused || false,
        businessBotCanReply: settings_.settings.business_bot_can_reply || false,
        distance: settings_.settings.geo_distance,
        joinRequestChatTitle: settings_.settings.request_chat_title,
        joinRequestDate: settings_.settings.request_chat_date ? fromUnixTimestamp(settings_.settings.request_chat_date) : undefined,
        businessBotUrl: settings_.settings.business_bot_manage_url,
        messagePrice: settings_.settings.charge_paid_message_stars ? Number(settings_.settings.charge_paid_message_stars) : undefined,
        registrationMonth: settings_.settings.registration_month,
        phoneCountry: settings_.settings.phone_country,
        nameChangeDate: settings_.settings.name_change_date ? fromUnixTimestamp(settings_.settings.name_change_date) : undefined,
        photoChangeDate: settings_.settings.photo_change_date ? fromUnixTimestamp(settings_.settings.photo_change_date) : undefined,
    };
    const bot = settings_.users.find((v) => v.id == settings_.settings.business_bot_id);
    if (is("user", bot)) {
        settings.businessBot = constructUser(bot);
    }
    return cleanObject(settings);
}
