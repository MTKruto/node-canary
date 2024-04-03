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
var _BusinessConnectionManager_c;
import { as, types } from "../2_tl.js";
import { constructBusinessConnection } from "../3_types.js";
export class BusinessConnectionManager {
    constructor(c) {
        _BusinessConnectionManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _BusinessConnectionManager_c, c, "f");
    }
    async getBusinessConnection(id) {
        const connection_ = await __classPrivateFieldGet(this, _BusinessConnectionManager_c, "f").messageStorage.getBusinessConnection(id);
        if (!connection_) {
            const connection_ = await __classPrivateFieldGet(this, _BusinessConnectionManager_c, "f").api.account.getBotBusinessConnection({ connection_id: id })
                .then((v) => v[as](types.Updates))
                .then((v) => v.updates[0][as](types.UpdateBotBusinessConnect).connection);
            await __classPrivateFieldGet(this, _BusinessConnectionManager_c, "f").messageStorage.setBusinessConnection(id, connection_);
            return await constructBusinessConnection(connection_, __classPrivateFieldGet(this, _BusinessConnectionManager_c, "f").getEntity);
        }
        else {
            return await constructBusinessConnection(connection_, __classPrivateFieldGet(this, _BusinessConnectionManager_c, "f").getEntity);
        }
    }
}
_BusinessConnectionManager_c = new WeakMap();
