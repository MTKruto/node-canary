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
type MaybeArrayOf<T> = T | T[];
type MaybeInArray<T> = T | [T];
export type ParamDesc = ([
    string,
    MaybeInArray<typeof TLObject | typeof Uint8Array | "string" | "number" | "bigint" | "boolean" | "true">,
    string
] | [string, typeof flags, "#"])[];
export type Param = null | MaybeArrayOf<string | number | bigint | boolean | Uint8Array | TLObject>;
export declare const flags: unique symbol;
export type Params = ([
    Param,
    MaybeInArray<typeof TLObject | typeof Uint8Array | "string" | "number" | "bigint" | "boolean" | "true">,
    string
] | [string, typeof flags, "#"])[];
export declare const id: unique symbol;
export declare const params: unique symbol;
export declare const paramDesc: unique symbol;
export declare const length: unique symbol;
export declare const serialize: unique symbol;
export declare const as: unique symbol;
export declare const name: unique symbol;
export declare function isOptionalParam(ntype: string): boolean;
export declare function analyzeOptionalParam(ntype: string): {
    flagField: string;
    bitIndex: number;
};
export declare abstract class TLObject {
    protected abstract get [id](): number;
    protected abstract get [params](): Params;
    static get [name](): string;
    get [name](): string;
    protected static get [paramDesc](): ParamDesc;
    get [length](): number;
    [serialize](): Uint8Array;
    [as]<T extends TLObjectConstructor<InstanceType<T>>>(constructor: T): InstanceType<T>;
    toJSON(): object;
}
export interface TLObjectConstructor<T = TLObject> {
    new (params: any): T;
    [name]: string;
    [paramDesc]: ParamDesc;
}
export declare function isTLObjectConstructor(t: unknown): t is typeof TLObject;
export {};
//# sourceMappingURL=1_tl_object.d.ts.map