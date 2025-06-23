/**
 * A debounced function that will be delayed by a given `wait`
 * time in milliseconds. If the method is called again before
 * the timeout expires, the previous call will be aborted.
 */
export interface DebouncedFunction<T extends Array<unknown>> {
    (...args: T): void;
    /** Clears the debounce timeout and omits calling the debounced function. */
    clear(): void;
    /** Clears the debounce timeout and calls the debounced function immediately. */
    flush(): void;
    /** Returns a boolean whether a debounce call is pending or not. */
    readonly pending: boolean;
}
/**
 * Creates a debounced function that delays the given `func`
 * by a given `wait` time in milliseconds. If the method is called
 * again before the timeout expires, the previous call will be
 * aborted.
 *
 * @example Usage
 * ```ts ignore
 * import { debounce } from "@std/async/debounce";
 *
 * const log = debounce(
 *   (event: Deno.FsEvent) =>
 *     console.log("[%s] %s", event.kind, event.paths[0]),
 *   200,
 * );
 *
 * for await (const event of Deno.watchFs("./")) {
 *   log(event);
 * }
 * // wait 200ms ...
 * // output: Function debounced after 200ms with baz
 * ```
 *
 * @typeParam T The arguments of the provided function.
 * @param fn The function to debounce.
 * @param wait The time in milliseconds to delay the function.
 * @returns The debounced function.
 */
export declare function debounce<T extends Array<any>>(fn: (this: DebouncedFunction<T>, ...args: T) => void, wait: number): DebouncedFunction<T>;
//# sourceMappingURL=debounce.d.ts.map