export declare class CTR {
    readonly key: Uint8Array;
    iv: Uint8Array;
    state: Uint8Array;
    constructor(key: Uint8Array, iv: Uint8Array);
    call(data: Uint8Array): void;
}
