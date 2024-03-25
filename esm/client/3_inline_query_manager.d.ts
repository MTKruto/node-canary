import { enums, types } from "../2_tl.js";
import { InlineQueryResult, Update } from "../3_types.js";
import { AnswerInlineQueryParams } from "./0_params.js";
import { C as C_ } from "./0_types.js";
import { MessageManager } from "./2_message_manager.js";
type C = C_ & {
    messageManager: MessageManager;
};
type InlineQueryManagerUpdate = types.UpdateBotInlineQuery | types.UpdateBotInlineSend;
export declare class InlineQueryManager {
    #private;
    constructor(c: C);
    answerInlineQuery(id: string, results: InlineQueryResult[], params?: AnswerInlineQueryParams): Promise<void>;
    static canHandleUpdate(update: enums.Update): update is InlineQueryManagerUpdate;
    handleUpdate(update: InlineQueryManagerUpdate): Promise<Update>;
}
export {};
