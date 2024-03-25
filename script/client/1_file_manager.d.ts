import { types } from "../2_tl.js";
import { Sticker } from "../3_types.js";
import { DownloadParams, UploadParams } from "./0_params.js";
import { C } from "./0_types.js";
export declare class FileManager {
    #private;
    constructor(c: C);
    upload(contents: Uint8Array, params?: UploadParams): Promise<import("../tl/2_types.js").InputFile_ | import("../tl/2_types.js").InputFileBig_>;
    download(fileId: string, params?: DownloadParams): AsyncGenerator<Uint8Array, void, unknown>;
    getStickerSetName(inputStickerSet: types.InputStickerSetID, hash?: number): Promise<string>;
    getCustomEmojiStickers(id: string | string[]): Promise<Sticker[]>;
}
