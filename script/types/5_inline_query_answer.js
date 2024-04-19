"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructInlineQueryAnswer = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
const _4_inline_query_result_js_1 = require("./4_inline_query_result.js");
function constructInlineQueryAnswer(results) {
    return (0, _1_utilities_js_1.cleanObject)({
        id: results.query_id + "",
        results: results.results.map(_4_inline_query_result_js_1.constructInlineQueryResult),
        nextOffset: results.next_offset,
    });
}
exports.constructInlineQueryAnswer = constructInlineQueryAnswer;
