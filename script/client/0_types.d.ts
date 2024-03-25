import { enums, functions, types } from "../2_tl.js";
import { Storage } from "../3_storage.js";
import { ConnectionState, EntityGetter, ID, ParseMode, Update } from "../3_types.js";
type Functions = typeof functions;
type Keys = keyof Functions;
type AnyFunc = (...args: any) => any;
type Promisify<T extends AnyFunc> = (...args: Parameters<T>) => Promise<ReturnType<T>>;
export type Api = {
    [K in Keys]: Functions[K] extends {
        __F: AnyFunc;
    } ? Promisify<Functions[K]["__F"]> : {
        [K_ in keyof Functions[K]]: Functions[K][K_] extends {
            __F: AnyFunc;
        } ? Promisify<Functions[K][K_]["__F"]> : Functions[K][K_];
    };
};
interface ApiFactory {
    (dcId?: number): {
        api: Api;
        connect: () => Promise<void>;
        disconnect: () => Promise<void>;
    };
}
export interface C {
    id: number;
    api: Api;
    storage: Storage;
    messageStorage: Storage;
    guaranteeUpdateDelivery: boolean;
    setConnectionState: (connectionState: ConnectionState) => void;
    resetConnectionState: () => void;
    getSelfId: () => Promise<number>;
    getInputPeer: (id: ID) => Promise<enums.InputPeer>;
    getInputChannel: (id: ID) => Promise<types.InputChannel>;
    getInputUser: (id: ID) => Promise<types.InputUser>;
    getEntity: EntityGetter;
    handleUpdate: (update: Update) => void;
    parseMode: ParseMode;
    apiFactory: ApiFactory;
    ignoreOutgoing: boolean | null;
    cdn: boolean;
    dropPendingUpdates?: boolean;
}
export declare class ConnectionError extends Error {
}
export {};
