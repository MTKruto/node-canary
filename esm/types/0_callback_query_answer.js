export function constructCallbackQueryAnswer(answer) {
    return {
        alert: !!answer.alert,
        text: answer.message ?? "",
        url: answer.url ?? "",
    };
}
