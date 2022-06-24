import { ICache } from './ICache';
import { IStorage } from '../service/IStorage';
/**
 * Stores JSON data in local storage
 * @param {string} key - the key under which to save your data object
 */
export declare class JSONCache implements ICache {
    private key;
    storageService: IStorage;
    constructor(key: string, storageService?: IStorage);
    get(): any;
    set(value: any): void;
    remove(): void;
}
