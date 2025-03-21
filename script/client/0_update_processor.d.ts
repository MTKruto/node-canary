import { Api } from "../2_tl.js";
import { Update } from "../3_types.js";
export interface UpdateProcessor<U extends Api.Update> {
    canHandleUpdate(update: Api.Update): update is U;
    handleUpdate(update: U): Promise<Update | null>;
}
//# sourceMappingURL=0_update_processor.d.ts.map