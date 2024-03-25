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
var _StorageLocalStorage_prefix;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageLocalStorage = void 0;
const _0_storage_js_1 = require("./0_storage.js");
const _0_utilities_js_1 = require("./0_utilities.js");
class StorageLocalStorage extends _0_storage_js_1.Storage {
    constructor(prefix) {
        if (typeof localStorage === "undefined") {
            throw new Error("Unavailable in current environment");
        }
        if (prefix.length <= 0) {
            throw new Error("Empty prefix");
        }
        else if (!_0_utilities_js_1.WEB_STORAGE_PREFIX_EXP.test(prefix)) {
            throw new Error("Unallowed prefix");
        }
        super();
        _StorageLocalStorage_prefix.set(this, void 0);
        __classPrivateFieldSet(this, _StorageLocalStorage_prefix, prefix, "f");
    }
    get prefix() {
        return __classPrivateFieldGet(this, _StorageLocalStorage_prefix, "f");
    }
    branch(id) {
        return new StorageLocalStorage(this.prefix + "S__" + id);
    }
    initialize() {
    }
    get supportsFiles() {
        return false;
    }
    get(key_) {
        const key = this.prefix + (0, _0_utilities_js_1.toString)(key_);
        const value = localStorage.getItem(key);
        if (value != null) {
            return (0, _0_utilities_js_1.fromString)(value);
        }
        else {
            return null;
        }
    }
    *getMany(filter, params) {
        let entries = Object.entries(localStorage).sort(([a], [b]) => a.localeCompare(b));
        if (params?.reverse) {
            entries.reverse();
        }
        if (params?.limit !== undefined) {
            entries = entries.slice(0, params.limit <= 0 ? 1 : params.limit);
        }
        entries: for (let [key, value] of entries) {
            if (key.startsWith(this.prefix)) {
                key = key.slice(this.prefix.length);
            }
            const parts = (0, _0_utilities_js_1.fromString)(key);
            if (Array.isArray(parts)) {
                if ("prefix" in filter) {
                    for (const [i, p] of filter.prefix.entries()) {
                        if ((0, _0_utilities_js_1.toString)(p) != (0, _0_utilities_js_1.toString)(parts[i])) {
                            continue entries;
                        }
                    }
                }
                else {
                    if (!(0, _0_utilities_js_1.isInRange)(parts, filter.start, filter.end)) {
                        continue;
                    }
                }
                yield [parts, (0, _0_utilities_js_1.fromString)(value)];
            }
        }
    }
    set(key_, value) {
        const key = this.prefix + (0, _0_utilities_js_1.toString)(key_);
        if (value != null) {
            localStorage.setItem(key, (0, _0_utilities_js_1.toString)(value));
        }
        else {
            localStorage.removeItem(key);
        }
    }
    incr(key, by) {
        this.set(key, (this.get(key) || 0) + by);
    }
}
exports.StorageLocalStorage = StorageLocalStorage;
_StorageLocalStorage_prefix = new WeakMap();