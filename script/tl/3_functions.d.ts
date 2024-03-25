import { id, params, TLObject, Params, paramDesc, ParamDesc, name } from "./1_tl_object.js";
import { enums } from "./2_types.js";
export declare abstract class Function_<T> extends TLObject {
    __R: T;
}
export declare class req_pq_multi_ extends Function_<enums.ResPQ> {
    static __F: (params: {
        nonce: bigint;
    }) => enums.ResPQ;
    nonce: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        nonce: bigint;
    });
}
export declare class req_DH_params_ extends Function_<enums.Server_DH_Params> {
    static __F: (params: {
        nonce: bigint;
        server_nonce: bigint;
        p: Uint8Array;
        q: Uint8Array;
        public_key_fingerprint: bigint;
        encrypted_data: Uint8Array;
    }) => enums.Server_DH_Params;
    nonce: bigint;
    server_nonce: bigint;
    p: Uint8Array;
    q: Uint8Array;
    public_key_fingerprint: bigint;
    encrypted_data: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        nonce: bigint;
        server_nonce: bigint;
        p: Uint8Array;
        q: Uint8Array;
        public_key_fingerprint: bigint;
        encrypted_data: Uint8Array;
    });
}
export declare class set_client_DH_params_ extends Function_<enums.Set_client_DH_params_answer> {
    static __F: (params: {
        nonce: bigint;
        server_nonce: bigint;
        encrypted_data: Uint8Array;
    }) => enums.Set_client_DH_params_answer;
    nonce: bigint;
    server_nonce: bigint;
    encrypted_data: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        nonce: bigint;
        server_nonce: bigint;
        encrypted_data: Uint8Array;
    });
}
export declare class rpc_drop_answer_ extends Function_<enums.RpcDropAnswer> {
    static __F: (params: {
        req_msg_id: bigint;
    }) => enums.RpcDropAnswer;
    req_msg_id: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        req_msg_id: bigint;
    });
}
export declare class get_future_salts_ extends Function_<enums.FutureSalts> {
    static __F: (params: {
        num: number;
    }) => enums.FutureSalts;
    num: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        num: number;
    });
}
export declare class ping_ extends Function_<enums.Pong> {
    static __F: (params: {
        ping_id: bigint;
    }) => enums.Pong;
    ping_id: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        ping_id: bigint;
    });
}
export declare class ping_delay_disconnect_ extends Function_<enums.Pong> {
    static __F: (params: {
        ping_id: bigint;
        disconnect_delay: number;
    }) => enums.Pong;
    ping_id: bigint;
    disconnect_delay: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        ping_id: bigint;
        disconnect_delay: number;
    });
}
export declare class destroy_session_ extends Function_<enums.DestroySessionRes> {
    static __F: (params: {
        session_id: bigint;
    }) => enums.DestroySessionRes;
    session_id: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        session_id: bigint;
    });
}
export declare class destroy_auth_key_ extends Function_<enums.DestroyAuthKeyRes> {
    static __F: () => enums.DestroyAuthKeyRes;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Invokes a query after successful completion of one of the previous queries. */
export declare class invokeAfterMsg_<T extends Function_<unknown>> extends Function_<T["__R"]> {
    static __F: <T extends Function_<unknown>>(params: {
        msg_id: bigint;
        query: T;
    }) => T["__R"];
    /** Message identifier on which a current query depends */
    msg_id: bigint;
    /** The query itself */
    query: T;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        msg_id: bigint;
        query: T;
    });
}
/** Invokes a query after a successful completion of previous queries */
export declare class invokeAfterMsgs_<T extends Function_<unknown>> extends Function_<T["__R"]> {
    static __F: <T extends Function_<unknown>>(params: {
        msg_ids: Array<bigint>;
        query: T;
    }) => T["__R"];
    /** List of messages on which a current query depends */
    msg_ids: Array<bigint>;
    /** The query itself */
    query: T;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        msg_ids: Array<bigint>;
        query: T;
    });
}
/** Initialize connection */
export declare class initConnection_<T extends Function_<unknown>> extends Function_<T["__R"]> {
    static __F: <T extends Function_<unknown>>(params: {
        api_id: number;
        device_model: string;
        system_version: string;
        app_version: string;
        system_lang_code: string;
        lang_pack: string;
        lang_code: string;
        proxy?: enums.InputClientProxy;
        params?: enums.JSONValue;
        query: T;
    }) => T["__R"];
    /** Application identifier (see. [App configuration](https://core.telegram.org/myapp)) */
    api_id: number;
    /** Device model */
    device_model: string;
    /** Operation system version */
    system_version: string;
    /** Application version */
    app_version: string;
    /** Code for the language used on the device's OS, ISO 639-1 standard */
    system_lang_code: string;
    /** Language pack to use */
    lang_pack: string;
    /** Code for the language used on the client, ISO 639-1 standard */
    lang_code: string;
    /** Info about an MTProto proxy */
    proxy?: enums.InputClientProxy;
    /** Additional initConnection parameters.
    For now, only the `tz_offset` field is supported, for specifying timezone offset in seconds. */
    params?: enums.JSONValue;
    /** The query itself */
    query: T;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        api_id: number;
        device_model: string;
        system_version: string;
        app_version: string;
        system_lang_code: string;
        lang_pack: string;
        lang_code: string;
        proxy?: enums.InputClientProxy;
        params?: enums.JSONValue;
        query: T;
    });
}
/** Invoke the specified query using the specified API [layer](https://core.telegram.org/api/invoking#layers) */
export declare class invokeWithLayer_<T extends Function_<unknown>> extends Function_<T["__R"]> {
    static __F: <T extends Function_<unknown>>(params: {
        layer: number;
        query: T;
    }) => T["__R"];
    /** The layer to use */
    layer: number;
    /** The query */
    query: T;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        layer: number;
        query: T;
    });
}
/** Invoke a request without subscribing the used connection for [updates](https://core.telegram.org/api/updates) (this is enabled by default for [file queries](https://core.telegram.org/api/files)). */
export declare class invokeWithoutUpdates_<T extends Function_<unknown>> extends Function_<T["__R"]> {
    static __F: <T extends Function_<unknown>>(params: {
        query: T;
    }) => T["__R"];
    /** The query */
    query: T;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        query: T;
    });
}
/** Invoke with the given message range */
export declare class invokeWithMessagesRange_<T extends Function_<unknown>> extends Function_<T["__R"]> {
    static __F: <T extends Function_<unknown>>(params: {
        range: enums.MessageRange;
        query: T;
    }) => T["__R"];
    /** Message range */
    range: enums.MessageRange;
    /** Query */
    query: T;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        range: enums.MessageRange;
        query: T;
    });
}
/** Invoke a method within a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export declare class invokeWithTakeout_<T extends Function_<unknown>> extends Function_<T["__R"]> {
    static __F: <T extends Function_<unknown>>(params: {
        takeout_id: bigint;
        query: T;
    }) => T["__R"];
    /** [Takeout session ID »](https://core.telegram.org/api/takeout) */
    takeout_id: bigint;
    /** Query */
    query: T;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        takeout_id: bigint;
        query: T;
    });
}
/** Send the verification code for login */
export declare class auth_sendCode_ extends Function_<enums.auth.SentCode> {
    static __F: (params: {
        phone_number: string;
        api_id: number;
        api_hash: string;
        settings: enums.CodeSettings;
    }) => enums.auth.SentCode;
    /** Phone number in international format */
    phone_number: string;
    /** Application identifier (see [App configuration](https://core.telegram.org/myapp)) */
    api_id: number;
    /** Application secret hash (see [App configuration](https://core.telegram.org/myapp)) */
    api_hash: string;
    /** Settings for the code type to send */
    settings: enums.CodeSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phone_number: string;
        api_id: number;
        api_hash: string;
        settings: enums.CodeSettings;
    });
}
/** Registers a validated phone number in the system. */
export declare class auth_signUp_ extends Function_<enums.auth.Authorization> {
    static __F: (params: {
        no_joined_notifications?: true;
        phone_number: string;
        phone_code_hash: string;
        first_name: string;
        last_name: string;
    }) => enums.auth.Authorization;
    no_joined_notifications?: true;
    /** Phone number in the international format */
    phone_number: string;
    /** SMS-message ID */
    phone_code_hash: string;
    /** New user first name */
    first_name: string;
    /** New user last name */
    last_name: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        no_joined_notifications?: true;
        phone_number: string;
        phone_code_hash: string;
        first_name: string;
        last_name: string;
    });
}
/** Signs in a user with a validated phone number. */
export declare class auth_signIn_ extends Function_<enums.auth.Authorization> {
    static __F: (params: {
        phone_number: string;
        phone_code_hash: string;
        phone_code?: string;
        email_verification?: enums.EmailVerification;
    }) => enums.auth.Authorization;
    /** Phone number in the international format */
    phone_number: string;
    /** SMS-message ID, obtained from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) */
    phone_code_hash: string;
    /** Valid numerical code from the SMS-message */
    phone_code?: string;
    /** Email verification code or token */
    email_verification?: enums.EmailVerification;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phone_number: string;
        phone_code_hash: string;
        phone_code?: string;
        email_verification?: enums.EmailVerification;
    });
}
/** Logs out the user. */
export declare class auth_logOut_ extends Function_<enums.auth.LoggedOut> {
    static __F: () => enums.auth.LoggedOut;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Terminates all user's authorized sessions except for the current one. */
export declare class auth_resetAuthorizations_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Returns data for copying authorization to another data-center. */
export declare class auth_exportAuthorization_ extends Function_<enums.auth.ExportedAuthorization> {
    static __F: (params: {
        dc_id: number;
    }) => enums.auth.ExportedAuthorization;
    /** Number of a target data-center */
    dc_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        dc_id: number;
    });
}
/** Logs in a user using a key transmitted from his native data-center. */
export declare class auth_importAuthorization_ extends Function_<enums.auth.Authorization> {
    static __F: (params: {
        id: bigint;
        bytes: Uint8Array;
    }) => enums.auth.Authorization;
    /** User ID */
    id: bigint;
    /** Authorization key */
    bytes: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: bigint;
        bytes: Uint8Array;
    });
}
/** Binds a temporary authorization key `temp_auth_key_id` to the permanent authorization key `perm_auth_key_id`. Each permanent key may only be bound to one temporary key at a time, binding a new temporary key overwrites the previous one. */
export declare class auth_bindTempAuthKey_ extends Function_<boolean> {
    static __F: (params: {
        perm_auth_key_id: bigint;
        nonce: bigint;
        expires_at: number;
        encrypted_message: Uint8Array;
    }) => boolean;
    /** Permanent auth\_key\_id to bind to */
    perm_auth_key_id: bigint;
    /** Random long from [Binding message contents](#binding-message-contents) */
    nonce: bigint;
    /** Unix timestamp to invalidate temporary key, see [Binding message contents](#binding-message-contents) */
    expires_at: number;
    /** See [Generating encrypted\_message](#generating-encrypted-message) */
    encrypted_message: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        perm_auth_key_id: bigint;
        nonce: bigint;
        expires_at: number;
        encrypted_message: Uint8Array;
    });
}
/** Login as a bot */
export declare class auth_importBotAuthorization_ extends Function_<enums.auth.Authorization> {
    static __F: (params: {
        flags: number;
        api_id: number;
        api_hash: string;
        bot_auth_token: string;
    }) => enums.auth.Authorization;
    /** Reserved for future use */
    flags: number;
    /** Application identifier (see. [App configuration](https://core.telegram.org/myapp)) */
    api_id: number;
    /** Application identifier hash (see. [App configuration](https://core.telegram.org/myapp)) */
    api_hash: string;
    /** Bot token (see [bots](https://core.telegram.org/bots)) */
    bot_auth_token: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        flags: number;
        api_id: number;
        api_hash: string;
        bot_auth_token: string;
    });
}
/** Try logging to an account protected by a [2FA password](https://core.telegram.org/api/srp). */
export declare class auth_checkPassword_ extends Function_<enums.auth.Authorization> {
    static __F: (params: {
        password: enums.InputCheckPasswordSRP;
    }) => enums.auth.Authorization;
    /** The account's password (see [SRP](https://core.telegram.org/api/srp)) */
    password: enums.InputCheckPasswordSRP;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        password: enums.InputCheckPasswordSRP;
    });
}
/** Request recovery code of a [2FA password](https://core.telegram.org/api/srp), only for accounts with a [recovery email configured](https://core.telegram.org/api/srp#email-verification). */
export declare class auth_requestPasswordRecovery_ extends Function_<enums.auth.PasswordRecovery> {
    static __F: () => enums.auth.PasswordRecovery;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Reset the [2FA password](https://core.telegram.org/api/srp) using the recovery code sent using [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery). */
export declare class auth_recoverPassword_ extends Function_<enums.auth.Authorization> {
    static __F: (params: {
        code: string;
        new_settings?: enums.account.PasswordInputSettings;
    }) => enums.auth.Authorization;
    /** Code received via email */
    code: string;
    /** New password */
    new_settings?: enums.account.PasswordInputSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        code: string;
        new_settings?: enums.account.PasswordInputSettings;
    });
}
/** Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see [login](https://core.telegram.org/api/auth) for more info. */
export declare class auth_resendCode_ extends Function_<enums.auth.SentCode> {
    static __F: (params: {
        phone_number: string;
        phone_code_hash: string;
    }) => enums.auth.SentCode;
    /** The phone number */
    phone_number: string;
    /** The phone code hash obtained from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) */
    phone_code_hash: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phone_number: string;
        phone_code_hash: string;
    });
}
/** Cancel the login verification code */
export declare class auth_cancelCode_ extends Function_<boolean> {
    static __F: (params: {
        phone_number: string;
        phone_code_hash: string;
    }) => boolean;
    /** Phone number */
    phone_number: string;
    /** Phone code hash from [auth.sendCode](https://core.telegram.org/method/auth.sendCode) */
    phone_code_hash: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phone_number: string;
        phone_code_hash: string;
    });
}
/** Delete all temporary authorization keys **except for** the ones specified */
export declare class auth_dropTempAuthKeys_ extends Function_<boolean> {
    static __F: (params: {
        except_auth_keys: Array<bigint>;
    }) => boolean;
    /** The auth keys that **shouldn't** be dropped. */
    except_auth_keys: Array<bigint>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        except_auth_keys: Array<bigint>;
    });
}
/** Generate a login token, for [login via QR code](https://core.telegram.org/api/qr-login).
The generated login token should be encoded using base64url, then shown as a `tg://login?token=base64encodedtoken` [deep link »](https://core.telegram.org/api/links#qr-code-login-links) in the QR code. */
export declare class auth_exportLoginToken_ extends Function_<enums.auth.LoginToken> {
    static __F: (params: {
        api_id: number;
        api_hash: string;
        except_ids: Array<bigint>;
    }) => enums.auth.LoginToken;
    /** Application identifier (see. [App configuration](https://core.telegram.org/myapp)) */
    api_id: number;
    /** Application identifier hash (see. [App configuration](https://core.telegram.org/myapp)) */
    api_hash: string;
    /** List of already logged-in user IDs, to prevent logging in twice with the same user */
    except_ids: Array<bigint>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        api_id: number;
        api_hash: string;
        except_ids: Array<bigint>;
    });
}
/** Login using a redirected login token, generated in case of DC mismatch during [QR code login](https://core.telegram.org/api/qr-login). */
export declare class auth_importLoginToken_ extends Function_<enums.auth.LoginToken> {
    static __F: (params: {
        token: Uint8Array;
    }) => enums.auth.LoginToken;
    /** Login token */
    token: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        token: Uint8Array;
    });
}
/** Accept QR code login token, logging in the app that generated it. */
export declare class auth_acceptLoginToken_ extends Function_<enums.Authorization> {
    static __F: (params: {
        token: Uint8Array;
    }) => enums.Authorization;
    /** Login token embedded in QR code, for more info, see [login via QR code](https://core.telegram.org/api/qr-login). */
    token: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        token: Uint8Array;
    });
}
/** Check if the [2FA recovery code](https://core.telegram.org/api/srp) sent using [auth.requestPasswordRecovery](https://core.telegram.org/method/auth.requestPasswordRecovery) is valid, before passing it to [auth.recoverPassword](https://core.telegram.org/method/auth.recoverPassword). */
export declare class auth_checkRecoveryPassword_ extends Function_<boolean> {
    static __F: (params: {
        code: string;
    }) => boolean;
    /** Code received via email */
    code: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        code: string;
    });
}
/** Login by importing an authorization token */
export declare class auth_importWebTokenAuthorization_ extends Function_<enums.auth.Authorization> {
    static __F: (params: {
        api_id: number;
        api_hash: string;
        web_auth_token: string;
    }) => enums.auth.Authorization;
    /** [API ID](https://core.telegram.org/api/obtaining_api_id) */
    api_id: number;
    /** [API hash](https://core.telegram.org/api/obtaining_api_id) */
    api_hash: string;
    /** The authorization token */
    web_auth_token: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        api_id: number;
        api_hash: string;
        web_auth_token: string;
    });
}
/** Request an SMS code via Firebase. */
export declare class auth_requestFirebaseSms_ extends Function_<boolean> {
    static __F: (params: {
        phone_number: string;
        phone_code_hash: string;
        safety_net_token?: string;
        ios_push_secret?: string;
    }) => boolean;
    /** Phone number */
    phone_number: string;
    /** Phone code hash returned by [auth.sendCode](https://core.telegram.org/method/auth.sendCode) */
    phone_code_hash: string;
    /** On Android, a JWS object obtained as described in the [auth documentation »](https://core.telegram.org/api/auth) */
    safety_net_token?: string;
    /** Secret token received via an apple push notification */
    ios_push_secret?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phone_number: string;
        phone_code_hash: string;
        safety_net_token?: string;
        ios_push_secret?: string;
    });
}
/** Reset the [login email »](https://core.telegram.org/api/auth#email-verification). */
export declare class auth_resetLoginEmail_ extends Function_<enums.auth.SentCode> {
    static __F: (params: {
        phone_number: string;
        phone_code_hash: string;
    }) => enums.auth.SentCode;
    /** Phone number of the account */
    phone_number: string;
    /** Phone code hash, obtained as described in the [documentation »](https://core.telegram.org/api/auth) */
    phone_code_hash: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phone_number: string;
        phone_code_hash: string;
    });
}
/** Register device to receive [PUSH notifications](https://core.telegram.org/api/push-updates) */
export declare class account_registerDevice_ extends Function_<boolean> {
    static __F: (params: {
        no_muted?: true;
        token_type: number;
        token: string;
        app_sandbox: boolean;
        secret: Uint8Array;
        other_uids: Array<bigint>;
    }) => boolean;
    /** Avoid receiving (silent and invisible background) notifications. Useful to save battery. */
    no_muted?: true;
    /** Device token type, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. */
    token_type: number;
    /** Device token, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. */
    token: string;
    /** If [(boolTrue)](https://core.telegram.org/constructor/boolTrue) is transmitted, a sandbox-certificate will be used during transmission. */
    app_sandbox: boolean;
    /** For FCM and APNS VoIP, optional encryption key used to encrypt push notifications */
    secret: Uint8Array;
    /** List of user identifiers of other users currently using the client */
    other_uids: Array<bigint>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        no_muted?: true;
        token_type: number;
        token: string;
        app_sandbox: boolean;
        secret: Uint8Array;
        other_uids: Array<bigint>;
    });
}
/** Deletes a device by its token, stops sending PUSH-notifications to it. */
export declare class account_unregisterDevice_ extends Function_<boolean> {
    static __F: (params: {
        token_type: number;
        token: string;
        other_uids: Array<bigint>;
    }) => boolean;
    /** Device token type, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. */
    token_type: number;
    /** Device token, see [PUSH updates](https://core.telegram.org/api/push-updates#subscribing-to-notifications) for the possible values. */
    token: string;
    /** List of user identifiers of other users currently using the client */
    other_uids: Array<bigint>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        token_type: number;
        token: string;
        other_uids: Array<bigint>;
    });
}
/** Edits notification settings from a given user/group, from all users/all groups. */
export declare class account_updateNotifySettings_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputNotifyPeer;
        settings: enums.InputPeerNotifySettings;
    }) => boolean;
    /** Notification source */
    peer: enums.InputNotifyPeer;
    /** Notification settings */
    settings: enums.InputPeerNotifySettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputNotifyPeer;
        settings: enums.InputPeerNotifySettings;
    });
}
/** Gets current notification settings for a given user/group, from all users/all groups. */
export declare class account_getNotifySettings_ extends Function_<enums.PeerNotifySettings> {
    static __F: (params: {
        peer: enums.InputNotifyPeer;
    }) => enums.PeerNotifySettings;
    /** Notification source */
    peer: enums.InputNotifyPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputNotifyPeer;
    });
}
/** Resets all notification settings from users and groups. */
export declare class account_resetNotifySettings_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Updates user profile. */
export declare class account_updateProfile_ extends Function_<enums.User> {
    static __F: (params?: {
        first_name?: string;
        last_name?: string;
        about?: string;
    }) => enums.User;
    /** New user first name */
    first_name?: string;
    /** New user last name */
    last_name?: string;
    /** New bio */
    about?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        first_name?: string;
        last_name?: string;
        about?: string;
    });
}
/** Updates online user status. */
export declare class account_updateStatus_ extends Function_<boolean> {
    static __F: (params: {
        offline: boolean;
    }) => boolean;
    /** If [(boolTrue)](https://core.telegram.org/constructor/boolTrue) is transmitted, user status will change to [(userStatusOffline)](https://core.telegram.org/constructor/userStatusOffline). */
    offline: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        offline: boolean;
    });
}
/** Returns a list of available [wallpapers](https://core.telegram.org/api/wallpapers). */
export declare class account_getWallPapers_ extends Function_<enums.account.WallPapers> {
    static __F: (params: {
        hash: bigint;
    }) => enums.account.WallPapers;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Report a peer for violation of telegram's Terms of Service */
export declare class account_reportPeer_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        reason: enums.ReportReason;
        message: string;
    }) => boolean;
    /** The peer to report */
    peer: enums.InputPeer;
    /** The reason why this peer is being reported */
    reason: enums.ReportReason;
    /** Comment for report moderation */
    message: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        reason: enums.ReportReason;
        message: string;
    });
}
/** Validates a username and checks availability. */
export declare class account_checkUsername_ extends Function_<boolean> {
    static __F: (params: {
        username: string;
    }) => boolean;
    /** username
    Accepted characters: A-z (case-insensitive), 0-9 and underscores.
    Length: 5-32 characters. */
    username: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        username: string;
    });
}
/** Changes username for the current user. */
export declare class account_updateUsername_ extends Function_<enums.User> {
    static __F: (params: {
        username: string;
    }) => enums.User;
    /** username or empty string if username is to be removed
    Accepted characters: a-z (case-insensitive), 0-9 and underscores.
    Length: 5-32 characters. */
    username: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        username: string;
    });
}
/** Get privacy settings of current account */
export declare class account_getPrivacy_ extends Function_<enums.account.PrivacyRules> {
    static __F: (params: {
        key: enums.InputPrivacyKey;
    }) => enums.account.PrivacyRules;
    /** Peer category whose privacy settings should be fetched */
    key: enums.InputPrivacyKey;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        key: enums.InputPrivacyKey;
    });
}
/** Change privacy settings of current account */
export declare class account_setPrivacy_ extends Function_<enums.account.PrivacyRules> {
    static __F: (params: {
        key: enums.InputPrivacyKey;
        rules: Array<enums.InputPrivacyRule>;
    }) => enums.account.PrivacyRules;
    /** New privacy rule */
    key: enums.InputPrivacyKey;
    /** Peers to which the privacy rule will apply. */
    rules: Array<enums.InputPrivacyRule>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        key: enums.InputPrivacyKey;
        rules: Array<enums.InputPrivacyRule>;
    });
}
/** Delete the user's account from the telegram servers. */
export declare class account_deleteAccount_ extends Function_<boolean> {
    static __F: (params: {
        reason: string;
        password?: enums.InputCheckPasswordSRP;
    }) => boolean;
    /** Why is the account being deleted, can be empty */
    reason: string;
    /** [2FA password](https://core.telegram.org/api/srp): this field can be omitted even for accounts with 2FA enabled: in this case account account deletion will be delayed by 7 days [as specified in the docs »](https://core.telegram.org/api/account-deletion) */
    password?: enums.InputCheckPasswordSRP;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        reason: string;
        password?: enums.InputCheckPasswordSRP;
    });
}
/** Get days to live of account */
export declare class account_getAccountTTL_ extends Function_<enums.AccountDaysTTL> {
    static __F: () => enums.AccountDaysTTL;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Set account self-destruction period */
export declare class account_setAccountTTL_ extends Function_<boolean> {
    static __F: (params: {
        ttl: enums.AccountDaysTTL;
    }) => boolean;
    /** Time to live in days */
    ttl: enums.AccountDaysTTL;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        ttl: enums.AccountDaysTTL;
    });
}
/** Verify a new phone number to associate to the current account */
export declare class account_sendChangePhoneCode_ extends Function_<enums.auth.SentCode> {
    static __F: (params: {
        phone_number: string;
        settings: enums.CodeSettings;
    }) => enums.auth.SentCode;
    /** New phone number */
    phone_number: string;
    /** Phone code settings */
    settings: enums.CodeSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phone_number: string;
        settings: enums.CodeSettings;
    });
}
/** Change the phone number of the current account */
export declare class account_changePhone_ extends Function_<enums.User> {
    static __F: (params: {
        phone_number: string;
        phone_code_hash: string;
        phone_code: string;
    }) => enums.User;
    /** New phone number */
    phone_number: string;
    /** Phone code hash received when calling [account.sendChangePhoneCode](https://core.telegram.org/method/account.sendChangePhoneCode) */
    phone_code_hash: string;
    /** Phone code received when calling [account.sendChangePhoneCode](https://core.telegram.org/method/account.sendChangePhoneCode) */
    phone_code: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phone_number: string;
        phone_code_hash: string;
        phone_code: string;
    });
}
/** When client-side passcode lock feature is enabled, will not show message texts in incoming [PUSH notifications](https://core.telegram.org/api/push-updates). */
export declare class account_updateDeviceLocked_ extends Function_<boolean> {
    static __F: (params: {
        period: number;
    }) => boolean;
    /** Inactivity period after which to start hiding message texts in [PUSH notifications](https://core.telegram.org/api/push-updates). */
    period: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        period: number;
    });
}
/** Get logged-in sessions */
export declare class account_getAuthorizations_ extends Function_<enums.account.Authorizations> {
    static __F: () => enums.account.Authorizations;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Log out an active [authorized session](https://core.telegram.org/api/auth) by its hash */
export declare class account_resetAuthorization_ extends Function_<boolean> {
    static __F: (params: {
        hash: bigint;
    }) => boolean;
    /** Session hash */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Obtain configuration for two-factor authorization with password */
export declare class account_getPassword_ extends Function_<enums.account.Password> {
    static __F: () => enums.account.Password;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get private info associated to the password info (recovery email, telegram [passport](https://core.telegram.org/passport) info & so on) */
export declare class account_getPasswordSettings_ extends Function_<enums.account.PasswordSettings> {
    static __F: (params: {
        password: enums.InputCheckPasswordSRP;
    }) => enums.account.PasswordSettings;
    /** The password (see [SRP](https://core.telegram.org/api/srp)) */
    password: enums.InputCheckPasswordSRP;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        password: enums.InputCheckPasswordSRP;
    });
}
/** Set a new 2FA password */
export declare class account_updatePasswordSettings_ extends Function_<boolean> {
    static __F: (params: {
        password: enums.InputCheckPasswordSRP;
        new_settings: enums.account.PasswordInputSettings;
    }) => boolean;
    /** The old password (see [SRP](https://core.telegram.org/api/srp)) */
    password: enums.InputCheckPasswordSRP;
    /** The new password (see [SRP](https://core.telegram.org/api/srp)) */
    new_settings: enums.account.PasswordInputSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        password: enums.InputCheckPasswordSRP;
        new_settings: enums.account.PasswordInputSettings;
    });
}
/** Send confirmation code to cancel account deletion, for more info [click here »](https://core.telegram.org/api/account-deletion) */
export declare class account_sendConfirmPhoneCode_ extends Function_<enums.auth.SentCode> {
    static __F: (params: {
        hash: string;
        settings: enums.CodeSettings;
    }) => enums.auth.SentCode;
    /** The hash from the service notification, for more info [click here »](https://core.telegram.org/api/account-deletion) */
    hash: string;
    /** Phone code settings */
    settings: enums.CodeSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: string;
        settings: enums.CodeSettings;
    });
}
/** Confirm a phone number to cancel account deletion, for more info [click here »](https://core.telegram.org/api/account-deletion) */
export declare class account_confirmPhone_ extends Function_<boolean> {
    static __F: (params: {
        phone_code_hash: string;
        phone_code: string;
    }) => boolean;
    /** Phone code hash, for more info [click here »](https://core.telegram.org/api/account-deletion) */
    phone_code_hash: string;
    /** SMS code, for more info [click here »](https://core.telegram.org/api/account-deletion) */
    phone_code: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phone_code_hash: string;
        phone_code: string;
    });
}
/** Get temporary payment password */
export declare class account_getTmpPassword_ extends Function_<enums.account.TmpPassword> {
    static __F: (params: {
        password: enums.InputCheckPasswordSRP;
        period: number;
    }) => enums.account.TmpPassword;
    /** SRP password parameters */
    password: enums.InputCheckPasswordSRP;
    /** Time during which the temporary password will be valid, in seconds; should be between 60 and 86400 */
    period: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        password: enums.InputCheckPasswordSRP;
        period: number;
    });
}
/** Get web [login widget](https://core.telegram.org/widgets/login) authorizations */
export declare class account_getWebAuthorizations_ extends Function_<enums.account.WebAuthorizations> {
    static __F: () => enums.account.WebAuthorizations;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Log out an active web [telegram login](https://core.telegram.org/widgets/login) session */
export declare class account_resetWebAuthorization_ extends Function_<boolean> {
    static __F: (params: {
        hash: bigint;
    }) => boolean;
    /** [Session](https://core.telegram.org/constructor/webAuthorization) hash */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Reset all active web [telegram login](https://core.telegram.org/widgets/login) sessions */
export declare class account_resetWebAuthorizations_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get all saved [Telegram Passport](https://core.telegram.org/passport) documents, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
export declare class account_getAllSecureValues_ extends Function_<enums.SecureValue[]> {
    static __F: () => enums.SecureValue[];
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get saved [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
export declare class account_getSecureValue_ extends Function_<enums.SecureValue[]> {
    static __F: (params: {
        types: Array<enums.SecureValueType>;
    }) => enums.SecureValue[];
    /** Requested value types */
    types: Array<enums.SecureValueType>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        types: Array<enums.SecureValueType>;
    });
}
/** Securely save [Telegram Passport](https://core.telegram.org/passport) document, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
export declare class account_saveSecureValue_ extends Function_<enums.SecureValue> {
    static __F: (params: {
        value: enums.InputSecureValue;
        secure_secret_id: bigint;
    }) => enums.SecureValue;
    /** Secure value, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
    value: enums.InputSecureValue;
    /** Passport secret hash, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
    secure_secret_id: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        value: enums.InputSecureValue;
        secure_secret_id: bigint;
    });
}
/** Delete stored [Telegram Passport](https://core.telegram.org/passport) documents, [for more info see the passport docs »](https://core.telegram.org/passport/encryption#encryption) */
export declare class account_deleteSecureValue_ extends Function_<boolean> {
    static __F: (params: {
        types: Array<enums.SecureValueType>;
    }) => boolean;
    /** Document types to delete */
    types: Array<enums.SecureValueType>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        types: Array<enums.SecureValueType>;
    });
}
/** Returns a Telegram Passport authorization form for sharing data with a service */
export declare class account_getAuthorizationForm_ extends Function_<enums.account.AuthorizationForm> {
    static __F: (params: {
        bot_id: bigint;
        scope: string;
        public_key: string;
    }) => enums.account.AuthorizationForm;
    /** User identifier of the service's bot */
    bot_id: bigint;
    /** Telegram Passport element types requested by the service */
    scope: string;
    /** Service's public key */
    public_key: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot_id: bigint;
        scope: string;
        public_key: string;
    });
}
/** Sends a Telegram Passport authorization form, effectively sharing data with the service */
export declare class account_acceptAuthorization_ extends Function_<boolean> {
    static __F: (params: {
        bot_id: bigint;
        scope: string;
        public_key: string;
        value_hashes: Array<enums.SecureValueHash>;
        credentials: enums.SecureCredentialsEncrypted;
    }) => boolean;
    /** Bot ID */
    bot_id: bigint;
    /** Telegram Passport element types requested by the service */
    scope: string;
    /** Service's public key */
    public_key: string;
    /** Types of values sent and their hashes */
    value_hashes: Array<enums.SecureValueHash>;
    /** Encrypted values */
    credentials: enums.SecureCredentialsEncrypted;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot_id: bigint;
        scope: string;
        public_key: string;
        value_hashes: Array<enums.SecureValueHash>;
        credentials: enums.SecureCredentialsEncrypted;
    });
}
/** Send the verification phone code for telegram [passport](https://core.telegram.org/passport). */
export declare class account_sendVerifyPhoneCode_ extends Function_<enums.auth.SentCode> {
    static __F: (params: {
        phone_number: string;
        settings: enums.CodeSettings;
    }) => enums.auth.SentCode;
    /** The phone number to verify */
    phone_number: string;
    /** Phone code settings */
    settings: enums.CodeSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phone_number: string;
        settings: enums.CodeSettings;
    });
}
/** Verify a phone number for telegram [passport](https://core.telegram.org/passport). */
export declare class account_verifyPhone_ extends Function_<boolean> {
    static __F: (params: {
        phone_number: string;
        phone_code_hash: string;
        phone_code: string;
    }) => boolean;
    /** Phone number */
    phone_number: string;
    /** Phone code hash received from the call to [account.sendVerifyPhoneCode](https://core.telegram.org/method/account.sendVerifyPhoneCode) */
    phone_code_hash: string;
    /** Code received after the call to [account.sendVerifyPhoneCode](https://core.telegram.org/method/account.sendVerifyPhoneCode) */
    phone_code: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phone_number: string;
        phone_code_hash: string;
        phone_code: string;
    });
}
/** Send an email verification code. */
export declare class account_sendVerifyEmailCode_ extends Function_<enums.account.SentEmailCode> {
    static __F: (params: {
        purpose: enums.EmailVerifyPurpose;
        email: string;
    }) => enums.account.SentEmailCode;
    /** Verification purpose. */
    purpose: enums.EmailVerifyPurpose;
    /** The email where to send the code. */
    email: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        purpose: enums.EmailVerifyPurpose;
        email: string;
    });
}
/** Verify an email address. */
export declare class account_verifyEmail_ extends Function_<enums.account.EmailVerified> {
    static __F: (params: {
        purpose: enums.EmailVerifyPurpose;
        verification: enums.EmailVerification;
    }) => enums.account.EmailVerified;
    /** Verification purpose */
    purpose: enums.EmailVerifyPurpose;
    /** Email verification code or token */
    verification: enums.EmailVerification;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        purpose: enums.EmailVerifyPurpose;
        verification: enums.EmailVerification;
    });
}
/** Initialize a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export declare class account_initTakeoutSession_ extends Function_<enums.account.Takeout> {
    static __F: (params?: {
        contacts?: true;
        message_users?: true;
        message_chats?: true;
        message_megagroups?: true;
        message_channels?: true;
        files?: true;
        file_max_size?: bigint;
    }) => enums.account.Takeout;
    /** Whether to export contacts */
    contacts?: true;
    /** Whether to export messages in private chats */
    message_users?: true;
    /** Whether to export messages in [basic groups](https://core.telegram.org/api/channel#basic-groups) */
    message_chats?: true;
    /** Whether to export messages in [supergroups](https://core.telegram.org/api/channel#supergroups) */
    message_megagroups?: true;
    /** Whether to export messages in [channels](https://core.telegram.org/api/channel#channels) */
    message_channels?: true;
    /** Whether to export files */
    files?: true;
    /** Maximum size of files to export */
    file_max_size?: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        contacts?: true;
        message_users?: true;
        message_chats?: true;
        message_megagroups?: true;
        message_channels?: true;
        files?: true;
        file_max_size?: bigint;
    });
}
/** Terminate a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export declare class account_finishTakeoutSession_ extends Function_<boolean> {
    static __F: (params?: {
        success?: true;
    }) => boolean;
    /** Data exported successfully */
    success?: true;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        success?: true;
    });
}
/** Verify an email to use as [2FA recovery method](https://core.telegram.org/api/srp). */
export declare class account_confirmPasswordEmail_ extends Function_<boolean> {
    static __F: (params: {
        code: string;
    }) => boolean;
    /** The phone code that was received after [setting a recovery email](https://core.telegram.org/api/srp#email-verification) */
    code: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        code: string;
    });
}
/** Resend the code to verify an email to use as [2FA recovery method](https://core.telegram.org/api/srp). */
export declare class account_resendPasswordEmail_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Cancel the code that was sent to verify an email to use as [2FA recovery method](https://core.telegram.org/api/srp). */
export declare class account_cancelPasswordEmail_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Whether the user will receive notifications when contacts sign up */
export declare class account_getContactSignUpNotification_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Toggle contact sign up notifications */
export declare class account_setContactSignUpNotification_ extends Function_<boolean> {
    static __F: (params: {
        silent: boolean;
    }) => boolean;
    /** Whether to disable contact sign up notifications */
    silent: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        silent: boolean;
    });
}
/** Returns list of chats with non-default notification settings */
export declare class account_getNotifyExceptions_ extends Function_<enums.Updates> {
    static __F: (params?: {
        compare_sound?: true;
        compare_stories?: true;
        peer?: enums.InputNotifyPeer;
    }) => enums.Updates;
    /** If set, chats with non-default sound will be returned */
    compare_sound?: true;
    /** If set, chats with non-default notification settings for stories will be returned */
    compare_stories?: true;
    /** If specified, only chats of the specified category will be returned */
    peer?: enums.InputNotifyPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        compare_sound?: true;
        compare_stories?: true;
        peer?: enums.InputNotifyPeer;
    });
}
/** Get info about a certain [wallpaper](https://core.telegram.org/api/wallpapers) */
export declare class account_getWallPaper_ extends Function_<enums.WallPaper> {
    static __F: (params: {
        wallpaper: enums.InputWallPaper;
    }) => enums.WallPaper;
    /** The [wallpaper](https://core.telegram.org/api/wallpapers) to get info about */
    wallpaper: enums.InputWallPaper;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        wallpaper: enums.InputWallPaper;
    });
}
/** Create and upload a new [wallpaper](https://core.telegram.org/api/wallpapers) */
export declare class account_uploadWallPaper_ extends Function_<enums.WallPaper> {
    static __F: (params: {
        for_chat?: true;
        file: enums.InputFile;
        mime_type: string;
        settings: enums.WallPaperSettings;
    }) => enums.WallPaper;
    /** Set this flag when uploading wallpapers to be passed to [messages.setChatWallPaper](https://core.telegram.org/method/messages.setChatWallPaper). */
    for_chat?: true;
    /** The JPG/PNG wallpaper */
    file: enums.InputFile;
    /** MIME type of uploaded wallpaper */
    mime_type: string;
    /** Wallpaper settings */
    settings: enums.WallPaperSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        for_chat?: true;
        file: enums.InputFile;
        mime_type: string;
        settings: enums.WallPaperSettings;
    });
}
/** Install/uninstall [wallpaper](https://core.telegram.org/api/wallpapers) */
export declare class account_saveWallPaper_ extends Function_<boolean> {
    static __F: (params: {
        wallpaper: enums.InputWallPaper;
        unsave: boolean;
        settings: enums.WallPaperSettings;
    }) => boolean;
    /** [Wallpaper](https://core.telegram.org/api/wallpapers) to install or uninstall */
    wallpaper: enums.InputWallPaper;
    /** Uninstall wallpaper? */
    unsave: boolean;
    /** Wallpaper settings */
    settings: enums.WallPaperSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        wallpaper: enums.InputWallPaper;
        unsave: boolean;
        settings: enums.WallPaperSettings;
    });
}
/** Install [wallpaper](https://core.telegram.org/api/wallpapers) */
export declare class account_installWallPaper_ extends Function_<boolean> {
    static __F: (params: {
        wallpaper: enums.InputWallPaper;
        settings: enums.WallPaperSettings;
    }) => boolean;
    /** [Wallpaper](https://core.telegram.org/api/wallpapers) to install */
    wallpaper: enums.InputWallPaper;
    /** [Wallpaper](https://core.telegram.org/api/wallpapers) settings */
    settings: enums.WallPaperSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        wallpaper: enums.InputWallPaper;
        settings: enums.WallPaperSettings;
    });
}
/** Delete all installed [wallpapers](https://core.telegram.org/api/wallpapers), reverting to the default wallpaper set. */
export declare class account_resetWallPapers_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get media autodownload settings */
export declare class account_getAutoDownloadSettings_ extends Function_<enums.account.AutoDownloadSettings> {
    static __F: () => enums.account.AutoDownloadSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Change media autodownload settings */
export declare class account_saveAutoDownloadSettings_ extends Function_<boolean> {
    static __F: (params: {
        low?: true;
        high?: true;
        settings: enums.AutoDownloadSettings;
    }) => boolean;
    /** Whether to save media in the low data usage preset */
    low?: true;
    /** Whether to save media in the high data usage preset */
    high?: true;
    /** Media autodownload settings */
    settings: enums.AutoDownloadSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        low?: true;
        high?: true;
        settings: enums.AutoDownloadSettings;
    });
}
/** Upload theme */
export declare class account_uploadTheme_ extends Function_<enums.Document> {
    static __F: (params: {
        file: enums.InputFile;
        thumb?: enums.InputFile;
        file_name: string;
        mime_type: string;
    }) => enums.Document;
    /** [Previously uploaded](https://core.telegram.org/api/themes#uploading-theme-files) theme file with platform-specific colors for UI components, can be left unset when creating themes that only modify the wallpaper or accent colors. */
    file: enums.InputFile;
    /** Thumbnail */
    thumb?: enums.InputFile;
    /** File name */
    file_name: string;
    /** MIME type, must be `application/x-tgtheme-{format}`, where `format` depends on the client */
    mime_type: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        file: enums.InputFile;
        thumb?: enums.InputFile;
        file_name: string;
        mime_type: string;
    });
}
/** Create a theme */
export declare class account_createTheme_ extends Function_<enums.Theme> {
    static __F: (params: {
        slug: string;
        title: string;
        document?: enums.InputDocument;
        settings?: Array<enums.InputThemeSettings>;
    }) => enums.Theme;
    /** Unique theme ID used to generate [theme deep links](https://core.telegram.org/api/links#theme-links), can be empty to autogenerate a random ID. */
    slug: string;
    /** Theme name */
    title: string;
    /** Theme file */
    document?: enums.InputDocument;
    /** Theme settings, multiple values can be provided for the different base themes (day/night mode, etc). */
    settings?: Array<enums.InputThemeSettings>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        slug: string;
        title: string;
        document?: enums.InputDocument;
        settings?: Array<enums.InputThemeSettings>;
    });
}
/** Update theme */
export declare class account_updateTheme_ extends Function_<enums.Theme> {
    static __F: (params: {
        format: string;
        theme: enums.InputTheme;
        slug?: string;
        title?: string;
        document?: enums.InputDocument;
        settings?: Array<enums.InputThemeSettings>;
    }) => enums.Theme;
    /** Theme format, a string that identifies the theming engines supported by the client */
    format: string;
    /** Theme to update */
    theme: enums.InputTheme;
    /** Unique theme ID */
    slug?: string;
    /** Theme name */
    title?: string;
    /** Theme file */
    document?: enums.InputDocument;
    /** Theme settings */
    settings?: Array<enums.InputThemeSettings>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        format: string;
        theme: enums.InputTheme;
        slug?: string;
        title?: string;
        document?: enums.InputDocument;
        settings?: Array<enums.InputThemeSettings>;
    });
}
/** Save a theme */
export declare class account_saveTheme_ extends Function_<boolean> {
    static __F: (params: {
        theme: enums.InputTheme;
        unsave: boolean;
    }) => boolean;
    /** Theme to save */
    theme: enums.InputTheme;
    /** Unsave */
    unsave: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        theme: enums.InputTheme;
        unsave: boolean;
    });
}
/** Install a theme */
export declare class account_installTheme_ extends Function_<boolean> {
    static __F: (params?: {
        dark?: true;
        theme?: enums.InputTheme;
        format?: string;
        base_theme?: enums.BaseTheme;
    }) => boolean;
    /** Whether to install the dark version */
    dark?: true;
    /** Theme to install */
    theme?: enums.InputTheme;
    /** Theme format, a string that identifies the theming engines supported by the client */
    format?: string;
    /** Indicates a basic theme provided by all clients */
    base_theme?: enums.BaseTheme;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        dark?: true;
        theme?: enums.InputTheme;
        format?: string;
        base_theme?: enums.BaseTheme;
    });
}
/** Get theme information */
export declare class account_getTheme_ extends Function_<enums.Theme> {
    static __F: (params: {
        format: string;
        theme: enums.InputTheme;
    }) => enums.Theme;
    /** Theme format, a string that identifies the theming engines supported by the client */
    format: string;
    /** Theme */
    theme: enums.InputTheme;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        format: string;
        theme: enums.InputTheme;
    });
}
/** Get installed themes */
export declare class account_getThemes_ extends Function_<enums.account.Themes> {
    static __F: (params: {
        format: string;
        hash: bigint;
    }) => enums.account.Themes;
    /** Theme format, a string that identifies the theming engines supported by the client */
    format: string;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        format: string;
        hash: bigint;
    });
}
/** Set sensitive content settings (for viewing or hiding NSFW content) */
export declare class account_setContentSettings_ extends Function_<boolean> {
    static __F: (params?: {
        sensitive_enabled?: true;
    }) => boolean;
    /** Enable NSFW content */
    sensitive_enabled?: true;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        sensitive_enabled?: true;
    });
}
/** Get sensitive content settings */
export declare class account_getContentSettings_ extends Function_<enums.account.ContentSettings> {
    static __F: () => enums.account.ContentSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get info about multiple [wallpapers](https://core.telegram.org/api/wallpapers) */
export declare class account_getMultiWallPapers_ extends Function_<enums.WallPaper[]> {
    static __F: (params: {
        wallpapers: Array<enums.InputWallPaper>;
    }) => enums.WallPaper[];
    /** [Wallpapers](https://core.telegram.org/api/wallpapers) to fetch info about */
    wallpapers: Array<enums.InputWallPaper>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        wallpapers: Array<enums.InputWallPaper>;
    });
}
/** Get global privacy settings */
export declare class account_getGlobalPrivacySettings_ extends Function_<enums.GlobalPrivacySettings> {
    static __F: () => enums.GlobalPrivacySettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Set global privacy settings */
export declare class account_setGlobalPrivacySettings_ extends Function_<enums.GlobalPrivacySettings> {
    static __F: (params: {
        settings: enums.GlobalPrivacySettings;
    }) => enums.GlobalPrivacySettings;
    /** Global privacy settings */
    settings: enums.GlobalPrivacySettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        settings: enums.GlobalPrivacySettings;
    });
}
/** Report a profile photo of a dialog */
export declare class account_reportProfilePhoto_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        photo_id: enums.InputPhoto;
        reason: enums.ReportReason;
        message: string;
    }) => boolean;
    /** The dialog */
    peer: enums.InputPeer;
    /** Dialog photo ID */
    photo_id: enums.InputPhoto;
    /** Report reason */
    reason: enums.ReportReason;
    /** Comment for report moderation */
    message: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        photo_id: enums.InputPhoto;
        reason: enums.ReportReason;
        message: string;
    });
}
/** Initiate a 2FA password reset: can only be used if the user is already logged-in, [see here for more info »](https://core.telegram.org/api/srp#password-reset) */
export declare class account_resetPassword_ extends Function_<enums.account.ResetPasswordResult> {
    static __F: () => enums.account.ResetPasswordResult;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Abort a pending 2FA password reset, [see here for more info »](https://core.telegram.org/api/srp#password-reset) */
export declare class account_declinePasswordReset_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get all available chat [themes »](https://core.telegram.org/api/themes). */
export declare class account_getChatThemes_ extends Function_<enums.account.Themes> {
    static __F: (params: {
        hash: bigint;
    }) => enums.account.Themes;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Set time-to-live of current session */
export declare class account_setAuthorizationTTL_ extends Function_<boolean> {
    static __F: (params: {
        authorization_ttl_days: number;
    }) => boolean;
    /** Time-to-live of current session in days */
    authorization_ttl_days: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        authorization_ttl_days: number;
    });
}
/** Change settings related to a session. */
export declare class account_changeAuthorizationSettings_ extends Function_<boolean> {
    static __F: (params: {
        confirmed?: true;
        hash: bigint;
        encrypted_requests_disabled?: boolean;
        call_requests_disabled?: boolean;
    }) => boolean;
    /** If set, [confirms a newly logged in session »](https://core.telegram.org/api/auth#confirming-login). */
    confirmed?: true;
    /** Session ID from the [authorization](https://core.telegram.org/constructor/authorization) constructor, fetchable using [account.getAuthorizations](https://core.telegram.org/method/account.getAuthorizations) */
    hash: bigint;
    /** Whether to enable or disable receiving encrypted chats: if the flag is not set, the previous setting is not changed */
    encrypted_requests_disabled?: boolean;
    /** Whether to enable or disable receiving calls: if the flag is not set, the previous setting is not changed */
    call_requests_disabled?: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        confirmed?: true;
        hash: bigint;
        encrypted_requests_disabled?: boolean;
        call_requests_disabled?: boolean;
    });
}
/** Fetch saved notification sounds */
export declare class account_getSavedRingtones_ extends Function_<enums.account.SavedRingtones> {
    static __F: (params: {
        hash: bigint;
    }) => enums.account.SavedRingtones;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Save or remove saved notification sound. */
export declare class account_saveRingtone_ extends Function_<enums.account.SavedRingtone> {
    static __F: (params: {
        id: enums.InputDocument;
        unsave: boolean;
    }) => enums.account.SavedRingtone;
    /** Notification sound uploaded using [account.uploadRingtone](https://core.telegram.org/method/account.uploadRingtone) */
    id: enums.InputDocument;
    /** Whether to add or delete the notification sound */
    unsave: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: enums.InputDocument;
        unsave: boolean;
    });
}
/** Upload notification sound, use [account.saveRingtone](https://core.telegram.org/method/account.saveRingtone) to convert it and add it to the list of saved notification sounds. */
export declare class account_uploadRingtone_ extends Function_<enums.Document> {
    static __F: (params: {
        file: enums.InputFile;
        file_name: string;
        mime_type: string;
    }) => enums.Document;
    /** Notification sound */
    file: enums.InputFile;
    /** File name */
    file_name: string;
    /** MIME type of file */
    mime_type: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        file: enums.InputFile;
        file_name: string;
        mime_type: string;
    });
}
/** Set an [emoji status](https://core.telegram.org/api/emoji-status) */
export declare class account_updateEmojiStatus_ extends Function_<boolean> {
    static __F: (params: {
        emoji_status: enums.EmojiStatus;
    }) => boolean;
    /** [Emoji status](https://core.telegram.org/api/emoji-status) to set */
    emoji_status: enums.EmojiStatus;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        emoji_status: enums.EmojiStatus;
    });
}
/** Get a list of default suggested [emoji statuses](https://core.telegram.org/api/emoji-status) */
export declare class account_getDefaultEmojiStatuses_ extends Function_<enums.account.EmojiStatuses> {
    static __F: (params: {
        hash: bigint;
    }) => enums.account.EmojiStatuses;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Get recently used [emoji statuses](https://core.telegram.org/api/emoji-status) */
export declare class account_getRecentEmojiStatuses_ extends Function_<enums.account.EmojiStatuses> {
    static __F: (params: {
        hash: bigint;
    }) => enums.account.EmojiStatuses;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Clears list of recently used [emoji statuses](https://core.telegram.org/api/emoji-status) */
export declare class account_clearRecentEmojiStatuses_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Reorder usernames associated with the currently logged-in user. */
export declare class account_reorderUsernames_ extends Function_<boolean> {
    static __F: (params: {
        order: Array<string>;
    }) => boolean;
    /** The new order for active usernames. All active usernames must be specified. */
    order: Array<string>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        order: Array<string>;
    });
}
/** Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to the currently logged-in user. */
export declare class account_toggleUsername_ extends Function_<boolean> {
    static __F: (params: {
        username: string;
        active: boolean;
    }) => boolean;
    /** Username */
    username: string;
    /** Whether to activate or deactivate it */
    active: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        username: string;
        active: boolean;
    });
}
/** Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be [used as profile picture](https://core.telegram.org/api/files#sticker-profile-pictures) */
export declare class account_getDefaultProfilePhotoEmojis_ extends Function_<enums.EmojiList> {
    static __F: (params: {
        hash: bigint;
    }) => enums.EmojiList;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be [used as group picture](https://core.telegram.org/api/files#sticker-profile-pictures) */
export declare class account_getDefaultGroupPhotoEmojis_ extends Function_<enums.EmojiList> {
    static __F: (params: {
        hash: bigint;
    }) => enums.EmojiList;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Get autosave settings */
export declare class account_getAutoSaveSettings_ extends Function_<enums.account.AutoSaveSettings> {
    static __F: () => enums.account.AutoSaveSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Modify autosave settings */
export declare class account_saveAutoSaveSettings_ extends Function_<boolean> {
    static __F: (params: {
        users?: true;
        chats?: true;
        broadcasts?: true;
        peer?: enums.InputPeer;
        settings: enums.AutoSaveSettings;
    }) => boolean;
    /** Whether the new settings should affect all private chats */
    users?: true;
    /** Whether the new settings should affect all groups */
    chats?: true;
    /** Whether the new settings should affect all [channels](https://core.telegram.org/api/channel) */
    broadcasts?: true;
    /** Whether the new settings should affect a specific peer */
    peer?: enums.InputPeer;
    /** The new autosave settings */
    settings: enums.AutoSaveSettings;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        users?: true;
        chats?: true;
        broadcasts?: true;
        peer?: enums.InputPeer;
        settings: enums.AutoSaveSettings;
    });
}
/** Clear all peer-specific autosave settings. */
export declare class account_deleteAutoSaveExceptions_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Invalidate the specified login codes, see [here »](https://core.telegram.org/api/auth#invalidating-login-codes) for more info. */
export declare class account_invalidateSignInCodes_ extends Function_<boolean> {
    static __F: (params: {
        codes: Array<string>;
    }) => boolean;
    /** The login codes to invalidate. */
    codes: Array<string>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        codes: Array<string>;
    });
}
/** Update the [accent color and background custom emoji »](https://core.telegram.org/api/colors) of the current account. */
export declare class account_updateColor_ extends Function_<boolean> {
    static __F: (params?: {
        for_profile?: true;
        color?: number;
        background_emoji_id?: bigint;
    }) => boolean;
    /** Whether to change the accent color emoji pattern of the profile page; otherwise, the accent color and emoji pattern of messages will be changed. */
    for_profile?: true;
    /** [ID of the accent color palette »](https://core.telegram.org/api/colors) to use (not RGB24, see [here »](https://core.telegram.org/api/colors) for more info). */
    color?: number;
    /** Custom emoji ID used in the accent color pattern. */
    background_emoji_id?: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        for_profile?: true;
        color?: number;
        background_emoji_id?: bigint;
    });
}
/** Get a set of suggested [custom emoji stickers](https://core.telegram.org/api/custom-emoji) that can be used in an [accent color pattern](https://core.telegram.org/api/colors). */
export declare class account_getDefaultBackgroundEmojis_ extends Function_<enums.EmojiList> {
    static __F: (params: {
        hash: bigint;
    }) => enums.EmojiList;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Get a list of default suggested [channel emoji statuses](https://core.telegram.org/api/emoji-status). */
export declare class account_getChannelDefaultEmojiStatuses_ extends Function_<enums.account.EmojiStatuses> {
    static __F: (params: {
        hash: bigint;
    }) => enums.account.EmojiStatuses;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Returns fetch the full list of [custom emoji IDs »](https://core.telegram.org/api/custom-emoji) that cannot be used in [channel emoji statuses »](https://core.telegram.org/api/emoji-status). */
export declare class account_getChannelRestrictedStatusEmojis_ extends Function_<enums.EmojiList> {
    static __F: (params: {
        hash: bigint;
    }) => enums.EmojiList;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
export declare class account_updateBusinessWorkHours_ extends Function_<boolean> {
    static __F: (params?: {
        business_work_hours?: enums.BusinessWorkHours;
    }) => boolean;
    business_work_hours?: enums.BusinessWorkHours;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        business_work_hours?: enums.BusinessWorkHours;
    });
}
export declare class account_updateBusinessLocation_ extends Function_<boolean> {
    static __F: (params?: {
        geo_point?: enums.InputGeoPoint;
        address?: string;
    }) => boolean;
    geo_point?: enums.InputGeoPoint;
    address?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        geo_point?: enums.InputGeoPoint;
        address?: string;
    });
}
export declare class account_updateBusinessGreetingMessage_ extends Function_<boolean> {
    static __F: (params?: {
        message?: enums.InputBusinessGreetingMessage;
    }) => boolean;
    message?: enums.InputBusinessGreetingMessage;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        message?: enums.InputBusinessGreetingMessage;
    });
}
export declare class account_updateBusinessAwayMessage_ extends Function_<boolean> {
    static __F: (params?: {
        message?: enums.InputBusinessAwayMessage;
    }) => boolean;
    message?: enums.InputBusinessAwayMessage;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        message?: enums.InputBusinessAwayMessage;
    });
}
export declare class account_updateConnectedBot_ extends Function_<enums.Updates> {
    static __F: (params: {
        can_reply?: true;
        deleted?: true;
        bot: enums.InputUser;
        recipients: enums.InputBusinessRecipients;
    }) => enums.Updates;
    can_reply?: true;
    deleted?: true;
    bot: enums.InputUser;
    recipients: enums.InputBusinessRecipients;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        can_reply?: true;
        deleted?: true;
        bot: enums.InputUser;
        recipients: enums.InputBusinessRecipients;
    });
}
export declare class account_getConnectedBots_ extends Function_<enums.account.ConnectedBots> {
    static __F: () => enums.account.ConnectedBots;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Returns basic user info according to their identifiers. */
export declare class users_getUsers_ extends Function_<enums.User[]> {
    static __F: (params: {
        id: Array<enums.InputUser>;
    }) => enums.User[];
    /** List of user identifiers */
    id: Array<enums.InputUser>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: Array<enums.InputUser>;
    });
}
/** Returns extended user info by ID. */
export declare class users_getFullUser_ extends Function_<enums.users.UserFull> {
    static __F: (params: {
        id: enums.InputUser;
    }) => enums.users.UserFull;
    /** User ID */
    id: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: enums.InputUser;
    });
}
/** Notify the user that the sent [passport](https://core.telegram.org/passport) data contains some errors The user will not be able to re-submit their Passport data to you until the errors are fixed (the contents of the field for which you returned the error must change). */
export declare class users_setSecureValueErrors_ extends Function_<boolean> {
    static __F: (params: {
        id: enums.InputUser;
        errors: Array<enums.SecureValueError>;
    }) => boolean;
    /** The user */
    id: enums.InputUser;
    /** Errors */
    errors: Array<enums.SecureValueError>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: enums.InputUser;
        errors: Array<enums.SecureValueError>;
    });
}
export declare class users_getIsPremiumRequiredToContact_ extends Function_<boolean[]> {
    static __F: (params: {
        id: Array<enums.InputUser>;
    }) => boolean[];
    id: Array<enums.InputUser>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: Array<enums.InputUser>;
    });
}
/** Get the telegram IDs of all contacts.
Returns an array of Telegram user IDs for all contacts (0 if a contact does not have an associated Telegram account or have hidden their account using privacy settings). */
export declare class contacts_getContactIDs_ extends Function_<number[]> {
    static __F: (params: {
        hash: bigint;
    }) => number[];
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Use this method to obtain the online statuses of all contacts with an accessible Telegram account. */
export declare class contacts_getStatuses_ extends Function_<enums.ContactStatus[]> {
    static __F: () => enums.ContactStatus[];
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Returns the current user's contact list. */
export declare class contacts_getContacts_ extends Function_<enums.contacts.Contacts> {
    static __F: (params: {
        hash: bigint;
    }) => enums.contacts.Contacts;
    /** If there already is a full contact list on the client, a [hash](https://core.telegram.org/api/offsets#hash-generation) of a the list of contact IDs in ascending order may be passed in this parameter. If the contact set was not changed, [(contacts.contactsNotModified)](https://core.telegram.org/constructor/contacts.contactsNotModified) will be returned. */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Imports contacts: saves a full list on the server, adds already registered contacts to the contact list, returns added contacts and their info. */
export declare class contacts_importContacts_ extends Function_<enums.contacts.ImportedContacts> {
    static __F: (params: {
        contacts: Array<enums.InputContact>;
    }) => enums.contacts.ImportedContacts;
    /** List of contacts to import */
    contacts: Array<enums.InputContact>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        contacts: Array<enums.InputContact>;
    });
}
/** Deletes several contacts from the list. */
export declare class contacts_deleteContacts_ extends Function_<enums.Updates> {
    static __F: (params: {
        id: Array<enums.InputUser>;
    }) => enums.Updates;
    /** User ID list */
    id: Array<enums.InputUser>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: Array<enums.InputUser>;
    });
}
/** Delete contacts by phone number */
export declare class contacts_deleteByPhones_ extends Function_<boolean> {
    static __F: (params: {
        phones: Array<string>;
    }) => boolean;
    /** Phone numbers */
    phones: Array<string>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phones: Array<string>;
    });
}
/** Adds a peer to a blocklist, see [here »](https://core.telegram.org/api/block) for more info. */
export declare class contacts_block_ extends Function_<boolean> {
    static __F: (params: {
        my_stories_from?: true;
        id: enums.InputPeer;
    }) => boolean;
    /** Whether the peer should be added to the story blocklist; if not set, the peer will be added to the main blocklist, see [here »](https://core.telegram.org/api/block) for more info. */
    my_stories_from?: true;
    /** Peer */
    id: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        my_stories_from?: true;
        id: enums.InputPeer;
    });
}
/** Deletes a peer from a blocklist, see [here »](https://core.telegram.org/api/block) for more info. */
export declare class contacts_unblock_ extends Function_<boolean> {
    static __F: (params: {
        my_stories_from?: true;
        id: enums.InputPeer;
    }) => boolean;
    /** Whether the peer should be removed from the story blocklist; if not set, the peer will be removed from the main blocklist, see [here »](https://core.telegram.org/api/block) for more info. */
    my_stories_from?: true;
    /** Peer */
    id: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        my_stories_from?: true;
        id: enums.InputPeer;
    });
}
/** Returns the list of blocked users. */
export declare class contacts_getBlocked_ extends Function_<enums.contacts.Blocked> {
    static __F: (params: {
        my_stories_from?: true;
        offset: number;
        limit: number;
    }) => enums.contacts.Blocked;
    /** Whether to fetch the story blocklist; if not set, will fetch the main blocklist. See [here »](https://core.telegram.org/api/block) for differences between the two. */
    my_stories_from?: true;
    /** The number of list elements to be skipped */
    offset: number;
    /** The number of list elements to be returned */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        my_stories_from?: true;
        offset: number;
        limit: number;
    });
}
/** Returns users found by username substring. */
export declare class contacts_search_ extends Function_<enums.contacts.Found> {
    static __F: (params: {
        q: string;
        limit: number;
    }) => enums.contacts.Found;
    /** Target substring */
    q: string;
    /** Maximum number of users to be returned */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        q: string;
        limit: number;
    });
}
/** Resolve a @username to get peer info */
export declare class contacts_resolveUsername_ extends Function_<enums.contacts.ResolvedPeer> {
    static __F: (params: {
        username: string;
    }) => enums.contacts.ResolvedPeer;
    /** @username to resolve */
    username: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        username: string;
    });
}
/** Get most used peers */
export declare class contacts_getTopPeers_ extends Function_<enums.contacts.TopPeers> {
    static __F: (params: {
        correspondents?: true;
        bots_pm?: true;
        bots_inline?: true;
        phone_calls?: true;
        forward_users?: true;
        forward_chats?: true;
        groups?: true;
        channels?: true;
        offset: number;
        limit: number;
        hash: bigint;
    }) => enums.contacts.TopPeers;
    /** Users we've chatted most frequently with */
    correspondents?: true;
    /** Most used bots */
    bots_pm?: true;
    /** Most used inline bots */
    bots_inline?: true;
    /** Most frequently called users */
    phone_calls?: true;
    /** Users to which the users often forwards messages to */
    forward_users?: true;
    /** Chats to which the users often forwards messages to */
    forward_chats?: true;
    /** Often-opened groups and supergroups */
    groups?: true;
    /** Most frequently visited channels */
    channels?: true;
    /** Offset for [pagination](https://core.telegram.org/api/offsets) */
    offset: number;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        correspondents?: true;
        bots_pm?: true;
        bots_inline?: true;
        phone_calls?: true;
        forward_users?: true;
        forward_chats?: true;
        groups?: true;
        channels?: true;
        offset: number;
        limit: number;
        hash: bigint;
    });
}
/** Reset [rating](https://core.telegram.org/api/top-rating) of top peer */
export declare class contacts_resetTopPeerRating_ extends Function_<boolean> {
    static __F: (params: {
        category: enums.TopPeerCategory;
        peer: enums.InputPeer;
    }) => boolean;
    /** Top peer category */
    category: enums.TopPeerCategory;
    /** Peer whose rating should be reset */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        category: enums.TopPeerCategory;
        peer: enums.InputPeer;
    });
}
/** Removes all contacts without an associated Telegram account. */
export declare class contacts_resetSaved_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get all contacts, requires a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export declare class contacts_getSaved_ extends Function_<enums.SavedContact[]> {
    static __F: () => enums.SavedContact[];
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Enable/disable [top peers](https://core.telegram.org/api/top-rating) */
export declare class contacts_toggleTopPeers_ extends Function_<boolean> {
    static __F: (params: {
        enabled: boolean;
    }) => boolean;
    /** Enable/disable */
    enabled: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        enabled: boolean;
    });
}
/** Add an existing telegram user as contact. */
export declare class contacts_addContact_ extends Function_<enums.Updates> {
    static __F: (params: {
        add_phone_privacy_exception?: true;
        id: enums.InputUser;
        first_name: string;
        last_name: string;
        phone: string;
    }) => enums.Updates;
    /** Allow the other user to see our phone number? */
    add_phone_privacy_exception?: true;
    /** Telegram ID of the other user */
    id: enums.InputUser;
    /** First name */
    first_name: string;
    /** Last name */
    last_name: string;
    /** User's phone number, may be omitted to simply add the user to the contact list, without a phone number. */
    phone: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        add_phone_privacy_exception?: true;
        id: enums.InputUser;
        first_name: string;
        last_name: string;
        phone: string;
    });
}
/** If the [add contact action bar is active](https://core.telegram.org/api/action-bar#add-contact), add that user as contact */
export declare class contacts_acceptContact_ extends Function_<enums.Updates> {
    static __F: (params: {
        id: enums.InputUser;
    }) => enums.Updates;
    /** The user to add as contact */
    id: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: enums.InputUser;
    });
}
/** Get users and geochats near you, see [here »](https://core.telegram.org/api/nearby) for more info. */
export declare class contacts_getLocated_ extends Function_<enums.Updates> {
    static __F: (params: {
        background?: true;
        geo_point: enums.InputGeoPoint;
        self_expires?: number;
    }) => enums.Updates;
    /** While the geolocation of the current user is public, clients should update it in the background every half-an-hour or so, while setting this flag.
    Do this only if the new location is more than 1 KM away from the previous one, or if the previous location is unknown. */
    background?: true;
    /** Geolocation */
    geo_point: enums.InputGeoPoint;
    /** If set, the geolocation of the current user will be public for the specified number of seconds; pass 0x7fffffff to disable expiry, 0 to make the current geolocation private; if the flag isn't set, no changes will be applied. */
    self_expires?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        background?: true;
        geo_point: enums.InputGeoPoint;
        self_expires?: number;
    });
}
/** Stop getting notifications about [discussion replies](https://core.telegram.org/api/discussion) of a certain user in `@replies` */
export declare class contacts_blockFromReplies_ extends Function_<enums.Updates> {
    static __F: (params: {
        delete_message?: true;
        delete_history?: true;
        report_spam?: true;
        msg_id: number;
    }) => enums.Updates;
    /** Whether to delete the specified message as well */
    delete_message?: true;
    /** Whether to delete all `@replies` messages from this user as well */
    delete_history?: true;
    /** Whether to also report this user for spam */
    report_spam?: true;
    /** ID of the message in the [@replies](https://core.telegram.org/api/discussion#replies) chat */
    msg_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        delete_message?: true;
        delete_history?: true;
        report_spam?: true;
        msg_id: number;
    });
}
/** Resolve a phone number to get user info, if their privacy settings allow it. */
export declare class contacts_resolvePhone_ extends Function_<enums.contacts.ResolvedPeer> {
    static __F: (params: {
        phone: string;
    }) => enums.contacts.ResolvedPeer;
    /** Phone number in international format, possibly obtained from a [phone number deep link](https://core.telegram.org/api/links#phone-number-links). */
    phone: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        phone: string;
    });
}
/** Generates a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links) for the currently logged-in user. */
export declare class contacts_exportContactToken_ extends Function_<enums.ExportedContactToken> {
    static __F: () => enums.ExportedContactToken;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Obtain user info from a [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links). */
export declare class contacts_importContactToken_ extends Function_<enums.User> {
    static __F: (params: {
        token: string;
    }) => enums.User;
    /** The token extracted from the [temporary profile link](https://core.telegram.org/api/links#temporary-profile-links). */
    token: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        token: string;
    });
}
/** Edit the [close friends list, see here »](https://core.telegram.org/api/privacy) for more info. */
export declare class contacts_editCloseFriends_ extends Function_<boolean> {
    static __F: (params: {
        id: Array<bigint>;
    }) => boolean;
    /** Full list of user IDs of close friends, see [here](https://core.telegram.org/api/privacy) for more info. */
    id: Array<bigint>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: Array<bigint>;
    });
}
/** Replace the contents of an entire [blocklist, see here for more info »](https://core.telegram.org/api/block). */
export declare class contacts_setBlocked_ extends Function_<boolean> {
    static __F: (params: {
        my_stories_from?: true;
        id: Array<enums.InputPeer>;
        limit: number;
    }) => boolean;
    /** Whether to edit the story blocklist; if not set, will edit the main blocklist. See [here »](https://core.telegram.org/api/block) for differences between the two. */
    my_stories_from?: true;
    /** Full content of the blocklist. */
    id: Array<enums.InputPeer>;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        my_stories_from?: true;
        id: Array<enums.InputPeer>;
        limit: number;
    });
}
/** Returns the list of messages by their IDs. */
export declare class messages_getMessages_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        id: Array<enums.InputMessage>;
    }) => enums.messages.Messages;
    /** Message ID list */
    id: Array<enums.InputMessage>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: Array<enums.InputMessage>;
    });
}
/** Returns the current user dialog list. */
export declare class messages_getDialogs_ extends Function_<enums.messages.Dialogs> {
    static __F: (params: {
        exclude_pinned?: true;
        folder_id?: number;
        offset_date: number;
        offset_id: number;
        offset_peer: enums.InputPeer;
        limit: number;
        hash: bigint;
    }) => enums.messages.Dialogs;
    /** Exclude pinned dialogs */
    exclude_pinned?: true;
    /** [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) */
    folder_id?: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_date: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) (`top_message` ID used for pagination) */
    offset_id: number;
    /** [Offset peer for pagination](https://core.telegram.org/api/offsets) */
    offset_peer: enums.InputPeer;
    /** Number of list elements to be returned */
    limit: number;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        exclude_pinned?: true;
        folder_id?: number;
        offset_date: number;
        offset_id: number;
        offset_peer: enums.InputPeer;
        limit: number;
        hash: bigint;
    });
}
/** Returns the conversation history with one interlocutor / within a chat */
export declare class messages_getHistory_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        peer: enums.InputPeer;
        offset_id: number;
        offset_date: number;
        add_offset: number;
        limit: number;
        max_id: number;
        min_id: number;
        hash: bigint;
    }) => enums.messages.Messages;
    /** Target peer */
    peer: enums.InputPeer;
    /** Only return messages starting from the specified message ID */
    offset_id: number;
    /** Only return messages sent before the specified date */
    offset_date: number;
    /** Number of list elements to be skipped, negative values are also accepted. */
    add_offset: number;
    /** Number of results to return */
    limit: number;
    /** If a positive value was transferred, the method will return only messages with IDs less than **max\_id** */
    max_id: number;
    /** If a positive value was transferred, the method will return only messages with IDs more than **min\_id** */
    min_id: number;
    /** [Result hash](https://core.telegram.org/api/offsets) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        offset_id: number;
        offset_date: number;
        add_offset: number;
        limit: number;
        max_id: number;
        min_id: number;
        hash: bigint;
    });
}
/** Search for messages. */
export declare class messages_search_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        peer: enums.InputPeer;
        q: string;
        from_id?: enums.InputPeer;
        saved_peer_id?: enums.InputPeer;
        saved_reaction?: Array<enums.Reaction>;
        top_msg_id?: number;
        filter: enums.MessagesFilter;
        min_date: number;
        max_date: number;
        offset_id: number;
        add_offset: number;
        limit: number;
        max_id: number;
        min_id: number;
        hash: bigint;
    }) => enums.messages.Messages;
    /** User or chat, histories with which are searched, or [(inputPeerEmpty)](https://core.telegram.org/constructor/inputPeerEmpty) constructor to search in all private chats and [normal groups (not channels) »](https://core.telegram.org/api/channel). Use [messages.searchGlobal](https://core.telegram.org/method/messages.searchGlobal) to search globally in all chats, groups, supergroups and channels. */
    peer: enums.InputPeer;
    /** Text search request */
    q: string;
    /** Only return messages sent by the specified user ID */
    from_id?: enums.InputPeer;
    /** Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. */
    saved_peer_id?: enums.InputPeer;
    saved_reaction?: Array<enums.Reaction>;
    /** [Thread ID](https://core.telegram.org/api/threads) */
    top_msg_id?: number;
    /** Filter to return only specified message types */
    filter: enums.MessagesFilter;
    /** If a positive value was transferred, only messages with a sending date bigger than the transferred one will be returned */
    min_date: number;
    /** If a positive value was transferred, only messages with a sending date smaller than the transferred one will be returned */
    max_date: number;
    /** Only return messages starting from the specified message ID */
    offset_id: number;
    /** [Additional offset](https://core.telegram.org/api/offsets) */
    add_offset: number;
    /** [Number of results to return](https://core.telegram.org/api/offsets) */
    limit: number;
    /** [Maximum message ID to return](https://core.telegram.org/api/offsets) */
    max_id: number;
    /** [Minimum message ID to return](https://core.telegram.org/api/offsets) */
    min_id: number;
    /** [Hash](https://core.telegram.org/api/offsets) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        q: string;
        from_id?: enums.InputPeer;
        saved_peer_id?: enums.InputPeer;
        saved_reaction?: Array<enums.Reaction>;
        top_msg_id?: number;
        filter: enums.MessagesFilter;
        min_date: number;
        max_date: number;
        offset_id: number;
        add_offset: number;
        limit: number;
        max_id: number;
        min_id: number;
        hash: bigint;
    });
}
/** Marks message history as read. */
export declare class messages_readHistory_ extends Function_<enums.messages.AffectedMessages> {
    static __F: (params: {
        peer: enums.InputPeer;
        max_id: number;
    }) => enums.messages.AffectedMessages;
    /** Target user or group */
    peer: enums.InputPeer;
    /** If a positive value is passed, only messages with identifiers less or equal than the given one will be read */
    max_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        max_id: number;
    });
}
/** Deletes communication history. */
export declare class messages_deleteHistory_ extends Function_<enums.messages.AffectedHistory> {
    static __F: (params: {
        just_clear?: true;
        revoke?: true;
        peer: enums.InputPeer;
        max_id: number;
        min_date?: number;
        max_date?: number;
    }) => enums.messages.AffectedHistory;
    /** Just clear history for the current user, without actually removing messages for every chat user */
    just_clear?: true;
    /** Whether to delete the message history for all chat participants */
    revoke?: true;
    /** User or chat, communication history of which will be deleted */
    peer: enums.InputPeer;
    /** Maximum ID of message to delete */
    max_id: number;
    /** Delete all messages newer than this UNIX timestamp */
    min_date?: number;
    /** Delete all messages older than this UNIX timestamp */
    max_date?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        just_clear?: true;
        revoke?: true;
        peer: enums.InputPeer;
        max_id: number;
        min_date?: number;
        max_date?: number;
    });
}
/** Deletes messages by their identifiers. */
export declare class messages_deleteMessages_ extends Function_<enums.messages.AffectedMessages> {
    static __F: (params: {
        revoke?: true;
        id: Array<number>;
    }) => enums.messages.AffectedMessages;
    /** Whether to delete messages for all participants of the chat */
    revoke?: true;
    /** Message ID list */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        revoke?: true;
        id: Array<number>;
    });
}
/** Confirms receipt of messages by a client, cancels PUSH-notification sending. */
export declare class messages_receivedMessages_ extends Function_<enums.ReceivedNotifyMessage[]> {
    static __F: (params: {
        max_id: number;
    }) => enums.ReceivedNotifyMessage[];
    /** Maximum message ID available in a client. */
    max_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        max_id: number;
    });
}
/** Sends a current user typing event (see [SendMessageAction](https://core.telegram.org/type/SendMessageAction) for all event types) to a conversation partner or group. */
export declare class messages_setTyping_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        top_msg_id?: number;
        action: enums.SendMessageAction;
    }) => boolean;
    /** Target user or group */
    peer: enums.InputPeer;
    /** [Topic ID](https://core.telegram.org/api/threads) */
    top_msg_id?: number;
    /** Type of action */
    action: enums.SendMessageAction;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        top_msg_id?: number;
        action: enums.SendMessageAction;
    });
}
/** Sends a message to a chat */
export declare class messages_sendMessage_ extends Function_<enums.Updates> {
    static __F: (params: {
        no_webpage?: true;
        silent?: true;
        background?: true;
        clear_draft?: true;
        noforwards?: true;
        update_stickersets_order?: true;
        invert_media?: true;
        peer: enums.InputPeer;
        reply_to?: enums.InputReplyTo;
        message: string;
        random_id: bigint;
        reply_markup?: enums.ReplyMarkup;
        entities?: Array<enums.MessageEntity>;
        schedule_date?: number;
        send_as?: enums.InputPeer;
        quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    }) => enums.Updates;
    /** Set this flag to disable generation of the webpage preview */
    no_webpage?: true;
    /** Send this message silently (no notifications for the receivers) */
    silent?: true;
    /** Send this message as background message */
    background?: true;
    /** Clear the draft field */
    clear_draft?: true;
    /** Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled */
    noforwards?: true;
    /** Whether to move used stickersets to top, [see here for more info on this flag »](https://core.telegram.org/api/stickers#recent-stickersets) */
    update_stickersets_order?: true;
    /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
    invert_media?: true;
    /** The destination where the message will be sent */
    peer: enums.InputPeer;
    /** If set, indicates that the message should be sent in reply to the specified message or story. */
    reply_to?: enums.InputReplyTo;
    /** The message */
    message: string;
    /** Unique client message ID required to prevent message resending */
    random_id: bigint;
    /** Reply markup for sending bot buttons */
    reply_markup?: enums.ReplyMarkup;
    /** Message [entities](https://core.telegram.org/api/entities) for sending styled text */
    entities?: Array<enums.MessageEntity>;
    /** Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) */
    schedule_date?: number;
    /** Send this message as the specified peer */
    send_as?: enums.InputPeer;
    quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        no_webpage?: true;
        silent?: true;
        background?: true;
        clear_draft?: true;
        noforwards?: true;
        update_stickersets_order?: true;
        invert_media?: true;
        peer: enums.InputPeer;
        reply_to?: enums.InputReplyTo;
        message: string;
        random_id: bigint;
        reply_markup?: enums.ReplyMarkup;
        entities?: Array<enums.MessageEntity>;
        schedule_date?: number;
        send_as?: enums.InputPeer;
        quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    });
}
/** Send a media */
export declare class messages_sendMedia_ extends Function_<enums.Updates> {
    static __F: (params: {
        silent?: true;
        background?: true;
        clear_draft?: true;
        noforwards?: true;
        update_stickersets_order?: true;
        invert_media?: true;
        peer: enums.InputPeer;
        reply_to?: enums.InputReplyTo;
        media: enums.InputMedia;
        message: string;
        random_id: bigint;
        reply_markup?: enums.ReplyMarkup;
        entities?: Array<enums.MessageEntity>;
        schedule_date?: number;
        send_as?: enums.InputPeer;
        quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    }) => enums.Updates;
    /** Send message silently (no notification should be triggered) */
    silent?: true;
    /** Send message in background */
    background?: true;
    /** Clear the draft */
    clear_draft?: true;
    /** Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled */
    noforwards?: true;
    /** Whether to move used stickersets to top, [see here for more info on this flag »](https://core.telegram.org/api/stickers#recent-stickersets) */
    update_stickersets_order?: true;
    /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
    invert_media?: true;
    /** Destination */
    peer: enums.InputPeer;
    /** If set, indicates that the message should be sent in reply to the specified message or story. */
    reply_to?: enums.InputReplyTo;
    /** Attached media */
    media: enums.InputMedia;
    /** Caption */
    message: string;
    /** Random ID to avoid resending the same message */
    random_id: bigint;
    /** Reply markup for bot keyboards */
    reply_markup?: enums.ReplyMarkup;
    /** Message [entities](https://core.telegram.org/api/entities) for styled text */
    entities?: Array<enums.MessageEntity>;
    /** Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) */
    schedule_date?: number;
    /** Send this message as the specified peer */
    send_as?: enums.InputPeer;
    quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        silent?: true;
        background?: true;
        clear_draft?: true;
        noforwards?: true;
        update_stickersets_order?: true;
        invert_media?: true;
        peer: enums.InputPeer;
        reply_to?: enums.InputReplyTo;
        media: enums.InputMedia;
        message: string;
        random_id: bigint;
        reply_markup?: enums.ReplyMarkup;
        entities?: Array<enums.MessageEntity>;
        schedule_date?: number;
        send_as?: enums.InputPeer;
        quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    });
}
/** Forwards messages by their IDs. */
export declare class messages_forwardMessages_ extends Function_<enums.Updates> {
    static __F: (params: {
        silent?: true;
        background?: true;
        with_my_score?: true;
        drop_author?: true;
        drop_media_captions?: true;
        noforwards?: true;
        from_peer: enums.InputPeer;
        id: Array<number>;
        random_id: Array<bigint>;
        to_peer: enums.InputPeer;
        top_msg_id?: number;
        schedule_date?: number;
        send_as?: enums.InputPeer;
        quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    }) => enums.Updates;
    /** Whether to send messages silently (no notification will be triggered on the destination clients) */
    silent?: true;
    /** Whether to send the message in background */
    background?: true;
    /** When forwarding games, whether to include your score in the game */
    with_my_score?: true;
    /** Whether to forward messages without quoting the original author */
    drop_author?: true;
    /** Whether to strip captions from media */
    drop_media_captions?: true;
    /** Only for bots, disallows further re-forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled */
    noforwards?: true;
    /** Source of messages */
    from_peer: enums.InputPeer;
    /** IDs of messages */
    id: Array<number>;
    /** Random ID to prevent resending of messages */
    random_id: Array<bigint>;
    /** Destination peer */
    to_peer: enums.InputPeer;
    /** Destination [forum topic](https://core.telegram.org/api/forum#forum-topics) */
    top_msg_id?: number;
    /** Scheduled message date for scheduled messages */
    schedule_date?: number;
    /** Forward the messages as the specified peer */
    send_as?: enums.InputPeer;
    quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        silent?: true;
        background?: true;
        with_my_score?: true;
        drop_author?: true;
        drop_media_captions?: true;
        noforwards?: true;
        from_peer: enums.InputPeer;
        id: Array<number>;
        random_id: Array<bigint>;
        to_peer: enums.InputPeer;
        top_msg_id?: number;
        schedule_date?: number;
        send_as?: enums.InputPeer;
        quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    });
}
/** Report a new incoming chat for spam, if the [peer settings](https://core.telegram.org/constructor/peerSettings) of the chat allow us to do that */
export declare class messages_reportSpam_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
    }) => boolean;
    /** Peer to report */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
    });
}
/** Get peer settings */
export declare class messages_getPeerSettings_ extends Function_<enums.messages.PeerSettings> {
    static __F: (params: {
        peer: enums.InputPeer;
    }) => enums.messages.PeerSettings;
    /** The peer */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
    });
}
/** Report a message in a chat for violation of telegram's Terms of Service */
export declare class messages_report_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
        reason: enums.ReportReason;
        message: string;
    }) => boolean;
    /** Peer */
    peer: enums.InputPeer;
    /** IDs of messages to report */
    id: Array<number>;
    /** Why are these messages being reported */
    reason: enums.ReportReason;
    /** Comment for report moderation */
    message: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
        reason: enums.ReportReason;
        message: string;
    });
}
/** Returns chat basic info on their IDs. */
export declare class messages_getChats_ extends Function_<enums.messages.Chats> {
    static __F: (params: {
        id: Array<bigint>;
    }) => enums.messages.Chats;
    /** List of chat IDs */
    id: Array<bigint>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: Array<bigint>;
    });
}
/** Get full info about a [basic group](https://core.telegram.org/api/channel#basic-groups). */
export declare class messages_getFullChat_ extends Function_<enums.messages.ChatFull> {
    static __F: (params: {
        chat_id: bigint;
    }) => enums.messages.ChatFull;
    /** [Basic group](https://core.telegram.org/api/channel#basic-groups) ID. */
    chat_id: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chat_id: bigint;
    });
}
/** Changes chat name and sends a service message on it. */
export declare class messages_editChatTitle_ extends Function_<enums.Updates> {
    static __F: (params: {
        chat_id: bigint;
        title: string;
    }) => enums.Updates;
    /** Chat ID */
    chat_id: bigint;
    /** New chat name, different from the old one */
    title: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chat_id: bigint;
        title: string;
    });
}
/** Changes chat photo and sends a service message on it */
export declare class messages_editChatPhoto_ extends Function_<enums.Updates> {
    static __F: (params: {
        chat_id: bigint;
        photo: enums.InputChatPhoto;
    }) => enums.Updates;
    /** Chat ID */
    chat_id: bigint;
    /** Photo to be set */
    photo: enums.InputChatPhoto;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chat_id: bigint;
        photo: enums.InputChatPhoto;
    });
}
/** Adds a user to a chat and sends a service message on it. */
export declare class messages_addChatUser_ extends Function_<enums.Updates> {
    static __F: (params: {
        chat_id: bigint;
        user_id: enums.InputUser;
        fwd_limit: number;
    }) => enums.Updates;
    /** Chat ID */
    chat_id: bigint;
    /** User ID to be added */
    user_id: enums.InputUser;
    /** Number of last messages to be forwarded */
    fwd_limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chat_id: bigint;
        user_id: enums.InputUser;
        fwd_limit: number;
    });
}
/** Deletes a user from a chat and sends a service message on it. */
export declare class messages_deleteChatUser_ extends Function_<enums.Updates> {
    static __F: (params: {
        revoke_history?: true;
        chat_id: bigint;
        user_id: enums.InputUser;
    }) => enums.Updates;
    /** Remove the entire chat history of the specified user in this chat. */
    revoke_history?: true;
    /** Chat ID */
    chat_id: bigint;
    /** User ID to be deleted */
    user_id: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        revoke_history?: true;
        chat_id: bigint;
        user_id: enums.InputUser;
    });
}
/** Creates a new chat. */
export declare class messages_createChat_ extends Function_<enums.Updates> {
    static __F: (params: {
        users: Array<enums.InputUser>;
        title: string;
        ttl_period?: number;
    }) => enums.Updates;
    /** List of user IDs to be invited */
    users: Array<enums.InputUser>;
    /** Chat name */
    title: string;
    /** Time-to-live of all messages that will be sent in the chat: once message.date+message.ttl\_period === time(), the message will be deleted on the server, and must be deleted locally as well. You can use [messages.setDefaultHistoryTTL](https://core.telegram.org/method/messages.setDefaultHistoryTTL) to edit this value later. */
    ttl_period?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        users: Array<enums.InputUser>;
        title: string;
        ttl_period?: number;
    });
}
/** Returns configuration parameters for Diffie-Hellman key generation. Can also return a random sequence of bytes of required length. */
export declare class messages_getDhConfig_ extends Function_<enums.messages.DhConfig> {
    static __F: (params: {
        version: number;
        random_length: number;
    }) => enums.messages.DhConfig;
    /** Value of the **version** parameter from [messages.dhConfig](https://core.telegram.org/constructor/messages.dhConfig), available at the client */
    version: number;
    /** Length of the required random sequence */
    random_length: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        version: number;
        random_length: number;
    });
}
/** Sends a request to start a secret chat to the user. */
export declare class messages_requestEncryption_ extends Function_<enums.EncryptedChat> {
    static __F: (params: {
        user_id: enums.InputUser;
        random_id: number;
        g_a: Uint8Array;
    }) => enums.EncryptedChat;
    /** User ID */
    user_id: enums.InputUser;
    /** Unique client request ID required to prevent resending. This also doubles as the chat ID. */
    random_id: number;
    /** `A = g ^ a mod p`, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) */
    g_a: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        user_id: enums.InputUser;
        random_id: number;
        g_a: Uint8Array;
    });
}
/** Confirms creation of a secret chat */
export declare class messages_acceptEncryption_ extends Function_<enums.EncryptedChat> {
    static __F: (params: {
        peer: enums.InputEncryptedChat;
        g_b: Uint8Array;
        key_fingerprint: bigint;
    }) => enums.EncryptedChat;
    /** Secret chat ID */
    peer: enums.InputEncryptedChat;
    /** `B = g ^ b mod p`, see [Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) */
    g_b: Uint8Array;
    /** 64-bit fingerprint of the received key */
    key_fingerprint: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputEncryptedChat;
        g_b: Uint8Array;
        key_fingerprint: bigint;
    });
}
/** Cancels a request for creation and/or delete info on secret chat. */
export declare class messages_discardEncryption_ extends Function_<boolean> {
    static __F: (params: {
        delete_history?: true;
        chat_id: number;
    }) => boolean;
    /** Whether to delete the entire chat history for the other user as well */
    delete_history?: true;
    /** Secret chat ID */
    chat_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        delete_history?: true;
        chat_id: number;
    });
}
/** Send typing event by the current user to a secret chat. */
export declare class messages_setEncryptedTyping_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputEncryptedChat;
        typing: boolean;
    }) => boolean;
    /** Secret chat ID */
    peer: enums.InputEncryptedChat;
    /** Typing.
    **Possible values**:
    [(boolTrue)](https://core.telegram.org/constructor/boolTrue), if the user started typing and more than **5 seconds** have passed since the last request
    [(boolFalse)](https://core.telegram.org/constructor/boolFalse), if the user stopped typing */
    typing: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputEncryptedChat;
        typing: boolean;
    });
}
/** Marks message history within a secret chat as read. */
export declare class messages_readEncryptedHistory_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputEncryptedChat;
        max_date: number;
    }) => boolean;
    /** Secret chat ID */
    peer: enums.InputEncryptedChat;
    /** Maximum date value for received messages in history */
    max_date: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputEncryptedChat;
        max_date: number;
    });
}
/** Sends a text message to a secret chat. */
export declare class messages_sendEncrypted_ extends Function_<enums.messages.SentEncryptedMessage> {
    static __F: (params: {
        silent?: true;
        peer: enums.InputEncryptedChat;
        random_id: bigint;
        data: Uint8Array;
    }) => enums.messages.SentEncryptedMessage;
    /** Send encrypted message without a notification */
    silent?: true;
    /** Secret chat ID */
    peer: enums.InputEncryptedChat;
    /** Unique client message ID, necessary to avoid message resending */
    random_id: bigint;
    /** TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key that was created during chat initialization */
    data: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        silent?: true;
        peer: enums.InputEncryptedChat;
        random_id: bigint;
        data: Uint8Array;
    });
}
/** Sends a message with a file attachment to a secret chat */
export declare class messages_sendEncryptedFile_ extends Function_<enums.messages.SentEncryptedMessage> {
    static __F: (params: {
        silent?: true;
        peer: enums.InputEncryptedChat;
        random_id: bigint;
        data: Uint8Array;
        file: enums.InputEncryptedFile;
    }) => enums.messages.SentEncryptedMessage;
    /** Whether to send the file without triggering a notification */
    silent?: true;
    /** Secret chat ID */
    peer: enums.InputEncryptedChat;
    /** Unique client message ID necessary to prevent message resending */
    random_id: bigint;
    /** TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key generated during chat initialization */
    data: Uint8Array;
    /** File attachment for the secret chat */
    file: enums.InputEncryptedFile;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        silent?: true;
        peer: enums.InputEncryptedChat;
        random_id: bigint;
        data: Uint8Array;
        file: enums.InputEncryptedFile;
    });
}
/** Sends a service message to a secret chat. */
export declare class messages_sendEncryptedService_ extends Function_<enums.messages.SentEncryptedMessage> {
    static __F: (params: {
        peer: enums.InputEncryptedChat;
        random_id: bigint;
        data: Uint8Array;
    }) => enums.messages.SentEncryptedMessage;
    /** Secret chat ID */
    peer: enums.InputEncryptedChat;
    /** Unique client message ID required to prevent message resending */
    random_id: bigint;
    /** TL-serialization of [DecryptedMessage](https://core.telegram.org/type/DecryptedMessage) type, encrypted with a key generated during chat initialization */
    data: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputEncryptedChat;
        random_id: bigint;
        data: Uint8Array;
    });
}
/** Confirms receipt of messages in a secret chat by client, cancels push notifications.
The method returns a list of **random\_id**s of messages for which push notifications were cancelled. */
export declare class messages_receivedQueue_ extends Function_<bigint[]> {
    static __F: (params: {
        max_qts: number;
    }) => bigint[];
    /** Maximum qts value available at the client */
    max_qts: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        max_qts: number;
    });
}
/** Report a secret chat for spam */
export declare class messages_reportEncryptedSpam_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputEncryptedChat;
    }) => boolean;
    /** The secret chat to report */
    peer: enums.InputEncryptedChat;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputEncryptedChat;
    });
}
/** Notifies the sender about the recipient having listened a voice message or watched a video. */
export declare class messages_readMessageContents_ extends Function_<enums.messages.AffectedMessages> {
    static __F: (params: {
        id: Array<number>;
    }) => enums.messages.AffectedMessages;
    /** Message ID list */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: Array<number>;
    });
}
/** Get stickers by emoji */
export declare class messages_getStickers_ extends Function_<enums.messages.Stickers> {
    static __F: (params: {
        emoticon: string;
        hash: bigint;
    }) => enums.messages.Stickers;
    /** The emoji */
    emoticon: string;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        emoticon: string;
        hash: bigint;
    });
}
/** Get all installed stickers */
export declare class messages_getAllStickers_ extends Function_<enums.messages.AllStickers> {
    static __F: (params: {
        hash: bigint;
    }) => enums.messages.AllStickers;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Get preview of webpage */
export declare class messages_getWebPagePreview_ extends Function_<enums.MessageMedia> {
    static __F: (params: {
        message: string;
        entities?: Array<enums.MessageEntity>;
    }) => enums.MessageMedia;
    /** Message from which to extract the preview */
    message: string;
    /** [Message entities for styled text](https://core.telegram.org/api/entities) */
    entities?: Array<enums.MessageEntity>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        message: string;
        entities?: Array<enums.MessageEntity>;
    });
}
/** Export an invite link for a chat */
export declare class messages_exportChatInvite_ extends Function_<enums.ExportedChatInvite> {
    static __F: (params: {
        legacy_revoke_permanent?: true;
        request_needed?: true;
        peer: enums.InputPeer;
        expire_date?: number;
        usage_limit?: number;
        title?: string;
    }) => enums.ExportedChatInvite;
    /** Legacy flag, reproducing legacy behavior of this method: if set, revokes all previous links before creating a new one. Kept for bot API BC, should not be used by modern clients. */
    legacy_revoke_permanent?: true;
    /** Whether admin confirmation is required before admitting each separate user into the chat */
    request_needed?: true;
    /** Chat */
    peer: enums.InputPeer;
    /** Expiration date */
    expire_date?: number;
    /** Maximum number of users that can join using this link */
    usage_limit?: number;
    /** Description of the invite link, visible only to administrators */
    title?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        legacy_revoke_permanent?: true;
        request_needed?: true;
        peer: enums.InputPeer;
        expire_date?: number;
        usage_limit?: number;
        title?: string;
    });
}
/** Check the validity of a chat invite link and get basic info about it */
export declare class messages_checkChatInvite_ extends Function_<enums.ChatInvite> {
    static __F: (params: {
        hash: string;
    }) => enums.ChatInvite;
    /** Invite hash from [chat invite deep link »](https://core.telegram.org/api/links#chat-invite-links). */
    hash: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: string;
    });
}
/** Import a chat invite and join a private chat/supergroup/channel */
export declare class messages_importChatInvite_ extends Function_<enums.Updates> {
    static __F: (params: {
        hash: string;
    }) => enums.Updates;
    /** `hash` from a [chat invite deep link](https://core.telegram.org/api/links#chat-invite-links) */
    hash: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: string;
    });
}
/** Get info about a stickerset */
export declare class messages_getStickerSet_ extends Function_<enums.messages.StickerSet> {
    static __F: (params: {
        stickerset: enums.InputStickerSet;
        hash: number;
    }) => enums.messages.StickerSet;
    /** Stickerset */
    stickerset: enums.InputStickerSet;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        stickerset: enums.InputStickerSet;
        hash: number;
    });
}
/** Install a stickerset */
export declare class messages_installStickerSet_ extends Function_<enums.messages.StickerSetInstallResult> {
    static __F: (params: {
        stickerset: enums.InputStickerSet;
        archived: boolean;
    }) => enums.messages.StickerSetInstallResult;
    /** Stickerset to install */
    stickerset: enums.InputStickerSet;
    /** Whether to archive stickerset */
    archived: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        stickerset: enums.InputStickerSet;
        archived: boolean;
    });
}
/** Uninstall a stickerset */
export declare class messages_uninstallStickerSet_ extends Function_<boolean> {
    static __F: (params: {
        stickerset: enums.InputStickerSet;
    }) => boolean;
    /** The stickerset to uninstall */
    stickerset: enums.InputStickerSet;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        stickerset: enums.InputStickerSet;
    });
}
/** Start a conversation with a bot using a [deep linking parameter](https://core.telegram.org/api/links#bot-links) */
export declare class messages_startBot_ extends Function_<enums.Updates> {
    static __F: (params: {
        bot: enums.InputUser;
        peer: enums.InputPeer;
        random_id: bigint;
        start_param: string;
    }) => enums.Updates;
    /** The bot */
    bot: enums.InputUser;
    /** The chat where to start the bot, can be the bot's private chat or a group */
    peer: enums.InputPeer;
    /** Random ID to avoid resending the same message */
    random_id: bigint;
    /** [Deep linking parameter](https://core.telegram.org/api/links#bot-links) */
    start_param: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot: enums.InputUser;
        peer: enums.InputPeer;
        random_id: bigint;
        start_param: string;
    });
}
/** Get and increase the view counter of a message sent or forwarded from a [channel](https://core.telegram.org/api/channel) */
export declare class messages_getMessagesViews_ extends Function_<enums.messages.MessageViews> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
        increment: boolean;
    }) => enums.messages.MessageViews;
    /** Peer where the message was found */
    peer: enums.InputPeer;
    /** ID of message */
    id: Array<number>;
    /** Whether to mark the message as viewed and increment the view counter */
    increment: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
        increment: boolean;
    });
}
/** Make a user admin in a [basic group](https://core.telegram.org/api/channel#basic-groups). */
export declare class messages_editChatAdmin_ extends Function_<boolean> {
    static __F: (params: {
        chat_id: bigint;
        user_id: enums.InputUser;
        is_admin: boolean;
    }) => boolean;
    /** The ID of the group */
    chat_id: bigint;
    /** The user to make admin */
    user_id: enums.InputUser;
    /** Whether to make them admin */
    is_admin: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chat_id: bigint;
        user_id: enums.InputUser;
        is_admin: boolean;
    });
}
/** Turn a [basic group into a supergroup](https://core.telegram.org/api/channel#migration) */
export declare class messages_migrateChat_ extends Function_<enums.Updates> {
    static __F: (params: {
        chat_id: bigint;
    }) => enums.Updates;
    /** [Basic group](https://core.telegram.org/api/channel#basic-groups) to migrate */
    chat_id: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chat_id: bigint;
    });
}
/** Search for messages and peers globally */
export declare class messages_searchGlobal_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        folder_id?: number;
        q: string;
        filter: enums.MessagesFilter;
        min_date: number;
        max_date: number;
        offset_rate: number;
        offset_peer: enums.InputPeer;
        offset_id: number;
        limit: number;
    }) => enums.messages.Messages;
    /** [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) */
    folder_id?: number;
    /** Query */
    q: string;
    /** Global search filter */
    filter: enums.MessagesFilter;
    /** If a positive value was specified, the method will return only messages with date bigger than min\_date */
    min_date: number;
    /** If a positive value was transferred, the method will return only messages with date smaller than max\_date */
    max_date: number;
    /** Initially 0, then set to the [`next_rate` parameter of messages.messagesSlice](https://core.telegram.org/constructor/messages.messagesSlice) */
    offset_rate: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_peer: enums.InputPeer;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_id: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        folder_id?: number;
        q: string;
        filter: enums.MessagesFilter;
        min_date: number;
        max_date: number;
        offset_rate: number;
        offset_peer: enums.InputPeer;
        offset_id: number;
        limit: number;
    });
}
/** Reorder installed stickersets */
export declare class messages_reorderStickerSets_ extends Function_<boolean> {
    static __F: (params: {
        masks?: true;
        emojis?: true;
        order: Array<bigint>;
    }) => boolean;
    /** Reorder mask stickersets */
    masks?: true;
    /** Reorder [custom emoji stickersets](https://core.telegram.org/api/custom-emoji) */
    emojis?: true;
    /** New stickerset order by stickerset IDs */
    order: Array<bigint>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        masks?: true;
        emojis?: true;
        order: Array<bigint>;
    });
}
/** Get a document by its SHA256 hash, mainly used for gifs */
export declare class messages_getDocumentByHash_ extends Function_<enums.Document> {
    static __F: (params: {
        sha256: Uint8Array;
        size: bigint;
        mime_type: string;
    }) => enums.Document;
    /** SHA256 of file */
    sha256: Uint8Array;
    /** Size of the file in bytes */
    size: bigint;
    /** Mime type */
    mime_type: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        sha256: Uint8Array;
        size: bigint;
        mime_type: string;
    });
}
/** Get saved GIFs */
export declare class messages_getSavedGifs_ extends Function_<enums.messages.SavedGifs> {
    static __F: (params: {
        hash: bigint;
    }) => enums.messages.SavedGifs;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Add GIF to saved gifs list */
export declare class messages_saveGif_ extends Function_<boolean> {
    static __F: (params: {
        id: enums.InputDocument;
        unsave: boolean;
    }) => boolean;
    /** GIF to save */
    id: enums.InputDocument;
    /** Whether to remove GIF from saved gifs list */
    unsave: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: enums.InputDocument;
        unsave: boolean;
    });
}
/** Query an inline bot */
export declare class messages_getInlineBotResults_ extends Function_<enums.messages.BotResults> {
    static __F: (params: {
        bot: enums.InputUser;
        peer: enums.InputPeer;
        geo_point?: enums.InputGeoPoint;
        query: string;
        offset: string;
    }) => enums.messages.BotResults;
    /** The bot to query */
    bot: enums.InputUser;
    /** The currently opened chat */
    peer: enums.InputPeer;
    /** The geolocation, if requested */
    geo_point?: enums.InputGeoPoint;
    /** The query */
    query: string;
    /** The offset within the results, will be passed directly as-is to the bot. */
    offset: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot: enums.InputUser;
        peer: enums.InputPeer;
        geo_point?: enums.InputGeoPoint;
        query: string;
        offset: string;
    });
}
/** Answer an inline query, for bots only */
export declare class messages_setInlineBotResults_ extends Function_<boolean> {
    static __F: (params: {
        gallery?: true;
        private?: true;
        query_id: bigint;
        results: Array<enums.InputBotInlineResult>;
        cache_time: number;
        next_offset?: string;
        switch_pm?: enums.InlineBotSwitchPM;
        switch_webview?: enums.InlineBotWebView;
    }) => boolean;
    /** Set this flag if the results are composed of media files */
    gallery?: true;
    /** Set this flag if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query */
    private?: true;
    /** Unique identifier for the answered query */
    query_id: bigint;
    /** Vector of results for the inline query */
    results: Array<enums.InputBotInlineResult>;
    /** The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. */
    cache_time: number;
    /** Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. */
    next_offset?: string;
    /** If passed, clients will display a button on top of the remaining inline result list with the specified text, that switches the user to a private chat with the bot and sends the bot a start message with a certain parameter. */
    switch_pm?: enums.InlineBotSwitchPM;
    /** If passed, clients will display a button on top of the remaining inline result list with the specified text, that switches the user to the specified [inline mode mini app](https://core.telegram.org/api/bots/webapps#inline-mode-mini-apps). */
    switch_webview?: enums.InlineBotWebView;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        gallery?: true;
        private?: true;
        query_id: bigint;
        results: Array<enums.InputBotInlineResult>;
        cache_time: number;
        next_offset?: string;
        switch_pm?: enums.InlineBotSwitchPM;
        switch_webview?: enums.InlineBotWebView;
    });
}
/** Send a result obtained using [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults). */
export declare class messages_sendInlineBotResult_ extends Function_<enums.Updates> {
    static __F: (params: {
        silent?: true;
        background?: true;
        clear_draft?: true;
        hide_via?: true;
        peer: enums.InputPeer;
        reply_to?: enums.InputReplyTo;
        random_id: bigint;
        query_id: bigint;
        id: string;
        schedule_date?: number;
        send_as?: enums.InputPeer;
        quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    }) => enums.Updates;
    /** Whether to send the message silently (no notification will be triggered on the other client) */
    silent?: true;
    /** Whether to send the message in background */
    background?: true;
    /** Whether to clear the [draft](https://core.telegram.org/api/drafts) */
    clear_draft?: true;
    /** Whether to hide the `via @botname` in the resulting message (only for bot usernames encountered in the [config](https://core.telegram.org/constructor/config)) */
    hide_via?: true;
    /** Destination */
    peer: enums.InputPeer;
    /** If set, indicates that the message should be sent in reply to the specified message or story. */
    reply_to?: enums.InputReplyTo;
    /** Random ID to avoid resending the same query */
    random_id: bigint;
    /** Query ID from [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults) */
    query_id: bigint;
    /** Result ID from [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults) */
    id: string;
    /** Scheduled message date for scheduled messages */
    schedule_date?: number;
    /** Send this message as the specified peer */
    send_as?: enums.InputPeer;
    quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        silent?: true;
        background?: true;
        clear_draft?: true;
        hide_via?: true;
        peer: enums.InputPeer;
        reply_to?: enums.InputReplyTo;
        random_id: bigint;
        query_id: bigint;
        id: string;
        schedule_date?: number;
        send_as?: enums.InputPeer;
        quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    });
}
/** Find out if a media message's caption can be edited */
export declare class messages_getMessageEditData_ extends Function_<enums.messages.MessageEditData> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: number;
    }) => enums.messages.MessageEditData;
    /** Peer where the media was sent */
    peer: enums.InputPeer;
    /** ID of message */
    id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: number;
    });
}
/** Edit message */
export declare class messages_editMessage_ extends Function_<enums.Updates> {
    static __F: (params: {
        no_webpage?: true;
        invert_media?: true;
        peer: enums.InputPeer;
        id: number;
        message?: string;
        media?: enums.InputMedia;
        reply_markup?: enums.ReplyMarkup;
        entities?: Array<enums.MessageEntity>;
        schedule_date?: number;
        quick_reply_shortcut_id?: number;
    }) => enums.Updates;
    /** Disable webpage preview */
    no_webpage?: true;
    /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
    invert_media?: true;
    /** Where was the message sent */
    peer: enums.InputPeer;
    /** ID of the message to edit */
    id: number;
    /** New message */
    message?: string;
    /** New attached media */
    media?: enums.InputMedia;
    /** Reply markup for inline keyboards */
    reply_markup?: enums.ReplyMarkup;
    /** [Message entities for styled text](https://core.telegram.org/api/entities) */
    entities?: Array<enums.MessageEntity>;
    /** Scheduled message date for [scheduled messages](https://core.telegram.org/api/scheduled-messages) */
    schedule_date?: number;
    quick_reply_shortcut_id?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        no_webpage?: true;
        invert_media?: true;
        peer: enums.InputPeer;
        id: number;
        message?: string;
        media?: enums.InputMedia;
        reply_markup?: enums.ReplyMarkup;
        entities?: Array<enums.MessageEntity>;
        schedule_date?: number;
        quick_reply_shortcut_id?: number;
    });
}
/** Edit an inline bot message */
export declare class messages_editInlineBotMessage_ extends Function_<boolean> {
    static __F: (params: {
        no_webpage?: true;
        invert_media?: true;
        id: enums.InputBotInlineMessageID;
        message?: string;
        media?: enums.InputMedia;
        reply_markup?: enums.ReplyMarkup;
        entities?: Array<enums.MessageEntity>;
    }) => boolean;
    /** Disable webpage preview */
    no_webpage?: true;
    /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
    invert_media?: true;
    /** Sent inline message ID */
    id: enums.InputBotInlineMessageID;
    /** Message */
    message?: string;
    /** Media */
    media?: enums.InputMedia;
    /** Reply markup for inline keyboards */
    reply_markup?: enums.ReplyMarkup;
    /** [Message entities for styled text](https://core.telegram.org/api/entities) */
    entities?: Array<enums.MessageEntity>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        no_webpage?: true;
        invert_media?: true;
        id: enums.InputBotInlineMessageID;
        message?: string;
        media?: enums.InputMedia;
        reply_markup?: enums.ReplyMarkup;
        entities?: Array<enums.MessageEntity>;
    });
}
/** Press an inline callback button and get a callback answer from the bot */
export declare class messages_getBotCallbackAnswer_ extends Function_<enums.messages.BotCallbackAnswer> {
    static __F: (params: {
        game?: true;
        peer: enums.InputPeer;
        msg_id: number;
        data?: Uint8Array;
        password?: enums.InputCheckPasswordSRP;
    }) => enums.messages.BotCallbackAnswer;
    /** Whether this is a "play game" button */
    game?: true;
    /** Where was the inline keyboard sent */
    peer: enums.InputPeer;
    /** ID of the Message with the inline keyboard */
    msg_id: number;
    /** Callback data */
    data?: Uint8Array;
    /** For buttons [requiring you to verify your identity with your 2FA password](https://core.telegram.org/constructor/keyboardButtonCallback), the SRP payload generated using [SRP](https://core.telegram.org/api/srp). */
    password?: enums.InputCheckPasswordSRP;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        game?: true;
        peer: enums.InputPeer;
        msg_id: number;
        data?: Uint8Array;
        password?: enums.InputCheckPasswordSRP;
    });
}
/** Set the callback answer to a user button press (bots only) */
export declare class messages_setBotCallbackAnswer_ extends Function_<boolean> {
    static __F: (params: {
        alert?: true;
        query_id: bigint;
        message?: string;
        url?: string;
        cache_time: number;
    }) => boolean;
    /** Whether to show the message as a popup instead of a toast notification */
    alert?: true;
    /** Query ID */
    query_id: bigint;
    /** Popup to show */
    message?: string;
    /** URL to open */
    url?: string;
    /** Cache validity */
    cache_time: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        alert?: true;
        query_id: bigint;
        message?: string;
        url?: string;
        cache_time: number;
    });
}
/** Get dialog info of specified peers */
export declare class messages_getPeerDialogs_ extends Function_<enums.messages.PeerDialogs> {
    static __F: (params: {
        peers: Array<enums.InputDialogPeer>;
    }) => enums.messages.PeerDialogs;
    /** Peers */
    peers: Array<enums.InputDialogPeer>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peers: Array<enums.InputDialogPeer>;
    });
}
/** Save a message [draft](https://core.telegram.org/api/drafts) associated to a chat. */
export declare class messages_saveDraft_ extends Function_<boolean> {
    static __F: (params: {
        no_webpage?: true;
        invert_media?: true;
        reply_to?: enums.InputReplyTo;
        peer: enums.InputPeer;
        message: string;
        entities?: Array<enums.MessageEntity>;
        media?: enums.InputMedia;
    }) => boolean;
    /** Disable generation of the webpage preview */
    no_webpage?: true;
    /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
    invert_media?: true;
    /** If set, indicates that the message should be sent in reply to the specified message or story. */
    reply_to?: enums.InputReplyTo;
    /** Destination of the message that should be sent */
    peer: enums.InputPeer;
    /** The draft */
    message: string;
    /** Message [entities](https://core.telegram.org/api/entities) for styled text */
    entities?: Array<enums.MessageEntity>;
    /** Attached media */
    media?: enums.InputMedia;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        no_webpage?: true;
        invert_media?: true;
        reply_to?: enums.InputReplyTo;
        peer: enums.InputPeer;
        message: string;
        entities?: Array<enums.MessageEntity>;
        media?: enums.InputMedia;
    });
}
/** Return all message [drafts](https://core.telegram.org/api/drafts).
Returns all the latest [updateDraftMessage](https://core.telegram.org/constructor/updateDraftMessage) updates related to all chats with drafts. */
export declare class messages_getAllDrafts_ extends Function_<enums.Updates> {
    static __F: () => enums.Updates;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get featured stickers */
export declare class messages_getFeaturedStickers_ extends Function_<enums.messages.FeaturedStickers> {
    static __F: (params: {
        hash: bigint;
    }) => enums.messages.FeaturedStickers;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Mark new featured stickers as read */
export declare class messages_readFeaturedStickers_ extends Function_<boolean> {
    static __F: (params: {
        id: Array<bigint>;
    }) => boolean;
    /** IDs of stickersets to mark as read */
    id: Array<bigint>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: Array<bigint>;
    });
}
/** Get recent stickers */
export declare class messages_getRecentStickers_ extends Function_<enums.messages.RecentStickers> {
    static __F: (params: {
        attached?: true;
        hash: bigint;
    }) => enums.messages.RecentStickers;
    /** Get stickers recently attached to photo or video files */
    attached?: true;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        attached?: true;
        hash: bigint;
    });
}
/** Add/remove sticker from recent stickers list */
export declare class messages_saveRecentSticker_ extends Function_<boolean> {
    static __F: (params: {
        attached?: true;
        id: enums.InputDocument;
        unsave: boolean;
    }) => boolean;
    /** Whether to add/remove stickers recently attached to photo or video files */
    attached?: true;
    /** Sticker */
    id: enums.InputDocument;
    /** Whether to save or unsave the sticker */
    unsave: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        attached?: true;
        id: enums.InputDocument;
        unsave: boolean;
    });
}
/** Clear recent stickers */
export declare class messages_clearRecentStickers_ extends Function_<boolean> {
    static __F: (params?: {
        attached?: true;
    }) => boolean;
    /** Set this flag to clear the list of stickers recently attached to photo or video files */
    attached?: true;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        attached?: true;
    });
}
/** Get all archived stickers */
export declare class messages_getArchivedStickers_ extends Function_<enums.messages.ArchivedStickers> {
    static __F: (params: {
        masks?: true;
        emojis?: true;
        offset_id: bigint;
        limit: number;
    }) => enums.messages.ArchivedStickers;
    /** Get [mask stickers](https://core.telegram.org/api/stickers#mask-stickers) */
    masks?: true;
    /** Get [custom emoji stickers](https://core.telegram.org/api/custom-emoji) */
    emojis?: true;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_id: bigint;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        masks?: true;
        emojis?: true;
        offset_id: bigint;
        limit: number;
    });
}
/** Get installed mask stickers */
export declare class messages_getMaskStickers_ extends Function_<enums.messages.AllStickers> {
    static __F: (params: {
        hash: bigint;
    }) => enums.messages.AllStickers;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Get stickers attached to a photo or video */
export declare class messages_getAttachedStickers_ extends Function_<enums.StickerSetCovered[]> {
    static __F: (params: {
        media: enums.InputStickeredMedia;
    }) => enums.StickerSetCovered[];
    /** Stickered media */
    media: enums.InputStickeredMedia;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        media: enums.InputStickeredMedia;
    });
}
/** Use this method to set the score of the specified user in a game sent as a normal message (bots only). */
export declare class messages_setGameScore_ extends Function_<enums.Updates> {
    static __F: (params: {
        edit_message?: true;
        force?: true;
        peer: enums.InputPeer;
        id: number;
        user_id: enums.InputUser;
        score: number;
    }) => enums.Updates;
    /** Set this flag if the game message should be automatically edited to include the current scoreboard */
    edit_message?: true;
    /** Set this flag if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
    force?: true;
    /** Unique identifier of target chat */
    peer: enums.InputPeer;
    /** Identifier of the sent message */
    id: number;
    /** User identifier */
    user_id: enums.InputUser;
    /** New score */
    score: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        edit_message?: true;
        force?: true;
        peer: enums.InputPeer;
        id: number;
        user_id: enums.InputUser;
        score: number;
    });
}
/** Use this method to set the score of the specified user in a game sent as an inline message (bots only). */
export declare class messages_setInlineGameScore_ extends Function_<boolean> {
    static __F: (params: {
        edit_message?: true;
        force?: true;
        id: enums.InputBotInlineMessageID;
        user_id: enums.InputUser;
        score: number;
    }) => boolean;
    /** Set this flag if the game message should be automatically edited to include the current scoreboard */
    edit_message?: true;
    /** Set this flag if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters */
    force?: true;
    /** ID of the inline message */
    id: enums.InputBotInlineMessageID;
    /** User identifier */
    user_id: enums.InputUser;
    /** New score */
    score: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        edit_message?: true;
        force?: true;
        id: enums.InputBotInlineMessageID;
        user_id: enums.InputUser;
        score: number;
    });
}
/** Get highscores of a game */
export declare class messages_getGameHighScores_ extends Function_<enums.messages.HighScores> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: number;
        user_id: enums.InputUser;
    }) => enums.messages.HighScores;
    /** Where was the game sent */
    peer: enums.InputPeer;
    /** ID of message with game media attachment */
    id: number;
    /** Get high scores made by a certain user */
    user_id: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: number;
        user_id: enums.InputUser;
    });
}
/** Get highscores of a game sent using an inline bot */
export declare class messages_getInlineGameHighScores_ extends Function_<enums.messages.HighScores> {
    static __F: (params: {
        id: enums.InputBotInlineMessageID;
        user_id: enums.InputUser;
    }) => enums.messages.HighScores;
    /** ID of inline message */
    id: enums.InputBotInlineMessageID;
    /** Get high scores of a certain user */
    user_id: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: enums.InputBotInlineMessageID;
        user_id: enums.InputUser;
    });
}
/** Get chats in common with a user */
export declare class messages_getCommonChats_ extends Function_<enums.messages.Chats> {
    static __F: (params: {
        user_id: enums.InputUser;
        max_id: bigint;
        limit: number;
    }) => enums.messages.Chats;
    /** User ID */
    user_id: enums.InputUser;
    /** Maximum ID of chat to return (see [pagination](https://core.telegram.org/api/offsets)) */
    max_id: bigint;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        user_id: enums.InputUser;
        max_id: bigint;
        limit: number;
    });
}
/** Get [instant view](https://instantview.telegram.org) page */
export declare class messages_getWebPage_ extends Function_<enums.messages.WebPage> {
    static __F: (params: {
        url: string;
        hash: number;
    }) => enums.messages.WebPage;
    /** URL of IV page to fetch */
    url: string;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        url: string;
        hash: number;
    });
}
/** Pin/unpin a dialog */
export declare class messages_toggleDialogPin_ extends Function_<boolean> {
    static __F: (params: {
        pinned?: true;
        peer: enums.InputDialogPeer;
    }) => boolean;
    /** Whether to pin or unpin the dialog */
    pinned?: true;
    /** The dialog to pin */
    peer: enums.InputDialogPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        pinned?: true;
        peer: enums.InputDialogPeer;
    });
}
/** Reorder pinned dialogs */
export declare class messages_reorderPinnedDialogs_ extends Function_<boolean> {
    static __F: (params: {
        force?: true;
        folder_id: number;
        order: Array<enums.InputDialogPeer>;
    }) => boolean;
    /** If set, dialogs pinned server-side but not present in the `order` field will be unpinned. */
    force?: true;
    /** [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) */
    folder_id: number;
    /** New dialog order */
    order: Array<enums.InputDialogPeer>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        force?: true;
        folder_id: number;
        order: Array<enums.InputDialogPeer>;
    });
}
/** Get pinned dialogs */
export declare class messages_getPinnedDialogs_ extends Function_<enums.messages.PeerDialogs> {
    static __F: (params: {
        folder_id: number;
    }) => enums.messages.PeerDialogs;
    /** [Peer folder ID, for more info click here](https://core.telegram.org/api/folders#peer-folders) */
    folder_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        folder_id: number;
    });
}
/** If you sent an invoice requesting a shipping address and the parameter is\_flexible was specified, the bot will receive an [updateBotShippingQuery](https://core.telegram.org/constructor/updateBotShippingQuery) update. Use this method to reply to shipping queries. */
export declare class messages_setBotShippingResults_ extends Function_<boolean> {
    static __F: (params: {
        query_id: bigint;
        error?: string;
        shipping_options?: Array<enums.ShippingOption>;
    }) => boolean;
    /** Unique identifier for the query to be answered */
    query_id: bigint;
    /** Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable"). Telegram will display this message to the user. */
    error?: string;
    /** A vector of available shipping options. */
    shipping_options?: Array<enums.ShippingOption>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        query_id: bigint;
        error?: string;
        shipping_options?: Array<enums.ShippingOption>;
    });
}
/** Once the user has confirmed their payment and shipping details, the bot receives an [updateBotPrecheckoutQuery](https://core.telegram.org/constructor/updateBotPrecheckoutQuery) update.
Use this method to respond to such pre-checkout queries.
**Note**: Telegram must receive an answer within 10 seconds after the pre-checkout query was sent. */
export declare class messages_setBotPrecheckoutResults_ extends Function_<boolean> {
    static __F: (params: {
        success?: true;
        query_id: bigint;
        error?: string;
    }) => boolean;
    /** Set this flag if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order, otherwise do not set it, and set the `error` field, instead */
    success?: true;
    /** Unique identifier for the query to be answered */
    query_id: bigint;
    /** Required if the `success` isn't set. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. */
    error?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        success?: true;
        query_id: bigint;
        error?: string;
    });
}
/** Upload a file and associate it to a chat (without actually sending it to the chat) */
export declare class messages_uploadMedia_ extends Function_<enums.MessageMedia> {
    static __F: (params: {
        peer: enums.InputPeer;
        media: enums.InputMedia;
    }) => enums.MessageMedia;
    /** The chat, can be [inputPeerEmpty](https://core.telegram.org/constructor/inputPeerEmpty) for bots and [inputPeerSelf](https://core.telegram.org/constructor/inputPeerSelf) for users. */
    peer: enums.InputPeer;
    /** File uploaded in chunks as described in [files »](https://core.telegram.org/api/files) */
    media: enums.InputMedia;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        media: enums.InputMedia;
    });
}
/** Notify the other user in a private chat that a screenshot of the chat was taken */
export declare class messages_sendScreenshotNotification_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        reply_to: enums.InputReplyTo;
        random_id: bigint;
    }) => enums.Updates;
    /** Other user */
    peer: enums.InputPeer;
    /** Indicates the message that was screenshotted (the specified message ID can also be `0` to avoid indicating any specific message). */
    reply_to: enums.InputReplyTo;
    /** Random ID to avoid message resending */
    random_id: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        reply_to: enums.InputReplyTo;
        random_id: bigint;
    });
}
/** Get faved stickers */
export declare class messages_getFavedStickers_ extends Function_<enums.messages.FavedStickers> {
    static __F: (params: {
        hash: bigint;
    }) => enums.messages.FavedStickers;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Mark or unmark a sticker as favorite */
export declare class messages_faveSticker_ extends Function_<boolean> {
    static __F: (params: {
        id: enums.InputDocument;
        unfave: boolean;
    }) => boolean;
    /** Sticker in question */
    id: enums.InputDocument;
    /** Whether to add or remove a sticker from favorites */
    unfave: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: enums.InputDocument;
        unfave: boolean;
    });
}
/** Get unread messages where we were mentioned */
export declare class messages_getUnreadMentions_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        peer: enums.InputPeer;
        top_msg_id?: number;
        offset_id: number;
        add_offset: number;
        limit: number;
        max_id: number;
        min_id: number;
    }) => enums.messages.Messages;
    /** Peer where to look for mentions */
    peer: enums.InputPeer;
    /** If set, considers only messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
    top_msg_id?: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_id: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    add_offset: number;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    /** Maximum message ID to return, [see pagination](https://core.telegram.org/api/offsets) */
    max_id: number;
    /** Minimum message ID to return, [see pagination](https://core.telegram.org/api/offsets) */
    min_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        top_msg_id?: number;
        offset_id: number;
        add_offset: number;
        limit: number;
        max_id: number;
        min_id: number;
    });
}
/** Mark mentions as read */
export declare class messages_readMentions_ extends Function_<enums.messages.AffectedHistory> {
    static __F: (params: {
        peer: enums.InputPeer;
        top_msg_id?: number;
    }) => enums.messages.AffectedHistory;
    /** Dialog */
    peer: enums.InputPeer;
    /** Mark as read only mentions within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
    top_msg_id?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        top_msg_id?: number;
    });
}
/** Get live location history of a certain user */
export declare class messages_getRecentLocations_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        peer: enums.InputPeer;
        limit: number;
        hash: bigint;
    }) => enums.messages.Messages;
    /** User */
    peer: enums.InputPeer;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        limit: number;
        hash: bigint;
    });
}
/** Send an [album or grouped media](https://core.telegram.org/api/files#albums-grouped-media) */
export declare class messages_sendMultiMedia_ extends Function_<enums.Updates> {
    static __F: (params: {
        silent?: true;
        background?: true;
        clear_draft?: true;
        noforwards?: true;
        update_stickersets_order?: true;
        invert_media?: true;
        peer: enums.InputPeer;
        reply_to?: enums.InputReplyTo;
        multi_media: Array<enums.InputSingleMedia>;
        schedule_date?: number;
        send_as?: enums.InputPeer;
        quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    }) => enums.Updates;
    /** Whether to send the album silently (no notification triggered) */
    silent?: true;
    /** Send in background? */
    background?: true;
    /** Whether to clear [drafts](https://core.telegram.org/api/drafts) */
    clear_draft?: true;
    /** Only for bots, disallows forwarding and saving of the messages, even if the destination chat doesn't have [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) enabled */
    noforwards?: true;
    /** Whether to move used stickersets to top, [see here for more info on this flag »](https://core.telegram.org/api/stickers#recent-stickersets) */
    update_stickersets_order?: true;
    /** If set, any eventual webpage preview will be shown on top of the message instead of at the bottom. */
    invert_media?: true;
    /** The destination chat */
    peer: enums.InputPeer;
    /** If set, indicates that the message should be sent in reply to the specified message or story. */
    reply_to?: enums.InputReplyTo;
    /** The medias to send: note that they must be separately uploaded using [messages.uploadMedia](https://core.telegram.org/method/messages.uploadMedia) first, using raw `inputMediaUploaded*` constructors is not supported. */
    multi_media: Array<enums.InputSingleMedia>;
    /** Scheduled message date for scheduled messages */
    schedule_date?: number;
    /** Send this message as the specified peer */
    send_as?: enums.InputPeer;
    quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        silent?: true;
        background?: true;
        clear_draft?: true;
        noforwards?: true;
        update_stickersets_order?: true;
        invert_media?: true;
        peer: enums.InputPeer;
        reply_to?: enums.InputReplyTo;
        multi_media: Array<enums.InputSingleMedia>;
        schedule_date?: number;
        send_as?: enums.InputPeer;
        quick_reply_shortcut?: enums.InputQuickReplyShortcut;
    });
}
/** Upload encrypted file and associate it to a secret chat */
export declare class messages_uploadEncryptedFile_ extends Function_<enums.EncryptedFile> {
    static __F: (params: {
        peer: enums.InputEncryptedChat;
        file: enums.InputEncryptedFile;
    }) => enums.EncryptedFile;
    /** The secret chat to associate the file to */
    peer: enums.InputEncryptedChat;
    /** The file */
    file: enums.InputEncryptedFile;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputEncryptedChat;
        file: enums.InputEncryptedFile;
    });
}
/** Search for stickersets */
export declare class messages_searchStickerSets_ extends Function_<enums.messages.FoundStickerSets> {
    static __F: (params: {
        exclude_featured?: true;
        q: string;
        hash: bigint;
    }) => enums.messages.FoundStickerSets;
    /** Exclude featured stickersets from results */
    exclude_featured?: true;
    /** Query string */
    q: string;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        exclude_featured?: true;
        q: string;
        hash: bigint;
    });
}
/** Get message ranges for saving the user's chat history */
export declare class messages_getSplitRanges_ extends Function_<enums.MessageRange[]> {
    static __F: () => enums.MessageRange[];
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Manually mark dialog as unread */
export declare class messages_markDialogUnread_ extends Function_<boolean> {
    static __F: (params: {
        unread?: true;
        peer: enums.InputDialogPeer;
    }) => boolean;
    /** Mark as unread/read */
    unread?: true;
    /** Dialog */
    peer: enums.InputDialogPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        unread?: true;
        peer: enums.InputDialogPeer;
    });
}
/** Get dialogs manually marked as unread */
export declare class messages_getDialogUnreadMarks_ extends Function_<enums.DialogPeer[]> {
    static __F: () => enums.DialogPeer[];
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Clear all [drafts](https://core.telegram.org/api/drafts). */
export declare class messages_clearAllDrafts_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Pin a message */
export declare class messages_updatePinnedMessage_ extends Function_<enums.Updates> {
    static __F: (params: {
        silent?: true;
        unpin?: true;
        pm_oneside?: true;
        peer: enums.InputPeer;
        id: number;
    }) => enums.Updates;
    /** Pin the message silently, without triggering a notification */
    silent?: true;
    /** Whether the message should unpinned or pinned */
    unpin?: true;
    /** Whether the message should only be pinned on the local side of a one-to-one chat */
    pm_oneside?: true;
    /** The peer where to pin the message */
    peer: enums.InputPeer;
    /** The message to pin or unpin */
    id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        silent?: true;
        unpin?: true;
        pm_oneside?: true;
        peer: enums.InputPeer;
        id: number;
    });
}
/** Vote in a [poll](https://core.telegram.org/constructor/poll) */
export declare class messages_sendVote_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        msg_id: number;
        options: Array<Uint8Array>;
    }) => enums.Updates;
    /** The chat where the poll was sent */
    peer: enums.InputPeer;
    /** The message ID of the poll */
    msg_id: number;
    /** The options that were chosen */
    options: Array<Uint8Array>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        msg_id: number;
        options: Array<Uint8Array>;
    });
}
/** Get poll results */
export declare class messages_getPollResults_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        msg_id: number;
    }) => enums.Updates;
    /** Peer where the poll was found */
    peer: enums.InputPeer;
    /** Message ID of poll message */
    msg_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        msg_id: number;
    });
}
/** Get count of online users in a chat */
export declare class messages_getOnlines_ extends Function_<enums.ChatOnlines> {
    static __F: (params: {
        peer: enums.InputPeer;
    }) => enums.ChatOnlines;
    /** The chat */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
    });
}
/** Edit the description of a [group/supergroup/channel](https://core.telegram.org/api/channel). */
export declare class messages_editChatAbout_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        about: string;
    }) => boolean;
    /** The [group/supergroup/channel](https://core.telegram.org/api/channel). */
    peer: enums.InputPeer;
    /** The new description */
    about: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        about: string;
    });
}
/** Edit the default banned rights of a [channel/supergroup/group](https://core.telegram.org/api/channel). */
export declare class messages_editChatDefaultBannedRights_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        banned_rights: enums.ChatBannedRights;
    }) => enums.Updates;
    /** The peer */
    peer: enums.InputPeer;
    /** The new global rights */
    banned_rights: enums.ChatBannedRights;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        banned_rights: enums.ChatBannedRights;
    });
}
/** Get localized [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). */
export declare class messages_getEmojiKeywords_ extends Function_<enums.EmojiKeywordsDifference> {
    static __F: (params: {
        lang_code: string;
    }) => enums.EmojiKeywordsDifference;
    /** Language code */
    lang_code: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        lang_code: string;
    });
}
/** Get changed [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). */
export declare class messages_getEmojiKeywordsDifference_ extends Function_<enums.EmojiKeywordsDifference> {
    static __F: (params: {
        lang_code: string;
        from_version: number;
    }) => enums.EmojiKeywordsDifference;
    /** Language code */
    lang_code: string;
    /** Previous stored emoji keyword list `version` */
    from_version: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        lang_code: string;
        from_version: number;
    });
}
/** Obtain a list of related languages that must be used when fetching [emoji keyword lists »](https://core.telegram.org/api/custom-emoji#emoji-keywords). */
export declare class messages_getEmojiKeywordsLanguages_ extends Function_<enums.EmojiLanguage[]> {
    static __F: (params: {
        lang_codes: Array<string>;
    }) => enums.EmojiLanguage[];
    /** The user's language codes */
    lang_codes: Array<string>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        lang_codes: Array<string>;
    });
}
/** Returns an HTTP URL which can be used to automatically log in into translation platform and suggest new [emoji keywords »](https://core.telegram.org/api/custom-emoji#emoji-keywords). The URL will be valid for 30 seconds after generation. */
export declare class messages_getEmojiURL_ extends Function_<enums.EmojiURL> {
    static __F: (params: {
        lang_code: string;
    }) => enums.EmojiURL;
    /** Language code for which the emoji keywords will be suggested */
    lang_code: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        lang_code: string;
    });
}
/** Get the number of results that would be found by a [messages.search](https://core.telegram.org/method/messages.search) call with the same parameters */
export declare class messages_getSearchCounters_ extends Function_<enums.messages.SearchCounter[]> {
    static __F: (params: {
        peer: enums.InputPeer;
        saved_peer_id?: enums.InputPeer;
        top_msg_id?: number;
        filters: Array<enums.MessagesFilter>;
    }) => enums.messages.SearchCounter[];
    /** Peer where to search */
    peer: enums.InputPeer;
    /** Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. */
    saved_peer_id?: enums.InputPeer;
    /** If set, consider only messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
    top_msg_id?: number;
    /** Search filters */
    filters: Array<enums.MessagesFilter>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        saved_peer_id?: enums.InputPeer;
        top_msg_id?: number;
        filters: Array<enums.MessagesFilter>;
    });
}
/** Get more info about a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization) */
export declare class messages_requestUrlAuth_ extends Function_<enums.UrlAuthResult> {
    static __F: (params?: {
        peer?: enums.InputPeer;
        msg_id?: number;
        button_id?: number;
        url?: string;
    }) => enums.UrlAuthResult;
    /** Peer where the message is located */
    peer?: enums.InputPeer;
    /** The message */
    msg_id?: number;
    /** The ID of the button with the authorization request */
    button_id?: number;
    /** URL used for [link URL authorization, click here for more info »](https://core.telegram.org/api/url-authorization#link-url-authorization) */
    url?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        peer?: enums.InputPeer;
        msg_id?: number;
        button_id?: number;
        url?: string;
    });
}
/** Use this to accept a Seamless Telegram Login authorization request, for more info [click here »](https://core.telegram.org/api/url-authorization) */
export declare class messages_acceptUrlAuth_ extends Function_<enums.UrlAuthResult> {
    static __F: (params?: {
        write_allowed?: true;
        peer?: enums.InputPeer;
        msg_id?: number;
        button_id?: number;
        url?: string;
    }) => enums.UrlAuthResult;
    /** Set this flag to allow the bot to send messages to you (if requested) */
    write_allowed?: true;
    /** The location of the message */
    peer?: enums.InputPeer;
    /** Message ID of the message with the login button */
    msg_id?: number;
    /** ID of the login button */
    button_id?: number;
    /** URL used for [link URL authorization, click here for more info »](https://core.telegram.org/api/url-authorization#link-url-authorization) */
    url?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        write_allowed?: true;
        peer?: enums.InputPeer;
        msg_id?: number;
        button_id?: number;
        url?: string;
    });
}
/** Should be called after the user hides the [report spam/add as contact bar](https://core.telegram.org/api/action-bar) of a new chat, effectively prevents the user from executing the actions specified in the [action bar »](https://core.telegram.org/api/action-bar). */
export declare class messages_hidePeerSettingsBar_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
    }) => boolean;
    /** Peer */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
    });
}
/** Get scheduled messages */
export declare class messages_getScheduledHistory_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        peer: enums.InputPeer;
        hash: bigint;
    }) => enums.messages.Messages;
    /** Peer */
    peer: enums.InputPeer;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        hash: bigint;
    });
}
/** Get scheduled messages */
export declare class messages_getScheduledMessages_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
    }) => enums.messages.Messages;
    /** Peer */
    peer: enums.InputPeer;
    /** IDs of scheduled messages */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
    });
}
/** Send scheduled messages right away */
export declare class messages_sendScheduledMessages_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
    }) => enums.Updates;
    /** Peer */
    peer: enums.InputPeer;
    /** Scheduled message IDs */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
    });
}
/** Delete scheduled messages */
export declare class messages_deleteScheduledMessages_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
    }) => enums.Updates;
    /** Peer */
    peer: enums.InputPeer;
    /** Scheduled message IDs */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
    });
}
/** Get poll results for non-anonymous polls */
export declare class messages_getPollVotes_ extends Function_<enums.messages.VotesList> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: number;
        option?: Uint8Array;
        offset?: string;
        limit: number;
    }) => enums.messages.VotesList;
    /** Chat where the poll was sent */
    peer: enums.InputPeer;
    /** Message ID */
    id: number;
    /** Get only results for the specified poll `option` */
    option?: Uint8Array;
    /** Offset for results, taken from the `next_offset` field of [messages.votesList](https://core.telegram.org/constructor/messages.votesList), initially an empty string.
    Note: if no more results are available, the method call will return an empty `next_offset`; thus, avoid providing the `next_offset` returned in [messages.votesList](https://core.telegram.org/constructor/messages.votesList) if it is empty, to avoid an infinite loop. */
    offset?: string;
    /** Number of results to return */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: number;
        option?: Uint8Array;
        offset?: string;
        limit: number;
    });
}
/** Apply changes to multiple stickersets */
export declare class messages_toggleStickerSets_ extends Function_<boolean> {
    static __F: (params: {
        uninstall?: true;
        archive?: true;
        unarchive?: true;
        stickersets: Array<enums.InputStickerSet>;
    }) => boolean;
    /** Uninstall the specified stickersets */
    uninstall?: true;
    /** Archive the specified stickersets */
    archive?: true;
    /** Unarchive the specified stickersets */
    unarchive?: true;
    /** Stickersets to act upon */
    stickersets: Array<enums.InputStickerSet>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        uninstall?: true;
        archive?: true;
        unarchive?: true;
        stickersets: Array<enums.InputStickerSet>;
    });
}
/** Get [folders](https://core.telegram.org/api/folders) */
export declare class messages_getDialogFilters_ extends Function_<enums.messages.DialogFilters> {
    static __F: () => enums.messages.DialogFilters;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get [suggested folders](https://core.telegram.org/api/folders) */
export declare class messages_getSuggestedDialogFilters_ extends Function_<enums.DialogFilterSuggested[]> {
    static __F: () => enums.DialogFilterSuggested[];
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Update [folder](https://core.telegram.org/api/folders) */
export declare class messages_updateDialogFilter_ extends Function_<boolean> {
    static __F: (params: {
        id: number;
        filter?: enums.DialogFilter;
    }) => boolean;
    /** [Folder](https://core.telegram.org/api/folders) ID */
    id: number;
    /** [Folder](https://core.telegram.org/api/folders) info */
    filter?: enums.DialogFilter;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: number;
        filter?: enums.DialogFilter;
    });
}
/** Reorder [folders](https://core.telegram.org/api/folders) */
export declare class messages_updateDialogFiltersOrder_ extends Function_<boolean> {
    static __F: (params: {
        order: Array<number>;
    }) => boolean;
    /** New [folder](https://core.telegram.org/api/folders) order */
    order: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        order: Array<number>;
    });
}
/** Method for fetching previously featured stickers */
export declare class messages_getOldFeaturedStickers_ extends Function_<enums.messages.FeaturedStickers> {
    static __F: (params: {
        offset: number;
        limit: number;
        hash: bigint;
    }) => enums.messages.FeaturedStickers;
    /** Offset */
    offset: number;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        offset: number;
        limit: number;
        hash: bigint;
    });
}
/** Get messages in a reply thread */
export declare class messages_getReplies_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        peer: enums.InputPeer;
        msg_id: number;
        offset_id: number;
        offset_date: number;
        add_offset: number;
        limit: number;
        max_id: number;
        min_id: number;
        hash: bigint;
    }) => enums.messages.Messages;
    /** Peer */
    peer: enums.InputPeer;
    /** Message ID */
    msg_id: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_id: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_date: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    add_offset: number;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    /** If a positive value was transferred, the method will return only messages with ID smaller than max\_id */
    max_id: number;
    /** If a positive value was transferred, the method will return only messages with ID bigger than min\_id */
    min_id: number;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        msg_id: number;
        offset_id: number;
        offset_date: number;
        add_offset: number;
        limit: number;
        max_id: number;
        min_id: number;
        hash: bigint;
    });
}
/** Get [discussion message](https://core.telegram.org/api/threads) from the [associated discussion group](https://core.telegram.org/api/discussion) of a channel to show it on top of the comment section, without actually joining the group */
export declare class messages_getDiscussionMessage_ extends Function_<enums.messages.DiscussionMessage> {
    static __F: (params: {
        peer: enums.InputPeer;
        msg_id: number;
    }) => enums.messages.DiscussionMessage;
    /** [Channel ID](https://core.telegram.org/api/channel) */
    peer: enums.InputPeer;
    /** Message ID */
    msg_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        msg_id: number;
    });
}
/** Mark a [thread](https://core.telegram.org/api/threads) as read */
export declare class messages_readDiscussion_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        msg_id: number;
        read_max_id: number;
    }) => boolean;
    /** Group ID */
    peer: enums.InputPeer;
    /** ID of message that started the thread */
    msg_id: number;
    /** ID up to which thread messages were read */
    read_max_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        msg_id: number;
        read_max_id: number;
    });
}
/** [Unpin](https://core.telegram.org/api/pin) all pinned messages */
export declare class messages_unpinAllMessages_ extends Function_<enums.messages.AffectedHistory> {
    static __F: (params: {
        peer: enums.InputPeer;
        top_msg_id?: number;
    }) => enums.messages.AffectedHistory;
    /** Chat where to unpin */
    peer: enums.InputPeer;
    /** [Forum topic](https://core.telegram.org/api/forum#forum-topics) where to unpin */
    top_msg_id?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        top_msg_id?: number;
    });
}
/** Delete a [chat](https://core.telegram.org/api/channel) */
export declare class messages_deleteChat_ extends Function_<boolean> {
    static __F: (params: {
        chat_id: bigint;
    }) => boolean;
    /** Chat ID */
    chat_id: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chat_id: bigint;
    });
}
/** Delete the entire phone call history. */
export declare class messages_deletePhoneCallHistory_ extends Function_<enums.messages.AffectedFoundMessages> {
    static __F: (params?: {
        revoke?: true;
    }) => enums.messages.AffectedFoundMessages;
    /** Whether to remove phone call history for participants as well */
    revoke?: true;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        revoke?: true;
    });
}
/** Obtains information about a chat export file, generated by a foreign chat app, [click here for more info about imported chats »](https://core.telegram.org/api/import). */
export declare class messages_checkHistoryImport_ extends Function_<enums.messages.HistoryImportParsed> {
    static __F: (params: {
        import_head: string;
    }) => enums.messages.HistoryImportParsed;
    /** Beginning of the message file; up to 100 lines. */
    import_head: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        import_head: string;
    });
}
/** Import chat history from a foreign chat app into a specific Telegram chat, [click here for more info about imported chats »](https://core.telegram.org/api/import). */
export declare class messages_initHistoryImport_ extends Function_<enums.messages.HistoryImport> {
    static __F: (params: {
        peer: enums.InputPeer;
        file: enums.InputFile;
        media_count: number;
    }) => enums.messages.HistoryImport;
    /** The Telegram chat where the [history should be imported](https://core.telegram.org/api/import). */
    peer: enums.InputPeer;
    /** File with messages to import. */
    file: enums.InputFile;
    /** Number of media files associated with the chat that will be uploaded using [messages.uploadImportedMedia](https://core.telegram.org/method/messages.uploadImportedMedia). */
    media_count: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        file: enums.InputFile;
        media_count: number;
    });
}
/** Upload a media file associated with an [imported chat, click here for more info »](https://core.telegram.org/api/import). */
export declare class messages_uploadImportedMedia_ extends Function_<enums.MessageMedia> {
    static __F: (params: {
        peer: enums.InputPeer;
        import_id: bigint;
        file_name: string;
        media: enums.InputMedia;
    }) => enums.MessageMedia;
    /** The Telegram chat where the media will be imported */
    peer: enums.InputPeer;
    /** Identifier of a [history import session](https://core.telegram.org/api/import), returned by [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport) */
    import_id: bigint;
    /** File name */
    file_name: string;
    /** Media metadata */
    media: enums.InputMedia;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        import_id: bigint;
        file_name: string;
        media: enums.InputMedia;
    });
}
/** Complete the [history import process](https://core.telegram.org/api/import), importing all messages into the chat.
To be called only after initializing the import with [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport) and uploading all files using [messages.uploadImportedMedia](https://core.telegram.org/method/messages.uploadImportedMedia). */
export declare class messages_startHistoryImport_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        import_id: bigint;
    }) => boolean;
    /** The Telegram chat where the messages should be [imported, click here for more info »](https://core.telegram.org/api/import) */
    peer: enums.InputPeer;
    /** Identifier of a history import session, returned by [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport). */
    import_id: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        import_id: bigint;
    });
}
/** Get info about the chat invites of a specific chat */
export declare class messages_getExportedChatInvites_ extends Function_<enums.messages.ExportedChatInvites> {
    static __F: (params: {
        revoked?: true;
        peer: enums.InputPeer;
        admin_id: enums.InputUser;
        offset_date?: number;
        offset_link?: string;
        limit: number;
    }) => enums.messages.ExportedChatInvites;
    /** Whether to fetch revoked chat invites */
    revoked?: true;
    /** Chat */
    peer: enums.InputPeer;
    /** Whether to only fetch chat invites from this admin */
    admin_id: enums.InputUser;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_date?: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_link?: string;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        revoked?: true;
        peer: enums.InputPeer;
        admin_id: enums.InputUser;
        offset_date?: number;
        offset_link?: string;
        limit: number;
    });
}
/** Get info about a chat invite */
export declare class messages_getExportedChatInvite_ extends Function_<enums.messages.ExportedChatInvite> {
    static __F: (params: {
        peer: enums.InputPeer;
        link: string;
    }) => enums.messages.ExportedChatInvite;
    /** Chat */
    peer: enums.InputPeer;
    /** Invite link */
    link: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        link: string;
    });
}
/** Edit an exported chat invite */
export declare class messages_editExportedChatInvite_ extends Function_<enums.messages.ExportedChatInvite> {
    static __F: (params: {
        revoked?: true;
        peer: enums.InputPeer;
        link: string;
        expire_date?: number;
        usage_limit?: number;
        request_needed?: boolean;
        title?: string;
    }) => enums.messages.ExportedChatInvite;
    /** Whether to revoke the chat invite */
    revoked?: true;
    /** Chat */
    peer: enums.InputPeer;
    /** Invite link */
    link: string;
    /** New expiration date */
    expire_date?: number;
    /** Maximum number of users that can join using this link */
    usage_limit?: number;
    /** Whether admin confirmation is required before admitting each separate user into the chat */
    request_needed?: boolean;
    /** Description of the invite link, visible only to administrators */
    title?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        revoked?: true;
        peer: enums.InputPeer;
        link: string;
        expire_date?: number;
        usage_limit?: number;
        request_needed?: boolean;
        title?: string;
    });
}
/** Delete all revoked chat invites */
export declare class messages_deleteRevokedExportedChatInvites_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        admin_id: enums.InputUser;
    }) => boolean;
    /** Chat */
    peer: enums.InputPeer;
    /** ID of the admin that originally generated the revoked chat invites */
    admin_id: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        admin_id: enums.InputUser;
    });
}
/** Delete a chat invite */
export declare class messages_deleteExportedChatInvite_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        link: string;
    }) => boolean;
    /** Peer */
    peer: enums.InputPeer;
    /** Invite link */
    link: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        link: string;
    });
}
/** Get info about chat invites generated by admins. */
export declare class messages_getAdminsWithInvites_ extends Function_<enums.messages.ChatAdminsWithInvites> {
    static __F: (params: {
        peer: enums.InputPeer;
    }) => enums.messages.ChatAdminsWithInvites;
    /** Chat */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
    });
}
/** Get info about the users that joined the chat using a specific chat invite */
export declare class messages_getChatInviteImporters_ extends Function_<enums.messages.ChatInviteImporters> {
    static __F: (params: {
        requested?: true;
        peer: enums.InputPeer;
        link?: string;
        q?: string;
        offset_date: number;
        offset_user: enums.InputUser;
        limit: number;
    }) => enums.messages.ChatInviteImporters;
    /** If set, only returns info about users with pending [join requests »](https://core.telegram.org/api/invites#join-requests) */
    requested?: true;
    /** Chat */
    peer: enums.InputPeer;
    /** Invite link */
    link?: string;
    /** Search for a user in the pending [join requests »](https://core.telegram.org/api/invites#join-requests) list: only available when the `requested` flag is set, cannot be used together with a specific `link`. */
    q?: string;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_date: number;
    /** User ID for [pagination](https://core.telegram.org/api/offsets): if set, `offset_date` must also be set. */
    offset_user: enums.InputUser;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        requested?: true;
        peer: enums.InputPeer;
        link?: string;
        q?: string;
        offset_date: number;
        offset_user: enums.InputUser;
        limit: number;
    });
}
/** Set maximum Time-To-Live of all messages in the specified chat */
export declare class messages_setHistoryTTL_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        period: number;
    }) => enums.Updates;
    /** The dialog */
    peer: enums.InputPeer;
    /** Automatically delete all messages sent in the chat after this many seconds */
    period: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        period: number;
    });
}
/** Check whether chat history exported from another chat app can be [imported into a specific Telegram chat, click here for more info »](https://core.telegram.org/api/import). */
export declare class messages_checkHistoryImportPeer_ extends Function_<enums.messages.CheckedHistoryImportPeer> {
    static __F: (params: {
        peer: enums.InputPeer;
    }) => enums.messages.CheckedHistoryImportPeer;
    /** The chat where we want to [import history »](https://core.telegram.org/api/import). */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
    });
}
/** Change the chat theme of a certain chat */
export declare class messages_setChatTheme_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        emoticon: string;
    }) => enums.Updates;
    /** Private chat where to change theme */
    peer: enums.InputPeer;
    /** Emoji, identifying a specific chat theme; a list of chat themes can be fetched using [account.getChatThemes](https://core.telegram.org/method/account.getChatThemes) */
    emoticon: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        emoticon: string;
    });
}
/** Get which users read a specific message: only available for groups and supergroups with less than [`chat_read_mark_size_threshold` members](https://core.telegram.org/api/config#chat-read-mark-size-threshold), read receipts will be stored for [`chat_read_mark_expire_period` seconds after the message was sent](https://core.telegram.org/api/config#chat-read-mark-expire-period), see [client configuration for more info »](https://core.telegram.org/api/config#client-configuration). */
export declare class messages_getMessageReadParticipants_ extends Function_<enums.ReadParticipantDate[]> {
    static __F: (params: {
        peer: enums.InputPeer;
        msg_id: number;
    }) => enums.ReadParticipantDate[];
    /** Dialog */
    peer: enums.InputPeer;
    /** Message ID */
    msg_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        msg_id: number;
    });
}
/** Returns information about the next messages of the specified type in the chat split by days. */
export declare class messages_getSearchResultsCalendar_ extends Function_<enums.messages.SearchResultsCalendar> {
    static __F: (params: {
        peer: enums.InputPeer;
        saved_peer_id?: enums.InputPeer;
        filter: enums.MessagesFilter;
        offset_id: number;
        offset_date: number;
    }) => enums.messages.SearchResultsCalendar;
    /** Peer where to search */
    peer: enums.InputPeer;
    /** Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. */
    saved_peer_id?: enums.InputPeer;
    /** Message filter, [inputMessagesFilterEmpty](https://core.telegram.org/constructor/inputMessagesFilterEmpty), [inputMessagesFilterMyMentions](https://core.telegram.org/constructor/inputMessagesFilterMyMentions) filters are not supported by this method. */
    filter: enums.MessagesFilter;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_id: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_date: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        saved_peer_id?: enums.InputPeer;
        filter: enums.MessagesFilter;
        offset_id: number;
        offset_date: number;
    });
}
/** Returns sparse positions of messages of the specified type in the chat to be used for shared media scroll implementation. */
export declare class messages_getSearchResultsPositions_ extends Function_<enums.messages.SearchResultsPositions> {
    static __F: (params: {
        peer: enums.InputPeer;
        saved_peer_id?: enums.InputPeer;
        filter: enums.MessagesFilter;
        offset_id: number;
        limit: number;
    }) => enums.messages.SearchResultsPositions;
    /** Peer where to search */
    peer: enums.InputPeer;
    /** Search within the [saved message dialog »](https://core.telegram.org/api/saved-messages) with this ID. */
    saved_peer_id?: enums.InputPeer;
    /** Message filter, [inputMessagesFilterEmpty](https://core.telegram.org/constructor/inputMessagesFilterEmpty), [inputMessagesFilterMyMentions](https://core.telegram.org/constructor/inputMessagesFilterMyMentions) filters are not supported by this method. */
    filter: enums.MessagesFilter;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_id: number;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        saved_peer_id?: enums.InputPeer;
        filter: enums.MessagesFilter;
        offset_id: number;
        limit: number;
    });
}
/** Dismiss or approve a chat [join request](https://core.telegram.org/api/invites#join-requests) related to a specific chat or channel. */
export declare class messages_hideChatJoinRequest_ extends Function_<enums.Updates> {
    static __F: (params: {
        approved?: true;
        peer: enums.InputPeer;
        user_id: enums.InputUser;
    }) => enums.Updates;
    /** Whether to dismiss or approve the chat [join request »](https://core.telegram.org/api/invites#join-requests) */
    approved?: true;
    /** The chat or channel */
    peer: enums.InputPeer;
    /** The user whose [join request »](https://core.telegram.org/api/invites#join-requests) should be dismissed or approved */
    user_id: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        approved?: true;
        peer: enums.InputPeer;
        user_id: enums.InputUser;
    });
}
/** Dismiss or approve all [join requests](https://core.telegram.org/api/invites#join-requests) related to a specific chat or channel. */
export declare class messages_hideAllChatJoinRequests_ extends Function_<enums.Updates> {
    static __F: (params: {
        approved?: true;
        peer: enums.InputPeer;
        link?: string;
    }) => enums.Updates;
    /** Whether to dismiss or approve all chat [join requests »](https://core.telegram.org/api/invites#join-requests) */
    approved?: true;
    /** The chat or channel */
    peer: enums.InputPeer;
    /** Only dismiss or approve [join requests »](https://core.telegram.org/api/invites#join-requests) initiated using this invite link */
    link?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        approved?: true;
        peer: enums.InputPeer;
        link?: string;
    });
}
/** Enable or disable [content protection](https://telegram.org/blog/protected-content-delete-by-date-and-more) on a channel or chat */
export declare class messages_toggleNoForwards_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        enabled: boolean;
    }) => enums.Updates;
    /** The chat or channel */
    peer: enums.InputPeer;
    /** Enable or disable content protection */
    enabled: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        enabled: boolean;
    });
}
/** Change the default peer that should be used when sending messages, reactions, poll votes to a specific group */
export declare class messages_saveDefaultSendAs_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        send_as: enums.InputPeer;
    }) => boolean;
    /** Group */
    peer: enums.InputPeer;
    /** The default peer that should be used when sending messages to the group */
    send_as: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        send_as: enums.InputPeer;
    });
}
/** React to message. */
export declare class messages_sendReaction_ extends Function_<enums.Updates> {
    static __F: (params: {
        big?: true;
        add_to_recent?: true;
        peer: enums.InputPeer;
        msg_id: number;
        reaction?: Array<enums.Reaction>;
    }) => enums.Updates;
    /** Whether a bigger and longer reaction should be shown */
    big?: true;
    /** Whether to add this reaction to the [recent reactions list »](https://core.telegram.org/api/reactions#recent-reactions). */
    add_to_recent?: true;
    /** Peer */
    peer: enums.InputPeer;
    /** Message ID to react to */
    msg_id: number;
    /** A list of reactions */
    reaction?: Array<enums.Reaction>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        big?: true;
        add_to_recent?: true;
        peer: enums.InputPeer;
        msg_id: number;
        reaction?: Array<enums.Reaction>;
    });
}
/** Get [message reactions »](https://core.telegram.org/api/reactions) */
export declare class messages_getMessagesReactions_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
    }) => enums.Updates;
    /** Peer */
    peer: enums.InputPeer;
    /** Message IDs */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
    });
}
/** Get [message reaction](https://core.telegram.org/api/reactions) list, along with the sender of each reaction. */
export declare class messages_getMessageReactionsList_ extends Function_<enums.messages.MessageReactionsList> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: number;
        reaction?: enums.Reaction;
        offset?: string;
        limit: number;
    }) => enums.messages.MessageReactionsList;
    /** Peer */
    peer: enums.InputPeer;
    /** Message ID */
    id: number;
    /** Get only reactions of this type */
    reaction?: enums.Reaction;
    /** Offset for pagination (taken from the `next_offset` field of the returned [messages.MessageReactionsList](https://core.telegram.org/type/messages.MessageReactionsList)); empty in the first request. */
    offset?: string;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: number;
        reaction?: enums.Reaction;
        offset?: string;
        limit: number;
    });
}
/** Change the set of [message reactions »](https://core.telegram.org/api/reactions) that can be used in a certain group, supergroup or channel */
export declare class messages_setChatAvailableReactions_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        available_reactions: enums.ChatReactions;
    }) => enums.Updates;
    /** Group where to apply changes */
    peer: enums.InputPeer;
    /** Allowed reaction emojis */
    available_reactions: enums.ChatReactions;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        available_reactions: enums.ChatReactions;
    });
}
/** Obtain available [message reactions »](https://core.telegram.org/api/reactions) */
export declare class messages_getAvailableReactions_ extends Function_<enums.messages.AvailableReactions> {
    static __F: (params: {
        hash: number;
    }) => enums.messages.AvailableReactions;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: number;
    });
}
/** Change default emoji reaction to use in the quick reaction menu: the value is synced across devices and can be fetched using [help.getConfig, `reactions_default` field](https://core.telegram.org/method/help.getConfig). */
export declare class messages_setDefaultReaction_ extends Function_<boolean> {
    static __F: (params: {
        reaction: enums.Reaction;
    }) => boolean;
    /** New emoji reaction */
    reaction: enums.Reaction;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        reaction: enums.Reaction;
    });
}
/** Translate a given text. */
export declare class messages_translateText_ extends Function_<enums.messages.TranslatedText> {
    static __F: (params: {
        peer?: enums.InputPeer;
        id?: Array<number>;
        text?: Array<enums.TextWithEntities>;
        to_lang: string;
    }) => enums.messages.TranslatedText;
    /** If the text is a chat message, the peer ID */
    peer?: enums.InputPeer;
    /** A list of message IDs to translate */
    id?: Array<number>;
    /** A list of styled messages to translate */
    text?: Array<enums.TextWithEntities>;
    /** Two-letter ISO 639-1 language code of the language to which the message is translated */
    to_lang: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer?: enums.InputPeer;
        id?: Array<number>;
        text?: Array<enums.TextWithEntities>;
        to_lang: string;
    });
}
/** Get unread reactions to messages you sent */
export declare class messages_getUnreadReactions_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        peer: enums.InputPeer;
        top_msg_id?: number;
        offset_id: number;
        add_offset: number;
        limit: number;
        max_id: number;
        min_id: number;
    }) => enums.messages.Messages;
    /** Peer */
    peer: enums.InputPeer;
    /** If set, considers only reactions to messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
    top_msg_id?: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_id: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    add_offset: number;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    /** Only return reactions for messages up until this message ID */
    max_id: number;
    /** Only return reactions for messages starting from this message ID */
    min_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        top_msg_id?: number;
        offset_id: number;
        add_offset: number;
        limit: number;
        max_id: number;
        min_id: number;
    });
}
/** Mark [message reactions »](https://core.telegram.org/api/reactions) as read */
export declare class messages_readReactions_ extends Function_<enums.messages.AffectedHistory> {
    static __F: (params: {
        peer: enums.InputPeer;
        top_msg_id?: number;
    }) => enums.messages.AffectedHistory;
    /** Peer */
    peer: enums.InputPeer;
    /** Mark as read only reactions to messages within the specified [forum topic](https://core.telegram.org/api/forum#forum-topics) */
    top_msg_id?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        top_msg_id?: number;
    });
}
/** View and search recently sent media.
This method does not support pagination. */
export declare class messages_searchSentMedia_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        q: string;
        filter: enums.MessagesFilter;
        limit: number;
    }) => enums.messages.Messages;
    /** Optional search query */
    q: string;
    /** Message filter */
    filter: enums.MessagesFilter;
    /** Maximum number of results to return (max 100). */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        q: string;
        filter: enums.MessagesFilter;
        limit: number;
    });
}
/** Returns installed attachment menu [bot mini apps »](https://core.telegram.org/api/bots/attach) */
export declare class messages_getAttachMenuBots_ extends Function_<enums.AttachMenuBots> {
    static __F: (params: {
        hash: bigint;
    }) => enums.AttachMenuBots;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Returns attachment menu entry for a [bot mini app that can be launched from the attachment menu »](https://core.telegram.org/api/bots/attach) */
export declare class messages_getAttachMenuBot_ extends Function_<enums.AttachMenuBotsBot> {
    static __F: (params: {
        bot: enums.InputUser;
    }) => enums.AttachMenuBotsBot;
    /** Bot ID */
    bot: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot: enums.InputUser;
    });
}
/** Enable or disable [web bot attachment menu »](https://core.telegram.org/api/bots/attach) */
export declare class messages_toggleBotInAttachMenu_ extends Function_<boolean> {
    static __F: (params: {
        write_allowed?: true;
        bot: enums.InputUser;
        enabled: boolean;
    }) => boolean;
    /** Whether the user authorizes the bot to write messages to them, if requested by [attachMenuBot](https://core.telegram.org/constructor/attachMenuBot).`request_write_access` */
    write_allowed?: true;
    /** Bot ID */
    bot: enums.InputUser;
    /** Toggle */
    enabled: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        write_allowed?: true;
        bot: enums.InputUser;
        enabled: boolean;
    });
}
/** Open a [bot mini app](https://core.telegram.org/bots/webapps), sending over user information after user confirmation. */
export declare class messages_requestWebView_ extends Function_<enums.WebViewResult> {
    static __F: (params: {
        from_bot_menu?: true;
        silent?: true;
        peer: enums.InputPeer;
        bot: enums.InputUser;
        url?: string;
        start_param?: string;
        theme_params?: enums.DataJSON;
        platform: string;
        reply_to?: enums.InputReplyTo;
        send_as?: enums.InputPeer;
    }) => enums.WebViewResult;
    /** Whether the webview was opened by clicking on the bot's [menu button »](https://core.telegram.org/api/bots/menu). */
    from_bot_menu?: true;
    /** Whether the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](https://core.telegram.org/method/messages.sendWebViewResultMessage) should be sent silently (no notifications for the receivers). */
    silent?: true;
    /** Dialog where the web app is being opened, and where the resulting message will be sent (see the [docs for more info »](https://core.telegram.org/api/bots/webapps)). */
    peer: enums.InputPeer;
    /** Bot that owns the [web app](https://core.telegram.org/api/bots/webapps) */
    bot: enums.InputUser;
    /** [Web app URL](https://core.telegram.org/api/bots/webapps) */
    url?: string;
    /** If the web app was opened from the attachment menu using a [attachment menu deep link](https://core.telegram.org/api/links#bot-attachment-or-side-menu-links), `start_param` should contain the `data` from the `startattach` parameter. */
    start_param?: string;
    /** [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) */
    theme_params?: enums.DataJSON;
    /** Short name of the application; 0-64 English letters, digits, and underscores */
    platform: string;
    /** If set, indicates that the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](https://core.telegram.org/method/messages.sendWebViewResultMessage) should be sent in reply to the specified message or story. */
    reply_to?: enums.InputReplyTo;
    /** Open the web app as the specified peer, sending the resulting the message as the specified peer. */
    send_as?: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        from_bot_menu?: true;
        silent?: true;
        peer: enums.InputPeer;
        bot: enums.InputUser;
        url?: string;
        start_param?: string;
        theme_params?: enums.DataJSON;
        platform: string;
        reply_to?: enums.InputReplyTo;
        send_as?: enums.InputPeer;
    });
}
/** Indicate to the server (from the user side) that the user is still using a web app. */
export declare class messages_prolongWebView_ extends Function_<boolean> {
    static __F: (params: {
        silent?: true;
        peer: enums.InputPeer;
        bot: enums.InputUser;
        query_id: bigint;
        reply_to?: enums.InputReplyTo;
        send_as?: enums.InputPeer;
    }) => boolean;
    /** Whether the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](https://core.telegram.org/method/messages.sendWebViewResultMessage) should be sent silently (no notifications for the receivers). */
    silent?: true;
    /** Dialog where the web app was opened. */
    peer: enums.InputPeer;
    /** Bot that owns the [web app](https://core.telegram.org/api/bots/webapps) */
    bot: enums.InputUser;
    /** Web app interaction ID obtained from [messages.requestWebView](https://core.telegram.org/method/messages.requestWebView) */
    query_id: bigint;
    /** If set, indicates that the inline message that will be sent by the bot on behalf of the user once the web app interaction is [terminated](https://core.telegram.org/method/messages.sendWebViewResultMessage) should be sent in reply to the specified message or story. */
    reply_to?: enums.InputReplyTo;
    /** Open the web app as the specified peer */
    send_as?: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        silent?: true;
        peer: enums.InputPeer;
        bot: enums.InputUser;
        query_id: bigint;
        reply_to?: enums.InputReplyTo;
        send_as?: enums.InputPeer;
    });
}
/** Open a [bot mini app](https://core.telegram.org/api/bots/webapps). */
export declare class messages_requestSimpleWebView_ extends Function_<enums.SimpleWebViewResult> {
    static __F: (params: {
        from_switch_webview?: true;
        from_side_menu?: true;
        bot: enums.InputUser;
        url?: string;
        start_param?: string;
        theme_params?: enums.DataJSON;
        platform: string;
    }) => enums.SimpleWebViewResult;
    /** Whether the webapp was opened by clicking on the `switch_webview` button shown on top of the inline results list returned by [messages.getInlineBotResults](https://core.telegram.org/method/messages.getInlineBotResults). */
    from_switch_webview?: true;
    /** Set this flag if opening the Mini App from the installed [side menu entry »](https://core.telegram.org/api/bots/attach) or from a [Mini App link »](https://core.telegram.org/api/links#mini-app-links). */
    from_side_menu?: true;
    /** Bot that owns the mini app */
    bot: enums.InputUser;
    /** Web app URL, if opening from a keyboard button or inline result */
    url?: string;
    /** Start parameter, if opening from a [Mini App link »](https://core.telegram.org/api/links#mini-app-links). */
    start_param?: string;
    /** [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) */
    theme_params?: enums.DataJSON;
    /** Short name of the application; 0-64 English letters, digits, and underscores */
    platform: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        from_switch_webview?: true;
        from_side_menu?: true;
        bot: enums.InputUser;
        url?: string;
        start_param?: string;
        theme_params?: enums.DataJSON;
        platform: string;
    });
}
/** Terminate webview interaction started with [messages.requestWebView](https://core.telegram.org/method/messages.requestWebView), sending the specified message to the chat on behalf of the user. */
export declare class messages_sendWebViewResultMessage_ extends Function_<enums.WebViewMessageSent> {
    static __F: (params: {
        bot_query_id: string;
        result: enums.InputBotInlineResult;
    }) => enums.WebViewMessageSent;
    /** Webview interaction ID obtained from [messages.requestWebView](https://core.telegram.org/method/messages.requestWebView) */
    bot_query_id: string;
    /** Message to send */
    result: enums.InputBotInlineResult;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot_query_id: string;
        result: enums.InputBotInlineResult;
    });
}
/** Used by the user to relay data from an opened [reply keyboard bot mini app](https://core.telegram.org/api/bots/webapps) to the bot that owns it. */
export declare class messages_sendWebViewData_ extends Function_<enums.Updates> {
    static __F: (params: {
        bot: enums.InputUser;
        random_id: bigint;
        button_text: string;
        data: string;
    }) => enums.Updates;
    /** Bot that owns the web app */
    bot: enums.InputUser;
    /** Unique client message ID to prevent duplicate sending of the same event */
    random_id: bigint;
    /** Text of the [keyboardButtonSimpleWebView](https://core.telegram.org/constructor/keyboardButtonSimpleWebView) that was pressed to open the web app. */
    button_text: string;
    /** Data to relay to the bot, obtained from a [`web_app_data_send` JS event](https://core.telegram.org/api/web-events#web-app-data-send). */
    data: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot: enums.InputUser;
        random_id: bigint;
        button_text: string;
        data: string;
    });
}
/** [Transcribe voice message](https://core.telegram.org/api/transcribe) */
export declare class messages_transcribeAudio_ extends Function_<enums.messages.TranscribedAudio> {
    static __F: (params: {
        peer: enums.InputPeer;
        msg_id: number;
    }) => enums.messages.TranscribedAudio;
    /** Peer ID where the voice message was sent */
    peer: enums.InputPeer;
    /** Voice message ID */
    msg_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        msg_id: number;
    });
}
/** Rate [transcribed voice message](https://core.telegram.org/api/transcribe) */
export declare class messages_rateTranscribedAudio_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        msg_id: number;
        transcription_id: bigint;
        good: boolean;
    }) => boolean;
    /** Peer where the voice message was sent */
    peer: enums.InputPeer;
    /** Message ID */
    msg_id: number;
    /** Transcription ID */
    transcription_id: bigint;
    /** Whether the transcription was correct */
    good: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        msg_id: number;
        transcription_id: bigint;
        good: boolean;
    });
}
/** Fetch [custom emoji stickers »](https://core.telegram.org/api/custom-emoji). */
export declare class messages_getCustomEmojiDocuments_ extends Function_<enums.Document[]> {
    static __F: (params: {
        document_id: Array<bigint>;
    }) => enums.Document[];
    /** [Custom emoji](https://core.telegram.org/api/custom-emoji) IDs from a [messageEntityCustomEmoji](https://core.telegram.org/constructor/messageEntityCustomEmoji). */
    document_id: Array<bigint>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        document_id: Array<bigint>;
    });
}
/** Gets the list of currently installed [custom emoji stickersets](https://core.telegram.org/api/custom-emoji). */
export declare class messages_getEmojiStickers_ extends Function_<enums.messages.AllStickers> {
    static __F: (params: {
        hash: bigint;
    }) => enums.messages.AllStickers;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Gets featured custom emoji stickersets. */
export declare class messages_getFeaturedEmojiStickers_ extends Function_<enums.messages.FeaturedStickers> {
    static __F: (params: {
        hash: bigint;
    }) => enums.messages.FeaturedStickers;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
/** Report a [message reaction](https://core.telegram.org/api/reactions) */
export declare class messages_reportReaction_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: number;
        reaction_peer: enums.InputPeer;
    }) => boolean;
    /** Peer where the message was sent */
    peer: enums.InputPeer;
    /** Message ID */
    id: number;
    /** Peer that sent the reaction */
    reaction_peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: number;
        reaction_peer: enums.InputPeer;
    });
}
/** Got popular [message reactions](https://core.telegram.org/api/reactions) */
export declare class messages_getTopReactions_ extends Function_<enums.messages.Reactions> {
    static __F: (params: {
        limit: number;
        hash: bigint;
    }) => enums.messages.Reactions;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        limit: number;
        hash: bigint;
    });
}
/** Get recently used [message reactions](https://core.telegram.org/api/reactions) */
export declare class messages_getRecentReactions_ extends Function_<enums.messages.Reactions> {
    static __F: (params: {
        limit: number;
        hash: bigint;
    }) => enums.messages.Reactions;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        limit: number;
        hash: bigint;
    });
}
/** Clear recently used [message reactions](https://core.telegram.org/api/reactions) */
export declare class messages_clearRecentReactions_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get information about extended media */
export declare class messages_getExtendedMedia_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
    }) => enums.Updates;
    /** Peer */
    peer: enums.InputPeer;
    /** Message IDs */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
    });
}
/** Changes the default value of the Time-To-Live setting, applied to all new chats. */
export declare class messages_setDefaultHistoryTTL_ extends Function_<boolean> {
    static __F: (params: {
        period: number;
    }) => boolean;
    /** The new default Time-To-Live of all messages sent in new chats. */
    period: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        period: number;
    });
}
/** Gets the default value of the Time-To-Live setting, applied to all new chats. */
export declare class messages_getDefaultHistoryTTL_ extends Function_<enums.DefaultHistoryTTL> {
    static __F: () => enums.DefaultHistoryTTL;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Send one or more chosen peers, as requested by a [keyboardButtonRequestPeer](https://core.telegram.org/constructor/keyboardButtonRequestPeer) button. */
export declare class messages_sendBotRequestedPeer_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        msg_id: number;
        button_id: number;
        requested_peers: Array<enums.InputPeer>;
    }) => enums.Updates;
    /** The bot that sent the [keyboardButtonRequestPeer](https://core.telegram.org/constructor/keyboardButtonRequestPeer) button. */
    peer: enums.InputPeer;
    /** ID of the message that contained the reply keyboard with the [keyboardButtonRequestPeer](https://core.telegram.org/constructor/keyboardButtonRequestPeer) button. */
    msg_id: number;
    /** The `button_id` field from the [keyboardButtonRequestPeer](https://core.telegram.org/constructor/keyboardButtonRequestPeer) constructor. */
    button_id: number;
    /** The chosen peers. */
    requested_peers: Array<enums.InputPeer>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        msg_id: number;
        button_id: number;
        requested_peers: Array<enums.InputPeer>;
    });
}
/** Represents a list of [emoji categories](https://core.telegram.org/api/custom-emoji#emoji-categories), to be used when selecting [custom emojis](https://core.telegram.org/api/custom-emoji). */
export declare class messages_getEmojiGroups_ extends Function_<enums.messages.EmojiGroups> {
    static __F: (params: {
        hash: number;
    }) => enums.messages.EmojiGroups;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: number;
    });
}
/** Represents a list of [emoji categories](https://core.telegram.org/api/custom-emoji#emoji-categories), to be used when selecting custom emojis to set as [custom emoji status](https://core.telegram.org/api). */
export declare class messages_getEmojiStatusGroups_ extends Function_<enums.messages.EmojiGroups> {
    static __F: (params: {
        hash: number;
    }) => enums.messages.EmojiGroups;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: number;
    });
}
/** Represents a list of [emoji categories](https://core.telegram.org/api/custom-emoji#emoji-categories), to be used when selecting custom emojis to set as [profile picture](https://core.telegram.org/api/files#sticker-profile-pictures). */
export declare class messages_getEmojiProfilePhotoGroups_ extends Function_<enums.messages.EmojiGroups> {
    static __F: (params: {
        hash: number;
    }) => enums.messages.EmojiGroups;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: number;
    });
}
/** Look for [custom emojis](https://core.telegram.org/api/custom-emoji) associated to a UTF8 emoji */
export declare class messages_searchCustomEmoji_ extends Function_<enums.EmojiList> {
    static __F: (params: {
        emoticon: string;
        hash: bigint;
    }) => enums.EmojiList;
    /** The emoji */
    emoticon: string;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        emoticon: string;
        hash: bigint;
    });
}
/** Show or hide the [real-time chat translation popup](https://core.telegram.org/api/translation) for a certain chat */
export declare class messages_togglePeerTranslations_ extends Function_<boolean> {
    static __F: (params: {
        disabled?: true;
        peer: enums.InputPeer;
    }) => boolean;
    /** Whether to disable or enable the real-time chat translation popup */
    disabled?: true;
    /** The peer */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        disabled?: true;
        peer: enums.InputPeer;
    });
}
/** Obtain information about a [direct link Mini App](https://core.telegram.org/api/bots/webapps#direct-link-mini-apps) */
export declare class messages_getBotApp_ extends Function_<enums.messages.BotApp> {
    static __F: (params: {
        app: enums.InputBotApp;
        hash: bigint;
    }) => enums.messages.BotApp;
    /** Bot app information obtained from a [Direct Mini App deep link »](https://core.telegram.org/api/links#direct-mini-app-links). */
    app: enums.InputBotApp;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        app: enums.InputBotApp;
        hash: bigint;
    });
}
/** Open a [bot mini app](https://core.telegram.org/bots/webapps) from a [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links), sending over user information after user confirmation. */
export declare class messages_requestAppWebView_ extends Function_<enums.AppWebViewResult> {
    static __F: (params: {
        write_allowed?: true;
        peer: enums.InputPeer;
        app: enums.InputBotApp;
        start_param?: string;
        theme_params?: enums.DataJSON;
        platform: string;
    }) => enums.AppWebViewResult;
    /** Set this flag if the bot is asking permission to send messages to the user as specified in the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links) docs, and the user agreed. */
    write_allowed?: true;
    /** If the client has clicked on the link in a Telegram chat, pass the chat's peer information; otherwise pass the bot's peer information, instead. */
    peer: enums.InputPeer;
    /** The app obtained by invoking [messages.getBotApp](https://core.telegram.org/method/messages.getBotApp) as specified in the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links) docs. */
    app: enums.InputBotApp;
    /** If the `startapp` query string parameter is present in the [direct Mini App deep link](https://core.telegram.org/api/links#direct-mini-app-links), pass it to `start_param`. */
    start_param?: string;
    /** [Theme parameters »](https://core.telegram.org/api/bots/webapps#theme-parameters) */
    theme_params?: enums.DataJSON;
    /** Short name of the application; 0-64 English letters, digits, and underscores */
    platform: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        write_allowed?: true;
        peer: enums.InputPeer;
        app: enums.InputBotApp;
        start_param?: string;
        theme_params?: enums.DataJSON;
        platform: string;
    });
}
/** Set a custom [wallpaper »](https://core.telegram.org/api/wallpapers) in a specific private chat with another user. */
export declare class messages_setChatWallPaper_ extends Function_<enums.Updates> {
    static __F: (params: {
        for_both?: true;
        revert?: true;
        peer: enums.InputPeer;
        wallpaper?: enums.InputWallPaper;
        settings?: enums.WallPaperSettings;
        id?: number;
    }) => enums.Updates;
    /** Only for [Premium](https://core.telegram.org/api/premium) users, sets the specified wallpaper for both users of the chat, without requiring confirmation from the other user. */
    for_both?: true;
    /** If we don't like the new wallpaper the other user of the chat has chosen for us using the `for_both` flag, we can re-set our previous wallpaper just on our side using this flag. */
    revert?: true;
    /** The private chat where the wallpaper will be set */
    peer: enums.InputPeer;
    /** The [wallpaper »](https://core.telegram.org/api/wallpapers), obtained as described in the [wallpaper documentation »](https://core.telegram.org/api/wallpapers#uploading-wallpapers); must **not** be provided when installing a wallpaper obtained from a [messageActionSetChatWallPaper](https://core.telegram.org/constructor/messageActionSetChatWallPaper) service message (`id` must be provided, instead). */
    wallpaper?: enums.InputWallPaper;
    /** Wallpaper settings, obtained as described in the [wallpaper documentation »](https://core.telegram.org/api/wallpapers#uploading-wallpapers) or from [messageActionSetChatWallPaper](https://core.telegram.org/constructor/messageActionSetChatWallPaper).`wallpaper`.`settings`. */
    settings?: enums.WallPaperSettings;
    /** If the wallpaper was obtained from a [messageActionSetChatWallPaper](https://core.telegram.org/constructor/messageActionSetChatWallPaper) service message, must contain the ID of that message. */
    id?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        for_both?: true;
        revert?: true;
        peer: enums.InputPeer;
        wallpaper?: enums.InputWallPaper;
        settings?: enums.WallPaperSettings;
        id?: number;
    });
}
/** Search for [custom emoji stickersets »](https://core.telegram.org/api/custom-emoji) */
export declare class messages_searchEmojiStickerSets_ extends Function_<enums.messages.FoundStickerSets> {
    static __F: (params: {
        exclude_featured?: true;
        q: string;
        hash: bigint;
    }) => enums.messages.FoundStickerSets;
    /** Exclude featured stickersets from results */
    exclude_featured?: true;
    /** Query string */
    q: string;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        exclude_featured?: true;
        q: string;
        hash: bigint;
    });
}
/** Returns the current saved dialog list, see [here »](https://core.telegram.org/api/saved-messages) for more info. */
export declare class messages_getSavedDialogs_ extends Function_<enums.messages.SavedDialogs> {
    static __F: (params: {
        exclude_pinned?: true;
        offset_date: number;
        offset_id: number;
        offset_peer: enums.InputPeer;
        limit: number;
        hash: bigint;
    }) => enums.messages.SavedDialogs;
    /** Exclude pinned dialogs */
    exclude_pinned?: true;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_date: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) (`top_message` ID used for pagination) */
    offset_id: number;
    /** [Offset peer for pagination](https://core.telegram.org/api/offsets) */
    offset_peer: enums.InputPeer;
    /** Number of list elements to be returned */
    limit: number;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        exclude_pinned?: true;
        offset_date: number;
        offset_id: number;
        offset_peer: enums.InputPeer;
        limit: number;
        hash: bigint;
    });
}
/** Returns [saved messages »](https://core.telegram.org/api/saved-messages) forwarded from a specific peer */
export declare class messages_getSavedHistory_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        peer: enums.InputPeer;
        offset_id: number;
        offset_date: number;
        add_offset: number;
        limit: number;
        max_id: number;
        min_id: number;
        hash: bigint;
    }) => enums.messages.Messages;
    /** Target peer */
    peer: enums.InputPeer;
    /** Only return messages starting from the specified message ID */
    offset_id: number;
    /** Only return messages sent before the specified date */
    offset_date: number;
    /** Number of list elements to be skipped, negative values are also accepted. */
    add_offset: number;
    /** Number of results to return */
    limit: number;
    /** If a positive value was transferred, the method will return only messages with IDs less than **max\_id** */
    max_id: number;
    /** If a positive value was transferred, the method will return only messages with IDs more than **min\_id** */
    min_id: number;
    /** [Result hash](https://core.telegram.org/api/offsets) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        offset_id: number;
        offset_date: number;
        add_offset: number;
        limit: number;
        max_id: number;
        min_id: number;
        hash: bigint;
    });
}
/** Deletes messages forwarded from a specific peer to [saved messages »](https://core.telegram.org/api/saved-messages). */
export declare class messages_deleteSavedHistory_ extends Function_<enums.messages.AffectedHistory> {
    static __F: (params: {
        peer: enums.InputPeer;
        max_id: number;
        min_date?: number;
        max_date?: number;
    }) => enums.messages.AffectedHistory;
    /** Peer, whose messages will be deleted from [saved messages »](https://core.telegram.org/api/saved-messages) */
    peer: enums.InputPeer;
    /** Maximum ID of message to delete */
    max_id: number;
    /** Delete all messages newer than this UNIX timestamp */
    min_date?: number;
    /** Delete all messages older than this UNIX timestamp */
    max_date?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        max_id: number;
        min_date?: number;
        max_date?: number;
    });
}
/** Get pinned [saved dialogs, see here »](https://core.telegram.org/api/saved-messages) for more info. */
export declare class messages_getPinnedSavedDialogs_ extends Function_<enums.messages.SavedDialogs> {
    static __F: () => enums.messages.SavedDialogs;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Pin or unpin a [saved message dialog »](https://core.telegram.org/api/saved-messages). */
export declare class messages_toggleSavedDialogPin_ extends Function_<boolean> {
    static __F: (params: {
        pinned?: true;
        peer: enums.InputDialogPeer;
    }) => boolean;
    /** Whether to pin or unpin the dialog */
    pinned?: true;
    /** The dialog to pin */
    peer: enums.InputDialogPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        pinned?: true;
        peer: enums.InputDialogPeer;
    });
}
/** Reorder pinned [saved message dialogs »](https://core.telegram.org/api/saved-messages). */
export declare class messages_reorderPinnedSavedDialogs_ extends Function_<boolean> {
    static __F: (params: {
        force?: true;
        order: Array<enums.InputDialogPeer>;
    }) => boolean;
    /** If set, dialogs pinned server-side but not present in the `order` field will be unpinned. */
    force?: true;
    /** New dialog order */
    order: Array<enums.InputDialogPeer>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        force?: true;
        order: Array<enums.InputDialogPeer>;
    });
}
export declare class messages_getSavedReactionTags_ extends Function_<enums.messages.SavedReactionTags> {
    static __F: (params: {
        peer?: enums.InputPeer;
        hash: bigint;
    }) => enums.messages.SavedReactionTags;
    peer?: enums.InputPeer;
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer?: enums.InputPeer;
        hash: bigint;
    });
}
export declare class messages_updateSavedReactionTag_ extends Function_<boolean> {
    static __F: (params: {
        reaction: enums.Reaction;
        title?: string;
    }) => boolean;
    reaction: enums.Reaction;
    title?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        reaction: enums.Reaction;
        title?: string;
    });
}
export declare class messages_getDefaultTagReactions_ extends Function_<enums.messages.Reactions> {
    static __F: (params: {
        hash: bigint;
    }) => enums.messages.Reactions;
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
export declare class messages_getOutboxReadDate_ extends Function_<enums.OutboxReadDate> {
    static __F: (params: {
        peer: enums.InputPeer;
        msg_id: number;
    }) => enums.OutboxReadDate;
    peer: enums.InputPeer;
    msg_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        msg_id: number;
    });
}
export declare class messages_getQuickReplies_ extends Function_<enums.messages.QuickReplies> {
    static __F: (params: {
        hash: bigint;
    }) => enums.messages.QuickReplies;
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: bigint;
    });
}
export declare class messages_reorderQuickReplies_ extends Function_<boolean> {
    static __F: (params: {
        order: Array<number>;
    }) => boolean;
    order: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        order: Array<number>;
    });
}
export declare class messages_checkQuickReplyShortcut_ extends Function_<boolean> {
    static __F: (params: {
        shortcut: string;
    }) => boolean;
    shortcut: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        shortcut: string;
    });
}
export declare class messages_editQuickReplyShortcut_ extends Function_<boolean> {
    static __F: (params: {
        shortcut_id: number;
        shortcut: string;
    }) => boolean;
    shortcut_id: number;
    shortcut: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        shortcut_id: number;
        shortcut: string;
    });
}
export declare class messages_deleteQuickReplyShortcut_ extends Function_<boolean> {
    static __F: (params: {
        shortcut_id: number;
    }) => boolean;
    shortcut_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        shortcut_id: number;
    });
}
export declare class messages_getQuickReplyMessages_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        shortcut_id: number;
        id?: Array<number>;
        hash: bigint;
    }) => enums.messages.Messages;
    shortcut_id: number;
    id?: Array<number>;
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        shortcut_id: number;
        id?: Array<number>;
        hash: bigint;
    });
}
export declare class messages_sendQuickReplyMessages_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        shortcut_id: number;
    }) => enums.Updates;
    peer: enums.InputPeer;
    shortcut_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        shortcut_id: number;
    });
}
export declare class messages_deleteQuickReplyMessages_ extends Function_<enums.Updates> {
    static __F: (params: {
        shortcut_id: number;
        id: Array<number>;
    }) => enums.Updates;
    shortcut_id: number;
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        shortcut_id: number;
        id: Array<number>;
    });
}
export declare class messages_toggleDialogFilterTags_ extends Function_<boolean> {
    static __F: (params: {
        enabled: boolean;
    }) => boolean;
    enabled: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        enabled: boolean;
    });
}
/** Returns a current state of updates. */
export declare class updates_getState_ extends Function_<enums.updates.State> {
    static __F: () => enums.updates.State;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get new [updates](https://core.telegram.org/api/updates). */
export declare class updates_getDifference_ extends Function_<enums.updates.Difference> {
    static __F: (params: {
        pts: number;
        pts_limit?: number;
        pts_total_limit?: number;
        date: number;
        qts: number;
        qts_limit?: number;
    }) => enums.updates.Difference;
    /** PTS, see [updates](https://core.telegram.org/api/updates). */
    pts: number;
    /** PTS limit */
    pts_limit?: number;
    /** For fast updating: if provided and `pts + pts_total_limit < remote pts`, [updates.differenceTooLong](https://core.telegram.org/constructor/updates.differenceTooLong) will be returned.
    Simply tells the server to not return the difference if it is bigger than `pts_total_limit`
    If the remote pts is too big (> ~4000000), this field will default to 1000000 */
    pts_total_limit?: number;
    /** date, see [updates](https://core.telegram.org/api/updates). */
    date: number;
    /** QTS, see [updates](https://core.telegram.org/api/updates). */
    qts: number;
    /** QTS limit */
    qts_limit?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        pts: number;
        pts_limit?: number;
        pts_total_limit?: number;
        date: number;
        qts: number;
        qts_limit?: number;
    });
}
/** Returns the difference between the current state of updates of a certain channel and transmitted. */
export declare class updates_getChannelDifference_ extends Function_<enums.updates.ChannelDifference> {
    static __F: (params: {
        force?: true;
        channel: enums.InputChannel;
        filter: enums.ChannelMessagesFilter;
        pts: number;
        limit: number;
    }) => enums.updates.ChannelDifference;
    /** Set to true to skip some possibly unneeded updates and reduce server-side load */
    force?: true;
    /** The channel */
    channel: enums.InputChannel;
    /** Messsage filter */
    filter: enums.ChannelMessagesFilter;
    /** Persistent timestamp (see [updates](https://core.telegram.org/api/updates)) */
    pts: number;
    /** How many updates to fetch, max `100000`
    Ordinary (non-bot) users are supposed to pass `10-100` */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        force?: true;
        channel: enums.InputChannel;
        filter: enums.ChannelMessagesFilter;
        pts: number;
        limit: number;
    });
}
/** Installs a previously uploaded photo as a profile photo. */
export declare class photos_updateProfilePhoto_ extends Function_<enums.photos.Photo> {
    static __F: (params: {
        fallback?: true;
        bot?: enums.InputUser;
        id: enums.InputPhoto;
    }) => enums.photos.Photo;
    /** If set, the chosen profile photo will be shown to users that can't display your main profile photo due to your privacy settings. */
    fallback?: true;
    /** Can contain info of a bot we own, to change the profile photo of that bot, instead of the current user. */
    bot?: enums.InputUser;
    /** Input photo */
    id: enums.InputPhoto;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        fallback?: true;
        bot?: enums.InputUser;
        id: enums.InputPhoto;
    });
}
/** Updates current user profile photo. */
export declare class photos_uploadProfilePhoto_ extends Function_<enums.photos.Photo> {
    static __F: (params?: {
        fallback?: true;
        bot?: enums.InputUser;
        file?: enums.InputFile;
        video?: enums.InputFile;
        video_start_ts?: number;
        video_emoji_markup?: enums.VideoSize;
    }) => enums.photos.Photo;
    /** If set, the chosen profile photo will be shown to users that can't display your main profile photo due to your privacy settings. */
    fallback?: true;
    /** Can contain info of a bot we own, to change the profile photo of that bot, instead of the current user. */
    bot?: enums.InputUser;
    /** Profile photo */
    file?: enums.InputFile;
    /** [Animated profile picture](https://core.telegram.org/api/files#animated-profile-pictures) video */
    video?: enums.InputFile;
    /** Floating point UNIX timestamp in seconds, indicating the frame of the video/sticker that should be used as static preview; can only be used if `video` or `video_emoji_markup` is set. */
    video_start_ts?: number;
    /** Animated sticker profile picture, must contain either a [videoSizeEmojiMarkup](https://core.telegram.org/constructor/videoSizeEmojiMarkup) or a [videoSizeStickerMarkup](https://core.telegram.org/constructor/videoSizeStickerMarkup) constructor. */
    video_emoji_markup?: enums.VideoSize;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        fallback?: true;
        bot?: enums.InputUser;
        file?: enums.InputFile;
        video?: enums.InputFile;
        video_start_ts?: number;
        video_emoji_markup?: enums.VideoSize;
    });
}
/** Deletes profile photos. The method returns a list of successfully deleted photo IDs. */
export declare class photos_deletePhotos_ extends Function_<bigint[]> {
    static __F: (params: {
        id: Array<enums.InputPhoto>;
    }) => bigint[];
    /** Input photos to delete */
    id: Array<enums.InputPhoto>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: Array<enums.InputPhoto>;
    });
}
/** Returns the list of user photos. */
export declare class photos_getUserPhotos_ extends Function_<enums.photos.Photos> {
    static __F: (params: {
        user_id: enums.InputUser;
        offset: number;
        max_id: bigint;
        limit: number;
    }) => enums.photos.Photos;
    /** User ID */
    user_id: enums.InputUser;
    /** Number of list elements to be skipped */
    offset: number;
    /** If a positive value was transferred, the method will return only photos with IDs less than the set one. This parameter is often useful when [refetching file references »](https://core.telegram.org/api/file_reference), as in conjuction with `limit=1` and `offset=-1` the [photo](https://core.telegram.org/constructor/photo) object with the `id` specified in `max_id` can be fetched. */
    max_id: bigint;
    /** Number of list elements to be returned */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        user_id: enums.InputUser;
        offset: number;
        max_id: bigint;
        limit: number;
    });
}
/** Upload a custom profile picture for a contact, or suggest a new profile picture to a contact. */
export declare class photos_uploadContactProfilePhoto_ extends Function_<enums.photos.Photo> {
    static __F: (params: {
        suggest?: true;
        save?: true;
        user_id: enums.InputUser;
        file?: enums.InputFile;
        video?: enums.InputFile;
        video_start_ts?: number;
        video_emoji_markup?: enums.VideoSize;
    }) => enums.photos.Photo;
    /** If set, will send a [messageActionSuggestProfilePhoto](https://core.telegram.org/constructor/messageActionSuggestProfilePhoto) service message to `user_id`, suggesting them to use the specified profile picture; otherwise, will set a personal profile picture for the user (only visible to the current user). */
    suggest?: true;
    /** If set, removes a previously set personal profile picture (does not affect suggested profile pictures, to remove them simply deleted the [messageActionSuggestProfilePhoto](https://core.telegram.org/constructor/messageActionSuggestProfilePhoto) service message with [messages.deleteMessages](https://core.telegram.org/method/messages.deleteMessages)). */
    save?: true;
    /** The contact */
    user_id: enums.InputUser;
    /** Profile photo */
    file?: enums.InputFile;
    /** [Animated profile picture](https://core.telegram.org/api/files#animated-profile-pictures) video */
    video?: enums.InputFile;
    /** Floating point UNIX timestamp in seconds, indicating the frame of the video/sticker that should be used as static preview; can only be used if `video` or `video_emoji_markup` is set. */
    video_start_ts?: number;
    /** Animated sticker profile picture, must contain either a [videoSizeEmojiMarkup](https://core.telegram.org/constructor/videoSizeEmojiMarkup) or a [videoSizeStickerMarkup](https://core.telegram.org/constructor/videoSizeStickerMarkup) constructor. */
    video_emoji_markup?: enums.VideoSize;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        suggest?: true;
        save?: true;
        user_id: enums.InputUser;
        file?: enums.InputFile;
        video?: enums.InputFile;
        video_start_ts?: number;
        video_emoji_markup?: enums.VideoSize;
    });
}
/** Saves a part of file for further sending to one of the methods. */
export declare class upload_saveFilePart_ extends Function_<boolean> {
    static __F: (params: {
        file_id: bigint;
        file_part: number;
        bytes: Uint8Array;
    }) => boolean;
    /** Random file identifier created by the client */
    file_id: bigint;
    /** Numerical order of a part */
    file_part: number;
    /** Binary data, content of a part */
    bytes: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        file_id: bigint;
        file_part: number;
        bytes: Uint8Array;
    });
}
/** Returns content of a whole file or its part. */
export declare class upload_getFile_ extends Function_<enums.upload.File> {
    static __F: (params: {
        precise?: true;
        cdn_supported?: true;
        location: enums.InputFileLocation;
        offset: bigint;
        limit: number;
    }) => enums.upload.File;
    /** Disable some checks on limit and offset values, useful for example to stream videos by keyframes */
    precise?: true;
    /** Whether the current client supports [CDN downloads](https://core.telegram.org/cdn) */
    cdn_supported?: true;
    /** File location */
    location: enums.InputFileLocation;
    /** Number of bytes to be skipped */
    offset: bigint;
    /** Number of bytes to be returned */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        precise?: true;
        cdn_supported?: true;
        location: enums.InputFileLocation;
        offset: bigint;
        limit: number;
    });
}
/** Saves a part of a large file (over 10 MB in size) to be later passed to one of the methods. */
export declare class upload_saveBigFilePart_ extends Function_<boolean> {
    static __F: (params: {
        file_id: bigint;
        file_part: number;
        file_total_parts: number;
        bytes: Uint8Array;
    }) => boolean;
    /** Random file id, created by the client */
    file_id: bigint;
    /** Part sequence number */
    file_part: number;
    /** Total number of parts */
    file_total_parts: number;
    /** Binary data, part contents */
    bytes: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        file_id: bigint;
        file_part: number;
        file_total_parts: number;
        bytes: Uint8Array;
    });
}
/** Returns content of a web file, by proxying the request through telegram, see the [webfile docs for more info](https://core.telegram.org/api/files#downloading-webfiles). */
export declare class upload_getWebFile_ extends Function_<enums.upload.WebFile> {
    static __F: (params: {
        location: enums.InputWebFileLocation;
        offset: number;
        limit: number;
    }) => enums.upload.WebFile;
    /** The file to download */
    location: enums.InputWebFileLocation;
    /** Number of bytes to be skipped */
    offset: number;
    /** Number of bytes to be returned */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        location: enums.InputWebFileLocation;
        offset: number;
        limit: number;
    });
}
/** Download a [CDN](https://core.telegram.org/cdn) file. */
export declare class upload_getCdnFile_ extends Function_<enums.upload.CdnFile> {
    static __F: (params: {
        file_token: Uint8Array;
        offset: bigint;
        limit: number;
    }) => enums.upload.CdnFile;
    /** File token */
    file_token: Uint8Array;
    /** Offset of chunk to download */
    offset: bigint;
    /** Length of chunk to download */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        file_token: Uint8Array;
        offset: bigint;
        limit: number;
    });
}
/** Request a reupload of a certain file to a [CDN DC](https://core.telegram.org/cdn). */
export declare class upload_reuploadCdnFile_ extends Function_<enums.FileHash[]> {
    static __F: (params: {
        file_token: Uint8Array;
        request_token: Uint8Array;
    }) => enums.FileHash[];
    /** File token */
    file_token: Uint8Array;
    /** Request token */
    request_token: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        file_token: Uint8Array;
        request_token: Uint8Array;
    });
}
/** Get SHA256 hashes for verifying downloaded [CDN](https://core.telegram.org/cdn) files */
export declare class upload_getCdnFileHashes_ extends Function_<enums.FileHash[]> {
    static __F: (params: {
        file_token: Uint8Array;
        offset: bigint;
    }) => enums.FileHash[];
    /** File */
    file_token: Uint8Array;
    /** Offset from which to start getting hashes */
    offset: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        file_token: Uint8Array;
        offset: bigint;
    });
}
/** Get SHA256 hashes for verifying downloaded files */
export declare class upload_getFileHashes_ extends Function_<enums.FileHash[]> {
    static __F: (params: {
        location: enums.InputFileLocation;
        offset: bigint;
    }) => enums.FileHash[];
    /** File */
    location: enums.InputFileLocation;
    /** Offset from which to get file hashes */
    offset: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        location: enums.InputFileLocation;
        offset: bigint;
    });
}
/** Returns current configuration, including data center configuration. */
export declare class help_getConfig_ extends Function_<enums.Config> {
    static __F: () => enums.Config;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Returns info on data center nearest to the user. */
export declare class help_getNearestDc_ extends Function_<enums.NearestDc> {
    static __F: () => enums.NearestDc;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Returns information on update availability for the current application. */
export declare class help_getAppUpdate_ extends Function_<enums.help.AppUpdate> {
    static __F: (params: {
        source: string;
    }) => enums.help.AppUpdate;
    /** Source */
    source: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        source: string;
    });
}
/** Returns localized text of a text message with an invitation. */
export declare class help_getInviteText_ extends Function_<enums.help.InviteText> {
    static __F: () => enums.help.InviteText;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Returns the support user for the "ask a question" feature. */
export declare class help_getSupport_ extends Function_<enums.help.Support> {
    static __F: () => enums.help.Support;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Informs the server about the number of pending bot updates if they haven't been processed for a long time; for bots only */
export declare class help_setBotUpdatesStatus_ extends Function_<boolean> {
    static __F: (params: {
        pending_updates_count: number;
        message: string;
    }) => boolean;
    /** Number of pending updates */
    pending_updates_count: number;
    /** Error message, if present */
    message: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        pending_updates_count: number;
        message: string;
    });
}
/** Get configuration for [CDN](https://core.telegram.org/cdn) file downloads. */
export declare class help_getCdnConfig_ extends Function_<enums.CdnConfig> {
    static __F: () => enums.CdnConfig;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get recently used `t.me` links. */
export declare class help_getRecentMeUrls_ extends Function_<enums.help.RecentMeUrls> {
    static __F: (params: {
        referer: string;
    }) => enums.help.RecentMeUrls;
    /** Referrer */
    referer: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        referer: string;
    });
}
/** Look for updates of telegram's terms of service */
export declare class help_getTermsOfServiceUpdate_ extends Function_<enums.help.TermsOfServiceUpdate> {
    static __F: () => enums.help.TermsOfServiceUpdate;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Accept the new terms of service */
export declare class help_acceptTermsOfService_ extends Function_<boolean> {
    static __F: (params: {
        id: enums.DataJSON;
    }) => boolean;
    /** ID of terms of service */
    id: enums.DataJSON;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: enums.DataJSON;
    });
}
/** Get info about an unsupported deep link, see [here for more info »](https://core.telegram.org/api/links#unsupported-links). */
export declare class help_getDeepLinkInfo_ extends Function_<enums.help.DeepLinkInfo> {
    static __F: (params: {
        path: string;
    }) => enums.help.DeepLinkInfo;
    /** Path component of a `tg:` link */
    path: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        path: string;
    });
}
/** Get app-specific configuration, see [client configuration](https://core.telegram.org/api/config#client-configuration) for more info on the result. */
export declare class help_getAppConfig_ extends Function_<enums.help.AppConfig> {
    static __F: (params: {
        hash: number;
    }) => enums.help.AppConfig;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: number;
    });
}
/** Saves logs of application on the server. */
export declare class help_saveAppLog_ extends Function_<boolean> {
    static __F: (params: {
        events: Array<enums.InputAppEvent>;
    }) => boolean;
    /** List of input events */
    events: Array<enums.InputAppEvent>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        events: Array<enums.InputAppEvent>;
    });
}
/** Get [passport](https://core.telegram.org/passport) configuration */
export declare class help_getPassportConfig_ extends Function_<enums.help.PassportConfig> {
    static __F: (params: {
        hash: number;
    }) => enums.help.PassportConfig;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: number;
    });
}
/** Get localized name of the telegram support user */
export declare class help_getSupportName_ extends Function_<enums.help.SupportName> {
    static __F: () => enums.help.SupportName;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Can only be used by TSF members to obtain internal information. */
export declare class help_getUserInfo_ extends Function_<enums.help.UserInfo> {
    static __F: (params: {
        user_id: enums.InputUser;
    }) => enums.help.UserInfo;
    /** User ID */
    user_id: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        user_id: enums.InputUser;
    });
}
/** Internal use */
export declare class help_editUserInfo_ extends Function_<enums.help.UserInfo> {
    static __F: (params: {
        user_id: enums.InputUser;
        message: string;
        entities: Array<enums.MessageEntity>;
    }) => enums.help.UserInfo;
    /** User */
    user_id: enums.InputUser;
    /** Message */
    message: string;
    /** [Message entities for styled text](https://core.telegram.org/api/entities) */
    entities: Array<enums.MessageEntity>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        user_id: enums.InputUser;
        message: string;
        entities: Array<enums.MessageEntity>;
    });
}
/** Get MTProxy/Public Service Announcement information */
export declare class help_getPromoData_ extends Function_<enums.help.PromoData> {
    static __F: () => enums.help.PromoData;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Hide MTProxy/Public Service Announcement information */
export declare class help_hidePromoData_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
    }) => boolean;
    /** Peer to hide */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
    });
}
/** Dismiss a [suggestion, see here for more info »](https://core.telegram.org/api/config#suggestions). */
export declare class help_dismissSuggestion_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        suggestion: string;
    }) => boolean;
    /** In the case of pending suggestions in [channels](https://core.telegram.org/constructor/channelFull), the channel ID. */
    peer: enums.InputPeer;
    /** [Suggestion, see here for more info »](https://core.telegram.org/api/config#suggestions). */
    suggestion: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        suggestion: string;
    });
}
/** Get name, ISO code, localized name and phone codes/patterns of all available countries */
export declare class help_getCountriesList_ extends Function_<enums.help.CountriesList> {
    static __F: (params: {
        lang_code: string;
        hash: number;
    }) => enums.help.CountriesList;
    /** Language code of the current user */
    lang_code: string;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        lang_code: string;
        hash: number;
    });
}
/** Get Telegram Premium promotion information */
export declare class help_getPremiumPromo_ extends Function_<enums.help.PremiumPromo> {
    static __F: () => enums.help.PremiumPromo;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get the set of [accent color palettes »](https://core.telegram.org/api/colors) that can be used for message accents. */
export declare class help_getPeerColors_ extends Function_<enums.help.PeerColors> {
    static __F: (params: {
        hash: number;
    }) => enums.help.PeerColors;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: number;
    });
}
/** Get the set of [accent color palettes »](https://core.telegram.org/api/colors) that can be used in profile page backgrounds. */
export declare class help_getPeerProfileColors_ extends Function_<enums.help.PeerColors> {
    static __F: (params: {
        hash: number;
    }) => enums.help.PeerColors;
    /** [Hash for pagination, for more info click here](https://core.telegram.org/api/offsets#hash-generation) */
    hash: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: number;
    });
}
export declare class help_getTimezonesList_ extends Function_<enums.help.TimezonesList> {
    static __F: (params: {
        hash: number;
    }) => enums.help.TimezonesList;
    hash: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hash: number;
    });
}
/** Mark [channel/supergroup](https://core.telegram.org/api/channel) history as read */
export declare class channels_readHistory_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        max_id: number;
    }) => boolean;
    /** [Channel/supergroup](https://core.telegram.org/api/channel) */
    channel: enums.InputChannel;
    /** ID of message up to which messages should be marked as read */
    max_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        max_id: number;
    });
}
/** Delete messages in a [channel/supergroup](https://core.telegram.org/api/channel) */
export declare class channels_deleteMessages_ extends Function_<enums.messages.AffectedMessages> {
    static __F: (params: {
        channel: enums.InputChannel;
        id: Array<number>;
    }) => enums.messages.AffectedMessages;
    /** [Channel/supergroup](https://core.telegram.org/api/channel) */
    channel: enums.InputChannel;
    /** IDs of messages to delete */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        id: Array<number>;
    });
}
/** Reports some messages from a user in a supergroup as spam; requires administrator rights in the supergroup */
export declare class channels_reportSpam_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        participant: enums.InputPeer;
        id: Array<number>;
    }) => boolean;
    /** Supergroup */
    channel: enums.InputChannel;
    /** Participant whose messages should be reported */
    participant: enums.InputPeer;
    /** IDs of spam messages */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        participant: enums.InputPeer;
        id: Array<number>;
    });
}
/** Get [channel/supergroup](https://core.telegram.org/api/channel) messages */
export declare class channels_getMessages_ extends Function_<enums.messages.Messages> {
    static __F: (params: {
        channel: enums.InputChannel;
        id: Array<enums.InputMessage>;
    }) => enums.messages.Messages;
    /** Channel/supergroup */
    channel: enums.InputChannel;
    /** IDs of messages to get */
    id: Array<enums.InputMessage>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        id: Array<enums.InputMessage>;
    });
}
/** Get the participants of a [supergroup/channel](https://core.telegram.org/api/channel) */
export declare class channels_getParticipants_ extends Function_<enums.channels.ChannelParticipants> {
    static __F: (params: {
        channel: enums.InputChannel;
        filter: enums.ChannelParticipantsFilter;
        offset: number;
        limit: number;
        hash: bigint;
    }) => enums.channels.ChannelParticipants;
    /** Channel */
    channel: enums.InputChannel;
    /** Which participant types to fetch */
    filter: enums.ChannelParticipantsFilter;
    /** [Offset](https://core.telegram.org/api/offsets) */
    offset: number;
    /** [Limit](https://core.telegram.org/api/offsets) */
    limit: number;
    /** [Hash](https://core.telegram.org/api/offsets) */
    hash: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        filter: enums.ChannelParticipantsFilter;
        offset: number;
        limit: number;
        hash: bigint;
    });
}
/** Get info about a [channel/supergroup](https://core.telegram.org/api/channel) participant */
export declare class channels_getParticipant_ extends Function_<enums.channels.ChannelParticipant> {
    static __F: (params: {
        channel: enums.InputChannel;
        participant: enums.InputPeer;
    }) => enums.channels.ChannelParticipant;
    /** Channel/supergroup */
    channel: enums.InputChannel;
    /** Participant to get info about */
    participant: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        participant: enums.InputPeer;
    });
}
/** Get info about [channels/supergroups](https://core.telegram.org/api/channel) */
export declare class channels_getChannels_ extends Function_<enums.messages.Chats> {
    static __F: (params: {
        id: Array<enums.InputChannel>;
    }) => enums.messages.Chats;
    /** IDs of channels/supergroups to get info about */
    id: Array<enums.InputChannel>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: Array<enums.InputChannel>;
    });
}
/** Get full info about a [supergroup](https://core.telegram.org/api/channel#supergroups), [gigagroup](https://core.telegram.org/api/channel#gigagroups) or [channel](https://core.telegram.org/api/channel#channels) */
export declare class channels_getFullChannel_ extends Function_<enums.messages.ChatFull> {
    static __F: (params: {
        channel: enums.InputChannel;
    }) => enums.messages.ChatFull;
    /** The [channel](https://core.telegram.org/api/channel#channels), [supergroup](https://core.telegram.org/api/channel#supergroups) or [gigagroup](https://core.telegram.org/api/channel#gigagroups) to get info about */
    channel: enums.InputChannel;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
    });
}
/** Create a [supergroup/channel](https://core.telegram.org/api/channel). */
export declare class channels_createChannel_ extends Function_<enums.Updates> {
    static __F: (params: {
        broadcast?: true;
        megagroup?: true;
        for_import?: true;
        forum?: true;
        title: string;
        about: string;
        geo_point?: enums.InputGeoPoint;
        address?: string;
        ttl_period?: number;
    }) => enums.Updates;
    /** Whether to create a [channel](https://core.telegram.org/api/channel) */
    broadcast?: true;
    /** Whether to create a [supergroup](https://core.telegram.org/api/channel) */
    megagroup?: true;
    /** Whether the supergroup is being created to import messages from a foreign chat service using [messages.initHistoryImport](https://core.telegram.org/method/messages.initHistoryImport) */
    for_import?: true;
    /** Whether to create a [forum](https://core.telegram.org/api/forum) */
    forum?: true;
    /** Channel title */
    title: string;
    /** Channel description */
    about: string;
    /** Geogroup location, see [here »](https://core.telegram.org/api/nearby) for more info on geogroups. */
    geo_point?: enums.InputGeoPoint;
    /** Geogroup address, see [here »](https://core.telegram.org/api/nearby) for more info on geogroups. */
    address?: string;
    /** Time-to-live of all messages that will be sent in the supergroup: once message.date+message.ttl\_period === time(), the message will be deleted on the server, and must be deleted locally as well. You can use [messages.setDefaultHistoryTTL](https://core.telegram.org/method/messages.setDefaultHistoryTTL) to edit this value later. */
    ttl_period?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        broadcast?: true;
        megagroup?: true;
        for_import?: true;
        forum?: true;
        title: string;
        about: string;
        geo_point?: enums.InputGeoPoint;
        address?: string;
        ttl_period?: number;
    });
}
/** Modify the admin rights of a user in a [supergroup/channel](https://core.telegram.org/api/channel). */
export declare class channels_editAdmin_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        user_id: enums.InputUser;
        admin_rights: enums.ChatAdminRights;
        rank: string;
    }) => enums.Updates;
    /** The [supergroup/channel](https://core.telegram.org/api/channel). */
    channel: enums.InputChannel;
    /** The ID of the user whose admin rights should be modified */
    user_id: enums.InputUser;
    /** The admin rights */
    admin_rights: enums.ChatAdminRights;
    /** Indicates the role (rank) of the admin in the group: just an arbitrary string */
    rank: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        user_id: enums.InputUser;
        admin_rights: enums.ChatAdminRights;
        rank: string;
    });
}
/** Edit the name of a [channel/supergroup](https://core.telegram.org/api/channel) */
export declare class channels_editTitle_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        title: string;
    }) => enums.Updates;
    /** Channel/supergroup */
    channel: enums.InputChannel;
    /** New name */
    title: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        title: string;
    });
}
/** Change the photo of a [channel/supergroup](https://core.telegram.org/api/channel) */
export declare class channels_editPhoto_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        photo: enums.InputChatPhoto;
    }) => enums.Updates;
    /** Channel/supergroup whose photo should be edited */
    channel: enums.InputChannel;
    /** New photo */
    photo: enums.InputChatPhoto;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        photo: enums.InputChatPhoto;
    });
}
/** Check if a username is free and can be assigned to a channel/supergroup */
export declare class channels_checkUsername_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        username: string;
    }) => boolean;
    /** The [channel/supergroup](https://core.telegram.org/api/channel) that will assigned the specified username */
    channel: enums.InputChannel;
    /** The username to check */
    username: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        username: string;
    });
}
/** Change or remove the username of a supergroup/channel */
export declare class channels_updateUsername_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        username: string;
    }) => boolean;
    /** Channel */
    channel: enums.InputChannel;
    /** New username, pass an empty string to remove the username */
    username: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        username: string;
    });
}
/** Join a channel/supergroup */
export declare class channels_joinChannel_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
    }) => enums.Updates;
    /** Channel/supergroup to join */
    channel: enums.InputChannel;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
    });
}
/** Leave a [channel/supergroup](https://core.telegram.org/api/channel) */
export declare class channels_leaveChannel_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
    }) => enums.Updates;
    /** [Channel/supergroup](https://core.telegram.org/api/channel) to leave */
    channel: enums.InputChannel;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
    });
}
/** Invite users to a channel/supergroup */
export declare class channels_inviteToChannel_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        users: Array<enums.InputUser>;
    }) => enums.Updates;
    /** Channel/supergroup */
    channel: enums.InputChannel;
    /** Users to invite */
    users: Array<enums.InputUser>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        users: Array<enums.InputUser>;
    });
}
/** Delete a [channel/supergroup](https://core.telegram.org/api/channel) */
export declare class channels_deleteChannel_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
    }) => enums.Updates;
    /** [Channel/supergroup](https://core.telegram.org/api/channel) to delete */
    channel: enums.InputChannel;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
    });
}
/** Get link and embed info of a message in a [channel/supergroup](https://core.telegram.org/api/channel) */
export declare class channels_exportMessageLink_ extends Function_<enums.ExportedMessageLink> {
    static __F: (params: {
        grouped?: true;
        thread?: true;
        channel: enums.InputChannel;
        id: number;
    }) => enums.ExportedMessageLink;
    /** Whether to include other grouped media (for albums) */
    grouped?: true;
    /** Whether to also include a thread ID, if available, inside of the link */
    thread?: true;
    /** Channel */
    channel: enums.InputChannel;
    /** Message ID */
    id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        grouped?: true;
        thread?: true;
        channel: enums.InputChannel;
        id: number;
    });
}
/** Enable/disable message signatures in channels */
export declare class channels_toggleSignatures_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        enabled: boolean;
    }) => enums.Updates;
    /** Channel */
    channel: enums.InputChannel;
    /** Value */
    enabled: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        enabled: boolean;
    });
}
/** Get [channels/supergroups/geogroups](https://core.telegram.org/api/channel) we're admin in. Usually called when the user exceeds the [limit](https://core.telegram.org/constructor/config) for owned public [channels/supergroups/geogroups](https://core.telegram.org/api/channel), and the user is given the choice to remove one of his channels/supergroups/geogroups. */
export declare class channels_getAdminedPublicChannels_ extends Function_<enums.messages.Chats> {
    static __F: (params?: {
        by_location?: true;
        check_limit?: true;
    }) => enums.messages.Chats;
    /** Get geogroups */
    by_location?: true;
    /** If set and the user has reached the limit of owned public [channels/supergroups/geogroups](https://core.telegram.org/api/channel), instead of returning the channel list one of the specified [errors](#possible-errors) will be returned.
    Useful to check if a new public channel can indeed be created, even before asking the user to enter a channel username to use in [channels.checkUsername](https://core.telegram.org/method/channels.checkUsername)/[channels.updateUsername](https://core.telegram.org/method/channels.updateUsername). */
    check_limit?: true;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        by_location?: true;
        check_limit?: true;
    });
}
/** Ban/unban/kick a user in a [supergroup/channel](https://core.telegram.org/api/channel). */
export declare class channels_editBanned_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        participant: enums.InputPeer;
        banned_rights: enums.ChatBannedRights;
    }) => enums.Updates;
    /** The [supergroup/channel](https://core.telegram.org/api/channel). */
    channel: enums.InputChannel;
    /** Participant to ban */
    participant: enums.InputPeer;
    /** The banned rights */
    banned_rights: enums.ChatBannedRights;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        participant: enums.InputPeer;
        banned_rights: enums.ChatBannedRights;
    });
}
/** Get the admin log of a [channel/supergroup](https://core.telegram.org/api/channel) */
export declare class channels_getAdminLog_ extends Function_<enums.channels.AdminLogResults> {
    static __F: (params: {
        channel: enums.InputChannel;
        q: string;
        events_filter?: enums.ChannelAdminLogEventsFilter;
        admins?: Array<enums.InputUser>;
        max_id: bigint;
        min_id: bigint;
        limit: number;
    }) => enums.channels.AdminLogResults;
    /** Channel */
    channel: enums.InputChannel;
    /** Search query, can be empty */
    q: string;
    /** Event filter */
    events_filter?: enums.ChannelAdminLogEventsFilter;
    /** Only show events from these admins */
    admins?: Array<enums.InputUser>;
    /** Maximum ID of message to return (see [pagination](https://core.telegram.org/api/offsets)) */
    max_id: bigint;
    /** Minimum ID of message to return (see [pagination](https://core.telegram.org/api/offsets)) */
    min_id: bigint;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        q: string;
        events_filter?: enums.ChannelAdminLogEventsFilter;
        admins?: Array<enums.InputUser>;
        max_id: bigint;
        min_id: bigint;
        limit: number;
    });
}
/** Associate a stickerset to the supergroup */
export declare class channels_setStickers_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        stickerset: enums.InputStickerSet;
    }) => boolean;
    /** Supergroup */
    channel: enums.InputChannel;
    /** The stickerset to associate */
    stickerset: enums.InputStickerSet;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        stickerset: enums.InputStickerSet;
    });
}
/** Mark [channel/supergroup](https://core.telegram.org/api/channel) message contents as read */
export declare class channels_readMessageContents_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        id: Array<number>;
    }) => boolean;
    /** [Channel/supergroup](https://core.telegram.org/api/channel) */
    channel: enums.InputChannel;
    /** IDs of messages whose contents should be marked as read */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        id: Array<number>;
    });
}
/** Delete the history of a [supergroup](https://core.telegram.org/api/channel) */
export declare class channels_deleteHistory_ extends Function_<enums.Updates> {
    static __F: (params: {
        for_everyone?: true;
        channel: enums.InputChannel;
        max_id: number;
    }) => enums.Updates;
    /** Whether the history should be deleted for everyone */
    for_everyone?: true;
    /** [Supergroup](https://core.telegram.org/api/channel) whose history must be deleted */
    channel: enums.InputChannel;
    /** ID of message **up to which** the history must be deleted */
    max_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        for_everyone?: true;
        channel: enums.InputChannel;
        max_id: number;
    });
}
/** Hide/unhide message history for new channel/supergroup users */
export declare class channels_togglePreHistoryHidden_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        enabled: boolean;
    }) => enums.Updates;
    /** Channel/supergroup */
    channel: enums.InputChannel;
    /** Hide/unhide */
    enabled: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        enabled: boolean;
    });
}
/** Get a list of [channels/supergroups](https://core.telegram.org/api/channel) we left, requires a [takeout session, see here » for more info](https://core.telegram.org/api/takeout). */
export declare class channels_getLeftChannels_ extends Function_<enums.messages.Chats> {
    static __F: (params: {
        offset: number;
    }) => enums.messages.Chats;
    /** Offset for [pagination](https://core.telegram.org/api/offsets) */
    offset: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        offset: number;
    });
}
/** Get all groups that can be used as [discussion groups](https://core.telegram.org/api/discussion). */
export declare class channels_getGroupsForDiscussion_ extends Function_<enums.messages.Chats> {
    static __F: () => enums.messages.Chats;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Associate a group to a channel as [discussion group](https://core.telegram.org/api/discussion) for that channel */
export declare class channels_setDiscussionGroup_ extends Function_<boolean> {
    static __F: (params: {
        broadcast: enums.InputChannel;
        group: enums.InputChannel;
    }) => boolean;
    /** Channel */
    broadcast: enums.InputChannel;
    /** [Discussion group](https://core.telegram.org/api/discussion) to associate to the channel */
    group: enums.InputChannel;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        broadcast: enums.InputChannel;
        group: enums.InputChannel;
    });
}
/** Transfer channel ownership */
export declare class channels_editCreator_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        user_id: enums.InputUser;
        password: enums.InputCheckPasswordSRP;
    }) => enums.Updates;
    /** Channel */
    channel: enums.InputChannel;
    /** New channel owner */
    user_id: enums.InputUser;
    /** [2FA password](https://core.telegram.org/api/srp) of account */
    password: enums.InputCheckPasswordSRP;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        user_id: enums.InputUser;
        password: enums.InputCheckPasswordSRP;
    });
}
/** Edit location of geogroup, see [here »](https://core.telegram.org/api/nearby) for more info on geogroups. */
export declare class channels_editLocation_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        geo_point: enums.InputGeoPoint;
        address: string;
    }) => boolean;
    /** [Geogroup](https://core.telegram.org/api/channel) */
    channel: enums.InputChannel;
    /** New geolocation */
    geo_point: enums.InputGeoPoint;
    /** Address string */
    address: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        geo_point: enums.InputGeoPoint;
        address: string;
    });
}
/** Toggle supergroup slow mode: if enabled, users will only be able to send one message every `seconds` seconds */
export declare class channels_toggleSlowMode_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        seconds: number;
    }) => enums.Updates;
    /** The [supergroup](https://core.telegram.org/api/channel) */
    channel: enums.InputChannel;
    /** Users will only be able to send one message every `seconds` seconds, `0` to disable the limitation */
    seconds: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        seconds: number;
    });
}
/** Get inactive channels and supergroups */
export declare class channels_getInactiveChannels_ extends Function_<enums.messages.InactiveChats> {
    static __F: () => enums.messages.InactiveChats;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Convert a [supergroup](https://core.telegram.org/api/channel) to a [gigagroup](https://core.telegram.org/api/channel), when requested by [channel suggestions](https://core.telegram.org/api/config#channel-suggestions). */
export declare class channels_convertToGigagroup_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
    }) => enums.Updates;
    /** The [supergroup](https://core.telegram.org/api/channel) to convert */
    channel: enums.InputChannel;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
    });
}
/** Mark a specific sponsored message as read */
export declare class channels_viewSponsoredMessage_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        random_id: Uint8Array;
    }) => boolean;
    /** Peer */
    channel: enums.InputChannel;
    /** Message ID */
    random_id: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        random_id: Uint8Array;
    });
}
/** Get a list of sponsored messages */
export declare class channels_getSponsoredMessages_ extends Function_<enums.messages.SponsoredMessages> {
    static __F: (params: {
        channel: enums.InputChannel;
    }) => enums.messages.SponsoredMessages;
    /** Peer */
    channel: enums.InputChannel;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
    });
}
/** Obtains a list of peers that can be used to send messages in a specific group */
export declare class channels_getSendAs_ extends Function_<enums.channels.SendAsPeers> {
    static __F: (params: {
        peer: enums.InputPeer;
    }) => enums.channels.SendAsPeers;
    /** The group where we intend to send messages */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
    });
}
/** Delete all messages sent by a specific participant of a given supergroup */
export declare class channels_deleteParticipantHistory_ extends Function_<enums.messages.AffectedHistory> {
    static __F: (params: {
        channel: enums.InputChannel;
        participant: enums.InputPeer;
    }) => enums.messages.AffectedHistory;
    /** Supergroup */
    channel: enums.InputChannel;
    /** The participant whose messages should be deleted */
    participant: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        participant: enums.InputPeer;
    });
}
/** Set whether all users [should join a discussion group in order to comment on a post »](https://core.telegram.org/api/discussion#requiring-users-to-join-the-group) */
export declare class channels_toggleJoinToSend_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        enabled: boolean;
    }) => enums.Updates;
    /** Discussion group */
    channel: enums.InputChannel;
    /** Toggle */
    enabled: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        enabled: boolean;
    });
}
/** Set whether all users should [request admin approval to join the group »](https://core.telegram.org/api/invites#join-requests). */
export declare class channels_toggleJoinRequest_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        enabled: boolean;
    }) => enums.Updates;
    /** Group */
    channel: enums.InputChannel;
    /** Toggle */
    enabled: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        enabled: boolean;
    });
}
/** Reorder active usernames */
export declare class channels_reorderUsernames_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        order: Array<string>;
    }) => boolean;
    /** The supergroup or channel */
    channel: enums.InputChannel;
    /** The new order for active usernames. All active usernames must be specified. */
    order: Array<string>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        order: Array<string>;
    });
}
/** Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to a [supergroup or channel](https://core.telegram.org/api/channel) we own. */
export declare class channels_toggleUsername_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        username: string;
        active: boolean;
    }) => boolean;
    /** [Supergroup or channel](https://core.telegram.org/api/channel) */
    channel: enums.InputChannel;
    /** Username */
    username: string;
    /** Whether to activate or deactivate the username */
    active: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        username: string;
        active: boolean;
    });
}
/** Disable all purchased usernames of a supergroup or channel */
export declare class channels_deactivateAllUsernames_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
    }) => boolean;
    /** Supergroup or channel */
    channel: enums.InputChannel;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
    });
}
/** Enable or disable [forum functionality](https://core.telegram.org/api/forum) in a supergroup. */
export declare class channels_toggleForum_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        enabled: boolean;
    }) => enums.Updates;
    /** Supergroup ID */
    channel: enums.InputChannel;
    /** Enable or disable forum functionality */
    enabled: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        enabled: boolean;
    });
}
/** Create a [forum topic](https://core.telegram.org/api/forum); requires [`manage_topics` rights](https://core.telegram.org/api/rights). */
export declare class channels_createForumTopic_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        title: string;
        icon_color?: number;
        icon_emoji_id?: bigint;
        random_id: bigint;
        send_as?: enums.InputPeer;
    }) => enums.Updates;
    /** [The forum](https://core.telegram.org/api/forum) */
    channel: enums.InputChannel;
    /** Topic title (maximum UTF-8 length: 128) */
    title: string;
    /** If no custom emoji icon is specified, specifies the color of the fallback topic icon (RGB), one of `0x6FB9F0`, `0xFFD67E`, `0xCB86DB`, `0x8EEE98`, `0xFF93B2`, or `0xFB6F5F`. */
    icon_color?: number;
    /** ID of the [custom emoji](https://core.telegram.org/api/custom-emoji) used as topic icon. [Telegram Premium](https://core.telegram.org/api/premium) users can use any custom emoji, other users can only use the custom emojis contained in the [inputStickerSetEmojiDefaultTopicIcons](https://core.telegram.org/constructor/inputStickerSetEmojiDefaultTopicIcons) emoji pack. */
    icon_emoji_id?: bigint;
    /** Unique client message ID to prevent duplicate sending of the same event */
    random_id: bigint;
    /** Create the topic as the specified peer */
    send_as?: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        title: string;
        icon_color?: number;
        icon_emoji_id?: bigint;
        random_id: bigint;
        send_as?: enums.InputPeer;
    });
}
/** Get [topics of a forum](https://core.telegram.org/api/forum) */
export declare class channels_getForumTopics_ extends Function_<enums.messages.ForumTopics> {
    static __F: (params: {
        channel: enums.InputChannel;
        q?: string;
        offset_date: number;
        offset_id: number;
        offset_topic: number;
        limit: number;
    }) => enums.messages.ForumTopics;
    /** Supergroup */
    channel: enums.InputChannel;
    /** Search query */
    q?: string;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets), date of the last message of the last found topic. Use 0 or any date in the future to get results from the last topic. */
    offset_date: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets), ID of the last message of the last found topic (or initially `0`). */
    offset_id: number;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets), ID of the last found topic (or initially `0`). */
    offset_topic: number;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets). For optimal performance, the number of returned topics is chosen by the server and can be smaller than the specified limit. */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        q?: string;
        offset_date: number;
        offset_id: number;
        offset_topic: number;
        limit: number;
    });
}
/** Get forum topics by their ID */
export declare class channels_getForumTopicsByID_ extends Function_<enums.messages.ForumTopics> {
    static __F: (params: {
        channel: enums.InputChannel;
        topics: Array<number>;
    }) => enums.messages.ForumTopics;
    /** Forum */
    channel: enums.InputChannel;
    /** Topic IDs */
    topics: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        topics: Array<number>;
    });
}
/** Edit [forum topic](https://core.telegram.org/api/forum); requires [`manage_topics` rights](https://core.telegram.org/api/rights). */
export declare class channels_editForumTopic_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        topic_id: number;
        title?: string;
        icon_emoji_id?: bigint;
        closed?: boolean;
        hidden?: boolean;
    }) => enums.Updates;
    /** Supergroup */
    channel: enums.InputChannel;
    /** Topic ID */
    topic_id: number;
    /** If present, will update the topic title (maximum UTF-8 length: 128). */
    title?: string;
    /** If present, updates the [custom emoji](https://core.telegram.org/api/custom-emoji) used as topic icon. [Telegram Premium](https://core.telegram.org/api/premium) users can use any custom emoji, other users can only use the custom emojis contained in the [inputStickerSetEmojiDefaultTopicIcons](https://core.telegram.org/constructor/inputStickerSetEmojiDefaultTopicIcons) emoji pack. Pass 0 to switch to the fallback topic icon. */
    icon_emoji_id?: bigint;
    /** If present, will update the open/closed status of the topic. */
    closed?: boolean;
    /** If present, will hide/unhide the topic (only valid for the "General" topic, `id=1`). */
    hidden?: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        topic_id: number;
        title?: string;
        icon_emoji_id?: bigint;
        closed?: boolean;
        hidden?: boolean;
    });
}
/** Pin or unpin [forum topics](https://core.telegram.org/api/forum) */
export declare class channels_updatePinnedForumTopic_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        topic_id: number;
        pinned: boolean;
    }) => enums.Updates;
    /** Supergroup ID */
    channel: enums.InputChannel;
    /** [Forum topic ID](https://core.telegram.org/api/forum) */
    topic_id: number;
    /** Whether to pin or unpin the topic */
    pinned: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        topic_id: number;
        pinned: boolean;
    });
}
/** Delete message history of a [forum topic](https://core.telegram.org/api/forum) */
export declare class channels_deleteTopicHistory_ extends Function_<enums.messages.AffectedHistory> {
    static __F: (params: {
        channel: enums.InputChannel;
        top_msg_id: number;
    }) => enums.messages.AffectedHistory;
    /** Forum */
    channel: enums.InputChannel;
    /** Topic ID */
    top_msg_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        top_msg_id: number;
    });
}
/** Reorder pinned forum topics */
export declare class channels_reorderPinnedForumTopics_ extends Function_<enums.Updates> {
    static __F: (params: {
        force?: true;
        channel: enums.InputChannel;
        order: Array<number>;
    }) => enums.Updates;
    /** If not set, the order of only the topics present both server-side and in `order` will be changed (i.e. mentioning topics not pinned server-side in `order` will not pin them, and not mentioning topics pinned server-side will not unpin them).
    If set, the entire server-side pinned topic list will be replaced with `order` (i.e. mentioning topics not pinned server-side in `order` will pin them, and not mentioning topics pinned server-side will unpin them) */
    force?: true;
    /** Supergroup ID */
    channel: enums.InputChannel;
    /** [Topic IDs »](https://core.telegram.org/api/forum) */
    order: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        force?: true;
        channel: enums.InputChannel;
        order: Array<number>;
    });
}
/** Enable or disable the [native antispam system](https://core.telegram.org/api/antispam). */
export declare class channels_toggleAntiSpam_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        enabled: boolean;
    }) => enums.Updates;
    /** Supergroup ID. The specified supergroup must have at least `telegram_antispam_group_size_min` members to enable antispam functionality, as specified by the [client configuration parameters](https://core.telegram.org/api/config#client-configuration). */
    channel: enums.InputChannel;
    /** Enable or disable the native antispam system. */
    enabled: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        enabled: boolean;
    });
}
/** Report a [native antispam](https://core.telegram.org/api/antispam) false positive */
export declare class channels_reportAntiSpamFalsePositive_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        msg_id: number;
    }) => boolean;
    /** Supergroup ID */
    channel: enums.InputChannel;
    /** Message ID that was mistakenly deleted by the [native antispam](https://core.telegram.org/api/antispam) system, taken from the [admin log](https://core.telegram.org/api/recent-actions) */
    msg_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        msg_id: number;
    });
}
/** Hide or display the participants list in a [supergroup](https://core.telegram.org/api/channel). */
export declare class channels_toggleParticipantsHidden_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        enabled: boolean;
    }) => enums.Updates;
    /** Supergroup ID */
    channel: enums.InputChannel;
    /** If true, will hide the participants list; otherwise will unhide it. */
    enabled: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        enabled: boolean;
    });
}
/** Informs the server that the user has either: */
export declare class channels_clickSponsoredMessage_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        random_id: Uint8Array;
    }) => boolean;
    /** Channel where the sponsored message was posted */
    channel: enums.InputChannel;
    /** Message ID */
    random_id: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        random_id: Uint8Array;
    });
}
/** Update the [accent color and background custom emoji »](https://core.telegram.org/api/colors) of a channel. */
export declare class channels_updateColor_ extends Function_<enums.Updates> {
    static __F: (params: {
        for_profile?: true;
        channel: enums.InputChannel;
        color?: number;
        background_emoji_id?: bigint;
    }) => enums.Updates;
    /** Whether to change the accent color emoji pattern of the profile page; otherwise, the accent color and emoji pattern of messages will be changed. */
    for_profile?: true;
    /** Channel whose accent color should be changed. */
    channel: enums.InputChannel;
    /** [ID of the accent color palette »](https://core.telegram.org/api/colors) to use (not RGB24, see [here »](https://core.telegram.org/api/colors) for more info); if not set, the default palette is used. */
    color?: number;
    /** Custom emoji ID used in the accent color pattern. */
    background_emoji_id?: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        for_profile?: true;
        channel: enums.InputChannel;
        color?: number;
        background_emoji_id?: bigint;
    });
}
/** Users may also choose to display messages from all topics of a [forum](https://core.telegram.org/api/forum) as if they were sent to a normal group, using a "View as messages" setting in the local client: this setting only affects the current account, and is synced to other logged in sessions using this method. */
export declare class channels_toggleViewForumAsMessages_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        enabled: boolean;
    }) => enums.Updates;
    /** The forum */
    channel: enums.InputChannel;
    /** The new value of the `view_forum_as_messages` flag. */
    enabled: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        enabled: boolean;
    });
}
/** Obtain a list of similarly themed public channels, selected based on similarities in their **subscriber bases**. */
export declare class channels_getChannelRecommendations_ extends Function_<enums.messages.Chats> {
    static __F: (params: {
        channel: enums.InputChannel;
    }) => enums.messages.Chats;
    /** The method will return channels related to the passed `channel`. */
    channel: enums.InputChannel;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
    });
}
/** Set an [emoji status](https://core.telegram.org/api/emoji-status) for a channel. */
export declare class channels_updateEmojiStatus_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        emoji_status: enums.EmojiStatus;
    }) => enums.Updates;
    /** The channel, must have at least [`channel_emoji_status_level_min` boosts](https://core.telegram.org/api/config#channel-emoji-status-level-min). */
    channel: enums.InputChannel;
    /** [Emoji status](https://core.telegram.org/api/emoji-status) to set */
    emoji_status: enums.EmojiStatus;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        emoji_status: enums.EmojiStatus;
    });
}
export declare class channels_setBoostsToUnblockRestrictions_ extends Function_<enums.Updates> {
    static __F: (params: {
        channel: enums.InputChannel;
        boosts: number;
    }) => enums.Updates;
    channel: enums.InputChannel;
    boosts: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        boosts: number;
    });
}
export declare class channels_setEmojiStickers_ extends Function_<boolean> {
    static __F: (params: {
        channel: enums.InputChannel;
        stickerset: enums.InputStickerSet;
    }) => boolean;
    channel: enums.InputChannel;
    stickerset: enums.InputStickerSet;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        stickerset: enums.InputStickerSet;
    });
}
/** Sends a custom request; for bots only */
export declare class bots_sendCustomRequest_ extends Function_<enums.DataJSON> {
    static __F: (params: {
        custom_method: string;
        params: enums.DataJSON;
    }) => enums.DataJSON;
    /** The method name */
    custom_method: string;
    /** JSON-serialized method parameters */
    params: enums.DataJSON;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        custom_method: string;
        params: enums.DataJSON;
    });
}
/** Answers a custom query; for bots only */
export declare class bots_answerWebhookJSONQuery_ extends Function_<boolean> {
    static __F: (params: {
        query_id: bigint;
        data: enums.DataJSON;
    }) => boolean;
    /** Identifier of a custom query */
    query_id: bigint;
    /** JSON-serialized answer to the query */
    data: enums.DataJSON;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        query_id: bigint;
        data: enums.DataJSON;
    });
}
/** Set bot command list */
export declare class bots_setBotCommands_ extends Function_<boolean> {
    static __F: (params: {
        scope: enums.BotCommandScope;
        lang_code: string;
        commands: Array<enums.BotCommand>;
    }) => boolean;
    /** Command scope */
    scope: enums.BotCommandScope;
    /** Language code */
    lang_code: string;
    /** Bot commands */
    commands: Array<enums.BotCommand>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        scope: enums.BotCommandScope;
        lang_code: string;
        commands: Array<enums.BotCommand>;
    });
}
/** Clear bot commands for the specified bot scope and language code */
export declare class bots_resetBotCommands_ extends Function_<boolean> {
    static __F: (params: {
        scope: enums.BotCommandScope;
        lang_code: string;
    }) => boolean;
    /** Command scope */
    scope: enums.BotCommandScope;
    /** Language code */
    lang_code: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        scope: enums.BotCommandScope;
        lang_code: string;
    });
}
/** Obtain a list of bot commands for the specified bot scope and language code */
export declare class bots_getBotCommands_ extends Function_<enums.BotCommand[]> {
    static __F: (params: {
        scope: enums.BotCommandScope;
        lang_code: string;
    }) => enums.BotCommand[];
    /** Command scope */
    scope: enums.BotCommandScope;
    /** Language code */
    lang_code: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        scope: enums.BotCommandScope;
        lang_code: string;
    });
}
/** Sets the [menu button action »](https://core.telegram.org/api/bots/menu) for a given user or for all users */
export declare class bots_setBotMenuButton_ extends Function_<boolean> {
    static __F: (params: {
        user_id: enums.InputUser;
        button: enums.BotMenuButton;
    }) => boolean;
    /** User ID */
    user_id: enums.InputUser;
    /** Bot menu button action */
    button: enums.BotMenuButton;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        user_id: enums.InputUser;
        button: enums.BotMenuButton;
    });
}
/** Gets the menu button action for a given user or for all users, previously set using [bots.setBotMenuButton](https://core.telegram.org/method/bots.setBotMenuButton); users can see this information in the [botInfo](https://core.telegram.org/constructor/botInfo) constructor. */
export declare class bots_getBotMenuButton_ extends Function_<enums.BotMenuButton> {
    static __F: (params: {
        user_id: enums.InputUser;
    }) => enums.BotMenuButton;
    /** User ID or empty for the default menu button. */
    user_id: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        user_id: enums.InputUser;
    });
}
/** Set the default [suggested admin rights](https://core.telegram.org/api/rights#suggested-bot-rights) for bots being added as admins to channels, see [here for more info on how to handle them »](https://core.telegram.org/api/rights#suggested-bot-rights). */
export declare class bots_setBotBroadcastDefaultAdminRights_ extends Function_<boolean> {
    static __F: (params: {
        admin_rights: enums.ChatAdminRights;
    }) => boolean;
    /** Admin rights */
    admin_rights: enums.ChatAdminRights;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        admin_rights: enums.ChatAdminRights;
    });
}
/** Set the default [suggested admin rights](https://core.telegram.org/api/rights#suggested-bot-rights) for bots being added as admins to groups, see [here for more info on how to handle them »](https://core.telegram.org/api/rights#suggested-bot-rights). */
export declare class bots_setBotGroupDefaultAdminRights_ extends Function_<boolean> {
    static __F: (params: {
        admin_rights: enums.ChatAdminRights;
    }) => boolean;
    /** Admin rights */
    admin_rights: enums.ChatAdminRights;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        admin_rights: enums.ChatAdminRights;
    });
}
/** Set localized name, about text and description of a bot (or of the current account, if called by a bot). */
export declare class bots_setBotInfo_ extends Function_<boolean> {
    static __F: (params: {
        bot?: enums.InputUser;
        lang_code: string;
        name?: string;
        about?: string;
        description?: string;
    }) => boolean;
    /** If called by a user, **must** contain the peer of a bot we own. */
    bot?: enums.InputUser;
    /** Language code, if left empty update the fallback about text and description */
    lang_code: string;
    /** New bot name */
    name?: string;
    /** New about text */
    about?: string;
    /** New description */
    description?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot?: enums.InputUser;
        lang_code: string;
        name?: string;
        about?: string;
        description?: string;
    });
}
/** Get localized name, about text and description of a bot (or of the current account, if called by a bot). */
export declare class bots_getBotInfo_ extends Function_<enums.bots.BotInfo> {
    static __F: (params: {
        bot?: enums.InputUser;
        lang_code: string;
    }) => enums.bots.BotInfo;
    /** If called by a user, **must** contain the peer of a bot we own. */
    bot?: enums.InputUser;
    /** Language code, if left empty this method will return the fallback about text and description. */
    lang_code: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot?: enums.InputUser;
        lang_code: string;
    });
}
/** Reorder usernames associated to a bot we own. */
export declare class bots_reorderUsernames_ extends Function_<boolean> {
    static __F: (params: {
        bot: enums.InputUser;
        order: Array<string>;
    }) => boolean;
    /** The bot */
    bot: enums.InputUser;
    /** The new order for active usernames. All active usernames must be specified. */
    order: Array<string>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot: enums.InputUser;
        order: Array<string>;
    });
}
/** Activate or deactivate a purchased [fragment.com](https://fragment.com) username associated to a bot we own. */
export declare class bots_toggleUsername_ extends Function_<boolean> {
    static __F: (params: {
        bot: enums.InputUser;
        username: string;
        active: boolean;
    }) => boolean;
    /** The bot */
    bot: enums.InputUser;
    /** Username */
    username: string;
    /** Whether to activate or deactivate it */
    active: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot: enums.InputUser;
        username: string;
        active: boolean;
    });
}
/** Check whether the specified bot can send us messages */
export declare class bots_canSendMessage_ extends Function_<boolean> {
    static __F: (params: {
        bot: enums.InputUser;
    }) => boolean;
    /** The bot */
    bot: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot: enums.InputUser;
    });
}
/** Allow the specified bot to send us messages */
export declare class bots_allowSendMessage_ extends Function_<enums.Updates> {
    static __F: (params: {
        bot: enums.InputUser;
    }) => enums.Updates;
    /** The bot */
    bot: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot: enums.InputUser;
    });
}
/** Send a custom request from a [mini bot app](https://core.telegram.org/api/bots/webapps), triggered by a [web\_app\_invoke\_custom\_method event »](https://core.telegram.org/api/web-events#web-app-invoke-custom-method). */
export declare class bots_invokeWebViewCustomMethod_ extends Function_<enums.DataJSON> {
    static __F: (params: {
        bot: enums.InputUser;
        custom_method: string;
        params: enums.DataJSON;
    }) => enums.DataJSON;
    /** Identifier of the bot associated to the [mini bot app](https://core.telegram.org/api/bots/webapps) */
    bot: enums.InputUser;
    /** Identifier of the custom method to invoke */
    custom_method: string;
    /** Method parameters */
    params: enums.DataJSON;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        bot: enums.InputUser;
        custom_method: string;
        params: enums.DataJSON;
    });
}
/** Get a payment form */
export declare class payments_getPaymentForm_ extends Function_<enums.payments.PaymentForm> {
    static __F: (params: {
        invoice: enums.InputInvoice;
        theme_params?: enums.DataJSON;
    }) => enums.payments.PaymentForm;
    /** Invoice */
    invoice: enums.InputInvoice;
    /** A JSON object with the following keys, containing color theme information (integers, RGB24) to pass to the payment provider, to apply in eventual verification pages:
    `bg_color` - Background color
    `text_color` - Text color
    `hint_color` - Hint text color
    `link_color` - Link color
    `button_color` - Button color
    `button_text_color` - Button text color */
    theme_params?: enums.DataJSON;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        invoice: enums.InputInvoice;
        theme_params?: enums.DataJSON;
    });
}
/** Get payment receipt */
export declare class payments_getPaymentReceipt_ extends Function_<enums.payments.PaymentReceipt> {
    static __F: (params: {
        peer: enums.InputPeer;
        msg_id: number;
    }) => enums.payments.PaymentReceipt;
    /** The peer where the payment receipt was sent */
    peer: enums.InputPeer;
    /** Message ID of receipt */
    msg_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        msg_id: number;
    });
}
/** Submit requested order information for validation */
export declare class payments_validateRequestedInfo_ extends Function_<enums.payments.ValidatedRequestedInfo> {
    static __F: (params: {
        save?: true;
        invoice: enums.InputInvoice;
        info: enums.PaymentRequestedInfo;
    }) => enums.payments.ValidatedRequestedInfo;
    /** Save order information to re-use it for future orders */
    save?: true;
    /** Invoice */
    invoice: enums.InputInvoice;
    /** Requested order information */
    info: enums.PaymentRequestedInfo;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        save?: true;
        invoice: enums.InputInvoice;
        info: enums.PaymentRequestedInfo;
    });
}
/** Send compiled payment form */
export declare class payments_sendPaymentForm_ extends Function_<enums.payments.PaymentResult> {
    static __F: (params: {
        form_id: bigint;
        invoice: enums.InputInvoice;
        requested_info_id?: string;
        shipping_option_id?: string;
        credentials: enums.InputPaymentCredentials;
        tip_amount?: bigint;
    }) => enums.payments.PaymentResult;
    /** Form ID */
    form_id: bigint;
    /** Invoice */
    invoice: enums.InputInvoice;
    /** ID of saved and validated [order info](https://core.telegram.org/constructor/payments.validatedRequestedInfo) */
    requested_info_id?: string;
    /** Chosen shipping option ID */
    shipping_option_id?: string;
    /** Payment credentials */
    credentials: enums.InputPaymentCredentials;
    /** Tip, in the smallest units of the currency (integer, not float/double). For example, for a price of `US$ 1.45` pass `amount = 145`. See the exp parameter in [currencies.json](https://core.telegram.org/bots/payments/currencies.json), it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). */
    tip_amount?: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        form_id: bigint;
        invoice: enums.InputInvoice;
        requested_info_id?: string;
        shipping_option_id?: string;
        credentials: enums.InputPaymentCredentials;
        tip_amount?: bigint;
    });
}
/** Get saved payment information */
export declare class payments_getSavedInfo_ extends Function_<enums.payments.SavedInfo> {
    static __F: () => enums.payments.SavedInfo;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Clear saved payment information */
export declare class payments_clearSavedInfo_ extends Function_<boolean> {
    static __F: (params?: {
        credentials?: true;
        info?: true;
    }) => boolean;
    /** Remove saved payment credentials */
    credentials?: true;
    /** Clear the last order settings saved by the user */
    info?: true;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        credentials?: true;
        info?: true;
    });
}
/** Get info about a credit card */
export declare class payments_getBankCardData_ extends Function_<enums.payments.BankCardData> {
    static __F: (params: {
        number: string;
    }) => enums.payments.BankCardData;
    /** Credit card number */
    number: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        number: string;
    });
}
/** Generate an [invoice deep link](https://core.telegram.org/api/links#invoice-links) */
export declare class payments_exportInvoice_ extends Function_<enums.payments.ExportedInvoice> {
    static __F: (params: {
        invoice_media: enums.InputMedia;
    }) => enums.payments.ExportedInvoice;
    /** Invoice */
    invoice_media: enums.InputMedia;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        invoice_media: enums.InputMedia;
    });
}
/** Informs server about a purchase made through the App Store: for official applications only. */
export declare class payments_assignAppStoreTransaction_ extends Function_<enums.Updates> {
    static __F: (params: {
        receipt: Uint8Array;
        purpose: enums.InputStorePaymentPurpose;
    }) => enums.Updates;
    /** Receipt */
    receipt: Uint8Array;
    /** Payment purpose */
    purpose: enums.InputStorePaymentPurpose;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        receipt: Uint8Array;
        purpose: enums.InputStorePaymentPurpose;
    });
}
/** Informs server about a purchase made through the Play Store: for official applications only. */
export declare class payments_assignPlayMarketTransaction_ extends Function_<enums.Updates> {
    static __F: (params: {
        receipt: enums.DataJSON;
        purpose: enums.InputStorePaymentPurpose;
    }) => enums.Updates;
    /** Receipt */
    receipt: enums.DataJSON;
    /** Payment purpose */
    purpose: enums.InputStorePaymentPurpose;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        receipt: enums.DataJSON;
        purpose: enums.InputStorePaymentPurpose;
    });
}
/** Checks whether Telegram Premium purchase is possible. Must be called before in-store Premium purchase, official apps only. */
export declare class payments_canPurchasePremium_ extends Function_<boolean> {
    static __F: (params: {
        purpose: enums.InputStorePaymentPurpose;
    }) => boolean;
    /** Payment purpose */
    purpose: enums.InputStorePaymentPurpose;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        purpose: enums.InputStorePaymentPurpose;
    });
}
/** Obtain a list of Telegram Premium [giveaway/gift code »](https://core.telegram.org/api/giveaways) options. */
export declare class payments_getPremiumGiftCodeOptions_ extends Function_<enums.PremiumGiftCodeOption[]> {
    static __F: (params?: {
        boost_peer?: enums.InputPeer;
    }) => enums.PremiumGiftCodeOption[];
    /** The channel that will start the giveaway */
    boost_peer?: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        boost_peer?: enums.InputPeer;
    });
}
/** Obtain information about a [Telegram Premium giftcode »](https://core.telegram.org/api/giveaways) */
export declare class payments_checkGiftCode_ extends Function_<enums.payments.CheckedGiftCode> {
    static __F: (params: {
        slug: string;
    }) => enums.payments.CheckedGiftCode;
    /** The giftcode to check */
    slug: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        slug: string;
    });
}
/** Apply a [Telegram Premium giftcode »](https://core.telegram.org/api/giveaways) */
export declare class payments_applyGiftCode_ extends Function_<enums.Updates> {
    static __F: (params: {
        slug: string;
    }) => enums.Updates;
    /** The code to apply */
    slug: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        slug: string;
    });
}
/** Obtain information about a [Telegram Premium giveaway »](https://core.telegram.org/api/giveaways). */
export declare class payments_getGiveawayInfo_ extends Function_<enums.payments.GiveawayInfo> {
    static __F: (params: {
        peer: enums.InputPeer;
        msg_id: number;
    }) => enums.payments.GiveawayInfo;
    /** The peer where the giveaway was posted. */
    peer: enums.InputPeer;
    /** Message ID of the [messageActionGiveawayLaunch](https://core.telegram.org/constructor/messageActionGiveawayLaunch) service message */
    msg_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        msg_id: number;
    });
}
/** Launch a [prepaid giveaway »](https://core.telegram.org/api/giveaways). */
export declare class payments_launchPrepaidGiveaway_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        giveaway_id: bigint;
        purpose: enums.InputStorePaymentPurpose;
    }) => enums.Updates;
    /** The peer where to launch the giveaway. */
    peer: enums.InputPeer;
    /** The prepaid giveaway ID. */
    giveaway_id: bigint;
    /** Giveway parameters */
    purpose: enums.InputStorePaymentPurpose;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        giveaway_id: bigint;
        purpose: enums.InputStorePaymentPurpose;
    });
}
/** Create a stickerset, bots only. */
export declare class stickers_createStickerSet_ extends Function_<enums.messages.StickerSet> {
    static __F: (params: {
        masks?: true;
        animated?: true;
        videos?: true;
        emojis?: true;
        text_color?: true;
        user_id: enums.InputUser;
        title: string;
        short_name: string;
        thumb?: enums.InputDocument;
        stickers: Array<enums.InputStickerSetItem>;
        software?: string;
    }) => enums.messages.StickerSet;
    /** Whether this is a mask stickerset */
    masks?: true;
    /** Whether this is an animated stickerset */
    animated?: true;
    /** Whether this is a video stickerset */
    videos?: true;
    /** Whether this is a [custom emoji](https://core.telegram.org/api/custom-emoji) stickerset. */
    emojis?: true;
    /** Whether the color of TGS custom emojis contained in this set should be changed to the text color when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context. For custom emoji stickersets only. */
    text_color?: true;
    /** Stickerset owner */
    user_id: enums.InputUser;
    /** Stickerset name, `1-64` chars */
    title: string;
    /** Short name of sticker set, to be used in [sticker deep links »](https://core.telegram.org/api/links#stickerset-links). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and, **if called by a bot**, must end in `"_by_<bot_username>"`. `<bot_username>` is case insensitive. 1-64 characters. */
    short_name: string;
    /** Thumbnail */
    thumb?: enums.InputDocument;
    /** Stickers */
    stickers: Array<enums.InputStickerSetItem>;
    /** Used when [importing stickers using the sticker import SDKs](https://core.telegram.org/import-stickers), specifies the name of the software that created the stickers */
    software?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        masks?: true;
        animated?: true;
        videos?: true;
        emojis?: true;
        text_color?: true;
        user_id: enums.InputUser;
        title: string;
        short_name: string;
        thumb?: enums.InputDocument;
        stickers: Array<enums.InputStickerSetItem>;
        software?: string;
    });
}
/** Remove a sticker from the set where it belongs, bots only. The sticker set must have been created by the bot. */
export declare class stickers_removeStickerFromSet_ extends Function_<enums.messages.StickerSet> {
    static __F: (params: {
        sticker: enums.InputDocument;
    }) => enums.messages.StickerSet;
    /** The sticker to remove */
    sticker: enums.InputDocument;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        sticker: enums.InputDocument;
    });
}
/** Changes the absolute position of a sticker in the set to which it belongs; for bots only. The sticker set must have been created by the bot */
export declare class stickers_changeStickerPosition_ extends Function_<enums.messages.StickerSet> {
    static __F: (params: {
        sticker: enums.InputDocument;
        position: number;
    }) => enums.messages.StickerSet;
    /** The sticker */
    sticker: enums.InputDocument;
    /** The new position of the sticker, zero-based */
    position: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        sticker: enums.InputDocument;
        position: number;
    });
}
/** Add a sticker to a stickerset, bots only. The sticker set must have been created by the bot. */
export declare class stickers_addStickerToSet_ extends Function_<enums.messages.StickerSet> {
    static __F: (params: {
        stickerset: enums.InputStickerSet;
        sticker: enums.InputStickerSetItem;
    }) => enums.messages.StickerSet;
    /** The stickerset */
    stickerset: enums.InputStickerSet;
    /** The sticker */
    sticker: enums.InputStickerSetItem;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        stickerset: enums.InputStickerSet;
        sticker: enums.InputStickerSetItem;
    });
}
/** Set stickerset thumbnail */
export declare class stickers_setStickerSetThumb_ extends Function_<enums.messages.StickerSet> {
    static __F: (params: {
        stickerset: enums.InputStickerSet;
        thumb?: enums.InputDocument;
        thumb_document_id?: bigint;
    }) => enums.messages.StickerSet;
    /** Stickerset */
    stickerset: enums.InputStickerSet;
    /** Thumbnail (only for normal stickersets, not custom emoji stickersets). */
    thumb?: enums.InputDocument;
    /** Only for [custom emoji stickersets](https://core.telegram.org/api/custom-emoji), ID of a custom emoji present in the set to use as thumbnail; pass 0 to fallback to the first custom emoji of the set. */
    thumb_document_id?: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        stickerset: enums.InputStickerSet;
        thumb?: enums.InputDocument;
        thumb_document_id?: bigint;
    });
}
/** Check whether the given short name is available */
export declare class stickers_checkShortName_ extends Function_<boolean> {
    static __F: (params: {
        short_name: string;
    }) => boolean;
    /** Short name */
    short_name: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        short_name: string;
    });
}
/** Suggests a short name for a given stickerpack name */
export declare class stickers_suggestShortName_ extends Function_<enums.stickers.SuggestedShortName> {
    static __F: (params: {
        title: string;
    }) => enums.stickers.SuggestedShortName;
    /** Sticker pack name */
    title: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        title: string;
    });
}
/** Update the keywords, emojis or [mask coordinates](https://core.telegram.org/api/stickers#mask-stickers) of a sticker, bots only. */
export declare class stickers_changeSticker_ extends Function_<enums.messages.StickerSet> {
    static __F: (params: {
        sticker: enums.InputDocument;
        emoji?: string;
        mask_coords?: enums.MaskCoords;
        keywords?: string;
    }) => enums.messages.StickerSet;
    /** The sticker */
    sticker: enums.InputDocument;
    /** If set, updates the emoji list associated to the sticker */
    emoji?: string;
    /** If set, updates the [mask coordinates](https://core.telegram.org/api/stickers#mask-stickers) */
    mask_coords?: enums.MaskCoords;
    /** If set, updates the sticker keywords (separated by commas). Can't be provided for mask stickers. */
    keywords?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        sticker: enums.InputDocument;
        emoji?: string;
        mask_coords?: enums.MaskCoords;
        keywords?: string;
    });
}
/** Renames a stickerset, bots only. */
export declare class stickers_renameStickerSet_ extends Function_<enums.messages.StickerSet> {
    static __F: (params: {
        stickerset: enums.InputStickerSet;
        title: string;
    }) => enums.messages.StickerSet;
    /** Stickerset to rename */
    stickerset: enums.InputStickerSet;
    /** New stickerset title */
    title: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        stickerset: enums.InputStickerSet;
        title: string;
    });
}
/** Deletes a stickerset we created, bots only. */
export declare class stickers_deleteStickerSet_ extends Function_<boolean> {
    static __F: (params: {
        stickerset: enums.InputStickerSet;
    }) => boolean;
    /** Stickerset to delete */
    stickerset: enums.InputStickerSet;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        stickerset: enums.InputStickerSet;
    });
}
/** Get phone call configuration to be passed to libtgvoip's shared config */
export declare class phone_getCallConfig_ extends Function_<enums.DataJSON> {
    static __F: () => enums.DataJSON;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Start a telegram phone call */
export declare class phone_requestCall_ extends Function_<enums.phone.PhoneCall> {
    static __F: (params: {
        video?: true;
        user_id: enums.InputUser;
        random_id: number;
        g_a_hash: Uint8Array;
        protocol: enums.PhoneCallProtocol;
    }) => enums.phone.PhoneCall;
    /** Whether to start a video call */
    video?: true;
    /** Destination of the phone call */
    user_id: enums.InputUser;
    /** Random ID to avoid resending the same object */
    random_id: number;
    /** [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) */
    g_a_hash: Uint8Array;
    /** Phone call settings */
    protocol: enums.PhoneCallProtocol;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        video?: true;
        user_id: enums.InputUser;
        random_id: number;
        g_a_hash: Uint8Array;
        protocol: enums.PhoneCallProtocol;
    });
}
/** Accept incoming call */
export declare class phone_acceptCall_ extends Function_<enums.phone.PhoneCall> {
    static __F: (params: {
        peer: enums.InputPhoneCall;
        g_b: Uint8Array;
        protocol: enums.PhoneCallProtocol;
    }) => enums.phone.PhoneCall;
    /** The call to accept */
    peer: enums.InputPhoneCall;
    /** [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) */
    g_b: Uint8Array;
    /** Phone call settings */
    protocol: enums.PhoneCallProtocol;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPhoneCall;
        g_b: Uint8Array;
        protocol: enums.PhoneCallProtocol;
    });
}
/** [Complete phone call E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) */
export declare class phone_confirmCall_ extends Function_<enums.phone.PhoneCall> {
    static __F: (params: {
        peer: enums.InputPhoneCall;
        g_a: Uint8Array;
        key_fingerprint: bigint;
        protocol: enums.PhoneCallProtocol;
    }) => enums.phone.PhoneCall;
    /** The phone call */
    peer: enums.InputPhoneCall;
    /** [Parameter for E2E encryption key exchange »](https://core.telegram.org/api/end-to-end/voice-calls) */
    g_a: Uint8Array;
    /** Key fingerprint */
    key_fingerprint: bigint;
    /** Phone call settings */
    protocol: enums.PhoneCallProtocol;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPhoneCall;
        g_a: Uint8Array;
        key_fingerprint: bigint;
        protocol: enums.PhoneCallProtocol;
    });
}
/** Optional: notify the server that the user is currently busy in a call: this will automatically refuse all incoming phone calls until the current phone call is ended. */
export declare class phone_receivedCall_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPhoneCall;
    }) => boolean;
    /** The phone call we're currently in */
    peer: enums.InputPhoneCall;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPhoneCall;
    });
}
/** Refuse or end running call */
export declare class phone_discardCall_ extends Function_<enums.Updates> {
    static __F: (params: {
        video?: true;
        peer: enums.InputPhoneCall;
        duration: number;
        reason: enums.PhoneCallDiscardReason;
        connection_id: bigint;
    }) => enums.Updates;
    /** Whether this is a video call */
    video?: true;
    /** The phone call */
    peer: enums.InputPhoneCall;
    /** Call duration */
    duration: number;
    /** Why was the call discarded */
    reason: enums.PhoneCallDiscardReason;
    /** Preferred libtgvoip relay ID */
    connection_id: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        video?: true;
        peer: enums.InputPhoneCall;
        duration: number;
        reason: enums.PhoneCallDiscardReason;
        connection_id: bigint;
    });
}
/** Rate a call, returns info about the rating message sent to the official VoIP bot. */
export declare class phone_setCallRating_ extends Function_<enums.Updates> {
    static __F: (params: {
        user_initiative?: true;
        peer: enums.InputPhoneCall;
        rating: number;
        comment: string;
    }) => enums.Updates;
    /** Whether the user decided on their own initiative to rate the call */
    user_initiative?: true;
    /** The call to rate */
    peer: enums.InputPhoneCall;
    /** Rating in `1-5` stars */
    rating: number;
    /** An additional comment */
    comment: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        user_initiative?: true;
        peer: enums.InputPhoneCall;
        rating: number;
        comment: string;
    });
}
/** Send phone call debug data to server */
export declare class phone_saveCallDebug_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPhoneCall;
        debug: enums.DataJSON;
    }) => boolean;
    /** Phone call */
    peer: enums.InputPhoneCall;
    /** Debug statistics obtained from libtgvoip */
    debug: enums.DataJSON;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPhoneCall;
        debug: enums.DataJSON;
    });
}
/** Send VoIP signaling data */
export declare class phone_sendSignalingData_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPhoneCall;
        data: Uint8Array;
    }) => boolean;
    /** Phone call */
    peer: enums.InputPhoneCall;
    /** Signaling payload */
    data: Uint8Array;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPhoneCall;
        data: Uint8Array;
    });
}
/** Create a group call or livestream */
export declare class phone_createGroupCall_ extends Function_<enums.Updates> {
    static __F: (params: {
        rtmp_stream?: true;
        peer: enums.InputPeer;
        random_id: number;
        title?: string;
        schedule_date?: number;
    }) => enums.Updates;
    /** Whether RTMP stream support should be enabled: only the [group/supergroup/channel](https://core.telegram.org/api/channel) owner can use this flag. */
    rtmp_stream?: true;
    /** Associate the group call or livestream to the provided [group/supergroup/channel](https://core.telegram.org/api/channel) */
    peer: enums.InputPeer;
    /** Unique client message ID required to prevent creation of duplicate group calls */
    random_id: number;
    /** Call title */
    title?: string;
    /** For scheduled group call or livestreams, the absolute date when the group call will start */
    schedule_date?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        rtmp_stream?: true;
        peer: enums.InputPeer;
        random_id: number;
        title?: string;
        schedule_date?: number;
    });
}
/** Join a group call */
export declare class phone_joinGroupCall_ extends Function_<enums.Updates> {
    static __F: (params: {
        muted?: true;
        video_stopped?: true;
        call: enums.InputGroupCall;
        join_as: enums.InputPeer;
        invite_hash?: string;
        params: enums.DataJSON;
    }) => enums.Updates;
    /** If set, the user will be muted by default upon joining. */
    muted?: true;
    /** If set, the user's video will be disabled by default upon joining. */
    video_stopped?: true;
    /** The group call */
    call: enums.InputGroupCall;
    /** Join the group call, presenting yourself as the specified user/channel */
    join_as: enums.InputPeer;
    /** The invitation hash from the [invite link »](https://core.telegram.org/api/links#video-chat-livestream-links), if provided allows speaking in a livestream or muted group chat. */
    invite_hash?: string;
    /** WebRTC parameters */
    params: enums.DataJSON;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        muted?: true;
        video_stopped?: true;
        call: enums.InputGroupCall;
        join_as: enums.InputPeer;
        invite_hash?: string;
        params: enums.DataJSON;
    });
}
/** Leave a group call */
export declare class phone_leaveGroupCall_ extends Function_<enums.Updates> {
    static __F: (params: {
        call: enums.InputGroupCall;
        source: number;
    }) => enums.Updates;
    /** The group call */
    call: enums.InputGroupCall;
    /** Your source ID */
    source: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
        source: number;
    });
}
/** Invite a set of users to a group call. */
export declare class phone_inviteToGroupCall_ extends Function_<enums.Updates> {
    static __F: (params: {
        call: enums.InputGroupCall;
        users: Array<enums.InputUser>;
    }) => enums.Updates;
    /** The group call */
    call: enums.InputGroupCall;
    /** The users to invite. */
    users: Array<enums.InputUser>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
        users: Array<enums.InputUser>;
    });
}
/** Terminate a group call */
export declare class phone_discardGroupCall_ extends Function_<enums.Updates> {
    static __F: (params: {
        call: enums.InputGroupCall;
    }) => enums.Updates;
    /** The group call to terminate */
    call: enums.InputGroupCall;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
    });
}
/** Change group call settings */
export declare class phone_toggleGroupCallSettings_ extends Function_<enums.Updates> {
    static __F: (params: {
        reset_invite_hash?: true;
        call: enums.InputGroupCall;
        join_muted?: boolean;
    }) => enums.Updates;
    /** Invalidate existing invite links */
    reset_invite_hash?: true;
    /** Group call */
    call: enums.InputGroupCall;
    /** Whether all users will that join this group call are muted by default upon joining the group call */
    join_muted?: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        reset_invite_hash?: true;
        call: enums.InputGroupCall;
        join_muted?: boolean;
    });
}
/** Get info about a group call */
export declare class phone_getGroupCall_ extends Function_<enums.phone.GroupCall> {
    static __F: (params: {
        call: enums.InputGroupCall;
        limit: number;
    }) => enums.phone.GroupCall;
    /** The group call */
    call: enums.InputGroupCall;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
        limit: number;
    });
}
/** Get group call participants */
export declare class phone_getGroupParticipants_ extends Function_<enums.phone.GroupParticipants> {
    static __F: (params: {
        call: enums.InputGroupCall;
        ids: Array<enums.InputPeer>;
        sources: Array<number>;
        offset: string;
        limit: number;
    }) => enums.phone.GroupParticipants;
    /** Group call */
    call: enums.InputGroupCall;
    /** If specified, will fetch group participant info about the specified peers */
    ids: Array<enums.InputPeer>;
    /** If specified, will fetch group participant info about the specified WebRTC source IDs */
    sources: Array<number>;
    /** Offset for results, taken from the `next_offset` field of [phone.groupParticipants](https://core.telegram.org/constructor/phone.groupParticipants), initially an empty string.
    Note: if no more results are available, the method call will return an empty `next_offset`; thus, avoid providing the `next_offset` returned in [phone.groupParticipants](https://core.telegram.org/constructor/phone.groupParticipants) if it is empty, to avoid an infinite loop. */
    offset: string;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
        ids: Array<enums.InputPeer>;
        sources: Array<number>;
        offset: string;
        limit: number;
    });
}
/** Check whether the group call Server Forwarding Unit is currently receiving the streams with the specified WebRTC source IDs.
Returns an intersection of the source IDs specified in `sources`, and the source IDs currently being forwarded by the SFU. */
export declare class phone_checkGroupCall_ extends Function_<number[]> {
    static __F: (params: {
        call: enums.InputGroupCall;
        sources: Array<number>;
    }) => number[];
    /** Group call */
    call: enums.InputGroupCall;
    /** Source IDs */
    sources: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
        sources: Array<number>;
    });
}
/** Start or stop recording a group call: the recorded audio and video streams will be automatically sent to `Saved messages` (the chat with ourselves). */
export declare class phone_toggleGroupCallRecord_ extends Function_<enums.Updates> {
    static __F: (params: {
        start?: true;
        video?: true;
        call: enums.InputGroupCall;
        title?: string;
        video_portrait?: boolean;
    }) => enums.Updates;
    /** Whether to start or stop recording */
    start?: true;
    /** Whether to also record video streams */
    video?: true;
    /** The group call or livestream */
    call: enums.InputGroupCall;
    /** Recording title */
    title?: string;
    /** If video stream recording is enabled, whether to record in portrait or landscape mode */
    video_portrait?: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        start?: true;
        video?: true;
        call: enums.InputGroupCall;
        title?: string;
        video_portrait?: boolean;
    });
}
/** Edit information about a given group call participant */
export declare class phone_editGroupCallParticipant_ extends Function_<enums.Updates> {
    static __F: (params: {
        call: enums.InputGroupCall;
        participant: enums.InputPeer;
        muted?: boolean;
        volume?: number;
        raise_hand?: boolean;
        video_stopped?: boolean;
        video_paused?: boolean;
        presentation_paused?: boolean;
    }) => enums.Updates;
    /** The group call */
    call: enums.InputGroupCall;
    /** The group call participant (can also be the user itself) */
    participant: enums.InputPeer;
    /** Whether to mute or unmute the specified participant */
    muted?: boolean;
    /** New volume */
    volume?: number;
    /** Raise or lower hand */
    raise_hand?: boolean;
    /** Start or stop the video stream */
    video_stopped?: boolean;
    /** Pause or resume the video stream */
    video_paused?: boolean;
    /** Pause or resume the screen sharing stream */
    presentation_paused?: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
        participant: enums.InputPeer;
        muted?: boolean;
        volume?: number;
        raise_hand?: boolean;
        video_stopped?: boolean;
        video_paused?: boolean;
        presentation_paused?: boolean;
    });
}
/** Edit the title of a group call or livestream */
export declare class phone_editGroupCallTitle_ extends Function_<enums.Updates> {
    static __F: (params: {
        call: enums.InputGroupCall;
        title: string;
    }) => enums.Updates;
    /** Group call */
    call: enums.InputGroupCall;
    /** New title */
    title: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
        title: string;
    });
}
/** Get a list of peers that can be used to join a group call, presenting yourself as a specific user/channel. */
export declare class phone_getGroupCallJoinAs_ extends Function_<enums.phone.JoinAsPeers> {
    static __F: (params: {
        peer: enums.InputPeer;
    }) => enums.phone.JoinAsPeers;
    /** The dialog whose group call or livestream we're trying to join */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
    });
}
/** Get an [invite link](https://core.telegram.org/api/links#video-chat-livestream-links) for a group call or livestream */
export declare class phone_exportGroupCallInvite_ extends Function_<enums.phone.ExportedGroupCallInvite> {
    static __F: (params: {
        can_self_unmute?: true;
        call: enums.InputGroupCall;
    }) => enums.phone.ExportedGroupCallInvite;
    /** For livestreams or muted group chats, if set, users that join using this link will be able to speak without explicitly requesting permission by (for example by raising their hand). */
    can_self_unmute?: true;
    /** The group call */
    call: enums.InputGroupCall;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        can_self_unmute?: true;
        call: enums.InputGroupCall;
    });
}
/** Subscribe or unsubscribe to a scheduled group call */
export declare class phone_toggleGroupCallStartSubscription_ extends Function_<enums.Updates> {
    static __F: (params: {
        call: enums.InputGroupCall;
        subscribed: boolean;
    }) => enums.Updates;
    /** Scheduled group call */
    call: enums.InputGroupCall;
    /** Enable or disable subscription */
    subscribed: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
        subscribed: boolean;
    });
}
/** Start a scheduled group call. */
export declare class phone_startScheduledGroupCall_ extends Function_<enums.Updates> {
    static __F: (params: {
        call: enums.InputGroupCall;
    }) => enums.Updates;
    /** The scheduled group call */
    call: enums.InputGroupCall;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
    });
}
/** Set the default peer that will be used to join a group call in a specific dialog. */
export declare class phone_saveDefaultGroupCallJoinAs_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        join_as: enums.InputPeer;
    }) => boolean;
    /** The dialog */
    peer: enums.InputPeer;
    /** The default peer that will be used to join group calls in this dialog, presenting yourself as a specific user/channel. */
    join_as: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        join_as: enums.InputPeer;
    });
}
/** Start screen sharing in a call */
export declare class phone_joinGroupCallPresentation_ extends Function_<enums.Updates> {
    static __F: (params: {
        call: enums.InputGroupCall;
        params: enums.DataJSON;
    }) => enums.Updates;
    /** The group call */
    call: enums.InputGroupCall;
    /** WebRTC parameters */
    params: enums.DataJSON;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
        params: enums.DataJSON;
    });
}
/** Stop screen sharing in a group call */
export declare class phone_leaveGroupCallPresentation_ extends Function_<enums.Updates> {
    static __F: (params: {
        call: enums.InputGroupCall;
    }) => enums.Updates;
    /** The group call */
    call: enums.InputGroupCall;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
    });
}
/** Get info about RTMP streams in a group call or livestream.
This method should be invoked to the same group/channel-related DC used for [downloading livestream chunks](https://core.telegram.org/api/files#downloading-files).
As usual, the media DC is preferred, if available. */
export declare class phone_getGroupCallStreamChannels_ extends Function_<enums.phone.GroupCallStreamChannels> {
    static __F: (params: {
        call: enums.InputGroupCall;
    }) => enums.phone.GroupCallStreamChannels;
    /** Group call or livestream */
    call: enums.InputGroupCall;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        call: enums.InputGroupCall;
    });
}
/** Get RTMP URL and stream key for RTMP livestreams. Can be used even before creating the actual RTMP livestream with [phone.createGroupCall](https://core.telegram.org/method/phone.createGroupCall) (the `rtmp_stream` flag must be set). */
export declare class phone_getGroupCallStreamRtmpUrl_ extends Function_<enums.phone.GroupCallStreamRtmpUrl> {
    static __F: (params: {
        peer: enums.InputPeer;
        revoke: boolean;
    }) => enums.phone.GroupCallStreamRtmpUrl;
    /** Peer to livestream into */
    peer: enums.InputPeer;
    /** Whether to revoke the previous stream key or simply return the existing one */
    revoke: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        revoke: boolean;
    });
}
/** Save phone call debug information */
export declare class phone_saveCallLog_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPhoneCall;
        file: enums.InputFile;
    }) => boolean;
    /** Phone call */
    peer: enums.InputPhoneCall;
    /** Logs */
    file: enums.InputFile;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPhoneCall;
        file: enums.InputFile;
    });
}
/** Get localization pack strings */
export declare class langpack_getLangPack_ extends Function_<enums.LangPackDifference> {
    static __F: (params: {
        lang_pack: string;
        lang_code: string;
    }) => enums.LangPackDifference;
    /** Language pack name, usually obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links) */
    lang_pack: string;
    /** Language code */
    lang_code: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        lang_pack: string;
        lang_code: string;
    });
}
/** Get strings from a language pack */
export declare class langpack_getStrings_ extends Function_<enums.LangPackString[]> {
    static __F: (params: {
        lang_pack: string;
        lang_code: string;
        keys: Array<string>;
    }) => enums.LangPackString[];
    /** Language pack name, usually obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links) */
    lang_pack: string;
    /** Language code */
    lang_code: string;
    /** Strings to get */
    keys: Array<string>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        lang_pack: string;
        lang_code: string;
        keys: Array<string>;
    });
}
/** Get new strings in language pack */
export declare class langpack_getDifference_ extends Function_<enums.LangPackDifference> {
    static __F: (params: {
        lang_pack: string;
        lang_code: string;
        from_version: number;
    }) => enums.LangPackDifference;
    /** Language pack */
    lang_pack: string;
    /** Language code */
    lang_code: string;
    /** Previous localization pack version */
    from_version: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        lang_pack: string;
        lang_code: string;
        from_version: number;
    });
}
/** Get information about all languages in a localization pack */
export declare class langpack_getLanguages_ extends Function_<enums.LangPackLanguage[]> {
    static __F: (params: {
        lang_pack: string;
    }) => enums.LangPackLanguage[];
    /** Language pack */
    lang_pack: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        lang_pack: string;
    });
}
/** Get information about a language in a localization pack */
export declare class langpack_getLanguage_ extends Function_<enums.LangPackLanguage> {
    static __F: (params: {
        lang_pack: string;
        lang_code: string;
    }) => enums.LangPackLanguage;
    /** Language pack name, usually obtained from a [language pack link](https://core.telegram.org/api/links#language-pack-links) */
    lang_pack: string;
    /** Language code */
    lang_code: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        lang_pack: string;
        lang_code: string;
    });
}
/** Edit peers in [peer folder](https://core.telegram.org/api/folders#peer-folders) */
export declare class folders_editPeerFolders_ extends Function_<enums.Updates> {
    static __F: (params: {
        folder_peers: Array<enums.InputFolderPeer>;
    }) => enums.Updates;
    /** New peer list */
    folder_peers: Array<enums.InputFolderPeer>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        folder_peers: Array<enums.InputFolderPeer>;
    });
}
/** Get [channel statistics](https://core.telegram.org/api/stats) */
export declare class stats_getBroadcastStats_ extends Function_<enums.stats.BroadcastStats> {
    static __F: (params: {
        dark?: true;
        channel: enums.InputChannel;
    }) => enums.stats.BroadcastStats;
    /** Whether to enable dark theme for graph colors */
    dark?: true;
    /** The channel */
    channel: enums.InputChannel;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        dark?: true;
        channel: enums.InputChannel;
    });
}
/** Load [channel statistics graph](https://core.telegram.org/api/stats) asynchronously */
export declare class stats_loadAsyncGraph_ extends Function_<enums.StatsGraph> {
    static __F: (params: {
        token: string;
        x?: bigint;
    }) => enums.StatsGraph;
    /** Graph token from [statsGraphAsync](https://core.telegram.org/constructor/statsGraphAsync) constructor */
    token: string;
    /** Zoom value, if required */
    x?: bigint;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        token: string;
        x?: bigint;
    });
}
/** Get [supergroup statistics](https://core.telegram.org/api/stats) */
export declare class stats_getMegagroupStats_ extends Function_<enums.stats.MegagroupStats> {
    static __F: (params: {
        dark?: true;
        channel: enums.InputChannel;
    }) => enums.stats.MegagroupStats;
    /** Whether to enable dark theme for graph colors */
    dark?: true;
    /** [Supergroup ID](https://core.telegram.org/api/channel) */
    channel: enums.InputChannel;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        dark?: true;
        channel: enums.InputChannel;
    });
}
/** Obtains a list of messages, indicating to which other public channels was a channel message forwarded.
Will return a list of [messages](https://core.telegram.org/constructor/message) with `peer_id` equal to the public channel to which this message was forwarded. */
export declare class stats_getMessagePublicForwards_ extends Function_<enums.stats.PublicForwards> {
    static __F: (params: {
        channel: enums.InputChannel;
        msg_id: number;
        offset: string;
        limit: number;
    }) => enums.stats.PublicForwards;
    /** Source channel */
    channel: enums.InputChannel;
    /** Source message ID */
    msg_id: number;
    /** Offset for [pagination](https://core.telegram.org/api/offsets), empty string on first call, then use the `next_offset` field of the returned constructor (if present, otherwise no more results are available). */
    offset: string;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        channel: enums.InputChannel;
        msg_id: number;
        offset: string;
        limit: number;
    });
}
/** Get [message statistics](https://core.telegram.org/api/stats) */
export declare class stats_getMessageStats_ extends Function_<enums.stats.MessageStats> {
    static __F: (params: {
        dark?: true;
        channel: enums.InputChannel;
        msg_id: number;
    }) => enums.stats.MessageStats;
    /** Whether to enable dark theme for graph colors */
    dark?: true;
    /** Channel ID */
    channel: enums.InputChannel;
    /** Message ID */
    msg_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        dark?: true;
        channel: enums.InputChannel;
        msg_id: number;
    });
}
/** Get [statistics](https://core.telegram.org/api/stats) for a certain [story](https://core.telegram.org/api/stories). */
export declare class stats_getStoryStats_ extends Function_<enums.stats.StoryStats> {
    static __F: (params: {
        dark?: true;
        peer: enums.InputPeer;
        id: number;
    }) => enums.stats.StoryStats;
    /** Whether to enable the dark theme for graph colors */
    dark?: true;
    /** The peer that posted the story */
    peer: enums.InputPeer;
    /** Story ID */
    id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        dark?: true;
        peer: enums.InputPeer;
        id: number;
    });
}
/** Obtain forwards of a [story](https://core.telegram.org/api/stories) as a message to public chats and reposts by public channels. */
export declare class stats_getStoryPublicForwards_ extends Function_<enums.stats.PublicForwards> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: number;
        offset: string;
        limit: number;
    }) => enums.stats.PublicForwards;
    /** Peer where the story was originally posted */
    peer: enums.InputPeer;
    /** [Story](https://core.telegram.org/api/stories) ID */
    id: number;
    /** Offset for pagination, from [stats.PublicForwards](https://core.telegram.org/constructor/stats.publicForwards).`next_offset`. */
    offset: string;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: number;
        offset: string;
        limit: number;
    });
}
/** Export a [folder »](https://core.telegram.org/api/folders), creating a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export declare class chatlists_exportChatlistInvite_ extends Function_<enums.chatlists.ExportedChatlistInvite> {
    static __F: (params: {
        chatlist: enums.InputChatlist;
        title: string;
        peers: Array<enums.InputPeer>;
    }) => enums.chatlists.ExportedChatlistInvite;
    /** The folder to export */
    chatlist: enums.InputChatlist;
    /** An optional name for the link */
    title: string;
    /** The list of channels, group and supergroups to share with the link. Basic groups will automatically be [converted to supergroups](https://core.telegram.org/api/channel#migration) when invoking the method. */
    peers: Array<enums.InputPeer>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chatlist: enums.InputChatlist;
        title: string;
        peers: Array<enums.InputPeer>;
    });
}
/** Delete a previously created [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export declare class chatlists_deleteExportedInvite_ extends Function_<boolean> {
    static __F: (params: {
        chatlist: enums.InputChatlist;
        slug: string;
    }) => boolean;
    /** The related folder */
    chatlist: enums.InputChatlist;
    /** `slug` obtained from the [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
    slug: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chatlist: enums.InputChatlist;
        slug: string;
    });
}
/** Edit a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export declare class chatlists_editExportedInvite_ extends Function_<enums.ExportedChatlistInvite> {
    static __F: (params: {
        chatlist: enums.InputChatlist;
        slug: string;
        title?: string;
        peers?: Array<enums.InputPeer>;
    }) => enums.ExportedChatlistInvite;
    /** Folder ID */
    chatlist: enums.InputChatlist;
    /** `slug` obtained from the [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
    slug: string;
    /** If set, sets a new name for the link */
    title?: string;
    /** If set, changes the list of peers shared with the link */
    peers?: Array<enums.InputPeer>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chatlist: enums.InputChatlist;
        slug: string;
        title?: string;
        peers?: Array<enums.InputPeer>;
    });
}
/** List all [chat folder deep links »](https://core.telegram.org/api/links#chat-folder-links) associated to a folder */
export declare class chatlists_getExportedInvites_ extends Function_<enums.chatlists.ExportedInvites> {
    static __F: (params: {
        chatlist: enums.InputChatlist;
    }) => enums.chatlists.ExportedInvites;
    /** The folder */
    chatlist: enums.InputChatlist;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chatlist: enums.InputChatlist;
    });
}
/** Obtain information about a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export declare class chatlists_checkChatlistInvite_ extends Function_<enums.chatlists.ChatlistInvite> {
    static __F: (params: {
        slug: string;
    }) => enums.chatlists.ChatlistInvite;
    /** `slug` obtained from the [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links) */
    slug: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        slug: string;
    });
}
/** Import a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links), joining some or all the chats in the folder. */
export declare class chatlists_joinChatlistInvite_ extends Function_<enums.Updates> {
    static __F: (params: {
        slug: string;
        peers: Array<enums.InputPeer>;
    }) => enums.Updates;
    /** `slug` obtained from a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
    slug: string;
    /** List of new chats to join, fetched using [chatlists.checkChatlistInvite](https://core.telegram.org/method/chatlists.checkChatlistInvite) and filtered as specified in the [documentation »](https://core.telegram.org/api/folders#shared-folders). */
    peers: Array<enums.InputPeer>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        slug: string;
        peers: Array<enums.InputPeer>;
    });
}
/** Fetch new chats associated with an imported [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). Must be invoked at most every `chatlist_update_period` seconds (as per the related [client configuration parameter »](https://core.telegram.org/api/config#chatlist-update-period)). */
export declare class chatlists_getChatlistUpdates_ extends Function_<enums.chatlists.ChatlistUpdates> {
    static __F: (params: {
        chatlist: enums.InputChatlist;
    }) => enums.chatlists.ChatlistUpdates;
    /** The folder */
    chatlist: enums.InputChatlist;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chatlist: enums.InputChatlist;
    });
}
/** Join channels and supergroups recently added to a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export declare class chatlists_joinChatlistUpdates_ extends Function_<enums.Updates> {
    static __F: (params: {
        chatlist: enums.InputChatlist;
        peers: Array<enums.InputPeer>;
    }) => enums.Updates;
    /** The folder */
    chatlist: enums.InputChatlist;
    /** List of new chats to join, fetched using [chatlists.getChatlistUpdates](https://core.telegram.org/method/chatlists.getChatlistUpdates) and filtered as specified in the [documentation »](https://core.telegram.org/api/folders#shared-folders). */
    peers: Array<enums.InputPeer>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chatlist: enums.InputChatlist;
        peers: Array<enums.InputPeer>;
    });
}
/** Dismiss new pending peers recently added to a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links). */
export declare class chatlists_hideChatlistUpdates_ extends Function_<boolean> {
    static __F: (params: {
        chatlist: enums.InputChatlist;
    }) => boolean;
    /** The folder */
    chatlist: enums.InputChatlist;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chatlist: enums.InputChatlist;
    });
}
/** Returns identifiers of pinned or always included chats from a chat folder imported using a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links), which are suggested to be left when the chat folder is deleted. */
export declare class chatlists_getLeaveChatlistSuggestions_ extends Function_<enums.Peer[]> {
    static __F: (params: {
        chatlist: enums.InputChatlist;
    }) => enums.Peer[];
    /** Folder ID */
    chatlist: enums.InputChatlist;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chatlist: enums.InputChatlist;
    });
}
/** Delete a folder imported using a [chat folder deep link »](https://core.telegram.org/api/links#chat-folder-links) */
export declare class chatlists_leaveChatlist_ extends Function_<enums.Updates> {
    static __F: (params: {
        chatlist: enums.InputChatlist;
        peers: Array<enums.InputPeer>;
    }) => enums.Updates;
    /** Folder ID */
    chatlist: enums.InputChatlist;
    /** Also leave the specified channels and groups */
    peers: Array<enums.InputPeer>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        chatlist: enums.InputChatlist;
        peers: Array<enums.InputPeer>;
    });
}
/** Check whether we can post stories as the specified peer. */
export declare class stories_canSendStory_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
    }) => boolean;
    /** The peer from which we wish to post stories. */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
    });
}
/** Uploads a [Telegram Story](https://core.telegram.org/api/stories). */
export declare class stories_sendStory_ extends Function_<enums.Updates> {
    static __F: (params: {
        pinned?: true;
        noforwards?: true;
        fwd_modified?: true;
        peer: enums.InputPeer;
        media: enums.InputMedia;
        media_areas?: Array<enums.MediaArea>;
        caption?: string;
        entities?: Array<enums.MessageEntity>;
        privacy_rules: Array<enums.InputPrivacyRule>;
        random_id: bigint;
        period?: number;
        fwd_from_id?: enums.InputPeer;
        fwd_from_story?: number;
    }) => enums.Updates;
    /** Whether to add the story to the profile automatically upon expiration. If not set, the story will only be added to the archive, see [here »](https://core.telegram.org/api/stories) for more info. */
    pinned?: true;
    /** If set, disables forwards, screenshots, and downloads. */
    noforwards?: true;
    /** Set this flag when reposting stories with `fwd_from_id`+`fwd_from_id`, if the `media` was modified before reposting. */
    fwd_modified?: true;
    /** The peer to send the story as. */
    peer: enums.InputPeer;
    /** The story media. */
    media: enums.InputMedia;
    /** [Media areas](https://core.telegram.org/api/stories#media-areas) associated to the story, see [here »](https://core.telegram.org/api/stories#media-areas) for more info. */
    media_areas?: Array<enums.MediaArea>;
    /** Story caption. */
    caption?: string;
    /** [Message entities for styled text](https://core.telegram.org/api/entities), if allowed by the [`stories_entities` client configuration parameter »](https://core.telegram.org/api/config#stories-entities). */
    entities?: Array<enums.MessageEntity>;
    /** [Privacy rules](https://core.telegram.org/api/privacy) for the story, indicating who can or can't view the story. */
    privacy_rules: Array<enums.InputPrivacyRule>;
    /** Unique client message ID required to prevent message resending. */
    random_id: bigint;
    /** Period after which the story is moved to archive (and to the profile if `pinned` is set), in seconds; must be one of `6 * 3600`, `12 * 3600`, `86400`, or `2 * 86400` for Telegram Premium users, and `86400` otherwise. */
    period?: number;
    /** If set, indicates that this story is a repost of story with ID `fwd_from_story` posted by the peer in `fwd_from_id`. */
    fwd_from_id?: enums.InputPeer;
    /** If set, indicates that this story is a repost of story with ID `fwd_from_story` posted by the peer in `fwd_from_id`. */
    fwd_from_story?: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        pinned?: true;
        noforwards?: true;
        fwd_modified?: true;
        peer: enums.InputPeer;
        media: enums.InputMedia;
        media_areas?: Array<enums.MediaArea>;
        caption?: string;
        entities?: Array<enums.MessageEntity>;
        privacy_rules: Array<enums.InputPrivacyRule>;
        random_id: bigint;
        period?: number;
        fwd_from_id?: enums.InputPeer;
        fwd_from_story?: number;
    });
}
/** Edit an uploaded [story](https://core.telegram.org/api/stories) */
export declare class stories_editStory_ extends Function_<enums.Updates> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: number;
        media?: enums.InputMedia;
        media_areas?: Array<enums.MediaArea>;
        caption?: string;
        entities?: Array<enums.MessageEntity>;
        privacy_rules?: Array<enums.InputPrivacyRule>;
    }) => enums.Updates;
    /** Peer where the story was posted. */
    peer: enums.InputPeer;
    /** ID of story to edit. */
    id: number;
    /** If specified, replaces the story media. */
    media?: enums.InputMedia;
    /** [Media areas](https://core.telegram.org/api/stories#media-areas) associated to the story, see [here »](https://core.telegram.org/api/stories#media-areas) for more info. */
    media_areas?: Array<enums.MediaArea>;
    /** If specified, replaces the story caption. */
    caption?: string;
    /** [Message entities for styled text in the caption](https://core.telegram.org/api/entities), if allowed by the [`stories_entities` client configuration parameter »](https://core.telegram.org/api/config#stories-entities). */
    entities?: Array<enums.MessageEntity>;
    /** If specified, alters the [privacy settings »](https://core.telegram.org/api/privacy) of the story, changing who can or can't view the story. */
    privacy_rules?: Array<enums.InputPrivacyRule>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: number;
        media?: enums.InputMedia;
        media_areas?: Array<enums.MediaArea>;
        caption?: string;
        entities?: Array<enums.MessageEntity>;
        privacy_rules?: Array<enums.InputPrivacyRule>;
    });
}
/** Deletes some posted [stories](https://core.telegram.org/api/stories). */
export declare class stories_deleteStories_ extends Function_<number[]> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
    }) => number[];
    /** Channel/user from where to delete stories. */
    peer: enums.InputPeer;
    /** IDs of stories to delete. */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
    });
}
/** Pin or unpin one or more stories */
export declare class stories_togglePinned_ extends Function_<number[]> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
        pinned: boolean;
    }) => number[];
    /** Peer where to pin or unpin stories */
    peer: enums.InputPeer;
    /** IDs of stories to pin or unpin */
    id: Array<number>;
    /** Whether to pin or unpin the stories */
    pinned: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
        pinned: boolean;
    });
}
/** Fetch the List of active (or active and hidden) stories, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on watching stories. */
export declare class stories_getAllStories_ extends Function_<enums.stories.AllStories> {
    static __F: (params?: {
        next?: true;
        hidden?: true;
        state?: string;
    }) => enums.stories.AllStories;
    /** If `next` and `state` are both set, uses the passed `state` to paginate to the next results; if neither `state` nor `next` are set, fetches the initial page; if `state` is set and `next` is not set, check for changes in the active/hidden peerset, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on the full flow. */
    next?: true;
    /** If set, fetches the hidden active story list, otherwise fetches the active story list, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on the full flow. */
    hidden?: true;
    /** If `next` and `state` are both set, uses the passed `state` to paginate to the next results; if neither `state` nor `next` are set, fetches the initial page; if `state` is set and `next` is not set, check for changes in the active/hidden peerset, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info on the full flow. */
    state?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        next?: true;
        hidden?: true;
        state?: string;
    });
}
/** Fetch the [stories](https://core.telegram.org/api/stories#pinned-or-archived-stories) pinned on a peer's profile. */
export declare class stories_getPinnedStories_ extends Function_<enums.stories.Stories> {
    static __F: (params: {
        peer: enums.InputPeer;
        offset_id: number;
        limit: number;
    }) => enums.stories.Stories;
    /** Peer whose pinned stories should be fetched */
    peer: enums.InputPeer;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_id: number;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        offset_id: number;
        limit: number;
    });
}
/** Fetch the [story archive »](https://core.telegram.org/api/stories#pinned-or-archived-stories) of a peer we control. */
export declare class stories_getStoriesArchive_ extends Function_<enums.stories.Stories> {
    static __F: (params: {
        peer: enums.InputPeer;
        offset_id: number;
        limit: number;
    }) => enums.stories.Stories;
    /** Peer whose archived stories should be fetched */
    peer: enums.InputPeer;
    /** [Offsets for pagination, for more info click here](https://core.telegram.org/api/offsets) */
    offset_id: number;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        offset_id: number;
        limit: number;
    });
}
/** Obtain full info about a set of [stories](https://core.telegram.org/api/stories) by their IDs. */
export declare class stories_getStoriesByID_ extends Function_<enums.stories.Stories> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
    }) => enums.stories.Stories;
    /** Peer where the stories were posted */
    peer: enums.InputPeer;
    /** Story IDs */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
    });
}
/** Hide the active stories of a specific peer, preventing them from being displayed on the action bar on the homescreen. */
export declare class stories_toggleAllStoriesHidden_ extends Function_<boolean> {
    static __F: (params: {
        hidden: boolean;
    }) => boolean;
    /** Whether to hide or unhide all active stories of the peer */
    hidden: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        hidden: boolean;
    });
}
/** Mark all stories up to a certain ID as read, for a given peer; will emit an [updateReadStories](https://core.telegram.org/constructor/updateReadStories) update to all logged-in sessions. */
export declare class stories_readStories_ extends Function_<number[]> {
    static __F: (params: {
        peer: enums.InputPeer;
        max_id: number;
    }) => number[];
    /** The peer whose stories should be marked as read. */
    peer: enums.InputPeer;
    /** Mark all stories up to and including this ID as read */
    max_id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        max_id: number;
    });
}
/** Increment the view counter of one or more stories. */
export declare class stories_incrementStoryViews_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
    }) => boolean;
    /** Peer where the stories were posted. */
    peer: enums.InputPeer;
    /** IDs of the stories (maximum 200 at a time). */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
    });
}
/** Obtain the list of users that have viewed a specific [story we posted](https://core.telegram.org/api/stories) */
export declare class stories_getStoryViewsList_ extends Function_<enums.stories.StoryViewsList> {
    static __F: (params: {
        just_contacts?: true;
        reactions_first?: true;
        forwards_first?: true;
        peer: enums.InputPeer;
        q?: string;
        id: number;
        offset: string;
        limit: number;
    }) => enums.stories.StoryViewsList;
    /** Whether to only fetch view reaction/views made by our [contacts](https://core.telegram.org/api/contacts) */
    just_contacts?: true;
    /** Whether to return [storyView](https://core.telegram.org/constructor/storyView) info about users that reacted to the story (i.e. if set, the server will first sort results by view date as usual, and then also additionally sort the list by putting [storyView](https://core.telegram.org/constructor/storyView)s with an associated reaction first in the list). Ignored if `forwards_first` is set. */
    reactions_first?: true;
    /** If set, returns forwards and reposts first, then reactions, then other views; otherwise returns interactions sorted just by interaction date. */
    forwards_first?: true;
    /** Peer where the story was posted */
    peer: enums.InputPeer;
    /** Search for specific peers */
    q?: string;
    /** Story ID */
    id: number;
    /** Offset for pagination, obtained from [stories.storyViewsList](https://core.telegram.org/constructor/stories.storyViewsList).`next_offset` */
    offset: string;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        just_contacts?: true;
        reactions_first?: true;
        forwards_first?: true;
        peer: enums.InputPeer;
        q?: string;
        id: number;
        offset: string;
        limit: number;
    });
}
/** Obtain info about the view count, forward count, reactions and recent viewers of one or more [stories](https://core.telegram.org/api/stories). */
export declare class stories_getStoriesViews_ extends Function_<enums.stories.StoryViews> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
    }) => enums.stories.StoryViews;
    /** Peer whose stories should be fetched */
    peer: enums.InputPeer;
    /** Story IDs */
    id: Array<number>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
    });
}
/** Generate a [story deep link](https://core.telegram.org/api/links#story-links) for a specific story */
export declare class stories_exportStoryLink_ extends Function_<enums.ExportedStoryLink> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: number;
    }) => enums.ExportedStoryLink;
    /** Peer where the story was posted */
    peer: enums.InputPeer;
    /** Story ID */
    id: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: number;
    });
}
/** Report a story. */
export declare class stories_report_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        id: Array<number>;
        reason: enums.ReportReason;
        message: string;
    }) => boolean;
    /** The peer that uploaded the story. */
    peer: enums.InputPeer;
    /** IDs of the stories to report. */
    id: Array<number>;
    /** Why are these storeis being reported. */
    reason: enums.ReportReason;
    /** Comment for report moderation */
    message: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        id: Array<number>;
        reason: enums.ReportReason;
        message: string;
    });
}
/** Activates [stories stealth mode](https://core.telegram.org/api/stories#stealth-mode), see [here »](https://core.telegram.org/api/stories#stealth-mode) for more info. */
export declare class stories_activateStealthMode_ extends Function_<enums.Updates> {
    static __F: (params?: {
        past?: true;
        future?: true;
    }) => enums.Updates;
    /** Whether to erase views from any stories opened in the past [`stories_stealth_past_period` seconds »](https://core.telegram.org/api/config#stories-stealth-past-period), as specified by the [client configuration](https://core.telegram.org/api/config#client-configuration). */
    past?: true;
    /** Whether to hide future story views for the next [`stories_stealth_future_period` seconds »](https://core.telegram.org/api/config#stories-stealth-future-period), as specified by the [client configuration](https://core.telegram.org/api/config#client-configuration). */
    future?: true;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        past?: true;
        future?: true;
    });
}
/** React to a story. */
export declare class stories_sendReaction_ extends Function_<enums.Updates> {
    static __F: (params: {
        add_to_recent?: true;
        peer: enums.InputPeer;
        story_id: number;
        reaction: enums.Reaction;
    }) => enums.Updates;
    /** Whether to add this reaction to the [recent reactions list »](https://core.telegram.org/api/reactions#recent-reactions). */
    add_to_recent?: true;
    /** The peer that sent the story */
    peer: enums.InputPeer;
    /** ID of the story to react to */
    story_id: number;
    /** Reaction */
    reaction: enums.Reaction;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        add_to_recent?: true;
        peer: enums.InputPeer;
        story_id: number;
        reaction: enums.Reaction;
    });
}
/** Fetch the full active [story list](https://core.telegram.org/api/stories#watching-stories) of a specific peer. */
export declare class stories_getPeerStories_ extends Function_<enums.stories.PeerStories> {
    static __F: (params: {
        peer: enums.InputPeer;
    }) => enums.stories.PeerStories;
    /** Peer whose stories should be fetched */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
    });
}
/** Obtain the latest read story ID for all peers when first logging in, returned as a list of [updateReadStories](https://core.telegram.org/constructor/updateReadStories) updates, see [here »](https://core.telegram.org/api/stories#watching-stories) for more info. */
export declare class stories_getAllReadPeerStories_ extends Function_<enums.Updates> {
    static __F: () => enums.Updates;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Get the IDs of the maximum read stories for a set of peers. */
export declare class stories_getPeerMaxIDs_ extends Function_<number[]> {
    static __F: (params: {
        id: Array<enums.InputPeer>;
    }) => number[];
    /** Peers */
    id: Array<enums.InputPeer>;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        id: Array<enums.InputPeer>;
    });
}
/** Obtain a list of channels where the user can post [stories](https://core.telegram.org/api/stories) */
export declare class stories_getChatsToSend_ extends Function_<enums.messages.Chats> {
    static __F: () => enums.messages.Chats;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Hide the active stories of a user, preventing them from being displayed on the action bar on the homescreen, see [here »](https://core.telegram.org/api/stories#hiding-stories-of-other-users) for more info. */
export declare class stories_togglePeerStoriesHidden_ extends Function_<boolean> {
    static __F: (params: {
        peer: enums.InputPeer;
        hidden: boolean;
    }) => boolean;
    /** Peer whose stories should be (un)hidden. */
    peer: enums.InputPeer;
    /** Whether to hide or unhide stories. */
    hidden: boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        hidden: boolean;
    });
}
/** Get the [reaction](https://core.telegram.org/api/reactions) and interaction list of a [story](https://core.telegram.org/api/stories) posted to a channel, along with the sender of each reaction. */
export declare class stories_getStoryReactionsList_ extends Function_<enums.stories.StoryReactionsList> {
    static __F: (params: {
        forwards_first?: true;
        peer: enums.InputPeer;
        id: number;
        reaction?: enums.Reaction;
        offset?: string;
        limit: number;
    }) => enums.stories.StoryReactionsList;
    /** If set, returns forwards and reposts first, then reactions, then other views; otherwise returns interactions sorted just by interaction date. */
    forwards_first?: true;
    /** Channel */
    peer: enums.InputPeer;
    /** [Story](https://core.telegram.org/api/stories) ID */
    id: number;
    /** Get only reactions of this type */
    reaction?: enums.Reaction;
    /** Offset for pagination (taken from the `next_offset` field of the returned [stories.StoryReactionsList](https://core.telegram.org/type/stories.StoryReactionsList)); empty in the first request. */
    offset?: string;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        forwards_first?: true;
        peer: enums.InputPeer;
        id: number;
        reaction?: enums.Reaction;
        offset?: string;
        limit: number;
    });
}
/** Obtains info about the boosts that were applied to a certain channel (admins only) */
export declare class premium_getBoostsList_ extends Function_<enums.premium.BoostsList> {
    static __F: (params: {
        gifts?: true;
        peer: enums.InputPeer;
        offset: string;
        limit: number;
    }) => enums.premium.BoostsList;
    /** Whether to return only info about boosts received from [gift codes and giveaways created by the channel »](https://core.telegram.org/api/giveaways) */
    gifts?: true;
    /** The channel */
    peer: enums.InputPeer;
    /** Offset for pagination, obtained from [premium.boostsList](https://core.telegram.org/constructor/premium.boostsList).`next_offset` */
    offset: string;
    /** Maximum number of results to return, [see pagination](https://core.telegram.org/api/offsets) */
    limit: number;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        gifts?: true;
        peer: enums.InputPeer;
        offset: string;
        limit: number;
    });
}
/** Obtain which peers are we currently [boosting](https://core.telegram.org/api/boost), and how many [boost slots](https://core.telegram.org/api/boost) we have left. */
export declare class premium_getMyBoosts_ extends Function_<enums.premium.MyBoosts> {
    static __F: () => enums.premium.MyBoosts;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
/** Apply one or more [boosts »](https://core.telegram.org/api/boost) to a peer. */
export declare class premium_applyBoost_ extends Function_<enums.premium.MyBoosts> {
    static __F: (params: {
        slots?: Array<number>;
        peer: enums.InputPeer;
    }) => enums.premium.MyBoosts;
    /** Which [boost slots](https://core.telegram.org/api/boost) to assign to this peer. */
    slots?: Array<number>;
    /** The peer to boost. */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        slots?: Array<number>;
        peer: enums.InputPeer;
    });
}
/** Gets the current [number of boosts](https://core.telegram.org/api/boost) of a channel. */
export declare class premium_getBoostsStatus_ extends Function_<enums.premium.BoostsStatus> {
    static __F: (params: {
        peer: enums.InputPeer;
    }) => enums.premium.BoostsStatus;
    /** The peer. */
    peer: enums.InputPeer;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
    });
}
/** Returns the lists of boost that were applied to a channel by a specific user (admins only) */
export declare class premium_getUserBoosts_ extends Function_<enums.premium.BoostsList> {
    static __F: (params: {
        peer: enums.InputPeer;
        user_id: enums.InputUser;
    }) => enums.premium.BoostsList;
    /** The channel */
    peer: enums.InputPeer;
    /** The user */
    user_id: enums.InputUser;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        peer: enums.InputPeer;
        user_id: enums.InputUser;
    });
}
export declare class smsjobs_isEligibleToJoin_ extends Function_<enums.smsjobs.EligibilityToJoin> {
    static __F: () => enums.smsjobs.EligibilityToJoin;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
export declare class smsjobs_join_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
export declare class smsjobs_leave_ extends Function_<boolean> {
    static __F: () => boolean;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
export declare class smsjobs_updateSettings_ extends Function_<boolean> {
    static __F: (params?: {
        allow_international?: true;
    }) => boolean;
    allow_international?: true;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params?: {
        allow_international?: true;
    });
}
export declare class smsjobs_getStatus_ extends Function_<enums.smsjobs.Status> {
    static __F: () => enums.smsjobs.Status;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor();
}
export declare class smsjobs_getSmsJob_ extends Function_<enums.SmsJob> {
    static __F: (params: {
        job_id: string;
    }) => enums.SmsJob;
    job_id: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        job_id: string;
    });
}
export declare class smsjobs_finishJob_ extends Function_<boolean> {
    static __F: (params: {
        job_id: string;
        error?: string;
    }) => boolean;
    job_id: string;
    error?: string;
    protected get [id](): number;
    static get [name](): string;
    static get [paramDesc](): ParamDesc;
    protected get [params](): Params;
    constructor(params: {
        job_id: string;
        error?: string;
    });
}
export declare const functions: {
    Function: typeof Function_;
    req_pq_multi: typeof req_pq_multi_;
    req_DH_params: typeof req_DH_params_;
    set_client_DH_params: typeof set_client_DH_params_;
    rpc_drop_answer: typeof rpc_drop_answer_;
    get_future_salts: typeof get_future_salts_;
    ping: typeof ping_;
    ping_delay_disconnect: typeof ping_delay_disconnect_;
    destroy_session: typeof destroy_session_;
    destroy_auth_key: typeof destroy_auth_key_;
    invokeAfterMsg: typeof invokeAfterMsg_;
    invokeAfterMsgs: typeof invokeAfterMsgs_;
    initConnection: typeof initConnection_;
    invokeWithLayer: typeof invokeWithLayer_;
    invokeWithoutUpdates: typeof invokeWithoutUpdates_;
    invokeWithMessagesRange: typeof invokeWithMessagesRange_;
    invokeWithTakeout: typeof invokeWithTakeout_;
    auth: {
        sendCode: typeof auth_sendCode_;
        signUp: typeof auth_signUp_;
        signIn: typeof auth_signIn_;
        logOut: typeof auth_logOut_;
        resetAuthorizations: typeof auth_resetAuthorizations_;
        exportAuthorization: typeof auth_exportAuthorization_;
        importAuthorization: typeof auth_importAuthorization_;
        bindTempAuthKey: typeof auth_bindTempAuthKey_;
        importBotAuthorization: typeof auth_importBotAuthorization_;
        checkPassword: typeof auth_checkPassword_;
        requestPasswordRecovery: typeof auth_requestPasswordRecovery_;
        recoverPassword: typeof auth_recoverPassword_;
        resendCode: typeof auth_resendCode_;
        cancelCode: typeof auth_cancelCode_;
        dropTempAuthKeys: typeof auth_dropTempAuthKeys_;
        exportLoginToken: typeof auth_exportLoginToken_;
        importLoginToken: typeof auth_importLoginToken_;
        acceptLoginToken: typeof auth_acceptLoginToken_;
        checkRecoveryPassword: typeof auth_checkRecoveryPassword_;
        importWebTokenAuthorization: typeof auth_importWebTokenAuthorization_;
        requestFirebaseSms: typeof auth_requestFirebaseSms_;
        resetLoginEmail: typeof auth_resetLoginEmail_;
    };
    account: {
        registerDevice: typeof account_registerDevice_;
        unregisterDevice: typeof account_unregisterDevice_;
        updateNotifySettings: typeof account_updateNotifySettings_;
        getNotifySettings: typeof account_getNotifySettings_;
        resetNotifySettings: typeof account_resetNotifySettings_;
        updateProfile: typeof account_updateProfile_;
        updateStatus: typeof account_updateStatus_;
        getWallPapers: typeof account_getWallPapers_;
        reportPeer: typeof account_reportPeer_;
        checkUsername: typeof account_checkUsername_;
        updateUsername: typeof account_updateUsername_;
        getPrivacy: typeof account_getPrivacy_;
        setPrivacy: typeof account_setPrivacy_;
        deleteAccount: typeof account_deleteAccount_;
        getAccountTTL: typeof account_getAccountTTL_;
        setAccountTTL: typeof account_setAccountTTL_;
        sendChangePhoneCode: typeof account_sendChangePhoneCode_;
        changePhone: typeof account_changePhone_;
        updateDeviceLocked: typeof account_updateDeviceLocked_;
        getAuthorizations: typeof account_getAuthorizations_;
        resetAuthorization: typeof account_resetAuthorization_;
        getPassword: typeof account_getPassword_;
        getPasswordSettings: typeof account_getPasswordSettings_;
        updatePasswordSettings: typeof account_updatePasswordSettings_;
        sendConfirmPhoneCode: typeof account_sendConfirmPhoneCode_;
        confirmPhone: typeof account_confirmPhone_;
        getTmpPassword: typeof account_getTmpPassword_;
        getWebAuthorizations: typeof account_getWebAuthorizations_;
        resetWebAuthorization: typeof account_resetWebAuthorization_;
        resetWebAuthorizations: typeof account_resetWebAuthorizations_;
        getAllSecureValues: typeof account_getAllSecureValues_;
        getSecureValue: typeof account_getSecureValue_;
        saveSecureValue: typeof account_saveSecureValue_;
        deleteSecureValue: typeof account_deleteSecureValue_;
        getAuthorizationForm: typeof account_getAuthorizationForm_;
        acceptAuthorization: typeof account_acceptAuthorization_;
        sendVerifyPhoneCode: typeof account_sendVerifyPhoneCode_;
        verifyPhone: typeof account_verifyPhone_;
        sendVerifyEmailCode: typeof account_sendVerifyEmailCode_;
        verifyEmail: typeof account_verifyEmail_;
        initTakeoutSession: typeof account_initTakeoutSession_;
        finishTakeoutSession: typeof account_finishTakeoutSession_;
        confirmPasswordEmail: typeof account_confirmPasswordEmail_;
        resendPasswordEmail: typeof account_resendPasswordEmail_;
        cancelPasswordEmail: typeof account_cancelPasswordEmail_;
        getContactSignUpNotification: typeof account_getContactSignUpNotification_;
        setContactSignUpNotification: typeof account_setContactSignUpNotification_;
        getNotifyExceptions: typeof account_getNotifyExceptions_;
        getWallPaper: typeof account_getWallPaper_;
        uploadWallPaper: typeof account_uploadWallPaper_;
        saveWallPaper: typeof account_saveWallPaper_;
        installWallPaper: typeof account_installWallPaper_;
        resetWallPapers: typeof account_resetWallPapers_;
        getAutoDownloadSettings: typeof account_getAutoDownloadSettings_;
        saveAutoDownloadSettings: typeof account_saveAutoDownloadSettings_;
        uploadTheme: typeof account_uploadTheme_;
        createTheme: typeof account_createTheme_;
        updateTheme: typeof account_updateTheme_;
        saveTheme: typeof account_saveTheme_;
        installTheme: typeof account_installTheme_;
        getTheme: typeof account_getTheme_;
        getThemes: typeof account_getThemes_;
        setContentSettings: typeof account_setContentSettings_;
        getContentSettings: typeof account_getContentSettings_;
        getMultiWallPapers: typeof account_getMultiWallPapers_;
        getGlobalPrivacySettings: typeof account_getGlobalPrivacySettings_;
        setGlobalPrivacySettings: typeof account_setGlobalPrivacySettings_;
        reportProfilePhoto: typeof account_reportProfilePhoto_;
        resetPassword: typeof account_resetPassword_;
        declinePasswordReset: typeof account_declinePasswordReset_;
        getChatThemes: typeof account_getChatThemes_;
        setAuthorizationTTL: typeof account_setAuthorizationTTL_;
        changeAuthorizationSettings: typeof account_changeAuthorizationSettings_;
        getSavedRingtones: typeof account_getSavedRingtones_;
        saveRingtone: typeof account_saveRingtone_;
        uploadRingtone: typeof account_uploadRingtone_;
        updateEmojiStatus: typeof account_updateEmojiStatus_;
        getDefaultEmojiStatuses: typeof account_getDefaultEmojiStatuses_;
        getRecentEmojiStatuses: typeof account_getRecentEmojiStatuses_;
        clearRecentEmojiStatuses: typeof account_clearRecentEmojiStatuses_;
        reorderUsernames: typeof account_reorderUsernames_;
        toggleUsername: typeof account_toggleUsername_;
        getDefaultProfilePhotoEmojis: typeof account_getDefaultProfilePhotoEmojis_;
        getDefaultGroupPhotoEmojis: typeof account_getDefaultGroupPhotoEmojis_;
        getAutoSaveSettings: typeof account_getAutoSaveSettings_;
        saveAutoSaveSettings: typeof account_saveAutoSaveSettings_;
        deleteAutoSaveExceptions: typeof account_deleteAutoSaveExceptions_;
        invalidateSignInCodes: typeof account_invalidateSignInCodes_;
        updateColor: typeof account_updateColor_;
        getDefaultBackgroundEmojis: typeof account_getDefaultBackgroundEmojis_;
        getChannelDefaultEmojiStatuses: typeof account_getChannelDefaultEmojiStatuses_;
        getChannelRestrictedStatusEmojis: typeof account_getChannelRestrictedStatusEmojis_;
        updateBusinessWorkHours: typeof account_updateBusinessWorkHours_;
        updateBusinessLocation: typeof account_updateBusinessLocation_;
        updateBusinessGreetingMessage: typeof account_updateBusinessGreetingMessage_;
        updateBusinessAwayMessage: typeof account_updateBusinessAwayMessage_;
        updateConnectedBot: typeof account_updateConnectedBot_;
        getConnectedBots: typeof account_getConnectedBots_;
    };
    users: {
        getUsers: typeof users_getUsers_;
        getFullUser: typeof users_getFullUser_;
        setSecureValueErrors: typeof users_setSecureValueErrors_;
        getIsPremiumRequiredToContact: typeof users_getIsPremiumRequiredToContact_;
    };
    contacts: {
        getContactIDs: typeof contacts_getContactIDs_;
        getStatuses: typeof contacts_getStatuses_;
        getContacts: typeof contacts_getContacts_;
        importContacts: typeof contacts_importContacts_;
        deleteContacts: typeof contacts_deleteContacts_;
        deleteByPhones: typeof contacts_deleteByPhones_;
        block: typeof contacts_block_;
        unblock: typeof contacts_unblock_;
        getBlocked: typeof contacts_getBlocked_;
        search: typeof contacts_search_;
        resolveUsername: typeof contacts_resolveUsername_;
        getTopPeers: typeof contacts_getTopPeers_;
        resetTopPeerRating: typeof contacts_resetTopPeerRating_;
        resetSaved: typeof contacts_resetSaved_;
        getSaved: typeof contacts_getSaved_;
        toggleTopPeers: typeof contacts_toggleTopPeers_;
        addContact: typeof contacts_addContact_;
        acceptContact: typeof contacts_acceptContact_;
        getLocated: typeof contacts_getLocated_;
        blockFromReplies: typeof contacts_blockFromReplies_;
        resolvePhone: typeof contacts_resolvePhone_;
        exportContactToken: typeof contacts_exportContactToken_;
        importContactToken: typeof contacts_importContactToken_;
        editCloseFriends: typeof contacts_editCloseFriends_;
        setBlocked: typeof contacts_setBlocked_;
    };
    messages: {
        getMessages: typeof messages_getMessages_;
        getDialogs: typeof messages_getDialogs_;
        getHistory: typeof messages_getHistory_;
        search: typeof messages_search_;
        readHistory: typeof messages_readHistory_;
        deleteHistory: typeof messages_deleteHistory_;
        deleteMessages: typeof messages_deleteMessages_;
        receivedMessages: typeof messages_receivedMessages_;
        setTyping: typeof messages_setTyping_;
        sendMessage: typeof messages_sendMessage_;
        sendMedia: typeof messages_sendMedia_;
        forwardMessages: typeof messages_forwardMessages_;
        reportSpam: typeof messages_reportSpam_;
        getPeerSettings: typeof messages_getPeerSettings_;
        report: typeof messages_report_;
        getChats: typeof messages_getChats_;
        getFullChat: typeof messages_getFullChat_;
        editChatTitle: typeof messages_editChatTitle_;
        editChatPhoto: typeof messages_editChatPhoto_;
        addChatUser: typeof messages_addChatUser_;
        deleteChatUser: typeof messages_deleteChatUser_;
        createChat: typeof messages_createChat_;
        getDhConfig: typeof messages_getDhConfig_;
        requestEncryption: typeof messages_requestEncryption_;
        acceptEncryption: typeof messages_acceptEncryption_;
        discardEncryption: typeof messages_discardEncryption_;
        setEncryptedTyping: typeof messages_setEncryptedTyping_;
        readEncryptedHistory: typeof messages_readEncryptedHistory_;
        sendEncrypted: typeof messages_sendEncrypted_;
        sendEncryptedFile: typeof messages_sendEncryptedFile_;
        sendEncryptedService: typeof messages_sendEncryptedService_;
        receivedQueue: typeof messages_receivedQueue_;
        reportEncryptedSpam: typeof messages_reportEncryptedSpam_;
        readMessageContents: typeof messages_readMessageContents_;
        getStickers: typeof messages_getStickers_;
        getAllStickers: typeof messages_getAllStickers_;
        getWebPagePreview: typeof messages_getWebPagePreview_;
        exportChatInvite: typeof messages_exportChatInvite_;
        checkChatInvite: typeof messages_checkChatInvite_;
        importChatInvite: typeof messages_importChatInvite_;
        getStickerSet: typeof messages_getStickerSet_;
        installStickerSet: typeof messages_installStickerSet_;
        uninstallStickerSet: typeof messages_uninstallStickerSet_;
        startBot: typeof messages_startBot_;
        getMessagesViews: typeof messages_getMessagesViews_;
        editChatAdmin: typeof messages_editChatAdmin_;
        migrateChat: typeof messages_migrateChat_;
        searchGlobal: typeof messages_searchGlobal_;
        reorderStickerSets: typeof messages_reorderStickerSets_;
        getDocumentByHash: typeof messages_getDocumentByHash_;
        getSavedGifs: typeof messages_getSavedGifs_;
        saveGif: typeof messages_saveGif_;
        getInlineBotResults: typeof messages_getInlineBotResults_;
        setInlineBotResults: typeof messages_setInlineBotResults_;
        sendInlineBotResult: typeof messages_sendInlineBotResult_;
        getMessageEditData: typeof messages_getMessageEditData_;
        editMessage: typeof messages_editMessage_;
        editInlineBotMessage: typeof messages_editInlineBotMessage_;
        getBotCallbackAnswer: typeof messages_getBotCallbackAnswer_;
        setBotCallbackAnswer: typeof messages_setBotCallbackAnswer_;
        getPeerDialogs: typeof messages_getPeerDialogs_;
        saveDraft: typeof messages_saveDraft_;
        getAllDrafts: typeof messages_getAllDrafts_;
        getFeaturedStickers: typeof messages_getFeaturedStickers_;
        readFeaturedStickers: typeof messages_readFeaturedStickers_;
        getRecentStickers: typeof messages_getRecentStickers_;
        saveRecentSticker: typeof messages_saveRecentSticker_;
        clearRecentStickers: typeof messages_clearRecentStickers_;
        getArchivedStickers: typeof messages_getArchivedStickers_;
        getMaskStickers: typeof messages_getMaskStickers_;
        getAttachedStickers: typeof messages_getAttachedStickers_;
        setGameScore: typeof messages_setGameScore_;
        setInlineGameScore: typeof messages_setInlineGameScore_;
        getGameHighScores: typeof messages_getGameHighScores_;
        getInlineGameHighScores: typeof messages_getInlineGameHighScores_;
        getCommonChats: typeof messages_getCommonChats_;
        getWebPage: typeof messages_getWebPage_;
        toggleDialogPin: typeof messages_toggleDialogPin_;
        reorderPinnedDialogs: typeof messages_reorderPinnedDialogs_;
        getPinnedDialogs: typeof messages_getPinnedDialogs_;
        setBotShippingResults: typeof messages_setBotShippingResults_;
        setBotPrecheckoutResults: typeof messages_setBotPrecheckoutResults_;
        uploadMedia: typeof messages_uploadMedia_;
        sendScreenshotNotification: typeof messages_sendScreenshotNotification_;
        getFavedStickers: typeof messages_getFavedStickers_;
        faveSticker: typeof messages_faveSticker_;
        getUnreadMentions: typeof messages_getUnreadMentions_;
        readMentions: typeof messages_readMentions_;
        getRecentLocations: typeof messages_getRecentLocations_;
        sendMultiMedia: typeof messages_sendMultiMedia_;
        uploadEncryptedFile: typeof messages_uploadEncryptedFile_;
        searchStickerSets: typeof messages_searchStickerSets_;
        getSplitRanges: typeof messages_getSplitRanges_;
        markDialogUnread: typeof messages_markDialogUnread_;
        getDialogUnreadMarks: typeof messages_getDialogUnreadMarks_;
        clearAllDrafts: typeof messages_clearAllDrafts_;
        updatePinnedMessage: typeof messages_updatePinnedMessage_;
        sendVote: typeof messages_sendVote_;
        getPollResults: typeof messages_getPollResults_;
        getOnlines: typeof messages_getOnlines_;
        editChatAbout: typeof messages_editChatAbout_;
        editChatDefaultBannedRights: typeof messages_editChatDefaultBannedRights_;
        getEmojiKeywords: typeof messages_getEmojiKeywords_;
        getEmojiKeywordsDifference: typeof messages_getEmojiKeywordsDifference_;
        getEmojiKeywordsLanguages: typeof messages_getEmojiKeywordsLanguages_;
        getEmojiURL: typeof messages_getEmojiURL_;
        getSearchCounters: typeof messages_getSearchCounters_;
        requestUrlAuth: typeof messages_requestUrlAuth_;
        acceptUrlAuth: typeof messages_acceptUrlAuth_;
        hidePeerSettingsBar: typeof messages_hidePeerSettingsBar_;
        getScheduledHistory: typeof messages_getScheduledHistory_;
        getScheduledMessages: typeof messages_getScheduledMessages_;
        sendScheduledMessages: typeof messages_sendScheduledMessages_;
        deleteScheduledMessages: typeof messages_deleteScheduledMessages_;
        getPollVotes: typeof messages_getPollVotes_;
        toggleStickerSets: typeof messages_toggleStickerSets_;
        getDialogFilters: typeof messages_getDialogFilters_;
        getSuggestedDialogFilters: typeof messages_getSuggestedDialogFilters_;
        updateDialogFilter: typeof messages_updateDialogFilter_;
        updateDialogFiltersOrder: typeof messages_updateDialogFiltersOrder_;
        getOldFeaturedStickers: typeof messages_getOldFeaturedStickers_;
        getReplies: typeof messages_getReplies_;
        getDiscussionMessage: typeof messages_getDiscussionMessage_;
        readDiscussion: typeof messages_readDiscussion_;
        unpinAllMessages: typeof messages_unpinAllMessages_;
        deleteChat: typeof messages_deleteChat_;
        deletePhoneCallHistory: typeof messages_deletePhoneCallHistory_;
        checkHistoryImport: typeof messages_checkHistoryImport_;
        initHistoryImport: typeof messages_initHistoryImport_;
        uploadImportedMedia: typeof messages_uploadImportedMedia_;
        startHistoryImport: typeof messages_startHistoryImport_;
        getExportedChatInvites: typeof messages_getExportedChatInvites_;
        getExportedChatInvite: typeof messages_getExportedChatInvite_;
        editExportedChatInvite: typeof messages_editExportedChatInvite_;
        deleteRevokedExportedChatInvites: typeof messages_deleteRevokedExportedChatInvites_;
        deleteExportedChatInvite: typeof messages_deleteExportedChatInvite_;
        getAdminsWithInvites: typeof messages_getAdminsWithInvites_;
        getChatInviteImporters: typeof messages_getChatInviteImporters_;
        setHistoryTTL: typeof messages_setHistoryTTL_;
        checkHistoryImportPeer: typeof messages_checkHistoryImportPeer_;
        setChatTheme: typeof messages_setChatTheme_;
        getMessageReadParticipants: typeof messages_getMessageReadParticipants_;
        getSearchResultsCalendar: typeof messages_getSearchResultsCalendar_;
        getSearchResultsPositions: typeof messages_getSearchResultsPositions_;
        hideChatJoinRequest: typeof messages_hideChatJoinRequest_;
        hideAllChatJoinRequests: typeof messages_hideAllChatJoinRequests_;
        toggleNoForwards: typeof messages_toggleNoForwards_;
        saveDefaultSendAs: typeof messages_saveDefaultSendAs_;
        sendReaction: typeof messages_sendReaction_;
        getMessagesReactions: typeof messages_getMessagesReactions_;
        getMessageReactionsList: typeof messages_getMessageReactionsList_;
        setChatAvailableReactions: typeof messages_setChatAvailableReactions_;
        getAvailableReactions: typeof messages_getAvailableReactions_;
        setDefaultReaction: typeof messages_setDefaultReaction_;
        translateText: typeof messages_translateText_;
        getUnreadReactions: typeof messages_getUnreadReactions_;
        readReactions: typeof messages_readReactions_;
        searchSentMedia: typeof messages_searchSentMedia_;
        getAttachMenuBots: typeof messages_getAttachMenuBots_;
        getAttachMenuBot: typeof messages_getAttachMenuBot_;
        toggleBotInAttachMenu: typeof messages_toggleBotInAttachMenu_;
        requestWebView: typeof messages_requestWebView_;
        prolongWebView: typeof messages_prolongWebView_;
        requestSimpleWebView: typeof messages_requestSimpleWebView_;
        sendWebViewResultMessage: typeof messages_sendWebViewResultMessage_;
        sendWebViewData: typeof messages_sendWebViewData_;
        transcribeAudio: typeof messages_transcribeAudio_;
        rateTranscribedAudio: typeof messages_rateTranscribedAudio_;
        getCustomEmojiDocuments: typeof messages_getCustomEmojiDocuments_;
        getEmojiStickers: typeof messages_getEmojiStickers_;
        getFeaturedEmojiStickers: typeof messages_getFeaturedEmojiStickers_;
        reportReaction: typeof messages_reportReaction_;
        getTopReactions: typeof messages_getTopReactions_;
        getRecentReactions: typeof messages_getRecentReactions_;
        clearRecentReactions: typeof messages_clearRecentReactions_;
        getExtendedMedia: typeof messages_getExtendedMedia_;
        setDefaultHistoryTTL: typeof messages_setDefaultHistoryTTL_;
        getDefaultHistoryTTL: typeof messages_getDefaultHistoryTTL_;
        sendBotRequestedPeer: typeof messages_sendBotRequestedPeer_;
        getEmojiGroups: typeof messages_getEmojiGroups_;
        getEmojiStatusGroups: typeof messages_getEmojiStatusGroups_;
        getEmojiProfilePhotoGroups: typeof messages_getEmojiProfilePhotoGroups_;
        searchCustomEmoji: typeof messages_searchCustomEmoji_;
        togglePeerTranslations: typeof messages_togglePeerTranslations_;
        getBotApp: typeof messages_getBotApp_;
        requestAppWebView: typeof messages_requestAppWebView_;
        setChatWallPaper: typeof messages_setChatWallPaper_;
        searchEmojiStickerSets: typeof messages_searchEmojiStickerSets_;
        getSavedDialogs: typeof messages_getSavedDialogs_;
        getSavedHistory: typeof messages_getSavedHistory_;
        deleteSavedHistory: typeof messages_deleteSavedHistory_;
        getPinnedSavedDialogs: typeof messages_getPinnedSavedDialogs_;
        toggleSavedDialogPin: typeof messages_toggleSavedDialogPin_;
        reorderPinnedSavedDialogs: typeof messages_reorderPinnedSavedDialogs_;
        getSavedReactionTags: typeof messages_getSavedReactionTags_;
        updateSavedReactionTag: typeof messages_updateSavedReactionTag_;
        getDefaultTagReactions: typeof messages_getDefaultTagReactions_;
        getOutboxReadDate: typeof messages_getOutboxReadDate_;
        getQuickReplies: typeof messages_getQuickReplies_;
        reorderQuickReplies: typeof messages_reorderQuickReplies_;
        checkQuickReplyShortcut: typeof messages_checkQuickReplyShortcut_;
        editQuickReplyShortcut: typeof messages_editQuickReplyShortcut_;
        deleteQuickReplyShortcut: typeof messages_deleteQuickReplyShortcut_;
        getQuickReplyMessages: typeof messages_getQuickReplyMessages_;
        sendQuickReplyMessages: typeof messages_sendQuickReplyMessages_;
        deleteQuickReplyMessages: typeof messages_deleteQuickReplyMessages_;
        toggleDialogFilterTags: typeof messages_toggleDialogFilterTags_;
    };
    updates: {
        getState: typeof updates_getState_;
        getDifference: typeof updates_getDifference_;
        getChannelDifference: typeof updates_getChannelDifference_;
    };
    photos: {
        updateProfilePhoto: typeof photos_updateProfilePhoto_;
        uploadProfilePhoto: typeof photos_uploadProfilePhoto_;
        deletePhotos: typeof photos_deletePhotos_;
        getUserPhotos: typeof photos_getUserPhotos_;
        uploadContactProfilePhoto: typeof photos_uploadContactProfilePhoto_;
    };
    upload: {
        saveFilePart: typeof upload_saveFilePart_;
        getFile: typeof upload_getFile_;
        saveBigFilePart: typeof upload_saveBigFilePart_;
        getWebFile: typeof upload_getWebFile_;
        getCdnFile: typeof upload_getCdnFile_;
        reuploadCdnFile: typeof upload_reuploadCdnFile_;
        getCdnFileHashes: typeof upload_getCdnFileHashes_;
        getFileHashes: typeof upload_getFileHashes_;
    };
    help: {
        getConfig: typeof help_getConfig_;
        getNearestDc: typeof help_getNearestDc_;
        getAppUpdate: typeof help_getAppUpdate_;
        getInviteText: typeof help_getInviteText_;
        getSupport: typeof help_getSupport_;
        setBotUpdatesStatus: typeof help_setBotUpdatesStatus_;
        getCdnConfig: typeof help_getCdnConfig_;
        getRecentMeUrls: typeof help_getRecentMeUrls_;
        getTermsOfServiceUpdate: typeof help_getTermsOfServiceUpdate_;
        acceptTermsOfService: typeof help_acceptTermsOfService_;
        getDeepLinkInfo: typeof help_getDeepLinkInfo_;
        getAppConfig: typeof help_getAppConfig_;
        saveAppLog: typeof help_saveAppLog_;
        getPassportConfig: typeof help_getPassportConfig_;
        getSupportName: typeof help_getSupportName_;
        getUserInfo: typeof help_getUserInfo_;
        editUserInfo: typeof help_editUserInfo_;
        getPromoData: typeof help_getPromoData_;
        hidePromoData: typeof help_hidePromoData_;
        dismissSuggestion: typeof help_dismissSuggestion_;
        getCountriesList: typeof help_getCountriesList_;
        getPremiumPromo: typeof help_getPremiumPromo_;
        getPeerColors: typeof help_getPeerColors_;
        getPeerProfileColors: typeof help_getPeerProfileColors_;
        getTimezonesList: typeof help_getTimezonesList_;
    };
    channels: {
        readHistory: typeof channels_readHistory_;
        deleteMessages: typeof channels_deleteMessages_;
        reportSpam: typeof channels_reportSpam_;
        getMessages: typeof channels_getMessages_;
        getParticipants: typeof channels_getParticipants_;
        getParticipant: typeof channels_getParticipant_;
        getChannels: typeof channels_getChannels_;
        getFullChannel: typeof channels_getFullChannel_;
        createChannel: typeof channels_createChannel_;
        editAdmin: typeof channels_editAdmin_;
        editTitle: typeof channels_editTitle_;
        editPhoto: typeof channels_editPhoto_;
        checkUsername: typeof channels_checkUsername_;
        updateUsername: typeof channels_updateUsername_;
        joinChannel: typeof channels_joinChannel_;
        leaveChannel: typeof channels_leaveChannel_;
        inviteToChannel: typeof channels_inviteToChannel_;
        deleteChannel: typeof channels_deleteChannel_;
        exportMessageLink: typeof channels_exportMessageLink_;
        toggleSignatures: typeof channels_toggleSignatures_;
        getAdminedPublicChannels: typeof channels_getAdminedPublicChannels_;
        editBanned: typeof channels_editBanned_;
        getAdminLog: typeof channels_getAdminLog_;
        setStickers: typeof channels_setStickers_;
        readMessageContents: typeof channels_readMessageContents_;
        deleteHistory: typeof channels_deleteHistory_;
        togglePreHistoryHidden: typeof channels_togglePreHistoryHidden_;
        getLeftChannels: typeof channels_getLeftChannels_;
        getGroupsForDiscussion: typeof channels_getGroupsForDiscussion_;
        setDiscussionGroup: typeof channels_setDiscussionGroup_;
        editCreator: typeof channels_editCreator_;
        editLocation: typeof channels_editLocation_;
        toggleSlowMode: typeof channels_toggleSlowMode_;
        getInactiveChannels: typeof channels_getInactiveChannels_;
        convertToGigagroup: typeof channels_convertToGigagroup_;
        viewSponsoredMessage: typeof channels_viewSponsoredMessage_;
        getSponsoredMessages: typeof channels_getSponsoredMessages_;
        getSendAs: typeof channels_getSendAs_;
        deleteParticipantHistory: typeof channels_deleteParticipantHistory_;
        toggleJoinToSend: typeof channels_toggleJoinToSend_;
        toggleJoinRequest: typeof channels_toggleJoinRequest_;
        reorderUsernames: typeof channels_reorderUsernames_;
        toggleUsername: typeof channels_toggleUsername_;
        deactivateAllUsernames: typeof channels_deactivateAllUsernames_;
        toggleForum: typeof channels_toggleForum_;
        createForumTopic: typeof channels_createForumTopic_;
        getForumTopics: typeof channels_getForumTopics_;
        getForumTopicsByID: typeof channels_getForumTopicsByID_;
        editForumTopic: typeof channels_editForumTopic_;
        updatePinnedForumTopic: typeof channels_updatePinnedForumTopic_;
        deleteTopicHistory: typeof channels_deleteTopicHistory_;
        reorderPinnedForumTopics: typeof channels_reorderPinnedForumTopics_;
        toggleAntiSpam: typeof channels_toggleAntiSpam_;
        reportAntiSpamFalsePositive: typeof channels_reportAntiSpamFalsePositive_;
        toggleParticipantsHidden: typeof channels_toggleParticipantsHidden_;
        clickSponsoredMessage: typeof channels_clickSponsoredMessage_;
        updateColor: typeof channels_updateColor_;
        toggleViewForumAsMessages: typeof channels_toggleViewForumAsMessages_;
        getChannelRecommendations: typeof channels_getChannelRecommendations_;
        updateEmojiStatus: typeof channels_updateEmojiStatus_;
        setBoostsToUnblockRestrictions: typeof channels_setBoostsToUnblockRestrictions_;
        setEmojiStickers: typeof channels_setEmojiStickers_;
    };
    bots: {
        sendCustomRequest: typeof bots_sendCustomRequest_;
        answerWebhookJSONQuery: typeof bots_answerWebhookJSONQuery_;
        setBotCommands: typeof bots_setBotCommands_;
        resetBotCommands: typeof bots_resetBotCommands_;
        getBotCommands: typeof bots_getBotCommands_;
        setBotMenuButton: typeof bots_setBotMenuButton_;
        getBotMenuButton: typeof bots_getBotMenuButton_;
        setBotBroadcastDefaultAdminRights: typeof bots_setBotBroadcastDefaultAdminRights_;
        setBotGroupDefaultAdminRights: typeof bots_setBotGroupDefaultAdminRights_;
        setBotInfo: typeof bots_setBotInfo_;
        getBotInfo: typeof bots_getBotInfo_;
        reorderUsernames: typeof bots_reorderUsernames_;
        toggleUsername: typeof bots_toggleUsername_;
        canSendMessage: typeof bots_canSendMessage_;
        allowSendMessage: typeof bots_allowSendMessage_;
        invokeWebViewCustomMethod: typeof bots_invokeWebViewCustomMethod_;
    };
    payments: {
        getPaymentForm: typeof payments_getPaymentForm_;
        getPaymentReceipt: typeof payments_getPaymentReceipt_;
        validateRequestedInfo: typeof payments_validateRequestedInfo_;
        sendPaymentForm: typeof payments_sendPaymentForm_;
        getSavedInfo: typeof payments_getSavedInfo_;
        clearSavedInfo: typeof payments_clearSavedInfo_;
        getBankCardData: typeof payments_getBankCardData_;
        exportInvoice: typeof payments_exportInvoice_;
        assignAppStoreTransaction: typeof payments_assignAppStoreTransaction_;
        assignPlayMarketTransaction: typeof payments_assignPlayMarketTransaction_;
        canPurchasePremium: typeof payments_canPurchasePremium_;
        getPremiumGiftCodeOptions: typeof payments_getPremiumGiftCodeOptions_;
        checkGiftCode: typeof payments_checkGiftCode_;
        applyGiftCode: typeof payments_applyGiftCode_;
        getGiveawayInfo: typeof payments_getGiveawayInfo_;
        launchPrepaidGiveaway: typeof payments_launchPrepaidGiveaway_;
    };
    stickers: {
        createStickerSet: typeof stickers_createStickerSet_;
        removeStickerFromSet: typeof stickers_removeStickerFromSet_;
        changeStickerPosition: typeof stickers_changeStickerPosition_;
        addStickerToSet: typeof stickers_addStickerToSet_;
        setStickerSetThumb: typeof stickers_setStickerSetThumb_;
        checkShortName: typeof stickers_checkShortName_;
        suggestShortName: typeof stickers_suggestShortName_;
        changeSticker: typeof stickers_changeSticker_;
        renameStickerSet: typeof stickers_renameStickerSet_;
        deleteStickerSet: typeof stickers_deleteStickerSet_;
    };
    phone: {
        getCallConfig: typeof phone_getCallConfig_;
        requestCall: typeof phone_requestCall_;
        acceptCall: typeof phone_acceptCall_;
        confirmCall: typeof phone_confirmCall_;
        receivedCall: typeof phone_receivedCall_;
        discardCall: typeof phone_discardCall_;
        setCallRating: typeof phone_setCallRating_;
        saveCallDebug: typeof phone_saveCallDebug_;
        sendSignalingData: typeof phone_sendSignalingData_;
        createGroupCall: typeof phone_createGroupCall_;
        joinGroupCall: typeof phone_joinGroupCall_;
        leaveGroupCall: typeof phone_leaveGroupCall_;
        inviteToGroupCall: typeof phone_inviteToGroupCall_;
        discardGroupCall: typeof phone_discardGroupCall_;
        toggleGroupCallSettings: typeof phone_toggleGroupCallSettings_;
        getGroupCall: typeof phone_getGroupCall_;
        getGroupParticipants: typeof phone_getGroupParticipants_;
        checkGroupCall: typeof phone_checkGroupCall_;
        toggleGroupCallRecord: typeof phone_toggleGroupCallRecord_;
        editGroupCallParticipant: typeof phone_editGroupCallParticipant_;
        editGroupCallTitle: typeof phone_editGroupCallTitle_;
        getGroupCallJoinAs: typeof phone_getGroupCallJoinAs_;
        exportGroupCallInvite: typeof phone_exportGroupCallInvite_;
        toggleGroupCallStartSubscription: typeof phone_toggleGroupCallStartSubscription_;
        startScheduledGroupCall: typeof phone_startScheduledGroupCall_;
        saveDefaultGroupCallJoinAs: typeof phone_saveDefaultGroupCallJoinAs_;
        joinGroupCallPresentation: typeof phone_joinGroupCallPresentation_;
        leaveGroupCallPresentation: typeof phone_leaveGroupCallPresentation_;
        getGroupCallStreamChannels: typeof phone_getGroupCallStreamChannels_;
        getGroupCallStreamRtmpUrl: typeof phone_getGroupCallStreamRtmpUrl_;
        saveCallLog: typeof phone_saveCallLog_;
    };
    langpack: {
        getLangPack: typeof langpack_getLangPack_;
        getStrings: typeof langpack_getStrings_;
        getDifference: typeof langpack_getDifference_;
        getLanguages: typeof langpack_getLanguages_;
        getLanguage: typeof langpack_getLanguage_;
    };
    folders: {
        editPeerFolders: typeof folders_editPeerFolders_;
    };
    stats: {
        getBroadcastStats: typeof stats_getBroadcastStats_;
        loadAsyncGraph: typeof stats_loadAsyncGraph_;
        getMegagroupStats: typeof stats_getMegagroupStats_;
        getMessagePublicForwards: typeof stats_getMessagePublicForwards_;
        getMessageStats: typeof stats_getMessageStats_;
        getStoryStats: typeof stats_getStoryStats_;
        getStoryPublicForwards: typeof stats_getStoryPublicForwards_;
    };
    chatlists: {
        exportChatlistInvite: typeof chatlists_exportChatlistInvite_;
        deleteExportedInvite: typeof chatlists_deleteExportedInvite_;
        editExportedInvite: typeof chatlists_editExportedInvite_;
        getExportedInvites: typeof chatlists_getExportedInvites_;
        checkChatlistInvite: typeof chatlists_checkChatlistInvite_;
        joinChatlistInvite: typeof chatlists_joinChatlistInvite_;
        getChatlistUpdates: typeof chatlists_getChatlistUpdates_;
        joinChatlistUpdates: typeof chatlists_joinChatlistUpdates_;
        hideChatlistUpdates: typeof chatlists_hideChatlistUpdates_;
        getLeaveChatlistSuggestions: typeof chatlists_getLeaveChatlistSuggestions_;
        leaveChatlist: typeof chatlists_leaveChatlist_;
    };
    stories: {
        canSendStory: typeof stories_canSendStory_;
        sendStory: typeof stories_sendStory_;
        editStory: typeof stories_editStory_;
        deleteStories: typeof stories_deleteStories_;
        togglePinned: typeof stories_togglePinned_;
        getAllStories: typeof stories_getAllStories_;
        getPinnedStories: typeof stories_getPinnedStories_;
        getStoriesArchive: typeof stories_getStoriesArchive_;
        getStoriesByID: typeof stories_getStoriesByID_;
        toggleAllStoriesHidden: typeof stories_toggleAllStoriesHidden_;
        readStories: typeof stories_readStories_;
        incrementStoryViews: typeof stories_incrementStoryViews_;
        getStoryViewsList: typeof stories_getStoryViewsList_;
        getStoriesViews: typeof stories_getStoriesViews_;
        exportStoryLink: typeof stories_exportStoryLink_;
        report: typeof stories_report_;
        activateStealthMode: typeof stories_activateStealthMode_;
        sendReaction: typeof stories_sendReaction_;
        getPeerStories: typeof stories_getPeerStories_;
        getAllReadPeerStories: typeof stories_getAllReadPeerStories_;
        getPeerMaxIDs: typeof stories_getPeerMaxIDs_;
        getChatsToSend: typeof stories_getChatsToSend_;
        togglePeerStoriesHidden: typeof stories_togglePeerStoriesHidden_;
        getStoryReactionsList: typeof stories_getStoryReactionsList_;
    };
    premium: {
        getBoostsList: typeof premium_getBoostsList_;
        getMyBoosts: typeof premium_getMyBoosts_;
        applyBoost: typeof premium_applyBoost_;
        getBoostsStatus: typeof premium_getBoostsStatus_;
        getUserBoosts: typeof premium_getUserBoosts_;
    };
    smsjobs: {
        isEligibleToJoin: typeof smsjobs_isEligibleToJoin_;
        join: typeof smsjobs_join_;
        leave: typeof smsjobs_leave_;
        updateSettings: typeof smsjobs_updateSettings_;
        getStatus: typeof smsjobs_getStatus_;
        getSmsJob: typeof smsjobs_getSmsJob_;
        finishJob: typeof smsjobs_finishJob_;
    };
};
export declare namespace functions {
    type Function<T> = Function_<T>;
    type req_pq_multi = req_pq_multi_;
    type req_DH_params = req_DH_params_;
    type set_client_DH_params = set_client_DH_params_;
    type rpc_drop_answer = rpc_drop_answer_;
    type get_future_salts = get_future_salts_;
    type ping = ping_;
    type ping_delay_disconnect = ping_delay_disconnect_;
    type destroy_session = destroy_session_;
    type destroy_auth_key = destroy_auth_key_;
    type invokeAfterMsg<T extends Function<unknown>> = invokeAfterMsg_<T>;
    type invokeAfterMsgs<T extends Function<unknown>> = invokeAfterMsgs_<T>;
    type initConnection<T extends Function<unknown>> = initConnection_<T>;
    type invokeWithLayer<T extends Function<unknown>> = invokeWithLayer_<T>;
    type invokeWithoutUpdates<T extends Function<unknown>> = invokeWithoutUpdates_<T>;
    type invokeWithMessagesRange<T extends Function<unknown>> = invokeWithMessagesRange_<T>;
    type invokeWithTakeout<T extends Function<unknown>> = invokeWithTakeout_<T>;
    namespace auth {
        type sendCode = auth_sendCode_;
        type signUp = auth_signUp_;
        type signIn = auth_signIn_;
        type logOut = auth_logOut_;
        type resetAuthorizations = auth_resetAuthorizations_;
        type exportAuthorization = auth_exportAuthorization_;
        type importAuthorization = auth_importAuthorization_;
        type bindTempAuthKey = auth_bindTempAuthKey_;
        type importBotAuthorization = auth_importBotAuthorization_;
        type checkPassword = auth_checkPassword_;
        type requestPasswordRecovery = auth_requestPasswordRecovery_;
        type recoverPassword = auth_recoverPassword_;
        type resendCode = auth_resendCode_;
        type cancelCode = auth_cancelCode_;
        type dropTempAuthKeys = auth_dropTempAuthKeys_;
        type exportLoginToken = auth_exportLoginToken_;
        type importLoginToken = auth_importLoginToken_;
        type acceptLoginToken = auth_acceptLoginToken_;
        type checkRecoveryPassword = auth_checkRecoveryPassword_;
        type importWebTokenAuthorization = auth_importWebTokenAuthorization_;
        type requestFirebaseSms = auth_requestFirebaseSms_;
        type resetLoginEmail = auth_resetLoginEmail_;
    }
    namespace account {
        type registerDevice = account_registerDevice_;
        type unregisterDevice = account_unregisterDevice_;
        type updateNotifySettings = account_updateNotifySettings_;
        type getNotifySettings = account_getNotifySettings_;
        type resetNotifySettings = account_resetNotifySettings_;
        type updateProfile = account_updateProfile_;
        type updateStatus = account_updateStatus_;
        type getWallPapers = account_getWallPapers_;
        type reportPeer = account_reportPeer_;
        type checkUsername = account_checkUsername_;
        type updateUsername = account_updateUsername_;
        type getPrivacy = account_getPrivacy_;
        type setPrivacy = account_setPrivacy_;
        type deleteAccount = account_deleteAccount_;
        type getAccountTTL = account_getAccountTTL_;
        type setAccountTTL = account_setAccountTTL_;
        type sendChangePhoneCode = account_sendChangePhoneCode_;
        type changePhone = account_changePhone_;
        type updateDeviceLocked = account_updateDeviceLocked_;
        type getAuthorizations = account_getAuthorizations_;
        type resetAuthorization = account_resetAuthorization_;
        type getPassword = account_getPassword_;
        type getPasswordSettings = account_getPasswordSettings_;
        type updatePasswordSettings = account_updatePasswordSettings_;
        type sendConfirmPhoneCode = account_sendConfirmPhoneCode_;
        type confirmPhone = account_confirmPhone_;
        type getTmpPassword = account_getTmpPassword_;
        type getWebAuthorizations = account_getWebAuthorizations_;
        type resetWebAuthorization = account_resetWebAuthorization_;
        type resetWebAuthorizations = account_resetWebAuthorizations_;
        type getAllSecureValues = account_getAllSecureValues_;
        type getSecureValue = account_getSecureValue_;
        type saveSecureValue = account_saveSecureValue_;
        type deleteSecureValue = account_deleteSecureValue_;
        type getAuthorizationForm = account_getAuthorizationForm_;
        type acceptAuthorization = account_acceptAuthorization_;
        type sendVerifyPhoneCode = account_sendVerifyPhoneCode_;
        type verifyPhone = account_verifyPhone_;
        type sendVerifyEmailCode = account_sendVerifyEmailCode_;
        type verifyEmail = account_verifyEmail_;
        type initTakeoutSession = account_initTakeoutSession_;
        type finishTakeoutSession = account_finishTakeoutSession_;
        type confirmPasswordEmail = account_confirmPasswordEmail_;
        type resendPasswordEmail = account_resendPasswordEmail_;
        type cancelPasswordEmail = account_cancelPasswordEmail_;
        type getContactSignUpNotification = account_getContactSignUpNotification_;
        type setContactSignUpNotification = account_setContactSignUpNotification_;
        type getNotifyExceptions = account_getNotifyExceptions_;
        type getWallPaper = account_getWallPaper_;
        type uploadWallPaper = account_uploadWallPaper_;
        type saveWallPaper = account_saveWallPaper_;
        type installWallPaper = account_installWallPaper_;
        type resetWallPapers = account_resetWallPapers_;
        type getAutoDownloadSettings = account_getAutoDownloadSettings_;
        type saveAutoDownloadSettings = account_saveAutoDownloadSettings_;
        type uploadTheme = account_uploadTheme_;
        type createTheme = account_createTheme_;
        type updateTheme = account_updateTheme_;
        type saveTheme = account_saveTheme_;
        type installTheme = account_installTheme_;
        type getTheme = account_getTheme_;
        type getThemes = account_getThemes_;
        type setContentSettings = account_setContentSettings_;
        type getContentSettings = account_getContentSettings_;
        type getMultiWallPapers = account_getMultiWallPapers_;
        type getGlobalPrivacySettings = account_getGlobalPrivacySettings_;
        type setGlobalPrivacySettings = account_setGlobalPrivacySettings_;
        type reportProfilePhoto = account_reportProfilePhoto_;
        type resetPassword = account_resetPassword_;
        type declinePasswordReset = account_declinePasswordReset_;
        type getChatThemes = account_getChatThemes_;
        type setAuthorizationTTL = account_setAuthorizationTTL_;
        type changeAuthorizationSettings = account_changeAuthorizationSettings_;
        type getSavedRingtones = account_getSavedRingtones_;
        type saveRingtone = account_saveRingtone_;
        type uploadRingtone = account_uploadRingtone_;
        type updateEmojiStatus = account_updateEmojiStatus_;
        type getDefaultEmojiStatuses = account_getDefaultEmojiStatuses_;
        type getRecentEmojiStatuses = account_getRecentEmojiStatuses_;
        type clearRecentEmojiStatuses = account_clearRecentEmojiStatuses_;
        type reorderUsernames = account_reorderUsernames_;
        type toggleUsername = account_toggleUsername_;
        type getDefaultProfilePhotoEmojis = account_getDefaultProfilePhotoEmojis_;
        type getDefaultGroupPhotoEmojis = account_getDefaultGroupPhotoEmojis_;
        type getAutoSaveSettings = account_getAutoSaveSettings_;
        type saveAutoSaveSettings = account_saveAutoSaveSettings_;
        type deleteAutoSaveExceptions = account_deleteAutoSaveExceptions_;
        type invalidateSignInCodes = account_invalidateSignInCodes_;
        type updateColor = account_updateColor_;
        type getDefaultBackgroundEmojis = account_getDefaultBackgroundEmojis_;
        type getChannelDefaultEmojiStatuses = account_getChannelDefaultEmojiStatuses_;
        type getChannelRestrictedStatusEmojis = account_getChannelRestrictedStatusEmojis_;
        type updateBusinessWorkHours = account_updateBusinessWorkHours_;
        type updateBusinessLocation = account_updateBusinessLocation_;
        type updateBusinessGreetingMessage = account_updateBusinessGreetingMessage_;
        type updateBusinessAwayMessage = account_updateBusinessAwayMessage_;
        type updateConnectedBot = account_updateConnectedBot_;
        type getConnectedBots = account_getConnectedBots_;
    }
    namespace users {
        type getUsers = users_getUsers_;
        type getFullUser = users_getFullUser_;
        type setSecureValueErrors = users_setSecureValueErrors_;
        type getIsPremiumRequiredToContact = users_getIsPremiumRequiredToContact_;
    }
    namespace contacts {
        type getContactIDs = contacts_getContactIDs_;
        type getStatuses = contacts_getStatuses_;
        type getContacts = contacts_getContacts_;
        type importContacts = contacts_importContacts_;
        type deleteContacts = contacts_deleteContacts_;
        type deleteByPhones = contacts_deleteByPhones_;
        type block = contacts_block_;
        type unblock = contacts_unblock_;
        type getBlocked = contacts_getBlocked_;
        type search = contacts_search_;
        type resolveUsername = contacts_resolveUsername_;
        type getTopPeers = contacts_getTopPeers_;
        type resetTopPeerRating = contacts_resetTopPeerRating_;
        type resetSaved = contacts_resetSaved_;
        type getSaved = contacts_getSaved_;
        type toggleTopPeers = contacts_toggleTopPeers_;
        type addContact = contacts_addContact_;
        type acceptContact = contacts_acceptContact_;
        type getLocated = contacts_getLocated_;
        type blockFromReplies = contacts_blockFromReplies_;
        type resolvePhone = contacts_resolvePhone_;
        type exportContactToken = contacts_exportContactToken_;
        type importContactToken = contacts_importContactToken_;
        type editCloseFriends = contacts_editCloseFriends_;
        type setBlocked = contacts_setBlocked_;
    }
    namespace messages {
        type getMessages = messages_getMessages_;
        type getDialogs = messages_getDialogs_;
        type getHistory = messages_getHistory_;
        type search = messages_search_;
        type readHistory = messages_readHistory_;
        type deleteHistory = messages_deleteHistory_;
        type deleteMessages = messages_deleteMessages_;
        type receivedMessages = messages_receivedMessages_;
        type setTyping = messages_setTyping_;
        type sendMessage = messages_sendMessage_;
        type sendMedia = messages_sendMedia_;
        type forwardMessages = messages_forwardMessages_;
        type reportSpam = messages_reportSpam_;
        type getPeerSettings = messages_getPeerSettings_;
        type report = messages_report_;
        type getChats = messages_getChats_;
        type getFullChat = messages_getFullChat_;
        type editChatTitle = messages_editChatTitle_;
        type editChatPhoto = messages_editChatPhoto_;
        type addChatUser = messages_addChatUser_;
        type deleteChatUser = messages_deleteChatUser_;
        type createChat = messages_createChat_;
        type getDhConfig = messages_getDhConfig_;
        type requestEncryption = messages_requestEncryption_;
        type acceptEncryption = messages_acceptEncryption_;
        type discardEncryption = messages_discardEncryption_;
        type setEncryptedTyping = messages_setEncryptedTyping_;
        type readEncryptedHistory = messages_readEncryptedHistory_;
        type sendEncrypted = messages_sendEncrypted_;
        type sendEncryptedFile = messages_sendEncryptedFile_;
        type sendEncryptedService = messages_sendEncryptedService_;
        type receivedQueue = messages_receivedQueue_;
        type reportEncryptedSpam = messages_reportEncryptedSpam_;
        type readMessageContents = messages_readMessageContents_;
        type getStickers = messages_getStickers_;
        type getAllStickers = messages_getAllStickers_;
        type getWebPagePreview = messages_getWebPagePreview_;
        type exportChatInvite = messages_exportChatInvite_;
        type checkChatInvite = messages_checkChatInvite_;
        type importChatInvite = messages_importChatInvite_;
        type getStickerSet = messages_getStickerSet_;
        type installStickerSet = messages_installStickerSet_;
        type uninstallStickerSet = messages_uninstallStickerSet_;
        type startBot = messages_startBot_;
        type getMessagesViews = messages_getMessagesViews_;
        type editChatAdmin = messages_editChatAdmin_;
        type migrateChat = messages_migrateChat_;
        type searchGlobal = messages_searchGlobal_;
        type reorderStickerSets = messages_reorderStickerSets_;
        type getDocumentByHash = messages_getDocumentByHash_;
        type getSavedGifs = messages_getSavedGifs_;
        type saveGif = messages_saveGif_;
        type getInlineBotResults = messages_getInlineBotResults_;
        type setInlineBotResults = messages_setInlineBotResults_;
        type sendInlineBotResult = messages_sendInlineBotResult_;
        type getMessageEditData = messages_getMessageEditData_;
        type editMessage = messages_editMessage_;
        type editInlineBotMessage = messages_editInlineBotMessage_;
        type getBotCallbackAnswer = messages_getBotCallbackAnswer_;
        type setBotCallbackAnswer = messages_setBotCallbackAnswer_;
        type getPeerDialogs = messages_getPeerDialogs_;
        type saveDraft = messages_saveDraft_;
        type getAllDrafts = messages_getAllDrafts_;
        type getFeaturedStickers = messages_getFeaturedStickers_;
        type readFeaturedStickers = messages_readFeaturedStickers_;
        type getRecentStickers = messages_getRecentStickers_;
        type saveRecentSticker = messages_saveRecentSticker_;
        type clearRecentStickers = messages_clearRecentStickers_;
        type getArchivedStickers = messages_getArchivedStickers_;
        type getMaskStickers = messages_getMaskStickers_;
        type getAttachedStickers = messages_getAttachedStickers_;
        type setGameScore = messages_setGameScore_;
        type setInlineGameScore = messages_setInlineGameScore_;
        type getGameHighScores = messages_getGameHighScores_;
        type getInlineGameHighScores = messages_getInlineGameHighScores_;
        type getCommonChats = messages_getCommonChats_;
        type getWebPage = messages_getWebPage_;
        type toggleDialogPin = messages_toggleDialogPin_;
        type reorderPinnedDialogs = messages_reorderPinnedDialogs_;
        type getPinnedDialogs = messages_getPinnedDialogs_;
        type setBotShippingResults = messages_setBotShippingResults_;
        type setBotPrecheckoutResults = messages_setBotPrecheckoutResults_;
        type uploadMedia = messages_uploadMedia_;
        type sendScreenshotNotification = messages_sendScreenshotNotification_;
        type getFavedStickers = messages_getFavedStickers_;
        type faveSticker = messages_faveSticker_;
        type getUnreadMentions = messages_getUnreadMentions_;
        type readMentions = messages_readMentions_;
        type getRecentLocations = messages_getRecentLocations_;
        type sendMultiMedia = messages_sendMultiMedia_;
        type uploadEncryptedFile = messages_uploadEncryptedFile_;
        type searchStickerSets = messages_searchStickerSets_;
        type getSplitRanges = messages_getSplitRanges_;
        type markDialogUnread = messages_markDialogUnread_;
        type getDialogUnreadMarks = messages_getDialogUnreadMarks_;
        type clearAllDrafts = messages_clearAllDrafts_;
        type updatePinnedMessage = messages_updatePinnedMessage_;
        type sendVote = messages_sendVote_;
        type getPollResults = messages_getPollResults_;
        type getOnlines = messages_getOnlines_;
        type editChatAbout = messages_editChatAbout_;
        type editChatDefaultBannedRights = messages_editChatDefaultBannedRights_;
        type getEmojiKeywords = messages_getEmojiKeywords_;
        type getEmojiKeywordsDifference = messages_getEmojiKeywordsDifference_;
        type getEmojiKeywordsLanguages = messages_getEmojiKeywordsLanguages_;
        type getEmojiURL = messages_getEmojiURL_;
        type getSearchCounters = messages_getSearchCounters_;
        type requestUrlAuth = messages_requestUrlAuth_;
        type acceptUrlAuth = messages_acceptUrlAuth_;
        type hidePeerSettingsBar = messages_hidePeerSettingsBar_;
        type getScheduledHistory = messages_getScheduledHistory_;
        type getScheduledMessages = messages_getScheduledMessages_;
        type sendScheduledMessages = messages_sendScheduledMessages_;
        type deleteScheduledMessages = messages_deleteScheduledMessages_;
        type getPollVotes = messages_getPollVotes_;
        type toggleStickerSets = messages_toggleStickerSets_;
        type getDialogFilters = messages_getDialogFilters_;
        type getSuggestedDialogFilters = messages_getSuggestedDialogFilters_;
        type updateDialogFilter = messages_updateDialogFilter_;
        type updateDialogFiltersOrder = messages_updateDialogFiltersOrder_;
        type getOldFeaturedStickers = messages_getOldFeaturedStickers_;
        type getReplies = messages_getReplies_;
        type getDiscussionMessage = messages_getDiscussionMessage_;
        type readDiscussion = messages_readDiscussion_;
        type unpinAllMessages = messages_unpinAllMessages_;
        type deleteChat = messages_deleteChat_;
        type deletePhoneCallHistory = messages_deletePhoneCallHistory_;
        type checkHistoryImport = messages_checkHistoryImport_;
        type initHistoryImport = messages_initHistoryImport_;
        type uploadImportedMedia = messages_uploadImportedMedia_;
        type startHistoryImport = messages_startHistoryImport_;
        type getExportedChatInvites = messages_getExportedChatInvites_;
        type getExportedChatInvite = messages_getExportedChatInvite_;
        type editExportedChatInvite = messages_editExportedChatInvite_;
        type deleteRevokedExportedChatInvites = messages_deleteRevokedExportedChatInvites_;
        type deleteExportedChatInvite = messages_deleteExportedChatInvite_;
        type getAdminsWithInvites = messages_getAdminsWithInvites_;
        type getChatInviteImporters = messages_getChatInviteImporters_;
        type setHistoryTTL = messages_setHistoryTTL_;
        type checkHistoryImportPeer = messages_checkHistoryImportPeer_;
        type setChatTheme = messages_setChatTheme_;
        type getMessageReadParticipants = messages_getMessageReadParticipants_;
        type getSearchResultsCalendar = messages_getSearchResultsCalendar_;
        type getSearchResultsPositions = messages_getSearchResultsPositions_;
        type hideChatJoinRequest = messages_hideChatJoinRequest_;
        type hideAllChatJoinRequests = messages_hideAllChatJoinRequests_;
        type toggleNoForwards = messages_toggleNoForwards_;
        type saveDefaultSendAs = messages_saveDefaultSendAs_;
        type sendReaction = messages_sendReaction_;
        type getMessagesReactions = messages_getMessagesReactions_;
        type getMessageReactionsList = messages_getMessageReactionsList_;
        type setChatAvailableReactions = messages_setChatAvailableReactions_;
        type getAvailableReactions = messages_getAvailableReactions_;
        type setDefaultReaction = messages_setDefaultReaction_;
        type translateText = messages_translateText_;
        type getUnreadReactions = messages_getUnreadReactions_;
        type readReactions = messages_readReactions_;
        type searchSentMedia = messages_searchSentMedia_;
        type getAttachMenuBots = messages_getAttachMenuBots_;
        type getAttachMenuBot = messages_getAttachMenuBot_;
        type toggleBotInAttachMenu = messages_toggleBotInAttachMenu_;
        type requestWebView = messages_requestWebView_;
        type prolongWebView = messages_prolongWebView_;
        type requestSimpleWebView = messages_requestSimpleWebView_;
        type sendWebViewResultMessage = messages_sendWebViewResultMessage_;
        type sendWebViewData = messages_sendWebViewData_;
        type transcribeAudio = messages_transcribeAudio_;
        type rateTranscribedAudio = messages_rateTranscribedAudio_;
        type getCustomEmojiDocuments = messages_getCustomEmojiDocuments_;
        type getEmojiStickers = messages_getEmojiStickers_;
        type getFeaturedEmojiStickers = messages_getFeaturedEmojiStickers_;
        type reportReaction = messages_reportReaction_;
        type getTopReactions = messages_getTopReactions_;
        type getRecentReactions = messages_getRecentReactions_;
        type clearRecentReactions = messages_clearRecentReactions_;
        type getExtendedMedia = messages_getExtendedMedia_;
        type setDefaultHistoryTTL = messages_setDefaultHistoryTTL_;
        type getDefaultHistoryTTL = messages_getDefaultHistoryTTL_;
        type sendBotRequestedPeer = messages_sendBotRequestedPeer_;
        type getEmojiGroups = messages_getEmojiGroups_;
        type getEmojiStatusGroups = messages_getEmojiStatusGroups_;
        type getEmojiProfilePhotoGroups = messages_getEmojiProfilePhotoGroups_;
        type searchCustomEmoji = messages_searchCustomEmoji_;
        type togglePeerTranslations = messages_togglePeerTranslations_;
        type getBotApp = messages_getBotApp_;
        type requestAppWebView = messages_requestAppWebView_;
        type setChatWallPaper = messages_setChatWallPaper_;
        type searchEmojiStickerSets = messages_searchEmojiStickerSets_;
        type getSavedDialogs = messages_getSavedDialogs_;
        type getSavedHistory = messages_getSavedHistory_;
        type deleteSavedHistory = messages_deleteSavedHistory_;
        type getPinnedSavedDialogs = messages_getPinnedSavedDialogs_;
        type toggleSavedDialogPin = messages_toggleSavedDialogPin_;
        type reorderPinnedSavedDialogs = messages_reorderPinnedSavedDialogs_;
        type getSavedReactionTags = messages_getSavedReactionTags_;
        type updateSavedReactionTag = messages_updateSavedReactionTag_;
        type getDefaultTagReactions = messages_getDefaultTagReactions_;
        type getOutboxReadDate = messages_getOutboxReadDate_;
        type getQuickReplies = messages_getQuickReplies_;
        type reorderQuickReplies = messages_reorderQuickReplies_;
        type checkQuickReplyShortcut = messages_checkQuickReplyShortcut_;
        type editQuickReplyShortcut = messages_editQuickReplyShortcut_;
        type deleteQuickReplyShortcut = messages_deleteQuickReplyShortcut_;
        type getQuickReplyMessages = messages_getQuickReplyMessages_;
        type sendQuickReplyMessages = messages_sendQuickReplyMessages_;
        type deleteQuickReplyMessages = messages_deleteQuickReplyMessages_;
        type toggleDialogFilterTags = messages_toggleDialogFilterTags_;
    }
    namespace updates {
        type getState = updates_getState_;
        type getDifference = updates_getDifference_;
        type getChannelDifference = updates_getChannelDifference_;
    }
    namespace photos {
        type updateProfilePhoto = photos_updateProfilePhoto_;
        type uploadProfilePhoto = photos_uploadProfilePhoto_;
        type deletePhotos = photos_deletePhotos_;
        type getUserPhotos = photos_getUserPhotos_;
        type uploadContactProfilePhoto = photos_uploadContactProfilePhoto_;
    }
    namespace upload {
        type saveFilePart = upload_saveFilePart_;
        type getFile = upload_getFile_;
        type saveBigFilePart = upload_saveBigFilePart_;
        type getWebFile = upload_getWebFile_;
        type getCdnFile = upload_getCdnFile_;
        type reuploadCdnFile = upload_reuploadCdnFile_;
        type getCdnFileHashes = upload_getCdnFileHashes_;
        type getFileHashes = upload_getFileHashes_;
    }
    namespace help {
        type getConfig = help_getConfig_;
        type getNearestDc = help_getNearestDc_;
        type getAppUpdate = help_getAppUpdate_;
        type getInviteText = help_getInviteText_;
        type getSupport = help_getSupport_;
        type setBotUpdatesStatus = help_setBotUpdatesStatus_;
        type getCdnConfig = help_getCdnConfig_;
        type getRecentMeUrls = help_getRecentMeUrls_;
        type getTermsOfServiceUpdate = help_getTermsOfServiceUpdate_;
        type acceptTermsOfService = help_acceptTermsOfService_;
        type getDeepLinkInfo = help_getDeepLinkInfo_;
        type getAppConfig = help_getAppConfig_;
        type saveAppLog = help_saveAppLog_;
        type getPassportConfig = help_getPassportConfig_;
        type getSupportName = help_getSupportName_;
        type getUserInfo = help_getUserInfo_;
        type editUserInfo = help_editUserInfo_;
        type getPromoData = help_getPromoData_;
        type hidePromoData = help_hidePromoData_;
        type dismissSuggestion = help_dismissSuggestion_;
        type getCountriesList = help_getCountriesList_;
        type getPremiumPromo = help_getPremiumPromo_;
        type getPeerColors = help_getPeerColors_;
        type getPeerProfileColors = help_getPeerProfileColors_;
        type getTimezonesList = help_getTimezonesList_;
    }
    namespace channels {
        type readHistory = channels_readHistory_;
        type deleteMessages = channels_deleteMessages_;
        type reportSpam = channels_reportSpam_;
        type getMessages = channels_getMessages_;
        type getParticipants = channels_getParticipants_;
        type getParticipant = channels_getParticipant_;
        type getChannels = channels_getChannels_;
        type getFullChannel = channels_getFullChannel_;
        type createChannel = channels_createChannel_;
        type editAdmin = channels_editAdmin_;
        type editTitle = channels_editTitle_;
        type editPhoto = channels_editPhoto_;
        type checkUsername = channels_checkUsername_;
        type updateUsername = channels_updateUsername_;
        type joinChannel = channels_joinChannel_;
        type leaveChannel = channels_leaveChannel_;
        type inviteToChannel = channels_inviteToChannel_;
        type deleteChannel = channels_deleteChannel_;
        type exportMessageLink = channels_exportMessageLink_;
        type toggleSignatures = channels_toggleSignatures_;
        type getAdminedPublicChannels = channels_getAdminedPublicChannels_;
        type editBanned = channels_editBanned_;
        type getAdminLog = channels_getAdminLog_;
        type setStickers = channels_setStickers_;
        type readMessageContents = channels_readMessageContents_;
        type deleteHistory = channels_deleteHistory_;
        type togglePreHistoryHidden = channels_togglePreHistoryHidden_;
        type getLeftChannels = channels_getLeftChannels_;
        type getGroupsForDiscussion = channels_getGroupsForDiscussion_;
        type setDiscussionGroup = channels_setDiscussionGroup_;
        type editCreator = channels_editCreator_;
        type editLocation = channels_editLocation_;
        type toggleSlowMode = channels_toggleSlowMode_;
        type getInactiveChannels = channels_getInactiveChannels_;
        type convertToGigagroup = channels_convertToGigagroup_;
        type viewSponsoredMessage = channels_viewSponsoredMessage_;
        type getSponsoredMessages = channels_getSponsoredMessages_;
        type getSendAs = channels_getSendAs_;
        type deleteParticipantHistory = channels_deleteParticipantHistory_;
        type toggleJoinToSend = channels_toggleJoinToSend_;
        type toggleJoinRequest = channels_toggleJoinRequest_;
        type reorderUsernames = channels_reorderUsernames_;
        type toggleUsername = channels_toggleUsername_;
        type deactivateAllUsernames = channels_deactivateAllUsernames_;
        type toggleForum = channels_toggleForum_;
        type createForumTopic = channels_createForumTopic_;
        type getForumTopics = channels_getForumTopics_;
        type getForumTopicsByID = channels_getForumTopicsByID_;
        type editForumTopic = channels_editForumTopic_;
        type updatePinnedForumTopic = channels_updatePinnedForumTopic_;
        type deleteTopicHistory = channels_deleteTopicHistory_;
        type reorderPinnedForumTopics = channels_reorderPinnedForumTopics_;
        type toggleAntiSpam = channels_toggleAntiSpam_;
        type reportAntiSpamFalsePositive = channels_reportAntiSpamFalsePositive_;
        type toggleParticipantsHidden = channels_toggleParticipantsHidden_;
        type clickSponsoredMessage = channels_clickSponsoredMessage_;
        type updateColor = channels_updateColor_;
        type toggleViewForumAsMessages = channels_toggleViewForumAsMessages_;
        type getChannelRecommendations = channels_getChannelRecommendations_;
        type updateEmojiStatus = channels_updateEmojiStatus_;
        type setBoostsToUnblockRestrictions = channels_setBoostsToUnblockRestrictions_;
        type setEmojiStickers = channels_setEmojiStickers_;
    }
    namespace bots {
        type sendCustomRequest = bots_sendCustomRequest_;
        type answerWebhookJSONQuery = bots_answerWebhookJSONQuery_;
        type setBotCommands = bots_setBotCommands_;
        type resetBotCommands = bots_resetBotCommands_;
        type getBotCommands = bots_getBotCommands_;
        type setBotMenuButton = bots_setBotMenuButton_;
        type getBotMenuButton = bots_getBotMenuButton_;
        type setBotBroadcastDefaultAdminRights = bots_setBotBroadcastDefaultAdminRights_;
        type setBotGroupDefaultAdminRights = bots_setBotGroupDefaultAdminRights_;
        type setBotInfo = bots_setBotInfo_;
        type getBotInfo = bots_getBotInfo_;
        type reorderUsernames = bots_reorderUsernames_;
        type toggleUsername = bots_toggleUsername_;
        type canSendMessage = bots_canSendMessage_;
        type allowSendMessage = bots_allowSendMessage_;
        type invokeWebViewCustomMethod = bots_invokeWebViewCustomMethod_;
    }
    namespace payments {
        type getPaymentForm = payments_getPaymentForm_;
        type getPaymentReceipt = payments_getPaymentReceipt_;
        type validateRequestedInfo = payments_validateRequestedInfo_;
        type sendPaymentForm = payments_sendPaymentForm_;
        type getSavedInfo = payments_getSavedInfo_;
        type clearSavedInfo = payments_clearSavedInfo_;
        type getBankCardData = payments_getBankCardData_;
        type exportInvoice = payments_exportInvoice_;
        type assignAppStoreTransaction = payments_assignAppStoreTransaction_;
        type assignPlayMarketTransaction = payments_assignPlayMarketTransaction_;
        type canPurchasePremium = payments_canPurchasePremium_;
        type getPremiumGiftCodeOptions = payments_getPremiumGiftCodeOptions_;
        type checkGiftCode = payments_checkGiftCode_;
        type applyGiftCode = payments_applyGiftCode_;
        type getGiveawayInfo = payments_getGiveawayInfo_;
        type launchPrepaidGiveaway = payments_launchPrepaidGiveaway_;
    }
    namespace stickers {
        type createStickerSet = stickers_createStickerSet_;
        type removeStickerFromSet = stickers_removeStickerFromSet_;
        type changeStickerPosition = stickers_changeStickerPosition_;
        type addStickerToSet = stickers_addStickerToSet_;
        type setStickerSetThumb = stickers_setStickerSetThumb_;
        type checkShortName = stickers_checkShortName_;
        type suggestShortName = stickers_suggestShortName_;
        type changeSticker = stickers_changeSticker_;
        type renameStickerSet = stickers_renameStickerSet_;
        type deleteStickerSet = stickers_deleteStickerSet_;
    }
    namespace phone {
        type getCallConfig = phone_getCallConfig_;
        type requestCall = phone_requestCall_;
        type acceptCall = phone_acceptCall_;
        type confirmCall = phone_confirmCall_;
        type receivedCall = phone_receivedCall_;
        type discardCall = phone_discardCall_;
        type setCallRating = phone_setCallRating_;
        type saveCallDebug = phone_saveCallDebug_;
        type sendSignalingData = phone_sendSignalingData_;
        type createGroupCall = phone_createGroupCall_;
        type joinGroupCall = phone_joinGroupCall_;
        type leaveGroupCall = phone_leaveGroupCall_;
        type inviteToGroupCall = phone_inviteToGroupCall_;
        type discardGroupCall = phone_discardGroupCall_;
        type toggleGroupCallSettings = phone_toggleGroupCallSettings_;
        type getGroupCall = phone_getGroupCall_;
        type getGroupParticipants = phone_getGroupParticipants_;
        type checkGroupCall = phone_checkGroupCall_;
        type toggleGroupCallRecord = phone_toggleGroupCallRecord_;
        type editGroupCallParticipant = phone_editGroupCallParticipant_;
        type editGroupCallTitle = phone_editGroupCallTitle_;
        type getGroupCallJoinAs = phone_getGroupCallJoinAs_;
        type exportGroupCallInvite = phone_exportGroupCallInvite_;
        type toggleGroupCallStartSubscription = phone_toggleGroupCallStartSubscription_;
        type startScheduledGroupCall = phone_startScheduledGroupCall_;
        type saveDefaultGroupCallJoinAs = phone_saveDefaultGroupCallJoinAs_;
        type joinGroupCallPresentation = phone_joinGroupCallPresentation_;
        type leaveGroupCallPresentation = phone_leaveGroupCallPresentation_;
        type getGroupCallStreamChannels = phone_getGroupCallStreamChannels_;
        type getGroupCallStreamRtmpUrl = phone_getGroupCallStreamRtmpUrl_;
        type saveCallLog = phone_saveCallLog_;
    }
    namespace langpack {
        type getLangPack = langpack_getLangPack_;
        type getStrings = langpack_getStrings_;
        type getDifference = langpack_getDifference_;
        type getLanguages = langpack_getLanguages_;
        type getLanguage = langpack_getLanguage_;
    }
    namespace folders {
        type editPeerFolders = folders_editPeerFolders_;
    }
    namespace stats {
        type getBroadcastStats = stats_getBroadcastStats_;
        type loadAsyncGraph = stats_loadAsyncGraph_;
        type getMegagroupStats = stats_getMegagroupStats_;
        type getMessagePublicForwards = stats_getMessagePublicForwards_;
        type getMessageStats = stats_getMessageStats_;
        type getStoryStats = stats_getStoryStats_;
        type getStoryPublicForwards = stats_getStoryPublicForwards_;
    }
    namespace chatlists {
        type exportChatlistInvite = chatlists_exportChatlistInvite_;
        type deleteExportedInvite = chatlists_deleteExportedInvite_;
        type editExportedInvite = chatlists_editExportedInvite_;
        type getExportedInvites = chatlists_getExportedInvites_;
        type checkChatlistInvite = chatlists_checkChatlistInvite_;
        type joinChatlistInvite = chatlists_joinChatlistInvite_;
        type getChatlistUpdates = chatlists_getChatlistUpdates_;
        type joinChatlistUpdates = chatlists_joinChatlistUpdates_;
        type hideChatlistUpdates = chatlists_hideChatlistUpdates_;
        type getLeaveChatlistSuggestions = chatlists_getLeaveChatlistSuggestions_;
        type leaveChatlist = chatlists_leaveChatlist_;
    }
    namespace stories {
        type canSendStory = stories_canSendStory_;
        type sendStory = stories_sendStory_;
        type editStory = stories_editStory_;
        type deleteStories = stories_deleteStories_;
        type togglePinned = stories_togglePinned_;
        type getAllStories = stories_getAllStories_;
        type getPinnedStories = stories_getPinnedStories_;
        type getStoriesArchive = stories_getStoriesArchive_;
        type getStoriesByID = stories_getStoriesByID_;
        type toggleAllStoriesHidden = stories_toggleAllStoriesHidden_;
        type readStories = stories_readStories_;
        type incrementStoryViews = stories_incrementStoryViews_;
        type getStoryViewsList = stories_getStoryViewsList_;
        type getStoriesViews = stories_getStoriesViews_;
        type exportStoryLink = stories_exportStoryLink_;
        type report = stories_report_;
        type activateStealthMode = stories_activateStealthMode_;
        type sendReaction = stories_sendReaction_;
        type getPeerStories = stories_getPeerStories_;
        type getAllReadPeerStories = stories_getAllReadPeerStories_;
        type getPeerMaxIDs = stories_getPeerMaxIDs_;
        type getChatsToSend = stories_getChatsToSend_;
        type togglePeerStoriesHidden = stories_togglePeerStoriesHidden_;
        type getStoryReactionsList = stories_getStoryReactionsList_;
    }
    namespace premium {
        type getBoostsList = premium_getBoostsList_;
        type getMyBoosts = premium_getMyBoosts_;
        type applyBoost = premium_applyBoost_;
        type getBoostsStatus = premium_getBoostsStatus_;
        type getUserBoosts = premium_getUserBoosts_;
    }
    namespace smsjobs {
        type isEligibleToJoin = smsjobs_isEligibleToJoin_;
        type join = smsjobs_join_;
        type leave = smsjobs_leave_;
        type updateSettings = smsjobs_updateSettings_;
        type getStatus = smsjobs_getStatus_;
        type getSmsJob = smsjobs_getSmsJob_;
        type finishJob = smsjobs_finishJob_;
    }
}
