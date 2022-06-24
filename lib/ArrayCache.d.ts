import { ExpireableCache } from './core/ExpireableCache';
import { ICache } from './core/ICache';
/**
 * Cache helper designed for array values
 * @param {string} key - the key under which to manage the cache values
 * @param {number} expiresInMinutes - the number of minutes after which the isExpired function will be true (0 value prevents expiry)
 */
export declare class ArrayCache extends ExpireableCache implements ICache {
    constructor(key: string, expiresInMinutes?: number);
    get(): any;
    set(value: []): void;
    add(value: any): void;
    hasValues(): boolean;
}
