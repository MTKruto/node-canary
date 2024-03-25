import { types } from "../2_tl.js";
import { Thumbnail } from "./0_thumbnail.js";
/** A video file. */
export interface Video {
    /** A file identifier that can be used to download or reuse this file. */
    fileId: string;
    /** A file identifier that can be used to identify this file. */
    fileUniqueId: string;
    /** Video width as defined by sender */
    width: number;
    /** Video height as defined by sender */
    height: number;
    /** Duration of the video in seconds as defined by sender */
    duration: number;
    /** Video thumbnail */
    thumbnails: Thumbnail[];
    /** Original filename as defined by sender */
    fileName?: string;
    /** MIME type of the file. */
    mimeType: string;
    /** Size of the file in bytes. */
    fileSize: number;
}
export declare function constructVideo(document: types.Document, videoAttribute: types.DocumentAttributeVideo, fileName: string | undefined, fileId: string, fileUniqueId: string): Video;
