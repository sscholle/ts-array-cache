import { IStorage, StorageValues } from "./IStorage";

export class SessionStorageService implements IStorage {
  public set(key: string, value: StorageValues) {
    if (value === null) return;
    sessionStorage.setItem(key, value);
  }

  public get(key: string) {
    return sessionStorage.getItem(key);
  }

  public remove(key: string) {
    return sessionStorage.removeItem(key);
  }
}
