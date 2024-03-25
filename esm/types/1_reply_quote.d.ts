import { enums } from "../2_tl.js";
import { MessageEntity } from "./0_message_entity.js";
/** A reference to a specific part of a message that is being replied to. */
export interface ReplyQuote {
    /** The byte offset of the quoted text. */
    offset: number;
    /** The quoted text. */
    text: string;
    /** The entities of the quoted text. */
    entities: MessageEntity[];
}
export declare function constructReplyQuote(quoteText: string | undefined, quoteOffset: number | undefined, quoteEntities: enums.MessageEntity[] | undefined): ReplyQuote;
