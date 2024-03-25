import { types } from "../2_tl.js";
import { Thumbnail } from "./0_thumbnail.js";
/** An audio file. */
export interface Audio {
    /** A file identifier that can be used to download or reuse this file. */
    fileId: string;
    /** A file identifier that can be used to identify this file. */
    fileUniqueId: string;
    /** Duration of the audio in seconds. */
    duration: number;
    /** Authors of the audio. */
    performer?: string;
    /** Title of the audio. */
    title?: string;
    /** MIME type of the file. */
    mimeType: string;
    /** Size of the file in bytes. */
    fileSize: number;
    /** Thumbnails of the album cover to which the music file belongs. */
    thumbnails: Thumbnail[];
}
export declare function constructAudio(document: types.Document, audioAttribute: types.DocumentAttributeAudio | undefined, fileId: string, fileUniqueId: string): Audio;
