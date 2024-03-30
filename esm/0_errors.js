export class MtkrutoError extends Error {
}
export class ConnectionError extends MtkrutoError {
}
export class AccessError extends MtkrutoError {
}
export class InputError extends MtkrutoError {
}
export class TransportError extends MtkrutoError {
    constructor(code) {
        super(`Transport error: ${code}`);
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: code
        });
    }
}
