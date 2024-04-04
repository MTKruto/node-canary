import { enums } from "../2_tl.js";
import { InputPeerGetter } from "./_getters.js";
import { ID } from "./0_id.js";
/** @unlisted */
export interface BotCommandScopeDefault {
    type: "default";
}
/** @unlisted */
export interface BotCommandScopeAllPrivateChats {
    type: "allPrivateChats";
}
/** @unlisted */
export interface BotCommandScopeAllGroupChats {
    type: "allGroupChats";
}
/** @unlisted */
export interface BotCommandScopeAllChatAdministrators {
    type: "allChatAdministrators";
}
/** @unlisted */
export interface BotCommandScopeChat {
    type: "chat";
    chatId: ID;
}
/** @unlisted */
export interface BotCommandScopeChatAdministrators {
    type: "chatAdministrators";
    chatId: ID;
}
/** @unlisted */
export interface BotCommandScopeChatMember {
    type: "chatMember";
    chatId: ID;
    userId: number;
}
/** A type specifying where bot commads are available. */
export type BotCommandScope = BotCommandScopeDefault | BotCommandScopeAllPrivateChats | BotCommandScopeAllGroupChats | BotCommandScopeAllChatAdministrators | BotCommandScopeChat | BotCommandScopeChatAdministrators | BotCommandScopeChatMember;
export declare function botCommandScopeToTlObject(scope: BotCommandScope, getInputPeer: InputPeerGetter): Promise<enums.BotCommandScope>;
