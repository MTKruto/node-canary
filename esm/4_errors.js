import { UNREACHABLE } from "./1_utilities.js";
import { ErrorWithCall, map } from "./3_errors.js";
export * from "./3_errors.js";
export class FloodWait extends ErrorWithCall {
    constructor(params) {
        super(params);
        Object.defineProperty(this, "seconds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const p = params.error_message.split("_");
        this.seconds = Number(p[p.length - 1]);
        if (isNaN(this.seconds)) {
            UNREACHABLE();
        }
    }
}
export class Migrate extends ErrorWithCall {
    constructor(params) {
        super(params);
        Object.defineProperty(this, "dc", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const p = params.error_message.split("_");
        this.dc = Number(p[p.length - 1]);
        if (isNaN(this.dc)) {
            UNREACHABLE();
        }
    }
}
export class UserMigrate extends Migrate {
}
export class PhoneMigrate extends Migrate {
}
export class FileMigrate extends Migrate {
}
export class StatsMigrate extends Migrate {
}
const prefixMap = {
    "FILE_MIGRATE_": FileMigrate,
    "PHONE_MIGRATE_": PhoneMigrate,
    "USER_MIGRATE_": UserMigrate,
    "STATS_MIGRATE_": StatsMigrate,
    "FLOOD_WAIT_": FloodWait,
};
export function upgradeInstance(error, call) {
    for (const [k, v] of Object.entries(prefixMap)) {
        if (error.error_message.startsWith(k)) {
            return new v({ ...error, call });
        }
    }
    for (const [k, v] of Object.entries(map)) {
        if (error.error_message == k) {
            return new v({ ...error, call });
        }
    }
    return error;
}
