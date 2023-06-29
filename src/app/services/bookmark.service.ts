import { Injectable, OnDestroy } from '@angular/core';
import { Bookmark } from '../models/bookmark.model';
import { Subscription, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService implements OnDestroy {

  bookmarks: Bookmark[] = [];
  storageListenSub: Subscription;

  constructor() {
    this.loadState();

    this.storageListenSub = fromEvent(window, 'storage').subscribe((event: any) => {
      if (event.key === 'bookmarks') this.loadState();
    });
  }

  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe();
  }

  getBookmarks() {
    return this.bookmarks;
  }

  getBookmark(id: string): Bookmark | undefined {
    return this.bookmarks.find(b => b.id === id);
  }

  addBookmark(bookmark: Bookmark): void {
    this.bookmarks.push(bookmark);

    this.saveState();
  };

  updateBookmark(id: string, updatedFields: Partial<Bookmark>): void {
    const bookmark = this.getBookmark(id);

    if (bookmark)
      Object.assign(bookmark, updatedFields);

    this.saveState();
  };

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id);
    if (bookmarkIndex == -1) return;

    this.bookmarks.splice(bookmarkIndex, 1);

    this.saveState();
  }

  saveState(): void {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  };

  loadState(): void {
    try {
      const bookmarksInStorage = JSON.parse(localStorage.getItem('bookmarks')!, (key, value) => {
        if (key == 'url') return new URL(value);
        return value;
      });

      this.bookmarks.length = 0; // Clear the todos array (while keeping the reference)
      this.bookmarks.push(...bookmarksInStorage);
    } catch (e) {
      console.log('There was an error retrieving the bookmarks from localStorage');
      console.log(e);
    }
  };

}
