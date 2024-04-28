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
import { MaybePromise } from "../1_utilities.js";
import { Update, UpdateIntersection, User } from "../3_types.js";
import { FilterQuery, WithFilter } from "./0_filters.js";
export type NextFunction<T = void> = () => Promise<T>;
export type MiddlewareFn<C> = (ctx: C, next: NextFunction) => MaybePromise<unknown>;
export interface MiddlewareObj<C> {
    middleware: () => MiddlewareFn<C>;
}
export type Middleware<C> = MiddlewareFn<C> | MiddlewareObj<C>;
export declare function flatten<C>(mw: Middleware<C>): MiddlewareFn<C>;
export declare function concat<C = Update>(left: MiddlewareFn<C>, right: MiddlewareFn<C>): MiddlewareFn<C>;
export declare function skip<C>(_ctx: C, next: NextFunction): Promise<void>;
export declare class Composer<C extends {
    me?: User;
}> implements MiddlewareObj<C> {
    #private;
    set prefixes(value: string | string[]);
    constructor(...middleware: Middleware<C>[]);
    middleware(): MiddlewareFn<C>;
    use(...middleware: Middleware<UpdateIntersection<C>>[]): Composer<C>;
    branch(predicate: (ctx: UpdateIntersection<C>) => MaybePromise<boolean>, trueHandler_: Middleware<UpdateIntersection<C>>, falseHandler_: Middleware<UpdateIntersection<C>>): Composer<C>;
    filter<D extends C>(predicate: (ctx: UpdateIntersection<C>) => ctx is D, ...middleware: Middleware<D>[]): Composer<D>;
    filter(predicate: (ctx: UpdateIntersection<C>) => MaybePromise<boolean>, ...middleware: Middleware<UpdateIntersection<C>>[]): Composer<C>;
    on<Q extends FilterQuery>(filter: Q, ...middleware: Middleware<WithFilter<C, Q>>[]): Composer<UpdateIntersection<WithFilter<C, Q>>>;
    command(commands: string | RegExp | (string | RegExp)[] | {
        names: string | RegExp | (string | RegExp)[];
        prefixes: string | string[];
    }, ...middleware: Middleware<WithFilter<C, "message:text">>[]): Composer<WithFilter<C, "message:text">>;
    callbackQuery(data: string | RegExp | (string | RegExp)[], ...middleware: Middleware<WithFilter<C, "callbackQuery:data">>[]): Composer<WithFilter<C, "callbackQuery:data">>;
    inlineQuery(queries: string | RegExp | (string | RegExp)[], ...middleware: Middleware<WithFilter<C, "inlineQuery">>[]): Composer<WithFilter<C, "inlineQuery">>;
}
//# sourceMappingURL=1_composer.d.ts.map