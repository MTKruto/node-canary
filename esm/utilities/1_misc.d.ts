/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
export declare function drop<T>(promise: Promise<T>): void;
export declare function mustPrompt(message: string): string;
export declare function mustPromptNumber(message: string): number;
export declare function mustPromptOneOf<T extends readonly string[]>(message: string, choices: T): T[number];
export declare const ZERO_CHANNEL_ID = -1000000000000;
export declare const VECTOR_CONSTRUCTOR = 481674261;
export declare function toUnixTimestamp(date: Date): number;
export declare function fromUnixTimestamp(date: number): Date;
