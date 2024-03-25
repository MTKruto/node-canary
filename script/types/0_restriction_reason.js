"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructRestrictionReason = void 0;
function constructRestrictionReason(rr) {
    return { platform: rr.platform, reason: rr.reason, text: rr.text };
}
exports.constructRestrictionReason = constructRestrictionReason;
