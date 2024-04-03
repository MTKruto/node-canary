import { MaybePromise } from "../1_utilities.js";
import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.js";
export declare class StorageMemory extends Storage implements Storage {
    #private;
    protected map: Map<string, unknown>;
    constructor(authString?: string);
    get isMemoryStorage(): boolean;
    initialize(): Promise<void>;
    branch(id: string): Storage;
    get supportsFiles(): boolean;
    get<T>(key: readonly StorageKeyPart[]): T | null;
    getMany<T>(filter: GetManyFilter, params?: {
        limit?: number;
        reverse?: boolean;
    }): Generator<[readonly StorageKeyPart[], T]>;
    set(key_: readonly StorageKeyPart[], value: unknown): MaybePromise<void>;
    incr(key: readonly StorageKeyPart[], by: number): void;
}
