import { UNREACHABLE } from "./0_control.js";
export function drop(promise) {
    promise.catch(() => { });
}
export function mustPrompt(message) {
    const result = prompt(message);
    if (result == null) {
        throw UNREACHABLE();
    }
    else {
        return result;
    }
}
export function mustPromptNumber(message) {
    let result = Number(BigInt(mustPrompt(message)));
    while (isNaN(result)) {
        console.log("Expected a number.");
        result = Number(BigInt(mustPrompt(message)));
    }
    return result;
}
export function mustPromptOneOf(message, choices) {
    let result = prompt(message);
    while (result == null || !choices.includes(result)) {
        result = prompt(message);
    }
    return result;
}
export const ZERO_CHANNEL_ID = -1000000000000;
export const VECTOR_CONSTRUCTOR = 0x1CB5C415;
export function toUnixTimestamp(date) {
    return Math.floor(date.getTime() / 1000);
}
export function fromUnixTimestamp(date) {
    return new Date(date * 1000);
}
