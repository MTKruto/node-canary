import { Queue } from "../1_utilities.js";
import { enums, ReadObject, TLObject, types } from "../2_tl.js";
import { C } from "./0_types.js";
type UpdateHandler = (update: enums.Update) => Promise<(() => Promise<unknown>)>;
export type PtsUpdate = types.UpdateNewMessage | types.UpdateDeleteMessages | types.UpdateReadHistoryInbox | types.UpdateReadHistoryOutbox | types.UpdatePinnedChannelMessages | types.UpdatePinnedMessages | types.UpdateFolderPeers | types.UpdateChannelWebPage | types.UpdateEditMessage | types.UpdateReadMessagesContents | types.UpdateWebPage;
export type ChannelPtsUpdate = types.UpdateNewChannelMessage | types.UpdateEditChannelMessage | types.UpdateDeleteChannelMessages | types.UpdateChannelTooLong;
export type QtsUpdate = types.UpdateNewEncryptedMessage | types.UpdateMessagePollVote | types.UpdateBotStopped | types.UpdateChatParticipant | types.UpdateChannelParticipant | types.UpdateBotChatInviteRequester | types.UpdateBotChatBoost | types.UpdateBotMessageReaction | types.UpdateBotMessageReactions | types.UpdateBotBusinessConnect | types.UpdateBotNewBusinessMessage | types.UpdateBotEditBusinessMessage | types.UpdateBotDeleteBusinessMessage;
export declare class UpdateManager {
    #private;
    static readonly QTS_COUNT = 1;
    static readonly MAIN_BOX_ID = 0n;
    constructor(c: C);
    static isPtsUpdate(v: enums.Update): v is PtsUpdate;
    static isQtsUpdate(v: enums.Update): v is QtsUpdate;
    static isChannelPtsUpdate(v: enums.Update | enums.Updates): v is ChannelPtsUpdate;
    fetchState(source: string): Promise<void>;
    processChats(chats: enums.Chat[]): Promise<void>;
    processResult(result: ReadObject): Promise<void>;
    processUsers(users: enums.User[]): Promise<void>;
    getHandleUpdateQueue(boxId: bigint): Queue;
    processUpdates(updates: enums.Update | enums.Updates, checkGap: boolean, call?: TLObject | null, callback?: () => void): void;
    recoverUpdateGap(source: string): Promise<void>;
    setUpdateHandler(handler: UpdateHandler): void;
}
export {};
