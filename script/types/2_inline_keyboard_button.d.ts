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
import { UsernameResolver } from "./_getters.js";
import { LoginUrl } from "./0_login_url.js";
import { MiniAppInfo } from "./0_mini_app_info.js";
/** @unlisted */
export interface _InlineKeyboardButtonBase {
    text: string;
}
/** @unlisted */
export interface InlineKeyboardButtonURL extends _InlineKeyboardButtonBase {
    /** @discriminator */
    url: string;
}
/** @unlisted */
export interface InlineKeyboardButtonCallback extends _InlineKeyboardButtonBase {
    /** @discriminator */
    callbackData: string;
}
/** @unlisted */
export interface InlineKeyboardButtonMiniApp extends _InlineKeyboardButtonBase {
    /** @discriminator */
    miniApp: MiniAppInfo;
}
/** @unlisted */
export interface InlineKeyboardButtonLogin extends _InlineKeyboardButtonBase {
    /** @discriminator */
    loginUrl: LoginUrl;
}
/** @unlisted */
export interface InlineKeyboardButtonSwitchInline extends _InlineKeyboardButtonBase {
    /** @discriminator */
    switchInlineQuery: string;
}
/** @unlisted */
export interface InlineKeyboardButtonSwitchInlineCurrent extends _InlineKeyboardButtonBase {
    /** @discriminator */
    switchInlineQueryCurrentChat: string;
}
/** @unlisted */
export interface InlineKeyboardButtonGame extends _InlineKeyboardButtonBase {
    /** @discriminator */
    callbackGame: Record<never, never>;
}
/** @unlisted */
export interface InlineKeyboardButtonPay extends _InlineKeyboardButtonBase {
    /** @discriminator */
    pay: boolean;
}
/** A button of an inline keyboard. */
export type InlineKeyboardButton = InlineKeyboardButtonURL | InlineKeyboardButtonCallback | InlineKeyboardButtonMiniApp | InlineKeyboardButtonLogin | InlineKeyboardButtonSwitchInline | InlineKeyboardButtonSwitchInlineCurrent | InlineKeyboardButtonGame | InlineKeyboardButtonPay;
export declare function constructInlineKeyboardButton(button_: enums.KeyboardButton): InlineKeyboardButton;
export declare function inlineKeyboardButtonToTlObject(button: InlineKeyboardButton, usernameResolver: UsernameResolver): Promise<enums.KeyboardButton>;
//# sourceMappingURL=2_inline_keyboard_button.d.ts.map