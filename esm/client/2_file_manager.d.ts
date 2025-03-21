import { Api } from "../2_tl.js";
import { FileSource, Sticker } from "../3_types.js";
import { _UploadCommon, DownloadParams } from "./0_params.js";
import { C } from "./1_types.js";
export declare class FileManager {
    #private;
    constructor(c: C);
    upload(file: FileSource, params?: _UploadCommon, checkName?: null | ((name: string) => string), allowStream?: boolean): Promise<Api.InputFile>;
    downloadInner(location: Api.InputFileLocation, dcId: number, params: DownloadParams | undefined): AsyncGenerator<Uint8Array, void, unknown>;
    static validateChunkSize(chunkSize: number, max: number): void;
    static validateOffset(offset: number): void;
    download(fileId: string, params?: DownloadParams): AsyncGenerator<Uint8Array, void, unknown>;
    getStickerSetName(inputStickerSet: Api.inputStickerSetID, hash?: number): Promise<string>;
    getCustomEmojiStickers(id: string | string[]): Promise<Sticker[]>;
}
//# sourceMappingURL=2_file_manager.d.ts.map