/**
 * Utility for representing n-tuple. Used in {@linkcode tee}.
 *
 * @internal
 */
export type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : TupleOf<T, N, []> : never;
/**
 * Utility for representing n-tuple of. Used in {@linkcode Tuple}.
 *
 * @internal
 */
export type TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N ? R : TupleOf<T, N, [T, ...R]>;
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
export declare function tee<T, N extends number = 2>(iterable: AsyncIterable<T>, n?: N): Tuple<AsyncIterable<T>, N>;
//# sourceMappingURL=tee.d.ts.map