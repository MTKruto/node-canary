import { enums, types } from "../2_tl.js";
import { Update } from "../3_types.js";
import { AnswerCallbackQueryParams } from "./0_params.js";
import { C as C_ } from "./0_types.js";
import { MessageManager } from "./2_message_manager.js";
type C = C_ & {
    messageManager: MessageManager;
};
type CallbackQueryManagerUpdate = types.UpdateBotCallbackQuery | types.UpdateInlineBotCallbackQuery;
export declare class CallbackQueryManager {
    #private;
    constructor(c: C);
    answerCallbackQuery(id: string, params?: AnswerCallbackQueryParams): Promise<void>;
    static canHandleUpdate(update: enums.Update): update is CallbackQueryManagerUpdate;
    handleUpdate(update: CallbackQueryManagerUpdate): Promise<Update>;
}
export {};
