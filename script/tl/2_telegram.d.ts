/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2025 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { TLReader } from "./1_tl_reader.js";
import * as Api from "./1_telegram_api.js";
export * from "./1_telegram_api.js";
export type DeserializedType = boolean | number | bigint | string | Uint8Array | Api.AnyType | Array<DeserializedType>;
export declare function deserializeType<T extends (keyof Api.Types) | "X" | string>(name: T, bufferOrReader: TLReader | Uint8Array): Promise<T extends keyof Api.Types ? Api.Types[T] : DeserializedType>;
export declare function serializeObject(object: Api.AnyObject): Uint8Array;
export declare function isValidObject(object: any): object is Api.AnyType;
export declare function assertIsValidObject(object: any): asserts object is Api.AnyType;
export declare function is<S extends keyof (Api.Types & Api.Functions)>(name: S, value: unknown): value is S extends keyof Api.Types ? Api.Types[S] : S extends keyof Api.Functions ? Api.Functions[S] : never;
export declare function isOneOf<S extends keyof (Api.Types & Api.Functions)>(names: S[] | readonly S[], value: unknown): value is S extends keyof Api.Types ? Api.Types[S] : S extends keyof Api.Functions ? Api.Functions[S] : never;
export declare function isOfEnum<S extends keyof Api.Enums>(name: S, value: unknown): value is Api.Enums[S];
export declare function as<S extends keyof Api.Types>(name: S, value: unknown): Api.Types[S];
export declare function mustGetReturnType(name: string): string;
export declare function isGenericFunction(value: unknown): value is Api.AnyGenericFunction<Api.AnyFunction>;
export declare function getChannelChatId(channelId: bigint): number;
export type AnyEntity = Api.user | Api.channel | Api.channelForbidden | Api.chat | Api.chatForbidden;
export type InputPeerWithIdentifier = Api.inputPeerChat | Api.inputPeerUser | Api.inputPeerChannel | Api.inputPeerUserFromMessage | Api.inputPeerChannelFromMessage;
export type IdentifierContainer = {
    user_id: bigint;
} | {
    chat_id: bigint;
} | {
    channel_id: bigint;
};
export declare function peerToChatId(peer: AnyEntity | InputPeerWithIdentifier | Api.Peer | IdentifierContainer): number;
export declare function chatIdToPeer(chatId: number): Api.Peer;
export declare function chatIdToPeerId(chatId: number): bigint;
export declare function getChatIdPeerType(chatId: number): "user" | "chat" | "channel";
export declare function inputPeerToPeer(inputPeer: Api.InputPeer): Api.Peer;
//# sourceMappingURL=2_telegram.d.ts.map