export declare class MtkrutoError extends Error {
}
export declare class ConnectionError extends MtkrutoError {
}
export declare class AccessError extends MtkrutoError {
}
export declare class InputError extends MtkrutoError {
}
export declare class TransportError extends MtkrutoError {
    readonly code: number;
    constructor(code: number);
}
