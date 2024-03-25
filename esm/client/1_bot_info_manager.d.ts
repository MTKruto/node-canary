import { BotCommand } from "../3_types.js";
import { GetMyCommandsParams, SetMyCommandsParams } from "./0_params.js";
import { C } from "./0_types.js";
export declare class BotInfoManager {
    #private;
    constructor(c: C);
    setMyDescription(params?: {
        description?: string;
        languageCode?: string;
    }): Promise<void>;
    setMyName(params?: {
        name?: string;
        languageCode?: string;
    }): Promise<void>;
    setMyShortDescription(params?: {
        shortDescription?: string;
        languageCode?: string;
    }): Promise<void>;
    getMyDescription(params?: {
        languageCode?: string;
    }): Promise<string>;
    getMyName(params?: {
        languageCode?: string;
    }): Promise<string>;
    getMyShortDescription(params?: {
        languageCode?: string;
    }): Promise<string>;
    getMyCommands(params?: GetMyCommandsParams): Promise<BotCommand[]>;
    setMyCommands(commands: BotCommand[], params?: SetMyCommandsParams): Promise<void>;
}
