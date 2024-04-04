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
    url: string;
}
/** @unlisted */
export interface InlineKeyboardButtonCallback extends _InlineKeyboardButtonBase {
    callbackData: string;
}
/** @unlisted */
export interface InlineKeyboardButtonMiniApp extends _InlineKeyboardButtonBase {
    miniApp: MiniAppInfo;
}
/** @unlisted */
export interface InlineKeyboardButtonLogin extends _InlineKeyboardButtonBase {
    loginUrl: LoginUrl;
}
/** @unlisted */
export interface InlineKeyboardButtonSwitchInline extends _InlineKeyboardButtonBase {
    switchInlineQuery: string;
}
/** @unlisted */
export interface InlineKeyboardButtonSwitchInlineCurrent extends _InlineKeyboardButtonBase {
    switchInlineQueryCurrentChat: string;
}
/** @unlisted */
export interface InlineKeyboardButtonGame extends _InlineKeyboardButtonBase {
    callbackGame: Record<never, never>;
}
/** @unlisted */
export interface InlineKeyboardButtonPay extends _InlineKeyboardButtonBase {
    pay: boolean;
}
/** A button of an inline keyboard. */
export type InlineKeyboardButton = InlineKeyboardButtonURL | InlineKeyboardButtonCallback | InlineKeyboardButtonMiniApp | InlineKeyboardButtonLogin | InlineKeyboardButtonSwitchInline | InlineKeyboardButtonSwitchInlineCurrent | InlineKeyboardButtonGame | InlineKeyboardButtonPay;
export declare function constructInlineKeyboardButton(button_: enums.KeyboardButton): InlineKeyboardButton;
export declare function inlineKeyboardButtonToTlObject(button: InlineKeyboardButton, usernameResolver: UsernameResolver): Promise<enums.KeyboardButton>;
