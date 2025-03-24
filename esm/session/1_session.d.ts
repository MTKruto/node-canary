import { Connection, ConnectionCallback } from "../2_connection.js";
import { DC, TransportProvider } from "../3_transport.js";
import { SessionState } from "./0_session_state.js";
export interface SessionParams {
    /**
     * The transport provider to use. Defaults to `webSocketTransportProvider` with its default options.
     */
    transportProvider?: TransportProvider;
    /**
     * Whether the connection is with a CDN server. Defaults to false.
     */
    cdn?: boolean;
}
export declare abstract class Session {
    #private;
    protected state: SessionState;
    protected transport: ReturnType<TransportProvider>;
    constructor(dc: DC, params?: SessionParams);
    set onConnectionStateChange(onConnectionStateChange: Connection["stateChangeHandler"]);
    set connectionCallback(connectionCallback: ConnectionCallback | undefined);
    get dc(): DC;
    get cdn(): boolean;
    set serverSalt(serverSalt: bigint);
    get connected(): boolean;
    connect(): Promise<void>;
    protected waitUntilConnected(): Promise<void>;
    get disconnected(): boolean;
    disconnect(): void;
    abstract send(body: Uint8Array): Promise<bigint>;
}
//# sourceMappingURL=1_session.d.ts.map