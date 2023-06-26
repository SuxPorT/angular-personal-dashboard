import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Bookmark } from 'src/app/models/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {

  bookmark!: Bookmark;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookmarkService: BookmarkService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const bookmarkId = paramMap.get("id")!;

      this.bookmark = this.bookmarkService.getBookmark(bookmarkId)!;
    });
  }

  onFormSubmit(form: NgForm): void {
    const { name, url } = form.value;
    this.bookmarkService.updateBookmark(this.bookmark.id, {
      name,
      url: new URL(url)
    });
  }

  delete(): void {
    this.bookmarkService.deleteBookmark(this.bookmark.id);
    this.router.navigate(["../"], { relativeTo: this.route });
  }

}
