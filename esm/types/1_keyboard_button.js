import { unreachable } from "../0_deps.js";
import { types } from "../2_tl.js";
import { chatAdministratorRightsToTlObject, constructChatAdministratorRights } from "./0_chat_administrator_rights.js";
export function constructKeyboardButton(button_) {
    if (button_ instanceof types.KeyboardButton) {
        return { text: button_.text };
    }
    else if (button_ instanceof types.KeyboardButtonRequestPeer) {
        if (button_.peer_type instanceof types.RequestPeerTypeUser) {
            return {
                text: button_.text,
                requestUser: {
                    requestId: button_.button_id,
                    userIsBot: button_.peer_type.bot || false,
                    userIsPremium: button_.peer_type.premium || false,
                },
            };
        }
        else if (button_.peer_type instanceof types.RequestPeerTypeChat) {
            const button = {
                text: button_.text,
                requestChat: {
                    requestId: button_.button_id,
                    chatIsChannel: false,
                    chatIsForum: button_.peer_type.forum || false,
                    chatHasUsername: button_.peer_type.has_username || false,
                    chatIsCreated: button_.peer_type.creator || false,
                    botIsMember: button_.peer_type.bot_participant || false,
                },
            };
            if (button_.peer_type.bot_admin_rights) {
                button.requestChat.botAdministratorRights = constructChatAdministratorRights(button_.peer_type.bot_admin_rights);
            }
            if (button_.peer_type.user_admin_rights) {
                button.requestChat.userAdministratorRights = constructChatAdministratorRights(button_.peer_type.user_admin_rights);
            }
            return button;
        }
        else if (button_.peer_type instanceof types.RequestPeerTypeBroadcast) {
            const button = {
                text: button_.text,
                requestChat: {
                    requestId: button_.button_id,
                    chatIsChannel: true,
                    chatIsCreated: button_.peer_type.creator || false,
                    chatHasUsername: button_.peer_type.has_username || false,
                },
            };
            if (button_.peer_type.bot_admin_rights) {
                button.requestChat.botAdministratorRights = constructChatAdministratorRights(button_.peer_type.bot_admin_rights);
            }
            if (button_.peer_type.user_admin_rights) {
                button.requestChat.userAdministratorRights = constructChatAdministratorRights(button_.peer_type.user_admin_rights);
            }
            return button;
        }
        else {
            unreachable();
        }
    }
    else if (button_ instanceof types.KeyboardButtonRequestPhone) {
        return { text: button_.text, requestContact: true };
    }
    else if (button_ instanceof types.KeyboardButtonRequestGeoLocation) {
        return { text: button_.text, requestLocation: true };
    }
    else if (button_ instanceof types.KeyboardButtonRequestPoll) {
        const button = { text: button_.text, requestPoll: {} };
        if (button_.quiz) {
            button.requestPoll.type = "quiz";
        }
        return button;
    }
    else if (button_ instanceof types.KeyboardButtonWebView || button_ instanceof types.KeyboardButtonSimpleWebView) {
        return { text: button_.text, miniApp: { url: button_.url } };
    }
    else {
        unreachable();
    }
}
export function keyboardButtonToTlObject(button) {
    if ("requestUser" in button) {
        return new types.KeyboardButtonRequestPeer({
            text: button.text,
            button_id: button.requestUser.requestId,
            peer_type: new types.RequestPeerTypeUser({ bot: button.requestUser.userIsBot, premium: button.requestUser.userIsPremium }),
            max_quantity: 1,
        });
    }
    else if ("requestChat" in button) {
        if (!button.requestChat.chatIsChannel) { // GUESS
            return new types.KeyboardButtonRequestPeer({
                text: button.text,
                button_id: button.requestChat.requestId,
                peer_type: new types.RequestPeerTypeChat({
                    forum: button.requestChat.chatIsForum,
                    has_username: button.requestChat.chatHasUsername,
                    creator: button.requestChat.chatIsCreated || undefined,
                    bot_participant: button.requestChat.botIsMember || undefined,
                    bot_admin_rights: button.requestChat.botAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.botAdministratorRights) : undefined,
                    user_admin_rights: button.requestChat.userAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.userAdministratorRights) : undefined,
                }),
                max_quantity: 1,
            });
        }
        else {
            return new types.KeyboardButtonRequestPeer({
                text: button.text,
                button_id: button.requestChat.requestId,
                peer_type: new types.RequestPeerTypeBroadcast({
                    has_username: button.requestChat.chatHasUsername,
                    creator: button.requestChat.chatIsCreated || undefined,
                    bot_admin_rights: button.requestChat.botAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.botAdministratorRights) : undefined,
                    user_admin_rights: button.requestChat.userAdministratorRights ? chatAdministratorRightsToTlObject(button.requestChat.userAdministratorRights) : undefined,
                }),
                max_quantity: 1,
            });
        }
    }
    else if ("requestContact" in button) {
        return new types.KeyboardButtonRequestPhone({ text: button.text });
    }
    else if ("requestLocation" in button) {
        return new types.KeyboardButtonRequestGeoLocation({ text: button.text });
    }
    else if ("requestPoll" in button) {
        return new types.KeyboardButtonRequestPoll({ text: button.text, quiz: button.requestPoll.type == "quiz" });
    }
    else if ("miniApp" in button) {
        return new types.KeyboardButtonWebView({ text: button.text, url: button.miniApp.url });
    }
    else {
        return new types.KeyboardButton({ text: button.text });
    }
}
