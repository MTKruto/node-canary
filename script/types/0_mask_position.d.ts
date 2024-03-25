import { enums } from "../2_tl.js";
/** A mask position. */
export interface MaskPosition {
    point: "forehead" | "eyes" | "mouth" | "chin";
    xShift: number;
    yShift: number;
    scale: number;
}
export declare function constructMaskPosition({ n, x, y, zoom }: enums.MaskCoords): MaskPosition;
