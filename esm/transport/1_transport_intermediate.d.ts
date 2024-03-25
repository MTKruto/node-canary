import { Connection } from "../2_connection.js";
import { Transport } from "./0_transport.js";
export declare class TransportIntermediate extends Transport implements Transport {
    #private;
    constructor(connection: Connection, obfuscated?: boolean);
    initialize(): Promise<void>;
    receive(): Promise<Uint8Array>;
    send(buffer: Uint8Array): Promise<void>;
    deinitialize(): void;
    get initialized(): boolean;
}
