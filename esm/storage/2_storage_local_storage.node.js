/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
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
var _StorageLocalStorage_prefix, _StorageLocalStorage_path, _StorageLocalStorage_storage;
import { LocalStorage } from "node-localstorage";
import { fromString, isInRange, toString } from "./1_utilities.js";
export class StorageLocalStorage {
    constructor(path) {
        _StorageLocalStorage_prefix.set(this, void 0);
        _StorageLocalStorage_path.set(this, void 0);
        _StorageLocalStorage_storage.set(this, void 0);
        __classPrivateFieldSet(this, _StorageLocalStorage_prefix, "main", "f");
        __classPrivateFieldSet(this, _StorageLocalStorage_storage, new LocalStorage(__classPrivateFieldSet(this, _StorageLocalStorage_path, path, "f")), "f");
    }
    get prefix() {
        return __classPrivateFieldGet(this, _StorageLocalStorage_prefix, "f");
    }
    branch(id) {
        const storage = new StorageLocalStorage(__classPrivateFieldGet(this, _StorageLocalStorage_path, "f"));
        __classPrivateFieldSet(storage, _StorageLocalStorage_prefix, this.prefix + "S__" + id, "f");
        return storage;
    }
    initialize() {
    }
    get supportsFiles() {
        return false;
    }
    get mustSerialize() {
        return true;
    }
    get(key_) {
        const key = this.prefix + toString(key_);
        const value = __classPrivateFieldGet(this, _StorageLocalStorage_storage, "f").getItem(key);
        if (value != null) {
            return fromString(value);
        }
        else {
            return null;
        }
    }
    *getMany(filter, params) {
        let entries = Object.entries(__classPrivateFieldGet(this, _StorageLocalStorage_storage, "f")).sort(([a], [b]) => a.localeCompare(b));
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
            __classPrivateFieldGet(this, _StorageLocalStorage_storage, "f").setItem(key, toString(value));
        }
        else {
            __classPrivateFieldGet(this, _StorageLocalStorage_storage, "f").removeItem(key);
        }
    }
    incr(key, by) {
        this.set(key, (this.get(key) || 0) + by);
    }
}
_StorageLocalStorage_prefix = new WeakMap(), _StorageLocalStorage_path = new WeakMap(), _StorageLocalStorage_storage = new WeakMap();
