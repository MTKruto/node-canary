export declare class Queue {
    #private;
    functions: (() => Promise<void>)[];
    constructor(name: string);
    add(fn: () => Promise<void>): void;
}
