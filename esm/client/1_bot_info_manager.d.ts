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
import { BotCommand } from "../3_types.js";
import { GetMyCommandsParams, SetMyCommandsParams } from "./0_params.js";
import { C } from "./0_types.js";
export declare class BotInfoManager {
    #private;
    constructor(c: C);
    setMyDescription(params?: {
        description?: string;
        languageCode?: string;
    }): Promise<void>;
    setMyName(params?: {
        name?: string;
        languageCode?: string;
    }): Promise<void>;
    setMyShortDescription(params?: {
        shortDescription?: string;
        languageCode?: string;
    }): Promise<void>;
    getMyDescription(params?: {
        languageCode?: string;
    }): Promise<string>;
    getMyName(params?: {
        languageCode?: string;
    }): Promise<string>;
    getMyShortDescription(params?: {
        languageCode?: string;
    }): Promise<string>;
    getMyCommands(params?: GetMyCommandsParams): Promise<BotCommand[]>;
    setMyCommands(commands: BotCommand[], params?: SetMyCommandsParams): Promise<void>;
}
