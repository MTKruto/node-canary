/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
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
import { Api } from "../2_tl.js";
/** A chat photo. */
export interface ChatPhoto {
    /** A file identifier that can be used to download or reuse the small version of the chat photo (160x160). */
    smallFileId: string;
    /** A file identifier that can be used to identify the small version of the chat photo (160x160). */
    smallFileUniqueId: string;
    /** A file identifier that can be used to download or reuse the big version of the chat photo (640x640). */
    bigFileId: string;
    /** A file identifier that can be used to identify the big version of the chat photo (640x640). */
    bigFileUniqueId: string;
    /** Whether the chat photo is animated. */
    hasVideo: boolean;
    /** Differentiates between user profile photos. */
    personal: boolean;
}
export declare function constructChatPhoto(photo: Api.userProfilePhoto | Api.chatPhoto, chatId: number, chatAccessHash: bigint): ChatPhoto;
//# sourceMappingURL=0_chat_photo.d.ts.map