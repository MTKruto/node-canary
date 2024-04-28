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
export declare function setLogVerbosity(verbosity_: number): void;
export interface LoggingProvider {
    error(...args: any[]): void;
    warn(...args: any[]): void;
    info(...args: any[]): void;
    debug(...args: any[]): void;
    log(...args: any[]): void;
}
export declare function setLoggingProvider(provider_: LoggingProvider): void;
export declare const ERROR = 1;
export declare const WARNING = 2;
export declare const INFO = 3;
export declare const DEBUG = 4;
export declare const TRACE = 5;
export declare const IN = 10;
export declare const OUT = 10;
export declare const IN_BIN = 20;
export declare const OUT_BIN = 20;
export declare function getLogger(scope: string): {
    client(id: number): any;
    branch(name: string): any;
    error(...args: any[]): void;
    warning(...args: any[]): void;
    info(...args: any[]): void;
    debug(...args: any[]): void;
    trace(...args: any[]): void;
    in(...args: any[]): void;
    out(...args: any[]): void;
    inBin(p: Uint8Array): void;
    outBin(p: Uint8Array): void;
    log(verbosity_: number, ...args: any[]): void;
};
export type Logger = ReturnType<typeof getLogger>;
//# sourceMappingURL=0_logger.d.ts.map