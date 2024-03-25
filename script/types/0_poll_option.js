"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructPollOption = void 0;
function constructPollOption(option, results) {
    return {
        text: option.text,
        voterCount: results.find((v) => v.option.every((v, i) => option.option[i] == v))?.voters ?? 0,
    };
}
exports.constructPollOption = constructPollOption;
