import { enums, types } from "./2_types.js";
export declare function getChannelChatId(channelId: bigint): number;
export type AnyEntity = types.User | types.Channel | types.ChannelForbidden | types.Chat | types.ChatForbidden;
export declare function peerToChatId(peer: enums.Peer | enums.InputPeer | AnyEntity | {
    channel_id: bigint;
} | {
    user_id: bigint;
} | {
    chat_id: bigint;
}): number;
export declare function chatIdToPeer(chatId: number): enums.Peer;
export declare function chatIdToPeerId(chatId: number): bigint;
export declare function getChatIdPeerType(chatId: number): "user" | "chat" | "channel";
export declare function inputPeerToPeer(inputPeer: enums.InputPeer): enums.Peer;
