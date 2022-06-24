import { ExpireableCache } from './core/ExpireableCache';
import { ICache } from './core/ICache';

/**
 * Cache helper designed for array values
 * @param {string} key - the key under which to manage the cache values
 * @param {number} expiresInMinutes - the number of minutes after which the isExpired function will be true (0 value prevents expiry)
 */
export class ArrayCache extends ExpireableCache implements ICache {
  constructor(key: string, expiresInMinutes = 0){
    super(key, expiresInMinutes);
  }

  get() {
    return super.get() || [];
  }

  set(value: []) {
    if (Array.isArray(value)) {
      super.set(value);
    } else {
      throw new Error('Supplied value is not an Array');
    }
  }

  add(value: any) {
    this.set(this.get().concat(value));
  }

  hasValues() {
    return !!this.get().length;
  }
}
