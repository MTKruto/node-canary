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
var _CTR_key, _CTR_state;
import { createCtr256State, ctr256, destroyCtr256State } from "../0_deps.js";
export class CTR {
    constructor(key, iv) {
        _CTR_key.set(this, void 0);
        _CTR_state.set(this, void 0);
        __classPrivateFieldSet(this, _CTR_state, createCtr256State(iv), "f");
        __classPrivateFieldSet(this, _CTR_key, key, "f");
    }
    /** This must not be called after destroying. */
    call(data) {
        ctr256(data, __classPrivateFieldGet(this, _CTR_key, "f"), __classPrivateFieldGet(this, _CTR_state, "f"));
    }
    destroy() {
        destroyCtr256State(__classPrivateFieldGet(this, _CTR_state, "f"));
    }
}
_CTR_key = new WeakMap(), _CTR_state = new WeakMap();
