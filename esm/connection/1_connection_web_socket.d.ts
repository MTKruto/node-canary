import { ConnectionUnframed } from "./0_connection.js";
export declare class ConnectionWebSocket extends ConnectionUnframed implements ConnectionUnframed {
    #private;
    private readonly url;
    constructor(url: string | URL);
    get connected(): boolean;
    open(): Promise<void>;
    read(p: Uint8Array): Promise<void>;
    write(p: Uint8Array): Promise<void>;
    close(): void;
}
