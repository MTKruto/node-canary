import { unreachable } from "../0_deps.js";
import { types } from "../2_tl.js";
import { constructMiniAppInfo } from "./0_mini_app_info.js";
export function constructInlineKeyboardButton(button_) {
    if (button_ instanceof types.KeyboardButtonUrl) {
        return { text: button_.text, url: button_.url };
    }
    else if (button_ instanceof types.KeyboardButtonCallback) {
        return { text: button_.text, callbackData: new TextDecoder().decode(button_.data) };
    }
    else if (button_ instanceof types.KeyboardButtonWebView || button_ instanceof types.KeyboardButtonSimpleWebView) {
        return { text: button_.text, miniApp: constructMiniAppInfo(button_.url) };
    }
    else if (button_ instanceof types.KeyboardButtonUrlAuth) {
        return { text: button_.text, loginUrl: { url: button_.url, forwardText: button_.fwd_text } };
    }
    else if (button_ instanceof types.KeyboardButtonSwitchInline) {
        if (button_.same_peer) {
            return { text: button_.text, switchInlineQueryCurrentChat: button_.query };
        }
        else {
            return { text: button_.text, switchInlineQuery: button_.query };
        }
    }
    else if (button_ instanceof types.KeyboardButtonBuy) {
        return { text: button_.text, pay: true };
    }
    else if (button_ instanceof types.KeyboardButtonGame) {
        return { text: button_.text, callbackGame: {} };
    }
    else {
        unreachable();
    }
}
export async function inlineKeyboardButtonToTlObject(button, usernameResolver) {
    if ("url" in button) {
        return new types.KeyboardButtonUrl({ text: button.text, url: button.url });
    }
    else if ("callbackData" in button) {
        return new types.KeyboardButtonCallback({ text: button.text, data: new TextEncoder().encode(button.callbackData) });
    }
    else if ("miniApp" in button) {
        return new types.KeyboardButtonWebView({ text: button.text, url: button.miniApp.url });
    }
    else if ("loginUrl" in button) {
        return new types.InputKeyboardButtonUrlAuth({
            text: button.text,
            url: button.loginUrl.url,
            fwd_text: button.loginUrl.forwardText,
            bot: button.loginUrl.botUsername ? await usernameResolver(button.loginUrl.botUsername) : new types.InputUserSelf(),
            request_write_access: button.loginUrl.requestWriteAccess || undefined,
        });
    }
    else if ("switchInlineQuery" in button) {
        return new types.KeyboardButtonSwitchInline({ text: button.text, query: button.switchInlineQuery });
    }
    else if ("switchInlineQueryCurrentChat" in button) {
        return new types.KeyboardButtonSwitchInline({ text: button.text, query: button.switchInlineQueryCurrentChat, same_peer: true });
    }
    else if ("pay" in button) {
        return new types.KeyboardButtonBuy({ text: button.text });
    }
    else {
        unreachable();
    }
}
