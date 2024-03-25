import { Queue } from "../1_utilities.js";
import { enums, ReadObject, TLObject } from "../2_tl.js";
import { C } from "./0_types.js";
type UpdateHandler = (update: enums.Update) => Promise<(() => Promise<unknown>)>;
export declare class UpdateManager {
    #private;
    static readonly MAIN_BOX_ID = 0n;
    constructor(c: C);
    fetchState(source: string): Promise<void>;
    processChats(chats: enums.Chat[]): Promise<void>;
    processResult(result: ReadObject): Promise<void>;
    processUsers(users: enums.User[]): Promise<void>;
    getHandleUpdateQueue(boxId: bigint): Queue;
    processUpdates(updates: enums.Update | enums.Updates, checkGap: boolean, call?: TLObject | null, callback?: () => void): void;
    recoverUpdateGap(source: string): Promise<void>;
    setUpdateHandler(handler: UpdateHandler): void;
}
export {};
