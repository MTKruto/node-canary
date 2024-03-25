import { C } from "./0_types.js";
export declare class NetworkStatisticsManager {
    #private;
    constructor(c: C);
    getNetworkStatistics(): Promise<{
        messages: {
            sent: number;
            received: number;
        };
        cdn: {
            sent: number;
            received: number;
        };
    }>;
    getTransportReadWriteCallback(): {
        read: (count: number) => Promise<void>;
        write: (count: number) => Promise<void>;
    };
}
