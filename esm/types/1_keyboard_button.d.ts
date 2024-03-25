import { enums } from "../2_tl.js";
import { ChatAdministratorRights } from "./0_chat_administrator_rights.js";
import { KeyboardButtonPollType } from "./0_keyboard_button_poll_type.js";
import { MiniAppInfo } from "./0_mini_app_info.js";
/** @unlisted */
export interface KeyboardButtonText {
    text: string;
}
/** @unlisted */
export interface KeyboardButtonRequestUser extends KeyboardButtonText {
    requestUser: {
        requestId: number;
        userIsBot?: boolean;
        userIsPremium?: boolean;
    };
}
/** @unlisted */
export interface KeyboardButtonRequestChat extends KeyboardButtonText {
    requestChat: {
        requestId: number;
        chatIsChannel: boolean;
        chatIsForum?: boolean;
        chatHasUsername?: boolean;
        chatIsCreated?: boolean;
        userAdministratorRights?: ChatAdministratorRights;
        botAdministratorRights?: ChatAdministratorRights;
        botIsMember?: boolean;
    };
}
/** @unlisted */
export interface KeyboardButtonRequestContact extends KeyboardButtonText {
    requestContact: true;
}
/** @unlisted */
export interface KeyboardButtonRequestLocation extends KeyboardButtonText {
    requestLocation: true;
}
/** @unlisted */
export interface KeyboardButtonRequestPoll extends KeyboardButtonText {
    requestPoll: KeyboardButtonPollType;
}
/** @unlisted */
export interface KeyboardButtonMiniApp extends KeyboardButtonText {
    miniApp: MiniAppInfo;
}
/** A button of a custom keyboard. */
export type KeyboardButton = KeyboardButtonText | KeyboardButtonRequestUser | KeyboardButtonRequestChat | KeyboardButtonRequestContact | KeyboardButtonRequestLocation | KeyboardButtonRequestPoll | KeyboardButtonMiniApp;
export declare function constructKeyboardButton(button_: enums.KeyboardButton): KeyboardButton;
export declare function keyboardButtonToTlObject(button: KeyboardButton): enums.KeyboardButton;
