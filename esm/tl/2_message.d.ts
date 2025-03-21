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
import { TLReader } from "./1_tl_reader.js";
export interface message {
    _: "message";
    msg_id: bigint;
    seqno: number;
    body: Uint8Array | msg_container;
}
export declare function serializeMessage(message: message): Promise<Uint8Array>;
export declare function deserializeMessage(reader: TLReader): Promise<message>;
export interface msg_container {
    _: "msg_container";
    messages: message[];
}
export declare const MSG_CONTAINER_CONSTRUCTOR = 1945237724;
export declare function serializeMsgContainer(msgContainer: msg_container): Promise<Uint8Array>;
export declare function deserializeMsgContainer(buffer: Uint8Array): Promise<msg_container>;
//# sourceMappingURL=2_message.d.ts.map