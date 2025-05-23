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
export interface SwitchInlineQueryChosenChats {
    /** The query to type into the user's message box once switched to inline. */
    query: string;
    /** Whether the user should be allowed to pick chats with users. */
    allowUsers?: boolean;
    /** Whether the user should be allowed to pick chats with bots. */
    allowBots?: boolean;
    /** Whether the user should be allowed to pick group chats. */
    allowGroups?: boolean;
    /** Whether the user should be allowed to pick channels. */
    allowChannels?: boolean;
}
//# sourceMappingURL=0_switch_inline_query_chosen_chats.d.ts.map