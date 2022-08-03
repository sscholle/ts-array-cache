import { IStorage } from "../service/IStorage";
import { ArrayValue, JSONValue } from "./IDataCache";
import { ExpireableJSONDataCache } from "./ExpireableJSONDataCache";


/**
 * Cache helper designed for array values
 * @param {string} key - the key under which to manage the cache values
 * @param {number} expiresInMinutes - the number of minutes after which the isExpired function will be true (0 value prevents expiry)
 */
export class ExpireableArray extends ExpireableJSONDataCache {
  constructor(key: string, expiresInMinutes = 0, service: IStorage) {
    super(key, expiresInMinutes, service);
  }

  get(): ArrayValue {
    return (super.get() as ArrayValue) || [];
  }

  set(value: ArrayValue): void {
    if (Array.isArray(value)) {
      super.set(value);
    } else {
      throw new Error("Supplied value is not an Array");
    }
  }

  add(value: JSONValue) {
    this.set((this.get() || []).concat(value));
  }

  hasValues(): boolean {
    return !!this.get()?.length;
  }

  remove(): void {
    super.remove();
  }
}
