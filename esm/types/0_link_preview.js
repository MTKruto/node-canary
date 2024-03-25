import { cleanObject } from "../1_utilities.js";
export function constructLinkPreview(media, invert) {
    return cleanObject({
        url: "url" in media.webpage ? media.webpage.url : undefined,
        smallMedia: media.force_small_media ? true : undefined,
        largeMedia: media.force_large_media ? true : undefined,
        putAboveText: !!invert,
    });
}
