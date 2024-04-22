import { types } from "../2_tl.js";
export interface OpeningHours {
    timezone: string;
    intervals: [number, number][];
}
export declare function constructOpeningHours(hours: types.BusinessWorkHours): OpeningHours;
