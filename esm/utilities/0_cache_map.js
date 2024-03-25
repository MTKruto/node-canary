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
var _CacheMap_limit;
export class CacheMap extends Map {
    constructor(limit, entries) {
        super(entries);
        _CacheMap_limit.set(this, void 0);
        if (!limit || limit < 1) {
            throw new Error("Invalid size");
        }
        __classPrivateFieldSet(this, _CacheMap_limit, limit, "f");
    }
    set(key, value) {
        super.set(key, value);
        if (this.size > __classPrivateFieldGet(this, _CacheMap_limit, "f")) {
            this.delete(this.keys().next().value);
        }
        return this;
    }
}
_CacheMap_limit = new WeakMap();
