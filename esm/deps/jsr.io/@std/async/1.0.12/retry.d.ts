/**
 * Error thrown in {@linkcode retry} once the maximum number of failed attempts
 * has been reached.
 *
 * @example Usage
 * ```ts no-assert ignore
 * import { RetryError } from "@std/async/retry";
 *
 * throw new RetryError({ foo: "bar" }, 3);
 * ```
 */
export declare class RetryError extends Error {
    /**
     * Constructs a new {@linkcode RetryError} instance.
     *
     * @param cause the cause for this error.
     * @param attempts the number of retry attempts made.
     */
    constructor(cause: unknown, attempts: number);
}
/** Options for {@linkcode retry}. */
export interface RetryOptions {
    /**
     * How much to backoff after each retry.
     *
     * @default {2}
     */
    multiplier?: number;
    /**
     * The maximum milliseconds between attempts.
     *
     * @default {60000}
     */
    maxTimeout?: number;
    /**
     * The maximum amount of attempts until failure.
     *
     * @default {5}
     */
    maxAttempts?: number;
    /**
     * The initial and minimum amount of milliseconds between attempts.
     *
     * @default {1000}
     */
    minTimeout?: number;
    /**
     * Amount of jitter to introduce to the time between attempts. This is `1`
     * for full jitter by default.
     *
     * @default {1}
     */
    jitter?: number;
}
/**
 * Calls the given (possibly asynchronous) function up to `maxAttempts` times.
 * Retries as long as the given function throws. If the attempts are exhausted,
 * throws a {@linkcode RetryError} with `cause` set to the inner exception.
 *
 * The backoff is calculated by multiplying `minTimeout` with `multiplier` to the power of the current attempt counter (starting at 0 up to `maxAttempts - 1`). It is capped at `maxTimeout` however.
 * How long the actual delay is, depends on `jitter`.
 *
 * When `jitter` is the default value of `1`, waits between two attempts for a
 * randomized amount between 0 and the backoff time. With the default options
 * the maximal delay will be `15s = 1s + 2s + 4s + 8s`. If all five attempts
 * are exhausted the mean delay will be `9.5s = ½(4s + 15s)`.
 *
 * When `jitter` is `0`, waits the full backoff time.
 *
 * @example Example configuration 1
 * ```ts no-assert
 * import { retry } from "@std/async/retry";
 * const req = async () => {
 *  // some function that throws sometimes
 * };
 *
 * // Below resolves to the first non-error result of `req`
 * const retryPromise = await retry(req, {
 *  multiplier: 2,
 *  maxTimeout: 60000,
 *  maxAttempts: 5,
 *  minTimeout: 100,
 *  jitter: 1,
 * });
 * ```
 *
 * @example Example configuration 2
 * ```ts no-assert
 * import { retry } from "@std/async/retry";
 * const req = async () => {
 *  // some function that throws sometimes
 * };
 *
 * // Make sure we wait at least 1 minute, but at most 2 minutes
 * const retryPromise = await retry(req, {
 *  multiplier: 2.34,
 *  maxTimeout: 80000,
 *  maxAttempts: 7,
 *  minTimeout: 1000,
 *  jitter: 0.5,
 * });
 * ```
 *
 * @typeParam T The return type of the function to retry and returned promise.
 * @param fn The function to retry.
 * @param options Additional options.
 * @returns The promise that resolves with the value returned by the function to retry.
 */
export declare function retry<T>(fn: (() => Promise<T>) | (() => T), options?: RetryOptions): Promise<T>;
//# sourceMappingURL=retry.d.ts.map