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
// deno-fmt-ignore-file
import { id, params, TLObject, paramDesc, flags, name } from "./1_tl_object.js";
import { types } from "./2_types.js";
export class Function_ extends TLObject {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "__R", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
export class req_pq_multi_ extends Function_ {
    get [id]() {
        return 0xBE7E8EF1;
    }
    static get [name]() {
        return "req_pq_multi";
    }
    static get [paramDesc]() {
        return [
            ["nonce", "bigint", "int128"],
        ];
    }
    get [params]() {
        return [
            [this.nonce, "bigint", "int128"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "nonce", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nonce = params.nonce;
    }
}
export class req_DH_params_ extends Function_ {
    get [id]() {
        return 0xD712E4BE;
    }
    static get [name]() {
        return "req_DH_params";
    }
    static get [paramDesc]() {
        return [
            ["nonce", "bigint", "int128"],
            ["server_nonce", "bigint", "int128"],
            ["p", Uint8Array, "bytes"],
            ["q", Uint8Array, "bytes"],
            ["public_key_fingerprint", "bigint", "long"],
            ["encrypted_data", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.nonce, "bigint", "int128"],
            [this.server_nonce, "bigint", "int128"],
            [this.p, Uint8Array, "bytes"],
            [this.q, Uint8Array, "bytes"],
            [this.public_key_fingerprint, "bigint", "long"],
            [this.encrypted_data, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "nonce", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "server_nonce", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "p", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "q", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "public_key_fingerprint", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "encrypted_data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nonce = params.nonce;
        this.server_nonce = params.server_nonce;
        this.p = params.p;
        this.q = params.q;
        this.public_key_fingerprint = params.public_key_fingerprint;
        this.encrypted_data = params.encrypted_data;
    }
}
export class set_client_DH_params_ extends Function_ {
    get [id]() {
        return 0xF5045F1F;
    }
    static get [name]() {
        return "set_client_DH_params";
    }
    static get [paramDesc]() {
        return [
            ["nonce", "bigint", "int128"],
            ["server_nonce", "bigint", "int128"],
            ["encrypted_data", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.nonce, "bigint", "int128"],
            [this.server_nonce, "bigint", "int128"],
            [this.encrypted_data, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "nonce", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "server_nonce", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "encrypted_data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nonce = params.nonce;
        this.server_nonce = params.server_nonce;
        this.encrypted_data = params.encrypted_data;
    }
}
export class rpc_drop_answer_ extends Function_ {
    get [id]() {
        return 0x58E4A740;
    }
    static get [name]() {
        return "rpc_drop_answer";
    }
    static get [paramDesc]() {
        return [
            ["req_msg_id", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.req_msg_id, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "req_msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.req_msg_id = params.req_msg_id;
    }
}
export class get_future_salts_ extends Function_ {
    get [id]() {
        return 0xB921BD04;
    }
    static get [name]() {
        return "get_future_salts";
    }
    static get [paramDesc]() {
        return [
            ["num", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.num, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "num", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.num = params.num;
    }
}
export class ping_ extends Function_ {
    get [id]() {
        return 0x7ABE77EC;
    }
    static get [name]() {
        return "ping";
    }
    static get [paramDesc]() {
        return [
            ["ping_id", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.ping_id, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "ping_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.ping_id = params.ping_id;
    }
}
export class ping_delay_disconnect_ extends Function_ {
    get [id]() {
        return 0xF3427B8C;
    }
    static get [name]() {
        return "ping_delay_disconnect";
    }
    static get [paramDesc]() {
        return [
            ["ping_id", "bigint", "long"],
            ["disconnect_delay", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.ping_id, "bigint", "long"],
            [this.disconnect_delay, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "ping_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "disconnect_delay", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.ping_id = params.ping_id;
        this.disconnect_delay = params.disconnect_delay;
    }
}
export class destroy_session_ extends Function_ {
    get [id]() {
        return 0xE7512126;
    }
    static get [name]() {
        return "destroy_session";
    }
    static get [paramDesc]() {
        return [
            ["session_id", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.session_id, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "session_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.session_id = params.session_id;
    }
}
export class destroy_auth_key_ extends Function_ {
    get [id]() {
        return 0xD1435160;
    }
    static get [name]() {
        return "destroy_auth_key";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
export class invokeWithBusinessConnectionPrefix_ extends Function_ {
    get [id]() {
        return 0xDD289F8E;
    }
    static get [name]() {
        return "invokeWithBusinessConnectionPrefix";
    }
    static get [paramDesc]() {
        return [
            ["connection_id", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.connection_id, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "connection_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.connection_id = params.connection_id;
    }
}
/** Invokes a query after successful completion of one of the previous queries. */
export class invokeAfterMsg_ extends Function_ {
    get [id]() {
        return 0xCB9F372D;
    }
    static get [name]() {
        return "invokeAfterMsg";
    }
    static get [paramDesc]() {
        return [
            ["msg_id", "bigint", "long"],
            ["query", types["TypeX"], "!X"],
        ];
    }
    get [params]() {
        return [
            [this.msg_id, "bigint", "long"],
            [this.query, types.TypeX, "!X"],
        ];
    }
    constructor(params) {
        super();
        /** Message identifier on which a current query depends */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The query itself */
        Object.defineProperty(this, "query", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.msg_id = params.msg_id;
        this.query = params.query;
    }
}
/** Invokes a query after a successful completion of previous queries */
export class invokeAfterMsgs_ extends Function_ {
    get [id]() {
        return 0x3DC4B4F0;
    }
    static get [name]() {
        return "invokeAfterMsgs";
    }
    static get [paramDesc]() {
        return [
            ["msg_ids", ["bigint"], "Vector<long>"],
            ["query", types["TypeX"], "!X"],
        ];
    }
    get [params]() {
        return [
            [this.msg_ids, ["bigint"], "Vector<long>"],
            [this.query, types.TypeX, "!X"],
        ];
    }
    constructor(params) {
        super();
        /** List of messages on which a current query depends */
        Object.defineProperty(this, "msg_ids", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The query itself */
        Object.defineProperty(this, "query", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.msg_ids = params.msg_ids;
        this.query = params.query;
    }
}
/** Initialize connection */
export class initConnection_ extends Function_ {
    get [id]() {
        return 0xC1CD5EA9;
    }
    static get [name]() {
        return "initConnection";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["api_id", "number", "int"],
            ["device_model", "string", "string"],
            ["system_version", "string", "string"],
            ["app_version", "string", "string"],
            ["system_lang_code", "string", "string"],
            ["lang_pack", "string", "string"],
            ["lang_code", "string", "string"],
            ["proxy", types._InputClientProxy, "flags.0?InputClientProxy"],
            ["params", types._JSONValue, "flags.1?JSONValue"],
            ["query", types["TypeX"], "!X"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.api_id, "number", "int"],
            [this.device_model, "string", "string"],
            [this.system_version, "string", "string"],
            [this.app_version, "string", "string"],
            [this.system_lang_code, "string", "string"],
            [this.lang_pack, "string", "string"],
            [this.lang_code, "string", "string"],
            [this.proxy ?? null, types._InputClientProxy, "flags.0?InputClientProxy"],
            [this.params ?? null, types._JSONValue, "flags.1?JSONValue"],
            [this.query, types.TypeX, "!X"],
        ];
    }
    constructor(params) {
        super();
        /** Application identifier (see. [App configuration](https://core.telegram.org/myapp)) */
        Object.defineProperty(this, "api_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Device model */
        Object.defineProperty(this, "device_model", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Operation system version */
        Object.defineProperty(this, "system_version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Application version */
        Object.defineProperty(this, "app_version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Code for the language used on the device's OS, ISO 639-1 standard */
        Object.defineProperty(this, "system_lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Language pack to use */
        Object.defineProperty(this, "lang_pack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Code for the language used on the client, ISO 639-1 standard */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Info about an MTProto proxy */
        Object.defineProperty(this, "proxy", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Additional initConnection parameters.
        For now, only the `tz_offset` field is supported, for specifying timezone offset in seconds. */
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The query itself */
        Object.defineProperty(this, "query", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.api_id = params.api_id;
        this.device_model = params.device_model;
        this.system_version = params.system_version;
        this.app_version = params.app_version;
        this.system_lang_code = params.system_lang_code;
        this.lang_pack = params.lang_pack;
        this.lang_code = params.lang_code;
        this.proxy = params.proxy;
        this.params = params.params;
        this.query = params.query;
    }
}
/** Invoke the specified query using the specified API [layer](https://core.telegram.org/api/invoking#layers) */
export class invokeWithLayer_ extends Function_ {
    get [id]() {
        return 0xDA9B0D0D;
    }
    static get [name]() {
        return "invokeWithLayer";
    }
    static get [paramDesc]() {
        return [
            ["layer", "number", "int"],
            ["query", types["TypeX"], "!X"],
        ];
    }
    get [params]() {
        return [
            [this.layer, "number", "int"],
            [this.query, types.TypeX, "!X"],
        ];
    }
    constructor(params) {
        super();
        /** The layer to use */
        Object.defineProperty(this, "layer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The query */
        Object.defineProperty(this, "query", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.layer = params.layer;
        this.query = params.query;
    }
}
/** Invoke a request without subscribing the used connection for [updates](https://core.telegram.org/api/updates) (this is enabled by default for [file queries](https://core.telegram.org/api/files)). */
export class invokeWithoutUpdates_ extends Function_ {
    get [id]() {
        return 0xBF9459B7;
    }
    static get [name]() {
        return "invokeWithoutUpdates";
    }
    static get [paramDesc]() {
        return [
            ["query", types["TypeX"], "!X"],
        ];
    }
    get [params]() {
        return [
            [this.query, types.TypeX, "!X"],
        ];
    }
    constructor(params) {
        super();
        /** The query */
        Object.defineProperty(this, "query", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.query = params.query;
    }
}
/** Invoke with the given message range */
export class invokeWithMessagesRange_ extends Function_ {
    get [id]() {
        return 0x365275F2;
    }
    static get [name]() {
        return "invokeWithMessagesRange";
    }
    static get [paramDesc]() {
        return [
            ["range", types._MessageRange, "MessageRange"],
            ["query", types["TypeX"], "!X"],
        ];
    }
    get [params]() {
        return [
            [this.range, types._MessageRange, "MessageRange"],
            [this.query, types.TypeX, "!X"],
        ];
    }
    constructor(params) {
        super();
        /** Message range */
        Object.defineProperty(this, "range", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Query */
        Object.defineProperty(this, "query", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.range = params.range;
        this.query = params.query;
    }
}
/** Invoke a method within a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export class invokeWithTakeout_ extends Function_ {
    get [id]() {
        return 0xACA9FD2E;
    }
    static get [name]() {
        return "invokeWithTakeout";
    }
    static get [paramDesc]() {
        return [
            ["takeout_id", "bigint", "long"],
            ["query", types["TypeX"], "!X"],
        ];
    }
    get [params]() {
        return [
            [this.takeout_id, "bigint", "long"],
            [this.query, types.TypeX, "!X"],
        ];
    }
    constructor(params) {
        super();
        /** [Takeout session ID »](https://core.telegram.org/api/takeout) */
        Object.defineProperty(this, "takeout_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Query */
        Object.defineProperty(this, "query", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.takeout_id = params.takeout_id;
        this.query = params.query;
    }
}
export class invokeWithBusinessConnection_ extends Function_ {
    get [id]() {
        return 0xDD289F8E;
    }
    static get [name]() {
        return "invokeWithBusinessConnection";
    }
    static get [paramDesc]() {
        return [
            ["connection_id", "string", "string"],
            ["query", types["TypeX"], "!X"],
        ];
    }
    get [params]() {
        return [
            [this.connection_id, "string", "string"],
            [this.query, types.TypeX, "!X"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "connection_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "query", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.connection_id = params.connection_id;
        this.query = params.query;
    }
}
/** Send the verification code for login */
export class auth_sendCode_ extends Function_ {
    get [id]() {
        return 0xA677244F;
    }
    static get [name]() {
        return "auth.sendCode";
    }
    static get [paramDesc]() {
        return [
            ["phone_number", "string", "string"],
            ["api_id", "number", "int"],
            ["api_hash", "string", "string"],
            ["settings", types._CodeSettings, "CodeSettings"],
        ];
    }
    get [params]() {
        return [
            [this.phone_number, "string", "string"],
            [this.api_id, "number", "int"],
            [this.api_hash, "string", "string"],
            [this.settings, types._CodeSettings, "CodeSettings"],
        ];
    }
    constructor(params) {
        super();
        /** Phone number in international format */
        Object.defineProperty(this, "phone_number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Application identifier (see [App configuration](https://core.telegram.org/myapp)) */
        Object.defineProperty(this, "api_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Application secret hash (see [App configuration](https://core.telegram.org/myapp)) */
        Object.defineProperty(this, "api_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Settings for the code type to send */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phone_number = params.phone_number;
        this.api_id = params.api_id;
        this.api_hash = params.api_hash;
        this.settings = params.settings;
    }
}
/** Registers a validated phone number in the system. */
export class auth_signUp_ extends Function_ {
    get [id]() {
        return 0xAAC7B717;
    }
    static get [name]() {
        return "auth.signUp";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["no_joined_notifications", "true", "flags.0?true"],
            ["phone_number", "string", "string"],
            ["phone_code_hash", "string", "string"],
            ["first_name", "string", "string"],
            ["last_name", "string", "string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.no_joined_notifications ?? null, "true", "flags.0?true"],
            [this.phone_number, "string", "string"],
            [this.phone_code_hash, "string", "string"],
            [this.first_name, "string", "string"],
            [this.last_name, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "no_joined_notifications", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone number in the international format */
        Object.defineProperty(this, "phone_number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** SMS-message ID */
        Object.defineProperty(this, "phone_code_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New user first name */
        Object.defineProperty(this, "first_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New user last name */
        Object.defineProperty(this, "last_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.no_joined_notifications = params.no_joined_notifications;
        this.phone_number = params.phone_number;
        this.phone_code_hash = params.phone_code_hash;
        this.first_name = params.first_name;
        this.last_name = params.last_name;
    }
}
/** Signs in a user with a validated phone number. */
export class auth_signIn_ extends Function_ {
    get [id]() {
        return 0x8D52A951;
    }
    static get [name]() {
        return "auth.signIn";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["phone_number", "string", "string"],
            ["phone_code_hash", "string", "string"],
            ["phone_code", "string", "flags.0?string"],
            ["email_verification", types._EmailVerification, "flags.1?EmailVerification"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.phone_number, "string", "string"],
            [this.phone_code_hash, "string", "string"],
            [this.phone_code ?? null, "string", "flags.0?string"],
            [this.email_verification ?? null, types._EmailVerification, "flags.1?EmailVerification"],
        ];
    }
    constructor(params) {
        super();
        /** Phone number in the international format */
        Object.defineProperty(this, "phone_number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** SMS-message ID, obtained from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) */
        Object.defineProperty(this, "phone_code_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Valid numerical code from the SMS-message */
        Object.defineProperty(this, "phone_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Email verification code or token */
        Object.defineProperty(this, "email_verification", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phone_number = params.phone_number;
        this.phone_code_hash = params.phone_code_hash;
        this.phone_code = params.phone_code;
        this.email_verification = params.email_verification;
    }
}
/** Logs out the user. */
export class auth_logOut_ extends Function_ {
    get [id]() {
        return 0x3E72BA19;
    }
    static get [name]() {
        return "auth.logOut";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Terminates all user's authorized sessions except for the current one. */
export class auth_resetAuthorizations_ extends Function_ {
    get [id]() {
        return 0x9FAB0D1A;
    }
    static get [name]() {
        return "auth.resetAuthorizations";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Returns data for copying authorization to another data-center. */
export class auth_exportAuthorization_ extends Function_ {
    get [id]() {
        return 0xE5BFFFCD;
    }
    static get [name]() {
        return "auth.exportAuthorization";
    }
    static get [paramDesc]() {
        return [
            ["dc_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.dc_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Number of a target data-center */
        Object.defineProperty(this, "dc_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.dc_id = params.dc_id;
    }
}
/** Logs in a user using a key transmitted from his native data-center. */
export class auth_importAuthorization_ extends Function_ {
    get [id]() {
        return 0xA57A7DAD;
    }
    static get [name]() {
        return "auth.importAuthorization";
    }
    static get [paramDesc]() {
        return [
            ["id", "bigint", "long"],
            ["bytes", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.id, "bigint", "long"],
            [this.bytes, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** User ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Authorization key */
        Object.defineProperty(this, "bytes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
        this.bytes = params.bytes;
    }
}
/** Binds a temporary authorization key `temp_auth_key_id` to the permanent authorization key `perm_auth_key_id`. Each permanent key may only be bound to one temporary key at a time, binding a new temporary key overwrites the previous one. */
export class auth_bindTempAuthKey_ extends Function_ {
    get [id]() {
        return 0xCDD42A05;
    }
    static get [name]() {
        return "auth.bindTempAuthKey";
    }
    static get [paramDesc]() {
        return [
            ["perm_auth_key_id", "bigint", "long"],
            ["nonce", "bigint", "long"],
            ["expires_at", "number", "int"],
            ["encrypted_message", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.perm_auth_key_id, "bigint", "long"],
            [this.nonce, "bigint", "long"],
            [this.expires_at, "number", "int"],
            [this.encrypted_message, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** Permanent auth\_key\_id to bind to */
        Object.defineProperty(this, "perm_auth_key_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Random long from [Binding message contents](#binding-message-contents) */
        Object.defineProperty(this, "nonce", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unix timestamp to invalidate temporary key, see [Binding message contents](#binding-message-contents) */
        Object.defineProperty(this, "expires_at", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** See [Generating encrypted\_message](#generating-encrypted-message) */
        Object.defineProperty(this, "encrypted_message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.perm_auth_key_id = params.perm_auth_key_id;
        this.nonce = params.nonce;
        this.expires_at = params.expires_at;
        this.encrypted_message = params.encrypted_message;
    }
}
/** Login as a bot */
export class auth_importBotAuthorization_ extends Function_ {
    get [id]() {
        return 0x67A3FF2C;
    }
    static get [name]() {
        return "auth.importBotAuthorization";
    }
    static get [paramDesc]() {
        return [
            ["flags", "number", "int"],
            ["api_id", "number", "int"],
            ["api_hash", "string", "string"],
            ["bot_auth_token", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.flags, "number", "int"],
            [this.api_id, "number", "int"],
            [this.api_hash, "string", "string"],
            [this.bot_auth_token, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Reserved for future use */
        Object.defineProperty(this, "flags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Application identifier (see. [App configuration](https://core.telegram.org/myapp)) */
        Object.defineProperty(this, "api_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Application identifier hash (see. [App configuration](https://core.telegram.org/myapp)) */
        Object.defineProperty(this, "api_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Bot token (see [bots](https://core.telegram.org/bots)) */
        Object.defineProperty(this, "bot_auth_token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.flags = params.flags;
        this.api_id = params.api_id;
        this.api_hash = params.api_hash;
        this.bot_auth_token = params.bot_auth_token;
    }
}
/** Try logging to an account protected by a [2FA password](https://core.telegram.org/api/srp). */
export class auth_checkPassword_ extends Function_ {
    get [id]() {
        return 0xD18B4D16;
    }
    static get [name]() {
        return "auth.checkPassword";
    }
    static get [paramDesc]() {
        return [
            ["password", types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
        ];
    }
    get [params]() {
        return [
            [this.password, types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
        ];
    }
    constructor(params) {
        super();
        /** The account's password (see [SRP](https://core.telegram.org/api/srp)) */
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.password = params.password;
    }
}
/** Request recovery code of a [2FA password](https://core.telegram.org/api/srp), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp#email-verification). */
export class auth_requestPasswordRecovery_ extends Function_ {
    get [id]() {
        return 0xD897BC66;
    }
    static get [name]() {
        return "auth.requestPasswordRecovery";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Reset the [2FA password](https://core.telegram.org/api/srp) using the recovery code sent using [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery). */
export class auth_recoverPassword_ extends Function_ {
    get [id]() {
        return 0x37096C70;
    }
    static get [name]() {
        return "auth.recoverPassword";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["code", "string", "string"],
            ["new_settings", types._account_PasswordInputSettings, "flags.0?account.PasswordInputSettings"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.code, "string", "string"],
            [this.new_settings ?? null, types._account_PasswordInputSettings, "flags.0?account.PasswordInputSettings"],
        ];
    }
    constructor(params) {
        super();
        /** Code received via email */
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New password */
        Object.defineProperty(this, "new_settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = params.code;
        this.new_settings = params.new_settings;
    }
}
/** Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](https://core.telegram.org/api/auth) for more info. */
export class auth_resendCode_ extends Function_ {
    get [id]() {
        return 0x3EF1A9BF;
    }
    static get [name]() {
        return "auth.resendCode";
    }
    static get [paramDesc]() {
        return [
            ["phone_number", "string", "string"],
            ["phone_code_hash", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.phone_number, "string", "string"],
            [this.phone_code_hash, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The phone number */
        Object.defineProperty(this, "phone_number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The phone code hash obtained from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) */
        Object.defineProperty(this, "phone_code_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phone_number = params.phone_number;
        this.phone_code_hash = params.phone_code_hash;
    }
}
/** Cancel the login verification code */
export class auth_cancelCode_ extends Function_ {
    get [id]() {
        return 0x1F040578;
    }
    static get [name]() {
        return "auth.cancelCode";
    }
    static get [paramDesc]() {
        return [
            ["phone_number", "string", "string"],
            ["phone_code_hash", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.phone_number, "string", "string"],
            [this.phone_code_hash, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Phone number */
        Object.defineProperty(this, "phone_number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone code hash from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) */
        Object.defineProperty(this, "phone_code_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phone_number = params.phone_number;
        this.phone_code_hash = params.phone_code_hash;
    }
}
/** Delete all temporary authorization keys **except for** the ones specified */
export class auth_dropTempAuthKeys_ extends Function_ {
    get [id]() {
        return 0x8E48A188;
    }
    static get [name]() {
        return "auth.dropTempAuthKeys";
    }
    static get [paramDesc]() {
        return [
            ["except_auth_keys", ["bigint"], "Vector<long>"],
        ];
    }
    get [params]() {
        return [
            [this.except_auth_keys, ["bigint"], "Vector<long>"],
        ];
    }
    constructor(params) {
        super();
        /** The auth keys that **shouldn't** be dropped. */
        Object.defineProperty(this, "except_auth_keys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.except_auth_keys = params.except_auth_keys;
    }
}
/** Generate a login token, for [login via QR code](https://core.telegram.org/api/qr-login).
The generated login token should be encoded using base64url, then shown as a `tg://login?token=base64encodedtoken` [deep link »](https://core.telegram.org/api/links#qr-code-login-links) in the QR code. */
export class auth_exportLoginToken_ extends Function_ {
    get [id]() {
        return 0xB7E085FE;
    }
    static get [name]() {
        return "auth.exportLoginToken";
    }
    static get [paramDesc]() {
        return [
            ["api_id", "number", "int"],
            ["api_hash", "string", "string"],
            ["except_ids", ["bigint"], "Vector<long>"],
        ];
    }
    get [params]() {
        return [
            [this.api_id, "number", "int"],
            [this.api_hash, "string", "string"],
            [this.except_ids, ["bigint"], "Vector<long>"],
        ];
    }
    constructor(params) {
        super();
        /** Application identifier (see. [App configuration](https://core.telegram.org/myapp)) */
        Object.defineProperty(this, "api_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Application identifier hash (see. [App configuration](https://core.telegram.org/myapp)) */
        Object.defineProperty(this, "api_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** List of already logged-in user IDs, to prevent logging in twice with the same user */
        Object.defineProperty(this, "except_ids", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.api_id = params.api_id;
        this.api_hash = params.api_hash;
        this.except_ids = params.except_ids;
    }
}
/** Login using a redirected login token, generated in case of DC mismatch during [QR code login](https://core.telegram.org/api/qr-login). */
export class auth_importLoginToken_ extends Function_ {
    get [id]() {
        return 0x95AC5CE4;
    }
    static get [name]() {
        return "auth.importLoginToken";
    }
    static get [paramDesc]() {
        return [
            ["token", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.token, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** Login token */
        Object.defineProperty(this, "token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.token = params.token;
    }
}
/** Accept QR code login token, logging in the app that generated it. */
export class auth_acceptLoginToken_ extends Function_ {
    get [id]() {
        return 0xE894AD4D;
    }
    static get [name]() {
        return "auth.acceptLoginToken";
    }
    static get [paramDesc]() {
        return [
            ["token", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.token, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** Login token embedded in QR code, for more info, see [login via QR code](https://core.telegram.org/api/qr-login). */
        Object.defineProperty(this, "token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.token = params.token;
    }
}
/** Check if the [2FA recovery code](https://core.telegram.org/api/srp) sent using [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery) is valid, before passing it to [auth.recoverPassword](https://core.telegram.org/method/auth.recoverPassword). */
export class auth_checkRecoveryPassword_ extends Function_ {
    get [id]() {
        return 0x0D36BF79;
    }
    static get [name]() {
        return "auth.checkRecoveryPassword";
    }
    static get [paramDesc]() {
        return [
            ["code", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.code, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Code received via email */
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = params.code;
    }
}
/** Login by importing an authorization token */
export class auth_importWebTokenAuthorization_ extends Function_ {
    get [id]() {
        return 0x2DB873A9;
    }
    static get [name]() {
        return "auth.importWebTokenAuthorization";
    }
    static get [paramDesc]() {
        return [
            ["api_id", "number", "int"],
            ["api_hash", "string", "string"],
            ["web_auth_token", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.api_id, "number", "int"],
            [this.api_hash, "string", "string"],
            [this.web_auth_token, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** [API ID](https://core.telegram.org/api/obtaining_api_id) */
        Object.defineProperty(this, "api_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [API hash](https://core.telegram.org/api/obtaining_api_id) */
        Object.defineProperty(this, "api_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The authorization token */
        Object.defineProperty(this, "web_auth_token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.api_id = params.api_id;
        this.api_hash = params.api_hash;
        this.web_auth_token = params.web_auth_token;
    }
}
/** Request an SMS code via Firebase. */
export class auth_requestFirebaseSms_ extends Function_ {
    get [id]() {
        return 0x89464B50;
    }
    static get [name]() {
        return "auth.requestFirebaseSms";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["phone_number", "string", "string"],
            ["phone_code_hash", "string", "string"],
            ["safety_net_token", "string", "flags.0?string"],
            ["ios_push_secret", "string", "flags.1?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.phone_number, "string", "string"],
            [this.phone_code_hash, "string", "string"],
            [this.safety_net_token ?? null, "string", "flags.0?string"],
            [this.ios_push_secret ?? null, "string", "flags.1?string"],
        ];
    }
    constructor(params) {
        super();
        /** Phone number */
        Object.defineProperty(this, "phone_number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone code hash returned by [auth.sendCode](https://core.telegram.org/method/auth.sendCode) */
        Object.defineProperty(this, "phone_code_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** On Android, a JWS object obtained as described in the [auth documentation »](https://core.telegram.org/api/auth) */
        Object.defineProperty(this, "safety_net_token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Secret token received via an apple push notification */
        Object.defineProperty(this, "ios_push_secret", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phone_number = params.phone_number;
        this.phone_code_hash = params.phone_code_hash;
        this.safety_net_token = params.safety_net_token;
        this.ios_push_secret = params.ios_push_secret;
    }
}
/** Reset the [login email »](https://core.telegram.org/api/auth#email-verification). */
export class auth_resetLoginEmail_ extends Function_ {
    get [id]() {
        return 0x7E960193;
    }
    static get [name]() {
        return "auth.resetLoginEmail";
    }
    static get [paramDesc]() {
        return [
            ["phone_number", "string", "string"],
            ["phone_code_hash", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.phone_number, "string", "string"],
            [this.phone_code_hash, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Phone number of the account */
        Object.defineProperty(this, "phone_number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone code hash, obtained as described in the [documentation »](https://core.telegram.org/api/auth) */
        Object.defineProperty(this, "phone_code_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phone_number = params.phone_number;
        this.phone_code_hash = params.phone_code_hash;
    }
}
/** Register device to receive [PUSH notifications](https://core.telegram.org/api/push-updates) */
export class account_registerDevice_ extends Function_ {
    get [id]() {
        return 0xEC86017A;
    }
    static get [name]() {
        return "account.registerDevice";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["no_muted", "true", "flags.0?true"],
            ["token_type", "number", "int"],
            ["token", "string", "string"],
            ["app_sandbox", "boolean", "Bool"],
            ["secret", Uint8Array, "bytes"],
            ["other_uids", ["bigint"], "Vector<long>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.no_muted ?? null, "true", "flags.0?true"],
            [this.token_type, "number", "int"],
            [this.token, "string", "string"],
            [this.app_sandbox, "boolean", "Bool"],
            [this.secret, Uint8Array, "bytes"],
            [this.other_uids, ["bigint"], "Vector<long>"],
        ];
    }
    constructor(params) {
        super();
        /** Avoid receiving (silent and invisible background) notifications. Useful to save battery. */
        Object.defineProperty(this, "no_muted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Device token type, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. */
        Object.defineProperty(this, "token_type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Device token, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. */
        Object.defineProperty(this, "token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If [(boolTrue)](https://core.telegram.org/constructor/boolTrue) is transmitted, a sandbox-certificate will be used during transmission. */
        Object.defineProperty(this, "app_sandbox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** For FCM and APNS VoIP, optional encryption key used to encrypt push notifications */
        Object.defineProperty(this, "secret", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** List of user identifiers of other users currently using the client */
        Object.defineProperty(this, "other_uids", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.no_muted = params.no_muted;
        this.token_type = params.token_type;
        this.token = params.token;
        this.app_sandbox = params.app_sandbox;
        this.secret = params.secret;
        this.other_uids = params.other_uids;
    }
}
/** Deletes a device by its token, stops sending PUSH-notifications to it. */
export class account_unregisterDevice_ extends Function_ {
    get [id]() {
        return 0x6A0D3206;
    }
    static get [name]() {
        return "account.unregisterDevice";
    }
    static get [paramDesc]() {
        return [
            ["token_type", "number", "int"],
            ["token", "string", "string"],
            ["other_uids", ["bigint"], "Vector<long>"],
        ];
    }
    get [params]() {
        return [
            [this.token_type, "number", "int"],
            [this.token, "string", "string"],
            [this.other_uids, ["bigint"], "Vector<long>"],
        ];
    }
    constructor(params) {
        super();
        /** Device token type, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. */
        Object.defineProperty(this, "token_type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Device token, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. */
        Object.defineProperty(this, "token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** List of user identifiers of other users currently using the client */
        Object.defineProperty(this, "other_uids", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.token_type = params.token_type;
        this.token = params.token;
        this.other_uids = params.other_uids;
    }
}
/** Edits notification settings from a given user/group, from all users/all groups. */
export class account_updateNotifySettings_ extends Function_ {
    get [id]() {
        return 0x84BE5B93;
    }
    static get [name]() {
        return "account.updateNotifySettings";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputNotifyPeer, "InputNotifyPeer"],
            ["settings", types._InputPeerNotifySettings, "InputPeerNotifySettings"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputNotifyPeer, "InputNotifyPeer"],
            [this.settings, types._InputPeerNotifySettings, "InputPeerNotifySettings"],
        ];
    }
    constructor(params) {
        super();
        /** Notification source */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Notification settings */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.settings = params.settings;
    }
}
/** Gets current notification settings for a given user/group, from all users/all groups. */
export class account_getNotifySettings_ extends Function_ {
    get [id]() {
        return 0x12B3AD31;
    }
    static get [name]() {
        return "account.getNotifySettings";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputNotifyPeer, "InputNotifyPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputNotifyPeer, "InputNotifyPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Notification source */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Resets all notification settings from users and groups. */
export class account_resetNotifySettings_ extends Function_ {
    get [id]() {
        return 0xDB7E1747;
    }
    static get [name]() {
        return "account.resetNotifySettings";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Updates user profile. */
export class account_updateProfile_ extends Function_ {
    get [id]() {
        return 0x78515775;
    }
    static get [name]() {
        return "account.updateProfile";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["first_name", "string", "flags.0?string"],
            ["last_name", "string", "flags.1?string"],
            ["about", "string", "flags.2?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.first_name ?? null, "string", "flags.0?string"],
            [this.last_name ?? null, "string", "flags.1?string"],
            [this.about ?? null, "string", "flags.2?string"],
        ];
    }
    constructor(params) {
        super();
        /** New user first name */
        Object.defineProperty(this, "first_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New user last name */
        Object.defineProperty(this, "last_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New bio */
        Object.defineProperty(this, "about", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.first_name = params?.first_name;
        this.last_name = params?.last_name;
        this.about = params?.about;
    }
}
/** Updates online user status. */
export class account_updateStatus_ extends Function_ {
    get [id]() {
        return 0x6628562C;
    }
    static get [name]() {
        return "account.updateStatus";
    }
    static get [paramDesc]() {
        return [
            ["offline", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.offline, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** If [(boolTrue)](https://core.telegram.org/constructor/boolTrue) is transmitted, user status will change to [(userStatusOffline)](https://core.telegram.org/constructor/userStatusOffline). */
        Object.defineProperty(this, "offline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.offline = params.offline;
    }
}
/** Returns a list of available [wallpapers](https://core.telegram.org/api/wallpapers). */
export class account_getWallPapers_ extends Function_ {
    get [id]() {
        return 0x07967D36;
    }
    static get [name]() {
        return "account.getWallPapers";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Report a peer for violation of telegram's Terms of Service */
export class account_reportPeer_ extends Function_ {
    get [id]() {
        return 0xC5BA3D86;
    }
    static get [name]() {
        return "account.reportPeer";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["reason", types._ReportReason, "ReportReason"],
            ["message", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.reason, types._ReportReason, "ReportReason"],
            [this.message, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The peer to report */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The reason why this peer is being reported */
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Comment for report moderation */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.reason = params.reason;
        this.message = params.message;
    }
}
/** Validates a username and checks availability. */
export class account_checkUsername_ extends Function_ {
    get [id]() {
        return 0x2714D86C;
    }
    static get [name]() {
        return "account.checkUsername";
    }
    static get [paramDesc]() {
        return [
            ["username", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.username, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** username
        Accepted characters: A-z (case-insensitive), 0-9 and underscores.
        Length: 5-32 characters. */
        Object.defineProperty(this, "username", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.username = params.username;
    }
}
/** Changes username for the current user. */
export class account_updateUsername_ extends Function_ {
    get [id]() {
        return 0x3E0BDD7C;
    }
    static get [name]() {
        return "account.updateUsername";
    }
    static get [paramDesc]() {
        return [
            ["username", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.username, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** username or empty string if username is to be removed
        Accepted characters: a-z (case-insensitive), 0-9 and underscores.
        Length: 5-32 characters. */
        Object.defineProperty(this, "username", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.username = params.username;
    }
}
/** Get privacy settings of current account */
export class account_getPrivacy_ extends Function_ {
    get [id]() {
        return 0xDADBC950;
    }
    static get [name]() {
        return "account.getPrivacy";
    }
    static get [paramDesc]() {
        return [
            ["key", types._InputPrivacyKey, "InputPrivacyKey"],
        ];
    }
    get [params]() {
        return [
            [this.key, types._InputPrivacyKey, "InputPrivacyKey"],
        ];
    }
    constructor(params) {
        super();
        /** Peer category whose privacy settings should be fetched */
        Object.defineProperty(this, "key", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.key = params.key;
    }
}
/** Change privacy settings of current account */
export class account_setPrivacy_ extends Function_ {
    get [id]() {
        return 0xC9F81CE8;
    }
    static get [name]() {
        return "account.setPrivacy";
    }
    static get [paramDesc]() {
        return [
            ["key", types._InputPrivacyKey, "InputPrivacyKey"],
            ["rules", [types._InputPrivacyRule], "Vector<InputPrivacyRule>"],
        ];
    }
    get [params]() {
        return [
            [this.key, types._InputPrivacyKey, "InputPrivacyKey"],
            [this.rules, [types._InputPrivacyRule], "Vector<InputPrivacyRule>"],
        ];
    }
    constructor(params) {
        super();
        /** New privacy rule */
        Object.defineProperty(this, "key", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Peers to which the privacy rule will apply. */
        Object.defineProperty(this, "rules", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.key = params.key;
        this.rules = params.rules;
    }
}
/** Delete the user's account from the telegram servers. */
export class account_deleteAccount_ extends Function_ {
    get [id]() {
        return 0xA2C0CF74;
    }
    static get [name]() {
        return "account.deleteAccount";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["reason", "string", "string"],
            ["password", types._InputCheckPasswordSRP, "flags.0?InputCheckPasswordSRP"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.reason, "string", "string"],
            [this.password ?? null, types._InputCheckPasswordSRP, "flags.0?InputCheckPasswordSRP"],
        ];
    }
    constructor(params) {
        super();
        /** Why is the account being deleted, can be empty */
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [2FA password](https://core.telegram.org/api/srp): this field can be omitted even for accounts with 2FA enabled: in this case account account deletion will be delayed by 7 days [as specified in the docs »](https://core.telegram.org/api/account-deletion) */
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.reason = params.reason;
        this.password = params.password;
    }
}
/** Get days to live of account */
export class account_getAccountTTL_ extends Function_ {
    get [id]() {
        return 0x08FC711D;
    }
    static get [name]() {
        return "account.getAccountTTL";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Set account self-destruction period */
export class account_setAccountTTL_ extends Function_ {
    get [id]() {
        return 0x2442485E;
    }
    static get [name]() {
        return "account.setAccountTTL";
    }
    static get [paramDesc]() {
        return [
            ["ttl", types._AccountDaysTTL, "AccountDaysTTL"],
        ];
    }
    get [params]() {
        return [
            [this.ttl, types._AccountDaysTTL, "AccountDaysTTL"],
        ];
    }
    constructor(params) {
        super();
        /** Time to live in days */
        Object.defineProperty(this, "ttl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.ttl = params.ttl;
    }
}
/** Verify a new phone number to associate to the current account */
export class account_sendChangePhoneCode_ extends Function_ {
    get [id]() {
        return 0x82574AE5;
    }
    static get [name]() {
        return "account.sendChangePhoneCode";
    }
    static get [paramDesc]() {
        return [
            ["phone_number", "string", "string"],
            ["settings", types._CodeSettings, "CodeSettings"],
        ];
    }
    get [params]() {
        return [
            [this.phone_number, "string", "string"],
            [this.settings, types._CodeSettings, "CodeSettings"],
        ];
    }
    constructor(params) {
        super();
        /** New phone number */
        Object.defineProperty(this, "phone_number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone code settings */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phone_number = params.phone_number;
        this.settings = params.settings;
    }
}
/** Change the phone number of the current account */
export class account_changePhone_ extends Function_ {
    get [id]() {
        return 0x70C32EDB;
    }
    static get [name]() {
        return "account.changePhone";
    }
    static get [paramDesc]() {
        return [
            ["phone_number", "string", "string"],
            ["phone_code_hash", "string", "string"],
            ["phone_code", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.phone_number, "string", "string"],
            [this.phone_code_hash, "string", "string"],
            [this.phone_code, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** New phone number */
        Object.defineProperty(this, "phone_number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone code hash received when calling [account.sendChangePhoneCode](https://core.telegram.org/method/account.sendChangePhoneCode) */
        Object.defineProperty(this, "phone_code_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone code received when calling [account.sendChangePhoneCode](https://core.telegram.org/method/account.sendChangePhoneCode) */
        Object.defineProperty(this, "phone_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phone_number = params.phone_number;
        this.phone_code_hash = params.phone_code_hash;
        this.phone_code = params.phone_code;
    }
}
/** When client-side passcode lock feature is enabled, will not show message texts in incoming [PUSH notifications](https://core.telegram.org/api/push-updates). */
export class account_updateDeviceLocked_ extends Function_ {
    get [id]() {
        return 0x38DF3532;
    }
    static get [name]() {
        return "account.updateDeviceLocked";
    }
    static get [paramDesc]() {
        return [
            ["period", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.period, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Inactivity period after which to start hiding message texts in [PUSH notifications](https://core.telegram.org/api/push-updates). */
        Object.defineProperty(this, "period", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.period = params.period;
    }
}
/** Get logged-in sessions */
export class account_getAuthorizations_ extends Function_ {
    get [id]() {
        return 0xE320C158;
    }
    static get [name]() {
        return "account.getAuthorizations";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Log out an active [authorized session](https://core.telegram.org/api/auth) by its hash */
export class account_resetAuthorization_ extends Function_ {
    get [id]() {
        return 0xDF77F3BC;
    }
    static get [name]() {
        return "account.resetAuthorization";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Session hash */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Obtain configuration for two-factor authorization with password */
export class account_getPassword_ extends Function_ {
    get [id]() {
        return 0x548A30F5;
    }
    static get [name]() {
        return "account.getPassword";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on) */
export class account_getPasswordSettings_ extends Function_ {
    get [id]() {
        return 0x9CD4EAF9;
    }
    static get [name]() {
        return "account.getPasswordSettings";
    }
    static get [paramDesc]() {
        return [
            ["password", types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
        ];
    }
    get [params]() {
        return [
            [this.password, types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
        ];
    }
    constructor(params) {
        super();
        /** The password (see [SRP](https://core.telegram.org/api/srp)) */
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.password = params.password;
    }
}
/** Set a new 2FA password */
export class account_updatePasswordSettings_ extends Function_ {
    get [id]() {
        return 0xA59B102F;
    }
    static get [name]() {
        return "account.updatePasswordSettings";
    }
    static get [paramDesc]() {
        return [
            ["password", types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
            ["new_settings", types._account_PasswordInputSettings, "account.PasswordInputSettings"],
        ];
    }
    get [params]() {
        return [
            [this.password, types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
            [this.new_settings, types._account_PasswordInputSettings, "account.PasswordInputSettings"],
        ];
    }
    constructor(params) {
        super();
        /** The old password (see [SRP](https://core.telegram.org/api/srp)) */
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The new password (see [SRP](https://core.telegram.org/api/srp)) */
        Object.defineProperty(this, "new_settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.password = params.password;
        this.new_settings = params.new_settings;
    }
}
/** Send confirmation code to cancel account deletion, for more info [click here »](https://core.telegram.org/api/account-deletion) */
export class account_sendConfirmPhoneCode_ extends Function_ {
    get [id]() {
        return 0x1B3FAA88;
    }
    static get [name]() {
        return "account.sendConfirmPhoneCode";
    }
    static get [paramDesc]() {
        return [
            ["hash", "string", "string"],
            ["settings", types._CodeSettings, "CodeSettings"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "string", "string"],
            [this.settings, types._CodeSettings, "CodeSettings"],
        ];
    }
    constructor(params) {
        super();
        /** The hash from the service notification, for more info [click here »](https://core.telegram.org/api/account-deletion) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone code settings */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
        this.settings = params.settings;
    }
}
/** Confirm a phone number to cancel account deletion, for more info [click here »](https://core.telegram.org/api/account-deletion) */
export class account_confirmPhone_ extends Function_ {
    get [id]() {
        return 0x5F2178C3;
    }
    static get [name]() {
        return "account.confirmPhone";
    }
    static get [paramDesc]() {
        return [
            ["phone_code_hash", "string", "string"],
            ["phone_code", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.phone_code_hash, "string", "string"],
            [this.phone_code, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Phone code hash, for more info [click here »](https://core.telegram.org/api/account-deletion) */
        Object.defineProperty(this, "phone_code_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** SMS code, for more info [click here »](https://core.telegram.org/api/account-deletion) */
        Object.defineProperty(this, "phone_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phone_code_hash = params.phone_code_hash;
        this.phone_code = params.phone_code;
    }
}
/** Get temporary payment password */
export class account_getTmpPassword_ extends Function_ {
    get [id]() {
        return 0x449E0B51;
    }
    static get [name]() {
        return "account.getTmpPassword";
    }
    static get [paramDesc]() {
        return [
            ["password", types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
            ["period", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.password, types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
            [this.period, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** SRP password parameters */
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Time during which the temporary password will be valid, in seconds; should be between 60 and 86400 */
        Object.defineProperty(this, "period", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.password = params.password;
        this.period = params.period;
    }
}
/** Get web [login widget](https://core.telegram.org/widgets/login) authorizations */
export class account_getWebAuthorizations_ extends Function_ {
    get [id]() {
        return 0x182E6D6F;
    }
    static get [name]() {
        return "account.getWebAuthorizations";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Log out an active web [telegram login](https://core.telegram.org/widgets/login) session */
export class account_resetWebAuthorization_ extends Function_ {
    get [id]() {
        return 0x2D01B9EF;
    }
    static get [name]() {
        return "account.resetWebAuthorization";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Session](https://core.telegram.org/constructor/webAuthorization) hash */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Reset all active web [telegram login](https://core.telegram.org/widgets/login) sessions */
export class account_resetWebAuthorizations_ extends Function_ {
    get [id]() {
        return 0x682D2594;
    }
    static get [name]() {
        return "account.resetWebAuthorizations";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get all saved [Telegram Passport](https://core.telegram.org/passport) documents, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
export class account_getAllSecureValues_ extends Function_ {
    get [id]() {
        return 0xB288BC7D;
    }
    static get [name]() {
        return "account.getAllSecureValues";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get saved [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
export class account_getSecureValue_ extends Function_ {
    get [id]() {
        return 0x73665BC2;
    }
    static get [name]() {
        return "account.getSecureValue";
    }
    static get [paramDesc]() {
        return [
            ["types", [types._SecureValueType], "Vector<SecureValueType>"],
        ];
    }
    get [params]() {
        return [
            [this.types, [types._SecureValueType], "Vector<SecureValueType>"],
        ];
    }
    constructor(params) {
        super();
        /** Requested value types */
        Object.defineProperty(this, "types", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.types = params.types;
    }
}
/** Securely save [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
export class account_saveSecureValue_ extends Function_ {
    get [id]() {
        return 0x899FE31D;
    }
    static get [name]() {
        return "account.saveSecureValue";
    }
    static get [paramDesc]() {
        return [
            ["value", types._InputSecureValue, "InputSecureValue"],
            ["secure_secret_id", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.value, types._InputSecureValue, "InputSecureValue"],
            [this.secure_secret_id, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Passport secret hash, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
        Object.defineProperty(this, "secure_secret_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.value = params.value;
        this.secure_secret_id = params.secure_secret_id;
    }
}
/** Delete stored [Telegram Passport](https://core.telegram.org/passport) documents, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
export class account_deleteSecureValue_ extends Function_ {
    get [id]() {
        return 0xB880BC4B;
    }
    static get [name]() {
        return "account.deleteSecureValue";
    }
    static get [paramDesc]() {
        return [
            ["types", [types._SecureValueType], "Vector<SecureValueType>"],
        ];
    }
    get [params]() {
        return [
            [this.types, [types._SecureValueType], "Vector<SecureValueType>"],
        ];
    }
    constructor(params) {
        super();
        /** Document types to delete */
        Object.defineProperty(this, "types", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.types = params.types;
    }
}
/** Returns a Telegram Passport authorization form for sharing data with a service */
export class account_getAuthorizationForm_ extends Function_ {
    get [id]() {
        return 0xA929597A;
    }
    static get [name]() {
        return "account.getAuthorizationForm";
    }
    static get [paramDesc]() {
        return [
            ["bot_id", "bigint", "long"],
            ["scope", "string", "string"],
            ["public_key", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.bot_id, "bigint", "long"],
            [this.scope, "string", "string"],
            [this.public_key, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** User identifier of the service's bot */
        Object.defineProperty(this, "bot_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Telegram Passport element types requested by the service */
        Object.defineProperty(this, "scope", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Service's public key */
        Object.defineProperty(this, "public_key", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot_id = params.bot_id;
        this.scope = params.scope;
        this.public_key = params.public_key;
    }
}
/** Sends a Telegram Passport authorization form, effectively sharing data with the service */
export class account_acceptAuthorization_ extends Function_ {
    get [id]() {
        return 0xF3ED4C73;
    }
    static get [name]() {
        return "account.acceptAuthorization";
    }
    static get [paramDesc]() {
        return [
            ["bot_id", "bigint", "long"],
            ["scope", "string", "string"],
            ["public_key", "string", "string"],
            ["value_hashes", [types._SecureValueHash], "Vector<SecureValueHash>"],
            ["credentials", types._SecureCredentialsEncrypted, "SecureCredentialsEncrypted"],
        ];
    }
    get [params]() {
        return [
            [this.bot_id, "bigint", "long"],
            [this.scope, "string", "string"],
            [this.public_key, "string", "string"],
            [this.value_hashes, [types._SecureValueHash], "Vector<SecureValueHash>"],
            [this.credentials, types._SecureCredentialsEncrypted, "SecureCredentialsEncrypted"],
        ];
    }
    constructor(params) {
        super();
        /** Bot ID */
        Object.defineProperty(this, "bot_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Telegram Passport element types requested by the service */
        Object.defineProperty(this, "scope", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Service's public key */
        Object.defineProperty(this, "public_key", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Types of values sent and their hashes */
        Object.defineProperty(this, "value_hashes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Encrypted values */
        Object.defineProperty(this, "credentials", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot_id = params.bot_id;
        this.scope = params.scope;
        this.public_key = params.public_key;
        this.value_hashes = params.value_hashes;
        this.credentials = params.credentials;
    }
}
/** Send the verification phone code for telegram [passport](https://core.telegram.org/passport). */
export class account_sendVerifyPhoneCode_ extends Function_ {
    get [id]() {
        return 0xA5A356F9;
    }
    static get [name]() {
        return "account.sendVerifyPhoneCode";
    }
    static get [paramDesc]() {
        return [
            ["phone_number", "string", "string"],
            ["settings", types._CodeSettings, "CodeSettings"],
        ];
    }
    get [params]() {
        return [
            [this.phone_number, "string", "string"],
            [this.settings, types._CodeSettings, "CodeSettings"],
        ];
    }
    constructor(params) {
        super();
        /** The phone number to verify */
        Object.defineProperty(this, "phone_number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone code settings */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phone_number = params.phone_number;
        this.settings = params.settings;
    }
}
/** Verify a phone number for telegram [passport](https://core.telegram.org/passport). */
export class account_verifyPhone_ extends Function_ {
    get [id]() {
        return 0x4DD3A7F6;
    }
    static get [name]() {
        return "account.verifyPhone";
    }
    static get [paramDesc]() {
        return [
            ["phone_number", "string", "string"],
            ["phone_code_hash", "string", "string"],
            ["phone_code", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.phone_number, "string", "string"],
            [this.phone_code_hash, "string", "string"],
            [this.phone_code, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Phone number */
        Object.defineProperty(this, "phone_number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone code hash received from the call to [account.sendVerifyPhoneCode](https://core.telegram.org/method/account.sendVerifyPhoneCode) */
        Object.defineProperty(this, "phone_code_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Code received after the call to [account.sendVerifyPhoneCode](https://core.telegram.org/method/account.sendVerifyPhoneCode) */
        Object.defineProperty(this, "phone_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phone_number = params.phone_number;
        this.phone_code_hash = params.phone_code_hash;
        this.phone_code = params.phone_code;
    }
}
/** Send an email verification code. */
export class account_sendVerifyEmailCode_ extends Function_ {
    get [id]() {
        return 0x98E037BB;
    }
    static get [name]() {
        return "account.sendVerifyEmailCode";
    }
    static get [paramDesc]() {
        return [
            ["purpose", types._EmailVerifyPurpose, "EmailVerifyPurpose"],
            ["email", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.purpose, types._EmailVerifyPurpose, "EmailVerifyPurpose"],
            [this.email, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Verification purpose. */
        Object.defineProperty(this, "purpose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The email where to send the code. */
        Object.defineProperty(this, "email", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.purpose = params.purpose;
        this.email = params.email;
    }
}
/** Verify an email address. */
export class account_verifyEmail_ extends Function_ {
    get [id]() {
        return 0x032DA4CF;
    }
    static get [name]() {
        return "account.verifyEmail";
    }
    static get [paramDesc]() {
        return [
            ["purpose", types._EmailVerifyPurpose, "EmailVerifyPurpose"],
            ["verification", types._EmailVerification, "EmailVerification"],
        ];
    }
    get [params]() {
        return [
            [this.purpose, types._EmailVerifyPurpose, "EmailVerifyPurpose"],
            [this.verification, types._EmailVerification, "EmailVerification"],
        ];
    }
    constructor(params) {
        super();
        /** Verification purpose */
        Object.defineProperty(this, "purpose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Email verification code or token */
        Object.defineProperty(this, "verification", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.purpose = params.purpose;
        this.verification = params.verification;
    }
}
/** Initialize a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export class account_initTakeoutSession_ extends Function_ {
    get [id]() {
        return 0x8EF3EAB0;
    }
    static get [name]() {
        return "account.initTakeoutSession";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["contacts", "true", "flags.0?true"],
            ["message_users", "true", "flags.1?true"],
            ["message_chats", "true", "flags.2?true"],
            ["message_megagroups", "true", "flags.3?true"],
            ["message_channels", "true", "flags.4?true"],
            ["files", "true", "flags.5?true"],
            ["file_max_size", "bigint", "flags.5?long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.contacts ?? null, "true", "flags.0?true"],
            [this.message_users ?? null, "true", "flags.1?true"],
            [this.message_chats ?? null, "true", "flags.2?true"],
            [this.message_megagroups ?? null, "true", "flags.3?true"],
            [this.message_channels ?? null, "true", "flags.4?true"],
            [this.files ?? null, "true", "flags.5?true"],
            [this.file_max_size ?? null, "bigint", "flags.5?long"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to export contacts */
        Object.defineProperty(this, "contacts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to export messages in private chats */
        Object.defineProperty(this, "message_users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to export messages in [basic groups](https://core.telegram.org/api/channel#basic-groups) */
        Object.defineProperty(this, "message_chats", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to export messages in [supergroups](https://core.telegram.org/api/channel#supergroups) */
        Object.defineProperty(this, "message_megagroups", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to export messages in [channels](https://core.telegram.org/api/channel#channels) */
        Object.defineProperty(this, "message_channels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to export files */
        Object.defineProperty(this, "files", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum size of files to export */
        Object.defineProperty(this, "file_max_size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contacts = params?.contacts;
        this.message_users = params?.message_users;
        this.message_chats = params?.message_chats;
        this.message_megagroups = params?.message_megagroups;
        this.message_channels = params?.message_channels;
        this.files = params?.files;
        this.file_max_size = params?.file_max_size;
    }
}
/** Terminate a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export class account_finishTakeoutSession_ extends Function_ {
    get [id]() {
        return 0x1D2652EE;
    }
    static get [name]() {
        return "account.finishTakeoutSession";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["success", "true", "flags.0?true"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.success ?? null, "true", "flags.0?true"],
        ];
    }
    constructor(params) {
        super();
        /** Data exported successfully */
        Object.defineProperty(this, "success", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.success = params?.success;
    }
}
/** Verify an email to use as [2FA recovery method](https://core.telegram.org/api/srp). */
export class account_confirmPasswordEmail_ extends Function_ {
    get [id]() {
        return 0x8FDF1920;
    }
    static get [name]() {
        return "account.confirmPasswordEmail";
    }
    static get [paramDesc]() {
        return [
            ["code", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.code, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The phone code that was received after [setting a recovery email](https://core.telegram.org/api/srp#email-verification) */
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = params.code;
    }
}
/** Resend the code to verify an email to use as [2FA recovery method](https://core.telegram.org/api/srp). */
export class account_resendPasswordEmail_ extends Function_ {
    get [id]() {
        return 0x7A7F2A15;
    }
    static get [name]() {
        return "account.resendPasswordEmail";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Cancel the code that was sent to verify an email to use as [2FA recovery method](https://core.telegram.org/api/srp). */
export class account_cancelPasswordEmail_ extends Function_ {
    get [id]() {
        return 0xC1CBD5B6;
    }
    static get [name]() {
        return "account.cancelPasswordEmail";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Whether the user will receive notifications when contacts sign up */
export class account_getContactSignUpNotification_ extends Function_ {
    get [id]() {
        return 0x9F07C728;
    }
    static get [name]() {
        return "account.getContactSignUpNotification";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Toggle contact sign up notifications */
export class account_setContactSignUpNotification_ extends Function_ {
    get [id]() {
        return 0xCFF43F61;
    }
    static get [name]() {
        return "account.setContactSignUpNotification";
    }
    static get [paramDesc]() {
        return [
            ["silent", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.silent, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to disable contact sign up notifications */
        Object.defineProperty(this, "silent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.silent = params.silent;
    }
}
/** Returns list of chats with non-default notification settings */
export class account_getNotifyExceptions_ extends Function_ {
    get [id]() {
        return 0x53577479;
    }
    static get [name]() {
        return "account.getNotifyExceptions";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["compare_sound", "true", "flags.1?true"],
            ["compare_stories", "true", "flags.2?true"],
            ["peer", types._InputNotifyPeer, "flags.0?InputNotifyPeer"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.compare_sound ?? null, "true", "flags.1?true"],
            [this.compare_stories ?? null, "true", "flags.2?true"],
            [this.peer ?? null, types._InputNotifyPeer, "flags.0?InputNotifyPeer"],
        ];
    }
    constructor(params) {
        super();
        /** If set, chats with non-default sound will be returned */
        Object.defineProperty(this, "compare_sound", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, chats with non-default notification settings for stories will be returned */
        Object.defineProperty(this, "compare_stories", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If specified, only chats of the specified category will be returned */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.compare_sound = params?.compare_sound;
        this.compare_stories = params?.compare_stories;
        this.peer = params?.peer;
    }
}
/** Get info about a certain [wallpaper](https://core.telegram.org/api/wallpapers) */
export class account_getWallPaper_ extends Function_ {
    get [id]() {
        return 0xFC8DDBEA;
    }
    static get [name]() {
        return "account.getWallPaper";
    }
    static get [paramDesc]() {
        return [
            ["wallpaper", types._InputWallPaper, "InputWallPaper"],
        ];
    }
    get [params]() {
        return [
            [this.wallpaper, types._InputWallPaper, "InputWallPaper"],
        ];
    }
    constructor(params) {
        super();
        /** The [wallpaper](https://core.telegram.org/api/wallpapers) to get info about */
        Object.defineProperty(this, "wallpaper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.wallpaper = params.wallpaper;
    }
}
/** Create and upload a new [wallpaper](https://core.telegram.org/api/wallpapers) */
export class account_uploadWallPaper_ extends Function_ {
    get [id]() {
        return 0xE39A8F03;
    }
    static get [name]() {
        return "account.uploadWallPaper";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["for_chat", "true", "flags.0?true"],
            ["file", types._InputFile, "InputFile"],
            ["mime_type", "string", "string"],
            ["settings", types._WallPaperSettings, "WallPaperSettings"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.for_chat ?? null, "true", "flags.0?true"],
            [this.file, types._InputFile, "InputFile"],
            [this.mime_type, "string", "string"],
            [this.settings, types._WallPaperSettings, "WallPaperSettings"],
        ];
    }
    constructor(params) {
        super();
        /** Set this flag when uploading wallpapers to be passed to [messages.setChatWallPaper](https://core.telegram.org/method/messages.setChatWallPaper). */
        Object.defineProperty(this, "for_chat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The JPG/PNG wallpaper */
        Object.defineProperty(this, "file", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** MIME type of uploaded wallpaper */
        Object.defineProperty(this, "mime_type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Wallpaper settings */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.for_chat = params.for_chat;
        this.file = params.file;
        this.mime_type = params.mime_type;
        this.settings = params.settings;
    }
}
/** Install/uninstall [wallpaper](https://core.telegram.org/api/wallpapers) */
export class account_saveWallPaper_ extends Function_ {
    get [id]() {
        return 0x6C5A5B37;
    }
    static get [name]() {
        return "account.saveWallPaper";
    }
    static get [paramDesc]() {
        return [
            ["wallpaper", types._InputWallPaper, "InputWallPaper"],
            ["unsave", "boolean", "Bool"],
            ["settings", types._WallPaperSettings, "WallPaperSettings"],
        ];
    }
    get [params]() {
        return [
            [this.wallpaper, types._InputWallPaper, "InputWallPaper"],
            [this.unsave, "boolean", "Bool"],
            [this.settings, types._WallPaperSettings, "WallPaperSettings"],
        ];
    }
    constructor(params) {
        super();
        /** [Wallpaper](https://core.telegram.org/api/wallpapers) to install or uninstall */
        Object.defineProperty(this, "wallpaper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Uninstall wallpaper? */
        Object.defineProperty(this, "unsave", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Wallpaper settings */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.wallpaper = params.wallpaper;
        this.unsave = params.unsave;
        this.settings = params.settings;
    }
}
/** Install [wallpaper](https://core.telegram.org/api/wallpapers) */
export class account_installWallPaper_ extends Function_ {
    get [id]() {
        return 0xFEED5769;
    }
    static get [name]() {
        return "account.installWallPaper";
    }
    static get [paramDesc]() {
        return [
            ["wallpaper", types._InputWallPaper, "InputWallPaper"],
            ["settings", types._WallPaperSettings, "WallPaperSettings"],
        ];
    }
    get [params]() {
        return [
            [this.wallpaper, types._InputWallPaper, "InputWallPaper"],
            [this.settings, types._WallPaperSettings, "WallPaperSettings"],
        ];
    }
    constructor(params) {
        super();
        /** [Wallpaper](https://core.telegram.org/api/wallpapers) to install */
        Object.defineProperty(this, "wallpaper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Wallpaper](https://core.telegram.org/api/wallpapers) settings */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.wallpaper = params.wallpaper;
        this.settings = params.settings;
    }
}
/** Delete all installed [wallpapers](https://core.telegram.org/api/wallpapers), reverting to the default wallpaper set. */
export class account_resetWallPapers_ extends Function_ {
    get [id]() {
        return 0xBB3B9804;
    }
    static get [name]() {
        return "account.resetWallPapers";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get media autodownload settings */
export class account_getAutoDownloadSettings_ extends Function_ {
    get [id]() {
        return 0x56DA0B3F;
    }
    static get [name]() {
        return "account.getAutoDownloadSettings";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Change media autodownload settings */
export class account_saveAutoDownloadSettings_ extends Function_ {
    get [id]() {
        return 0x76F36233;
    }
    static get [name]() {
        return "account.saveAutoDownloadSettings";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["low", "true", "flags.0?true"],
            ["high", "true", "flags.1?true"],
            ["settings", types._AutoDownloadSettings, "AutoDownloadSettings"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.low ?? null, "true", "flags.0?true"],
            [this.high ?? null, "true", "flags.1?true"],
            [this.settings, types._AutoDownloadSettings, "AutoDownloadSettings"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to save media in the low data usage preset */
        Object.defineProperty(this, "low", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to save media in the high data usage preset */
        Object.defineProperty(this, "high", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Media autodownload settings */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.low = params.low;
        this.high = params.high;
        this.settings = params.settings;
    }
}
/** Upload theme */
export class account_uploadTheme_ extends Function_ {
    get [id]() {
        return 0x1C3DB333;
    }
    static get [name]() {
        return "account.uploadTheme";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["file", types._InputFile, "InputFile"],
            ["thumb", types._InputFile, "flags.0?InputFile"],
            ["file_name", "string", "string"],
            ["mime_type", "string", "string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.file, types._InputFile, "InputFile"],
            [this.thumb ?? null, types._InputFile, "flags.0?InputFile"],
            [this.file_name, "string", "string"],
            [this.mime_type, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** [Previously uploaded](https://core.telegram.org/api/themes#uploading-theme-files) theme file with platform-specific colors for UI components, can be left unset when creating themes that only modify the wallpaper or accent colors. */
        Object.defineProperty(this, "file", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Thumbnail */
        Object.defineProperty(this, "thumb", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** File name */
        Object.defineProperty(this, "file_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** MIME type, must be `application/x-tgtheme-{format}`, where `format` depends on the client */
        Object.defineProperty(this, "mime_type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.file = params.file;
        this.thumb = params.thumb;
        this.file_name = params.file_name;
        this.mime_type = params.mime_type;
    }
}
/** Create a theme */
export class account_createTheme_ extends Function_ {
    get [id]() {
        return 0x652E4400;
    }
    static get [name]() {
        return "account.createTheme";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["slug", "string", "string"],
            ["title", "string", "string"],
            ["document", types._InputDocument, "flags.2?InputDocument"],
            ["settings", [types._InputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.slug, "string", "string"],
            [this.title, "string", "string"],
            [this.document ?? null, types._InputDocument, "flags.2?InputDocument"],
            [this.settings ?? null, [types._InputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
        ];
    }
    constructor(params) {
        super();
        /** Unique theme ID used to generate [theme deep links](https://core.telegram.org/api/links#theme-links), can be empty to autogenerate a random ID. */
        Object.defineProperty(this, "slug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Theme name */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Theme file */
        Object.defineProperty(this, "document", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Theme settings, multiple values can be provided for the different base themes (day/night mode, etc). */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.slug = params.slug;
        this.title = params.title;
        this.document = params.document;
        this.settings = params.settings;
    }
}
/** Update theme */
export class account_updateTheme_ extends Function_ {
    get [id]() {
        return 0x2BF40CCC;
    }
    static get [name]() {
        return "account.updateTheme";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["format", "string", "string"],
            ["theme", types._InputTheme, "InputTheme"],
            ["slug", "string", "flags.0?string"],
            ["title", "string", "flags.1?string"],
            ["document", types._InputDocument, "flags.2?InputDocument"],
            ["settings", [types._InputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.format, "string", "string"],
            [this.theme, types._InputTheme, "InputTheme"],
            [this.slug ?? null, "string", "flags.0?string"],
            [this.title ?? null, "string", "flags.1?string"],
            [this.document ?? null, types._InputDocument, "flags.2?InputDocument"],
            [this.settings ?? null, [types._InputThemeSettings], "flags.3?Vector<InputThemeSettings>"],
        ];
    }
    constructor(params) {
        super();
        /** Theme format, a string that identifies the theming engines supported by the client */
        Object.defineProperty(this, "format", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Theme to update */
        Object.defineProperty(this, "theme", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique theme ID */
        Object.defineProperty(this, "slug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Theme name */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Theme file */
        Object.defineProperty(this, "document", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Theme settings */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.format = params.format;
        this.theme = params.theme;
        this.slug = params.slug;
        this.title = params.title;
        this.document = params.document;
        this.settings = params.settings;
    }
}
/** Save a theme */
export class account_saveTheme_ extends Function_ {
    get [id]() {
        return 0xF257106C;
    }
    static get [name]() {
        return "account.saveTheme";
    }
    static get [paramDesc]() {
        return [
            ["theme", types._InputTheme, "InputTheme"],
            ["unsave", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.theme, types._InputTheme, "InputTheme"],
            [this.unsave, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Theme to save */
        Object.defineProperty(this, "theme", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unsave */
        Object.defineProperty(this, "unsave", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.theme = params.theme;
        this.unsave = params.unsave;
    }
}
/** Install a theme */
export class account_installTheme_ extends Function_ {
    get [id]() {
        return 0xC727BB3B;
    }
    static get [name]() {
        return "account.installTheme";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["dark", "true", "flags.0?true"],
            ["theme", types._InputTheme, "flags.1?InputTheme"],
            ["format", "string", "flags.2?string"],
            ["base_theme", types._BaseTheme, "flags.3?BaseTheme"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.dark ?? null, "true", "flags.0?true"],
            [this.theme ?? null, types._InputTheme, "flags.1?InputTheme"],
            [this.format ?? null, "string", "flags.2?string"],
            [this.base_theme ?? null, types._BaseTheme, "flags.3?BaseTheme"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to install the dark version */
        Object.defineProperty(this, "dark", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Theme to install */
        Object.defineProperty(this, "theme", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Theme format, a string that identifies the theming engines supported by the client */
        Object.defineProperty(this, "format", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Indicates a basic theme provided by all clients */
        Object.defineProperty(this, "base_theme", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.dark = params?.dark;
        this.theme = params?.theme;
        this.format = params?.format;
        this.base_theme = params?.base_theme;
    }
}
/** Get theme information */
export class account_getTheme_ extends Function_ {
    get [id]() {
        return 0x3A5869EC;
    }
    static get [name]() {
        return "account.getTheme";
    }
    static get [paramDesc]() {
        return [
            ["format", "string", "string"],
            ["theme", types._InputTheme, "InputTheme"],
        ];
    }
    get [params]() {
        return [
            [this.format, "string", "string"],
            [this.theme, types._InputTheme, "InputTheme"],
        ];
    }
    constructor(params) {
        super();
        /** Theme format, a string that identifies the theming engines supported by the client */
        Object.defineProperty(this, "format", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Theme */
        Object.defineProperty(this, "theme", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.format = params.format;
        this.theme = params.theme;
    }
}
/** Get installed themes */
export class account_getThemes_ extends Function_ {
    get [id]() {
        return 0x7206E458;
    }
    static get [name]() {
        return "account.getThemes";
    }
    static get [paramDesc]() {
        return [
            ["format", "string", "string"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.format, "string", "string"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Theme format, a string that identifies the theming engines supported by the client */
        Object.defineProperty(this, "format", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.format = params.format;
        this.hash = params.hash;
    }
}
/** Set sensitive content settings (for viewing or hiding NSFW content) */
export class account_setContentSettings_ extends Function_ {
    get [id]() {
        return 0xB574B16B;
    }
    static get [name]() {
        return "account.setContentSettings";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["sensitive_enabled", "true", "flags.0?true"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.sensitive_enabled ?? null, "true", "flags.0?true"],
        ];
    }
    constructor(params) {
        super();
        /** Enable NSFW content */
        Object.defineProperty(this, "sensitive_enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sensitive_enabled = params?.sensitive_enabled;
    }
}
/** Get sensitive content settings */
export class account_getContentSettings_ extends Function_ {
    get [id]() {
        return 0x8B9B4DAE;
    }
    static get [name]() {
        return "account.getContentSettings";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get info about multiple [wallpapers](https://core.telegram.org/api/wallpapers) */
export class account_getMultiWallPapers_ extends Function_ {
    get [id]() {
        return 0x65AD71DC;
    }
    static get [name]() {
        return "account.getMultiWallPapers";
    }
    static get [paramDesc]() {
        return [
            ["wallpapers", [types._InputWallPaper], "Vector<InputWallPaper>"],
        ];
    }
    get [params]() {
        return [
            [this.wallpapers, [types._InputWallPaper], "Vector<InputWallPaper>"],
        ];
    }
    constructor(params) {
        super();
        /** [Wallpapers](https://core.telegram.org/api/wallpapers) to fetch info about */
        Object.defineProperty(this, "wallpapers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.wallpapers = params.wallpapers;
    }
}
/** Get global privacy settings */
export class account_getGlobalPrivacySettings_ extends Function_ {
    get [id]() {
        return 0xEB2B4CF6;
    }
    static get [name]() {
        return "account.getGlobalPrivacySettings";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Set global privacy settings */
export class account_setGlobalPrivacySettings_ extends Function_ {
    get [id]() {
        return 0x1EDAAAC2;
    }
    static get [name]() {
        return "account.setGlobalPrivacySettings";
    }
    static get [paramDesc]() {
        return [
            ["settings", types._GlobalPrivacySettings, "GlobalPrivacySettings"],
        ];
    }
    get [params]() {
        return [
            [this.settings, types._GlobalPrivacySettings, "GlobalPrivacySettings"],
        ];
    }
    constructor(params) {
        super();
        /** Global privacy settings */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.settings = params.settings;
    }
}
/** Report a profile photo of a dialog */
export class account_reportProfilePhoto_ extends Function_ {
    get [id]() {
        return 0xFA8CC6F5;
    }
    static get [name]() {
        return "account.reportProfilePhoto";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["photo_id", types._InputPhoto, "InputPhoto"],
            ["reason", types._ReportReason, "ReportReason"],
            ["message", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.photo_id, types._InputPhoto, "InputPhoto"],
            [this.reason, types._ReportReason, "ReportReason"],
            [this.message, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The dialog */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Dialog photo ID */
        Object.defineProperty(this, "photo_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Report reason */
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Comment for report moderation */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.photo_id = params.photo_id;
        this.reason = params.reason;
        this.message = params.message;
    }
}
/** Initiate a 2FA password reset: can only be used if the user is already logged-in, [see here for more info »](https://core.telegram.org/api/srp#password-reset) */
export class account_resetPassword_ extends Function_ {
    get [id]() {
        return 0x9308CE1B;
    }
    static get [name]() {
        return "account.resetPassword";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Abort a pending 2FA password reset, [see here for more info »](https://core.telegram.org/api/srp#password-reset) */
export class account_declinePasswordReset_ extends Function_ {
    get [id]() {
        return 0x4C9409F6;
    }
    static get [name]() {
        return "account.declinePasswordReset";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get all available chat [themes »](https://core.telegram.org/api/themes). */
export class account_getChatThemes_ extends Function_ {
    get [id]() {
        return 0xD638DE89;
    }
    static get [name]() {
        return "account.getChatThemes";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Set time-to-live of current session */
export class account_setAuthorizationTTL_ extends Function_ {
    get [id]() {
        return 0xBF899AA0;
    }
    static get [name]() {
        return "account.setAuthorizationTTL";
    }
    static get [paramDesc]() {
        return [
            ["authorization_ttl_days", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.authorization_ttl_days, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Time-to-live of current session in days */
        Object.defineProperty(this, "authorization_ttl_days", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.authorization_ttl_days = params.authorization_ttl_days;
    }
}
/** Change settings related to a session. */
export class account_changeAuthorizationSettings_ extends Function_ {
    get [id]() {
        return 0x40F48462;
    }
    static get [name]() {
        return "account.changeAuthorizationSettings";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["confirmed", "true", "flags.3?true"],
            ["hash", "bigint", "long"],
            ["encrypted_requests_disabled", "boolean", "flags.0?Bool"],
            ["call_requests_disabled", "boolean", "flags.1?Bool"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.confirmed ?? null, "true", "flags.3?true"],
            [this.hash, "bigint", "long"],
            [this.encrypted_requests_disabled ?? null, "boolean", "flags.0?Bool"],
            [this.call_requests_disabled ?? null, "boolean", "flags.1?Bool"],
        ];
    }
    constructor(params) {
        super();
        /** If set, [confirms a newly logged in session »](https://core.telegram.org/api/auth#confirming-login). */
        Object.defineProperty(this, "confirmed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Session ID from the [authorization](https://core.telegram.org/constructor/authorization) constructor, fetchable using [account.getAuthorizations](https://core.telegram.org/method/account.getAuthorizations) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to enable or disable receiving encrypted chats: if the flag is not set, the previous setting is not changed */
        Object.defineProperty(this, "encrypted_requests_disabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to enable or disable receiving calls: if the flag is not set, the previous setting is not changed */
        Object.defineProperty(this, "call_requests_disabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.confirmed = params.confirmed;
        this.hash = params.hash;
        this.encrypted_requests_disabled = params.encrypted_requests_disabled;
        this.call_requests_disabled = params.call_requests_disabled;
    }
}
/** Fetch saved notification sounds */
export class account_getSavedRingtones_ extends Function_ {
    get [id]() {
        return 0xE1902288;
    }
    static get [name]() {
        return "account.getSavedRingtones";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Save or remove saved notification sound. */
export class account_saveRingtone_ extends Function_ {
    get [id]() {
        return 0x3DEA5B03;
    }
    static get [name]() {
        return "account.saveRingtone";
    }
    static get [paramDesc]() {
        return [
            ["id", types._InputDocument, "InputDocument"],
            ["unsave", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.id, types._InputDocument, "InputDocument"],
            [this.unsave, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Notification sound uploaded using [account.uploadRingtone](https://core.telegram.org/method/account.uploadRingtone) */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to add or delete the notification sound */
        Object.defineProperty(this, "unsave", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
        this.unsave = params.unsave;
    }
}
/** Upload notification sound, use [account.saveRingtone](https://core.telegram.org/method/account.saveRingtone) to convert it and add it to the list of saved notification sounds. */
export class account_uploadRingtone_ extends Function_ {
    get [id]() {
        return 0x831A83A2;
    }
    static get [name]() {
        return "account.uploadRingtone";
    }
    static get [paramDesc]() {
        return [
            ["file", types._InputFile, "InputFile"],
            ["file_name", "string", "string"],
            ["mime_type", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.file, types._InputFile, "InputFile"],
            [this.file_name, "string", "string"],
            [this.mime_type, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Notification sound */
        Object.defineProperty(this, "file", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** File name */
        Object.defineProperty(this, "file_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** MIME type of file */
        Object.defineProperty(this, "mime_type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.file = params.file;
        this.file_name = params.file_name;
        this.mime_type = params.mime_type;
    }
}
/** Set an [emoji status](https://core.telegram.org/api/emoji-status) */
export class account_updateEmojiStatus_ extends Function_ {
    get [id]() {
        return 0xFBD3DE6B;
    }
    static get [name]() {
        return "account.updateEmojiStatus";
    }
    static get [paramDesc]() {
        return [
            ["emoji_status", types._EmojiStatus, "EmojiStatus"],
        ];
    }
    get [params]() {
        return [
            [this.emoji_status, types._EmojiStatus, "EmojiStatus"],
        ];
    }
    constructor(params) {
        super();
        /** [Emoji status](https://core.telegram.org/api/emoji-status) to set */
        Object.defineProperty(this, "emoji_status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.emoji_status = params.emoji_status;
    }
}
/** Get a list of default suggested [emoji statuses](https://core.telegram.org/api/emoji-status) */
export class account_getDefaultEmojiStatuses_ extends Function_ {
    get [id]() {
        return 0xD6753386;
    }
    static get [name]() {
        return "account.getDefaultEmojiStatuses";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Get recently used [emoji statuses](https://core.telegram.org/api/emoji-status) */
export class account_getRecentEmojiStatuses_ extends Function_ {
    get [id]() {
        return 0x0F578105;
    }
    static get [name]() {
        return "account.getRecentEmojiStatuses";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Clears list of recently used [emoji statuses](https://core.telegram.org/api/emoji-status) */
export class account_clearRecentEmojiStatuses_ extends Function_ {
    get [id]() {
        return 0x18201AAE;
    }
    static get [name]() {
        return "account.clearRecentEmojiStatuses";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Reorder usernames associated with the currently logged-in user. */
export class account_reorderUsernames_ extends Function_ {
    get [id]() {
        return 0xEF500EAB;
    }
    static get [name]() {
        return "account.reorderUsernames";
    }
    static get [paramDesc]() {
        return [
            ["order", ["string"], "Vector<string>"],
        ];
    }
    get [params]() {
        return [
            [this.order, ["string"], "Vector<string>"],
        ];
    }
    constructor(params) {
        super();
        /** The new order for active usernames. All active usernames must be specified. */
        Object.defineProperty(this, "order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.order = params.order;
    }
}
/** Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to the currently logged-in user. */
export class account_toggleUsername_ extends Function_ {
    get [id]() {
        return 0x58D6B376;
    }
    static get [name]() {
        return "account.toggleUsername";
    }
    static get [paramDesc]() {
        return [
            ["username", "string", "string"],
            ["active", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.username, "string", "string"],
            [this.active, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Username */
        Object.defineProperty(this, "username", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to activate or deactivate it */
        Object.defineProperty(this, "active", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.username = params.username;
        this.active = params.active;
    }
}
/** Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be [used as profile picture](https://core.telegram.org/api/files#sticker-profile-pictures) */
export class account_getDefaultProfilePhotoEmojis_ extends Function_ {
    get [id]() {
        return 0xE2750328;
    }
    static get [name]() {
        return "account.getDefaultProfilePhotoEmojis";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be [used as group picture](https://core.telegram.org/api/files#sticker-profile-pictures) */
export class account_getDefaultGroupPhotoEmojis_ extends Function_ {
    get [id]() {
        return 0x915860AE;
    }
    static get [name]() {
        return "account.getDefaultGroupPhotoEmojis";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Get autosave settings */
export class account_getAutoSaveSettings_ extends Function_ {
    get [id]() {
        return 0xADCBBCDA;
    }
    static get [name]() {
        return "account.getAutoSaveSettings";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Modify autosave settings */
export class account_saveAutoSaveSettings_ extends Function_ {
    get [id]() {
        return 0xD69B8361;
    }
    static get [name]() {
        return "account.saveAutoSaveSettings";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["users", "true", "flags.0?true"],
            ["chats", "true", "flags.1?true"],
            ["broadcasts", "true", "flags.2?true"],
            ["peer", types._InputPeer, "flags.3?InputPeer"],
            ["settings", types._AutoSaveSettings, "AutoSaveSettings"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.users ?? null, "true", "flags.0?true"],
            [this.chats ?? null, "true", "flags.1?true"],
            [this.broadcasts ?? null, "true", "flags.2?true"],
            [this.peer ?? null, types._InputPeer, "flags.3?InputPeer"],
            [this.settings, types._AutoSaveSettings, "AutoSaveSettings"],
        ];
    }
    constructor(params) {
        super();
        /** Whether the new settings should affect all private chats */
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether the new settings should affect all groups */
        Object.defineProperty(this, "chats", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether the new settings should affect all [channels](https://core.telegram.org/api/channel) */
        Object.defineProperty(this, "broadcasts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether the new settings should affect a specific peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The new autosave settings */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.users = params.users;
        this.chats = params.chats;
        this.broadcasts = params.broadcasts;
        this.peer = params.peer;
        this.settings = params.settings;
    }
}
/** Clear all peer-specific autosave settings. */
export class account_deleteAutoSaveExceptions_ extends Function_ {
    get [id]() {
        return 0x53BC0020;
    }
    static get [name]() {
        return "account.deleteAutoSaveExceptions";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Invalidate the specified login codes, see [here »](https://core.telegram.org/api/auth#invalidating-login-codes) for more info. */
export class account_invalidateSignInCodes_ extends Function_ {
    get [id]() {
        return 0xCA8AE8BA;
    }
    static get [name]() {
        return "account.invalidateSignInCodes";
    }
    static get [paramDesc]() {
        return [
            ["codes", ["string"], "Vector<string>"],
        ];
    }
    get [params]() {
        return [
            [this.codes, ["string"], "Vector<string>"],
        ];
    }
    constructor(params) {
        super();
        /** The login codes to invalidate. */
        Object.defineProperty(this, "codes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.codes = params.codes;
    }
}
/** Update the [accent color and background custom emoji »](https://core.telegram.org/api/colors) of the current account. */
export class account_updateColor_ extends Function_ {
    get [id]() {
        return 0x7CEFA15D;
    }
    static get [name]() {
        return "account.updateColor";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["for_profile", "true", "flags.1?true"],
            ["color", "number", "flags.2?int"],
            ["background_emoji_id", "bigint", "flags.0?long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.for_profile ?? null, "true", "flags.1?true"],
            [this.color ?? null, "number", "flags.2?int"],
            [this.background_emoji_id ?? null, "bigint", "flags.0?long"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to change the accent color emoji pattern of the profile page; otherwise, the accent color and emoji pattern of messages will be changed. */
        Object.defineProperty(this, "for_profile", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [ID of the accent color palette »](https://core.telegram.org/api/colors) to use (not RGB24, see [here »](https://core.telegram.org/api/colors) for more info). */
        Object.defineProperty(this, "color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Custom emoji ID used in the accent color pattern. */
        Object.defineProperty(this, "background_emoji_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.for_profile = params?.for_profile;
        this.color = params?.color;
        this.background_emoji_id = params?.background_emoji_id;
    }
}
/** Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be used in an [accent color pattern](https://core.telegram.org/api/colors). */
export class account_getDefaultBackgroundEmojis_ extends Function_ {
    get [id]() {
        return 0xA60AB9CE;
    }
    static get [name]() {
        return "account.getDefaultBackgroundEmojis";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Get a list of default suggested [channel emoji statuses](https://core.telegram.org/api/emoji-status). */
export class account_getChannelDefaultEmojiStatuses_ extends Function_ {
    get [id]() {
        return 0x7727A7D5;
    }
    static get [name]() {
        return "account.getChannelDefaultEmojiStatuses";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Returns fetch the full list of [custom emoji IDs »](https://core.telegram.org/api/custom-emoji) that cannot be used in [channel emoji statuses »](https://core.telegram.org/api/emoji-status). */
export class account_getChannelRestrictedStatusEmojis_ extends Function_ {
    get [id]() {
        return 0x35A9E0D5;
    }
    static get [name]() {
        return "account.getChannelRestrictedStatusEmojis";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
export class account_updateBusinessWorkHours_ extends Function_ {
    get [id]() {
        return 0x4B00E066;
    }
    static get [name]() {
        return "account.updateBusinessWorkHours";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["business_work_hours", types._BusinessWorkHours, "flags.0?BusinessWorkHours"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.business_work_hours ?? null, types._BusinessWorkHours, "flags.0?BusinessWorkHours"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "business_work_hours", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.business_work_hours = params?.business_work_hours;
    }
}
export class account_updateBusinessLocation_ extends Function_ {
    get [id]() {
        return 0x9E6B131A;
    }
    static get [name]() {
        return "account.updateBusinessLocation";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["geo_point", types._InputGeoPoint, "flags.1?InputGeoPoint"],
            ["address", "string", "flags.0?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.geo_point ?? null, types._InputGeoPoint, "flags.1?InputGeoPoint"],
            [this.address ?? null, "string", "flags.0?string"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "geo_point", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "address", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.geo_point = params?.geo_point;
        this.address = params?.address;
    }
}
export class account_updateBusinessGreetingMessage_ extends Function_ {
    get [id]() {
        return 0x66CDAFC4;
    }
    static get [name]() {
        return "account.updateBusinessGreetingMessage";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["message", types._InputBusinessGreetingMessage, "flags.0?InputBusinessGreetingMessage"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.message ?? null, types._InputBusinessGreetingMessage, "flags.0?InputBusinessGreetingMessage"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.message = params?.message;
    }
}
export class account_updateBusinessAwayMessage_ extends Function_ {
    get [id]() {
        return 0xA26A7FA5;
    }
    static get [name]() {
        return "account.updateBusinessAwayMessage";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["message", types._InputBusinessAwayMessage, "flags.0?InputBusinessAwayMessage"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.message ?? null, types._InputBusinessAwayMessage, "flags.0?InputBusinessAwayMessage"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.message = params?.message;
    }
}
export class account_updateConnectedBot_ extends Function_ {
    get [id]() {
        return 0x43D8521D;
    }
    static get [name]() {
        return "account.updateConnectedBot";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["can_reply", "true", "flags.0?true"],
            ["deleted", "true", "flags.1?true"],
            ["bot", types._InputUser, "InputUser"],
            ["recipients", types._InputBusinessBotRecipients, "InputBusinessBotRecipients"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.can_reply ?? null, "true", "flags.0?true"],
            [this.deleted ?? null, "true", "flags.1?true"],
            [this.bot, types._InputUser, "InputUser"],
            [this.recipients, types._InputBusinessBotRecipients, "InputBusinessBotRecipients"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "can_reply", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deleted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "recipients", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.can_reply = params.can_reply;
        this.deleted = params.deleted;
        this.bot = params.bot;
        this.recipients = params.recipients;
    }
}
export class account_getConnectedBots_ extends Function_ {
    get [id]() {
        return 0x4EA4C80F;
    }
    static get [name]() {
        return "account.getConnectedBots";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
export class account_getBotBusinessConnection_ extends Function_ {
    get [id]() {
        return 0x76A86270;
    }
    static get [name]() {
        return "account.getBotBusinessConnection";
    }
    static get [paramDesc]() {
        return [
            ["connection_id", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.connection_id, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "connection_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.connection_id = params.connection_id;
    }
}
export class account_updateBusinessIntro_ extends Function_ {
    get [id]() {
        return 0xA614D034;
    }
    static get [name]() {
        return "account.updateBusinessIntro";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["intro", types._InputBusinessIntro, "flags.0?InputBusinessIntro"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.intro ?? null, types._InputBusinessIntro, "flags.0?InputBusinessIntro"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "intro", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.intro = params?.intro;
    }
}
export class account_toggleConnectedBotPaused_ extends Function_ {
    get [id]() {
        return 0x646E1097;
    }
    static get [name]() {
        return "account.toggleConnectedBotPaused";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["paused", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.paused, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "paused", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.paused = params.paused;
    }
}
export class account_disablePeerConnectedBot_ extends Function_ {
    get [id]() {
        return 0x5E437ED9;
    }
    static get [name]() {
        return "account.disablePeerConnectedBot";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
export class account_updateBirthday_ extends Function_ {
    get [id]() {
        return 0xCC6E0C11;
    }
    static get [name]() {
        return "account.updateBirthday";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["birthday", types._Birthday, "flags.0?Birthday"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.birthday ?? null, types._Birthday, "flags.0?Birthday"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "birthday", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.birthday = params?.birthday;
    }
}
export class account_createBusinessChatLink_ extends Function_ {
    get [id]() {
        return 0x8851E68E;
    }
    static get [name]() {
        return "account.createBusinessChatLink";
    }
    static get [paramDesc]() {
        return [
            ["link", types._InputBusinessChatLink, "InputBusinessChatLink"],
        ];
    }
    get [params]() {
        return [
            [this.link, types._InputBusinessChatLink, "InputBusinessChatLink"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "link", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.link = params.link;
    }
}
export class account_editBusinessChatLink_ extends Function_ {
    get [id]() {
        return 0x8C3410AF;
    }
    static get [name]() {
        return "account.editBusinessChatLink";
    }
    static get [paramDesc]() {
        return [
            ["slug", "string", "string"],
            ["link", types._InputBusinessChatLink, "InputBusinessChatLink"],
        ];
    }
    get [params]() {
        return [
            [this.slug, "string", "string"],
            [this.link, types._InputBusinessChatLink, "InputBusinessChatLink"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "slug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "link", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.slug = params.slug;
        this.link = params.link;
    }
}
export class account_deleteBusinessChatLink_ extends Function_ {
    get [id]() {
        return 0x60073674;
    }
    static get [name]() {
        return "account.deleteBusinessChatLink";
    }
    static get [paramDesc]() {
        return [
            ["slug", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.slug, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "slug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.slug = params.slug;
    }
}
export class account_getBusinessChatLinks_ extends Function_ {
    get [id]() {
        return 0x6F70DDE1;
    }
    static get [name]() {
        return "account.getBusinessChatLinks";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
export class account_resolveBusinessChatLink_ extends Function_ {
    get [id]() {
        return 0x5492E5EE;
    }
    static get [name]() {
        return "account.resolveBusinessChatLink";
    }
    static get [paramDesc]() {
        return [
            ["slug", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.slug, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "slug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.slug = params.slug;
    }
}
export class account_updatePersonalChannel_ extends Function_ {
    get [id]() {
        return 0xD94305E0;
    }
    static get [name]() {
        return "account.updatePersonalChannel";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
    }
}
/** Returns basic user info according to their identifiers. */
export class users_getUsers_ extends Function_ {
    get [id]() {
        return 0x0D91A548;
    }
    static get [name]() {
        return "users.getUsers";
    }
    static get [paramDesc]() {
        return [
            ["id", [types._InputUser], "Vector<InputUser>"],
        ];
    }
    get [params]() {
        return [
            [this.id, [types._InputUser], "Vector<InputUser>"],
        ];
    }
    constructor(params) {
        super();
        /** List of user identifiers */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Returns extended user info by ID. */
export class users_getFullUser_ extends Function_ {
    get [id]() {
        return 0xB60F5918;
    }
    static get [name]() {
        return "users.getFullUser";
    }
    static get [paramDesc]() {
        return [
            ["id", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            [this.id, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** User ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Notify the user that the sent [passport](https://core.telegram.org/passport) data contains some errors The user will not be able to re-submit their Passport data to you until the errors are fixed (the contents of the field for which you returned the error must change). */
export class users_setSecureValueErrors_ extends Function_ {
    get [id]() {
        return 0x90C894B5;
    }
    static get [name]() {
        return "users.setSecureValueErrors";
    }
    static get [paramDesc]() {
        return [
            ["id", types._InputUser, "InputUser"],
            ["errors", [types._SecureValueError], "Vector<SecureValueError>"],
        ];
    }
    get [params]() {
        return [
            [this.id, types._InputUser, "InputUser"],
            [this.errors, [types._SecureValueError], "Vector<SecureValueError>"],
        ];
    }
    constructor(params) {
        super();
        /** The user */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Errors */
        Object.defineProperty(this, "errors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
        this.errors = params.errors;
    }
}
export class users_getIsPremiumRequiredToContact_ extends Function_ {
    get [id]() {
        return 0xA622AA10;
    }
    static get [name]() {
        return "users.getIsPremiumRequiredToContact";
    }
    static get [paramDesc]() {
        return [
            ["id", [types._InputUser], "Vector<InputUser>"],
        ];
    }
    get [params]() {
        return [
            [this.id, [types._InputUser], "Vector<InputUser>"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Get the telegram IDs of all contacts.
Returns an array of Telegram user IDs for all contacts (0 if a contact does not have an associated Telegram account or have hidden their account using privacy settings). */
export class contacts_getContactIDs_ extends Function_ {
    get [id]() {
        return 0x7ADC669D;
    }
    static get [name]() {
        return "contacts.getContactIDs";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Use this method to obtain the online statuses of all contacts with an accessible Telegram account. */
export class contacts_getStatuses_ extends Function_ {
    get [id]() {
        return 0xC4A353EE;
    }
    static get [name]() {
        return "contacts.getStatuses";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Returns the current user's contact list. */
export class contacts_getContacts_ extends Function_ {
    get [id]() {
        return 0x5DD69E12;
    }
    static get [name]() {
        return "contacts.getContacts";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** If there already is a full contact list on the client, a [hash](https://core.telegram.org/api/offsets#hash-generation) of a the list of contact IDs in ascending order may be passed in this parameter. If the contact set was not changed, [(contacts.contactsNotModified)](https://core.telegram.org/constructor/contacts.contactsNotModified) will be returned. */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info. */
export class contacts_importContacts_ extends Function_ {
    get [id]() {
        return 0x2C800BE5;
    }
    static get [name]() {
        return "contacts.importContacts";
    }
    static get [paramDesc]() {
        return [
            ["contacts", [types._InputContact], "Vector<InputContact>"],
        ];
    }
    get [params]() {
        return [
            [this.contacts, [types._InputContact], "Vector<InputContact>"],
        ];
    }
    constructor(params) {
        super();
        /** List of contacts to import */
        Object.defineProperty(this, "contacts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contacts = params.contacts;
    }
}
/** Deletes several contacts from the list. */
export class contacts_deleteContacts_ extends Function_ {
    get [id]() {
        return 0x096A0E00;
    }
    static get [name]() {
        return "contacts.deleteContacts";
    }
    static get [paramDesc]() {
        return [
            ["id", [types._InputUser], "Vector<InputUser>"],
        ];
    }
    get [params]() {
        return [
            [this.id, [types._InputUser], "Vector<InputUser>"],
        ];
    }
    constructor(params) {
        super();
        /** User ID list */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Delete contacts by phone number */
export class contacts_deleteByPhones_ extends Function_ {
    get [id]() {
        return 0x1013FD9E;
    }
    static get [name]() {
        return "contacts.deleteByPhones";
    }
    static get [paramDesc]() {
        return [
            ["phones", ["string"], "Vector<string>"],
        ];
    }
    get [params]() {
        return [
            [this.phones, ["string"], "Vector<string>"],
        ];
    }
    constructor(params) {
        super();
        /** Phone numbers */
        Object.defineProperty(this, "phones", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phones = params.phones;
    }
}
/** Adds a peer to a blocklist, see [here »](https://core.telegram.org/api/block) for more info. */
export class contacts_block_ extends Function_ {
    get [id]() {
        return 0x2E2E8734;
    }
    static get [name]() {
        return "contacts.block";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["my_stories_from", "true", "flags.0?true"],
            ["id", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.my_stories_from ?? null, "true", "flags.0?true"],
            [this.id, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Whether the peer should be added to the story blocklist; if not set, the peer will be added to the main blocklist, see [here »](https://core.telegram.org/api/block) for more info. */
        Object.defineProperty(this, "my_stories_from", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Peer */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.my_stories_from = params.my_stories_from;
        this.id = params.id;
    }
}
/** Deletes a peer from a blocklist, see [here »](https://core.telegram.org/api/block) for more info. */
export class contacts_unblock_ extends Function_ {
    get [id]() {
        return 0xB550D328;
    }
    static get [name]() {
        return "contacts.unblock";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["my_stories_from", "true", "flags.0?true"],
            ["id", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.my_stories_from ?? null, "true", "flags.0?true"],
            [this.id, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Whether the peer should be removed from the story blocklist; if not set, the peer will be removed from the main blocklist, see [here »](https://core.telegram.org/api/block) for more info. */
        Object.defineProperty(this, "my_stories_from", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Peer */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.my_stories_from = params.my_stories_from;
        this.id = params.id;
    }
}
/** Returns the list of blocked users. */
export class contacts_getBlocked_ extends Function_ {
    get [id]() {
        return 0x9A868F80;
    }
    static get [name]() {
        return "contacts.getBlocked";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["my_stories_from", "true", "flags.0?true"],
            ["offset", "number", "int"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.my_stories_from ?? null, "true", "flags.0?true"],
            [this.offset, "number", "int"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to fetch the story blocklist; if not set, will fetch the main blocklist. See [here »](https://core.telegram.org/api/block) for differences between the two. */
        Object.defineProperty(this, "my_stories_from", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The number of list elements to be skipped */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The number of list elements to be returned */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.my_stories_from = params.my_stories_from;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
/** Returns users found by username substring. */
export class contacts_search_ extends Function_ {
    get [id]() {
        return 0x11F812D8;
    }
    static get [name]() {
        return "contacts.search";
    }
    static get [paramDesc]() {
        return [
            ["q", "string", "string"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.q, "string", "string"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Target substring */
        Object.defineProperty(this, "q", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of users to be returned */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.q = params.q;
        this.limit = params.limit;
    }
}
/** Resolve a @username to get peer info */
export class contacts_resolveUsername_ extends Function_ {
    get [id]() {
        return 0xF93CCBA3;
    }
    static get [name]() {
        return "contacts.resolveUsername";
    }
    static get [paramDesc]() {
        return [
            ["username", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.username, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** @username to resolve */
        Object.defineProperty(this, "username", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.username = params.username;
    }
}
/** Get most used peers */
export class contacts_getTopPeers_ extends Function_ {
    get [id]() {
        return 0x973478B6;
    }
    static get [name]() {
        return "contacts.getTopPeers";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["correspondents", "true", "flags.0?true"],
            ["bots_pm", "true", "flags.1?true"],
            ["bots_inline", "true", "flags.2?true"],
            ["phone_calls", "true", "flags.3?true"],
            ["forward_users", "true", "flags.4?true"],
            ["forward_chats", "true", "flags.5?true"],
            ["groups", "true", "flags.10?true"],
            ["channels", "true", "flags.15?true"],
            ["offset", "number", "int"],
            ["limit", "number", "int"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.correspondents ?? null, "true", "flags.0?true"],
            [this.bots_pm ?? null, "true", "flags.1?true"],
            [this.bots_inline ?? null, "true", "flags.2?true"],
            [this.phone_calls ?? null, "true", "flags.3?true"],
            [this.forward_users ?? null, "true", "flags.4?true"],
            [this.forward_chats ?? null, "true", "flags.5?true"],
            [this.groups ?? null, "true", "flags.10?true"],
            [this.channels ?? null, "true", "flags.15?true"],
            [this.offset, "number", "int"],
            [this.limit, "number", "int"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Users we've chatted most frequently with */
        Object.defineProperty(this, "correspondents", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Most used bots */
        Object.defineProperty(this, "bots_pm", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Most used inline bots */
        Object.defineProperty(this, "bots_inline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Most frequently called users */
        Object.defineProperty(this, "phone_calls", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Users to which the users often forwards messages to */
        Object.defineProperty(this, "forward_users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Chats to which the users often forwards messages to */
        Object.defineProperty(this, "forward_chats", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Often-opened groups and supergroups */
        Object.defineProperty(this, "groups", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Most frequently visited channels */
        Object.defineProperty(this, "channels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Offset for [pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.correspondents = params.correspondents;
        this.bots_pm = params.bots_pm;
        this.bots_inline = params.bots_inline;
        this.phone_calls = params.phone_calls;
        this.forward_users = params.forward_users;
        this.forward_chats = params.forward_chats;
        this.groups = params.groups;
        this.channels = params.channels;
        this.offset = params.offset;
        this.limit = params.limit;
        this.hash = params.hash;
    }
}
/** Reset [rating](https://core.telegram.org/api/top-rating) of top peer */
export class contacts_resetTopPeerRating_ extends Function_ {
    get [id]() {
        return 0x1AE373AC;
    }
    static get [name]() {
        return "contacts.resetTopPeerRating";
    }
    static get [paramDesc]() {
        return [
            ["category", types._TopPeerCategory, "TopPeerCategory"],
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.category, types._TopPeerCategory, "TopPeerCategory"],
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Top peer category */
        Object.defineProperty(this, "category", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Peer whose rating should be reset */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.category = params.category;
        this.peer = params.peer;
    }
}
/** Removes all contacts without an associated Telegram account. */
export class contacts_resetSaved_ extends Function_ {
    get [id]() {
        return 0x879537F1;
    }
    static get [name]() {
        return "contacts.resetSaved";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get all contacts, requires a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export class contacts_getSaved_ extends Function_ {
    get [id]() {
        return 0x82F1E39F;
    }
    static get [name]() {
        return "contacts.getSaved";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Enable/disable [top peers](https://core.telegram.org/api/top-rating) */
export class contacts_toggleTopPeers_ extends Function_ {
    get [id]() {
        return 0x8514BDDA;
    }
    static get [name]() {
        return "contacts.toggleTopPeers";
    }
    static get [paramDesc]() {
        return [
            ["enabled", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.enabled, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Enable/disable */
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.enabled = params.enabled;
    }
}
/** Add an existing telegram user as contact. */
export class contacts_addContact_ extends Function_ {
    get [id]() {
        return 0xE8F463D0;
    }
    static get [name]() {
        return "contacts.addContact";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["add_phone_privacy_exception", "true", "flags.0?true"],
            ["id", types._InputUser, "InputUser"],
            ["first_name", "string", "string"],
            ["last_name", "string", "string"],
            ["phone", "string", "string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.add_phone_privacy_exception ?? null, "true", "flags.0?true"],
            [this.id, types._InputUser, "InputUser"],
            [this.first_name, "string", "string"],
            [this.last_name, "string", "string"],
            [this.phone, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Allow the other user to see our phone number? */
        Object.defineProperty(this, "add_phone_privacy_exception", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Telegram ID of the other user */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** First name */
        Object.defineProperty(this, "first_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Last name */
        Object.defineProperty(this, "last_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** User's phone number, may be omitted to simply add the user to the contact list, without a phone number. */
        Object.defineProperty(this, "phone", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.add_phone_privacy_exception = params.add_phone_privacy_exception;
        this.id = params.id;
        this.first_name = params.first_name;
        this.last_name = params.last_name;
        this.phone = params.phone;
    }
}
/** If the [add contact action bar is active](https://core.telegram.org/api/action-bar#add-contact), add that user as contact */
export class contacts_acceptContact_ extends Function_ {
    get [id]() {
        return 0xF831A20F;
    }
    static get [name]() {
        return "contacts.acceptContact";
    }
    static get [paramDesc]() {
        return [
            ["id", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            [this.id, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** The user to add as contact */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Get users and geochats near you, see [here »](https://core.telegram.org/api/nearby) for more info. */
export class contacts_getLocated_ extends Function_ {
    get [id]() {
        return 0xD348BC44;
    }
    static get [name]() {
        return "contacts.getLocated";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["background", "true", "flags.1?true"],
            ["geo_point", types._InputGeoPoint, "InputGeoPoint"],
            ["self_expires", "number", "flags.0?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.background ?? null, "true", "flags.1?true"],
            [this.geo_point, types._InputGeoPoint, "InputGeoPoint"],
            [this.self_expires ?? null, "number", "flags.0?int"],
        ];
    }
    constructor(params) {
        super();
        /** While the geolocation of the current user is public, clients should update it in the background every half-an-hour or so, while setting this flag.
        Do this only if the new location is more than 1 KM away from the previous one, or if the previous location is unknown. */
        Object.defineProperty(this, "background", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Geolocation */
        Object.defineProperty(this, "geo_point", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, the geolocation of the current user will be public for the specified number of seconds; pass 0x7fffffff to disable expiry, 0 to make the current geolocation private; if the flag isn't set, no changes will be applied. */
        Object.defineProperty(this, "self_expires", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.background = params.background;
        this.geo_point = params.geo_point;
        this.self_expires = params.self_expires;
    }
}
/** Stop getting notifications about [discussion replies](https://core.telegram.org/api/discussion) of a certain user in `@replies` */
export class contacts_blockFromReplies_ extends Function_ {
    get [id]() {
        return 0x29A8962C;
    }
    static get [name]() {
        return "contacts.blockFromReplies";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["delete_message", "true", "flags.0?true"],
            ["delete_history", "true", "flags.1?true"],
            ["report_spam", "true", "flags.2?true"],
            ["msg_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.delete_message ?? null, "true", "flags.0?true"],
            [this.delete_history ?? null, "true", "flags.1?true"],
            [this.report_spam ?? null, "true", "flags.2?true"],
            [this.msg_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to delete the specified message as well */
        Object.defineProperty(this, "delete_message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to delete all `@replies` messages from this user as well */
        Object.defineProperty(this, "delete_history", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to also report this user for spam */
        Object.defineProperty(this, "report_spam", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of the message in the [@replies](https://core.telegram.org/api/discussion#replies) chat */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.delete_message = params.delete_message;
        this.delete_history = params.delete_history;
        this.report_spam = params.report_spam;
        this.msg_id = params.msg_id;
    }
}
/** Resolve a phone number to get user info, if their privacy settings allow it. */
export class contacts_resolvePhone_ extends Function_ {
    get [id]() {
        return 0x8AF94344;
    }
    static get [name]() {
        return "contacts.resolvePhone";
    }
    static get [paramDesc]() {
        return [
            ["phone", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.phone, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Phone number in international format, possibly obtained from a [phone number deep link](https://core.telegram.org/api/links#phone-number-links). */
        Object.defineProperty(this, "phone", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.phone = params.phone;
    }
}
/** Generates a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links) for the currently logged-in user. */
export class contacts_exportContactToken_ extends Function_ {
    get [id]() {
        return 0xF8654027;
    }
    static get [name]() {
        return "contacts.exportContactToken";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Obtain user info from a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links). */
export class contacts_importContactToken_ extends Function_ {
    get [id]() {
        return 0x13005788;
    }
    static get [name]() {
        return "contacts.importContactToken";
    }
    static get [paramDesc]() {
        return [
            ["token", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.token, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The token extracted from the [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links). */
        Object.defineProperty(this, "token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.token = params.token;
    }
}
/** Edit the [close friends list, see here »](https://core.telegram.org/api/privacy) for more info. */
export class contacts_editCloseFriends_ extends Function_ {
    get [id]() {
        return 0xBA6705F0;
    }
    static get [name]() {
        return "contacts.editCloseFriends";
    }
    static get [paramDesc]() {
        return [
            ["id", ["bigint"], "Vector<long>"],
        ];
    }
    get [params]() {
        return [
            [this.id, ["bigint"], "Vector<long>"],
        ];
    }
    constructor(params) {
        super();
        /** Full list of user IDs of close friends, see [here](https://core.telegram.org/api/privacy) for more info. */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Replace the contents of an entire [blocklist, see here for more info »](https://core.telegram.org/api/block). */
export class contacts_setBlocked_ extends Function_ {
    get [id]() {
        return 0x94C65C76;
    }
    static get [name]() {
        return "contacts.setBlocked";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["my_stories_from", "true", "flags.0?true"],
            ["id", [types._InputPeer], "Vector<InputPeer>"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.my_stories_from ?? null, "true", "flags.0?true"],
            [this.id, [types._InputPeer], "Vector<InputPeer>"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to edit the story blocklist; if not set, will edit the main blocklist. See [here »](https://core.telegram.org/api/block) for differences between the two. */
        Object.defineProperty(this, "my_stories_from", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Full content of the blocklist. */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.my_stories_from = params.my_stories_from;
        this.id = params.id;
        this.limit = params.limit;
    }
}
export class contacts_getBirthdays_ extends Function_ {
    get [id]() {
        return 0xDAEDA864;
    }
    static get [name]() {
        return "contacts.getBirthdays";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Returns the list of messages by their IDs. */
export class messages_getMessages_ extends Function_ {
    get [id]() {
        return 0x63C66506;
    }
    static get [name]() {
        return "messages.getMessages";
    }
    static get [paramDesc]() {
        return [
            ["id", [types._InputMessage], "Vector<InputMessage>"],
        ];
    }
    get [params]() {
        return [
            [this.id, [types._InputMessage], "Vector<InputMessage>"],
        ];
    }
    constructor(params) {
        super();
        /** Message ID list */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Returns the current user dialog list. */
export class messages_getDialogs_ extends Function_ {
    get [id]() {
        return 0xA0F4CB4F;
    }
    static get [name]() {
        return "messages.getDialogs";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["exclude_pinned", "true", "flags.0?true"],
            ["folder_id", "number", "flags.1?int"],
            ["offset_date", "number", "int"],
            ["offset_id", "number", "int"],
            ["offset_peer", types._InputPeer, "InputPeer"],
            ["limit", "number", "int"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.exclude_pinned ?? null, "true", "flags.0?true"],
            [this.folder_id ?? null, "number", "flags.1?int"],
            [this.offset_date, "number", "int"],
            [this.offset_id, "number", "int"],
            [this.offset_peer, types._InputPeer, "InputPeer"],
            [this.limit, "number", "int"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Exclude pinned dialogs */
        Object.defineProperty(this, "exclude_pinned", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) */
        Object.defineProperty(this, "folder_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) (`top_message` ID used for pagination) */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offset peer for pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of list elements to be returned */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.exclude_pinned = params.exclude_pinned;
        this.folder_id = params.folder_id;
        this.offset_date = params.offset_date;
        this.offset_id = params.offset_id;
        this.offset_peer = params.offset_peer;
        this.limit = params.limit;
        this.hash = params.hash;
    }
}
/** Returns the conversation history with one interlocutor / within a chat */
export class messages_getHistory_ extends Function_ {
    get [id]() {
        return 0x4423E6C5;
    }
    static get [name]() {
        return "messages.getHistory";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["offset_id", "number", "int"],
            ["offset_date", "number", "int"],
            ["add_offset", "number", "int"],
            ["limit", "number", "int"],
            ["max_id", "number", "int"],
            ["min_id", "number", "int"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.offset_id, "number", "int"],
            [this.offset_date, "number", "int"],
            [this.add_offset, "number", "int"],
            [this.limit, "number", "int"],
            [this.max_id, "number", "int"],
            [this.min_id, "number", "int"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Target peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only return messages starting from the specified message ID */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only return messages sent before the specified date */
        Object.defineProperty(this, "offset_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of list elements to be skipped, negative values are also accepted. */
        Object.defineProperty(this, "add_offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of results to return */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If a positive value was transferred, the method will return only messages with IDs less than **max\_id** */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If a positive value was transferred, the method will return only messages with IDs more than **min\_id** */
        Object.defineProperty(this, "min_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Result hash](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.offset_id = params.offset_id;
        this.offset_date = params.offset_date;
        this.add_offset = params.add_offset;
        this.limit = params.limit;
        this.max_id = params.max_id;
        this.min_id = params.min_id;
        this.hash = params.hash;
    }
}
/** Search for messages. */
export class messages_search_ extends Function_ {
    get [id]() {
        return 0x29EE847A;
    }
    static get [name]() {
        return "messages.search";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["q", "string", "string"],
            ["from_id", types._InputPeer, "flags.0?InputPeer"],
            ["saved_peer_id", types._InputPeer, "flags.2?InputPeer"],
            ["saved_reaction", [types._Reaction], "flags.3?Vector<Reaction>"],
            ["top_msg_id", "number", "flags.1?int"],
            ["filter", types._MessagesFilter, "MessagesFilter"],
            ["min_date", "number", "int"],
            ["max_date", "number", "int"],
            ["offset_id", "number", "int"],
            ["add_offset", "number", "int"],
            ["limit", "number", "int"],
            ["max_id", "number", "int"],
            ["min_id", "number", "int"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.q, "string", "string"],
            [this.from_id ?? null, types._InputPeer, "flags.0?InputPeer"],
            [this.saved_peer_id ?? null, types._InputPeer, "flags.2?InputPeer"],
            [this.saved_reaction ?? null, [types._Reaction], "flags.3?Vector<Reaction>"],
            [this.top_msg_id ?? null, "number", "flags.1?int"],
            [this.filter, types._MessagesFilter, "MessagesFilter"],
            [this.min_date, "number", "int"],
            [this.max_date, "number", "int"],
            [this.offset_id, "number", "int"],
            [this.add_offset, "number", "int"],
            [this.limit, "number", "int"],
            [this.max_id, "number", "int"],
            [this.min_id, "number", "int"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** User or chat, histories with which are searched, or [(inputPeerEmpty)](https://core.telegram.org/constructor/inputPeerEmpty) constructor to search in all private chats and [normal groups (not channels) »](https://core.telegram.org/api/channel). Use [messages.searchGlobal](https://core.telegram.org/method/messages.searchGlobal) to search globally in all chats, groups, supergroups and channels. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Text search request */
        Object.defineProperty(this, "q", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only return messages sent by the specified user ID */
        Object.defineProperty(this, "from_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. */
        Object.defineProperty(this, "saved_peer_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "saved_reaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Thread ID](https://core.telegram.org/api/threads) */
        Object.defineProperty(this, "top_msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Filter to return only specified message types */
        Object.defineProperty(this, "filter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If a positive value was transferred, only messages with a sending date bigger than the transferred one will be returned */
        Object.defineProperty(this, "min_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If a positive value was transferred, only messages with a sending date smaller than the transferred one will be returned */
        Object.defineProperty(this, "max_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only return messages starting from the specified message ID */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Additional offset](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "add_offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Number of results to return](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Maximum message ID to return](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Minimum message ID to return](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "min_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.q = params.q;
        this.from_id = params.from_id;
        this.saved_peer_id = params.saved_peer_id;
        this.saved_reaction = params.saved_reaction;
        this.top_msg_id = params.top_msg_id;
        this.filter = params.filter;
        this.min_date = params.min_date;
        this.max_date = params.max_date;
        this.offset_id = params.offset_id;
        this.add_offset = params.add_offset;
        this.limit = params.limit;
        this.max_id = params.max_id;
        this.min_id = params.min_id;
        this.hash = params.hash;
    }
}
/** Marks message history as read. */
export class messages_readHistory_ extends Function_ {
    get [id]() {
        return 0x0E306D3A;
    }
    static get [name]() {
        return "messages.readHistory";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["max_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.max_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Target user or group */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If a positive value is passed, only messages with identifiers less or equal than the given one will be read */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.max_id = params.max_id;
    }
}
/** Deletes communication history. */
export class messages_deleteHistory_ extends Function_ {
    get [id]() {
        return 0xB08F922A;
    }
    static get [name]() {
        return "messages.deleteHistory";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["just_clear", "true", "flags.0?true"],
            ["revoke", "true", "flags.1?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["max_id", "number", "int"],
            ["min_date", "number", "flags.2?int"],
            ["max_date", "number", "flags.3?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.just_clear ?? null, "true", "flags.0?true"],
            [this.revoke ?? null, "true", "flags.1?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.max_id, "number", "int"],
            [this.min_date ?? null, "number", "flags.2?int"],
            [this.max_date ?? null, "number", "flags.3?int"],
        ];
    }
    constructor(params) {
        super();
        /** Just clear history for the current user, without actually removing messages for every chat user */
        Object.defineProperty(this, "just_clear", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to delete the message history for all chat participants */
        Object.defineProperty(this, "revoke", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** User or chat, communication history of which will be deleted */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum ID of message to delete */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Delete all messages newer than this UNIX timestamp */
        Object.defineProperty(this, "min_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Delete all messages older than this UNIX timestamp */
        Object.defineProperty(this, "max_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.just_clear = params.just_clear;
        this.revoke = params.revoke;
        this.peer = params.peer;
        this.max_id = params.max_id;
        this.min_date = params.min_date;
        this.max_date = params.max_date;
    }
}
/** Deletes messages by their identifiers. */
export class messages_deleteMessages_ extends Function_ {
    get [id]() {
        return 0xE58E95D2;
    }
    static get [name]() {
        return "messages.deleteMessages";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["revoke", "true", "flags.0?true"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.revoke ?? null, "true", "flags.0?true"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to delete messages for all participants of the chat */
        Object.defineProperty(this, "revoke", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID list */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.revoke = params.revoke;
        this.id = params.id;
    }
}
/** Confirms receipt of messages by a client, cancels PUSH-notification sending. */
export class messages_receivedMessages_ extends Function_ {
    get [id]() {
        return 0x05A954C0;
    }
    static get [name]() {
        return "messages.receivedMessages";
    }
    static get [paramDesc]() {
        return [
            ["max_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.max_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Maximum message ID available in a client. */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.max_id = params.max_id;
    }
}
/** Sends a current user typing event (see [SendMessageAction](https://core.telegram.org/type/SendMessageAction) for all event types) to a conversation partner or group. */
export class messages_setTyping_ extends Function_ {
    get [id]() {
        return 0x58943EE2;
    }
    static get [name]() {
        return "messages.setTyping";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["top_msg_id", "number", "flags.0?int"],
            ["action", types._SendMessageAction, "SendMessageAction"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.top_msg_id ?? null, "number", "flags.0?int"],
            [this.action, types._SendMessageAction, "SendMessageAction"],
        ];
    }
    constructor(params) {
        super();
        /** Target user or group */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Topic ID](https://core.telegram.org/api/threads) */
        Object.defineProperty(this, "top_msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Type of action */
        Object.defineProperty(this, "action", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.top_msg_id = params.top_msg_id;
        this.action = params.action;
    }
}
/** Sends a message to a chat */
export class messages_sendMessage_ extends Function_ {
    get [id]() {
        return 0xDFF8042C;
    }
    static get [name]() {
        return "messages.sendMessage";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["no_webpage", "true", "flags.1?true"],
            ["silent", "true", "flags.5?true"],
            ["background", "true", "flags.6?true"],
            ["clear_draft", "true", "flags.7?true"],
            ["noforwards", "true", "flags.14?true"],
            ["update_stickersets_order", "true", "flags.15?true"],
            ["invert_media", "true", "flags.16?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["reply_to", types._InputReplyTo, "flags.0?InputReplyTo"],
            ["message", "string", "string"],
            ["random_id", "bigint", "long"],
            ["reply_markup", types._ReplyMarkup, "flags.2?ReplyMarkup"],
            ["entities", [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
            ["schedule_date", "number", "flags.10?int"],
            ["send_as", types._InputPeer, "flags.13?InputPeer"],
            ["quick_reply_shortcut", types._InputQuickReplyShortcut, "flags.17?InputQuickReplyShortcut"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.no_webpage ?? null, "true", "flags.1?true"],
            [this.silent ?? null, "true", "flags.5?true"],
            [this.background ?? null, "true", "flags.6?true"],
            [this.clear_draft ?? null, "true", "flags.7?true"],
            [this.noforwards ?? null, "true", "flags.14?true"],
            [this.update_stickersets_order ?? null, "true", "flags.15?true"],
            [this.invert_media ?? null, "true", "flags.16?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.reply_to ?? null, types._InputReplyTo, "flags.0?InputReplyTo"],
            [this.message, "string", "string"],
            [this.random_id, "bigint", "long"],
            [this.reply_markup ?? null, types._ReplyMarkup, "flags.2?ReplyMarkup"],
            [this.entities ?? null, [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
            [this.schedule_date ?? null, "number", "flags.10?int"],
            [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
            [this.quick_reply_shortcut ?? null, types._InputQuickReplyShortcut, "flags.17?InputQuickReplyShortcut"],
        ];
    }
    constructor(params) {
        super();
        /** Set this flag to disable generation of the webpage preview */
        Object.defineProperty(this, "no_webpage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Send this message silently (no notifications for the receivers) */
        Object.defineProperty(this, "silent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Send this message as background message */
        Object.defineProperty(this, "background", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Clear the draft field */
        Object.defineProperty(this, "clear_draft", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled */
        Object.defineProperty(this, "noforwards", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to move used stickersets to top, [see here for more info on this flag »](https://core.telegram.org/api/stickers#recent-stickersets) */
        Object.defineProperty(this, "update_stickersets_order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
        Object.defineProperty(this, "invert_media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The destination where the message will be sent */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, indicates that the message should be sent in reply to the specified message or story. */
        Object.defineProperty(this, "reply_to", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The message */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique client message ID required to prevent message resending */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Reply markup for sending bot buttons */
        Object.defineProperty(this, "reply_markup", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message [entities](https://core.telegram.org/api/entities) for sending styled text */
        Object.defineProperty(this, "entities", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) */
        Object.defineProperty(this, "schedule_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Send this message as the specified peer */
        Object.defineProperty(this, "send_as", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "quick_reply_shortcut", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.no_webpage = params.no_webpage;
        this.silent = params.silent;
        this.background = params.background;
        this.clear_draft = params.clear_draft;
        this.noforwards = params.noforwards;
        this.update_stickersets_order = params.update_stickersets_order;
        this.invert_media = params.invert_media;
        this.peer = params.peer;
        this.reply_to = params.reply_to;
        this.message = params.message;
        this.random_id = params.random_id;
        this.reply_markup = params.reply_markup;
        this.entities = params.entities;
        this.schedule_date = params.schedule_date;
        this.send_as = params.send_as;
        this.quick_reply_shortcut = params.quick_reply_shortcut;
    }
}
/** Send a media */
export class messages_sendMedia_ extends Function_ {
    get [id]() {
        return 0x7BD66041;
    }
    static get [name]() {
        return "messages.sendMedia";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["silent", "true", "flags.5?true"],
            ["background", "true", "flags.6?true"],
            ["clear_draft", "true", "flags.7?true"],
            ["noforwards", "true", "flags.14?true"],
            ["update_stickersets_order", "true", "flags.15?true"],
            ["invert_media", "true", "flags.16?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["reply_to", types._InputReplyTo, "flags.0?InputReplyTo"],
            ["media", types._InputMedia, "InputMedia"],
            ["message", "string", "string"],
            ["random_id", "bigint", "long"],
            ["reply_markup", types._ReplyMarkup, "flags.2?ReplyMarkup"],
            ["entities", [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
            ["schedule_date", "number", "flags.10?int"],
            ["send_as", types._InputPeer, "flags.13?InputPeer"],
            ["quick_reply_shortcut", types._InputQuickReplyShortcut, "flags.17?InputQuickReplyShortcut"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.silent ?? null, "true", "flags.5?true"],
            [this.background ?? null, "true", "flags.6?true"],
            [this.clear_draft ?? null, "true", "flags.7?true"],
            [this.noforwards ?? null, "true", "flags.14?true"],
            [this.update_stickersets_order ?? null, "true", "flags.15?true"],
            [this.invert_media ?? null, "true", "flags.16?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.reply_to ?? null, types._InputReplyTo, "flags.0?InputReplyTo"],
            [this.media, types._InputMedia, "InputMedia"],
            [this.message, "string", "string"],
            [this.random_id, "bigint", "long"],
            [this.reply_markup ?? null, types._ReplyMarkup, "flags.2?ReplyMarkup"],
            [this.entities ?? null, [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
            [this.schedule_date ?? null, "number", "flags.10?int"],
            [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
            [this.quick_reply_shortcut ?? null, types._InputQuickReplyShortcut, "flags.17?InputQuickReplyShortcut"],
        ];
    }
    constructor(params) {
        super();
        /** Send message silently (no notification should be triggered) */
        Object.defineProperty(this, "silent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Send message in background */
        Object.defineProperty(this, "background", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Clear the draft */
        Object.defineProperty(this, "clear_draft", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled */
        Object.defineProperty(this, "noforwards", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to move used stickersets to top, [see here for more info on this flag »](https://core.telegram.org/api/stickers#recent-stickersets) */
        Object.defineProperty(this, "update_stickersets_order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
        Object.defineProperty(this, "invert_media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Destination */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, indicates that the message should be sent in reply to the specified message or story. */
        Object.defineProperty(this, "reply_to", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Attached media */
        Object.defineProperty(this, "media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Caption */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Random ID to avoid resending the same message */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Reply markup for bot keyboards */
        Object.defineProperty(this, "reply_markup", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message [entities](https://core.telegram.org/api/entities) for styled text */
        Object.defineProperty(this, "entities", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) */
        Object.defineProperty(this, "schedule_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Send this message as the specified peer */
        Object.defineProperty(this, "send_as", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "quick_reply_shortcut", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.silent = params.silent;
        this.background = params.background;
        this.clear_draft = params.clear_draft;
        this.noforwards = params.noforwards;
        this.update_stickersets_order = params.update_stickersets_order;
        this.invert_media = params.invert_media;
        this.peer = params.peer;
        this.reply_to = params.reply_to;
        this.media = params.media;
        this.message = params.message;
        this.random_id = params.random_id;
        this.reply_markup = params.reply_markup;
        this.entities = params.entities;
        this.schedule_date = params.schedule_date;
        this.send_as = params.send_as;
        this.quick_reply_shortcut = params.quick_reply_shortcut;
    }
}
/** Forwards messages by their IDs. */
export class messages_forwardMessages_ extends Function_ {
    get [id]() {
        return 0xD5039208;
    }
    static get [name]() {
        return "messages.forwardMessages";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["silent", "true", "flags.5?true"],
            ["background", "true", "flags.6?true"],
            ["with_my_score", "true", "flags.8?true"],
            ["drop_author", "true", "flags.11?true"],
            ["drop_media_captions", "true", "flags.12?true"],
            ["noforwards", "true", "flags.14?true"],
            ["from_peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
            ["random_id", ["bigint"], "Vector<long>"],
            ["to_peer", types._InputPeer, "InputPeer"],
            ["top_msg_id", "number", "flags.9?int"],
            ["schedule_date", "number", "flags.10?int"],
            ["send_as", types._InputPeer, "flags.13?InputPeer"],
            ["quick_reply_shortcut", types._InputQuickReplyShortcut, "flags.17?InputQuickReplyShortcut"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.silent ?? null, "true", "flags.5?true"],
            [this.background ?? null, "true", "flags.6?true"],
            [this.with_my_score ?? null, "true", "flags.8?true"],
            [this.drop_author ?? null, "true", "flags.11?true"],
            [this.drop_media_captions ?? null, "true", "flags.12?true"],
            [this.noforwards ?? null, "true", "flags.14?true"],
            [this.from_peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
            [this.random_id, ["bigint"], "Vector<long>"],
            [this.to_peer, types._InputPeer, "InputPeer"],
            [this.top_msg_id ?? null, "number", "flags.9?int"],
            [this.schedule_date ?? null, "number", "flags.10?int"],
            [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
            [this.quick_reply_shortcut ?? null, types._InputQuickReplyShortcut, "flags.17?InputQuickReplyShortcut"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to send messages silently (no notification will be triggered on the destination clients) */
        Object.defineProperty(this, "silent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to send the message in background */
        Object.defineProperty(this, "background", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** When forwarding games, whether to include your score in the game */
        Object.defineProperty(this, "with_my_score", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to forward messages without quoting the original author */
        Object.defineProperty(this, "drop_author", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to strip captions from media */
        Object.defineProperty(this, "drop_media_captions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only for bots, disallows further re-forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled */
        Object.defineProperty(this, "noforwards", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Source of messages */
        Object.defineProperty(this, "from_peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** IDs of messages */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Random ID to prevent resending of messages */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Destination peer */
        Object.defineProperty(this, "to_peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Destination [forum topic](https://core.telegram.org/api/forum#forum-topics) */
        Object.defineProperty(this, "top_msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Scheduled message date for scheduled messages */
        Object.defineProperty(this, "schedule_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Forward the messages as the specified peer */
        Object.defineProperty(this, "send_as", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "quick_reply_shortcut", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.silent = params.silent;
        this.background = params.background;
        this.with_my_score = params.with_my_score;
        this.drop_author = params.drop_author;
        this.drop_media_captions = params.drop_media_captions;
        this.noforwards = params.noforwards;
        this.from_peer = params.from_peer;
        this.id = params.id;
        this.random_id = params.random_id;
        this.to_peer = params.to_peer;
        this.top_msg_id = params.top_msg_id;
        this.schedule_date = params.schedule_date;
        this.send_as = params.send_as;
        this.quick_reply_shortcut = params.quick_reply_shortcut;
    }
}
/** Report a new incoming chat for spam, if the [peer settings](https://core.telegram.org/constructor/peerSettings) of the chat allow us to do that */
export class messages_reportSpam_ extends Function_ {
    get [id]() {
        return 0xCF1592DB;
    }
    static get [name]() {
        return "messages.reportSpam";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Peer to report */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Get peer settings */
export class messages_getPeerSettings_ extends Function_ {
    get [id]() {
        return 0xEFD9A6A2;
    }
    static get [name]() {
        return "messages.getPeerSettings";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** The peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Report a message in a chat for violation of telegram's Terms of Service */
export class messages_report_ extends Function_ {
    get [id]() {
        return 0x8953AB4E;
    }
    static get [name]() {
        return "messages.report";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
            ["reason", types._ReportReason, "ReportReason"],
            ["message", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
            [this.reason, types._ReportReason, "ReportReason"],
            [this.message, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** IDs of messages to report */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Why are these messages being reported */
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Comment for report moderation */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
        this.reason = params.reason;
        this.message = params.message;
    }
}
/** Returns chat basic info on their IDs. */
export class messages_getChats_ extends Function_ {
    get [id]() {
        return 0x49E9528F;
    }
    static get [name]() {
        return "messages.getChats";
    }
    static get [paramDesc]() {
        return [
            ["id", ["bigint"], "Vector<long>"],
        ];
    }
    get [params]() {
        return [
            [this.id, ["bigint"], "Vector<long>"],
        ];
    }
    constructor(params) {
        super();
        /** List of chat IDs */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Get full info about a [basic group](https://core.telegram.org/api/channel#basic-groups). */
export class messages_getFullChat_ extends Function_ {
    get [id]() {
        return 0xAEB00B34;
    }
    static get [name]() {
        return "messages.getFullChat";
    }
    static get [paramDesc]() {
        return [
            ["chat_id", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.chat_id, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Basic group](https://core.telegram.org/api/channel#basic-groups) ID. */
        Object.defineProperty(this, "chat_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chat_id = params.chat_id;
    }
}
/** Changes chat name and sends a service message on it. */
export class messages_editChatTitle_ extends Function_ {
    get [id]() {
        return 0x73783FFD;
    }
    static get [name]() {
        return "messages.editChatTitle";
    }
    static get [paramDesc]() {
        return [
            ["chat_id", "bigint", "long"],
            ["title", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.chat_id, "bigint", "long"],
            [this.title, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Chat ID */
        Object.defineProperty(this, "chat_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New chat name, different from the old one */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chat_id = params.chat_id;
        this.title = params.title;
    }
}
/** Changes chat photo and sends a service message on it */
export class messages_editChatPhoto_ extends Function_ {
    get [id]() {
        return 0x35DDD674;
    }
    static get [name]() {
        return "messages.editChatPhoto";
    }
    static get [paramDesc]() {
        return [
            ["chat_id", "bigint", "long"],
            ["photo", types._InputChatPhoto, "InputChatPhoto"],
        ];
    }
    get [params]() {
        return [
            [this.chat_id, "bigint", "long"],
            [this.photo, types._InputChatPhoto, "InputChatPhoto"],
        ];
    }
    constructor(params) {
        super();
        /** Chat ID */
        Object.defineProperty(this, "chat_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Photo to be set */
        Object.defineProperty(this, "photo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chat_id = params.chat_id;
        this.photo = params.photo;
    }
}
/** Adds a user to a chat and sends a service message on it. */
export class messages_addChatUser_ extends Function_ {
    get [id]() {
        return 0xCBC6D107;
    }
    static get [name]() {
        return "messages.addChatUser";
    }
    static get [paramDesc]() {
        return [
            ["chat_id", "bigint", "long"],
            ["user_id", types._InputUser, "InputUser"],
            ["fwd_limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.chat_id, "bigint", "long"],
            [this.user_id, types._InputUser, "InputUser"],
            [this.fwd_limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Chat ID */
        Object.defineProperty(this, "chat_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** User ID to be added */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of last messages to be forwarded */
        Object.defineProperty(this, "fwd_limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chat_id = params.chat_id;
        this.user_id = params.user_id;
        this.fwd_limit = params.fwd_limit;
    }
}
/** Deletes a user from a chat and sends a service message on it. */
export class messages_deleteChatUser_ extends Function_ {
    get [id]() {
        return 0xA2185CAB;
    }
    static get [name]() {
        return "messages.deleteChatUser";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["revoke_history", "true", "flags.0?true"],
            ["chat_id", "bigint", "long"],
            ["user_id", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.revoke_history ?? null, "true", "flags.0?true"],
            [this.chat_id, "bigint", "long"],
            [this.user_id, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** Remove the entire chat history of the specified user in this chat. */
        Object.defineProperty(this, "revoke_history", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Chat ID */
        Object.defineProperty(this, "chat_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** User ID to be deleted */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.revoke_history = params.revoke_history;
        this.chat_id = params.chat_id;
        this.user_id = params.user_id;
    }
}
/** Creates a new chat. */
export class messages_createChat_ extends Function_ {
    get [id]() {
        return 0x92CEDDD4;
    }
    static get [name]() {
        return "messages.createChat";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["users", [types._InputUser], "Vector<InputUser>"],
            ["title", "string", "string"],
            ["ttl_period", "number", "flags.0?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.users, [types._InputUser], "Vector<InputUser>"],
            [this.title, "string", "string"],
            [this.ttl_period ?? null, "number", "flags.0?int"],
        ];
    }
    constructor(params) {
        super();
        /** List of user IDs to be invited */
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Chat name */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Time-to-live of all messages that will be sent in the chat: once message.date+message.ttl\_period === time(), the message will be deleted on the server, and must be deleted locally as well. You can use [messages.setDefaultHistoryTTL](https://core.telegram.org/method/messages.setDefaultHistoryTTL) to edit this value later. */
        Object.defineProperty(this, "ttl_period", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.users = params.users;
        this.title = params.title;
        this.ttl_period = params.ttl_period;
    }
}
/** Returns configuration parameters for Diffie-Hellman key generation. Can also return a random sequence of bytes of required length. */
export class messages_getDhConfig_ extends Function_ {
    get [id]() {
        return 0x26CF8950;
    }
    static get [name]() {
        return "messages.getDhConfig";
    }
    static get [paramDesc]() {
        return [
            ["version", "number", "int"],
            ["random_length", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.version, "number", "int"],
            [this.random_length, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Value of the **version** parameter from [messages.dhConfig](https://core.telegram.org/constructor/messages.dhConfig), available at the client */
        Object.defineProperty(this, "version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Length of the required random sequence */
        Object.defineProperty(this, "random_length", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.version = params.version;
        this.random_length = params.random_length;
    }
}
/** Sends a request to start a secret chat to the user. */
export class messages_requestEncryption_ extends Function_ {
    get [id]() {
        return 0xF64DAF43;
    }
    static get [name]() {
        return "messages.requestEncryption";
    }
    static get [paramDesc]() {
        return [
            ["user_id", types._InputUser, "InputUser"],
            ["random_id", "number", "int"],
            ["g_a", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.user_id, types._InputUser, "InputUser"],
            [this.random_id, "number", "int"],
            [this.g_a, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** User ID */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique client request ID required to prevent resending. This also doubles as the chat ID. */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** `A = g ^ a mod p`, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) */
        Object.defineProperty(this, "g_a", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.user_id = params.user_id;
        this.random_id = params.random_id;
        this.g_a = params.g_a;
    }
}
/** Confirms creation of a secret chat */
export class messages_acceptEncryption_ extends Function_ {
    get [id]() {
        return 0x3DBC0415;
    }
    static get [name]() {
        return "messages.acceptEncryption";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
            ["g_b", Uint8Array, "bytes"],
            ["key_fingerprint", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
            [this.g_b, Uint8Array, "bytes"],
            [this.key_fingerprint, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Secret chat ID */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** `B = g ^ b mod p`, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) */
        Object.defineProperty(this, "g_b", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** 64-bit fingerprint of the received key */
        Object.defineProperty(this, "key_fingerprint", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.g_b = params.g_b;
        this.key_fingerprint = params.key_fingerprint;
    }
}
/** Cancels a request for creation and/or delete info on secret chat. */
export class messages_discardEncryption_ extends Function_ {
    get [id]() {
        return 0xF393AEA0;
    }
    static get [name]() {
        return "messages.discardEncryption";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["delete_history", "true", "flags.0?true"],
            ["chat_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.delete_history ?? null, "true", "flags.0?true"],
            [this.chat_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to delete the entire chat history for the other user as well */
        Object.defineProperty(this, "delete_history", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Secret chat ID */
        Object.defineProperty(this, "chat_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.delete_history = params.delete_history;
        this.chat_id = params.chat_id;
    }
}
/** Send typing event by the current user to a secret chat. */
export class messages_setEncryptedTyping_ extends Function_ {
    get [id]() {
        return 0x791451ED;
    }
    static get [name]() {
        return "messages.setEncryptedTyping";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
            ["typing", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
            [this.typing, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Secret chat ID */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Typing.
        **Possible values**:
        [(boolTrue)](https://core.telegram.org/constructor/boolTrue), if the user started typing and more than **5 seconds** have passed since the last request
        [(boolFalse)](https://core.telegram.org/constructor/boolFalse), if the user stopped typing */
        Object.defineProperty(this, "typing", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.typing = params.typing;
    }
}
/** Marks message history within a secret chat as read. */
export class messages_readEncryptedHistory_ extends Function_ {
    get [id]() {
        return 0x7F4B690A;
    }
    static get [name]() {
        return "messages.readEncryptedHistory";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
            ["max_date", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
            [this.max_date, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Secret chat ID */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum date value for received messages in history */
        Object.defineProperty(this, "max_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.max_date = params.max_date;
    }
}
/** Sends a text message to a secret chat. */
export class messages_sendEncrypted_ extends Function_ {
    get [id]() {
        return 0x44FA7A15;
    }
    static get [name]() {
        return "messages.sendEncrypted";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["silent", "true", "flags.0?true"],
            ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
            ["random_id", "bigint", "long"],
            ["data", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.silent ?? null, "true", "flags.0?true"],
            [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
            [this.random_id, "bigint", "long"],
            [this.data, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** Send encrypted message without a notification */
        Object.defineProperty(this, "silent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Secret chat ID */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique client message ID, necessary to avoid message resending */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key that was created during chat initialization */
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.silent = params.silent;
        this.peer = params.peer;
        this.random_id = params.random_id;
        this.data = params.data;
    }
}
/** Sends a message with a file attachment to a secret chat */
export class messages_sendEncryptedFile_ extends Function_ {
    get [id]() {
        return 0x5559481D;
    }
    static get [name]() {
        return "messages.sendEncryptedFile";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["silent", "true", "flags.0?true"],
            ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
            ["random_id", "bigint", "long"],
            ["data", Uint8Array, "bytes"],
            ["file", types._InputEncryptedFile, "InputEncryptedFile"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.silent ?? null, "true", "flags.0?true"],
            [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
            [this.random_id, "bigint", "long"],
            [this.data, Uint8Array, "bytes"],
            [this.file, types._InputEncryptedFile, "InputEncryptedFile"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to send the file without triggering a notification */
        Object.defineProperty(this, "silent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Secret chat ID */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique client message ID necessary to prevent message resending */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key generated during chat initialization */
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** File attachment for the secret chat */
        Object.defineProperty(this, "file", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.silent = params.silent;
        this.peer = params.peer;
        this.random_id = params.random_id;
        this.data = params.data;
        this.file = params.file;
    }
}
/** Sends a service message to a secret chat. */
export class messages_sendEncryptedService_ extends Function_ {
    get [id]() {
        return 0x32D439A4;
    }
    static get [name]() {
        return "messages.sendEncryptedService";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
            ["random_id", "bigint", "long"],
            ["data", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
            [this.random_id, "bigint", "long"],
            [this.data, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** Secret chat ID */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique client message ID required to prevent message resending */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key generated during chat initialization */
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.random_id = params.random_id;
        this.data = params.data;
    }
}
/** Confirms receipt of messages in a secret chat by client, cancels push notifications.
The method returns a list of **random\_id**s of messages for which push notifications were cancelled. */
export class messages_receivedQueue_ extends Function_ {
    get [id]() {
        return 0x55A5BB66;
    }
    static get [name]() {
        return "messages.receivedQueue";
    }
    static get [paramDesc]() {
        return [
            ["max_qts", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.max_qts, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Maximum qts value available at the client */
        Object.defineProperty(this, "max_qts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.max_qts = params.max_qts;
    }
}
/** Report a secret chat for spam */
export class messages_reportEncryptedSpam_ extends Function_ {
    get [id]() {
        return 0x4B0C8C0F;
    }
    static get [name]() {
        return "messages.reportEncryptedSpam";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
        ];
    }
    constructor(params) {
        super();
        /** The secret chat to report */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Notifies the sender about the recipient having listened a voice message or watched a video. */
export class messages_readMessageContents_ extends Function_ {
    get [id]() {
        return 0x36A73F77;
    }
    static get [name]() {
        return "messages.readMessageContents";
    }
    static get [paramDesc]() {
        return [
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Message ID list */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Get stickers by emoji */
export class messages_getStickers_ extends Function_ {
    get [id]() {
        return 0xD5A5D3A1;
    }
    static get [name]() {
        return "messages.getStickers";
    }
    static get [paramDesc]() {
        return [
            ["emoticon", "string", "string"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.emoticon, "string", "string"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** The emoji */
        Object.defineProperty(this, "emoticon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.emoticon = params.emoticon;
        this.hash = params.hash;
    }
}
/** Get all installed stickers */
export class messages_getAllStickers_ extends Function_ {
    get [id]() {
        return 0xB8A0A1A8;
    }
    static get [name]() {
        return "messages.getAllStickers";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Get preview of webpage */
export class messages_getWebPagePreview_ extends Function_ {
    get [id]() {
        return 0x8B68B0CC;
    }
    static get [name]() {
        return "messages.getWebPagePreview";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["message", "string", "string"],
            ["entities", [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.message, "string", "string"],
            [this.entities ?? null, [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
        ];
    }
    constructor(params) {
        super();
        /** Message from which to extract the preview */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Message entities for styled text](https://core.telegram.org/api/entities) */
        Object.defineProperty(this, "entities", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.message = params.message;
        this.entities = params.entities;
    }
}
/** Export an invite link for a chat */
export class messages_exportChatInvite_ extends Function_ {
    get [id]() {
        return 0xA02CE5D5;
    }
    static get [name]() {
        return "messages.exportChatInvite";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["legacy_revoke_permanent", "true", "flags.2?true"],
            ["request_needed", "true", "flags.3?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["expire_date", "number", "flags.0?int"],
            ["usage_limit", "number", "flags.1?int"],
            ["title", "string", "flags.4?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.legacy_revoke_permanent ?? null, "true", "flags.2?true"],
            [this.request_needed ?? null, "true", "flags.3?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.expire_date ?? null, "number", "flags.0?int"],
            [this.usage_limit ?? null, "number", "flags.1?int"],
            [this.title ?? null, "string", "flags.4?string"],
        ];
    }
    constructor(params) {
        super();
        /** Legacy flag, reproducing legacy behavior of this method: if set, revokes all previous links before creating a new one. Kept for bot API BC, should not be used by modern clients. */
        Object.defineProperty(this, "legacy_revoke_permanent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether admin confirmation is required before admitting each separate user into the chat */
        Object.defineProperty(this, "request_needed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Chat */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Expiration date */
        Object.defineProperty(this, "expire_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of users that can join using this link */
        Object.defineProperty(this, "usage_limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Description of the invite link, visible only to administrators */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.legacy_revoke_permanent = params.legacy_revoke_permanent;
        this.request_needed = params.request_needed;
        this.peer = params.peer;
        this.expire_date = params.expire_date;
        this.usage_limit = params.usage_limit;
        this.title = params.title;
    }
}
/** Check the validity of a chat invite link and get basic info about it */
export class messages_checkChatInvite_ extends Function_ {
    get [id]() {
        return 0x3EADB1BB;
    }
    static get [name]() {
        return "messages.checkChatInvite";
    }
    static get [paramDesc]() {
        return [
            ["hash", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Invite hash from [chat invite deep link »](https://core.telegram.org/api/links#chat-invite-links). */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Import a chat invite and join a private chat/supergroup/channel */
export class messages_importChatInvite_ extends Function_ {
    get [id]() {
        return 0x6C50051C;
    }
    static get [name]() {
        return "messages.importChatInvite";
    }
    static get [paramDesc]() {
        return [
            ["hash", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** `hash` from a [chat invite deep link](https://core.telegram.org/api/links#chat-invite-links) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Get info about a stickerset */
export class messages_getStickerSet_ extends Function_ {
    get [id]() {
        return 0xC8A0EC74;
    }
    static get [name]() {
        return "messages.getStickerSet";
    }
    static get [paramDesc]() {
        return [
            ["stickerset", types._InputStickerSet, "InputStickerSet"],
            ["hash", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.stickerset, types._InputStickerSet, "InputStickerSet"],
            [this.hash, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Stickerset */
        Object.defineProperty(this, "stickerset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.stickerset = params.stickerset;
        this.hash = params.hash;
    }
}
/** Install a stickerset */
export class messages_installStickerSet_ extends Function_ {
    get [id]() {
        return 0xC78FE460;
    }
    static get [name]() {
        return "messages.installStickerSet";
    }
    static get [paramDesc]() {
        return [
            ["stickerset", types._InputStickerSet, "InputStickerSet"],
            ["archived", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.stickerset, types._InputStickerSet, "InputStickerSet"],
            [this.archived, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Stickerset to install */
        Object.defineProperty(this, "stickerset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to archive stickerset */
        Object.defineProperty(this, "archived", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.stickerset = params.stickerset;
        this.archived = params.archived;
    }
}
/** Uninstall a stickerset */
export class messages_uninstallStickerSet_ extends Function_ {
    get [id]() {
        return 0xF96E55DE;
    }
    static get [name]() {
        return "messages.uninstallStickerSet";
    }
    static get [paramDesc]() {
        return [
            ["stickerset", types._InputStickerSet, "InputStickerSet"],
        ];
    }
    get [params]() {
        return [
            [this.stickerset, types._InputStickerSet, "InputStickerSet"],
        ];
    }
    constructor(params) {
        super();
        /** The stickerset to uninstall */
        Object.defineProperty(this, "stickerset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.stickerset = params.stickerset;
    }
}
/** Start a conversation with a bot using a [deep linking parameter](https://core.telegram.org/api/links#bot-links) */
export class messages_startBot_ extends Function_ {
    get [id]() {
        return 0xE6DF7378;
    }
    static get [name]() {
        return "messages.startBot";
    }
    static get [paramDesc]() {
        return [
            ["bot", types._InputUser, "InputUser"],
            ["peer", types._InputPeer, "InputPeer"],
            ["random_id", "bigint", "long"],
            ["start_param", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.bot, types._InputUser, "InputUser"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.random_id, "bigint", "long"],
            [this.start_param, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The bot */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The chat where to start the bot, can be the bot's private chat or a group */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Random ID to avoid resending the same message */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Deep linking parameter](https://core.telegram.org/api/links#bot-links) */
        Object.defineProperty(this, "start_param", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot = params.bot;
        this.peer = params.peer;
        this.random_id = params.random_id;
        this.start_param = params.start_param;
    }
}
/** Get and increase the view counter of a message sent or forwarded from a [channel](https://core.telegram.org/api/channel) */
export class messages_getMessagesViews_ extends Function_ {
    get [id]() {
        return 0x5784D3E1;
    }
    static get [name]() {
        return "messages.getMessagesViews";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
            ["increment", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
            [this.increment, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where the message was found */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of message */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to mark the message as viewed and increment the view counter */
        Object.defineProperty(this, "increment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
        this.increment = params.increment;
    }
}
/** Make a user admin in a [basic group](https://core.telegram.org/api/channel#basic-groups). */
export class messages_editChatAdmin_ extends Function_ {
    get [id]() {
        return 0xA85BD1C2;
    }
    static get [name]() {
        return "messages.editChatAdmin";
    }
    static get [paramDesc]() {
        return [
            ["chat_id", "bigint", "long"],
            ["user_id", types._InputUser, "InputUser"],
            ["is_admin", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.chat_id, "bigint", "long"],
            [this.user_id, types._InputUser, "InputUser"],
            [this.is_admin, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** The ID of the group */
        Object.defineProperty(this, "chat_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The user to make admin */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to make them admin */
        Object.defineProperty(this, "is_admin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chat_id = params.chat_id;
        this.user_id = params.user_id;
        this.is_admin = params.is_admin;
    }
}
/** Turn a [basic group into a supergroup](https://core.telegram.org/api/channel#migration) */
export class messages_migrateChat_ extends Function_ {
    get [id]() {
        return 0xA2875319;
    }
    static get [name]() {
        return "messages.migrateChat";
    }
    static get [paramDesc]() {
        return [
            ["chat_id", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.chat_id, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Basic group](https://core.telegram.org/api/channel#basic-groups) to migrate */
        Object.defineProperty(this, "chat_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chat_id = params.chat_id;
    }
}
/** Search for messages and peers globally */
export class messages_searchGlobal_ extends Function_ {
    get [id]() {
        return 0x4BC6589A;
    }
    static get [name]() {
        return "messages.searchGlobal";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["folder_id", "number", "flags.0?int"],
            ["q", "string", "string"],
            ["filter", types._MessagesFilter, "MessagesFilter"],
            ["min_date", "number", "int"],
            ["max_date", "number", "int"],
            ["offset_rate", "number", "int"],
            ["offset_peer", types._InputPeer, "InputPeer"],
            ["offset_id", "number", "int"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.folder_id ?? null, "number", "flags.0?int"],
            [this.q, "string", "string"],
            [this.filter, types._MessagesFilter, "MessagesFilter"],
            [this.min_date, "number", "int"],
            [this.max_date, "number", "int"],
            [this.offset_rate, "number", "int"],
            [this.offset_peer, types._InputPeer, "InputPeer"],
            [this.offset_id, "number", "int"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) */
        Object.defineProperty(this, "folder_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Query */
        Object.defineProperty(this, "q", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Global search filter */
        Object.defineProperty(this, "filter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If a positive value was specified, the method will return only messages with date bigger than min\_date */
        Object.defineProperty(this, "min_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If a positive value was transferred, the method will return only messages with date smaller than max\_date */
        Object.defineProperty(this, "max_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Initially 0, then set to the [`next_rate` parameter of messages.messagesSlice](https://core.telegram.org/constructor/messages.messagesSlice) */
        Object.defineProperty(this, "offset_rate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.folder_id = params.folder_id;
        this.q = params.q;
        this.filter = params.filter;
        this.min_date = params.min_date;
        this.max_date = params.max_date;
        this.offset_rate = params.offset_rate;
        this.offset_peer = params.offset_peer;
        this.offset_id = params.offset_id;
        this.limit = params.limit;
    }
}
/** Reorder installed stickersets */
export class messages_reorderStickerSets_ extends Function_ {
    get [id]() {
        return 0x78337739;
    }
    static get [name]() {
        return "messages.reorderStickerSets";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["masks", "true", "flags.0?true"],
            ["emojis", "true", "flags.1?true"],
            ["order", ["bigint"], "Vector<long>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.masks ?? null, "true", "flags.0?true"],
            [this.emojis ?? null, "true", "flags.1?true"],
            [this.order, ["bigint"], "Vector<long>"],
        ];
    }
    constructor(params) {
        super();
        /** Reorder mask stickersets */
        Object.defineProperty(this, "masks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Reorder [custom emoji stickersets](https://core.telegram.org/api/custom-emoji) */
        Object.defineProperty(this, "emojis", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New stickerset order by stickerset IDs */
        Object.defineProperty(this, "order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.masks = params.masks;
        this.emojis = params.emojis;
        this.order = params.order;
    }
}
/** Get a document by its SHA256 hash, mainly used for gifs */
export class messages_getDocumentByHash_ extends Function_ {
    get [id]() {
        return 0xB1F2061F;
    }
    static get [name]() {
        return "messages.getDocumentByHash";
    }
    static get [paramDesc]() {
        return [
            ["sha256", Uint8Array, "bytes"],
            ["size", "bigint", "long"],
            ["mime_type", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.sha256, Uint8Array, "bytes"],
            [this.size, "bigint", "long"],
            [this.mime_type, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** SHA256 of file */
        Object.defineProperty(this, "sha256", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Size of the file in bytes */
        Object.defineProperty(this, "size", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Mime type */
        Object.defineProperty(this, "mime_type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sha256 = params.sha256;
        this.size = params.size;
        this.mime_type = params.mime_type;
    }
}
/** Get saved GIFs */
export class messages_getSavedGifs_ extends Function_ {
    get [id]() {
        return 0x5CF09635;
    }
    static get [name]() {
        return "messages.getSavedGifs";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Add GIF to saved gifs list */
export class messages_saveGif_ extends Function_ {
    get [id]() {
        return 0x327A30CB;
    }
    static get [name]() {
        return "messages.saveGif";
    }
    static get [paramDesc]() {
        return [
            ["id", types._InputDocument, "InputDocument"],
            ["unsave", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.id, types._InputDocument, "InputDocument"],
            [this.unsave, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** GIF to save */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to remove GIF from saved gifs list */
        Object.defineProperty(this, "unsave", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
        this.unsave = params.unsave;
    }
}
/** Query an inline bot */
export class messages_getInlineBotResults_ extends Function_ {
    get [id]() {
        return 0x514E999D;
    }
    static get [name]() {
        return "messages.getInlineBotResults";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["bot", types._InputUser, "InputUser"],
            ["peer", types._InputPeer, "InputPeer"],
            ["geo_point", types._InputGeoPoint, "flags.0?InputGeoPoint"],
            ["query", "string", "string"],
            ["offset", "string", "string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.bot, types._InputUser, "InputUser"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.geo_point ?? null, types._InputGeoPoint, "flags.0?InputGeoPoint"],
            [this.query, "string", "string"],
            [this.offset, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The bot to query */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The currently opened chat */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The geolocation, if requested */
        Object.defineProperty(this, "geo_point", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The query */
        Object.defineProperty(this, "query", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The offset within the results, will be passed directly as-is to the bot. */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot = params.bot;
        this.peer = params.peer;
        this.geo_point = params.geo_point;
        this.query = params.query;
        this.offset = params.offset;
    }
}
/** Answer an inline query, for bots only */
export class messages_setInlineBotResults_ extends Function_ {
    get [id]() {
        return 0xBB12A419;
    }
    static get [name]() {
        return "messages.setInlineBotResults";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["gallery", "true", "flags.0?true"],
            ["private", "true", "flags.1?true"],
            ["query_id", "bigint", "long"],
            ["results", [types._InputBotInlineResult], "Vector<InputBotInlineResult>"],
            ["cache_time", "number", "int"],
            ["next_offset", "string", "flags.2?string"],
            ["switch_pm", types._InlineBotSwitchPM, "flags.3?InlineBotSwitchPM"],
            ["switch_webview", types._InlineBotWebView, "flags.4?InlineBotWebView"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.gallery ?? null, "true", "flags.0?true"],
            [this.private ?? null, "true", "flags.1?true"],
            [this.query_id, "bigint", "long"],
            [this.results, [types._InputBotInlineResult], "Vector<InputBotInlineResult>"],
            [this.cache_time, "number", "int"],
            [this.next_offset ?? null, "string", "flags.2?string"],
            [this.switch_pm ?? null, types._InlineBotSwitchPM, "flags.3?InlineBotSwitchPM"],
            [this.switch_webview ?? null, types._InlineBotWebView, "flags.4?InlineBotWebView"],
        ];
    }
    constructor(params) {
        super();
        /** Set this flag if the results are composed of media files */
        Object.defineProperty(this, "gallery", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Set this flag if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query */
        Object.defineProperty(this, "private", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique identifier for the answered query */
        Object.defineProperty(this, "query_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Vector of results for the inline query */
        Object.defineProperty(this, "results", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. */
        Object.defineProperty(this, "cache_time", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. */
        Object.defineProperty(this, "next_offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If passed, clients will display a button on top of the remaining inline result list with the specified text, that switches the user to a private chat with the bot and sends the bot a start message with a certain parameter. */
        Object.defineProperty(this, "switch_pm", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If passed, clients will display a button on top of the remaining inline result list with the specified text, that switches the user to the specified [inline mode mini app](https://core.telegram.org/api/bots/webapps#inline-mode-mini-apps). */
        Object.defineProperty(this, "switch_webview", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.gallery = params.gallery;
        this.private = params.private;
        this.query_id = params.query_id;
        this.results = params.results;
        this.cache_time = params.cache_time;
        this.next_offset = params.next_offset;
        this.switch_pm = params.switch_pm;
        this.switch_webview = params.switch_webview;
    }
}
/** Send a result obtained using [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults). */
export class messages_sendInlineBotResult_ extends Function_ {
    get [id]() {
        return 0x3EBEE86A;
    }
    static get [name]() {
        return "messages.sendInlineBotResult";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["silent", "true", "flags.5?true"],
            ["background", "true", "flags.6?true"],
            ["clear_draft", "true", "flags.7?true"],
            ["hide_via", "true", "flags.11?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["reply_to", types._InputReplyTo, "flags.0?InputReplyTo"],
            ["random_id", "bigint", "long"],
            ["query_id", "bigint", "long"],
            ["id", "string", "string"],
            ["schedule_date", "number", "flags.10?int"],
            ["send_as", types._InputPeer, "flags.13?InputPeer"],
            ["quick_reply_shortcut", types._InputQuickReplyShortcut, "flags.17?InputQuickReplyShortcut"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.silent ?? null, "true", "flags.5?true"],
            [this.background ?? null, "true", "flags.6?true"],
            [this.clear_draft ?? null, "true", "flags.7?true"],
            [this.hide_via ?? null, "true", "flags.11?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.reply_to ?? null, types._InputReplyTo, "flags.0?InputReplyTo"],
            [this.random_id, "bigint", "long"],
            [this.query_id, "bigint", "long"],
            [this.id, "string", "string"],
            [this.schedule_date ?? null, "number", "flags.10?int"],
            [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
            [this.quick_reply_shortcut ?? null, types._InputQuickReplyShortcut, "flags.17?InputQuickReplyShortcut"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to send the message silently (no notification will be triggered on the other client) */
        Object.defineProperty(this, "silent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to send the message in background */
        Object.defineProperty(this, "background", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to clear the [draft](https://core.telegram.org/api/drafts) */
        Object.defineProperty(this, "clear_draft", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to hide the `via @botname` in the resulting message (only for bot usernames encountered in the [config](https://core.telegram.org/constructor/config)) */
        Object.defineProperty(this, "hide_via", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Destination */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, indicates that the message should be sent in reply to the specified message or story. */
        Object.defineProperty(this, "reply_to", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Random ID to avoid resending the same query */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Query ID from [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults) */
        Object.defineProperty(this, "query_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Result ID from [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults) */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Scheduled message date for scheduled messages */
        Object.defineProperty(this, "schedule_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Send this message as the specified peer */
        Object.defineProperty(this, "send_as", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "quick_reply_shortcut", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.silent = params.silent;
        this.background = params.background;
        this.clear_draft = params.clear_draft;
        this.hide_via = params.hide_via;
        this.peer = params.peer;
        this.reply_to = params.reply_to;
        this.random_id = params.random_id;
        this.query_id = params.query_id;
        this.id = params.id;
        this.schedule_date = params.schedule_date;
        this.send_as = params.send_as;
        this.quick_reply_shortcut = params.quick_reply_shortcut;
    }
}
/** Find out if a media message's caption can be edited */
export class messages_getMessageEditData_ extends Function_ {
    get [id]() {
        return 0xFDA68D36;
    }
    static get [name]() {
        return "messages.getMessageEditData";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where the media was sent */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of message */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Edit message */
export class messages_editMessage_ extends Function_ {
    get [id]() {
        return 0xDFD14005;
    }
    static get [name]() {
        return "messages.editMessage";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["no_webpage", "true", "flags.1?true"],
            ["invert_media", "true", "flags.16?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
            ["message", "string", "flags.11?string"],
            ["media", types._InputMedia, "flags.14?InputMedia"],
            ["reply_markup", types._ReplyMarkup, "flags.2?ReplyMarkup"],
            ["entities", [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
            ["schedule_date", "number", "flags.15?int"],
            ["quick_reply_shortcut_id", "number", "flags.17?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.no_webpage ?? null, "true", "flags.1?true"],
            [this.invert_media ?? null, "true", "flags.16?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
            [this.message ?? null, "string", "flags.11?string"],
            [this.media ?? null, types._InputMedia, "flags.14?InputMedia"],
            [this.reply_markup ?? null, types._ReplyMarkup, "flags.2?ReplyMarkup"],
            [this.entities ?? null, [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
            [this.schedule_date ?? null, "number", "flags.15?int"],
            [this.quick_reply_shortcut_id ?? null, "number", "flags.17?int"],
        ];
    }
    constructor(params) {
        super();
        /** Disable webpage preview */
        Object.defineProperty(this, "no_webpage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
        Object.defineProperty(this, "invert_media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Where was the message sent */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of the message to edit */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New message */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New attached media */
        Object.defineProperty(this, "media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Reply markup for inline keyboards */
        Object.defineProperty(this, "reply_markup", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Message entities for styled text](https://core.telegram.org/api/entities) */
        Object.defineProperty(this, "entities", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) */
        Object.defineProperty(this, "schedule_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "quick_reply_shortcut_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.no_webpage = params.no_webpage;
        this.invert_media = params.invert_media;
        this.peer = params.peer;
        this.id = params.id;
        this.message = params.message;
        this.media = params.media;
        this.reply_markup = params.reply_markup;
        this.entities = params.entities;
        this.schedule_date = params.schedule_date;
        this.quick_reply_shortcut_id = params.quick_reply_shortcut_id;
    }
}
/** Edit an inline bot message */
export class messages_editInlineBotMessage_ extends Function_ {
    get [id]() {
        return 0x83557DBA;
    }
    static get [name]() {
        return "messages.editInlineBotMessage";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["no_webpage", "true", "flags.1?true"],
            ["invert_media", "true", "flags.16?true"],
            ["id", types._InputBotInlineMessageID, "InputBotInlineMessageID"],
            ["message", "string", "flags.11?string"],
            ["media", types._InputMedia, "flags.14?InputMedia"],
            ["reply_markup", types._ReplyMarkup, "flags.2?ReplyMarkup"],
            ["entities", [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.no_webpage ?? null, "true", "flags.1?true"],
            [this.invert_media ?? null, "true", "flags.16?true"],
            [this.id, types._InputBotInlineMessageID, "InputBotInlineMessageID"],
            [this.message ?? null, "string", "flags.11?string"],
            [this.media ?? null, types._InputMedia, "flags.14?InputMedia"],
            [this.reply_markup ?? null, types._ReplyMarkup, "flags.2?ReplyMarkup"],
            [this.entities ?? null, [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
        ];
    }
    constructor(params) {
        super();
        /** Disable webpage preview */
        Object.defineProperty(this, "no_webpage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
        Object.defineProperty(this, "invert_media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Sent inline message ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Media */
        Object.defineProperty(this, "media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Reply markup for inline keyboards */
        Object.defineProperty(this, "reply_markup", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Message entities for styled text](https://core.telegram.org/api/entities) */
        Object.defineProperty(this, "entities", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.no_webpage = params.no_webpage;
        this.invert_media = params.invert_media;
        this.id = params.id;
        this.message = params.message;
        this.media = params.media;
        this.reply_markup = params.reply_markup;
        this.entities = params.entities;
    }
}
/** Press an inline callback button and get a callback answer from the bot */
export class messages_getBotCallbackAnswer_ extends Function_ {
    get [id]() {
        return 0x9342CA07;
    }
    static get [name]() {
        return "messages.getBotCallbackAnswer";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["game", "true", "flags.1?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
            ["data", Uint8Array, "flags.0?bytes"],
            ["password", types._InputCheckPasswordSRP, "flags.2?InputCheckPasswordSRP"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.game ?? null, "true", "flags.1?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
            [this.data ?? null, Uint8Array, "flags.0?bytes"],
            [this.password ?? null, types._InputCheckPasswordSRP, "flags.2?InputCheckPasswordSRP"],
        ];
    }
    constructor(params) {
        super();
        /** Whether this is a "play game" button */
        Object.defineProperty(this, "game", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Where was the inline keyboard sent */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of the Message with the inline keyboard */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Callback data */
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** For buttons [requiring you to verify your identity with your 2FA password](https://core.telegram.org/constructor/keyboardButtonCallback), the SRP payload generated using [SRP](https://core.telegram.org/api/srp). */
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.game = params.game;
        this.peer = params.peer;
        this.msg_id = params.msg_id;
        this.data = params.data;
        this.password = params.password;
    }
}
/** Set the callback answer to a user button press (bots only) */
export class messages_setBotCallbackAnswer_ extends Function_ {
    get [id]() {
        return 0xD58F130A;
    }
    static get [name]() {
        return "messages.setBotCallbackAnswer";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["alert", "true", "flags.1?true"],
            ["query_id", "bigint", "long"],
            ["message", "string", "flags.0?string"],
            ["url", "string", "flags.2?string"],
            ["cache_time", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.alert ?? null, "true", "flags.1?true"],
            [this.query_id, "bigint", "long"],
            [this.message ?? null, "string", "flags.0?string"],
            [this.url ?? null, "string", "flags.2?string"],
            [this.cache_time, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to show the message as a popup instead of a toast notification */
        Object.defineProperty(this, "alert", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Query ID */
        Object.defineProperty(this, "query_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Popup to show */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** URL to open */
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Cache validity */
        Object.defineProperty(this, "cache_time", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.alert = params.alert;
        this.query_id = params.query_id;
        this.message = params.message;
        this.url = params.url;
        this.cache_time = params.cache_time;
    }
}
/** Get dialog info of specified peers */
export class messages_getPeerDialogs_ extends Function_ {
    get [id]() {
        return 0xE470BCFD;
    }
    static get [name]() {
        return "messages.getPeerDialogs";
    }
    static get [paramDesc]() {
        return [
            ["peers", [types._InputDialogPeer], "Vector<InputDialogPeer>"],
        ];
    }
    get [params]() {
        return [
            [this.peers, [types._InputDialogPeer], "Vector<InputDialogPeer>"],
        ];
    }
    constructor(params) {
        super();
        /** Peers */
        Object.defineProperty(this, "peers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peers = params.peers;
    }
}
/** Save a message [draft](https://core.telegram.org/api/drafts) associated to a chat. */
export class messages_saveDraft_ extends Function_ {
    get [id]() {
        return 0x7FF3B806;
    }
    static get [name]() {
        return "messages.saveDraft";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["no_webpage", "true", "flags.1?true"],
            ["invert_media", "true", "flags.6?true"],
            ["reply_to", types._InputReplyTo, "flags.4?InputReplyTo"],
            ["peer", types._InputPeer, "InputPeer"],
            ["message", "string", "string"],
            ["entities", [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
            ["media", types._InputMedia, "flags.5?InputMedia"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.no_webpage ?? null, "true", "flags.1?true"],
            [this.invert_media ?? null, "true", "flags.6?true"],
            [this.reply_to ?? null, types._InputReplyTo, "flags.4?InputReplyTo"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.message, "string", "string"],
            [this.entities ?? null, [types._MessageEntity], "flags.3?Vector<MessageEntity>"],
            [this.media ?? null, types._InputMedia, "flags.5?InputMedia"],
        ];
    }
    constructor(params) {
        super();
        /** Disable generation of the webpage preview */
        Object.defineProperty(this, "no_webpage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
        Object.defineProperty(this, "invert_media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, indicates that the message should be sent in reply to the specified message or story. */
        Object.defineProperty(this, "reply_to", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Destination of the message that should be sent */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The draft */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message [entities](https://core.telegram.org/api/entities) for styled text */
        Object.defineProperty(this, "entities", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Attached media */
        Object.defineProperty(this, "media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.no_webpage = params.no_webpage;
        this.invert_media = params.invert_media;
        this.reply_to = params.reply_to;
        this.peer = params.peer;
        this.message = params.message;
        this.entities = params.entities;
        this.media = params.media;
    }
}
/** Return all message [drafts](https://core.telegram.org/api/drafts).
Returns all the latest [updateDraftMessage](https://core.telegram.org/constructor/updateDraftMessage) updates related to all chats with drafts. */
export class messages_getAllDrafts_ extends Function_ {
    get [id]() {
        return 0x6A3F8D65;
    }
    static get [name]() {
        return "messages.getAllDrafts";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get featured stickers */
export class messages_getFeaturedStickers_ extends Function_ {
    get [id]() {
        return 0x64780B14;
    }
    static get [name]() {
        return "messages.getFeaturedStickers";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Mark new featured stickers as read */
export class messages_readFeaturedStickers_ extends Function_ {
    get [id]() {
        return 0x5B118126;
    }
    static get [name]() {
        return "messages.readFeaturedStickers";
    }
    static get [paramDesc]() {
        return [
            ["id", ["bigint"], "Vector<long>"],
        ];
    }
    get [params]() {
        return [
            [this.id, ["bigint"], "Vector<long>"],
        ];
    }
    constructor(params) {
        super();
        /** IDs of stickersets to mark as read */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Get recent stickers */
export class messages_getRecentStickers_ extends Function_ {
    get [id]() {
        return 0x9DA9403B;
    }
    static get [name]() {
        return "messages.getRecentStickers";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["attached", "true", "flags.0?true"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.attached ?? null, "true", "flags.0?true"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Get stickers recently attached to photo or video files */
        Object.defineProperty(this, "attached", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.attached = params.attached;
        this.hash = params.hash;
    }
}
/** Add/remove sticker from recent stickers list */
export class messages_saveRecentSticker_ extends Function_ {
    get [id]() {
        return 0x392718F8;
    }
    static get [name]() {
        return "messages.saveRecentSticker";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["attached", "true", "flags.0?true"],
            ["id", types._InputDocument, "InputDocument"],
            ["unsave", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.attached ?? null, "true", "flags.0?true"],
            [this.id, types._InputDocument, "InputDocument"],
            [this.unsave, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to add/remove stickers recently attached to photo or video files */
        Object.defineProperty(this, "attached", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Sticker */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to save or unsave the sticker */
        Object.defineProperty(this, "unsave", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.attached = params.attached;
        this.id = params.id;
        this.unsave = params.unsave;
    }
}
/** Clear recent stickers */
export class messages_clearRecentStickers_ extends Function_ {
    get [id]() {
        return 0x8999602D;
    }
    static get [name]() {
        return "messages.clearRecentStickers";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["attached", "true", "flags.0?true"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.attached ?? null, "true", "flags.0?true"],
        ];
    }
    constructor(params) {
        super();
        /** Set this flag to clear the list of stickers recently attached to photo or video files */
        Object.defineProperty(this, "attached", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.attached = params?.attached;
    }
}
/** Get all archived stickers */
export class messages_getArchivedStickers_ extends Function_ {
    get [id]() {
        return 0x57F17692;
    }
    static get [name]() {
        return "messages.getArchivedStickers";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["masks", "true", "flags.0?true"],
            ["emojis", "true", "flags.1?true"],
            ["offset_id", "bigint", "long"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.masks ?? null, "true", "flags.0?true"],
            [this.emojis ?? null, "true", "flags.1?true"],
            [this.offset_id, "bigint", "long"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Get [mask stickers](https://core.telegram.org/api/stickers#mask-stickers) */
        Object.defineProperty(this, "masks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Get [custom emoji stickers](https://core.telegram.org/api/custom-emoji) */
        Object.defineProperty(this, "emojis", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.masks = params.masks;
        this.emojis = params.emojis;
        this.offset_id = params.offset_id;
        this.limit = params.limit;
    }
}
/** Get installed mask stickers */
export class messages_getMaskStickers_ extends Function_ {
    get [id]() {
        return 0x640F82B8;
    }
    static get [name]() {
        return "messages.getMaskStickers";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Get stickers attached to a photo or video */
export class messages_getAttachedStickers_ extends Function_ {
    get [id]() {
        return 0xCC5B67CC;
    }
    static get [name]() {
        return "messages.getAttachedStickers";
    }
    static get [paramDesc]() {
        return [
            ["media", types._InputStickeredMedia, "InputStickeredMedia"],
        ];
    }
    get [params]() {
        return [
            [this.media, types._InputStickeredMedia, "InputStickeredMedia"],
        ];
    }
    constructor(params) {
        super();
        /** Stickered media */
        Object.defineProperty(this, "media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.media = params.media;
    }
}
/** Use this method to set the score of the specified user in a game sent as a normal message (bots only). */
export class messages_setGameScore_ extends Function_ {
    get [id]() {
        return 0x8EF8ECC0;
    }
    static get [name]() {
        return "messages.setGameScore";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["edit_message", "true", "flags.0?true"],
            ["force", "true", "flags.1?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
            ["user_id", types._InputUser, "InputUser"],
            ["score", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.edit_message ?? null, "true", "flags.0?true"],
            [this.force ?? null, "true", "flags.1?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
            [this.user_id, types._InputUser, "InputUser"],
            [this.score, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Set this flag if the game message should be automatically edited to include the current scoreboard */
        Object.defineProperty(this, "edit_message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Set this flag if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
        Object.defineProperty(this, "force", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique identifier of target chat */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Identifier of the sent message */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** User identifier */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New score */
        Object.defineProperty(this, "score", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.edit_message = params.edit_message;
        this.force = params.force;
        this.peer = params.peer;
        this.id = params.id;
        this.user_id = params.user_id;
        this.score = params.score;
    }
}
/** Use this method to set the score of the specified user in a game sent as an inline message (bots only). */
export class messages_setInlineGameScore_ extends Function_ {
    get [id]() {
        return 0x15AD9F64;
    }
    static get [name]() {
        return "messages.setInlineGameScore";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["edit_message", "true", "flags.0?true"],
            ["force", "true", "flags.1?true"],
            ["id", types._InputBotInlineMessageID, "InputBotInlineMessageID"],
            ["user_id", types._InputUser, "InputUser"],
            ["score", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.edit_message ?? null, "true", "flags.0?true"],
            [this.force ?? null, "true", "flags.1?true"],
            [this.id, types._InputBotInlineMessageID, "InputBotInlineMessageID"],
            [this.user_id, types._InputUser, "InputUser"],
            [this.score, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Set this flag if the game message should be automatically edited to include the current scoreboard */
        Object.defineProperty(this, "edit_message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Set this flag if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
        Object.defineProperty(this, "force", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of the inline message */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** User identifier */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New score */
        Object.defineProperty(this, "score", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.edit_message = params.edit_message;
        this.force = params.force;
        this.id = params.id;
        this.user_id = params.user_id;
        this.score = params.score;
    }
}
/** Get highscores of a game */
export class messages_getGameHighScores_ extends Function_ {
    get [id]() {
        return 0xE822649D;
    }
    static get [name]() {
        return "messages.getGameHighScores";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
            ["user_id", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
            [this.user_id, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** Where was the game sent */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of message with game media attachment */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Get high scores made by a certain user */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
        this.user_id = params.user_id;
    }
}
/** Get highscores of a game sent using an inline bot */
export class messages_getInlineGameHighScores_ extends Function_ {
    get [id]() {
        return 0x0F635E1B;
    }
    static get [name]() {
        return "messages.getInlineGameHighScores";
    }
    static get [paramDesc]() {
        return [
            ["id", types._InputBotInlineMessageID, "InputBotInlineMessageID"],
            ["user_id", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            [this.id, types._InputBotInlineMessageID, "InputBotInlineMessageID"],
            [this.user_id, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** ID of inline message */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Get high scores of a certain user */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
        this.user_id = params.user_id;
    }
}
/** Get chats in common with a user */
export class messages_getCommonChats_ extends Function_ {
    get [id]() {
        return 0xE40CA104;
    }
    static get [name]() {
        return "messages.getCommonChats";
    }
    static get [paramDesc]() {
        return [
            ["user_id", types._InputUser, "InputUser"],
            ["max_id", "bigint", "long"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.user_id, types._InputUser, "InputUser"],
            [this.max_id, "bigint", "long"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** User ID */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum ID of chat to return (see [pagination](https://core.telegram.org/api/offsets)) */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.user_id = params.user_id;
        this.max_id = params.max_id;
        this.limit = params.limit;
    }
}
/** Get [instant view](https://instantview.telegram.org) page */
export class messages_getWebPage_ extends Function_ {
    get [id]() {
        return 0x8D9692A3;
    }
    static get [name]() {
        return "messages.getWebPage";
    }
    static get [paramDesc]() {
        return [
            ["url", "string", "string"],
            ["hash", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.url, "string", "string"],
            [this.hash, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** URL of IV page to fetch */
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.url = params.url;
        this.hash = params.hash;
    }
}
/** Pin/unpin a dialog */
export class messages_toggleDialogPin_ extends Function_ {
    get [id]() {
        return 0xA731E257;
    }
    static get [name]() {
        return "messages.toggleDialogPin";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["pinned", "true", "flags.0?true"],
            ["peer", types._InputDialogPeer, "InputDialogPeer"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.pinned ?? null, "true", "flags.0?true"],
            [this.peer, types._InputDialogPeer, "InputDialogPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to pin or unpin the dialog */
        Object.defineProperty(this, "pinned", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The dialog to pin */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.pinned = params.pinned;
        this.peer = params.peer;
    }
}
/** Reorder pinned dialogs */
export class messages_reorderPinnedDialogs_ extends Function_ {
    get [id]() {
        return 0x3B1ADF37;
    }
    static get [name]() {
        return "messages.reorderPinnedDialogs";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["force", "true", "flags.0?true"],
            ["folder_id", "number", "int"],
            ["order", [types._InputDialogPeer], "Vector<InputDialogPeer>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.force ?? null, "true", "flags.0?true"],
            [this.folder_id, "number", "int"],
            [this.order, [types._InputDialogPeer], "Vector<InputDialogPeer>"],
        ];
    }
    constructor(params) {
        super();
        /** If set, dialogs pinned server-side but not present in the `order` field will be unpinned. */
        Object.defineProperty(this, "force", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) */
        Object.defineProperty(this, "folder_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New dialog order */
        Object.defineProperty(this, "order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.force = params.force;
        this.folder_id = params.folder_id;
        this.order = params.order;
    }
}
/** Get pinned dialogs */
export class messages_getPinnedDialogs_ extends Function_ {
    get [id]() {
        return 0xD6B94DF2;
    }
    static get [name]() {
        return "messages.getPinnedDialogs";
    }
    static get [paramDesc]() {
        return [
            ["folder_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.folder_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) */
        Object.defineProperty(this, "folder_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.folder_id = params.folder_id;
    }
}
/** If you sent an invoice requesting a shipping address and the parameter is\_flexible was specified, the bot will receive an [updateBotShippingQuery](https://core.telegram.org/constructor/updateBotShippingQuery) update. Use this method to reply to shipping queries. */
export class messages_setBotShippingResults_ extends Function_ {
    get [id]() {
        return 0xE5F672FA;
    }
    static get [name]() {
        return "messages.setBotShippingResults";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["query_id", "bigint", "long"],
            ["error", "string", "flags.0?string"],
            ["shipping_options", [types._ShippingOption], "flags.1?Vector<ShippingOption>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.query_id, "bigint", "long"],
            [this.error ?? null, "string", "flags.0?string"],
            [this.shipping_options ?? null, [types._ShippingOption], "flags.1?Vector<ShippingOption>"],
        ];
    }
    constructor(params) {
        super();
        /** Unique identifier for the query to be answered */
        Object.defineProperty(this, "query_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable"). Telegram will display this message to the user. */
        Object.defineProperty(this, "error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** A vector of available shipping options. */
        Object.defineProperty(this, "shipping_options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.query_id = params.query_id;
        this.error = params.error;
        this.shipping_options = params.shipping_options;
    }
}
/** Once the user has confirmed their payment and shipping details, the bot receives an [updateBotPrecheckoutQuery](https://core.telegram.org/constructor/updateBotPrecheckoutQuery) update.
Use this method to respond to such pre-checkout queries.
**Note**: Telegram must receive an answer within 10 seconds after the pre-checkout query was sent. */
export class messages_setBotPrecheckoutResults_ extends Function_ {
    get [id]() {
        return 0x09C2DD95;
    }
    static get [name]() {
        return "messages.setBotPrecheckoutResults";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["success", "true", "flags.1?true"],
            ["query_id", "bigint", "long"],
            ["error", "string", "flags.0?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.success ?? null, "true", "flags.1?true"],
            [this.query_id, "bigint", "long"],
            [this.error ?? null, "string", "flags.0?string"],
        ];
    }
    constructor(params) {
        super();
        /** Set this flag if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order, otherwise do not set it, and set the `error` field, instead */
        Object.defineProperty(this, "success", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique identifier for the query to be answered */
        Object.defineProperty(this, "query_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Required if the `success` isn't set. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
        Object.defineProperty(this, "error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.success = params.success;
        this.query_id = params.query_id;
        this.error = params.error;
    }
}
/** Upload a file and associate it to a chat (without actually sending it to the chat) */
export class messages_uploadMedia_ extends Function_ {
    get [id]() {
        return 0x14967978;
    }
    static get [name]() {
        return "messages.uploadMedia";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["business_connection_id", "string", "flags.0?string"],
            ["peer", types._InputPeer, "InputPeer"],
            ["media", types._InputMedia, "InputMedia"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.business_connection_id ?? null, "string", "flags.0?string"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.media, types._InputMedia, "InputMedia"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "business_connection_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The chat, can be [inputPeerEmpty](https://core.telegram.org/constructor/inputPeerEmpty) for bots and [inputPeerSelf](https://core.telegram.org/constructor/inputPeerSelf) for users. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** File uploaded in chunks as described in [files »](https://core.telegram.org/api/files) */
        Object.defineProperty(this, "media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.business_connection_id = params.business_connection_id;
        this.peer = params.peer;
        this.media = params.media;
    }
}
/** Notify the other user in a private chat that a screenshot of the chat was taken */
export class messages_sendScreenshotNotification_ extends Function_ {
    get [id]() {
        return 0xA1405817;
    }
    static get [name]() {
        return "messages.sendScreenshotNotification";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["reply_to", types._InputReplyTo, "InputReplyTo"],
            ["random_id", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.reply_to, types._InputReplyTo, "InputReplyTo"],
            [this.random_id, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Other user */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Indicates the message that was screenshotted (the specified message ID can also be `0` to avoid indicating any specific message). */
        Object.defineProperty(this, "reply_to", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Random ID to avoid message resending */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.reply_to = params.reply_to;
        this.random_id = params.random_id;
    }
}
/** Get faved stickers */
export class messages_getFavedStickers_ extends Function_ {
    get [id]() {
        return 0x04F1AAA9;
    }
    static get [name]() {
        return "messages.getFavedStickers";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Mark or unmark a sticker as favorite */
export class messages_faveSticker_ extends Function_ {
    get [id]() {
        return 0xB9FFC55B;
    }
    static get [name]() {
        return "messages.faveSticker";
    }
    static get [paramDesc]() {
        return [
            ["id", types._InputDocument, "InputDocument"],
            ["unfave", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.id, types._InputDocument, "InputDocument"],
            [this.unfave, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Sticker in question */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to add or remove a sticker from favorites */
        Object.defineProperty(this, "unfave", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
        this.unfave = params.unfave;
    }
}
/** Get unread messages where we were mentioned */
export class messages_getUnreadMentions_ extends Function_ {
    get [id]() {
        return 0xF107E790;
    }
    static get [name]() {
        return "messages.getUnreadMentions";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["top_msg_id", "number", "flags.0?int"],
            ["offset_id", "number", "int"],
            ["add_offset", "number", "int"],
            ["limit", "number", "int"],
            ["max_id", "number", "int"],
            ["min_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.top_msg_id ?? null, "number", "flags.0?int"],
            [this.offset_id, "number", "int"],
            [this.add_offset, "number", "int"],
            [this.limit, "number", "int"],
            [this.max_id, "number", "int"],
            [this.min_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where to look for mentions */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, considers only messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
        Object.defineProperty(this, "top_msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "add_offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum message ID to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Minimum message ID to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "min_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.top_msg_id = params.top_msg_id;
        this.offset_id = params.offset_id;
        this.add_offset = params.add_offset;
        this.limit = params.limit;
        this.max_id = params.max_id;
        this.min_id = params.min_id;
    }
}
/** Mark mentions as read */
export class messages_readMentions_ extends Function_ {
    get [id]() {
        return 0x36E5BF4D;
    }
    static get [name]() {
        return "messages.readMentions";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["top_msg_id", "number", "flags.0?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.top_msg_id ?? null, "number", "flags.0?int"],
        ];
    }
    constructor(params) {
        super();
        /** Dialog */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Mark as read only mentions within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
        Object.defineProperty(this, "top_msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.top_msg_id = params.top_msg_id;
    }
}
/** Get live location history of a certain user */
export class messages_getRecentLocations_ extends Function_ {
    get [id]() {
        return 0x702A40E0;
    }
    static get [name]() {
        return "messages.getRecentLocations";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["limit", "number", "int"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.limit, "number", "int"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** User */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.limit = params.limit;
        this.hash = params.hash;
    }
}
/** Send an [album or grouped media](https://core.telegram.org/api/files#albums-grouped-media) */
export class messages_sendMultiMedia_ extends Function_ {
    get [id]() {
        return 0x0C964709;
    }
    static get [name]() {
        return "messages.sendMultiMedia";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["silent", "true", "flags.5?true"],
            ["background", "true", "flags.6?true"],
            ["clear_draft", "true", "flags.7?true"],
            ["noforwards", "true", "flags.14?true"],
            ["update_stickersets_order", "true", "flags.15?true"],
            ["invert_media", "true", "flags.16?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["reply_to", types._InputReplyTo, "flags.0?InputReplyTo"],
            ["multi_media", [types._InputSingleMedia], "Vector<InputSingleMedia>"],
            ["schedule_date", "number", "flags.10?int"],
            ["send_as", types._InputPeer, "flags.13?InputPeer"],
            ["quick_reply_shortcut", types._InputQuickReplyShortcut, "flags.17?InputQuickReplyShortcut"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.silent ?? null, "true", "flags.5?true"],
            [this.background ?? null, "true", "flags.6?true"],
            [this.clear_draft ?? null, "true", "flags.7?true"],
            [this.noforwards ?? null, "true", "flags.14?true"],
            [this.update_stickersets_order ?? null, "true", "flags.15?true"],
            [this.invert_media ?? null, "true", "flags.16?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.reply_to ?? null, types._InputReplyTo, "flags.0?InputReplyTo"],
            [this.multi_media, [types._InputSingleMedia], "Vector<InputSingleMedia>"],
            [this.schedule_date ?? null, "number", "flags.10?int"],
            [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
            [this.quick_reply_shortcut ?? null, types._InputQuickReplyShortcut, "flags.17?InputQuickReplyShortcut"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to send the album silently (no notification triggered) */
        Object.defineProperty(this, "silent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Send in background? */
        Object.defineProperty(this, "background", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to clear [drafts](https://core.telegram.org/api/drafts) */
        Object.defineProperty(this, "clear_draft", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled */
        Object.defineProperty(this, "noforwards", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to move used stickersets to top, [see here for more info on this flag »](https://core.telegram.org/api/stickers#recent-stickersets) */
        Object.defineProperty(this, "update_stickersets_order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
        Object.defineProperty(this, "invert_media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The destination chat */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, indicates that the message should be sent in reply to the specified message or story. */
        Object.defineProperty(this, "reply_to", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The medias to send: note that they must be separately uploaded using [messages.uploadMedia](https://core.telegram.org/method/messages.uploadMedia) first, using raw `inputMediaUploaded*` constructors is not supported. */
        Object.defineProperty(this, "multi_media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Scheduled message date for scheduled messages */
        Object.defineProperty(this, "schedule_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Send this message as the specified peer */
        Object.defineProperty(this, "send_as", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "quick_reply_shortcut", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.silent = params.silent;
        this.background = params.background;
        this.clear_draft = params.clear_draft;
        this.noforwards = params.noforwards;
        this.update_stickersets_order = params.update_stickersets_order;
        this.invert_media = params.invert_media;
        this.peer = params.peer;
        this.reply_to = params.reply_to;
        this.multi_media = params.multi_media;
        this.schedule_date = params.schedule_date;
        this.send_as = params.send_as;
        this.quick_reply_shortcut = params.quick_reply_shortcut;
    }
}
/** Upload encrypted file and associate it to a secret chat */
export class messages_uploadEncryptedFile_ extends Function_ {
    get [id]() {
        return 0x5057C497;
    }
    static get [name]() {
        return "messages.uploadEncryptedFile";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputEncryptedChat, "InputEncryptedChat"],
            ["file", types._InputEncryptedFile, "InputEncryptedFile"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputEncryptedChat, "InputEncryptedChat"],
            [this.file, types._InputEncryptedFile, "InputEncryptedFile"],
        ];
    }
    constructor(params) {
        super();
        /** The secret chat to associate the file to */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The file */
        Object.defineProperty(this, "file", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.file = params.file;
    }
}
/** Search for stickersets */
export class messages_searchStickerSets_ extends Function_ {
    get [id]() {
        return 0x35705B8A;
    }
    static get [name]() {
        return "messages.searchStickerSets";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["exclude_featured", "true", "flags.0?true"],
            ["q", "string", "string"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.exclude_featured ?? null, "true", "flags.0?true"],
            [this.q, "string", "string"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Exclude featured stickersets from results */
        Object.defineProperty(this, "exclude_featured", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Query string */
        Object.defineProperty(this, "q", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.exclude_featured = params.exclude_featured;
        this.q = params.q;
        this.hash = params.hash;
    }
}
/** Get message ranges for saving the user's chat history */
export class messages_getSplitRanges_ extends Function_ {
    get [id]() {
        return 0x1CFF7E08;
    }
    static get [name]() {
        return "messages.getSplitRanges";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Manually mark dialog as unread */
export class messages_markDialogUnread_ extends Function_ {
    get [id]() {
        return 0xC286D98F;
    }
    static get [name]() {
        return "messages.markDialogUnread";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["unread", "true", "flags.0?true"],
            ["peer", types._InputDialogPeer, "InputDialogPeer"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.unread ?? null, "true", "flags.0?true"],
            [this.peer, types._InputDialogPeer, "InputDialogPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Mark as unread/read */
        Object.defineProperty(this, "unread", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Dialog */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.unread = params.unread;
        this.peer = params.peer;
    }
}
/** Get dialogs manually marked as unread */
export class messages_getDialogUnreadMarks_ extends Function_ {
    get [id]() {
        return 0x22E24E22;
    }
    static get [name]() {
        return "messages.getDialogUnreadMarks";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Clear all [drafts](https://core.telegram.org/api/drafts). */
export class messages_clearAllDrafts_ extends Function_ {
    get [id]() {
        return 0x7E58EE9C;
    }
    static get [name]() {
        return "messages.clearAllDrafts";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Pin a message */
export class messages_updatePinnedMessage_ extends Function_ {
    get [id]() {
        return 0xD2AAF7EC;
    }
    static get [name]() {
        return "messages.updatePinnedMessage";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["silent", "true", "flags.0?true"],
            ["unpin", "true", "flags.1?true"],
            ["pm_oneside", "true", "flags.2?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.silent ?? null, "true", "flags.0?true"],
            [this.unpin ?? null, "true", "flags.1?true"],
            [this.pm_oneside ?? null, "true", "flags.2?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Pin the message silently, without triggering a notification */
        Object.defineProperty(this, "silent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether the message should unpinned or pinned */
        Object.defineProperty(this, "unpin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether the message should only be pinned on the local side of a one-to-one chat */
        Object.defineProperty(this, "pm_oneside", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The peer where to pin the message */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The message to pin or unpin */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.silent = params.silent;
        this.unpin = params.unpin;
        this.pm_oneside = params.pm_oneside;
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Vote in a [poll](https://core.telegram.org/constructor/poll) */
export class messages_sendVote_ extends Function_ {
    get [id]() {
        return 0x10EA6184;
    }
    static get [name]() {
        return "messages.sendVote";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
            ["options", [Uint8Array], "Vector<bytes>"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
            [this.options, [Uint8Array], "Vector<bytes>"],
        ];
    }
    constructor(params) {
        super();
        /** The chat where the poll was sent */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The message ID of the poll */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The options that were chosen */
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.msg_id = params.msg_id;
        this.options = params.options;
    }
}
/** Get poll results */
export class messages_getPollResults_ extends Function_ {
    get [id]() {
        return 0x73BB643B;
    }
    static get [name]() {
        return "messages.getPollResults";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where the poll was found */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID of poll message */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.msg_id = params.msg_id;
    }
}
/** Get count of online users in a chat */
export class messages_getOnlines_ extends Function_ {
    get [id]() {
        return 0x6E2BE050;
    }
    static get [name]() {
        return "messages.getOnlines";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** The chat */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Edit the description of a [group/supergroup/channel](https://core.telegram.org/api/channel). */
export class messages_editChatAbout_ extends Function_ {
    get [id]() {
        return 0xDEF60797;
    }
    static get [name]() {
        return "messages.editChatAbout";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["about", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.about, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The [group/supergroup/channel](https://core.telegram.org/api/channel). */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The new description */
        Object.defineProperty(this, "about", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.about = params.about;
    }
}
/** Edit the default banned rights of a [channel/supergroup/group](https://core.telegram.org/api/channel). */
export class messages_editChatDefaultBannedRights_ extends Function_ {
    get [id]() {
        return 0xA5866B41;
    }
    static get [name]() {
        return "messages.editChatDefaultBannedRights";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["banned_rights", types._ChatBannedRights, "ChatBannedRights"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.banned_rights, types._ChatBannedRights, "ChatBannedRights"],
        ];
    }
    constructor(params) {
        super();
        /** The peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The new global rights */
        Object.defineProperty(this, "banned_rights", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.banned_rights = params.banned_rights;
    }
}
/** Get localized [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). */
export class messages_getEmojiKeywords_ extends Function_ {
    get [id]() {
        return 0x35A0E062;
    }
    static get [name]() {
        return "messages.getEmojiKeywords";
    }
    static get [paramDesc]() {
        return [
            ["lang_code", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.lang_code, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Language code */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lang_code = params.lang_code;
    }
}
/** Get changed [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). */
export class messages_getEmojiKeywordsDifference_ extends Function_ {
    get [id]() {
        return 0x1508B6AF;
    }
    static get [name]() {
        return "messages.getEmojiKeywordsDifference";
    }
    static get [paramDesc]() {
        return [
            ["lang_code", "string", "string"],
            ["from_version", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.lang_code, "string", "string"],
            [this.from_version, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Language code */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Previous stored emoji keyword list `version` */
        Object.defineProperty(this, "from_version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lang_code = params.lang_code;
        this.from_version = params.from_version;
    }
}
/** Obtain a list of related languages that must be used when fetching [emoji keyword lists »](https://core.telegram.org/api/custom-emoji#emoji-keywords). */
export class messages_getEmojiKeywordsLanguages_ extends Function_ {
    get [id]() {
        return 0x4E9963B2;
    }
    static get [name]() {
        return "messages.getEmojiKeywordsLanguages";
    }
    static get [paramDesc]() {
        return [
            ["lang_codes", ["string"], "Vector<string>"],
        ];
    }
    get [params]() {
        return [
            [this.lang_codes, ["string"], "Vector<string>"],
        ];
    }
    constructor(params) {
        super();
        /** The user's language codes */
        Object.defineProperty(this, "lang_codes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lang_codes = params.lang_codes;
    }
}
/** Returns an HTTP URL which can be used to automatically log in into translation platform and suggest new [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). The URL will be valid for 30 seconds after generation. */
export class messages_getEmojiURL_ extends Function_ {
    get [id]() {
        return 0xD5B10C26;
    }
    static get [name]() {
        return "messages.getEmojiURL";
    }
    static get [paramDesc]() {
        return [
            ["lang_code", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.lang_code, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Language code for which the emoji keywords will be suggested */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lang_code = params.lang_code;
    }
}
/** Get the number of results that would be found by a [messages.search](https://core.telegram.org/method/messages.search) call with the same parameters */
export class messages_getSearchCounters_ extends Function_ {
    get [id]() {
        return 0x1BBCF300;
    }
    static get [name]() {
        return "messages.getSearchCounters";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["saved_peer_id", types._InputPeer, "flags.2?InputPeer"],
            ["top_msg_id", "number", "flags.0?int"],
            ["filters", [types._MessagesFilter], "Vector<MessagesFilter>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.saved_peer_id ?? null, types._InputPeer, "flags.2?InputPeer"],
            [this.top_msg_id ?? null, "number", "flags.0?int"],
            [this.filters, [types._MessagesFilter], "Vector<MessagesFilter>"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where to search */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. */
        Object.defineProperty(this, "saved_peer_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, consider only messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
        Object.defineProperty(this, "top_msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Search filters */
        Object.defineProperty(this, "filters", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.saved_peer_id = params.saved_peer_id;
        this.top_msg_id = params.top_msg_id;
        this.filters = params.filters;
    }
}
/** Get more info about a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization) */
export class messages_requestUrlAuth_ extends Function_ {
    get [id]() {
        return 0x198FB446;
    }
    static get [name]() {
        return "messages.requestUrlAuth";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "flags.1?InputPeer"],
            ["msg_id", "number", "flags.1?int"],
            ["button_id", "number", "flags.1?int"],
            ["url", "string", "flags.2?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer ?? null, types._InputPeer, "flags.1?InputPeer"],
            [this.msg_id ?? null, "number", "flags.1?int"],
            [this.button_id ?? null, "number", "flags.1?int"],
            [this.url ?? null, "string", "flags.2?string"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where the message is located */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The message */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The ID of the button with the authorization request */
        Object.defineProperty(this, "button_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** URL used for [link URL authorization, click here for more info »](https://core.telegram.org/api/url-authorization#link-url-authorization) */
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params?.peer;
        this.msg_id = params?.msg_id;
        this.button_id = params?.button_id;
        this.url = params?.url;
    }
}
/** Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization) */
export class messages_acceptUrlAuth_ extends Function_ {
    get [id]() {
        return 0xB12C7125;
    }
    static get [name]() {
        return "messages.acceptUrlAuth";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["write_allowed", "true", "flags.0?true"],
            ["peer", types._InputPeer, "flags.1?InputPeer"],
            ["msg_id", "number", "flags.1?int"],
            ["button_id", "number", "flags.1?int"],
            ["url", "string", "flags.2?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.write_allowed ?? null, "true", "flags.0?true"],
            [this.peer ?? null, types._InputPeer, "flags.1?InputPeer"],
            [this.msg_id ?? null, "number", "flags.1?int"],
            [this.button_id ?? null, "number", "flags.1?int"],
            [this.url ?? null, "string", "flags.2?string"],
        ];
    }
    constructor(params) {
        super();
        /** Set this flag to allow the bot to send messages to you (if requested) */
        Object.defineProperty(this, "write_allowed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The location of the message */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID of the message with the login button */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of the login button */
        Object.defineProperty(this, "button_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** URL used for [link URL authorization, click here for more info »](https://core.telegram.org/api/url-authorization#link-url-authorization) */
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.write_allowed = params?.write_allowed;
        this.peer = params?.peer;
        this.msg_id = params?.msg_id;
        this.button_id = params?.button_id;
        this.url = params?.url;
    }
}
/** Should be called after the user hides the [report spam/add as contact bar](https://core.telegram.org/api/action-bar) of a new chat, effectively prevents the user from executing the actions specified in the [action bar »](https://core.telegram.org/api/action-bar). */
export class messages_hidePeerSettingsBar_ extends Function_ {
    get [id]() {
        return 0x4FACB138;
    }
    static get [name]() {
        return "messages.hidePeerSettingsBar";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Get scheduled messages */
export class messages_getScheduledHistory_ extends Function_ {
    get [id]() {
        return 0xF516760B;
    }
    static get [name]() {
        return "messages.getScheduledHistory";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.hash = params.hash;
    }
}
/** Get scheduled messages */
export class messages_getScheduledMessages_ extends Function_ {
    get [id]() {
        return 0xBDBB0464;
    }
    static get [name]() {
        return "messages.getScheduledMessages";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** IDs of scheduled messages */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Send scheduled messages right away */
export class messages_sendScheduledMessages_ extends Function_ {
    get [id]() {
        return 0xBD38850A;
    }
    static get [name]() {
        return "messages.sendScheduledMessages";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Scheduled message IDs */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Delete scheduled messages */
export class messages_deleteScheduledMessages_ extends Function_ {
    get [id]() {
        return 0x59AE2B16;
    }
    static get [name]() {
        return "messages.deleteScheduledMessages";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Scheduled message IDs */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Get poll results for non-anonymous polls */
export class messages_getPollVotes_ extends Function_ {
    get [id]() {
        return 0xB86E380E;
    }
    static get [name]() {
        return "messages.getPollVotes";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
            ["option", Uint8Array, "flags.0?bytes"],
            ["offset", "string", "flags.1?string"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
            [this.option ?? null, Uint8Array, "flags.0?bytes"],
            [this.offset ?? null, "string", "flags.1?string"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Chat where the poll was sent */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Get only results for the specified poll `option` */
        Object.defineProperty(this, "option", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Offset for results, taken from the `next_offset` field of [messages.votesList](https://core.telegram.org/constructor/messages.votesList), initially an empty string.
        Note: if no more results are available, the method call will return an empty `next_offset`; thus, avoid providing the `next_offset` returned in [messages.votesList](https://core.telegram.org/constructor/messages.votesList) if it is empty, to avoid an infinite loop. */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of results to return */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
        this.option = params.option;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
/** Apply changes to multiple stickersets */
export class messages_toggleStickerSets_ extends Function_ {
    get [id]() {
        return 0xB5052FEA;
    }
    static get [name]() {
        return "messages.toggleStickerSets";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["uninstall", "true", "flags.0?true"],
            ["archive", "true", "flags.1?true"],
            ["unarchive", "true", "flags.2?true"],
            ["stickersets", [types._InputStickerSet], "Vector<InputStickerSet>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.uninstall ?? null, "true", "flags.0?true"],
            [this.archive ?? null, "true", "flags.1?true"],
            [this.unarchive ?? null, "true", "flags.2?true"],
            [this.stickersets, [types._InputStickerSet], "Vector<InputStickerSet>"],
        ];
    }
    constructor(params) {
        super();
        /** Uninstall the specified stickersets */
        Object.defineProperty(this, "uninstall", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Archive the specified stickersets */
        Object.defineProperty(this, "archive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unarchive the specified stickersets */
        Object.defineProperty(this, "unarchive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Stickersets to act upon */
        Object.defineProperty(this, "stickersets", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.uninstall = params.uninstall;
        this.archive = params.archive;
        this.unarchive = params.unarchive;
        this.stickersets = params.stickersets;
    }
}
/** Get [folders](https://core.telegram.org/api/folders) */
export class messages_getDialogFilters_ extends Function_ {
    get [id]() {
        return 0xEFD48C89;
    }
    static get [name]() {
        return "messages.getDialogFilters";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get [suggested folders](https://core.telegram.org/api/folders) */
export class messages_getSuggestedDialogFilters_ extends Function_ {
    get [id]() {
        return 0xA29CD42C;
    }
    static get [name]() {
        return "messages.getSuggestedDialogFilters";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Update [folder](https://core.telegram.org/api/folders) */
export class messages_updateDialogFilter_ extends Function_ {
    get [id]() {
        return 0x1AD4A04A;
    }
    static get [name]() {
        return "messages.updateDialogFilter";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["id", "number", "int"],
            ["filter", types._DialogFilter, "flags.0?DialogFilter"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.id, "number", "int"],
            [this.filter ?? null, types._DialogFilter, "flags.0?DialogFilter"],
        ];
    }
    constructor(params) {
        super();
        /** [Folder](https://core.telegram.org/api/folders) ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Folder](https://core.telegram.org/api/folders) info */
        Object.defineProperty(this, "filter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
        this.filter = params.filter;
    }
}
/** Reorder [folders](https://core.telegram.org/api/folders) */
export class messages_updateDialogFiltersOrder_ extends Function_ {
    get [id]() {
        return 0xC563C1E4;
    }
    static get [name]() {
        return "messages.updateDialogFiltersOrder";
    }
    static get [paramDesc]() {
        return [
            ["order", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.order, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** New [folder](https://core.telegram.org/api/folders) order */
        Object.defineProperty(this, "order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.order = params.order;
    }
}
/** Method for fetching previously featured stickers */
export class messages_getOldFeaturedStickers_ extends Function_ {
    get [id]() {
        return 0x7ED094A1;
    }
    static get [name]() {
        return "messages.getOldFeaturedStickers";
    }
    static get [paramDesc]() {
        return [
            ["offset", "number", "int"],
            ["limit", "number", "int"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.offset, "number", "int"],
            [this.limit, "number", "int"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Offset */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.offset = params.offset;
        this.limit = params.limit;
        this.hash = params.hash;
    }
}
/** Get messages in a reply thread */
export class messages_getReplies_ extends Function_ {
    get [id]() {
        return 0x22DDD30C;
    }
    static get [name]() {
        return "messages.getReplies";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
            ["offset_id", "number", "int"],
            ["offset_date", "number", "int"],
            ["add_offset", "number", "int"],
            ["limit", "number", "int"],
            ["max_id", "number", "int"],
            ["min_id", "number", "int"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
            [this.offset_id, "number", "int"],
            [this.offset_date, "number", "int"],
            [this.add_offset, "number", "int"],
            [this.limit, "number", "int"],
            [this.max_id, "number", "int"],
            [this.min_id, "number", "int"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "add_offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If a positive value was transferred, the method will return only messages with ID smaller than max\_id */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If a positive value was transferred, the method will return only messages with ID bigger than min\_id */
        Object.defineProperty(this, "min_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.msg_id = params.msg_id;
        this.offset_id = params.offset_id;
        this.offset_date = params.offset_date;
        this.add_offset = params.add_offset;
        this.limit = params.limit;
        this.max_id = params.max_id;
        this.min_id = params.min_id;
        this.hash = params.hash;
    }
}
/** Get [discussion message](https://core.telegram.org/api/threads) from the [associated discussion group](https://core.telegram.org/api/discussion) of a channel to show it on top of the comment section, without actually joining the group */
export class messages_getDiscussionMessage_ extends Function_ {
    get [id]() {
        return 0x446972FD;
    }
    static get [name]() {
        return "messages.getDiscussionMessage";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** [Channel ID](https://core.telegram.org/api/channel) */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.msg_id = params.msg_id;
    }
}
/** Mark a [thread](https://core.telegram.org/api/threads) as read */
export class messages_readDiscussion_ extends Function_ {
    get [id]() {
        return 0xF731A9F4;
    }
    static get [name]() {
        return "messages.readDiscussion";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
            ["read_max_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
            [this.read_max_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Group ID */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of message that started the thread */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID up to which thread messages were read */
        Object.defineProperty(this, "read_max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.msg_id = params.msg_id;
        this.read_max_id = params.read_max_id;
    }
}
/** [Unpin](https://core.telegram.org/api/pin) all pinned messages */
export class messages_unpinAllMessages_ extends Function_ {
    get [id]() {
        return 0xEE22B9A8;
    }
    static get [name]() {
        return "messages.unpinAllMessages";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["top_msg_id", "number", "flags.0?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.top_msg_id ?? null, "number", "flags.0?int"],
        ];
    }
    constructor(params) {
        super();
        /** Chat where to unpin */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Forum topic](https://core.telegram.org/api/forum#forum-topics) where to unpin */
        Object.defineProperty(this, "top_msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.top_msg_id = params.top_msg_id;
    }
}
/** Delete a [chat](https://core.telegram.org/api/channel) */
export class messages_deleteChat_ extends Function_ {
    get [id]() {
        return 0x5BD0EE50;
    }
    static get [name]() {
        return "messages.deleteChat";
    }
    static get [paramDesc]() {
        return [
            ["chat_id", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.chat_id, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Chat ID */
        Object.defineProperty(this, "chat_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chat_id = params.chat_id;
    }
}
/** Delete the entire phone call history. */
export class messages_deletePhoneCallHistory_ extends Function_ {
    get [id]() {
        return 0xF9CBE409;
    }
    static get [name]() {
        return "messages.deletePhoneCallHistory";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["revoke", "true", "flags.0?true"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.revoke ?? null, "true", "flags.0?true"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to remove phone call history for participants as well */
        Object.defineProperty(this, "revoke", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.revoke = params?.revoke;
    }
}
/** Obtains information about a chat export file, generated by a foreign chat app, [click here for more info about imported chats »](https://core.telegram.org/api/import). */
export class messages_checkHistoryImport_ extends Function_ {
    get [id]() {
        return 0x43FE19F3;
    }
    static get [name]() {
        return "messages.checkHistoryImport";
    }
    static get [paramDesc]() {
        return [
            ["import_head", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.import_head, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Beginning of the message file; up to 100 lines. */
        Object.defineProperty(this, "import_head", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.import_head = params.import_head;
    }
}
/** Import chat history from a foreign chat app into a specific Telegram chat, [click here for more info about imported chats »](https://core.telegram.org/api/import). */
export class messages_initHistoryImport_ extends Function_ {
    get [id]() {
        return 0x34090C3B;
    }
    static get [name]() {
        return "messages.initHistoryImport";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["file", types._InputFile, "InputFile"],
            ["media_count", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.file, types._InputFile, "InputFile"],
            [this.media_count, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** The Telegram chat where the [history should be imported](https://core.telegram.org/api/import). */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** File with messages to import. */
        Object.defineProperty(this, "file", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of media files associated with the chat that will be uploaded using [messages.uploadImportedMedia](https://core.telegram.org/method/messages.uploadImportedMedia). */
        Object.defineProperty(this, "media_count", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.file = params.file;
        this.media_count = params.media_count;
    }
}
/** Upload a media file associated with an [imported chat, click here for more info »](https://core.telegram.org/api/import). */
export class messages_uploadImportedMedia_ extends Function_ {
    get [id]() {
        return 0x2A862092;
    }
    static get [name]() {
        return "messages.uploadImportedMedia";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["import_id", "bigint", "long"],
            ["file_name", "string", "string"],
            ["media", types._InputMedia, "InputMedia"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.import_id, "bigint", "long"],
            [this.file_name, "string", "string"],
            [this.media, types._InputMedia, "InputMedia"],
        ];
    }
    constructor(params) {
        super();
        /** The Telegram chat where the media will be imported */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Identifier of a [history import session](https://core.telegram.org/api/import), returned by [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport) */
        Object.defineProperty(this, "import_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** File name */
        Object.defineProperty(this, "file_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Media metadata */
        Object.defineProperty(this, "media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.import_id = params.import_id;
        this.file_name = params.file_name;
        this.media = params.media;
    }
}
/** Complete the [history import process](https://core.telegram.org/api/import), importing all messages into the chat.
To be called only after initializing the import with [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport) and uploading all files using [messages.uploadImportedMedia](https://core.telegram.org/method/messages.uploadImportedMedia). */
export class messages_startHistoryImport_ extends Function_ {
    get [id]() {
        return 0xB43DF344;
    }
    static get [name]() {
        return "messages.startHistoryImport";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["import_id", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.import_id, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** The Telegram chat where the messages should be [imported, click here for more info »](https://core.telegram.org/api/import) */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Identifier of a history import session, returned by [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport). */
        Object.defineProperty(this, "import_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.import_id = params.import_id;
    }
}
/** Get info about the chat invites of a specific chat */
export class messages_getExportedChatInvites_ extends Function_ {
    get [id]() {
        return 0xA2B5A3F6;
    }
    static get [name]() {
        return "messages.getExportedChatInvites";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["revoked", "true", "flags.3?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["admin_id", types._InputUser, "InputUser"],
            ["offset_date", "number", "flags.2?int"],
            ["offset_link", "string", "flags.2?string"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.revoked ?? null, "true", "flags.3?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.admin_id, types._InputUser, "InputUser"],
            [this.offset_date ?? null, "number", "flags.2?int"],
            [this.offset_link ?? null, "string", "flags.2?string"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to fetch revoked chat invites */
        Object.defineProperty(this, "revoked", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Chat */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to only fetch chat invites from this admin */
        Object.defineProperty(this, "admin_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_link", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.revoked = params.revoked;
        this.peer = params.peer;
        this.admin_id = params.admin_id;
        this.offset_date = params.offset_date;
        this.offset_link = params.offset_link;
        this.limit = params.limit;
    }
}
/** Get info about a chat invite */
export class messages_getExportedChatInvite_ extends Function_ {
    get [id]() {
        return 0x73746F5C;
    }
    static get [name]() {
        return "messages.getExportedChatInvite";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["link", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.link, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Chat */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Invite link */
        Object.defineProperty(this, "link", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.link = params.link;
    }
}
/** Edit an exported chat invite */
export class messages_editExportedChatInvite_ extends Function_ {
    get [id]() {
        return 0xBDCA2F75;
    }
    static get [name]() {
        return "messages.editExportedChatInvite";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["revoked", "true", "flags.2?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["link", "string", "string"],
            ["expire_date", "number", "flags.0?int"],
            ["usage_limit", "number", "flags.1?int"],
            ["request_needed", "boolean", "flags.3?Bool"],
            ["title", "string", "flags.4?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.revoked ?? null, "true", "flags.2?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.link, "string", "string"],
            [this.expire_date ?? null, "number", "flags.0?int"],
            [this.usage_limit ?? null, "number", "flags.1?int"],
            [this.request_needed ?? null, "boolean", "flags.3?Bool"],
            [this.title ?? null, "string", "flags.4?string"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to revoke the chat invite */
        Object.defineProperty(this, "revoked", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Chat */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Invite link */
        Object.defineProperty(this, "link", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New expiration date */
        Object.defineProperty(this, "expire_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of users that can join using this link */
        Object.defineProperty(this, "usage_limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether admin confirmation is required before admitting each separate user into the chat */
        Object.defineProperty(this, "request_needed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Description of the invite link, visible only to administrators */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.revoked = params.revoked;
        this.peer = params.peer;
        this.link = params.link;
        this.expire_date = params.expire_date;
        this.usage_limit = params.usage_limit;
        this.request_needed = params.request_needed;
        this.title = params.title;
    }
}
/** Delete all revoked chat invites */
export class messages_deleteRevokedExportedChatInvites_ extends Function_ {
    get [id]() {
        return 0x56987BD5;
    }
    static get [name]() {
        return "messages.deleteRevokedExportedChatInvites";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["admin_id", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.admin_id, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** Chat */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of the admin that originally generated the revoked chat invites */
        Object.defineProperty(this, "admin_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.admin_id = params.admin_id;
    }
}
/** Delete a chat invite */
export class messages_deleteExportedChatInvite_ extends Function_ {
    get [id]() {
        return 0xD464A42B;
    }
    static get [name]() {
        return "messages.deleteExportedChatInvite";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["link", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.link, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Invite link */
        Object.defineProperty(this, "link", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.link = params.link;
    }
}
/** Get info about chat invites generated by admins. */
export class messages_getAdminsWithInvites_ extends Function_ {
    get [id]() {
        return 0x3920E6EF;
    }
    static get [name]() {
        return "messages.getAdminsWithInvites";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Chat */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Get info about the users that joined the chat using a specific chat invite */
export class messages_getChatInviteImporters_ extends Function_ {
    get [id]() {
        return 0xDF04DD4E;
    }
    static get [name]() {
        return "messages.getChatInviteImporters";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["requested", "true", "flags.0?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["link", "string", "flags.1?string"],
            ["q", "string", "flags.2?string"],
            ["offset_date", "number", "int"],
            ["offset_user", types._InputUser, "InputUser"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.requested ?? null, "true", "flags.0?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.link ?? null, "string", "flags.1?string"],
            [this.q ?? null, "string", "flags.2?string"],
            [this.offset_date, "number", "int"],
            [this.offset_user, types._InputUser, "InputUser"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** If set, only returns info about users with pending [join requests »](https://core.telegram.org/api/invites#join-requests) */
        Object.defineProperty(this, "requested", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Chat */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Invite link */
        Object.defineProperty(this, "link", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Search for a user in the pending [join requests »](https://core.telegram.org/api/invites#join-requests) list: only available when the `requested` flag is set, cannot be used together with a specific `link`. */
        Object.defineProperty(this, "q", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** User ID for [pagination](https://core.telegram.org/api/offsets): if set, `offset_date` must also be set. */
        Object.defineProperty(this, "offset_user", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.requested = params.requested;
        this.peer = params.peer;
        this.link = params.link;
        this.q = params.q;
        this.offset_date = params.offset_date;
        this.offset_user = params.offset_user;
        this.limit = params.limit;
    }
}
/** Set maximum Time-To-Live of all messages in the specified chat */
export class messages_setHistoryTTL_ extends Function_ {
    get [id]() {
        return 0xB80E5FE4;
    }
    static get [name]() {
        return "messages.setHistoryTTL";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["period", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.period, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** The dialog */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Automatically delete all messages sent in the chat after this many seconds */
        Object.defineProperty(this, "period", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.period = params.period;
    }
}
/** Check whether chat history exported from another chat app can be [imported into a specific Telegram chat, click here for more info »](https://core.telegram.org/api/import). */
export class messages_checkHistoryImportPeer_ extends Function_ {
    get [id]() {
        return 0x5DC60F03;
    }
    static get [name]() {
        return "messages.checkHistoryImportPeer";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** The chat where we want to [import history »](https://core.telegram.org/api/import). */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Change the chat theme of a certain chat */
export class messages_setChatTheme_ extends Function_ {
    get [id]() {
        return 0xE63BE13F;
    }
    static get [name]() {
        return "messages.setChatTheme";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["emoticon", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.emoticon, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Private chat where to change theme */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Emoji, identifying a specific chat theme; a list of chat themes can be fetched using [account.getChatThemes](https://core.telegram.org/method/account.getChatThemes) */
        Object.defineProperty(this, "emoticon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.emoticon = params.emoticon;
    }
}
/** Get which users read a specific message: only available for groups and supergroups with less than [`chat_read_mark_size_threshold` members](https://core.telegram.org/api/config#chat-read-mark-size-threshold), read receipts will be stored for [`chat_read_mark_expire_period` seconds after the message was sent](https://core.telegram.org/api/config#chat-read-mark-expire-period), see [client configuration for more info »](https://core.telegram.org/api/config#client-configuration). */
export class messages_getMessageReadParticipants_ extends Function_ {
    get [id]() {
        return 0x31C1C44F;
    }
    static get [name]() {
        return "messages.getMessageReadParticipants";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Dialog */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.msg_id = params.msg_id;
    }
}
/** Returns information about the next messages of the specified type in the chat split by days. */
export class messages_getSearchResultsCalendar_ extends Function_ {
    get [id]() {
        return 0x6AA3F6BD;
    }
    static get [name]() {
        return "messages.getSearchResultsCalendar";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["saved_peer_id", types._InputPeer, "flags.2?InputPeer"],
            ["filter", types._MessagesFilter, "MessagesFilter"],
            ["offset_id", "number", "int"],
            ["offset_date", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.saved_peer_id ?? null, types._InputPeer, "flags.2?InputPeer"],
            [this.filter, types._MessagesFilter, "MessagesFilter"],
            [this.offset_id, "number", "int"],
            [this.offset_date, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where to search */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. */
        Object.defineProperty(this, "saved_peer_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message filter, [inputMessagesFilterEmpty](https://core.telegram.org/constructor/inputMessagesFilterEmpty), [inputMessagesFilterMyMentions](https://core.telegram.org/constructor/inputMessagesFilterMyMentions) filters are not supported by this method. */
        Object.defineProperty(this, "filter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.saved_peer_id = params.saved_peer_id;
        this.filter = params.filter;
        this.offset_id = params.offset_id;
        this.offset_date = params.offset_date;
    }
}
/** Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation. */
export class messages_getSearchResultsPositions_ extends Function_ {
    get [id]() {
        return 0x9C7F2F10;
    }
    static get [name]() {
        return "messages.getSearchResultsPositions";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["saved_peer_id", types._InputPeer, "flags.2?InputPeer"],
            ["filter", types._MessagesFilter, "MessagesFilter"],
            ["offset_id", "number", "int"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.saved_peer_id ?? null, types._InputPeer, "flags.2?InputPeer"],
            [this.filter, types._MessagesFilter, "MessagesFilter"],
            [this.offset_id, "number", "int"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where to search */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. */
        Object.defineProperty(this, "saved_peer_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message filter, [inputMessagesFilterEmpty](https://core.telegram.org/constructor/inputMessagesFilterEmpty), [inputMessagesFilterMyMentions](https://core.telegram.org/constructor/inputMessagesFilterMyMentions) filters are not supported by this method. */
        Object.defineProperty(this, "filter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.saved_peer_id = params.saved_peer_id;
        this.filter = params.filter;
        this.offset_id = params.offset_id;
        this.limit = params.limit;
    }
}
/** Dismiss or approve a chat [join request](https://core.telegram.org/api/invites#join-requests) related to a specific chat or channel. */
export class messages_hideChatJoinRequest_ extends Function_ {
    get [id]() {
        return 0x7FE7E815;
    }
    static get [name]() {
        return "messages.hideChatJoinRequest";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["approved", "true", "flags.0?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["user_id", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.approved ?? null, "true", "flags.0?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.user_id, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to dismiss or approve the chat [join request »](https://core.telegram.org/api/invites#join-requests) */
        Object.defineProperty(this, "approved", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The chat or channel */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The user whose [join request »](https://core.telegram.org/api/invites#join-requests) should be dismissed or approved */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.approved = params.approved;
        this.peer = params.peer;
        this.user_id = params.user_id;
    }
}
/** Dismiss or approve all [join requests](https://core.telegram.org/api/invites#join-requests) related to a specific chat or channel. */
export class messages_hideAllChatJoinRequests_ extends Function_ {
    get [id]() {
        return 0xE085F4EA;
    }
    static get [name]() {
        return "messages.hideAllChatJoinRequests";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["approved", "true", "flags.0?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["link", "string", "flags.1?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.approved ?? null, "true", "flags.0?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.link ?? null, "string", "flags.1?string"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to dismiss or approve all chat [join requests »](https://core.telegram.org/api/invites#join-requests) */
        Object.defineProperty(this, "approved", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The chat or channel */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only dismiss or approve [join requests »](https://core.telegram.org/api/invites#join-requests) initiated using this invite link */
        Object.defineProperty(this, "link", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.approved = params.approved;
        this.peer = params.peer;
        this.link = params.link;
    }
}
/** Enable or disable [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) on a channel or chat */
export class messages_toggleNoForwards_ extends Function_ {
    get [id]() {
        return 0xB11EAFA2;
    }
    static get [name]() {
        return "messages.toggleNoForwards";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["enabled", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.enabled, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** The chat or channel */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Enable or disable content protection */
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.enabled = params.enabled;
    }
}
/** Change the default peer that should be used when sending messages, reactions, poll votes to a specific group */
export class messages_saveDefaultSendAs_ extends Function_ {
    get [id]() {
        return 0xCCFDDF96;
    }
    static get [name]() {
        return "messages.saveDefaultSendAs";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["send_as", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.send_as, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Group */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The default peer that should be used when sending messages to the group */
        Object.defineProperty(this, "send_as", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.send_as = params.send_as;
    }
}
/** React to message. */
export class messages_sendReaction_ extends Function_ {
    get [id]() {
        return 0xD30D78D4;
    }
    static get [name]() {
        return "messages.sendReaction";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["big", "true", "flags.1?true"],
            ["add_to_recent", "true", "flags.2?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
            ["reaction", [types._Reaction], "flags.0?Vector<Reaction>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.big ?? null, "true", "flags.1?true"],
            [this.add_to_recent ?? null, "true", "flags.2?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
            [this.reaction ?? null, [types._Reaction], "flags.0?Vector<Reaction>"],
        ];
    }
    constructor(params) {
        super();
        /** Whether a bigger and longer reaction should be shown */
        Object.defineProperty(this, "big", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to add this reaction to the [recent reactions list »](https://core.telegram.org/api/reactions#recent-reactions). */
        Object.defineProperty(this, "add_to_recent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID to react to */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** A list of reactions */
        Object.defineProperty(this, "reaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.big = params.big;
        this.add_to_recent = params.add_to_recent;
        this.peer = params.peer;
        this.msg_id = params.msg_id;
        this.reaction = params.reaction;
    }
}
/** Get [message reactions »](https://core.telegram.org/api/reactions) */
export class messages_getMessagesReactions_ extends Function_ {
    get [id]() {
        return 0x8BBA90E6;
    }
    static get [name]() {
        return "messages.getMessagesReactions";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message IDs */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Get [message reaction](https://core.telegram.org/api/reactions) list, along with the sender of each reaction. */
export class messages_getMessageReactionsList_ extends Function_ {
    get [id]() {
        return 0x461B3F48;
    }
    static get [name]() {
        return "messages.getMessageReactionsList";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
            ["reaction", types._Reaction, "flags.0?Reaction"],
            ["offset", "string", "flags.1?string"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
            [this.reaction ?? null, types._Reaction, "flags.0?Reaction"],
            [this.offset ?? null, "string", "flags.1?string"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Get only reactions of this type */
        Object.defineProperty(this, "reaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Offset for pagination (taken from the `next_offset` field of the returned [messages.MessageReactionsList](https://core.telegram.org/type/messages.MessageReactionsList)); empty in the first request. */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
        this.reaction = params.reaction;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
/** Change the set of [message reactions »](https://core.telegram.org/api/reactions) that can be used in a certain group, supergroup or channel */
export class messages_setChatAvailableReactions_ extends Function_ {
    get [id]() {
        return 0xFEB16771;
    }
    static get [name]() {
        return "messages.setChatAvailableReactions";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["available_reactions", types._ChatReactions, "ChatReactions"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.available_reactions, types._ChatReactions, "ChatReactions"],
        ];
    }
    constructor(params) {
        super();
        /** Group where to apply changes */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Allowed reaction emojis */
        Object.defineProperty(this, "available_reactions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.available_reactions = params.available_reactions;
    }
}
/** Obtain available [message reactions »](https://core.telegram.org/api/reactions) */
export class messages_getAvailableReactions_ extends Function_ {
    get [id]() {
        return 0x18DEA0AC;
    }
    static get [name]() {
        return "messages.getAvailableReactions";
    }
    static get [paramDesc]() {
        return [
            ["hash", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Change default emoji reaction to use in the quick reaction menu: the value is synced across devices and can be fetched using [help.getConfig, `reactions_default` field](https://core.telegram.org/method/help.getConfig). */
export class messages_setDefaultReaction_ extends Function_ {
    get [id]() {
        return 0x4F47A016;
    }
    static get [name]() {
        return "messages.setDefaultReaction";
    }
    static get [paramDesc]() {
        return [
            ["reaction", types._Reaction, "Reaction"],
        ];
    }
    get [params]() {
        return [
            [this.reaction, types._Reaction, "Reaction"],
        ];
    }
    constructor(params) {
        super();
        /** New emoji reaction */
        Object.defineProperty(this, "reaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.reaction = params.reaction;
    }
}
/** Translate a given text. */
export class messages_translateText_ extends Function_ {
    get [id]() {
        return 0x63183030;
    }
    static get [name]() {
        return "messages.translateText";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "flags.0?InputPeer"],
            ["id", ["number"], "flags.0?Vector<int>"],
            ["text", [types._TextWithEntities], "flags.1?Vector<TextWithEntities>"],
            ["to_lang", "string", "string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer ?? null, types._InputPeer, "flags.0?InputPeer"],
            [this.id ?? null, ["number"], "flags.0?Vector<int>"],
            [this.text ?? null, [types._TextWithEntities], "flags.1?Vector<TextWithEntities>"],
            [this.to_lang, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** If the text is a chat message, the peer ID */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** A list of message IDs to translate */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** A list of styled messages to translate */
        Object.defineProperty(this, "text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Two-letter ISO 639-1 language code of the language to which the message is translated */
        Object.defineProperty(this, "to_lang", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
        this.text = params.text;
        this.to_lang = params.to_lang;
    }
}
/** Get unread reactions to messages you sent */
export class messages_getUnreadReactions_ extends Function_ {
    get [id]() {
        return 0x3223495B;
    }
    static get [name]() {
        return "messages.getUnreadReactions";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["top_msg_id", "number", "flags.0?int"],
            ["offset_id", "number", "int"],
            ["add_offset", "number", "int"],
            ["limit", "number", "int"],
            ["max_id", "number", "int"],
            ["min_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.top_msg_id ?? null, "number", "flags.0?int"],
            [this.offset_id, "number", "int"],
            [this.add_offset, "number", "int"],
            [this.limit, "number", "int"],
            [this.max_id, "number", "int"],
            [this.min_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, considers only reactions to messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
        Object.defineProperty(this, "top_msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "add_offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only return reactions for messages up until this message ID */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only return reactions for messages starting from this message ID */
        Object.defineProperty(this, "min_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.top_msg_id = params.top_msg_id;
        this.offset_id = params.offset_id;
        this.add_offset = params.add_offset;
        this.limit = params.limit;
        this.max_id = params.max_id;
        this.min_id = params.min_id;
    }
}
/** Mark [message reactions »](https://core.telegram.org/api/reactions) as read */
export class messages_readReactions_ extends Function_ {
    get [id]() {
        return 0x54AA7F8E;
    }
    static get [name]() {
        return "messages.readReactions";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["top_msg_id", "number", "flags.0?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.top_msg_id ?? null, "number", "flags.0?int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Mark as read only reactions to messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
        Object.defineProperty(this, "top_msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.top_msg_id = params.top_msg_id;
    }
}
/** View and search recently sent media.
This method does not support pagination. */
export class messages_searchSentMedia_ extends Function_ {
    get [id]() {
        return 0x107E31A0;
    }
    static get [name]() {
        return "messages.searchSentMedia";
    }
    static get [paramDesc]() {
        return [
            ["q", "string", "string"],
            ["filter", types._MessagesFilter, "MessagesFilter"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.q, "string", "string"],
            [this.filter, types._MessagesFilter, "MessagesFilter"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Optional search query */
        Object.defineProperty(this, "q", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message filter */
        Object.defineProperty(this, "filter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return (max 100). */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.q = params.q;
        this.filter = params.filter;
        this.limit = params.limit;
    }
}
/** Returns installed attachment menu [bot mini apps »](https://core.telegram.org/api/bots/attach) */
export class messages_getAttachMenuBots_ extends Function_ {
    get [id]() {
        return 0x16FCC2CB;
    }
    static get [name]() {
        return "messages.getAttachMenuBots";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Returns attachment menu entry for a [bot mini app that can be launched from the attachment menu »](https://core.telegram.org/api/bots/attach) */
export class messages_getAttachMenuBot_ extends Function_ {
    get [id]() {
        return 0x77216192;
    }
    static get [name]() {
        return "messages.getAttachMenuBot";
    }
    static get [paramDesc]() {
        return [
            ["bot", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            [this.bot, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** Bot ID */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot = params.bot;
    }
}
/** Enable or disable [web bot attachment menu »](https://core.telegram.org/api/bots/attach) */
export class messages_toggleBotInAttachMenu_ extends Function_ {
    get [id]() {
        return 0x69F59D69;
    }
    static get [name]() {
        return "messages.toggleBotInAttachMenu";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["write_allowed", "true", "flags.0?true"],
            ["bot", types._InputUser, "InputUser"],
            ["enabled", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.write_allowed ?? null, "true", "flags.0?true"],
            [this.bot, types._InputUser, "InputUser"],
            [this.enabled, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Whether the user authorizes the bot to write messages to them, if requested by [attachMenuBot](https://core.telegram.org/constructor/attachMenuBot).`request_write_access` */
        Object.defineProperty(this, "write_allowed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Bot ID */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Toggle */
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.write_allowed = params.write_allowed;
        this.bot = params.bot;
        this.enabled = params.enabled;
    }
}
/** Open a [bot mini app](https://core.telegram.org/bots/webapps), sending over user information after user confirmation. */
export class messages_requestWebView_ extends Function_ {
    get [id]() {
        return 0x269DC2C1;
    }
    static get [name]() {
        return "messages.requestWebView";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["from_bot_menu", "true", "flags.4?true"],
            ["silent", "true", "flags.5?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["bot", types._InputUser, "InputUser"],
            ["url", "string", "flags.1?string"],
            ["start_param", "string", "flags.3?string"],
            ["theme_params", types._DataJSON, "flags.2?DataJSON"],
            ["platform", "string", "string"],
            ["reply_to", types._InputReplyTo, "flags.0?InputReplyTo"],
            ["send_as", types._InputPeer, "flags.13?InputPeer"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.from_bot_menu ?? null, "true", "flags.4?true"],
            [this.silent ?? null, "true", "flags.5?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.bot, types._InputUser, "InputUser"],
            [this.url ?? null, "string", "flags.1?string"],
            [this.start_param ?? null, "string", "flags.3?string"],
            [this.theme_params ?? null, types._DataJSON, "flags.2?DataJSON"],
            [this.platform, "string", "string"],
            [this.reply_to ?? null, types._InputReplyTo, "flags.0?InputReplyTo"],
            [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Whether the webview was opened by clicking on the bot's [menu button »](https://core.telegram.org/api/bots/menu). */
        Object.defineProperty(this, "from_bot_menu", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](https://core.telegram.org/method/messages.sendWebViewResultMessage) should be sent silently (no notifications for the receivers). */
        Object.defineProperty(this, "silent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Dialog where the web app is being opened, and where the resulting message will be sent (see the [docs for more info »](https://core.telegram.org/api/bots/webapps)). */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Bot that owns the [web app](https://core.telegram.org/api/bots/webapps) */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Web app URL](https://core.telegram.org/api/bots/webapps) */
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If the web app was opened from the attachment menu using a [attachment menu deep link](https://core.telegram.org/api/links#bot-attachment-or-side-menu-links), `start_param` should contain the `data` from the `startattach` parameter. */
        Object.defineProperty(this, "start_param", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) */
        Object.defineProperty(this, "theme_params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Short name of the application; 0-64 English letters, digits, and underscores */
        Object.defineProperty(this, "platform", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, indicates that the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](https://core.telegram.org/method/messages.sendWebViewResultMessage) should be sent in reply to the specified message or story. */
        Object.defineProperty(this, "reply_to", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Open the web app as the specified peer, sending the resulting the message as the specified peer. */
        Object.defineProperty(this, "send_as", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.from_bot_menu = params.from_bot_menu;
        this.silent = params.silent;
        this.peer = params.peer;
        this.bot = params.bot;
        this.url = params.url;
        this.start_param = params.start_param;
        this.theme_params = params.theme_params;
        this.platform = params.platform;
        this.reply_to = params.reply_to;
        this.send_as = params.send_as;
    }
}
/** Indicate to the server (from the user side) that the user is still using a web app. */
export class messages_prolongWebView_ extends Function_ {
    get [id]() {
        return 0xB0D81A83;
    }
    static get [name]() {
        return "messages.prolongWebView";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["silent", "true", "flags.5?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["bot", types._InputUser, "InputUser"],
            ["query_id", "bigint", "long"],
            ["reply_to", types._InputReplyTo, "flags.0?InputReplyTo"],
            ["send_as", types._InputPeer, "flags.13?InputPeer"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.silent ?? null, "true", "flags.5?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.bot, types._InputUser, "InputUser"],
            [this.query_id, "bigint", "long"],
            [this.reply_to ?? null, types._InputReplyTo, "flags.0?InputReplyTo"],
            [this.send_as ?? null, types._InputPeer, "flags.13?InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Whether the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](https://core.telegram.org/method/messages.sendWebViewResultMessage) should be sent silently (no notifications for the receivers). */
        Object.defineProperty(this, "silent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Dialog where the web app was opened. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Bot that owns the [web app](https://core.telegram.org/api/bots/webapps) */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Web app interaction ID obtained from [messages.requestWebView](https://core.telegram.org/method/messages.requestWebView) */
        Object.defineProperty(this, "query_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, indicates that the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](https://core.telegram.org/method/messages.sendWebViewResultMessage) should be sent in reply to the specified message or story. */
        Object.defineProperty(this, "reply_to", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Open the web app as the specified peer */
        Object.defineProperty(this, "send_as", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.silent = params.silent;
        this.peer = params.peer;
        this.bot = params.bot;
        this.query_id = params.query_id;
        this.reply_to = params.reply_to;
        this.send_as = params.send_as;
    }
}
/** Open a [bot mini app](https://core.telegram.org/api/bots/webapps). */
export class messages_requestSimpleWebView_ extends Function_ {
    get [id]() {
        return 0x1A46500A;
    }
    static get [name]() {
        return "messages.requestSimpleWebView";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["from_switch_webview", "true", "flags.1?true"],
            ["from_side_menu", "true", "flags.2?true"],
            ["bot", types._InputUser, "InputUser"],
            ["url", "string", "flags.3?string"],
            ["start_param", "string", "flags.4?string"],
            ["theme_params", types._DataJSON, "flags.0?DataJSON"],
            ["platform", "string", "string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.from_switch_webview ?? null, "true", "flags.1?true"],
            [this.from_side_menu ?? null, "true", "flags.2?true"],
            [this.bot, types._InputUser, "InputUser"],
            [this.url ?? null, "string", "flags.3?string"],
            [this.start_param ?? null, "string", "flags.4?string"],
            [this.theme_params ?? null, types._DataJSON, "flags.0?DataJSON"],
            [this.platform, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Whether the webapp was opened by clicking on the `switch_webview` button shown on top of the inline results list returned by [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults). */
        Object.defineProperty(this, "from_switch_webview", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Set this flag if opening the Mini App from the installed [side menu entry »](https://core.telegram.org/api/bots/attach) or from a [Mini App link »](https://core.telegram.org/api/links#mini-app-links). */
        Object.defineProperty(this, "from_side_menu", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Bot that owns the mini app */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Web app URL, if opening from a keyboard button or inline result */
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Start parameter, if opening from a [Mini App link »](https://core.telegram.org/api/links#mini-app-links). */
        Object.defineProperty(this, "start_param", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) */
        Object.defineProperty(this, "theme_params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Short name of the application; 0-64 English letters, digits, and underscores */
        Object.defineProperty(this, "platform", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.from_switch_webview = params.from_switch_webview;
        this.from_side_menu = params.from_side_menu;
        this.bot = params.bot;
        this.url = params.url;
        this.start_param = params.start_param;
        this.theme_params = params.theme_params;
        this.platform = params.platform;
    }
}
/** Terminate webview interaction started with [messages.requestWebView](https://core.telegram.org/method/messages.requestWebView), sending the specified message to the chat on behalf of the user. */
export class messages_sendWebViewResultMessage_ extends Function_ {
    get [id]() {
        return 0x0A4314F5;
    }
    static get [name]() {
        return "messages.sendWebViewResultMessage";
    }
    static get [paramDesc]() {
        return [
            ["bot_query_id", "string", "string"],
            ["result", types._InputBotInlineResult, "InputBotInlineResult"],
        ];
    }
    get [params]() {
        return [
            [this.bot_query_id, "string", "string"],
            [this.result, types._InputBotInlineResult, "InputBotInlineResult"],
        ];
    }
    constructor(params) {
        super();
        /** Webview interaction ID obtained from [messages.requestWebView](https://core.telegram.org/method/messages.requestWebView) */
        Object.defineProperty(this, "bot_query_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message to send */
        Object.defineProperty(this, "result", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot_query_id = params.bot_query_id;
        this.result = params.result;
    }
}
/** Used by the user to relay data from an opened [reply keyboard bot mini app](https://core.telegram.org/api/bots/webapps) to the bot that owns it. */
export class messages_sendWebViewData_ extends Function_ {
    get [id]() {
        return 0xDC0242C8;
    }
    static get [name]() {
        return "messages.sendWebViewData";
    }
    static get [paramDesc]() {
        return [
            ["bot", types._InputUser, "InputUser"],
            ["random_id", "bigint", "long"],
            ["button_text", "string", "string"],
            ["data", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.bot, types._InputUser, "InputUser"],
            [this.random_id, "bigint", "long"],
            [this.button_text, "string", "string"],
            [this.data, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Bot that owns the web app */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique client message ID to prevent duplicate sending of the same event */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Text of the [keyboardButtonSimpleWebView](https://core.telegram.org/constructor/keyboardButtonSimpleWebView) that was pressed to open the web app. */
        Object.defineProperty(this, "button_text", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Data to relay to the bot, obtained from a [`web_app_data_send` JS event](https://core.telegram.org/api/web-events#web-app-data-send). */
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot = params.bot;
        this.random_id = params.random_id;
        this.button_text = params.button_text;
        this.data = params.data;
    }
}
/** [Transcribe voice message](https://core.telegram.org/api/transcribe) */
export class messages_transcribeAudio_ extends Function_ {
    get [id]() {
        return 0x269E9A49;
    }
    static get [name]() {
        return "messages.transcribeAudio";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer ID where the voice message was sent */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Voice message ID */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.msg_id = params.msg_id;
    }
}
/** Rate [transcribed voice message](https://core.telegram.org/api/transcribe) */
export class messages_rateTranscribedAudio_ extends Function_ {
    get [id]() {
        return 0x7F1D072F;
    }
    static get [name]() {
        return "messages.rateTranscribedAudio";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
            ["transcription_id", "bigint", "long"],
            ["good", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
            [this.transcription_id, "bigint", "long"],
            [this.good, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where the voice message was sent */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Transcription ID */
        Object.defineProperty(this, "transcription_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether the transcription was correct */
        Object.defineProperty(this, "good", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.msg_id = params.msg_id;
        this.transcription_id = params.transcription_id;
        this.good = params.good;
    }
}
/** Fetch [custom emoji stickers »](https://core.telegram.org/api/custom-emoji). */
export class messages_getCustomEmojiDocuments_ extends Function_ {
    get [id]() {
        return 0xD9AB0F54;
    }
    static get [name]() {
        return "messages.getCustomEmojiDocuments";
    }
    static get [paramDesc]() {
        return [
            ["document_id", ["bigint"], "Vector<long>"],
        ];
    }
    get [params]() {
        return [
            [this.document_id, ["bigint"], "Vector<long>"],
        ];
    }
    constructor(params) {
        super();
        /** [Custom emoji](https://core.telegram.org/api/custom-emoji) IDs from a [messageEntityCustomEmoji](https://core.telegram.org/constructor/messageEntityCustomEmoji). */
        Object.defineProperty(this, "document_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.document_id = params.document_id;
    }
}
/** Gets the list of currently installed [custom emoji stickersets](https://core.telegram.org/api/custom-emoji). */
export class messages_getEmojiStickers_ extends Function_ {
    get [id]() {
        return 0xFBFCA18F;
    }
    static get [name]() {
        return "messages.getEmojiStickers";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Gets featured custom emoji stickersets. */
export class messages_getFeaturedEmojiStickers_ extends Function_ {
    get [id]() {
        return 0x0ECF6736;
    }
    static get [name]() {
        return "messages.getFeaturedEmojiStickers";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Report a [message reaction](https://core.telegram.org/api/reactions) */
export class messages_reportReaction_ extends Function_ {
    get [id]() {
        return 0x3F64C076;
    }
    static get [name]() {
        return "messages.reportReaction";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
            ["reaction_peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
            [this.reaction_peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where the message was sent */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Peer that sent the reaction */
        Object.defineProperty(this, "reaction_peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
        this.reaction_peer = params.reaction_peer;
    }
}
/** Got popular [message reactions](https://core.telegram.org/api/reactions) */
export class messages_getTopReactions_ extends Function_ {
    get [id]() {
        return 0xBB8125BA;
    }
    static get [name]() {
        return "messages.getTopReactions";
    }
    static get [paramDesc]() {
        return [
            ["limit", "number", "int"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.limit, "number", "int"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.limit = params.limit;
        this.hash = params.hash;
    }
}
/** Get recently used [message reactions](https://core.telegram.org/api/reactions) */
export class messages_getRecentReactions_ extends Function_ {
    get [id]() {
        return 0x39461DB2;
    }
    static get [name]() {
        return "messages.getRecentReactions";
    }
    static get [paramDesc]() {
        return [
            ["limit", "number", "int"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.limit, "number", "int"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.limit = params.limit;
        this.hash = params.hash;
    }
}
/** Clear recently used [message reactions](https://core.telegram.org/api/reactions) */
export class messages_clearRecentReactions_ extends Function_ {
    get [id]() {
        return 0x9DFEEFB4;
    }
    static get [name]() {
        return "messages.clearRecentReactions";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get information about extended media */
export class messages_getExtendedMedia_ extends Function_ {
    get [id]() {
        return 0x84F80814;
    }
    static get [name]() {
        return "messages.getExtendedMedia";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message IDs */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Changes the default value of the Time-To-Live setting, applied to all new chats. */
export class messages_setDefaultHistoryTTL_ extends Function_ {
    get [id]() {
        return 0x9EB51445;
    }
    static get [name]() {
        return "messages.setDefaultHistoryTTL";
    }
    static get [paramDesc]() {
        return [
            ["period", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.period, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** The new default Time-To-Live of all messages sent in new chats. */
        Object.defineProperty(this, "period", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.period = params.period;
    }
}
/** Gets the default value of the Time-To-Live setting, applied to all new chats. */
export class messages_getDefaultHistoryTTL_ extends Function_ {
    get [id]() {
        return 0x658B7188;
    }
    static get [name]() {
        return "messages.getDefaultHistoryTTL";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](https://core.telegram.org/constructor/keyboardButtonRequestPeer) button. */
export class messages_sendBotRequestedPeer_ extends Function_ {
    get [id]() {
        return 0x91B2D060;
    }
    static get [name]() {
        return "messages.sendBotRequestedPeer";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
            ["button_id", "number", "int"],
            ["requested_peers", [types._InputPeer], "Vector<InputPeer>"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
            [this.button_id, "number", "int"],
            [this.requested_peers, [types._InputPeer], "Vector<InputPeer>"],
        ];
    }
    constructor(params) {
        super();
        /** The bot that sent the [keyboardButtonRequestPeer](https://core.telegram.org/constructor/keyboardButtonRequestPeer) button. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of the message that contained the reply keyboard with the [keyboardButtonRequestPeer](https://core.telegram.org/constructor/keyboardButtonRequestPeer) button. */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The `button_id` field from the [keyboardButtonRequestPeer](https://core.telegram.org/constructor/keyboardButtonRequestPeer) constructor. */
        Object.defineProperty(this, "button_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The chosen peers. */
        Object.defineProperty(this, "requested_peers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.msg_id = params.msg_id;
        this.button_id = params.button_id;
        this.requested_peers = params.requested_peers;
    }
}
/** Represents a list of [emoji categories](https://core.telegram.org/api/custom-emoji#emoji-categories), to be used when selecting [custom emojis](https://core.telegram.org/api/custom-emoji). */
export class messages_getEmojiGroups_ extends Function_ {
    get [id]() {
        return 0x7488CE5B;
    }
    static get [name]() {
        return "messages.getEmojiGroups";
    }
    static get [paramDesc]() {
        return [
            ["hash", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Represents a list of [emoji categories](https://core.telegram.org/api/custom-emoji#emoji-categories), to be used when selecting custom emojis to set as [custom emoji status](https://core.telegram.org/api). */
export class messages_getEmojiStatusGroups_ extends Function_ {
    get [id]() {
        return 0x2ECD56CD;
    }
    static get [name]() {
        return "messages.getEmojiStatusGroups";
    }
    static get [paramDesc]() {
        return [
            ["hash", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Represents a list of [emoji categories](https://core.telegram.org/api/custom-emoji#emoji-categories), to be used when selecting custom emojis to set as [profile picture](https://core.telegram.org/api/files#sticker-profile-pictures). */
export class messages_getEmojiProfilePhotoGroups_ extends Function_ {
    get [id]() {
        return 0x21A548F3;
    }
    static get [name]() {
        return "messages.getEmojiProfilePhotoGroups";
    }
    static get [paramDesc]() {
        return [
            ["hash", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Look for [custom emojis](https://core.telegram.org/api/custom-emoji) associated to a UTF8 emoji */
export class messages_searchCustomEmoji_ extends Function_ {
    get [id]() {
        return 0x2C11C0D7;
    }
    static get [name]() {
        return "messages.searchCustomEmoji";
    }
    static get [paramDesc]() {
        return [
            ["emoticon", "string", "string"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.emoticon, "string", "string"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** The emoji */
        Object.defineProperty(this, "emoticon", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.emoticon = params.emoticon;
        this.hash = params.hash;
    }
}
/** Show or hide the [real-time chat translation popup](https://core.telegram.org/api/translation) for a certain chat */
export class messages_togglePeerTranslations_ extends Function_ {
    get [id]() {
        return 0xE47CB579;
    }
    static get [name]() {
        return "messages.togglePeerTranslations";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["disabled", "true", "flags.0?true"],
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.disabled ?? null, "true", "flags.0?true"],
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to disable or enable the real-time chat translation popup */
        Object.defineProperty(this, "disabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.disabled = params.disabled;
        this.peer = params.peer;
    }
}
/** Obtain information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) */
export class messages_getBotApp_ extends Function_ {
    get [id]() {
        return 0x34FDC5C3;
    }
    static get [name]() {
        return "messages.getBotApp";
    }
    static get [paramDesc]() {
        return [
            ["app", types._InputBotApp, "InputBotApp"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.app, types._InputBotApp, "InputBotApp"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Bot app information obtained from a [Direct Mini App deep link »](https://core.telegram.org/api/links#direct-mini-app-links). */
        Object.defineProperty(this, "app", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.app = params.app;
        this.hash = params.hash;
    }
}
/** Open a [bot mini app](https://core.telegram.org/bots/webapps) from a [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links), sending over user information after user confirmation. */
export class messages_requestAppWebView_ extends Function_ {
    get [id]() {
        return 0x8C5A3B3C;
    }
    static get [name]() {
        return "messages.requestAppWebView";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["write_allowed", "true", "flags.0?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["app", types._InputBotApp, "InputBotApp"],
            ["start_param", "string", "flags.1?string"],
            ["theme_params", types._DataJSON, "flags.2?DataJSON"],
            ["platform", "string", "string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.write_allowed ?? null, "true", "flags.0?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.app, types._InputBotApp, "InputBotApp"],
            [this.start_param ?? null, "string", "flags.1?string"],
            [this.theme_params ?? null, types._DataJSON, "flags.2?DataJSON"],
            [this.platform, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Set this flag if the bot is asking permission to send messages to the user as specified in the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links) docs, and the user agreed. */
        Object.defineProperty(this, "write_allowed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If the client has clicked on the link in a Telegram chat, pass the chat's peer information; otherwise pass the bot's peer information, instead. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The app obtained by invoking [messages.getBotApp](https://core.telegram.org/method/messages.getBotApp) as specified in the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links) docs. */
        Object.defineProperty(this, "app", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If the `startapp` query string parameter is present in the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links), pass it to `start_param`. */
        Object.defineProperty(this, "start_param", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) */
        Object.defineProperty(this, "theme_params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Short name of the application; 0-64 English letters, digits, and underscores */
        Object.defineProperty(this, "platform", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.write_allowed = params.write_allowed;
        this.peer = params.peer;
        this.app = params.app;
        this.start_param = params.start_param;
        this.theme_params = params.theme_params;
        this.platform = params.platform;
    }
}
/** Set a custom [wallpaper »](https://core.telegram.org/api/wallpapers) in a specific private chat with another user. */
export class messages_setChatWallPaper_ extends Function_ {
    get [id]() {
        return 0x8FFACAE1;
    }
    static get [name]() {
        return "messages.setChatWallPaper";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["for_both", "true", "flags.3?true"],
            ["revert", "true", "flags.4?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["wallpaper", types._InputWallPaper, "flags.0?InputWallPaper"],
            ["settings", types._WallPaperSettings, "flags.2?WallPaperSettings"],
            ["id", "number", "flags.1?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.for_both ?? null, "true", "flags.3?true"],
            [this.revert ?? null, "true", "flags.4?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.wallpaper ?? null, types._InputWallPaper, "flags.0?InputWallPaper"],
            [this.settings ?? null, types._WallPaperSettings, "flags.2?WallPaperSettings"],
            [this.id ?? null, "number", "flags.1?int"],
        ];
    }
    constructor(params) {
        super();
        /** Only for [Premium](https://core.telegram.org/api/premium) users, sets the specified wallpaper for both users of the chat, without requiring confirmation from the other user. */
        Object.defineProperty(this, "for_both", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If we don't like the new wallpaper the other user of the chat has chosen for us using the `for_both` flag, we can re-set our previous wallpaper just on our side using this flag. */
        Object.defineProperty(this, "revert", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The private chat where the wallpaper will be set */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The [wallpaper »](https://core.telegram.org/api/wallpapers), obtained as described in the [wallpaper documentation »](https://core.telegram.org/api/wallpapers#uploading-wallpapers); must **not** be provided when installing a wallpaper obtained from a [messageActionSetChatWallPaper](https://core.telegram.org/constructor/messageActionSetChatWallPaper) service message (`id` must be provided, instead). */
        Object.defineProperty(this, "wallpaper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Wallpaper settings, obtained as described in the [wallpaper documentation »](https://core.telegram.org/api/wallpapers#uploading-wallpapers) or from [messageActionSetChatWallPaper](https://core.telegram.org/constructor/messageActionSetChatWallPaper).`wallpaper`.`settings`. */
        Object.defineProperty(this, "settings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If the wallpaper was obtained from a [messageActionSetChatWallPaper](https://core.telegram.org/constructor/messageActionSetChatWallPaper) service message, must contain the ID of that message. */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.for_both = params.for_both;
        this.revert = params.revert;
        this.peer = params.peer;
        this.wallpaper = params.wallpaper;
        this.settings = params.settings;
        this.id = params.id;
    }
}
/** Search for [custom emoji stickersets »](https://core.telegram.org/api/custom-emoji) */
export class messages_searchEmojiStickerSets_ extends Function_ {
    get [id]() {
        return 0x92B4494C;
    }
    static get [name]() {
        return "messages.searchEmojiStickerSets";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["exclude_featured", "true", "flags.0?true"],
            ["q", "string", "string"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.exclude_featured ?? null, "true", "flags.0?true"],
            [this.q, "string", "string"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Exclude featured stickersets from results */
        Object.defineProperty(this, "exclude_featured", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Query string */
        Object.defineProperty(this, "q", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.exclude_featured = params.exclude_featured;
        this.q = params.q;
        this.hash = params.hash;
    }
}
/** Returns the current saved dialog list, see [here »](https://core.telegram.org/api/saved-messages) for more info. */
export class messages_getSavedDialogs_ extends Function_ {
    get [id]() {
        return 0x5381D21A;
    }
    static get [name]() {
        return "messages.getSavedDialogs";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["exclude_pinned", "true", "flags.0?true"],
            ["offset_date", "number", "int"],
            ["offset_id", "number", "int"],
            ["offset_peer", types._InputPeer, "InputPeer"],
            ["limit", "number", "int"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.exclude_pinned ?? null, "true", "flags.0?true"],
            [this.offset_date, "number", "int"],
            [this.offset_id, "number", "int"],
            [this.offset_peer, types._InputPeer, "InputPeer"],
            [this.limit, "number", "int"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Exclude pinned dialogs */
        Object.defineProperty(this, "exclude_pinned", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) (`top_message` ID used for pagination) */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offset peer for pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of list elements to be returned */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.exclude_pinned = params.exclude_pinned;
        this.offset_date = params.offset_date;
        this.offset_id = params.offset_id;
        this.offset_peer = params.offset_peer;
        this.limit = params.limit;
        this.hash = params.hash;
    }
}
/** Returns [saved messages »](https://core.telegram.org/api/saved-messages) forwarded from a specific peer */
export class messages_getSavedHistory_ extends Function_ {
    get [id]() {
        return 0x3D9A414D;
    }
    static get [name]() {
        return "messages.getSavedHistory";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["offset_id", "number", "int"],
            ["offset_date", "number", "int"],
            ["add_offset", "number", "int"],
            ["limit", "number", "int"],
            ["max_id", "number", "int"],
            ["min_id", "number", "int"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.offset_id, "number", "int"],
            [this.offset_date, "number", "int"],
            [this.add_offset, "number", "int"],
            [this.limit, "number", "int"],
            [this.max_id, "number", "int"],
            [this.min_id, "number", "int"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Target peer */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only return messages starting from the specified message ID */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only return messages sent before the specified date */
        Object.defineProperty(this, "offset_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of list elements to be skipped, negative values are also accepted. */
        Object.defineProperty(this, "add_offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of results to return */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If a positive value was transferred, the method will return only messages with IDs less than **max\_id** */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If a positive value was transferred, the method will return only messages with IDs more than **min\_id** */
        Object.defineProperty(this, "min_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Result hash](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.offset_id = params.offset_id;
        this.offset_date = params.offset_date;
        this.add_offset = params.add_offset;
        this.limit = params.limit;
        this.max_id = params.max_id;
        this.min_id = params.min_id;
        this.hash = params.hash;
    }
}
/** Deletes messages forwarded from a specific peer to [saved messages »](https://core.telegram.org/api/saved-messages). */
export class messages_deleteSavedHistory_ extends Function_ {
    get [id]() {
        return 0x6E98102B;
    }
    static get [name]() {
        return "messages.deleteSavedHistory";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["max_id", "number", "int"],
            ["min_date", "number", "flags.2?int"],
            ["max_date", "number", "flags.3?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.max_id, "number", "int"],
            [this.min_date ?? null, "number", "flags.2?int"],
            [this.max_date ?? null, "number", "flags.3?int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer, whose messages will be deleted from [saved messages »](https://core.telegram.org/api/saved-messages) */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum ID of message to delete */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Delete all messages newer than this UNIX timestamp */
        Object.defineProperty(this, "min_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Delete all messages older than this UNIX timestamp */
        Object.defineProperty(this, "max_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.max_id = params.max_id;
        this.min_date = params.min_date;
        this.max_date = params.max_date;
    }
}
/** Get pinned [saved dialogs, see here »](https://core.telegram.org/api/saved-messages) for more info. */
export class messages_getPinnedSavedDialogs_ extends Function_ {
    get [id]() {
        return 0xD63D94E0;
    }
    static get [name]() {
        return "messages.getPinnedSavedDialogs";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Pin or unpin a [saved message dialog »](https://core.telegram.org/api/saved-messages). */
export class messages_toggleSavedDialogPin_ extends Function_ {
    get [id]() {
        return 0xAC81BBDE;
    }
    static get [name]() {
        return "messages.toggleSavedDialogPin";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["pinned", "true", "flags.0?true"],
            ["peer", types._InputDialogPeer, "InputDialogPeer"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.pinned ?? null, "true", "flags.0?true"],
            [this.peer, types._InputDialogPeer, "InputDialogPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to pin or unpin the dialog */
        Object.defineProperty(this, "pinned", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The dialog to pin */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.pinned = params.pinned;
        this.peer = params.peer;
    }
}
/** Reorder pinned [saved message dialogs »](https://core.telegram.org/api/saved-messages). */
export class messages_reorderPinnedSavedDialogs_ extends Function_ {
    get [id]() {
        return 0x8B716587;
    }
    static get [name]() {
        return "messages.reorderPinnedSavedDialogs";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["force", "true", "flags.0?true"],
            ["order", [types._InputDialogPeer], "Vector<InputDialogPeer>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.force ?? null, "true", "flags.0?true"],
            [this.order, [types._InputDialogPeer], "Vector<InputDialogPeer>"],
        ];
    }
    constructor(params) {
        super();
        /** If set, dialogs pinned server-side but not present in the `order` field will be unpinned. */
        Object.defineProperty(this, "force", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New dialog order */
        Object.defineProperty(this, "order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.force = params.force;
        this.order = params.order;
    }
}
export class messages_getSavedReactionTags_ extends Function_ {
    get [id]() {
        return 0x3637E05B;
    }
    static get [name]() {
        return "messages.getSavedReactionTags";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "flags.0?InputPeer"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer ?? null, types._InputPeer, "flags.0?InputPeer"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.hash = params.hash;
    }
}
export class messages_updateSavedReactionTag_ extends Function_ {
    get [id]() {
        return 0x60297DEC;
    }
    static get [name]() {
        return "messages.updateSavedReactionTag";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["reaction", types._Reaction, "Reaction"],
            ["title", "string", "flags.0?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.reaction, types._Reaction, "Reaction"],
            [this.title ?? null, "string", "flags.0?string"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "reaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.reaction = params.reaction;
        this.title = params.title;
    }
}
export class messages_getDefaultTagReactions_ extends Function_ {
    get [id]() {
        return 0xBDF93428;
    }
    static get [name]() {
        return "messages.getDefaultTagReactions";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
export class messages_getOutboxReadDate_ extends Function_ {
    get [id]() {
        return 0x8C4BFE5D;
    }
    static get [name]() {
        return "messages.getOutboxReadDate";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.msg_id = params.msg_id;
    }
}
export class messages_getQuickReplies_ extends Function_ {
    get [id]() {
        return 0xD483F2A8;
    }
    static get [name]() {
        return "messages.getQuickReplies";
    }
    static get [paramDesc]() {
        return [
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
export class messages_reorderQuickReplies_ extends Function_ {
    get [id]() {
        return 0x60331907;
    }
    static get [name]() {
        return "messages.reorderQuickReplies";
    }
    static get [paramDesc]() {
        return [
            ["order", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.order, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.order = params.order;
    }
}
export class messages_checkQuickReplyShortcut_ extends Function_ {
    get [id]() {
        return 0xF1D0FBD3;
    }
    static get [name]() {
        return "messages.checkQuickReplyShortcut";
    }
    static get [paramDesc]() {
        return [
            ["shortcut", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.shortcut, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "shortcut", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.shortcut = params.shortcut;
    }
}
export class messages_editQuickReplyShortcut_ extends Function_ {
    get [id]() {
        return 0x5C003CEF;
    }
    static get [name]() {
        return "messages.editQuickReplyShortcut";
    }
    static get [paramDesc]() {
        return [
            ["shortcut_id", "number", "int"],
            ["shortcut", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.shortcut_id, "number", "int"],
            [this.shortcut, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "shortcut_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortcut", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.shortcut_id = params.shortcut_id;
        this.shortcut = params.shortcut;
    }
}
export class messages_deleteQuickReplyShortcut_ extends Function_ {
    get [id]() {
        return 0x3CC04740;
    }
    static get [name]() {
        return "messages.deleteQuickReplyShortcut";
    }
    static get [paramDesc]() {
        return [
            ["shortcut_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.shortcut_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "shortcut_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.shortcut_id = params.shortcut_id;
    }
}
export class messages_getQuickReplyMessages_ extends Function_ {
    get [id]() {
        return 0x94A495C3;
    }
    static get [name]() {
        return "messages.getQuickReplyMessages";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["shortcut_id", "number", "int"],
            ["id", ["number"], "flags.0?Vector<int>"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.shortcut_id, "number", "int"],
            [this.id ?? null, ["number"], "flags.0?Vector<int>"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "shortcut_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.shortcut_id = params.shortcut_id;
        this.id = params.id;
        this.hash = params.hash;
    }
}
export class messages_sendQuickReplyMessages_ extends Function_ {
    get [id]() {
        return 0x6C750DE1;
    }
    static get [name]() {
        return "messages.sendQuickReplyMessages";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["shortcut_id", "number", "int"],
            ["id", ["number"], "Vector<int>"],
            ["random_id", ["bigint"], "Vector<long>"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.shortcut_id, "number", "int"],
            [this.id, ["number"], "Vector<int>"],
            [this.random_id, ["bigint"], "Vector<long>"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shortcut_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.shortcut_id = params.shortcut_id;
        this.id = params.id;
        this.random_id = params.random_id;
    }
}
export class messages_deleteQuickReplyMessages_ extends Function_ {
    get [id]() {
        return 0xE105E910;
    }
    static get [name]() {
        return "messages.deleteQuickReplyMessages";
    }
    static get [paramDesc]() {
        return [
            ["shortcut_id", "number", "int"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.shortcut_id, "number", "int"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "shortcut_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.shortcut_id = params.shortcut_id;
        this.id = params.id;
    }
}
export class messages_toggleDialogFilterTags_ extends Function_ {
    get [id]() {
        return 0xFD2DDA49;
    }
    static get [name]() {
        return "messages.toggleDialogFilterTags";
    }
    static get [paramDesc]() {
        return [
            ["enabled", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.enabled, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.enabled = params.enabled;
    }
}
export class messages_getMyStickers_ extends Function_ {
    get [id]() {
        return 0xD0B5E1FC;
    }
    static get [name]() {
        return "messages.getMyStickers";
    }
    static get [paramDesc]() {
        return [
            ["offset_id", "bigint", "long"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.offset_id, "bigint", "long"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.offset_id = params.offset_id;
        this.limit = params.limit;
    }
}
/** Returns a current state of updates. */
export class updates_getState_ extends Function_ {
    get [id]() {
        return 0xEDD4882A;
    }
    static get [name]() {
        return "updates.getState";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get new [updates](https://core.telegram.org/api/updates). */
export class updates_getDifference_ extends Function_ {
    get [id]() {
        return 0x19C2F763;
    }
    static get [name]() {
        return "updates.getDifference";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["pts", "number", "int"],
            ["pts_limit", "number", "flags.1?int"],
            ["pts_total_limit", "number", "flags.0?int"],
            ["date", "number", "int"],
            ["qts", "number", "int"],
            ["qts_limit", "number", "flags.2?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.pts, "number", "int"],
            [this.pts_limit ?? null, "number", "flags.1?int"],
            [this.pts_total_limit ?? null, "number", "flags.0?int"],
            [this.date, "number", "int"],
            [this.qts, "number", "int"],
            [this.qts_limit ?? null, "number", "flags.2?int"],
        ];
    }
    constructor(params) {
        super();
        /** PTS, see [updates](https://core.telegram.org/api/updates). */
        Object.defineProperty(this, "pts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** PTS limit */
        Object.defineProperty(this, "pts_limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** For fast updating: if provided and `pts + pts_total_limit < remote pts`, [updates.differenceTooLong](https://core.telegram.org/constructor/updates.differenceTooLong) will be returned.
        Simply tells the server to not return the difference if it is bigger than `pts_total_limit`
        If the remote pts is too big (> ~4000000), this field will default to 1000000 */
        Object.defineProperty(this, "pts_total_limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** date, see [updates](https://core.telegram.org/api/updates). */
        Object.defineProperty(this, "date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** QTS, see [updates](https://core.telegram.org/api/updates). */
        Object.defineProperty(this, "qts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** QTS limit */
        Object.defineProperty(this, "qts_limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.pts = params.pts;
        this.pts_limit = params.pts_limit;
        this.pts_total_limit = params.pts_total_limit;
        this.date = params.date;
        this.qts = params.qts;
        this.qts_limit = params.qts_limit;
    }
}
/** Returns the difference between the current state of updates of a certain channel and transmitted. */
export class updates_getChannelDifference_ extends Function_ {
    get [id]() {
        return 0x03173D78;
    }
    static get [name]() {
        return "updates.getChannelDifference";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["force", "true", "flags.0?true"],
            ["channel", types._InputChannel, "InputChannel"],
            ["filter", types._ChannelMessagesFilter, "ChannelMessagesFilter"],
            ["pts", "number", "int"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.force ?? null, "true", "flags.0?true"],
            [this.channel, types._InputChannel, "InputChannel"],
            [this.filter, types._ChannelMessagesFilter, "ChannelMessagesFilter"],
            [this.pts, "number", "int"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Set to true to skip some possibly unneeded updates and reduce server-side load */
        Object.defineProperty(this, "force", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The channel */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Messsage filter */
        Object.defineProperty(this, "filter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Persistent timestamp (see [updates](https://core.telegram.org/api/updates)) */
        Object.defineProperty(this, "pts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** How many updates to fetch, max `100000`
        Ordinary (non-bot) users are supposed to pass `10-100` */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.force = params.force;
        this.channel = params.channel;
        this.filter = params.filter;
        this.pts = params.pts;
        this.limit = params.limit;
    }
}
/** Installs a previously uploaded photo as a profile photo. */
export class photos_updateProfilePhoto_ extends Function_ {
    get [id]() {
        return 0x09E82039;
    }
    static get [name]() {
        return "photos.updateProfilePhoto";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["fallback", "true", "flags.0?true"],
            ["bot", types._InputUser, "flags.1?InputUser"],
            ["id", types._InputPhoto, "InputPhoto"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.fallback ?? null, "true", "flags.0?true"],
            [this.bot ?? null, types._InputUser, "flags.1?InputUser"],
            [this.id, types._InputPhoto, "InputPhoto"],
        ];
    }
    constructor(params) {
        super();
        /** If set, the chosen profile photo will be shown to users that can't display your main profile photo due to your privacy settings. */
        Object.defineProperty(this, "fallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Can contain info of a bot we own, to change the profile photo of that bot, instead of the current user. */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Input photo */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.fallback = params.fallback;
        this.bot = params.bot;
        this.id = params.id;
    }
}
/** Updates current user profile photo. */
export class photos_uploadProfilePhoto_ extends Function_ {
    get [id]() {
        return 0x0388A3B5;
    }
    static get [name]() {
        return "photos.uploadProfilePhoto";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["fallback", "true", "flags.3?true"],
            ["bot", types._InputUser, "flags.5?InputUser"],
            ["file", types._InputFile, "flags.0?InputFile"],
            ["video", types._InputFile, "flags.1?InputFile"],
            ["video_start_ts", "number", "flags.2?double"],
            ["video_emoji_markup", types._VideoSize, "flags.4?VideoSize"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.fallback ?? null, "true", "flags.3?true"],
            [this.bot ?? null, types._InputUser, "flags.5?InputUser"],
            [this.file ?? null, types._InputFile, "flags.0?InputFile"],
            [this.video ?? null, types._InputFile, "flags.1?InputFile"],
            [this.video_start_ts ?? null, "number", "flags.2?double"],
            [this.video_emoji_markup ?? null, types._VideoSize, "flags.4?VideoSize"],
        ];
    }
    constructor(params) {
        super();
        /** If set, the chosen profile photo will be shown to users that can't display your main profile photo due to your privacy settings. */
        Object.defineProperty(this, "fallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Can contain info of a bot we own, to change the profile photo of that bot, instead of the current user. */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Profile photo */
        Object.defineProperty(this, "file", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Animated profile picture](https://core.telegram.org/api/files#animated-profile-pictures) video */
        Object.defineProperty(this, "video", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Floating point UNIX timestamp in seconds, indicating the frame of the video/sticker that should be used as static preview; can only be used if `video` or `video_emoji_markup` is set. */
        Object.defineProperty(this, "video_start_ts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Animated sticker profile picture, must contain either a [videoSizeEmojiMarkup](https://core.telegram.org/constructor/videoSizeEmojiMarkup) or a [videoSizeStickerMarkup](https://core.telegram.org/constructor/videoSizeStickerMarkup) constructor. */
        Object.defineProperty(this, "video_emoji_markup", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.fallback = params?.fallback;
        this.bot = params?.bot;
        this.file = params?.file;
        this.video = params?.video;
        this.video_start_ts = params?.video_start_ts;
        this.video_emoji_markup = params?.video_emoji_markup;
    }
}
/** Deletes profile photos. The method returns a list of successfully deleted photo IDs. */
export class photos_deletePhotos_ extends Function_ {
    get [id]() {
        return 0x87CF7F2F;
    }
    static get [name]() {
        return "photos.deletePhotos";
    }
    static get [paramDesc]() {
        return [
            ["id", [types._InputPhoto], "Vector<InputPhoto>"],
        ];
    }
    get [params]() {
        return [
            [this.id, [types._InputPhoto], "Vector<InputPhoto>"],
        ];
    }
    constructor(params) {
        super();
        /** Input photos to delete */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Returns the list of user photos. */
export class photos_getUserPhotos_ extends Function_ {
    get [id]() {
        return 0x91CD32A8;
    }
    static get [name]() {
        return "photos.getUserPhotos";
    }
    static get [paramDesc]() {
        return [
            ["user_id", types._InputUser, "InputUser"],
            ["offset", "number", "int"],
            ["max_id", "bigint", "long"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.user_id, types._InputUser, "InputUser"],
            [this.offset, "number", "int"],
            [this.max_id, "bigint", "long"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** User ID */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of list elements to be skipped */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If a positive value was transferred, the method will return only photos with IDs less than the set one. This parameter is often useful when [refetching file references »](https://core.telegram.org/api/file_reference), as in conjuction with `limit=1` and `offset=-1` the [photo](https://core.telegram.org/constructor/photo) object with the `id` specified in `max_id` can be fetched. */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of list elements to be returned */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.user_id = params.user_id;
        this.offset = params.offset;
        this.max_id = params.max_id;
        this.limit = params.limit;
    }
}
/** Upload a custom profile picture for a contact, or suggest a new profile picture to a contact. */
export class photos_uploadContactProfilePhoto_ extends Function_ {
    get [id]() {
        return 0xE14C4A71;
    }
    static get [name]() {
        return "photos.uploadContactProfilePhoto";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["suggest", "true", "flags.3?true"],
            ["save", "true", "flags.4?true"],
            ["user_id", types._InputUser, "InputUser"],
            ["file", types._InputFile, "flags.0?InputFile"],
            ["video", types._InputFile, "flags.1?InputFile"],
            ["video_start_ts", "number", "flags.2?double"],
            ["video_emoji_markup", types._VideoSize, "flags.5?VideoSize"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.suggest ?? null, "true", "flags.3?true"],
            [this.save ?? null, "true", "flags.4?true"],
            [this.user_id, types._InputUser, "InputUser"],
            [this.file ?? null, types._InputFile, "flags.0?InputFile"],
            [this.video ?? null, types._InputFile, "flags.1?InputFile"],
            [this.video_start_ts ?? null, "number", "flags.2?double"],
            [this.video_emoji_markup ?? null, types._VideoSize, "flags.5?VideoSize"],
        ];
    }
    constructor(params) {
        super();
        /** If set, will send a [messageActionSuggestProfilePhoto](https://core.telegram.org/constructor/messageActionSuggestProfilePhoto) service message to `user_id`, suggesting them to use the specified profile picture; otherwise, will set a personal profile picture for the user (only visible to the current user). */
        Object.defineProperty(this, "suggest", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, removes a previously set personal profile picture (does not affect suggested profile pictures, to remove them simply deleted the [messageActionSuggestProfilePhoto](https://core.telegram.org/constructor/messageActionSuggestProfilePhoto) service message with [messages.deleteMessages](https://core.telegram.org/method/messages.deleteMessages)). */
        Object.defineProperty(this, "save", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The contact */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Profile photo */
        Object.defineProperty(this, "file", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Animated profile picture](https://core.telegram.org/api/files#animated-profile-pictures) video */
        Object.defineProperty(this, "video", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Floating point UNIX timestamp in seconds, indicating the frame of the video/sticker that should be used as static preview; can only be used if `video` or `video_emoji_markup` is set. */
        Object.defineProperty(this, "video_start_ts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Animated sticker profile picture, must contain either a [videoSizeEmojiMarkup](https://core.telegram.org/constructor/videoSizeEmojiMarkup) or a [videoSizeStickerMarkup](https://core.telegram.org/constructor/videoSizeStickerMarkup) constructor. */
        Object.defineProperty(this, "video_emoji_markup", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.suggest = params.suggest;
        this.save = params.save;
        this.user_id = params.user_id;
        this.file = params.file;
        this.video = params.video;
        this.video_start_ts = params.video_start_ts;
        this.video_emoji_markup = params.video_emoji_markup;
    }
}
/** Saves a part of file for further sending to one of the methods. */
export class upload_saveFilePart_ extends Function_ {
    get [id]() {
        return 0xB304A621;
    }
    static get [name]() {
        return "upload.saveFilePart";
    }
    static get [paramDesc]() {
        return [
            ["file_id", "bigint", "long"],
            ["file_part", "number", "int"],
            ["bytes", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.file_id, "bigint", "long"],
            [this.file_part, "number", "int"],
            [this.bytes, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** Random file identifier created by the client */
        Object.defineProperty(this, "file_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Numerical order of a part */
        Object.defineProperty(this, "file_part", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Binary data, content of a part */
        Object.defineProperty(this, "bytes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.file_id = params.file_id;
        this.file_part = params.file_part;
        this.bytes = params.bytes;
    }
}
/** Returns content of a whole file or its part. */
export class upload_getFile_ extends Function_ {
    get [id]() {
        return 0xBE5335BE;
    }
    static get [name]() {
        return "upload.getFile";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["precise", "true", "flags.0?true"],
            ["cdn_supported", "true", "flags.1?true"],
            ["location", types._InputFileLocation, "InputFileLocation"],
            ["offset", "bigint", "long"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.precise ?? null, "true", "flags.0?true"],
            [this.cdn_supported ?? null, "true", "flags.1?true"],
            [this.location, types._InputFileLocation, "InputFileLocation"],
            [this.offset, "bigint", "long"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Disable some checks on limit and offset values, useful for example to stream videos by keyframes */
        Object.defineProperty(this, "precise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether the current client supports [CDN downloads](https://core.telegram.org/cdn) */
        Object.defineProperty(this, "cdn_supported", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** File location */
        Object.defineProperty(this, "location", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of bytes to be skipped */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of bytes to be returned */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.precise = params.precise;
        this.cdn_supported = params.cdn_supported;
        this.location = params.location;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
/** Saves a part of a large file (over 10 MB in size) to be later passed to one of the methods. */
export class upload_saveBigFilePart_ extends Function_ {
    get [id]() {
        return 0xDE7B673D;
    }
    static get [name]() {
        return "upload.saveBigFilePart";
    }
    static get [paramDesc]() {
        return [
            ["file_id", "bigint", "long"],
            ["file_part", "number", "int"],
            ["file_total_parts", "number", "int"],
            ["bytes", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.file_id, "bigint", "long"],
            [this.file_part, "number", "int"],
            [this.file_total_parts, "number", "int"],
            [this.bytes, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** Random file id, created by the client */
        Object.defineProperty(this, "file_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Part sequence number */
        Object.defineProperty(this, "file_part", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Total number of parts */
        Object.defineProperty(this, "file_total_parts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Binary data, part contents */
        Object.defineProperty(this, "bytes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.file_id = params.file_id;
        this.file_part = params.file_part;
        this.file_total_parts = params.file_total_parts;
        this.bytes = params.bytes;
    }
}
/** Returns content of a web file, by proxying the request through telegram, see the [webfile docs for more info](https://core.telegram.org/api/files#downloading-webfiles). */
export class upload_getWebFile_ extends Function_ {
    get [id]() {
        return 0x24E6818D;
    }
    static get [name]() {
        return "upload.getWebFile";
    }
    static get [paramDesc]() {
        return [
            ["location", types._InputWebFileLocation, "InputWebFileLocation"],
            ["offset", "number", "int"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.location, types._InputWebFileLocation, "InputWebFileLocation"],
            [this.offset, "number", "int"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** The file to download */
        Object.defineProperty(this, "location", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of bytes to be skipped */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Number of bytes to be returned */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.location = params.location;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
/** Download a [CDN](https://core.telegram.org/cdn) file. */
export class upload_getCdnFile_ extends Function_ {
    get [id]() {
        return 0x395F69DA;
    }
    static get [name]() {
        return "upload.getCdnFile";
    }
    static get [paramDesc]() {
        return [
            ["file_token", Uint8Array, "bytes"],
            ["offset", "bigint", "long"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.file_token, Uint8Array, "bytes"],
            [this.offset, "bigint", "long"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** File token */
        Object.defineProperty(this, "file_token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Offset of chunk to download */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Length of chunk to download */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.file_token = params.file_token;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
/** Request a reupload of a certain file to a [CDN DC](https://core.telegram.org/cdn). */
export class upload_reuploadCdnFile_ extends Function_ {
    get [id]() {
        return 0x9B2754A8;
    }
    static get [name]() {
        return "upload.reuploadCdnFile";
    }
    static get [paramDesc]() {
        return [
            ["file_token", Uint8Array, "bytes"],
            ["request_token", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.file_token, Uint8Array, "bytes"],
            [this.request_token, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** File token */
        Object.defineProperty(this, "file_token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Request token */
        Object.defineProperty(this, "request_token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.file_token = params.file_token;
        this.request_token = params.request_token;
    }
}
/** Get SHA256 hashes for verifying downloaded [CDN](https://core.telegram.org/cdn) files */
export class upload_getCdnFileHashes_ extends Function_ {
    get [id]() {
        return 0x91DC3F31;
    }
    static get [name]() {
        return "upload.getCdnFileHashes";
    }
    static get [paramDesc]() {
        return [
            ["file_token", Uint8Array, "bytes"],
            ["offset", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.file_token, Uint8Array, "bytes"],
            [this.offset, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** File */
        Object.defineProperty(this, "file_token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Offset from which to start getting hashes */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.file_token = params.file_token;
        this.offset = params.offset;
    }
}
/** Get SHA256 hashes for verifying downloaded files */
export class upload_getFileHashes_ extends Function_ {
    get [id]() {
        return 0x9156982A;
    }
    static get [name]() {
        return "upload.getFileHashes";
    }
    static get [paramDesc]() {
        return [
            ["location", types._InputFileLocation, "InputFileLocation"],
            ["offset", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.location, types._InputFileLocation, "InputFileLocation"],
            [this.offset, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** File */
        Object.defineProperty(this, "location", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Offset from which to get file hashes */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.location = params.location;
        this.offset = params.offset;
    }
}
/** Returns current configuration, including data center configuration. */
export class help_getConfig_ extends Function_ {
    get [id]() {
        return 0xC4F9186B;
    }
    static get [name]() {
        return "help.getConfig";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Returns info on data center nearest to the user. */
export class help_getNearestDc_ extends Function_ {
    get [id]() {
        return 0x1FB33026;
    }
    static get [name]() {
        return "help.getNearestDc";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Returns information on update availability for the current application. */
export class help_getAppUpdate_ extends Function_ {
    get [id]() {
        return 0x522D5A7D;
    }
    static get [name]() {
        return "help.getAppUpdate";
    }
    static get [paramDesc]() {
        return [
            ["source", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.source, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Source */
        Object.defineProperty(this, "source", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.source = params.source;
    }
}
/** Returns localized text of a text message with an invitation. */
export class help_getInviteText_ extends Function_ {
    get [id]() {
        return 0x4D392343;
    }
    static get [name]() {
        return "help.getInviteText";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Returns the support user for the "ask a question" feature. */
export class help_getSupport_ extends Function_ {
    get [id]() {
        return 0x9CDF08CD;
    }
    static get [name]() {
        return "help.getSupport";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only */
export class help_setBotUpdatesStatus_ extends Function_ {
    get [id]() {
        return 0xEC22CFCD;
    }
    static get [name]() {
        return "help.setBotUpdatesStatus";
    }
    static get [paramDesc]() {
        return [
            ["pending_updates_count", "number", "int"],
            ["message", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.pending_updates_count, "number", "int"],
            [this.message, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Number of pending updates */
        Object.defineProperty(this, "pending_updates_count", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Error message, if present */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.pending_updates_count = params.pending_updates_count;
        this.message = params.message;
    }
}
/** Get configuration for [CDN](https://core.telegram.org/cdn) file downloads. */
export class help_getCdnConfig_ extends Function_ {
    get [id]() {
        return 0x52029342;
    }
    static get [name]() {
        return "help.getCdnConfig";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get recently used `t.me` links. */
export class help_getRecentMeUrls_ extends Function_ {
    get [id]() {
        return 0x3DC0F114;
    }
    static get [name]() {
        return "help.getRecentMeUrls";
    }
    static get [paramDesc]() {
        return [
            ["referer", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.referer, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Referrer */
        Object.defineProperty(this, "referer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.referer = params.referer;
    }
}
/** Look for updates of telegram's terms of service */
export class help_getTermsOfServiceUpdate_ extends Function_ {
    get [id]() {
        return 0x2CA51FD1;
    }
    static get [name]() {
        return "help.getTermsOfServiceUpdate";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Accept the new terms of service */
export class help_acceptTermsOfService_ extends Function_ {
    get [id]() {
        return 0xEE72F79A;
    }
    static get [name]() {
        return "help.acceptTermsOfService";
    }
    static get [paramDesc]() {
        return [
            ["id", types._DataJSON, "DataJSON"],
        ];
    }
    get [params]() {
        return [
            [this.id, types._DataJSON, "DataJSON"],
        ];
    }
    constructor(params) {
        super();
        /** ID of terms of service */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Get info about an unsupported deep link, see [here for more info »](https://core.telegram.org/api/links#unsupported-links). */
export class help_getDeepLinkInfo_ extends Function_ {
    get [id]() {
        return 0x3FEDC75F;
    }
    static get [name]() {
        return "help.getDeepLinkInfo";
    }
    static get [paramDesc]() {
        return [
            ["path", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.path, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Path component of a `tg:` link */
        Object.defineProperty(this, "path", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.path = params.path;
    }
}
/** Get app-specific configuration, see [client configuration](https://core.telegram.org/api/config#client-configuration) for more info on the result. */
export class help_getAppConfig_ extends Function_ {
    get [id]() {
        return 0x61E3F854;
    }
    static get [name]() {
        return "help.getAppConfig";
    }
    static get [paramDesc]() {
        return [
            ["hash", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Saves logs of application on the server. */
export class help_saveAppLog_ extends Function_ {
    get [id]() {
        return 0x6F02F748;
    }
    static get [name]() {
        return "help.saveAppLog";
    }
    static get [paramDesc]() {
        return [
            ["events", [types._InputAppEvent], "Vector<InputAppEvent>"],
        ];
    }
    get [params]() {
        return [
            [this.events, [types._InputAppEvent], "Vector<InputAppEvent>"],
        ];
    }
    constructor(params) {
        super();
        /** List of input events */
        Object.defineProperty(this, "events", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.events = params.events;
    }
}
/** Get [passport](https://core.telegram.org/passport) configuration */
export class help_getPassportConfig_ extends Function_ {
    get [id]() {
        return 0xC661AD08;
    }
    static get [name]() {
        return "help.getPassportConfig";
    }
    static get [paramDesc]() {
        return [
            ["hash", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Get localized name of the telegram support user */
export class help_getSupportName_ extends Function_ {
    get [id]() {
        return 0xD360E72C;
    }
    static get [name]() {
        return "help.getSupportName";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Can only be used by TSF members to obtain internal information. */
export class help_getUserInfo_ extends Function_ {
    get [id]() {
        return 0x038A08D3;
    }
    static get [name]() {
        return "help.getUserInfo";
    }
    static get [paramDesc]() {
        return [
            ["user_id", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            [this.user_id, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** User ID */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.user_id = params.user_id;
    }
}
/** Internal use */
export class help_editUserInfo_ extends Function_ {
    get [id]() {
        return 0x66B91B70;
    }
    static get [name]() {
        return "help.editUserInfo";
    }
    static get [paramDesc]() {
        return [
            ["user_id", types._InputUser, "InputUser"],
            ["message", "string", "string"],
            ["entities", [types._MessageEntity], "Vector<MessageEntity>"],
        ];
    }
    get [params]() {
        return [
            [this.user_id, types._InputUser, "InputUser"],
            [this.message, "string", "string"],
            [this.entities, [types._MessageEntity], "Vector<MessageEntity>"],
        ];
    }
    constructor(params) {
        super();
        /** User */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Message entities for styled text](https://core.telegram.org/api/entities) */
        Object.defineProperty(this, "entities", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.user_id = params.user_id;
        this.message = params.message;
        this.entities = params.entities;
    }
}
/** Get MTProxy/Public Service Announcement information */
export class help_getPromoData_ extends Function_ {
    get [id]() {
        return 0xC0977421;
    }
    static get [name]() {
        return "help.getPromoData";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Hide MTProxy/Public Service Announcement information */
export class help_hidePromoData_ extends Function_ {
    get [id]() {
        return 0x1E251C95;
    }
    static get [name]() {
        return "help.hidePromoData";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Peer to hide */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Dismiss a [suggestion, see here for more info »](https://core.telegram.org/api/config#suggestions). */
export class help_dismissSuggestion_ extends Function_ {
    get [id]() {
        return 0xF50DBAA1;
    }
    static get [name]() {
        return "help.dismissSuggestion";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["suggestion", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.suggestion, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** In the case of pending suggestions in [channels](https://core.telegram.org/constructor/channelFull), the channel ID. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Suggestion, see here for more info »](https://core.telegram.org/api/config#suggestions). */
        Object.defineProperty(this, "suggestion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.suggestion = params.suggestion;
    }
}
/** Get name, ISO code, localized name and phone codes/patterns of all available countries */
export class help_getCountriesList_ extends Function_ {
    get [id]() {
        return 0x735787A8;
    }
    static get [name]() {
        return "help.getCountriesList";
    }
    static get [paramDesc]() {
        return [
            ["lang_code", "string", "string"],
            ["hash", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.lang_code, "string", "string"],
            [this.hash, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Language code of the current user */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lang_code = params.lang_code;
        this.hash = params.hash;
    }
}
/** Get Telegram Premium promotion information */
export class help_getPremiumPromo_ extends Function_ {
    get [id]() {
        return 0xB81B93D4;
    }
    static get [name]() {
        return "help.getPremiumPromo";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get the set of [accent color palettes »](https://core.telegram.org/api/colors) that can be used for message accents. */
export class help_getPeerColors_ extends Function_ {
    get [id]() {
        return 0xDA80F42F;
    }
    static get [name]() {
        return "help.getPeerColors";
    }
    static get [paramDesc]() {
        return [
            ["hash", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Get the set of [accent color palettes »](https://core.telegram.org/api/colors) that can be used in profile page backgrounds. */
export class help_getPeerProfileColors_ extends Function_ {
    get [id]() {
        return 0xABCFA9FD;
    }
    static get [name]() {
        return "help.getPeerProfileColors";
    }
    static get [paramDesc]() {
        return [
            ["hash", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
export class help_getTimezonesList_ extends Function_ {
    get [id]() {
        return 0x49B30240;
    }
    static get [name]() {
        return "help.getTimezonesList";
    }
    static get [paramDesc]() {
        return [
            ["hash", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.hash, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hash = params.hash;
    }
}
/** Mark [channel/supergroup](https://core.telegram.org/api/channel) history as read */
export class channels_readHistory_ extends Function_ {
    get [id]() {
        return 0xCC104937;
    }
    static get [name]() {
        return "channels.readHistory";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["max_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.max_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** [Channel/supergroup](https://core.telegram.org/api/channel) */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of message up to which messages should be marked as read */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.max_id = params.max_id;
    }
}
/** Delete messages in a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_deleteMessages_ extends Function_ {
    get [id]() {
        return 0x84C1FD4E;
    }
    static get [name]() {
        return "channels.deleteMessages";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** [Channel/supergroup](https://core.telegram.org/api/channel) */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** IDs of messages to delete */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.id = params.id;
    }
}
/** Reports some messages from a user in a supergroup as spam; requires administrator rights in the supergroup */
export class channels_reportSpam_ extends Function_ {
    get [id]() {
        return 0xF44A8315;
    }
    static get [name]() {
        return "channels.reportSpam";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["participant", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.participant, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Supergroup */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Participant whose messages should be reported */
        Object.defineProperty(this, "participant", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** IDs of spam messages */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.participant = params.participant;
        this.id = params.id;
    }
}
/** Get [channel/supergroup](https://core.telegram.org/api/channel) messages */
export class channels_getMessages_ extends Function_ {
    get [id]() {
        return 0xAD8C9A23;
    }
    static get [name]() {
        return "channels.getMessages";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["id", [types._InputMessage], "Vector<InputMessage>"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.id, [types._InputMessage], "Vector<InputMessage>"],
        ];
    }
    constructor(params) {
        super();
        /** Channel/supergroup */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** IDs of messages to get */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.id = params.id;
    }
}
/** Get the participants of a [supergroup/channel](https://core.telegram.org/api/channel) */
export class channels_getParticipants_ extends Function_ {
    get [id]() {
        return 0x77CED9D0;
    }
    static get [name]() {
        return "channels.getParticipants";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["filter", types._ChannelParticipantsFilter, "ChannelParticipantsFilter"],
            ["offset", "number", "int"],
            ["limit", "number", "int"],
            ["hash", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.filter, types._ChannelParticipantsFilter, "ChannelParticipantsFilter"],
            [this.offset, "number", "int"],
            [this.limit, "number", "int"],
            [this.hash, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Channel */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Which participant types to fetch */
        Object.defineProperty(this, "filter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offset](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Limit](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Hash](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.filter = params.filter;
        this.offset = params.offset;
        this.limit = params.limit;
        this.hash = params.hash;
    }
}
/** Get info about a [channel/supergroup](https://core.telegram.org/api/channel) participant */
export class channels_getParticipant_ extends Function_ {
    get [id]() {
        return 0xA0AB6CC6;
    }
    static get [name]() {
        return "channels.getParticipant";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["participant", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.participant, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Channel/supergroup */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Participant to get info about */
        Object.defineProperty(this, "participant", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.participant = params.participant;
    }
}
/** Get info about [channels/supergroups](https://core.telegram.org/api/channel) */
export class channels_getChannels_ extends Function_ {
    get [id]() {
        return 0x0A7F6BBB;
    }
    static get [name]() {
        return "channels.getChannels";
    }
    static get [paramDesc]() {
        return [
            ["id", [types._InputChannel], "Vector<InputChannel>"],
        ];
    }
    get [params]() {
        return [
            [this.id, [types._InputChannel], "Vector<InputChannel>"],
        ];
    }
    constructor(params) {
        super();
        /** IDs of channels/supergroups to get info about */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Get full info about a [supergroup](https://core.telegram.org/api/channel#supergroups), [gigagroup](https://core.telegram.org/api/channel#gigagroups) or [channel](https://core.telegram.org/api/channel#channels) */
export class channels_getFullChannel_ extends Function_ {
    get [id]() {
        return 0x08736A09;
    }
    static get [name]() {
        return "channels.getFullChannel";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        /** The [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups) to get info about */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
    }
}
/** Create a [supergroup/channel](https://core.telegram.org/api/channel). */
export class channels_createChannel_ extends Function_ {
    get [id]() {
        return 0x91006707;
    }
    static get [name]() {
        return "channels.createChannel";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["broadcast", "true", "flags.0?true"],
            ["megagroup", "true", "flags.1?true"],
            ["for_import", "true", "flags.3?true"],
            ["forum", "true", "flags.5?true"],
            ["title", "string", "string"],
            ["about", "string", "string"],
            ["geo_point", types._InputGeoPoint, "flags.2?InputGeoPoint"],
            ["address", "string", "flags.2?string"],
            ["ttl_period", "number", "flags.4?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.broadcast ?? null, "true", "flags.0?true"],
            [this.megagroup ?? null, "true", "flags.1?true"],
            [this.for_import ?? null, "true", "flags.3?true"],
            [this.forum ?? null, "true", "flags.5?true"],
            [this.title, "string", "string"],
            [this.about, "string", "string"],
            [this.geo_point ?? null, types._InputGeoPoint, "flags.2?InputGeoPoint"],
            [this.address ?? null, "string", "flags.2?string"],
            [this.ttl_period ?? null, "number", "flags.4?int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to create a [channel](https://core.telegram.org/api/channel) */
        Object.defineProperty(this, "broadcast", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to create a [supergroup](https://core.telegram.org/api/channel) */
        Object.defineProperty(this, "megagroup", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether the supergroup is being created to import messages from a foreign chat service using [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport) */
        Object.defineProperty(this, "for_import", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to create a [forum](https://core.telegram.org/api/forum) */
        Object.defineProperty(this, "forum", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Channel title */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Channel description */
        Object.defineProperty(this, "about", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Geogroup location, see [here »](https://core.telegram.org/api/nearby) for more info on geogroups. */
        Object.defineProperty(this, "geo_point", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Geogroup address, see [here »](https://core.telegram.org/api/nearby) for more info on geogroups. */
        Object.defineProperty(this, "address", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Time-to-live of all messages that will be sent in the supergroup: once message.date+message.ttl\_period === time(), the message will be deleted on the server, and must be deleted locally as well. You can use [messages.setDefaultHistoryTTL](https://core.telegram.org/method/messages.setDefaultHistoryTTL) to edit this value later. */
        Object.defineProperty(this, "ttl_period", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.broadcast = params.broadcast;
        this.megagroup = params.megagroup;
        this.for_import = params.for_import;
        this.forum = params.forum;
        this.title = params.title;
        this.about = params.about;
        this.geo_point = params.geo_point;
        this.address = params.address;
        this.ttl_period = params.ttl_period;
    }
}
/** Modify the admin rights of a user in a [supergroup/channel](https://core.telegram.org/api/channel). */
export class channels_editAdmin_ extends Function_ {
    get [id]() {
        return 0xD33C8902;
    }
    static get [name]() {
        return "channels.editAdmin";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["user_id", types._InputUser, "InputUser"],
            ["admin_rights", types._ChatAdminRights, "ChatAdminRights"],
            ["rank", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.user_id, types._InputUser, "InputUser"],
            [this.admin_rights, types._ChatAdminRights, "ChatAdminRights"],
            [this.rank, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The [supergroup/channel](https://core.telegram.org/api/channel). */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The ID of the user whose admin rights should be modified */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The admin rights */
        Object.defineProperty(this, "admin_rights", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Indicates the role (rank) of the admin in the group: just an arbitrary string */
        Object.defineProperty(this, "rank", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.user_id = params.user_id;
        this.admin_rights = params.admin_rights;
        this.rank = params.rank;
    }
}
/** Edit the name of a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_editTitle_ extends Function_ {
    get [id]() {
        return 0x566DECD0;
    }
    static get [name]() {
        return "channels.editTitle";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["title", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.title, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Channel/supergroup */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New name */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.title = params.title;
    }
}
/** Change the photo of a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_editPhoto_ extends Function_ {
    get [id]() {
        return 0xF12E57C9;
    }
    static get [name]() {
        return "channels.editPhoto";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["photo", types._InputChatPhoto, "InputChatPhoto"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.photo, types._InputChatPhoto, "InputChatPhoto"],
        ];
    }
    constructor(params) {
        super();
        /** Channel/supergroup whose photo should be edited */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New photo */
        Object.defineProperty(this, "photo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.photo = params.photo;
    }
}
/** Check if a username is free and can be assigned to a channel/supergroup */
export class channels_checkUsername_ extends Function_ {
    get [id]() {
        return 0x10E6BD2C;
    }
    static get [name]() {
        return "channels.checkUsername";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["username", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.username, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The [channel/supergroup](https://core.telegram.org/api/channel) that will assigned the specified username */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The username to check */
        Object.defineProperty(this, "username", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.username = params.username;
    }
}
/** Change or remove the username of a supergroup/channel */
export class channels_updateUsername_ extends Function_ {
    get [id]() {
        return 0x3514B3DE;
    }
    static get [name]() {
        return "channels.updateUsername";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["username", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.username, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Channel */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New username, pass an empty string to remove the username */
        Object.defineProperty(this, "username", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.username = params.username;
    }
}
/** Join a channel/supergroup */
export class channels_joinChannel_ extends Function_ {
    get [id]() {
        return 0x24B524C5;
    }
    static get [name]() {
        return "channels.joinChannel";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        /** Channel/supergroup to join */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
    }
}
/** Leave a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_leaveChannel_ extends Function_ {
    get [id]() {
        return 0xF836AA95;
    }
    static get [name]() {
        return "channels.leaveChannel";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        /** [Channel/supergroup](https://core.telegram.org/api/channel) to leave */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
    }
}
/** Invite users to a channel/supergroup */
export class channels_inviteToChannel_ extends Function_ {
    get [id]() {
        return 0xC9E33D54;
    }
    static get [name]() {
        return "channels.inviteToChannel";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["users", [types._InputUser], "Vector<InputUser>"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.users, [types._InputUser], "Vector<InputUser>"],
        ];
    }
    constructor(params) {
        super();
        /** Channel/supergroup */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Users to invite */
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.users = params.users;
    }
}
/** Delete a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_deleteChannel_ extends Function_ {
    get [id]() {
        return 0xC0111FE3;
    }
    static get [name]() {
        return "channels.deleteChannel";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        /** [Channel/supergroup](https://core.telegram.org/api/channel) to delete */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
    }
}
/** Get link and embed info of a message in a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_exportMessageLink_ extends Function_ {
    get [id]() {
        return 0xE63FADEB;
    }
    static get [name]() {
        return "channels.exportMessageLink";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["grouped", "true", "flags.0?true"],
            ["thread", "true", "flags.1?true"],
            ["channel", types._InputChannel, "InputChannel"],
            ["id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.grouped ?? null, "true", "flags.0?true"],
            [this.thread ?? null, "true", "flags.1?true"],
            [this.channel, types._InputChannel, "InputChannel"],
            [this.id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to include other grouped media (for albums) */
        Object.defineProperty(this, "grouped", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to also include a thread ID, if available, inside of the link */
        Object.defineProperty(this, "thread", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Channel */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.grouped = params.grouped;
        this.thread = params.thread;
        this.channel = params.channel;
        this.id = params.id;
    }
}
/** Enable/disable message signatures in channels */
export class channels_toggleSignatures_ extends Function_ {
    get [id]() {
        return 0x1F69B606;
    }
    static get [name]() {
        return "channels.toggleSignatures";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["enabled", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.enabled, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Channel */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Value */
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.enabled = params.enabled;
    }
}
/** Get [channels/supergroups/geogroups](https://core.telegram.org/api/channel) we're admin in. Usually called when the user exceeds the [limit](https://core.telegram.org/constructor/config) for owned public [channels/supergroups/geogroups](https://core.telegram.org/api/channel), and the user is given the choice to remove one of his channels/supergroups/geogroups. */
export class channels_getAdminedPublicChannels_ extends Function_ {
    get [id]() {
        return 0xF8B036AF;
    }
    static get [name]() {
        return "channels.getAdminedPublicChannels";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["by_location", "true", "flags.0?true"],
            ["check_limit", "true", "flags.1?true"],
            ["for_personal", "true", "flags.2?true"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.by_location ?? null, "true", "flags.0?true"],
            [this.check_limit ?? null, "true", "flags.1?true"],
            [this.for_personal ?? null, "true", "flags.2?true"],
        ];
    }
    constructor(params) {
        super();
        /** Get geogroups */
        Object.defineProperty(this, "by_location", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set and the user has reached the limit of owned public [channels/supergroups/geogroups](https://core.telegram.org/api/channel), instead of returning the channel list one of the specified [errors](#possible-errors) will be returned.
        Useful to check if a new public channel can indeed be created, even before asking the user to enter a channel username to use in [channels.checkUsername](https://core.telegram.org/method/channels.checkUsername)/[channels.updateUsername](https://core.telegram.org/method/channels.updateUsername). */
        Object.defineProperty(this, "check_limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "for_personal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.by_location = params?.by_location;
        this.check_limit = params?.check_limit;
        this.for_personal = params?.for_personal;
    }
}
/** Ban/unban/kick a user in a [supergroup/channel](https://core.telegram.org/api/channel). */
export class channels_editBanned_ extends Function_ {
    get [id]() {
        return 0x96E6CD81;
    }
    static get [name]() {
        return "channels.editBanned";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["participant", types._InputPeer, "InputPeer"],
            ["banned_rights", types._ChatBannedRights, "ChatBannedRights"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.participant, types._InputPeer, "InputPeer"],
            [this.banned_rights, types._ChatBannedRights, "ChatBannedRights"],
        ];
    }
    constructor(params) {
        super();
        /** The [supergroup/channel](https://core.telegram.org/api/channel). */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Participant to ban */
        Object.defineProperty(this, "participant", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The banned rights */
        Object.defineProperty(this, "banned_rights", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.participant = params.participant;
        this.banned_rights = params.banned_rights;
    }
}
/** Get the admin log of a [channel/supergroup](https://core.telegram.org/api/channel) */
export class channels_getAdminLog_ extends Function_ {
    get [id]() {
        return 0x33DDF480;
    }
    static get [name]() {
        return "channels.getAdminLog";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["channel", types._InputChannel, "InputChannel"],
            ["q", "string", "string"],
            ["events_filter", types._ChannelAdminLogEventsFilter, "flags.0?ChannelAdminLogEventsFilter"],
            ["admins", [types._InputUser], "flags.1?Vector<InputUser>"],
            ["max_id", "bigint", "long"],
            ["min_id", "bigint", "long"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.channel, types._InputChannel, "InputChannel"],
            [this.q, "string", "string"],
            [this.events_filter ?? null, types._ChannelAdminLogEventsFilter, "flags.0?ChannelAdminLogEventsFilter"],
            [this.admins ?? null, [types._InputUser], "flags.1?Vector<InputUser>"],
            [this.max_id, "bigint", "long"],
            [this.min_id, "bigint", "long"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Channel */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Search query, can be empty */
        Object.defineProperty(this, "q", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Event filter */
        Object.defineProperty(this, "events_filter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only show events from these admins */
        Object.defineProperty(this, "admins", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum ID of message to return (see [pagination](https://core.telegram.org/api/offsets)) */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Minimum ID of message to return (see [pagination](https://core.telegram.org/api/offsets)) */
        Object.defineProperty(this, "min_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.q = params.q;
        this.events_filter = params.events_filter;
        this.admins = params.admins;
        this.max_id = params.max_id;
        this.min_id = params.min_id;
        this.limit = params.limit;
    }
}
/** Associate a stickerset to the supergroup */
export class channels_setStickers_ extends Function_ {
    get [id]() {
        return 0xEA8CA4F9;
    }
    static get [name]() {
        return "channels.setStickers";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["stickerset", types._InputStickerSet, "InputStickerSet"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.stickerset, types._InputStickerSet, "InputStickerSet"],
        ];
    }
    constructor(params) {
        super();
        /** Supergroup */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The stickerset to associate */
        Object.defineProperty(this, "stickerset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.stickerset = params.stickerset;
    }
}
/** Mark [channel/supergroup](https://core.telegram.org/api/channel) message contents as read */
export class channels_readMessageContents_ extends Function_ {
    get [id]() {
        return 0xEAB5DC38;
    }
    static get [name]() {
        return "channels.readMessageContents";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** [Channel/supergroup](https://core.telegram.org/api/channel) */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** IDs of messages whose contents should be marked as read */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.id = params.id;
    }
}
/** Delete the history of a [supergroup](https://core.telegram.org/api/channel) */
export class channels_deleteHistory_ extends Function_ {
    get [id]() {
        return 0x9BAA9647;
    }
    static get [name]() {
        return "channels.deleteHistory";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["for_everyone", "true", "flags.0?true"],
            ["channel", types._InputChannel, "InputChannel"],
            ["max_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.for_everyone ?? null, "true", "flags.0?true"],
            [this.channel, types._InputChannel, "InputChannel"],
            [this.max_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether the history should be deleted for everyone */
        Object.defineProperty(this, "for_everyone", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Supergroup](https://core.telegram.org/api/channel) whose history must be deleted */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of message **up to which** the history must be deleted */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.for_everyone = params.for_everyone;
        this.channel = params.channel;
        this.max_id = params.max_id;
    }
}
/** Hide/unhide message history for new channel/supergroup users */
export class channels_togglePreHistoryHidden_ extends Function_ {
    get [id]() {
        return 0xEABBB94C;
    }
    static get [name]() {
        return "channels.togglePreHistoryHidden";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["enabled", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.enabled, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Channel/supergroup */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Hide/unhide */
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.enabled = params.enabled;
    }
}
/** Get a list of [channels/supergroups](https://core.telegram.org/api/channel) we left, requires a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export class channels_getLeftChannels_ extends Function_ {
    get [id]() {
        return 0x8341ECC0;
    }
    static get [name]() {
        return "channels.getLeftChannels";
    }
    static get [paramDesc]() {
        return [
            ["offset", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.offset, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Offset for [pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.offset = params.offset;
    }
}
/** Get all groups that can be used as [discussion groups](https://core.telegram.org/api/discussion). */
export class channels_getGroupsForDiscussion_ extends Function_ {
    get [id]() {
        return 0xF5DAD378;
    }
    static get [name]() {
        return "channels.getGroupsForDiscussion";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Associate a group to a channel as [discussion group](https://core.telegram.org/api/discussion) for that channel */
export class channels_setDiscussionGroup_ extends Function_ {
    get [id]() {
        return 0x40582BB2;
    }
    static get [name]() {
        return "channels.setDiscussionGroup";
    }
    static get [paramDesc]() {
        return [
            ["broadcast", types._InputChannel, "InputChannel"],
            ["group", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            [this.broadcast, types._InputChannel, "InputChannel"],
            [this.group, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        /** Channel */
        Object.defineProperty(this, "broadcast", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Discussion group](https://core.telegram.org/api/discussion) to associate to the channel */
        Object.defineProperty(this, "group", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.broadcast = params.broadcast;
        this.group = params.group;
    }
}
/** Transfer channel ownership */
export class channels_editCreator_ extends Function_ {
    get [id]() {
        return 0x8F38CD1F;
    }
    static get [name]() {
        return "channels.editCreator";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["user_id", types._InputUser, "InputUser"],
            ["password", types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.user_id, types._InputUser, "InputUser"],
            [this.password, types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
        ];
    }
    constructor(params) {
        super();
        /** Channel */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New channel owner */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [2FA password](https://core.telegram.org/api/srp) of account */
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.user_id = params.user_id;
        this.password = params.password;
    }
}
/** Edit location of geogroup, see [here »](https://core.telegram.org/api/nearby) for more info on geogroups. */
export class channels_editLocation_ extends Function_ {
    get [id]() {
        return 0x58E63F6D;
    }
    static get [name]() {
        return "channels.editLocation";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["geo_point", types._InputGeoPoint, "InputGeoPoint"],
            ["address", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.geo_point, types._InputGeoPoint, "InputGeoPoint"],
            [this.address, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** [Geogroup](https://core.telegram.org/api/channel) */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New geolocation */
        Object.defineProperty(this, "geo_point", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Address string */
        Object.defineProperty(this, "address", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.geo_point = params.geo_point;
        this.address = params.address;
    }
}
/** Toggle supergroup slow mode: if enabled, users will only be able to send one message every `seconds` seconds */
export class channels_toggleSlowMode_ extends Function_ {
    get [id]() {
        return 0xEDD49EF0;
    }
    static get [name]() {
        return "channels.toggleSlowMode";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["seconds", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.seconds, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** The [supergroup](https://core.telegram.org/api/channel) */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Users will only be able to send one message every `seconds` seconds, `0` to disable the limitation */
        Object.defineProperty(this, "seconds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.seconds = params.seconds;
    }
}
/** Get inactive channels and supergroups */
export class channels_getInactiveChannels_ extends Function_ {
    get [id]() {
        return 0x11E831EE;
    }
    static get [name]() {
        return "channels.getInactiveChannels";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Convert a [supergroup](https://core.telegram.org/api/channel) to a [gigagroup](https://core.telegram.org/api/channel), when requested by [channel suggestions](https://core.telegram.org/api/config#channel-suggestions). */
export class channels_convertToGigagroup_ extends Function_ {
    get [id]() {
        return 0x0B290C69;
    }
    static get [name]() {
        return "channels.convertToGigagroup";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        /** The [supergroup](https://core.telegram.org/api/channel) to convert */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
    }
}
/** Mark a specific sponsored message as read */
export class channels_viewSponsoredMessage_ extends Function_ {
    get [id]() {
        return 0xBEAEDB94;
    }
    static get [name]() {
        return "channels.viewSponsoredMessage";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["random_id", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.random_id, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.random_id = params.random_id;
    }
}
/** Get a list of sponsored messages */
export class channels_getSponsoredMessages_ extends Function_ {
    get [id]() {
        return 0xEC210FBF;
    }
    static get [name]() {
        return "channels.getSponsoredMessages";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        /** Peer */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
    }
}
/** Obtains a list of peers that can be used to send messages in a specific group */
export class channels_getSendAs_ extends Function_ {
    get [id]() {
        return 0x0DC770EE;
    }
    static get [name]() {
        return "channels.getSendAs";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** The group where we intend to send messages */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Delete all messages sent by a specific participant of a given supergroup */
export class channels_deleteParticipantHistory_ extends Function_ {
    get [id]() {
        return 0x367544DB;
    }
    static get [name]() {
        return "channels.deleteParticipantHistory";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["participant", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.participant, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Supergroup */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The participant whose messages should be deleted */
        Object.defineProperty(this, "participant", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.participant = params.participant;
    }
}
/** Set whether all users [should join a discussion group in order to comment on a post »](https://core.telegram.org/api/discussion#requiring-users-to-join-the-group) */
export class channels_toggleJoinToSend_ extends Function_ {
    get [id]() {
        return 0xE4CB9580;
    }
    static get [name]() {
        return "channels.toggleJoinToSend";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["enabled", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.enabled, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Discussion group */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Toggle */
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.enabled = params.enabled;
    }
}
/** Set whether all users should [request admin approval to join the group »](https://core.telegram.org/api/invites#join-requests). */
export class channels_toggleJoinRequest_ extends Function_ {
    get [id]() {
        return 0x4C2985B6;
    }
    static get [name]() {
        return "channels.toggleJoinRequest";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["enabled", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.enabled, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Group */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Toggle */
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.enabled = params.enabled;
    }
}
/** Reorder active usernames */
export class channels_reorderUsernames_ extends Function_ {
    get [id]() {
        return 0xB45CED1D;
    }
    static get [name]() {
        return "channels.reorderUsernames";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["order", ["string"], "Vector<string>"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.order, ["string"], "Vector<string>"],
        ];
    }
    constructor(params) {
        super();
        /** The supergroup or channel */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The new order for active usernames. All active usernames must be specified. */
        Object.defineProperty(this, "order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.order = params.order;
    }
}
/** Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to a [supergroup or channel](https://core.telegram.org/api/channel) we own. */
export class channels_toggleUsername_ extends Function_ {
    get [id]() {
        return 0x50F24105;
    }
    static get [name]() {
        return "channels.toggleUsername";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["username", "string", "string"],
            ["active", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.username, "string", "string"],
            [this.active, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** [Supergroup or channel](https://core.telegram.org/api/channel) */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Username */
        Object.defineProperty(this, "username", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to activate or deactivate the username */
        Object.defineProperty(this, "active", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.username = params.username;
        this.active = params.active;
    }
}
/** Disable all purchased usernames of a supergroup or channel */
export class channels_deactivateAllUsernames_ extends Function_ {
    get [id]() {
        return 0x0A245DD3;
    }
    static get [name]() {
        return "channels.deactivateAllUsernames";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        /** Supergroup or channel */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
    }
}
/** Enable or disable [forum functionality](https://core.telegram.org/api/forum) in a supergroup. */
export class channels_toggleForum_ extends Function_ {
    get [id]() {
        return 0xA4298B29;
    }
    static get [name]() {
        return "channels.toggleForum";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["enabled", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.enabled, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Supergroup ID */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Enable or disable forum functionality */
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.enabled = params.enabled;
    }
}
/** Create a [forum topic](https://core.telegram.org/api/forum); requires [`manage_topics` rights](https://core.telegram.org/api/rights). */
export class channels_createForumTopic_ extends Function_ {
    get [id]() {
        return 0xF40C0224;
    }
    static get [name]() {
        return "channels.createForumTopic";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["channel", types._InputChannel, "InputChannel"],
            ["title", "string", "string"],
            ["icon_color", "number", "flags.0?int"],
            ["icon_emoji_id", "bigint", "flags.3?long"],
            ["random_id", "bigint", "long"],
            ["send_as", types._InputPeer, "flags.2?InputPeer"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.channel, types._InputChannel, "InputChannel"],
            [this.title, "string", "string"],
            [this.icon_color ?? null, "number", "flags.0?int"],
            [this.icon_emoji_id ?? null, "bigint", "flags.3?long"],
            [this.random_id, "bigint", "long"],
            [this.send_as ?? null, types._InputPeer, "flags.2?InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** [The forum](https://core.telegram.org/api/forum) */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Topic title (maximum UTF-8 length: 128) */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If no custom emoji icon is specified, specifies the color of the fallback topic icon (RGB), one of `0x6FB9F0`, `0xFFD67E`, `0xCB86DB`, `0x8EEE98`, `0xFF93B2`, or `0xFB6F5F`. */
        Object.defineProperty(this, "icon_color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of the [custom emoji](https://core.telegram.org/api/custom-emoji) used as topic icon. [Telegram Premium](https://core.telegram.org/api/premium) users can use any custom emoji, other users can only use the custom emojis contained in the [inputStickerSetEmojiDefaultTopicIcons](https://core.telegram.org/constructor/inputStickerSetEmojiDefaultTopicIcons) emoji pack. */
        Object.defineProperty(this, "icon_emoji_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique client message ID to prevent duplicate sending of the same event */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Create the topic as the specified peer */
        Object.defineProperty(this, "send_as", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.title = params.title;
        this.icon_color = params.icon_color;
        this.icon_emoji_id = params.icon_emoji_id;
        this.random_id = params.random_id;
        this.send_as = params.send_as;
    }
}
/** Get [topics of a forum](https://core.telegram.org/api/forum) */
export class channels_getForumTopics_ extends Function_ {
    get [id]() {
        return 0x0DE560D1;
    }
    static get [name]() {
        return "channels.getForumTopics";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["channel", types._InputChannel, "InputChannel"],
            ["q", "string", "flags.0?string"],
            ["offset_date", "number", "int"],
            ["offset_id", "number", "int"],
            ["offset_topic", "number", "int"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.channel, types._InputChannel, "InputChannel"],
            [this.q ?? null, "string", "flags.0?string"],
            [this.offset_date, "number", "int"],
            [this.offset_id, "number", "int"],
            [this.offset_topic, "number", "int"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Supergroup */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Search query */
        Object.defineProperty(this, "q", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets), date of the last message of the last found topic. Use 0 or any date in the future to get results from the last topic. */
        Object.defineProperty(this, "offset_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets), ID of the last message of the last found topic (or initially `0`). */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets), ID of the last found topic (or initially `0`). */
        Object.defineProperty(this, "offset_topic", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets). For optimal performance, the number of returned topics is chosen by the server and can be smaller than the specified limit. */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.q = params.q;
        this.offset_date = params.offset_date;
        this.offset_id = params.offset_id;
        this.offset_topic = params.offset_topic;
        this.limit = params.limit;
    }
}
/** Get forum topics by their ID */
export class channels_getForumTopicsByID_ extends Function_ {
    get [id]() {
        return 0xB0831EB9;
    }
    static get [name]() {
        return "channels.getForumTopicsByID";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["topics", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.topics, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Forum */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Topic IDs */
        Object.defineProperty(this, "topics", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.topics = params.topics;
    }
}
/** Edit [forum topic](https://core.telegram.org/api/forum); requires [`manage_topics` rights](https://core.telegram.org/api/rights). */
export class channels_editForumTopic_ extends Function_ {
    get [id]() {
        return 0xF4DFA185;
    }
    static get [name]() {
        return "channels.editForumTopic";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["channel", types._InputChannel, "InputChannel"],
            ["topic_id", "number", "int"],
            ["title", "string", "flags.0?string"],
            ["icon_emoji_id", "bigint", "flags.1?long"],
            ["closed", "boolean", "flags.2?Bool"],
            ["hidden", "boolean", "flags.3?Bool"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.channel, types._InputChannel, "InputChannel"],
            [this.topic_id, "number", "int"],
            [this.title ?? null, "string", "flags.0?string"],
            [this.icon_emoji_id ?? null, "bigint", "flags.1?long"],
            [this.closed ?? null, "boolean", "flags.2?Bool"],
            [this.hidden ?? null, "boolean", "flags.3?Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Supergroup */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Topic ID */
        Object.defineProperty(this, "topic_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If present, will update the topic title (maximum UTF-8 length: 128). */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If present, updates the [custom emoji](https://core.telegram.org/api/custom-emoji) used as topic icon. [Telegram Premium](https://core.telegram.org/api/premium) users can use any custom emoji, other users can only use the custom emojis contained in the [inputStickerSetEmojiDefaultTopicIcons](https://core.telegram.org/constructor/inputStickerSetEmojiDefaultTopicIcons) emoji pack. Pass 0 to switch to the fallback topic icon. */
        Object.defineProperty(this, "icon_emoji_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If present, will update the open/closed status of the topic. */
        Object.defineProperty(this, "closed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If present, will hide/unhide the topic (only valid for the "General" topic, `id=1`). */
        Object.defineProperty(this, "hidden", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.topic_id = params.topic_id;
        this.title = params.title;
        this.icon_emoji_id = params.icon_emoji_id;
        this.closed = params.closed;
        this.hidden = params.hidden;
    }
}
/** Pin or unpin [forum topics](https://core.telegram.org/api/forum) */
export class channels_updatePinnedForumTopic_ extends Function_ {
    get [id]() {
        return 0x6C2D9026;
    }
    static get [name]() {
        return "channels.updatePinnedForumTopic";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["topic_id", "number", "int"],
            ["pinned", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.topic_id, "number", "int"],
            [this.pinned, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Supergroup ID */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Forum topic ID](https://core.telegram.org/api/forum) */
        Object.defineProperty(this, "topic_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to pin or unpin the topic */
        Object.defineProperty(this, "pinned", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.topic_id = params.topic_id;
        this.pinned = params.pinned;
    }
}
/** Delete message history of a [forum topic](https://core.telegram.org/api/forum) */
export class channels_deleteTopicHistory_ extends Function_ {
    get [id]() {
        return 0x34435F2D;
    }
    static get [name]() {
        return "channels.deleteTopicHistory";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["top_msg_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.top_msg_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Forum */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Topic ID */
        Object.defineProperty(this, "top_msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.top_msg_id = params.top_msg_id;
    }
}
/** Reorder pinned forum topics */
export class channels_reorderPinnedForumTopics_ extends Function_ {
    get [id]() {
        return 0x2950A18F;
    }
    static get [name]() {
        return "channels.reorderPinnedForumTopics";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["force", "true", "flags.0?true"],
            ["channel", types._InputChannel, "InputChannel"],
            ["order", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.force ?? null, "true", "flags.0?true"],
            [this.channel, types._InputChannel, "InputChannel"],
            [this.order, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** If not set, the order of only the topics present both server-side and in `order` will be changed (i.e. mentioning topics not pinned server-side in `order` will not pin them, and not mentioning topics pinned server-side will not unpin them).
        If set, the entire server-side pinned topic list will be replaced with `order` (i.e. mentioning topics not pinned server-side in `order` will pin them, and not mentioning topics pinned server-side will unpin them) */
        Object.defineProperty(this, "force", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Supergroup ID */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Topic IDs »](https://core.telegram.org/api/forum) */
        Object.defineProperty(this, "order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.force = params.force;
        this.channel = params.channel;
        this.order = params.order;
    }
}
/** Enable or disable the [native antispam system](https://core.telegram.org/api/antispam). */
export class channels_toggleAntiSpam_ extends Function_ {
    get [id]() {
        return 0x68F3E4EB;
    }
    static get [name]() {
        return "channels.toggleAntiSpam";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["enabled", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.enabled, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Supergroup ID. The specified supergroup must have at least `telegram_antispam_group_size_min` members to enable antispam functionality, as specified by the [client configuration parameters](https://core.telegram.org/api/config#client-configuration). */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Enable or disable the native antispam system. */
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.enabled = params.enabled;
    }
}
/** Report a [native antispam](https://core.telegram.org/api/antispam) false positive */
export class channels_reportAntiSpamFalsePositive_ extends Function_ {
    get [id]() {
        return 0xA850A693;
    }
    static get [name]() {
        return "channels.reportAntiSpamFalsePositive";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["msg_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.msg_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Supergroup ID */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID that was mistakenly deleted by the [native antispam](https://core.telegram.org/api/antispam) system, taken from the [admin log](https://core.telegram.org/api/recent-actions) */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.msg_id = params.msg_id;
    }
}
/** Hide or display the participants list in a [supergroup](https://core.telegram.org/api/channel). */
export class channels_toggleParticipantsHidden_ extends Function_ {
    get [id]() {
        return 0x6A6E7854;
    }
    static get [name]() {
        return "channels.toggleParticipantsHidden";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["enabled", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.enabled, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Supergroup ID */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If true, will hide the participants list; otherwise will unhide it. */
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.enabled = params.enabled;
    }
}
/** Informs the server that the user has either: */
export class channels_clickSponsoredMessage_ extends Function_ {
    get [id]() {
        return 0x18AFBC93;
    }
    static get [name]() {
        return "channels.clickSponsoredMessage";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["random_id", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.random_id, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** Channel where the sponsored message was posted */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.random_id = params.random_id;
    }
}
/** Update the [accent color and background custom emoji »](https://core.telegram.org/api/colors) of a channel. */
export class channels_updateColor_ extends Function_ {
    get [id]() {
        return 0xD8AA3671;
    }
    static get [name]() {
        return "channels.updateColor";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["for_profile", "true", "flags.1?true"],
            ["channel", types._InputChannel, "InputChannel"],
            ["color", "number", "flags.2?int"],
            ["background_emoji_id", "bigint", "flags.0?long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.for_profile ?? null, "true", "flags.1?true"],
            [this.channel, types._InputChannel, "InputChannel"],
            [this.color ?? null, "number", "flags.2?int"],
            [this.background_emoji_id ?? null, "bigint", "flags.0?long"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to change the accent color emoji pattern of the profile page; otherwise, the accent color and emoji pattern of messages will be changed. */
        Object.defineProperty(this, "for_profile", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Channel whose accent color should be changed. */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [ID of the accent color palette »](https://core.telegram.org/api/colors) to use (not RGB24, see [here »](https://core.telegram.org/api/colors) for more info); if not set, the default palette is used. */
        Object.defineProperty(this, "color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Custom emoji ID used in the accent color pattern. */
        Object.defineProperty(this, "background_emoji_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.for_profile = params.for_profile;
        this.channel = params.channel;
        this.color = params.color;
        this.background_emoji_id = params.background_emoji_id;
    }
}
/** Users may also choose to display messages from all topics of a [forum](https://core.telegram.org/api/forum) as if they were sent to a normal group, using a "View as messages" setting in the local client: this setting only affects the current account, and is synced to other logged in sessions using this method. */
export class channels_toggleViewForumAsMessages_ extends Function_ {
    get [id]() {
        return 0x9738BB15;
    }
    static get [name]() {
        return "channels.toggleViewForumAsMessages";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["enabled", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.enabled, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** The forum */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The new value of the `view_forum_as_messages` flag. */
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.enabled = params.enabled;
    }
}
/** Obtain a list of similarly themed public channels, selected based on similarities in their **subscriber bases**. */
export class channels_getChannelRecommendations_ extends Function_ {
    get [id]() {
        return 0x83B70D97;
    }
    static get [name]() {
        return "channels.getChannelRecommendations";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        /** The method will return channels related to the passed `channel`. */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
    }
}
/** Set an [emoji status](https://core.telegram.org/api/emoji-status) for a channel. */
export class channels_updateEmojiStatus_ extends Function_ {
    get [id]() {
        return 0xF0D3E6A8;
    }
    static get [name]() {
        return "channels.updateEmojiStatus";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["emoji_status", types._EmojiStatus, "EmojiStatus"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.emoji_status, types._EmojiStatus, "EmojiStatus"],
        ];
    }
    constructor(params) {
        super();
        /** The channel, must have at least [`channel_emoji_status_level_min` boosts](https://core.telegram.org/api/config#channel-emoji-status-level-min). */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Emoji status](https://core.telegram.org/api/emoji-status) to set */
        Object.defineProperty(this, "emoji_status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.emoji_status = params.emoji_status;
    }
}
export class channels_setBoostsToUnblockRestrictions_ extends Function_ {
    get [id]() {
        return 0xAD399CEE;
    }
    static get [name]() {
        return "channels.setBoostsToUnblockRestrictions";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["boosts", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.boosts, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "boosts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.boosts = params.boosts;
    }
}
export class channels_setEmojiStickers_ extends Function_ {
    get [id]() {
        return 0x3CD930B7;
    }
    static get [name]() {
        return "channels.setEmojiStickers";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["stickerset", types._InputStickerSet, "InputStickerSet"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.stickerset, types._InputStickerSet, "InputStickerSet"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stickerset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.stickerset = params.stickerset;
    }
}
export class channels_reportSponsoredMessage_ extends Function_ {
    get [id]() {
        return 0xAF8FF6B9;
    }
    static get [name]() {
        return "channels.reportSponsoredMessage";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["random_id", Uint8Array, "bytes"],
            ["option", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.random_id, Uint8Array, "bytes"],
            [this.option, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "option", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.random_id = params.random_id;
        this.option = params.option;
    }
}
export class channels_restrictSponsoredMessages_ extends Function_ {
    get [id]() {
        return 0x9AE91519;
    }
    static get [name]() {
        return "channels.restrictSponsoredMessages";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["restricted", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.restricted, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "restricted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.restricted = params.restricted;
    }
}
/** Sends a custom request; for bots only */
export class bots_sendCustomRequest_ extends Function_ {
    get [id]() {
        return 0xAA2769ED;
    }
    static get [name]() {
        return "bots.sendCustomRequest";
    }
    static get [paramDesc]() {
        return [
            ["custom_method", "string", "string"],
            ["params", types._DataJSON, "DataJSON"],
        ];
    }
    get [params]() {
        return [
            [this.custom_method, "string", "string"],
            [this.params, types._DataJSON, "DataJSON"],
        ];
    }
    constructor(params) {
        super();
        /** The method name */
        Object.defineProperty(this, "custom_method", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** JSON-serialized method parameters */
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.custom_method = params.custom_method;
        this.params = params.params;
    }
}
/** Answers a custom query; for bots only */
export class bots_answerWebhookJSONQuery_ extends Function_ {
    get [id]() {
        return 0xE6213F4D;
    }
    static get [name]() {
        return "bots.answerWebhookJSONQuery";
    }
    static get [paramDesc]() {
        return [
            ["query_id", "bigint", "long"],
            ["data", types._DataJSON, "DataJSON"],
        ];
    }
    get [params]() {
        return [
            [this.query_id, "bigint", "long"],
            [this.data, types._DataJSON, "DataJSON"],
        ];
    }
    constructor(params) {
        super();
        /** Identifier of a custom query */
        Object.defineProperty(this, "query_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** JSON-serialized answer to the query */
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.query_id = params.query_id;
        this.data = params.data;
    }
}
/** Set bot command list */
export class bots_setBotCommands_ extends Function_ {
    get [id]() {
        return 0x0517165A;
    }
    static get [name]() {
        return "bots.setBotCommands";
    }
    static get [paramDesc]() {
        return [
            ["scope", types._BotCommandScope, "BotCommandScope"],
            ["lang_code", "string", "string"],
            ["commands", [types._BotCommand], "Vector<BotCommand>"],
        ];
    }
    get [params]() {
        return [
            [this.scope, types._BotCommandScope, "BotCommandScope"],
            [this.lang_code, "string", "string"],
            [this.commands, [types._BotCommand], "Vector<BotCommand>"],
        ];
    }
    constructor(params) {
        super();
        /** Command scope */
        Object.defineProperty(this, "scope", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Language code */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Bot commands */
        Object.defineProperty(this, "commands", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.scope = params.scope;
        this.lang_code = params.lang_code;
        this.commands = params.commands;
    }
}
/** Clear bot commands for the specified bot scope and language code */
export class bots_resetBotCommands_ extends Function_ {
    get [id]() {
        return 0x3D8DE0F9;
    }
    static get [name]() {
        return "bots.resetBotCommands";
    }
    static get [paramDesc]() {
        return [
            ["scope", types._BotCommandScope, "BotCommandScope"],
            ["lang_code", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.scope, types._BotCommandScope, "BotCommandScope"],
            [this.lang_code, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Command scope */
        Object.defineProperty(this, "scope", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Language code */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.scope = params.scope;
        this.lang_code = params.lang_code;
    }
}
/** Obtain a list of bot commands for the specified bot scope and language code */
export class bots_getBotCommands_ extends Function_ {
    get [id]() {
        return 0xE34C0DD6;
    }
    static get [name]() {
        return "bots.getBotCommands";
    }
    static get [paramDesc]() {
        return [
            ["scope", types._BotCommandScope, "BotCommandScope"],
            ["lang_code", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.scope, types._BotCommandScope, "BotCommandScope"],
            [this.lang_code, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Command scope */
        Object.defineProperty(this, "scope", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Language code */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.scope = params.scope;
        this.lang_code = params.lang_code;
    }
}
/** Sets the [menu button action »](https://core.telegram.org/api/bots/menu) for a given user or for all users */
export class bots_setBotMenuButton_ extends Function_ {
    get [id]() {
        return 0x4504D54F;
    }
    static get [name]() {
        return "bots.setBotMenuButton";
    }
    static get [paramDesc]() {
        return [
            ["user_id", types._InputUser, "InputUser"],
            ["button", types._BotMenuButton, "BotMenuButton"],
        ];
    }
    get [params]() {
        return [
            [this.user_id, types._InputUser, "InputUser"],
            [this.button, types._BotMenuButton, "BotMenuButton"],
        ];
    }
    constructor(params) {
        super();
        /** User ID */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Bot menu button action */
        Object.defineProperty(this, "button", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.user_id = params.user_id;
        this.button = params.button;
    }
}
/** Gets the menu button action for a given user or for all users, previously set using [bots.setBotMenuButton](https://core.telegram.org/method/bots.setBotMenuButton); users can see this information in the [botInfo](https://core.telegram.org/constructor/botInfo) constructor. */
export class bots_getBotMenuButton_ extends Function_ {
    get [id]() {
        return 0x9C60EB28;
    }
    static get [name]() {
        return "bots.getBotMenuButton";
    }
    static get [paramDesc]() {
        return [
            ["user_id", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            [this.user_id, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** User ID or empty for the default menu button. */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.user_id = params.user_id;
    }
}
/** Set the default [suggested admin rights](https://core.telegram.org/api/rights#suggested-bot-rights) for bots being added as admins to channels, see [here for more info on how to handle them »](https://core.telegram.org/api/rights#suggested-bot-rights). */
export class bots_setBotBroadcastDefaultAdminRights_ extends Function_ {
    get [id]() {
        return 0x788464E1;
    }
    static get [name]() {
        return "bots.setBotBroadcastDefaultAdminRights";
    }
    static get [paramDesc]() {
        return [
            ["admin_rights", types._ChatAdminRights, "ChatAdminRights"],
        ];
    }
    get [params]() {
        return [
            [this.admin_rights, types._ChatAdminRights, "ChatAdminRights"],
        ];
    }
    constructor(params) {
        super();
        /** Admin rights */
        Object.defineProperty(this, "admin_rights", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.admin_rights = params.admin_rights;
    }
}
/** Set the default [suggested admin rights](https://core.telegram.org/api/rights#suggested-bot-rights) for bots being added as admins to groups, see [here for more info on how to handle them »](https://core.telegram.org/api/rights#suggested-bot-rights). */
export class bots_setBotGroupDefaultAdminRights_ extends Function_ {
    get [id]() {
        return 0x925EC9EA;
    }
    static get [name]() {
        return "bots.setBotGroupDefaultAdminRights";
    }
    static get [paramDesc]() {
        return [
            ["admin_rights", types._ChatAdminRights, "ChatAdminRights"],
        ];
    }
    get [params]() {
        return [
            [this.admin_rights, types._ChatAdminRights, "ChatAdminRights"],
        ];
    }
    constructor(params) {
        super();
        /** Admin rights */
        Object.defineProperty(this, "admin_rights", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.admin_rights = params.admin_rights;
    }
}
/** Set localized name, about text and description of a bot (or of the current account, if called by a bot). */
export class bots_setBotInfo_ extends Function_ {
    get [id]() {
        return 0x10CF3123;
    }
    static get [name]() {
        return "bots.setBotInfo";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["bot", types._InputUser, "flags.2?InputUser"],
            ["lang_code", "string", "string"],
            ["name", "string", "flags.3?string"],
            ["about", "string", "flags.0?string"],
            ["description", "string", "flags.1?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.bot ?? null, types._InputUser, "flags.2?InputUser"],
            [this.lang_code, "string", "string"],
            [this.name ?? null, "string", "flags.3?string"],
            [this.about ?? null, "string", "flags.0?string"],
            [this.description ?? null, "string", "flags.1?string"],
        ];
    }
    constructor(params) {
        super();
        /** If called by a user, **must** contain the peer of a bot we own. */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Language code, if left empty update the fallback about text and description */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New bot name */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New about text */
        Object.defineProperty(this, "about", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New description */
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot = params.bot;
        this.lang_code = params.lang_code;
        this.name = params.name;
        this.about = params.about;
        this.description = params.description;
    }
}
/** Get localized name, about text and description of a bot (or of the current account, if called by a bot). */
export class bots_getBotInfo_ extends Function_ {
    get [id]() {
        return 0xDCD914FD;
    }
    static get [name]() {
        return "bots.getBotInfo";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["bot", types._InputUser, "flags.0?InputUser"],
            ["lang_code", "string", "string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.bot ?? null, types._InputUser, "flags.0?InputUser"],
            [this.lang_code, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** If called by a user, **must** contain the peer of a bot we own. */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Language code, if left empty this method will return the fallback about text and description. */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot = params.bot;
        this.lang_code = params.lang_code;
    }
}
/** Reorder usernames associated to a bot we own. */
export class bots_reorderUsernames_ extends Function_ {
    get [id]() {
        return 0x9709B1C2;
    }
    static get [name]() {
        return "bots.reorderUsernames";
    }
    static get [paramDesc]() {
        return [
            ["bot", types._InputUser, "InputUser"],
            ["order", ["string"], "Vector<string>"],
        ];
    }
    get [params]() {
        return [
            [this.bot, types._InputUser, "InputUser"],
            [this.order, ["string"], "Vector<string>"],
        ];
    }
    constructor(params) {
        super();
        /** The bot */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The new order for active usernames. All active usernames must be specified. */
        Object.defineProperty(this, "order", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot = params.bot;
        this.order = params.order;
    }
}
/** Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to a bot we own. */
export class bots_toggleUsername_ extends Function_ {
    get [id]() {
        return 0x053CA973;
    }
    static get [name]() {
        return "bots.toggleUsername";
    }
    static get [paramDesc]() {
        return [
            ["bot", types._InputUser, "InputUser"],
            ["username", "string", "string"],
            ["active", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.bot, types._InputUser, "InputUser"],
            [this.username, "string", "string"],
            [this.active, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** The bot */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Username */
        Object.defineProperty(this, "username", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to activate or deactivate it */
        Object.defineProperty(this, "active", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot = params.bot;
        this.username = params.username;
        this.active = params.active;
    }
}
/** Check whether the specified bot can send us messages */
export class bots_canSendMessage_ extends Function_ {
    get [id]() {
        return 0x1359F4E6;
    }
    static get [name]() {
        return "bots.canSendMessage";
    }
    static get [paramDesc]() {
        return [
            ["bot", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            [this.bot, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** The bot */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot = params.bot;
    }
}
/** Allow the specified bot to send us messages */
export class bots_allowSendMessage_ extends Function_ {
    get [id]() {
        return 0xF132E3EF;
    }
    static get [name]() {
        return "bots.allowSendMessage";
    }
    static get [paramDesc]() {
        return [
            ["bot", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            [this.bot, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** The bot */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot = params.bot;
    }
}
/** Send a custom request from a [mini bot app](https://core.telegram.org/api/bots/webapps), triggered by a [web\_app\_invoke\_custom\_method event »](https://core.telegram.org/api/web-events#web-app-invoke-custom-method). */
export class bots_invokeWebViewCustomMethod_ extends Function_ {
    get [id]() {
        return 0x087FC5E7;
    }
    static get [name]() {
        return "bots.invokeWebViewCustomMethod";
    }
    static get [paramDesc]() {
        return [
            ["bot", types._InputUser, "InputUser"],
            ["custom_method", "string", "string"],
            ["params", types._DataJSON, "DataJSON"],
        ];
    }
    get [params]() {
        return [
            [this.bot, types._InputUser, "InputUser"],
            [this.custom_method, "string", "string"],
            [this.params, types._DataJSON, "DataJSON"],
        ];
    }
    constructor(params) {
        super();
        /** Identifier of the bot associated to the [mini bot app](https://core.telegram.org/api/bots/webapps) */
        Object.defineProperty(this, "bot", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Identifier of the custom method to invoke */
        Object.defineProperty(this, "custom_method", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Method parameters */
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.bot = params.bot;
        this.custom_method = params.custom_method;
        this.params = params.params;
    }
}
/** Get a payment form */
export class payments_getPaymentForm_ extends Function_ {
    get [id]() {
        return 0x37148DBB;
    }
    static get [name]() {
        return "payments.getPaymentForm";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["invoice", types._InputInvoice, "InputInvoice"],
            ["theme_params", types._DataJSON, "flags.0?DataJSON"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.invoice, types._InputInvoice, "InputInvoice"],
            [this.theme_params ?? null, types._DataJSON, "flags.0?DataJSON"],
        ];
    }
    constructor(params) {
        super();
        /** Invoice */
        Object.defineProperty(this, "invoice", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** A JSON object with the following keys, containing color theme information (integers, RGB24) to pass to the payment provider, to apply in eventual verification pages:
        `bg_color` - Background color
        `text_color` - Text color
        `hint_color` - Hint text color
        `link_color` - Link color
        `button_color` - Button color
        `button_text_color` - Button text color */
        Object.defineProperty(this, "theme_params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.invoice = params.invoice;
        this.theme_params = params.theme_params;
    }
}
/** Get payment receipt */
export class payments_getPaymentReceipt_ extends Function_ {
    get [id]() {
        return 0x2478D1CC;
    }
    static get [name]() {
        return "payments.getPaymentReceipt";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** The peer where the payment receipt was sent */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID of receipt */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.msg_id = params.msg_id;
    }
}
/** Submit requested order information for validation */
export class payments_validateRequestedInfo_ extends Function_ {
    get [id]() {
        return 0xB6C8F12B;
    }
    static get [name]() {
        return "payments.validateRequestedInfo";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["save", "true", "flags.0?true"],
            ["invoice", types._InputInvoice, "InputInvoice"],
            ["info", types._PaymentRequestedInfo, "PaymentRequestedInfo"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.save ?? null, "true", "flags.0?true"],
            [this.invoice, types._InputInvoice, "InputInvoice"],
            [this.info, types._PaymentRequestedInfo, "PaymentRequestedInfo"],
        ];
    }
    constructor(params) {
        super();
        /** Save order information to re-use it for future orders */
        Object.defineProperty(this, "save", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Invoice */
        Object.defineProperty(this, "invoice", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Requested order information */
        Object.defineProperty(this, "info", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.save = params.save;
        this.invoice = params.invoice;
        this.info = params.info;
    }
}
/** Send compiled payment form */
export class payments_sendPaymentForm_ extends Function_ {
    get [id]() {
        return 0x2D03522F;
    }
    static get [name]() {
        return "payments.sendPaymentForm";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["form_id", "bigint", "long"],
            ["invoice", types._InputInvoice, "InputInvoice"],
            ["requested_info_id", "string", "flags.0?string"],
            ["shipping_option_id", "string", "flags.1?string"],
            ["credentials", types._InputPaymentCredentials, "InputPaymentCredentials"],
            ["tip_amount", "bigint", "flags.2?long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.form_id, "bigint", "long"],
            [this.invoice, types._InputInvoice, "InputInvoice"],
            [this.requested_info_id ?? null, "string", "flags.0?string"],
            [this.shipping_option_id ?? null, "string", "flags.1?string"],
            [this.credentials, types._InputPaymentCredentials, "InputPaymentCredentials"],
            [this.tip_amount ?? null, "bigint", "flags.2?long"],
        ];
    }
    constructor(params) {
        super();
        /** Form ID */
        Object.defineProperty(this, "form_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Invoice */
        Object.defineProperty(this, "invoice", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of saved and validated [order info](https://core.telegram.org/constructor/payments.validatedRequestedInfo) */
        Object.defineProperty(this, "requested_info_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Chosen shipping option ID */
        Object.defineProperty(this, "shipping_option_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Payment credentials */
        Object.defineProperty(this, "credentials", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Tip, in the smallest units of the currency (integer, not float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
        Object.defineProperty(this, "tip_amount", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.form_id = params.form_id;
        this.invoice = params.invoice;
        this.requested_info_id = params.requested_info_id;
        this.shipping_option_id = params.shipping_option_id;
        this.credentials = params.credentials;
        this.tip_amount = params.tip_amount;
    }
}
/** Get saved payment information */
export class payments_getSavedInfo_ extends Function_ {
    get [id]() {
        return 0x227D824B;
    }
    static get [name]() {
        return "payments.getSavedInfo";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Clear saved payment information */
export class payments_clearSavedInfo_ extends Function_ {
    get [id]() {
        return 0xD83D70C1;
    }
    static get [name]() {
        return "payments.clearSavedInfo";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["credentials", "true", "flags.0?true"],
            ["info", "true", "flags.1?true"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.credentials ?? null, "true", "flags.0?true"],
            [this.info ?? null, "true", "flags.1?true"],
        ];
    }
    constructor(params) {
        super();
        /** Remove saved payment credentials */
        Object.defineProperty(this, "credentials", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Clear the last order settings saved by the user */
        Object.defineProperty(this, "info", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.credentials = params?.credentials;
        this.info = params?.info;
    }
}
/** Get info about a credit card */
export class payments_getBankCardData_ extends Function_ {
    get [id]() {
        return 0x2E79D779;
    }
    static get [name]() {
        return "payments.getBankCardData";
    }
    static get [paramDesc]() {
        return [
            ["number", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.number, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Credit card number */
        Object.defineProperty(this, "number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.number = params.number;
    }
}
/** Generate an [invoice deep link](https://core.telegram.org/api/links#invoice-links) */
export class payments_exportInvoice_ extends Function_ {
    get [id]() {
        return 0x0F91B065;
    }
    static get [name]() {
        return "payments.exportInvoice";
    }
    static get [paramDesc]() {
        return [
            ["invoice_media", types._InputMedia, "InputMedia"],
        ];
    }
    get [params]() {
        return [
            [this.invoice_media, types._InputMedia, "InputMedia"],
        ];
    }
    constructor(params) {
        super();
        /** Invoice */
        Object.defineProperty(this, "invoice_media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.invoice_media = params.invoice_media;
    }
}
/** Informs server about a purchase made through the App Store: for official applications only. */
export class payments_assignAppStoreTransaction_ extends Function_ {
    get [id]() {
        return 0x80ED747D;
    }
    static get [name]() {
        return "payments.assignAppStoreTransaction";
    }
    static get [paramDesc]() {
        return [
            ["receipt", Uint8Array, "bytes"],
            ["purpose", types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
        ];
    }
    get [params]() {
        return [
            [this.receipt, Uint8Array, "bytes"],
            [this.purpose, types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
        ];
    }
    constructor(params) {
        super();
        /** Receipt */
        Object.defineProperty(this, "receipt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Payment purpose */
        Object.defineProperty(this, "purpose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.receipt = params.receipt;
        this.purpose = params.purpose;
    }
}
/** Informs server about a purchase made through the Play Store: for official applications only. */
export class payments_assignPlayMarketTransaction_ extends Function_ {
    get [id]() {
        return 0xDFFD50D3;
    }
    static get [name]() {
        return "payments.assignPlayMarketTransaction";
    }
    static get [paramDesc]() {
        return [
            ["receipt", types._DataJSON, "DataJSON"],
            ["purpose", types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
        ];
    }
    get [params]() {
        return [
            [this.receipt, types._DataJSON, "DataJSON"],
            [this.purpose, types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
        ];
    }
    constructor(params) {
        super();
        /** Receipt */
        Object.defineProperty(this, "receipt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Payment purpose */
        Object.defineProperty(this, "purpose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.receipt = params.receipt;
        this.purpose = params.purpose;
    }
}
/** Checks whether Telegram Premium purchase is possible. Must be called before in-store Premium purchase, official apps only. */
export class payments_canPurchasePremium_ extends Function_ {
    get [id]() {
        return 0x9FC19EB6;
    }
    static get [name]() {
        return "payments.canPurchasePremium";
    }
    static get [paramDesc]() {
        return [
            ["purpose", types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
        ];
    }
    get [params]() {
        return [
            [this.purpose, types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
        ];
    }
    constructor(params) {
        super();
        /** Payment purpose */
        Object.defineProperty(this, "purpose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.purpose = params.purpose;
    }
}
/** Obtain a list of Telegram Premium [giveaway/gift code »](https://core.telegram.org/api/giveaways) options. */
export class payments_getPremiumGiftCodeOptions_ extends Function_ {
    get [id]() {
        return 0x2757BA54;
    }
    static get [name]() {
        return "payments.getPremiumGiftCodeOptions";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["boost_peer", types._InputPeer, "flags.0?InputPeer"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.boost_peer ?? null, types._InputPeer, "flags.0?InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** The channel that will start the giveaway */
        Object.defineProperty(this, "boost_peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.boost_peer = params?.boost_peer;
    }
}
/** Obtain information about a [Telegram Premium giftcode »](https://core.telegram.org/api/giveaways) */
export class payments_checkGiftCode_ extends Function_ {
    get [id]() {
        return 0x8E51B4C1;
    }
    static get [name]() {
        return "payments.checkGiftCode";
    }
    static get [paramDesc]() {
        return [
            ["slug", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.slug, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The giftcode to check */
        Object.defineProperty(this, "slug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.slug = params.slug;
    }
}
/** Apply a [Telegram Premium giftcode »](https://core.telegram.org/api/giveaways) */
export class payments_applyGiftCode_ extends Function_ {
    get [id]() {
        return 0xF6E26854;
    }
    static get [name]() {
        return "payments.applyGiftCode";
    }
    static get [paramDesc]() {
        return [
            ["slug", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.slug, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The code to apply */
        Object.defineProperty(this, "slug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.slug = params.slug;
    }
}
/** Obtain information about a [Telegram Premium giveaway »](https://core.telegram.org/api/giveaways). */
export class payments_getGiveawayInfo_ extends Function_ {
    get [id]() {
        return 0xF4239425;
    }
    static get [name]() {
        return "payments.getGiveawayInfo";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["msg_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.msg_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** The peer where the giveaway was posted. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID of the [messageActionGiveawayLaunch](https://core.telegram.org/constructor/messageActionGiveawayLaunch) service message */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.msg_id = params.msg_id;
    }
}
/** Launch a [prepaid giveaway »](https://core.telegram.org/api/giveaways). */
export class payments_launchPrepaidGiveaway_ extends Function_ {
    get [id]() {
        return 0x5FF58F20;
    }
    static get [name]() {
        return "payments.launchPrepaidGiveaway";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["giveaway_id", "bigint", "long"],
            ["purpose", types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.giveaway_id, "bigint", "long"],
            [this.purpose, types._InputStorePaymentPurpose, "InputStorePaymentPurpose"],
        ];
    }
    constructor(params) {
        super();
        /** The peer where to launch the giveaway. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The prepaid giveaway ID. */
        Object.defineProperty(this, "giveaway_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Giveway parameters */
        Object.defineProperty(this, "purpose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.giveaway_id = params.giveaway_id;
        this.purpose = params.purpose;
    }
}
/** Create a stickerset, bots only. */
export class stickers_createStickerSet_ extends Function_ {
    get [id]() {
        return 0x9021AB67;
    }
    static get [name]() {
        return "stickers.createStickerSet";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["masks", "true", "flags.0?true"],
            ["emojis", "true", "flags.5?true"],
            ["text_color", "true", "flags.6?true"],
            ["user_id", types._InputUser, "InputUser"],
            ["title", "string", "string"],
            ["short_name", "string", "string"],
            ["thumb", types._InputDocument, "flags.2?InputDocument"],
            ["stickers", [types._InputStickerSetItem], "Vector<InputStickerSetItem>"],
            ["software", "string", "flags.3?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.masks ?? null, "true", "flags.0?true"],
            [this.emojis ?? null, "true", "flags.5?true"],
            [this.text_color ?? null, "true", "flags.6?true"],
            [this.user_id, types._InputUser, "InputUser"],
            [this.title, "string", "string"],
            [this.short_name, "string", "string"],
            [this.thumb ?? null, types._InputDocument, "flags.2?InputDocument"],
            [this.stickers, [types._InputStickerSetItem], "Vector<InputStickerSetItem>"],
            [this.software ?? null, "string", "flags.3?string"],
        ];
    }
    constructor(params) {
        super();
        /** Whether this is a mask stickerset */
        Object.defineProperty(this, "masks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether this is a [custom emoji](https://core.telegram.org/api/custom-emoji) stickerset. */
        Object.defineProperty(this, "emojis", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether the color of TGS custom emojis contained in this set should be changed to the text color when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context. For custom emoji stickersets only. */
        Object.defineProperty(this, "text_color", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Stickerset owner */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Stickerset name, `1-64` chars */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Short name of sticker set, to be used in [sticker deep links »](https://core.telegram.org/api/links#stickerset-links). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and, **if called by a bot**, must end in `"_by_<bot_username>"`. `<bot_username>` is case insensitive. 1-64 characters. */
        Object.defineProperty(this, "short_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Thumbnail */
        Object.defineProperty(this, "thumb", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Stickers */
        Object.defineProperty(this, "stickers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Used when [importing stickers using the sticker import SDKs](https://core.telegram.org/import-stickers), specifies the name of the software that created the stickers */
        Object.defineProperty(this, "software", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.masks = params.masks;
        this.emojis = params.emojis;
        this.text_color = params.text_color;
        this.user_id = params.user_id;
        this.title = params.title;
        this.short_name = params.short_name;
        this.thumb = params.thumb;
        this.stickers = params.stickers;
        this.software = params.software;
    }
}
/** Remove a sticker from the set where it belongs, bots only. The sticker set must have been created by the bot. */
export class stickers_removeStickerFromSet_ extends Function_ {
    get [id]() {
        return 0xF7760F51;
    }
    static get [name]() {
        return "stickers.removeStickerFromSet";
    }
    static get [paramDesc]() {
        return [
            ["sticker", types._InputDocument, "InputDocument"],
        ];
    }
    get [params]() {
        return [
            [this.sticker, types._InputDocument, "InputDocument"],
        ];
    }
    constructor(params) {
        super();
        /** The sticker to remove */
        Object.defineProperty(this, "sticker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sticker = params.sticker;
    }
}
/** Changes the absolute position of a sticker in the set to which it belongs; for bots only. The sticker set must have been created by the bot */
export class stickers_changeStickerPosition_ extends Function_ {
    get [id]() {
        return 0xFFB6D4CA;
    }
    static get [name]() {
        return "stickers.changeStickerPosition";
    }
    static get [paramDesc]() {
        return [
            ["sticker", types._InputDocument, "InputDocument"],
            ["position", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.sticker, types._InputDocument, "InputDocument"],
            [this.position, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** The sticker */
        Object.defineProperty(this, "sticker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The new position of the sticker, zero-based */
        Object.defineProperty(this, "position", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sticker = params.sticker;
        this.position = params.position;
    }
}
/** Add a sticker to a stickerset, bots only. The sticker set must have been created by the bot. */
export class stickers_addStickerToSet_ extends Function_ {
    get [id]() {
        return 0x8653FEBE;
    }
    static get [name]() {
        return "stickers.addStickerToSet";
    }
    static get [paramDesc]() {
        return [
            ["stickerset", types._InputStickerSet, "InputStickerSet"],
            ["sticker", types._InputStickerSetItem, "InputStickerSetItem"],
        ];
    }
    get [params]() {
        return [
            [this.stickerset, types._InputStickerSet, "InputStickerSet"],
            [this.sticker, types._InputStickerSetItem, "InputStickerSetItem"],
        ];
    }
    constructor(params) {
        super();
        /** The stickerset */
        Object.defineProperty(this, "stickerset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The sticker */
        Object.defineProperty(this, "sticker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.stickerset = params.stickerset;
        this.sticker = params.sticker;
    }
}
/** Set stickerset thumbnail */
export class stickers_setStickerSetThumb_ extends Function_ {
    get [id]() {
        return 0xA76A5392;
    }
    static get [name]() {
        return "stickers.setStickerSetThumb";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["stickerset", types._InputStickerSet, "InputStickerSet"],
            ["thumb", types._InputDocument, "flags.0?InputDocument"],
            ["thumb_document_id", "bigint", "flags.1?long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.stickerset, types._InputStickerSet, "InputStickerSet"],
            [this.thumb ?? null, types._InputDocument, "flags.0?InputDocument"],
            [this.thumb_document_id ?? null, "bigint", "flags.1?long"],
        ];
    }
    constructor(params) {
        super();
        /** Stickerset */
        Object.defineProperty(this, "stickerset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Thumbnail (only for normal stickersets, not custom emoji stickersets). */
        Object.defineProperty(this, "thumb", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Only for [custom emoji stickersets](https://core.telegram.org/api/custom-emoji), ID of a custom emoji present in the set to use as thumbnail; pass 0 to fallback to the first custom emoji of the set. */
        Object.defineProperty(this, "thumb_document_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.stickerset = params.stickerset;
        this.thumb = params.thumb;
        this.thumb_document_id = params.thumb_document_id;
    }
}
/** Check whether the given short name is available */
export class stickers_checkShortName_ extends Function_ {
    get [id]() {
        return 0x284B3639;
    }
    static get [name]() {
        return "stickers.checkShortName";
    }
    static get [paramDesc]() {
        return [
            ["short_name", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.short_name, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Short name */
        Object.defineProperty(this, "short_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.short_name = params.short_name;
    }
}
/** Suggests a short name for a given stickerpack name */
export class stickers_suggestShortName_ extends Function_ {
    get [id]() {
        return 0x4DAFC503;
    }
    static get [name]() {
        return "stickers.suggestShortName";
    }
    static get [paramDesc]() {
        return [
            ["title", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.title, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Sticker pack name */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.title = params.title;
    }
}
/** Update the keywords, emojis or [mask coordinates](https://core.telegram.org/api/stickers#mask-stickers) of a sticker, bots only. */
export class stickers_changeSticker_ extends Function_ {
    get [id]() {
        return 0xF5537EBC;
    }
    static get [name]() {
        return "stickers.changeSticker";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["sticker", types._InputDocument, "InputDocument"],
            ["emoji", "string", "flags.0?string"],
            ["mask_coords", types._MaskCoords, "flags.1?MaskCoords"],
            ["keywords", "string", "flags.2?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.sticker, types._InputDocument, "InputDocument"],
            [this.emoji ?? null, "string", "flags.0?string"],
            [this.mask_coords ?? null, types._MaskCoords, "flags.1?MaskCoords"],
            [this.keywords ?? null, "string", "flags.2?string"],
        ];
    }
    constructor(params) {
        super();
        /** The sticker */
        Object.defineProperty(this, "sticker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, updates the emoji list associated to the sticker */
        Object.defineProperty(this, "emoji", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, updates the [mask coordinates](https://core.telegram.org/api/stickers#mask-stickers) */
        Object.defineProperty(this, "mask_coords", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, updates the sticker keywords (separated by commas). Can't be provided for mask stickers. */
        Object.defineProperty(this, "keywords", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sticker = params.sticker;
        this.emoji = params.emoji;
        this.mask_coords = params.mask_coords;
        this.keywords = params.keywords;
    }
}
/** Renames a stickerset, bots only. */
export class stickers_renameStickerSet_ extends Function_ {
    get [id]() {
        return 0x124B1C00;
    }
    static get [name]() {
        return "stickers.renameStickerSet";
    }
    static get [paramDesc]() {
        return [
            ["stickerset", types._InputStickerSet, "InputStickerSet"],
            ["title", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.stickerset, types._InputStickerSet, "InputStickerSet"],
            [this.title, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Stickerset to rename */
        Object.defineProperty(this, "stickerset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New stickerset title */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.stickerset = params.stickerset;
        this.title = params.title;
    }
}
/** Deletes a stickerset we created, bots only. */
export class stickers_deleteStickerSet_ extends Function_ {
    get [id]() {
        return 0x87704394;
    }
    static get [name]() {
        return "stickers.deleteStickerSet";
    }
    static get [paramDesc]() {
        return [
            ["stickerset", types._InputStickerSet, "InputStickerSet"],
        ];
    }
    get [params]() {
        return [
            [this.stickerset, types._InputStickerSet, "InputStickerSet"],
        ];
    }
    constructor(params) {
        super();
        /** Stickerset to delete */
        Object.defineProperty(this, "stickerset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.stickerset = params.stickerset;
    }
}
export class stickers_replaceSticker_ extends Function_ {
    get [id]() {
        return 0x4696459A;
    }
    static get [name]() {
        return "stickers.replaceSticker";
    }
    static get [paramDesc]() {
        return [
            ["sticker", types._InputDocument, "InputDocument"],
            ["new_sticker", types._InputStickerSetItem, "InputStickerSetItem"],
        ];
    }
    get [params]() {
        return [
            [this.sticker, types._InputDocument, "InputDocument"],
            [this.new_sticker, types._InputStickerSetItem, "InputStickerSetItem"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "sticker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "new_sticker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sticker = params.sticker;
        this.new_sticker = params.new_sticker;
    }
}
/** Get phone call configuration to be passed to libtgvoip's shared config */
export class phone_getCallConfig_ extends Function_ {
    get [id]() {
        return 0x55451FA9;
    }
    static get [name]() {
        return "phone.getCallConfig";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Start a telegram phone call */
export class phone_requestCall_ extends Function_ {
    get [id]() {
        return 0x42FF96ED;
    }
    static get [name]() {
        return "phone.requestCall";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["video", "true", "flags.0?true"],
            ["user_id", types._InputUser, "InputUser"],
            ["random_id", "number", "int"],
            ["g_a_hash", Uint8Array, "bytes"],
            ["protocol", types._PhoneCallProtocol, "PhoneCallProtocol"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.video ?? null, "true", "flags.0?true"],
            [this.user_id, types._InputUser, "InputUser"],
            [this.random_id, "number", "int"],
            [this.g_a_hash, Uint8Array, "bytes"],
            [this.protocol, types._PhoneCallProtocol, "PhoneCallProtocol"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to start a video call */
        Object.defineProperty(this, "video", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Destination of the phone call */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Random ID to avoid resending the same object */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) */
        Object.defineProperty(this, "g_a_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone call settings */
        Object.defineProperty(this, "protocol", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.video = params.video;
        this.user_id = params.user_id;
        this.random_id = params.random_id;
        this.g_a_hash = params.g_a_hash;
        this.protocol = params.protocol;
    }
}
/** Accept incoming call */
export class phone_acceptCall_ extends Function_ {
    get [id]() {
        return 0x3BD2B4A0;
    }
    static get [name]() {
        return "phone.acceptCall";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPhoneCall, "InputPhoneCall"],
            ["g_b", Uint8Array, "bytes"],
            ["protocol", types._PhoneCallProtocol, "PhoneCallProtocol"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPhoneCall, "InputPhoneCall"],
            [this.g_b, Uint8Array, "bytes"],
            [this.protocol, types._PhoneCallProtocol, "PhoneCallProtocol"],
        ];
    }
    constructor(params) {
        super();
        /** The call to accept */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) */
        Object.defineProperty(this, "g_b", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone call settings */
        Object.defineProperty(this, "protocol", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.g_b = params.g_b;
        this.protocol = params.protocol;
    }
}
/** [Complete phone call E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) */
export class phone_confirmCall_ extends Function_ {
    get [id]() {
        return 0x2EFE1722;
    }
    static get [name]() {
        return "phone.confirmCall";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPhoneCall, "InputPhoneCall"],
            ["g_a", Uint8Array, "bytes"],
            ["key_fingerprint", "bigint", "long"],
            ["protocol", types._PhoneCallProtocol, "PhoneCallProtocol"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPhoneCall, "InputPhoneCall"],
            [this.g_a, Uint8Array, "bytes"],
            [this.key_fingerprint, "bigint", "long"],
            [this.protocol, types._PhoneCallProtocol, "PhoneCallProtocol"],
        ];
    }
    constructor(params) {
        super();
        /** The phone call */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) */
        Object.defineProperty(this, "g_a", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Key fingerprint */
        Object.defineProperty(this, "key_fingerprint", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Phone call settings */
        Object.defineProperty(this, "protocol", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.g_a = params.g_a;
        this.key_fingerprint = params.key_fingerprint;
        this.protocol = params.protocol;
    }
}
/** Optional: notify the server that the user is currently busy in a call: this will automatically refuse all incoming phone calls until the current phone call is ended. */
export class phone_receivedCall_ extends Function_ {
    get [id]() {
        return 0x17D54F61;
    }
    static get [name]() {
        return "phone.receivedCall";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPhoneCall, "InputPhoneCall"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPhoneCall, "InputPhoneCall"],
        ];
    }
    constructor(params) {
        super();
        /** The phone call we're currently in */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Refuse or end running call */
export class phone_discardCall_ extends Function_ {
    get [id]() {
        return 0xB2CBC1C0;
    }
    static get [name]() {
        return "phone.discardCall";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["video", "true", "flags.0?true"],
            ["peer", types._InputPhoneCall, "InputPhoneCall"],
            ["duration", "number", "int"],
            ["reason", types._PhoneCallDiscardReason, "PhoneCallDiscardReason"],
            ["connection_id", "bigint", "long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.video ?? null, "true", "flags.0?true"],
            [this.peer, types._InputPhoneCall, "InputPhoneCall"],
            [this.duration, "number", "int"],
            [this.reason, types._PhoneCallDiscardReason, "PhoneCallDiscardReason"],
            [this.connection_id, "bigint", "long"],
        ];
    }
    constructor(params) {
        super();
        /** Whether this is a video call */
        Object.defineProperty(this, "video", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The phone call */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Call duration */
        Object.defineProperty(this, "duration", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Why was the call discarded */
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Preferred libtgvoip relay ID */
        Object.defineProperty(this, "connection_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.video = params.video;
        this.peer = params.peer;
        this.duration = params.duration;
        this.reason = params.reason;
        this.connection_id = params.connection_id;
    }
}
/** Rate a call, returns info about the rating message sent to the official VoIP bot. */
export class phone_setCallRating_ extends Function_ {
    get [id]() {
        return 0x59EAD627;
    }
    static get [name]() {
        return "phone.setCallRating";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["user_initiative", "true", "flags.0?true"],
            ["peer", types._InputPhoneCall, "InputPhoneCall"],
            ["rating", "number", "int"],
            ["comment", "string", "string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.user_initiative ?? null, "true", "flags.0?true"],
            [this.peer, types._InputPhoneCall, "InputPhoneCall"],
            [this.rating, "number", "int"],
            [this.comment, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Whether the user decided on their own initiative to rate the call */
        Object.defineProperty(this, "user_initiative", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The call to rate */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Rating in `1-5` stars */
        Object.defineProperty(this, "rating", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** An additional comment */
        Object.defineProperty(this, "comment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.user_initiative = params.user_initiative;
        this.peer = params.peer;
        this.rating = params.rating;
        this.comment = params.comment;
    }
}
/** Send phone call debug data to server */
export class phone_saveCallDebug_ extends Function_ {
    get [id]() {
        return 0x277ADD7E;
    }
    static get [name]() {
        return "phone.saveCallDebug";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPhoneCall, "InputPhoneCall"],
            ["debug", types._DataJSON, "DataJSON"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPhoneCall, "InputPhoneCall"],
            [this.debug, types._DataJSON, "DataJSON"],
        ];
    }
    constructor(params) {
        super();
        /** Phone call */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Debug statistics obtained from libtgvoip */
        Object.defineProperty(this, "debug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.debug = params.debug;
    }
}
/** Send VoIP signaling data */
export class phone_sendSignalingData_ extends Function_ {
    get [id]() {
        return 0xFF7A9383;
    }
    static get [name]() {
        return "phone.sendSignalingData";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPhoneCall, "InputPhoneCall"],
            ["data", Uint8Array, "bytes"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPhoneCall, "InputPhoneCall"],
            [this.data, Uint8Array, "bytes"],
        ];
    }
    constructor(params) {
        super();
        /** Phone call */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Signaling payload */
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.data = params.data;
    }
}
/** Create a group call or livestream */
export class phone_createGroupCall_ extends Function_ {
    get [id]() {
        return 0x48CDC6D8;
    }
    static get [name]() {
        return "phone.createGroupCall";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["rtmp_stream", "true", "flags.2?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["random_id", "number", "int"],
            ["title", "string", "flags.0?string"],
            ["schedule_date", "number", "flags.1?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.rtmp_stream ?? null, "true", "flags.2?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.random_id, "number", "int"],
            [this.title ?? null, "string", "flags.0?string"],
            [this.schedule_date ?? null, "number", "flags.1?int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether RTMP stream support should be enabled: only the [group/supergroup/channel](https://core.telegram.org/api/channel) owner can use this flag. */
        Object.defineProperty(this, "rtmp_stream", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Associate the group call or livestream to the provided [group/supergroup/channel](https://core.telegram.org/api/channel) */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique client message ID required to prevent creation of duplicate group calls */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Call title */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** For scheduled group call or livestreams, the absolute date when the group call will start */
        Object.defineProperty(this, "schedule_date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.rtmp_stream = params.rtmp_stream;
        this.peer = params.peer;
        this.random_id = params.random_id;
        this.title = params.title;
        this.schedule_date = params.schedule_date;
    }
}
/** Join a group call */
export class phone_joinGroupCall_ extends Function_ {
    get [id]() {
        return 0xB132FF7B;
    }
    static get [name]() {
        return "phone.joinGroupCall";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["muted", "true", "flags.0?true"],
            ["video_stopped", "true", "flags.2?true"],
            ["call", types._InputGroupCall, "InputGroupCall"],
            ["join_as", types._InputPeer, "InputPeer"],
            ["invite_hash", "string", "flags.1?string"],
            ["params", types._DataJSON, "DataJSON"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.muted ?? null, "true", "flags.0?true"],
            [this.video_stopped ?? null, "true", "flags.2?true"],
            [this.call, types._InputGroupCall, "InputGroupCall"],
            [this.join_as, types._InputPeer, "InputPeer"],
            [this.invite_hash ?? null, "string", "flags.1?string"],
            [this.params, types._DataJSON, "DataJSON"],
        ];
    }
    constructor(params) {
        super();
        /** If set, the user will be muted by default upon joining. */
        Object.defineProperty(this, "muted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, the user's video will be disabled by default upon joining. */
        Object.defineProperty(this, "video_stopped", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Join the group call, presenting yourself as the specified user/channel */
        Object.defineProperty(this, "join_as", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The invitation hash from the [invite link »](https://core.telegram.org/api/links#video-chat-livestream-links), if provided allows speaking in a livestream or muted group chat. */
        Object.defineProperty(this, "invite_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** WebRTC parameters */
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.muted = params.muted;
        this.video_stopped = params.video_stopped;
        this.call = params.call;
        this.join_as = params.join_as;
        this.invite_hash = params.invite_hash;
        this.params = params.params;
    }
}
/** Leave a group call */
export class phone_leaveGroupCall_ extends Function_ {
    get [id]() {
        return 0x500377F9;
    }
    static get [name]() {
        return "phone.leaveGroupCall";
    }
    static get [paramDesc]() {
        return [
            ["call", types._InputGroupCall, "InputGroupCall"],
            ["source", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.call, types._InputGroupCall, "InputGroupCall"],
            [this.source, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** The group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Your source ID */
        Object.defineProperty(this, "source", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
        this.source = params.source;
    }
}
/** Invite a set of users to a group call. */
export class phone_inviteToGroupCall_ extends Function_ {
    get [id]() {
        return 0x7B393160;
    }
    static get [name]() {
        return "phone.inviteToGroupCall";
    }
    static get [paramDesc]() {
        return [
            ["call", types._InputGroupCall, "InputGroupCall"],
            ["users", [types._InputUser], "Vector<InputUser>"],
        ];
    }
    get [params]() {
        return [
            [this.call, types._InputGroupCall, "InputGroupCall"],
            [this.users, [types._InputUser], "Vector<InputUser>"],
        ];
    }
    constructor(params) {
        super();
        /** The group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The users to invite. */
        Object.defineProperty(this, "users", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
        this.users = params.users;
    }
}
/** Terminate a group call */
export class phone_discardGroupCall_ extends Function_ {
    get [id]() {
        return 0x7A777135;
    }
    static get [name]() {
        return "phone.discardGroupCall";
    }
    static get [paramDesc]() {
        return [
            ["call", types._InputGroupCall, "InputGroupCall"],
        ];
    }
    get [params]() {
        return [
            [this.call, types._InputGroupCall, "InputGroupCall"],
        ];
    }
    constructor(params) {
        super();
        /** The group call to terminate */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
    }
}
/** Change group call settings */
export class phone_toggleGroupCallSettings_ extends Function_ {
    get [id]() {
        return 0x74BBB43D;
    }
    static get [name]() {
        return "phone.toggleGroupCallSettings";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["reset_invite_hash", "true", "flags.1?true"],
            ["call", types._InputGroupCall, "InputGroupCall"],
            ["join_muted", "boolean", "flags.0?Bool"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.reset_invite_hash ?? null, "true", "flags.1?true"],
            [this.call, types._InputGroupCall, "InputGroupCall"],
            [this.join_muted ?? null, "boolean", "flags.0?Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Invalidate existing invite links */
        Object.defineProperty(this, "reset_invite_hash", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether all users will that join this group call are muted by default upon joining the group call */
        Object.defineProperty(this, "join_muted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.reset_invite_hash = params.reset_invite_hash;
        this.call = params.call;
        this.join_muted = params.join_muted;
    }
}
/** Get info about a group call */
export class phone_getGroupCall_ extends Function_ {
    get [id]() {
        return 0x041845DB;
    }
    static get [name]() {
        return "phone.getGroupCall";
    }
    static get [paramDesc]() {
        return [
            ["call", types._InputGroupCall, "InputGroupCall"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.call, types._InputGroupCall, "InputGroupCall"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** The group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
        this.limit = params.limit;
    }
}
/** Get group call participants */
export class phone_getGroupParticipants_ extends Function_ {
    get [id]() {
        return 0xC558D8AB;
    }
    static get [name]() {
        return "phone.getGroupParticipants";
    }
    static get [paramDesc]() {
        return [
            ["call", types._InputGroupCall, "InputGroupCall"],
            ["ids", [types._InputPeer], "Vector<InputPeer>"],
            ["sources", ["number"], "Vector<int>"],
            ["offset", "string", "string"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.call, types._InputGroupCall, "InputGroupCall"],
            [this.ids, [types._InputPeer], "Vector<InputPeer>"],
            [this.sources, ["number"], "Vector<int>"],
            [this.offset, "string", "string"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If specified, will fetch group participant info about the specified peers */
        Object.defineProperty(this, "ids", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If specified, will fetch group participant info about the specified WebRTC source IDs */
        Object.defineProperty(this, "sources", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Offset for results, taken from the `next_offset` field of [phone.groupParticipants](https://core.telegram.org/constructor/phone.groupParticipants), initially an empty string.
        Note: if no more results are available, the method call will return an empty `next_offset`; thus, avoid providing the `next_offset` returned in [phone.groupParticipants](https://core.telegram.org/constructor/phone.groupParticipants) if it is empty, to avoid an infinite loop. */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
        this.ids = params.ids;
        this.sources = params.sources;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
/** Check whether the group call Server Forwarding Unit is currently receiving the streams with the specified WebRTC source IDs.
Returns an intersection of the source IDs specified in `sources`, and the source IDs currently being forwarded by the SFU. */
export class phone_checkGroupCall_ extends Function_ {
    get [id]() {
        return 0xB59CF977;
    }
    static get [name]() {
        return "phone.checkGroupCall";
    }
    static get [paramDesc]() {
        return [
            ["call", types._InputGroupCall, "InputGroupCall"],
            ["sources", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.call, types._InputGroupCall, "InputGroupCall"],
            [this.sources, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Source IDs */
        Object.defineProperty(this, "sources", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
        this.sources = params.sources;
    }
}
/** Start or stop recording a group call: the recorded audio and video streams will be automatically sent to `Saved messages` (the chat with ourselves). */
export class phone_toggleGroupCallRecord_ extends Function_ {
    get [id]() {
        return 0xF128C708;
    }
    static get [name]() {
        return "phone.toggleGroupCallRecord";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["start", "true", "flags.0?true"],
            ["video", "true", "flags.2?true"],
            ["call", types._InputGroupCall, "InputGroupCall"],
            ["title", "string", "flags.1?string"],
            ["video_portrait", "boolean", "flags.2?Bool"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.start ?? null, "true", "flags.0?true"],
            [this.video ?? null, "true", "flags.2?true"],
            [this.call, types._InputGroupCall, "InputGroupCall"],
            [this.title ?? null, "string", "flags.1?string"],
            [this.video_portrait ?? null, "boolean", "flags.2?Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to start or stop recording */
        Object.defineProperty(this, "start", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to also record video streams */
        Object.defineProperty(this, "video", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The group call or livestream */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Recording title */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If video stream recording is enabled, whether to record in portrait or landscape mode */
        Object.defineProperty(this, "video_portrait", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.start = params.start;
        this.video = params.video;
        this.call = params.call;
        this.title = params.title;
        this.video_portrait = params.video_portrait;
    }
}
/** Edit information about a given group call participant */
export class phone_editGroupCallParticipant_ extends Function_ {
    get [id]() {
        return 0xA5273ABF;
    }
    static get [name]() {
        return "phone.editGroupCallParticipant";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["call", types._InputGroupCall, "InputGroupCall"],
            ["participant", types._InputPeer, "InputPeer"],
            ["muted", "boolean", "flags.0?Bool"],
            ["volume", "number", "flags.1?int"],
            ["raise_hand", "boolean", "flags.2?Bool"],
            ["video_stopped", "boolean", "flags.3?Bool"],
            ["video_paused", "boolean", "flags.4?Bool"],
            ["presentation_paused", "boolean", "flags.5?Bool"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.call, types._InputGroupCall, "InputGroupCall"],
            [this.participant, types._InputPeer, "InputPeer"],
            [this.muted ?? null, "boolean", "flags.0?Bool"],
            [this.volume ?? null, "number", "flags.1?int"],
            [this.raise_hand ?? null, "boolean", "flags.2?Bool"],
            [this.video_stopped ?? null, "boolean", "flags.3?Bool"],
            [this.video_paused ?? null, "boolean", "flags.4?Bool"],
            [this.presentation_paused ?? null, "boolean", "flags.5?Bool"],
        ];
    }
    constructor(params) {
        super();
        /** The group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The group call participant (can also be the user itself) */
        Object.defineProperty(this, "participant", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to mute or unmute the specified participant */
        Object.defineProperty(this, "muted", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New volume */
        Object.defineProperty(this, "volume", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Raise or lower hand */
        Object.defineProperty(this, "raise_hand", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Start or stop the video stream */
        Object.defineProperty(this, "video_stopped", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Pause or resume the video stream */
        Object.defineProperty(this, "video_paused", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Pause or resume the screen sharing stream */
        Object.defineProperty(this, "presentation_paused", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
        this.participant = params.participant;
        this.muted = params.muted;
        this.volume = params.volume;
        this.raise_hand = params.raise_hand;
        this.video_stopped = params.video_stopped;
        this.video_paused = params.video_paused;
        this.presentation_paused = params.presentation_paused;
    }
}
/** Edit the title of a group call or livestream */
export class phone_editGroupCallTitle_ extends Function_ {
    get [id]() {
        return 0x1CA6AC0A;
    }
    static get [name]() {
        return "phone.editGroupCallTitle";
    }
    static get [paramDesc]() {
        return [
            ["call", types._InputGroupCall, "InputGroupCall"],
            ["title", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.call, types._InputGroupCall, "InputGroupCall"],
            [this.title, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** New title */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
        this.title = params.title;
    }
}
/** Get a list of peers that can be used to join a group call, presenting yourself as a specific user/channel. */
export class phone_getGroupCallJoinAs_ extends Function_ {
    get [id]() {
        return 0xEF7C213A;
    }
    static get [name]() {
        return "phone.getGroupCallJoinAs";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** The dialog whose group call or livestream we're trying to join */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Get an [invite link](https://core.telegram.org/api/links#video-chat-livestream-links) for a group call or livestream */
export class phone_exportGroupCallInvite_ extends Function_ {
    get [id]() {
        return 0xE6AA647F;
    }
    static get [name]() {
        return "phone.exportGroupCallInvite";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["can_self_unmute", "true", "flags.0?true"],
            ["call", types._InputGroupCall, "InputGroupCall"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.can_self_unmute ?? null, "true", "flags.0?true"],
            [this.call, types._InputGroupCall, "InputGroupCall"],
        ];
    }
    constructor(params) {
        super();
        /** For livestreams or muted group chats, if set, users that join using this link will be able to speak without explicitly requesting permission by (for example by raising their hand). */
        Object.defineProperty(this, "can_self_unmute", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.can_self_unmute = params.can_self_unmute;
        this.call = params.call;
    }
}
/** Subscribe or unsubscribe to a scheduled group call */
export class phone_toggleGroupCallStartSubscription_ extends Function_ {
    get [id]() {
        return 0x219C34E6;
    }
    static get [name]() {
        return "phone.toggleGroupCallStartSubscription";
    }
    static get [paramDesc]() {
        return [
            ["call", types._InputGroupCall, "InputGroupCall"],
            ["subscribed", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.call, types._InputGroupCall, "InputGroupCall"],
            [this.subscribed, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Scheduled group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Enable or disable subscription */
        Object.defineProperty(this, "subscribed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
        this.subscribed = params.subscribed;
    }
}
/** Start a scheduled group call. */
export class phone_startScheduledGroupCall_ extends Function_ {
    get [id]() {
        return 0x5680E342;
    }
    static get [name]() {
        return "phone.startScheduledGroupCall";
    }
    static get [paramDesc]() {
        return [
            ["call", types._InputGroupCall, "InputGroupCall"],
        ];
    }
    get [params]() {
        return [
            [this.call, types._InputGroupCall, "InputGroupCall"],
        ];
    }
    constructor(params) {
        super();
        /** The scheduled group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
    }
}
/** Set the default peer that will be used to join a group call in a specific dialog. */
export class phone_saveDefaultGroupCallJoinAs_ extends Function_ {
    get [id]() {
        return 0x575E1F8C;
    }
    static get [name]() {
        return "phone.saveDefaultGroupCallJoinAs";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["join_as", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.join_as, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** The dialog */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The default peer that will be used to join group calls in this dialog, presenting yourself as a specific user/channel. */
        Object.defineProperty(this, "join_as", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.join_as = params.join_as;
    }
}
/** Start screen sharing in a call */
export class phone_joinGroupCallPresentation_ extends Function_ {
    get [id]() {
        return 0xCBEA6BC4;
    }
    static get [name]() {
        return "phone.joinGroupCallPresentation";
    }
    static get [paramDesc]() {
        return [
            ["call", types._InputGroupCall, "InputGroupCall"],
            ["params", types._DataJSON, "DataJSON"],
        ];
    }
    get [params]() {
        return [
            [this.call, types._InputGroupCall, "InputGroupCall"],
            [this.params, types._DataJSON, "DataJSON"],
        ];
    }
    constructor(params) {
        super();
        /** The group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** WebRTC parameters */
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
        this.params = params.params;
    }
}
/** Stop screen sharing in a group call */
export class phone_leaveGroupCallPresentation_ extends Function_ {
    get [id]() {
        return 0x1C50D144;
    }
    static get [name]() {
        return "phone.leaveGroupCallPresentation";
    }
    static get [paramDesc]() {
        return [
            ["call", types._InputGroupCall, "InputGroupCall"],
        ];
    }
    get [params]() {
        return [
            [this.call, types._InputGroupCall, "InputGroupCall"],
        ];
    }
    constructor(params) {
        super();
        /** The group call */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
    }
}
/** Get info about RTMP streams in a group call or livestream.
This method should be invoked to the same group/channel-related DC used for [downloading livestream chunks](https://core.telegram.org/api/files#downloading-files).
As usual, the media DC is preferred, if available. */
export class phone_getGroupCallStreamChannels_ extends Function_ {
    get [id]() {
        return 0x1AB21940;
    }
    static get [name]() {
        return "phone.getGroupCallStreamChannels";
    }
    static get [paramDesc]() {
        return [
            ["call", types._InputGroupCall, "InputGroupCall"],
        ];
    }
    get [params]() {
        return [
            [this.call, types._InputGroupCall, "InputGroupCall"],
        ];
    }
    constructor(params) {
        super();
        /** Group call or livestream */
        Object.defineProperty(this, "call", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.call = params.call;
    }
}
/** Get RTMP URL and stream key for RTMP livestreams. Can be used even before creating the actual RTMP livestream with [phone.createGroupCall](https://core.telegram.org/method/phone.createGroupCall) (the `rtmp_stream` flag must be set). */
export class phone_getGroupCallStreamRtmpUrl_ extends Function_ {
    get [id]() {
        return 0xDEB3ABBF;
    }
    static get [name]() {
        return "phone.getGroupCallStreamRtmpUrl";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["revoke", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.revoke, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Peer to livestream into */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to revoke the previous stream key or simply return the existing one */
        Object.defineProperty(this, "revoke", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.revoke = params.revoke;
    }
}
/** Save phone call debug information */
export class phone_saveCallLog_ extends Function_ {
    get [id]() {
        return 0x41248786;
    }
    static get [name]() {
        return "phone.saveCallLog";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPhoneCall, "InputPhoneCall"],
            ["file", types._InputFile, "InputFile"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPhoneCall, "InputPhoneCall"],
            [this.file, types._InputFile, "InputFile"],
        ];
    }
    constructor(params) {
        super();
        /** Phone call */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Logs */
        Object.defineProperty(this, "file", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.file = params.file;
    }
}
/** Get localization pack strings */
export class langpack_getLangPack_ extends Function_ {
    get [id]() {
        return 0xF2F2330A;
    }
    static get [name]() {
        return "langpack.getLangPack";
    }
    static get [paramDesc]() {
        return [
            ["lang_pack", "string", "string"],
            ["lang_code", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.lang_pack, "string", "string"],
            [this.lang_code, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Language pack name, usually obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links) */
        Object.defineProperty(this, "lang_pack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Language code */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lang_pack = params.lang_pack;
        this.lang_code = params.lang_code;
    }
}
/** Get strings from a language pack */
export class langpack_getStrings_ extends Function_ {
    get [id]() {
        return 0xEFEA3803;
    }
    static get [name]() {
        return "langpack.getStrings";
    }
    static get [paramDesc]() {
        return [
            ["lang_pack", "string", "string"],
            ["lang_code", "string", "string"],
            ["keys", ["string"], "Vector<string>"],
        ];
    }
    get [params]() {
        return [
            [this.lang_pack, "string", "string"],
            [this.lang_code, "string", "string"],
            [this.keys, ["string"], "Vector<string>"],
        ];
    }
    constructor(params) {
        super();
        /** Language pack name, usually obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links) */
        Object.defineProperty(this, "lang_pack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Language code */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Strings to get */
        Object.defineProperty(this, "keys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lang_pack = params.lang_pack;
        this.lang_code = params.lang_code;
        this.keys = params.keys;
    }
}
/** Get new strings in language pack */
export class langpack_getDifference_ extends Function_ {
    get [id]() {
        return 0xCD984AA5;
    }
    static get [name]() {
        return "langpack.getDifference";
    }
    static get [paramDesc]() {
        return [
            ["lang_pack", "string", "string"],
            ["lang_code", "string", "string"],
            ["from_version", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.lang_pack, "string", "string"],
            [this.lang_code, "string", "string"],
            [this.from_version, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Language pack */
        Object.defineProperty(this, "lang_pack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Language code */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Previous localization pack version */
        Object.defineProperty(this, "from_version", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lang_pack = params.lang_pack;
        this.lang_code = params.lang_code;
        this.from_version = params.from_version;
    }
}
/** Get information about all languages in a localization pack */
export class langpack_getLanguages_ extends Function_ {
    get [id]() {
        return 0x42C6978F;
    }
    static get [name]() {
        return "langpack.getLanguages";
    }
    static get [paramDesc]() {
        return [
            ["lang_pack", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.lang_pack, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Language pack */
        Object.defineProperty(this, "lang_pack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lang_pack = params.lang_pack;
    }
}
/** Get information about a language in a localization pack */
export class langpack_getLanguage_ extends Function_ {
    get [id]() {
        return 0x6A596502;
    }
    static get [name]() {
        return "langpack.getLanguage";
    }
    static get [paramDesc]() {
        return [
            ["lang_pack", "string", "string"],
            ["lang_code", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.lang_pack, "string", "string"],
            [this.lang_code, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** Language pack name, usually obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links) */
        Object.defineProperty(this, "lang_pack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Language code */
        Object.defineProperty(this, "lang_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lang_pack = params.lang_pack;
        this.lang_code = params.lang_code;
    }
}
/** Edit peers in [peer folder](https://core.telegram.org/api/folders#peer-folders) */
export class folders_editPeerFolders_ extends Function_ {
    get [id]() {
        return 0x6847D0AB;
    }
    static get [name]() {
        return "folders.editPeerFolders";
    }
    static get [paramDesc]() {
        return [
            ["folder_peers", [types._InputFolderPeer], "Vector<InputFolderPeer>"],
        ];
    }
    get [params]() {
        return [
            [this.folder_peers, [types._InputFolderPeer], "Vector<InputFolderPeer>"],
        ];
    }
    constructor(params) {
        super();
        /** New peer list */
        Object.defineProperty(this, "folder_peers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.folder_peers = params.folder_peers;
    }
}
/** Get [channel statistics](https://core.telegram.org/api/stats) */
export class stats_getBroadcastStats_ extends Function_ {
    get [id]() {
        return 0xAB42441A;
    }
    static get [name]() {
        return "stats.getBroadcastStats";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["dark", "true", "flags.0?true"],
            ["channel", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.dark ?? null, "true", "flags.0?true"],
            [this.channel, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to enable dark theme for graph colors */
        Object.defineProperty(this, "dark", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The channel */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.dark = params.dark;
        this.channel = params.channel;
    }
}
/** Load [channel statistics graph](https://core.telegram.org/api/stats) asynchronously */
export class stats_loadAsyncGraph_ extends Function_ {
    get [id]() {
        return 0x621D5FA0;
    }
    static get [name]() {
        return "stats.loadAsyncGraph";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["token", "string", "string"],
            ["x", "bigint", "flags.0?long"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.token, "string", "string"],
            [this.x ?? null, "bigint", "flags.0?long"],
        ];
    }
    constructor(params) {
        super();
        /** Graph token from [statsGraphAsync](https://core.telegram.org/constructor/statsGraphAsync) constructor */
        Object.defineProperty(this, "token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Zoom value, if required */
        Object.defineProperty(this, "x", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.token = params.token;
        this.x = params.x;
    }
}
/** Get [supergroup statistics](https://core.telegram.org/api/stats) */
export class stats_getMegagroupStats_ extends Function_ {
    get [id]() {
        return 0xDCDF8607;
    }
    static get [name]() {
        return "stats.getMegagroupStats";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["dark", "true", "flags.0?true"],
            ["channel", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.dark ?? null, "true", "flags.0?true"],
            [this.channel, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to enable dark theme for graph colors */
        Object.defineProperty(this, "dark", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Supergroup ID](https://core.telegram.org/api/channel) */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.dark = params.dark;
        this.channel = params.channel;
    }
}
/** Obtains a list of messages, indicating to which other public channels was a channel message forwarded.
Will return a list of [messages](https://core.telegram.org/constructor/message) with `peer_id` equal to the public channel to which this message was forwarded. */
export class stats_getMessagePublicForwards_ extends Function_ {
    get [id]() {
        return 0x5F150144;
    }
    static get [name]() {
        return "stats.getMessagePublicForwards";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["msg_id", "number", "int"],
            ["offset", "string", "string"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.msg_id, "number", "int"],
            [this.offset, "string", "string"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Source channel */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Source message ID */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Offset for [pagination](https://core.telegram.org/api/offsets), empty string on first call, then use the `next_offset` field of the returned constructor (if present, otherwise no more results are available). */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.msg_id = params.msg_id;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
/** Get [message statistics](https://core.telegram.org/api/stats) */
export class stats_getMessageStats_ extends Function_ {
    get [id]() {
        return 0xB6E0A3F5;
    }
    static get [name]() {
        return "stats.getMessageStats";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["dark", "true", "flags.0?true"],
            ["channel", types._InputChannel, "InputChannel"],
            ["msg_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.dark ?? null, "true", "flags.0?true"],
            [this.channel, types._InputChannel, "InputChannel"],
            [this.msg_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to enable dark theme for graph colors */
        Object.defineProperty(this, "dark", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Channel ID */
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Message ID */
        Object.defineProperty(this, "msg_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.dark = params.dark;
        this.channel = params.channel;
        this.msg_id = params.msg_id;
    }
}
/** Get [statistics](https://core.telegram.org/api/stats) for a certain [story](https://core.telegram.org/api/stories). */
export class stats_getStoryStats_ extends Function_ {
    get [id]() {
        return 0x374FEF40;
    }
    static get [name]() {
        return "stats.getStoryStats";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["dark", "true", "flags.0?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.dark ?? null, "true", "flags.0?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to enable the dark theme for graph colors */
        Object.defineProperty(this, "dark", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The peer that posted the story */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Story ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.dark = params.dark;
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Obtain forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels. */
export class stats_getStoryPublicForwards_ extends Function_ {
    get [id]() {
        return 0xA6437EF6;
    }
    static get [name]() {
        return "stats.getStoryPublicForwards";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
            ["offset", "string", "string"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
            [this.offset, "string", "string"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where the story was originally posted */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Story](https://core.telegram.org/api/stories) ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Offset for pagination, from [stats.PublicForwards](https://core.telegram.org/constructor/stats.publicForwards).`next_offset`. */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
export class stats_getBroadcastRevenueStats_ extends Function_ {
    get [id]() {
        return 0x75DFB671;
    }
    static get [name]() {
        return "stats.getBroadcastRevenueStats";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["dark", "true", "flags.0?true"],
            ["channel", types._InputChannel, "InputChannel"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.dark ?? null, "true", "flags.0?true"],
            [this.channel, types._InputChannel, "InputChannel"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "dark", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.dark = params.dark;
        this.channel = params.channel;
    }
}
export class stats_getBroadcastRevenueWithdrawalUrl_ extends Function_ {
    get [id]() {
        return 0x2A65EF73;
    }
    static get [name]() {
        return "stats.getBroadcastRevenueWithdrawalUrl";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["password", types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.password, types._InputCheckPasswordSRP, "InputCheckPasswordSRP"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "password", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.password = params.password;
    }
}
export class stats_getBroadcastRevenueTransactions_ extends Function_ {
    get [id]() {
        return 0x0069280F;
    }
    static get [name]() {
        return "stats.getBroadcastRevenueTransactions";
    }
    static get [paramDesc]() {
        return [
            ["channel", types._InputChannel, "InputChannel"],
            ["offset", "number", "int"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.channel, types._InputChannel, "InputChannel"],
            [this.offset, "number", "int"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channel = params.channel;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
/** Export a [folder »](https://core.telegram.org/api/folders), creating a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export class chatlists_exportChatlistInvite_ extends Function_ {
    get [id]() {
        return 0x8472478E;
    }
    static get [name]() {
        return "chatlists.exportChatlistInvite";
    }
    static get [paramDesc]() {
        return [
            ["chatlist", types._InputChatlist, "InputChatlist"],
            ["title", "string", "string"],
            ["peers", [types._InputPeer], "Vector<InputPeer>"],
        ];
    }
    get [params]() {
        return [
            [this.chatlist, types._InputChatlist, "InputChatlist"],
            [this.title, "string", "string"],
            [this.peers, [types._InputPeer], "Vector<InputPeer>"],
        ];
    }
    constructor(params) {
        super();
        /** The folder to export */
        Object.defineProperty(this, "chatlist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** An optional name for the link */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The list of channels, group and supergroups to share with the link. Basic groups will automatically be [converted to supergroups](https://core.telegram.org/api/channel#migration) when invoking the method. */
        Object.defineProperty(this, "peers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chatlist = params.chatlist;
        this.title = params.title;
        this.peers = params.peers;
    }
}
/** Delete a previously created [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export class chatlists_deleteExportedInvite_ extends Function_ {
    get [id]() {
        return 0x719C5C5E;
    }
    static get [name]() {
        return "chatlists.deleteExportedInvite";
    }
    static get [paramDesc]() {
        return [
            ["chatlist", types._InputChatlist, "InputChatlist"],
            ["slug", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.chatlist, types._InputChatlist, "InputChatlist"],
            [this.slug, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The related folder */
        Object.defineProperty(this, "chatlist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** `slug` obtained from the [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
        Object.defineProperty(this, "slug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chatlist = params.chatlist;
        this.slug = params.slug;
    }
}
/** Edit a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export class chatlists_editExportedInvite_ extends Function_ {
    get [id]() {
        return 0x653DB63D;
    }
    static get [name]() {
        return "chatlists.editExportedInvite";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["chatlist", types._InputChatlist, "InputChatlist"],
            ["slug", "string", "string"],
            ["title", "string", "flags.1?string"],
            ["peers", [types._InputPeer], "flags.2?Vector<InputPeer>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.chatlist, types._InputChatlist, "InputChatlist"],
            [this.slug, "string", "string"],
            [this.title ?? null, "string", "flags.1?string"],
            [this.peers ?? null, [types._InputPeer], "flags.2?Vector<InputPeer>"],
        ];
    }
    constructor(params) {
        super();
        /** Folder ID */
        Object.defineProperty(this, "chatlist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** `slug` obtained from the [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
        Object.defineProperty(this, "slug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, sets a new name for the link */
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, changes the list of peers shared with the link */
        Object.defineProperty(this, "peers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chatlist = params.chatlist;
        this.slug = params.slug;
        this.title = params.title;
        this.peers = params.peers;
    }
}
/** List all [chat folder deep links »](https://core.telegram.org/api/links#chat-folder-links) associated to a folder */
export class chatlists_getExportedInvites_ extends Function_ {
    get [id]() {
        return 0xCE03DA83;
    }
    static get [name]() {
        return "chatlists.getExportedInvites";
    }
    static get [paramDesc]() {
        return [
            ["chatlist", types._InputChatlist, "InputChatlist"],
        ];
    }
    get [params]() {
        return [
            [this.chatlist, types._InputChatlist, "InputChatlist"],
        ];
    }
    constructor(params) {
        super();
        /** The folder */
        Object.defineProperty(this, "chatlist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chatlist = params.chatlist;
    }
}
/** Obtain information about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export class chatlists_checkChatlistInvite_ extends Function_ {
    get [id]() {
        return 0x41C10FFF;
    }
    static get [name]() {
        return "chatlists.checkChatlistInvite";
    }
    static get [paramDesc]() {
        return [
            ["slug", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.slug, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** `slug` obtained from the [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links) */
        Object.defineProperty(this, "slug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.slug = params.slug;
    }
}
/** Import a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links), joining some or all the chats in the folder. */
export class chatlists_joinChatlistInvite_ extends Function_ {
    get [id]() {
        return 0xA6B1E39A;
    }
    static get [name]() {
        return "chatlists.joinChatlistInvite";
    }
    static get [paramDesc]() {
        return [
            ["slug", "string", "string"],
            ["peers", [types._InputPeer], "Vector<InputPeer>"],
        ];
    }
    get [params]() {
        return [
            [this.slug, "string", "string"],
            [this.peers, [types._InputPeer], "Vector<InputPeer>"],
        ];
    }
    constructor(params) {
        super();
        /** `slug` obtained from a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
        Object.defineProperty(this, "slug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** List of new chats to join, fetched using [chatlists.checkChatlistInvite](https://core.telegram.org/method/chatlists.checkChatlistInvite) and filtered as specified in the [documentation »](https://core.telegram.org/api/folders#shared-folders). */
        Object.defineProperty(this, "peers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.slug = params.slug;
        this.peers = params.peers;
    }
}
/** Fetch new chats associated with an imported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). Must be invoked at most every `chatlist_update_period` seconds (as per the related [client configuration parameter »](https://core.telegram.org/api/config#chatlist-update-period)). */
export class chatlists_getChatlistUpdates_ extends Function_ {
    get [id]() {
        return 0x89419521;
    }
    static get [name]() {
        return "chatlists.getChatlistUpdates";
    }
    static get [paramDesc]() {
        return [
            ["chatlist", types._InputChatlist, "InputChatlist"],
        ];
    }
    get [params]() {
        return [
            [this.chatlist, types._InputChatlist, "InputChatlist"],
        ];
    }
    constructor(params) {
        super();
        /** The folder */
        Object.defineProperty(this, "chatlist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chatlist = params.chatlist;
    }
}
/** Join channels and supergroups recently added to a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export class chatlists_joinChatlistUpdates_ extends Function_ {
    get [id]() {
        return 0xE089F8F5;
    }
    static get [name]() {
        return "chatlists.joinChatlistUpdates";
    }
    static get [paramDesc]() {
        return [
            ["chatlist", types._InputChatlist, "InputChatlist"],
            ["peers", [types._InputPeer], "Vector<InputPeer>"],
        ];
    }
    get [params]() {
        return [
            [this.chatlist, types._InputChatlist, "InputChatlist"],
            [this.peers, [types._InputPeer], "Vector<InputPeer>"],
        ];
    }
    constructor(params) {
        super();
        /** The folder */
        Object.defineProperty(this, "chatlist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** List of new chats to join, fetched using [chatlists.getChatlistUpdates](https://core.telegram.org/method/chatlists.getChatlistUpdates) and filtered as specified in the [documentation »](https://core.telegram.org/api/folders#shared-folders). */
        Object.defineProperty(this, "peers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chatlist = params.chatlist;
        this.peers = params.peers;
    }
}
/** Dismiss new pending peers recently added to a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export class chatlists_hideChatlistUpdates_ extends Function_ {
    get [id]() {
        return 0x66E486FB;
    }
    static get [name]() {
        return "chatlists.hideChatlistUpdates";
    }
    static get [paramDesc]() {
        return [
            ["chatlist", types._InputChatlist, "InputChatlist"],
        ];
    }
    get [params]() {
        return [
            [this.chatlist, types._InputChatlist, "InputChatlist"],
        ];
    }
    constructor(params) {
        super();
        /** The folder */
        Object.defineProperty(this, "chatlist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chatlist = params.chatlist;
    }
}
/** Returns identifiers of pinned or always included chats from a chat folder imported using a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links), which are suggested to be left when the chat folder is deleted. */
export class chatlists_getLeaveChatlistSuggestions_ extends Function_ {
    get [id]() {
        return 0xFDBCD714;
    }
    static get [name]() {
        return "chatlists.getLeaveChatlistSuggestions";
    }
    static get [paramDesc]() {
        return [
            ["chatlist", types._InputChatlist, "InputChatlist"],
        ];
    }
    get [params]() {
        return [
            [this.chatlist, types._InputChatlist, "InputChatlist"],
        ];
    }
    constructor(params) {
        super();
        /** Folder ID */
        Object.defineProperty(this, "chatlist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chatlist = params.chatlist;
    }
}
/** Delete a folder imported using a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links) */
export class chatlists_leaveChatlist_ extends Function_ {
    get [id]() {
        return 0x74FAE13A;
    }
    static get [name]() {
        return "chatlists.leaveChatlist";
    }
    static get [paramDesc]() {
        return [
            ["chatlist", types._InputChatlist, "InputChatlist"],
            ["peers", [types._InputPeer], "Vector<InputPeer>"],
        ];
    }
    get [params]() {
        return [
            [this.chatlist, types._InputChatlist, "InputChatlist"],
            [this.peers, [types._InputPeer], "Vector<InputPeer>"],
        ];
    }
    constructor(params) {
        super();
        /** Folder ID */
        Object.defineProperty(this, "chatlist", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Also leave the specified channels and groups */
        Object.defineProperty(this, "peers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.chatlist = params.chatlist;
        this.peers = params.peers;
    }
}
/** Check whether we can post stories as the specified peer. */
export class stories_canSendStory_ extends Function_ {
    get [id]() {
        return 0xC7DFDFDD;
    }
    static get [name]() {
        return "stories.canSendStory";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** The peer from which we wish to post stories. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Uploads a [Telegram Story](https://core.telegram.org/api/stories). */
export class stories_sendStory_ extends Function_ {
    get [id]() {
        return 0xE4E6694B;
    }
    static get [name]() {
        return "stories.sendStory";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["pinned", "true", "flags.2?true"],
            ["noforwards", "true", "flags.4?true"],
            ["fwd_modified", "true", "flags.7?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["media", types._InputMedia, "InputMedia"],
            ["media_areas", [types._MediaArea], "flags.5?Vector<MediaArea>"],
            ["caption", "string", "flags.0?string"],
            ["entities", [types._MessageEntity], "flags.1?Vector<MessageEntity>"],
            ["privacy_rules", [types._InputPrivacyRule], "Vector<InputPrivacyRule>"],
            ["random_id", "bigint", "long"],
            ["period", "number", "flags.3?int"],
            ["fwd_from_id", types._InputPeer, "flags.6?InputPeer"],
            ["fwd_from_story", "number", "flags.6?int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.pinned ?? null, "true", "flags.2?true"],
            [this.noforwards ?? null, "true", "flags.4?true"],
            [this.fwd_modified ?? null, "true", "flags.7?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.media, types._InputMedia, "InputMedia"],
            [this.media_areas ?? null, [types._MediaArea], "flags.5?Vector<MediaArea>"],
            [this.caption ?? null, "string", "flags.0?string"],
            [this.entities ?? null, [types._MessageEntity], "flags.1?Vector<MessageEntity>"],
            [this.privacy_rules, [types._InputPrivacyRule], "Vector<InputPrivacyRule>"],
            [this.random_id, "bigint", "long"],
            [this.period ?? null, "number", "flags.3?int"],
            [this.fwd_from_id ?? null, types._InputPeer, "flags.6?InputPeer"],
            [this.fwd_from_story ?? null, "number", "flags.6?int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to add the story to the profile automatically upon expiration. If not set, the story will only be added to the archive, see [here »](https://core.telegram.org/api/stories) for more info. */
        Object.defineProperty(this, "pinned", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, disables forwards, screenshots, and downloads. */
        Object.defineProperty(this, "noforwards", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Set this flag when reposting stories with `fwd_from_id`+`fwd_from_id`, if the `media` was modified before reposting. */
        Object.defineProperty(this, "fwd_modified", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The peer to send the story as. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The story media. */
        Object.defineProperty(this, "media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Media areas](https://core.telegram.org/api/stories#media-areas) associated to the story, see [here »](https://core.telegram.org/api/stories#media-areas) for more info. */
        Object.defineProperty(this, "media_areas", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Story caption. */
        Object.defineProperty(this, "caption", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Message entities for styled text](https://core.telegram.org/api/entities), if allowed by the [`stories_entities` client configuration parameter »](https://core.telegram.org/api/config#stories-entities). */
        Object.defineProperty(this, "entities", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Privacy rules](https://core.telegram.org/api/privacy) for the story, indicating who can or can't view the story. */
        Object.defineProperty(this, "privacy_rules", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Unique client message ID required to prevent message resending. */
        Object.defineProperty(this, "random_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Period after which the story is moved to archive (and to the profile if `pinned` is set), in seconds; must be one of `6 * 3600`, `12 * 3600`, `86400`, or `2 * 86400` for Telegram Premium users, and `86400` otherwise. */
        Object.defineProperty(this, "period", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, indicates that this story is a repost of story with ID `fwd_from_story` posted by the peer in `fwd_from_id`. */
        Object.defineProperty(this, "fwd_from_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, indicates that this story is a repost of story with ID `fwd_from_story` posted by the peer in `fwd_from_id`. */
        Object.defineProperty(this, "fwd_from_story", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.pinned = params.pinned;
        this.noforwards = params.noforwards;
        this.fwd_modified = params.fwd_modified;
        this.peer = params.peer;
        this.media = params.media;
        this.media_areas = params.media_areas;
        this.caption = params.caption;
        this.entities = params.entities;
        this.privacy_rules = params.privacy_rules;
        this.random_id = params.random_id;
        this.period = params.period;
        this.fwd_from_id = params.fwd_from_id;
        this.fwd_from_story = params.fwd_from_story;
    }
}
/** Edit an uploaded [story](https://core.telegram.org/api/stories) */
export class stories_editStory_ extends Function_ {
    get [id]() {
        return 0xB583BA46;
    }
    static get [name]() {
        return "stories.editStory";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
            ["media", types._InputMedia, "flags.0?InputMedia"],
            ["media_areas", [types._MediaArea], "flags.3?Vector<MediaArea>"],
            ["caption", "string", "flags.1?string"],
            ["entities", [types._MessageEntity], "flags.1?Vector<MessageEntity>"],
            ["privacy_rules", [types._InputPrivacyRule], "flags.2?Vector<InputPrivacyRule>"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
            [this.media ?? null, types._InputMedia, "flags.0?InputMedia"],
            [this.media_areas ?? null, [types._MediaArea], "flags.3?Vector<MediaArea>"],
            [this.caption ?? null, "string", "flags.1?string"],
            [this.entities ?? null, [types._MessageEntity], "flags.1?Vector<MessageEntity>"],
            [this.privacy_rules ?? null, [types._InputPrivacyRule], "flags.2?Vector<InputPrivacyRule>"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where the story was posted. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of story to edit. */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If specified, replaces the story media. */
        Object.defineProperty(this, "media", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Media areas](https://core.telegram.org/api/stories#media-areas) associated to the story, see [here »](https://core.telegram.org/api/stories#media-areas) for more info. */
        Object.defineProperty(this, "media_areas", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If specified, replaces the story caption. */
        Object.defineProperty(this, "caption", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Message entities for styled text in the caption](https://core.telegram.org/api/entities), if allowed by the [`stories_entities` client configuration parameter »](https://core.telegram.org/api/config#stories-entities). */
        Object.defineProperty(this, "entities", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If specified, alters the [privacy settings »](https://core.telegram.org/api/privacy) of the story, changing who can or can't view the story. */
        Object.defineProperty(this, "privacy_rules", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
        this.media = params.media;
        this.media_areas = params.media_areas;
        this.caption = params.caption;
        this.entities = params.entities;
        this.privacy_rules = params.privacy_rules;
    }
}
/** Deletes some posted [stories](https://core.telegram.org/api/stories). */
export class stories_deleteStories_ extends Function_ {
    get [id]() {
        return 0xAE59DB5F;
    }
    static get [name]() {
        return "stories.deleteStories";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Channel/user from where to delete stories. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** IDs of stories to delete. */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Pin or unpin one or more stories */
export class stories_togglePinned_ extends Function_ {
    get [id]() {
        return 0x9A75A1EF;
    }
    static get [name]() {
        return "stories.togglePinned";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
            ["pinned", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
            [this.pinned, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where to pin or unpin stories */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** IDs of stories to pin or unpin */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to pin or unpin the stories */
        Object.defineProperty(this, "pinned", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
        this.pinned = params.pinned;
    }
}
/** Fetch the List of active (or active and hidden) stories, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on watching stories. */
export class stories_getAllStories_ extends Function_ {
    get [id]() {
        return 0xEEB0D625;
    }
    static get [name]() {
        return "stories.getAllStories";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["next", "true", "flags.1?true"],
            ["hidden", "true", "flags.2?true"],
            ["state", "string", "flags.0?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.next ?? null, "true", "flags.1?true"],
            [this.hidden ?? null, "true", "flags.2?true"],
            [this.state ?? null, "string", "flags.0?string"],
        ];
    }
    constructor(params) {
        super();
        /** If `next` and `state` are both set, uses the passed `state` to paginate to the next results; if neither `state` nor `next` are set, fetches the initial page; if `state` is set and `next` is not set, check for changes in the active/hidden peerset, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on the full flow. */
        Object.defineProperty(this, "next", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, fetches the hidden active story list, otherwise fetches the active story list, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on the full flow. */
        Object.defineProperty(this, "hidden", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If `next` and `state` are both set, uses the passed `state` to paginate to the next results; if neither `state` nor `next` are set, fetches the initial page; if `state` is set and `next` is not set, check for changes in the active/hidden peerset, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on the full flow. */
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.next = params?.next;
        this.hidden = params?.hidden;
        this.state = params?.state;
    }
}
/** Fetch the [stories](https://core.telegram.org/api/stories#pinned-or-archived-stories) pinned on a peer's profile. */
export class stories_getPinnedStories_ extends Function_ {
    get [id]() {
        return 0x5821A5DC;
    }
    static get [name]() {
        return "stories.getPinnedStories";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["offset_id", "number", "int"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.offset_id, "number", "int"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer whose pinned stories should be fetched */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.offset_id = params.offset_id;
        this.limit = params.limit;
    }
}
/** Fetch the [story archive »](https://core.telegram.org/api/stories#pinned-or-archived-stories) of a peer we control. */
export class stories_getStoriesArchive_ extends Function_ {
    get [id]() {
        return 0xB4352016;
    }
    static get [name]() {
        return "stories.getStoriesArchive";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["offset_id", "number", "int"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.offset_id, "number", "int"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer whose archived stories should be fetched */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "offset_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.offset_id = params.offset_id;
        this.limit = params.limit;
    }
}
/** Obtain full info about a set of [stories](https://core.telegram.org/api/stories) by their IDs. */
export class stories_getStoriesByID_ extends Function_ {
    get [id]() {
        return 0x5774CA74;
    }
    static get [name]() {
        return "stories.getStoriesByID";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where the stories were posted */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Story IDs */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Hide the active stories of a specific peer, preventing them from being displayed on the action bar on the homescreen. */
export class stories_toggleAllStoriesHidden_ extends Function_ {
    get [id]() {
        return 0x7C2557C4;
    }
    static get [name]() {
        return "stories.toggleAllStoriesHidden";
    }
    static get [paramDesc]() {
        return [
            ["hidden", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.hidden, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to hide or unhide all active stories of the peer */
        Object.defineProperty(this, "hidden", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.hidden = params.hidden;
    }
}
/** Mark all stories up to a certain ID as read, for a given peer; will emit an [updateReadStories](https://core.telegram.org/constructor/updateReadStories) update to all logged-in sessions. */
export class stories_readStories_ extends Function_ {
    get [id]() {
        return 0xA556DAC8;
    }
    static get [name]() {
        return "stories.readStories";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["max_id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.max_id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** The peer whose stories should be marked as read. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Mark all stories up to and including this ID as read */
        Object.defineProperty(this, "max_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.max_id = params.max_id;
    }
}
/** Increment the view counter of one or more stories. */
export class stories_incrementStoryViews_ extends Function_ {
    get [id]() {
        return 0xB2028AFB;
    }
    static get [name]() {
        return "stories.incrementStoryViews";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where the stories were posted. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** IDs of the stories (maximum 200 at a time). */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Obtain the list of users that have viewed a specific [story we posted](https://core.telegram.org/api/stories) */
export class stories_getStoryViewsList_ extends Function_ {
    get [id]() {
        return 0x7ED23C57;
    }
    static get [name]() {
        return "stories.getStoryViewsList";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["just_contacts", "true", "flags.0?true"],
            ["reactions_first", "true", "flags.2?true"],
            ["forwards_first", "true", "flags.3?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["q", "string", "flags.1?string"],
            ["id", "number", "int"],
            ["offset", "string", "string"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.just_contacts ?? null, "true", "flags.0?true"],
            [this.reactions_first ?? null, "true", "flags.2?true"],
            [this.forwards_first ?? null, "true", "flags.3?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.q ?? null, "string", "flags.1?string"],
            [this.id, "number", "int"],
            [this.offset, "string", "string"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to only fetch view reaction/views made by our [contacts](https://core.telegram.org/api/contacts) */
        Object.defineProperty(this, "just_contacts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to return [storyView](https://core.telegram.org/constructor/storyView) info about users that reacted to the story (i.e. if set, the server will first sort results by view date as usual, and then also additionally sort the list by putting [storyView](https://core.telegram.org/constructor/storyView)s with an associated reaction first in the list). Ignored if `forwards_first` is set. */
        Object.defineProperty(this, "reactions_first", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** If set, returns forwards and reposts first, then reactions, then other views; otherwise returns interactions sorted just by interaction date. */
        Object.defineProperty(this, "forwards_first", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Peer where the story was posted */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Search for specific peers */
        Object.defineProperty(this, "q", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Story ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Offset for pagination, obtained from [stories.storyViewsList](https://core.telegram.org/constructor/stories.storyViewsList).`next_offset` */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.just_contacts = params.just_contacts;
        this.reactions_first = params.reactions_first;
        this.forwards_first = params.forwards_first;
        this.peer = params.peer;
        this.q = params.q;
        this.id = params.id;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
/** Obtain info about the view count, forward count, reactions and recent viewers of one or more [stories](https://core.telegram.org/api/stories). */
export class stories_getStoriesViews_ extends Function_ {
    get [id]() {
        return 0x28E16CC8;
    }
    static get [name]() {
        return "stories.getStoriesViews";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
        ];
    }
    constructor(params) {
        super();
        /** Peer whose stories should be fetched */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Story IDs */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Generate a [story deep link](https://core.telegram.org/api/links#story-links) for a specific story */
export class stories_exportStoryLink_ extends Function_ {
    get [id]() {
        return 0x7B8DEF20;
    }
    static get [name]() {
        return "stories.exportStoryLink";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Peer where the story was posted */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Story ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
    }
}
/** Report a story. */
export class stories_report_ extends Function_ {
    get [id]() {
        return 0x1923FA8C;
    }
    static get [name]() {
        return "stories.report";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["id", ["number"], "Vector<int>"],
            ["reason", types._ReportReason, "ReportReason"],
            ["message", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, ["number"], "Vector<int>"],
            [this.reason, types._ReportReason, "ReportReason"],
            [this.message, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        /** The peer that uploaded the story. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** IDs of the stories to report. */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Why are these storeis being reported. */
        Object.defineProperty(this, "reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Comment for report moderation */
        Object.defineProperty(this, "message", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.id = params.id;
        this.reason = params.reason;
        this.message = params.message;
    }
}
/** Activates [stories stealth mode](https://core.telegram.org/api/stories#stealth-mode), see [here »](https://core.telegram.org/api/stories#stealth-mode) for more info. */
export class stories_activateStealthMode_ extends Function_ {
    get [id]() {
        return 0x57BBD166;
    }
    static get [name]() {
        return "stories.activateStealthMode";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["past", "true", "flags.0?true"],
            ["future", "true", "flags.1?true"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.past ?? null, "true", "flags.0?true"],
            [this.future ?? null, "true", "flags.1?true"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to erase views from any stories opened in the past [`stories_stealth_past_period` seconds »](https://core.telegram.org/api/config#stories-stealth-past-period), as specified by the [client configuration](https://core.telegram.org/api/config#client-configuration). */
        Object.defineProperty(this, "past", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to hide future story views for the next [`stories_stealth_future_period` seconds »](https://core.telegram.org/api/config#stories-stealth-future-period), as specified by the [client configuration](https://core.telegram.org/api/config#client-configuration). */
        Object.defineProperty(this, "future", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.past = params?.past;
        this.future = params?.future;
    }
}
/** React to a story. */
export class stories_sendReaction_ extends Function_ {
    get [id]() {
        return 0x7FD736B2;
    }
    static get [name]() {
        return "stories.sendReaction";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["add_to_recent", "true", "flags.0?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["story_id", "number", "int"],
            ["reaction", types._Reaction, "Reaction"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.add_to_recent ?? null, "true", "flags.0?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.story_id, "number", "int"],
            [this.reaction, types._Reaction, "Reaction"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to add this reaction to the [recent reactions list »](https://core.telegram.org/api/reactions#recent-reactions). */
        Object.defineProperty(this, "add_to_recent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The peer that sent the story */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** ID of the story to react to */
        Object.defineProperty(this, "story_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Reaction */
        Object.defineProperty(this, "reaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.add_to_recent = params.add_to_recent;
        this.peer = params.peer;
        this.story_id = params.story_id;
        this.reaction = params.reaction;
    }
}
/** Fetch the full active [story list](https://core.telegram.org/api/stories#watching-stories) of a specific peer. */
export class stories_getPeerStories_ extends Function_ {
    get [id]() {
        return 0x2C4ADA50;
    }
    static get [name]() {
        return "stories.getPeerStories";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Peer whose stories should be fetched */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Obtain the latest read story ID for all peers when first logging in, returned as a list of [updateReadStories](https://core.telegram.org/constructor/updateReadStories) updates, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info. */
export class stories_getAllReadPeerStories_ extends Function_ {
    get [id]() {
        return 0x9B5AE7F9;
    }
    static get [name]() {
        return "stories.getAllReadPeerStories";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Get the IDs of the maximum read stories for a set of peers. */
export class stories_getPeerMaxIDs_ extends Function_ {
    get [id]() {
        return 0x535983C3;
    }
    static get [name]() {
        return "stories.getPeerMaxIDs";
    }
    static get [paramDesc]() {
        return [
            ["id", [types._InputPeer], "Vector<InputPeer>"],
        ];
    }
    get [params]() {
        return [
            [this.id, [types._InputPeer], "Vector<InputPeer>"],
        ];
    }
    constructor(params) {
        super();
        /** Peers */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = params.id;
    }
}
/** Obtain a list of channels where the user can post [stories](https://core.telegram.org/api/stories) */
export class stories_getChatsToSend_ extends Function_ {
    get [id]() {
        return 0xA56A8B60;
    }
    static get [name]() {
        return "stories.getChatsToSend";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Hide the active stories of a user, preventing them from being displayed on the action bar on the homescreen, see [here »](https://core.telegram.org/api/stories#hiding-stories-of-other-users) for more info. */
export class stories_togglePeerStoriesHidden_ extends Function_ {
    get [id]() {
        return 0xBD0415C4;
    }
    static get [name]() {
        return "stories.togglePeerStoriesHidden";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["hidden", "boolean", "Bool"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.hidden, "boolean", "Bool"],
        ];
    }
    constructor(params) {
        super();
        /** Peer whose stories should be (un)hidden. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to hide or unhide stories. */
        Object.defineProperty(this, "hidden", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.hidden = params.hidden;
    }
}
/** Get the [reaction](https://core.telegram.org/api/reactions) and interaction list of a [story](https://core.telegram.org/api/stories) posted to a channel, along with the sender of each reaction. */
export class stories_getStoryReactionsList_ extends Function_ {
    get [id]() {
        return 0xB9B2881F;
    }
    static get [name]() {
        return "stories.getStoryReactionsList";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["forwards_first", "true", "flags.2?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["id", "number", "int"],
            ["reaction", types._Reaction, "flags.0?Reaction"],
            ["offset", "string", "flags.1?string"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.forwards_first ?? null, "true", "flags.2?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.id, "number", "int"],
            [this.reaction ?? null, types._Reaction, "flags.0?Reaction"],
            [this.offset ?? null, "string", "flags.1?string"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** If set, returns forwards and reposts first, then reactions, then other views; otherwise returns interactions sorted just by interaction date. */
        Object.defineProperty(this, "forwards_first", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Channel */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** [Story](https://core.telegram.org/api/stories) ID */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Get only reactions of this type */
        Object.defineProperty(this, "reaction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Offset for pagination (taken from the `next_offset` field of the returned [stories.StoryReactionsList](https://core.telegram.org/type/stories.StoryReactionsList)); empty in the first request. */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.forwards_first = params.forwards_first;
        this.peer = params.peer;
        this.id = params.id;
        this.reaction = params.reaction;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
/** Obtains info about the boosts that were applied to a certain channel (admins only) */
export class premium_getBoostsList_ extends Function_ {
    get [id]() {
        return 0x60F67660;
    }
    static get [name]() {
        return "premium.getBoostsList";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["gifts", "true", "flags.0?true"],
            ["peer", types._InputPeer, "InputPeer"],
            ["offset", "string", "string"],
            ["limit", "number", "int"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.gifts ?? null, "true", "flags.0?true"],
            [this.peer, types._InputPeer, "InputPeer"],
            [this.offset, "string", "string"],
            [this.limit, "number", "int"],
        ];
    }
    constructor(params) {
        super();
        /** Whether to return only info about boosts received from [gift codes and giveaways created by the channel »](https://core.telegram.org/api/giveaways) */
        Object.defineProperty(this, "gifts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The channel */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Offset for pagination, obtained from [premium.boostsList](https://core.telegram.org/constructor/premium.boostsList).`next_offset` */
        Object.defineProperty(this, "offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
        Object.defineProperty(this, "limit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.gifts = params.gifts;
        this.peer = params.peer;
        this.offset = params.offset;
        this.limit = params.limit;
    }
}
/** Obtain which peers are we currently [boosting](https://core.telegram.org/api/boost), and how many [boost slots](https://core.telegram.org/api/boost) we have left. */
export class premium_getMyBoosts_ extends Function_ {
    get [id]() {
        return 0x0BE77B4A;
    }
    static get [name]() {
        return "premium.getMyBoosts";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
/** Apply one or more [boosts »](https://core.telegram.org/api/boost) to a peer. */
export class premium_applyBoost_ extends Function_ {
    get [id]() {
        return 0x6B7DA746;
    }
    static get [name]() {
        return "premium.applyBoost";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["slots", ["number"], "flags.0?Vector<int>"],
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.slots ?? null, ["number"], "flags.0?Vector<int>"],
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** Which [boost slots](https://core.telegram.org/api/boost) to assign to this peer. */
        Object.defineProperty(this, "slots", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The peer to boost. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.slots = params.slots;
        this.peer = params.peer;
    }
}
/** Gets the current [number of boosts](https://core.telegram.org/api/boost) of a channel. */
export class premium_getBoostsStatus_ extends Function_ {
    get [id]() {
        return 0x042F1F61;
    }
    static get [name]() {
        return "premium.getBoostsStatus";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
        ];
    }
    constructor(params) {
        super();
        /** The peer. */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
    }
}
/** Returns the lists of boost that were applied to a channel by a specific user (admins only) */
export class premium_getUserBoosts_ extends Function_ {
    get [id]() {
        return 0x39854D1F;
    }
    static get [name]() {
        return "premium.getUserBoosts";
    }
    static get [paramDesc]() {
        return [
            ["peer", types._InputPeer, "InputPeer"],
            ["user_id", types._InputUser, "InputUser"],
        ];
    }
    get [params]() {
        return [
            [this.peer, types._InputPeer, "InputPeer"],
            [this.user_id, types._InputUser, "InputUser"],
        ];
    }
    constructor(params) {
        super();
        /** The channel */
        Object.defineProperty(this, "peer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The user */
        Object.defineProperty(this, "user_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.peer = params.peer;
        this.user_id = params.user_id;
    }
}
export class smsjobs_isEligibleToJoin_ extends Function_ {
    get [id]() {
        return 0x0EDC39D0;
    }
    static get [name]() {
        return "smsjobs.isEligibleToJoin";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
export class smsjobs_join_ extends Function_ {
    get [id]() {
        return 0xA74ECE2D;
    }
    static get [name]() {
        return "smsjobs.join";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
export class smsjobs_leave_ extends Function_ {
    get [id]() {
        return 0x9898AD73;
    }
    static get [name]() {
        return "smsjobs.leave";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
export class smsjobs_updateSettings_ extends Function_ {
    get [id]() {
        return 0x093FA0BF;
    }
    static get [name]() {
        return "smsjobs.updateSettings";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["allow_international", "true", "flags.0?true"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.allow_international ?? null, "true", "flags.0?true"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "allow_international", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.allow_international = params?.allow_international;
    }
}
export class smsjobs_getStatus_ extends Function_ {
    get [id]() {
        return 0x10A698E8;
    }
    static get [name]() {
        return "smsjobs.getStatus";
    }
    static get [paramDesc]() {
        return [];
    }
    get [params]() {
        return [];
    }
    constructor() {
        super();
    }
}
export class smsjobs_getSmsJob_ extends Function_ {
    get [id]() {
        return 0x778D902F;
    }
    static get [name]() {
        return "smsjobs.getSmsJob";
    }
    static get [paramDesc]() {
        return [
            ["job_id", "string", "string"],
        ];
    }
    get [params]() {
        return [
            [this.job_id, "string", "string"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "job_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.job_id = params.job_id;
    }
}
export class smsjobs_finishJob_ extends Function_ {
    get [id]() {
        return 0x4F1EBF24;
    }
    static get [name]() {
        return "smsjobs.finishJob";
    }
    static get [paramDesc]() {
        return [
            ["flags", flags, "#"],
            ["job_id", "string", "string"],
            ["error", "string", "flags.0?string"],
        ];
    }
    get [params]() {
        return [
            ["flags", flags, "#"],
            [this.job_id, "string", "string"],
            [this.error ?? null, "string", "flags.0?string"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "job_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "error", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.job_id = params.job_id;
        this.error = params.error;
    }
}
export class fragment_getCollectibleInfo_ extends Function_ {
    get [id]() {
        return 0xBE1E85BA;
    }
    static get [name]() {
        return "fragment.getCollectibleInfo";
    }
    static get [paramDesc]() {
        return [
            ["collectible", types._InputCollectible, "InputCollectible"],
        ];
    }
    get [params]() {
        return [
            [this.collectible, types._InputCollectible, "InputCollectible"],
        ];
    }
    constructor(params) {
        super();
        Object.defineProperty(this, "collectible", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.collectible = params.collectible;
    }
}
export const functions = {
    Function: Function_,
    req_pq_multi: req_pq_multi_,
    req_DH_params: req_DH_params_,
    set_client_DH_params: set_client_DH_params_,
    rpc_drop_answer: rpc_drop_answer_,
    get_future_salts: get_future_salts_,
    ping: ping_,
    ping_delay_disconnect: ping_delay_disconnect_,
    destroy_session: destroy_session_,
    destroy_auth_key: destroy_auth_key_,
    invokeWithBusinessConnectionPrefix: invokeWithBusinessConnectionPrefix_,
    invokeAfterMsg: invokeAfterMsg_,
    invokeAfterMsgs: invokeAfterMsgs_,
    initConnection: initConnection_,
    invokeWithLayer: invokeWithLayer_,
    invokeWithoutUpdates: invokeWithoutUpdates_,
    invokeWithMessagesRange: invokeWithMessagesRange_,
    invokeWithTakeout: invokeWithTakeout_,
    invokeWithBusinessConnection: invokeWithBusinessConnection_,
    auth: {
        sendCode: auth_sendCode_,
        signUp: auth_signUp_,
        signIn: auth_signIn_,
        logOut: auth_logOut_,
        resetAuthorizations: auth_resetAuthorizations_,
        exportAuthorization: auth_exportAuthorization_,
        importAuthorization: auth_importAuthorization_,
        bindTempAuthKey: auth_bindTempAuthKey_,
        importBotAuthorization: auth_importBotAuthorization_,
        checkPassword: auth_checkPassword_,
        requestPasswordRecovery: auth_requestPasswordRecovery_,
        recoverPassword: auth_recoverPassword_,
        resendCode: auth_resendCode_,
        cancelCode: auth_cancelCode_,
        dropTempAuthKeys: auth_dropTempAuthKeys_,
        exportLoginToken: auth_exportLoginToken_,
        importLoginToken: auth_importLoginToken_,
        acceptLoginToken: auth_acceptLoginToken_,
        checkRecoveryPassword: auth_checkRecoveryPassword_,
        importWebTokenAuthorization: auth_importWebTokenAuthorization_,
        requestFirebaseSms: auth_requestFirebaseSms_,
        resetLoginEmail: auth_resetLoginEmail_,
    },
    account: {
        registerDevice: account_registerDevice_,
        unregisterDevice: account_unregisterDevice_,
        updateNotifySettings: account_updateNotifySettings_,
        getNotifySettings: account_getNotifySettings_,
        resetNotifySettings: account_resetNotifySettings_,
        updateProfile: account_updateProfile_,
        updateStatus: account_updateStatus_,
        getWallPapers: account_getWallPapers_,
        reportPeer: account_reportPeer_,
        checkUsername: account_checkUsername_,
        updateUsername: account_updateUsername_,
        getPrivacy: account_getPrivacy_,
        setPrivacy: account_setPrivacy_,
        deleteAccount: account_deleteAccount_,
        getAccountTTL: account_getAccountTTL_,
        setAccountTTL: account_setAccountTTL_,
        sendChangePhoneCode: account_sendChangePhoneCode_,
        changePhone: account_changePhone_,
        updateDeviceLocked: account_updateDeviceLocked_,
        getAuthorizations: account_getAuthorizations_,
        resetAuthorization: account_resetAuthorization_,
        getPassword: account_getPassword_,
        getPasswordSettings: account_getPasswordSettings_,
        updatePasswordSettings: account_updatePasswordSettings_,
        sendConfirmPhoneCode: account_sendConfirmPhoneCode_,
        confirmPhone: account_confirmPhone_,
        getTmpPassword: account_getTmpPassword_,
        getWebAuthorizations: account_getWebAuthorizations_,
        resetWebAuthorization: account_resetWebAuthorization_,
        resetWebAuthorizations: account_resetWebAuthorizations_,
        getAllSecureValues: account_getAllSecureValues_,
        getSecureValue: account_getSecureValue_,
        saveSecureValue: account_saveSecureValue_,
        deleteSecureValue: account_deleteSecureValue_,
        getAuthorizationForm: account_getAuthorizationForm_,
        acceptAuthorization: account_acceptAuthorization_,
        sendVerifyPhoneCode: account_sendVerifyPhoneCode_,
        verifyPhone: account_verifyPhone_,
        sendVerifyEmailCode: account_sendVerifyEmailCode_,
        verifyEmail: account_verifyEmail_,
        initTakeoutSession: account_initTakeoutSession_,
        finishTakeoutSession: account_finishTakeoutSession_,
        confirmPasswordEmail: account_confirmPasswordEmail_,
        resendPasswordEmail: account_resendPasswordEmail_,
        cancelPasswordEmail: account_cancelPasswordEmail_,
        getContactSignUpNotification: account_getContactSignUpNotification_,
        setContactSignUpNotification: account_setContactSignUpNotification_,
        getNotifyExceptions: account_getNotifyExceptions_,
        getWallPaper: account_getWallPaper_,
        uploadWallPaper: account_uploadWallPaper_,
        saveWallPaper: account_saveWallPaper_,
        installWallPaper: account_installWallPaper_,
        resetWallPapers: account_resetWallPapers_,
        getAutoDownloadSettings: account_getAutoDownloadSettings_,
        saveAutoDownloadSettings: account_saveAutoDownloadSettings_,
        uploadTheme: account_uploadTheme_,
        createTheme: account_createTheme_,
        updateTheme: account_updateTheme_,
        saveTheme: account_saveTheme_,
        installTheme: account_installTheme_,
        getTheme: account_getTheme_,
        getThemes: account_getThemes_,
        setContentSettings: account_setContentSettings_,
        getContentSettings: account_getContentSettings_,
        getMultiWallPapers: account_getMultiWallPapers_,
        getGlobalPrivacySettings: account_getGlobalPrivacySettings_,
        setGlobalPrivacySettings: account_setGlobalPrivacySettings_,
        reportProfilePhoto: account_reportProfilePhoto_,
        resetPassword: account_resetPassword_,
        declinePasswordReset: account_declinePasswordReset_,
        getChatThemes: account_getChatThemes_,
        setAuthorizationTTL: account_setAuthorizationTTL_,
        changeAuthorizationSettings: account_changeAuthorizationSettings_,
        getSavedRingtones: account_getSavedRingtones_,
        saveRingtone: account_saveRingtone_,
        uploadRingtone: account_uploadRingtone_,
        updateEmojiStatus: account_updateEmojiStatus_,
        getDefaultEmojiStatuses: account_getDefaultEmojiStatuses_,
        getRecentEmojiStatuses: account_getRecentEmojiStatuses_,
        clearRecentEmojiStatuses: account_clearRecentEmojiStatuses_,
        reorderUsernames: account_reorderUsernames_,
        toggleUsername: account_toggleUsername_,
        getDefaultProfilePhotoEmojis: account_getDefaultProfilePhotoEmojis_,
        getDefaultGroupPhotoEmojis: account_getDefaultGroupPhotoEmojis_,
        getAutoSaveSettings: account_getAutoSaveSettings_,
        saveAutoSaveSettings: account_saveAutoSaveSettings_,
        deleteAutoSaveExceptions: account_deleteAutoSaveExceptions_,
        invalidateSignInCodes: account_invalidateSignInCodes_,
        updateColor: account_updateColor_,
        getDefaultBackgroundEmojis: account_getDefaultBackgroundEmojis_,
        getChannelDefaultEmojiStatuses: account_getChannelDefaultEmojiStatuses_,
        getChannelRestrictedStatusEmojis: account_getChannelRestrictedStatusEmojis_,
        updateBusinessWorkHours: account_updateBusinessWorkHours_,
        updateBusinessLocation: account_updateBusinessLocation_,
        updateBusinessGreetingMessage: account_updateBusinessGreetingMessage_,
        updateBusinessAwayMessage: account_updateBusinessAwayMessage_,
        updateConnectedBot: account_updateConnectedBot_,
        getConnectedBots: account_getConnectedBots_,
        getBotBusinessConnection: account_getBotBusinessConnection_,
        updateBusinessIntro: account_updateBusinessIntro_,
        toggleConnectedBotPaused: account_toggleConnectedBotPaused_,
        disablePeerConnectedBot: account_disablePeerConnectedBot_,
        updateBirthday: account_updateBirthday_,
        createBusinessChatLink: account_createBusinessChatLink_,
        editBusinessChatLink: account_editBusinessChatLink_,
        deleteBusinessChatLink: account_deleteBusinessChatLink_,
        getBusinessChatLinks: account_getBusinessChatLinks_,
        resolveBusinessChatLink: account_resolveBusinessChatLink_,
        updatePersonalChannel: account_updatePersonalChannel_,
    },
    users: {
        getUsers: users_getUsers_,
        getFullUser: users_getFullUser_,
        setSecureValueErrors: users_setSecureValueErrors_,
        getIsPremiumRequiredToContact: users_getIsPremiumRequiredToContact_,
    },
    contacts: {
        getContactIDs: contacts_getContactIDs_,
        getStatuses: contacts_getStatuses_,
        getContacts: contacts_getContacts_,
        importContacts: contacts_importContacts_,
        deleteContacts: contacts_deleteContacts_,
        deleteByPhones: contacts_deleteByPhones_,
        block: contacts_block_,
        unblock: contacts_unblock_,
        getBlocked: contacts_getBlocked_,
        search: contacts_search_,
        resolveUsername: contacts_resolveUsername_,
        getTopPeers: contacts_getTopPeers_,
        resetTopPeerRating: contacts_resetTopPeerRating_,
        resetSaved: contacts_resetSaved_,
        getSaved: contacts_getSaved_,
        toggleTopPeers: contacts_toggleTopPeers_,
        addContact: contacts_addContact_,
        acceptContact: contacts_acceptContact_,
        getLocated: contacts_getLocated_,
        blockFromReplies: contacts_blockFromReplies_,
        resolvePhone: contacts_resolvePhone_,
        exportContactToken: contacts_exportContactToken_,
        importContactToken: contacts_importContactToken_,
        editCloseFriends: contacts_editCloseFriends_,
        setBlocked: contacts_setBlocked_,
        getBirthdays: contacts_getBirthdays_,
    },
    messages: {
        getMessages: messages_getMessages_,
        getDialogs: messages_getDialogs_,
        getHistory: messages_getHistory_,
        search: messages_search_,
        readHistory: messages_readHistory_,
        deleteHistory: messages_deleteHistory_,
        deleteMessages: messages_deleteMessages_,
        receivedMessages: messages_receivedMessages_,
        setTyping: messages_setTyping_,
        sendMessage: messages_sendMessage_,
        sendMedia: messages_sendMedia_,
        forwardMessages: messages_forwardMessages_,
        reportSpam: messages_reportSpam_,
        getPeerSettings: messages_getPeerSettings_,
        report: messages_report_,
        getChats: messages_getChats_,
        getFullChat: messages_getFullChat_,
        editChatTitle: messages_editChatTitle_,
        editChatPhoto: messages_editChatPhoto_,
        addChatUser: messages_addChatUser_,
        deleteChatUser: messages_deleteChatUser_,
        createChat: messages_createChat_,
        getDhConfig: messages_getDhConfig_,
        requestEncryption: messages_requestEncryption_,
        acceptEncryption: messages_acceptEncryption_,
        discardEncryption: messages_discardEncryption_,
        setEncryptedTyping: messages_setEncryptedTyping_,
        readEncryptedHistory: messages_readEncryptedHistory_,
        sendEncrypted: messages_sendEncrypted_,
        sendEncryptedFile: messages_sendEncryptedFile_,
        sendEncryptedService: messages_sendEncryptedService_,
        receivedQueue: messages_receivedQueue_,
        reportEncryptedSpam: messages_reportEncryptedSpam_,
        readMessageContents: messages_readMessageContents_,
        getStickers: messages_getStickers_,
        getAllStickers: messages_getAllStickers_,
        getWebPagePreview: messages_getWebPagePreview_,
        exportChatInvite: messages_exportChatInvite_,
        checkChatInvite: messages_checkChatInvite_,
        importChatInvite: messages_importChatInvite_,
        getStickerSet: messages_getStickerSet_,
        installStickerSet: messages_installStickerSet_,
        uninstallStickerSet: messages_uninstallStickerSet_,
        startBot: messages_startBot_,
        getMessagesViews: messages_getMessagesViews_,
        editChatAdmin: messages_editChatAdmin_,
        migrateChat: messages_migrateChat_,
        searchGlobal: messages_searchGlobal_,
        reorderStickerSets: messages_reorderStickerSets_,
        getDocumentByHash: messages_getDocumentByHash_,
        getSavedGifs: messages_getSavedGifs_,
        saveGif: messages_saveGif_,
        getInlineBotResults: messages_getInlineBotResults_,
        setInlineBotResults: messages_setInlineBotResults_,
        sendInlineBotResult: messages_sendInlineBotResult_,
        getMessageEditData: messages_getMessageEditData_,
        editMessage: messages_editMessage_,
        editInlineBotMessage: messages_editInlineBotMessage_,
        getBotCallbackAnswer: messages_getBotCallbackAnswer_,
        setBotCallbackAnswer: messages_setBotCallbackAnswer_,
        getPeerDialogs: messages_getPeerDialogs_,
        saveDraft: messages_saveDraft_,
        getAllDrafts: messages_getAllDrafts_,
        getFeaturedStickers: messages_getFeaturedStickers_,
        readFeaturedStickers: messages_readFeaturedStickers_,
        getRecentStickers: messages_getRecentStickers_,
        saveRecentSticker: messages_saveRecentSticker_,
        clearRecentStickers: messages_clearRecentStickers_,
        getArchivedStickers: messages_getArchivedStickers_,
        getMaskStickers: messages_getMaskStickers_,
        getAttachedStickers: messages_getAttachedStickers_,
        setGameScore: messages_setGameScore_,
        setInlineGameScore: messages_setInlineGameScore_,
        getGameHighScores: messages_getGameHighScores_,
        getInlineGameHighScores: messages_getInlineGameHighScores_,
        getCommonChats: messages_getCommonChats_,
        getWebPage: messages_getWebPage_,
        toggleDialogPin: messages_toggleDialogPin_,
        reorderPinnedDialogs: messages_reorderPinnedDialogs_,
        getPinnedDialogs: messages_getPinnedDialogs_,
        setBotShippingResults: messages_setBotShippingResults_,
        setBotPrecheckoutResults: messages_setBotPrecheckoutResults_,
        uploadMedia: messages_uploadMedia_,
        sendScreenshotNotification: messages_sendScreenshotNotification_,
        getFavedStickers: messages_getFavedStickers_,
        faveSticker: messages_faveSticker_,
        getUnreadMentions: messages_getUnreadMentions_,
        readMentions: messages_readMentions_,
        getRecentLocations: messages_getRecentLocations_,
        sendMultiMedia: messages_sendMultiMedia_,
        uploadEncryptedFile: messages_uploadEncryptedFile_,
        searchStickerSets: messages_searchStickerSets_,
        getSplitRanges: messages_getSplitRanges_,
        markDialogUnread: messages_markDialogUnread_,
        getDialogUnreadMarks: messages_getDialogUnreadMarks_,
        clearAllDrafts: messages_clearAllDrafts_,
        updatePinnedMessage: messages_updatePinnedMessage_,
        sendVote: messages_sendVote_,
        getPollResults: messages_getPollResults_,
        getOnlines: messages_getOnlines_,
        editChatAbout: messages_editChatAbout_,
        editChatDefaultBannedRights: messages_editChatDefaultBannedRights_,
        getEmojiKeywords: messages_getEmojiKeywords_,
        getEmojiKeywordsDifference: messages_getEmojiKeywordsDifference_,
        getEmojiKeywordsLanguages: messages_getEmojiKeywordsLanguages_,
        getEmojiURL: messages_getEmojiURL_,
        getSearchCounters: messages_getSearchCounters_,
        requestUrlAuth: messages_requestUrlAuth_,
        acceptUrlAuth: messages_acceptUrlAuth_,
        hidePeerSettingsBar: messages_hidePeerSettingsBar_,
        getScheduledHistory: messages_getScheduledHistory_,
        getScheduledMessages: messages_getScheduledMessages_,
        sendScheduledMessages: messages_sendScheduledMessages_,
        deleteScheduledMessages: messages_deleteScheduledMessages_,
        getPollVotes: messages_getPollVotes_,
        toggleStickerSets: messages_toggleStickerSets_,
        getDialogFilters: messages_getDialogFilters_,
        getSuggestedDialogFilters: messages_getSuggestedDialogFilters_,
        updateDialogFilter: messages_updateDialogFilter_,
        updateDialogFiltersOrder: messages_updateDialogFiltersOrder_,
        getOldFeaturedStickers: messages_getOldFeaturedStickers_,
        getReplies: messages_getReplies_,
        getDiscussionMessage: messages_getDiscussionMessage_,
        readDiscussion: messages_readDiscussion_,
        unpinAllMessages: messages_unpinAllMessages_,
        deleteChat: messages_deleteChat_,
        deletePhoneCallHistory: messages_deletePhoneCallHistory_,
        checkHistoryImport: messages_checkHistoryImport_,
        initHistoryImport: messages_initHistoryImport_,
        uploadImportedMedia: messages_uploadImportedMedia_,
        startHistoryImport: messages_startHistoryImport_,
        getExportedChatInvites: messages_getExportedChatInvites_,
        getExportedChatInvite: messages_getExportedChatInvite_,
        editExportedChatInvite: messages_editExportedChatInvite_,
        deleteRevokedExportedChatInvites: messages_deleteRevokedExportedChatInvites_,
        deleteExportedChatInvite: messages_deleteExportedChatInvite_,
        getAdminsWithInvites: messages_getAdminsWithInvites_,
        getChatInviteImporters: messages_getChatInviteImporters_,
        setHistoryTTL: messages_setHistoryTTL_,
        checkHistoryImportPeer: messages_checkHistoryImportPeer_,
        setChatTheme: messages_setChatTheme_,
        getMessageReadParticipants: messages_getMessageReadParticipants_,
        getSearchResultsCalendar: messages_getSearchResultsCalendar_,
        getSearchResultsPositions: messages_getSearchResultsPositions_,
        hideChatJoinRequest: messages_hideChatJoinRequest_,
        hideAllChatJoinRequests: messages_hideAllChatJoinRequests_,
        toggleNoForwards: messages_toggleNoForwards_,
        saveDefaultSendAs: messages_saveDefaultSendAs_,
        sendReaction: messages_sendReaction_,
        getMessagesReactions: messages_getMessagesReactions_,
        getMessageReactionsList: messages_getMessageReactionsList_,
        setChatAvailableReactions: messages_setChatAvailableReactions_,
        getAvailableReactions: messages_getAvailableReactions_,
        setDefaultReaction: messages_setDefaultReaction_,
        translateText: messages_translateText_,
        getUnreadReactions: messages_getUnreadReactions_,
        readReactions: messages_readReactions_,
        searchSentMedia: messages_searchSentMedia_,
        getAttachMenuBots: messages_getAttachMenuBots_,
        getAttachMenuBot: messages_getAttachMenuBot_,
        toggleBotInAttachMenu: messages_toggleBotInAttachMenu_,
        requestWebView: messages_requestWebView_,
        prolongWebView: messages_prolongWebView_,
        requestSimpleWebView: messages_requestSimpleWebView_,
        sendWebViewResultMessage: messages_sendWebViewResultMessage_,
        sendWebViewData: messages_sendWebViewData_,
        transcribeAudio: messages_transcribeAudio_,
        rateTranscribedAudio: messages_rateTranscribedAudio_,
        getCustomEmojiDocuments: messages_getCustomEmojiDocuments_,
        getEmojiStickers: messages_getEmojiStickers_,
        getFeaturedEmojiStickers: messages_getFeaturedEmojiStickers_,
        reportReaction: messages_reportReaction_,
        getTopReactions: messages_getTopReactions_,
        getRecentReactions: messages_getRecentReactions_,
        clearRecentReactions: messages_clearRecentReactions_,
        getExtendedMedia: messages_getExtendedMedia_,
        setDefaultHistoryTTL: messages_setDefaultHistoryTTL_,
        getDefaultHistoryTTL: messages_getDefaultHistoryTTL_,
        sendBotRequestedPeer: messages_sendBotRequestedPeer_,
        getEmojiGroups: messages_getEmojiGroups_,
        getEmojiStatusGroups: messages_getEmojiStatusGroups_,
        getEmojiProfilePhotoGroups: messages_getEmojiProfilePhotoGroups_,
        searchCustomEmoji: messages_searchCustomEmoji_,
        togglePeerTranslations: messages_togglePeerTranslations_,
        getBotApp: messages_getBotApp_,
        requestAppWebView: messages_requestAppWebView_,
        setChatWallPaper: messages_setChatWallPaper_,
        searchEmojiStickerSets: messages_searchEmojiStickerSets_,
        getSavedDialogs: messages_getSavedDialogs_,
        getSavedHistory: messages_getSavedHistory_,
        deleteSavedHistory: messages_deleteSavedHistory_,
        getPinnedSavedDialogs: messages_getPinnedSavedDialogs_,
        toggleSavedDialogPin: messages_toggleSavedDialogPin_,
        reorderPinnedSavedDialogs: messages_reorderPinnedSavedDialogs_,
        getSavedReactionTags: messages_getSavedReactionTags_,
        updateSavedReactionTag: messages_updateSavedReactionTag_,
        getDefaultTagReactions: messages_getDefaultTagReactions_,
        getOutboxReadDate: messages_getOutboxReadDate_,
        getQuickReplies: messages_getQuickReplies_,
        reorderQuickReplies: messages_reorderQuickReplies_,
        checkQuickReplyShortcut: messages_checkQuickReplyShortcut_,
        editQuickReplyShortcut: messages_editQuickReplyShortcut_,
        deleteQuickReplyShortcut: messages_deleteQuickReplyShortcut_,
        getQuickReplyMessages: messages_getQuickReplyMessages_,
        sendQuickReplyMessages: messages_sendQuickReplyMessages_,
        deleteQuickReplyMessages: messages_deleteQuickReplyMessages_,
        toggleDialogFilterTags: messages_toggleDialogFilterTags_,
        getMyStickers: messages_getMyStickers_,
    },
    updates: {
        getState: updates_getState_,
        getDifference: updates_getDifference_,
        getChannelDifference: updates_getChannelDifference_,
    },
    photos: {
        updateProfilePhoto: photos_updateProfilePhoto_,
        uploadProfilePhoto: photos_uploadProfilePhoto_,
        deletePhotos: photos_deletePhotos_,
        getUserPhotos: photos_getUserPhotos_,
        uploadContactProfilePhoto: photos_uploadContactProfilePhoto_,
    },
    upload: {
        saveFilePart: upload_saveFilePart_,
        getFile: upload_getFile_,
        saveBigFilePart: upload_saveBigFilePart_,
        getWebFile: upload_getWebFile_,
        getCdnFile: upload_getCdnFile_,
        reuploadCdnFile: upload_reuploadCdnFile_,
        getCdnFileHashes: upload_getCdnFileHashes_,
        getFileHashes: upload_getFileHashes_,
    },
    help: {
        getConfig: help_getConfig_,
        getNearestDc: help_getNearestDc_,
        getAppUpdate: help_getAppUpdate_,
        getInviteText: help_getInviteText_,
        getSupport: help_getSupport_,
        setBotUpdatesStatus: help_setBotUpdatesStatus_,
        getCdnConfig: help_getCdnConfig_,
        getRecentMeUrls: help_getRecentMeUrls_,
        getTermsOfServiceUpdate: help_getTermsOfServiceUpdate_,
        acceptTermsOfService: help_acceptTermsOfService_,
        getDeepLinkInfo: help_getDeepLinkInfo_,
        getAppConfig: help_getAppConfig_,
        saveAppLog: help_saveAppLog_,
        getPassportConfig: help_getPassportConfig_,
        getSupportName: help_getSupportName_,
        getUserInfo: help_getUserInfo_,
        editUserInfo: help_editUserInfo_,
        getPromoData: help_getPromoData_,
        hidePromoData: help_hidePromoData_,
        dismissSuggestion: help_dismissSuggestion_,
        getCountriesList: help_getCountriesList_,
        getPremiumPromo: help_getPremiumPromo_,
        getPeerColors: help_getPeerColors_,
        getPeerProfileColors: help_getPeerProfileColors_,
        getTimezonesList: help_getTimezonesList_,
    },
    channels: {
        readHistory: channels_readHistory_,
        deleteMessages: channels_deleteMessages_,
        reportSpam: channels_reportSpam_,
        getMessages: channels_getMessages_,
        getParticipants: channels_getParticipants_,
        getParticipant: channels_getParticipant_,
        getChannels: channels_getChannels_,
        getFullChannel: channels_getFullChannel_,
        createChannel: channels_createChannel_,
        editAdmin: channels_editAdmin_,
        editTitle: channels_editTitle_,
        editPhoto: channels_editPhoto_,
        checkUsername: channels_checkUsername_,
        updateUsername: channels_updateUsername_,
        joinChannel: channels_joinChannel_,
        leaveChannel: channels_leaveChannel_,
        inviteToChannel: channels_inviteToChannel_,
        deleteChannel: channels_deleteChannel_,
        exportMessageLink: channels_exportMessageLink_,
        toggleSignatures: channels_toggleSignatures_,
        getAdminedPublicChannels: channels_getAdminedPublicChannels_,
        editBanned: channels_editBanned_,
        getAdminLog: channels_getAdminLog_,
        setStickers: channels_setStickers_,
        readMessageContents: channels_readMessageContents_,
        deleteHistory: channels_deleteHistory_,
        togglePreHistoryHidden: channels_togglePreHistoryHidden_,
        getLeftChannels: channels_getLeftChannels_,
        getGroupsForDiscussion: channels_getGroupsForDiscussion_,
        setDiscussionGroup: channels_setDiscussionGroup_,
        editCreator: channels_editCreator_,
        editLocation: channels_editLocation_,
        toggleSlowMode: channels_toggleSlowMode_,
        getInactiveChannels: channels_getInactiveChannels_,
        convertToGigagroup: channels_convertToGigagroup_,
        viewSponsoredMessage: channels_viewSponsoredMessage_,
        getSponsoredMessages: channels_getSponsoredMessages_,
        getSendAs: channels_getSendAs_,
        deleteParticipantHistory: channels_deleteParticipantHistory_,
        toggleJoinToSend: channels_toggleJoinToSend_,
        toggleJoinRequest: channels_toggleJoinRequest_,
        reorderUsernames: channels_reorderUsernames_,
        toggleUsername: channels_toggleUsername_,
        deactivateAllUsernames: channels_deactivateAllUsernames_,
        toggleForum: channels_toggleForum_,
        createForumTopic: channels_createForumTopic_,
        getForumTopics: channels_getForumTopics_,
        getForumTopicsByID: channels_getForumTopicsByID_,
        editForumTopic: channels_editForumTopic_,
        updatePinnedForumTopic: channels_updatePinnedForumTopic_,
        deleteTopicHistory: channels_deleteTopicHistory_,
        reorderPinnedForumTopics: channels_reorderPinnedForumTopics_,
        toggleAntiSpam: channels_toggleAntiSpam_,
        reportAntiSpamFalsePositive: channels_reportAntiSpamFalsePositive_,
        toggleParticipantsHidden: channels_toggleParticipantsHidden_,
        clickSponsoredMessage: channels_clickSponsoredMessage_,
        updateColor: channels_updateColor_,
        toggleViewForumAsMessages: channels_toggleViewForumAsMessages_,
        getChannelRecommendations: channels_getChannelRecommendations_,
        updateEmojiStatus: channels_updateEmojiStatus_,
        setBoostsToUnblockRestrictions: channels_setBoostsToUnblockRestrictions_,
        setEmojiStickers: channels_setEmojiStickers_,
        reportSponsoredMessage: channels_reportSponsoredMessage_,
        restrictSponsoredMessages: channels_restrictSponsoredMessages_,
    },
    bots: {
        sendCustomRequest: bots_sendCustomRequest_,
        answerWebhookJSONQuery: bots_answerWebhookJSONQuery_,
        setBotCommands: bots_setBotCommands_,
        resetBotCommands: bots_resetBotCommands_,
        getBotCommands: bots_getBotCommands_,
        setBotMenuButton: bots_setBotMenuButton_,
        getBotMenuButton: bots_getBotMenuButton_,
        setBotBroadcastDefaultAdminRights: bots_setBotBroadcastDefaultAdminRights_,
        setBotGroupDefaultAdminRights: bots_setBotGroupDefaultAdminRights_,
        setBotInfo: bots_setBotInfo_,
        getBotInfo: bots_getBotInfo_,
        reorderUsernames: bots_reorderUsernames_,
        toggleUsername: bots_toggleUsername_,
        canSendMessage: bots_canSendMessage_,
        allowSendMessage: bots_allowSendMessage_,
        invokeWebViewCustomMethod: bots_invokeWebViewCustomMethod_,
    },
    payments: {
        getPaymentForm: payments_getPaymentForm_,
        getPaymentReceipt: payments_getPaymentReceipt_,
        validateRequestedInfo: payments_validateRequestedInfo_,
        sendPaymentForm: payments_sendPaymentForm_,
        getSavedInfo: payments_getSavedInfo_,
        clearSavedInfo: payments_clearSavedInfo_,
        getBankCardData: payments_getBankCardData_,
        exportInvoice: payments_exportInvoice_,
        assignAppStoreTransaction: payments_assignAppStoreTransaction_,
        assignPlayMarketTransaction: payments_assignPlayMarketTransaction_,
        canPurchasePremium: payments_canPurchasePremium_,
        getPremiumGiftCodeOptions: payments_getPremiumGiftCodeOptions_,
        checkGiftCode: payments_checkGiftCode_,
        applyGiftCode: payments_applyGiftCode_,
        getGiveawayInfo: payments_getGiveawayInfo_,
        launchPrepaidGiveaway: payments_launchPrepaidGiveaway_,
    },
    stickers: {
        createStickerSet: stickers_createStickerSet_,
        removeStickerFromSet: stickers_removeStickerFromSet_,
        changeStickerPosition: stickers_changeStickerPosition_,
        addStickerToSet: stickers_addStickerToSet_,
        setStickerSetThumb: stickers_setStickerSetThumb_,
        checkShortName: stickers_checkShortName_,
        suggestShortName: stickers_suggestShortName_,
        changeSticker: stickers_changeSticker_,
        renameStickerSet: stickers_renameStickerSet_,
        deleteStickerSet: stickers_deleteStickerSet_,
        replaceSticker: stickers_replaceSticker_,
    },
    phone: {
        getCallConfig: phone_getCallConfig_,
        requestCall: phone_requestCall_,
        acceptCall: phone_acceptCall_,
        confirmCall: phone_confirmCall_,
        receivedCall: phone_receivedCall_,
        discardCall: phone_discardCall_,
        setCallRating: phone_setCallRating_,
        saveCallDebug: phone_saveCallDebug_,
        sendSignalingData: phone_sendSignalingData_,
        createGroupCall: phone_createGroupCall_,
        joinGroupCall: phone_joinGroupCall_,
        leaveGroupCall: phone_leaveGroupCall_,
        inviteToGroupCall: phone_inviteToGroupCall_,
        discardGroupCall: phone_discardGroupCall_,
        toggleGroupCallSettings: phone_toggleGroupCallSettings_,
        getGroupCall: phone_getGroupCall_,
        getGroupParticipants: phone_getGroupParticipants_,
        checkGroupCall: phone_checkGroupCall_,
        toggleGroupCallRecord: phone_toggleGroupCallRecord_,
        editGroupCallParticipant: phone_editGroupCallParticipant_,
        editGroupCallTitle: phone_editGroupCallTitle_,
        getGroupCallJoinAs: phone_getGroupCallJoinAs_,
        exportGroupCallInvite: phone_exportGroupCallInvite_,
        toggleGroupCallStartSubscription: phone_toggleGroupCallStartSubscription_,
        startScheduledGroupCall: phone_startScheduledGroupCall_,
        saveDefaultGroupCallJoinAs: phone_saveDefaultGroupCallJoinAs_,
        joinGroupCallPresentation: phone_joinGroupCallPresentation_,
        leaveGroupCallPresentation: phone_leaveGroupCallPresentation_,
        getGroupCallStreamChannels: phone_getGroupCallStreamChannels_,
        getGroupCallStreamRtmpUrl: phone_getGroupCallStreamRtmpUrl_,
        saveCallLog: phone_saveCallLog_,
    },
    langpack: {
        getLangPack: langpack_getLangPack_,
        getStrings: langpack_getStrings_,
        getDifference: langpack_getDifference_,
        getLanguages: langpack_getLanguages_,
        getLanguage: langpack_getLanguage_,
    },
    folders: {
        editPeerFolders: folders_editPeerFolders_,
    },
    stats: {
        getBroadcastStats: stats_getBroadcastStats_,
        loadAsyncGraph: stats_loadAsyncGraph_,
        getMegagroupStats: stats_getMegagroupStats_,
        getMessagePublicForwards: stats_getMessagePublicForwards_,
        getMessageStats: stats_getMessageStats_,
        getStoryStats: stats_getStoryStats_,
        getStoryPublicForwards: stats_getStoryPublicForwards_,
        getBroadcastRevenueStats: stats_getBroadcastRevenueStats_,
        getBroadcastRevenueWithdrawalUrl: stats_getBroadcastRevenueWithdrawalUrl_,
        getBroadcastRevenueTransactions: stats_getBroadcastRevenueTransactions_,
    },
    chatlists: {
        exportChatlistInvite: chatlists_exportChatlistInvite_,
        deleteExportedInvite: chatlists_deleteExportedInvite_,
        editExportedInvite: chatlists_editExportedInvite_,
        getExportedInvites: chatlists_getExportedInvites_,
        checkChatlistInvite: chatlists_checkChatlistInvite_,
        joinChatlistInvite: chatlists_joinChatlistInvite_,
        getChatlistUpdates: chatlists_getChatlistUpdates_,
        joinChatlistUpdates: chatlists_joinChatlistUpdates_,
        hideChatlistUpdates: chatlists_hideChatlistUpdates_,
        getLeaveChatlistSuggestions: chatlists_getLeaveChatlistSuggestions_,
        leaveChatlist: chatlists_leaveChatlist_,
    },
    stories: {
        canSendStory: stories_canSendStory_,
        sendStory: stories_sendStory_,
        editStory: stories_editStory_,
        deleteStories: stories_deleteStories_,
        togglePinned: stories_togglePinned_,
        getAllStories: stories_getAllStories_,
        getPinnedStories: stories_getPinnedStories_,
        getStoriesArchive: stories_getStoriesArchive_,
        getStoriesByID: stories_getStoriesByID_,
        toggleAllStoriesHidden: stories_toggleAllStoriesHidden_,
        readStories: stories_readStories_,
        incrementStoryViews: stories_incrementStoryViews_,
        getStoryViewsList: stories_getStoryViewsList_,
        getStoriesViews: stories_getStoriesViews_,
        exportStoryLink: stories_exportStoryLink_,
        report: stories_report_,
        activateStealthMode: stories_activateStealthMode_,
        sendReaction: stories_sendReaction_,
        getPeerStories: stories_getPeerStories_,
        getAllReadPeerStories: stories_getAllReadPeerStories_,
        getPeerMaxIDs: stories_getPeerMaxIDs_,
        getChatsToSend: stories_getChatsToSend_,
        togglePeerStoriesHidden: stories_togglePeerStoriesHidden_,
        getStoryReactionsList: stories_getStoryReactionsList_,
    },
    premium: {
        getBoostsList: premium_getBoostsList_,
        getMyBoosts: premium_getMyBoosts_,
        applyBoost: premium_applyBoost_,
        getBoostsStatus: premium_getBoostsStatus_,
        getUserBoosts: premium_getUserBoosts_,
    },
    smsjobs: {
        isEligibleToJoin: smsjobs_isEligibleToJoin_,
        join: smsjobs_join_,
        leave: smsjobs_leave_,
        updateSettings: smsjobs_updateSettings_,
        getStatus: smsjobs_getStatus_,
        getSmsJob: smsjobs_getSmsJob_,
        finishJob: smsjobs_finishJob_,
    },
    fragment: {
        getCollectibleInfo: fragment_getCollectibleInfo_,
    },
};
