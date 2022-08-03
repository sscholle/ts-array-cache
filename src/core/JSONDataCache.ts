import { IStorage } from "../service/IStorage";
import { IDataCache, JSONValue } from "./IDataCache";

export class JSONDataCache implements IDataCache<JSONValue> {
  constructor(private key: string, private service: IStorage) {}

  get(): JSONValue {
    const retVal = this.service.get(this.key);
    return retVal ? JSON.parse(retVal) : null;
  }
  
  set(value: JSONValue) {
    this.service.set(this.key, JSON.stringify(value));
  }

  remove(): void {
    this.service.remove(this.key);
  }
}
