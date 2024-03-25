export declare function drop<T>(promise: Promise<T>): void;
export declare function mustPrompt(message: string): string;
export declare function mustPromptNumber(message: string): number;
export declare function mustPromptOneOf<T extends readonly string[]>(message: string, choices: T): T[number];
export declare const ZERO_CHANNEL_ID = -1000000000000;
export declare const VECTOR_CONSTRUCTOR = 481674261;
export declare function toUnixTimestamp(date: Date): number;
export declare function fromUnixTimestamp(date: number): Date;
