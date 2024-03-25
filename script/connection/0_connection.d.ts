import { MaybePromise } from "../1_utilities.js";
declare abstract class Foundation {
    abstract get connected(): boolean;
    stateChangeHandler?: (connected: boolean) => void;
    abstract open(): MaybePromise<void>;
    abstract write(p: Uint8Array): MaybePromise<void>;
    abstract close(): MaybePromise<void>;
    callback?: {
        read(count: number): void;
        write(count: number): void;
    };
}
export declare abstract class ConnectionUnframed extends Foundation {
    readonly type: "framed";
    abstract read(p: Uint8Array): MaybePromise<void>;
}
export declare abstract class ConnectionFramed extends Foundation {
    readonly type: "framed";
    abstract read(): MaybePromise<Uint8Array>;
}
export type Connection = ConnectionUnframed | ConnectionFramed;
export {};
