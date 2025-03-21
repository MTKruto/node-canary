/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
import { Api } from "../2_tl.js";
import { UsernameResolver } from "./_getters.js";
import { LoginUrl } from "./0_login_url.js";
import { MiniAppInfo } from "./0_mini_app_info.js";
/** @unlisted */
export interface _InlineKeyboardButtonBase {
    /** The text of the button. */
    text: string;
}
/**
 * An inline keyboard button that, when pressed, opens the specified URL.
 * @unlisted
 */
export interface InlineKeyboardButtonURL extends _InlineKeyboardButtonBase {
    /**
     * The URL to open.
     * @discriminator
     */
    url: string;
}
/**
 * An inline keyboard button that, when pressed, sends back the specified callback data.
 * @unlisted
 */
export interface InlineKeyboardButtonCallback extends _InlineKeyboardButtonBase {
    /**
     * The callback data to send back.
     * @discriminator
     */
    callbackData: string;
}
/**
 * An inline keyboard button that, when pressed, launches the specified mini app.
 * @unlisted
 */
/** @unlisted */
export interface InlineKeyboardButtonMiniApp extends _InlineKeyboardButtonBase {
    /**
     * The mini app to launch.
     * @discriminator
     */
    miniApp: MiniAppInfo;
}
/**
 * An inline keyboard button that, when pressed, logs the user into the specified URL.
 * @unlisted
 */
export interface InlineKeyboardButtonLogin extends _InlineKeyboardButtonBase {
    /**
     * The URL to log into.
     * @discriminator
     */
    loginUrl: LoginUrl;
}
/**
 * An inline keyboard button that, when pressed, switches to inline mode in a chat chosen by the user.
 * @unlisted
 */
export interface InlineKeyboardButtonSwitchInline extends _InlineKeyboardButtonBase {
    /**
     * The query to type into the user's message box once switched to inline.
     * @discriminator
     */
    switchInlineQuery: string;
}
/**
 * An inline keyboard button that, when pressed, switches to inline mode in the current chat.
 * @unlisted
 */
export interface InlineKeyboardButtonSwitchInlineCurrent extends _InlineKeyboardButtonBase {
    /**
     * The query to type into the user's message box once switched to inline.
     * @discriminator
     */
    switchInlineQueryCurrentChat: string;
}
/**
 * An inline keyboard button that, when pressed, switches to inline mode in a chat chosen by the user from a limited subset of chats.
 * @unlisted
 */
export interface InlineKeyboardButtonSwitchInlineChosen extends _InlineKeyboardButtonBase {
    /** @discriminator */
    switchInlineQueryChosenChats: {
        query: string;
        allowUsers?: boolean;
        allowBots?: boolean;
        allowGroups?: boolean;
        allowChannels?: boolean;
    };
}
/**
 * An inline keyboard button that, when pressed, launches the bot's game.
 * @unlisted
 */
export interface InlineKeyboardButtonGame extends _InlineKeyboardButtonBase {
    /** @discriminator */
    callbackGame: Record<never, never>;
}
/**
 * An inline keyboard that, when pressed, initiates a payment.
 * @unlisted
 */
export interface InlineKeyboardButtonPay extends _InlineKeyboardButtonBase {
    /** @discriminator */
    pay: boolean;
}
/**
 * An inline keyboard that, when pressed, copies the text inside its `copy` field.
 * @unlisted
 */
export interface InlineKeyboardButtonCopy extends _InlineKeyboardButtonBase {
    /** @discriminator */
    copy: string;
}
/** A button of an inline keyboard. */
export type InlineKeyboardButton = InlineKeyboardButtonURL | InlineKeyboardButtonCallback | InlineKeyboardButtonMiniApp | InlineKeyboardButtonLogin | InlineKeyboardButtonSwitchInline | InlineKeyboardButtonSwitchInlineCurrent | InlineKeyboardButtonSwitchInlineChosen | InlineKeyboardButtonGame | InlineKeyboardButtonPay | InlineKeyboardButtonCopy;
export declare function constructInlineKeyboardButton(button_: Api.KeyboardButton): InlineKeyboardButton;
export declare function inlineKeyboardButtonToTlObject(button: InlineKeyboardButton, usernameResolver: UsernameResolver): Promise<Api.KeyboardButton>;
//# sourceMappingURL=2_inline_keyboard_button.d.ts.map