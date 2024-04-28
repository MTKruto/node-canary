/**
 * Return the last portion of a `path`.
 * Trailing directory separators are ignored, and optional suffix is removed.
 *
 * @example
 * ```ts
 * import { basename } from "https://deno.land/std@$STD_VERSION/path/basename.ts";
 *
 * basename("/home/user/Documents/"); // "Documents"
 * basename("C:\\user\\Documents\\image.png"); // "image.png"
 * basename("/home/user/Documents/image.png", ".png"); // "image"
 * ```
 *
 * @param path - path to extract the name from.
 * @param [suffix] - suffix to remove from extracted name.
 */
export declare function basename(path: string, suffix?: string): string;
//# sourceMappingURL=basename.d.ts.map