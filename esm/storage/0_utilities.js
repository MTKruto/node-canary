import { decodeBase64, encodeBase64 } from "../0_deps.js";
import { UNREACHABLE } from "../1_utilities.js";
export var ValueType;
(function (ValueType) {
    ValueType[ValueType["Boolean"] = 0] = "Boolean";
    ValueType[ValueType["Number"] = 1] = "Number";
    ValueType[ValueType["String"] = 2] = "String";
    ValueType[ValueType["BigInt"] = 3] = "BigInt";
    ValueType[ValueType["Date"] = 4] = "Date";
    ValueType[ValueType["Uint8Array"] = 5] = "Uint8Array";
    ValueType[ValueType["Array"] = 6] = "Array";
})(ValueType || (ValueType = {}));
export const WEB_STORAGE_PREFIX_EXP = /^[\d\w]+$/;
export function toString(value) {
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
        return `${ValueType.Uint8Array}${encodeBase64(value)}`;
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
    else {
        UNREACHABLE();
    }
}
export function fromString(string) {
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
            return decodeBase64(value);
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
    }
}
export function fixKey(key) {
    return key.map((v) => typeof v === "bigint" ? String(ValueType.BigInt) + String(v) : typeof v === "string" ? String(ValueType.String) + v : v);
}
export function restoreKey(key) {
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
export function getPrefixKeyRange(prefix) {
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
export function isInRange(key, start, end) {
    for (const [i, part] of key.entries()) {
        const left = start[i];
        const right = end[i];
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
