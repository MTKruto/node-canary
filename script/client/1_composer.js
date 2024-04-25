"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Composer = exports.skip = exports.concat = exports.flatten = void 0;
const _0_errors_js_1 = require("../0_errors.js");
const _0_filters_js_1 = require("./0_filters.js");
function flatten(mw) {
    return typeof mw === "function" ? mw : (ctx, next) => mw.middleware()(ctx, next);
}
exports.flatten = flatten;
function concat(left, right) {
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
exports.concat = concat;
function skip(_ctx, next) {
    return next();
}
exports.skip = skip;
class Composer {
    set prefixes(value) {
        if (__classPrivateFieldGet(this, _Composer_prefixes, "f") !== undefined) {
            throw new _0_errors_js_1.InputError("Prefixes already set");
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
            return (0, _0_filters_js_1.match)(filter, ctx);
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
                    throw new _0_errors_js_1.InputError("Intersecting prefixes");
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
    callbackQuery(data) {
        const data_ = Array.isArray(data) ? data : [data];
        return this.on("callbackQuery:data").filter((ctx) => {
            for (const data of data_) {
                if (typeof data === "string" && data == ctx.callbackQuery.data) {
                    return true;
                }
                else if (data instanceof RegExp && data.test(ctx.callbackQuery.data)) {
                    return true;
                }
            }
            return false;
        });
    }
    inlineQuery(queries) {
        const queries_ = Array.isArray(queries) ? queries : [queries];
        return this.on("inlineQuery").filter((ctx) => {
            for (const query of queries_) {
                if (typeof query === "string" && query == ctx.inlineQuery.query) {
                    return true;
                }
                else if (query instanceof RegExp && query.test(ctx.inlineQuery.query)) {
                    return true;
                }
            }
            return false;
        });
    }
}
exports.Composer = Composer;
_Composer_handle = new WeakMap(), _Composer_prefixes = new WeakMap();
