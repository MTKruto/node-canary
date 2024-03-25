var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Composer_handle, _Composer_prefixes;
import { match } from "./0_filters.js";
export function flatten(mw) {
    return typeof mw === "function" ? mw : (ctx, next) => mw.middleware()(ctx, next);
}
export function concat(left, right) {
    return async (ctx, next) => {
        let called = false;
        await left(ctx, async () => {
            if (called) {
                return;
            }
            else {
                called = true;
                await right(ctx, next);
            }
        });
    };
}
export function skip(_ctx, next) {
    return next();
}
export class Composer {
    set prefixes(value) {
        if (__classPrivateFieldGet(this, _Composer_prefixes, "f") !== undefined) {
            throw new Error("Prefixes already set");
        }
        __classPrivateFieldSet(this, _Composer_prefixes, value, "f");
    }
    constructor(...middleware) {
        _Composer_handle.set(this, void 0);
        _Composer_prefixes.set(this, void 0);
        __classPrivateFieldSet(this, _Composer_handle, middleware.length == 0 ? skip : middleware.map(flatten).reduce(concat), "f");
    }
    middleware() {
        return __classPrivateFieldGet(this, _Composer_handle, "f");
    }
    use(...middleware) {
        const composer = new Composer(...middleware);
        __classPrivateFieldSet(this, _Composer_handle, concat(__classPrivateFieldGet(this, _Composer_handle, "f"), flatten(composer)), "f");
        return composer;
    }
    branch(predicate, trueHandler_, falseHandler_) {
        const trueHandler = flatten(trueHandler_);
        const falseHandler = flatten(falseHandler_);
        return this.use(async (upd, next) => {
            if (await predicate(upd)) {
                await trueHandler(upd, next);
            }
            else {
                await falseHandler(upd, next);
            }
        });
    }
    filter(predicate, ...middleware) {
        const composer = new Composer(...middleware);
        this.branch(predicate, composer, skip);
        return composer;
    }
    on(filter, ...middleware) {
        return this.filter((ctx) => {
            return match(filter, ctx);
        }, ...middleware);
    }
    command(commands, ...middleware) {
        const commands__ = typeof commands === "object" && "names" in commands ? commands.names : commands;
        const commands_ = Array.isArray(commands__) ? commands__ : [commands__];
        const prefixes_ = typeof commands === "object" && "prefixes" in commands ? commands.prefixes : (__classPrivateFieldGet(this, _Composer_prefixes, "f") ?? []);
        const prefixes = Array.isArray(prefixes_) ? prefixes_ : [prefixes_];
        for (const left of prefixes) {
            for (const right of prefixes) {
                if (left == right) {
                    continue;
                }
                if (left.startsWith(right) || right.startsWith(left)) {
                    throw new Error("Intersecting prefixes");
                }
            }
        }
        return this.on("message:text").filter((ctx) => {
            const prefixes_ = prefixes.length == 0 ? [!ctx.me?.isBot ? "\\" : "/"] : prefixes;
            if (prefixes_.length == 0) {
                return false;
            }
            const cmd = ctx.message.text.split(/\s/, 1)[0];
            const prefix = prefixes_.find((v) => cmd.startsWith(v));
            if (prefix === undefined) {
                return false;
            }
            if (cmd.includes("@")) {
                const username = cmd.split("@", 2)[1];
                if (username.toLowerCase() !== ctx.me.username?.toLowerCase()) {
                    return false;
                }
            }
            const command_ = cmd.split("@", 1)[0].split(prefix, 2)[1].toLowerCase();
            for (const command of commands_) {
                if (typeof command === "string" && (command.toLowerCase() == command_)) {
                    return true;
                }
                else if (command instanceof RegExp && command.test(command_)) {
                    return true;
                }
            }
            return false;
        }, ...middleware);
    }
}
_Composer_handle = new WeakMap(), _Composer_prefixes = new WeakMap();
