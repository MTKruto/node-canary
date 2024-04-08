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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradeInstance = exports.StatsMigrate = exports.FileMigrate = exports.PhoneMigrate = exports.UserMigrate = exports.Migrate = exports.FloodWait = void 0;
const _0_deps_js_1 = require("./0_deps.js");
const _3_errors_js_1 = require("./3_errors.js");
__exportStar(require("./3_errors.js"), exports);
class FloodWait extends _3_errors_js_1.ErrorWithCall {
    constructor(params) {
        super(params);
        Object.defineProperty(this, "seconds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const p = params.error_message.split("_");
        this.seconds = Number(p[p.length - 1]);
        if (isNaN(this.seconds)) {
            (0, _0_deps_js_1.unreachable)();
        }
    }
}
exports.FloodWait = FloodWait;
class Migrate extends _3_errors_js_1.ErrorWithCall {
    constructor(params) {
        super(params);
        Object.defineProperty(this, "dc", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const p = params.error_message.split("_");
        this.dc = Number(p[p.length - 1]);
        if (isNaN(this.dc)) {
            (0, _0_deps_js_1.unreachable)();
        }
    }
}
exports.Migrate = Migrate;
class UserMigrate extends Migrate {
}
exports.UserMigrate = UserMigrate;
class PhoneMigrate extends Migrate {
}
exports.PhoneMigrate = PhoneMigrate;
class FileMigrate extends Migrate {
}
exports.FileMigrate = FileMigrate;
class StatsMigrate extends Migrate {
}
exports.StatsMigrate = StatsMigrate;
const prefixMap = {
    "FILE_MIGRATE_": FileMigrate,
    "PHONE_MIGRATE_": PhoneMigrate,
    "USER_MIGRATE_": UserMigrate,
    "STATS_MIGRATE_": StatsMigrate,
    "FLOOD_WAIT_": FloodWait,
};
function upgradeInstance(error, call) {
    for (const [k, v] of Object.entries(prefixMap)) {
        if (error.error_message.startsWith(k)) {
            return new v({ ...error, call });
        }
    }
    for (const [k, v] of Object.entries(_3_errors_js_1.map)) {
        if (error.error_message == k) {
            return new v({ ...error, call });
        }
    }
    return error;
}
exports.upgradeInstance = upgradeInstance;
