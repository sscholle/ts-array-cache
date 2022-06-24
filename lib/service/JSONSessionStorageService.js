"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONSessionStorageService = void 0;
class JSONSessionStorageService {
    set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    get(key) {
        const storeValue = sessionStorage.getItem(key);
        return storeValue === null ? null : JSON.parse(storeValue);
    }
    remove(key) {
        return sessionStorage.removeItem(key);
    }
}
exports.JSONSessionStorageService = JSONSessionStorageService;
