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
import { TelegramError, TelegramErrorParams } from "./3_errors.js";
import { Mtproto } from "./2_tl.js";
export * from "./3_errors.js";
export declare class FloodWait extends TelegramError {
    seconds: number;
    constructor(params: TelegramErrorParams);
}
export declare class Migrate extends TelegramError {
    dc: number;
    constructor(params: TelegramErrorParams);
}
export declare class UserMigrate extends Migrate {
}
export declare class PhoneMigrate extends Migrate {
}
export declare class FileMigrate extends Migrate {
}
export declare class StatsMigrate extends Migrate {
}
export declare function constructTelegramError(error: Mtproto.rpc_error, call: unknown): TelegramError;
//# sourceMappingURL=4_errors.d.ts.map