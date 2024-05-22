import { Injectable, inject } from '@angular/core';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly storageService: StorageService = inject(StorageService);

  private readonly KEY_STORAGE = 'favorites';

  private _favorites?: Array<number>;

  constructor() {}

  get favorites(): Array<number> {
    if (!this._favorites) {
      const storedFavorites = this.storageService.getLocalStorageItem(this.KEY_STORAGE);
      this._favorites = storedFavorites ? (JSON.parse(storedFavorites) as Array<number>) : [];
    }
    return this._favorites;
  }

  set favorites(favorites: Array<number>) {
    this._favorites = favorites;
    this.storageService.setLocalStorageItem(this.KEY_STORAGE, JSON.stringify(favorites));
  }

  toggleFavorite(id: number): void {
    if (this.contains(id)) {
      this.removeFavorite(id);
    } else {
      this.addFavorite(id);
    }
  }

  private addFavorite(id: number): void {
    this.favorites = [...this.favorites, id];
  }

  private removeFavorite(id: number): void {
    this.favorites = this.favorites.filter(item => item !== id);
  }

  contains(id: number): boolean {
    return this.favorites.includes(id);
  }
}
