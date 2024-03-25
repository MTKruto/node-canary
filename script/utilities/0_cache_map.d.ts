export declare class CacheMap<K, V> extends Map<K, V> {
    #private;
    constructor(limit: number, entries?: readonly (readonly [K, V])[] | null);
    constructor(limit: number);
    set(key: K, value: V): typeof this;
}
