import { CTR, MaybePromise } from "../1_utilities.js";
export declare abstract class Transport {
    protected obfuscationParameters: {
        encryptionCTR: CTR;
        decryptionCTR: CTR;
    } | null;
    protected encrypt(buffer: Uint8Array): void;
    protected decrypt(buffer: Uint8Array): void;
    abstract get initialized(): boolean;
    abstract initialize(): MaybePromise<void>;
    abstract receive(): MaybePromise<Uint8Array>;
    abstract send(buffer: Uint8Array): MaybePromise<void>;
    abstract deinitialize(): MaybePromise<void>;
}
