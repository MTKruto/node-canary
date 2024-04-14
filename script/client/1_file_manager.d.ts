import { types } from "../2_tl.js";
import { FileSource, Sticker } from "../3_types.js";
import { DownloadParams, UploadParams } from "./0_params.js";
import { C } from "./0_types.js";
export declare class FileManager {
    #private;
    constructor(c: C);
    upload(file: FileSource, params?: UploadParams, checkName?: null | ((name: string) => string), allowStream?: boolean): Promise<import("../tl/2_types.js").InputFile_ | import("../tl/2_types.js").InputFileBig_>;
    static iterateChunks(reader: ReadableStreamDefaultReader<Uint8Array>, chunkSize: number): AsyncGenerator<{
        isSmall: boolean;
        totalParts: number;
        bytes: Uint8Array;
    }, void, unknown>;
    download(fileId: string, params?: DownloadParams): AsyncGenerator<Uint8Array, void, unknown>;
    getStickerSetName(inputStickerSet: types.InputStickerSetID, hash?: number): Promise<string>;
    getCustomEmojiStickers(id: string | string[]): Promise<Sticker[]>;
}
