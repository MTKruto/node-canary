"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructReplyMarkup = constructReplyMarkup;
exports.replyMarkupToTlObject = replyMarkupToTlObject;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_inline_keyboard_button_js_1 = require("./1_inline_keyboard_button.js");
const _1_keyboard_button_js_1 = require("./1_keyboard_button.js");
function constructInlineKeyboardMarkup(keyboard_) {
    const rows = new Array();
    for (const row_ of keyboard_.rows) {
        const row = new Array();
        for (const button_ of row_.buttons) {
            row.push((0, _1_inline_keyboard_button_js_1.constructInlineKeyboardButton)(button_));
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
            row_.push(await (0, _1_inline_keyboard_button_js_1.inlineKeyboardButtonToTlObject)(button, usernameResolver));
        }
        rows_.push({ _: "keyboardButtonRow", buttons: row_ });
    }
    return { _: "replyInlineMarkup", rows: rows_ };
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
        rows_.push({ _: "keyboardButtonRow", buttons: row_ });
    }
    return { _: "replyKeyboardMarkup", resize: replyMarkup.resizeKeyboard || undefined, single_use: replyMarkup.oneTimeKeyboard || undefined, selective: replyMarkup.selective || undefined, persistent: replyMarkup.isPersistent || undefined, rows: rows_, placeholder: replyMarkup.inputFieldPlaceholder };
}
function constructReplyKeyboardRemove(replyMarkup_) {
    return (0, _1_utilities_js_1.cleanObject)({ removeKeyboard: true, selective: replyMarkup_.selective });
}
function replyKeyboardRemoveToTlObject(replyMarkup) {
    return { _: "replyKeyboardHide", selective: replyMarkup.selective || undefined };
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
    return { _: "replyKeyboardForceReply", selective: replyMarkup.selective || undefined, placeholder: replyMarkup.inputFieldPlaceholder };
}
function constructReplyMarkup(replyMarkup) {
    if (_2_tl_js_1.Api.is("replyKeyboardMarkup", replyMarkup)) {
        return constructReplyKeyboardMarkup(replyMarkup);
    }
    else if (_2_tl_js_1.Api.is("replyInlineMarkup", replyMarkup)) {
        return constructInlineKeyboardMarkup(replyMarkup);
    }
    else if (_2_tl_js_1.Api.is("replyKeyboardHide", replyMarkup)) {
        return constructReplyKeyboardRemove(replyMarkup);
    }
    else if (_2_tl_js_1.Api.is("replyKeyboardForceReply", replyMarkup)) {
        return constructForceReply(replyMarkup);
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
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
        (0, _0_deps_js_1.unreachable)();
    }
}
