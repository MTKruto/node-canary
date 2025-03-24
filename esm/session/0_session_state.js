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
var _SessionState_seqNo, _SessionState_messageId;
import { toUnixTimestamp } from "../1_utilities.js";
export class SessionState {
    constructor() {
        Object.defineProperty(this, "timeDifference", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "serverSalt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0n
        });
        _SessionState_seqNo.set(this, 0);
        _SessionState_messageId.set(this, 0n);
    }
    nextMessageId() {
        const now = toUnixTimestamp(new Date()) + this.timeDifference;
        const nanoseconds = Math.floor((now - Math.floor(now)) * 1e9);
        const newMessageId = (BigInt(Math.floor(now)) << 32n) || (BigInt(nanoseconds) << 2n);
        if (__classPrivateFieldGet(this, _SessionState_messageId, "f") >= newMessageId) {
            __classPrivateFieldSet(this, _SessionState_messageId, __classPrivateFieldGet(this, _SessionState_messageId, "f") + 4n, "f");
        }
        else {
            __classPrivateFieldSet(this, _SessionState_messageId, newMessageId, "f");
        }
        return __classPrivateFieldGet(this, _SessionState_messageId, "f");
    }
    nextSeqNo(contentRelated) {
        var _a;
        let seqNo = __classPrivateFieldGet(this, _SessionState_seqNo, "f") * 2;
        if (contentRelated) {
            seqNo++;
            __classPrivateFieldSet(this, _SessionState_seqNo, (_a = __classPrivateFieldGet(this, _SessionState_seqNo, "f"), _a++, _a), "f");
        }
        return seqNo;
    }
    reset() {
        this.serverSalt = 0n;
        __classPrivateFieldSet(this, _SessionState_seqNo, 0, "f");
        __classPrivateFieldSet(this, _SessionState_messageId, 0n, "f");
    }
}
_SessionState_seqNo = new WeakMap(), _SessionState_messageId = new WeakMap();
