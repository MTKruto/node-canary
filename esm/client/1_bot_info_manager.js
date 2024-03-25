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
var _BotInfoManager_instances, _BotInfoManager_c, _BotInfoManager_setMyInfo, _BotInfoManager_getMyInfo;
import { types } from "../2_tl.js";
import { botCommandScopeToTlObject } from "../3_types.js";
export class BotInfoManager {
    constructor(c) {
        _BotInfoManager_instances.add(this);
        _BotInfoManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _BotInfoManager_c, c, "f");
    }
    async setMyDescription(params) {
        await __classPrivateFieldGet(this, _BotInfoManager_c, "f").storage.assertBot("setMyDescription");
        await __classPrivateFieldGet(this, _BotInfoManager_instances, "m", _BotInfoManager_setMyInfo).call(this, { description: params?.description, lang_code: params?.languageCode ?? "" });
    }
    async setMyName(params) {
        await __classPrivateFieldGet(this, _BotInfoManager_c, "f").storage.assertBot("setMyName");
        await __classPrivateFieldGet(this, _BotInfoManager_instances, "m", _BotInfoManager_setMyInfo).call(this, { name: params?.name, lang_code: params?.languageCode ?? "" });
    }
    async setMyShortDescription(params) {
        await __classPrivateFieldGet(this, _BotInfoManager_c, "f").storage.assertBot("setMyShortDescription");
        await __classPrivateFieldGet(this, _BotInfoManager_instances, "m", _BotInfoManager_setMyInfo).call(this, { about: params?.shortDescription, lang_code: params?.languageCode ?? "" });
    }
    async getMyDescription(params) {
        await __classPrivateFieldGet(this, _BotInfoManager_c, "f").storage.assertBot("getMyDescription");
        return await __classPrivateFieldGet(this, _BotInfoManager_instances, "m", _BotInfoManager_getMyInfo).call(this, params?.languageCode).then((v) => v.description);
    }
    async getMyName(params) {
        await __classPrivateFieldGet(this, _BotInfoManager_c, "f").storage.assertBot("getMyName");
        return await __classPrivateFieldGet(this, _BotInfoManager_instances, "m", _BotInfoManager_getMyInfo).call(this, params?.languageCode).then((v) => v.description);
    }
    async getMyShortDescription(params) {
        await __classPrivateFieldGet(this, _BotInfoManager_c, "f").storage.assertBot("getMyShortDescription");
        return await __classPrivateFieldGet(this, _BotInfoManager_instances, "m", _BotInfoManager_getMyInfo).call(this, params?.languageCode).then((v) => v.about);
    }
    async getMyCommands(params) {
        await __classPrivateFieldGet(this, _BotInfoManager_c, "f").storage.assertBot("getMyCommands");
        const commands_ = await __classPrivateFieldGet(this, _BotInfoManager_c, "f").api.bots.getBotCommands({
            lang_code: params?.languageCode ?? "",
            scope: await botCommandScopeToTlObject(params?.scope ?? { type: "default" }, __classPrivateFieldGet(this, _BotInfoManager_c, "f").getInputPeer),
        });
        return commands_.map((v) => ({ command: v.command, description: v.description }));
    }
    async setMyCommands(commands, params) {
        await __classPrivateFieldGet(this, _BotInfoManager_c, "f").storage.assertBot("setMyCommands");
        await __classPrivateFieldGet(this, _BotInfoManager_c, "f").api.bots.setBotCommands({
            commands: commands.map((v) => new types.BotCommand(v)),
            lang_code: params?.languageCode ?? "",
            scope: await botCommandScopeToTlObject(params?.scope ?? { type: "default" }, __classPrivateFieldGet(this, _BotInfoManager_c, "f").getInputPeer),
        });
    }
}
_BotInfoManager_c = new WeakMap(), _BotInfoManager_instances = new WeakSet(), _BotInfoManager_setMyInfo = async function _BotInfoManager_setMyInfo(info) {
    await __classPrivateFieldGet(this, _BotInfoManager_c, "f").api.bots.setBotInfo({ bot: new types.InputUserSelf(), ...info });
}, _BotInfoManager_getMyInfo = function _BotInfoManager_getMyInfo(languageCode) {
    return __classPrivateFieldGet(this, _BotInfoManager_c, "f").api.bots.getBotInfo({ bot: new types.InputUserSelf(), lang_code: languageCode ?? "" });
};
