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
import { serialize } from "./1_tl_object.js";
import { ReadObject, TLReader } from "./4_tl_reader.js";
import { RPCResult } from "./6_rpc_result.js";
export declare function calculateLength(object: Message_ | ReadObject): number;
export declare class Message_ {
    readonly id: bigint;
    readonly seqNo: number;
    readonly body: ReadObject | RPCResult;
    constructor(id: bigint, seqNo: number, body: ReadObject | RPCResult);
    [serialize](): Uint8Array;
    static deserialize(reader: TLReader): Message_;
}
//# sourceMappingURL=7_message.d.ts.map