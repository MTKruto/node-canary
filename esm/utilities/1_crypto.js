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
var _CTR_instances, _CTR_key, _CTR_iv, _CTR_bytesUntilNextBlock, _CTR_promise, _CTR_call, _CTR_encrypt, _CTR_increaseIv;
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
import * as dntShim from "../_dnt.shims.js";
import { concat } from "../0_deps.js";
import { bigIntFromBuffer } from "./0_bigint.js";
import { bufferFromBigInt } from "./0_buffer.js";
export class CTR {
    get _state() {
        return { iv: new Uint8Array(__classPrivateFieldGet(this, _CTR_iv, "f")), state: __classPrivateFieldGet(this, _CTR_bytesUntilNextBlock, "f") };
    }
    constructor(key, iv) {
        _CTR_instances.add(this);
        _CTR_key.set(this, void 0);
        _CTR_iv.set(this, void 0);
        _CTR_bytesUntilNextBlock.set(this, 0);
        _CTR_promise.set(this, void 0);
        __classPrivateFieldSet(this, _CTR_key, key, "f");
        __classPrivateFieldSet(this, _CTR_iv, iv, "f");
    }
    static async importKey(key) {
        return await dntShim.crypto.subtle.importKey("raw", key, "AES-CTR", false, ["encrypt"]);
    }
    async call(data) {
        if (__classPrivateFieldGet(this, _CTR_promise, "f")) {
            await Promise.allSettled([__classPrivateFieldGet(this, _CTR_promise, "f")]);
        }
        return await (__classPrivateFieldSet(this, _CTR_promise, __classPrivateFieldGet(this, _CTR_instances, "m", _CTR_call).call(this, data), "f"));
    }
}
_CTR_key = new WeakMap(), _CTR_iv = new WeakMap(), _CTR_bytesUntilNextBlock = new WeakMap(), _CTR_promise = new WeakMap(), _CTR_instances = new WeakSet(), _CTR_call = async function _CTR_call(data) {
    let header;
    if (__classPrivateFieldGet(this, _CTR_bytesUntilNextBlock, "f")) {
        const headerLength = Math.min(data.length, __classPrivateFieldGet(this, _CTR_iv, "f").length - __classPrivateFieldGet(this, _CTR_bytesUntilNextBlock, "f"));
        const encrypted = await __classPrivateFieldGet(this, _CTR_instances, "m", _CTR_encrypt).call(this, concat([new Uint8Array(__classPrivateFieldGet(this, _CTR_bytesUntilNextBlock, "f")), data.subarray(0, headerLength)]));
        header = encrypted.subarray(__classPrivateFieldGet(this, _CTR_bytesUntilNextBlock, "f"));
        data = data.subarray(headerLength);
        if (encrypted.length === __classPrivateFieldGet(this, _CTR_iv, "f").length) {
            __classPrivateFieldGet(this, _CTR_instances, "m", _CTR_increaseIv).call(this, 1);
            __classPrivateFieldSet(this, _CTR_bytesUntilNextBlock, 0, "f");
        }
        else {
            __classPrivateFieldSet(this, _CTR_bytesUntilNextBlock, __classPrivateFieldGet(this, _CTR_bytesUntilNextBlock, "f") + headerLength, "f");
        }
    }
    if (!data.length && header) {
        return header;
    }
    const encrypted = await __classPrivateFieldGet(this, _CTR_instances, "m", _CTR_encrypt).call(this, data);
    __classPrivateFieldSet(this, _CTR_bytesUntilNextBlock, encrypted.length % __classPrivateFieldGet(this, _CTR_iv, "f").length, "f");
    __classPrivateFieldGet(this, _CTR_instances, "m", _CTR_increaseIv).call(this, (encrypted.length - __classPrivateFieldGet(this, _CTR_bytesUntilNextBlock, "f")) / __classPrivateFieldGet(this, _CTR_iv, "f").length);
    return header ? concat([header, encrypted]) : encrypted;
}, _CTR_encrypt = async function _CTR_encrypt(data) {
    return new Uint8Array(await dntShim.crypto.subtle.encrypt({
        name: "AES-CTR",
        counter: new Uint8Array(__classPrivateFieldGet(this, _CTR_iv, "f")),
        length: __classPrivateFieldGet(this, _CTR_iv, "f").length * 8,
    }, __classPrivateFieldGet(this, _CTR_key, "f"), data));
}, _CTR_increaseIv = function _CTR_increaseIv(amount) {
    if (amount < 1) {
        return;
    }
    __classPrivateFieldSet(this, _CTR_iv, bufferFromBigInt(bigIntFromBuffer(__classPrivateFieldGet(this, _CTR_iv, "f"), false, false) + BigInt(amount), __classPrivateFieldGet(this, _CTR_iv, "f").length, false, false), "f");
};
