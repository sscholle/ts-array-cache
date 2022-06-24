"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpireableCache = void 0;
const JSONCache_1 = require("./JSONCache");
/**
 * Cache helper designed for array values
 * @param {string} key - the key under which to manage the cache values
 * @param {number} expiresInMinutes - the number of minutes after which the isExpired function will be true
 */
class ExpireableCache {
    constructor(key, expiresInMinutes) {
        this.expiresInMinutes = expiresInMinutes;
        this.cache = new JSONCache_1.JSONCache(key);
        this.cacheExpiry = new JSONCache_1.JSONCache(`${key}-expiry`);
    }
    msToMinutes(ms) {
        return ms / 1000 / 60;
    }
    minutesToMs(min) {
        return min * 60 * 1000;
    }
    isExpired() {
        if (!this.expiresInMinutes)
            return false;
        const expiryTimestamp = this.cacheExpiry.get() || 0; // initial expiry timestamp (0) will return: true
        const minuteDifference = this.msToMinutes(Date.now() - expiryTimestamp);
        if (minuteDifference > this.expiresInMinutes) {
            return true;
        }
        return false;
    }
    get() {
        return this.cache.get();
    }
    set(value) {
        this.cache.set(value);
        if (!this.expiresInMinutes)
            return;
        this.cacheExpiry.set(Date.now() + this.minutesToMs(this.expiresInMinutes));
    }
    remove() {
        this.cache.remove();
    }
}
exports.ExpireableCache = ExpireableCache;
