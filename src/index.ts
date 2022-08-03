import { ExpireableArray } from "./core/ExpireableArrayDataCache";
import { ExpireableJSONDataCache } from "./core/ExpireableJSONDataCache";
import { LocalStorageService } from "./service/LocalStorageService";

/**
 * Convenience Class to Store Array values in LocalStorage
 * includes: option to specify Expiration of cache value in minutes
 */
export class LocalStorageExpireableArray extends ExpireableArray {
  constructor(key: string, expiresInMinutes = 0) {
    super(key, expiresInMinutes, new LocalStorageService())
  }
}

/**
 * Convenience Class to Store Array values in LocalStorage
 * includes: option to specify Expiration of cache value in minutes
 */
export class LocalStorageExpireableJSON extends ExpireableJSONDataCache {
  constructor(key: string, expiresInMinutes = 0) {
    super(key, expiresInMinutes, new LocalStorageService())
  }
}

