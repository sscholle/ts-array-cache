export type StorageValues = string | null;

export interface IStorage {
    get: (key: string) => StorageValues,
    set: (key: string, value: StorageValues) => void,
    remove: (key: string) => void
}
