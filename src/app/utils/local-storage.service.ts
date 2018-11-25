import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    storage;
    session;
    private defaultKey = 'materialSt';
    constructor() {
        if (window.localStorage) {
            this.storage = window.localStorage;
        }
        if (window.sessionStorage) {
            this.session = window.sessionStorage;
        }
    }

    setStorage(key: string, val: any) {
        if (typeof val === 'string') {
            return this.storage.setItem(this.defaultKey + key, val);
        } else {
            return this.storage.setItem(this.defaultKey + key, JSON.stringify(val));
        }
    }

    getStorage(key: string) {
        return this.storage.getItem(this.defaultKey + key);
    }

    removeStorage(key: string) {
        return this.storage.removeItem(this.defaultKey + key);
    }

    clearStorage() {
        return this.storage.clear();
    }

    setSession(key: string, val: any) {
        if (typeof val === 'string') {
            return this.session.setItem(this.defaultKey + key, val);
        } else {
            return this.session.setItem(this.defaultKey + key, JSON.stringify(val));
        }
    }

    getSession(key: string) {
        return this.session.getItem(this.defaultKey + key);
    }

    removeSession(key: string) {
        return this.session.removeItem(this.defaultKey + key);
    }

    clearSession() {
        return this.storage.clear();
    }
}
