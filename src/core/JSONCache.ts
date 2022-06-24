import { ICache } from './ICache';
import { IStorage } from '../service/IStorage';
import { JSONLocalStorageService } from '../service/JSONLocalStorageService';

/**
 * Stores JSON data in local storage
 * @param {string} key - the key under which to save your data object
 */
export class JSONCache implements ICache {
  storageService: IStorage;

  constructor(private key: string, storageService?: IStorage) {
    this.storageService = storageService || new JSONLocalStorageService();
  }

  get() {
    return this.storageService.get(this.key);
  }

  set(value: any) {
    this.storageService.set(this.key, value);
  }

  remove() {
    this.storageService.remove(this.key);
  }
}
