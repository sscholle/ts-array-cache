import { IStorage } from "./IStorage";
export declare class JSONSessionStorageService implements IStorage {
    set(key: string, value: any): void;
    get(key: string): any;
    remove(key: string): void;
}
