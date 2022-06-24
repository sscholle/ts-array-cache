import { IStorage } from "./IStorage";

export class JSONLocalStorageService implements IStorage {

  public set (key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  public get (key: string) {
    const storeValue = localStorage.getItem(key);
    return storeValue === null ? null : JSON.parse(storeValue);
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }
}