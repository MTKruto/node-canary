import { cleanObject, UNREACHABLE } from "../1_utilities.js";
import { types } from "../2_tl.js";
import { constructKeyboardButton, keyboardButtonToTlObject } from "./1_keyboard_button.js";
import { constructInlineKeyboardButton, inlineKeyboardButtonToTlObject } from "./2_inline_keyboard_button.js";
function constructInlineKeyboardMarkup(keyboard_) {
    const rows = new Array();
    for (const row_ of keyboard_.rows) {
        const row = new Array();
        for (const button_ of row_.buttons) {
            row.push(constructInlineKeyboardButton(button_));
        }
        rows.push(row);
    }
    return { inlineKeyboard: rows };
}
async function inlineKeyboardMarkupToTlObject(keyboard, usernameResolver) {
    const rows_ = new Array();
    for (const row of keyboard.inlineKeyboard) {
        const row_ = new Array();
        for (const button of row) {
            row_.push(await inlineKeyboardButtonToTlObject(button, usernameResolver));
        }
        rows_.push(new types.KeyboardButtonRow({ buttons: row_ }));
    }
    return new types.ReplyInlineMarkup({ rows: rows_ });
}
function constructReplyKeyboardMarkup(keyboard_) {
    const rows = new Array();
    for (const row_ of keyboard_.rows) {
        const row = new Array();
        for (const button_ of row_.buttons) {
            row.push(constructKeyboardButton(button_));
        }
        rows.push(row);
    }
    return {
        resizeKeyboard: keyboard_.resize || false,
        oneTimeKeyboard: keyboard_.single_use || false,
        selective: keyboard_.selective || false,
        isPersistent: keyboard_.persistent || false,
        keyboard: rows,
    };
}
function replyKeyboardMarkupToTlObject(replyMarkup) {
    const rows_ = new Array();
    for (const row of replyMarkup.keyboard) {
        const row_ = new Array();
        for (const button of row) {
            row_.push(keyboardButtonToTlObject(button));
        }
        rows_.push(new types.KeyboardButtonRow({ buttons: row_ }));
    }
    return new types.ReplyKeyboardMarkup({
        resize: replyMarkup.resizeKeyboard || undefined,
        single_use: replyMarkup.oneTimeKeyboard || undefined,
        selective: replyMarkup.selective || undefined,
        persistent: replyMarkup.isPersistent || undefined,
        rows: rows_,
        placeholder: replyMarkup.inputFieldPlaceholder,
    });
}
function constructReplyKeyboardRemove(replyMarkup_) {
    return cleanObject({ removeKeyboard: true, selective: replyMarkup_.selective });
}
function replyKeyboardRemoveToTlObject(replyMarkup) {
    return new types.ReplyKeyboardHide({ selective: replyMarkup.selective || undefined });
}
function constructForceReply(replyMarkup_) {
    const replyMarkup = { forceReply: true };
    if (replyMarkup_.placeholder) {
        replyMarkup.inputFieldPlaceholder = replyMarkup_.placeholder;
    }
    if (replyMarkup_.selective) {
        replyMarkup.selective = true;
    }
    return replyMarkup;
}
function forceReplyToTlObject(replyMarkup) {
    return new types.ReplyKeyboardForceReply({
        selective: replyMarkup.selective || undefined,
        placeholder: replyMarkup.inputFieldPlaceholder,
    });
}
export function constructReplyMarkup(replyMarkup) {
    if (replyMarkup instanceof types.ReplyKeyboardMarkup) {
        return constructReplyKeyboardMarkup(replyMarkup);
    }
    else if (replyMarkup instanceof types.ReplyInlineMarkup) {
        return constructInlineKeyboardMarkup(replyMarkup);
    }
    else if (replyMarkup instanceof types.ReplyKeyboardHide) {
        return constructReplyKeyboardRemove(replyMarkup);
    }
    else if (replyMarkup instanceof types.ReplyKeyboardForceReply) {
        return constructForceReply(replyMarkup);
    }
    else {
        UNREACHABLE();
    }
}
export async function replyMarkupToTlObject(replyMarkup, usernameResolver) {
    if ("inlineKeyboard" in replyMarkup) {
        return await inlineKeyboardMarkupToTlObject(replyMarkup, usernameResolver);
    }
    else if ("keyboard" in replyMarkup) {
        return replyKeyboardMarkupToTlObject(replyMarkup);
    }
    else if ("removeKeyboard" in replyMarkup) {
        return replyKeyboardRemoveToTlObject(replyMarkup);
    }
    else if ("forceReply" in replyMarkup) {
        return forceReplyToTlObject(replyMarkup);
    }
    else {
        UNREACHABLE();
    }
}
