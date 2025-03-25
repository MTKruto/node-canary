declare global {
    interface Error {
        cause?: unknown;
    }
}
export {};
declare global {
    interface PromiseConstructor {
        /**
         * Creates a Promise that can be resolved or rejected using provided functions.
         * @returns An object containing `promise` promise object, `resolve` and `reject` functions.
         */
        withResolvers<T>(): {
            promise: Promise<T>;
            resolve: (value: T | PromiseLike<T>) => void;
            reject: (reason?: any) => void;
        };
    }
}
//# sourceMappingURL=_dnt.polyfills.d.ts.map