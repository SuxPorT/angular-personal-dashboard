import { Component, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/models/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrls: ['./manage-bookmarks.component.scss']
})
export class ManageBookmarksComponent implements OnInit {

  bookmarks: Bookmark[] = [];

  constructor(private bookmarService: BookmarkService) { }

  ngOnInit(): void {
    this.bookmarks = this.bookmarService.getBookmarks();
  }

}
