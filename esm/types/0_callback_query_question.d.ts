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
/**
 * A reference to a button for opening the bot's game.
 * @unlisted
 */
export interface CallbackQueryQuestionGame {
    /** @discriminator */
    type: "game";
}
/**
 * A reference to a password confirmation button.
 * @unlisted
 */
export interface CallbackQueryQuestionPassword {
    /** @discriminator */
    type: "password";
    /** The target button's callback data. */
    data: string;
    /** The account's password. */
    password: string;
}
/**
 * A reference to a usual button.
 * @unlisted
 */
export interface CallbackQueryQuestionButton {
    /** @discriminator */
    type: "button";
    /** The target button's callback data. */
    data: string;
}
/** A reference to a button that is to be clicked by a user. */
export type CallbackQueryQuestion = CallbackQueryQuestionGame | CallbackQueryQuestionPassword | CallbackQueryQuestionButton;
export declare function validateCallbackQueryQuestion(q: CallbackQueryQuestion): void;
//# sourceMappingURL=0_callback_query_question.d.ts.map