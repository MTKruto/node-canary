import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.js";
export interface StorageIndexedDBParams {
    /** Whether to store files. Defaults to true. */
    fileStorage?: boolean;
}
export declare class StorageIndexedDB extends Storage {
    #private;
    database: IDBDatabase | null;
    constructor(name: string, params?: StorageIndexedDBParams);
    get name(): string;
    branch(id: string): StorageIndexedDB;
    initialize(): Promise<void>;
    get supportsFiles(): boolean;
    set(k: readonly StorageKeyPart[], v: unknown, tx_?: IDBTransaction): Promise<void>;
    get<T>(k: readonly StorageKeyPart[], tx_?: IDBTransaction | null, fix?: boolean): Promise<T | null>;
    getMany<T>(filter: GetManyFilter, params?: {
        limit?: number;
        reverse?: boolean;
    }, tx_?: IDBTransaction): AsyncGenerator<[readonly StorageKeyPart[], T]>;
    incr(key: readonly StorageKeyPart[], by: number): Promise<void>;
}
