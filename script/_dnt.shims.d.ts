export { crypto, type Crypto, type SubtleCrypto, type AlgorithmIdentifier, type Algorithm, type RsaOaepParams, type BufferSource, type AesCtrParams, type AesCbcParams, type AesGcmParams, type CryptoKey, type KeyAlgorithm, type KeyType, type KeyUsage, type EcdhKeyDeriveParams, type HkdfParams, type HashAlgorithmIdentifier, type Pbkdf2Params, type AesDerivedKeyParams, type HmacImportParams, type JsonWebKey, type RsaOtherPrimesInfo, type KeyFormat, type RsaHashedKeyGenParams, type RsaKeyGenParams, type BigInteger, type EcKeyGenParams, type NamedCurve, type CryptoKeyPair, type AesKeyGenParams, type HmacKeyGenParams, type RsaHashedImportParams, type EcKeyImportParams, type AesKeyAlgorithm, type RsaPssParams, type EcdsaParams } from "@deno/shim-crypto";
export { alert, confirm, prompt } from "@deno/shim-prompts";
import { default as WebSocket } from "ws";
export { default as WebSocket } from "ws";
import { Deno } from "@deno/shim-deno";
export { Deno } from "@deno/shim-deno";
export declare const dntGlobalThis: Omit<typeof globalThis, "alert" | "confirm" | "prompt" | "WebSocket" | "crypto" | "Deno"> & {
    crypto: import("@deno/shim-crypto").Crypto;
    alert: typeof globalThis.alert;
    confirm: typeof globalThis.confirm;
    prompt: typeof globalThis.prompt;
    WebSocket: typeof WebSocket;
    Deno: typeof Deno;
};
//# sourceMappingURL=_dnt.shims.d.ts.map