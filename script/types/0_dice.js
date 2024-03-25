"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructDice = void 0;
function constructDice(dice_) {
    return { emoji: dice_.emoticon, value: dice_.value };
}
exports.constructDice = constructDice;
