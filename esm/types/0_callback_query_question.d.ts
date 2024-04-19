/** @unlisted */
export interface CallbackQueryQuestionGame {
    type: "game";
}
/** @unlisted */
export interface CallbackQueryQuestionPassword {
    type: "password";
    password: string;
    data: string;
}
/** @unlisted */
export interface CallbackQueryQuestionButton {
    type: "button";
    data: string;
}
export type CallbackQueryQuestion = CallbackQueryQuestionGame | CallbackQueryQuestionPassword | CallbackQueryQuestionButton;
export declare function validateCallbackQueryQuestion(q: CallbackQueryQuestion): void;
