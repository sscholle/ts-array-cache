"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayCache = void 0;
const ExpireableCache_1 = require("./core/ExpireableCache");
/**
 * Cache helper designed for array values
 * @param {string} key - the key under which to manage the cache values
 * @param {number} expiresInMinutes - the number of minutes after which the isExpired function will be true (0 value prevents expiry)
 */
class ArrayCache extends ExpireableCache_1.ExpireableCache {
    constructor(key, expiresInMinutes = 0) {
        super(key, expiresInMinutes);
    }
    get() {
        return super.get() || [];
    }
    set(value) {
        if (Array.isArray(value)) {
            super.set(value);
        }
        else {
            throw new Error('Supplied value is not an Array');
        }
    }
    add(value) {
        this.set(this.get().concat(value));
    }
    hasValues() {
        return !!this.get().length;
    }
}
exports.ArrayCache = ArrayCache;
