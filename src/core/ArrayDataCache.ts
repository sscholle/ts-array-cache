import { IStorage } from "../service/IStorage";
import { ArrayValue, IDataCache } from "./IDataCache";
import { JSONDataCache } from "./JSONDataCache";

/**
 * Wraps JSONDataCache with 'Array' types (same internals)
 */
export class ArrayDataCache implements IDataCache<ArrayValue> {
  cache: JSONDataCache;
  constructor(private key: string, service: IStorage) {
    this.cache = new JSONDataCache(key, service);
  }

  get(): ArrayValue {
    return this.cache.get() as ArrayValue;
  }

  set(value: ArrayValue) {
    this.cache.set(value);
  }

  remove() {
    this.cache.remove();
  }
}
