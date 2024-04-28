export interface TrieNode {
    value?: string;
    legacy?: boolean;
    base?: number;
    next?: Map<string, TrieNode>;
}
export declare const xmlTrie: TrieNode;
export declare const decodeXML: (str: string) => string;
export declare const htmlTrie: TrieNode;
export declare const decodeHTMLStrict: (str: string) => string;
export declare const decodeHTML: (str: string) => string;
//# sourceMappingURL=decode.d.ts.map