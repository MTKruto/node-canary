// Copyright 2018-2025 the Deno authors. MIT license.
// This module is browser compatible.
/**
 * The number of milliseconds in a second.
 *
 * @example
 * ```ts
 * import { SECOND } from "@std/datetime/constants";
 *
 * SECOND; // 1_000
 * ```
 */
export const SECOND = 1e3;
/**
 * The number of milliseconds in a minute.
 *
 * @example
 * ```ts
 * import { MINUTE } from "@std/datetime/constants";
 *
 * MINUTE; // 60_000
 * ```
 */
export const MINUTE = SECOND * 60;
/**
 * The number of milliseconds in an hour.
 *
 * @example
 * ```ts
 * import { HOUR } from "@std/datetime/constants";
 *
 * HOUR; // 3_600_000
 * ```
 */
export const HOUR = MINUTE * 60;
/**
 * The number of milliseconds in a day.
 *
 * @example
 * ```ts
 * import { DAY } from "@std/datetime/constants";
 *
 * DAY; // 86_400_000
 * ```
 */
export const DAY = HOUR * 24;
/**
 * The number of milliseconds in a week.
 *
 * @example
 * ```ts
 * import { WEEK } from "@std/datetime/constants";
 *
 * WEEK; // 604_800_000
 * ```
 */
export const WEEK = DAY * 7;
