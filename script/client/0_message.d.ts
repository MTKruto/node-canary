import { Message_, MessageContainer } from "../2_tl.js";
export declare function getMessageId(lastMsgId: bigint): bigint;
export declare function packUnencryptedMessage(data: Uint8Array, messageId: bigint): Uint8Array;
export declare function unpackUnencryptedMessage(buffer: Uint8Array): {
    messageId: bigint;
    message: Uint8Array;
};
export declare function encryptMessage(message: Message_ | MessageContainer, authKey: Uint8Array, authKeyId: bigint, salt: bigint, sessionId: bigint): Promise<Uint8Array>;
export declare function decryptMessage(buffer: Uint8Array, authKey: Uint8Array, authKeyId: bigint, _sessionId: bigint): Promise<Message_ | MessageContainer>;
