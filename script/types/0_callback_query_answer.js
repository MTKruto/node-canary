"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructCallbackQueryAnswer = void 0;
function constructCallbackQueryAnswer(answer) {
    return {
        alert: !!answer.alert,
        text: answer.message ?? "",
        url: answer.url ?? "",
    };
}
exports.constructCallbackQueryAnswer = constructCallbackQueryAnswer;
