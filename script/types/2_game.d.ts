import { types } from "../2_tl.js";
import { MessageEntity } from "./0_message_entity.js";
import { Animation } from "./1_animation.js";
import { Photo } from "./1_photo.js";
/** A game. */
export interface Game {
    /** The title of the game. */
    title: string;
    /** The description of the game. */
    description: string;
    /** A photo that is displayed when the game is shared. */
    photo: Photo;
    /** A text that is displayed when the game is shared. */
    text?: string;
    /** The text's entities. */
    textEntities?: MessageEntity[];
    /** An animation that is displayed when the game is shared. */
    animation?: Animation;
}
export declare function constructGame(media_: types.MessageMediaGame): Game;
