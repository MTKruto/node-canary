/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
import { Schema } from "./0_types.js";
export declare function isValidObject(object: any, schema: Schema): boolean;
export declare function assertIsValidObject(object: any, schema: Schema): void;
export declare function is(typeName: string, value: any, schema: Schema): boolean;
export declare function isOneOf(names: string[], value: unknown, schema: Schema): boolean;
export declare function isOfEnum(name: string, value: any, schema: Schema): boolean;
export declare function as(name: string, value: unknown, schema: Schema): unknown;
export declare function mustGetReturnType(name: string, schema: Schema): string;
//# sourceMappingURL=1_utilities.d.ts.map