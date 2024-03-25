import { functions } from "../2_tl.js";
import { PublicKeys } from "../4_constants.js";
import { ClientAbstract, ClientAbstractParams } from "./0_client_abstract.js";
export interface ClientPlainParams extends ClientAbstractParams {
    /**
     * MTProto public keys to use in the `[keyId, [key, exponent]][]` format. Don't set this unless you know what you are doing. Defaults to Telegram servers' public keys.
     */
    publicKeys?: PublicKeys;
}
/**
 * An MTProto client for making plain connections. Most users won't need to interact with this. Used internally for creating authorization keys.
 */
export declare class ClientPlain extends ClientAbstract {
    #private;
    constructor(params?: ClientPlainParams);
    invoke<T extends functions.Function<unknown>>(function_: T): Promise<T["__R"]>;
    createAuthKey(): Promise<[Uint8Array, bigint]>;
}
