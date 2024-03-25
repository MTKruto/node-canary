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
}
