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
import { unreachable } from "./0_deps.js";
import { map, TelegramError } from "./3_errors.js";
export * from "./3_errors.js";
export class FloodWait extends TelegramError {
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
            unreachable();
        }
    }
}
export class Migrate extends TelegramError {
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
            unreachable();
        }
    }
}
export class UserMigrate extends Migrate {
}
export class PhoneMigrate extends Migrate {
}
export class FileMigrate extends Migrate {
}
export class StatsMigrate extends Migrate {
}
const prefixMap = {
    "FILE_MIGRATE_": FileMigrate,
    "PHONE_MIGRATE_": PhoneMigrate,
    "USER_MIGRATE_": UserMigrate,
    "STATS_MIGRATE_": StatsMigrate,
    "FLOOD_WAIT_": FloodWait,
};
export function constructTelegramError(error, call) {
    for (const [k, v] of Object.entries(prefixMap)) {
        if (error.error_message.startsWith(k)) {
            return new v({ ...error, call });
        }
    }
    if (error.error_message in map) {
        return new map[error.error_message]({ ...error, call });
    }
    return new TelegramError({ ...error, call });
}
