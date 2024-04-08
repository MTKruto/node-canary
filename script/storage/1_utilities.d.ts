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
import { StorageKeyPart } from "./0_storage.js";
export declare enum ValueType {
    Boolean = 0,
    Number = 1,
    String = 2,
    BigInt = 3,
    Date = 4,
    Uint8Array = 5,
    Array = 6
}
export declare function toString(value: unknown): string;
export declare function fromString<T>(string: string): T;
export declare function fixKey(key: readonly StorageKeyPart[]): IDBValidKey[];
export declare function restoreKey(key: readonly StorageKeyPart[]): StorageKeyPart[];
export declare function getPrefixKeyRange(prefix: any): IDBKeyRange;
export declare function isInRange(key: StorageKeyPart[], start: readonly StorageKeyPart[], end: readonly StorageKeyPart[]): boolean;
