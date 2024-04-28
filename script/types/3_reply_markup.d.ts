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
//# sourceMappingURL=3_reply_markup.d.ts.map