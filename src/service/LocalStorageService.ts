import { IStorage, StorageValues } from "./IStorage";

export class LocalStorageService implements IStorage {
  set(key: string, value: StorageValues) {
    if (value === null) return;
    localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
