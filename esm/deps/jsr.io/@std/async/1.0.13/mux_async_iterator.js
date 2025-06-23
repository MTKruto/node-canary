// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MuxAsyncIterator_instances, _MuxAsyncIterator_iteratorCount, _MuxAsyncIterator_yields, _MuxAsyncIterator_throws, _MuxAsyncIterator_signal, _MuxAsyncIterator_callIteratorNext;
/**
 * Multiplexes multiple async iterators into a single stream. It currently
 * makes an assumption that the final result (the value returned and not
 * yielded from the iterator) does not matter; if there is any result, it is
 * discarded.
 *
 * @example Usage
 * ```ts
 * import { MuxAsyncIterator } from "@std/async/mux-async-iterator";
 * import { assertEquals } from "@std/assert";
 *
 * async function* gen123(): AsyncIterableIterator<number> {
 *   yield 1;
 *   yield 2;
 *   yield 3;
 * }
 *
 * async function* gen456(): AsyncIterableIterator<number> {
 *   yield 4;
 *   yield 5;
 *   yield 6;
 * }
 *
 * const mux = new MuxAsyncIterator<number>();
 * mux.add(gen123());
 * mux.add(gen456());
 *
 * const result = await Array.fromAsync(mux);
 *
 * assertEquals(result, [1, 4, 2, 5, 3, 6]);
 * ```
 *
 * @typeParam T The type of the provided async iterables and generated async iterable.
 */
export class MuxAsyncIterator {
    constructor() {
        _MuxAsyncIterator_instances.add(this);
        _MuxAsyncIterator_iteratorCount.set(this, 0);
        _MuxAsyncIterator_yields.set(this, []);
        // deno-lint-ignore no-explicit-any
        _MuxAsyncIterator_throws.set(this, []);
        _MuxAsyncIterator_signal.set(this, Promise.withResolvers());
    }
    /**
     * Add an async iterable to the stream.
     *
     * @param iterable The async iterable to add.
     *
     * @example Usage
     * ```ts
     * import { MuxAsyncIterator } from "@std/async/mux-async-iterator";
     * import { assertEquals } from "@std/assert";
     *
     * async function* gen123(): AsyncIterableIterator<number> {
     *   yield 1;
     *   yield 2;
     *   yield 3;
     * }
     *
     * const mux = new MuxAsyncIterator<number>();
     * mux.add(gen123());
     *
     * const result = await Array.fromAsync(mux.iterate());
     *
     * assertEquals(result, [1, 2, 3]);
     * ```
     */
    add(iterable) {
        var _a;
        __classPrivateFieldSet(this, _MuxAsyncIterator_iteratorCount, (_a = __classPrivateFieldGet(this, _MuxAsyncIterator_iteratorCount, "f"), ++_a), "f");
        __classPrivateFieldGet(this, _MuxAsyncIterator_instances, "m", _MuxAsyncIterator_callIteratorNext).call(this, iterable[Symbol.asyncIterator]());
    }
    /**
     * Returns an async iterator of the stream.
     * @returns the async iterator for all the added async iterables.
     *
     * @example Usage
     * ```ts
     * import { MuxAsyncIterator } from "@std/async/mux-async-iterator";
     * import { assertEquals } from "@std/assert";
     *
     * async function* gen123(): AsyncIterableIterator<number> {
     *   yield 1;
     *   yield 2;
     *   yield 3;
     * }
     *
     * const mux = new MuxAsyncIterator<number>();
     * mux.add(gen123());
     *
     * const result = await Array.fromAsync(mux.iterate());
     *
     * assertEquals(result, [1, 2, 3]);
     * ```
     */
    async *iterate() {
        while (__classPrivateFieldGet(this, _MuxAsyncIterator_iteratorCount, "f") > 0) {
            // Sleep until any of the wrapped iterators yields.
            await __classPrivateFieldGet(this, _MuxAsyncIterator_signal, "f").promise;
            // Note that while we're looping over `yields`, new items may be added.
            for (const { iterator, value } of __classPrivateFieldGet(this, _MuxAsyncIterator_yields, "f")) {
                yield value;
                __classPrivateFieldGet(this, _MuxAsyncIterator_instances, "m", _MuxAsyncIterator_callIteratorNext).call(this, iterator);
            }
            if (__classPrivateFieldGet(this, _MuxAsyncIterator_throws, "f").length) {
                for (const e of __classPrivateFieldGet(this, _MuxAsyncIterator_throws, "f")) {
                    throw e;
                }
            }
            // Clear the `yields` list and reset the `signal` promise.
            __classPrivateFieldGet(this, _MuxAsyncIterator_yields, "f").length = 0;
            __classPrivateFieldSet(this, _MuxAsyncIterator_signal, Promise.withResolvers(), "f");
        }
    }
    /**
     * Implements an async iterator for the stream.
     * @returns the async iterator for all the added async iterables.
     *
     * @example Usage
     * ```ts
     * import { MuxAsyncIterator } from "@std/async/mux-async-iterator";
     * import { assertEquals } from "@std/assert";
     *
     * async function* gen123(): AsyncIterableIterator<number> {
     *   yield 1;
     *   yield 2;
     *   yield 3;
     * }
     *
     * const mux = new MuxAsyncIterator<number>();
     * mux.add(gen123());
     *
     * const result = await Array.fromAsync(mux);
     *
     * assertEquals(result, [1, 2, 3]);
     * ```
     */
    [(_MuxAsyncIterator_iteratorCount = new WeakMap(), _MuxAsyncIterator_yields = new WeakMap(), _MuxAsyncIterator_throws = new WeakMap(), _MuxAsyncIterator_signal = new WeakMap(), _MuxAsyncIterator_instances = new WeakSet(), _MuxAsyncIterator_callIteratorNext = async function _MuxAsyncIterator_callIteratorNext(iterator) {
        var _a;
        try {
            const { value, done } = await iterator.next();
            if (done) {
                __classPrivateFieldSet(this, _MuxAsyncIterator_iteratorCount, (_a = __classPrivateFieldGet(this, _MuxAsyncIterator_iteratorCount, "f"), --_a), "f");
            }
            else {
                __classPrivateFieldGet(this, _MuxAsyncIterator_yields, "f").push({ iterator, value });
            }
        }
        catch (e) {
            __classPrivateFieldGet(this, _MuxAsyncIterator_throws, "f").push(e);
        }
        __classPrivateFieldGet(this, _MuxAsyncIterator_signal, "f").resolve();
    }, Symbol.asyncIterator)]() {
        return this.iterate();
    }
}
