import { ICache } from './ICache';
import { JSONCache } from './JSONCache';

/**
 * Cache helper designed for array values
 * @param {string} key - the key under which to manage the cache values
 * @param {number} expiresInMinutes - the number of minutes after which the isExpired function will be true
 */
export class ExpireableCache implements ICache {
  cache: JSONCache;
  cacheExpiry: JSONCache;

  constructor(key: string, private expiresInMinutes: number) {
    this.cache = new JSONCache(key);
    this.cacheExpiry = new JSONCache(`${key}-expiry`);
  }

  msToMinutes(ms: number) {
    return ms / 1000 / 60;
  }

  minutesToMs(min: number) {
    return min * 60 * 1000;
  }

  isExpired() {
    if (!this.expiresInMinutes) return false;

    const expiryTimestamp = this.cacheExpiry.get() || 0; // initial expiry timestamp (0) will return: true
    const minuteDifference = this.msToMinutes(Date.now() - expiryTimestamp);
    if (minuteDifference > this.expiresInMinutes) {
      return true;
    }
    return false;
  }

  get(): any{
    return this.cache.get();
  }

  set(value: any) {
    this.cache.set(value);
    if (!this.expiresInMinutes) return;
    this.cacheExpiry.set(Date.now() + this.minutesToMs(this.expiresInMinutes));
  }

  remove() {
    this.cache.remove()
  }
}
