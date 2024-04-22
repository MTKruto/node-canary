import { types } from "../2_tl.js";
/** A user's birthday. */
export interface Birthday {
    day: number;
    month: number;
    year?: number;
}
export declare function constructBirthday(birthday: types.Birthday): {
    day: number;
    month: number;
    year: number | undefined;
};
