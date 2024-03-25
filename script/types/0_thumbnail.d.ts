import { types } from "../2_tl.js";
/** A file or sticker thumbnail. */
export interface Thumbnail {
    /** A file identifier that can be used to download or reuse the thumbnail. */
    fileId: string;
    /** A file identifier that can be used to identify the thumbnail. */
    fileUniqueId: string;
    /** The width of the thumbnail. */
    width: number;
    /** The height of the thumbnail. */
    height: number;
    /** Size of the file in bytes. */
    fileSize: number;
}
export declare function constructThumbnail(size: types.PhotoSize, file: types.Document | types.Photo): Thumbnail;
