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
import { Api, DeserializedType } from "../2_tl.js";
import { ClientAbstract } from "./0_client_abstract.js";
import { ClientAbstractParams } from "./0_client_abstract.js";
export type ErrorSource = "deserialization" | "decryption" | "unknown";
export interface Handlers {
    serverSaltReassigned?: (newServerSalt: bigint) => void;
    updates?: (updates: Api.Updates | Api.Update, call: Api.AnyType | null, callback?: () => void) => void;
    result?: (result: DeserializedType, callback: () => void) => void;
    error?: (err: unknown, source: ErrorSource) => void;
}
/**
 * An MTProto client for making encrypted connections. Most users won't need to interact with this. Used internally by `Client`.
 *
 * There are a few things to note:
 *
 * - This is a bare client and it stores nothing.
 * - It expects an authorization key to be present before invoking any method.
 * - Authorization must be set using `setAuthKey`.
 * - Incoming packets that aren't a reply to a specific call are passed to the assigned handlers.
 * - It doesn't uncompress compressed packets.
 */
export declare class ClientEncrypted extends ClientAbstract {
    #private;
    handlers: Handlers;
    constructor(params?: ClientAbstractParams);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    setAuthKey(key: Uint8Array<ArrayBuffer>): Promise<void>;
    get authKey(): Uint8Array;
    set serverSalt(serverSalt: bigint);
    get serverSalt(): bigint;
    invoke<T extends Api.AnyObject, R = T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T, noWait?: boolean): Promise<R | void>;
}
//# sourceMappingURL=1_client_encrypted.d.ts.map