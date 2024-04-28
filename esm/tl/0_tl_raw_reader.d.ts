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
export declare class TLError extends Error {
}
export declare class TLRawReader {
    protected _buffer: Uint8Array;
    constructor(_buffer: Uint8Array);
    get buffer(): Uint8Array;
    read(count: number): Uint8Array;
    readInt24(signed?: boolean): number;
    readInt32(signed?: boolean): number;
    readInt64(signed?: boolean): bigint;
    readDouble(): number;
    readInt128(signed?: boolean): bigint;
    readInt256(signed?: boolean): bigint;
    readBytes(): Uint8Array;
    readString(): string;
}
//# sourceMappingURL=0_tl_raw_reader.d.ts.map