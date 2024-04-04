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
var _StorageIndexedDB_instances, _StorageIndexedDB_name, _StorageIndexedDB_id, _StorageIndexedDB_supportsFiles, _StorageIndexedDB_fixKey;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageIndexedDB = void 0;
const _0_storage_js_1 = require("./0_storage.js");
const _1_utilities_js_1 = require("./1_utilities.js");
const VERSION = 1;
const KV_OBJECT_STORE = "kv";
class StorageIndexedDB extends _0_storage_js_1.Storage {
    constructor(name, params) {
        if (typeof indexedDB == "undefined") {
            throw new Error("Unavailable in current environment");
        }
        super();
        _StorageIndexedDB_instances.add(this);
        Object.defineProperty(this, "database", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        _StorageIndexedDB_name.set(this, void 0);
        _StorageIndexedDB_id.set(this, null);
        _StorageIndexedDB_supportsFiles.set(this, void 0);
        __classPrivateFieldSet(this, _StorageIndexedDB_name, name, "f");
        __classPrivateFieldSet(this, _StorageIndexedDB_supportsFiles, params?.fileStorage ?? true, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _StorageIndexedDB_name, "f");
    }
    branch(id) {
        const storage = new StorageIndexedDB(this.name);
        __classPrivateFieldSet(storage, _StorageIndexedDB_id, id, "f");
        return storage;
    }
    initialize() {
        const db = indexedDB.open(this.name, VERSION);
        return new Promise((res, rej) => {
            db.onblocked = rej;
            db.onerror = rej;
            db.onupgradeneeded = () => {
                db.result.createObjectStore(KV_OBJECT_STORE);
            };
            db.onsuccess = () => {
                this.database = db.result;
                res();
            };
        });
    }
    get supportsFiles() {
        return __classPrivateFieldGet(this, _StorageIndexedDB_supportsFiles, "f");
    }
    set(k, v, tx_) {
        k = __classPrivateFieldGet(this, _StorageIndexedDB_instances, "m", _StorageIndexedDB_fixKey).call(this, k);
        if (!this.database) {
            throw new Error("Not initialized");
        }
        const store = (tx_ ?? this.database
            .transaction(KV_OBJECT_STORE, "readwrite"))
            .objectStore(KV_OBJECT_STORE);
        // deno-lint-ignore no-explicit-any
        let tx;
        if (v == null) {
            tx = store.delete((0, _1_utilities_js_1.fixKey)(k));
        }
        else {
            tx = store.put(v, (0, _1_utilities_js_1.fixKey)(k));
        }
        return new Promise((res, rej) => {
            tx.onerror = rej;
            tx.onsuccess = () => {
                res();
            };
        });
    }
    get(k, tx_, fix = true) {
        if (fix) {
            k = __classPrivateFieldGet(this, _StorageIndexedDB_instances, "m", _StorageIndexedDB_fixKey).call(this, k);
        }
        if (!this.database) {
            throw new Error("Not initialized");
        }
        const tx = (tx_ ?? this.database
            .transaction(KV_OBJECT_STORE, "readonly"))
            .objectStore(KV_OBJECT_STORE)
            .get((0, _1_utilities_js_1.fixKey)(k));
        return new Promise((res, rej) => {
            tx.onerror = rej;
            tx.onsuccess = () => {
                res(tx.result == undefined ? null : tx.result);
            };
        });
    }
    async *getMany(filter, params, tx_) {
        if ("prefix" in filter && __classPrivateFieldGet(this, _StorageIndexedDB_id, "f") !== null) {
            filter.prefix = __classPrivateFieldGet(this, _StorageIndexedDB_instances, "m", _StorageIndexedDB_fixKey).call(this, filter.prefix);
        }
        if ("start" in filter && __classPrivateFieldGet(this, _StorageIndexedDB_id, "f") !== null) {
            filter.start = __classPrivateFieldGet(this, _StorageIndexedDB_instances, "m", _StorageIndexedDB_fixKey).call(this, filter.start);
        }
        if ("end" in filter && __classPrivateFieldGet(this, _StorageIndexedDB_id, "f") !== null) {
            filter.end = __classPrivateFieldGet(this, _StorageIndexedDB_instances, "m", _StorageIndexedDB_fixKey).call(this, filter.end);
        }
        if (!this.database) {
            throw new Error("Not initialized");
        }
        if (params?.limit !== undefined && params.limit <= 0) {
            params.limit = 1;
        }
        let keyRange;
        if ("prefix" in filter) {
            keyRange = (0, _1_utilities_js_1.getPrefixKeyRange)((0, _1_utilities_js_1.fixKey)(filter.prefix));
        }
        else {
            keyRange = IDBKeyRange.bound((0, _1_utilities_js_1.fixKey)(filter.start), (0, _1_utilities_js_1.fixKey)(filter.end), true, true);
        }
        const keys = await new Promise((res, rej) => {
            const items = new Array();
            const tx = (tx_ ?? this.database.transaction(KV_OBJECT_STORE, "readonly"))
                .objectStore(KV_OBJECT_STORE)
                .openKeyCursor(keyRange, params?.reverse ? "prev" : undefined);
            tx.onerror = rej;
            tx.onsuccess = () => {
                const cursor = tx.result;
                if (!cursor) {
                    res(items);
                    return;
                }
                items.push((0, _1_utilities_js_1.restoreKey)(cursor.key));
                if (params?.limit !== undefined && items.length >= params.limit) {
                    res(items);
                }
                else {
                    cursor.continue();
                }
            };
        });
        for (const key of keys) {
            yield [key, await this.get(key, null, false)];
        }
    }
    async incr(key, by) {
        if (!this.database) {
            throw new Error("Not initialized");
        }
        const tx = this.database
            .transaction(KV_OBJECT_STORE, "readwrite");
        const currentValue = await this.get(key, tx);
        await this.set(key, (currentValue || 0) + by, tx);
    }
}
exports.StorageIndexedDB = StorageIndexedDB;
_StorageIndexedDB_name = new WeakMap(), _StorageIndexedDB_id = new WeakMap(), _StorageIndexedDB_supportsFiles = new WeakMap(), _StorageIndexedDB_instances = new WeakSet(), _StorageIndexedDB_fixKey = function _StorageIndexedDB_fixKey(key) {
    if (__classPrivateFieldGet(this, _StorageIndexedDB_id, "f") !== null) {
        return ["__S" + __classPrivateFieldGet(this, _StorageIndexedDB_id, "f"), ...key];
    }
    else {
        return key;
    }
};
