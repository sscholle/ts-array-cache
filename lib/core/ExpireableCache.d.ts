import { ICache } from './ICache';
import { JSONCache } from './JSONCache';
/**
 * Cache helper designed for array values
 * @param {string} key - the key under which to manage the cache values
 * @param {number} expiresInMinutes - the number of minutes after which the isExpired function will be true
 */
export declare class ExpireableCache implements ICache {
    private expiresInMinutes;
    cache: JSONCache;
    cacheExpiry: JSONCache;
    constructor(key: string, expiresInMinutes: number);
    msToMinutes(ms: number): number;
    minutesToMs(min: number): number;
    isExpired(): boolean;
    get(): any;
    set(value: any): void;
    remove(): void;
}
