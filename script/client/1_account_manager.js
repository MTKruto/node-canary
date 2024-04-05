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
var _AccountManager_instances, _AccountManager_c, _AccountManager_toggleUsername;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
class AccountManager {
    constructor(c) {
        _AccountManager_instances.add(this);
        _AccountManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _AccountManager_c, c, "f");
    }
    async showUsername(id, username) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("showUsername");
        await __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_toggleUsername).call(this, id, username, true);
    }
    async hideUsername(id, username) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("hideUsername");
        await __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_toggleUsername).call(this, id, username, false);
    }
    async reorderUsernames(id, order) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("reorderUsernames");
        const peer = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputPeer(id);
        if (peer instanceof _2_tl_js_1.types.InputPeerSelf) {
            return await __classPrivateFieldGet(this, _AccountManager_c, "f").api.account.reorderUsernames({ order });
        }
        else if (peer instanceof _2_tl_js_1.types.InputPeerUser) {
            return await __classPrivateFieldGet(this, _AccountManager_c, "f").api.bots.reorderUsernames({ bot: new _2_tl_js_1.types.InputUser(peer), order });
        }
        else if (peer instanceof _2_tl_js_1.types.InputPeerChannel) {
            return await __classPrivateFieldGet(this, _AccountManager_c, "f").api.channels.reorderUsernames({ channel: new _2_tl_js_1.types.InputChannel(peer), order });
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    async hideUsernames(id) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("hideUsernames");
        const peer = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputPeer(id);
        if (peer instanceof _2_tl_js_1.types.InputPeerChannel) {
            return await __classPrivateFieldGet(this, _AccountManager_c, "f").api.channels.deactivateAllUsernames({ channel: new _2_tl_js_1.types.InputChannel(peer) });
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    async getInactiveChats() {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("getInactiveChats");
        const { chats, dates } = await __classPrivateFieldGet(this, _AccountManager_c, "f").api.channels.getInactiveChannels();
        return chats.map((v, i) => (0, _3_types_js_1.constructInactiveChat)(v, dates[i]));
    }
}
exports.AccountManager = AccountManager;
_AccountManager_c = new WeakMap(), _AccountManager_instances = new WeakSet(), _AccountManager_toggleUsername = async function _AccountManager_toggleUsername(id, username, active) {
    const peer = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputPeer(id);
    if (peer instanceof _2_tl_js_1.types.InputPeerSelf) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").api.account.toggleUsername({ username, active });
    }
    else if (peer instanceof _2_tl_js_1.types.InputPeerUser) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").api.bots.toggleUsername({ bot: new _2_tl_js_1.types.InputUser(peer), username, active });
    }
    else if (peer instanceof _2_tl_js_1.types.InputPeerChannel) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").api.channels.toggleUsername({ channel: new _2_tl_js_1.types.InputChannel(peer), username, active });
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
};
