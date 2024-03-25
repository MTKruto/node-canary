import { ErrorWithCall, ErrorWithCallParams } from "./3_errors.js";
import { TLObject, types } from "./2_tl.js";
export * from "./3_errors.js";
export declare class FloodWait extends ErrorWithCall {
    seconds: number;
    constructor(params: ErrorWithCallParams);
}
export declare class Migrate extends ErrorWithCall {
    dc: number;
    constructor(params: ErrorWithCallParams);
}
export declare class UserMigrate extends Migrate {
}
export declare class PhoneMigrate extends Migrate {
}
export declare class FileMigrate extends Migrate {
}
export declare class StatsMigrate extends Migrate {
}
export declare function upgradeInstance(error: types.Rpc_error, call: TLObject): types.Rpc_error;
