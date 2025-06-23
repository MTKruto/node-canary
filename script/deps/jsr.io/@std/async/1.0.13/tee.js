"use strict";
// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Queue_source, _Queue_queue;
Object.defineProperty(exports, "__esModule", { value: true });
exports.tee = tee;
class Queue {
    constructor(iterable) {
        _Queue_source.set(this, void 0);
        _Queue_queue.set(this, void 0);
        Object.defineProperty(this, "head", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "done", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _Queue_source, iterable[Symbol.asyncIterator](), "f");
        __classPrivateFieldSet(this, _Queue_queue, {
            value: undefined,
            next: undefined,
        }, "f");
        this.head = __classPrivateFieldGet(this, _Queue_queue, "f");
        this.done = false;
    }
    async next() {
        const result = await __classPrivateFieldGet(this, _Queue_source, "f").next();
        if (!result.done) {
            const nextNode = {
                value: result.value,
                next: undefined,
            };
            __classPrivateFieldGet(this, _Queue_queue, "f").next = nextNode;
            __classPrivateFieldSet(this, _Queue_queue, nextNode, "f");
        }
        else {
            this.done = true;
        }
    }
}
_Queue_source = new WeakMap(), _Queue_queue = new WeakMap();
/**
 * Branches the given async iterable into the `n` branches.
 *
 * @example Usage
 * ```ts
 * import { tee } from "@std/async/tee";
 * import { assertEquals } from "@std/assert";
 *
 * const gen = async function* gen() {
 *   yield 1;
 *   yield 2;
 *   yield 3;
 * };
 *
 * const [branch1, branch2] = tee(gen());
 *
 * const result1 = await Array.fromAsync(branch1);
 * assertEquals(result1, [1, 2, 3]);
 *
 * const result2 = await Array.fromAsync(branch2);
 * assertEquals(result2, [1, 2, 3]);
 * ```
 *
 * @typeParam T The type of the provided async iterable and the returned async iterables.
 * @typeParam N The amount of branches to tee into.
 * @param iterable The iterable to tee.
 * @param n The amount of branches to tee into.
 * @returns The tuple where each element is an async iterable.
 */
function tee(iterable, n = 2) {
    const queue = new Queue(iterable);
    async function* generator() {
        let buffer = queue.head;
        while (true) {
            if (buffer.next) {
                buffer = buffer.next;
                yield buffer.value;
            }
            else if (queue.done) {
                return;
            }
            else {
                await queue.next();
            }
        }
    }
    return Array.from({ length: n }).map(() => generator());
}
