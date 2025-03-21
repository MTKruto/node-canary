export declare function init(): Promise<void>;
/**
 * Performs IGE-256 encryption.
 *
 * @param data The unencrypted data, larger than a byte, divisible by 16
 * @param key 32-byte encryption key
 * @param iv 32-byte initialization vector
 */
export declare function ige256Encrypt(data: Uint8Array, key: Uint8Array, iv: Uint8Array): Uint8Array<ArrayBuffer>;
/**
 * Performs IGE-256 decryption.
 *
 * @param data The encrypted data, larger than a byte, divisible by 16
 * @param key 32-byte encryption key
 * @param iv 32-byte initialization vector
 */
export declare function ige256Decrypt(data: Uint8Array, key: Uint8Array, iv: Uint8Array): Uint8Array<ArrayBuffer>;
//# sourceMappingURL=mod.d.ts.map