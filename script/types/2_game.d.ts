/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
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
