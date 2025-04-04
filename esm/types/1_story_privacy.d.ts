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
import { EntityGetter } from "./_getters.js";
/** @unlisted */
export interface StoryPrivacyEveryone {
    /** @discriminator */
    everyoneExcept: number[];
}
/** @unlisted */
export interface StoryPrivacyConctacts {
    /** @discriminator */
    contactsExcept: number[];
}
/** @unlisted */
export interface StoryPrivacyCloseFriends {
    /** @discriminator */
    closeFriends: true;
}
/** @unlisted */
export interface StoryPrivacyOnly {
    /** @discriminator */
    only: number[];
}
/** A story's privacy choice. */
export type StoryPrivacy = StoryPrivacyEveryone | StoryPrivacyConctacts | StoryPrivacyCloseFriends | StoryPrivacyOnly;
export declare function storyPrivacyToTlObject(privacy: StoryPrivacy, getEntity: EntityGetter): Promise<Api.InputPrivacyRule[]>;
export declare function constructStoryPrivacy(privacy: Api.PrivacyRule[]): StoryPrivacy;
//# sourceMappingURL=1_story_privacy.d.ts.map