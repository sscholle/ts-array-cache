"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONLocalStorageService = void 0;
class JSONLocalStorageService {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    get(key) {
        const storeValue = localStorage.getItem(key);
        return storeValue === null ? null : JSON.parse(storeValue);
    }
    remove(key) {
        localStorage.removeItem(key);
    }
}
exports.JSONLocalStorageService = JSONLocalStorageService;
