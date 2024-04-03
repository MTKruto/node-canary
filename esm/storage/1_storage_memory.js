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
var _StorageMemory_instances, _StorageMemory_id, _StorageMemory_authString, _StorageMemory_fixKey, _StorageMemory_getEntries;
import { Storage } from "./0_storage.js";
import { fromString, isInRange, toString } from "./0_utilities.js";
export class StorageMemory extends Storage {
    constructor(authString) {
        super();
        _StorageMemory_instances.add(this);
        Object.defineProperty(this, "map", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        _StorageMemory_id.set(this, null);
        _StorageMemory_authString.set(this, void 0);
        __classPrivateFieldSet(this, _StorageMemory_authString, authString, "f");
    }
    get isMemoryStorage() {
        return true;
    }
    async initialize() {
        if (__classPrivateFieldGet(this, _StorageMemory_authString, "f")) {
            await this.importAuthString(__classPrivateFieldGet(this, _StorageMemory_authString, "f"));
        }
    }
    branch(id) {
        const storage = new StorageMemory();
        __classPrivateFieldSet(storage, _StorageMemory_id, id, "f");
        return storage;
    }
    get supportsFiles() {
        return false;
    }
    get(key) {
        key = __classPrivateFieldGet(this, _StorageMemory_instances, "m", _StorageMemory_fixKey).call(this, key);
        return this.map.get(toString(key)) ?? null;
    }
    *getMany(filter, params) {
        let entries = __classPrivateFieldGet(this, _StorageMemory_instances, "m", _StorageMemory_getEntries).call(this);
        if (params?.reverse) {
            entries.reverse();
        }
        if (params?.limit !== undefined) {
            entries = entries.slice(0, params.limit <= 0 ? 1 : params.limit);
        }
        entries: for (const [key, value] of entries) {
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
                yield [parts, value];
            }
        }
    }
    set(key_, value) {
        key_ = __classPrivateFieldGet(this, _StorageMemory_instances, "m", _StorageMemory_fixKey).call(this, key_);
        const key = toString(key_);
        if (value != null) {
            this.map.set(key, value);
        }
        else {
            this.map.delete(key);
        }
    }
    incr(key, by) {
        this.set(key, (this.get(key) || 0) + by);
    }
}
_StorageMemory_id = new WeakMap(), _StorageMemory_authString = new WeakMap(), _StorageMemory_instances = new WeakSet(), _StorageMemory_fixKey = function _StorageMemory_fixKey(key) {
    if (__classPrivateFieldGet(this, _StorageMemory_id, "f") !== null) {
        return ["__S" + __classPrivateFieldGet(this, _StorageMemory_id, "f"), ...key];
    }
    else {
        return key;
    }
}, _StorageMemory_getEntries = function _StorageMemory_getEntries() {
    const entries = new Array();
    for (const entry of this.map.entries()) {
        if (__classPrivateFieldGet(this, _StorageMemory_id, "f") !== null && !entry[0].startsWith("__S" + __classPrivateFieldGet(this, _StorageMemory_id, "f"))) {
            continue;
        }
        entries.push(entry);
    }
    return entries;
};
