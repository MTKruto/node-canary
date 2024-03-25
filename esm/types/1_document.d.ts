import { types } from "../2_tl.js";
import { Thumbnail } from "./0_thumbnail.js";
/** A document. */
export interface Document {
    /** A file identifier that can be used to download or reuse this file. */
    fileId: string;
    /** A file identifier that can be used to identify this file. */
    fileUniqueId: string;
    /** Thumbnails of the document. */
    thumbnails: Thumbnail[];
    /** The original file name. */
    fileName: string;
    /** MIME type of the file. */
    mimeType: string;
    /** Size of the file in bytes. */
    fileSize: number;
}
export declare function constructDocument(document: types.Document, fileNameAttribute: types.DocumentAttributeFilename, fileId: string, fileUniqueId: string): Document;
