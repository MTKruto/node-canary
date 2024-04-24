/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _StorageMemory_instances, _StorageMemory_id, _StorageMemory_fixKey, _StorageMemory_getEntries;
import { fromString, isInRange, toString } from "./1_utilities.js";
export class StorageMemory {
    constructor() {
        _StorageMemory_instances.add(this);
        Object.defineProperty(this, "map", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        _StorageMemory_id.set(this, null);
    }
    get mustSerialize() {
        return false;
    }
    initialize() {
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
_StorageMemory_id = new WeakMap(), _StorageMemory_instances = new WeakSet(), _StorageMemory_fixKey = function _StorageMemory_fixKey(key) {
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
