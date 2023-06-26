import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookmark } from 'src/app/models/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent {

  constructor(
    private router: Router,
    private bookmarkService: BookmarkService,
    private notificationService: NotificationService
  ) { }

  onFormSubmit(form: NgForm): void {
    const { name, url } = form.value;

    const bookmark = new Bookmark(name, url);
    this.bookmarkService.addBookmark(bookmark);
    this.router.navigateByUrl("/bookmarks");
    this.notificationService.show('Bookmark created!');
  }

}
