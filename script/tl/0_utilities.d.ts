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
export declare function isOptionalParam(ntype: string): boolean;
export declare function getOptionalParamInnerType(ntype: string): string;
export declare function analyzeOptionalParam(ntype: string): {
    flagField: string;
    bitIndex: number;
};
export declare function repr(value: unknown): string | null;
export declare function getVectorItemType(type: string): string | null;
export declare const X = "X";
export declare const VECTOR = 481674261;
export declare const BOOL_TRUE = 2574415285;
export declare const BOOL_FALSE = 3162085175;
//# sourceMappingURL=0_utilities.d.ts.map