import { MaybePromise } from "../1_utilities.js";
import { DC, TransportProvider } from "../3_transport.js";
export interface ClientAbstractParams {
    /**
     * The first DC to connect to. This is commonly used to decide whether to connect to test or production servers. It is not necessarily the DC that the client will directly connect to or is currently connected to. Defaults to the default initial DC.
     */
    initialDc?: DC;
    /**
     * The transport provider to use. Defaults to `webSocketTransportProvider` with its default options.
     */
    transportProvider?: TransportProvider;
    /**
     * Whether the connection is with a CDN server. Defaults to false.
     */
    cdn?: boolean;
}
export declare abstract class ClientAbstract {
    #private;
    readonly initialDc: DC;
    transportProvider: TransportProvider;
    readonly cdn: boolean;
    protected transport?: ReturnType<TransportProvider>;
    constructor(params?: ClientAbstractParams);
    stateChangeHandler?: (connected: boolean) => void;
    get dc(): DC;
    get dcId(): number;
    setDc(dc: DC): MaybePromise<void>;
    get connected(): boolean;
    connect(): Promise<void>;
    reconnect(dc?: DC): Promise<void>;
    disconnect(): Promise<void>;
    get disconnected(): boolean;
}
