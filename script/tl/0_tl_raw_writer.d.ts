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
export declare class TLRawWriter {
    protected _buffer: Uint8Array;
    constructor();
    get buffer(): Uint8Array;
    write(buffer: Uint8Array): typeof this;
    writeInt24(int: number, signed?: boolean): typeof this;
    writeInt32(int: number, signed?: boolean): typeof this;
    writeInt64(int: bigint, signed?: boolean): typeof this;
    writeDouble(double: number): typeof this;
    writeInt128(int: bigint, signed?: boolean): typeof this;
    writeInt256(int: bigint, signed?: boolean): typeof this;
    writeBytes(bytes: Uint8Array): typeof this;
    writeString(string: string): typeof this;
}
