import { types } from "../2_tl.js";
/** A voice note. */
export interface Voice {
    /** A file identifier that can be used to download or reuse this file. */
    fileId: string;
    /** A file identifier that can be used to identify this file. */
    fileUniqueId: string;
    /** Duration of the audio in seconds. */
    duration: number;
    /** MIME type of the file. */
    mimeType: string;
    /** Size of the file in bytes. */
    fileSize: number;
}
export declare function constructVoice(document: types.Document, audioAttributes: types.DocumentAttributeAudio, fileId: string, fileUniqueId: string): Voice;