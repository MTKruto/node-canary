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
import { id, serialize } from "./1_tl_object.js";
import { TLReader } from "./4_tl_reader.js";
import { TLWriter } from "./5_tl_writer.js";
import { RPCResult } from "./6_rpc_result.js";
export function calculateLength(object) {
    let length = 0;
    if (Array.isArray(object)) {
        length += 32 / 8; // vector constructor
        length += 32 / 8; // number of items
        for (const item of object) {
            length += calculateLength(item);
        }
    }
    else if (typeof object === "boolean") {
        length += 32 / 8; // constructor
    }
    else {
        length += object[serialize]().length;
    }
    return length;
}
export class Message_ {
    constructor(id, seqNo, body) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: id
        });
        Object.defineProperty(this, "seqNo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: seqNo
        });
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: body
        });
    }
    [serialize]() {
        if (this.body instanceof RPCResult) {
            throw new Error("Not applicable");
        }
        return new TLWriter()
            .writeInt64(this.id)
            .writeInt32(this.seqNo)
            .writeInt32(calculateLength(this.body))
            .writeObject(this.body)
            .buffer;
    }
    static deserialize(reader) {
        const id_ = reader.readInt64();
        const seqNo = reader.readInt32();
        const length = reader.readInt32();
        reader = new TLReader(reader.read(length));
        const cid = reader.readInt32(false);
        let body;
        {
            if (cid == RPCResult[id]) {
                body = RPCResult.deserialize(reader.buffer);
            }
            else {
                body = reader.readObject(cid);
            }
        }
        return new Message_(id_, seqNo, body);
    }
}
