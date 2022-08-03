import { IStorage } from "../service/IStorage";

/**
 * Define a common Cache Interface with generic Value types
 */
export declare abstract class IDataCache<T> {
  constructor(key: string, service: IStorage);
  get: () => T;
  set: (value: T) => void;
}

export type JSONValue =
  | null
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

export type ArrayValue = null | Array<JSONValue>;
