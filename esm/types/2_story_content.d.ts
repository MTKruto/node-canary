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
import { Photo } from "./1_photo.js";
import { Video } from "./1_video.js";
/** @unlisted */
export interface StoryContentPhoto {
    /** @discriminator */
    photo: Photo;
}
/** @unlisted */
export interface StoryContentVideo {
    /** @discriminator */
    video: Video;
}
/** @unlisted */
export interface StoryContentUnsupported {
    /** @discriminator */
    unsupported: true;
}
/** A story content. */
export type StoryContent = StoryContentPhoto | StoryContentVideo | StoryContentUnsupported;
export declare function constructStoryContent(media: Api.MessageMedia): StoryContent;
//# sourceMappingURL=2_story_content.d.ts.map