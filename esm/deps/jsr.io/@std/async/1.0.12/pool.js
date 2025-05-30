// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
/** Error message emitted from the thrown error while mapping. */
const ERROR_WHILE_MAPPING_MESSAGE = "Cannot complete the mapping as an error was thrown from an item";
/**
 * pooledMap transforms values from an (async) iterable into another async
 * iterable. The transforms are done concurrently, with a max concurrency
 * defined by the poolLimit.
 *
 * If an error is thrown from `iterableFn`, no new transformations will begin.
 * All currently executing transformations are allowed to finish and still
 * yielded on success. After that, the rejections among them are gathered and
 * thrown by the iterator in an `AggregateError`.
 *
 * @example Usage
 * ```ts
 * import { pooledMap } from "@std/async/pool";
 * import { assertEquals } from "@std/assert";
 *
 * const results = pooledMap(
 *   2,
 *   [1, 2, 3],
 *   (i) => new Promise((r) => setTimeout(() => r(i), 1000)),
 * );
 *
 * assertEquals(await Array.fromAsync(results), [1, 2, 3]);
 * ```
 *
 * @typeParam T the input type.
 * @typeParam R the output type.
 * @param poolLimit The maximum count of items being processed concurrently.
 * @param array The input array for mapping.
 * @param iteratorFn The function to call for every item of the array.
 * @returns The async iterator with the transformed values.
 */
export function pooledMap(poolLimit, array, iteratorFn) {
    // Create the async iterable that is returned from this function.
    const res = new TransformStream({
        async transform(p, controller) {
            try {
                const s = await p;
                controller.enqueue(s);
            }
            catch (e) {
                if (e instanceof AggregateError &&
                    e.message === ERROR_WHILE_MAPPING_MESSAGE) {
                    controller.error(e);
                }
            }
        },
    });
    // Start processing items from the iterator
    (async () => {
        const writer = res.writable.getWriter();
        const executing = [];
        try {
            for await (const item of array) {
                const p = Promise.resolve().then(() => iteratorFn(item));
                // Only write on success. If we `writer.write()` a rejected promise,
                // that will end the iteration. We don't want that yet. Instead let it
                // fail the race, taking us to the catch block where all currently
                // executing jobs are allowed to finish and all rejections among them
                // can be reported together.
                writer.write(p);
                const e = p.then(() => executing.splice(executing.indexOf(e), 1));
                executing.push(e);
                if (executing.length >= poolLimit) {
                    await Promise.race(executing);
                }
            }
            // Wait until all ongoing events have processed, then close the writer.
            await Promise.all(executing);
            writer.close();
        }
        catch {
            const errors = [];
            for (const result of await Promise.allSettled(executing)) {
                if (result.status === "rejected") {
                    errors.push(result.reason);
                }
            }
            writer.write(Promise.reject(new AggregateError(errors, ERROR_WHILE_MAPPING_MESSAGE))).catch(() => { });
        }
    })();
    // Feature test until browser coverage is adequate
    return Symbol.asyncIterator in res.readable &&
        typeof res.readable[Symbol.asyncIterator] === "function"
        ? res.readable[Symbol.asyncIterator]()
        : (async function* () {
            const reader = res.readable.getReader();
            while (true) {
                const { done, value } = await reader.read();
                if (done)
                    break;
                yield value;
            }
            reader.releaseLock();
        })();
}
