"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructVenue = void 0;
const _2_tl_js_1 = require("../2_tl.js");
function constructVenue(media_) {
    const geo = media_.geo[_2_tl_js_1.as](_2_tl_js_1.types.GeoPoint);
    return {
        location: {
            latitude: geo.lat,
            longitude: geo.long,
            horizontalAccuracy: geo.accuracy_radius,
        },
        title: media_.title,
        address: media_.address,
        foursquareId: media_.venue_id,
        foursquareType: media_.venue_type,
    };
}
exports.constructVenue = constructVenue;
