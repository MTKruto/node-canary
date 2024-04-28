import { extensions } from "./_db.js";
export { extensions };
/**
 * Returns the extensions known to be associated with the media type `type`.
 * When `type` has no associated extensions, the function returns `undefined`.
 *
 * Extensions are returned without a leading `.`.
 *
 * @example
 * ```ts
 * import { extensionsByType } from "https://deno.land/std@$STD_VERSION/media_types/extensions_by_type.ts";
 *
 * extensionsByType("application/json"); // ["json", "map"]
 * extensionsByType("text/html; charset=UTF-8"); // ["html", "htm", "shtml"]
 * extensionsByType("application/foo"); // undefined
 * ```
 */
export declare function extensionsByType(type: string): string[] | undefined;
//# sourceMappingURL=extensions_by_type.d.ts.map