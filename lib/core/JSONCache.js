"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONCache = void 0;
const JSONLocalStorageService_1 = require("../service/JSONLocalStorageService");
/**
 * Stores JSON data in local storage
 * @param {string} key - the key under which to save your data object
 */
class JSONCache {
    constructor(key, storageService) {
        this.key = key;
        this.storageService = storageService || new JSONLocalStorageService_1.JSONLocalStorageService();
    }
    get() {
        return this.storageService.get(this.key);
    }
    set(value) {
        this.storageService.set(this.key, value);
    }
    remove() {
        this.storageService.remove(this.key);
    }
}
exports.JSONCache = JSONCache;
