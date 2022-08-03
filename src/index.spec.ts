import { LocalStorageExpireableArray, LocalStorageExpireableJSON } from './index';

describe("Index", () => {
    describe("LocalStorageExpireableArray", () => {
        let myCache: LocalStorageExpireableArray;
        const KEY = 'myCache';
        beforeEach(() => {
            // to fully reset the state between tests, clear the storage
            localStorage.clear();
            // and reset all mocks
            jest.clearAllMocks();
            myCache = new LocalStorageExpireableArray(KEY);
        });

        it("inits with no values", () => {
            expect(myCache.hasValues()).toBe(false);
        });

        it("'set' stores values  correctly", () => {
            const VALUE = ['someValue'];
            myCache.set(VALUE);
            expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, JSON.stringify(VALUE));
            expect(localStorage.__STORE__[KEY]).toBe(JSON.stringify(VALUE));
        });
        it("expiry is false by default", () => {
            expect(myCache.isExpired()).toBe(false);
        });
        
        it("expiry number supplied results in more storage items", () => {
            const VALUE = ['someValue'];
            myCache = new LocalStorageExpireableArray(KEY, 1);
            myCache.set(VALUE)
            expect(localStorage.setItem).toHaveBeenCalledTimes(2);
            expect(localStorage.setItem).toHaveBeenNthCalledWith(1, `${KEY}-expiry`, localStorage.__STORE__[`${KEY}-expiry`]);
            expect(localStorage.__STORE__[`${KEY}-expiry`]).toBeTruthy();
            expect(myCache.isExpired()).toBe(false);
        });
    });
    
    describe("LocalStorageExpireableJSON", () => {
        let myCache: LocalStorageExpireableJSON;
        const KEY = 'jsonCache';
        beforeEach(() => {
            // to fully reset the state between tests, clear the storage
            localStorage.clear();
            // and reset all mocks
            jest.clearAllMocks();
            myCache = new LocalStorageExpireableJSON(KEY);
        });

        it("inits with 'null' value", () => {
            expect(myCache.get()).toBe(null);
        });

        it("'set' stores VALUE correctly", () => {
            const VALUE = { some: 'value' };
            myCache.set(VALUE);
            expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, JSON.stringify(VALUE));
            expect(localStorage.__STORE__[KEY]).toBe(JSON.stringify(VALUE));
        });
    });
});