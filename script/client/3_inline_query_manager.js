"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _InlineQueryManager_c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineQueryManager = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const _0_utilities_js_1 = require("./0_utilities.js");
class InlineQueryManager {
    constructor(c) {
        _InlineQueryManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _InlineQueryManager_c, c, "f");
    }
    async answerInlineQuery(id, results, params) {
        await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").storage.assertBot("answerInlineQuery");
        (0, _0_utilities_js_1.checkInlineQueryId)(id);
        await __classPrivateFieldGet(this, _InlineQueryManager_c, "f").api.messages.setInlineBotResults({
            query_id: BigInt(id),
            results: await Promise.all(results.map((v) => (0, _3_types_js_1.inlineQueryResultToTlObject)(v, __classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageManager.parseText.bind(__classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageManager), __classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageManager.usernameResolver.bind(__classPrivateFieldGet(this, _InlineQueryManager_c, "f").messageManager)))),
            cache_time: params?.cacheTime ?? 300,
            private: params?.isPersonal ? true : undefined,
            switch_webview: params?.button && params.button.miniApp ? new _2_tl_js_1.types.InlineBotWebView({ text: params.button.text, url: params.button.miniApp.url }) : undefined,
            switch_pm: params?.button && params.button.startParameter ? new _2_tl_js_1.types.InlineBotSwitchPM({ text: params.button.text, start_param: params.button.startParameter }) : undefined,
            gallery: params?.isGallery ? true : undefined,
            next_offset: params?.nextOffset,
        });
    }
    static canHandleUpdate(update) {
        return update instanceof _2_tl_js_1.types.UpdateBotInlineQuery || update instanceof _2_tl_js_1.types.UpdateBotInlineSend;
    }
    async handleUpdate(update) {
        if (update instanceof _2_tl_js_1.types.UpdateBotInlineQuery) {
            return { inlineQuery: await (0, _3_types_js_1.constructInlineQuery)(update, __classPrivateFieldGet(this, _InlineQueryManager_c, "f").getEntity) };
        }
        else if (update instanceof _2_tl_js_1.types.UpdateBotInlineSend) {
            return { chosenInlineResult: await (0, _3_types_js_1.constructChosenInlineResult)(update, __classPrivateFieldGet(this, _InlineQueryManager_c, "f").getEntity) };
        }
        else {
            (0, _1_utilities_js_1.UNREACHABLE)();
        }
    }
}
exports.InlineQueryManager = InlineQueryManager;
_InlineQueryManager_c = new WeakMap();
