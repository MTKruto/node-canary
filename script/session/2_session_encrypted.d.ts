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
import { Mtproto } from "../2_tl.js";
import { DC } from "../3_transport.js";
import { Session, SessionParams } from "./1_session.js";
export interface Handlers {
    onUpdate?: (body: Uint8Array) => void;
    onNewServerSalt?: (serverSalt: bigint) => void;
    onMessageFailed?: (id: bigint, reason: unknown) => void;
    onPong?: (pong: Mtproto.pong) => void;
    onRpcError?: (id: bigint, error: Mtproto.rpc_error) => void;
    onRpcResult?: (id: bigint, result: Uint8Array) => void;
}
export declare class SessionEncrypted extends Session implements Session {
    #private;
    handlers: Handlers;
    constructor(dc: DC, params?: SessionParams);
    setAuthKey(key: Uint8Array<ArrayBuffer>): Promise<void>;
    get authKey(): Uint8Array;
    connect(): Promise<void>;
    disconnect(): void;
    send(body: Uint8Array): Promise<bigint>;
}
//# sourceMappingURL=2_session_encrypted.d.ts.map