import { CTR } from "../1_utilities.js";
import { Connection } from "../2_connection.js";
export declare function getObfuscationParameters(protocol: number, connection: Connection): Promise<{
    encryptionCTR: CTR;
    decryptionCTR: CTR;
}>;
