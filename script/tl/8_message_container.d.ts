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
import { id, name, serialize } from "./1_tl_object.js";
import { Message_ } from "./7_message.js";
export declare class MessageContainer {
    readonly id: bigint;
    readonly seqNo: number;
    messages: Message_[];
    static get [id](): number;
    get [name](): string;
    constructor(id: bigint, seqNo: number, messages: Message_[]);
    [serialize](): Uint8Array;
    static deserialize(buffer: Uint8Array): Message_[];
}
