import { C } from "./0_types.js";
export declare class BusinessConnectionManager {
    #private;
    constructor(c: C);
    getBusinessConnection(id: string): Promise<import("../3_types.js").BusinessConnection>;
}
