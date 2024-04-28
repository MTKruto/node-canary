import { Connection } from "./0_connection.js";
export declare class ConnectionWebSocket implements Connection {
    #private;
    private readonly url;
    stateChangeHandler?: Connection["stateChangeHandler"];
    constructor(url: string | URL);
    get connected(): boolean;
    open(): Promise<void>;
    read(p: Uint8Array): Promise<void>;
    write(p: Uint8Array): Promise<void>;
    close(): void;
}
//# sourceMappingURL=1_connection_web_socket.d.ts.map