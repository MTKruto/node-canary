export default class ZStream {
    input: Uint8Array | null;
    next_in: number;
    avail_in: number;
    total_in: number;
    output: Uint8Array | null;
    next_out: number;
    avail_out: number;
    total_out: number;
    msg: string;
    state: any;
    data_type: number;
    adler: number;
}
