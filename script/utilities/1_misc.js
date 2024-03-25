"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromUnixTimestamp = exports.toUnixTimestamp = exports.VECTOR_CONSTRUCTOR = exports.ZERO_CHANNEL_ID = exports.mustPromptOneOf = exports.mustPromptNumber = exports.mustPrompt = exports.drop = void 0;
const _0_control_js_1 = require("./0_control.js");
function drop(promise) {
    promise.catch(() => { });
}
exports.drop = drop;
function mustPrompt(message) {
    const result = prompt(message);
    if (result == null) {
        throw (0, _0_control_js_1.UNREACHABLE)();
    }
    else {
        return result;
    }
}
exports.mustPrompt = mustPrompt;
function mustPromptNumber(message) {
    let result = Number(BigInt(mustPrompt(message)));
    while (isNaN(result)) {
        console.log("Expected a number.");
        result = Number(BigInt(mustPrompt(message)));
    }
    return result;
}
exports.mustPromptNumber = mustPromptNumber;
function mustPromptOneOf(message, choices) {
    let result = prompt(message);
    while (result == null || !choices.includes(result)) {
        result = prompt(message);
    }
    return result;
}
exports.mustPromptOneOf = mustPromptOneOf;
exports.ZERO_CHANNEL_ID = -1000000000000;
exports.VECTOR_CONSTRUCTOR = 0x1CB5C415;
function toUnixTimestamp(date) {
    return Math.floor(date.getTime() / 1000);
}
exports.toUnixTimestamp = toUnixTimestamp;
function fromUnixTimestamp(date) {
    return new Date(date * 1000);
}
exports.fromUnixTimestamp = fromUnixTimestamp;
