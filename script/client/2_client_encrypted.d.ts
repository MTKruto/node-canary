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
import { Api } from "../2_tl.js";
import { DC } from "../3_transport.js";
import { SessionEncrypted } from "../4_session.js";
import { ClientAbstract } from "./0_client_abstract.js";
import { ClientPlainParams } from "./1_client_plain.js";
export interface ClientEncryptedParams extends ClientPlainParams {
    /** The app_version parameter to be passed to initConnection. It is recommended that this parameter is changed if users are authorized. Defaults to _MTKruto_. */
    appVersion?: string;
    /** The device_version parameter to be passed to initConnection. The default varies by the current runtime. */
    deviceModel?: string;
    /** The lang_pack parameter to be passed to initConnection. Defaults to the runtime's language or `"en"`. */
    langCode?: string;
    /** The lang_pack parameter to be passed to initConnection. Defaults to an empty string. */
    langPack?: string;
    /** The system_lang_code parameter to be passed to initConnection. Defaults to the runtime's language or `"en"`. */
    systemLangCode?: string;
    /** The system_version parameter to be passed to initConnection. The default varies by the current runtime. */
    systemVersion?: string;
    /** Whether to disable receiving updates. Defaults to `false`. */
    disableUpdates?: boolean;
}
export interface ClientEncryptedHandlers {
    onNewServerSalt?: (newServerSalt: bigint) => void;
    onUpdate?: (update: Api.Updates | Api.Update) => void;
    onDeserializationError?: () => void;
}
export declare class ClientEncrypted extends ClientAbstract {
    #private;
    handlers: ClientEncryptedHandlers;
    session: SessionEncrypted;
    constructor(dc: DC, apiId: number, params?: ClientEncryptedParams);
    connect(): Promise<void>;
    disconnect(): void;
    get authKey(): Uint8Array;
    setAuthKey(authKey: Uint8Array<ArrayBuffer>): Promise<void>;
    lastRequest?: Date;
    invoke<T extends Api.AnyFunction, R = T extends Api.AnyGenericFunction<infer X> ? Api.ReturnType<X> : T["_"] extends keyof Api.Functions ? Api.ReturnType<T> extends never ? Api.ReturnType<Api.Functions[T["_"]]> : never : never>(function_: T): Promise<R>;
}
//# sourceMappingURL=2_client_encrypted.d.ts.map