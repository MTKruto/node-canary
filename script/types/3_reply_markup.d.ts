import { enums } from "../2_tl.js";
import { UsernameResolver } from "./1__getters.js";
import { KeyboardButton } from "./1_keyboard_button.js";
import { InlineKeyboardButton } from "./2_inline_keyboard_button.js";
/** @unlisted */
export interface ReplyMarkupInlineKeyboard {
    inlineKeyboard: InlineKeyboardButton[][];
}
/** @unlisted */
export interface ReplyMarkupKeyboard {
    keyboard: KeyboardButton[][];
    isPersistent?: boolean;
    resizeKeyboard?: boolean;
    oneTimeKeyboard?: boolean;
    inputFieldPlaceholder?: string;
    selective?: boolean;
}
/**
 * Makes the user's client hide the current custom keyboard.
 * @unlisted
 */
export interface ReplyMarkupRemoveKeyboard {
    /** Differentiate from other reply markup types. */
    removeKeyboard: true;
    /** Whether to only affect specific users. If true, only users that were mentioned will be affected along with the author of the replied message if any. */
    selective?: boolean;
}
/**
 * Forces the user's client to select the message as the one that is to be replied.
 * @unlisted
 */
export interface ReplyMarkupForceReply {
    /** Differentiate from other reply markup types. */
    forceReply: true;
    /** A placeholder to be shown in the client's message box. */
    inputFieldPlaceholder?: string;
    /** Whether to only affect specific users. If true, only users that were mentioned will be affected along with the author of the replied message if any. */
    selective?: boolean;
}
/** A message's reply markup. */
export type ReplyMarkup = ReplyMarkupInlineKeyboard | ReplyMarkupKeyboard | ReplyMarkupRemoveKeyboard | ReplyMarkupForceReply;
export declare function constructReplyMarkup(replyMarkup: enums.ReplyMarkup): ReplyMarkup;
export declare function replyMarkupToTlObject(replyMarkup: ReplyMarkup, usernameResolver: UsernameResolver): Promise<enums.ReplyMarkup>;
