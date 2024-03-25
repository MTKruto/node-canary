import { types } from "../2_tl.js";
import { Thumbnail } from "./0_thumbnail.js";
/** An animation file (GIF or H.264/MPEG-4 AVC video without sound). */
export interface Animation {
    /** A file identifier that can be used to download or reuse this file. */
    fileId: string;
    /** A file identifier that can be used to identify this file. */
    fileUniqueId: string;
    /** The width of the animation. */
    width: number;
    /** The height of the animation. */
    height: number;
    /** Duration of the animation in seconds. */
    duration: number;
    /** Thumbnails of the animation. */
    thumbnails: Thumbnail[];
    /** The original file name. */
    fileName?: string;
    /** MIME type of the file. */
    mimeType: string;
    /** Size of the file in bytes. */
    fileSize: number;
}
export declare function constructAnimation(document: types.Document, videoAttribute: types.DocumentAttributeVideo | undefined, fileAttribute: types.DocumentAttributeFilename | undefined, fileId: string, fileUniqueId: string): Animation;
