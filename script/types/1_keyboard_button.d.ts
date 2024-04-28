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
//# sourceMappingURL=1_keyboard_button.d.ts.map