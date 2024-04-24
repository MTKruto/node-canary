"use strict";
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
var _StorageSessionStorage_prefix;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageSessionStorage = void 0;
const _1_utilities_js_1 = require("./1_utilities.js");
class StorageSessionStorage {
    constructor(prefix) {
        _StorageSessionStorage_prefix.set(this, void 0);
        if (typeof sessionStorage === "undefined") {
            throw new Error("Unavailable in current environment");
        }
        if (prefix.length <= 0) {
            throw new Error("Empty prefix");
        }
        __classPrivateFieldSet(this, _StorageSessionStorage_prefix, prefix, "f");
    }
    get mustSerialize() {
        return true;
    }
    get prefix() {
        return __classPrivateFieldGet(this, _StorageSessionStorage_prefix, "f");
    }
    branch(id) {
        return new StorageSessionStorage(this.prefix + "S__" + id);
    }
    initialize() {
    }
    get supportsFiles() {
        return false;
    }
    get(key_) {
        const key = this.prefix + (0, _1_utilities_js_1.toString)(key_);
        const value = sessionStorage.getItem(key);
        if (value != null) {
            return (0, _1_utilities_js_1.fromString)(value);
        }
        else {
            return null;
        }
    }
    *getMany(filter, params) {
        let entries = Object.entries(sessionStorage).sort(([a], [b]) => a.localeCompare(b));
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
            const parts = (0, _1_utilities_js_1.fromString)(key);
            if (Array.isArray(parts)) {
                if ("prefix" in filter) {
                    for (const [i, p] of filter.prefix.entries()) {
                        if ((0, _1_utilities_js_1.toString)(p) != (0, _1_utilities_js_1.toString)(parts[i])) {
                            continue entries;
                        }
                    }
                }
                else {
                    if (!(0, _1_utilities_js_1.isInRange)(parts, filter.start, filter.end)) {
                        continue;
                    }
                }
                yield [parts, (0, _1_utilities_js_1.fromString)(value)];
            }
        }
    }
    set(key_, value) {
        const key = this.prefix + (0, _1_utilities_js_1.toString)(key_);
        if (value != null) {
            sessionStorage.setItem(key, (0, _1_utilities_js_1.toString)(value));
        }
        else {
            sessionStorage.removeItem(key);
        }
    }
    incr(key, by) {
        this.set(key, (this.get(key) || 0) + by);
    }
}
exports.StorageSessionStorage = StorageSessionStorage;
_StorageSessionStorage_prefix = new WeakMap();
