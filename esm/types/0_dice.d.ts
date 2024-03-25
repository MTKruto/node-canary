import { types } from "../2_tl.js";
/** A rolled dice. */
export interface Dice {
    /** The emoji on which the dice is based on. */
    emoji: string;
    /** The result of the roll, which is in the range of 1-6 for the emojis "🎲", "🎯" and "🎳",  1-5 for the emojis "🏀" and "⚽", and 1-64 for emoji "🎰". */
    value: number;
}
export declare function constructDice(dice_: types.MessageMediaDice): Dice;
