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
import { AnyObject, AnyType, Types } from "./1_api.js";
import { TLReader } from "./1_tl_reader.js";
export type DeserializedType = boolean | number | bigint | string | Uint8Array | AnyType | Array<DeserializedType>;
export declare function deserializeTelegramType<T extends (keyof Types) | "X" | string>(name: T, bufferOrReader: TLReader | Uint8Array): Promise<T extends keyof Types ? Types[T] : DeserializedType>;
export declare const GZIP_PACKED = 812830625;
export declare const RPC_RESULT = 4082920705;
export declare function serializeTelegramObject(object: AnyObject): Uint8Array;
//# sourceMappingURL=2_telegram.d.ts.map