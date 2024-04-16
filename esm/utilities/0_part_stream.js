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
var _PartStream_buffer, _PartStream_totalRead, _PartStream_part;
import { concat } from "../0_deps.js";
export class PartStream extends TransformStream {
    constructor(chunkSize) {
        super({
            transform: (chunk, controller) => {
                var _a, _b;
                __classPrivateFieldSet(this, _PartStream_totalRead, __classPrivateFieldGet(this, _PartStream_totalRead, "f") + chunk.byteLength, "f");
                chunk = concat([__classPrivateFieldGet(this, _PartStream_buffer, "f"), chunk]);
                while (chunk.byteLength > chunkSize) {
                    controller.enqueue({
                        small: false,
                        part: (__classPrivateFieldSet(this, _PartStream_part, (_b = __classPrivateFieldGet(this, _PartStream_part, "f"), _a = _b++, _b), "f"), _a),
                        totalParts: -1,
                        bytes: chunk.slice(0, chunkSize),
                    });
                    chunk = chunk.slice(chunkSize);
                }
                __classPrivateFieldSet(this, _PartStream_buffer, chunk, "f");
            },
            flush: (controller) => {
                controller.enqueue({
                    small: __classPrivateFieldGet(this, _PartStream_totalRead, "f") <= chunkSize,
                    part: __classPrivateFieldGet(this, _PartStream_part, "f"),
                    totalParts: Math.ceil(__classPrivateFieldGet(this, _PartStream_totalRead, "f") / chunkSize),
                    bytes: __classPrivateFieldGet(this, _PartStream_buffer, "f"),
                });
            },
        });
        _PartStream_buffer.set(this, new Uint8Array());
        _PartStream_totalRead.set(this, 0);
        _PartStream_part.set(this, 0);
    }
}
_PartStream_buffer = new WeakMap(), _PartStream_totalRead = new WeakMap(), _PartStream_part = new WeakMap();
