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
import { EntityGetter } from "./_getters.js";
import { OpeningHours } from "./0_opening_hours.js";
import { ChatPChannel, ChatPGroup, ChatPPrivate, ChatPSupergroup } from "./1_chat_p.js";
import { Photo } from "./1_photo.js";
import { Location } from "./0_location.js";
import { Birthday } from "./0_birthday.js";
export interface ChatBase {
    photo?: Photo;
}
/** @unlisted */
export interface ChatChannel extends ChatBase, ChatPChannel {
    also?: string[];
}
/** @unlisted */
export interface ChatSupergroup extends ChatBase, ChatPSupergroup {
    also?: string[];
}
/** @unlisted */
export interface ChatGroup extends ChatBase, ChatPGroup {
}
/** @unlisted */
export interface ChatPrivate extends ChatBase, ChatPPrivate {
    also?: string[];
    /** The user's birthday. */
    birthday?: Birthday;
    /** The written address of the business. */
    address?: string;
    /** The exact location of the business. */
    location?: Location;
    /** The opening hours of the business. */
    openingHours?: OpeningHours;
}
/**
 * A chat with more fields.
 */
export type Chat = ChatChannel | ChatSupergroup | ChatGroup | ChatPrivate;
export declare function constructChat(fullChat: types.UserFull | types.ChatFull | types.ChannelFull, getEntity: EntityGetter): Promise<Chat>;
