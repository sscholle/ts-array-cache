export interface ICache {
    get: () => any;
    set: (value: any) => void;
    remove: () => void; 
}