import { enums } from "../2_tl.js";
/** The reason for restricting an entity. */
export interface RestrictionReason {
    platform: string;
    reason: string;
    text: string;
}
export declare function constructRestrictionReason(rr: enums.RestrictionReason): RestrictionReason;
