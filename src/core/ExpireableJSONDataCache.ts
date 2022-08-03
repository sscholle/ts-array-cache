import { IStorage } from "../service/IStorage";
import { JSONValue } from "./IDataCache";
import { JSONDataCache } from "./JSONDataCache";

/**
 * A common use case in web dev. Store data that infrequently updates for later use
 * This becomes important when working with multiple JS frameworks or on legacy systems
 * reduces the need for frequent API calls
 */
export class ExpireableJSONDataCache extends JSONDataCache {
  cacheExpiry: JSONDataCache;

  constructor(key: string, private expiresInMinutes: number, service: IStorage) {
    super(key, service)
    this.cacheExpiry = new JSONDataCache(`${key}-expiry`, service);
  }

  msToMinutes(ms: number) {
    return ms / 1000 / 60;
  }

  minutesToMs(min: number) {
    return min * 60 * 1000;
  }

  isExpired() {
    if (this.expiresInMinutes === 0) return false;

    const expiryTimestamp = this.cacheExpiry.get() || 0; // initial expiry timestamp (0) will return: true
    if (Date.now() > expiryTimestamp) {
      return true;
    }
    return false;
  }

  

  get(): JSONValue {
    if (this.isExpired()) {
      this.remove();
      return null;
    }
    return super.get();
  }

  set(value: JSONValue) {
    if (this.expiresInMinutes > 0) {
      this.cacheExpiry.set(Date.now() + this.minutesToMs(this.expiresInMinutes));
    }
    super.set(value);
  }

  remove() {
    super.remove();
    this.cacheExpiry.remove();
  }
}
