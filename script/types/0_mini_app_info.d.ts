/** The necessary information to launch a mini app. */
export interface MiniAppInfo {
    /** An HTTPS URL of the mini app to be opened with additional data. */
    url: string;
}
export declare function constructMiniAppInfo(url: string): MiniAppInfo;
