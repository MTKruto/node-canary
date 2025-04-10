// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
import { exponentialBackoffWithJitter } from "./_util.js";
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
export class RetryError extends Error {
    /**
     * Constructs a new {@linkcode RetryError} instance.
     *
     * @param cause the cause for this error.
     * @param attempts the number of retry attempts made.
     */
    constructor(cause, attempts) {
        super(`Retrying exceeded the maxAttempts (${attempts}).`);
        this.name = "RetryError";
        this.cause = cause;
    }
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
export async function retry(fn, options) {
    const { multiplier = 2, maxTimeout = 60000, maxAttempts = 5, minTimeout = 1000, jitter = 1, } = options ?? {};
    if (maxTimeout <= 0) {
        throw new TypeError(`Cannot retry as 'maxTimeout' must be positive: current value is ${maxTimeout}`);
    }
    if (minTimeout > maxTimeout) {
        throw new TypeError(`Cannot retry as 'minTimeout' must be <= 'maxTimeout': current values 'minTimeout=${minTimeout}', 'maxTimeout=${maxTimeout}'`);
    }
    if (jitter > 1) {
        throw new TypeError(`Cannot retry as 'jitter' must be <= 1: current value is ${jitter}`);
    }
    let attempt = 0;
    while (true) {
        try {
            return await fn();
        }
        catch (error) {
            if (attempt + 1 >= maxAttempts) {
                throw new RetryError(error, maxAttempts);
            }
            const timeout = exponentialBackoffWithJitter(maxTimeout, minTimeout, attempt, multiplier, jitter);
            await new Promise((r) => setTimeout(r, timeout));
        }
        attempt++;
    }
}
