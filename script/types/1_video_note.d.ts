import { types } from "../2_tl.js";
import { Thumbnail } from "./0_thumbnail.js";
/** A video note. */
export interface VideoNote {
    /** A file identifier that can be used to download or reuse this file. */
    fileId: string;
    /** A file identifier that can be used to identify this file. */
    fileUniqueId: string;
    /** Video width and height (diameter of the video message) as defined by sender */
    length: number;
    /** Duration of the video in seconds as defined by sender */
    duration: number;
    /** Video thumbnail */
    thumbnails: Thumbnail[];
    /** Original filename as defined by sender */
    fileName?: string;
    /** Size of the file in bytes. */
    fileSize: number;
}
export declare function constructVideoNote(document: types.Document, videoAttribute: types.DocumentAttributeVideo, fileId: string, fileUniqueId: string): VideoNote;
