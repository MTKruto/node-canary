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
var _ReactionManager_c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
class ReactionManager {
    constructor(c) {
        _ReactionManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _ReactionManager_c, c, "f");
    }
    static canHandleUpdate(update) {
        return update instanceof _2_tl_js_1.types.UpdateBotMessageReactions || update instanceof _2_tl_js_1.types.UpdateBotMessageReaction || update instanceof _2_tl_js_1.types.UpdateMessageReactions || update instanceof _2_tl_js_1.types.UpdateChannelMessageViews || update instanceof _2_tl_js_1.types.UpdateChannelMessageForwards;
    }
    async handleUpdate(update) {
        if (update instanceof _2_tl_js_1.types.UpdateBotMessageReactions) {
            const messageReactionCount = await (0, _3_types_js_1.constructMessageReactionCount)(update, __classPrivateFieldGet(this, _ReactionManager_c, "f").getEntity);
            if (messageReactionCount) {
                return { messageReactionCount };
            }
            else {
                return null;
            }
        }
        else if (update instanceof _2_tl_js_1.types.UpdateBotMessageReaction) {
            const messageReactions = await (0, _3_types_js_1.constructMessageReactions)(update, __classPrivateFieldGet(this, _ReactionManager_c, "f").getEntity);
            if (messageReactions) {
                return { messageReactions };
            }
            else {
                return null;
            }
        }
        else if (update instanceof _2_tl_js_1.types.UpdateMessageReactions) {
            const chatId = (0, _2_tl_js_1.peerToChatId)(update.peer);
            const message = await __classPrivateFieldGet(this, _ReactionManager_c, "f").messageStorage.getMessage(chatId, update.msg_id);
            if (message instanceof _2_tl_js_1.types.Message) {
                message.reactions = update.reactions;
                await __classPrivateFieldGet(this, _ReactionManager_c, "f").messageStorage.setMessage(chatId, update.msg_id, message);
                const views = message.views ?? 0;
                const forwards = message.forwards ?? 0;
                const recentReactions = update.reactions.recent_reactions ?? [];
                const reactions = update.reactions.results.map((v) => (0, _3_types_js_1.constructMessageReaction)(v, recentReactions));
                return ({ messageInteractions: { chatId, messageId: update.msg_id, reactions, views, forwards } });
            }
            else {
                return null;
            }
        }
        else if (update instanceof _2_tl_js_1.types.UpdateChannelMessageViews || update instanceof _2_tl_js_1.types.UpdateChannelMessageForwards) {
            const chatId = (0, _2_tl_js_1.peerToChatId)(new _2_tl_js_1.types.PeerChannel(update));
            const message = await __classPrivateFieldGet(this, _ReactionManager_c, "f").messageStorage.getMessage(chatId, update.id);
            if (message instanceof _2_tl_js_1.types.Message) {
                if ("views" in update) {
                    message.views = update.views;
                }
                if ("forwards" in update) {
                    message.forwards = update.forwards;
                }
                const views = message.views ?? 0;
                const forwards = message.forwards ?? 0;
                const recentReactions = message.reactions?.recent_reactions ?? [];
                const reactions = message.reactions?.results.map((v) => (0, _3_types_js_1.constructMessageReaction)(v, recentReactions)) ?? [];
                return { messageInteractions: { chatId, messageId: update.id, reactions, views, forwards } };
            }
            else {
                return null;
            }
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
}
exports.ReactionManager = ReactionManager;
_ReactionManager_c = new WeakMap();
