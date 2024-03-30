"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportError = exports.InputError = exports.AccessError = exports.ConnectionError = exports.MtkrutoError = void 0;
class MtkrutoError extends Error {
}
exports.MtkrutoError = MtkrutoError;
class ConnectionError extends MtkrutoError {
}
exports.ConnectionError = ConnectionError;
class AccessError extends MtkrutoError {
}
exports.AccessError = AccessError;
class InputError extends MtkrutoError {
}
exports.InputError = InputError;
class TransportError extends MtkrutoError {
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
exports.TransportError = TransportError;
