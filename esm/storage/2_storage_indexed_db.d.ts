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
import { GetManyFilter, Storage, StorageKeyPart } from "./0_storage.js";
export interface StorageIndexedDBParams {
    /** Whether to store files. Defaults to true. */
    storeFiles?: boolean;
}
export declare class StorageIndexedDB implements Storage {
    #private;
    database: IDBDatabase | null;
    constructor(name: string, params?: StorageIndexedDBParams);
    get name(): string;
    branch(id: string): StorageIndexedDB;
    initialize(): Promise<void>;
    get supportsFiles(): boolean;
    get mustSerialize(): boolean;
    set(k: readonly StorageKeyPart[], v: unknown, tx_?: IDBTransaction): Promise<void>;
    get<T>(k: readonly StorageKeyPart[], tx_?: IDBTransaction | null, fix?: boolean): Promise<T | null>;
    getMany<T>(filter: GetManyFilter, params?: {
        limit?: number;
        reverse?: boolean;
    }, tx_?: IDBTransaction): AsyncGenerator<[readonly StorageKeyPart[], T]>;
    incr(key: readonly StorageKeyPart[], by: number): Promise<void>;
}
//# sourceMappingURL=2_storage_indexed_db.d.ts.map