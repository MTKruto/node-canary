"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replyMarkupToTlObject = exports.constructReplyMarkup = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_keyboard_button_js_1 = require("./1_keyboard_button.js");
const _2_inline_keyboard_button_js_1 = require("./2_inline_keyboard_button.js");
function constructInlineKeyboardMarkup(keyboard_) {
    const rows = new Array();
    for (const row_ of keyboard_.rows) {
        const row = new Array();
        for (const button_ of row_.buttons) {
            row.push((0, _2_inline_keyboard_button_js_1.constructInlineKeyboardButton)(button_));
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
            row_.push(await (0, _2_inline_keyboard_button_js_1.inlineKeyboardButtonToTlObject)(button, usernameResolver));
        }
        rows_.push(new _2_tl_js_1.types.KeyboardButtonRow({ buttons: row_ }));
    }
    return new _2_tl_js_1.types.ReplyInlineMarkup({ rows: rows_ });
}
function constructReplyKeyboardMarkup(keyboard_) {
    const rows = new Array();
    for (const row_ of keyboard_.rows) {
        const row = new Array();
        for (const button_ of row_.buttons) {
            row.push((0, _1_keyboard_button_js_1.constructKeyboardButton)(button_));
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
            row_.push((0, _1_keyboard_button_js_1.keyboardButtonToTlObject)(button));
        }
        rows_.push(new _2_tl_js_1.types.KeyboardButtonRow({ buttons: row_ }));
    }
    return new _2_tl_js_1.types.ReplyKeyboardMarkup({
        resize: replyMarkup.resizeKeyboard || undefined,
        single_use: replyMarkup.oneTimeKeyboard || undefined,
        selective: replyMarkup.selective || undefined,
        persistent: replyMarkup.isPersistent || undefined,
        rows: rows_,
        placeholder: replyMarkup.inputFieldPlaceholder,
    });
}
function constructReplyKeyboardRemove(replyMarkup_) {
    return (0, _1_utilities_js_1.cleanObject)({ removeKeyboard: true, selective: replyMarkup_.selective });
}
function replyKeyboardRemoveToTlObject(replyMarkup) {
    return new _2_tl_js_1.types.ReplyKeyboardHide({ selective: replyMarkup.selective || undefined });
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
    return new _2_tl_js_1.types.ReplyKeyboardForceReply({
        selective: replyMarkup.selective || undefined,
        placeholder: replyMarkup.inputFieldPlaceholder,
    });
}
function constructReplyMarkup(replyMarkup) {
    if (replyMarkup instanceof _2_tl_js_1.types.ReplyKeyboardMarkup) {
        return constructReplyKeyboardMarkup(replyMarkup);
    }
    else if (replyMarkup instanceof _2_tl_js_1.types.ReplyInlineMarkup) {
        return constructInlineKeyboardMarkup(replyMarkup);
    }
    else if (replyMarkup instanceof _2_tl_js_1.types.ReplyKeyboardHide) {
        return constructReplyKeyboardRemove(replyMarkup);
    }
    else if (replyMarkup instanceof _2_tl_js_1.types.ReplyKeyboardForceReply) {
        return constructForceReply(replyMarkup);
    }
    else {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.constructReplyMarkup = constructReplyMarkup;
async function replyMarkupToTlObject(replyMarkup, usernameResolver) {
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
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.replyMarkupToTlObject = replyMarkupToTlObject;
