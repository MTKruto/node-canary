/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
export declare const resolve: () => Promise<void>;
export declare function isHttpUrl(string: string): boolean;
export declare function getUsername(string: string): string;
export declare function getChatListId(chatList: string): 0 | 1;
export declare function checkMessageId(messageId: number): number;
export declare function checkStoryId(storyId: number): number;
export declare function checkPollOption(option: string): void;
export declare function checkArray<T>(array: T[], check: (value: T) => void): void;
export declare function checkCallbackQueryId(id: string): void;
export declare function checkInlineQueryId(id: string): void;
export declare function isMtprotoFunction(value: unknown): boolean;
