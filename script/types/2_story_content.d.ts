import { enums } from "../2_tl.js";
import { Photo } from "./1_photo.js";
import { Video } from "./1_video.js";
/** @unlisted */
export interface StoryContentPhoto {
    photo: Photo;
}
/** @unlisted */
export interface StoryContentVideo {
    video: Video;
}
/** @unlisted */
export interface StoryContentUnsupported {
    unsupported: true;
}
/** A story content. */
export type StoryContent = StoryContentPhoto | StoryContentVideo | StoryContentUnsupported;
export declare function constructStoryContent(media: enums.MessageMedia): StoryContent;
