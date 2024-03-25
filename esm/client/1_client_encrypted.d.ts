import { enums, functions, ReadObject, TLObject, types } from "../2_tl.js";
import { ClientAbstract } from "./0_client_abstract.js";
import { ClientAbstractParams } from "./0_client_abstract.js";
export type ErrorSource = "deserialization" | "decryption" | "unknown";
export interface Handlers {
    serverSaltReassigned?: (newServerSalt: bigint) => void;
    updates?: (updates: enums.Updates | enums.Update, call: TLObject | null, callback?: () => void) => void;
    result?: (result: ReadObject, callback: () => void) => void;
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
    setAuthKey(key: Uint8Array): Promise<void>;
    get authKey(): Uint8Array;
    set serverSalt(serverSalt: bigint);
    get serverSalt(): bigint;
    invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T): Promise<T extends functions.Function<unknown> ? T["__R"] : void>;
    invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait: true): Promise<void>;
    invoke<T extends (functions.Function<unknown> | types.Type) = functions.Function<unknown>>(function_: T, noWait?: boolean): Promise<T | void>;
}
