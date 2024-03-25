"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructLocation = void 0;
const _2_tl_js_1 = require("../2_tl.js");
function constructLocation(geo_) {
    if (geo_ instanceof _2_tl_js_1.types.MessageMediaGeo) {
        const geo = geo_.geo[_2_tl_js_1.as](_2_tl_js_1.types.GeoPoint);
        return {
            latitude: geo.lat,
            longitude: geo.long,
            horizontalAccuracy: geo.accuracy_radius,
        };
    }
    else if (geo_ instanceof _2_tl_js_1.types.MessageMediaGeoLive) {
        const media = geo_;
        const geo = media.geo[_2_tl_js_1.as](_2_tl_js_1.types.GeoPoint);
        return {
            latitude: geo.lat,
            longitude: geo.long,
            horizontalAccuracy: geo.accuracy_radius,
            livePeriod: media.period,
            heading: media.heading,
            proximityAlertRadius: media.proximity_notification_radius,
        };
    }
    else {
        return {
            latitude: geo_.lat,
            longitude: geo_.long,
            horizontalAccuracy: geo_.accuracy_radius,
        };
    }
}
exports.constructLocation = constructLocation;
