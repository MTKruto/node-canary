import { types } from "../2_tl.js";
import { Thumbnail } from "./0_thumbnail.js";
/** A photo. */
export interface Photo {
    /** A file identifier that can be used to download or reuse this file. */
    fileId: string;
    /** A file identifier that can be used to identify this file. */
    fileUniqueId: string;
    /** Photo width */
    width: number;
    /** Photo height */
    height: number;
    /** Size of the file in bytes. */
    fileSize: number;
    thumbnails: Thumbnail[];
}
export declare function constructPhoto(photo: types.Photo): Photo;
