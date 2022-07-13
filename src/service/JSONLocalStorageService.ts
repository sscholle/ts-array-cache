import { IStorage } from "./IStorage";

export class JSONLocalStorageService implements IStorage {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    const storeValue = localStorage.getItem(key);
    return storeValue === null ? null : JSON.parse(storeValue);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
