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
import { enums, types } from "../2_tl.js";
import { Update } from "../3_types.js";
import { C } from "./1_types.js";
type ReactionManagerUpdate = types.UpdateBotMessageReactions | types.UpdateBotMessageReaction | types.UpdateMessageReactions | types.UpdateChannelMessageViews | types.UpdateChannelMessageForwards;
export declare class ReactionManager {
    #private;
    constructor(c: C);
    static canHandleUpdate(update: enums.Update): update is ReactionManagerUpdate;
    handleUpdate(update: ReactionManagerUpdate): Promise<Update | null>;
}
export {};
//# sourceMappingURL=2_reaction_manager.d.ts.map