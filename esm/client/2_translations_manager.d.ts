import { Api } from "../2_tl.js";
import { Translation, Update } from "../3_types.js";
import { GetTranslationsParams } from "./0_params.js";
import { UpdateProcessor } from "./0_update_processor.js";
import { C } from "./1_types.js";
declare const translationsManagerUpdates: readonly ["updateLangPackTooLong", "updateLangPack"];
type TranslationsManagerUpdate = Api.Types[(typeof translationsManagerUpdates)[number]];
export declare class TranslationsManager implements UpdateProcessor<TranslationsManagerUpdate> {
    #private;
    constructor(c: C);
    canHandleUpdate(update: Api.Update): update is TranslationsManagerUpdate;
    getTranslations(params?: GetTranslationsParams): Promise<Translation[]>;
    handleUpdate(update: TranslationsManagerUpdate): Promise<Update | null>;
}
export {};
//# sourceMappingURL=2_translations_manager.d.ts.map