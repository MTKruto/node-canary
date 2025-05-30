"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueType = void 0;
exports.toString = toString;
exports.fromString = fromString;
exports.fixKey = fixKey;
exports.restoreKey = restoreKey;
exports.getPrefixKeyRange = getPrefixKeyRange;
exports.isInRange = isInRange;
const _0_deps_js_1 = require("../0_deps.js");
const _0_deps_js_2 = require("../0_deps.js");
var ValueType;
(function (ValueType) {
    ValueType[ValueType["Boolean"] = 0] = "Boolean";
    ValueType[ValueType["Number"] = 1] = "Number";
    ValueType[ValueType["String"] = 2] = "String";
    ValueType[ValueType["BigInt"] = 3] = "BigInt";
    ValueType[ValueType["Date"] = 4] = "Date";
    ValueType[ValueType["Uint8Array"] = 5] = "Uint8Array";
    ValueType[ValueType["Array"] = 6] = "Array";
    ValueType[ValueType["Map"] = 7] = "Map";
})(ValueType || (exports.ValueType = ValueType = {}));
function toString(value) {
    if (typeof value === "boolean") {
        return `${ValueType.Boolean}${Number(value)}`;
    }
    else if (typeof value === "number") {
        return `${ValueType.Number}${value}`;
    }
    else if (typeof value === "string") {
        return `${ValueType.String}${value}`;
    }
    else if (typeof value == "bigint") {
        return `${ValueType.BigInt}${value}`;
    }
    else if (value instanceof Date) {
        return `${ValueType.Date}${value.getTime()}`;
    }
    else if (value instanceof Uint8Array) {
        return `${ValueType.Uint8Array}${(0, _0_deps_js_1.encodeBase64)(value)}`;
    }
    else if (Array.isArray(value)) {
        const items = value.map((v) => {
            if (typeof v === "string" || v instanceof Uint8Array || Array.isArray(v)) {
                const s = toString(v).slice(1);
                return String(typeof v === "string" ? ValueType.String : v instanceof Uint8Array ? ValueType.Uint8Array : ValueType.Array) + toString(s.length).slice(1) + "\n" + s;
            }
            else {
                return toString(v);
            }
        });
        return `${ValueType.Array}${items.join("\n")}`;
    }
    else if (typeof value === "object" && value != null && Object.getPrototypeOf(value) == Object.prototype) {
        return `${ValueType.Map}${toString(Object.entries(value)).slice(1)}`;
    }
    else {
        (0, _0_deps_js_2.unreachable)();
    }
}
function fromString(string) {
    const [type, value] = [Number(string[0]), string.slice(1)];
    switch (type) {
        case ValueType.Boolean:
            return Boolean(Number(value));
        case ValueType.Number:
            return Number(value);
        case ValueType.String:
            return value;
        case ValueType.BigInt:
            return BigInt(value);
        case ValueType.Date:
            return new Date(Number(value));
        case ValueType.Uint8Array:
            return (0, _0_deps_js_1.decodeBase64)(value);
        case ValueType.Array: {
            const arr = [];
            for (let i = 0; i < value.length; ++i) {
                const type = Number(value[i]);
                let value_ = "";
                while (value[++i] != "\n") {
                    value_ += value[i];
                    if (i == value.length - 1) {
                        break;
                    }
                }
                switch (type) {
                    case ValueType.String:
                    case ValueType.Uint8Array:
                    case ValueType.Array: {
                        const len = Number(value_);
                        ++i;
                        value_ = value.slice(i, i + Number(value_));
                        i += len;
                    }
                }
                arr.push(fromString(`${type}${value_}`));
            }
            return arr;
        }
        case ValueType.Map:
            //deno-lint-ignore no-explicit-any
            return Object.fromEntries(fromString(`${ValueType.Array}${value}`));
    }
}
function fixKey(key) {
    return key.map((v) => typeof v === "bigint" ? String(ValueType.BigInt) + String(v) : typeof v === "string" ? String(ValueType.String) + v : v);
}
function restoreKey(key) {
    return key.map((v) => {
        if (typeof v === "string") {
            const t = Number(v[0]);
            if (t == ValueType.BigInt) {
                return BigInt(v.slice(1));
            }
            else if (t == ValueType.String) {
                return v.slice(1);
            }
            else {
                return v;
            }
        }
        else {
            return v;
        }
    });
}
// Source: https://gist.github.com/inexorabletash/5462871
// deno-lint-ignore no-explicit-any
function getPrefixKeyRange(prefix) {
    // Ensure prefix is a valid key itself:
    if (indexedDB.cmp(prefix, prefix) !== 0)
        throw new TypeError();
    const upperKey = successor(prefix);
    if (upperKey === undefined)
        return IDBKeyRange.lowerBound(prefix);
    return IDBKeyRange.bound(prefix, upperKey, false, true);
}
const MAX_DATE_VALUE = 8640000000000000;
const UPPER_BOUND = {
    NUMBER: new Date(-MAX_DATE_VALUE),
    DATE: "",
    STRING: [],
    ARRAY: undefined,
};
// deno-lint-ignore no-explicit-any
function successor(key) {
    if (typeof key === "number") {
        if (key === Infinity)
            return UPPER_BOUND.NUMBER;
        if (key === -Infinity)
            return -Number.MAX_VALUE;
        if (key === 0)
            return Number.MIN_VALUE;
        let epsilon = Math.abs(key);
        while (key + epsilon / 2 !== key)
            epsilon = epsilon / 2;
        return key + epsilon;
    }
    if (key instanceof Date) {
        if (key.valueOf() + 1 > MAX_DATE_VALUE)
            return UPPER_BOUND.DATE;
        return new Date(key.valueOf() + 1);
    }
    if (typeof key === "string") {
        let len = key.length;
        while (len > 0) {
            const head = key.substring(0, len - 1), tail = key.charCodeAt(len - 1);
            if (tail !== 0xffff)
                return head + String.fromCharCode(tail + 1);
            key = head;
            --len;
        }
        return UPPER_BOUND.STRING;
    }
    if (Array.isArray(key)) {
        key = key.slice(); // Operate on a copy.
        let len = key.length;
        while (len > 0) {
            const tail = successor(key.pop());
            if (tail !== undefined) {
                key.push(tail);
                return key;
            }
            --len;
        }
        return UPPER_BOUND.ARRAY;
    }
    throw new TypeError();
}
function isInRange(key, start, end) {
    for (const [i, part] of key.entries()) {
        const left = start[i];
        const right = end[i];
        if (!left || !right) {
            continue;
        }
        if (left === undefined || right === undefined) {
            return false;
        }
        if (part >= left && part <= right) {
            continue;
        }
        return false;
    }
    return true;
}
