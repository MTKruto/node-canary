"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumeToken = consumeToken;
exports.consumeValue = consumeValue;
exports.consumeMediaParam = consumeMediaParam;
exports.decode2331Encoding = decode2331Encoding;
exports.isIterator = isIterator;
exports.isToken = isToken;
exports.isTSpecial = isTSpecial;
exports.needsEncoding = needsEncoding;
function consumeToken(v) {
    const notPos = indexOf(v, isNotTokenChar);
    if (notPos === -1) {
        return [v, ""];
    }
    if (notPos === 0) {
        return ["", v];
    }
    return [v.slice(0, notPos), v.slice(notPos)];
}
function consumeValue(v) {
    if (!v) {
        return ["", v];
    }
    if (v[0] !== `"`) {
        return consumeToken(v);
    }
    let value = "";
    for (let i = 1; i < v.length; i++) {
        const r = v[i];
        if (r === `"`) {
            return [value, v.slice(i + 1)];
        }
        const next = v[i + 1];
        if (r === "\\" && typeof next === "string" && isTSpecial(next)) {
            value += next;
            i++;
            continue;
        }
        if (r === "\r" || r === "\n") {
            return ["", v];
        }
        value += v[i];
    }
    return ["", v];
}
function consumeMediaParam(v) {
    let rest = v.trimStart();
    if (!rest.startsWith(";")) {
        return ["", "", v];
    }
    rest = rest.slice(1);
    rest = rest.trimStart();
    let param;
    [param, rest] = consumeToken(rest);
    param = param.toLowerCase();
    if (!param) {
        return ["", "", v];
    }
    rest = rest.slice(1);
    rest = rest.trimStart();
    const [value, rest2] = consumeValue(rest);
    if (value === "" && rest2 === rest) {
        return ["", "", v];
    }
    rest = rest2;
    return [param, value, rest];
}
function decode2331Encoding(v) {
    const sv = v.split(`'`, 3);
    if (sv.length !== 3) {
        return undefined;
    }
    const [sv0, , sv2] = sv;
    const charset = sv0.toLowerCase();
    if (!charset) {
        return undefined;
    }
    if (charset !== "us-ascii" && charset !== "utf-8") {
        return undefined;
    }
    const encv = decodeURI(sv2);
    if (!encv) {
        return undefined;
    }
    return encv;
}
function indexOf(s, fn) {
    let i = -1;
    for (const v of s) {
        i++;
        if (fn(v)) {
            return i;
        }
    }
    return -1;
}
function isIterator(obj) {
    if (obj === null || obj === undefined) {
        return false;
    }
    // deno-lint-ignore no-explicit-any
    return typeof obj[Symbol.iterator] === "function";
}
function isToken(s) {
    if (!s) {
        return false;
    }
    return indexOf(s, isNotTokenChar) < 0;
}
function isNotTokenChar(r) {
    return !isTokenChar(r);
}
function isTokenChar(r) {
    const code = r.charCodeAt(0);
    return code > 0x20 && code < 0x7f && !isTSpecial(r);
}
function isTSpecial(r) {
    return r[0] ? `()<>@,;:\\"/[]?=`.includes(r[0]) : false;
}
const CHAR_CODE_SPACE = " ".charCodeAt(0);
const CHAR_CODE_TILDE = "~".charCodeAt(0);
function needsEncoding(s) {
    for (const b of s) {
        const charCode = b.charCodeAt(0);
        if ((charCode < CHAR_CODE_SPACE || charCode > CHAR_CODE_TILDE) && b !== "\t") {
            return true;
        }
    }
    return false;
}
