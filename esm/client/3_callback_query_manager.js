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
var _CallbackQueryManager_c;
import { types } from "../2_tl.js";
import { constructCallbackQuery } from "../3_types.js";
export class CallbackQueryManager {
    constructor(c) {
        _CallbackQueryManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _CallbackQueryManager_c, c, "f");
    }
    async answerCallbackQuery(id, params) {
        await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").storage.assertBot("answerCallbackQuery");
        await __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").api.messages.setBotCallbackAnswer({
            query_id: BigInt(id),
            cache_time: params?.cacheTime ?? 0,
            message: params?.text,
            alert: params?.alert ? true : undefined,
        });
    }
    static canHandleUpdate(update) {
        return update instanceof types.UpdateBotCallbackQuery || update instanceof types.UpdateInlineBotCallbackQuery;
    }
    async handleUpdate(update) {
        return { callbackQuery: await constructCallbackQuery(update, __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").getEntity, __classPrivateFieldGet(this, _CallbackQueryManager_c, "f").messageManager.getMessageWithReply.bind(__classPrivateFieldGet(this, _CallbackQueryManager_c, "f").messageManager)) };
    }
}
_CallbackQueryManager_c = new WeakMap();
