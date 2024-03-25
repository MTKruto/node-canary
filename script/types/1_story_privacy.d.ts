import { enums } from "../2_tl.js";
import { EntityGetter } from "./1__getters.js";
/** @unlisted */
export interface StoryPrivacyEveryone {
    everyoneExcept: number[];
}
/** @unlisted */
export interface StoryPrivacyConctacts {
    contactsExcept: number[];
}
/** @unlisted */
export interface StoryPrivacyCloseFriends {
    closeFriends: true;
}
/** @unlisted */
export interface StoryPrivacyOnly {
    only: number[];
}
/** A story's privacy choice. */
export type StoryPrivacy = StoryPrivacyEveryone | StoryPrivacyConctacts | StoryPrivacyCloseFriends | StoryPrivacyOnly;
export declare function storyPrivacyToTlObject(privacy: StoryPrivacy, getEntity: EntityGetter): Promise<enums.InputPrivacyRule[]>;
export declare function constructStoryPrivacy(privacy: enums.PrivacyRule[]): StoryPrivacy;
