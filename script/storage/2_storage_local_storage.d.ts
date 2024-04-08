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
