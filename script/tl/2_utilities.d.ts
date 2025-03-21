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
import { Schema } from "./0_types.js";
import * as Api from "./1_api.js";
import { AnyType, Enums, Functions, Types } from "./1_api.js";
export declare function isValidType(object: any, schema?: Schema): object is AnyType;
export declare function assertIsValidType(object: any, schema?: Schema): void;
export declare function is<S extends keyof (Types & Functions)>(typeName: S, value: unknown): value is S extends keyof Types ? Types[S] : S extends keyof Functions ? Functions[S] : never;
export declare function isOneOf<S extends keyof (Types & Functions)>(typeNames: S[] | readonly S[], value: unknown): value is S extends keyof Types ? Types[S] : S extends keyof Functions ? Functions[S] : never;
export declare function isOfEnum<S extends keyof Enums>(enumName: S, value: unknown): value is Enums[S];
export declare function as<S extends keyof Types>(typeName: S, value: unknown): Types[S];
export declare function isGenericFunction(value: unknown): boolean;
export declare function mustGetReturnType(name: string): string;
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
//# sourceMappingURL=2_utilities.d.ts.map