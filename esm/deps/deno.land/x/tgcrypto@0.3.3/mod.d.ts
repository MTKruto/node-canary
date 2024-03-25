export declare function init(): Promise<void>;
/**
 * Performs IGE-256 encryption.
 *
 * @param data The unencrypted data, larger than a byte, divisible by 16
 * @param key 32-byte encryption key
 * @param iv 32-byte initialization vector
 */
export declare function ige256Encrypt(data: Uint8Array, key: Uint8Array, iv: Uint8Array): Uint8Array;
/**
 * Performs IGE-256 decryption.
 *
 * @param data The encrypted data, larger than a byte, divisible by 16
 * @param key 32-byte encryption key
 * @param iv 32-byte initialization vector
 */
export declare function ige256Decrypt(data: Uint8Array, key: Uint8Array, iv: Uint8Array): Uint8Array;
/**
 * Performs CTR-256 encryption/decryption.
 *
 * @param data The data, larger than a byte
 * @param key 32-byte encryption key
 * @param iv 16-byte initialization vector
 * @param state 1-byte state
 */
export declare function ctr256(data: Uint8Array, key: Uint8Array, iv: Uint8Array, state: Uint8Array): void;
/**
 * Performs CBC-256 encryption.
 *
 * @param data The unencrypted data, larger than a byte, divisible by 16
 * @param key 32-byte encryption key
 * @param iv 16-byte initialization vector
 */
export declare function cbc256Encrypt(data: Uint8Array, key: Uint8Array, iv: Uint8Array): Uint8Array;
/**
 * Performs CBC-256 decryption.
 *
 * @param data The encrypted data, larger than a byte, divisible by 16
 * @param key 32-byte encryption key
 * @param iv 16-byte initialization vector
 */
export declare function cbc256Decrypt(data: Uint8Array, key: Uint8Array, iv: Uint8Array): Uint8Array;
export declare function factorize(pq: bigint): [bigint, bigint];
