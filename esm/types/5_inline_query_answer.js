import { cleanObject } from "../1_utilities.js";
import { constructInlineQueryResult } from "./4_inline_query_result.js";
export function constructInlineQueryAnswer(results) {
    return cleanObject({
        id: results.query_id + "",
        results: results.results.map(constructInlineQueryResult),
        cacheTime: results.cache_time,
        nextOffset: results.next_offset,
    });
}
