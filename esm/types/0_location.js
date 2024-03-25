import { as, types } from "../2_tl.js";
export function constructLocation(geo_) {
    if (geo_ instanceof types.MessageMediaGeo) {
        const geo = geo_.geo[as](types.GeoPoint);
        return {
            latitude: geo.lat,
            longitude: geo.long,
            horizontalAccuracy: geo.accuracy_radius,
        };
    }
    else if (geo_ instanceof types.MessageMediaGeoLive) {
        const media = geo_;
        const geo = media.geo[as](types.GeoPoint);
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
