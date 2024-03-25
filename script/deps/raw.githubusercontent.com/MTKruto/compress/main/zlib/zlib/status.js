"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var STATUS;
(function (STATUS) {
    /* Allowed flush values; see deflate() and inflate() below for details */
    STATUS[STATUS["Z_NO_FLUSH"] = 0] = "Z_NO_FLUSH";
    STATUS[STATUS["Z_PARTIAL_FLUSH"] = 1] = "Z_PARTIAL_FLUSH";
    STATUS[STATUS["Z_SYNC_FLUSH"] = 2] = "Z_SYNC_FLUSH";
    STATUS[STATUS["Z_FULL_FLUSH"] = 3] = "Z_FULL_FLUSH";
    STATUS[STATUS["Z_FINISH"] = 4] = "Z_FINISH";
    STATUS[STATUS["Z_BLOCK"] = 5] = "Z_BLOCK";
    STATUS[STATUS["Z_TREES"] = 6] = "Z_TREES";
    /* Return codes for the compression/decompression functions. Negative values
    * are errors, positive values are used for special but normal events.
    */
    STATUS[STATUS["Z_OK"] = 0] = "Z_OK";
    STATUS[STATUS["Z_STREAM_END"] = 1] = "Z_STREAM_END";
    STATUS[STATUS["Z_NEED_DICT"] = 2] = "Z_NEED_DICT";
    STATUS[STATUS["Z_ERRNO"] = -1] = "Z_ERRNO";
    STATUS[STATUS["Z_STREAM_ERROR"] = -2] = "Z_STREAM_ERROR";
    STATUS[STATUS["Z_DATA_ERROR"] = -3] = "Z_DATA_ERROR";
    //Z_MEM_ERROR=     -4,
    STATUS[STATUS["Z_BUF_ERROR"] = -5] = "Z_BUF_ERROR";
    //Z_VERSION_ERROR= -6,
    /* compression levels */
    STATUS[STATUS["Z_NO_COMPRESSION"] = 0] = "Z_NO_COMPRESSION";
    STATUS[STATUS["Z_BEST_SPEED"] = 1] = "Z_BEST_SPEED";
    STATUS[STATUS["Z_BEST_COMPRESSION"] = 9] = "Z_BEST_COMPRESSION";
    STATUS[STATUS["Z_DEFAULT_COMPRESSION"] = -1] = "Z_DEFAULT_COMPRESSION";
    STATUS[STATUS["Z_FILTERED"] = 1] = "Z_FILTERED";
    STATUS[STATUS["Z_HUFFMAN_ONLY"] = 2] = "Z_HUFFMAN_ONLY";
    STATUS[STATUS["Z_RLE"] = 3] = "Z_RLE";
    STATUS[STATUS["Z_FIXED"] = 4] = "Z_FIXED";
    STATUS[STATUS["Z_DEFAULT_STRATEGY"] = 0] = "Z_DEFAULT_STRATEGY";
    /* Possible values of the data_type field (though see inflate()) */
    STATUS[STATUS["Z_BINARY"] = 0] = "Z_BINARY";
    STATUS[STATUS["Z_TEXT"] = 1] = "Z_TEXT";
    //Z_ASCII=                1, // = Z_TEXT (deprecated)
    STATUS[STATUS["Z_UNKNOWN"] = 2] = "Z_UNKNOWN";
    /* The deflate compression method */
    STATUS[STATUS["Z_DEFLATED"] = 8] = "Z_DEFLATED";
    //Z_NULL=                 null // Use -1 or null inline, depending on var type
})(STATUS || (STATUS = {}));
exports.default = STATUS;
