import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.js";
export declare class StorageLocalStorage extends Storage implements Storage {
    #private;
    constructor(prefix: string);
    get prefix(): string;
    branch(id: string): StorageLocalStorage;
    initialize(): void;
    get supportsFiles(): boolean;
    get<T>(key_: readonly StorageKeyPart[]): T | null;
    getMany<T>(filter: GetManyFilter, params?: {
        limit?: number;
        reverse?: boolean;
    }): Generator<[readonly StorageKeyPart[], T]>;
    set(key_: readonly StorageKeyPart[], value: unknown): void;
    incr(key: readonly StorageKeyPart[], by: number): void;
}
