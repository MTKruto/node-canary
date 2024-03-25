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
export declare const WEB_STORAGE_PREFIX_EXP: RegExp;
export declare function toString(value: unknown): string;
export declare function fromString<T>(string: string): T;
export declare function fixKey(key: readonly StorageKeyPart[]): IDBValidKey[];
export declare function restoreKey(key: readonly StorageKeyPart[]): StorageKeyPart[];
export declare function getPrefixKeyRange(prefix: any): IDBKeyRange;
export declare function isInRange(key: StorageKeyPart[], start: readonly StorageKeyPart[], end: readonly StorageKeyPart[]): boolean;
