import { ID } from "../3_types.js";
import { C } from "./0_types.js";
export declare class AccountManager {
    #private;
    constructor(c: C);
    showUsername(id: ID, username: string): Promise<void>;
    hideUsername(id: ID, username: string): Promise<void>;
    reorderUsernames(id: ID, order: string[]): Promise<boolean>;
    hideUsernames(id: ID): Promise<boolean>;
    getInactiveChats(): Promise<import("../3_types.js").InactiveChat[]>;
}
