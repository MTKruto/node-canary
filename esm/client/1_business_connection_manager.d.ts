import { enums, types } from "../2_tl.js";
import { Update } from "../3_types.js";
import { C } from "./0_types.js";
export type BusinessConnectionManagerUpdate = types.UpdateBotBusinessConnect;
export declare class BusinessConnectionManager {
    #private;
    constructor(c: C);
    getBusinessConnection(id: string): Promise<import("../3_types.js").BusinessConnection>;
    static canHandleUpdate(update: enums.Update): update is BusinessConnectionManagerUpdate;
    handleUpdate(update: BusinessConnectionManagerUpdate): Promise<Update>;
}
