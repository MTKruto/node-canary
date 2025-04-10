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
import { Mtproto } from "../2_tl.js";
import { DC } from "../3_transport.js";
import { PublicKeys } from "../4_constants.js";
import { SessionParams, SessionPlain } from "../4_session.js";
import { ClientAbstract } from "./0_client_abstract.js";
export interface ClientPlainParams extends SessionParams {
    /**
     * MTProto public keys to use in the `[keyId, [key, exponent]][]` format. Don't set this unless you know what you are doing. Defaults to Telegram servers' public keys.
     */
    publicKeys?: PublicKeys;
}
/**
 * An MTProto client for making plain connections. Most users won't need to interact with this. Used internally for creating authorization keys.
 */
export declare class ClientPlain extends ClientAbstract implements ClientAbstract {
    #private;
    session: SessionPlain;
    constructor(dc: DC, params?: ClientPlainParams);
    invoke<T extends Mtproto.AnyObject, R = T["_"] extends keyof Mtproto.Functions ? Mtproto.ReturnType<T> extends never ? Mtproto.ReturnType<Mtproto.Functions[T["_"]]> : never : never>(function_: T): Promise<R>;
    createAuthKey(): Promise<[Uint8Array<ArrayBuffer>, bigint]>;
}
//# sourceMappingURL=1_client_plain.d.ts.map