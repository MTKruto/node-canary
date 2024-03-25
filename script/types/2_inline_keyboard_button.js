"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inlineKeyboardButtonToTlObject = exports.constructInlineKeyboardButton = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _0_mini_app_info_js_1 = require("./0_mini_app_info.js");
function constructInlineKeyboardButton(button_) {
    if (button_ instanceof _2_tl_js_1.types.KeyboardButtonUrl) {
        return { text: button_.text, url: button_.url };
    }
    else if (button_ instanceof _2_tl_js_1.types.KeyboardButtonCallback) {
        return { text: button_.text, callbackData: new TextDecoder().decode(button_.data) };
    }
    else if (button_ instanceof _2_tl_js_1.types.KeyboardButtonWebView || button_ instanceof _2_tl_js_1.types.KeyboardButtonSimpleWebView) {
        return { text: button_.text, miniApp: (0, _0_mini_app_info_js_1.constructMiniAppInfo)(button_.url) };
    }
    else if (button_ instanceof _2_tl_js_1.types.KeyboardButtonUrlAuth) {
        return { text: button_.text, loginUrl: { url: button_.url, forwardText: button_.fwd_text } };
    }
    else if (button_ instanceof _2_tl_js_1.types.KeyboardButtonSwitchInline) {
        if (button_.same_peer) {
            return { text: button_.text, switchInlineQueryCurrentChat: button_.query };
        }
        else {
            return { text: button_.text, switchInlineQuery: button_.query };
        }
    }
    else if (button_ instanceof _2_tl_js_1.types.KeyboardButtonBuy) {
        return { text: button_.text, pay: true };
    }
    else if (button_ instanceof _2_tl_js_1.types.KeyboardButtonGame) {
        return { text: button_.text, callbackGame: {} };
    }
    else {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.constructInlineKeyboardButton = constructInlineKeyboardButton;
async function inlineKeyboardButtonToTlObject(button, usernameResolver) {
    if ("url" in button) {
        return new _2_tl_js_1.types.KeyboardButtonUrl({ text: button.text, url: button.url });
    }
    else if ("callbackData" in button) {
        return new _2_tl_js_1.types.KeyboardButtonCallback({ text: button.text, data: new TextEncoder().encode(button.callbackData) });
    }
    else if ("miniApp" in button) {
        return new _2_tl_js_1.types.KeyboardButtonWebView({ text: button.text, url: button.miniApp.url });
    }
    else if ("loginUrl" in button) {
        return new _2_tl_js_1.types.InputKeyboardButtonUrlAuth({
            text: button.text,
            url: button.loginUrl.url,
            fwd_text: button.loginUrl.forwardText,
            bot: button.loginUrl.botUsername ? await usernameResolver(button.loginUrl.botUsername) : new _2_tl_js_1.types.InputUserSelf(),
            request_write_access: button.loginUrl.requestWriteAccess || undefined,
        });
    }
    else if ("switchInlineQuery" in button) {
        return new _2_tl_js_1.types.KeyboardButtonSwitchInline({ text: button.text, query: button.switchInlineQuery });
    }
    else if ("switchInlineQueryCurrentChat" in button) {
        return new _2_tl_js_1.types.KeyboardButtonSwitchInline({ text: button.text, query: button.switchInlineQueryCurrentChat, same_peer: true });
    }
    else if ("pay" in button) {
        return new _2_tl_js_1.types.KeyboardButtonBuy({ text: button.text });
    }
    else {
        (0, _1_utilities_js_1.UNREACHABLE)();
    }
}
exports.inlineKeyboardButtonToTlObject = inlineKeyboardButtonToTlObject;
