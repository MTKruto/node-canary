import { as, types } from "../2_tl.js";
export function constructVenue(media_) {
    const geo = media_.geo[as](types.GeoPoint);
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
