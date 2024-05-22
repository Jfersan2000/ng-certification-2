import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  setLocalStorageItem(key: string, value: string): void {
    return localStorage.setItem(key, value);
  }

  getLocalStorageItem(key: string): string | null {
    return localStorage.getItem(key);
  }
}
