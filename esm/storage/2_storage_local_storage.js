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
import { Storage } from "./0_storage.js";
import { fromString, isInRange, toString } from "./1_utilities.js";
export class StorageLocalStorage extends Storage {
    constructor(prefix) {
        if (typeof localStorage === "undefined") {
            throw new Error("Unavailable in current environment");
        }
        if (prefix.length <= 0) {
            throw new Error("Empty prefix");
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
        const key = this.prefix + toString(key_);
        const value = localStorage.getItem(key);
        if (value != null) {
            return fromString(value);
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
            const parts = fromString(key);
            if (Array.isArray(parts)) {
                if ("prefix" in filter) {
                    for (const [i, p] of filter.prefix.entries()) {
                        if (toString(p) != toString(parts[i])) {
                            continue entries;
                        }
                    }
                }
                else {
                    if (!isInRange(parts, filter.start, filter.end)) {
                        continue;
                    }
                }
                yield [parts, fromString(value)];
            }
        }
    }
    set(key_, value) {
        const key = this.prefix + toString(key_);
        if (value != null) {
            localStorage.setItem(key, toString(value));
        }
        else {
            localStorage.removeItem(key);
        }
    }
    incr(key, by) {
        this.set(key, (this.get(key) || 0) + by);
    }
}
_StorageLocalStorage_prefix = new WeakMap();
