import { IStorage } from "./IStorage";

export class JSONSessionStorageService implements IStorage {
  public set (key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  
  public get (key: string) {
    const storeValue = sessionStorage.getItem(key);
    return storeValue === null ? null : JSON.parse(storeValue);
  }

  public remove(key: string) {
    return sessionStorage.removeItem(key);
  }
}